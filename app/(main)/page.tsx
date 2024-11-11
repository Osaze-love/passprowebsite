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
          <Navbar textColor="text-white" bgColor='bg-black' />

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
        <section className="grid grid-cols-4 items-center mx-auto bg-white rounded-[8px] max-w-[80%] shadow-md relative -top-16">
          <div className="space-y-[20px] border-r p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search by Category</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/searchIcon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">select category</p>
           </div>
          </div>
          <div className="space-y-[20px] border-r p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search By Location</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/locationIcon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">Search location</p>
           </div>
          </div>
          <div className="space-y-[20px] border-r p-[30px]">
            <p className="font-semibold text-[20px] text-[#343434]">Search by Date</p>
           <div className="flex items-center space-x-3">
            <Image src={'/icons/calendarIcon.svg'} width={20} height={20} alt="icon"/>
            <p className="text-[#D9D9D9]">Select date range</p>
           </div>
          </div>
          <div className="p-[30px]">
          <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white px-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none">
              Search
            </Button>
          </div>
        </section>
        <section className="flex py-[50px] items-center flex-col w-full">
        
      <section className="space-y-[30px]">
        <div className="space-y-2 text-center">
        <p className="font-bold text-[40px] text-[#606060]">
          Browse <span className="text-[#FC6435]">By</span> Categories
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
        </div>
        <div className="w-full flex items-center justify-center">
        <p className="text-[24px] text-[#757575] w-3/4 text-center">Discover What You Need Effortlessly Browse Our Diverse Categories to Find Exactly What You’re Looking For!</p>
        </div>
       
     <div className="py-[40px]">
     <Swiper />

     </div>
      </section>
        </section>

        <section className="bg-[#f6ece9] py-[50px]">
        <section className="space-y-2 text-center mb-[40px]">
        <p className="font-bold text-[40px] text-[#606060]">
          Featured <span className="text-[#FC6435]">Event</span>
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </section>
            <Featured />
        </section>
        <section className="py-[50px]">
        <section className="space-y-2 text-center mb-[40px]">
        <p className="font-bold text-[40px] text-[#606060]">
          Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </section>
            <Trending />
        </section>
        </div>
      );
}
