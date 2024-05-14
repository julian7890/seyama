"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditNewsForm({ news }: any) {
  const router = useRouter();
  const [uploadData, setUploadData]: any = useState();
  const [imageSrc, setImageSrc]: any = useState(news.image);
  const [formData, setFormData]: any = useState(news);

  const inputHandler = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const deleteHandler = (e: any) => {
    e.preventDefault();
    const deleteNews = async () => {
      const res = await fetch("/api/news", {
        method: "DELETE",
        body: JSON.stringify(formData.id),
      });
    };
    if (
      confirm(
        `このニュースを削除しますか？\n Are you sure you want to delete this news?`
      )
    ) {
      deleteNews();
      router.push("/admin/news");
    }
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

    formData.image = response.secure_url;

    const newsEdit = async () => {
      const res = await fetch("/api/news/", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(await res.json());
      if (res) {
        router.push("/admin/news");
      }
    };
    newsEdit();
  };

  return (
    <div className="min-h-svh">
      <div className="flex flex-col items-center p-4 text-2xl">
        <div>ニュース編集</div>
        <div>Edit News</div>
      </div>
      <form className="w-full flex flex-col justify-center items-center">
        <div className="w-fit flex flex-col gap-4 p-4">
          <div className="flex flex-col">
            <div className="flex justify-center">
              {imageSrc ? (
                <img src={imageSrc} className="w-1/2" alt="uploadPic" />
              ) : (
                ""
              )}
            </div>

            <label htmlFor="img">画像変更</label>
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

      <div className="flex justify-center gap-10 pt-12 ">
        <button
          className="bg-amber-200 hover:bg-amber-100 px-4 py-2 rounded-xl"
          onClick={formHandler}
        >
          編集／Update
        </button>

        <button
          className="bg-red-600/70 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          onClick={deleteHandler}
        >
          削除／Delete
        </button>
      </div>

      <div className="flex justify-center pt-12 pb-8">
        <Link href={"/admin/news"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
