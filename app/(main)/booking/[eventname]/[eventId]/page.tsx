"use client"
import Navbar from '@/components/Navbar'
import Ticket from '@/components/Ticket'
import { Button } from '@/components/ui/button'
import useFetch from '@/hooks/useFetch'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FacebookShareButton, WhatsappShareButton, InstapaperShareButton , TwitterShareButton } from 'react-share'

const BookingPage = () => {
  const router = useRouter();
  const { getBookEvent } = useFetch()
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const params = useParams();
  const { eventname, eventId } = params || {};

  useEffect(() => {
    if (eventname && eventId) {
      getBookEvent(eventId, eventname);     
    }
    setCurrentUrl(window.location.href);
  }, []);  
  
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
    src={!eventBook.gallery || eventBook?.gallery === null ? "https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~jefw4J~~WVpx9ehn0MJ9yOLGyemjyxuuGdDMZvSj1sQHX-xzUXsTzaYEj54Exgne8AeXTCsfT1klOC3jV67ryKBUWI39xUdJiGnAhvTNGFYr5w4hJHFFN5wtt60PctbWddWaDAgZ9tuw3LovbIU09jzuS69XOO1EBRGSfi8NYfQjK4eJmiYbpkpIA5e72-PTacKyU05Cx5IEdzbLFJCjac0gWeL-b9rhOH047L2QVp7i-nesDKDvxA1GGuk8DhlXuRfOSCQ1ibqd18AhkVB0C~H-kSm6MtHXLELcJAOcA3XH29fLYgrKR9N5ML8lMyYM7P70F~31xMMZCWre7c3Q__" : `https://sub.passpro.africa/storage/${eventBook?.gallery?.event_image}`}
    alt="image"
    fill
    className='rounded-[8px]'
    style={{ objectFit: 'cover' }} 
  />
</div>
<div className='block lg:hidden' style={{ position: 'relative', width: '100%', height: '340px' }}>
  <Image 
   src={!eventBook.gallery || eventBook?.gallery === null ? "https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~jefw4J~~WVpx9ehn0MJ9yOLGyemjyxuuGdDMZvSj1sQHX-xzUXsTzaYEj54Exgne8AeXTCsfT1klOC3jV67ryKBUWI39xUdJiGnAhvTNGFYr5w4hJHFFN5wtt60PctbWddWaDAgZ9tuw3LovbIU09jzuS69XOO1EBRGSfi8NYfQjK4eJmiYbpkpIA5e72-PTacKyU05Cx5IEdzbLFJCjac0gWeL-b9rhOH047L2QVp7i-nesDKDvxA1GGuk8DhlXuRfOSCQ1ibqd18AhkVB0C~H-kSm6MtHXLELcJAOcA3XH29fLYgrKR9N5ML8lMyYM7P70F~31xMMZCWre7c3Q__" : `https://sub.passpro.africa/storage/${eventBook?.gallery?.event_image}`}
    alt="image"
    fill
    className='rounded-[8px]'
    style={{ objectFit: 'cover' }} 
  />
</div>
   <div className='space-y-[20px] lg:space-y-[20px] rounded-[12px] shadow-none lg:shadow-md px-[20px] lg:px-[30px] py-[30px] border-none lg:border'>
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
    <div className="flex items-center gap-[20px] lg:space-x-[20px]">
  {/* WhatsApp */}
  {/* <a
    href={`https://wa.me/`}
    target="_blank"
    rel="noopener noreferrer"
  > */}
    <WhatsappShareButton url={currentUrl}> <Image
      src={'/icons/what.svg'}
      alt="WhatsApp"
      width={32}
      height={32}
      className="hidden lg:block"
    />
    <Image
      src={'/icons/what.svg'}
      alt="WhatsApp"
      width={24}
      height={24}
      className="block lg:hidden"
    /></WhatsappShareButton>
   
  {/* </a> */}

  {/* Instagram */}
  {/* <InstapaperShareButton url={currentUrl}>
  <Image
      src={'/icons/ig.svg'}
      alt="Instagram"
      width={32}
      height={32}
      className="hidden lg:block"
    />
    <Image
      src={'/icons/ig.svg'}
      alt="Instagram"
      width={24}
      height={24}
      className="block lg:hidden"
    />
  </InstapaperShareButton> */}
  {/* <a
    href="https://www.instagram.com/create/select/"
    target="_blank"
    rel="noopener noreferrer"
  >
   
  </a> */}

  {/* Facebook */}
  <FacebookShareButton url={currentUrl}>
  <Image
      src={'/icons/fb.svg'}
      alt="Facebook"
      width={32}
      height={32}
      className="hidden lg:block"
    />
    <Image
      src={'/icons/fb.svg'}
      alt="Facebook"
      width={24}
      height={24}
      className="block lg:hidden"
    />
  </FacebookShareButton>
  {/* <a
    href="https://www.facebook.com/sharer/sharer.php"
    target="_blank"
    rel="noopener noreferrer"
  >
   
  </a> */}

  {/* X (Twitter) */}
  {/* <a
    href="https://x.com/compose/tweet"
    target="_blank"
    rel="noopener noreferrer"
  > */}
    <TwitterShareButton url={currentUrl}>
    <Image
      src={'/icons/x.svg'}
      alt="X (formerly Twitter)"
      width={32}
      height={32}
      className="hidden lg:block"
    />
    <Image
      src={'/icons/x.svg'}
      alt="X (formerly Twitter)"
      width={24}
      height={24}
      className="block lg:hidden"
    />
    </TwitterShareButton>
   
  {/* </a> */}
</div>

    </div>
    <div>
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
   
   </div>
      </section>

      <section className='hidden lg:block'>
         <Ticket />
      </section>
    </div>
  )
}

export default BookingPage
