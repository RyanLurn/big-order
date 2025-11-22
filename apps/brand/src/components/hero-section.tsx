import { RefreshCcw, Check, Shirt } from "lucide-react";

import {
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function HeroSection() {
  return (
    <section className="container mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-4 py-24 lg:flex-row lg:gap-16 lg:py-32">
      {/* Left Column: The Copy */}
      <div className="flex flex-1 flex-col items-start gap-6 text-center lg:text-left">
        <Badge
          className="border-primary/20 bg-primary/5 text-primary px-3 py-1"
          variant="outline"
        >
          Coming soon to BigCommerce
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
          Let your customers fix their own mistakes.
        </h1>
        <p className="text-xl text-muted-foreground text-balance">
          Stop swamping your support team with order cancellations just because
          a customer picked the wrong color. Give them the power to edit orders
          instantly.
        </p>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button className="text-base font-semibold h-12 px-8" size="lg">
            Get Early Access
          </Button>
          <Button className="text-base h-12 px-8" variant="outline" size="lg">
            View Demo
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Check className="size-4 text-primary" />
            <span>Edit Shipping Address</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="size-4 text-primary" />
            <span>Swap Variants</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="size-4 text-primary" />
            <span>Self-Serve Cancel</span>
          </div>
        </div>
      </div>

      {/* Right Column: The Visual (Simulated UI) */}
      <div className="flex flex-1 w-full justify-center lg:justify-end">
        <div className="relative w-full max-w-md">
          {/* Background decorative blob */}
          <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-linear-to-b from-primary/10 to-transparent rounded-3xl blur-2xl -z-10" />

          <Card className="border-border shadow-2xl bg-card">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Order #1042</CardTitle>
                  <CardDescription>Placed today at 10:23 AM</CardDescription>
                </div>
                <Badge variant="secondary">Processing</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="rounded-lg border p-3 bg-muted/20">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-background border">
                    <Shirt className="size-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Classic Cotton Tee
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">
                        Color: Navy
                      </p>
                      <div className="h-3 w-px bg-border" />
                      <div className="flex items-center gap-1">
                        <p className="text-xs line-through text-muted-foreground/50">
                          Size: M
                        </p>
                        <p className="text-xs font-medium text-primary flex items-center gap-1">
                          Size: L <RefreshCcw className="size-3" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="font-medium text-sm">$28.00</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$28.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Total</span>
                  <span>$28.00</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" variant="outline">
                Cancel Order
              </Button>
              <Button className="w-full">Save Changes</Button>
            </CardFooter>
          </Card>

          {/* Floating badge simulating the Reddit comment vibe */}
          <div className="absolute -bottom-6 -left-6 bg-background border shadow-lg p-4 rounded-lg max-w-[260px] hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                u/
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium">u/StoreOwner123</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Finally. My VA can stop dealing with email chains just to
                  change a shirt size."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
