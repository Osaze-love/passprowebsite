"use client"
import Navbar from '@/components/Navbar'
import Ticket from '@/components/Ticket'
import { Button } from '@/components/ui/button'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const BookingPage = () => {
  const router = useRouter();
  const {eventBook} = useSelector(
    (state: RootState) => state.event
  );
  return (
    <div>
              <Navbar textColor='text-[#343434]' bgColor='bg-white' bgMobile='bg-white'/>
      <p className='text-[20px] lg:text-[64px] w-full text-center text-[#164473] font-semibold'>About {eventBook?.event_name}</p>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-[63px] px-[20px] lg:px-[40px] py-[51px]'>
      <div className='hidden lg:block' style={{ position: 'relative', width: '100%', height: '100%' }}>
  <Image 
    src="https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4x29o6nx-kTNpBqdHSCU6g5b6EsMlnm1BZ8DpKkQ7vBVb6HMm0zkkQZvKde1RbXSOYGTSVwplr1kysMI2wzucTfKGGdWSH9z-Ov5ACRzFbECz65x0hwGLY2nGD3JNs04-~ZH07MbnT1p-BCJQnh14Of-qnNMknJV7ckNpjsxV3fl~NljWTZCbf8rugFN8NMEUiMPtcgivk57tjshP3q2YchrFdvm4t2euzANsG18cMsncRPIYbmhd13CHQtqS9ukJZsEenaS03RAXYdnZfyTUwM02DJNNhauZWSeuq3I0Ih-0KeYPw~HWRCr-pirprbOQhNT-rfNGgCSnniKk~Kjg__"
    alt="image"
    fill
    className='rounded-[8px]'
    style={{ objectFit: 'cover' }} 
  />
</div>
<div className='block lg:hidden' style={{ position: 'relative', width: '100%', height: '340px' }}>
  <Image 
    src="https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4x29o6nx-kTNpBqdHSCU6g5b6EsMlnm1BZ8DpKkQ7vBVb6HMm0zkkQZvKde1RbXSOYGTSVwplr1kysMI2wzucTfKGGdWSH9z-Ov5ACRzFbECz65x0hwGLY2nGD3JNs04-~ZH07MbnT1p-BCJQnh14Of-qnNMknJV7ckNpjsxV3fl~NljWTZCbf8rugFN8NMEUiMPtcgivk57tjshP3q2YchrFdvm4t2euzANsG18cMsncRPIYbmhd13CHQtqS9ukJZsEenaS03RAXYdnZfyTUwM02DJNNhauZWSeuq3I0Ih-0KeYPw~HWRCr-pirprbOQhNT-rfNGgCSnniKk~Kjg__"
    alt="image"
    fill
    className='rounded-[8px]'
    style={{ objectFit: 'cover' }} 
  />
</div>
   <div className='space-y-[20px] lg:space-y-[70px] rounded-[12px] shadow-none lg:shadow-md px-[20px] lg:px-[30px] py-[60px] border-none lg:border'>
    <p className='text-[#606060] font-normal'>{eventBook?.event_description}</p>

    <div>
        <p className='text-[#164473] text-[18px] lg:text-[24px] pb-[20px] lg:pb-[24px] font-semibold'>Event Details</p>
        <div className=' space-y-[13px]'>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/calendarDark.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060] '>{eventBook?.start_date}</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/timeIcon.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060]'> 5:00PM - 12 AM</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/placeIcon.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060]'>{eventBook?.event_location}</p>
            </div>
           
            </div>
    </div>
    <div>
    <p className='text-[#164473] text-[18px] lg:text-[24px] pb-[24px] font-semibold'>Share Event</p>
     <div className='flex items-center gap-[20px] lg:space-x-[20px]'>
        <Image src={'/icons/what.svg'} alt='icon' width={32} height={32} className='hidden lg:block'/>
        <Image src={'/icons/what.svg'} alt='icon' width={24} height={24} className='block lg:hidden'/>
        <Image src={'/icons/ig.svg'} alt='icon' width={32} height={32} className='hidden lg:block'/>
        <Image src={'/icons/ig.svg'} alt='icon' width={24} height={24} className='block lg:hidden'/>
        <Image src={'/icons/fb.svg'} alt='icon' width={32} height={32} className='hidden lg:block'/>
        <Image src={'/icons/fb.svg'} alt='icon' width={24} height={24} className='block lg:hidden'/>
        <Image src={'/icons/x.svg'} alt='icon' width={32} height={32} className='hidden lg:block'/>
        <Image src={'/icons/x.svg'} alt='icon' width={24} height={24} className='block lg:hidden'/>

     </div>
    </div>
    <Button
          variant="outline"
          className="bg-[#FC6435] w-full flex lg:hidden justify-center hover:bg-[#FC6435] text-white font-medium px-[56px] py-[26px] active:scale-90 transition-all hover:text-white my-[40px]"
          onClick={() => {
            router.push('/checkout')
          }}
        >
          Get A Ticket
        </Button>
   </div>
      </section>

      <section className='hidden lg:block'>
         <Ticket />
      </section>
    </div>
  )
}

export default BookingPage
