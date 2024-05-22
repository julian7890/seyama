"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNews() {
  const router = useRouter();
  const today = new Date();
  const [uploadData, setUploadData]: any = useState();
  const [message, setMessage]: any = useState("");
  const [imageSrc, setImageSrc]: any = useState();
  const [formData, setFormData]: any = useState({
    date: today,
    titleJP: "",
    descriptionJP: "",
    titleEN: "",
    descriptionEN: "",
    url: "",
    image: "",
  });

  const inputHandler = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const data = new FormData();

  const fileHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target?.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setUploadData(e.target.files[0]);
  };

  const formHandler = async (e: any) => {
    e.preventDefault();
    data.append("upload_preset", "sldoylah");
    data.append("file", uploadData);
    console.log(data);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfqqteckl/image/upload",
      { method: "POST", body: data }
    ).then((r) => r.json());
    console.log(response);
    formData.image = response.secure_url;
    if (response.error) {
      return setMessage(
        <div className="flex flex-col justify-center items-center">
          <span>画像ファイルが大きすぎるか存在しません。</span>
          <span>The image files is too large or non-existent.</span>
        </div>
      );
    }

    const newsEntry = async () => {
      const res = await fetch("/api/news/", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const response = await res.json().then();
      if (response) {
        router.push("/admin/news");
        router.refresh();
      }
    };

    newsEntry();
  };

  return (
    <div className="min-h-svh w-full flex flex-col items-center">
      <div className="w-fit flex flex-col items-center p-4 text-2xl">
        <div>新規ニュース作成</div>
        <div>Create News</div>
      </div>
      <form className="w-fit flex flex-col justify-center items-center">
        <div className="w-fit flex flex-col gap-4 p-4">
          <div className="flex flex-col">
            <div className="max-w-screen-md flex justify-center">
              {imageSrc ? (
                <img src={imageSrc} className="w-1/2" alt="uploadPic" />
              ) : (
                ""
              )}
            </div>

            <label htmlFor="img">画像</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={fileHandler}
            />
            <div className="flex flex-col">
              <label htmlFor="url">リンク / Link</label>
              <input
                type="text"
                id="url"
                name="url"
                value={formData?.url}
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="text-center text-xl pt-4">日本語詳細</div>
          <div className="flex flex-col">
            <label htmlFor="titleJP">タイトル</label>
            <input
              type="text"
              id="titleJP"
              name="titleJP"
              value={formData?.titleJP}
              onChange={inputHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="descriptionJP">詳細</label>
            <textarea
              name="descriptionJP"
              id="descriptionJP"
              value={formData?.descriptionJP}
              onChange={inputHandler}
            ></textarea>
          </div>

          <div className="text-center text-xl pt-4">English Entry</div>
          <div className="flex flex-col">
            <label htmlFor="titleEN">Title</label>
            <input
              type="text"
              id="titleEN"
              name="titleEN"
              value={formData?.titleEN}
              onChange={inputHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="descriptionEN">Details</label>
            <textarea
              name="descriptionEN"
              id="descriptionEN"
              value={formData?.descriptionEN}
              onChange={inputHandler}
            ></textarea>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-8 pb-8 pt-5">
        <div className="text-red-800 text-center">{message}</div>
        <button
          className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-md text-white"
          onClick={formHandler}
        >
          作成／Create
        </button>

        <Link href={"/admin/news"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
