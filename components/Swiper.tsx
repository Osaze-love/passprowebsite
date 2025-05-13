"use client";
import { Navigation, Pagination, Scrollbar, A11y, Parallax, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import '../app/css/custom-swiper-bullet.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateActiveCategory } from '@/redux/slices/eventslice';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

export default function SwiperComponent() {
  const { categories, categoryName } = useSelector((state: RootState) => state.event);
  const router = useRouter();
  const dispatch = useDispatch();
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const swiperData = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__',
        name: 'Music',   
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/d493/94bf/b8aa1c48cb49b39a48f097243eaf3fe8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G9m-aMF5wPoNSIjUJ-b8ucnBpbSTcQm7LEDLsbvxXNArf2xYfzC23DdOSBLnYvrawGEVq~r12Pd7tNWLdPXcjkgDGoSPPZKHMCsOpWce74m28sz3MbrK2mHDmFUmIJ5ykKSGjaEw-CPBp0XjA6PsOuAc0clAM7riF2TRD8eJHuo~6YgOiD2Pk6KXbtDJKj~wjTBX824t6iPQPN99YaID~xUqm5OEM1KxdbQNSvo7F-LtTyUEZmpq62rwoyH8xJFY8QAd527asfy8s5uSS20A9FakqZrDho5d9ezXVSPUQ8EUMNtl-p8wbtJMyJ296DzbBlPETF6fxYXOjSF0~4wj6w__',
    name: 'Sports',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/4830/e096/4290f9c159df4c04b6b3a2d6555eced2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dT-XaQ01U3-81IFJFq-4Y36JV9pzYvGZNv0UrMKZpO4MxyUy9Zcwb1JBjUW5BO-ZbcfFDW25n~TXvwHXfK3wx2xWaYv0kVnA-WcaD7XrhEBl9g8ogxQJOUOqS5dW1m6ISt8-cb5KWOOFF5RpxdYgPAmN0hb8IJYVjGEUKAANhDWfrZIVreB9fZXuChapFXX42frvQ~MUd1~JtOG5FwbI6sXQ4h5pbqnnlMycmPnxr9FoHa0baXPkYjjehzZvPZbwh~7Hw5IN04FI7XGGM7Vqiide~baJ1GQyj2Jq1LYIouon9iThQkIWtKrc5hXX5SnoNzIawnJVEYtB91xnCi~ANw__',
    name: 'Music',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__',
    name: 'Religion',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__',
    name: 'Fashion',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__',
    name: 'Entertainment',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/6791/0011/d500b8400d4148c7f8e44bcec72eff24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipIRZAf5hZMREXbUfLU2F2hVuaLRSlWIrpRVlDLC4vib907CGQbnFHCR~RyqYgZxhu1usx-l4Tk5NQN1vZLREiKNifxdlK-Qy2ltF~TrTkcoz6E1CPpsufZb44xGk55y17oiQViAmY39qFb7grTJcg8eF0VDb7ZwL5NHxirxV4el70x9yh0A8IzyyQglHK5X9dKQchlnIjf0UvCSLgfkLgJ6Nm9stbsKLzwYx5TSP1Q80e624H-v7GDGZs1nEjgEoHH7jTJRYPJAulc7Lap7KEZSn9jgfMXi4JEHVtHXa5GDeCt9-sYkBBvXBFWx3nvTXH9ROepqg3qkrzYSYt9xbg__',
    name: 'Business and Networking',   
},

];

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      spaceBetween={10}
      slidesPerView={2}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
       loop={true}
       pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Navigation, Parallax, Mousewheel]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
       
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
        className="px-[40px] overflow-hidden max-w-xs lg:max-w-6xl"
      >
         <div className="custom-next swiper-button-next text-white"></div>
         <div className="custom-prev swiper-button-prev text-white"></div>
        {categories?.map((data, index) => (
          <SwiperSlide onClick={async () => {          
            await dispatch(updateActiveCategory({
              categoryName: data?.category_name,
              id: data.id
            }))
            router.push(`/category/${data.category_name}`)
          }} key={index} className="flex justify-center cursor-pointer">
            <div className='relative block '>
      <div className="absolute bottom-2 w-full text-center z-10">
      <p className='text-[14px] lg:text-[18px] font-bold text-white'>{data.category_name}</p>
    </div>
      <div  className='hidden lg:block'  style={{ position: 'relative', width: '100%', height: '400px',  }}>
       <Image
      src={`https://sub.passpro.africa/storage/${data.image}`}
      fill
     className=' object-cover rounded-[12px] '
     alt='image'
    />
  </div>  

  <div  className='block lg:hidden'  style={{ position: 'relative', width: '100%', height: '200px',  }}>
       <Image
      src={`https://sub.passpro.africa/storage/${data.image}`}
      fill
     className=' object-cover rounded-[5px] '
     alt='image'
    />
  </div>  
      </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}
