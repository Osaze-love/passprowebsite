"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
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
import { Button } from './ui/button';

const InfoTicket = () => {
    const router = useRouter();
    const [selectedCountryCode, setSelectedCountryCode] = useState("+234"); 
    const [showDifferentAddressFields, setShowDifferentAddressFields] = useState('No');

  return (
    <div className='px-[20px] py-[31px]'>
       <div className='flex items-center justify-between mb-[42px]'>
           <div className='flex space-x-2 items-center'>
            <Image src='/icons/viewTicket.svg' width={20} height={20} alt='image'/>
            <p >Tickets</p>
           </div>
           <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

           <div className='flex space-x-2 items-center'>
           <Image src='/icons/profileredicon.svg' width={20} height={20} alt='image'/>
           <p className='text-[#FC6435]'>Contact</p>
           </div>
        </div>
        <div>
        <p className='text-[#343434] text-[20px] font-semibold mb-[26px]'>Contact Information</p>
        </div>
        <div className='bg-[#FFD8C8] text-[14px] flex items-center w-full justify-center'>
            <p className='p-[16px] text-center'>
            We’ve reserved your ticket. please complete checkout within 09:46 to secure your tickets.
            </p>
        </div>

        <div className='space-y-[20px] mt-[24px]'>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434] text-[14px]'>First Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434] text-[14px]'>Last Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter Last Name' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434] text-[14px]'>Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434] text-[14px]'>Confirm Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Confirm Email Address' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            <div className='space-y-[11px]'>
            <Label className='text-[#343434] text-[14px]'>Phone Number <span className='text-[#FC6435]'>*</span></Label>
            <div className='flex items-center space-x-2' >
            <Select value={selectedCountryCode} onValueChange={(value) => setSelectedCountryCode(value)} >
            <SelectTrigger className="w-[74px] px-[7px] py-[14px] focus:ring-0 focus:ring-offset-0 text-[#8F8F8F] text-[12px] border-[#D9D9D9]">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="+234">+234</SelectItem>
         

        </SelectGroup>
      </SelectContent>
    </Select>
    <Input type='text' placeholder='Enter Phone Number' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
            </div>
            
            </div>
           <div className='space-y-[15px]'>
            <p className=' text-[#343434] font-semibold'>Send ticket to different addresses ?</p>
            <div className='flex items-center space-x-[11px]'>
              <Image src={'/icons/infoIcon.svg'} width={25} height={25} alt='image'/>
              <p className='text-[#8F8F8F] text-[14px]'>Tickets will only be sent to the email address you provide here</p>         
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
                <Label className='text-[#343434] text-[14px]'>First Name <span className='text-[#FC6435]'>*</span></Label>
                <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
              </div>
              <div className='space-y-[11px]'>
                <Label className='text-[#343434] text-[14px]'>Email <span className='text-[#FC6435]'>*</span></Label>
                <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] placeholder:text-[12px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
              </div>
            </>
          )}
          <Button
          variant="outline"
          className="bg-[#FC6435] w-[191px] mx-auto flex lg:hidden justify-center hover:bg-[#FC6435] text-white font-medium px-[56px] py-[26px] active:scale-90 transition-all hover:text-white my-[40px]"
          onClick={() => {
            router.push('/successPage')
          }}
        >
          Buy Ticket
        </Button>
        </div> 
    </div>
  )
}

export default InfoTicket
