import { Button } from "../button"
import { cn } from "@/lib/utils";

type FrostGlassVariant = "clear" | "frosted" | "subtle";

type GlassButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> & {
    variant?: FrostGlassVariant
}


const variantStyles: Record<FrostGlassVariant, string> = {
    // iOS-style: minimal blur, boosted saturation, glass panel clearly visible
    clear: [
        "backdrop-blur-[2px] backdrop-saturate-[1.9]",
        "bg-white/[0.25] dark:bg-black/[0.25]",
        "border border-white/[0.5] dark:border-white/[0.12]",
        "shadow-[0_1px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.2)]",
    ].join(" "),

    // Heavier frosted glass — glass is prominent, background is soft shapes
    frosted: [
        "backdrop-blur-[16px] backdrop-saturate-[1.6]",
        "bg-white/[0.55] dark:bg-black/[0.35]",
        "border border-white/[0.4] dark:border-white/10",
        "shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]",
    ].join(" "),

    // Light frost for inline / small elements
    subtle: [
        "backdrop-blur-[4px] backdrop-saturate-[1.5]",
        "bg-white/[0.3] dark:bg-white/[0.06]",
        "border border-black/[0.05] dark:border-white/[0.08]",
        "shadow-sm",
    ].join(" "),
};

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
                    "text-white cursor-pointer", variantStyles[variant], className)
            }
            {...props}
        />
    )
}

export { GlassButton }
