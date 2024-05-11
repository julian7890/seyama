// import localFont from "next/font/local";

// const hiragino = localFont({
//   src: "../../../public/resources/font/hiragino_mincho.otf",
// });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`bg-slate-600/50`}>
      {children}
    </section>
  );
}
