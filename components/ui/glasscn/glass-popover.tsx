"use client";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { PopoverContent } from "../popover";
import { LiquidGlass } from "./liquid-glass";

type GlassPopoverContentProps = React.ComponentProps<typeof PopoverContent> & FrostGlassVariantProp;

function GlassPopoverContent({ className, glassVariant = "liquid-refract", ...props }: GlassPopoverContentProps) {
  return (
    <PopoverContent
      data-slot="glass-popover-content"
      data-glass-variant={glassVariant}
      render={glassVariant === "liquid-refract" ? <LiquidGlass /> : undefined}
      className={cn(
        "text-foreground",
        glassVariant === "liquid-refract"
          ? "bg-transparent shadow-none ring-0"
          : glassVariantStyles[glassVariant],
        className,
      )}
      {...props}
    />
  );
}

export { GlassPopoverContent };
