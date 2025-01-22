"use client";
import React from 'react'
import "@fontsource-variable/montserrat";

function Contact() {
    return (
        <div className='flex justify-center items-center place-item-center bg-[#e8ecef] px-10 py-24 pt-24'>
            <div className='w-full'>
                <h2 className='text-2xl font-normal text-black my-6 font-montserrat'>Contact Information</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-12 text-2xl rounded-xl flex items-center justify-center font-montserrat'>Kannu Verma +1 (917) 379-6816</div>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-12 text-2xl rounded-xl flex items-center justify-center font-montserrat'>Ritu Chugh +1 (917) 385-2648</div>
                </div>
                <h2 className='text-2xl font-normal text-black my-6 font-montserrat'>Send your message</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-8 gap-2'>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl placeholder:text-center"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl placeholder:text-center"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-8 gap-2 my-2'>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Mail ID"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl placeholder:text-center"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Contact Number"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl placeholder:text-center"
                        />
                    </div>
                </div>
                <textarea
                    placeholder='Message'
                    className="rounded-xl px-4 h-40 w-full text-[#787d7d] bg-white font-montserrat placeholder:text-xl placeholder:text-center"
                />
                <div className="text-center my-4">
              <button
                type="submit"
                className="px-8 py-2 bg-[#02373A] text-white font-bold font-montserrat text-xl"
              >
                Submit
              </button>
            </div>
            </div>
        </div>
    )
}

export default Contact