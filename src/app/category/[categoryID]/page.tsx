import ITypeOfArticlesInMainNewsData from "@/app/types/TypeOfArticlesInMainNewsData";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryID: string }>;
}) => {
  //data fetch
  const { categoryID } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryID}`,
  );
  const data = await res.json();
  const detailNewsData = data.data;
  console.log(detailNewsData);

  return (
    <div className="container mx-auto">
      <div className="text-red-500 text-4xl font-bold pt-6 pb-2 border-red-500 border-b-2">
        {data.title}
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        {detailNewsData.map((news: ITypeOfArticlesInMainNewsData) => (
          <Link href={news.link} key={news.id}>
            <div>
              <div className="card bg-base-100 w-auto shadow-sm">
                <figure>
                  <Image
                    src={news.imageUrl}
                    alt={news.imageAlt}
                    height={600}
                    width={600}
                  />
                </figure>
                <div className="badge text-red-500 font-bold text-[15px]">
                  {news.category}
                </div>
                <div className="card-body">
                  <h2 className="card-title">{news.title}</h2>
                  <p>{news.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
