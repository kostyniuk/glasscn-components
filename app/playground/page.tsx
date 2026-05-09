"use client";

import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RotateCcw, Sparkles } from "lucide-react";

import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type LensVars = CSSProperties & {
  "--art-width"?: string;
  "--art-height"?: string;
  "--copy-left"?: string;
  "--copy-top"?: string;
  "--origin-x"?: string;
  "--origin-y"?: string;
  "--bend-x"?: string;
  "--bend-y"?: string;
};

type Point = {
  x: number;
  y: number;
};

export default function PlaygroundPage() {
  const artRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const pointerOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });

  const [refraction, setRefraction] = useState(15);
  const [blurLevel, setBlurLevel] = useState(2);
  const [lensVars, setLensVars] = useState<LensVars>({});
  const [lensPosition, setLensPosition] = useState<Point>({ x: 0, y: 0 });

  const syncLensMetrics = useCallback(() => {
    const art = artRef.current;
    const glass = glassRef.current;
    if (!art || !glass) return;

    const artRect = art.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const cx = glassRect.left + glassRect.width / 2 - artRect.left;
    const cy = glassRect.top + glassRect.height / 2 - artRect.top;
    const px = (cx / artRect.width - 0.5) * 2;
    const py = (cy / artRect.height - 0.5) * 2;

    setLensVars({
      "--art-width": `${artRect.width}px`,
      "--art-height": `${artRect.height}px`,
      "--copy-left": `${artRect.left - glassRect.left}px`,
      "--copy-top": `${artRect.top - glassRect.top}px`,
      "--origin-x": `${cx}px`,
      "--origin-y": `${cy}px`,
      "--bend-x": `${px * -18}px`,
      "--bend-y": `${py * -12}px`,
    });
  }, []);

  const placeLens = useCallback((x: number, y: number) => {
    const art = artRef.current;
    const glass = glassRef.current;
    if (!art || !glass) return;

    const artRect = art.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const maxX = artRect.width - glassRect.width;
    const maxY = artRect.height - glassRect.height;

    targetRef.current = {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  }, []);

  const resetLens = useCallback(() => {
    const art = artRef.current;
    const glass = glassRef.current;
    if (!art || !glass) return;

    const artRect = art.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const start = {
      x: artRect.width * 0.5 - glassRect.width * 0.5,
      y: artRect.height * 0.47 - glassRect.height * 0.5,
    };

    currentRef.current = start;
    targetRef.current = start;
    setLensPosition(start);
    syncLensMetrics();
  }, [syncLensMetrics]);

  useEffect(() => {
    resetLens();
    window.addEventListener("resize", resetLens);

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const next = {
        x: current.x + (target.x - current.x) * 0.24,
        y: current.y + (target.y - current.y) * 0.24,
      };

      currentRef.current = next;
      setLensPosition(next);
      syncLensMetrics();
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resetLens);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [resetLens, syncLensMetrics]);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const art = artRef.current;
    const glass = glassRef.current;
    if (!art || !glass) return;

    const artRect = art.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();

    draggingRef.current = true;
    pointerOffsetRef.current = {
      x: event.clientX - glassRect.left,
      y: event.clientY - glassRect.top,
    };

    glass.setPointerCapture(event.pointerId);
    placeLens(
      event.clientX - artRect.left - pointerOffsetRef.current.x,
      event.clientY - artRect.top - pointerOffsetRef.current.y,
    );
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const art = artRef.current;
    if (!art) return;

    const artRect = art.getBoundingClientRect();
    placeLens(
      event.clientX - artRect.left - pointerOffsetRef.current.x,
      event.clientY - artRect.top - pointerOffsetRef.current.y,
    );
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const glass = glassRef.current;
    draggingRef.current = false;
    if (glass?.hasPointerCapture(event.pointerId)) {
      glass.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <main className="min-h-svh overflow-hidden bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.05),transparent_28%),linear-gradient(135deg,#070a12_0%,#111725_48%,#05070c_100%)] p-4 text-white md:p-18">
      <section
        ref={artRef}
        className="relative isolate mx-auto h-[min(88vh,802px)] w-[min(96vw,1360px)] overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_60%_75%,rgba(41,133,255,0.65),transparent_22%),radial-gradient(circle_at_24%_35%,rgba(255,46,129,0.7),transparent_33%),linear-gradient(130deg,#1a0b24_0%,#0b1930_45%,#06111e_100%)] shadow-[0_34px_100px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] max-md:h-[78vh] max-md:rounded-2xl"
      >
        <SceneRibbons />
        <div className="absolute inset-0 z-[3] bg-[repeating-radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18)_0_1px,transparent_1px_3px),repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_4px)] opacity-[0.18] mix-blend-soft-light" />

        <LiquidGlass
          ref={glassRef}
          blur={blurLevel}
          refraction={refraction}
          className="absolute z-[8] h-[clamp(112px,15vw,174px)] w-[clamp(300px,44vw,530px)] cursor-grab touch-none active:cursor-grabbing max-md:h-[116px] max-md:w-[min(78vw,320px)]"
          style={{
            ...lensVars,
            left: `${lensPosition.x}px`,
            top: `${lensPosition.y}px`,
          }}
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-label="Draggable liquid glass pill"
        >
          <div
            aria-hidden
            className="absolute h-[var(--art-height)] w-[var(--art-width)] origin-[var(--origin-x)_var(--origin-y)] scale-[0.92] opacity-[0.43] contrast-[1.12] saturate-[1.15]"
            style={{
              left: "var(--copy-left)",
              top: "var(--copy-top)",
              transform: "scale(0.92) translate(var(--bend-x, 0), var(--bend-y, 0))",
            }}
          >
            <SceneRibbons />
          </div>
        </LiquidGlass>

        <div className="absolute inset-x-5 bottom-5 z-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3 text-xs leading-none tracking-[0.08em] text-white/75 uppercase">
            <Sparkles className="size-4 text-cyan-200" />
            <span>SVG displacement map</span>
          </div>

          <div className="grid w-full max-w-md gap-4 rounded-lg border border-white/12 bg-black/24 p-4 shadow-2xl backdrop-blur-xl md:min-w-96">
            <SliderField
              label="Refraction"
              valueLabel={String(refraction)}
              value={refraction}
              min={0}
              max={120}
              step={1}
              onChange={setRefraction}
              action={
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="size-8 border-white/15 bg-white/10 text-white hover:bg-white/20"
                  onClick={() => setRefraction(15)}
                  aria-label="Reset refraction"
                >
                  <RotateCcw className="size-4" />
                </Button>
              }
            />

            <SliderField
              label="Blur"
              valueLabel={`${blurLevel.toFixed(1)}px`}
              value={blurLevel}
              min={0}
              max={12}
              step={0.1}
              onChange={setBlurLevel}
              action={
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="size-8 border-white/15 bg-white/10 text-white hover:bg-white/20"
                  onClick={() => setBlurLevel(2)}
                  aria-label="Reset blur"
                >
                  <RotateCcw className="size-4" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SliderField({
  label,
  valueLabel,
  value,
  min,
  max,
  step,
  onChange,
  action,
}: {
  label: string;
  valueLabel: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  action?: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-xs">
        <span className="font-medium tracking-[0.08em] text-white/80 uppercase">{label}</span>
        <span className="font-mono text-cyan-100">{valueLabel}</span>
      </div>
      <div className="flex items-center gap-3">
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(nextValue) =>
            onChange(Array.isArray(nextValue) ? (nextValue[0] ?? value) : nextValue)
          }
          aria-label={`${label} level`}
        />
        {action}
      </div>
    </div>
  );
}

function SceneRibbons() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-30%] top-[21%] h-[38%] w-[94%] origin-center -rotate-[22deg] rounded-full bg-[radial-gradient(circle_at_17%_52%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(100deg,#ff416f_0%,#ef2d82_35%,#4fb4ff_72%,#172b69_100%)] shadow-[inset_-16px_-24px_40px_rgba(8,3,16,0.48)] saturate-110" />
      <div className="pointer-events-none absolute left-[39%] top-[14%] h-[30%] w-[71%] origin-center rotate-[13deg] rounded-full bg-[radial-gradient(circle_at_30%_80%,rgba(26,96,211,0.65),transparent_28%),linear-gradient(100deg,#020711_0%,#08182c_56%,#143763_100%)] shadow-[inset_0_9px_15px_rgba(82,150,255,0.2),inset_0_-18px_28px_rgba(0,0,0,0.45)] saturate-110" />
      <div className="pointer-events-none absolute bottom-[-8%] left-[-18%] h-[38%] w-[92%] origin-center -rotate-[18deg] rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(255,77,130,0.82),transparent_24%),linear-gradient(95deg,#244faf_0%,#4fb4ff_26%,#d93579_57%,#161b3b_100%)] shadow-[inset_-15px_22px_36px_rgba(255,255,255,0.08)] saturate-110" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-5%] h-[96%] w-[46%] origin-center rotate-[28deg] rounded-full bg-[radial-gradient(circle_at_50%_34%,rgba(37,113,255,0.82),transparent_28%),linear-gradient(115deg,#08234b_0%,#162c68_53%,#4f7ed8_100%)] shadow-[inset_11px_0_18px_rgba(107,164,255,0.25),inset_-24px_-12px_36px_rgba(0,0,0,0.52)] saturate-110" />
    </>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
