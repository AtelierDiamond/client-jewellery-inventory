import React from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import ring1 from '@/components/images/collections/ring1.png';
import ring2 from '@/components/images/collections/ring2.png';
import ring3 from '@/components/images/collections/ring3.png';
import ring4 from '@/components/images/collections/ring4.png';
import ring5 from '@/components/images/collections/ring5.png';
import ring6 from '@/components/images/collections/ring6.png';
import ring7 from '@/components/images/collections/ring7.png';
import ring8 from '@/components/images/collections/ring8.png';
import ring9 from '@/components/images/collections/ring9.png';
import ring10 from '@/components/images/collections/ring10.png';
import ring11 from '@/components/images/collections/ring11.png';
import ring12 from '@/components/images/collections/ring12.png';
import Image from 'next/image';
import "@fontsource-variable/montserrat";

function Collections() {
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

    return (
        <>
            <div className="flex justify-around flex-col lg:flex-row my-10">
                <div className="w-full lg:w-1/4 space-y-8">
                    <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-montserrat">Filter & Sort</h3>
                        <TbAdjustmentsHorizontal size={25} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium font-montserrat">Price</h3>
                        <input type="range" className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#02373a]" />
                        <div className="flex justify-between text-sm text-gray-700">
                            <span className="text-xl font-medium font-montserrat">Filter</span>
                            <span className="text-xl font-medium font-montserrat">Price: $200 - $1000</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-medium text-[#02373a] font-montserrat rounded">Jewellery</h3>
                        <select className="w-full h-10 border border-gray-300 bg-gray-100 rounded px-2">
                            <option className='font-montserrat'>Rings</option>
                            <option className='font-montserrat'>Bracelet</option>
                            <option className='font-montserrat'>Pendant</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-[#02373a] font-montserrat rounded font-medium">Gold</h3>
                        <select className="w-full h-10 border border-gray-300 bg-gray-100 rounded px-2">
                            <option className='font-montserrat'>All</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {rings.map((item, index) => (
                        <div
                            key={index}
                            className="p-4"
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
