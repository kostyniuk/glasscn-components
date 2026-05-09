"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Input } from "../input";
import { LiquidGlass } from "./liquid-glass";

type GlassInputProps = React.ComponentProps<typeof Input> & FrostGlassVariantProp;

function GlassInput({ className, glassVariant = "liquid-refract", ...props }: GlassInputProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className="rounded-lg">
        <Input
          data-slot="glass-input"
          data-glass-variant={glassVariant}
          className={cn("text-foreground bg-transparent border-0 shadow-none", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Input
      data-slot="glass-input"
      data-glass-variant={glassVariant}
      className={cn("text-foreground", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassInput };
