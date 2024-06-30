import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import Footer from '@/components/Footer';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className=' h-screen flex'>
          <div className=' hidden sm:block md: w-64'>
            <SideNav />
          </div>
          <div className=' '>
            <Header />
            {children}
          </div>
        </div>
      
    </>
  )
}

export default layout
