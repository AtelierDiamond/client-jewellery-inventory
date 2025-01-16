"use client";
import React from "react";
import img1 from "@/components/images/categories/ring.png";
import img2 from "@/components/images/categories/bracelet.png";
import img3 from "@/components/images/categories/earring.png";
import img4 from "@/components/images/categories/necklace.png";
import img5 from "@/components/images/categories/pendant.png";
import Image from "next/image";

function Home() {
  const categoryImages = [
    { img: img1, alt: "Ring" },
    { img: img2, alt: "Bracelet" },
    { img: img3, alt: "Earring" },
    { img: img4, alt: "Necklace" },
    { img: img5, alt: "Pendant" },
  ];

  return (
    <div className="">
      <div className="w-full mb-2">
        <video
          className="w-full max-h-[350px] shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="\src\components\images\video\video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-normal text-black">Categories</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-md bg-[#B7A99A] text-white flex items-center justify-center hover:bg-[#9c8c7a]">
              &lt;
            </button>
            <button className="w-8 h-8 rounded-md bg-[#B7A99A] text-white flex items-center justify-center hover:bg-[#9c8c7a]">
              &gt;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categoryImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              <Image
                src={image.img}
                alt={image.alt}
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-md"
              />
              <p className="text-center text-sm font-medium text-gray-700 mt-4">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
