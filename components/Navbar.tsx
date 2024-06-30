import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

function Navbar() {
    return (
        <div className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className=" font-semibold text-lg"><Link href={'/'}>Home</Link></li>
                            <li className=" font-semibold text-lg"><Link href={'/dashboard'}>Dashboard</Link></li>
                            <li className=" font-semibold text-lg"><Link href={'/dashboard/history'}>History</Link></li>
                            <li className=" font-semibold text-lg"><Link href={'/dashboard/settings'}>Setting</Link></li>
                        </ul>
                    </div>
                    <h1 className=" flex gap-1 items-center font-bold text-gray-800 text-2xl dark:text-neutral-200 ">
                        <Image src={'/logo.jpg'} width={40} height={40} alt="" /><span className="">Content</span>
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Generator</span>
                    </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=" font-semibold text-lg"><Link href={'/'}>Home</Link></li>
                        <li className=" font-semibold text-lg"><Link href={'/dashboard'}>Dashboard</Link></li>
                        <li className=" font-semibold text-lg"><Link href={'/dashboard/history'}>History</Link></li>
                        <li className=" font-semibold text-lg"><Link href={'/dashboard/settings'}>Setting</Link></li>
                    </ul>
                </div>
                <div className=" navbar-end">
                    <span className=' hidden sm:block'><UserButton/></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
