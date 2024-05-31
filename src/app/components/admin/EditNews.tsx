import Link from "next/link";
import moment from "moment";

export default function EditNews({ newsData }: any) {
  const newsList = [];
  for (let news of newsData) {
    newsList.push(
      <Link href={`/admin/news/${news.id}`} key={news.id}>
        <div
          className="flex items-center border-stone-800 border bg-amber-200/30 hover:bg-amber-100/30"
          key={news.id}
        >
          <div className="p-4">{moment(news.date).format("M/DD/YYYY")}</div>
          <div className="flex flex-col">
            <div className="p-4">{news.titleJP ? news.titleJP : "-"}</div>
            <div className="p-4">
              {news.titleEN ? news.titleEN?.replace("<br>", "") : "-"}
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div className="h-svh">
      <div className="p-4 text-2xl text-center">ニュース編集 / News Edit</div>
      <div className="flex flex-col justify-center items-center">{newsList}</div>
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
