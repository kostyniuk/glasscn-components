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

type GlassAlertDialogContentProps = React.ComponentProps<typeof AlertDialogContent> & FrostGlassVariantProp;

function GlassAlertDialogContent({ className, glassVariant = "clear", ...props }: GlassAlertDialogContentProps) {
  return (
    <AlertDialogContent
      data-slot="glass-alert-dialog-content"
      data-glass-variant={glassVariant}
      className={cn(
        glassVariantStyles[glassVariant],
        "border-white/30 bg-white/60 shadow-2xl ring-white/20 dark:border-white/10 dark:bg-black/60 dark:ring-white/10",
        className,
      )}
      {...props}
    />
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
