"use client";
import Image from "next/image";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

export default function NewsCard({ news, language }: any) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md drop-shadow-xl hover:-translate-y-2 transition duration-100">
      <div className="relative w-full h-48 flex justify-center">
        <Image
          src={news.image}
          alt={news.image}
          fill
          className="object-cover rounded-t-md"
          priority
        />
      </div>
      <div className="p-4">
        {language == "english" ? (
          <div className="text-xl font-semibold">{news.titleEN}</div>
        ) : (
          <div className={`text-lg  font-semibold ${hiragino.className}`}>
            {news.titleJP}
          </div>
        )}
      </div>
      <hr className="border border-slate-500/50 w-5/6" />
      <div className={`text-xl p-2 ${hiragino.className}`}>
        {news.date.toLocaleDateString()}
      </div>
    </div>
  );
}
