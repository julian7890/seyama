"use client";
import { useState } from "react";
import Title from "../components/ui/Title";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import Schedule from "../components/schedule/Schedule";
import Blog from "../components/blog/Blog";

export default function Home() {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, 1000);

  return (
    <div className="relative overflow-hidden min-h-[100svh] flex flex-col justify-start">
      <div
        className={`w-full translate-x-0 duration-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/resources/img/bwshot.jpg"
          width={1500}
          height={1500}
          alt="seyama1"
          className="w-full"
          priority
        />
        <div className="flex absolute top-0 right-0 h-full w-fit justify-center text-5xl">
          <Title show={show} />
        </div>
      </div>
      <div
        className={`flex flex-col justify-between h-fit transition duration-500 delay-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Schedule />
        <div
          className={`transition duration-500 delay-[1500ms] ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Blog />
        </div>
      </div>
      <div className={`mt-auto transition duration-500 delay-[2000ms] ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
      <Footer />
      </div>
    </div>
  );
}