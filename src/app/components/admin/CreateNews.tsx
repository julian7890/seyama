"use client";
import Link from "next/link";
import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

export default function CreateNews() {
  const [formData, setFormData] = useState(null);

  const inputHandler = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const fileHandler = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log(e.target.file);
    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  console.log(formData);

  const formHandler = (e: any) => {
    e.preventDefault();
    const newsEntry = async () => {
      const res = await fetch("/api/news/", {
        method: "POST",
        body: formData,
      });
    };
  };

  return (
    <div className="min-h-svh">
      <div className="flex flex-col items-center p-4 text-2xl">
        <div>新規ニュース作成</div>
        <div>Create News</div>
      </div>
      <form className="w-full flex flex-col justify-center items-center">
        <div className="w-fit flex flex-col gap-4 p-4">
          <div className="flex flex-col">
            <CldImage width={600} height={500} src="cld-sample" alt="test" />

            <label htmlFor="img">画像</label>
            <CldUploadWidget uploadPreset="ml_default">
              {({ open }) => {
                return (
                  <button
                    className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white"
                    onClick={() => open()}
                  >
                    Upload an Image /　画像アップロード
                  </button>
                );
              }}
            </CldUploadWidget>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={fileHandler}
            />
          </div>
          <div className="text-center text-xl pt-4">日本語詳細</div>
          <div className="flex flex-col">
            <label htmlFor="title">タイトル</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">詳細</label>
            <textarea name="description" id="description"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="url">リンク</label>
            <input type="text" id="url" name="url" />
          </div>
          <div className="text-center text-xl pt-4">English Entry</div>
          <div className="flex flex-col">
            <label htmlFor="titleEN">Title</label>
            <input type="text" id="titleEN" name="titleEN" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="descriptionEN">Details</label>
            <textarea name="descriptionEN" id="descriptionEN"></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="urlEN">Link</label>
            <input type="text" id="urlEN" name="urlEN" />
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-8 pb-8 pt-16">
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
