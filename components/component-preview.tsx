import * as React from "react";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { getComponentDoc } from "@/lib/component-docs";

export function ComponentPreview({
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

  return (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName ?? doc.previewClassName}
      align={align}
      hideCode={hideCode}
      component={<Demo variant="liquid" />}
      code={doc.usageCode}
      {...props}
    />
  );
}
