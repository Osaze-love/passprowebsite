"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import useFetch from '@/hooks/useFetch';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import FadeLoader from 'react-spinners/FadeLoader';
import { useRouter } from 'next/navigation';

const Free = () => {
  const {  getFreeEvents, loading, getBookEvent} = useFetch();
  const {freeEvents} = useSelector(
    (state: RootState) => state.event
  );
  const router = useRouter();

  useEffect(() => {
     getFreeEvents();
  },[])
  
  return (
    <div className="flex flex-col w-full">
      {/* {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
     
        <FadeLoader color="#FC6435" />
       
    </div> 
  )} */}
      <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] w-full'>
        {freeEvents?.map((feature: any) => (
        <div key={feature?.id} className='shadow-sm border rounded-[10px] bg-white w-full'>
            <div style={{ position: 'relative', width: '100%', height: '270px',  }}>
  <Image
    src={!feature.gallery || feature?.gallery === null ? "https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~jefw4J~~WVpx9ehn0MJ9yOLGyemjyxuuGdDMZvSj1sQHX-xzUXsTzaYEj54Exgne8AeXTCsfT1klOC3jV67ryKBUWI39xUdJiGnAhvTNGFYr5w4hJHFFN5wtt60PctbWddWaDAgZ9tuw3LovbIU09jzuS69XOO1EBRGSfi8NYfQjK4eJmiYbpkpIA5e72-PTacKyU05Cx5IEdzbLFJCjac0gWeL-b9rhOH047L2QVp7i-nesDKDvxA1GGuk8DhlXuRfOSCQ1ibqd18AhkVB0C~H-kSm6MtHXLELcJAOcA3XH29fLYgrKR9N5ML8lMyYM7P70F~31xMMZCWre7c3Q__" : `https://sub.passpro.africa/storage/${feature?.gallery?.event_image}`}
    fill
   className='object-cover rounded-t-[10px]'
   alt='image'
  />
</div>
            <div className='p-[20px] space-y-[13px]'>
            <p className='font-bold text-[14px] lg:text-[20px]'>
  {feature?.event_name?.length > 14 
    ? feature.event_name.slice(0, 18) + '...' 
    : feature?.event_name}
</p>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/calendarDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature?.start_date}</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/locationDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature?.event_location}</p>
            </div>
            <div className='flex items-center justify-between'>
            <p className='text-[14px] lg:text-[16px] text-[#FC6435] font-semibold'>
  {feature?.price === '0.00' || feature?.price === '0'
    ? 'Free'
    : `₦${new Intl.NumberFormat('en-NG').format(parseFloat(feature?.price))}`}
</p>
                <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white p-[11px] lg:p-[15px] hover:text-white active:scale-90 transition-all border-none"
                 onClick={async() => {
                  await getBookEvent(feature?.id, feature?.event_name);
              }}
                >
              Book Ticket
            </Button>
            </div>
            </div>
        </div>
         
        ))}
      </section>
    </div>
  )
}

export default Free
