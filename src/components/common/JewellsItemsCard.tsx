import Image, { StaticImageData } from "next/image";
import React from "react";

function JewellsItemsCard({
    img,
    title,
    price,
    }: {
    img: StaticImageData;
    title: string;
    price: number;
}) {
  return <div>
         <div className="relative w-[160] h-[160]">
            <Image fill src={img} alt={title} className="rounded-tr-3xl rounded-bl-3xl object-cover border border-black" />
         </div>
         <div className="flex flex-col items-center text-xs tracking-wider font-normal text-black mt-3">
            <span>{title}</span>
            <span>${price}</span>
         </div>
  </div>;
}

export default JewellsItemsCard;
