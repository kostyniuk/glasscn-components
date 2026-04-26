import { cn } from "@/lib/utils";

import { Alert } from "../alert";
import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";

type GlassAlertProps = React.ComponentProps<typeof Alert> & FrostGlassVariantProp;

function GlassAlert({ className, glassVariant = "clear", ...props }: GlassAlertProps) {
  return (
    <Alert
      data-slot="glass-alert"
      data-glass-variant={glassVariant}
      className={cn(glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassAlert };
