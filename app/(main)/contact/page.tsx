"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'
import React, { useState } from 'react'
import FadeLoader from 'react-spinners/FadeLoader'


const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const {  contactPasspro, loading} = useFetch();

  
  return (
    <div>
      {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
     
        <FadeLoader color="#FC6435" />
       
    </div> 
  )}
                  <Navbar textColor='text-black' bgColor='bg-[#f6ece9]' bg-Mobile='bg-[#f6ece9]'/>

      <section
            className="h-[100vh] lg:h-[60vh] bg-gradient-to-b from-[#f6ece9] p-0 to-[#ffffff] pt-0 lg:pt-[90px]"
          >
            <div className=" flex flex-col items-center justify-center space-y-[17px] lg:space-y-[30px] h-[60%] lg:h-4/4">
            
          
          <p className="font-extrabold text-[40px] mt-[200px] lg:mt-0 lg:text-[60px] text-[#343434]">Get In Touch</p>
          <p className=" text-[#606060] text-center w-3/4 text-[14px] lg:text-[20px]">
          We’re here to assist you with any questions, feedback, or support you may need. Whether you’re an event-goer, organizer, or just curious about our platform, our team is ready to help. 
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[38px] w-full px-[20px]  lg:px-[200px]'>
            <div className='w-full px-[38px] py-[40px] bg-white flex items-center space-x-[31px] lg:space-x-4 rounded-[8px]'>
             <Image src={'images/phone-call.svg'} width={50} height={50} className='hidden lg:block' alt='logo'/>
             <Image src={'images/phone-call.svg'} width={32} height={32} alt='logo' className='block lg:hidden'/>
             <div className='space-y-[10px]'>
                <p className='text-[20px]'>Phone Number</p>
                <p className='text-[14px]'>+234 905783728</p>
                <p className='text-[14px]'>+234 905783728</p>
             </div>
            </div>
            <div className='w-full px-[38px] py-[40px] bg-white flex items-center space-x-[31px] lg:space-x-4 rounded-[8px]'>
             <Image src={'images/message.svg'} width={50} height={50} className='hidden lg:block' alt='logo'/>
             <Image src={'images/message.svg'} width={32} height={32} alt='logo' className='block lg:hidden'/>
             <div className='space-y-[10px]'>
                <p className='text-[20px]'>Email</p>
                <p className='text-[14px]'> info@passpro.africa</p>
                <p className='text-[14px]'> support@passpro.africa</p>
             </div>
        </div>
        </div>
     
        </div>
          </section>`
          <section className='flex flex-col items-center w-full mt-[20px] lg:mt-[40px]'>
          <div className="space-y-1 mb-4">
        <p className="font-bold text-[24px] lg:text-[40px] pt-[40px]">
          Reach <span className="text-[#FC6435]">Out</span> To <span className="text-[#FC6435]">Us</span> Now
        </p>
        <div className="w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </div>
      <div
          className="w-full px-[20px] lg:px-[40px] py-[30px] lg:py-[60px] space-y-[20px] lg:space-y-[60px]"
        >
          <div className="flex flex-col lg:flex-row items-center space-y-[20px] lg:space-y-0 space-x-0 lg:space-x-[99px]">
            <div className="space-y-[9px] w-full">
              <Label className="text-[#343434] text-[14px]">
                First Name<span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="placeholder:text-[#8F8F8F] placeholder:text-[14px] lg:placeholder:text-[16px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p:[16px] lg:p-[28px] w-full mx-auto"
              />
            </div>

            <div className="space-y-[9px] w-full">
              <Label className="text-[#343434] text-[14px]">
                Last Name<span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="placeholder:text-[#8F8F8F] placeholder:text-[14px] lg:placeholder:text-[16px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p:[16px] lg:p-[28px] w-full mx-auto"
              />
            </div>
          </div>
          {/* Email and Phone */}
          <div className="flex flex-col lg:flex-row space-y-[20px] lg:space-y-0 items-center space-x-0 lg:space-x-[99px]">
            <div className="space-y-[9px] w-full">
              <Label className="text-[#343434] text-[14px]">
                Email Address<span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-[#8F8F8F] placeholder:text-[14px] lg:placeholder:text-[16px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p:[16px] lg:p-[28px] w-full mx-auto"
              />
            </div>
            <div className="space-y-[9px] w-full">
              <Label className="text-[#343434] text-[14px]">
                Phone Number<span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="placeholder:text-[#8F8F8F] placeholder:text-[14px] lg:placeholder:text-[16px] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p:[16px] lg:p-[28px] w-full mx-auto"
              />
            </div>
          </div>
          {/* Message */}
          <div className="space-y-[9px] w-full">
            <Label className="text-[#343434] text-[14px]">
              Message<span className="text-[#FC6435]">*</span>
            </Label>
            <Textarea
              placeholder="Tell us how we can be of help"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="placeholder:text-[#8F8F8F] placeholder:text-[14px] lg:placeholder:text-[16px] border-[#D9D9D9] h-[300px] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button
            variant="outline"
            onClick={async() => {       
              await contactPasspro(firstName, lastName, email, phone, message); 
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhone('');
              setMessage('');
            }}
            className="bg-[#FC6435]  justify-center lg:justify-start hover:bg-[#FC6435] text-white font-medium px-[56px] py-[26px] active:scale-90 transition-all hover:text-white mb-[40px] lg:self-start"
          >
            Send Message
          </Button>
        </div>
          </section>
    </div>
  )
}

export default Contact
