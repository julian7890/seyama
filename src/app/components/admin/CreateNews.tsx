"use client";
import Link from "next/link";

export default function CreateNews() {
  const formHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-svh">
      <div className="flex flex-col items-center p-4 text-2xl">
        <div>新規ニュース作成</div>
        <div>Create News</div>
      </div>
      <form className="p-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="url">画像</label>
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">タイトル</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">詳細</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="url">リンク</label>
          <input type="text" id="url" name="url" />
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-8 pb-8 pt-16">
        <button
          className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md text-white"
          onClick={formHandler}
        >
          作成／Create
        </button>

        <Link href={"/admin/news"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
