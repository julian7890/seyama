import ScheduleCard from "./ScheduleCard";
import { Murecho } from "next/font/google";

type propsType = {
  language: string;
};

const murecho = Murecho({ subsets: ["latin"] });

const scheduleData = [
  {
    date: new Date(2024, 5, 1),
    description: "2nd Higashi-Osaka Civic Opera Performance “Carmen”",
    location: "Higashi-Osaka Cultural Creation Hall",
    performer: [
      { role: "Director", name: "Okumura Keigo" },
      { role: "Orchestra", name: "Kansai Philharmonic Orchestra" },
    ],
  },
];

export default function Schedule({ language }: propsType) {
  return (
    <div className="p-4">
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
            murecho.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          公演スケジュール
        </div>
      </div>
      <ul className="flex flex-col justify-center items-center">
        <ScheduleCard schedule={scheduleData[0]} language={language} />
      </ul>
    </div>
  );
}
