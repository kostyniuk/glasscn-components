import { cn } from "@/lib/utils";

import { Badge } from "../badge";
import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";

type GlassBadgeProps = React.ComponentProps<typeof Badge> & FrostGlassVariantProp;

function GlassBadge({ className, glassVariant = "clear", ...props }: GlassBadgeProps) {
  return (
    <Badge
      data-slot="glass-badge"
      data-glass-variant={glassVariant}
      className={cn("text-foreground", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassBadge };
