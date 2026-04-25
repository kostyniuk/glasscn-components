import { Button } from "../ui/button"

type GlassButtonProps = React.ComponentProps<typeof Button>

function GlassButton({
    className,
    ...props
}: GlassButtonProps) {
    return (
        <Button
            data-slot="button"
            className={className}
            {...props}
        />
    )
}

export { GlassButton }