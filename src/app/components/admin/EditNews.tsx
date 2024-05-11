import Link from "next/link";

export default function EditNews() {
  return (
    <div className="h-svh">
      <div className="p-4 text-2xl text-center">ニュース編集 / News Edit</div>

      <div className="flex justify-center pt-8">
        <Link href={"/admin/news/new"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            新規ニュース作成
          </div>
        </Link>
      </div>
      <div className="flex justify-center py-8">
        <Link href={"/admin"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
