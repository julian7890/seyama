import type { Metadata, Viewport } from "next";
import { Lexend, Rajdhani } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomohiro Seyama",
  description: "Profile page for conductor Tomohiro Seyama",
};

export const viewport: Viewport = {
  width: "device-width",
  // height: "device-height",
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};

export default function Layout({
  children,
  parallel,
}: Readonly<{
  children: React.ReactNode;
  parallel: React.ReactNode;
}>) {
  return (
    <section className={`${rajdhani.className}`}>
      {parallel}
      {children}
    </section>
  );
}
