import JewellsSideBar from "@/components/common/JewellsSideBar";
import React from "react";
import handbracelet from "@/components/images/product/hand-bracelet.jpg";
import product1 from "@/components/images/product/product1.jpg";
import product2 from "@/components/images/product/product2.jpg";
import product3 from "@/components/images/product/product3.jpg";
import product4 from "@/components/images/product/product4.jpg";
import product5 from "@/components/images/product/product5.jpg";
import product6 from "@/components/images/product/product6.jpg";
import JewellsItemsCard from "@/components/common/JewellsItemsCard";
import Link from "next/link";

function Jewells() {

    const items = [
        { img: product1, title: "Hand Bracelet", price: 100 },
        { img: product2, title: "Hand Bracelet", price: 100 },
        { img: product3, title: "Hand Bracelet", price: 100 },
        { img: product4, title: "Hand Bracelet", price: 100 },
        { img: product5, title: "Hand Bracelet", price: 100 },
        { img: product6, title: "Hand Bracelet", price: 100 },
        { img: product1, title: "Hand Bracelet", price: 100 },
        { img: product2, title: "Hand Bracelet", price: 100 },
        { img: product3, title: "Hand Bracelet", price: 100 },
        { img: product4, title: "Hand Bracelet", price: 100 },
        { img: product5, title: "Hand Bracelet", price: 100 },
        { img: product6, title: "Hand Bracelet", price: 100 },
        { img: product1, title: "Hand Bracelet", price: 100 },
        { img: product2, title: "Hand Bracelet", price: 100 },
        { img: product3, title: "Hand Bracelet", price: 100 },
        { img: product4, title: "Hand Bracelet", price: 100 },
        { img: product5, title: "Hand Bracelet", price: 100 },
        { img: product6, title: "Hand Bracelet", price: 100 },
        { img: product1, title: "Hand Bracelet", price: 100 },
        { img: product2, title: "Hand Bracelet", price: 100 },
        { img: product3, title: "Hand Bracelet", price: 100 },
        { img: product4, title: "Hand Bracelet", price: 100 },
        { img: product5, title: "Hand Bracelet", price: 100 },
        { img: product6, title: "Hand Bracelet", price: 100 },
    ]


    return <div className="h-full flex">
        <JewellsSideBar img={handbracelet} title="Bracelet Collection" />
        <div className="w-1/2 h-full flex-1 overflow-y-scroll ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-4 place-items-center space-y-3 gap-1 xl:gap-0">
                {
                    items.map((item, index) => (
                        <Link key={index} href={`/jewells/${index}`}>
                            <JewellsItemsCard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>;
}

export default Jewells;
