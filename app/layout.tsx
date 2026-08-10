import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";

import HeartTrail from "@/components/HeartTrail";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOW IEDC CEV | Women of Wonders",
  description: "The specialized women's wing of the Innovation and Entrepreneurship Development Cell at CEV.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Preloader />
        <HeartTrail />
        {children}
      </body>
    </html>
  );
}
