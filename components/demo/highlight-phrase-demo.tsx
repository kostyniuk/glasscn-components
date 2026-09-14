"use client";

import { FilmIcon } from "lucide-react";

import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { HighlightPhraseContent, HighlightPhraseTrigger } from "@/components/ui/glasscn/highlight-phrase";
import { Popover, PopoverDescription, PopoverTitle } from "@/components/ui/popover";
import { type FrostGlassVariant } from "@/lib/glass-variants";

function HighlightPhraseDemo({ variant = "frosted" }: { variant?: FrostGlassVariant }) {
  return (
    <div className="flex max-w-md flex-col items-center gap-6 text-center">
      <Popover>
        <p className="text-foreground/80 text-base leading-8">
          Keep your reader in the flow with <HighlightPhraseTrigger>a little context</HighlightPhraseTrigger> right
          where they need it. Hover over the underlined words to take a closer look.
        </p>
        <HighlightPhraseContent glassVariant={variant} className="w-96">
          <video
            autoPlay
            className="aspect-video w-full rounded-xl bg-black object-cover"
            controls
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Flower close-up preview"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
          <PopoverTitle>Stay in the flow</PopoverTitle>
          <PopoverDescription>
            A little more detail, right where you need it. Hover to peek, or click to keep this card open.
          </PopoverDescription>
          <p className="text-muted-foreground text-sm">Use it for notes, profiles, links, or any React content.</p>
        </HighlightPhraseContent>
      </Popover>
      <Popover>
        <HighlightPhraseTrigger highlight={false} render={<GlassButton glassVariant="frosted" />}>
          <FilmIcon /> Preview film
        </HighlightPhraseTrigger>
        <HighlightPhraseContent glassVariant={variant} className="w-96">
          <video
            autoPlay
            className="aspect-video w-full rounded-xl bg-black object-cover"
            controls
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Flower close-up preview"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          />
          <div className="space-y-1">
            <PopoverTitle>A closer look</PopoverTitle>
            <PopoverDescription>
              Play a short preview without leaving the page. Click the trigger to keep the controls within reach.
            </PopoverDescription>
          </div>
        </HighlightPhraseContent>
      </Popover>
    </div>
  );
}

export { HighlightPhraseDemo };
