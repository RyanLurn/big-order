import { Mail } from "lucide-react";
import Link from "next/link";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="container max-w-md">
          <Card className="border-border shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                <Mail className="size-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Get in touch</CardTitle>
              <CardDescription className="text-balance">
                Whether you are a merchant looking for early access or
                interested in partnerships, we are here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Email us directly at
                </p>
                <Link
                  className="block text-xl font-semibold tracking-tight text-primary hover:underline"
                  href="mailto:hello@bigorder.store"
                >
                  hello@bigorder.store
                </Link>
              </div>

              <div className="mt-4 w-full">
                <Button className="w-full" variant="outline" asChild>
                  <Link href="mailto:hello@bigorder.store">Open Email App</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto flex justify-center px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Big Order.
          </p>
        </div>
      </footer>
    </div>
  );
}
