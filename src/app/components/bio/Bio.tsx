import Image from "next/image";
import bioPhoto from "../../../../public/resources/img/bwportrait3_edit_cr.jpg";

import { EB_Garamond, Murecho } from "next/font/google";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

const garamond = EB_Garamond({ subsets: ["latin"] });
const murecho = Murecho({ subsets: ["latin"] });

export default function Bio({ language, bioData }: any) {
  const bioEN: any = [];
  const bioJP: any = [];

  const formatBio = (data: any, arr: any) => {
    const splitData = data.split(/\n/);
    for (let segment of splitData) {
      if (segment) {
        arr.push(<div key={segment}>{segment}</div>);
      }
    }
  };
  formatBio(bioData.enData, bioEN);
  formatBio(bioData.jpData, bioJP);
  return (
    <div className="w-full relative overflow-y-auto">
      <div className="sticky top-0 lg:h-svh -z-10">
        <Image
          src={bioPhoto}
          alt="bio"
          className="xl:-translate-y-60 2xl:-translate-y-80"
          priority
        />
        <div className="absolute w-full top-6 lg:top-10 right-2 lg:right-12">
          <div
            className={`"absolute w-full text-end px-4 text-4xl lg:text-7xl transition duration-700 ${
              language == "english" ? "opacity-100" : "opacity-0"
            }`}
          >
            Biography
          </div>
          <div
            className={`absolute top-2 w-full text-end px-4 text-2xl lg:text-6xl transition duration-700  ${
              language == "english" ? "opacity-0" : "opacity-100"
            } ${hiragino.className}`}
          >
            <div>プロフィール</div>
            <div className="text-base lg:text-3xl">瀬山 智博 / 指揮者</div>
          </div>
        </div>
      </div>

      <div className={`absolute top-0 w-1/2 h-full pb-4 md:pr-10`}>
        <div
          className={`flex flex-col gap-8 xl:gap-20 p-4 lg:p-10 xl:p-20 pt-8 lg:pt-32 transition duration-700 lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-loose ${
            garamond.className
          } ${
            language == "english"
              ? "opacity-100 pb-32"
              : "opacity-0 pb-8 hidden"
          }`}
        >
          {bioEN}
        </div>
        <div
          className={`flex flex-col absolute top-0 gap-8 2xl:gap-20 p-4 lg:p-20 pt-8 lg:pt-32 pb-10 lg:pb-40 transition duration-700 text-sm lg:text-3xl 2xl:text-4xl lg:leading-relaxed 2xl:leading-loose md:pr-10 lg:pr-24 ${
            hiragino.className
          } ${language == "english" ? "opacity-0" : "opacity-100"}`}
        >
          {bioJP}
        </div>
      </div>
    </div>
  );
}
