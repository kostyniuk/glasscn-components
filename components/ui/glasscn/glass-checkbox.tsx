"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Checkbox } from "../checkbox";
import { LiquidGlass } from "./liquid-glass";

type GlassCheckboxProps = React.ComponentProps<typeof Checkbox> & FrostGlassVariantProp;

function GlassCheckbox({ className, glassVariant = "clear", ...props }: GlassCheckboxProps) {
  const baseStyles =
    "border-white/40 bg-white/30 text-black shadow-sm dark:border-white/12 dark:bg-black/30 dark:text-white data-checked:border-white/30 data-checked:bg-white/70 data-checked:text-black dark:data-checked:border-white/20 dark:data-checked:bg-white/20";

  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("rounded-md p-px", className)}>
        <Checkbox
          data-slot="glass-checkbox"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent border-0 shadow-none", baseStyles)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Checkbox
      data-slot="glass-checkbox"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], baseStyles, className)}
      {...props}
    />
  );
}

export { GlassCheckbox };
