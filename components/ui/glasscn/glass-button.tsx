import { cn } from "@/lib/utils";

import { Button } from "../button";
import { FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassButtonProps = Omit<React.ComponentProps<typeof Button>, "variant"> & FrostGlassVariantProp;

function GlassButton({ className, variant = "clear", ...props }: GlassButtonProps) {
  return (
    <Button
      data-slot="glass-button"
      data-variant={variant}
      className={cn("text-foreground cursor-pointer", glassVariantStyles[variant], className)}
      {...props}
    />
  );
}

export { GlassButton };
