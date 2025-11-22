import { FileQuestion } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-muted">
        <FileQuestion className="size-10 text-muted-foreground" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
        <h2 className="text-xl font-semibold tracking-tight">Page not found</h2>
        <p className="text-muted-foreground text-balance max-w-[500px]">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or doesn't exist.
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}
