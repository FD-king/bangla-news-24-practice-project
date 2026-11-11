import Image from "next/image";
import IMainNewsDataType from "../types/MainNewsDataType";

const MainDataLoad = ({ dataInData }) => {
  const firstNew = dataInData[0];
  const [firstArticle, ...otherNews] = firstNew.articles;
  console.log(firstArticle, otherNews); // comment
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstArticle.imageUrl}
            alt={firstArticle.imageAlt}
            height={600}
            width={600}
          />
        </figure>
        <div className="badge text-red-500">{firstArticle.category}</div>
        <div className="card-body">
          <h2 className="card-title">{firstArticle.title}</h2>
          <p>{firstArticle.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDataLoad;
