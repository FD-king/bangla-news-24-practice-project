import Image from "next/image";
import IOtherNewsType from "../types/otherNewsType";
import Link from "next/link";

const OtherNewsCard = ({
  NewsInsideNews,
}: {
  NewsInsideNews: IOtherNewsType;
}) => {
  return (
    <Link href={`NewsDetails/${NewsInsideNews.id}`}>
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
    </Link>
  );
};

export default OtherNewsCard;
