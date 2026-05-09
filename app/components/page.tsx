import { ArrowRightIcon, BoxesIcon, CommandIcon, SearchIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
import { HighlightText } from "@/components/ui/highlight-text";
import { getCatalogComponentDocs, glassVariants } from "@/lib/component-docs";

export const metadata: Metadata = {
  title: "Component Registry",
  description:
    "Browse registry-ready glasscn components with live previews, install commands, variant examples, and API notes.",
  openGraph: {
    title: "glasscn Component Registry",
    description:
      "Browse registry-ready glasscn components with live previews, install commands, variant examples, and API notes.",
  },
  twitter: {
    title: "glasscn Component Registry",
    description:
      "Browse registry-ready glasscn components with live previews, install commands, variant examples, and API notes.",
  },
};

export default function Page() {
  const docs = getCatalogComponentDocs();

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
        {/*
        <section className="mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                <Layers3Icon className="size-4" />
                Featured
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Liquid glass highlights</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {featuredDocs.map((doc, index) => {
              const Demo = doc.Demo;
              const variant = glassVariants[(index + 2) % glassVariants.length];

              return (
                <GlassCard
                  key={doc.slug}
                  glassVariant={variant}
                  className="group flex flex-col p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex min-h-40 items-center justify-center rounded-xl bg-white/5 p-4 dark:bg-black/5">
                    <Demo variant="liquid" />
                  </div>
                  <div className="mt-6 flex flex-1 flex-col">
                    <h3 className="text-lg font-medium">{doc.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">{doc.description}</p>
                    <GlassButton
                      glassVariant="clear"
                      size="sm"
                      render={<Link href={`/components/${doc.slug}`} />}
                      className="mt-auto w-fit gap-2"
                    >
                      Open docs
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </GlassButton>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section> */}

        <section className="animate-in fade-in slide-in-from-bottom-12 delay-300 duration-1000">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
                <SearchIcon className="size-4" />
                Catalog
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">All components</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {glassVariants.map((variant) => (
                <GlassBadge key={variant} glassVariant={variant} className="px-3 py-1 text-xs">
                  {variant}
                </GlassBadge>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {docs.map((doc) => {
              const Demo = doc.Demo;

              return (
                <Card
                  key={doc.slug}
                  variant="outline"
                  className="group flex min-h-64 flex-col bg-transparent p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex min-h-32 flex-1 items-center justify-center overflow-hidden rounded-xl p-4">
                    <Demo variant={doc.defaultVariant ?? "liquid-refract"} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight text-black">
                        <HighlightText>{doc.title}</HighlightText>
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                    <GlassButton
                      glassVariant="clear"
                      size="sm"
                      render={<Link href={`/components/${doc.slug}`} />}
                      className="mt-6 w-fit gap-2"
                    >
                      Open docs
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </GlassButton>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
