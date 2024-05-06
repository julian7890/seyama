"use client";
import { useEffect, useState } from "react";

export default function EditSchedule({ params }: { params: { id: string } }) {
  const [schedule, setSchedule]: any = useState();

  useEffect(() => {
    const getSchedule = async () => {
      const res = await fetch("/api/schedule", {
        method: "POST",
        body: JSON.stringify({ id: params.id }),
      });
      const data = await res.json();
      setSchedule(data);
    };
    getSchedule();
  }, []);
  return <div>{schedule?.id}</div>;
}
