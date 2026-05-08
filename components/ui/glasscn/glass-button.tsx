"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Button } from "../button";
import { LiquidGlass } from "./liquid-glass";

type GlassButtonProps = React.ComponentProps<typeof Button> & FrostGlassVariantProp;

function GlassButton({ className, glassVariant = "clear", ...props }: GlassButtonProps) {
  const button = (
    <Button
      data-slot="glass-button"
      data-glass-variant={glassVariant}
      className={cn(
        "text-foreground cursor-pointer",
        glassVariant !== "liquid-refract" && glassVariantStyles[glassVariant],
        glassVariant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        className,
      )}
      {...props}
    />
  );

  if (glassVariant === "liquid-refract") {
    return <LiquidGlass className="rounded-lg">{button}</LiquidGlass>;
  }

  return button;
}

export { GlassButton };
