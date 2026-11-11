import React from "react";
import MainDataLoad from "./MainDataLoad";

const MainBody = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const dataInData = data.data;

  return (
    <div>
      <MainDataLoad dataInData={dataInData} />
    </div>
  );
};

export default MainBody;
