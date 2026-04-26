"use client"

import { Calendar } from "../calendar"
import { cn } from "@/lib/utils"
import {
  FrostGlassVariantProp,
  glassVariantStyles,
} from "./glass-variants"

type GlassCalendarProps = React.ComponentProps<typeof Calendar> &
  FrostGlassVariantProp

function GlassCalendar({
  className,
  variant = "clear",
  ...props
}: GlassCalendarProps) {
  return (
    <Calendar
      data-slot="glass-calendar"
      data-variant={variant}
      className={cn(
        glassVariantStyles[variant],
        "bg-white/40 shadow-xl dark:bg-black/40",
        className
      )}
      {...props}
    />
  )
}

export { GlassCalendar }
