import React from "react";
import IMainNewsDataType from "../types/MainNewsDataType";
import Link from "next/link";
import OtherNewsCard from "./OtherNewsCard";

const OtherNewsData = ({ dataInData }: { dataInData: IMainNewsDataType[] }) => {
  const [temp, ...otherNewsArticles] = dataInData;
  // console.log(otherNewsArticles);
  return (
    <div>
      <div>
        {otherNewsArticles.map((news) => (
          <div key={news.curationId}>
            <div className="flex border-b-4 border-red-900 text-2xl font-bold py-4 ">
              {news.title}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 ">
              {news.articles.map((newsInsideNews) => (
                <Link href="" key={newsInsideNews.id}>
                  <OtherNewsCard NewsInsideNews={newsInsideNews} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherNewsData;
