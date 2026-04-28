"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  return (
    <div data-slot="component-preview" className={cn("mt-4 mb-12 overflow-hidden rounded-xl border", className)}>
      <div data-slot="preview" dir="ltr">
        <div
          data-align={align}
          className={cn(
            "preview relative flex min-h-72 w-full justify-center bg-[url('/bg-light.png')] bg-cover bg-center bg-no-repeat p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start dark:bg-[url('/bg-dark.png')]",
            previewClassName,
          )}
        >
          {component}
        </div>
      </div>
      {!hideCode && (
        <div data-slot="code" data-code-visible={codeVisible} className="bg-muted/70 relative border-t">
          {codeVisible ? (
            <pre className="max-h-96 overflow-auto p-4 text-sm leading-6">
              <code className="text-foreground/85 font-mono">{code}</code>
            </pre>
          ) : (
            <div className="relative">
              <pre className="max-h-28 overflow-hidden p-4 text-sm leading-6">
                <code className="text-foreground/65 font-mono">{code.split("\n").slice(0, 4).join("\n")}</code>
              </pre>
              <div className="from-muted via-muted/85 absolute inset-0 flex items-end justify-center bg-linear-to-t to-transparent pb-4">
                <Button type="button" size="sm" variant="outline" onClick={() => setCodeVisible(true)}>
                  View Code
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
