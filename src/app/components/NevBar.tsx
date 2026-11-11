import Link from "next/link";
import React from "react";
import INavDataType from "../types/NavDataType";

const NavBar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const navdata = await res.json();
  const navdataInData = navdata.data;
  const filteredNavBarData = navdataInData.filter(
    (data: INavDataType) => data.scrapable,
  );

  return (
    <div className="container mx-auto flex justify-center items-center gap-5 mt-4">
      <Link href="/">Home</Link>
      {filteredNavBarData.map((data: INavDataType, id: string | null) => (
        <Link key={id} href={data.slug}>
          {data.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
