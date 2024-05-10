import { Murecho } from "next/font/google";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

const murecho = Murecho({ subsets: ["latin"] });

type propType = {
  language: string;
};

export default function Navbar({ language }: propType) {
  const handleScroll = (e: any) => {
    e.preventDefault();
    // console.log(e.target);
    const elem = document.getElementById(e.target.value);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-around bg-black text-white text-2xl py-2">
      <button value="schedule" onClick={handleScroll}>
        <div className="pointer-events-none flex justify-center">
          <div
            className={`absolute transition duration-1000 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Schedule
          </div>
          <div
            className={`top-0 text-lg transition duration-1000 ${
              hiragino.className
            } ${language == "english" ? "opacity-0" : "opacity-100"}`}
          >
            スケジュール
          </div>
        </div>
      </button>
      <button value="bio" onClick={handleScroll}>
        <div className="pointer-events-none flex justify-center">
          <div
            className={`absolute transition duration-1000 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Bio
          </div>
          <div
            className={`top-0 text-lg transition duration-1000 ${
              hiragino.className
            } ${language == "english" ? "opacity-0" : "opacity-100"}`}
          >
            プロフィール
          </div>
        </div>
      </button>
      <button value="news" onClick={handleScroll}>
        <div className="pointer-events-none flex justify-center">
          <div
            className={`absolute transition duration-1000 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            News
          </div>
          <div
            className={`top-0 text-lg transition duration-1000 ${
              hiragino.className
            }  ${language == "english" ? "opacity-0" : "opacity-100"}`}
          >
            ニュース
          </div>
        </div>
      </button>
    </div>
  );
}
