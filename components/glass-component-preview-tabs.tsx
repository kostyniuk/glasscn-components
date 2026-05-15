"use client";

import { ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { CopyButton } from "@/components/custom/copy-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import type { FrostGlassVariant } from "@/lib/glass-variants";
import { cn } from "@/lib/utils";

export function GlassComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  code,
  highlightedCode,
  previewHighlightedCode,
  previewGlassVariant = "clear",
  codeGlassVariant = "frosted",
}: React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  code: string;
  highlightedCode: string;
  previewHighlightedCode: string;
  previewGlassVariant?: FrostGlassVariant;
  codeGlassVariant?: FrostGlassVariant;
}) {
  const [codeVisible, setCodeVisible] = React.useState(false);

  return (
    <div className={cn("mt-4 mb-12 flex flex-col gap-0", className)}>
      <GlassCard
        data-slot="glass-component-preview"
        glassVariant={previewGlassVariant}
        className="gap-0 overflow-hidden rounded-t-[28px] rounded-b-none bg-transparent py-0"
      >
        <div data-slot="preview" dir="ltr">
          <div
            data-align={align}
            className={cn(
              "preview relative flex min-h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
              previewClassName,
            )}
          >
            {component}
          </div>
        </div>
      </GlassCard>

      {!hideCode && (
        <GlassCard
          data-slot="glass-component-code"
          glassVariant={codeGlassVariant}
          className="group/code relative -mt-px gap-0 overflow-hidden rounded-t-none rounded-b-[28px] bg-transparent py-0"
        >
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            {codeVisible && (
              <GlassButton
                type="button"
                size="icon"
                variant="outline"
                glassVariant="liquid-refract"
                className="text-foreground/80 hover:text-foreground h-7 w-7"
                onClick={() => setCodeVisible(false)}
              >
                <ChevronUpIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Collapse code</span>
              </GlassButton>
            )}
            <CopyButton
              text={code}
              size="icon"
              variant="outline"
              className={cn(
                "h-7 w-7 text-foreground/80 hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5",
                !codeVisible && "bg-background/40",
              )}
            />
          </div>

          {codeVisible ? (
            <div className="[&_pre]:max-h-96" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          ) : (
            <div className="relative">
              <div
                className="max-h-28 overflow-hidden [&_pre]:overflow-hidden"
                dangerouslySetInnerHTML={{ __html: previewHighlightedCode }}
              />
              <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-white/55 via-white/25 to-transparent pb-4 dark:from-black/70 dark:via-black/35">
                <GlassButton
                  type="button"
                  size="sm"
                  variant="outline"
                  glassVariant="liquid-refract"
                  onClick={() => setCodeVisible(true)}
                >
                  View Code
                </GlassButton>
              </div>
            </div>
          )}
        </GlassCard>
      )}
    </div>
  );
}
