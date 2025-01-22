"use client";
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import jewellery from '@/components/images/login/login-jewellery.jpg'
import Image from 'next/image';
import "@fontsource-variable/montserrat";

function Login() {
    const [hide, setHide] = useState<boolean>(false);
    return (
        <div className='h-screen grid grid-cols-1 md:grid-cols-2'>
           <div className='hidden md:block h-full h-screen'>
           <Image
                src={jewellery}
                alt="jewellery"
                className="h-full"
            />
           </div>
            <div className="md:w-1/2 m-auto">
                <div className='bg-[#EBE5DF] rounded-2xl shadow-xl w-auto p-6'>
                    <form className="space-y-4">
                        <h2 className='text-xl  text-center font-semibold '>LOG IN</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="userName"
                                placeholder="USERNAME"
                                className="shadow appearance-none border rounded-full w-full py-1.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <>
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        type={!hide ? "password" : "text"}
                                        id="password"
                                        className="w-full py-1 px-4 rounded-3xl border shadow "
                                        placeholder="PASSWORD"
                                    />
                                    <div
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                                        onClick={() => setHide(!hide)}
                                    >
                                        {hide ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </div>
                                </div>
                            </div>
                        </>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="savePassword"
                                    className="h-3 w-3 text-black"
                                />
                                <label htmlFor="savePassword" className="ml-2 text-gray-700 text-xs md:text-xs">
                                    Save password
                                </label>
                            </div>
                            <button
                                type="button"
                                className="text-gray-700 text-md text-xs md:text-xs"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-[#02373A] text-white rounded-full px-6 py-2 text-sm font-medium">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <hr className="mt-5 mb-2 border-t border-gray-300" />
                    <p className='text-center cursor-pointer'>Doesn&apos;t have an account <span className='text-[#0d5e92]'>Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login