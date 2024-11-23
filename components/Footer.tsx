"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const router = useRouter();
  return (

    <div className='bg-[#164473]  '>
    <section className='grid grid-cols-1 lg:grid-cols-6 border-b border-b-white'>
    <div className='space-y-[30px] p-[20px] lg:p-[40px] col-span-2 '>
        <Image src={'/images/passprologowhite.svg'} width={200} height={50} alt='passprologo' className='hidden lg:block'/>
        <Image src={'/images/passprologowhite.svg'} width={151} height={35} alt='passprologo' className='block lg:hidden'/>

        <p className='text-[14px] text-[white]'>PassPro connects you to Africa's events. Book tickets for events, seminars conferences, movies, flights and lots more</p>
      </div>
      <section className='col-span-4 text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-[0px] lg:gap-[60px]'>
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Quick Links</p>
      <p onClick={() => {
      router.push('/')
     }}  className='text-[14px] cursor-pointer'>Home</p>
     <p onClick={() => {
      router.push('/explore')
     }} className='text-[14px] cursor-pointer'>Explore</p>
      <p onClick={() => {
      router.push('/pricing')
     }}  className='text-[14px] cursor-pointer'>Pricing</p>
     <p  onClick={() => {
      router.push('/contact')
     }} className='text-[14px] cursor-pointer'>Contact Us</p>
     <p onClick={() => {
      router.push('/about')
     }}  className='text-[14px] cursor-pointer'>About Us</p>

      </div> 
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Products</p>
     <p className='text-[14px]'>Services</p>
     <p className='text-[14px]'>Pricing</p>
    

      </div> 
      <div className='space-y-3 px-[20px] py-[40px]'>
      <p className='text-[#FC6435] font-semibold'>Legal</p>
     <p className='text-[14px]'>Privacy And Support Policy</p>
     <p className='text-[14px]'>Terms&Conditions</p>
     

      </div> 
      <div className='space-y-3 px-[20px] py-[40px] flex flex-col items-left'>
      <p className='text-[#FC6435] font-semibold'>Follow Us</p>
      <Link href={'https://www.instagram.com/passpro_africa?igsh=MXF1MHphZmdtYWQ3Yg%3D%3D&utm_source=qr'} target='_blank' className='text-[14px] cursor-pointer'>Facebook</Link>
     <Link href={'https://www.facebook.com/share/19NFRSr7HR/?mibextid=LQQJ4d'} target='_blank' className='text-[14px] cursor-pointer'>Instagram</Link>
    

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
