"use client";

import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { LiquidGlass, type LiquidGlassProps } from "./liquid-glass";

type GlassContactAvatarPlacement = "top" | "leading";

type GlassContactPillProps = Omit<React.ComponentProps<"div">, "title"> & {
  /** Primary label, e.g. the contact's name. */
  name: React.ReactNode;
  /** Secondary line shown above the name, e.g. "Maybe:" or "online". */
  caption?: React.ReactNode;
  /** Avatar image source. When absent or it fails to load, the fallback is shown. */
  src?: string;
  /** Alt text for the avatar image. Defaults to the name when it is a string. */
  alt?: string;
  /**
   * Avatar fallback content. Defaults to up-to-two initials derived from `name`
   * (e.g. "Alex Kostyniuk" → "AK").
   */
  fallback?: React.ReactNode;
  /** Where the avatar sits relative to the pill. */
  avatarPlacement?: GlassContactAvatarPlacement;
  /** Optional trailing content rendered after the label, e.g. a chevron or status dot. */
  trailing?: React.ReactNode;
  /** Props forwarded to the underlying LiquidGlass surface. */
  liquidProps?: Omit<LiquidGlassProps, "children">;
  /** Classes applied to the outer LiquidGlass surface. */
  surfaceClassName?: string;
};

function initialsFromName(name: React.ReactNode) {
  if (typeof name !== "string") return "";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

function GlassContactPill({
  name,
  caption,
  src,
  alt,
  fallback,
  avatarPlacement = "top",
  trailing,
  liquidProps,
  surfaceClassName,
  className,
  ...props
}: GlassContactPillProps) {
  const resolvedAlt = alt ?? (typeof name === "string" ? name : undefined);
  const resolvedFallback = fallback ?? initialsFromName(name);
  const trailingNode = trailing ?? null;

  const isTop = avatarPlacement === "top";

  const avatar = (
    <Avatar
      size="lg"
      className={cn(
        "shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-white/40 after:border-white/30 dark:ring-white/15",
        isTop ? "size-12" : "size-11",
      )}
    >
      {src ? <AvatarImage src={src} alt={resolvedAlt} /> : null}
      <AvatarFallback className="font-medium">{resolvedFallback}</AvatarFallback>
    </Avatar>
  );

  const label = (
    <div className={cn("flex min-w-0 flex-col", isTop && "items-center text-center")}>
      {caption ? <span className="text-sm leading-tight text-foreground/55">{caption}</span> : null}
      <span className="truncate text-sm leading-tight font-semibold tracking-tight">{name}</span>
    </div>
  );

  if (isTop) {
    return (
      <div
        data-slot="glass-contact-pill"
        data-avatar-placement="top"
        className={cn("relative inline-flex w-fit flex-col items-center pt-9", className)}
        {...props}
      >
        <div className="absolute top-0 z-10">{avatar}</div>
        <LiquidGlass {...liquidProps} className={cn("w-full rounded-full", surfaceClassName, liquidProps?.className)}>
          <div className="relative flex min-w-10 items-center justify-center gap-3 px-4 pt-1 pb-1 text-foreground">
            {label}
            {trailingNode ? (
              <span className="flex size-5 shrink-0 items-center justify-center">{trailingNode}</span>
            ) : null}
          </div>
        </LiquidGlass>
      </div>
    );
  }

  return (
    <div data-slot="glass-contact-pill" data-avatar-placement="leading" className={cn("w-fit", className)} {...props}>
      <LiquidGlass {...liquidProps} className={cn("rounded-full", surfaceClassName, liquidProps?.className)}>
        <div className="flex items-center gap-3 py-1.5 pr-5 pl-1.5 text-foreground">
          {avatar}
          {label}
          {trailingNode}
        </div>
      </LiquidGlass>
    </div>
  );
}

export { GlassContactPill, type GlassContactPillProps, type GlassContactAvatarPlacement };
