import { notFound } from "next/navigation";
import type * as React from "react";

import { ComponentPreview } from "@/components/component-preview";
import { CodeBlockCommand, PackageManagerProvider } from "@/components/ui/code-block-command";
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
      <article className="w-full max-w-5xl min-w-0 py-10">
        <header className="mb-8 space-y-3">
          <h1 className="text-3xl font-medium tracking-tight">{doc.title}</h1>
          <p className="text-foreground/85 max-w-2xl text-base leading-7">{doc.description}</p>
        </header>

        <ComponentPreview name={doc.slug} previewClassName={doc.previewClassName} />

        <Section title="Installation">
          <PackageManagerProvider>
            <CodeBlockCommand
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
    <div className="bg-background/45 overflow-x-auto rounded-xl border backdrop-blur">
      <div className="bg-muted/60 grid min-w-3xl grid-cols-[minmax(8rem,1fr)_minmax(10rem,1.2fr)_minmax(6rem,0.6fr)_minmax(14rem,1.8fr)] border-b px-4 py-3 text-sm font-medium">
        <div>Prop</div>
        <div>Type</div>
        <div>Default</div>
        <div>Description</div>
      </div>
      {api.map((item, index) => (
        <div
          key={`${item.component ?? "root"}-${item.name}-${index}`}
          className="grid min-w-3xl grid-cols-[minmax(8rem,1fr)_minmax(10rem,1.2fr)_minmax(6rem,0.6fr)_minmax(14rem,1.8fr)] gap-0 border-b px-4 py-3 text-sm last:border-b-0"
        >
          <div className="min-w-0">
            {item.component && <div className="text-muted-foreground mb-1 text-xs">{item.component}</div>}
            <code className="text-foreground font-mono">{item.name}</code>
          </div>
          <code className="text-foreground/80 min-w-0 font-mono text-xs wrap-break-word whitespace-pre-wrap">
            {item.type}
          </code>
          <code className="text-foreground/80 font-mono text-xs">{item.defaultValue ?? "-"}</code>
          <div className="text-foreground/80">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

function VariantsPreview({ doc }: { doc: ComponentDoc }) {
  const Demo = doc.Demo;

  return (
    <div className={cn("grid grid-cols-1 gap-4", doc.variantsGridClassName)}>
      {glassVariants.map((variant) => (
        <div
          key={variant}
          className="rounded-xl border bg-[url('/bg-light.png')] bg-cover bg-center bg-no-repeat p-4 backdrop-blur dark:bg-[url('/bg-dark.png')]"
        >
          <div className="text-muted-foreground mb-3 font-mono text-xs">{variant}</div>
          <div className="flex min-h-32 items-center justify-center">
            <Demo variant={variant} />
          </div>
        </div>
      ))}
    </div>
  );
}
