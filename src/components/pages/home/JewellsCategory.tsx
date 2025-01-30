"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ring from "@/components/images/categories/ring.jpg";
import bracelet from "@/components/images/categories/bracelet.jpg";
import earring from "@/components/images/categories/earring.jpg";
import necklace from "@/components/images/categories/necklace.jpg";
import pendant from "@/components/images/categories/pendant.jpg";
import Link from "next/link";

type Item = {
  img: StaticImageData;
  alt: string;
};

function JewellsCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const categoryImages:Item[] = [
    { img: ring, alt: "Ring" },
    { img: bracelet, alt: "Bracelet" },
    { img: earring, alt: "Earring" },
    { img: necklace, alt: "Necklace" },
    { img: pendant, alt: "Pendant" },
    { img: ring, alt: "Ring" },
    { img: bracelet, alt: "Bracelet" },
    { img: earring, alt: "Earring" },
    { img: necklace, alt: "Necklace" },
    { img: pendant, alt: "Pendant" },
  ];
 

  return (
    <div className="w-[98vw] p-4 mx-auto">
      <h2 className="text-3xl text-black font-medium cursor-pointer">
        Categories
      </h2>
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={scrollLeft}
          className={`rounded-md px-1 bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black ${scrollRef.current && scrollRef?.current?.offsetWidth>0}`}
        >
          <MdKeyboardArrowLeft size={25} />
        </button>
        <button
          onClick={scrollRight}
          className={`rounded-md px-1 bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black ${scrollRef.current && scrollRef?.current?.offsetWidth<0}`}
        >
          <MdKeyboardArrowRight size={25} />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll w-full relative scroll-smooth no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {categoryImages.map((item, index) => (
         <div key={index} className="bg-[#ebe5df] p-2 rounded-2xl">
             <div
            className="min-w-[180px] min-h-[160] relative"
          >
            <Link href={`/jewells?category=${item.alt.toLowerCase()}`} passHref>
              <Image
                className="rounded-xl object-cover"
                src={item.img}
                alt={item.alt}
              />
            </Link>
          </div>
            <h1 className="text-center text-md mt-2 font-medium cursor-pointer">{item.alt}</h1>
         </div>
        ))}
      </div>
    </div>
  );
}

export default JewellsCategory;
