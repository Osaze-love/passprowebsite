import Navbar from '@/components/Navbar'
import React from 'react'
import Swiper from "@/components/Swiper";
import Featured from '@/components/Featured';
import Trending from '@/components/Trending';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Navbar textColor='black' bgColor='bg-white' bgMobile='bg-white'/>
      <section className='bg-gradient-to-b from-[#FFF3EF] to-[#ffffff] py-0 lg:py-[82px]'>
      <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <p className="font-bold text-[24px] lg:text-[60px] pt-[60px] lg:pt-0 text-center w-3/4 lg:w-2/4 text-[#343434]">Discover <span className='text-[#FC6435]'>Events</span> That Match Your <span className='text-[Events]'>Passion</span></p>
            <p className="text-[#606060] w-3/4 lg:w-2/4 text-[14px] lg:text-[24px]" >
            From unforgettable concerts and thrilling sports to enlightening workshops and family fun, find the perfect event for every interest. Browse through our curated categories and start planning your next adventure!
            </p>
            <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white w-[273px] lg:px-[56px] h-[37px] lg:h-[56px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none text-[14px] lg:text-[20px]">
              Browse Categories
            </Button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 items-start gap-[50px] px-[20px] lg:px-[50px] py-[78px]'>
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
        </div>
      </section>
      <div className=' px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Popular Events
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Featured />
         <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
        >
          View All
        </Button>
        </div>
        
      </div>
      <div className='bg-[#fff3ef] px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Trending <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Trending />
        <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
        >
          View All
        </Button>
        </div>
      </div>

      <div className=' px-[40px] space-y-[40px] py-[40px]'>
      <section className=" mb-[40px]">
        <p className="font-semibold lg:font-bold text-[18px] lg:text-[40px] text-[#606060]">
            Free <span className="text-[#FC6435]">Events</span>
        </p>
        <div className="w-[50px] lg:w-[114px] h-[3px] lg:h-[5px] rounded-[5px] bg-[#FC6435]"></div>
      </section>
        <Featured />
        <div className='flex items-center justify-center w-full'>
         <Button
          variant="outline"
          className="bg-transparennt hover:bg-transparent text-[#fc6435] font-medium px-[56px] py-[20px] text-[14px] lg:text-[18px] active:scale-90 transition-all border border-[#fc6435] hover:text-[#fc6435] h-[34px] lg:h-[56px]"
        >
          View All
        </Button>
        </div>
      </div>
      
     
    </div>
  )
}

export default page
