"use client";
import { useEffect, useState } from "react";
import Title from "./Title";
import Image from "next/image";
import Footer from "../footer/Footer";
import Schedule from "../schedule/Schedule";
import News from "../news/News";
import Bio from "../bio/Bio";
import Navbar from "./Navbar";
// import classes from "./HomePage.module.css";

export default function HomePage({ bioData, newsData, scheduleData }: any) {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("english");
  const [slide, setSlide] = useState(0);
  const [slideActive, setSlideActive] = useState(false);

  const languageHandler = (language: string) => {
    setLanguage(language);
  };

  const incSlide = (e: any) => {
    e.preventDefault();
    if (slide < 1) {
      setSlide((prevState) => prevState + 1);
    }
    setSlideActive(true);
  };

  const decSlide = (e: any) => {
    e.preventDefault();
    if (slide > 0) {
      setSlide((prevState) => prevState - 1);
    }
    setSlideActive(true);
  };

  useEffect(() => {
    let slideInd = 0;
    let slideDirection = "forwards";
    const intervalId = setInterval(() => {
      if (!slideActive) {
        if (slideDirection == "forwards") {
          setSlide((prevState) => prevState + 1);
          slideInd++;
          if (slideInd == 1) {
            slideDirection = "backwards";
          }
        } else if (slideDirection == "backwards") {
          setSlide((prevState) => prevState - 1);
          slideInd--;
          if (slideInd == 0) {
            slideDirection = "forwards";
          }
        }
      }
    }, 10000);
    if (slideActive) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [slideActive]);

  setTimeout(() => {
    setShow(true);
  }, 1000);

  return (
    <div
      className={`"relative min-h-[100svh] flex flex-col justify-start snap-y snap-mandatory`}
    >
      <div
        className={`w-full translate-x-0 duration-1000
         `}
      >
        <div className="relative flex justify-center bg-black overflow-hidden">
          <Image
            src="/resources/img/top1.jpg"
            width={1920}
            height={1080}
            alt="seyama1"
            className={`w-full landscape:w-2/3 transition duration-700 ${
              slide == 0 ? "inline-block translate-x-0" : ""
            } ${slide > 0 ? "-translate-x-full" : ""}`}
            priority
          />
          {/* <Image
            src="/resources/img/top2.jpg"
            width={1920}
            height={1080}
            alt="seyama2"
            className={`w-full absolute transition duration-700 ${
              slide == 1 ? "inline-block translate-x-0" : "translate-x-full"
            } ${slide > 1 ? " !-translate-x-full" : ""}`}
          /> */}
          <Image
            src="/resources/img/top3.jpg"
            width={1920}
            height={1080}
            alt="seyama3"
            priority
            className={`w-full absolute transition duration-700 ${
              slide == 1 ? "inline-block translate-x-0" : "translate-x-full"
            } ${slide > 1 ? " !-translate-x-full" : ""}`}
          />
        </div>
        <div className="flex absolute top-0 right-0 h-full w-fit justify-center text-4xl">
          <Title
            show={show}
            onLanguageChange={languageHandler}
            language={language}
          />
          <div
            className={`absolute flex justify-between bottom-2 left-2 text-xl lg:text-4xl lg:gap-8 w-10 transition duration-1000 delay-1000 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="invert opacity-80 hover:opacity-100"
              onClick={decSlide}
            >
              &#10094;
            </button>
            <button
              className="invert opacity-80 hover:opacity-100"
              onClick={incSlide}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition duration-500 delay-1000 sticky -top-[1px] z-20 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar language={language} />
      </div>

      <div
        className={`flex flex-col justify-between h-fit transition duration-500 delay-[1300ms] scroll-mt-8 bg-white ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="schedule"
      >
        <Schedule language={language} scheduleData={scheduleData} />
      </div>
      <div
        className={`transition duration-500 delay-[1600ms] scroll-mt-8 lg:h-svh lg:overflow-hidden snap-start ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }  `}
        id="bio"
      >
        <Bio language={language} bioData={bioData} />
      </div>
      <div
        className={`transition duration-500 delay-[1900ms] scroll-mt-8 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="news"
      >
        <News language={language} newsData={newsData} />
      </div>
      <div
        className={`mt-auto transition duration-500 delay-[2200ms] scroll-mt-8 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="footer"
      >
        <Footer />
      </div>
    </div>
  );
}
