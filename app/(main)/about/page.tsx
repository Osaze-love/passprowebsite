"use client"
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
const name = 'bg-gradient-to-b from-[#FFF4F0] to-[#ffffff]'; 
const About = () => {
  const router = useRouter();
  return (
    <div>
         <Navbar textColor='text-black' bgColor='bg-[white]' bgMobile='bg-white'/>

       <section
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[36px] lg:gap-[77px] px-[20px] lg:px-[50px] pb-[90px] lg:pb-[168px]"
          >
          <div className='space-y-[18px] lg:space-y-[38px]'>
          <p className="font-bold lg:font-extrabold  text-[30px] lg:text-[50px]  text-[#343434]">Explore, Discover, and Book Your <span className='text-[#FC6435]'>Next Event</span> with Ease</p>
          <p className="text-[14px] lg:text-[24px] text-[#606060] ">
          <span className='text-[#FF8458]'>PassPro</span> is more than just ticketing, events can get better with PassPro. Whether you’re booking tickets for concerts, conferences, sports events, or festivals, Passpro makes it easy for you to explore, select, and secure your spot at your favorite experiences.
          </p>
          </div>
        
          <div className="hidden lg:block" style={{ position: 'relative', width: '100%', height: '560px',  }}>
     <Image
    src={'/images/aboutImage.svg'}
    fill
   className='object-cover rounded-[20px] '
   alt='image'
  />
</div>
<div className="block lg:hidden" style={{ position: 'relative', width: '100%', height: '313px',  }}>
     <Image
    src={'/images/aboutImage.svg'}
    fill
   className='object-cover rounded-[20px] '
   alt='image'
  />
</div>

          </section>

          <section className='grid grid-cols-1 lg:grid-cols-5 py-[30px] lg:py-[131px] items-center gap-[20px] bg-white lg:bg-gradient-to-b from-[#FFE6DB] to-[white] '>
           <div className='col-span-2 px-[50px]'>
           <div className=' flex flex-col text-center lg:text-left justify-center items-center mb-[40px]'>
                <p className="text-[24px] lg:text-[40px] font-bold text-[#343434]">What <span className='text-[#fc6435]'>Sets Us</span> Apart</p>
                <div className='items-center w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435] '></div>
            </div>
            <p className='text-[#585757CC] text-[14px] text-center lg:text-left lg:text-[16px] w-full lg:w-3/4'>Our platform is designed with you in mind, offering a host of features that streamline the event ticketing process. Every feature is built to make discovering and booking events easier, faster, and more secure.</p>
           </div>
           <div className='col-span-3 px-[50px] py-[40px]'>
            <div className='flex flex-col lg:flex-row items-center space-x-[0px] lg:space-x-[49px] space-y-[30px]'>
             <div className='space-y-[51px] relative top-0 lg:-top-10'>
                <div className='p-[30px] h-[300px]  shadow-sm bg-[#FFF4F0] w-full flex flex-col items-center space-y-3 rounded-[32px]'>
                    <Image src={'/images/safelogo.svg'} width={40} height={40} alt='logo'/>
                    <p className='font-bold text-[#222222]'>Safe and Secure</p>
                    <p className='text-[14px] text-[#585757CC] text-center'>Our platform employs the latest encryption technologies to keep your personal and payment information secure. </p>
                </div>
                <div className='p-[30px] h-[300px]  shadow-sm bg-[#F0FFF5] w-full flex flex-col items-center space-y-3 mx-auto rounded-[32px]'>
                    <Image src={'/images/mobilelogo.svg'} width={40} height={40} alt='logo'/>
                    <p className='font-bold text-[#222222]'>Mobile-Friendly Experience</p>
                    <p className='text-[14px] text-center text-[#585757CC]'>Whether you're at home or on the go, Passpro works seamlessly across all devices. </p>
                </div>
             </div>
             <div className='space-y-[51px]'>
             <div className='p-[30px] h-[300px]  shadow-sm bg-[#F2F0FF] w-full mx-auto rounded-[32px] flex flex-col items-center space-y-3'>
                    <Image src={'/images/safelogo.svg'} width={40} height={40} alt='logo'/>
                    <p className='font-bold text-[#222222]'>Flexible Payment Options</p>
                    <p className='text-[14px] text-center text-[#585757CC]'>We understand that convenience matters. That’s why we offer multiple payment methods to suit your preferences. </p>
                </div>
                <div className='p-[30px] h-[300px]  shadow-sm bg-[#FFF0F8] w-full mx-auto rounded-[32px] flex flex-col items-center space-y-3'>
                    <Image src={'/images/ticketlogo.svg'} width={40} height={40} alt='logo'/>
                    <p className='font-bold text-[#222222]'>Customizable Tickets</p>
                    <p className='text-[14px] text-center text-[#585757CC]'>Our platform allows you to easily choose your preferred seating, ticket types, and any custom options available for specific events.. </p>
                </div>
             </div>
            </div>
           </div>
           
          </section>

          <section className='bg-[#164473] rounded-[16px] mx-[20px] px-[40px] grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-[10px] items-center text-white p-[40px] my-[40px]'>
          <div className='col-span-4 text-[14px] lg:text-[20px] text-center lg:text-left mb-[30px] lg:mb-0'>
          At PassPro, event ticketing meets simplicity and security. Our platform is designed to transform the way you discover and attend events. Whether you’re booking tickets for concerts, conferences, sports events, or festivals, Passpro makes it easy for you to explore, select, and secure your spot at your favorite experiences.
          </div>
          <div className='col-span-2 flex justify-center w-full'>
          <a
  href="https://organizer.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
> 
<Button variant="outline" className=' font-medium text-white px-[56px] py-[18.5px] flex items-center justify-center w-full lg:w-max bg-transparent h-[60px] hover:bg-transparent hover:text-white active:scale-90 transition-all '>
        Get Started
      </Button>
</a>
          
          </div>
          </section>

          <section className=' rounded-[48px]  grid grid-cols-1 lg:grid-cols-2 items-center mx-[40px] my-[50px] lg:my-[200px]'>
          <div 
    className="hidden lg:absolute w-[520px] h-[420px] bg-[#FFF1EC] rounded-[64px] transform -rotate-[8.46deg] "
    style={{ left: '30px',  }} /* Adjusted position to move the box left */
  ></div>

  {/* Image */}
  <Image
    src="/images/pricingimage.svg"
    alt="image"
    width={500}
    height={500}
    className="rounded-[64px] transform -rotate-[8.46deg] h-[400px] object-cover relative hidden lg:block"
  />
    <Image
    src="/images/pricingimage.svg"
    alt="image"
    width={300}
    height={322}
    className="rounded-[28px] mx-auto h-[322px] object-cover relative block lg:hidden"
  />
          <div>
            <div className='my-[33px] lg:my-0'>
            <div className='flex flex-col items-center lg:items-start mb-[20px] lg:mb-[40px]'>
      <p className="text-[18px] lg:text-[40px] font-semibold lg:font-bold text-[#343434] text-center">
    Our <span className='text-[#fc6435]'>Core</span> Values
  </p>
  <div className='w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435] mt-1'></div>
</div>
      <p className='text-[#585757CC] text-center lg:text-left text-[14px] w:full lg:w-3/4 lg:text-[20px]'>We believe in providing a seamless, secure, and transparent experience for both event-goers and organizers. Our values reflect our commitment to making ticketing effortless, building trust with our users, and fostering a vibrant community of shared experiences.</p>
            </div>
          
          </div>
          </section>

          {/* <section className='bg-[#FFF1EC] flex flex-col items-center w-full'>
          <div className="space-y-1 mb-4">
        <p className="text-[20px] lg:text-[40px] font-bold text-[#343434] pt-[40px]">
          Meet <span className="text-[#FC6435]">The</span> Team
        </p>
        <div className="w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-[40px] p-[40px]'>
       <div className='flex flex-col items-center'>
        <Image src={'/images/taiwoimage.svg'} height={380} width={380} alt='meet' className='hidden lg:block h-[380px] object-cover rounded-[8px] mb-[20px]'/>
        <Image src={'/images/taiwoimage.svg'} height={170} width={170} alt='meet' className='block lg:hidden h-[170px] mb-[13px] object-cover rounded-[8px] '/>

        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'/images/olusolaimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
        <Image src={'/images/olusolaimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px] block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Olusola Ademuimi</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>Product Manager</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'/images/ajalaimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
        <Image src={'/images/ajalaimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px]  block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Ajala Promise</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>UI/UX Designer</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'/images/gbadamosiimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
        <Image src={'/images/gbadamosiimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px]  block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Gbadamosi Mujeedat</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>UI/UX Designer</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'/images/osazeimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
        <Image src={'/images/osazeimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px] block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Osaze-Omobude Love</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>Frontend Developer</p>
       </div>
       <div className='flex flex-col items-center'>
       <Image src={'/images/alaseimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
       <Image src={'/images/alaseimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px] block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Alase Waris</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>Backend Developer</p>
       </div>
       <div className='flex flex-col items-center'>
       <Image src={'/images/idowuimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
       <Image src={'/images/idowuimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px]  block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Idowu Olatunji</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>Software Engineer</p>
       </div>
       <div className='flex flex-col items-center'>
       <Image src={'/images/godwinimage.svg'} height={380} width={380} alt='meet' className='h-[380px] object-cover rounded-[8px] mb-[20px] hidden lg:block'/>
       <Image src={'/images/godwinimage.svg'} height={170} width={170} alt='meet' className='h-[170px] mb-[13px] object-cover rounded-[8px]  block lg:hidden'/>
        <p className='text-center text-[18px] lg:text-[28px] font-semibold'>Godwin</p>
        <p className='text-[#8F8F8F] text-[14px] lg:text-[18px] text-center'>Software Engineer</p>
       </div>
      </div>
          </section> */}

          <section       
                style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/bannerImage2.jpeg')`, // Adjust opacity in rgba
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className='my-[40px] h-[450px] lg:h-[80vh]  mx-[20px] lg:mx-[40px] rounded-[20px]'>
                 <div className="flex w-full h-full flex-col items-center justify-center space-y-[30px] text-center px-[10px]">
         
          <p className="font-extrabold text-[white] text-[20px] lg:text-[60px] w-3/4">Explore, Discover, and Book Your Next Event with Ease</p>
          <p className="text-[14px] lg:text-[20px] text-white w-full lg:w-2/4">
          With Passpro, booking tickets to your favorite events has never been easier. From concerts to conferences, we connect you to the experiences you love with just a few clicks. Ready to find your next event?
          </p>
            <Button
            onClick={() => {
              router.push('/explore')
            }}
            variant="outline" className="bg-[#FC6435] hover:bg-[#FC6435] text-white font-medium px-[50px] xl:px-[70px] py-[25px] active:scale-90 transition-all border-none hover:text-white">
              Explore Events
            </Button>
          
        </div>
          </section>
    </div>
  )
}

export default About
