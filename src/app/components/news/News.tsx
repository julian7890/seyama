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
      <div key={news.id} className="px-2">
        <NewsCard news={news} language={language} />
      </div>
    );
  }

  return (
    <div className={`${classes.bgViolin} `}>
      <div className="sticky top-0 left-0">
        <div className="text-4xl text-white text-center pt-4 flex justify-center">
          <div
            className={`transition duration-1000 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Latest News
          </div>
          <div
            className={`absolute top-0 translate-y-1/2 text-3xl transition duration-1000 ${
              hiragino.className
            } ${language == "english" ? "opacity-0" : "opacity-100"}`}
          >
            ニュース
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-4 p-8">{newsList}</div>
    </div>
  );
}
