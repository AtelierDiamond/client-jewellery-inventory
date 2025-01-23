import Image, { StaticImageData } from "next/image";
import React from "react";

function JewellsSideBar({
  img,
  title,
}: {
  img: StaticImageData;
  title: string;
}) {
  return (
    <div className="md:w-[18%] border h-full relative hidden lg:block">
      <Image fill className="object-cover" src={img} alt={"title"} />
      <div className="absolute w-full top-10 text-center ">
        <span className="bg-[#ebe5df] p-2 rounded-xl">{title}</span>
      </div>
    </div>
  );
}

export default JewellsSideBar;
