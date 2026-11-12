import React from "react";
import MainDataLoad from "./MainDataLoad";
import IMainNewsDataType from "../types/MainNewsDataType";
import IBaseData from "../types/BaseDataType";
import OtherNewsData from "./OtherNewsData";
import MostRead from "./MostRead";

const MainBody = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data: IBaseData = await res.json();
  const dataInData: IMainNewsDataType[] = data.data;
  // console.log(dataInData);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 ">
        {/*make sure to remove bg*/}
        <div className="col-span-2 bg-green-500">
          <MainDataLoad dataInData={dataInData} />
          <div>
            <OtherNewsData dataInData={dataInData} />
          </div>
        </div>
        {/*make sure to remove bg*/}
        <div className="col-span-1 bg-red-500">
          <MostRead />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
