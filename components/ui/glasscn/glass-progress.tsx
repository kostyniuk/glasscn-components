"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { LiquidGlass } from "./liquid-glass";

type GlassProgressProps = ProgressPrimitive.Root.Props & FrostGlassVariantProp;

const progressIndicatorStyles =
  "relative z-10 h-full rounded-none bg-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all";

function GlassProgress({ className, children, value, glassVariant = "liquid-refract", ...props }: GlassProgressProps) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="glass-progress"
      data-glass-variant={glassVariant}
      className={cn("flex w-full flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <GlassProgressTrack glassVariant={glassVariant} />
    </ProgressPrimitive.Root>
  );
}

function GlassProgressTrack({ glassVariant }: Required<FrostGlassVariantProp>) {
  const track = (
    <ProgressPrimitive.Track
      data-slot="glass-progress-track"
      className={cn(
        "relative flex h-2 w-full items-center overflow-hidden rounded-full",
        glassVariant === "liquid-refract" ? "bg-transparent" : glassVariantStyles[glassVariant],
      )}
    >
      <ProgressPrimitive.Indicator data-slot="glass-progress-indicator" className={progressIndicatorStyles} />
    </ProgressPrimitive.Track>
  );

  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className="h-2 w-full rounded-full" blur={2} refraction={0}>
        {track}
      </LiquidGlass>
    );
  }

  return track;
}

export { GlassProgress };
