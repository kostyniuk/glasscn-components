"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { RadioGroupItem } from "../radio-group";

type GlassRadioGroupItemProps = React.ComponentProps<typeof RadioGroupItem> & FrostGlassVariantProp;

function GlassRadioGroupItem({ className, glassVariant = "clear", ...props }: GlassRadioGroupItemProps) {
  const effectiveVariant = glassVariant === "liquid-refract" ? "subtle" : glassVariant;

  return (
    <RadioGroupItem
      data-slot="glass-radio-group-item"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[effectiveVariant], className)}
      {...props}
    />
  );
}

export { GlassRadioGroupItem };
