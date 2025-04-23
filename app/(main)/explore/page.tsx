"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import Swiper from "@/components/Swiper";
import Featured from '@/components/Featured';
import Trending from '@/components/Trending';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Popular from '@/components/Popular';
import Free from '@/components/Free';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation';

const page = () => {
  const { getAllFreeEvents
   } = useFetch();
   const router = useRouter();
  return (
    <div>
      <Navbar textColor='black' bgColor='bg-white' bgMobile='bg-white'/>
      <section className='bg-gradient-to-b from-[#FFF3EF] to-[#ffffff] py-0 lg:py-[82px]'>
      <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p className="font-bold text-[24px] lg:text-[60px] pt-[60px] lg:pt-0 text-center w-3/4 text-[#343434]">Discover <span className='text-[#FC6435]'>Events</span> That Match Your <span className='text-[#fc6435]'>Passion</span></p>
            <p className="text-[#606060] w-4/4 lg:w-4/4 mx-[20px] lg:mx-[40px] text-[14px] lg:text-[24px]" >
            From unforgettable concerts and thrilling sports to enlightening workshops and family fun, find the perfect event for every interest. Browse through our curated categories and start planning your next adventure!
            </p>
            
          </div>
        </div>
        <div className='my-[50px] lg:my-[78px]'>
         <p className='flex items-center w-full text-[20px] lg:text-[40px] justify-center my-[20px] font-bold text-[#164473]'>Explore Events Categories</p>
        <Swiper />

        </div>

      </section>
      <div className=' px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Popular Events
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Popular />
         <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
          onClick={() => {
            router.push('/allpopular')
            // getAllPopularEvents();
          }}
        >
          View All
        </Button>
        </div>
        
      </div>
      {/* <div className='bg-[#fff3ef] px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Trending />
        <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
        >
          View All
        </Button>
        </div>
      </div> */}

      <div className=' px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Free <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Free />
        <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
          onClick={() => {
            router.push('/allfree')
          }}
       >
          View All
        </Button>
        </div>
      </div>
      
     
    </div>
  )
}

export default page
