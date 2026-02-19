import AppSidebar from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-dvh w-full bg-slate-950 text-slate-100">
        <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-[280px_1fr]">
          <AppSidebar />
          <div className="flex min-w-0 flex-col">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur">
              {/* <SidebarTrigger /> */}

              <div className="flex w-full items-center justify-between">
                <div className="text-sm font-medium">Industrial Operation Platform</div>
                <div className="text-xs text-slate-400">Role: Operator</div>
              </div>
            </header>

            <main className="min-w-0 flex-1 px-4 py-4 lg:px-6">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
