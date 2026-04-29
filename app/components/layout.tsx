import { AppSidebar } from "@/components/app-sidebar";
import { GlassSidebarInset } from "@/components/ui/glasscn/glass-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ComponentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <GlassSidebarInset className="bg-transparent">{children}</GlassSidebarInset>
    </SidebarProvider>
  );
}
