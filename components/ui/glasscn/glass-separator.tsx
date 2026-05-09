"use client";

import { type FrostGlassVariant, type FrostGlassVariantProp } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Separator } from "../separator";

const separatorVariantStyles: Record<FrostGlassVariant, string> = {
  clear: "bg-white/[0.5] dark:bg-white/[0.12]",
  frosted: "bg-white/[0.4] dark:bg-white/10",
  subtle: "bg-black/[0.05] dark:bg-white/[0.08]",
  liquid: "bg-gradient-to-r from-white/0 via-white/60 to-white/0 dark:via-white/20",
  "liquid-refract": "bg-gradient-to-r from-white/0 via-white/70 to-white/0 dark:via-white/25",
};

type GlassSeparatorProps = React.ComponentProps<typeof Separator> & FrostGlassVariantProp;

function GlassSeparator({ className, glassVariant = "liquid-refract", ...props }: GlassSeparatorProps) {
  return (
    <Separator
      data-slot="glass-separator"
      data-glass-variant={glassVariant}
      className={cn(separatorVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassSeparator };
