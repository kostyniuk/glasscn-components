import { Card } from "../card"
import { cn } from "@/lib/utils"
import {
  type FrostGlassVariant,
  glassVariantStyles,
} from "./glass-variants"

type GlassCardProps = Omit<React.ComponentProps<typeof Card>, "variant"> & {
    variant?: FrostGlassVariant
}

function GlassCard({
    className,
    variant = "clear",
    ...props
}: GlassCardProps) {
    return (
        <Card
            data-slot="glass-card"
            data-variant={variant}
            className={cn(glassVariantStyles[variant], className)}
            {...props}
        />
    )
}

export { GlassCard }
