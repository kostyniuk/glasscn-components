"use client";

import * as React from "react";

import { type FrostGlassVariant, type FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { Command, CommandDialog, CommandInput } from "../command";
import { LiquidGlass } from "./liquid-glass";

const GlassCommandVariantContext = React.createContext<FrostGlassVariant>("liquid-refract");

type GlassCommandProps = React.ComponentProps<typeof Command> & FrostGlassVariantProp;

type GlassCommandDialogProps = React.ComponentProps<typeof CommandDialog> & FrostGlassVariantProp;

const commandSurfaceStyles =
  "border border-white/30 bg-white/60 text-foreground shadow-2xl ring-1 ring-white/20 dark:border-white/10 dark:bg-black/55 dark:ring-white/10";

const commandRefractSurfaceStyles =
  "border-white/35 bg-white/[0.16] shadow-[0_18px_50px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-18px_28px_-20px_rgba(255,255,255,0.85)] dark:border-white/15 dark:bg-white/[0.07] dark:shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-18px_28px_-20px_rgba(180,210,255,0.35)]";

const commandStateStyles = [
  "[&_[data-slot=command-input-wrapper]_[data-slot=input-group]]:border-white/30",
  "[&_[data-slot=command-input-wrapper]_[data-slot=input-group]]:bg-white/35",
  "dark:[&_[data-slot=command-input-wrapper]_[data-slot=input-group]]:border-white/10",
  "dark:[&_[data-slot=command-input-wrapper]_[data-slot=input-group]]:bg-white/[0.06]",
  "[&_[data-slot=command-input]]:placeholder:text-foreground/70",
  "[&_[data-slot=command-item][data-selected=true]]:bg-white/70",
  "[&_[data-slot=command-item][data-selected=true]]:text-black",
  "dark:[&_[data-slot=command-item][data-selected=true]]:bg-white/12",
  "dark:[&_[data-slot=command-item][data-selected=true]]:text-white",
  "[&_[data-slot=command-separator]]:bg-white/25",
  "dark:[&_[data-slot=command-separator]]:bg-white/10",
].join(" ");

function GlassCommand({ className, glassVariant = "liquid-refract", ...props }: GlassCommandProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <GlassCommandVariantContext.Provider value={glassVariant}>
        <LiquidGlass
          className={cn("rounded-xl", commandRefractSurfaceStyles, commandStateStyles, className)}
        >
          <Command
            data-slot="glass-command"
            data-glass-variant={glassVariant}
            className="border-0 bg-transparent shadow-none ring-0"
            {...props}
          />
        </LiquidGlass>
      </GlassCommandVariantContext.Provider>
    );
  }

  const command = (
    <Command
      data-slot="glass-command"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], commandSurfaceStyles, commandStateStyles, className)}
      {...props}
    />
  );

  return <GlassCommandVariantContext.Provider value={glassVariant}>{command}</GlassCommandVariantContext.Provider>;
}

function GlassCommandDialog({
  className,
  children,
  glassVariant = "liquid-refract",
  ...props
}: GlassCommandDialogProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <GlassCommandVariantContext.Provider value={glassVariant}>
        <CommandDialog
          data-slot="glass-command-dialog"
          className={cn("border-0 bg-transparent p-0 shadow-none ring-0", className)}
          {...props}
        >
          <LiquidGlass
            className={cn("rounded-xl", commandRefractSurfaceStyles, commandStateStyles)}
          >
            <div className="overflow-hidden rounded-xl">{children}</div>
          </LiquidGlass>
        </CommandDialog>
      </GlassCommandVariantContext.Provider>
    );
  }

  const content = <div className={cn("overflow-hidden rounded-xl", commandStateStyles)}>{children}</div>;

  return (
    <GlassCommandVariantContext.Provider value={glassVariant}>
      <CommandDialog
        data-slot="glass-command-dialog"
        className={cn(glassVariantStyles[glassVariant], commandSurfaceStyles, className)}
        {...props}
      >
        {content}
      </CommandDialog>
    </GlassCommandVariantContext.Provider>
  );
}

function GlassCommandInput({ className, ...props }: React.ComponentProps<typeof CommandInput>) {
  const variant = React.useContext(GlassCommandVariantContext);

  return (
    <CommandInput
      className={cn(variant === "liquid-refract" && "placeholder:text-foreground/75", className)}
      {...props}
    />
  );
}

export { GlassCommand, GlassCommandDialog, GlassCommandInput };
