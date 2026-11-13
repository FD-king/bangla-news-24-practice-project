import Link from "next/link";
import IMarqueeType from "../types/MarqueeType";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const dataInData = data.data;

  return (
    <div className="bg-red-500 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <p className="bg-red-700 py-1 pl-2">News|</p>

        <MarqueeText direction="right" duration={12} className="py-1">
          {dataInData.map((data: IMarqueeType) => (
            <span key={data.id}>
              <Link
                href={`/NewsDetails/${data.id}`}
                className="transition-all duration-200 hover:underline"
              >
                {data.title}
              </Link>

              <span className="mx-4">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
