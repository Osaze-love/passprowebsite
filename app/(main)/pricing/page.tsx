import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
    <div>
              <Navbar textColor="text-white" bgColor='bg-[#164473]' />

<section className="h-[90vh] bg-[#164473] relative">
        <div className="flex items-center justify-center h-[50%]">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p className="font-extrabold text-[60px] text-white">The Cheapest Price Ever!</p>
            <p className="text-[white] w-3/4  text-[20px]" >
              Getting started on Passpro is entirely FREE. No onboarding fee or hidden charges. That’s not all! All free events on passPro is not charged at all.
            </p>
          </div>
        </div>

        {/* SVG Shape for the bottom of the section */}
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"  
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,60 L720,0 L1440,60 Z"  
          />
        </svg>
      </section>



          <section className='h-[70vh] px-[40px] grid grid-cols-2 gap-[20px] items-center relative -top-[390px]'>
        <Image src={'https://s3-alpha-sig.figma.com/img/b941/2f56/54d4fcfbede8da126f72fd29a33cc709?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJuOeLCmMdTkRj4KvTqQrhX6mOd8BV1azS00qgZkdu7Re3S-bkiCPY~Mb23AsuoSLRfG5N5Ug4HcBil-WoDdo~kiu77~u78Qxi4Q4gz1ixpeAlaHqjxLNHfaWd7~hONwnh~~93HOM9Zu8APi-SevzF-TuNDcfTGpz8KTxY~IW6WSjAPKJnc7EpqDgGNwIbP~qXL6C3j35QP8HZqYquu2U1W-3mz8VcvTa0B4qoPQV4UmRYFq4EDOUo9aVKRHk-KEaJWYoPlyg5loEmu6DM9tRFGXfx3QXtS-Z91dQ73MVV96EVxkWWTGaAf96sWByQponEovy3EeLy-IgxszQUM~RQ__'} height={500} width={500} alt='image' className='rounded-[32px]'/>
         
         <div className='text-center text-white'>
            
                <p className='mb-[20px] font-semibold'>Region:  Nigeria</p>

                <div className=' rounded-[32px] border border-white w-3/4 mx-auto p-[40px] bg-[#ffffff57] shadow-md'>
                  <p className='text-[40px] font-extrabold'>4% + ₦100</p>
                  <p>On Every paid ticket on  passpPro</p>
                </div>
            
         </div>

          </section>
         
    </div>
  ) 
}

export default Pricing
