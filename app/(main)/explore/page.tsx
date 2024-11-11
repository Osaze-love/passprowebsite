import Navbar from '@/components/Navbar'
import React from 'react'
import Swiper from "@/components/Swiper";
import Featured from '@/components/Featured';
import Trending from '@/components/Trending';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div>
      <Navbar textColor='black' bgColor='bg-white'/>
      <div className='bg-[#FFF3EF] py-[82px]'>
      <div className="space-y-2 text-center mb-[40px]">
        <p className="font-bold text-[40px] text-[#606060]">
          Explore <span className="text-[#FC6435]">Event</span> Categories
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
       
        </div>
        <div className='bg-white mx-[40px] p-[20px]'>
     <Swiper />
        </div>
      </div>
      <div className='bg-[#fff3ef] px-[40px] space-y-[40px] py-[40px]'>
      <div className="space-y-2 ">
        <p className="font-bold text-[32px] text-[#606060]">
          Popular <span className="text-[#FC6435]">Event</span>
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] "></div>
       
        </div>
        <Featured />
           <p className='text-[24px] text-[#FC6435] w-full text-center cursor-pointer transition-all active:scale-95 font-medium'>View All</p>
      </div>
      <div className='bg-white px-[40px] space-y-[40px] py-[40px]'>
      <div className="space-y-2 ">
        <p className="font-bold text-[32px] text-[#606060]">
          Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] "></div>
       
        </div>
        <Trending />
           <p className='text-[24px] text-[#FC6435] w-full text-center cursor-pointer transition-all active:scale-95 font-medium'>View All</p>
      </div>

      <div className='bg-[#fff3ef] px-[40px] space-y-[40px] py-[40px]'>
      <div className="space-y-2 ">
        <p className="font-bold text-[32px] text-[#606060]">
          Featured <span className="text-[#FC6435]">Event</span>
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] "></div>
       
        </div>
        <Featured />
           <p className='text-[24px] text-[#FC6435] w-full text-center cursor-pointer transition-all active:scale-95 font-medium'>View All</p>
      </div>
      
      <div className='bg-white py-[100px] flex flex-col items-center justify-center space-y-[50px]'>
        <p className='text-[#164473] text-[38px] font-bold'>Free Events</p>
        <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[56px]"
        >
          Create Event
        </Button>
      </div>
    </div>
  )
}

export default page
