"use client";

import * as React from "react";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { CodeBlockCommand, type CodeBlockCommandProps } from "../code-block-command";
import { GlassBadge } from "./glass-badge";
import { LiquidGlass } from "./liquid-glass";

type GlassCodeBlockCommandProps = Omit<CodeBlockCommandProps, "className"> &
  FrostGlassVariantProp & { className?: string };

const borderStyles: Record<string, string> = {
  clear: "border-white/[0.5] dark:border-white/[0.12]",
  frosted: "border-white/[0.4] dark:border-white/10",
  subtle: "border-black/[0.05] dark:border-white/[0.08]",
  liquid: "border-white/[0.45] dark:border-white/[0.12]",
  "liquid-refract": "border-white/[0.3] dark:border-white/[0.08]",
};

const headerBorderStyles: Record<string, string> = {
  clear:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.2] dark:[&_[data-slot=code-block-command-header]]:border-b-white/10",
  frosted:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.2] dark:[&_[data-slot=code-block-command-header]]:border-b-white/10",
  subtle:
    "[&_[data-slot=code-block-command-header]]:border-b-black/[0.05] dark:[&_[data-slot=code-block-command-header]]:border-b-white/[0.06]",
  liquid:
    "[&_[data-slot=code-block-command-header]]:border-b-white/[0.35] dark:[&_[data-slot=code-block-command-header]]:border-b-white/[0.10]",
  "liquid-refract":
    "[&_[data-slot=code-block-command-header]]:border-b-white/[0.25] dark:[&_[data-slot=code-block-command-header]]:border-b-white/[0.08]",
};

const tabStyles =
  "[&_[data-slot=code-block-command-tab][data-active=false]]:text-muted-foreground [&_[data-slot=code-block-command-tab][data-active=false]]:hover:text-foreground";

const activeTabStyles =
  "[&_[data-slot=code-block-command-tab][data-active=true]]:border-foreground [&_[data-slot=code-block-command-tab][data-active=true]]:text-foreground dark:[&_[data-slot=code-block-command-tab][data-active=true]]:border-white/80 dark:[&_[data-slot=code-block-command-tab][data-active=true]]:text-white";

export function GlassCodeBlockCommand({ glassVariant = "clear", className, ...props }: GlassCodeBlockCommandProps) {
  const badgeVariant = glassVariant === "liquid-refract" ? "clear" : glassVariant;
  const glassBadge = React.useCallback(
    (badgeProps: React.ComponentProps<typeof GlassBadge>) => <GlassBadge glassVariant={badgeVariant} {...badgeProps} />,
    [badgeVariant],
  );

  const codeBlock = (
    <CodeBlockCommand
      badgeComponent={glassBadge}
      className={cn(
        glassVariant !== "liquid-refract" && glassVariantStyles[glassVariant],
        glassVariant === "liquid-refract" && "bg-transparent border-0 shadow-none",
        borderStyles[glassVariant],
        headerBorderStyles[glassVariant],
        tabStyles,
        activeTabStyles,
        "bg-background/55 text-foreground",
        className,
      )}
      {...props}
    />
  );

  if (glassVariant === "liquid-refract") {
    return <LiquidGlass className="rounded-xl">{codeBlock}</LiquidGlass>;
  }

  return codeBlock;
}

export { CodeBlockCommand, type CodeBlockCommandProps };
