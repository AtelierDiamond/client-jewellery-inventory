"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import "@fontsource-variable/montserrat";
import profile from '@/components/images/login/profile.png'
import Image from 'next/image';

function Profile() {
    return (
        <div className={`flex justify-between items-center px-10 bg-[#e8ecef] py-4 mt-0`}>
            <div className='flex items-center gap-2'>
                <div className='left-12 absolute z-10  bg-[#B7A99A] p-2 rounded-full shadow-md '>
                    <FaSearch className="text-white cursor-pointer text-xl" />
                </div>
                <input
                    placeholder="Type"
                    type="text"
                    className="w-full relative font-montserrat shadow-md rounded-full text-center border placeholder:text-gray-500 text-md placeholder:text-md text-black xl:py-3 xl:px-4 px:2 py:0.5"
                />
            </div>
            <div className='flex justify-center items-center bg-transparent rounded-full shadow-md border'>
                <Image src={profile} className='rounded-full w-1/3' alt='profile' />
                <div>
                    <p className='text-sm font-normal'>Donna Stroupe</p>
                    <p className='text-xs font-normal'>Alley Jewellery</p>
                </div>
            </div>
        </div>
    )
}

export default Profile