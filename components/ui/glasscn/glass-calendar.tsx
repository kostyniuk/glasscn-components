"use client";

import { cn } from "@/lib/utils";

import { Calendar } from "../calendar";
import { FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassCalendarProps = React.ComponentProps<typeof Calendar> & FrostGlassVariantProp;

function GlassCalendar({ className, variant = "clear", ...props }: GlassCalendarProps) {
  return (
    <Calendar
      data-slot="glass-calendar"
      data-variant={variant}
      className={cn(
        glassVariantStyles[variant],
        "data-[slot=glass-calendar]:bg-background/55 dark:data-[slot=glass-calendar]:bg-background/35 shadow-xl",
        className,
      )}
      {...props}
    />
  );
}

export { GlassCalendar };
