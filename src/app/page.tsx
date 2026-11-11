import React, { Suspense } from "react";
import Marquee from "./components/Marquee";
import MainBody from "./components/MainBody";

const page = () => {
  return (
    <div>
      <Suspense>
        <Marquee />
        <MainBody />
      </Suspense>
    </div>
  );
};

export default page;
