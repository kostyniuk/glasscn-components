import { Card, CardFooter } from "../card"
import { cn } from "@/lib/utils"
import {
    type FrostGlassVariant,
    FrostGlassVariantProp,
    glassVariantStyles,
} from "./glass-variants"

type GlassCardProps = Omit<React.ComponentProps<typeof Card>, "variant"> & FrostGlassVariantProp

type GlassCardFooterProps = Omit<React.ComponentProps<typeof CardFooter>, "variant"> & {
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

function GlassCardFooter({ className, ...props }: GlassCardFooterProps) {
    return (
        <CardFooter
            className={cn("bg-muted/30", className)}
            {...props}
        />
    )
}

export { GlassCard, GlassCardFooter }
