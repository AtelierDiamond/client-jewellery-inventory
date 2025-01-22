"use client";
import React, { useState } from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import ring1 from '@/components/images/collections/ring1.jpg';
import ring2 from '@/components/images/collections/ring2.jpg';
import ring3 from '@/components/images/collections/ring3.jpg';
import ring4 from '@/components/images/collections/ring4.jpg';
import ring5 from '@/components/images/collections/ring5.jpg';
import ring6 from '@/components/images/collections/ring6.jpg';
import ring7 from '@/components/images/collections/ring7.jpg';
import ring8 from '@/components/images/collections/ring8.jpg';
import ring9 from '@/components/images/collections/ring9.jpg';
import ring10 from '@/components/images/collections/ring10.jpg';
import ring11 from '@/components/images/collections/ring11.jpg';
import ring12 from '@/components/images/collections/ring12.jpg';
import Image from 'next/image';

function Collections() {
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const rings = [
        { img: ring1, alt: 'ring1' },
        { img: ring2, alt: 'ring2' },
        { img: ring3, alt: 'ring3' },
        { img: ring4, alt: 'ring4' },
        { img: ring5, alt: 'ring5' },
        { img: ring6, alt: 'ring6' },
        { img: ring7, alt: 'ring7' },
        { img: ring8, alt: 'ring8' },
        { img: ring9, alt: 'ring9' },
        { img: ring10, alt: 'ring10' },
        { img: ring11, alt: 'ring11' },
        { img: ring12, alt: 'ring12' },
    ];

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (event.target.name === 'min') {
            setPriceRange([value, priceRange[1]]);
        } else if (event.target.name === 'max') {
            setPriceRange([priceRange[0], value]);
        }
    };

    return (
        <>
            <div className="flex justify-between flex-col lg:flex-row my-8 m-10 relative">
                <div className="w-full lg:w-1/4 space-y-8 mt-24">
                    <div className="flex items-center gap-3">
                        <h3 className="text-2xl ">Filter & Sort</h3>
                        <TbAdjustmentsHorizontal size={25} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium ">Price</h3>
                        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#02373a]" />
                        <div className="flex justify-between text-sm text-gray-700">
                            <span className="text-xl font-medium ">Filter</span>
                            <span className="text-xl font-medium ">Price: $200 - $1000</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium text-[#02373a]  rounded">Jewellery</h3>
                        <select className="w-full h-10 border border-gray-300 bg-gray-100 rounded px-2">
                            <option className=''>Rings</option>
                            <option className=''>Bracelet</option>
                            <option className=''>Pendant</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-[#02373a]  rounded font-medium">Gold</h3>
                        <select className="w-full h-10 border border-gray-300 bg-gray-100 rounded px-2">
                            <option className=''>All</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 lg:w-3/4">
                    {rings.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 mx-auto"
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                className="rounded-md border border-solid hover:border-[#02373a] hover:border-solid"
                                height={150}
                                width={150}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Collections;