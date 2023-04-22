import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "~/components/icons";
import { MainNav } from "~/components/main-nav";
import { UserNav } from "~/components";
import { TeamSwitcher } from "./components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/">
              <Icons.logo />
            </Link>
            <span className="text-muted-foreground mx-2 text-lg font-bold">
              /
            </span>

            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker /> */}
            </div>
          </div>

          {/* <Tabs defaultValue="overview" className="space-y-4"> */}
          {/* <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList> */}

          {/* <TabsContent value="overview" className="space-y-4"></TabsContent> */}
          {/* </Tabs> */}
        </div>
      </div>
    </>
  );
}
