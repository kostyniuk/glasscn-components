"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const THEMES = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

type ThemeValue = (typeof THEMES)[number]["value"];

function GlassThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentValue = mounted ? ((theme ?? "system") as ThemeValue) : "";
  const selectedIndex = THEMES.findIndex((t) => t.value === currentValue);

  return (
    <RadioGroup
      value={currentValue}
      onValueChange={(value) => setTheme(value as ThemeValue)}
      aria-label="Color theme"
      className={cn("relative flex w-fit items-center gap-0", className)}
    >
      {mounted && selectedIndex >= 0 ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-0 left-0 size-8 rounded-full",
            "backdrop-blur-2xl backdrop-saturate-150",
            "bg-white/40 dark:bg-white/[0.10]",
            "border border-white/60 dark:border-white/20",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_2px_rgba(0,0,0,0.06),0_4px_10px_-2px_rgba(0,0,0,0.10)]",
            "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.4),0_4px_10px_-2px_rgba(0,0,0,0.4)]",
            "transition-transform duration-300 ease-out",
            "motion-reduce:transition-none",
          )}
          style={{ transform: `translateX(${selectedIndex * 100}%)` }}
        />
      ) : null}
      {THEMES.map(({ value, label, Icon }) => (
        <RadioGroupItem
          key={value}
          value={value}
          aria-label={label}
          className={cn(
            "relative z-10 grid size-8 cursor-pointer place-items-center rounded-full",
            "border-0 bg-transparent shadow-none after:hidden dark:bg-transparent",
            "text-foreground/55 transition-colors duration-200",
            "hover:text-foreground/85",
            "data-checked:border-0 data-checked:bg-transparent data-checked:text-foreground dark:data-checked:bg-transparent",
            "focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          )}
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
}

export { GlassThemeSwitcher };
