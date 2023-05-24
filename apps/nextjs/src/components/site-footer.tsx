import Link from "next/link";

import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="hidden h-6 w-6 md:inline-block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              MSPL KE
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
