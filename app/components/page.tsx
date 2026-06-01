import { BoxesIcon, CommandIcon } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
import { getCatalogPreviewComponentDocs, getCustomComponentDocs, type ComponentDoc } from "@/lib/component-docs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Component Registry",
  description:
    "Browse registry-ready glasscn components with live previews, install commands, variant examples, and API notes.",
  socialTitle: "glasscn Component Registry",
  imageAlt: "glasscn component registry",
});

export default function Page() {
  const docs = [...getCatalogPreviewComponentDocs(), ...getCustomComponentDocs()];

  return (
    <main className="relative min-h-svh px-4 pt-24 pb-24 md:px-8">
      <div className="max-w-8xl relative z-10 mx-auto w-full">
        <section className="animate-in fade-in slide-in-from-bottom-8 mb-16 duration-1000">
          <GlassCard
            glassVariant="liquid-refract"
            className="relative overflow-hidden rounded-[2.5rem] p-6 shadow-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-[#c5f83a]/70" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="max-w-2xl">
                <GlassBadge glassVariant="clear" className="mb-6 gap-2 px-4 py-2">
                  <BoxesIcon className="size-4" />
                  Component Registry
                </GlassBadge>
                <h1 className="text-5xl leading-[1.1] font-semibold tracking-tighter text-balance text-black md:text-6xl">
                  A glass system with <br /> working primitives.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-balance text-black/80">
                  Browse the registry-ready glass components, inspect their variants, and jump into the docs for install
                  commands, API notes, and live previews.
                </p>
              </div>

              <Card variant="outline" className="bg-transparent p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-base font-medium text-black">Registry install</p>
                    <p className="mt-1 text-sm text-black">Start with the button primitive.</p>
                  </div>
                  <GlassCard
                    glassVariant="liquid-refract"
                    className="flex size-10 items-center justify-center rounded-full p-0"
                  >
                    <CommandIcon className="size-5" />
                  </GlassCard>
                </div>
                <PackageManagerProvider>
                  <GlassCodeBlockCommand
                    glassVariant="liquid-refract"
                    npm="npx shadcn add @glasscn/glass-button"
                    pnpm="pnpm dlx shadcn add @glasscn/glass-button"
                    yarn="yarn dlx shadcn add @glasscn/glass-button"
                    bun="bunx shadcn add @glasscn/glass-button"
                  />
                </PackageManagerProvider>
              </Card>
            </div>
          </GlassCard>
        </section>

        <GlassCard
          glassVariant="liquid-refract"
          className="animate-in fade-in slide-in-from-bottom-8 rounded-[2rem] p-6 duration-700 md:p-8"
        >
          <section>
            <h2 className="text-2xl leading-tight font-semibold tracking-tight">Components</h2>
          </section>

          <ComponentLinkGrid docs={docs} />
        </GlassCard>
      </div>
    </main>
  );
}

function ComponentLinkGrid({ docs }: { docs: ComponentDoc[] }) {
  return (
    <nav aria-label="Components" className="mt-4 grid gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
      {docs.map((doc) => (
        <Link
          key={doc.slug}
          href={`/components/${doc.slug}`}
          className="focus-visible:ring-ring focus-visible:ring-offset-background rounded-md px-2 py-1.5 text-sm font-normal transition-colors hover:font-semibold focus-visible:font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:font-semibold"
        >
          {doc.title}
        </Link>
      ))}
    </nav>
  );
}
