import { ArrowRightIcon, Maximize2Icon, MinusIcon, SquareArrowOutUpRightIcon, XIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { CopyButton } from "@/components/custom/copy-button";
import { HeroGlassPill } from "@/components/home/hero-glass-pill";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlockCommand, PackageManagerProvider } from "@/components/ui/code-block-command";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassItem } from "@/components/ui/glasscn/glass-item";
import { HighlightText } from "@/components/ui/highlight-text";
import { Input } from "@/components/ui/input";
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { getCatalogComponentDocs } from "@/lib/component-docs";

import { GitHubLogo } from "./GitHubLogo";

export const metadata: Metadata = {
  title: "Liquid Glass Components for shadcn/ui",
  description:
    "Explore glasscn, a registry-ready collection of Apple-inspired liquid glass components for shadcn/ui and React.",
  openGraph: {
    title: "glasscn - Liquid Glass Components for shadcn/ui",
    description:
      "Explore glasscn, a registry-ready collection of Apple-inspired liquid glass components for shadcn/ui and React.",
  },
  twitter: {
    title: "glasscn - Liquid Glass Components for shadcn/ui",
    description:
      "Explore glasscn, a registry-ready collection of Apple-inspired liquid glass components for shadcn/ui and React.",
  },
};

export default function Page() {
  const docs = getCatalogComponentDocs();

  return (
    <div className="relative min-h-svh font-sans text-black transition-colors duration-500 selection:bg-black/10 dark:text-white dark:selection:bg-white/30">
      {/* Hero Section - Editorial Style */}
      <section className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8 xl:gap-16">
          {/* Left column - Typography with draggable glass pill */}
          <div className="relative flex flex-col justify-between">
            <HeroGlassPill className="rounded-full" />
            <div>
              <p className="mb-6 font-[family-name:var(--font-display)] text-[clamp(4rem,12vw,10rem)] text-black">
                <HighlightText>glasscn</HighlightText>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,12vw,4rem)] leading-[0.85] tracking-[-0.02em] text-black dark:text-white">
                LIQUID GLASS
              </h2>

              <div className="mt-6">
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/60 dark:text-white/60">
                  Liquid glass components crafted for clarity, precision and movement. Shaped by flow. Defined by light.
                </p>
              </div>

              {/* Keywords */}
              <div className="mt-12 space-y-1 font-mono text-[13px] tracking-[0.3em] text-black/80 uppercase dark:text-white/80">
                <div>CLARITY</div>
                <div>FLOW</div>
                <div>ADAPT</div>
              </div>
            </div>

            {/* Bottom left text block */}
            <div className="mt-16 lg:mt-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-4 bg-blue-500" />
                <span className="h-[2px] w-4 bg-blue-500" />
                <span className="h-[2px] w-4 bg-blue-500" />
              </div>
              <div className="mb-4 font-mono text-[11px] font-semibold tracking-wider text-black uppercase dark:text-white">
                EVERY CURVE.
                <br />
                EVERY DETAIL.
                <br />
                MADE TO FLOW.
              </div>
              <p className="max-w-[280px] text-[13px] leading-relaxed text-black/50 dark:text-white/50">
                Our liquid glass components combine elegance with engineering, bringing transparency and movement to
                your most innovative creations.
              </p>
            </div>
          </div>

          {/* Right column - Product surface */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[520px]">
              <GlassCard
                glassVariant="liquid-refract"
                className="border-black/10 px-1 py-4 shadow-[0_24px_90px_-48px_rgba(0,0,0,0.55)] sm:px-3 sm:py-6 dark:border-white/10"
              >
                <div className="absolute top-4 left-4 flex items-center gap-1.5">
                  <span className="group/close flex size-3 items-center justify-center rounded-full bg-[#FF5F56]">
                    <XIcon
                      className="size-2 text-[#4D0000] opacity-0 transition-opacity group-hover/close:opacity-100"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="group/min flex size-3 items-center justify-center rounded-full bg-[#FFBD2E]">
                    <MinusIcon
                      className="size-2 text-[#995700] opacity-0 transition-opacity group-hover/min:opacity-100"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="group/max flex size-3 items-center justify-center rounded-full bg-[#27C93F]">
                    <Maximize2Icon
                      className="size-2 text-[#006500] opacity-0 transition-opacity group-hover/max:opacity-100"
                      strokeWidth={3}
                    />
                  </span>
                </div>
                <CardHeader className="gap-2 px-6 sm:px-8">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                    The best Apple inspired{" "}
                    <Link href="/" className="mx-1 inline-flex align-middle">
                      <Avatar className="size-6">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>{" "}
                    library
                  </CardTitle>
                  <CardDescription className="text-[15px] leading-relaxed text-black/55 dark:text-white/55">
                    Liquid glass components with registry-first ownership, theme-aware variants, and a native-feeling
                    shadcn workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 sm:px-8">
                  <form>
                    <FieldGroup className="gap-5">
                      <Field>
                        <FieldLabel htmlFor="library-name">Full Name</FieldLabel>
                        <Input
                          id="library-name"
                          readOnly
                          value="glasscn"
                          className="h-11 rounded-xl border-black/10 bg-black/[0.03] text-black dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                        />
                      </Field>
                      <Field>
                        <FieldLabel>GitHub</FieldLabel>
                        <GlassItem
                          render={
                            <Link
                              href="https://github.com/kostyniuk/glasscn-components"
                              target="_blank"
                              rel="noreferrer"
                            />
                          }
                          glassVariant="liquid-refract"
                          variant="outline"
                          className="rounded-xl border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04]"
                        >
                          <ItemMedia variant="icon">
                            <GitHubLogo className="size-4" />
                          </ItemMedia>
                          <ItemContent>
                            <ItemTitle>kostyniuk/glasscn-components</ItemTitle>
                            <ItemDescription>Open source registry components for shadcn/ui.</ItemDescription>
                          </ItemContent>
                        </GlassItem>
                      </Field>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor="author">Author</FieldLabel>
                          <Input
                            id="author"
                            readOnly
                            value="Alex Kostyniuk"
                            className="h-11 rounded-xl border-black/10 bg-black/[0.03] text-black dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="year">Year</FieldLabel>
                          <Input
                            id="year"
                            readOnly
                            value="2026"
                            className="h-11 rounded-xl border-black/10 bg-black/[0.03] text-black dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel>Variants</FieldLabel>
                        <ButtonGroup>
                          {["clear", "frosted", "subtle", "liquid", "refract"].map((variant) => (
                            <Button key={variant} variant="outline">
                              {variant}
                            </Button>
                          ))}
                        </ButtonGroup>
                        <FieldDescription>
                          Five glass treatments, from barely-there clarity to full liquid refraction.
                        </FieldDescription>
                      </Field>
                    </FieldGroup>
                  </form>
                </CardContent>
              </GlassCard>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-0 hidden flex-col items-end gap-1 font-mono text-[10px] text-black/30 lg:flex dark:text-white/30">
              <span>—</span>
              <span>—</span>
              <span>—</span>
              <span>—</span>
            </div>

            <div className="absolute right-0 bottom-1/4 hidden font-mono text-[13px] text-black/60 lg:block dark:text-white/60">
              <div className="flex items-center gap-2">
                <span className="text-[10px]">▼</span>
              </div>
              <div className="mt-2">_01</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-black/10 pt-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8 xl:gap-16 dark:border-white/10">
          <div className="flex flex-col gap-4 sm:flex-row lg:items-end">
            <a
              href="#components"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-[15px] font-semibold text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Browse components <ArrowRightIcon className="ml-2 size-4" />
            </a>
            <GlassButton
              glassVariant="liquid-refract"
              size="lg"
              className="h-12 w-64 gap-2 rounded-full border-black/20 p-0 px-8 text-[15px] text-black dark:border-white/20 dark:text-white"
              nativeButton={false}
              render={<a href="https://github.com/kostyniuk/glasscn-components" target="_blank" rel="noreferrer" />}
            >
              <GitHubLogo className="size-4" />
              View on GitHub
            </GlassButton>
          </div>

          <div className="relative flex justify-center">
            <GlassCard
              glassVariant="liquid-refract"
              className="w-full max-w-[520px] rounded-2xl border-black/10 p-3 dark:border-white/10"
            >
              <div className="mb-2 px-2 pt-1">
                <div className="font-mono text-[10px] tracking-[0.2em] text-black/50 uppercase dark:text-white/50">
                  Quick install
                </div>
              </div>
              <PackageManagerProvider defaultPackageManager="pnpm">
                <CodeBlockCommand
                  className="border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-black/30"
                  npm="npx shadcn add @glasscn"
                  pnpm="pnpm dlx shadcn add @glasscn"
                  yarn="yarn dlx shadcn add @glasscn"
                  bun="bunx shadcn add @glasscn"
                />
              </PackageManagerProvider>
            </GlassCard>
            <div className="absolute top-0 -right-8 hidden flex-col items-end gap-1 font-mono text-[10px] text-black/30 lg:flex dark:text-white/30">
              <span>—</span>
              <span>—</span>
              <span>—</span>
            </div>
            <div className="absolute -right-8 bottom-0 hidden font-mono text-[13px] text-black/60 lg:block dark:text-white/60">
              <div className="text-[10px]">▼</div>
              <div className="mt-1">_02</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex items-end justify-between font-mono text-[10px] text-black/40 dark:text-white/40">
          <div className="flex items-center gap-4">
            <div className="flex gap-[2px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="h-6 w-[2px] bg-black/20 dark:bg-white/20" />
              ))}
            </div>
          </div>
          <span className="tracking-[0.2em] uppercase">DESIGNED TO REFLECT YOUR VISION.</span>
        </div>
      </section>

      {/* Components Grid */}
      <section id="components" className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.3em] text-black/40 uppercase dark:text-white/40">
            // {docs.length} COMPONENTS
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.01em] text-black dark:text-white">
            DROP-IN GLASS PRIMITIVES
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
            Components ship with registry-ready variants — from glass surfaces to custom color treatments. Install just
            what you need; dependencies resolve automatically.
          </p>
        </div>

        <div className="grid [grid-auto-flow:dense] gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {docs.map((doc) => {
            const Demo = doc.Demo;

            const getColSpan = (slug: string) => {
              if (["glass-sidebar"].includes(slug)) return "sm:col-span-2 lg:col-span-3 xl:col-span-4";
              if (
                ["glass-card", "glass-code-block-command", "glass-alert", "liquid-text", "glass-checkbox"].includes(
                  slug,
                )
              )
                return "sm:col-span-2";
              return "col-span-1";
            };

            return (
              <div
                key={doc.slug}
                className={`group flex flex-col rounded-2xl border border-black/100 bg-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:border-white/200 dark:hover:border-white/20 ${getColSpan(doc.slug)}`}
              >
                <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-xl p-4">
                  <Demo variant={doc.defaultVariant ?? "liquid-refract"} />
                </div>
                <div className="mt-5 flex flex-1 items-center justify-between">
                  <div>
                    <HighlightText>
                      <h3 className="text-[15px] font-semibold tracking-tight text-black">{doc.title}</h3>
                    </HighlightText>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.1em] text-black/50 uppercase dark:text-white/50">
                      5 variants
                    </p>
                  </div>
                  <GlassButton
                    glassVariant="liquid-refract"
                    size="sm"
                    className="h-8 gap-1.5 rounded-lg border-black/10 px-3 font-mono text-xs text-black/70 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:text-white"
                    nativeButton={false}
                    render={<Link href={`/components/${doc.slug}`} />}
                  >
                    <SquareArrowOutUpRightIcon className="size-3" /> Go to
                  </GlassButton>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Variants Section */}
      <section id="variants" className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.3em] text-black/40 uppercase dark:text-white/40">
            // 5 SURFACES
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.01em] text-black dark:text-white">
            ONE SYSTEM, FIVE REFRACTIONS
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
            From the thinnest pane to a glossier-than-iOS finish — choose the variant that matches the moment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            { name: "clear", desc: "Light backdrop blur, hairline border. The thinnest pane of glass." },
            { name: "frosted", desc: "Heavy 16px blur. Diffuses what's behind it like real frosted glass." },
            { name: "subtle", desc: "Whisper-thin tint. For nested surfaces that should barely register." },
            { name: "liquid", desc: "Pure CSS. Multi-layer bevel, sheen, slow ambient drift, warm glow." },
            {
              name: "liquid-refract",
              desc: "SVG displacement filter. Real lens-like refraction with curved glass effect.",
            },
          ].map((v) => (
            <div key={v.name} className="flex flex-col gap-4">
              <GlassCard
                glassVariant={v.name as any}
                className="flex h-36 items-center justify-center rounded-2xl border-black/10 dark:border-white/10"
              >
                <span className="font-mono text-[13px] font-semibold tracking-tight text-black dark:text-white">
                  {v.name}
                </span>
              </GlassCard>
              <div>
                <div className="mb-2 font-mono text-[10px] tracking-[0.1em] text-black/60 uppercase dark:text-white/60">
                  glassVariant="{v.name}"
                </div>
                <div className="text-[12px] leading-relaxed text-black/50 dark:text-white/50">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 font-mono text-[11px] font-medium tracking-[0.3em] text-black/40 uppercase dark:text-white/40">
            // INSTALLATION
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.01em] text-black dark:text-white">
            ONE COMMAND
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-black/60 dark:text-white/60">
            Powered by the shadcn registry — components land directly in your codebase. No npm package, no version lock,
            no black box.
          </p>
        </div>

        <GlassCard
          glassVariant="liquid-refract"
          className="w-full rounded-2xl border-black/10 p-2 dark:border-white/10"
        >
          <div className="flex items-center justify-between rounded-xl bg-black/5 p-6 font-mono text-[15px] dark:bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-black/40 dark:text-white/40">$</span>
              <span className="text-black dark:text-white">
                npx shadcn add <span className="text-black/60 dark:text-white/60">@glasscn/glass-button</span>
              </span>
            </div>
            <CopyButton
              text="npx shadcn add @glasscn/glass-button"
              size="sm"
              variant="outline"
              className="h-9 rounded-xl border-black/10 bg-white/50 px-4 font-mono text-[13px] text-black dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
          </div>
        </GlassCard>

        <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { k: "01", t: "Install via shadcn", d: "Resolves all registry dependencies." },
            { k: "02", t: "Source lives with you", d: "Edit, theme, fork — no upstream surprises." },
            { k: "03", t: "Pick a variant", d: "Five glass surfaces — drop-in via prop." },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border border-black/10 bg-transparent p-6 dark:border-white/5">
              <div className="mb-3 font-mono text-[11px] tracking-[0.2em] text-black/40 dark:text-white/40">{s.k}</div>
              <div className="mb-2 text-[15px] font-semibold tracking-tight text-black dark:text-white">{s.t}</div>
              <div className="text-[13px] leading-relaxed text-black/50 dark:text-white/50">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-10 pb-16">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="rounded-2xl border border-black/10 bg-transparent p-8 md:p-10 dark:border-white/5">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="max-w-sm">
                <HighlightText>
                  <div className="font-[family-name:var(--font-display)] text-[2rem] tracking-[-0.01em] text-black">
                    BUILD WITH LIGHT.
                  </div>
                </HighlightText>
                <div className="mt-4 text-[13px] leading-relaxed text-black/50 dark:text-white/50">
                  Open source. MIT licensed. Made by{" "}
                  <a
                    href="https://x.com/kostyniuk00"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black underline decoration-black/30 underline-offset-4 dark:text-white dark:decoration-white/30"
                  >
                    kostyniuk
                  </a>
                  .
                </div>
              </div>
              <div className="flex gap-12">
                {[
                  {
                    t: "Product",
                    l: [
                      { label: "Components", href: "/components" },
                      { label: "Variants", href: "#variants" },
                      { label: "Install", href: "#install" },
                    ],
                  },
                  {
                    t: "Resources",
                    l: [
                      { label: "GitHub", href: "https://github.com/kostyniuk/glasscn-components" },
                      { label: "shadcn registry", href: "https://ui.shadcn.com/docs/registry" },
                      { label: "Base UI", href: "https://base-ui.com" },
                    ],
                  },
                ].map((col) => (
                  <div key={col.t} className="flex flex-col gap-3">
                    <div className="mb-1 font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase dark:text-white/40">
                      {col.t}
                    </div>
                    {col.l.map((it) =>
                      it.href.startsWith("http") ? (
                        <a
                          key={it.label}
                          href={it.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                        >
                          {it.label}
                        </a>
                      ) : it.href.startsWith("/") ? (
                        <Link
                          key={it.label}
                          href={it.href}
                          className="text-[13px] text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <a
                          key={it.label}
                          href={it.href}
                          className="text-[13px] text-black/70 transition-colors hover:text-black dark:text-white/70 dark:hover:text-white"
                        >
                          {it.label}
                        </a>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 font-mono text-[10px] tracking-[0.15em] text-black/40 uppercase sm:flex-row dark:border-white/5 dark:text-white/40">
              <span>2026 glasscn-components</span>
              <span>v0.4.0 — built on shadcn/ui + Base UI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
