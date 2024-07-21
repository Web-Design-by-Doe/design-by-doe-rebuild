import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Nav/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [],

  openGraph: {
    type: "website",
    url: "",
    title: "",
    description: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://api.pirsch.io/pa.js"
        id="pianjs"
        data-code="dMN2VCzOuhqPQC8552uX59dQ3YIp7Nem"
      ></Script>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.0/build/spline-viewer.js"
      ></Script>
      <body className={roboto.className}>
        <Navbar />
        <ScrollToTop />
        <main>{children}</main>
      </body>
    </html>
  );
}
