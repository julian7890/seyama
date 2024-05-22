import Image from "next/image";

import contactImg from "../../../../public/resources/img/forest2_edit.jpg";
export default function Contact() {
  return (
    <div className="h-screen">
      <div className="absolute top-[50%] -translate-y-[50%] right-10 text-center w-1/2 h-2/3 bg-gradient-to-b from-black to-black/50 rounded-md text-white">
        Contact
      </div>

      <div>
        <Image
          src={contactImg}
          fill
          className="absolute object-cover lg:object-[50%,0%] -z-40"
          alt="contactImg"
        />
      </div>
    </div>
  );
}
