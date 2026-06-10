"use client";

import * as React from "react";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";
import { LiquidGlass } from "./liquid-glass";

type GlassAlertDialogContentProps = React.ComponentProps<typeof AlertDialogContent> & FrostGlassVariantProp;

const dialogFooterStyles =
  "[--glass-dialog-radius:var(--radius-2xl)] [&_[data-slot=alert-dialog-footer]]:-mx-6 [&_[data-slot=alert-dialog-footer]]:-mb-6 [&_[data-slot=alert-dialog-footer]]:mt-4 [&_[data-slot=alert-dialog-footer]]:rounded-b-[var(--glass-dialog-radius)] [&_[data-slot=alert-dialog-footer]]:px-6";

function GlassAlertDialogContent({
  className,
  glassVariant = "liquid-refract",
  children,
  ...props
}: GlassAlertDialogContentProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <AlertDialogContent
        data-slot="glass-alert-dialog-content"
        data-glass-variant={glassVariant}
        className={cn("rounded-2xl border-0 bg-transparent p-0 shadow-none ring-0", className)}
        {...props}
      >
        <LiquidGlass className={cn("rounded-[var(--glass-dialog-radius)] p-6", dialogFooterStyles)}>
          {children}
        </LiquidGlass>
      </AlertDialogContent>
    );
  }

  return (
    <AlertDialogContent
      data-slot="glass-alert-dialog-content"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariantStyles[glassVariant],
        "gap-5 border-white/30 bg-white/60 shadow-2xl ring-white/20 dark:border-white/10 dark:bg-black/60 dark:ring-white/10 [&_[data-slot=alert-dialog-footer]]:mt-2 [&_[data-slot=alert-dialog-footer]]:rounded-b-[inherit]",
        className,
      )}
      {...props}
    >
      {children}
    </AlertDialogContent>
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  GlassAlertDialogContent,
};
