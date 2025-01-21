"use client";
import React, { useRef } from "react";
import img1 from "@/components/images/categories/ring.jpg";
import img2 from "@/components/images/categories/bracelet.jpg";
import img3 from "@/components/images/categories/earring.jpg";
import img4 from "@/components/images/categories/necklace.jpg";
import img5 from "@/components/images/categories/pendant.jpg";
import Image from "next/image";
import "@fontsource-variable/montserrat";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Home() {
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
    { img: img1, alt: "Ring" },
    { img: img2, alt: "Bracelet" },
    { img: img3, alt: "Earring" },
    { img: img4, alt: "Necklace" },
    { img: img5, alt: "Pendant" },
    { img: img1, alt: "Ring" },
    { img: img2, alt: "Bracelet" },
    { img: img3, alt: "Earring" },
    { img: img4, alt: "Necklace" },
    { img: img5, alt: "Pendant" },
  ];

  return (
    <div className="">
      <div className="w-[100vw] h-[380px] mb-2">
        <video
          className="w-full h-full block object-fill"
          width="100vw"
          autoPlay={true}
        >
          <source src='https://media-hosting.imagekit.io//5345e8d45d4f48fd/uri_ifs___V_qI7b9jpU4vQggmlFKbeWOJnsAS8gMGRYNc6NPaQOhag%20-%20ROTATE%20-%20Videobolt.net.mp4?Expires=1831720461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=La-2xvl7Z8omETg9Yk3OrmF12yPlktYcyEdbprz~ifJ5exkJImRqH~Xvctwlomm9LeRJdL~CBMgnaoSCzlmgs3atPBn-Sr7uOv6J2nX75G8Z2lZCgbh5IDcLB3~swf2RaQe3SoblmDd6G~EdIUt2YPZGmsyL3SlqXog0VGhyGoEgqPv4ESD47-hwOq9lE-IotcJkdwleK3Pule~iUFH6cyKCS3SET2r4HydRqzjm1oJS9UOju5HkbuDhmdX0-4iO0PvlXw-R4ZoEoqhq7w1L7YLd-BpGN2H1pQUy6nRjna546vfjAr3MGY6h8ZOWB-1nqm1TbFHpWc9OTI~kmOJXqg__'  />
        </video>
      </div>
      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-normal text-black font-montserrat">Categories</h2>
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="w-10 h-8 rounded-md bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black">
            <MdKeyboardArrowLeft size={25} />
            </button>
            <button onClick={scrollRight} className="w-10 h-8 rounded-md bg-[#e8ecef] text-[#999696] flex items-center justify-center hover:text-black">
            <MdKeyboardArrowRight size={25} />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex justify-center items-center space-x-5 overflow-auto">
          {categoryImages.map((image, index:number) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#EBE5DF] rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              <Image
                src={image.img}
                alt={image.alt}
                className="rounded-md"
                height={100}
                width={100}
              />
              <p className="text-center text-md font-medium font-montserrat text-gray-700 mt-4">
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
