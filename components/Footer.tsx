import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (

    <div className='bg-[#164473]  '>
    <section className='grid grid-cols-1 lg:grid-cols-6 border-b border-b-white'>
    <div className='space-y-[30px] p-[20px] lg:p-[40px] col-span-2 '>
        <Image src={'/images/passprologowhite.svg'} width={200} height={50} alt='passprologo'/>

        <p className='text-[14px] text-[white]'>PassPro connects you to Africa's events. Book tickets for events, seminars conferences, movies, flights and lots more</p>
      </div>
      <section className='col-span-4 text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-[0px] lg:gap-[60px]'>
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Quick Links</p>
     <p className='text-[14px]'>Buy Ticket</p>
     <p className='text-[14px]'>Explore</p>
     <p className='text-[14px]'>Blog</p>
     <p className='text-[14px]'>Contact Us</p>
     <p className='text-[14px]'>About Us</p>

      </div> 
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Products</p>
     <p className='text-[14px]'>Services</p>
     <p className='text-[14px]'>Pricing</p>
    

      </div> 
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Legal</p>
     <p className='text-[14px]'>Privacy</p>
     <p className='text-[14px]'>Terms&Conditions</p>
     <p className='text-[14px]'>Support Policy</p>
     

      </div> 
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Follow Us</p>
     <p className='text-[14px]'>Facebook</p>
     <p className='text-[14px]'>Twitter</p>
     <p className='text-[14px]'>Instagram</p>
    

      </div> 
      </div>
    
      </section>
    </section>
     <section className='p-[20px] lg:p-[40px]'>
        <p className='text-[14px] text-white'>© Copyright 2024 PASSPRO. all rights reserved</p>
     </section>
     
    </div>
  )
}

export default Footer
