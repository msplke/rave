"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { Icons } from "~/components";
import { cn } from "~/lib/utils";
import { type MainNavItem } from "~/types";
import { WorkspaceSwitcher } from "./workspace-switcher";

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-4">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
      </Link>
      <span className="mx-2 self-center text-xl font-bold text-muted-foreground">
        /
      </span>
      <WorkspaceSwitcher />

      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
