"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Badge } from "../badge";
import { LiquidGlass } from "./liquid-glass";

type GlassBadgeProps = React.ComponentProps<typeof Badge> & FrostGlassVariantProp;

function GlassBadge({ className, glassVariant = "clear", ...props }: GlassBadgeProps) {
  const badge = (
    <Badge
      data-slot="glass-badge"
      data-glass-variant={glassVariant}
      className={cn(
        "text-foreground",
        glassVariant !== "liquid-refract" && glassVariantStyles[glassVariant],
        glassVariant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        className,
      )}
      {...props}
    />
  );

  if (glassVariant === "liquid-refract") {
    return <LiquidGlass className="inline-flex rounded-full">{badge}</LiquidGlass>;
  }

  return badge;
}

export { GlassBadge };
