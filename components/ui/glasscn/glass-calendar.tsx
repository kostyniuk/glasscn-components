"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Calendar } from "../calendar";
import { LiquidGlass } from "./liquid-glass";

type GlassCalendarProps = React.ComponentProps<typeof Calendar> & FrostGlassVariantProp;

function GlassCalendar({ className, glassVariant = "clear", ...props }: GlassCalendarProps) {
  const calendar = (
    <Calendar
      data-slot="glass-calendar"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariant !== "liquid-refract" && glassVariantStyles[glassVariant],
        glassVariant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        "data-[slot=glass-calendar]:bg-background/55 dark:data-[slot=glass-calendar]:bg-background/35 shadow-xl",
        className,
      )}
      {...props}
    />
  );

  if (glassVariant === "liquid-refract") {
    return <LiquidGlass className="rounded-2xl">{calendar}</LiquidGlass>;
  }

  return calendar;
}

export { GlassCalendar };
