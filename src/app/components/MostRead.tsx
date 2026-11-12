import React from "react";
import IMostReadDataType from "../types/MoseReadDataType";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data: IMostReadDataType = await res.json();
  console.log(data);
  return <div>fffffffffff</div>;
};

export default MostRead;
