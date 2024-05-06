"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditSchedule() {
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
    const date = new Date(schedule.date);
    scheduleList.push(
      <Link href={`/admin/schedule/${schedule.id}`} key={schedule.id}>
        <div
          className="flex items-center border-stone-800 border bg-amber-200/30 hover:bg-amber-100/30"
          key={schedule.id}
        >
          <div className="p-4">{date.toLocaleDateString()}</div>
          <div className="p-4">{schedule.jp.description}</div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <div className="text-center text-2xl p-4">スケジュール編集</div>
      <div className="flex flex-col justify-center items-center p-4">
        {scheduleList}
      </div>

      <div className="flex justify-center pt-8">
        <Link href={"/admin/schedule/new"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            新規スケジュール作成
          </div>
        </Link>
      </div>
      <div className="flex justify-center pt-8">
        <Link href={"/admin"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
