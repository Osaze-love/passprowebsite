"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const Ticket = () => {
    const [selectedValue, setSelectedValue] = useState("0"); // Default to "0"
    const [selectedCountryCode, setSelectedCountryCode] = useState("+234"); 
    const [showDifferentAddressFields, setShowDifferentAddressFields] = useState('No'); // New state for additional fields


    return (
    <div className='grid grid-cols-2 items-center px-[40px] py-[51px] gap-[63px]'>
      <section>
        <div className='flex items-center justify-between mb-[42px]'>
           <div className='flex space-x-2 items-center'>
            <Image src='/icons/TicketIcon.svg' width={34} height={34} alt='image'/>
            <p>Tickets</p>
           </div>
           <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

           <div className='flex space-x-2 items-center'>
           <Image src='/icons/ContactIcon.svg' width={34} height={34} alt='image'/>
           <p>Contact</p>
           </div>
        </div>
        <div>
            <p className='text-[#343434] text-[24px] font-semibold mb-[26px]'>Choose Tickets</p>

            <div className='space-y-[40px]'>
              <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[20px]'>
                    <p className='text-[24px]'>Early Bird</p>
                    <p>Sold out</p>
                </div>
                <Button variant="outline" className="hover:bg-[#D9D9D9] font-medium bg-[#D9D9D9] text-black px-[35px] py-[15px] w-[154px] hover:text-black active:scale-90 transition-all border-none">
              Sold out
            </Button>
              </div>
              <div className='flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]'>
                <div className='space-y-[20px]'>
                    <p className='text-[24px] text-[#343434] font-semibold'>Regular</p>
                    <p className='text-[#606060]'> <span className='font-bold text-[#FC6435]'>#15,850</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal'>Regular Tickets</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[154px] px-[35px] py-[15px] focus:ring-0 focus:ring-offset-0">
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
                <div className='space-y-[20px] w-2/4'>
                    <p className='text-[24px] text-[#343434] font-semibold'>Regular + chike</p>
                    <p className='text-[#606060]'> <span className='font-bold text-[#FC6435]'>#15,850</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal'>Comes with chike merchanise not available in stores</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[154px] px-[35px] py-[15px] focus:ring-0 focus:ring-offset-0">
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
                <div className='space-y-[20px] w-2/4'>
                    <p className='text-[24px] text-[#343434] font-semibold'>Regular + meet & greet with chike</p>
                    <p className='text-[#606060]'> <span className='font-bold text-[#FC6435]'>#15,850</span> + #850 fee</p>
                    <p className='text-[#343434] font-normal'>This regular ticket grants you access to meet with 
                    chike in person after the fest</p>
                </div>
                <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-[154px] px-[35px] py-[15px] focus:ring-0 focus:ring-offset-0">
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
            
            </div>
        </div>
        {/* <div className='space-y-[30px]'>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>First Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Last Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter Last Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Confirm Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Confirm Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Phone Number <span className='text-[#FC6435]'>*</span></Label>
            <div className='flex items-center space-x-2'>
            <Select value={selectedCountryCode} onValueChange={(value) => setSelectedCountryCode(value)} >
            <SelectTrigger className="w-[74px] px-[7px] py-[14px] focus:ring-0 focus:ring-offset-0 text-[#8F8F8F] border-[#D9D9D9]">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="+234">+234</SelectItem>
         

        </SelectGroup>
      </SelectContent>
    </Select>
    <Input type='text' placeholder='Enter Phone Number' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            
            </div>
           <div className='space-y-[15px]'>
            <p className='text-[20px] text-[#343434] font-semibold'>Send ticket to different addresses ?</p>
            <div className='flex items-center space-x-[11px]'>
              <Image src={'/icons/infoIcon.svg'} width={25} height={25} alt='image'/>
              <p className='text-[#8F8F8F]'>Tickets will only be sent to the email address you provide here</p>         
            </div>
            <RadioGroup 
            value={showDifferentAddressFields}
             onValueChange={(value) => setShowDifferentAddressFields(value)}
            className='flex items-center space-x-[22px]'>
         <div className="flex items-center space-x-2">
        <RadioGroupItem className='text-[#FC6435] border-transparent border-black' value="Yes" />
        <Label className='text-[12px]'>Yes</Label>
          </div>
     
        <div className="flex items-center space-x-2">
        <RadioGroupItem className='text-[#FC6435] border-transparent border-black' value="No" />
        <Label className='text-[12px]'>No</Label>
          </div>
        </RadioGroup>
           </div>
           {showDifferentAddressFields === 'Yes' && (
            <>
              <div className='space-y-[11px]'>
                <Label className='text-[#343434]'>First Name <span className='text-[#FC6435]'>*</span></Label>
                <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
              </div>
              <div className='space-y-[11px]'>
                <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
                <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
              </div>
            </>
          )}
        </div> */}
      </section>
      <section className='border rounded-[8px] px-[40px] py-[50px]'>
        <p className='font-semibold text-[32px] text-center text-[#164473]'>Reserve A Seat</p>
         
         <div className='space-y-[14px] py-[38px]'>
         <div className='flex items-center justify-between border border-[#D9D9D9] rounded-[4px] px-[20px] py-[20px]'>
          <div>
            <p className='text-[20px] text-[#343434] font-semibold w-3/4'>Music Fest Carnival, 2024</p>
            <p className='text-[#8F8F8F]'>1 x Regular</p>
          </div>
          <p className='font-semibold'>5,000</p>
        </div>
        <div className='flex items-center justify-between border border-[#D9D9D9] rounded-[4px] px-[20px] py-[20px]'>
          <div>
            <p className='text-[20px] text-[#343434] font-semibold w-3/4'>Music Fest Carnival, 2024</p>
            <p className='text-[#8F8F8F]'>1 x Regular</p>
          </div>
          <p className='font-semibold'>50,000</p>
        </div>
        <div className='flex items-center justify-between py-[22px]'>
         <p className='text-[24px] text-[#343434] font-semibold'>Total</p>
         <p className='text-[24px] text-[#343434]'>#50,000</p>
        </div>
        <p className='text-[20px] text-[#FC6435]'>Add Discount Code</p>
         </div>
         <div className='flex items-center justify-center w-full'>
         <Button variant="outline" className="hover:bg-[#FC6435]  w-3/4 my-[48px] font-medium bg-[#FC6435] text-white py-[19px] hover:text-white active:scale-90 transition-all border-none text-[24px]">
              Buy Ticket
            </Button>
         </div>
       
      </section>
    </div>
  )
}

export default Ticket
