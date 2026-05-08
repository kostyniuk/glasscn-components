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
