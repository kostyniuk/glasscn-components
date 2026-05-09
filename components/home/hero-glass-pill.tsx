"use client";

import { type PointerEvent, useCallback, useEffect, useRef, useState } from "react";

import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { cn } from "@/lib/utils";

type Point = { x: number; y: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function HeroGlassPill({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const pointerOffsetRef = useRef<Point>({ x: 0, y: 0 });
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });

  const [position, setPosition] = useState<Point | null>(null);

  const placePill = useCallback((x: number, y: number) => {
    const container = containerRef.current;
    const glass = glassRef.current;
    if (!container || !glass) return;

    const containerRect = container.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();
    const maxX = containerRect.width - glassRect.width;
    const maxY = containerRect.height - glassRect.height;

    targetRef.current = {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  }, []);

  const resetPill = useCallback(() => {
    const container = containerRef.current;
    const glass = glassRef.current;
    if (!container || !glass) return;

    const containerRect = container.getBoundingClientRect();
    const start = {
      x: containerRect.width * 0.65,
      y: containerRect.height * 0.11,
    };

    currentRef.current = start;
    targetRef.current = start;
    setPosition(start);
  }, []);

  useEffect(() => {
    resetPill();
    window.addEventListener("resize", resetPill);

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const next = {
        x: current.x + (target.x - current.x) * 0.2,
        y: current.y + (target.y - current.y) * 0.2,
      };

      currentRef.current = next;
      setPosition(next);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resetPill);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [resetPill]);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const container = containerRef.current;
    const glass = glassRef.current;
    if (!container || !glass) return;

    const containerRect = container.getBoundingClientRect();
    const glassRect = glass.getBoundingClientRect();

    draggingRef.current = true;
    pointerOffsetRef.current = {
      x: event.clientX - glassRect.left,
      y: event.clientY - glassRect.top,
    };

    glass.setPointerCapture(event.pointerId);
    placePill(
      event.clientX - containerRect.left - pointerOffsetRef.current.x,
      event.clientY - containerRect.top - pointerOffsetRef.current.y,
    );
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    placePill(
      event.clientX - containerRect.left - pointerOffsetRef.current.x,
      event.clientY - containerRect.top - pointerOffsetRef.current.y,
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
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <LiquidGlass
        ref={glassRef}
        blur={1}
        refraction={8}
        className={cn(
          "pointer-events-auto absolute z-20 size-20 cursor-grab touch-none active:cursor-grabbing sm:size-32",
          position === null && "opacity-0",
          className,
        )}
        style={
          position
            ? {
              left: `${position.x}px`,
              top: `${position.y}px`,
            }
            : undefined
        }
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Draggable liquid glass pill"
      />
    </div>
  );
}
