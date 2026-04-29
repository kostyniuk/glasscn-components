"use client";

import { type VariantProps } from "class-variance-authority";
import { LiquidMetal, type LiquidMetalProps } from "@paper-design/shaders-react";
import type { ComponentPropsWithoutRef } from "react";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ShaderProps = Omit<LiquidMetalProps, "className" | "style" | "shape">;

type LiquidBadgeProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants> &
  Partial<ShaderProps> & {
    wrapperClassName?: string;
  };

function LiquidBadge({
  className,
  wrapperClassName,
  variant,
  children,
  speed = 0.45,
  repetition = 3,
  softness = 0.6,
  shiftRed = 0.2,
  shiftBlue = 0.15,
  distortion = 0.08,
  contour = 0.2,
  angle = 35,
  scale = 5,
  offsetX = 0.15,
  offsetY = -0.1,
  ...props
}: LiquidBadgeProps) {
  return (
    <span className={cn("relative isolate inline-flex w-fit shrink-0 rounded-3xl p-px", wrapperClassName)} {...props}>
      <LiquidMetal
        className="pointer-events-none absolute inset-0 rounded-full opacity-70"
        shape="none"
        speed={speed}
        repetition={repetition}
        softness={softness}
        shiftRed={shiftRed}
        shiftBlue={shiftBlue}
        distortion={distortion}
        contour={contour}
        angle={angle}
        scale={scale}
        offsetX={offsetX}
        offsetY={offsetY}
      />
      <span className="pointer-events-none absolute inset-px rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(17,12,8,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
      <Badge
        variant={variant}
        className={cn("relative z-10 rounded-[calc(var(--radius-xl)-1px)] border-transparent shadow-none", className)}
      >
        {children}
      </Badge>
    </span>
  );
}

export { LiquidBadge };
export type { LiquidBadgeProps };
