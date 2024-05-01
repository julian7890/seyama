import localFont from "next/font/local";
import Social from "./Social";

const seasons = localFont({
  src: "../../../../public/resources/font/seasons.ttf",
});

export default function Title({ show }: any) {
  return (
    <div
      className={`${
        seasons.className
      } min-h-full bg-gradient-to-b from-black to-transparent pl-2 pr-4 pt-6 transition duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="invert">
        <div>Seyama</div>
        <div>Tomohiro</div>
      </div>
      <div
        className={`transition duration-700 delay-1000 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <Social />
      </div>
    </div>
  );
}
