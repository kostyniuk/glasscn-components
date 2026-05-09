"use client";

import { type FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { ButtonGroup } from "../button-group";
import { LiquidGlass } from "./liquid-glass";

type GlassButtonGroupProps = React.ComponentProps<typeof ButtonGroup> & FrostGlassVariantProp;

function GlassButtonGroup({ className, glassVariant = "clear", children, ...props }: GlassButtonGroupProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("", className)}>
        <ButtonGroup
          data-slot="glass-button-group"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent", className)}
          {...props}
        >
          {children}
        </ButtonGroup>
      </LiquidGlass>
    );
  }

  return (
    <ButtonGroup
      data-slot="glass-button-group"
      data-glass-variant={glassVariant}
      className={cn("rounded-lg", glassVariantStyles[glassVariant], className)}
      {...props}
    >
      {children}
    </ButtonGroup>
  );
}

export { GlassButtonGroup };
