import type { Metadata } from "next";

import { Geist_Mono, Geist } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Let your customers edit their own orders. Reduce support tickets and improve customer satisfaction.",
  title: "Big Order - Self-Service Order Edits for BigCommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-background font-sans">
          <Navbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
