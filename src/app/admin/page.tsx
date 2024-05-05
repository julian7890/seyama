import { Murecho } from "next/font/google";
import Link from "next/link";

const murecho = Murecho({ subsets: ["latin"] });

export default function Admin() {
  return (
    <div className={`text-2xl ${murecho.className} bg-amber-800/50 h-full`}>
      <div className="text-center p-4 pb-12">管理者ページ</div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Link href="/admin/schedule">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            スケジュール編集
          </div>
        </Link>
        <Link href="/admin/blog">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            ブログ編集
          </div>
        </Link>
        <Link href="/admin/profile">
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl p-4">
            プロフィール編集
          </div>
        </Link>
      </div>
    </div>
  );
}
