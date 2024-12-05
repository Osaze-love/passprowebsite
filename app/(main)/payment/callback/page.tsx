"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { RootState } from '@/redux/store'
import axios from 'axios'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

const SuccessPage = () => {
    const { event_name } = useSelector((state: RootState) => state.event.eventBook);
    const ticketEmail = useSelector((state: RootState) => state.payment.ticketEmail);
    const base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    // Wrap the part where useSearchParams is used
  const SearchParamsComponent = () => {
    const searchParams = useSearchParams();
    const reference = searchParams.get('reference');

    useEffect(() => {
      if (reference) {        
        verifyPayment(reference); // Call the backend to verify the payment
      }
    }, [reference]);

    const verifyPayment = async (reference: string) => {
      try {
        const response = await axios.get(`${base_url}/v1/payment/callback?reference=${reference}`);
      } catch (error) {
        alert('Error occurred during payment verification');
        console.error(error);
      }
    };

    return null; // No UI output here
  };

  return (
    <div>
    <Navbar textColor='text-[#343434]' bgColor='bg-white' bgMobile='bg-white'/>
     <p className='text-[24px] lg:text-[64px] w-full text-center text-[#164473] font-semibold'>{event_name}</p>

     <div className='flex flex-col items-center my-[20px]'>
        <Image src='/icons/checkIcon.svg' height={73} width={73} alt='image' className='hidden lg:block'/>
        <Image src='/icons/checkIcon.svg' height={50} width={50} alt='image' className='block lg:hidden'/>

        <div className='space-y-[34px] lg:space-y-[45px] flex items-center flex-col my-[32px] px-[20px]'>
            <p className='text-[#343434] text-[16px] lg:text-[24px] font-semibold lg:font-bold'>Ticket Booked Successfully</p>
            <p className='text-[#606060] text-[14px] lg:text-[20px] font-medium lg:font-semibold text-center'>Your ticket has been successfully booked. You now have access to the event</p>
            <p className='text-[#343434] text-[14px] lg:text-[16px] font-semibold text-center'>Your order was successful. we’ve also sent a copy to your email address <span className='text-[#FC6435]'>{ticketEmail}</span></p>
            <p className='text-[#343434] text-[14px] lg:text-[16px] font-semibold text-center'>
  If you do not receive your ticket from us, please email us at{' '}
  <a 
    href="mailto:support@passpro.africa" 
    className='text-[#FC6435]'>
    support@passpro.africa
  </a>.
</p>
            <div className="flex flex-col lg:flex-row items-center space-x-0 space-y-[34px] lg:space-y-0  lg:space-x-3 w-full">
           
          </div>
          {/* <p className='font-semibold text-center w-3/4 lg:w-full text-[16px] lg:text-[24px] text-[#343434]'>See who’s coming with you to the event <span className='text-[#FC6435]'>here</span> </p> */}

        </div>
     </div>

     <Suspense fallback={<p>Loading...</p>}>
        <SearchParamsComponent />
      </Suspense>
    </div>
  )
}

export default SuccessPage
