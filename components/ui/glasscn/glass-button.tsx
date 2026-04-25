import { Button } from "../button"
import { cn } from "@/lib/utils";
import {
  type FrostGlassVariant,
  glassVariantStyles,
} from "./glass-variants"

type GlassButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> & {
    variant?: FrostGlassVariant
}

function GlassButton({
    className,
    variant = "clear",
    ...props
}: GlassButtonProps) {
    return (
        <Button
            data-slot="glass-button"
            data-variant={variant}
            className={
                cn(
                    "text-white cursor-pointer", glassVariantStyles[variant], className)
            }
            {...props}
        />
    )
}

export { GlassButton }
