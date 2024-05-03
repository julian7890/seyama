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

  return (
    <li>
      <div className="flex">
        <div className="p-2 rounded-md border border-amber-300/50 shadow-lg shadow-amber-800">
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
        <div className="pl-4 pt-4">{schedule.description}</div>
      </div>
    </li>
  );
}
