"use client";
import Image from "next/image";
export default function NewsCard({ title, date, pic }: any) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-md drop-shadow-xl w-40 hover:-translate-y-2 transition duration-100">
      <div className="w-40 h-20 overflow-hidden flex justify-center">
        <Image
          src={pic}
          width={100}
          height={100}
          alt={title}
          className="object-cover rounded-t-md w-full"
          priority
        />
      </div>
      <div>{title}</div>
      <div>{date}</div>
    </div>
  );
}