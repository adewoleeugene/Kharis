import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mvSans = localFont({
  src: "./fonts/MVSansBold.ttf",
  variable: "--font-mvsans",
  display: "swap",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    default: "Kharis Church — Changing Our World With a Touch of His Grace",
    template: "%s · Kharis Church",
  },
  description:
    "Kharis Church is a teaching-centred Christian family with campuses across the United Kingdom, Ghana and Sierra Leone, led by Pastor David Antwi.",
  metadataBase: new URL("https://kharis.org"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${mvSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment-50 text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
