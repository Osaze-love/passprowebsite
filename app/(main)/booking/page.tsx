import Navbar from '@/components/Navbar'
import Ticket from '@/components/Ticket'
import Image from 'next/image'
import React from 'react'

const BookingPage = () => {
  return (
    <div>
              <Navbar textColor='text-[#343434]' bgColor='bg-white'/>
      <p className='text-[64px] w-full text-center text-[#164473] font-semibold'>About Music Fest, 2024</p>

      <section className='grid grid-cols-2 gap-[63px] px-[40px] py-[51px]'>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <Image 
    src="https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4x29o6nx-kTNpBqdHSCU6g5b6EsMlnm1BZ8DpKkQ7vBVb6HMm0zkkQZvKde1RbXSOYGTSVwplr1kysMI2wzucTfKGGdWSH9z-Ov5ACRzFbECz65x0hwGLY2nGD3JNs04-~ZH07MbnT1p-BCJQnh14Of-qnNMknJV7ckNpjsxV3fl~NljWTZCbf8rugFN8NMEUiMPtcgivk57tjshP3q2YchrFdvm4t2euzANsG18cMsncRPIYbmhd13CHQtqS9ukJZsEenaS03RAXYdnZfyTUwM02DJNNhauZWSeuq3I0Ih-0KeYPw~HWRCr-pirprbOQhNT-rfNGgCSnniKk~Kjg__"
    alt="image"
    fill
    className='rounded-[8px]'
    style={{ objectFit: 'cover' }} 
  />
</div>
   <div className='space-y-[70px] rounded-[12px] shadow-md px-[30px] py-[60px] border'>
    <p className='text-[#606060] font-normal'>Get ready for an explosive celebration of Afrobeat, hip-hop, and everything in between at Chike’s Music Festival on April 5, 2025! Lagos is about to witness one of the most exciting live music events of the year, as Falz – one of Nigeria’s most innovative and energetic artists – takes the stage for an unforgettable night of music, fun, and pure energy.</p>

    <div>
        <p className='text-[#164473] text-[24px] pb-[24px] font-semibold'>Event Details</p>
        <div className=' space-y-[13px]'>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/calendarDark.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060] '>Friday 4th April, 2025</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/timeIcon.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060]'> 5:00PM - 12 AM</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/placeIcon.svg'} width={24} height={24} alt='calendarIcon'/>
                <p className='text-[14px] text-[#606060]'>Landmark centre, Vitoria Island, Lagos</p>
            </div>
           
            </div>
    </div>
    <div>
    <p className='text-[#164473] text-[24px] pb-[24px] font-semibold'>Share Event</p>
     <div className='flex items-center space-x-[20px]'>
        <Image src={'/icons/what.svg'} alt='icon' width={32} height={32}/>
        <Image src={'/icons/ig.svg'} alt='icon' width={32} height={32}/>
        <Image src={'/icons/fb.svg'} alt='icon' width={32} height={32}/>
        <Image src={'/icons/x.svg'} alt='icon' width={32} height={32}/>

     </div>
    </div>
   </div>
      </section>

      <section >
         <Ticket />
      </section>
    </div>
  )
}

export default BookingPage
