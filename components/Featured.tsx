import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Featured = () => {
   const featureData = [
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/1de3/953f/78d7e40f1dee846f632ea900bb1f2188?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~jefw4J~~WVpx9ehn0MJ9yOLGyemjyxuuGdDMZvSj1sQHX-xzUXsTzaYEj54Exgne8AeXTCsfT1klOC3jV67ryKBUWI39xUdJiGnAhvTNGFYr5w4hJHFFN5wtt60PctbWddWaDAgZ9tuw3LovbIU09jzuS69XOO1EBRGSfi8NYfQjK4eJmiYbpkpIA5e72-PTacKyU05Cx5IEdzbLFJCjac0gWeL-b9rhOH047L2QVp7i-nesDKDvxA1GGuk8DhlXuRfOSCQ1ibqd18AhkVB0C~H-kSm6MtHXLELcJAOcA3XH29fLYgrKR9N5ML8lMyYM7P70F~31xMMZCWre7c3Q__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/8a6f/7f24/5311a16257d2f7bab6520303089821fd?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKuUvtwjV5iy4R4jBODL1Pkgmd2qxCuPEICx9Alz0tg2tlN8r~mv41X-jjbHJV9gwfWfM0rrcjN8ZamROaUDLDjk7HVElY9Bmc98BUezmxXgcD5kRS9BE-8PDLsj6xC8hMFf~HYGUOLXMf2SUNqhnu8gKHIVOYM8cCPiPv0nl6hoZVSXaBIb6UJEDf1~d5VJXwsRkyi2X~Ft9jP6KmGXeZ3dqlLNGEjJ5sEMiajAceGNO4A7TmdFB40uCy36CTjwq6e-MLaBJusWluS7ThXH-B0hhY2zqpbittGSC8fh0NtU--EpLA9Y2ykPW0h5U0PNrpzry~3I8Qg6WItPSyxs~g__'
        },
        {
            name: 'Funny comedy show',
            date: 'Sat Feb 20, 2024',
            location: 'Muson Centre Lagos',
            price: '$30',
            image: 'https://s3-alpha-sig.figma.com/img/6ff8/d81d/cd7dc1e9c828debdada0df6014fabe5a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGQ9aUkACfuIICDow9KCjqEetjAzeL2ILV-1L2RwTOIYTqv82WBncHLiQzjAiQ62fSb7pBCJRy2GZN46ro3MrLAsYDD4cyuufjpeDFXpoEIyBWHIbhKCGGdDX3IkxqXpBq3uLYu1dDUAJ6ONB5vWMYVK4IPGsTcvaR4~uu8A~DS52B7oyIStjZCgkKHXVBrPp8XlFkuDbv0sjvRr5OO51nLvIaxadzJxl0jgJtPM2xUmDexh3SItMDWzAQgk8O5BcjbQaTWUrzfKQSlN1tzI6PhpsVOUEZw1gtOHrIy51p7lX1pXIkHcKw~auLgv7OnL8RvzEkZcR9WPVVqXmT3vyA__'

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
    <div className="flex  items-center flex-col w-full">
    
      <section className='grid grid-cols-4 gap-[20px] '>
        {featureData.map((feature: any) => (
        <div className='shadown-sm border rounded-[10px] bg-white'>
            <div style={{ position: 'relative', width: '270px', height: '270px',  }}>
  <Image
    src={feature.image}
    fill
   className='object-cover rounded-t-[10px]'
   alt='image'
  />
</div>
            <div className='p-[20px] space-y-[13px]'>
            <p className='font-bold text-[20px]'>{feature.name}</p>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/calendarDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[14px]'>{feature.date}</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Image src={'/icons/locationDark.svg'} width={20} height={20} alt='calendarIcon'/>
                <p className='text-[14px]'>{feature.location}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{feature.price}</p>
                <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white p-[15px] hover:text-white active:scale-90 transition-all border-none">
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

export default Featured
