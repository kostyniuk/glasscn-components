"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { CodeBlockCommand, type CodeBlockCommandProps } from "../code-block-command";
import { GlassBadge } from "./glass-badge";
import { FrostGlassVariantProp, glassVariantStyles } from "./glass-variants";

type GlassCodeBlockCommandProps = Omit<CodeBlockCommandProps, "className"> &
  FrostGlassVariantProp & { className?: string };

const borderStyles: Record<string, string> = {
  clear: "border-white/[0.5] dark:border-white/[0.12]",
  frosted: "border-white/[0.4] dark:border-white/10",
  subtle: "border-black/[0.05] dark:border-white/[0.08]",
};

const headerBorderStyles: Record<string, string> = {
  clear:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.2] dark:[&_[data-slot=code-block-command-header]]:border-b-white/10",
  frosted:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.2] dark:[&_[data-slot=code-block-command-header]]:border-b-white/10",
  subtle:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.05] dark:[&_[data-slot=code-block-command-header]]:border-b-white/[0.06]",
};

const tabStyles =
  "[&_[data-slot=code-block-command-tab][data-active=false]]:text-muted-foreground [&_[data-slot=code-block-command-tab][data-active=false]]:hover:text-foreground";

const activeTabStyles =
  "[&_[data-slot=code-block-command-tab][data-active=true]]:border-foreground [&_[data-slot=code-block-command-tab][data-active=true]]:text-foreground dark:[&_[data-slot=code-block-command-tab][data-active=true]]:border-white/80 dark:[&_[data-slot=code-block-command-tab][data-active=true]]:text-white";

export function GlassCodeBlockCommand({ glassVariant = "clear", className, ...props }: GlassCodeBlockCommandProps) {
  const glassBadge = React.useCallback(
    (badgeProps: React.ComponentProps<typeof GlassBadge>) => <GlassBadge glassVariant={glassVariant} {...badgeProps} />,
    [glassVariant],
  );

  return (
    <CodeBlockCommand
      badgeComponent={glassBadge}
      className={cn(
        glassVariantStyles[glassVariant],
        borderStyles[glassVariant],
        headerBorderStyles[glassVariant],
        tabStyles,
        activeTabStyles,
        "text-foreground bg-background/55",
        className,
      )}
      {...props}
    />
  );
}

export { CodeBlockCommand, type CodeBlockCommandProps };
