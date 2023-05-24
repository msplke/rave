import type { Icons } from "~/components/icons";

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

type NavType = NavItem[];

export const mainNav: NavType = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
];

export const userNav: NavType = [
  {
    title: "Events",
    href: "/dashboard",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];
