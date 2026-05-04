import { notFound } from "next/navigation";
import * as React from "react";

import { ComponentPreview } from "@/components/component-preview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
import { GlassSeparator } from "@/components/ui/glasscn/glass-separator";
import {
  getComponentDoc,
  getComponentDocs,
  glassVariants,
  type ApiProp,
  type ComponentDoc,
} from "@/lib/component-docs";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return getComponentDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  return <ComponentDocsPage doc={doc} />;
}

function ComponentDocsPage({ doc }: { doc: ComponentDoc }) {
  return (
    <div className="flex min-h-svh justify-center px-6 pb-16">
      <article className="w-full max-w-5xl min-w-0 py-20">
        <GlassCard glassVariant="subtle" className="mb-8 border-white/20 dark:border-white/10">
          <CardHeader className="space-y-3">
            {/* <GlassBadge glassVariant="clear" className="w-fit px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]">
              Component Docs
            </GlassBadge> */}
            <CardTitle className="text-3xl font-medium tracking-tight">{doc.title}</CardTitle>
            <p className="text-foreground/85 max-w-2xl text-base leading-7">{doc.description}</p>
          </CardHeader>
        </GlassCard>

        <ComponentPreview name={doc.slug} previewClassName={doc.previewClassName} />

        <Section title="Installation">
          <PackageManagerProvider>
            <GlassCodeBlockCommand
              npm={`npx shadcn add @glasscn/${doc.registryName}`}
              pnpm={`pnpm dlx shadcn add @glasscn/${doc.registryName}`}
              yarn={`yarn dlx shadcn add @glasscn/${doc.registryName}`}
              bun={`bunx shadcn add @glasscn/${doc.registryName}`}
            />
          </PackageManagerProvider>
        </Section>

        <Section title="API">
          <ApiTable api={doc.api} />
        </Section>

        <Section title="Variants">
          <VariantsPreview doc={doc} />
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12 scroll-m-16">
      <h2 className="mb-4 text-xl font-medium tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function ApiTable({ api }: { api: ApiProp[] }) {
  return (
    <GlassCard glassVariant="frosted" className="overflow-x-auto border-white/15 dark:border-white/10">
      <CardContent className="px-0">
        <div className="bg-muted/40 grid min-w-3xl grid-cols-[minmax(8rem,1fr)_minmax(10rem,1.2fr)_minmax(6rem,0.6fr)_minmax(14rem,1.8fr)] px-4 py-3 text-sm font-medium">
          <div>Prop</div>
          <div>Type</div>
          <div>Default</div>
          <div>Description</div>
        </div>
        <GlassSeparator glassVariant="subtle" />
        {api.map((item, index) => (
          <React.Fragment key={`${item.component ?? "root"}-${item.name}-${index}`}>
            <div className="grid min-w-3xl grid-cols-[minmax(8rem,1fr)_minmax(10rem,1.2fr)_minmax(6rem,0.6fr)_minmax(14rem,1.8fr)] gap-0 px-4 py-3 text-sm">
              <div className="min-w-0">
                {item.component && (
                  <GlassBadge glassVariant="subtle" className="mb-2 w-fit px-2 py-0.5 font-mono text-[10px]">
                    {item.component}
                  </GlassBadge>
                )}
                <code className="text-foreground font-mono">{item.name}</code>
              </div>
              <code className="text-foreground/80 min-w-0 font-mono text-xs wrap-break-word whitespace-pre-wrap">
                {item.type}
              </code>
              <code className="text-foreground/80 font-mono text-xs">{item.defaultValue ?? "-"}</code>
              <div className="text-foreground/80">{item.description}</div>
            </div>
            {index < api.length - 1 ? <GlassSeparator glassVariant="subtle" /> : null}
          </React.Fragment>
        ))}
      </CardContent>
    </GlassCard>
  );
}

function VariantsPreview({ doc }: { doc: ComponentDoc }) {
  const Demo = doc.Demo;

  return (
    <div className={cn("grid grid-cols-1 gap-4", doc.variantsGridClassName)}>
      {glassVariants.map((variant) => (
        <Card key={variant} variant="outline" className="p-4">
          <div>
            <GlassBadge glassVariant="clear" className="mb-3 px-2.5 py-1 font-mono text-xs">
              {variant}
            </GlassBadge>
            <div className="flex min-h-32 items-center justify-center">
              <Demo variant={variant} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
