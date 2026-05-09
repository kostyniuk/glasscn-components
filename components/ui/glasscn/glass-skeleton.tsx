"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Skeleton } from "../skeleton";
import { LiquidGlass } from "./liquid-glass";

type GlassSkeletonProps = React.ComponentProps<typeof Skeleton> & FrostGlassVariantProp;

function GlassSkeleton({ className, glassVariant = "liquid-refract", ...props }: GlassSkeletonProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("rounded-md", className)}>
        <Skeleton
          data-slot="glass-skeleton"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Skeleton
      data-slot="glass-skeleton"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassSkeleton };
