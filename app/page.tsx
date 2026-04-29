import { ArrowRightIcon, CopyIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { CodeBlockCommand, PackageManagerProvider } from "@/components/ui/code-block-command";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { getComponentDocs } from "@/lib/component-docs";

export function GitHubLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.95c-2.94.64-3.56-1.25-3.56-1.25-.48-1.2-1.17-1.52-1.17-1.52-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.08.88.1-.68.37-1.15.67-1.41-2.35-.27-4.82-1.18-4.82-5.24 0-1.16.41-2.1 1.09-2.84-.11-.27-.47-1.37.1-2.85 0 0 .89-.29 2.91 1.08a10.1 10.1 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.58 1.48.22 2.58.11 2.85.68.74 1.09 1.68 1.09 2.84 0 4.07-2.48 4.97-4.85 5.23.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export default function Page() {
  const docs = getComponentDocs();

  return (
    <div className="relative min-h-svh font-sans text-black transition-colors duration-500 selection:bg-black/10 dark:text-white dark:selection:bg-white/30">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-24 text-center sm:pt-40">
        {/* Floating Cluster */}
        <div
          className="animate-float absolute right-[10%] bottom-[-20%] hidden w-[26rem] lg:block"
          style={{ animationDelay: "2.5s" }}
        >
          <GlassCard glassVariant="liquid" className="rounded-3xl border-black/10 p-3 text-left dark:border-white/10">
            <div className="mb-3 px-3 pt-2">
              <div className="text-sm font-semibold text-black dark:text-white">Use the registry</div>
              <div className="text-xs text-black/50 dark:text-white/50">
                Pull components into your codebase with one command.
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
        </div>

        <GlassBadge
          glassVariant="liquid"
          className="mb-8 border-black/10 px-4 py-1.5 font-mono text-xs tracking-widest text-black/80 uppercase dark:border-white/10 dark:text-white/80"
        >
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-500 dark:bg-[#b486ff]"></span>
          v0.4 — Liquid Bold variant shipped
        </GlassBadge>

        <h1 className="mb-6 max-w-4xl font-sans text-6xl leading-[1.05] font-bold tracking-tighter text-balance sm:text-[5.5rem]">
          Apple Glass, <br />
          rebuilt for{" "}
          <span className="bg-gradient-to-b from-black/80 to-black/30 bg-clip-text pr-4 text-transparent italic dark:from-white dark:to-[#a9c4ff]">
            shadcn.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-[620px] text-lg leading-relaxed text-balance text-black/60 sm:text-[1.1rem] dark:text-white/60">
          A glassmorphism component library for React — fifteen drop-in primitives with five surface variants from clear
          to liquid-bold. Source lives in your codebase.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#components"
            className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-[15px] font-semibold text-white transition-colors hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Browse components <ArrowRightIcon className="ml-2 size-4" />
          </a>
          <GlassButton
            glassVariant="liquid"
            size="lg"
            className="h-12 gap-2 rounded-full border-black/20 px-8 text-[15px] text-black dark:border-white/20 dark:text-white"
            render={<a href="https://github.com/kostyniuk/glasscn" target="_blank" rel="noreferrer" />}
          >
            <GitHubLogo className="size-4" />
            View on GitHub
          </GlassButton>
        </div>
      </section>

      {/* Components Grid */}
      <section id="components" className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.18em] text-blue-600 uppercase dark:text-[#a9c4ff]/80">
            // 15 components
          </div>
          <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tighter text-black sm:text-[3rem] dark:text-white">
            Drop-in glass primitives, on top of shadcn.
          </h2>
          <p className="text-lg leading-relaxed text-balance text-black/60 dark:text-white/60">
            Every component ships with five glass variants — clear, frosted, subtle, liquid, and liquid-bold. Install
            just what you need; dependencies resolve automatically. Built on top of shadcn, with full compatibility
            across shadcn versions, these components render the underlying shadcn primitives under the hood so you keep
            the same foundation, API shape, and ownership model.
          </p>
        </div>

        <div className="grid [grid-auto-flow:dense] gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {docs.map((doc) => {
            const Demo = doc.Demo;

            const getColSpan = (slug: string) => {
              if (["glass-sidebar"].includes(slug)) return "sm:col-span-2 lg:col-span-3 xl:col-span-4";
              if (
                [
                  "glass-card",
                  "glass-combobox",
                  "glass-code-block-command",
                  "glass-alert",
                  "liquid-text",
                  "glass-checkbox",
                ].includes(slug)
              )
                return "sm:col-span-2";
              return "col-span-1";
            };

            return (
              <div
                key={doc.slug}
                className={`group flex flex-col rounded-[1.2rem] border border-black/10 p-5 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 ${getColSpan(doc.slug)}`}
              >
                <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-xl p-4">
                  <Demo variant="liquid" />
                </div>
                <div className="mt-5 flex flex-1 items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-tight text-black dark:text-white">{doc.title}</h3>
                    <p className="mt-1 font-mono text-xs text-black/50 dark:text-white/50">5 variants</p>
                  </div>
                  <GlassButton
                    glassVariant="clear"
                    size="sm"
                    className="h-8 gap-1.5 rounded-lg border-black/10 px-3 font-mono text-xs text-black/70 hover:text-black dark:border-white/10 dark:text-white/70 dark:hover:text-white"
                    render={<Link href={`/components/${doc.slug}`} />}
                  >
                    <CopyIcon className="size-3" /> add
                  </GlassButton>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Variants Section */}
      <section id="variants" className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.18em] text-blue-600 uppercase dark:text-[#a9c4ff]/80">
            // 5 surfaces
          </div>
          <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tighter text-black sm:text-[3rem] dark:text-white">
            One system, five refractions.
          </h2>
          <p className="text-lg leading-relaxed text-balance text-black/60 dark:text-white/60">
            From the thinnest pane to a glossier-than-iOS finish — choose the variant that matches the moment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "clear", desc: "Light backdrop blur, hairline border. The thinnest pane of glass." },
            { name: "frosted", desc: "Heavy 16px blur. Diffuses what's behind it like real frosted glass." },
            { name: "subtle", desc: "Whisper-thin tint. For nested surfaces that should barely register." },
            { name: "liquid", desc: "Pure CSS. Multi-layer bevel, sheen, slow ambient drift, warm glow." },
            { name: "liquid-bold", desc: "Amped-up liquid. Brighter chamfer, glossier finish, deeper saturation." },
          ].map((v) => (
            <div key={v.name} className="flex flex-col gap-4">
              <GlassCard
                glassVariant={v.name as any}
                className="flex h-36 items-center justify-center rounded-[1.2rem] border-black/10 dark:border-white/10"
              >
                <span className="text-[17px] font-semibold tracking-tight text-black dark:text-white">{v.name}</span>
              </GlassCard>
              <div>
                <div className="mb-2 font-mono text-[13px] font-semibold text-black dark:text-white">
                  glassVariant="{v.name}"
                </div>
                <div className="text-[13px] leading-relaxed text-black/50 dark:text-white/50">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Install Section */}
      <section id="install" className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 font-mono text-[13px] font-medium tracking-[0.18em] text-blue-600 uppercase dark:text-[#a9c4ff]/80">
            // installation
          </div>
          <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tighter text-black sm:text-[3rem] dark:text-white">
            One command. Local source ownership.
          </h2>
          <p className="text-lg leading-relaxed text-balance text-black/60 dark:text-white/60">
            Powered by the shadcn registry — components land directly in your codebase. No npm package, no version lock,
            no black box.
          </p>
        </div>

        <GlassCard
          glassVariant="liquid-bold"
          className="max-w-3xl rounded-3xl border-black/10 p-2 dark:border-white/10"
        >
          <div className="flex items-center justify-between rounded-[1.2rem] bg-black/5 p-6 font-mono text-[15px] dark:bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-[#a9c4ff]/70">$</span>
              <span className="text-black dark:text-white">
                npx shadcn add <span className="text-blue-600 dark:text-[#a9c4ff]">@glasscn/glass-button</span>
              </span>
            </div>
            <GlassButton
              glassVariant="subtle"
              size="sm"
              className="h-9 rounded-xl border-black/10 px-4 font-mono text-[13px] text-black dark:border-white/10 dark:text-white"
            >
              <CopyIcon className="mr-2 size-[14px]" /> copy
            </GlassButton>
          </div>
        </GlassCard>

        <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { k: "01", t: "Install via shadcn", d: "Resolves all registry dependencies." },
            { k: "02", t: "Source lives with you", d: "Edit, theme, fork — no upstream surprises." },
            { k: "03", t: "Pick a variant", d: "Five glass surfaces — drop-in via prop." },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/5 dark:bg-white/[0.02]"
            >
              <div className="mb-3 font-mono text-[13px] text-blue-600 dark:text-[#a9c4ff]/70">{s.k}</div>
              <div className="mb-2 text-[15px] font-semibold tracking-tight text-black dark:text-white">{s.t}</div>
              <div className="text-[13px] leading-relaxed text-black/50 dark:text-white/50">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-10 pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2rem] border border-black/10 bg-black/[0.02] p-8 md:p-10 dark:border-white/5 dark:bg-white/[0.02]">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="max-w-sm">
                <div className="mb-3 text-[28px] font-bold tracking-tight text-black dark:text-white">
                  Build with light.
                </div>
                <div className="text-[13.5px] leading-relaxed text-black/50 dark:text-white/50">
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
                      { label: "GitHub", href: "https://github.com/kostyniuk/glasscn" },
                      { label: "shadcn registry", href: "https://ui.shadcn.com/docs/registry" },
                      { label: "Base UI", href: "https://base-ui.com" },
                    ],
                  },
                ].map((col) => (
                  <div key={col.t} className="flex flex-col gap-3">
                    <div className="mb-1 font-mono text-[11.5px] tracking-[0.12em] text-black/50 uppercase dark:text-white/50">
                      {col.t}
                    </div>
                    {col.l.map((it) =>
                      it.href.startsWith("http") ? (
                        <a
                          key={it.label}
                          href={it.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] text-black/80 transition-colors hover:text-black dark:text-white/80 dark:hover:text-white"
                        >
                          {it.label}
                        </a>
                      ) : it.href.startsWith("/") ? (
                        <Link
                          key={it.label}
                          href={it.href}
                          className="text-[13px] text-black/80 transition-colors hover:text-black dark:text-white/80 dark:hover:text-white"
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <a
                          key={it.label}
                          href={it.href}
                          className="text-[13px] text-black/80 transition-colors hover:text-black dark:text-white/80 dark:hover:text-white"
                        >
                          {it.label}
                        </a>
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 font-mono text-[12px] text-black/40 sm:flex-row dark:border-white/5 dark:text-white/40">
              <span>© 2026 glasscn-components</span>
              <span>v0.4.0 — built on shadcn/ui + Base UI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
