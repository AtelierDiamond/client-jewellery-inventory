"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ring from "@/components/images/categories/ring.jpg";
import bracelet from "@/components/images/categories/bracelet.jpg";
import earring from "@/components/images/categories/earring.jpg";
import necklace from "@/components/images/categories/necklace.jpg";
import pendant from "@/components/images/categories/pendant.jpg";
import Link from "next/link";

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

  const categoryImages = [
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
    <div className="p-6 bg-white ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-normal text-black font-montserrat">
          Categories
        </h2>
        <div className="flex gap-2" >
          <button
            onClick={scrollLeft}
            className="w-10 h-8 rounded-md bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black"
          >
            <MdKeyboardArrowLeft size={25} />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-8 rounded-md bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black"
          >
            <MdKeyboardArrowRight size={25} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex justify-start items-center space-x-8 overflow-auto no-scrollbar"
      >
        {categoryImages.map((image, index: number) => (
          <Link
            href={"#"}
            key={index}
            className="flex flex-col items-center bg-[#EBE5DF] rounded-2xl shadow-md p-3 hover:shadow-lg transition duration-200"
          >
            <div className="min-h-[160px] min-w-[180px] relative">
              <Image
                src={image.img}
                alt={image.alt}
                className="rounded-xl object-cover"
                fill
              />
            </div>
            <p className="text-center text-md font-medium font-montserrat text-gray-700 mt-1">
              {image.alt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JewellsCategory;
