import React from 'react'
import { FcFlashOn } from "react-icons/fc";
import { FcShop } from "react-icons/fc";


import Link from "next/link";

function Navbar() {
  return (
    <div className='w-full text-black m-3'>
      <nav className='flex justify-between'>
        <div className='flex justify-evenly'>
          <Link href="#" className='flex items-center align-middle'>New Drops <FcFlashOn /></Link>
          <Link href="#" className='flex items-center align-middle'>Catlog <FcShop/></Link>
          <Link href="#" className='flex items-center align-middle'>Policies</Link>
        </div>
        <div>
          <h1>ANIME CANVAS</h1>
        </div>
        <div className='flex'>
          <Link href="#" className='flex items-center align-middle'>Search</Link>
          <Link href="#" className='flex items-center align-middle'>Cart</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;