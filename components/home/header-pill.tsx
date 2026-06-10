"use client";

import { Card } from "@/components/ui/card";
import { LiquidGlass, type LiquidGlassProps } from "@/components/ui/glasscn/liquid-glass";
import { cn } from "@/lib/utils";

type HeaderPillProps = LiquidGlassProps & { contentClassName?: string };

function HeaderPill({ className, contentClassName, children, ...props }: HeaderPillProps) {
  return (
    <LiquidGlass className={cn("h-12 rounded-4xl", className)} {...props}>
      <Card
        data-slot="header-pill"
        className={cn(
          "h-full flex-row items-center gap-0 rounded-none border-0 bg-transparent py-0 shadow-none ring-0",
          contentClassName,
        )}
      >
        {children}
      </Card>
    </LiquidGlass>
  );
}

export { HeaderPill };
