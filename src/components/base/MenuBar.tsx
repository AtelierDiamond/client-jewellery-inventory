"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaFolder, FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function MenuBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const menuItems = [
        {
            id: "Home",
            icon: <FaHome />,
            title: "HOME",
            link: "/home",
        },
        {
            id: "Collection",
            icon: <FaFolder />,
            title: "COLLECTION",
            link: "/collection",
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
        <>
        <div className="sticky top-0 z-50">
            <section className="flex items-center justify-between w-full bg-[#02373A] p-2">
                <div 
                    onClick={() => router.push("/certified-stone")} 
                    className="md:w-[45%] md:max-w-[280px] text-white font-medium flex flex-col items-center cursor-pointer">
                    <div className="text-md md:text-xl font-serif uppercase font-bold ">B2B Designs</div>
                    <p className="text-xs md:text-md uppercase font-montserrat">Diamond Jewellery</p>
                </div>
                <div className="items-center pr-8 gap-1 hidden md:flex">
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
                <HiMiniBars3 onClick={()=>setIsOpen(true)} size={25} className='text-black me-2 text-white md:hidden' />
            </section>
        </div>

        {/* Sidebar for mobile */}
        <div>
        <section className={`${isOpen ? "block": "hidden"} w-full p-2 w-[200] bg-[#02373A] top-0 right-0 z-50 h-screen fixed`}>
         <div className='w-full h-10 rounded-md flex justify-end items-center '>
         <RxCross2 onClick={()=>setIsOpen(false)} size={25} className='text-black me-2 text-white' />
         </div>
                <div className={`flex-start gap-1 flex flex-col mt-12 gap-4`}>
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
        </>
    );
}

export default MenuBar;
