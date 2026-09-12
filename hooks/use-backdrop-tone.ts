"use client";

import { usePathname } from "next/navigation";
import { type RefObject, useEffect, useState } from "react";

export type BackdropTone = "light" | "dark";

const TONE_ATTRIBUTE = "data-backdrop-tone";

// The overlay has one text color, so a surface only earns the flip if it covers
// most of it. Below this, flipping would fix one end and break the other.
const MIN_COVERAGE = 0.7;

/**
 * Reports the tone of the surface currently scrolling beneath a fixed overlay.
 *
 * A fixed overlay cannot ask the browser what is painted behind it. CSS
 * `contrast-color()` only inspects a color value you hand it, never the
 * backdrop, and sampling real pixels means a canvas readback every frame. So
 * surfaces whose contrast would break the overlay's text opt in instead:
 *
 *     <main data-backdrop-tone="dark"> ... </main>
 *
 * Tag surfaces that are wide enough to sit under the whole overlay and opaque
 * enough to dominate it. Returns `null` when no such surface is underneath,
 * which callers should read as "fall back to the ambient site theme".
 *
 * Coverage is measured from rects rather than an IntersectionObserver:
 * observer thresholds are a fraction of the *target*, so a full-height section
 * would never report how much of a 48px pill it covers.
 */
export function useBackdropTone(ref: RefObject<HTMLElement | null>): BackdropTone | null {
  const [tone, setTone] = useState<BackdropTone | null>(null);
  // The App Router keeps the layout mounted across navigations, so the set of
  // tagged elements changes under us without the effect otherwise re-running.
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(`[${TONE_ATTRIBUTE}]`));
    if (targets.length === 0) {
      setTone(null);
      return;
    }

    let frame = 0;

    function measure() {
      frame = 0;

      const overlay = ref.current;
      if (!overlay) return;

      const box = overlay.getBoundingClientRect();
      const overlayArea = box.width * box.height;
      if (overlayArea === 0) return;

      // Later elements in document order paint over earlier ones, so the last
      // qualifying surface is the one actually behind the overlay.
      let active: HTMLElement | undefined;
      for (const target of targets) {
        const rect = target.getBoundingClientRect();
        const overlapWidth = Math.min(box.right, rect.right) - Math.max(box.left, rect.left);
        const overlapHeight = Math.min(box.bottom, rect.bottom) - Math.max(box.top, rect.top);
        if (overlapWidth <= 0 || overlapHeight <= 0) continue;
        if ((overlapWidth * overlapHeight) / overlayArea >= MIN_COVERAGE) active = target;
      }

      const value = active?.getAttribute(TONE_ATTRIBUTE);
      setTone(value === "dark" || value === "light" ? value : null);
    }

    function schedule() {
      frame ||= requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref, pathname]);

  return tone;
}
