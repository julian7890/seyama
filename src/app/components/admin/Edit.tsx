"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";

export default function EditSchedule({ schedule }: any) {
  const router = useRouter();

  const [castNumberJP, setcastNumberJP] = useState(
    schedule.jp.performer.length
  );
  const [castNumberEN, setcastNumberEN] = useState(
    schedule.jp.performer.length
  );
  const [formData, setFormData] = useState(schedule);
  const [performerListJP, setPerformerListJP]: any = useState(
    schedule.jp.performer
  );
  const [performerListEN, setPerformerListEN]: any = useState(
    schedule.en.performer
  );

  const increaseCast = (e: any) => {
    e.preventDefault();
    setcastNumberJP((prevState: number) => prevState + 1);
    setcastNumberEN((prevState: number) => prevState + 1);
  };

  const inputHandler = (e: any) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;
    console.log(fieldValue);
    if (fieldName.includes("JP")) {
      const newfieldName = fieldName.replace("JP", "");
      setFormData((prevState: { jp: any }) => ({
        ...prevState,
        jp: { ...prevState?.jp, [newfieldName]: fieldValue },
      }));
    } else if (fieldName.includes("EN")) {
      const newfieldName = fieldName.replace("EN", "");
      setFormData((prevState: { en: any }) => ({
        ...prevState,
        en: { ...prevState?.en, [newfieldName]: fieldValue },
      }));
    } else {
      setFormData((prevState: any) => ({
        ...prevState,
        [fieldName]: fieldValue,
      }));
    }
  };

  const performerHandler = (e: any) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;
    const index = fieldName.match(/\d/)[0];

    if (fieldName.includes("JP")) {
      const newFieldName = fieldName.replace("JP", "").replace(/\d/, "");
      if (!performerListJP[index]) {
        setPerformerListJP((prevState: any): any => [
          ...prevState,
          { [newFieldName]: fieldValue },
        ]);
      } else {
        const newPerformerList = performerListJP.map(
          (performer: any, i: any) => {
            if (i == index) {
              return {
                ...performer,
                [newFieldName]: fieldValue,
              };
            } else {
              return performer;
            }
          }
        );
        setPerformerListJP(newPerformerList);
      }
    } else if (fieldName.includes("EN")) {
      const newFieldName = fieldName.replace("EN", "").replace(/\d/, "");

      if (!performerListEN[index]) {
        setPerformerListEN((prevState: any): any => [
          ...prevState,
          { [newFieldName]: fieldValue },
        ]);
      } else {
        const newPerformerList = performerListEN.map(
          (performer: any, i: any) => {
            if (i == index) {
              return {
                ...performer,
                [newFieldName]: fieldValue,
              };
            } else {
              return performer;
            }
          }
        );

        setPerformerListEN(newPerformerList);
      }
    }
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    formData.jp.performer = performerListJP;
    formData.en.performer = performerListEN;
    console.log(formData);

    const uploadData = async () => {
      formData.id = schedule.id;
      const res = await fetch("/api/schedule", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res) {
        router.push("/admin/schedule");
      }
    };
    console.log(formData);
    uploadData();
  };

  const deleteHandler = (e: any) => {
    e.preventDefault();
    const deleteSchedule = async () => {
      const res = await fetch("/api/schedule", {
        method: "DELETE",
        body: JSON.stringify(formData.id),
      });
    };
    if (
      confirm(
        `このスケジュールを削除しますか？\n Are you sure you want to delete this schedule?`
      )
    ) {
      deleteSchedule();
      router.push("/admin/schedule");
    }
  };

  const castInputJP = [];
  const castInputEN = [];

  for (let i = 0; i < castNumberJP; i++) {
    castInputJP.push(
      <div className="flex gap-2" key={`JP${i}`}>
        <div className="flex flex-col">
          <label htmlFor={`roleJP${i}`}>役職{i + 1}</label>
          <input
            type="text"
            id={`roleJP${i}`}
            name={`roleJP${i}`}
            size={9}
            value={performerListJP[i]?.role || ""}
            onChange={performerHandler}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`nameJP${i}`}>名前{i + 1}</label>
          <input
            type="text"
            id={`nameJP${i}`}
            name={`nameJP${i}`}
            size={19}
            value={performerListJP[i]?.name || ""}
            onChange={performerHandler}
          />
        </div>
      </div>
    );
  }

  for (let i = 0; i < castNumberEN; i++) {
    castInputEN.push(
      <div className="flex gap-2" key={`EN${i}`}>
        <div className="flex flex-col">
          <label htmlFor={`roleEN${i}`}>Role{i + 1}</label>
          <input
            type="text"
            id={`roleEN${i}`}
            name={`roleEN${i}`}
            size={9}
            value={performerListEN[i]?.role || ""}
            onChange={performerHandler}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`nameEN${i}`}>Name{i + 1}</label>
          <input
            type="text"
            id={`nameEN${i}`}
            name={`nameEN${i}`}
            size={19}
            value={performerListEN[i]?.name || ""}
            onChange={performerHandler}
          />
        </div>
      </div>
    );
  }

  // useEffect(() => {
  //   const getSchedule = async () => {
  //     const res = await fetch("/api/schedule", {
  //       method: "POST",
  //       body: JSON.stringify({ id: params.id }),
  //     });
  //     const data = await res.json();
  //     const dateData = new Date(data.date);
  //     const year = dateData.getFullYear();
  //     const month = String(dateData.getMonth() + 1).padStart(2, "0");
  //     const day = String(dateData.getDate()).padStart(2, "0");
  //     const formattedDate = `${year}-${month}-${day}`;
  //     data.date = formattedDate;
  //     setSchedule(data);
  //     setFormData(data);
  //     setcastNumberJP(data.jp.performer.length);
  //     setcastNumberEN(data.en.performer.length);
  //   };
  //   getSchedule();
  // }, [params.id]);


  return (
    <div>
      <div className="text-2xl text-center py-4 px-2">
        スケジュール編集 / Schedule Edit
      </div>
      <form className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="date">日時</label>
            <input
              type="date"
              id="date"
              name="date"
              value={moment(formData?.date, "YYYY-M-DD").format('YYYY-MM-DD')}
              onChange={inputHandler}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="url">リンク</label>
            <textarea
              name="url"
              id="url"
              className="min-h-8"
              value={formData?.url ? formData.url : ""}
              onChange={inputHandler}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center py-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col">
              <label htmlFor="descriptionJP">タイトル(日本語)</label>
              <textarea
                name="descriptionJP"
                id="descriptionJP"
                rows={3}
                placeholder="タイトル未設定の場合はホームページ内で表示されません。半角・全角スペースは強制改行になります。"
                value={formData?.jp.description ? formData?.jp.description : ""}
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="locationJP">会場（日本語）</label>
              <textarea
                name="locationJP"
                id="locationJP"
                rows={3}
                className="min-h-8"
                value={formData?.jp.location}
                onChange={inputHandler}
              ></textarea>
              <div className="text-center">{`文中に<br>を使って改行が行えます。`}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label htmlFor="roleJP0">出演者（日本語）</label>
            {castInputJP}
            <button
              className="bg-red-300 hover:bg-red-200 rounded-3xl px-6 pb-1"
              onClick={increaseCast}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-center items-center py-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col">
              <label htmlFor="descriptionEN">Title</label>
              <textarea
                name="descriptionEN"
                id="descriptionEN"
                rows={3}
                placeholder="Schedule will not be displayed when title is empty. Use <br> to force line break."
                value={formData?.en.description ? formData?.en.description : ""}
                onChange={inputHandler}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="locationEN">Location</label>
              <textarea
                name="locationEN"
                id="locationEN"
                rows={3}
                className="min-h-8"
                value={formData?.en.location}
                onChange={inputHandler}
              ></textarea>
              <div className="text-center">{`Use <br> to force line break.`}</div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <label htmlFor="roleEN0">Cast</label>
            {castInputEN}
            <button
              className="bg-red-300 hover:bg-red-200 rounded-3xl px-6 pb-1"
              onClick={increaseCast}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10">
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
      </form>
      <div className="flex justify-center pt-24 pb-8">
        <Link href={"/admin/schedule"}>
          <div className="bg-amber-500 hover:bg-amber-500/80 rounded-xl px-4 py-2">
            戻る
          </div>
        </Link>
      </div>
    </div>
  );
}
