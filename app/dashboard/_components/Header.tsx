import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'
import Navbar from '@/components/Navbar'

function Header() {
  return (
    <div className=' p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <Navbar/>
    </div>
  )
}

export default Header