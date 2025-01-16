"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";

function MenuBar() {
    const router = useRouter();

    const menuItems = [
        {
            id: "Home",
            icon: <FaHome />,
            title: "HOME",
            link: "/home",
        },
        {
            id: "Contact",
            icon: <IoCall />,
            title: "CONTACT",
            link: "/contact",
        },
        {
            id: "Help",
            icon: <BsFillQuestionSquareFill />,
            title: "HELP",
            link: "/help",
        },
    ];

    return (
        <div className="sticky top-0 z-50">
            <section className="flex items-center justify-between w-full bg-[#02373A]">
                <div 
                    onClick={() => router.push("/certified-stone")} 
                    className="md:w-[45%] md:max-w-[280px] text-white font-medium flex flex-col items-center cursor-pointer">
                    <div className="text-md font-serif uppercase">B2B Designs</div>
                    <p className="text-xl uppercase font-serif">Diamond Jewellery</p>
                </div>
                <div className="flex items-center pr-8">
                    {menuItems.map((item) => (
                        <a 
                            href={item.link} 
                            key={item.id} 
                            className="flex items-center gap-2 border text-white h-10 px-12 rounded-md transition duration-300 hover:bg-[#B7A99A] hover:text-[#02373A] hover:border-[#B7A99A]">
                            <div className="text-lg">{item.icon}</div>
                            <div className="text-sm font-medium uppercase">{item.title}</div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MenuBar;
