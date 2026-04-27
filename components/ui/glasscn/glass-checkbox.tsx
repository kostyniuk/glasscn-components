"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Checkbox } from "../checkbox";

type GlassCheckboxProps = React.ComponentProps<typeof Checkbox> & FrostGlassVariantProp;

function GlassCheckbox({ className, glassVariant = "clear", ...props }: GlassCheckboxProps) {
  return (
    <Checkbox
      data-slot="glass-checkbox"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariantStyles[glassVariant],
        "border-white/40 bg-white/30 text-black shadow-sm dark:border-white/12 dark:bg-black/30 dark:text-white data-checked:border-white/30 data-checked:bg-white/70 data-checked:text-black dark:data-checked:border-white/20 dark:data-checked:bg-white/20",
        className,
      )}
      {...props}
    />
  );
}

export { GlassCheckbox };
