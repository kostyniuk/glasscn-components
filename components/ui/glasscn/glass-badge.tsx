"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Badge } from "../badge";
import { LiquidGlass } from "./liquid-glass";

type GlassBadgeProps = React.ComponentProps<typeof Badge> & FrostGlassVariantProp;

function GlassBadge({ className, glassVariant = "liquid-refract", ...props }: GlassBadgeProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("inline-flex rounded-full", className)}>
        <Badge
          data-slot="glass-badge"
          data-glass-variant={glassVariant}
          className={cn("text-foreground bg-transparent border-0 shadow-none", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Badge
      data-slot="glass-badge"
      data-glass-variant={glassVariant}
      className={cn("text-foreground", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassBadge };
