import Image from 'next/image'
import React from 'react'

function Billing() {
  return (
    <div className=' flex justify-center items-center bg-white'>
      <Image src={'/coming-soon.jpg'} width={600} height={500} alt=''/>
    </div>
  )
}

export default Billing
