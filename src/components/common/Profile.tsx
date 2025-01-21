"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import "@fontsource-variable/montserrat";
import profile from '@/components/images/login/profile.png'
import Image from 'next/image';

function Profile({customClass}: {customClass?: string}) {
    return (
        <div className={`flex justify-between items-center absolute w-full z-10 px-6`}>
            <div className='flex items-center w-1/2 md:w-auto'>
                <div className='absolute ms-2 z-10  bg-[#B7A99A] rounded-full shadow-md '>
                    <FaSearch className="text-white cursor-pointer m-1" size={10} />
                </div>
                <input
                    placeholder="Type"
                    type="text"
                    className="relative w-full font-montserrat shadow-md rounded-full text-center border border-[#B7A99A] placeholder:text-gray-500 text-md placeholder:text-md text-black px-3 py-1"
                />
            </div>
            <div className='flex justify-center items-center bg-transparent rounded-md p-1 shadow-md m-3'>
                <Image src={profile} className='rounded-full w-10' alt='profile' />
                <div>
                    <p className={`text-xs font-normal ${customClass}`}>Donna Stroupe</p>
                    <p className={`text-xs font-normal ${customClass}`}>Alley Jewellery</p>
                </div>
            </div>
        </div>
    )
}

export default Profile