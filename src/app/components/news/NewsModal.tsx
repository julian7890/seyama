"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NewsModal({ children }: any) {
  const pathname = usePathname();
  if (pathname == "/home") return null;
  return (
    <div>
      <Link
        href="/home"
        scroll={false}
        className="fixed top-0 left-0 bg-black/50 h-svh w-full z-30 backdrop-blur-sm"
      />
      {children}
    </div>
  );
}
