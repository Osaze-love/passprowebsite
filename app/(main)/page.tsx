"use client"
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";
import Swiper from "@/components/Swiper";
import Trending from "@/components/Trending";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
   const { getCategories } = useFetch();
   useEffect(() => {
     getCategories()
   },[])
    return (
        <div>
          <Navbar textColor="text-white" bgColor='bg-black' bgMobile="bg-black" />

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
        {/* <section className="grid grid-cols-1 lg:grid-cols-4 items-center mx-auto bg-white rounded-[8px] max-w-[80%] shadow-md relative -top-16">
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
          <div className="px-[51px]  mb-[47px] lg:mb-0 lg:p-[30px] w-full">
          <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white  px-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none w-full">
              Search
            </Button>
          </div>
        </section> */}
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
         
         <Swiper />
        {/* <div className='grid grid-cols-2 lg:grid-cols-4 items-start gap-[50px] px-[20px] lg:px-[50px] py-[78px]'>
        <div className='hidden lg:block'  style={{ position: 'relative', width: '100%', height: '400px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/d493/94bf/b8aa1c48cb49b39a48f097243eaf3fe8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G9m-aMF5wPoNSIjUJ-b8ucnBpbSTcQm7LEDLsbvxXNArf2xYfzC23DdOSBLnYvrawGEVq~r12Pd7tNWLdPXcjkgDGoSPPZKHMCsOpWce74m28sz3MbrK2mHDmFUmIJ5ykKSGjaEw-CPBp0XjA6PsOuAc0clAM7riF2TRD8eJHuo~6YgOiD2Pk6KXbtDJKj~wjTBX824t6iPQPN99YaID~xUqm5OEM1KxdbQNSvo7F-LtTyUEZmpq62rwoyH8xJFY8QAd527asfy8s5uSS20A9FakqZrDho5d9ezXVSPUQ8EUMNtl-p8wbtJMyJ296DzbBlPETF6fxYXOjSF0~4wj6w__'}
    fill
   className=' object-cover rounded-[19px] transform -rotate-[10deg]'
   alt='image'
  />
</div>   
    
    <div className='relative block lg:hidden'>
    <div className="absolute bottom-2 w-full text-center z-10">
    <p className='text-[18px] font-bold text-white'>Sport</p>
  </div>
    <div   style={{ position: 'relative', width: '100%', height: '200px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/d493/94bf/b8aa1c48cb49b39a48f097243eaf3fe8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G9m-aMF5wPoNSIjUJ-b8ucnBpbSTcQm7LEDLsbvxXNArf2xYfzC23DdOSBLnYvrawGEVq~r12Pd7tNWLdPXcjkgDGoSPPZKHMCsOpWce74m28sz3MbrK2mHDmFUmIJ5ykKSGjaEw-CPBp0XjA6PsOuAc0clAM7riF2TRD8eJHuo~6YgOiD2Pk6KXbtDJKj~wjTBX824t6iPQPN99YaID~xUqm5OEM1KxdbQNSvo7F-LtTyUEZmpq62rwoyH8xJFY8QAd527asfy8s5uSS20A9FakqZrDho5d9ezXVSPUQ8EUMNtl-p8wbtJMyJ296DzbBlPETF6fxYXOjSF0~4wj6w__'}
    fill
   className=' object-cover rounded-[5px]'
   alt='image'
  />
</div>   
    </div>

<div className='hidden lg:block' style={{ position: 'relative', width: '100%', height: '400px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/a057/a203/66017ee22d85c198529592b437742229?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJjRHnSAms21E9nIcPOvPg-oDsuKqTDBzaLRu8veWoz6~InX7yPhfgOf0XvPdci48hm87cvaMPnMex-kRRW6kLhToe4X8kjADZ5XAYQXC22KE8SDdtA8jT1Tizq8pPDaK4o0e9RWLXUsvAanCIcTI0aeU~zVkjcalnb3WD2kl~5yVVYHQ0QQCt5PtKL6keoYX1yZu~zeO7o-XEtnsQRxHGNdO9VatSK86r9aIfskLKHF-n0nwa1AYtNPCsznB0Juck4o1YvgEYfHsm95AM8ubRdMCvYSXOwjfj2lmvhXj-3nZtoQo7vb0GbFHG8UiaITM7jWINOx4JEA22SnspxonA__'}
    fill
   className='object-cover rounded-[19px]'
   alt='image'
  />
</div>   
  
<div className='relative block lg:hidden'>
    <div className="absolute bottom-2 w-full text-center z-10">
    <p className='text-[18px] font-bold text-white'>Party</p>
  </div>
    <div   style={{ position: 'relative', width: '100%', height: '200px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/a057/a203/66017ee22d85c198529592b437742229?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJjRHnSAms21E9nIcPOvPg-oDsuKqTDBzaLRu8veWoz6~InX7yPhfgOf0XvPdci48hm87cvaMPnMex-kRRW6kLhToe4X8kjADZ5XAYQXC22KE8SDdtA8jT1Tizq8pPDaK4o0e9RWLXUsvAanCIcTI0aeU~zVkjcalnb3WD2kl~5yVVYHQ0QQCt5PtKL6keoYX1yZu~zeO7o-XEtnsQRxHGNdO9VatSK86r9aIfskLKHF-n0nwa1AYtNPCsznB0Juck4o1YvgEYfHsm95AM8ubRdMCvYSXOwjfj2lmvhXj-3nZtoQo7vb0GbFHG8UiaITM7jWINOx4JEA22SnspxonA__'}
    fill
   className=' object-cover rounded-[5px]'
   alt='image'
  />
</div>   
    </div>

<div className='hidden lg:block' style={{ position: 'relative', width: '100%', height: '400px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/4830/e096/4290f9c159df4c04b6b3a2d6555eced2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dT-XaQ01U3-81IFJFq-4Y36JV9pzYvGZNv0UrMKZpO4MxyUy9Zcwb1JBjUW5BO-ZbcfFDW25n~TXvwHXfK3wx2xWaYv0kVnA-WcaD7XrhEBl9g8ogxQJOUOqS5dW1m6ISt8-cb5KWOOFF5RpxdYgPAmN0hb8IJYVjGEUKAANhDWfrZIVreB9fZXuChapFXX42frvQ~MUd1~JtOG5FwbI6sXQ4h5pbqnnlMycmPnxr9FoHa0baXPkYjjehzZvPZbwh~7Hw5IN04FI7XGGM7Vqiide~baJ1GQyj2Jq1LYIouon9iThQkIWtKrc5hXX5SnoNzIawnJVEYtB91xnCi~ANw__'}
    fill
   className='object-cover rounded-[19px]'
   alt='image'
  />
</div>

<div className='relative block lg:hidden'>
    <div className="absolute bottom-2 w-full text-center z-10">
    <p className='text-[18px] font-bold text-white'>Music</p>
  </div>
    <div   style={{ position: 'relative', width: '100%', height: '200px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/4830/e096/4290f9c159df4c04b6b3a2d6555eced2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dT-XaQ01U3-81IFJFq-4Y36JV9pzYvGZNv0UrMKZpO4MxyUy9Zcwb1JBjUW5BO-ZbcfFDW25n~TXvwHXfK3wx2xWaYv0kVnA-WcaD7XrhEBl9g8ogxQJOUOqS5dW1m6ISt8-cb5KWOOFF5RpxdYgPAmN0hb8IJYVjGEUKAANhDWfrZIVreB9fZXuChapFXX42frvQ~MUd1~JtOG5FwbI6sXQ4h5pbqnnlMycmPnxr9FoHa0baXPkYjjehzZvPZbwh~7Hw5IN04FI7XGGM7Vqiide~baJ1GQyj2Jq1LYIouon9iThQkIWtKrc5hXX5SnoNzIawnJVEYtB91xnCi~ANw__'}
    fill
   className=' object-cover rounded-[5px]'
   alt='image'
  />
</div>   
    </div>
<div className='hidden lg:block' style={{ position: 'relative', width: '100%', height: '400px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__'}
    fill
   className='object-cover rounded-[19px] transform rotate-[10deg]'
   alt='image'
  />
</div>   
<div className='relative block lg:hidden'>
    <div className="absolute bottom-2 w-full text-center z-10">
    <p className='text-[18px] font-bold text-white'>Comedy</p>
  </div>
    <div   style={{ position: 'relative', width: '100%', height: '200px',  }}>
     <Image
    src={'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__'}
    fill
   className=' object-cover rounded-[5px]'
   alt='image'
  />
</div>   
    </div>
        </div> */}
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
            <p className="text-[22px] lg:text-[40px] text-center lg:text-left text-[#343434] font-semibold lg:font-bold w-3/4 mx-auto lg:mx-0">Celebrating <span className="text-[#FC6435]">Happy</span> Moments</p>
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
        {/* <section className="py-[50px] px-[40px] lg:px-[50px]">
        <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
            <Trending />
        </section> */}
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
