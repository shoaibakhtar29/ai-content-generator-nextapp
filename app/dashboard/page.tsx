"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<String>();
  return (
    <div>
      {/* search section */}

      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

      {/* template list section */}

      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
