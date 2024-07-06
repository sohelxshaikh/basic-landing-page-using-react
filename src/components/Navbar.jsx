import React from 'react'
import image from '/brand_logo.png'
const Navbar = () => {
  return (
    <div className='h-20 w-full text-[16px] uppercase first-line: font-bold  text-[#2E2E2E] flex items-center px-20  justify-between bg-white'>
        <div className="left  ">
            <img src={image} className='h-12 ' alt="" />
        </div>
        <div className="mid">
            <ul className='flex cursor-pointer drop-shadow gap-5 '>
                <li>Menu</li>
                <li>Location</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
        <div className="last">
            <button className='bg-red-600 border-none text-white px-5 py-1 '>Login</button>
        </div>

    </div>
  )
}

export default Navbar