"use client";

import * as React from "react";

import { GlassCalendar } from "@/components/ui/glasscn/glass-calendar";
import { FrostGlassVariant } from "@/components/ui/glasscn/glass-variants";

type CalendarDemoProps = { variant?: FrostGlassVariant };

function CalendarDemo({ variant = "clear" }: CalendarDemoProps) {
  return <GlassCalendar variant={variant} mode="single" className="mx-auto rounded-xl" />;
}

export { CalendarDemo };
