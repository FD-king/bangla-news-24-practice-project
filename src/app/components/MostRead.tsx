import React from "react";
import IMostReadDataType from "../types/MoseReadDataType";

interface IData {
  success: boolean;
  count: number;
  cachedAt: string;
  generated: string;
  data: IMostReadDataType[];
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data: IData = await res.json();
  const dataInDataOfMostRead: IMostReadDataType[] = data.data;
  // console.log(dataInDataOfMostRead);
  return (
    <div>
      <h2 className="font-bold text-2xl p-3">সর্বাধিক পঠিত</h2>
      <div>
        {dataInDataOfMostRead.map((data) => (
          <div key={data.id} className="flex gap-2 p-4">
            <span className="text-red-500 text-2xl">{data.rank}</span>
            <h2 className="font-bold text-[18px]">{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
