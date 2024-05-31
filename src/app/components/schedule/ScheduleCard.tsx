import Image from "next/image";
import classes from "./ScheduleCard.module.css";
import { Murecho } from "next/font/google";
import localFont from "next/font/local";
import moment from "moment";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

const murecho = Murecho({ subsets: ["latin"] });

export default function ScheduleCard({ schedule, language }: any) {
  const dateData = moment(schedule.date);
  const dateDay = moment(dateData).date();
  const dateMonth = moment(dateData).month();
  const dateYear = moment(dateData).format("YYYY");

  const formatJP = (str: string) => {
    if (!str) return "";
    const resultArr = [];
    const splitString = str.split("<br>");
    // console.log(splitString);
    let keyInd = 0;

    for (let section of splitString) {
      resultArr.push(
        <span className="block" key={section + keyInd}>
          {section}
        </span>
      );
      keyInd++;
    }
    return resultArr;
  };

  const formatEN = (str: string) => {
    if (!str) return "";
    const resultArr = [];
    const splitString = str.split("<br>");
    let keyInd = 0;
    for (let section of splitString) {
      resultArr.push(
        <span className="block" key={section + keyInd}>
          {section}
        </span>
      );
      keyInd++;
    }
    return resultArr;
  };

  const monthConverter = (dateMonth: number) => {
    switch (dateMonth) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };

  const performerListEN = [];
  const performerListJP = [];

  for (let performer of schedule.en.performer) {
    performerListEN.push(
      <tr key={performer.name}>
        <td className="px-4">{performer.role}</td>
        <td>{performer.name}</td>
      </tr>
    );
  }

  for (let performer of schedule.jp.performer) {
    performerListJP.push(
      <tr key={performer.name}>
        <td className="px-4">{performer.role}</td>
        <td>{performer.name}</td>
      </tr>
    );
  }

  return (
    <li className="md:w-1/2">
      <div className="flex justify-center">
        <div className="flex flex-col mt-4 pr-2 ml-4 border border-amber-300/50 rounded-md">
          <div className="flex">
            <div className="relative flex justify-center items-center p-2 h-fit rounded-md border border-amber-300/50 shadow-lg shadow-amber-800 bg-white -translate-x-4 -translate-y-3">
              {language == "english" ? (
                <div
                  className={`flex flex-col transition duration-1000 ${
                    language == "english" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex gap-1 items-baseline">
                    <div className="text-4xl lg:text-6xl">
                      <div>{dateDay < 10 ? "0" + dateDay : dateDay}</div>
                    </div>
                    <div className="text-2xl lg:text-4xl">
                      {monthConverter(dateMonth)}
                    </div>
                  </div>
                  <hr />
                  <div className="text-2xl lg:text-4xl text-center">
                    {dateYear}
                  </div>
                </div>
              ) : (
                <div
                  className={`translation duration-700 ${hiragino.className} ${
                    language == "english" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center">
                      <div className="flex items-baseline">
                        <div className="text-2xl lg:text-4xl">
                          {dateMonth + 1}
                        </div>
                        <div className="text-xl lg:text-3xl">月</div>
                      </div>

                      <div className="flex items-baseline">
                        <div className="text-2xl lg:text-4xl">{dateDay}</div>
                        <div className="text-xl lg:text-3xl">日</div>
                      </div>
                    </div>
                    <hr className="border-t-slate-300 rounded-xl w-full" />
                    <div className="text-2xl lg:text-4xl">{dateYear}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="font-semibold pt-2 lg:text-2xl">
                {language == "english" ? (
                  <div>{formatEN(schedule.en.description)}</div>
                ) : (
                  <div className={`${hiragino.className}`}>
                    {formatJP(schedule.jp.description)}
                  </div>
                )}
              </div>
              <div className="flex gap-2 justify-end self-end items-center">
                <div>
                  <Image
                    src={"/resources/img/location.png"}
                    width={40}
                    height={40}
                    alt="location"
                    className="w-5 lg:w-10"
                  />
                </div>
                <div className="lg:text-2xl">
                  {language == "english" ? (
                    <div className="w-fit flex flex-col">
                      {formatEN(schedule.en.location)}
                    </div>
                  ) : (
                    <div
                      className={`${hiragino.className} w-fit flex flex-col`}
                    >
                      {formatJP(schedule.jp.location)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 lg:text-2xl">
            <table>
              {language == "english" ? (
                <tbody>{schedule.en.performer ? performerListEN : ""}</tbody>
              ) : (
                <tbody className={hiragino.className}>
                  {schedule.jp.performer ? performerListJP : ""}
                </tbody>
              )}
            </table>
          </div>

          {schedule.url ? (
            <div className="w-full flex justify-end items-center pt-4 font-semibold text-2xl lg:text-4xl text-amber-600">
              <a href={schedule.url} target="_blank">
                <div className="flex items-center  hover:translate-x-2 transition duration-200 select-none">
                  <div className="relative flex justify-end items-center">
                    <div
                      className={`transition duration-1000 ${
                        language == "english" ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Tickets and Info
                    </div>
                    <div
                      className={`absolute text-xl lg:text-3xl transition duration-1000 pb-[3px] ${
                        hiragino.className
                      } ${language == "english" ? "opacity-0" : "opacity-100"}`}
                    >
                      詳細
                    </div>
                  </div>
                  <div
                    className={`${classes.arrow} w-8 lg:w-12 h-8 lg:h-12 bg-amber-600`}
                  ></div>
                </div>
              </a>
            </div>
          ) : (
            <div className="h-8"></div>
          )}
        </div>
      </div>
    </li>
  );
}
