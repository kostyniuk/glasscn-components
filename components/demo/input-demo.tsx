"use client";

import { GlassInput } from "@/components/ui/glasscn/glass-input";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type InputDemoProps = { variant?: FrostGlassVariant };

function InputDemo({ variant = "clear" }: InputDemoProps) {
  return <GlassInput glassVariant={variant} placeholder="Enter text..." className="max-w-xs" />;
}

export { InputDemo };
