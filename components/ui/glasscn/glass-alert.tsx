"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Alert } from "../alert";
import { LiquidGlass } from "./liquid-glass";

type GlassAlertProps = React.ComponentProps<typeof Alert> & FrostGlassVariantProp;

function GlassAlert({ className, glassVariant = "clear", ...props }: GlassAlertProps) {
  const alert = (
    <Alert
      data-slot="glass-alert"
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
    return <LiquidGlass className="rounded-xl">{alert}</LiquidGlass>;
  }

  return alert;
}

export { GlassAlert };
