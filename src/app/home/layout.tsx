import type { Metadata } from "next";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomohiro Seyama",
  description: "Profile page for conductor Tomohiro Seyama",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${lexend.className} min-h-full`}>{children}</section>
  );
}
