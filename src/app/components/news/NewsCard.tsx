"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

export default function NewsCard({ news, language }: any) {
  return (
    <Link
      href={`${
        language == "english"
          ? `home/news/${news.id}/en`
          : `home/news/${news.id}/jp`
      }`}
      scroll={false}
    >
      <div className="flex flex-col w-full md:w-fit justify-center items-center bg-white rounded-md drop-shadow-xl hover:-translate-y-2 transition duration-100">
        <div className="relative w-full h-48 lg:h-80 flex justify-center">
          <Image
            src={news.image}
            alt={news.image}
            fill
            sizes="60vw"
            className="object-cover rounded-t-md"
            priority
          />
        </div>
        <div className="p-4">
          {language == "english" ? (
            <div className="text-xl lg:text-3xl font-semibold">{news.titleEN}</div>
          ) : (
            <div className={`text-lg lg:text-2xl font-semibold ${hiragino.className}`}>
              {news.titleJP}
            </div>
          )}
        </div>
        <hr className="border border-slate-500/50 w-5/6" />
        <div className={`text-xl lg:text-3xl p-2 ${hiragino.className}`}>
          {news.date.toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
}
