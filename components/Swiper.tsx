"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function SwiperComponent() {
  const swiperData = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/3dca/679e/f338651a2973d34696b19fc9b349c029?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-vrxwiGKR6-3srpbm5x-veVOxY80gw6b0cxulEUhEG3AONPbKveFhAINyx~6-k~9RBHBj3EZczG7EplviZMhFzhnOzk59G2MkUX6SW6nXhTJcO0ERrlMTZwDpE8nn1IsT0QiTzHz1DXDGxqLEimIK1Ar9AtOP~t3EXCWld5Cr2uixFKnC0RbbdtVC-Z8GtHAMgEIqFU17vaZu1QyXMpkfn3mLWWrdvSCAZwRr2Jdd6TxN8OX~QDaZKIHE2j9Rj0IP77DDxVjat1evMZxucD5LMIeB~W~eF3fOYaM8JB-uABuQgfbNtZ6UmiX4dI8FV5pKmgR0-YH9kJyT81FeRSfw__',
        name: 'Music',   
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/e261/ba21/edaefbda9b69b677a84171c088b3b539?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUH~rZce0Xz~YG4vOXHo5mlgd-CNveMRcG6aQZoHGbuoN9LWyikjIAVyal5dcLbLmkajfuQ9GId2GBBGFBo10fI0aLkjqwb6VJMZaAwQ1IJ0Wa3xFhAQaCQC6TjIKwdzTYqLI~w8lYqjvAvpGpKpqy1XKUoV2fNRW9mLawaHg31vl0NCi0PdnXRYh2UiFssWDSlgtRG2Yz91rXTp9-wmaP9gKX-tDOBErpzi3RZxm1vZrsWmzESmOKNPTrLFNcN-eD5vvE6xjB~WX1LkNgvGScf-sB6QMLl-5lwbBysEcdtZhny~fIu~UbGVG5nRvLJlZe8DUQQ1XkQgiWcS21Lbpg__',
    name: 'Sports',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/ddca/d826/38f8a0f1a4c20612866704427d78f9af?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6LgFQeLR8X8pdXvHPCukCPhhjlCMpOYmxJ2EEU-MDsXgnIPf~sMUzQm1PVbSeWS25ey3oM9Us3A3l0REY8vTwbCZyGFb6BHGUZsn-Q7ckoFR0~PduPzUfe2waIw0Mx7g3mmd03edOjw4UmCEmGUtsYQV4-DKRWpzeDPeNGTIFTI986VUuJMAYxFmFH6nMNZFUMB-qUJI18Too2nYW2zIJ3kLbmoR8dD99NUJdI8xCeC5HgTOQ6Epupox1TB4FuAs08dJeKQBRVMB2S3BX59F7Vs7-cFIgsD9GMFS3lzza8eXcLxE9Dntl0y5twKtpwb6yp0DFIWAvNEuocqzO4nRg__',
    name: 'Party',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/92a3/48f5/0c46f6c3e13f7d3122c672c299ea825a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qh7qCNqv2jnf0Axa3~wIjEQ-4B4XsE5K7H4nTpu4DvrVJWGulpBF-Hn2mFZY6taCbpgIhM4lZFGx9VBr0SZbU3UokLNQ3pUSzDvxaeEPUOyADzaJ6~sk4XAeHTvIagHx9iy1zEdNYLMvA6eLwVtCoOIJ~GAyaYaxnjkocqfG0m~mL1b~SfhgO5u3LsekV6aFxU6AehSD5bfABaA1~mCB9Tn5sOLrwSiyk2qHVk6~mtU8xkSuV-TCXY8AVdfCkIp2TSxEmznRYzwUDuB5IDOFwnXV6n3zBcJ1CYbDlHuEF0ovGHqTkE~tc-wHZBVPWmtHYTb~Aa5xNyHngfv0qxUbOg__',
    name: 'Religion',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/4226/d13d/fb7894e5389c9ece8bc5166d0486ec21?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-kSjOti5i4~XHoA-AbvDiTly-YiL-xbDFiS1bytPlqYshVh5EtJ-f4tOLYSMb69w-AYkTpGiKy149vo9ktQvsnywwuGfGKdgxJE4w21zAcdub6qbH2MCX-h8rrMSwsqh8DhG-hO-fltx-M0okiY1yvv1XUPocQQSrQLpD8~SxJ-OTNFEc-c4~tvKxeV5VJ0YtW7aYUghZ8-5Vwft5nr7Txr~atTGgpw6SxAzQ2bKUroOXVQ-ZxOHbk~vDlhYcRB4X1fy1BT5APvKS~ubuE34TGcz0aISNeupQqX5N~iOzlQWDARQLejidJBykFZXhXmuEe9R3zRXZOeoqMyV5NRfg__',
    name: 'Fashion',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/dd59/1e03/4da42f6fb1ac8dc91b5436c37a9e873e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TokzfAmEqTSXReQtrXDbXLCIIBelFCeqRgrkEC1x1V0IaImyArRHDxtGf8li88C2Y9do3zXN6m09GRYP8tDl8ElOv2tX8lBjxANVHf~QSUjQ4T-ybNI7dXHFLFzNQdqmyrS~J7JhBjfQXyOU2j9BNzMYDPbApZKc3~OLgdZF6yd53mu0ywzS9Kx41R1XuZAE0-pxCCDHB8ETw6UMTkw5UwRdsFmJdDgkZmnEsH4G1PfRuBxqUXwM8-kCgMNkJlnHjUhf1jrS0n-YiYt8YYpseEr9XNB7m3Ac1lIcOjGdIbDrxx7BMhhcdmXDbPC63S7qX9WAJ50mqXTxCcQVLagTZQ__',
    name: 'Entertainment',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/efee/50a9/4a3b14e2fbce75c9dd98e80bb504616d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBki1JEQKtYiGs5mIFpS4NUM19vSSNo8z5JZ-fMPVS20UpXB9QG4GU54bbYxxztqfoXD8vWklZvO-m7768Y-eH18VfgMBhdePuyZ667YOy9R9MUT2EjyMUmzTsE9EQiLXRAcXt8nqbV9YHslH-fysdhdd37UKJWqcc5lbJ2orRQYI3RGdWvmzvOwtMuWNJ7k6XuEa1QFnDBzZCC5Zxp3GAqlP6ibGUK8pyc8ZVyGSlgcwSIZhqPbqekUocvrUYDBFT5xyvfNX8LiICUBJDWpp0lRLVEBwfS~FA70hMA6GKRE8k8sAVS217Au7vuRTdVUBZIw3e9L8KGKsQw8r3Ulag__',
    name: 'Business and Networking',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/3dca/679e/f338651a2973d34696b19fc9b349c029?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-vrxwiGKR6-3srpbm5x-veVOxY80gw6b0cxulEUhEG3AONPbKveFhAINyx~6-k~9RBHBj3EZczG7EplviZMhFzhnOzk59G2MkUX6SW6nXhTJcO0ERrlMTZwDpE8nn1IsT0QiTzHz1DXDGxqLEimIK1Ar9AtOP~t3EXCWld5Cr2uixFKnC0RbbdtVC-Z8GtHAMgEIqFU17vaZu1QyXMpkfn3mLWWrdvSCAZwRr2Jdd6TxN8OX~QDaZKIHE2j9Rj0IP77DDxVjat1evMZxucD5LMIeB~W~eF3fOYaM8JB-uABuQgfbNtZ6UmiX4dI8FV5pKmgR0-YH9kJyT81FeRSfw__',
    name: 'Music',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/3dca/679e/f338651a2973d34696b19fc9b349c029?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-vrxwiGKR6-3srpbm5x-veVOxY80gw6b0cxulEUhEG3AONPbKveFhAINyx~6-k~9RBHBj3EZczG7EplviZMhFzhnOzk59G2MkUX6SW6nXhTJcO0ERrlMTZwDpE8nn1IsT0QiTzHz1DXDGxqLEimIK1Ar9AtOP~t3EXCWld5Cr2uixFKnC0RbbdtVC-Z8GtHAMgEIqFU17vaZu1QyXMpkfn3mLWWrdvSCAZwRr2Jdd6TxN8OX~QDaZKIHE2j9Rj0IP77DDxVjat1evMZxucD5LMIeB~W~eF3fOYaM8JB-uABuQgfbNtZ6UmiX4dI8FV5pKmgR0-YH9kJyT81FeRSfw__',
    name: 'Music',   
},
{
    image: 'https://s3-alpha-sig.figma.com/img/3dca/679e/f338651a2973d34696b19fc9b349c029?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i-vrxwiGKR6-3srpbm5x-veVOxY80gw6b0cxulEUhEG3AONPbKveFhAINyx~6-k~9RBHBj3EZczG7EplviZMhFzhnOzk59G2MkUX6SW6nXhTJcO0ERrlMTZwDpE8nn1IsT0QiTzHz1DXDGxqLEimIK1Ar9AtOP~t3EXCWld5Cr2uixFKnC0RbbdtVC-Z8GtHAMgEIqFU17vaZu1QyXMpkfn3mLWWrdvSCAZwRr2Jdd6TxN8OX~QDaZKIHE2j9Rj0IP77DDxVjat1evMZxucD5LMIeB~W~eF3fOYaM8JB-uABuQgfbNtZ6UmiX4dI8FV5pKmgR0-YH9kJyT81FeRSfw__',
    name: 'Music',   
},
];

  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={2}
    // navigation ={true}
    loop={true}
    modules={[Pagination, Navigation]}
   

    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
      className="px-[40px] overflow-hidden max-w-sm lg:max-w-5xl"
    >
      {swiperData.map((data, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className=" bg-[#F8F8F8] flex flex-col items-center justify-center h-[300px] w-[300px] space-y-5 rounded-[10px] px-[50px] py-[20px] shadow-md">
            <Image 
              src={data.image}
              height={100}
              width={100}
              alt={data.name}
              className="h-[100px] w-[100px]"
            />
            <p className="font-medium text-[24px] text-center">{data.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
