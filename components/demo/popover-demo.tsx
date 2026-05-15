"use client";

import { Button } from "@/components/ui/button";
import { GlassPopoverContent } from "@/components/ui/glasscn/glass-popover";
import { Popover, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type PopoverDemoProps = { variant?: FrostGlassVariant };

function PopoverDemo({ variant = "clear" }: PopoverDemoProps) {
  return (
    <Popover>
      <PopoverTrigger render={<Button />}>Open Popover</PopoverTrigger>
      <GlassPopoverContent glassVariant={variant}>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description text here.</PopoverDescription>
        </PopoverHeader>
      </GlassPopoverContent>
    </Popover>
  );
}

export { PopoverDemo };
