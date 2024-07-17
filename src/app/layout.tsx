import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
