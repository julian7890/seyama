import Image from "next/image";
import contactImg from "../../../../public/resources/img/forest2_edit.jpg";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import localFont from "next/font/local";

const hiragino = localFont({
  src: "../../../../public/resources/font/hiragino_mincho.otf",
});

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type propType = {
  language: string;
};

export default function Contact({ language }: propType) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const formHandler = async (data: FormData) => {
    console.log(data);
    // const data = {
    //   name: nameRef.current?.value,
    //   email: emailRef.current?.value,
    //   message: messageRef.current?.value,
    // };

    // if (data.name == "" || data.email == "") setSending(true);
    const res = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const response = await res;
    if (response.ok) {
      setSending(false);
      setError(false);
      setSent(true);
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      messageRef.current!.value = "";
    } else if (!response.ok) {
      setError(true);
    }
  };

  return (
    <div
      className={`h-screen ${language == "japanese" ? hiragino.className : ""}`}
    >
      <div className="absolute w-full lg:w-1/2 h-1/2 top-[50%] lg:-translate-y-[50%] lg:right-10 text-center  bg-gradient-to-b from-black to-black/50 rounded-t-md text-white p-4">
        <div
          className={`text-4xl lg:text-5xl ${
            language == "japanese" ? "!text-2xl lg:!text-3xl" : ""
          }`}
        >
          {language == "english" ? "Contact" : "お問い合わせ"}
        </div>
        <form
          onSubmit={handleSubmit(formHandler)}
          className="w-full p-4 lg:p-8 text-2xl flex flex-col gap-2 lg:gap-4 items-center"
        >
          <div className="relative w-full flex flex-col">
            <label
              htmlFor="name"
              className={`${
                language == "japanese"
                  ? "!text-xl lg:!text-2xl"
                  : "text-2xl lg:text-3xl"
              }`}
            >
              {language == "english" ? "Name" : "お名前"}
            </label>
            <input
              type="text"
              id="name"
              className={`text-black text-2xl`}
              autoComplete="name"
              {...register("name", {
                required: true,
              })}
              ref={nameRef}
            />
            {errors.name && (
              <div className="absolute -top-2 bg-red-200 rounded-lg text-red-600 text-sm font-bold px-4 py-2">
                {language == "english"
                  ? "Name is Required"
                  : "お名前を入力してください"}
              </div>
            )}
          </div>
          <div className="relative w-full flex flex-col">
            <label
              htmlFor="email"
              className={`${
                language == "japanese"
                  ? "!text-xl lg:!text-2xl"
                  : "text-2xl lg:text-3xl"
              }`}
            >
              {language == "english" ? "Email" : "メールアドレス"}
            </label>
            <input
              type="email"
              id="email"
              className="text-black text-2xl"
              autoComplete="email"
              {...register("email", {
                required: true,
              })}
              ref={emailRef}
            />
            {errors.email && (
              <div className="absolute -top-2 bg-red-200 rounded-lg text-red-600 text-sm font-bold px-4 py-2">
                {language == "english"
                  ? "Enter a valid e-mail"
                  : "メールアドレスを正しく入力してください"}
              </div>
            )}
          </div>
          {/* <div className="w-full flex flex-col">
            <label htmlFor="inquiry">Inquiry Type</label>
            <select name="inquiry" id="inquiry" className="text-black">
              <option value="booking">Booking</option>
            </select>
          </div> */}
          <div className="relative w-full flex flex-col pb-2 lg:pb-8">
            <label
              htmlFor="message"
              className={`${
                language == "japanese"
                  ? "!text-xl lg:!text-2xl"
                  : "text-2xl lg:text-3xl"
              }`}
            >
              {language == "english" ? "Message" : "お問い合わせ内容"}
            </label>
            <textarea
              id="message"
              style={{ resize: "none" }}
              className="text-black text-2xl h-20 lg:h-32"
              {...register("message", {
                required: true,
              })}
              ref={messageRef}
            />
            {errors.message && (
              <div className="absolute -top-2 bg-red-200 rounded-lg text-red-600 text-sm font-bold px-4 py-2">
                {language == "english"
                  ? " Message is required"
                  : "お問い合わせ内容を入力してください"}
              </div>
            )}
          </div>
          <button
            className={`p-2  w-40 ${
              sending || sent ? "bg-amber-700" : "bg-amber-600"
            }`}
            disabled={sending || sent ? true : false}
          >
            {error
              ? `${
                  language == "english" ? "Try Again" : "もう一度お試しください"
                }`
              : sent
              ? `${language == "english" ? "Message Sent" : "送信完了"}`
              : sending
              ? `${language == "english" ? "Sending..." : "送信中..."}`
              : `${language == "english" ? "Send" : "送信"}`}
          </button>
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
