"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import Footer from '@/components/Footer';
import Link from 'next/link';

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<String>();
  return (
    <div>
      {/* search section */}

      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

        <span className=' flex justify-center items-center mt-4'><strong><h1 className='bg-primary text-white m-2 p-2 rounded-md'>Visit <Link href={'https://shoaibakhtar.org'} className=' link'>SHOAIBAKHTAR.ORG</Link> For More AI Tools</h1></strong></span>

      {/* template list section */}

      <TemplateListSection userSearchInput={userSearchInput}/>

      {/* footer */}

      <Footer/>
    </div>
  )
}

export default Dashboard
