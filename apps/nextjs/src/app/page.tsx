import type { Metadata } from "next";

import { SiteHeader } from "~/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <SiteHeader />
      </div>
    </>
  );
}
