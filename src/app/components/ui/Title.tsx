import localFont from "next/font/local";
import Social from "./Social";
import Language from "./Language";
import { Zen_Old_Mincho } from "next/font/google";

const zen = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

const seasons = localFont({
  src: "../../../../public/resources/font/seasons.ttf",
});

export default function Title({ show, onLanguageChange, language }: any) {
  return (
    <div
      className={`${seasons.className}  flex flex-col bg-gradient-to-b from-black to-black/20 pl-2 pt-6 md:text-6xl lg:text-7xl transition duration-1000 
      `}
    >
      <div className="invert relative">
        <div
          className={`transition duration-1000 pr-3 m:pr-1 md:pt-1 ${
            language == "japanese" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div>Tomohiro</div>
          <div>Seyama</div>
        </div>
        <div
          className={`${
            zen.className
          } px-8 font-bold absolute top-0 transition duration-1000 md:w-full md:text-center ${
            language == "japanese" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="md:pr-12 lg:pr-20">瀬山</div>
          <div className="pl-8 md:pl-14 lg:pl-24">智博</div>
        </div>
      </div>
      <div
        className={`h-full flex flex-col justify-between transition duration-700 delay-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <Social />
        <Language onLanguageChange={onLanguageChange} />
      </div>
    </div>
  );
}
