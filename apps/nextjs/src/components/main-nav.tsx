"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/utils/cnHelper";
import { mainNav, userNav } from "~/config/nav";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const navItems = true ? userNav : mainNav; // FIXME

  return (
    <nav
      className={cn(
        "hidden items-center space-x-4 md:flex lg:space-x-6",
        className,
      )}
      {...props}
    >
      {navItems.map((navItem, index) => (
        <Link
          href={navItem.href}
          key={`${navItem.href}-${index}`}
          className={cn(
            "hover:text-foreground/80 text-sm font-medium transition-colors",
            pathname === navItem.href
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {navItem.title}
        </Link>
      ))}
    </nav>
  );
}
