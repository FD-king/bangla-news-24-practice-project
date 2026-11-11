import React from "react";

const MainBody = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  console.log(data);
  return <div></div>;
};

export default MainBody;
