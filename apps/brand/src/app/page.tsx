import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 mx-auto max-w-screen-2xl">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for BigCommerce Merchants. © 2025 Big Order.
          </p>
        </div>
      </footer>
    </div>
  );
}
