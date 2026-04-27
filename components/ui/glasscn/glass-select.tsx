"use client";

import * as React from "react";

import { type FrostGlassVariant, type FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Select, SelectContent, SelectTrigger } from "../select";

const GlassSelectVariantContext = React.createContext<FrostGlassVariant>("clear");

type GlassSelectProps = React.ComponentProps<typeof Select> & FrostGlassVariantProp;

function GlassSelect({ glassVariant = "clear", ...props }: GlassSelectProps) {
  return (
    <GlassSelectVariantContext.Provider value={glassVariant}>
      <Select data-slot="glass-select" {...props} />
    </GlassSelectVariantContext.Provider>
  );
}

function GlassSelectTrigger({ className, ...props }: React.ComponentProps<typeof SelectTrigger>) {
  const variant = React.useContext(GlassSelectVariantContext);

  return (
    <SelectTrigger
      data-slot="glass-select-trigger"
      className={cn(
        glassVariantStyles[variant],
        "border-white/40 bg-white/40 text-foreground shadow-[0_8px_30px_rgba(255,255,255,0.08)] data-placeholder:text-foreground/75 dark:data-placeholder:text-foreground/60 dark:border-white/12 dark:bg-black/40",
        className,
      )}
      {...props}
    />
  );
}

function GlassSelectContent({ className, ...props }: React.ComponentProps<typeof SelectContent>) {
  const variant = React.useContext(GlassSelectVariantContext);

  return (
    <SelectContent
      data-slot="glass-select-content"
      className={cn(
        glassVariantStyles[variant],
        "rounded-xl border border-white/30 bg-white/60 text-foreground shadow-2xl ring-1 ring-white/20 dark:border-white/10 dark:bg-black/55 dark:ring-white/10",
        "[&_[data-slot=select-item]:focus]:bg-white/70 [&_[data-slot=select-item]:focus]:text-black dark:[&_[data-slot=select-item]:focus]:bg-white/12 dark:[&_[data-slot=select-item]:focus]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export { GlassSelect, GlassSelectContent, GlassSelectTrigger };
