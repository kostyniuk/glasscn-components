import type { Metadata } from "next";
import { Geist_Mono, Inter, Righteous } from "next/font/google";

import "./globals.css";
import { AppBackground } from "@/components/app-background";
import { SiteHeader } from "@/components/home/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const righteous = Righteous({ weight: "400", subsets: ["latin"], variable: "--font-display" });

const siteDescription =
  "Apple-inspired liquid glass components for shadcn/ui, with registry-ready primitives, live previews, and install commands.";

export const metadata: Metadata = {
  applicationName: "glasscn",
  title: { default: "glasscn - Liquid Glass Components for shadcn/ui", template: "%s | glasscn" },
  description: siteDescription,
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
    description: siteDescription,
  },
  twitter: { card: "summary", title: "glasscn - Liquid Glass Components for shadcn/ui", description: siteDescription },
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
          <SiteHeader />
          <TooltipProvider>
            <div className="relative z-10">{children}</div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
