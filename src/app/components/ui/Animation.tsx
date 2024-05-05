"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./Animation.module.css";

export default function Animation() {
  const [animate, setAnimate] = useState(false);

  setTimeout(() => {
    setAnimate(true);
  }, 1000);

  return (
    <div className="absolute w-full h-full">
      <Image
        src={"/resources/img/treble.png"}
        width={1200}
        height={1200}
        className={`absolute top-0 z-0 scale-[120] ${
          animate ? `${classes.trebleClefAnimation}` : ""
        }`}
        alt="treble"
        priority
      />
      <Image
        src={"/resources/img/bass.png"}
        width={1200}
        height={1200}
        className={`absolute top-44 invert z-10 ${classes.bassClef} ${
          animate ? classes.bassClefAnimation : ""
        }`}
        alt="bass"
        priority
      />
    </div>
  );
}
