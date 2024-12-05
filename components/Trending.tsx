import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Trending = () => {
   const trendingData = [
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/ceb2/f3d7/c12da14ecd30e97708a025e15cc4ba7a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0wwGTh1ip3bHrdElLU~fh9aeVbWAO965j~javh17nPMIgF2HODhod5r02fusDbUr44lFQhySydxasv~srAuGNL8tWg0TssseGg5XqYHRuaDKhzeHj~ad2hpNb1sfpvcZHCPd90Ui7rrYEtbWSs02rW9tRTIhfZjuOgC6-5NcfUBgMQ~yYpjg5oWxwEkMIRUJCLacWUKUXGI8TDnk6BHRcm52DUgFQTb4iXoKbmXcrUhm~6QnNQgjlLOyoYx83ey44i-LE2T2JHkJNEduYtyyOEywYjy7-41-21XnzsFtY5bwzqJ59ndq7gXZ9a5NToOTYnNe8x-wF4qHuE6oxOwTQ__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/8dde/172b/17a8d522c10b01c5432aff1ce8044b7c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmTeoliUJkDjKnqt1k3aU2Q778H8~mFqa9NaP-PX4WTNtSkxQspF2PlPRSG7yro466Cnl~dstVcUti95H09-lPmorD4s813UCXIVxc5~dRKBWBxVhrgz8ZL52aosClx7jO-ZSBueOXwC2s~fWjcQ7MHR9rlz2vc2FQnNHsvjnabdG9oRciHIx5wun8ih1A3MRkrfLNll7AnuD~kymSB37G5gMnSCT~GuRpwvlfxZqJ854jFVoMGMkG0EreWaZeMxsH2MVWa4vI1aO~2yyOc7iVTalKhgt93~IJ8C5XemSldG-Yu7a1~h8e9oN7P9proZXD8yL8~0g8XRsnePiLSBpg__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/81c8/e151/02298710c50606d36b956b81dc5d8936?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPWlaNHpkFnWM~eSXlFxv8ZgFPRDu4YnZnEWGSAyPsjLPmYziN0zb5d1q1x0L8Oe5pOZwxu7Pzyt59HhG64ZL9vbv~uOBGgxSu7w7NE34Ye6Uri9dUv75O0fhGONLyD-wcVqR-c8puSiPzGVYxQKWknu~a55wAtY-1Cyx-g3Uvcx9JkYHApQZzDws8WMrjqA8tD~dxFuJazmifX9gXYINFxyruoqa9FjAWMx3S5oRt-Oso~hybiCRLIzubpIxxfRJPaTjhMURDtI0DZOW4n1GLp7nXBCBlt7f~OHM-0Xn5VNcSi-YUKWlUwUglpKrQhQ9fX5e6EL2y2XzAIsL3M4nQ__'

        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/f1f8/b37c/210c5d0b73f88a53c1ea907aa70d8361?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4AbjjQBkTdNPzrbw0QvyCJ0SNhhEoIWhTFiBlhXUxEXvj1MfqHgGy5r5fZPzdc-4XJLs0fzO3mVHJBkkhLsGvIfjWmtm6MJlY7P0MWvPeLmO5j2L~bqS0~z1fInBwd0hCzr7CCTMWEGGn33y8-oYTHA~6tnaP6TJtYtRF0S~ztxkKXSsSmHmfMTeYoHK~wOAmhETIr2C6nT9oOkpROJRKlkB6fpDC~ibgvzUeiIppLstKU3TM74-PcEmvBC8iN~CnoQiaAF2jhM0YdZOfvnVmwZaFDsX7TIvV3rbbcX9hp9Bf7d3-cv4yP7mLNSNwz0bL0hlmpL~evxkzryxw5vXQ__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGHRBwHTYP8YsNLt-vvNP4TNwoWvrEalWTR0qlhxIoj5d29EhghlQMmNDP83-W2dPVurzn4CLVW73CrIOKcQdKMUPl-aJ74sL6wYnxxRJOgfgo30xPxrdOPXcQzVNo40Z4YQVw0IRtlieg~8ZdiZ1ob10ktaxFT3tbfvmcXVS6cyQdhq8phxePXXbccXwHAlMN-EMZPE2zwzbnskFIdoG17F8kXwe4gMWSyjH-hyhkXJRkfpJgEp0INGXNeNrqlDWCVxPX5eZXHkPgRZaSDuA2NNvJ3ZdpZJk3E-ecnTDQDwdunyvXUrvq5B4QyejBVmcQlhA~ReNeddSODP2gixMQ__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGHRBwHTYP8YsNLt-vvNP4TNwoWvrEalWTR0qlhxIoj5d29EhghlQMmNDP83-W2dPVurzn4CLVW73CrIOKcQdKMUPl-aJ74sL6wYnxxRJOgfgo30xPxrdOPXcQzVNo40Z4YQVw0IRtlieg~8ZdiZ1ob10ktaxFT3tbfvmcXVS6cyQdhq8phxePXXbccXwHAlMN-EMZPE2zwzbnskFIdoG17F8kXwe4gMWSyjH-hyhkXJRkfpJgEp0INGXNeNrqlDWCVxPX5eZXHkPgRZaSDuA2NNvJ3ZdpZJk3E-ecnTDQDwdunyvXUrvq5B4QyejBVmcQlhA~ReNeddSODP2gixMQ__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/51dd/569c/e7db5fc3e7822486d942e03e5de614c1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMJ38dtxIMdjHefHZkHcXBN-BYzPcaRb23GAXC-nJQMVm57s7d~5xFg4E6XaODr9z~SYtVO6q1EwtIA5qmjnJwoRDJP0Vxq3FTG1WpWoTbUy1ucgiqVBrYyBCFO0AMBsO3GS7KOikV8gHyLxqAjE7sO1KMQyhYH~-bZAHstP1eYNfEXTXCeDySTzF64ymx14D5rRu4rLTLqDDXQGvcMH0cvjwIwVuTTnXhWbeX~nHuk3nCGN1tcBDBe8NRxiwn3Z308LRizuFRv5KPA34Pq-QBUkQLBxXuZ6i3sN3r6-k5pvJPx0bf9039WfiS4VA998YlMgWegMeISuqKp1DQkBBQ__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/8c9d/f614/f23d4f00eb464823230a635879bbaecf?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGHRBwHTYP8YsNLt-vvNP4TNwoWvrEalWTR0qlhxIoj5d29EhghlQMmNDP83-W2dPVurzn4CLVW73CrIOKcQdKMUPl-aJ74sL6wYnxxRJOgfgo30xPxrdOPXcQzVNo40Z4YQVw0IRtlieg~8ZdiZ1ob10ktaxFT3tbfvmcXVS6cyQdhq8phxePXXbccXwHAlMN-EMZPE2zwzbnskFIdoG17F8kXwe4gMWSyjH-hyhkXJRkfpJgEp0INGXNeNrqlDWCVxPX5eZXHkPgRZaSDuA2NNvJ3ZdpZJk3E-ecnTDQDwdunyvXUrvq5B4QyejBVmcQlhA~ReNeddSODP2gixMQ__'
        },
    ]
  return (
    <div className="flex items-center flex-col w-full">
    
      <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] '>
        {trendingData.map((feature: any) => (
        <div className='shadown-sm flex lg:flex-col items-center p-[7px] lg:p-0 border rounded-[10px]'>
            <div className='hidden lg:block' style={{ position: 'relative', width: '270px', height: '270px',  }}>
  <Image
    src={feature.image}
    fill
    className='object-cover rounded-t-[10px]'
    alt='image'
  />
</div>     
<div className='block lg:hidden' style={{ position: 'relative', width: '120px', height: '120px',  }}>
  <Image
    src={feature.image}
    fill
    className='object-cover rounded-[10px]'
    alt='image'
  />
</div>
            <div className='p-[20px] space-y-[12px] '>
            <p className='font-bold text-[14px] lg:text-[20px]'>
  {feature?.event_name?.length > 14 
    ? feature.event_name.slice(0, 18) + '...' 
    : feature?.event_name}
</p>
            <div className='flex items-center gap-3'>
                <Image className='hidden lg:block' src={'/icons/calendarDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <Image className='block lg:hidden' src={'/icons/calendarDark.svg'} width={11} height={11} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature.date}</p>
            </div>
            <div className='flex items-center gap-3'>
                <Image className='hidden lg:block' src={'/icons/locationDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <Image className='block lg:hidden' src={'/icons/locationDark.svg'} width={11} height={11} alt='calendarIcon'/>
                <p className='text-[12px] lg:text-[14px]'>{feature.location}</p>
            </div>
            <div className='flex items-center justify-between'>
            <p className='text-[14px] lg:text-[16px] text-[#FC6435] font-semibold'>
  {feature?.price === '0.00' || feature?.price === '0'
    ? 'Free'
    : `₦${new Intl.NumberFormat('en-NG').format(parseFloat(feature?.price))}`}
</p>
                <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white p-[8px] lg:p-[15px] hover:text-white active:scale-90 transition-all border-none text-[12px] lg:text-[14px]">
              Book Ticket
            </Button>
            </div>
            </div>
        </div>
         
        ))}
      </section>
    </div>
  )
}

export default Trending
