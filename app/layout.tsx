import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DEADCAT — Wall Street's Favorite Dead Cat",
  description:
    "DEADCAT: an upcoming meme coin on Robinhood Chain. The bounce starts here.",
  openGraph: {
    title: "DEADCAT — Wall Street's Favorite Dead Cat",
    description:
      "DEADCAT: an upcoming meme coin on Robinhood Chain. The bounce starts here.",
    images: ["/images/deadcat-hero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEADCAT — Wall Street's Favorite Dead Cat",
    description:
      "DEADCAT: an upcoming meme coin on Robinhood Chain. The bounce starts here.",
    images: ["/images/deadcat-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivoBlack.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
