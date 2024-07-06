import React from 'react'
import flipkart from '/flipkart.png'
import amazon from '/amazon.png'
import shoe from '/shoe_image.png'
const Hero = () => {
    return (
        <div className='h-[calc(100%-10.7vh)]  flex items-center justify-center w-full'>
            <div className='h-[616px]  flex w-[1150px]'>
               <div className="left h-full w-[50%]">
               <h1 className='text-black text-8xl font-extrabold'>YOUR FEET 
                    DESERVE<br />
                    THE BEST </h1>


                    <p className='mt-8 text-gray-700 font-semibold text-[16px] w-[70%]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className='mt-8'>
                        <button className='bg-red-600 border-none text-white px-6 py-2 drop-shadow'>Shop Now</button>
                        <button className='text-gray-600 ml-10 border-black font-semibold border-[1px] px-6 py-2 drop-shadow'>Category</button>
                    </div>
                    <p className='mt-8 text-gray-600 font-normal'>Also Available On</p>
                    <div className='flex items-start gap-6 py-1'>
                        <img src={flipkart} alt="" />
                        <img src={amazon} alt="" />
                    </div>
               </div>
               <div className="right h-full relative w-[50%]">
                <img src={shoe} className ="h-[75vh] mt-10 " alt="" />
               </div>
            </div>
        </div>
    )
}

export default Hero