"use client";

import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlassItem } from "@/components/ui/glasscn/glass-item";
import { ItemContent, ItemTitle, ItemDescription, ItemActions, ItemMedia } from "@/components/ui/item";
import { type FrostGlassVariant } from "@/lib/glass-variants";

type ItemDemoProps = { variant?: FrostGlassVariant };

function ItemDemo({ variant = "clear" }: ItemDemoProps) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <GlassItem glassVariant={variant}>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription className="text-help-foreground">
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm" className="border-0 bg-transparent shadow-none">
            Action
          </Button>
        </ItemActions>
      </GlassItem>
      <GlassItem
        glassVariant={variant}
        size="sm"
        render={
          <a href="#">
            <ItemMedia>
              <BadgeCheckIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </a>
        }
      />
    </div>
  );
}

export { ItemDemo };
