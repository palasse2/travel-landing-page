import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel Readz | The Morocco Insider Guide",
  description:
    "Travel Morocco with confidence in 2026. Travel Readz reveals hidden gems, real local prices, cultural tips, city guides, and smart itineraries.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
