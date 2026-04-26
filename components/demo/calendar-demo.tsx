"use client";

import * as React from "react";

import { GlassCalendar } from "@/components/ui/glasscn/glass-calendar";
import { FrostGlassVariant } from "@/lib/glass-variants";

type CalendarDemoProps = { variant?: FrostGlassVariant };

function CalendarDemo({ variant = "clear" }: CalendarDemoProps) {
  return <GlassCalendar glassVariant={variant} mode="single" className="mx-auto rounded-xl" />;
}

export { CalendarDemo };
