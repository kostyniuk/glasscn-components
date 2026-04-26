import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { GlassSidebarInset, GlassSidebarTrigger } from "@/components/ui/glasscn/glass-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen bg-[url('/bg-light.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/bg-dark.png')]">
        <ThemeProvider>
          <TooltipProvider>
            <SidebarProvider>
              <AppSidebar />
              <GlassSidebarInset className="bg-transparent">
                <header className="sticky top-0 z-10 flex h-12 items-center px-4">
                  <GlassSidebarTrigger glassVariant="frosted" />
                </header>
                {children}
              </GlassSidebarInset>
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
