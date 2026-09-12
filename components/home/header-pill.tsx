"use client";

import { useRef } from "react";

import { Card } from "@/components/ui/card";
import { LiquidGlass, type LiquidGlassProps } from "@/components/ui/glasscn/liquid-glass";
import { useBackdropTone } from "@/hooks/use-backdrop-tone";
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

// Same isolation the component previews use, so tokens, `dark:` utilities and
// the logo swap all flip together.
const toneClassName = {
  dark: "preview-theme-dark dark",
  light: "preview-theme-light preview-force-light",
} as const;

/**
 * A cluster of pill content that recolors itself against whatever is behind it.
 *
 * The pill is wide enough to straddle two backdrops — the home hero's lime
 * wordmark ends mid-pill — and it has one text color, so recoloring the pill as
 * a whole fixes one end and breaks the other. Groups are narrow enough that a
 * surface either covers one or it doesn't.
 */
function HeaderPillGroup({ className, children, ...props }: React.ComponentProps<"div">) {
  const groupRef = useRef<HTMLDivElement>(null);
  const tone = useBackdropTone(groupRef);

  // `text-card-foreground` is re-applied on purpose: Card already resolved it,
  // so without it the group would inherit that computed color rather than the
  // token the tone class just redefined.
  return (
    <div
      ref={groupRef}
      data-backdrop-tone-active={tone ?? undefined}
      className={cn("text-card-foreground transition-colors duration-300", tone && toneClassName[tone], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { HeaderPill, HeaderPillGroup };
