import { Badge } from "../badge"
import { cn } from "@/lib/utils"
import {
  FrostGlassVariantProp,
  glassVariantStyles,
} from "./glass-variants"

type GlassBadgeProps = Omit<React.ComponentProps<typeof Badge>, "variant"> &
  FrostGlassVariantProp

function GlassBadge({
  className,
  variant = "clear",
  ...props
}: GlassBadgeProps) {
  return (
    <Badge
      data-slot="glass-badge"
      data-variant={variant}
      className={cn(
        "text-foreground",
        glassVariantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

export { GlassBadge }
