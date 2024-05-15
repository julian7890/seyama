"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const seasons = localFont({
  src: "../../../../public/resources/font/seasons.ttf",
});

export default function NameAnimation() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);
  const [position, setPosition] = useState(false);

  const router = useRouter();

  setTimeout(() => {
    setShow(true);
    setTimeout(() => {
      setPosition(true);
      setTimeout(() => {
        setFade(true);
      }, 1000);
    }, 2000);
  }, 1500);
  //5000

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 5500);
  }, [router]);
  //8000

  return (
    <div
      className={`absolute transition-all duration-700 ${
        position
          ? "top-6 right-4"
          : "top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <div
        className={`flex flex-col items-start text-black transition-all duration-700 pt-1 text-4xl md:text-6xl lg:text-8xl ${
          seasons.className
        } ${position ? "scale-100" : "scale-125"} ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`transition duration-700 ${
            show ? "-translate-x-6 opacity-100" : "-translate-x-10 opacity-0"
          } ${position ? "!translate-x-0" : ""}`}
        >
          Tomohiro
        </div>
        <div
          className={`transition duration-700 ${
            show ? "translate-x-16 opacity-100" : "translate-x-20 opacity-0"
          } ${position ? "!translate-x-0" : ""}`}
        >
          Seyama
        </div>
      </div>
    </div>
  );
}
