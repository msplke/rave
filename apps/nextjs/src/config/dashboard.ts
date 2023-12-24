import type { DashboardConfig } from "~/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Overview",
      href: "/overview",
    },
    {
      title: "Settings",
      href: "/settings",
      disabled: true,
    },
  ],
};
