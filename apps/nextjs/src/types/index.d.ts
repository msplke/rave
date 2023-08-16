export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MainNavItem = NavItem;

export interface DashboardConfig {
  mainNav: MainNavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  creator: string;
  authors: { name: string; url: string }[];
  keywords: string[];
  ogImage?: string;
  links: {
    github: string;
    twitter?: string;
  };
}
