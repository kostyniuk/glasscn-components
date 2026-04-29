"use client";

import { CheckIcon, ChevronUpIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassSeparator } from "@/components/ui/glasscn/glass-separator";
import { cn } from "@/lib/utils";

import { Card } from "./ui/card";

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  code,
}: React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  code: string;
}) {
  const [codeVisible, setCodeVisible] = React.useState(false);
  const [hasCopied, setHasCopied] = React.useState(false);

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [code]);

  return (
    <Card
      data-slot="component-preview"
      variant="outline"
      className={cn("mt-4 mb-12 gap-0 overflow-hidden py-0", className)}
    >
      <div data-slot="preview" dir="ltr">
        <div
          data-align={align}
          className={cn(
            "preview relative flex min-h-72 w-full justify-center bg-transparent p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
            previewClassName,
          )}
        >
          {component}
        </div>
      </div>
      {!hideCode && (
        <>
          <GlassSeparator glassVariant="subtle" />
          <div
            data-slot="code"
            data-code-visible={codeVisible}
            className="group/code relative bg-white/[0.3] dark:bg-black/20"
          >
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {codeVisible && (
                <GlassButton
                  type="button"
                  size="icon"
                  variant="outline"
                  glassVariant="clear"
                  className="text-foreground/80 hover:text-foreground h-7 w-7"
                  onClick={() => setCodeVisible(false)}
                >
                  <ChevronUpIcon className="h-3.5 w-3.5" />
                  <span className="sr-only">Collapse code</span>
                </GlassButton>
              )}
              <GlassButton
                type="button"
                size="icon"
                variant="outline"
                glassVariant="clear"
                className={cn("h-7 w-7 text-foreground/80 hover:text-foreground", !codeVisible && "bg-background/50")}
                onClick={onCopy}
              >
                {hasCopied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
                <span className="sr-only">Copy code</span>
              </GlassButton>
            </div>
            {codeVisible ? (
              <pre className="max-h-96 overflow-auto p-4 pt-12 text-sm leading-6">
                <code className="text-foreground/85 font-mono">{code}</code>
              </pre>
            ) : (
              <div className="relative">
                <pre className="max-h-28 overflow-hidden p-4 text-sm leading-6">
                  <code className="text-foreground/65 font-mono">{code.split("\n").slice(0, 4).join("\n")}</code>
                </pre>
                <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-white/65 via-white/40 to-transparent pb-4 dark:from-black/85 dark:via-black/60">
                  <GlassButton
                    type="button"
                    size="sm"
                    variant="outline"
                    glassVariant="frosted"
                    onClick={() => setCodeVisible(true)}
                  >
                    View Code
                  </GlassButton>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Card>
  );
}
