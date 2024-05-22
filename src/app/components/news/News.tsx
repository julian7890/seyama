"use client";
import NewsCard from "./NewsCard";
import classes from "./News.module.css";
import { motion, useMotionValue } from "framer-motion";

import localFont from "next/font/local";
import { frame } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

type propType = {
  language: string;
  newsData: any;
};

const DRAG_BUFFER = 40;

export default function News({ language, newsData }: propType) {
  const [newsIndex, setNewsIndex] = useState(0);
  const [draggin, setDragging] = useState(false);

  const newsList: any = [];

  for (let news of newsData) {
    newsList.push(
      <div
        key={news.id}
        className="w-full flex justify-center items-center shrink-0 px-4"
      >
        <NewsCard news={news} language={language} />
      </div>
    );
  }

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && newsIndex < newsList.length - 1) {
      setNewsIndex((prevState) => prevState + 1);
    } else if (x >= -DRAG_BUFFER + 15 && newsIndex > 0) {
      setNewsIndex((prevState) => prevState - 1);
    }
  };

  const Dots = ({
    newsIndex,
    setNewsIndex,
  }: {
    newsIndex: number;
    setNewsIndex: Dispatch<SetStateAction<number>>;
  }) => {
    return (
      <div className="mt-4 flex w-full justify-center gap-2">
        {newsList.map((_: any, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setNewsIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === newsIndex ? "bg-amber-600" : "bg-amber-600/50"
              }`}
            />
          );
        })}
      </div>
    );
  };

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
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${newsIndex * 100}%`,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          transition={{
            ease: "linear",
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="w-full flex justify-start items-center cursor-grab active:cursor-grabbing"
        >
          {newsList}
        </motion.div>
        <Dots newsIndex={newsIndex} setNewsIndex={setNewsIndex} />
      </div>
    </div>
  );
}
