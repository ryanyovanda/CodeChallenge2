"use client";

import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../public/logo white.png";
import React, { useState } from "react";

const NavBar = () => {
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => setIsClick(!isClick);

    return (
        <>
            <nav className="bg-[#232323]">
                <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex shrink-0">
                                <Image src={LogoWhite} width={100} height={50} alt="logo" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</Link>
                                <Link href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Services</Link>
                                <Link href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
                                <Link href="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Teams</Link>
                            </div>
                        </div>
                        {/* Mobile button, visible only on small screens */}
                        <button 
                            className="md:hidden inline-flex items-center justify-center p-2 text-white hover:text-white " 
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isClick ? 'block' : 'hidden'}`}>
                    <Link href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">Home</Link>
                    <Link href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">Services</Link>
                    <Link href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
                    <Link href="#" className="block text-white hover:bg-white hover:text-black rounded-lg p-2">Teams</Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
