import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";
import Swiper from "@/components/Swiper";
import Trending from "@/components/Trending";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
          <Navbar textColor="text-white" bgColor='bg-black' bgMobile="bg-black"/>

          <section
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/frontpageimage.jpeg')`, // Adjust opacity in rgba
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[100vh]"
          >
            <div className=" flex items-center justify-center h-3/4">
          <Banner />
        </div>
          </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 items-center mx-auto bg-white rounded-[8px] max-w-[80%] shadow-md relative -top-16">
          <div className="space-y-[20px] border-r-0 lg:border-r-1 p-[51px]  lg:p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search by Category</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/searchIcon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">select category</p>
           </div>
          </div>
          <div className="space-y-[20px] border-r-0 lg:border-r-1 p-[51px]  lg:p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search By Location</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/locationIcon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">Search location</p>
           </div>
          </div>
          <div className="space-y-[20px] border-r-0 lg:border-r-1 p-[51px]  lg:p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search by Date</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/dateicon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">Select date range</p>
           </div>
          </div>
          <div className="px-[51px]  mb-[47px] lg:mb-0 lg:p-[30px]">
          <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white w-[254px] px-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none">
              Search
            </Button>
          </div>
        </section>
        <section className="flex py-[50px] items-center flex-col w-full">
        
      <section className="space-y-[30px]">
        <div className="space-y-2 text-center">
        <p className="font-bold text-[22px] lg:text-[40px] text-[#606060]">
          Browse <span className="text-[#FC6435]">By</span> Categories
        </p>
        <div className="w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
        </div>
        <div className="w-full flex items-center justify-center">
        <p className="text-[14px] lg:text-[24px] text-[#757575] w-3/4 text-center">Discover What You Need Effortlessly Browse Our Diverse Categories to Find Exactly What You’re Looking For!</p>
        </div>
       
     <div className="py-[40px]">
     <Swiper />

     </div>
      </section>
        </section>

        <section className="bg-[#f6ece9] py-[50px] px-[40px]">
        <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
          Featured <span className="text-[#FC6435]">Event</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
            <Featured />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 items-center w-full  px-[40px] lg:px-[50px] lg:py-[150px] py-[80px] gap-[53px]">
          <div className="space-y-[20px] lg:space-y-[66px]">
            <p className="text-[22px] lg:text-[40px] text-center text-[#343434] font-semibold lg:font-bold w-3/4 mx-auto">Celebrating <span className="text-[#FC6435]">Happy</span> Moments</p>
            <p className="text-[14px] lg:text-[24px] text-[#606060]">At <span className="text-[#FC6435]">PASSPRO</span>, we believe that life’s best moments are meant to be shared. Our platform is dedicated to connecting you with experiences that inspire joy, laughter, and unforgettable memories. From live concerts to theater performances and family festivals, each event is a chance to create lasting memories with friends, family, and fellow event-goers.</p>
          </div>
            <div className="hidden lg:block" style={{ position: 'relative', width: '100%', height: '600px',  }}>
     <Image
    src={'/images/happymomentsImage.svg'}
    fill
   className='object-cover rounded-[19px]'
   alt='image'
  />
</div>   
     
<div className="block lg:hidden" style={{ position: 'relative', width: '100%', height: '312px',  }}>
     <Image
    src={'/images/happymomentsImage.svg'}
    fill
   className='object-cover rounded-[19px]'
   alt='image'
  />
</div>
        </section>
        <section className="py-[50px] px-[40px] lg:px-[50px]">
        <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
            <Trending />
        </section>
        <section className="py-[50px] px-[40px] lg:px-[50px]">
        <p className="font-semibold text-center lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Brands That <span className="text-[#FC6435]">Trust</span> Us
        </p>
        <div className="flex items-center justify-center w-full space-x-[32px] lg:space-x-[153px] py-[43px] lg:py-[64px]">
          <Image className="hidden lg:block" src='/images/digitalgrowth.svg' width={400} height={135} alt="image"/>
          <Image className="block lg:hidden" src='/images/digitalgrowth.svg' width={100} height={36} alt="image"/>
          <Image className="hidden lg:block" src='/images/techx.svg' width={400} height={135} alt="image"/>
          <Image className="block lg:hidden" src='/images/techx.svg' width={100} height={36} alt="image"/>
        </div>
        </section>
        </div>
      );
}
