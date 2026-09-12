"use client";

import { RotateCcw } from "lucide-react";
import { type PointerEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { Slider } from "@/components/ui/slider";

const STAGE_BACKGROUND = "/preview-bg-d-5.jpg";

type Point = { x: number; y: number };

export default function PlaygroundPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const pointerOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });

  const [refraction, setRefraction] = useState(15);
  const [blurLevel, setBlurLevel] = useState(2);
  const [lensPosition, setLensPosition] = useState<Point | null>(null);

  const placeLens = useCallback((x: number, y: number) => {
    const stage = stageRef.current;
    const glass = glassRef.current;
    if (!stage || !glass) return;

    const stageRect = stage.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const maxX = stageRect.width - glassRect.width;
    const maxY = stageRect.height - glassRect.height;

    targetRef.current = { x: clamp(x, 0, maxX), y: clamp(y, 0, maxY) };
  }, []);

  const resetLens = useCallback(() => {
    const stage = stageRef.current;
    const glass = glassRef.current;
    if (!stage || !glass) return;

    const stageRect = stage.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const start = {
      x: stageRect.width * 0.5 - glassRect.width * 0.5,
      y: stageRect.height * 0.47 - glassRect.height * 0.5,
    };

    currentRef.current = start;
    targetRef.current = start;
    setLensPosition(start);
  }, []);

  useEffect(() => {
    resetLens();
    window.addEventListener("resize", resetLens);

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const next = { x: current.x + (target.x - current.x) * 0.24, y: current.y + (target.y - current.y) * 0.24 };

      currentRef.current = next;
      setLensPosition(next);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resetLens);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [resetLens]);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    const glass = glassRef.current;
    if (!stage || !glass) return;

    const stageRect = stage.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();

    draggingRef.current = true;
    pointerOffsetRef.current = { x: event.clientX - glassRect.left, y: event.clientY - glassRect.top };

    glass.setPointerCapture(event.pointerId);
    placeLens(
      event.clientX - stageRect.left - pointerOffsetRef.current.x,
      event.clientY - stageRect.top - pointerOffsetRef.current.y,
    );
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const stage = stageRef.current;
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    placeLens(
      event.clientX - stageRect.left - pointerOffsetRef.current.x,
      event.clientY - stageRect.top - pointerOffsetRef.current.y,
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
    <main className="relative flex min-h-svh justify-center px-6 pb-16">
      <div className="w-full max-w-5xl min-w-0 py-20">
        <GlassCard glassVariant="liquid-refract" surfaceClassName="mb-8 border-white/20 dark:border-white/10">
          <CardHeader className="space-y-3">
            <GlassBadge
              glassVariant="clear"
              className="w-fit px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase"
            >
              Playground
            </GlassBadge>
            <CardTitle className="text-3xl font-medium tracking-tight">Liquid Glass Playground</CardTitle>
            <p className="text-foreground/85 max-w-2xl text-base leading-7">
              Drag the pill across the wallpaper and tune its SVG displacement map. Refraction bends the backdrop at
              the bezel; blur softens whatever sits behind the glass.
            </p>
          </CardHeader>
        </GlassCard>

        <section
          ref={stageRef}
          className="relative isolate h-[min(55vh,480px)] overflow-hidden rounded-2xl border border-white/20 dark:border-white/10"
        >
          {/* Same wallpaper set the docs previews use, so refraction has real detail to bend. */}
          <img
            src={STAGE_BACKGROUND}
            alt=""
            aria-hidden
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />

          <LiquidGlass
            ref={glassRef}
            blur={blurLevel}
            refraction={refraction}
            className="absolute z-10 h-[clamp(112px,15vw,174px)] w-[clamp(300px,40vw,460px)] cursor-grab touch-none active:cursor-grabbing max-md:h-[116px] max-md:w-[min(70vw,300px)]"
            style={lensPosition ? { left: `${lensPosition.x}px`, top: `${lensPosition.y}px` } : { opacity: 0 }}
            onPointerDown={startDrag}
            onPointerMove={drag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            aria-label="Draggable liquid glass pill"
          />
        </section>

        <GlassCard glassVariant="liquid-refract" surfaceClassName="mt-8 border-white/20 dark:border-white/10">
          <CardContent className="grid gap-6 md:grid-cols-2">
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
                  className="size-8 bg-transparent"
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
                  className="size-8 bg-transparent"
                  onClick={() => setBlurLevel(2)}
                  aria-label="Reset blur"
                >
                  <RotateCcw className="size-4" />
                </Button>
              }
            />
          </CardContent>
        </GlassCard>
      </div>
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
        <span className="text-foreground/80 font-medium tracking-[0.08em] uppercase">{label}</span>
        <span className="text-foreground/70 font-mono">{valueLabel}</span>
      </div>
      <div className="flex items-center gap-3">
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(nextValue) => onChange(Array.isArray(nextValue) ? (nextValue[0] ?? value) : nextValue)}
          aria-label={`${label} level`}
        />
        {action}
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
