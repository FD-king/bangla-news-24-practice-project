import { Button } from "@heroui/react";
import Image from "next/image";
import { connection } from "next/server";

const Header = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="flex justify-between items-center container mx-auto">
      <div></div>
      <div className="flex justify-between items-center gap-2">
        <Image src="/favicon.ico" alt="logo" height={60} width={60} />
        <section>
          <h2 className="font-bold text-3xl text-red-700">Bangla News 24</h2>
          <p className="text-gray-500 font-semibold">{date}</p>
        </section>
      </div>
      <div>
        <Button variant="ghost">Sign In</Button>
        <Button variant="danger">Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
