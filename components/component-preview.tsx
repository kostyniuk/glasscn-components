import * as React from "react";

import { GlassComponentPreviewTabs } from "@/components/glass-component-preview-tabs";
import { getComponentDoc } from "@/lib/component-docs";
import { highlightCode } from "@/lib/highlight-code";

export async function ComponentPreview({
  name,
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  previewClassName?: string;
}) {
  const doc = getComponentDoc(name);

  if (!doc) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component <code className="bg-muted rounded px-1.5 py-1 font-mono text-sm">{name}</code> not found.
      </p>
    );
  }

  const Demo = doc.Demo;

  // This component runs on the server, so it can prepare the code-preview payload
  // before any client hydration happens. That is the important architectural
  // difference from a client-only highlighter, which would render plain text first
  // and only colorize after React mounts in the browser.
  const previewCode = doc.usageCode.split("\n").slice(0, 4).join("\n");

  // Shiki supports server-side highlighting because it is just a Node-side
  // transformation from source text to themed HTML. We generate both the full
  // snippet and the collapsed preview snippet here, then pass that ready-made HTML
  // into the client tabs component for display/toggling.
  const [highlightedCode, previewHighlightedCode] = await Promise.all([
    highlightCode(doc.usageCode),
    highlightCode(previewCode),
  ]);

  return (
    // The tabs component stays client-side only for interaction state such as
    // expand/collapse. The highlighted markup itself is already computed here on
    // the server, so the first paint can include syntax colors immediately.
    <GlassComponentPreviewTabs
      className={className}
      previewClassName={previewClassName ?? doc.previewClassName}
      align={align}
      hideCode={hideCode}
      component={<Demo variant={doc.defaultVariant ?? "liquid-refract"} />}
      code={doc.usageCode}
      highlightedCode={highlightedCode}
      previewHighlightedCode={previewHighlightedCode}
      {...props}
    />
  );
}
