import Image from "next/image";
import IOtherNewsType from "../types/otherNewsType";

const OtherNewsCard = ({
  NewsInsideNews,
}: {
  NewsInsideNews: IOtherNewsType;
}) => {
  return (
    <div>
      <div className="card bg-base-100 w-auto shadow-sm">
        <figure>
          <Image
            src={NewsInsideNews.imageUrl}
            alt={
              NewsInsideNews.imageAlt == null
                ? "no image"
                : NewsInsideNews.imageAlt
            }
            height={600}
            width={600}
          />
        </figure>
        <div className="badge text-red-500 font-bold text-[15px]">
          {NewsInsideNews.category}
        </div>
        <div className="card-body">
          <h2 className="card-title">{NewsInsideNews.title}</h2>
          <p>{NewsInsideNews.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherNewsCard;
