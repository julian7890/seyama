"use client";
import NewsCard from "./NewsCard";
import classes from "./News.module.css";

import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

type propType = {
  language: string;
  newsData: any;
};

export default function News({ language, newsData }: propType) {
  const newsList = [];

  for (let news of newsData) {
    newsList.push(
      <div key={news.id} className="w-full flex justify-center shrink-0">
        <NewsCard news={news} language={language} />
      </div>
    );
  }

  return (
    <div className={`${classes.bgViolin} `}>
      <div className="sticky top-0 left-0">
        <div className="text-4xl lg:text-6xl text-white text-center pt-4 flex justify-center">
          <div
            className={`transition duration-1000 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Latest News
          </div>
          <div
            className={`absolute top-0 translate-y-1/2 text-3xl lg:text-5xl transition duration-1000 ${
              hiragino.className
            } ${language == "english" ? "opacity-0" : "opacity-100"}`}
          >
            ニュース
          </div>
        </div>
      </div>
      <div className="relative w-svw overflow-x-hidden p-8">
        <div className="w-full flex justify-center items-center cursor-grab active:cursor-grabbing gap-4">
          {newsList}
        </div>
      </div>
    </div>
  );
}
