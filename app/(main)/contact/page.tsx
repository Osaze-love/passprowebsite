import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
                  <Navbar textColor='text-black' bgColor='bg-[#f6ece9]'/>

      <section
            className="h-[100vh] bg-gradient-to-b from-[#f6ece9] p-0 to-[#ffffff]"
          >
            <div className=" flex flex-col items-center justify-center space-y-[30px] h-3/4">
            
          
          <p className="font-extrabold text-[60px] text-[#343434]">Get In Touch</p>
          <p className=" text-[#606060] w-3/4 text-[20px]">
          we’re here to assist you with any questions, feedback, or support you may need. Whether you’re an event-goer, organizer, or just curious about our platform, our team is ready to help. 
          </p>
          <div className='grid grid-cols-2 gap-[38px]'>
            <div className='w-full px-[38px] py-[40px] bg-white flex items-center space-x-4 rounded-[8px]'>
             <Image src={'images/phone-call.svg'} width={50} height={50} alt='logo'/>
             <div className='space-y-[10px]'>
                <p className='text-[20px]'>Phone Number</p>
                <p className='text-[14px]'>+234 905783728</p>
                <p className='text-[14px]'>+234 905783728</p>
             </div>
            </div>
            <div className='w-full px-[38px] bg-white flex items-center space-x-4 rounded-[8px]'>
             <Image src={'images/message.svg'} width={50} height={50} alt='logo'/>
             <div className='space-y-[10px]'>
                <p className='text-[20px]'>Email</p>
                <p className='text-[14px]'> info@passpro.africa</p>
                <p className='text-[14px]'> support@passpro.africa</p>
             </div>
        </div>
        </div>
     
        </div>
          </section>`
          <section className='flex flex-col items-center w-full'>
          <div className="space-y-1 mb-4">
        <p className="font-bold text-[40px] pt-[40px]">
          Reach <span className="text-[#FC6435]">Out</span> To <span className="text-[#FC6435]">Us</span> Now
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </div>
      <div className='w-full px-[40px] py-[60px] space-y-[60px]'>
        <Input type='text' placeholder='Last Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[28px] w-2/4 mx-auto'/>
        <div className='flex items-center space-x-[99px]'>
        <Input type='text' placeholder='Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[28px] w-2/4 mx-auto'/>
        <Input type='text' placeholder='Phone Number' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[28px] w-2/4 mx-auto'/>
        </div>
        <Textarea placeholder='Tell us how we can be of help' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] h-[300px] focus-visible:ring-0 focus-visible:ring-offset-0'/>

      </div>
      <Button
          variant="outline"
          className="bg-[#FC6435] mx-[40px] justify-start hover:bg-[#FC6435] text-white font-medium px-[56px] py-[26px] active:scale-90 transition-all hover:text-white mb-[40px] self-start"
        >
          Send Message
        </Button>
          </section>
    </div>
  )
}

export default Contact
