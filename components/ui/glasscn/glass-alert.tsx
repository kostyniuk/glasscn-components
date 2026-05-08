"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Alert } from "../alert";
import { LiquidGlass } from "./liquid-glass";

type GlassAlertProps = React.ComponentProps<typeof Alert> & FrostGlassVariantProp;

function GlassAlert({ className, glassVariant = "clear", ...props }: GlassAlertProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("rounded-xl", className)}>
        <Alert
          data-slot="glass-alert"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent border-0 shadow-none", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Alert
      data-slot="glass-alert"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassAlert };
