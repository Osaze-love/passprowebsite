import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SuccessPage = () => {
  return (
    <div>
    <Navbar textColor='text-[#343434]' bgColor='bg-white' bgMobile='bg-white'/>
     <p className='text-[24px] lg:text-[64px] w-full text-center text-[#164473] font-semibold'>Music Fest, 2024</p>

     <div className='flex flex-col items-center my-[20px]'>
        <Image src='/icons/checkIcon.svg' height={73} width={73} alt='image' className='hidden lg:block'/>
        <Image src='/icons/checkIcon.svg' height={50} width={50} alt='image' className='block lg:hidden'/>

        <div className='space-y-[34px] lg:space-y-[45px] flex items-center flex-col my-[32px] px-[20px]'>
            <p className='text-[#343434] text-[16px] lg:text-[24px] font-semibold lg:font-bold'>Ticket Booked Successfully</p>
            <p className='text-[#606060] text-[14px] lg:text-[20px] font-medium lg:font-semibold text-center'>Your ticket has been successfully booked. You now have access to the event</p>
            <p className='text-[#343434] text-[14px] lg:text-[16px] font-semibold text-center'>Your order was successful. we’ve also sent a copy to your email address <span className='text-[#FC6435]'> framcisfahvie@gmail.com</span></p>
            <p className='text-[#343434]  text-[14px] lg:text-[16px] font-semibold text-center'>if you do not recieve your ticket from us, please email us at <span className='text-[#FC6435]'>@supportpasspro.ng</span></p>
            <div className="flex flex-col lg:flex-row items-center space-x-0 space-y-[34px] lg:space-y-0  lg:space-x-3 w-full">
            <Button variant="outline" className="hover:bg-[#FC6435]  bg-[#FC6435] text-white px-[84px] h-[79px] py-[18.5px] w-full lg:w-max  hover:text-white active:scale-90 transition-all border-none text-[16px] lg:text-[24px] font-bold">
              Download Ticket
            </Button>
            <Button variant="outline" className="hover:bg-[white]  bg-[white] text-[#FC6435] px-[84px] h-[79px] w-full lg:w-max py-[18.5px] hover:text-[#FC6435] active:scale-90 transition-all border-[#FC6435] text-[16px] lg:text-[24px] font-bold">
              Buy Ticket
            </Button>
          </div>
          <p className='font-semibold text-center w-3/4 lg:w-full text-[16px] lg:text-[24px] text-[#343434]'>See who’s coming with you to the event <span className='text-[#FC6435]'>here</span> </p>

        </div>
     </div>

      
    </div>
  )
}

export default SuccessPage
