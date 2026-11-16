import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/data/portfolio";
import "./globals.css";
export const metadata: Metadata = {
  ...(process.env.SITE_URL ? { metadataBase: new URL(process.env.SITE_URL) } : {}),
  ...(process.env.SITE_URL
    ? { alternates: { canonical: process.env.SITE_URL } }
    : {}),
  title: "Ilmir Bakirov — Java Backend Developer",
  description: profile.description,
  openGraph: {
    type: "profile",
    title: "Ilmir Bakirov — Java Backend Developer",
    description: profile.description,
    firstName: "Ilmir",
    lastName: "Bakirov",
    locale: "en_US",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ilmir Bakirov — Java Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilmir Bakirov — Java Backend Developer",
    description: profile.description,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      id="top"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
