import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "lime" | "yellow" | "pink" | "cyan" | "orange";
}

const highlightVariants: Record<NonNullable<HighlightTextProps["variant"]>, string> = {
  lime: "bg-accent-green",
  yellow: "bg-yellow-300",
  pink: "bg-pink-300",
  cyan: "bg-cyan-300",
  orange: "bg-orange-300",
};

export function HighlightText({
  children,
  className,
  variant = "lime",
}: HighlightTextProps) {
  return (
    <span className="relative inline-block">
      <span
        className={cn(
          "absolute inset-0 scale-x-110 scale-y-90 -skew-y-1",
          highlightVariants[variant],
          className
        )}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
