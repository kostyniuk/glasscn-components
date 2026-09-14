"use client";

import * as React from "react";

import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { GlassPopoverContent } from "./glass-popover";

type HighlightPhraseTriggerProps = React.ComponentProps<typeof PopoverTrigger> & { highlight?: boolean };

function HighlightPhraseTrigger({
  className,
  delay = 180,
  closeDelay = 180,
  highlight = true,
  ...props
}: HighlightPhraseTriggerProps) {
  return (
    <PopoverTrigger
      openOnHover
      delay={delay}
      closeDelay={closeDelay}
      className={cn(
        highlight &&
          "cursor-help rounded-sm font-semibold text-foreground underline decoration-red-500 decoration-wavy decoration-2 underline-offset-[6px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 dark:decoration-red-400",
        className,
      )}
      {...props}
    />
  );
}

function HighlightPhraseContent({
  className,
  sideOffset = 10,
  glassVariant = "frosted",
  ...props
}: React.ComponentProps<typeof GlassPopoverContent>) {
  return (
    <GlassPopoverContent
      data-slot="highlight-phrase-content"
      glassVariant={glassVariant}
      sideOffset={sideOffset}
      className={cn(
        "w-80 max-w-[calc(100vw-2rem)] gap-3 rounded-2xl p-4 duration-200 ease-out motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  );
}

export { HighlightPhraseTrigger, HighlightPhraseContent };
