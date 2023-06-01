import {
  DashboardNav,
  MainNav,
  SiteFooter,
  UserAccountNav,
} from "~/components";
import { dashboardConfig } from "~/config/dashboard";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />

          <div className="ml-auto flex items-center space-x-4">
            {/* @ts-expect-error - TS v5.0.* doesn't play well with async RSCs */}
            <UserAccountNav />
          </div>
        </div>
      </header>

      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>

      {/* <SiteFooter className="border-t" /> */}
      <SiteFooter />
    </div>
  );
}
