import ProductDetailSlider from "@/components/common/ProductDetailSlider";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import img1 from "@/components/images/single-page/bracelet.jpg";
import img2 from "@/components/images/single-page/first.png";
import img3 from "@/components/images/single-page/fourth.png";
import MetalType from "@/components/pages/JewellDetails/MetalType";
import SizeSelectors from "@/components/pages/JewellDetails/SizeSelectors";
import Selector from "@/components/common/Selector";

const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function page() {
  const SliderImage = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  const metalType = [
    { id: 1, colorCode: "#ffffff", text: "14K", title: "White gold" },
    { id: 2, colorCode: "#e5ce83", text: "", title: "Yellow gold" },
    { id: 3, colorCode: "#e7ba9a", text: "", title: "Rose gold" },
  ];

  const sizes = [
    {id:"size1", value:6, title:"6"},
    {id:"size2", value:6.5, title:"6.5"},
    {id:"size3", value:7, title:"7"},
    {id:"size4", value:7.5, title:"7.5"},
  ];

  const color = [
    {value:"DEF", title:"DEF"},
    {value:"DEF", title:"DEF"},
    {value:"DEF", title:"DEF"},
    {value:"DEF", title:"DEF"}
  ]

 

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="flex justify-center items-center">
        <ProductDetailSlider slides={SliderImage} options={OPTIONS} />
      </div>
      <div className="bg-[#20403a] text-white md:mb-none">
        <h1 className="text-xl text-center mt-10">
          14k Round Diamond Tennis Bracelet
        </h1>
        <h1 className="text-xl bg-[#ebe5df] mt-4 text-black ps-10 py-1">
          $ 5,050
        </h1>
        <div className="w-[80%] mx-auto">
           <MetalType metalType={metalType}/>
           <SizeSelectors sizes={sizes}/>
           <div className="flex gap-4 mt-5">
               <div className="w-1/2">
                  <h1>Color:</h1>
                  <Selector options={color} customClass=""/>
               </div>
               <div className="w-1/2">
                  <h1>Clarity:</h1>
                  <Selector options={color} customClass=""/>
               </div>
           </div>
           <div className="mt-5">
              <h1>Size (MM):</h1>
              <Selector  options={color} customClass="" />
           </div>
           <div className="text-center">
           <button className="rounded-3xl mt-14 text-black px-4 p-1 text-xl bg-[#b7a99a] mb-8">Add to cart</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default page;
