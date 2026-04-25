import { Alert } from "../alert"
import { cn } from "@/lib/utils"
import {
  type FrostGlassVariant,
  glassVariantStyles,
} from "./glass-variants"

type GlassAlertProps = Omit<React.ComponentProps<typeof Alert>, "variant"> & {
  variant?: FrostGlassVariant
}

function GlassAlert({
  className,
  variant = "clear",
  ...props
}: GlassAlertProps) {
  return (
    <Alert
      data-slot="glass-alert"
      data-variant={variant}
      className={cn(glassVariantStyles[variant], className)}
      {...props}
    />
  )
}

export { GlassAlert }
