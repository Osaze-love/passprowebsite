"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Banner = () => {
  const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <p className="text-white font-medium text-[16px] lg:text-[24px]">The Events and experience marketplace</p>
          <p className="font-extrabold text-[#FC6435] text-[30px] lg:text-[72px] w-3/4">DISCOVER EVENTS AND EXPERIENCES NEAR YOU</p>
          <p className="text-[14px] lg:text-[24px]  text-white w-3/4">
            Find tickets to concerts, sports, festivals, and more. Easily browse, book, and share your favorite events with friends.
          </p>
          <div className="flex flex-col lg:flex-row items-center pt-[30px] lg:mt-0 space-y-3 lg:space-y-0 lg:space-x-3">
          <a
  href="https://organizer.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
> 
<Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white w-[273px] lg:px-[56px] h-[50px] lg:h-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none"
           
            >
              Create Event
            </Button>
            </a>

            <Button
             onClick={() => {
              router.push('/explore')
             }}
            variant="outline" className="hover:bg-[white] font-medium bg-[white] text-[#FC6435] w-[273px] lg:px-[56px] h-[50px] lg:h-[56px] py-[18.5px] hover:text-[#FC6435] active:scale-90 transition-all border-[#FC6435]">
              Find events around you
            </Button>
            
          </div>
        </div>
      );
}

export default Banner
