"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ScheduleCard from "./ScheduleCard";
import { Murecho } from "next/font/google";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

type propsType = {
  language: string;
  scheduleData: any;
};

const murecho = Murecho({ subsets: ["latin"] });

export default function Schedule({ language, scheduleData }: propsType) {
  // const [scheduleData, setScheduleData]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [draggin, setDragging] = useState(false);

  // useEffect(() => {
  //   const getSchedule = async () => {
  //     const schedule = await fetch("/api/schedule");
  //     const data = await schedule.json();
  //     setScheduleData(data);
  //   };

  //   getSchedule();
  // }, []);

  const scheduleList = [];

  for (let schedule of scheduleData) {
    if (language == "english") {
      if (schedule.en.description) {
        scheduleList.push(
          <ScheduleCard
            schedule={schedule}
            language={language}
            key={schedule.id}
          />
        );
      }
    } else if (language == "japanese") {
      if (schedule.jp.description) {
        scheduleList.push(
          <ScheduleCard
            schedule={schedule}
            language={language}
            key={schedule.id}
          />
        );
      }
    }
  }

  const paginationLimit = 1;
  const pageCount = Math.ceil(scheduleList.length / paginationLimit);

  if (currentPage > pageCount) {
    setCurrentPage(pageCount - 1);
  }

  const schedulePageList: any = [];

  for (let i = 0; i < pageCount; i++) {
    schedulePageList.push(
      <div
        className={`min-w-full px-2 flex flex-wrap justify-around`}
        key={`pagination${i}`}
      >
        {scheduleList[i]}
        {/* {scheduleList[2 * i + 1]} */}
      </div>
    );
  }

  const incPage = (e: any) => {
    e.preventDefault();
    if (currentPage < pageCount - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const decPage = (e: any) => {
    e.preventDefault();
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const DRAG_BUFFER = 40;
  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && currentPage < pageCount - 1) {
      setCurrentPage((prevState) => prevState + 1);
    } else if (x >= -DRAG_BUFFER + 15 && currentPage > 0) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const Dots = ({
    currentPage,
    setCurrentPage,
  }: {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
  }) => {
    return (
      <div className="flex justify-center gap-2">
        {schedulePageList.map((_: any, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === currentPage ? "bg-amber-600" : "bg-amber-600/50"
              }`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-start px-4 pt-4">
        <div
          className={`transition duration-1000 ${
            language == "english" ? "opacity-100" : "opacity-0"
          } pb-2 w-32 text-3xl lg:text-6xl leading-6`}
        >
          Upcoming Performances
        </div>
        <div
          className={`absolute text-2xl lg:text-5xl transition duration-1000 pt-2 lg:pt-8 ${
            hiragino.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          公演スケジュール
        </div>
      </div>
      <ul className={`w-full overflow-x-hidden`}>
        {/* {scheduleList} */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${currentPage * 100}%`,
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
          className={`w-full flex items-center cursor-grab active:cursor-grabbing`}
          // style={{
          //   transform: `${
          //     currentPage > 0 ? `translateX(-${currentPage * 100}%)` : ""
          //   }`,
          // }}
        >
          {schedulePageList}
        </motion.div>
      </ul>
      {pageCount > 1 ? (
        <div className="flex justify-center items-center gap-8 pt-2 text-amber-600 md:text-3xl md:gap-12">
          <button
            onClick={decPage}
            className={`px-2 py-1 ${currentPage == 0 ? "opacity-50" : ""}`}
          >
            &#10094;
          </button>
          <Dots currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <button
            className={`px-2 py-1 ${
              currentPage == pageCount - 1 ? "opacity-50" : ""
            }`}
            onClick={incPage}
          >
            &#10095;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
