"use client";

import { useEffect, useState } from "react";
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

  const paginationLimit = 2;
  const pageCount = Math.ceil(scheduleList.length / paginationLimit);

  if (currentPage > pageCount) {
    setCurrentPage(pageCount - 1);
  }

  const schedulePageList = [];

  for (let i = 0; i < pageCount; i++) {
    schedulePageList.push(
      <div
        className={`min-w-full px-2 flex flex-wrap justify-around`}
        key={`pagination${i}`}
      >
        {scheduleList[2 * i]}
        {scheduleList[2 * i + 1]}
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
        <div
          className={`w-full flex transition duration-700`}
          style={{
            transform: `${
              currentPage > 0 ? `translateX(-${currentPage * 100}%)` : ""
            }`,
          }}
        >
          {schedulePageList}
        </div>
      </ul>
      {pageCount > 1 ? (
        <div className="flex justify-center gap-8 pt-2 text-amber-600 md:text-3xl md:gap-12">
          <button
            onClick={decPage}
            className={`px-2 py-1 ${currentPage == 0 ? "opacity-50" : ""}`}
          >
            &#10094;
          </button>
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
