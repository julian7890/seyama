import { Murecho } from "next/font/google";

const murecho = Murecho({ subsets: ["latin"] });

type propType = {
  language: string;
};

export default function Navbar({ language }: propType) {
  const handleScroll = (e: any) => {
    e.preventDefault();
    const elem = document.getElementById(e.target.value);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-around bg-black text-white text-2xl py-2">
      <button
        value="schedule"
        onClick={handleScroll}
        className="relative flex justify-center"
      >
        <div
          className={`absolute transition duration-1000 ${
            language == "english" ? "opacity-100" : "opacity-0"
          }`}
        >
          Schedule
        </div>
        <div
          className={`top-0 text-lg transition duration-1000 ${
            murecho.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          スケジュール
        </div>
      </button>
      <button
        value="bio"
        onClick={handleScroll}
        className="relative flex justify-center"
      >
        <div
          className={`absolute transition duration-1000 ${
            language == "english" ? "opacity-100" : "opacity-0"
          }`}
        >
          Bio
        </div>
        <div
          className={`top-0 text-lg transition duration-1000 ${
            murecho.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          プロフィール
        </div>
      </button>
      <button
        value="blog"
        onClick={handleScroll}
        className="relative flex justify-center"
      >
        <div
          className={`absolute transition duration-1000 ${
            language == "english" ? "opacity-100" : "opacity-0"
          }`}
        >
          Blog
        </div>
        <div
          className={`top-0 text-lg transition duration-1000 ${
            murecho.className
          }  ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          ブログ
        </div>
      </button>
    </div>
  );
}
