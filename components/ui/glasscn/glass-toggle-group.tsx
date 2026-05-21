"use client";

import { motion } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

import { LiquidGlass, type LiquidGlassProps } from "@/components/ui/glasscn/liquid-glass";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

type PuckStyle = { left: number; width: number };

type GlassToggleGroupContextValue = {
  registerItem: (value: string, element: HTMLButtonElement | null) => void;
};

const GlassToggleGroupContext = createContext<GlassToggleGroupContextValue | null>(null);

type GlassToggleGroupProps = Omit<LiquidGlassProps, "children"> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  "aria-label"?: string;
};

function GlassToggleGroup({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
  "aria-label": ariaLabel,
  blur,
  refraction,
  mapSize,
  bezel,
  ...props
}: GlassToggleGroupProps) {
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue ?? "");
  const [puckStyle, setPuckStyle] = useState<PuckStyle | null>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  const actualValue = value ?? currentValue;

  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setCurrentValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const registerItem = useCallback((itemValue: string, element: HTMLButtonElement | null) => {
    if (element) {
      itemRefs.current.set(itemValue, element);
    } else {
      itemRefs.current.delete(itemValue);
    }
  }, []);

  useEffect(() => {
    const updatePuck = () => {
      const selectedElement = itemRefs.current.get(actualValue);
      const container = containerRef.current;

      if (selectedElement && container) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = selectedElement.getBoundingClientRect();
        setPuckStyle({
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
        });
      }
    };

    updatePuck();
    window.addEventListener("resize", updatePuck);
    return () => window.removeEventListener("resize", updatePuck);
  }, [actualValue]);

  return (
    <GlassToggleGroupContext.Provider value={{ registerItem }}>
      <LiquidGlass
        blur={blur}
        refraction={refraction}
        mapSize={mapSize}
        bezel={bezel}
        className={cn("inline-block rounded-full", className)}
        {...props}
      >
        <RadioGroup
          ref={containerRef}
          value={actualValue}
          onValueChange={handleValueChange}
          aria-label={ariaLabel}
          className="relative flex w-full items-center gap-0"
        >
          {puckStyle ? (
            <motion.span
              aria-hidden
              className={cn(
                "pointer-events-none absolute top-0 h-full rounded-full",
                "bg-gradient-to-b from-white/50 to-white/30 dark:from-white/[0.12] dark:to-white/[0.04]",
                "border border-white/40 dark:border-white/[0.06]",
                "shadow-[0_-1px_2px_rgba(255,255,255,0.8),0_1px_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.05)]",
                "dark:shadow-[0_-1px_2px_rgba(255,255,255,0.1),0_1px_1px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.25),0_8px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_1px_rgba(0,0,0,0.3)]",
              )}
              initial={false}
              animate={{
                left: puckStyle.left,
                width: puckStyle.width,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ) : null}
          {children}
        </RadioGroup>
      </LiquidGlass>
    </GlassToggleGroupContext.Provider>
  );
}

type GlassToggleGroupItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

function GlassToggleGroupItem({ value, children, className, "aria-label": ariaLabel }: GlassToggleGroupItemProps) {
  const context = useContext(GlassToggleGroupContext);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    context?.registerItem(value, ref.current);
    return () => context?.registerItem(value, null);
  }, [context, value]);

  return (
    <RadioGroupItem
      ref={ref}
      value={value}
      aria-label={ariaLabel}
      className={cn(
        "relative z-10 inline-flex h-auto w-auto cursor-pointer items-center justify-center rounded-full px-4 py-2",
        "aspect-auto shrink-0 border-0 bg-transparent shadow-none after:hidden dark:bg-transparent data-checked:bg-transparent dark:data-checked:bg-transparent",
        "text-sm font-medium text-foreground/60 transition-colors duration-200",
        "hover:text-foreground/85",
        "data-checked:text-foreground",
        "focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      )}
    >
      {children}
    </RadioGroupItem>
  );
}

export { GlassToggleGroup, GlassToggleGroupItem };
export type { GlassToggleGroupProps, GlassToggleGroupItemProps };
