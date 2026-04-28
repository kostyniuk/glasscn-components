import { LiquidText } from "@/components/ui/glasscn/liquid-text";
import { cn } from "@/lib/utils";

type LiquidWatchSize = "sm" | "md" | "lg";

type LiquidWatchProps = {
  hours: number | string;
  minutes: number | string;
  size?: LiquidWatchSize;
  className?: string;
};

const sizeStyles: Record<LiquidWatchSize, { card: string; gap: string; inset: string; fontSize: number }> = {
  sm: { card: "rounded-2xl py-2.5", gap: "gap-2.5", inset: "px-3", fontSize: 60 },
  md: { card: "rounded-[1.4rem] py-3", gap: "gap-3", inset: "px-4", fontSize: 82 },
  lg: { card: "rounded-[1.75rem] py-4", gap: "gap-4", inset: "px-5", fontSize: 104 },
};

function formatSegment(value: number | string) {
  if (typeof value === "number") return value.toString().padStart(2, "0");

  const trimmed = value.trim();
  return trimmed.length >= 2 ? trimmed : trimmed.padStart(2, "0");
}

export function LiquidWatch({ hours, minutes, size = "md", className }: LiquidWatchProps) {
  const styles = sizeStyles[size];

  return (
    <div className={cn("w-fit border border-foreground/15 bg-background shadow-sm", styles.card, className)}>
      <div className={cn("flex flex-col", styles.gap, styles.inset)}>
        <LiquidText text={formatSegment(hours)} fontSize={styles.fontSize} />
        <LiquidText text={formatSegment(minutes)} fontSize={styles.fontSize} />
      </div>
    </div>
  );
}
