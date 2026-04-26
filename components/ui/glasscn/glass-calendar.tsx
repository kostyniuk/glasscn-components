"use client";

import { cn } from "@/lib/utils";

import { Calendar } from "../calendar";
import { FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassCalendarProps = React.ComponentProps<typeof Calendar> & FrostGlassVariantProp;

function GlassCalendar({ className, glassVariant = "clear", ...props }: GlassCalendarProps) {
  return (
    <Calendar
      data-slot="glass-calendar"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariantStyles[glassVariant],
        "data-[slot=glass-calendar]:bg-background/55 dark:data-[slot=glass-calendar]:bg-background/35 shadow-xl",
        className,
      )}
      {...props}
    />
  );
}

export { GlassCalendar };
