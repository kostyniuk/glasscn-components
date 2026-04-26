"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Combobox, ComboboxContent, ComboboxInput } from "../combobox";
import { type FrostGlassVariant, type FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

const GlassComboboxVariantContext = React.createContext<FrostGlassVariant>("clear");

type GlassComboboxProps<T extends readonly string[]> = React.ComponentProps<typeof Combobox<T>> & FrostGlassVariantProp;

function GlassCombobox<T extends readonly string[]>({ variant = "clear", ...props }: GlassComboboxProps<T>) {
  return (
    <GlassComboboxVariantContext.Provider value={variant}>
      <Combobox data-slot="glass-combobox" {...props} />
    </GlassComboboxVariantContext.Provider>
  );
}

function GlassComboboxInput({ className, inputClassName, ...props }: React.ComponentProps<typeof ComboboxInput>) {
  const variant = React.useContext(GlassComboboxVariantContext);

  return (
    <ComboboxInput
      data-slot="glass-combobox-input"
      className={cn(
        glassVariantStyles[variant],
        "border-white/40 bg-white/40 text-foreground shadow-[0_8px_30px_rgba(255,255,255,0.08)] dark:border-white/12 dark:bg-black/40",
        className,
      )}
      inputClassName={cn("placeholder:text-foreground/75", inputClassName)}
      {...props}
    />
  );
}

function GlassComboboxContent({ className, ...props }: React.ComponentProps<typeof ComboboxContent>) {
  const variant = React.useContext(GlassComboboxVariantContext);

  return (
    <ComboboxContent
      data-slot="glass-combobox-content"
      className={cn(
        glassVariantStyles[variant],
        "rounded-xl border border-white/30 bg-white/60 text-foreground shadow-2xl ring-1 ring-white/20 dark:border-white/10 dark:bg-black/55 dark:ring-white/10",
        "[&_[data-slot=combobox-item][data-highlighted]]:bg-white/70 [&_[data-slot=combobox-item][data-highlighted]]:text-black dark:[&_[data-slot=combobox-item][data-highlighted]]:bg-white/12 dark:[&_[data-slot=combobox-item][data-highlighted]]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export { GlassCombobox, GlassComboboxContent, GlassComboboxInput };
