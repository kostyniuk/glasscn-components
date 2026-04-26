import { cn } from "@/lib/utils";

import { Button } from "../button";
import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";

type GlassButtonProps = React.ComponentProps<typeof Button> & FrostGlassVariantProp;

function GlassButton({ className, glassVariant = "clear", ...props }: GlassButtonProps) {
  return (
    <Button
      data-slot="glass-button"
      data-glass-variant={glassVariant}
      className={cn("text-foreground cursor-pointer", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassButton };
