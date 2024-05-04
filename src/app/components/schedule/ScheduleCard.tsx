import Image from "next/image";
import classes from "./ScheduleCard.module.css";

export default function ScheduleCard({ schedule, language }: any) {
  const dateDay = schedule.date.getDate();
  const dateMonth = schedule.date.getMonth();
  const dateYear = schedule.date.getFullYear();

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

  const performerList = [];
  for (let performer of schedule.performer) {
    performerList.push(
      <tr key={performer.name}>
        <td className="px-4">{performer.role}</td>
        <td>{performer.name}</td>
      </tr>
    );
  }

  return (
    <li className="w-full">
      <div className="flex w-full">
        <div className="flex flex-col mt-4 pr-2 ml-4 border border-amber-300/50 rounded-md">
          <div className="flex">
            <div className="p-2 h-fit rounded-md border border-amber-300/50 shadow-lg shadow-amber-800 bg-white -translate-x-4 -translate-y-3">
              <div className="flex flex-col">
                <div className="flex gap-1 items-baseline">
                  <div className="text-4xl">
                    <div>{dateDay < 10 ? "0" + dateDay : dateDay}</div>
                  </div>
                  <div className="text-2xl">{monthConverter(dateMonth)}</div>
                </div>
                <hr />
                <div className="text-2xl text-center">{dateYear}</div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold pt-2">{schedule.description}</div>
              <div className="w-full flex gap-2 justify-end items-center">
                <div>
                  <Image
                    src={"/resources/img/location.png"}
                    width={20}
                    height={20}
                    alt="location"
                  />
                </div>
                <div className="text-en w-36">{schedule.location}</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <table>
              <tbody>{schedule.performer ? performerList : ""}</tbody>
            </table>
          </div>

          {schedule.link ? (
            <div className="w-full flex justify-end items-center pt-4 font-semibold text-2xl text-amber-600">
              <a href={schedule.link} target="_blank">
                <div className="flex items-center  hover:translate-x-2 transition duration-200 select-none">
                  <div>Tickets and Info</div>
                  <div
                    className={`${classes.arrow} w-8 h-8 bg-amber-600`}
                  ></div>
                </div>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
}
