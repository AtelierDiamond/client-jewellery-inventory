"use client";
import React from 'react'

function Contact() {
    return (
        <div className='flex justify-center items-center place-item-center bg-[#e8ecef] px-10 py-24 pt-24 cursor-pointer'>
            <div className='w-full'>
                <h2 className='text-2xl font-medium text-black my-6'>Contact Information</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-12 text-2xl rounded-xl flex items-center justify-center font-medium'>Kannu Verma +1 (917) 379-6816</div>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-12 text-2xl rounded-xl flex items-center justify-center font-medium'>Ritu Chugh +1 (917) 385-2648</div>
                </div>
                <h2 className='text-2xl font-medium text-black my-6'>Send your message</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-8 '>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            className="w-full h-12 px-4 rounded-2xl text-xl placeholder:text-xl placeholder:text-center cursor-pointer"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            className="w-full h-12 px-4 rounded-2xl text-xl placeholder:text-xl placeholder:text-center cursor-pointer"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-8 gap-2 my-2'>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Mail ID"
                            className="w-full h-12 px-4 rounded-2xl text-xl placeholder:text-xl placeholder:text-center cursor-pointer"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="lastName"
                            placeholder="Contact Number"
                            className="w-full h-12 px-4 rounded-2xl text-xl placeholder:text-xl placeholder:text-center cursor-pointer "
                        />
                    </div>
                </div>
                <textarea
                    placeholder='Message'
                    className="rounded-xl px-4 h-40 w-full cursor-pointer text-black text-[#787d7d] text-xl bg-white placeholder:text-xl placeholder:text-center"
                />
                <div className="text-center my-4">
              <button
                type="submit"
                className="px-8 py-2 bg-[#02373A] text-white font-medium text-xl"
              >
                Submit
              </button>
            </div>
            </div>
        </div>
    )
}

export default Contact