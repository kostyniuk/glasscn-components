"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Button } from "../button";
import { LiquidGlass } from "./liquid-glass";

type GlassButtonProps = React.ComponentProps<typeof Button> & FrostGlassVariantProp;

function GlassButton({ className, glassVariant = "clear", ...props }: GlassButtonProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={typeof className === "string" ? className : undefined}>
        <Button
          data-slot="glass-button"
          data-glass-variant={glassVariant}
          className={cn("text-foreground cursor-pointer bg-transparent border-0 shadow-none", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Button
      data-slot="glass-button"
      data-glass-variant={glassVariant}
      className={cn("text-foreground cursor-pointer", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassButton };
