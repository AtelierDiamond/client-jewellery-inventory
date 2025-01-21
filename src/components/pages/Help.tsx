'use client';
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import "@fontsource-variable/montserrat";

function Help() {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setIsOpen(isOpen === index ? null : index);
    };
    const faqList = [
        { question: 'What is your minimum order quantity(MOQ)?', answer: 'Our MOQ varies by product type. Please contact us for specific details.' },
        { question: 'Do your offer customization services?', answer: '' },
        { question: 'What are your payments terms?', answer: '' },
        { question: 'Do your provide certifications for the diamonds?', answer: '' },
        { question: 'What is the lead time for orders?', answer: '' },
    ]
    return (
        <div className="flex justify-center items-center bg-[#e8ecef] min-h-screen">
            <div className="w-full px-10">
                <h2 className="text-2xl font-normal text-black my-2 font-montserrat">FAQs</h2>
                <div className="space-y-4">
                    {faqList.map((item, index: number) => (
                        <div
                            key={index}
                            className={`pl-0 pr-0 rounded-xl ${isOpen === index ? "bg-[#B7A99A] p-4" : "bg-white p-2"
                                }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer bg-white"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h2 className="text-lg font-normal font-montserrat px-4 p-2">
                                    {item.question}
                                </h2>
                                <span className="px-2 text-xl">
                                    {isOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                            </div>
                            {isOpen === index && (
                                <p className="mt-2 font-normal font-montserrat px-4 text-md text-[#333333]">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Help