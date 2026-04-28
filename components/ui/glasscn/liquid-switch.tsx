"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { LiquidMetal, type LiquidMetalProps } from "@paper-design/shaders-react";

import { Switch, type SwitchProps } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type ShaderProps = Omit<LiquidMetalProps, "className" | "style" | "shape">;

const liquidSwitchWrapperVariants = cva("relative inline-flex shrink-0 isolate rounded-full", {
  variants: {
    size: {
      sm: "h-4 w-7",
      default: "h-5 w-11",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LiquidSwitchProps = Omit<SwitchProps, "className"> &
  VariantProps<typeof liquidSwitchWrapperVariants> &
  Partial<ShaderProps> & {
    className?: string;
  };

function LiquidSwitch({
  className,
  size = "default",
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
}: LiquidSwitchProps) {
  return (
    <span className={cn(liquidSwitchWrapperVariants({ size }), className)}>
      <Switch
        size={size}
        className={cn(
          "peer/liquid-switch absolute inset-0 z-10 border-transparent bg-transparent shadow-none data-checked:border-transparent data-checked:bg-transparent data-unchecked:border-transparent data-unchecked:bg-transparent",
          "data-[size=default]:size-full data-[size=sm]:size-full",
          "[&_[data-slot=switch-thumb]]:bg-foreground",
        )}
        {...props}
      />
      <LiquidMetal
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 transition-opacity duration-300 peer-data-checked/liquid-switch:opacity-100"
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
      <span className="pointer-events-none absolute inset-[3px] rounded-full bg-background shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors duration-300 peer-data-checked/liquid-switch:bg-emerald-500 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:peer-data-checked/liquid-switch:bg-emerald-500" />
      <span className="pointer-events-none absolute inset-[3px] rounded-full bg-foreground/[0.02] transition-colors duration-300 peer-data-checked/liquid-switch:bg-transparent dark:bg-white/[0.02] dark:peer-data-checked/liquid-switch:bg-transparent" />
      <span className="pointer-events-none absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-300 peer-data-checked/liquid-switch:opacity-100 peer-data-checked/liquid-switch:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-6px_12px_rgba(5,46,22,0.16)] dark:peer-data-checked/liquid-switch:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-6px_12px_rgba(0,0,0,0.2)]" />
    </span>
  );
}

export { LiquidSwitch };
export type { LiquidSwitchProps };
