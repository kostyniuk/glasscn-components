import { AppSidebar } from "@/components/app-sidebar";
import { GlassSidebarInset, GlassSidebarTrigger } from "@/components/ui/glasscn/glass-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ComponentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <GlassSidebarInset className="bg-transparent">
        <header className="sticky top-0 z-10 flex h-12 items-center px-4">
          <GlassSidebarTrigger glassVariant="frosted" />
        </header>
        {children}
      </GlassSidebarInset>
    </SidebarProvider>
  );
}
