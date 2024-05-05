import ScheduleCard from "./ScheduleCard";
import { Murecho } from "next/font/google";

type propsType = {
  language: string;
};

const murecho = Murecho({ subsets: ["latin"] });

const scheduleData = [
  {
    date: new Date(2024, 5, 1),
    en: {
      description: "2nd Higashi-Osaka Civic Opera Performance “Carmen”",
      location: "Higashi-Osaka Cultural Creation Hall",
      performer: [
        { role: "Director", name: "Keigo Okumura" },
        { role: "Orchestra", name: "Kansai Philharmonic Orchestra" },
      ],
    },
    jp: {
      description: "東大阪市民オペラ第2回公演 ビゼー作曲/オペラ「カルメン」",
      location: "東大阪市文化 創造会館大ホール",
      performer: [
        { role: "演出", name: "奥村啓吾" },
        { role: "管弦楽", name: "関西フィルハーモニー管弦楽団" },
      ],
    },
    link: "https://higashiosaka.hall-info.jp/event-information/2024/20240526.html",
  },
  {
    date: new Date(2024, 7, 13),
    en: {
      description: "Osaka College of Music Opera Major First Semester Concert",
      location: "Osaka College of Music Millenium Hall",
      performer: [{ role: "Director", name: "Tatsuji Iwata" }],
    },
    jp: {
      description: "大阪音楽大学専攻科オペラ「前期演奏会」",
      location: "大阪音楽大学 ミレニアムホール ",
      performer: [{ role: "演出", name: "岩田達宗" }],
    },
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
      <ul className="flex gap-8 flex-wrap justify-center items-start">
        <ScheduleCard schedule={scheduleData[0]} language={language} />
        <ScheduleCard schedule={scheduleData[1]} language={language} />
      </ul>
    </div>
  );
}
