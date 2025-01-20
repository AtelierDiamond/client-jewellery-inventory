"use client";
import React from 'react'
import "@fontsource-variable/montserrat";

function Contact() {
    return (
        <div className='flex justify-center items-center bg-[#e8ecef] min-h-screen'>
            <div className='w-full p-10'>
                <h2 className='text-2xl font-normal text-black my-6 font-montserrat'>Contact Information</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-10 text-2xl rounded-xl flex items-center justify-center font-montserrat'>Kannu Verma +1 (917) 379-6816</div>
                    <div className='w-auto h-10 text-white bg-[#B7A99A] px-8 py-10 text-2xl rounded-xl flex items-center justify-center font-montserrat'>Ritu Chugh +1 (917) 385-2648</div>
                </div>
                <h2 className='text-2xl font-normal text-black my-6 font-montserrat'>Send your message</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-2'>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Mail ID"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Contact Number"
                            className="w-full h-12 px-4 rounded-2xl font-montserrat placeholder:text-xl"
                        />
                    </div>
                </div>
                <textarea
                    placeholder='Message'
                    className="rounded-xl px-3 h-40 w-full text-[#787d7d] bg-white font-montserrat placeholder:text-xl"
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