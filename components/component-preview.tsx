"use client";

import { ChevronUpIcon } from "lucide-react";
import * as React from "react";

import {
  darkPreviewBackgrounds,
  lightPreviewBackgrounds,
  previewBackgrounds,
  type PreviewBackground,
} from "@/components/component-preview-backgrounds";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { CopyButton } from "@/components/custom/copy-button";
import { Card } from "@/components/ui/card";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassToggleGroup, GlassToggleGroupItem } from "@/components/ui/glasscn/glass-toggle-group";
import type { FrostGlassVariant } from "@/lib/glass-variants";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";

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
      <GlassComponentPreviewWithPicker
        className={className}
        previewClassName={previewClassName}
        align={align}
        hideCode={hideCode}
        component={component}
        code={code}
        highlightedCode={highlightedCode}
        previewHighlightedCode={previewHighlightedCode}
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

type GlassComponentPreviewWithPickerProps = React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  code: string;
  highlightedCode: string;
  previewHighlightedCode: string;
  codeGlassVariant?: FrostGlassVariant;
};

function GlassComponentPreviewWithPicker({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  code,
  highlightedCode,
  previewHighlightedCode,
  codeGlassVariant = "frosted",
}: GlassComponentPreviewWithPickerProps) {
  const [codeVisible, setCodeVisible] = React.useState(false);
  const [previewBackground, setPreviewBackground] = React.useState(previewBackgrounds[0].value);

  const selectedBackground = previewBackgrounds.find((background) => background.value === previewBackground);
  // Explicit light/dark picks render their own theme, isolated from the site theme.
  // The neutral "transparent" pick has no override, so it inherits the site theme.
  const previewThemeClassName =
    selectedBackground?.tone === "dark"
      ? "preview-theme-dark dark"
      : selectedBackground?.tone === "light"
        ? "preview-theme-light preview-force-light"
        : undefined;
  const previewBackgroundStyle =
    selectedBackground?.backgroundImage && !selectedBackground.image
      ? ({
          backgroundImage: selectedBackground.backgroundImage,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
        } satisfies React.CSSProperties)
      : undefined;

  const codePanel = (
    <>
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
    </>
  );

  return (
    <div className={cn("mt-4 mb-12 flex flex-col gap-0", className)}>
      <Card
        data-slot="glass-component-preview"
        variant="outline"
        className="gap-0 overflow-hidden rounded-t-[28px] rounded-b-none bg-transparent py-0"
      >
        <div data-slot="preview" dir="ltr">
          <div
            data-align={align}
            style={previewBackgroundStyle}
            className={cn(
              "preview relative flex min-h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
              previewThemeClassName,
              previewClassName,
              "pt-24",
            )}
          >
            {previewBackgrounds
              .filter((bg) => bg.src)
              .map((bg) => (
                <img
                  key={bg.value}
                  src={bg.src}
                  alt=""
                  aria-hidden
                  decoding="async"
                  className={cn(
                    "pointer-events-none absolute inset-0 h-full w-full object-cover",
                    selectedBackground?.value === bg.value ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            <div className="no-scrollbar absolute top-4 left-1/2 z-20 max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-x-auto rounded-full">
              <GlassToggleGroup
                value={previewBackground}
                onValueChange={setPreviewBackground}
                aria-label="Preview background"
                className="h-9 w-max min-w-fit"
              >
                {lightPreviewBackgrounds.map((background) => (
                  <BackgroundToggleItem key={background.value} background={background} />
                ))}
                <span aria-hidden className="bg-foreground/20 mx-1 h-5 w-px shrink-0 dark:bg-white/20" />
                {darkPreviewBackgrounds.map((background) => (
                  <BackgroundToggleItem key={background.value} background={background} />
                ))}
              </GlassToggleGroup>
            </div>
            <div className={cn("relative z-10", previewThemeClassName)}>{component}</div>
          </div>
        </div>
      </Card>

      {!hideCode && (
        <GlassCard
          data-slot="glass-component-code"
          glassVariant={codeGlassVariant}
          className="group/code relative -mt-px gap-0 overflow-hidden rounded-t-none rounded-b-[28px] py-0"
        >
          {codePanel}
        </GlassCard>
      )}
    </div>
  );
}

function BackgroundToggleItem({ background }: { background: PreviewBackground }) {
  return (
    <GlassToggleGroupItem value={background.value} aria-label={background.label} className="size-9 p-0">
      <span
        aria-hidden
        className="size-4.5 rounded-full border border-white/70 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{
          background: background.swatch,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: background.image ? "cover" : background.checker ? "8px 8px" : "auto",
        }}
      />
    </GlassToggleGroupItem>
  );
}
