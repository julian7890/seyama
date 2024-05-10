"use client";
import Link from "next/link";
import { useState } from "react";

type propType = {
  bioData: {
    id: string;
    jpData: string;
    enData: string;
  } | null;
};

export default function EditBio({ bioData }: propType) {
  const [formData, setFormData] = useState(bioData);
  const [message, setMessage] = useState("");

  const inputHandler = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState): any => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    const updateBio = async () => {
      setMessage("アップロード中/Uploading");
      const res = await fetch("/api/bio", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(res);
      setMessage("アップロード完了/UploadComplete");
    };
    updateBio();
  };

  return (
    <div className="p-4">
      <div className="text-2xl text-center pb-4">
        プロフィール編集 / Bio Edit
      </div>
      <div className="flex flex-col justify-center items-center gap-2 h-full">
        <textarea
          name="jpData"
          id="jpData"
          className="w-full h-72"
          value={formData?.jpData}
          onChange={inputHandler}
        />
        <textarea
          name="enData"
          id="enData"
          className="w-full h-72"
          value={formData?.enData}
          onChange={inputHandler}
        />
      </div>

      <div className="flex flex-col justify-center items-center pt-12">
        <div className=" text-lime-700 font-bold pb-4">{message}</div>
        <button
          className="bg-amber-200 hover:bg-amber-100 px-4 py-2 rounded-xl w-fit"
          onClick={formHandler}
        >
          編集／Update
        </button>
        <div className="flex justify-center pt-14 pb-8">
          <Link href={"/admin"}>
            <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
              戻る
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
