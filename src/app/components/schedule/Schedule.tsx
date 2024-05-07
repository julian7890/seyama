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
};

const murecho = Murecho({ subsets: ["latin"] });

export default function Schedule({ language }: propsType) {
  const [scheduleData, setScheduleData]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const getSchedule = async () => {
      const schedule = await fetch("/api/schedule");
      const data = await schedule.json();
      setScheduleData(data);
    };

    getSchedule();
  }, []);

  const scheduleList = [];

  for (let schedule of scheduleData) {
    scheduleList.push(
      <div key={schedule.id}>
        <ScheduleCard schedule={schedule} language={language} />
      </div>
    );
  }

  const paginationLimit = 2;
  const pageCount = scheduleList.length / paginationLimit;

  const schedulePageList = [];

  for (let i = 0; i < pageCount; i++) {
    schedulePageList.push(
      <div
        className={`min-w-full pr-2 flex flex-wrap justify-around`}
        key={`pagination${i}`}
      >
        {scheduleList[2 * i]}
        {scheduleList[2 * i + 1]}
      </div>
    );
  }

  const incPage = (e: any) => {
    e.preventDefault();
    if (currentPage < pageCount) {
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
    <div className="p-4 w-full">
      <div className="w-full flex justify-start">
        <div
          className={`transition duration-1000 ${
            language == "english" ? "opacity-100" : "opacity-0"
          } pb-2 w-32 text-3xl leading-6`}
        >
          Upcoming Performances
        </div>
        <div
          className={`absolute text-2xl transition duration-1000 pt-2 ${
            hiragino.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          公演スケジュール
        </div>
      </div>
      <ul className={`w-full overflow-x-hidden`}>
        {/* {scheduleList} */}
        <div
          className={`w-full flex gap-2 transition duration-700 ${
            currentPage > 0 ? "-translate-x-full" : ""
          }`}
        >
          {schedulePageList}
        </div>
      </ul>
      {pageCount > 1 ? (
        <div className="flex justify-center gap-8 pt-2 text-amber-600">
          <button
            onClick={decPage}
            className={`px-2 py-1 ${currentPage == 0 ? "invisible" : ""}`}
          >
            &#10094;
          </button>
          <button
            className={`px-2 py-1 ${
              currentPage == pageCount - 1 ? "invisible" : ""
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
