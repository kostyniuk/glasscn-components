import { cn } from "@/lib/utils";

import { Card, CardFooter } from "../card";
import { FrostGlassVariant, FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassCardProps = Omit<React.ComponentProps<typeof Card>, "variant"> & FrostGlassVariantProp;

type GlassCardFooterProps = Omit<React.ComponentProps<typeof CardFooter>, "variant"> & FrostGlassVariantProp;

function GlassCard({ className, variant = "clear", ...props }: GlassCardProps) {
  return (
    <Card
      data-slot="glass-card"
      data-variant={variant}
      className={cn(glassVariantStyles[variant], className)}
      {...props}
    />
  );
}

const footerVariantStyles: Record<FrostGlassVariant, string> = {
  clear: "bg-white/10 dark:bg-black/10",
  frosted: "bg-white/20 dark:bg-black/20",
  subtle: "bg-white/15 dark:bg-white/[0.04]",
};

function GlassCardFooter({ className, variant = "clear", ...props }: GlassCardFooterProps) {
  return <CardFooter data-variant={variant} className={cn(footerVariantStyles[variant], className)} {...props} />;
}

export { GlassCard, GlassCardFooter };
