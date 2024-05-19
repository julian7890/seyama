import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomohiro Seyama / 瀬山智博",
  description:
    "Profile page for conductor Tomohiro Seyama / 指揮者、瀬山智博のホームページ",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "www.tomohiroseyama.com/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  // height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
