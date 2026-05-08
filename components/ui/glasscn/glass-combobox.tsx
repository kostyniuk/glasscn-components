"use client";

import * as React from "react";

import { type FrostGlassVariant, type FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Combobox, ComboboxContent, ComboboxInput } from "../combobox";
import { LiquidGlass } from "./liquid-glass";

const GlassComboboxVariantContext = React.createContext<FrostGlassVariant>("clear");

type GlassComboboxProps<T extends readonly string[]> = React.ComponentProps<typeof Combobox<T>> & FrostGlassVariantProp;

function GlassCombobox<T extends readonly string[]>({ glassVariant = "clear", ...props }: GlassComboboxProps<T>) {
  return (
    <GlassComboboxVariantContext.Provider value={glassVariant}>
      <Combobox data-slot="glass-combobox" {...props} />
    </GlassComboboxVariantContext.Provider>
  );
}

function GlassComboboxInput({ className, inputClassName, ...props }: React.ComponentProps<typeof ComboboxInput>) {
  const variant = React.useContext(GlassComboboxVariantContext);

  const input = (
    <ComboboxInput
      data-slot="glass-combobox-input"
      className={cn(
        variant !== "liquid-refract" && glassVariantStyles[variant],
        variant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        "border-white/40 bg-white/40 text-foreground shadow-[0_8px_30px_rgba(255,255,255,0.08)] dark:border-white/12 dark:bg-black/40",
        className,
      )}
      inputClassName={cn("placeholder:text-foreground/75", inputClassName)}
      {...props}
    />
  );

  if (variant === "liquid-refract") {
    return <LiquidGlass className="rounded-lg">{input}</LiquidGlass>;
  }

  return input;
}

function GlassComboboxContent({ className, ...props }: React.ComponentProps<typeof ComboboxContent>) {
  const variant = React.useContext(GlassComboboxVariantContext);

  return (
    <ComboboxContent
      data-slot="glass-combobox-content"
      className={cn(
        variant !== "liquid-refract" && glassVariantStyles[variant],
        "rounded-xl border border-white/30 bg-white/60 text-foreground shadow-2xl ring-1 ring-white/20 dark:border-white/10 dark:bg-black/55 dark:ring-white/10",
        "[&_[data-slot=combobox-item][data-highlighted]]:bg-white/70 [&_[data-slot=combobox-item][data-highlighted]]:text-black dark:[&_[data-slot=combobox-item][data-highlighted]]:bg-white/12 dark:[&_[data-slot=combobox-item][data-highlighted]]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export { GlassCombobox, GlassComboboxContent, GlassComboboxInput };
