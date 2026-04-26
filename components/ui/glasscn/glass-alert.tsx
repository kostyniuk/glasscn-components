import { cn } from "@/lib/utils";

import { Alert } from "../alert";
import { FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassAlertProps = Omit<React.ComponentProps<typeof Alert>, "variant"> & FrostGlassVariantProp;

function GlassAlert({ className, variant = "clear", ...props }: GlassAlertProps) {
  return (
    <Alert
      data-slot="glass-alert"
      data-variant={variant}
      className={cn(glassVariantStyles[variant], className)}
      {...props}
    />
  );
}

export { GlassAlert };
