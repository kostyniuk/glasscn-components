"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { PopoverContent } from "../popover";
import { LiquidGlass } from "./liquid-glass";

type GlassPopoverContentProps = React.ComponentProps<typeof PopoverContent> & FrostGlassVariantProp;

function GlassPopoverContent({ className, glassVariant = "liquid-refract", ...props }: GlassPopoverContentProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner
          align={props.align}
          alignOffset={props.alignOffset}
          side={props.side}
          sideOffset={props.sideOffset}
          className="isolate z-50"
        >
          <LiquidGlass className="rounded-lg">
            <PopoverPrimitive.Popup
              data-slot="glass-popover-content"
              data-glass-variant={glassVariant}
              className={cn(
                "z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg p-2.5 text-sm text-foreground outline-hidden duration-100 bg-transparent shadow-none ring-0 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                className,
              )}
              {...props}
            />
          </LiquidGlass>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    );
  }

  return (
    <PopoverContent
      data-slot="glass-popover-content"
      data-glass-variant={glassVariant}
      className={cn("text-foreground", glassVariantStyles[glassVariant], className)}
      {...props}
    />
  );
}

export { GlassPopoverContent };
