import * as React from "react"
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
} from "../alert-dialog"
import { cn } from "@/lib/utils"
import {
  FrostGlassVariantProp,
  glassVariantStyles,
} from "./glass-variants"

type GlassAlertDialogContentProps = React.ComponentProps<
  typeof AlertDialogContent
> &
  FrostGlassVariantProp

function GlassAlertDialogContent({
  className,
  variant = "clear",
  ...props
}: GlassAlertDialogContentProps) {
  return (
    <AlertDialogContent
      data-slot="glass-alert-dialog-content"
      className={cn(
        glassVariantStyles[variant],
        "border-white/30 bg-white/60 shadow-2xl ring-white/20 dark:border-white/10 dark:bg-black/60 dark:ring-white/10",
        className
      )}
      {...props}
    />
  )
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
}
