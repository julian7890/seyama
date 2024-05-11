import { Murecho } from "next/font/google";
import Link from "next/link";

const murecho = Murecho({ subsets: ["latin"] });

export default function Admin() {
  return (
    <div className={`${murecho.className} min-h-svh`}>
      <div className="text-center p-4 pb-12 text-3xl">管理者ページ</div>
      <div className="flex flex-col justify-center items-center gap-6 text-2xl">
        <Link href="/admin/schedule">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            スケジュール編集
          </div>
        </Link>
        <Link href="/admin/news">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            ニュース編集
          </div>
        </Link>
        <Link href="/admin/bio">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            プロフィール編集
          </div>
        </Link>
      </div>
    </div>
  );
}
