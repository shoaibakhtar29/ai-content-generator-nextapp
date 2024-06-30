"use client"
import { FileClock, Home, Loader2Icon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import loading from '../loading'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/settings'
        },

    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className=' h-full relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image className=' w-12 sm:block md:w-24' src={'/logo.jpg'} alt='logo' width={150} height={150} />
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className=' text-sm sm:text-base md:text-lg' >{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
        </div>
    </div>
  )
}

export default SideNav