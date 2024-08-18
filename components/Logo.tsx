import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo/logo.svg'

const Logo = () => {
  return (
    <div className='flex h-10 items-center'>
        <Image src={logo} width={40} height={40} alt='TalkTown' />
        <h2 className=' font-bold text-3xl text-softPink' >TalkTown</h2>
    </div>
  )
}

export default Logo