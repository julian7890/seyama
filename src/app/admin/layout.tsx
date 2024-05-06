export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="bg-slate-600/50 min-h-full">{children}</section>;
}
