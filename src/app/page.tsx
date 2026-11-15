import { Suspense } from "react";
import MainBody from "./components/MainBody";
import Loading from "./loading";

const page = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MainBody />
      </Suspense>
    </div>
  );
};

export default page;
// main api link: https://news-api-v2.vercel.app
