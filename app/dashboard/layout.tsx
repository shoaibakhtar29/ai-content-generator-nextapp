import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=' bg-slate-100 h-screen flex'>
      <div className=' md: w-64'>
        <SideNav />
      </div>
      <div className=' '>
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default layout
