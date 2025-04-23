import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Pricing = () => {
  return (
    <div>
              <Navbar textColor="text-white" bgMobile='bg-white' bgColor='bg-[#164473]' />

<section className=" bg-[#164473] mx-[20px] lg:mx-0 relative space-y-[10px] lg:space-y-[10px] pt-[30px] lg:pt-0 pb-[40px] max-h-[100vh] lg:pb-0 mb-[10px] lg:mb-[70px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-[14px] lg:space-y-6 text-center">
            <p className="font-bold lg:font-extrabold text-[32px] lg:text-[60px] text-white w-[90%] lg:w-full">The Cheapest Price Ever!</p>
            <p className="text-[white] w-3/4 lg:w-3/4  text-[16px] lg:text-[20px]" >
              Getting started on Passpro is entirely FREE. No onboarding fee or hidden charges. That’s not all! All free events on passPro is not charged at all.
            </p>
          </div>
        </div>
          
        <section className='hidden lg:grid px-[8px] lg:px-[40px] grid-cols-1 lg:grid-cols-2 gap-[20px] items-center relative'>
        <Image src={'/images/pricingimage.svg'} height={200} width={450} alt='image' className='hidden lg:block relative rounded-[10px] top-[50px]'/>
         <div className='text-center text-white pb-[10px] w-full lg:w-3/4 mx-auto'>
            
                <p className='mb-[10px] lg:mb-[20px] text-[14px] lg:text-[16px] font-medium lg:font-semibold'>Region:  Nigeria</p>

                <div className=' rounded-[10px] lg:rounded-[32px] border border-white w-4/4 mx-auto p-[9px] lg:p-[40px] bg-[#ffffff57] shadow-md'>
                  <p className='text-[24px] lg:text-[40px] font-extrabold'>4% + ₦100</p>
                  <p className='text-[14px] lg:text-[16px]'>On Every paid ticket on  passpPro</p>
                </div>
            
         </div>

          </section>
    
      </section>
      <section>
      <section className='flex lg:hidden flex-col items-center pt-[20px] px-[20px] '>
          <Image src={'/images/pricingimage.svg'} width={360} height={190} alt='image' className='relative rounded-[10px] -top-[40px]'/>
          <div className='text-center border border-[#D9D9D9] text-[#FC6435] py-[40px] px-[60px] w-full mx-auto rounded-[10px]'>
              
              
                  <p className='text-[40px] font-extrabold'>4% + ₦100</p>
                  <p className='text-[14px] lg:text-[16px]'>On Every paid ticket on  PassPro</p>
            
         </div>
          </section>
      </section>

  <section className='grid grid-cols-1 lg:grid-cols-3 my-[30px] lg:mt-[170px] lg:mb-[80px] px-[40px] gap-[40px]'>
      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center space-x-2 py-[10px] '>
        <Image src={'/icons/eventTypesIcon.svg'} width={60} height={60} alt='image' className='hidden lg:block'/>
        <Image src={'/icons/eventTypesIcon.svg'} width={32} height={32} alt='image' className='block lg:hidden'/>
        <p className='text-[18px] lg:text-[20px] text-[#164473] font-semibold'>Event Types</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited Free Events</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited Paid Events</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited Private(official) Events</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Virtual Events</p>
       </div>
       </div>
      
      </div>
      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center py-[10px] space-x-2'>
        <div className=''>
        <Image src={'/icons/promotionAndGrowthIcon.svg'} width={60} height={60} alt='image' className='hidden lg:flex'/>
        <Image src={'/icons/promotionAndGrowthIcon.svg'} width={32} height={32} alt='image' className='flex lg:hidden'/>
        </div>
       
        <p className='text-[18px] lg:text-[20px] text-center text-[#164473] font-semibold'>Promotion And Growth</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Search Optimization Engine</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Social Media Marketing</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Event Reminder</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Email Marketing</p>
       </div>
       </div>
      
      </div>
      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center space-x-2 py-[10px]'>
        <Image src={'/icons/sellingTicketIcon.svg'} width={60} height={60} alt='image' className='hidden lg:block'/>
        <Image src={'/icons/sellingTicketIcon.svg'} width={32} height={32} alt='image' className='block lg:hidden'/>
        <p className='text-[18px] lg:text-[20px] text-[#164473] font-semibold'>Selling Ticket</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>No Fee on Free Ticket</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>4% + n 100 Fee Per Paid Ticket</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Pass online ticket fees to attendees</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Ability to manage tickets seamlessly</p>
       </div>
       </div>
      
      </div>

      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center space-x-2 py-[10px]'>
        <Image src={'/icons/paymentandSupportIcon.svg'} width={60} height={60} alt='image' className='hidden lg:block'/>
        <Image src={'/icons/paymentandSupportIcon.svg'} width={32} height={32} alt='image' className='block lg:hidden'/>
        <p className='text-[18px] lg:text-[20px] text-[#164473] font-semibold'>Payment and Support</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Email support</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Bank transfer payments</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Card payments</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>USSD payments</p>
       </div>
       </div>
      
      </div>

      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center space-x-2 py-[10px]'>
        <Image src={'/icons/managementIcon.svg'} width={60} height={60} alt='image' className='hidden lg:block' />
        <Image src={'/icons/managementIcon.svg'} width={32} height={32} alt='image' className='block lg:hidden'/>
        <p className='text-[18px] lg:text-[20px] text-[#164473] font-semibold'>Management</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited discount code</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>sales summary details</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Faster check out process</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Access to community features</p>
       </div>
       </div>
      
      </div>

      <div className='bg-[#FFF6F2] relative rounded-[10px] p-[28px] border'>
       <div className='bg-[#FFD8C8] rounded-[10px] w-full flex items-center justify-center space-x-2 py-[10px]'>
        <Image src={'/icons/customizationIcon.svg'} width={60} height={60} alt='image' className='hidden lg:block'/>
        <Image src={'/icons/customizationIcon.svg'} width={32} height={32} alt='image' className='block lg:hidden'/>
        <p className='text-[18px] lg:text-[20px] text-[#164473] font-semibold'>Customization</p>
       </div>
       <div className='w-full space-y-[19px]  mt-[40px] lg:mt-[74px] px-[40px]'>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited paid events</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Custom events page URL</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Unlimited Private(official) Events</p>
       </div>
       <div className='flex items-center space-x-[15px]'>
        <Image src={'/icons/pinIcon.svg'} width={20} height={20} alt='image'/>
        <p className='text-[#343434] text-[14px] lg:text-[16px]'>Virtual Events</p>
       </div>
       </div>
      
      </div>
  </section>

         
         
    </div>
  ) 
}

export default Pricing
