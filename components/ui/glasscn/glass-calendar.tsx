"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Calendar } from "../calendar";
import { LiquidGlass } from "./liquid-glass";

type GlassCalendarProps = React.ComponentProps<typeof Calendar> & FrostGlassVariantProp;

function GlassCalendar({ className, glassVariant = "clear", ...props }: GlassCalendarProps) {
  const baseStyles =
    "data-[slot=glass-calendar]:bg-background/55 dark:data-[slot=glass-calendar]:bg-background/35 shadow-xl";

  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass className={cn("rounded-2xl", className)}>
        <Calendar
          data-slot="glass-calendar"
          data-glass-variant={glassVariant}
          className={cn("bg-transparent border-0 shadow-none", baseStyles, className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <Calendar
      data-slot="glass-calendar"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], baseStyles, className)}
      {...props}
    />
  );
}

export { GlassCalendar };
