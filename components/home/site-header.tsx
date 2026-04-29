import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/home/theme-toggle";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { XIcon } from "@/components/ui/icons/social-icons";

function GithubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.95c-2.94.64-3.56-1.25-3.56-1.25-.48-1.2-1.17-1.52-1.17-1.52-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.08.88.1-.68.37-1.15.67-1.41-2.35-.27-4.82-1.18-4.82-5.24 0-1.16.41-2.1 1.09-2.84-.11-.27-.47-1.37.1-2.85 0 0 .89-.29 2.91 1.08a10.1 10.1 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.58 1.48.22 2.58.11 2.85.68.74 1.09 1.68 1.09 2.84 0 4.07-2.48 4.97-4.85 5.23.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export async function SiteHeader() {
  let stars = null;

  try {
    const res = await fetch("https://api.github.com/repos/kostyniuk/glasscn-components", {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const repo = await res.json();
      stars = repo.stargazers_count;
    }
  } catch {}

  return (
    <div className="fixed z-50 flex w-full justify-center">
      <GlassCard
        glassVariant="clear"
        className="mt-2 h-12 w-[calc(100%-2rem)] overflow-hidden rounded-4xl border-white/[0.5] p-0 sm:w-[calc(50%-10px)]"
      >
        <div className="flex h-full items-center justify-between px-3 sm:px-5">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full px-2 py-1 transition-opacity hover:opacity-85"
            >
              <Image
                src="/glasscn-mark-light.svg"
                alt="glasscn"
                width={28}
                height={28}
                className="size-7 shrink-0 dark:hidden"
              />
              <Image
                src="/glasscn-mark-dark.svg"
                alt="glasscn"
                width={28}
                height={28}
                className="hidden size-7 shrink-0 dark:block"
              />
              <span className="hidden text-sm font-semibold tracking-tight sm:inline">glasscn</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="px-2.5 sm:px-3">
                Home
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="ghost" className="px-2.5 sm:px-3">
                Components
              </Button>
            </Link>
            <Link href="/liquid">
              <Button variant="ghost" className="px-2.5 sm:px-3">
                Liquid
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <ThemeToggle />
            <Link href="https://x.com/kostyniuk00" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                className="flex cursor-pointer flex-row items-center gap-0 sm:gap-2"
                aria-label="X"
              >
                <XIcon className="size-4 sm:size-5" />
              </Button>
            </Link>
            <Link href="https://github.com/kostyniuk/glasscn-components" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="flex cursor-pointer flex-row items-center gap-0 sm:gap-2">
                <GithubMark className="size-5" />
                {stars ? (
                  <span className="hidden text-sm font-medium sm:inline">{stars}</span>
                ) : (
                  <span className="hidden items-center gap-1.5 text-sm font-medium sm:flex">
                    Be first one to
                    <StarIcon className="size-4 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
