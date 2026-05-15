"use client";

import { ChevronUpIcon } from "lucide-react";
import * as React from "react";

import { CopyButton } from "@/components/custom/copy-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { Card } from "./ui/card";

export type ComponentPreviewTabsProps = React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  code: string;
  highlightedCode: string;
  previewHighlightedCode: string;
};

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  code,
  highlightedCode,
  previewHighlightedCode,
}: ComponentPreviewTabsProps) {
  const [codeVisible, setCodeVisible] = React.useState(false);

  return (
    <Card data-slot="component-preview" className={cn("mt-4 mb-12 gap-0 overflow-hidden py-0", className)}>
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
      {!hideCode && (
        <>
          <Separator />
          <div data-slot="code" data-code-visible={codeVisible} className="group/code bg-background relative">
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {codeVisible && (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="text-foreground/80 hover:text-foreground h-7 w-7"
                  onClick={() => setCodeVisible(false)}
                >
                  <ChevronUpIcon className="h-3.5 w-3.5" />
                  <span className="sr-only">Collapse code</span>
                </Button>
              )}
              <CopyButton
                text={code}
                size="icon"
                variant="outline"
                className={cn(
                  "h-7 w-7 text-foreground/80 hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5",
                  !codeVisible && "bg-background/50",
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
                <div className="from-background via-background/70 dark:via-background/80 absolute inset-0 flex items-end justify-center bg-linear-to-t to-transparent pb-4">
                  <Button type="button" size="sm" variant="outline" onClick={() => setCodeVisible(true)}>
                    View Code
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Card>
  );
}
