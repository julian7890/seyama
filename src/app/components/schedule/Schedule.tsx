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

  return (
    <div className="p-4 w-full overflow-x-hidden">
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
      <ul className="flex gap-8 flex-wrap justify-center items-start">
        {scheduleList}
      </ul>
    </div>
  );
}
