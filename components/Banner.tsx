import React from 'react'
import { Button } from './ui/button'

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <p className="text-white font-medium text-[24px]">The Events and experience marketplace</p>
          <p className="font-extrabold text-[#FC6435] text-[72px] w-3/4">DISCOVER EVENTS AND EXPERIENCES NEAR YOU</p>
          <p className="text-[24px] text-white w-3/4">
            Find tickets to concerts, sports, festivals, and more. Easily browse, book, and share your favorite events with friends.
          </p>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white px-[56px] h-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none">
              Create Event
            </Button>
            <Button variant="outline" className="hover:bg-[white] font-medium bg-[white] text-[#FC6435] px-[56px] h-[56px] py-[18.5px] hover:text-[#FC6435] active:scale-90 transition-all border-[#FC6435]">
              Find events around you
            </Button>
          </div>
        </div>
      );
}

export default Banner
