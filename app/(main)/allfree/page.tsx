"use client"
import Navbar from '@/components/Navbar'
import Popular from '@/components/Popular'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useFetch from '@/hooks/useFetch'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FadeLoader from 'react-spinners/FadeLoader'

const page = () => {
  const { getAllFreeEvents, loading, getBookEvent } = useFetch();
  const router = useRouter();
  const { allFreeEvents} = useSelector(
    (state: RootState) => state.event
  );
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  useEffect(() => {
      getAllFreeEvents();
  },[]);

  const handleSearch = () => {
    getAllFreeEvents(searchTerm); 
  };


  return (
    <div>     
      <Navbar textColor='black' bgColor='bg-white' bgMobile='bg-white'/>
        <div className='py-[50px] px-[40px] lg:px-[50px]'>
        <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Free Events
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>

      <section className='flex items-center w-full justify-center mb-[20px] lg:mb-[100px]'>
          <div className='border rounded-[17px] w-[900px] flex items-center py-[10px] lg:py-[25px] px-[20px] lg:px-[50px]'> 
            <Image src={'/icons/searchIcon.svg'} height={40} width={40} alt='icon'/>
            <Input placeholder='Search For Free Events' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='placeholder:text-[14px] lg:placeholder:text-[30px] focus-visible:ring-0 focus-visible:ring-offset-0 border-0 ring-0 ring-offset-0 text-[14px] lg:text-[30px] shadow-none'
            //   style={{ fontSize: "30px" }} // Optional inline style for added assurance

            />
            <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white px-[25px] lg:px-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none w-max"
            onClick={handleSearch}
            >
              Search
            </Button>

          </div>
      </section>
      <div className="flex  items-center flex-col w-full">
      {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <FadeLoader color="#FC6435" />
       
    </div> 
  )}
      <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] '>
        {allFreeEvents?.map((feature: any) => (
        <div key={feature?.id} className='shadown-sm border rounded-[10px] bg-white'>
            <div style={{ position: 'relative', width: '270px', height: '270px',  }}>
  <Image
    src={"https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~jefw4J~~WVpx9ehn0MJ9yOLGyemjyxuuGdDMZvSj1sQHX-xzUXsTzaYEj54Exgne8AeXTCsfT1klOC3jV67ryKBUWI39xUdJiGnAhvTNGFYr5w4hJHFFN5wtt60PctbWddWaDAgZ9tuw3LovbIU09jzuS69XOO1EBRGSfi8NYfQjK4eJmiYbpkpIA5e72-PTacKyU05Cx5IEdzbLFJCjac0gWeL-b9rhOH047L2QVp7i-nesDKDvxA1GGuk8DhlXuRfOSCQ1ibqd18AhkVB0C~H-kSm6MtHXLELcJAOcA3XH29fLYgrKR9N5ML8lMyYM7P70F~31xMMZCWre7c3Q__"}
    fill
   className='object-cover rounded-t-[10px]'
   alt='image'
  />
</div>
            <div className='p-[20px] space-y-[13px]'>
            <p className='font-bold text-[14px] lg:text-[20px]'>{feature?.event_name}</p>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/calendarDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature?.start_date}</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/locationDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature?.event_location}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[14px] lg:text-[16px]'>{feature?.price}</p>
                <Button
                onClick={async() => {
                    await getBookEvent(feature?.id);
                    router.push('/booking')

                }}
                variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white p-[11px] lg:p-[15px] hover:text-white active:scale-90 transition-all border-none">
              Book Ticket
            </Button>
            </div>
            </div>
        </div>
         
        ))}
      </section>
    </div>
        </div>
      
    </div>
  )
}

export default page