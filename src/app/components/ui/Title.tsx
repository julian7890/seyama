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
      className={`${
        seasons.className
      }  flex flex-col bg-gradient-to-b from-black to-transparent pl-2 pt-6 transition duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="invert relative">
        <div
          className={`transition duration-1000 pr-4 ${
            language == "japanese" ? "opacity-0" : "opacity-100"
          }`}
        >
          <div>Tomohiro</div>
          <div>Seyama</div>
        </div>
        <div
          className={`${
            zen.className
          } px-8 font-bold absolute top-0 transition duration-1000 ${
            language == "japanese" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>瀬山</div>
          <div className="pl-8">智博</div>
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
