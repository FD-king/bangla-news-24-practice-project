import Image from "next/image";
import IMainNewsDataType from "../types/MainNewsDataType";
import Link from "next/link";

const MainDataLoad = ({ dataInData }: { dataInData: IMainNewsDataType[] }) => {
  const firstNew: IMainNewsDataType = dataInData[0];
  const [firstArticle, ...otherNews] = firstNew.articles;
  // console.log(otherMainNewsList); // comment
  return (
    <div className="grid grid-cols-2 gap-2">
      <Link href={`NewsDetails/${firstArticle.id}`}>
        <div className="card bg-base-100 w-auto shadow-sm col-span-1">
          <figure>
            <Image
              src={firstArticle.imageUrl}
              alt={firstArticle.imageAlt}
              height={600}
              width={600}
            />
          </figure>
          <div className="badge text-red-500 font-bold text-[15px]">
            {firstArticle.category}
          </div>
          <div className="card-body">
            <h2 className="card-title">{firstArticle.title}</h2>
            <p>{firstArticle.description}</p>
          </div>
        </div>
      </Link>

      <div className="card bg-base-100 w-auto shadow-sm col-span-1 divide-y">
        {otherNews.slice(0, 4).map((newsData) => (
          <div key={newsData.id}>
            <div className="badge text-red-500 font-bold text-[15px]">
              {newsData.category}
            </div>
            <div className="card-body">
              <Link href={`NewsDetails/${newsData.id}`}>
                <h2 className="card-title">{newsData.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDataLoad;
