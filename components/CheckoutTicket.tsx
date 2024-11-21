"use client"
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CheckoutTicket = () => {
    const router = useRouter();
    const { eventBook } = useSelector(
      (state: RootState) => state.event
    );
    const [selectedValue, setSelectedValue] = useState("0"); // Default to "0"
  return (
    <div className='px-[20px] py-[31px]'>
         <div className='flex items-center justify-between mb-[42px]'>
         <p className='text-[20px] text-[#606060] font-medium'>Checkout</p>
  
           <Image onClick={() => {
            router.push('/booking')
           }} src='/icons/closeIcon.svg' width={14} height={14} alt='image'/>
        </div>
       <div className='flex items-center justify-between mb-[42px]'>
           <div className='flex space-x-2 items-center'>
            <Image src='/icons/TicketIcon.svg' width={20} height={20} alt='image'/>
            <p className='text-[#FC6435]'>Tickets</p>
           </div>
           <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

           <div className='flex space-x-2 items-center'>
           <Image src='/icons/ContactIcon.svg' width={20} height={20} alt='image'/>
           <p>Contact</p>
           </div>
        </div>
        <div>
            <p className='text-[#343434] text-[20px] font-semibold mb-[26px]'>Choose Tickets</p>

            <div className='space-y-[10px]'>
              {/* <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[10px]'>
                    <p className=''>Early Bird</p>
                    <p className='text-[14px]'>Sold out</p>
                </div>
                <Button variant="outline" className="hover:bg-[#D9D9D9] font-medium bg-[#D9D9D9] text-black px-[35px] py-[15px] w-[100px] h-[40px] hover:text-black active:scale-90 transition-all border-none text-[14px]">
              Sold out
            </Button>
              </div> */}
              {eventBook?.tickets?.map((ticket:any) => (
                <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[15px]'>
                    <p className=' text-[#343434] font-semibold'>{ticket?.ticket_name}</p>
                    <p className='text-[#606060] text-[14px]'> <span className='font-bold text-[#FC6435]'>{ticket?.ticket_price}</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal text-[14px]'>{ticket?.ticket_category}</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[100px] h-[40px] px-[17px] py-[15px] focus:ring-0 focus:ring-offset-0">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="0">0</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
              </div>
              ))}
              
              {/* <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[15px]'>
                    <p className=' text-[#343434] font-semibold'>Regular</p>
                    <p className='text-[#606060] text-[14px]'> <span className='font-bold text-[#FC6435]'>#15,850</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal text-[14px]'>Regular Tickets</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[100px] h-[40px] px-[17px] py-[15px] focus:ring-0 focus:ring-offset-0">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="0">0</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
              </div>
              <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[15px]'>
                    <p className=' text-[#343434] font-semibold'>Regular</p>
                    <p className='text-[#606060] text-[14px]'> <span className='font-bold text-[#FC6435]'>#15,850</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal text-[14px]'>Regular Tickets</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[100px] h-[40px] px-[17px] py-[15px] focus:ring-0 focus:ring-offset-0">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="0">0</SelectItem>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
              </div> */}
              
              <div className='flex items-center justify-between bg-[#FC6435] p-[12px] rounded-[10px]'>
               <p className='text-[20px] text-white'>Buy Ticket</p>
               <Button
          variant="outline"
          className="bg-white w-max flex lg:hidden justify-center hover:bg-white text-[#FC6435] font-medium px-[15px] py-[7px] active:scale-90 transition-all hover:text-[#FC6435] "
          onClick={() => {
            router.push('/info')
          }}
        >
          Continue
        </Button>
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default CheckoutTicket
