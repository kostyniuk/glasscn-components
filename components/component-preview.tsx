import * as React from "react";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { GlassComponentPreviewTabs } from "@/components/glass-component-preview-tabs";
import type { FrostGlassVariant } from "@/lib/glass-variants";
import { highlightCode } from "@/lib/highlight-code";

export type ComponentPreviewProps = React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  code: string;
  language?: string;
  variant?: "default" | "glass";
  previewGlassVariant?: FrostGlassVariant;
  codeGlassVariant?: FrostGlassVariant;
};

export async function ComponentPreview({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  code,
  language = "tsx",
  variant = "default",
  previewGlassVariant = "clear",
  codeGlassVariant = "frosted",
  ...props
}: ComponentPreviewProps) {
  const previewCode = code.split("\n").slice(0, 4).join("\n");
  const [highlightedCode, previewHighlightedCode] = await Promise.all([
    highlightCode(code, language),
    highlightCode(previewCode, language),
  ]);

  if (variant === "glass") {
    return (
      <GlassComponentPreviewTabs
        className={className}
        previewClassName={previewClassName}
        align={align}
        hideCode={hideCode}
        component={component}
        code={code}
        highlightedCode={highlightedCode}
        previewHighlightedCode={previewHighlightedCode}
        previewGlassVariant={previewGlassVariant}
        codeGlassVariant={codeGlassVariant}
        {...props}
      />
    );
  }

  return (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={component}
      code={code}
      highlightedCode={highlightedCode}
      previewHighlightedCode={previewHighlightedCode}
      {...props}
    />
  );
}
