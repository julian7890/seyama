import Image from "next/image";
import localFont from "next/font/local";
import classes from "./NewsDetail.module.css";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

export default function NewsDetail({ news, language }: any) {
  return (
    <div
      className={`${hiragino.className} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
    >
      <div className="bg-amber-100 p-4 drop-shadow-lg rounded-md">
        <div className="min-w-72 flex flex-col justify-center items-center">
          <Image
            src={news?.image}
            alt={news?.titleEN}
            width={600}
            height={600}
          />
          <div className="max-w-[600px]">
            <div className="text-lg font-semibold text-center">
              {language == "english" ? news?.titleEN : news?.titleJP}
            </div>
            <div className="py-4">
              {language == "english"
                ? news?.descriptionEN
                : news?.descriptionJP}
            </div>
          </div>
        </div>
        {news.url ? (
          <div className="w-full flex justify-end items-center pt-4 font-semibold text-2xl text-amber-600">
            <a href={news.url} target="_blank">
              <div className="flex items-center hover:translate-x-2 transition duration-200 select-none">
                <div className="flex justify-end items-center">
                  <div
                    className={`transition duration-1000 ${
                      language == "english" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Additonal Info
                  </div>
                  <div
                    className={`absolute text-xl transition duration-1000 pb-[3px] ${
                      hiragino.className
                    } ${language == "english" ? "opacity-0" : "opacity-100"}`}
                  >
                    詳細
                  </div>
                </div>
                <div className={`${classes.arrow} w-8 h-8 bg-amber-600`}></div>
              </div>
            </a>
          </div>
        ) : (
          <div className="h-8"></div>
        )}
      </div>
    </div>
  );
}
