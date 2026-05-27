'use client'

import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { TbMenu3, TbMenu4 } from "react-icons/tb";
import Link from 'next/link'

const Navbar = () => {
    const { isLogin, isSidebar, setIsSidebar } = useContext(MyContext)

    return (
        <header className='w-full h-16 px-6 fixed top-0 left-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl'>
            <nav className='max-w-7xl mx-auto h-full flex items-center justify-between'>

                {/* Logo */}
                <Link
                    href='/'
                    className='text-2xl font-bold text-white tracking-wide'
                >
                    Tri<span className='text-amber-400'>Bin</span>
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-200'>
                    <Link
                        href='/plans'
                        className='hover:text-amber-400 transition duration-200'
                    >
                        Plans
                    </Link>

                    <Link
                        href='/contact'
                        className='hover:text-amber-400 transition duration-200'
                    >
                        Contact
                    </Link>

                    <Link
                        href='/about'
                        className='hover:text-amber-400 transition duration-200'
                    >
                        About
                    </Link>
                </div>

                {/* Right Side */}
                <div className='flex items-center gap-4'>

                    {isLogin ? (
                        <Link
                            href='/dashboard'
                            className='px-5 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition duration-200'
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className='hidden md:flex items-center gap-3'>
                            <Link
                                href='/signin'
                                className='px-4 py-2 rounded-full border border-gray-600 text-white hover:border-amber-400 hover:text-amber-400 transition duration-200'
                            >
                                Sign In
                            </Link>

                            <Link
                                href='/signup'
                                className='px-5 py-2 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition duration-200'
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsSidebar(!isSidebar)}
                        className='md:hidden text-white text-3xl hover:text-amber-400 transition duration-200'
                    >
                        {isSidebar ? <TbMenu3 /> : <TbMenu4 />}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar