import Image from "next/image";

import contactImg from "../../../../public/resources/img/forest2_edit.jpg";
export default function Contact() {
  return (
    <div className="h-screen">
      <div className="absolute w-full lg:w-1/2 h-1/2 lg:h-2/3 top-[50%] lg:-translate-y-[50%] lg:right-10 text-center  bg-gradient-to-b from-black to-black/50 rounded-t-md text-white">
        <div className="text-3xl p-2">Contact</div>
        <form className="w-full p-4 text-2xl flex flex-col gap-4 items-center">
          <div className="w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="text-black text-xl" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="text-black text-xl" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={3}
              style={{ resize: "none" }}
              className="text-black text-xl"
            />
          </div>
          <button className="p-2 bg-amber-600 w-40">Send</button>
        </form>
      </div>

      <div className="relative w-full h-full -z-30">
        <Image
          src={contactImg}
          fill
          sizes="300vw"
          className="absolute object-cover object-[20%,20%] lg:object-[50%,0%] -z-40"
          alt="contactImg"
          priority
        />
      </div>
    </div>
  );
}
