import Link from "next/link";

import { ComingSoon } from "@/components/coming-soon";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-lg tracking-tight">Big Order</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" asChild>
              <Link href="/roadmap">Roadmap</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <ComingSoon side="bottom">
              <Button className="ml-4 hover:cursor-not-allowed">
                Install App
              </Button>
            </ComingSoon>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
