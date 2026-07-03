"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { FrostGlassVariantProp, glassVariantStyles } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

import { LiquidGlass, type LiquidGlassProps } from "./liquid-glass";

const glassIconVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full text-foreground cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "size-9 [&_svg:not([class*='size-'])]:size-5",
        md: "size-11 [&_svg:not([class*='size-'])]:size-7",
        lg: "size-14 [&_svg:not([class*='size-'])]:size-9",
        xl: "size-[4.5rem] [&_svg:not([class*='size-'])]:size-[3rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type GlassIconProps = React.ComponentProps<"button"> &
  FrostGlassVariantProp &
  VariantProps<typeof glassIconVariants> & {
    /** Props forwarded to the underlying LiquidGlass surface. */
    liquidProps?: Omit<LiquidGlassProps, "children">;
    /** Classes applied to the outer LiquidGlass surface. */
    surfaceClassName?: string;
  };

/**
 * A circular glass chip that wraps any icon, iOS-control-center style.
 * The `size` prop drives both the circle and the icon together, so the
 * icon should never set its own size classes.
 *
 * Consumers should pass `aria-label` when the icon is the only content,
 * since GlassIcon renders a plain icon-only button.
 */
function GlassIcon({
  className,
  glassVariant = "liquid-refract",
  size = "md",
  liquidProps,
  surfaceClassName,
  ...props
}: GlassIconProps) {
  if (glassVariant === "liquid-refract") {
    return (
      <LiquidGlass
        {...liquidProps}
        className={cn(
          "w-fit rounded-full transition-transform duration-150 active:scale-95 motion-reduce:transition-none",
          "[--liquid-glass-rim-light:rgba(255,255,255,0.55)] [--liquid-glass-rim-width:1px] [--liquid-glass-rim-fade:50%]",
          surfaceClassName,
          liquidProps?.className,
        )}
      >
        <button
          type="button"
          data-slot="glass-icon"
          data-glass-variant={glassVariant}
          className={cn(glassIconVariants({ size }), "border-0 bg-transparent shadow-none", className)}
          {...props}
        />
      </LiquidGlass>
    );
  }

  return (
    <button
      type="button"
      data-slot="glass-icon"
      data-glass-variant={glassVariant}
      className={cn(
        glassIconVariants({ size }),
        glassVariantStyles[glassVariant],
        "transition-transform duration-150 active:scale-95 motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  );
}

export { GlassIcon, glassIconVariants, type GlassIconProps };
