import { cn } from "@/lib/utils";

interface MarkerTextProps {
  children: React.ReactNode;
  className?: string;
  color?: "lime" | "yellow" | "pink" | "cyan" | "orange";
}

const colorMap = {
  lime: "bg-accent-green",
  yellow: "bg-yellow-300",
  pink: "bg-pink-300",
  cyan: "bg-cyan-300",
  orange: "bg-orange-300",
};

export function MarkerText({ children, className, color = "lime" }: MarkerTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "absolute inset-0 -skew-y-1 scale-x-110 scale-y-90",
          colorMap[color]
        )}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
