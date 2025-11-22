function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built for BigCommerce Merchants. © 2025 Big Order.
        </p>
      </div>
    </footer>
  );
}

export { SiteFooter };
