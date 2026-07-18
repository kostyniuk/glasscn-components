"use client";

import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "motion/react";

import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

export type GlassTourStep = {
  /** CSS selector (document.querySelector) or element getter. */
  target: string | (() => HTMLElement | null);
  title?: React.ReactNode;
  content?: React.ReactNode;
  /** Preferred card side relative to the cutout. "auto" picks the side with most room. */
  placement?: "top" | "bottom" | "left" | "right" | "auto";
  /** Extra px of breathing room around the target's rect. */
  padding?: number;
  /** Cutout corner radius in px; "auto" = target's computed border-top-left-radius + padding, min 12. */
  radius?: number | "auto";
};

export type GlassTourProps = {
  steps: GlassTourStep[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Optional controlled step index. */
  step?: number;
  onStepChange?: (index: number) => void;
  /** Called when the user clicks Next on the last step (after the tour closes). */
  onFinish?: () => void;
  /** Scrim backdrop blur in px. */
  blur?: number;
  /** Lens edge refraction strength (LiquidGlass `refraction`). */
  refraction?: number;
  /** Advance to next step when the user clicks inside the cutout. */
  advanceOnTargetClick?: boolean;
  labels?: { back?: string; next?: string; skip?: string; finish?: string };
};

type Rect = { x: number; y: number; width: number; height: number };

const CARD_WIDTH_ESTIMATE = 320;
const CARD_HEIGHT_ESTIMATE = 180;
const VIEWPORT_MARGIN = 16;
const CARD_OFFSET = 16;
const MIN_RADIUS = 12;

const TRAVEL_SPRING = { type: "spring" as const, stiffness: 380, damping: 38 };

function resolveTarget(target: GlassTourStep["target"]): HTMLElement | null {
  if (typeof target === "function") return target();
  if (typeof document === "undefined") return null;
  return document.querySelector<HTMLElement>(target);
}

function measureRect(el: HTMLElement, padding: number, radius: GlassTourStep["radius"]): { rect: Rect; radius: number } {
  const box = el.getBoundingClientRect();
  const rect: Rect = {
    x: box.left - padding,
    y: box.top - padding,
    width: box.width + padding * 2,
    height: box.height + padding * 2,
  };
  if (typeof radius === "number") {
    return { rect, radius };
  }
  const parsed = Number.parseFloat(getComputedStyle(el).borderTopLeftRadius);
  const auto = (Number.isFinite(parsed) ? parsed : 0) + padding;
  return { rect, radius: Math.max(MIN_RADIUS, auto) };
}

// SVG rounded-rect punched into the scrim's mask. Regenerated only when
// (w,h,r) change to an integer-rounded value — see the mask-position update
// below, which runs every frame but is cheap (no new data URI, no repaint of
// the mask image itself, just its offset).
function roundedRectMaskUri(w: number, h: number, r: number) {
  const width = Math.max(1, Math.round(w));
  const height = Math.max(1, Math.round(h));
  const radius = Math.max(0, Math.round(r));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="black"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function focusablesIn(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => el.offsetParent !== null);
}

type Placement = "top" | "bottom" | "left" | "right";

function resolvePlacement(preferred: GlassTourStep["placement"], rect: Rect, viewportW: number, viewportH: number): Placement {
  if (preferred && preferred !== "auto") return preferred;

  const room = {
    bottom: viewportH - (rect.y + rect.height),
    top: rect.y,
    right: viewportW - (rect.x + rect.width),
    left: rect.x,
  };

  const order: Placement[] = ["bottom", "top", "right", "left"];
  const fits: Placement[] = order.filter((side) => room[side] >= CARD_HEIGHT_ESTIMATE || side === "left" || side === "right");

  const withEnoughRoom = order.filter((side) => {
    const need = side === "top" || side === "bottom" ? CARD_HEIGHT_ESTIMATE : CARD_WIDTH_ESTIMATE;
    return room[side] >= need + CARD_OFFSET;
  });
  if (withEnoughRoom.length > 0) return withEnoughRoom[0];
  if (fits.length > 0) return fits[0];

  return order.reduce((best, side) => (room[side] > room[best] ? side : best), order[0]);
}

function cardPosition(placement: Placement, rect: Rect, viewportW: number, viewportH: number) {
  let left: number;
  let top: number;

  switch (placement) {
    case "bottom":
      left = rect.x + rect.width / 2 - CARD_WIDTH_ESTIMATE / 2;
      top = rect.y + rect.height + CARD_OFFSET;
      break;
    case "top":
      left = rect.x + rect.width / 2 - CARD_WIDTH_ESTIMATE / 2;
      top = rect.y - CARD_OFFSET - CARD_HEIGHT_ESTIMATE;
      break;
    case "right":
      left = rect.x + rect.width + CARD_OFFSET;
      top = rect.y + rect.height / 2 - CARD_HEIGHT_ESTIMATE / 2;
      break;
    case "left":
      left = rect.x - CARD_OFFSET - CARD_WIDTH_ESTIMATE;
      top = rect.y + rect.height / 2 - CARD_HEIGHT_ESTIMATE / 2;
      break;
  }

  left = Math.min(Math.max(left, VIEWPORT_MARGIN), viewportW - CARD_WIDTH_ESTIMATE - VIEWPORT_MARGIN);
  top = Math.min(Math.max(top, VIEWPORT_MARGIN), viewportH - CARD_HEIGHT_ESTIMATE - VIEWPORT_MARGIN);

  return { left, top };
}

export function GlassTour({
  steps,
  open,
  onOpenChange,
  step,
  onStepChange,
  onFinish,
  blur = 6,
  refraction = 0,
  advanceOnTargetClick = false,
  labels,
}: GlassTourProps) {
  const backLabel = labels?.back ?? "Back";
  const nextLabel = labels?.next ?? "Next";
  const skipLabel = labels?.skip ?? "Skip";
  const finishLabel = labels?.finish ?? "Done";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [internalStep, setInternalStep] = useState(0);
  const currentStep = step !== undefined ? step : internalStep;
  const stepCount = steps.length;
  const clampedStep = stepCount > 0 ? Math.max(0, Math.min(currentStep, stepCount - 1)) : 0;

  const setStep = useCallback(
    (index: number) => {
      if (step === undefined) setInternalStep(index);
      onStepChange?.(index);
    },
    [step, onStepChange],
  );

  const prefersReducedMotion = useReducedMotion();

  // Cutout rect as MotionValues — the scrim's mask is updated imperatively
  // from these on every frame so we never re-render React per frame.
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const cw = useMotionValue(0);
  const ch = useMotionValue(0);
  const [radius, setRadius] = useState(MIN_RADIUS);
  const radiusRef = useRef(MIN_RADIUS);
  radiusRef.current = radius;

  const scrimRef = useRef<HTMLDivElement | null>(null);
  const scrimOpacity = useMotionValue(0);
  const lastMaskKeyRef = useRef("");

  const [cardRect, setCardRect] = useState<Rect | null>(null);
  const [lensVisible, setLensVisible] = useState(false);
  const [placement, setPlacement] = useState<Placement>("bottom");
  const [cardPos, setCardPos] = useState({ left: 0, top: 0 });

  // Mirrors of lensVisible/placement for use inside remeasure(), which is
  // wired to scroll/resize listeners that are attached once per step (see
  // the travel effect) — reading React state directly there would close
  // over a stale value from the moment the listener was attached.
  const lensVisibleRef = useRef(false);
  lensVisibleRef.current = lensVisible;
  const placementRef = useRef<Placement>("bottom");
  placementRef.current = placement;

  const cardRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const activeTargetRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const travelTokenRef = useRef(0);
  // True while a step-to-step travel's springs are in flight. Listener-driven
  // remeasures MUST be suppressed during travel: jump()ing a MotionValue
  // cancels its active animation and the awaited animate() promise never
  // resolves, which would strand travel() before it can place the lens/card.
  // (ResizeObserver.observe() always fires once immediately, so without this
  // guard every travel is cancelled on its first frame.)
  const isTravelingRef = useRef(false);
  const hasEnteredRef = useRef(false);

  const currentStepData = stepCount > 0 ? steps[clampedStep] : undefined;

  // ---------------------------------------------------------------------
  // Imperative scrim mask update. Runs on every cx/cy/cw/ch/opacity change;
  // the SVG data-URI is only regenerated when the integer-rounded (w,h,r)
  // triple actually changes, mask-position is updated unconditionally
  // (cheap — it's a compositor-friendly offset, not a new image).
  // ---------------------------------------------------------------------
  const applyMask = useCallback(() => {
    const el = scrimRef.current;
    if (!el) return;
    const w = cw.get();
    const h = ch.get();
    const r = radiusRef.current;
    const maskKey = `${Math.round(w)}:${Math.round(h)}:${Math.round(r)}`;
    if (maskKey !== lastMaskKeyRef.current) {
      lastMaskKeyRef.current = maskKey;
      const uri = roundedRectMaskUri(w, h, r);
      el.style.setProperty("--glass-tour-hole", uri);
    }
    el.style.maskPosition = `0 0, ${cx.get()}px ${cy.get()}px`;
    el.style.setProperty("-webkit-mask-position", `0 0, ${cx.get()}px ${cy.get()}px`);
    el.style.maskSize = `100% 100%, ${Math.round(w)}px ${Math.round(h)}px`;
    el.style.setProperty("-webkit-mask-size", `100% 100%, ${Math.round(w)}px ${Math.round(h)}px`);
    el.style.opacity = String(scrimOpacity.get());
  }, [cx, cy, cw, ch, scrimOpacity]);

  useEffect(() => {
    const unsubs = [cx.on("change", applyMask), cy.on("change", applyMask), cw.on("change", applyMask), ch.on("change", applyMask), scrimOpacity.on("change", applyMask)];
    return () => unsubs.forEach((u) => u());
  }, [cx, cy, cw, ch, scrimOpacity, applyMask]);

  // The scrim now mounts on `open` alone (see the render below), so its ref
  // is attached before the entrance choreography's first cx/cy/cw/ch.jump()
  // fires a "change" event. Without this, the scrim would sit for one frame
  // with its seeded placeholder mask (see the style prop) instead of the
  // real cutout.
  useLayoutEffect(() => {
    if (open) applyMask();
  }, [open, applyMask]);

  // ---------------------------------------------------------------------
  // Target measurement + retargeting.
  // ---------------------------------------------------------------------
  const remeasure = useCallback(
    (jumpInstead: boolean) => {
      if (isTravelingRef.current) return;
      const el = activeTargetRef.current;
      if (!el || !currentStepData) return;
      const { rect, radius: r } = measureRect(el, currentStepData.padding ?? 10, currentStepData.radius ?? "auto");
      setRadius(r);
      if (jumpInstead) {
        cx.jump(rect.x);
        cy.jump(rect.y);
        cw.jump(rect.width);
        ch.jump(rect.height);
        // Re-anchor the lens + card to the moved hole so they don't detach
        // from it on scroll/resize. Only once the step's travel spring has
        // settled — mid-travel remeasures shouldn't fight the step-to-step
        // choreography in the travel() effect below.
        if (lensVisibleRef.current) {
          setCardRect(rect);
          setCardPos(cardPosition(placementRef.current, rect, window.innerWidth, window.innerHeight));
        }
      }
      return rect;
    },
    [currentStepData, cx, cy, cw, ch],
  );

  const scheduleRemeasure = useCallback(
    (jumpInstead: boolean) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        remeasure(jumpInstead);
      });
    },
    [remeasure],
  );

  // Advance to the next resolvable step, or close if none resolve.
  const goToStep = useCallback(
    (index: number, direction: 1 | -1) => {
      let i = index;
      while (i >= 0 && i < stepCount) {
        const el = resolveTarget(steps[i].target);
        if (el) {
          setStep(i);
          return;
        }
        console.warn(`GlassTour: target for step ${i} could not be resolved; skipping.`);
        i += direction;
      }
      onOpenChange(false);
    },
    [steps, stepCount, setStep, onOpenChange],
  );

  const handleNext = useCallback(() => {
    if (clampedStep >= stepCount - 1) {
      onOpenChange(false);
      onFinish?.();
      return;
    }
    goToStep(clampedStep + 1, 1);
  }, [clampedStep, stepCount, onOpenChange, onFinish, goToStep]);

  const handleBack = useCallback(() => {
    if (clampedStep <= 0) return;
    goToStep(clampedStep - 1, -1);
  }, [clampedStep, goToStep]);

  const handleSkip = useCallback(() => {
    onOpenChange(false);
  }, [onOpenChange]);

  // ---------------------------------------------------------------------
  // Per-step choreography: resolve target, scroll into view if needed,
  // travel the cutout springs, then fade the lens back in once settled.
  // ---------------------------------------------------------------------
  useEffect(() => {
    if (!open || !mounted || !currentStepData) return;

    const token = ++travelTokenRef.current;
    const el = resolveTarget(currentStepData.target);
    if (!el) {
      console.warn("GlassTour: step target not found; skipping.");
      goToStep(clampedStep + 1, 1);
      return;
    }
    activeTargetRef.current = el;

    const viewportRect = { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth };
    const box = el.getBoundingClientRect();
    const substantiallyOutside =
      box.bottom < viewportRect.top + 40 ||
      box.top > viewportRect.bottom - 40 ||
      box.right < viewportRect.left + 40 ||
      box.left > viewportRect.right - 40;

    if (substantiallyOutside) {
      // Instant on purpose: a smooth scroll would still be in flight when the
      // rect is measured below (aiming the travel at a stale position), and
      // listener-driven corrections are suppressed while traveling.
      el.scrollIntoView({ block: "center", behavior: "auto" });
    }

    setLensVisible(false);

    async function travel() {
      isTravelingRef.current = true;
      const { rect, radius: r } = measureRect(el as HTMLElement, currentStepData!.padding ?? 10, currentStepData!.radius ?? "auto");
      setRadius(r);

      const isEntrance = !hasEnteredRef.current;
      hasEnteredRef.current = true;

      if (isEntrance) {
        // Entrance choreography: start as a huge centered rect and fade the
        // scrim in while the cutout springs down onto the first target —
        // the "lens focusing" moment.
        const overshootW = window.innerWidth * 1.2;
        const overshootH = window.innerHeight * 1.2;
        cx.jump(window.innerWidth / 2 - overshootW / 2);
        cy.jump(window.innerHeight / 2 - overshootH / 2);
        cw.jump(overshootW);
        ch.jump(overshootH);
        setRadius(24);
        scrimOpacity.jump(0);
        animate(scrimOpacity, 1, { duration: prefersReducedMotion ? 0 : 0.2 });
      }

      if (prefersReducedMotion) {
        cx.jump(rect.x);
        cy.jump(rect.y);
        cw.jump(rect.width);
        ch.jump(rect.height);
        setRadius(r);
      } else {
        await Promise.all([
          animate(cx, rect.x, TRAVEL_SPRING),
          animate(cy, rect.y, TRAVEL_SPRING),
          animate(cw, rect.width, TRAVEL_SPRING),
          animate(ch, rect.height, TRAVEL_SPRING),
        ]);
      }

      if (travelTokenRef.current !== token) return;
      isTravelingRef.current = false;

      const settledRect = { x: cx.get(), y: cy.get(), width: cw.get(), height: ch.get() };
      setCardRect(settledRect);
      const side = resolvePlacement(currentStepData!.placement, settledRect, window.innerWidth, window.innerHeight);
      setPlacement(side);
      setCardPos(cardPosition(side, settledRect, window.innerWidth, window.innerHeight));
      setLensVisible(true);
    }

    void travel();

    // Keep tracking during scroll/resize/layout shifts: jump (not spring)
    // so the hole stays glued 1:1 to the target instead of lagging behind.
    const onScrollOrResize = () => scheduleRemeasure(true);
    window.addEventListener("scroll", onScrollOrResize, { capture: true, passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    const observer = new ResizeObserver(() => scheduleRemeasure(true));
    observer.observe(el);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mounted, clampedStep]);

  // Reset entrance/travel state whenever the tour closes so the next open
  // re-runs the focusing choreography.
  useEffect(() => {
    if (!open) {
      hasEnteredRef.current = false;
      setLensVisible(false);
      setCardRect(null);
      // Uncontrolled tours restart from the beginning on the next open; a
      // controlled `step` is the consumer's to reset.
      setInternalStep(0);
      // Reset now, not at entrance time: on reopen the mount-time applyMask
      // runs before paint and would flash the previous session's opacity for
      // one frame before the entrance fade-in takes over.
      scrimOpacity.jump(0);
    }
  }, [open, scrimOpacity]);

  // ---------------------------------------------------------------------
  // Keyboard: arrows navigate, Escape closes.
  // ---------------------------------------------------------------------
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onOpenChange(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handleBack();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange, handleNext, handleBack]);

  // ---------------------------------------------------------------------
  // Focus management: focus the card on open/step change, trap Tab, and
  // restore focus to whatever was focused before the tour opened.
  // ---------------------------------------------------------------------
  useEffect(() => {
    if (!open) return;
    if (!previouslyFocused.current) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
    }
    // This cleanup only ever runs when `open` transitions true → false (or
    // on unmount while open) — the effect body above bails out before
    // registering a cleanup for renders where `open` is already false. So
    // the restore must be unconditional here; re-checking `open` would
    // always read the true value closed over from this render.
    return () => {
      previouslyFocused.current?.focus?.();
      previouslyFocused.current = null;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !cardRect) return;
    cardRef.current?.focus();
  }, [open, cardRect, clampedStep]);

  const handleCardKeyDown = useCallback((e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const container = cardRef.current;
    if (!container) return;
    const focusables = focusablesIn(container);
    if (focusables.length === 0) {
      e.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  // Scrim click handling. NOTE: clicks are intentionally NOT forwarded to
  // the underlying target element — the hole is purely visual, the scrim
  // still owns pointer events everywhere (including over the cutout).
  const handleScrimClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!advanceOnTargetClick) return;
      const rect = { x: cx.get(), y: cy.get(), width: cw.get(), height: ch.get() };
      const inside =
        e.clientX >= rect.x && e.clientX <= rect.x + rect.width && e.clientY >= rect.y && e.clientY <= rect.y + rect.height;
      if (inside) handleNext();
    },
    [advanceOnTargetClick, cx, cy, cw, ch, handleNext],
  );

  const cardStyle = useMemo<CSSProperties>(() => ({ left: cardPos.left, top: cardPos.top, position: "fixed" }), [cardPos]);

  if (!mounted || stepCount === 0) return null;

  return createPortal(
    <AnimatePresence>
      {/* Gated on `open` alone — NOT `cardRect`. cardRect is only known once
          the first travel() settles, but the scrim (and its ref) must exist
          from the very first entrance frame or applyMask()'s writes have
          nowhere to land and the hole never appears. */}
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
        >
          {/* Scrim: hole-punched blur layer. Style props below are seeded
              once (opacity 0 + a benign placeholder hole so the two-layer
              mask list is valid before the first write); per-frame updates
              happen imperatively via applyMask(), which also runs
              synchronously on mount via the useLayoutEffect above. */}
          <div
            ref={scrimRef}
            onClick={handleScrimClick}
            className="absolute inset-0 bg-black/15 dark:bg-black/40"
            style={
              {
                opacity: 0,
                backdropFilter: `blur(${blur}px) saturate(1.15)`,
                WebkitBackdropFilter: `blur(${blur}px) saturate(1.15)`,
                ["--glass-tour-hole" as string]: "linear-gradient(transparent, transparent)",
                maskImage: "linear-gradient(#000 0 0), var(--glass-tour-hole)",
                WebkitMaskImage: "linear-gradient(#000 0 0), var(--glass-tour-hole)",
                maskRepeat: "no-repeat, no-repeat",
                WebkitMaskRepeat: "no-repeat, no-repeat",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                pointerEvents: "auto",
              } as CSSProperties
            }
          />

          {/* Lens: refractive ring on the cutout. Only mounted once the
              cutout springs are at rest for the first time — see the fade
              choreography in the travel() effect above; continuously
              resizing LiquidGlass would thrash its displacement-map cache
              (see liquid-glass.tsx). */}
          {cardRect && (
            <motion.div
              className="pointer-events-none absolute"
              style={{ left: cardRect.x, top: cardRect.y, width: cardRect.width, height: cardRect.height }}
              initial={false}
              animate={{ opacity: lensVisible ? 1 : 0 }}
              transition={{ duration: lensVisible ? 0.18 : 0.12 }}
            >
              <LiquidGlass
                blur={0}
                saturation={1}
                refraction={refraction}
                // Confine the refractive band to the padding ring: LiquidGlass's
                // bezel is a fraction of the half-min-dimension, and its
                // displacement tapers to zero at the band's inner end — sizing
                // the band to the step's padding keeps the highlighted element
                // itself completely undistorted.
                bezel={Math.min(
                  1,
                  Math.max(
                    0.04,
                    (currentStepData?.padding ?? 10) / (Math.min(cardRect.width, cardRect.height) / 2),
                  ),
                )}
                className="size-full bg-transparent"
                style={{ borderRadius: radius, ["--liquid-glass-rim-width" as string]: "1px" }}
              />
            </motion.div>
          )}

          {/* Step card — appears once the cutout's first settle tells us
              where to anchor it. */}
          {cardRect && (
            <motion.div
              ref={cardRef}
              role="dialog"
              aria-modal="true"
              aria-label={typeof currentStepData?.title === "string" ? currentStepData.title : "Product tour"}
              tabIndex={-1}
              onKeyDown={handleCardKeyDown}
              style={cardStyle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, left: cardPos.left, top: cardPos.top }}
              exit={{ opacity: 0, y: 8 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { opacity: { duration: 0.18 }, y: { duration: 0.18 }, left: TRAVEL_SPRING, top: TRAVEL_SPRING }
              }
              className={cn(
                glassVariantStyles.frosted,
                "rounded-2xl p-4 w-[320px] max-w-[calc(100vw-32px)] outline-none",
              )}
              data-placement={placement}
            >
              <p className="text-xs text-muted-foreground">
                Step {clampedStep + 1} of {stepCount}
              </p>
              {currentStepData?.title ? <h2 className="mt-1 font-medium">{currentStepData.title}</h2> : null}
              {currentStepData?.content ? (
                <div className="mt-1 text-sm text-muted-foreground">{currentStepData.content}</div>
              ) : null}

              <div className="mt-3 flex items-center justify-center gap-1.5" aria-hidden>
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === clampedStep ? "w-4 bg-foreground/70" : "w-1.5 bg-foreground/25",
                    )}
                  />
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleSkip}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {skipLabel}
                </button>
                <div className="flex items-center gap-2">
                  <GlassButton size="sm" variant="ghost" onClick={handleBack} disabled={clampedStep === 0}>
                    {backLabel}
                  </GlassButton>
                  <GlassButton size="sm" onClick={handleNext}>
                    {clampedStep === stepCount - 1 ? finishLabel : nextLabel}
                  </GlassButton>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
