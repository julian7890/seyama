import Image from "next/image";
import bioPhoto from "../../../../public/resources/img/bwportrait3_edit_cr.jpg";
import classes from "./Bio2.module.css";

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
    <div className={`w-full`}>
      <div className="sticky top-10 -z-10">
        <div className="absolute h-svh w-full">
          <Image
            src={bioPhoto}
            fill
            className="object-cover lg:object-[50%,20%]"
            alt="biophoto"
          />
        </div>

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

      <div className={`h-full pb-4 pt-20 pr-[50vw]`}>
        <div
          className={`flex flex-col gap-8 p-4 lg:p-20 pt-8 lg:pt-32 transition duration-700 lg:text-3xl lg:leading-relaxed ${
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
          className={`flex flex-col top-0 gap-8 p-4 lg:p-20 pt-8 lg:pt-32 pb-10 lg:pb-40 transition duration-700 text-sm lg:text-3xl lg:leading-relaxed md:pr-10 lg:pr-24 ${
            hiragino.className
          } ${language == "english" ? "opacity-0 hidden" : "opacity-100"}`}
        >
          {bioJP}
        </div>
      </div>
    </div>
  );
}
