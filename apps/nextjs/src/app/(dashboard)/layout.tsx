import { UserAccountNav } from "~/components";
import { dashboardConfig } from "~/config/dashboard";
import { MainNav } from "./_components/main-nav";

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
            <UserAccountNav />
          </div>
        </div>
      </header>

      <div className="container flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
