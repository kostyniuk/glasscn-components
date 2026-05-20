import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import "./globals.css";
import { Geist_Mono, Inter, Righteous } from "next/font/google";

import { AppBackground } from "@/components/app-background";
import { SiteHeader } from "@/components/home/site-header";
import { ThemeSwitcherCard } from "@/components/home/theme-switcher-card";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_DESCRIPTION, SITE_URL, SOCIAL_CARD_IMAGE, TWITTER_SUMMARY_IMAGE } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const righteous = Righteous({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "glasscn",
  title: { default: "glasscn - Liquid Glass Components for shadcn/ui", template: "%s - glasscn" },
  description: SITE_DESCRIPTION,
  keywords: [
    "glasscn",
    "shadcn",
    "shadcn/ui",
    "liquid glass",
    "glass components",
    "React components",
    "Next.js components",
  ],
  authors: [{ name: "Alex Kostyniuk" }],
  creator: "Alex Kostyniuk",
  publisher: "glasscn-components",
  icons: {
    icon: [
      { url: "/glasscn-mark-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/glasscn-mark-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/glasscn-mark-light.svg",
    apple: "/glasscn-mark-light.svg",
  },
  openGraph: {
    type: "website",
    siteName: "glasscn",
    title: "glasscn - Liquid Glass Components for shadcn/ui",
    description: SITE_DESCRIPTION,
    images: [SOCIAL_CARD_IMAGE],
  },
  twitter: {
    card: "summary",
    title: "glasscn - Liquid Glass Components for shadcn/ui",
    description: SITE_DESCRIPTION,
    images: [TWITTER_SUMMARY_IMAGE],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, righteous.variable)}
    >
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <AppBackground />
          <div className="fixed top-2 z-50 flex w-full justify-center gap-8">
            <SiteHeader />
            <ThemeSwitcherCard />
          </div>
          <TooltipProvider>
            <div className="relative z-10">{children}</div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
