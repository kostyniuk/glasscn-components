"use client";

import { FrostGlassVariant, FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Card, CardFooter } from "../card";
import { LiquidGlass } from "./liquid-glass";

type GlassCardProps = React.ComponentProps<typeof Card> & FrostGlassVariantProp;

type GlassCardFooterProps = React.ComponentProps<typeof CardFooter> & FrostGlassVariantProp;

function GlassCard({ className, glassVariant = "clear", ...props }: GlassCardProps) {
  const card = (
    <Card
      data-slot="glass-card"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariant !== "liquid-refract" && glassVariantStyles[glassVariant],
        glassVariant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        className,
      )}
      {...props}
    />
  );

  if (glassVariant === "liquid-refract") {
    return <LiquidGlass className="rounded-2xl">{card}</LiquidGlass>;
  }

  return card;
}

const footerVariantStyles: Record<FrostGlassVariant, string> = {
  clear: "bg-white/10 dark:bg-black/10",
  frosted: "bg-white/20 dark:bg-black/20",
  subtle: "bg-white/15 dark:bg-white/[0.04]",
  liquid: "bg-white/15 dark:bg-white/[0.06] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.45)]",
  "liquid-refract": "bg-white/10 dark:bg-white/[0.04]",
};

function GlassCardFooter({ className, glassVariant = "clear", ...props }: GlassCardFooterProps) {
  return (
    <CardFooter
      data-glass-variant={glassVariant}
      className={cn(footerVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassCard, GlassCardFooter };
