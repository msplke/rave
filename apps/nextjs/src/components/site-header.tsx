import Link from "next/link";

import { cn } from "~/utils/cnHelper";
import { Icons } from "~/components/icons";
import { MainNav } from "~/components/main-nav";
import { MobileNav } from "~/components/mobile-nav";
import { ModeToggle } from "~/components/mode-toggle";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";

export default function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href="/">
          <div className="mr-8 hidden items-center md:flex">
            <Icons.logo className="mr-2 h-6 w-6" />
            <span className="text-lg font-bold tracking-tight">Acme Corp</span>
          </div>
        </Link>

        <MainNav />
        <MobileNav />

        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
