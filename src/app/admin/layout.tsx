export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="bg-slate-800/50 h-full">{children}</section>;
}
