"use client";
import NewsCard from "./NewsCard";
import classes from "./News.module.css";

import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

type propType = {
  language: string;
};

export default function News({ language }: propType) {
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
            } ${language == "english" ? "opacity-0" : "opacity-190"}`}
          >
            ニュース
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-4 py-8">
          <NewsCard
            title={"First Blog"}
            date={"4/28/24"}
            pic={"/resources/img/outshot.jpg"}
          />
          <NewsCard
            title={"Second Blog"}
            date={"4/29/24"}
            pic={"/resources/img/archway.webp"}
          />
          <NewsCard
            title={"Third Blog"}
            date={"4/30/24"}
            pic={"/resources/img/headshot1.jpeg"}
          />
          <NewsCard
            title={"Fourth Blog"}
            date={"5/1/24"}
            pic={"/resources/img/sofa.jpg"}
          />
        </div>
      </div>
    </div>
  );
}
