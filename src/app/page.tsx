import { Suspense } from "react";
import MainBody from "./components/MainBody";

const page = () => {
  return (
    <div>
      <Suspense>
        <MainBody />
      </Suspense>
    </div>
  );
};

export default page;
