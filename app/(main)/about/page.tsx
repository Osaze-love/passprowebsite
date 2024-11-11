import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
         <Navbar textColor='text-black' bgColor='bg-[#FFF4F0]'/>

       <section
            className="h-[50vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#FFF4F0] to-[#ffffff]"
          >
          
          <p className="font-extrabold text-center  text-[50px] w-3/4 text-[#343434]">Explore, Discover, and Book Your Next Event with Ease</p>
          <p className="text-[26px] text-[#606060] text-center w-3/4">
          PassPro is more than just ticketing, events can get better with PassPro
          </p>
          

          </section>
          <section className='grid grid-cols-5 py-[40px] items-center gap-[20px]'>
           <div className='col-span-2 px-[50px]'>
           <div className=' flex flex-col  justify-center items-center mb-[40px]'>
                <p className="text-[40px] font-bold text-[#343434]">What <span className='text-[#fc6435]'>Sets Us</span> Apart</p>
                <div className='items-center w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] '></div>
            </div>
            <p className='text-[#585757CC] w-3/4'>Our platform is designed with you in mind, offering a host of features that streamline the event ticketing process. Every feature is built to make discovering and booking events easier, faster, and more secure.</p>
           </div>
           <div className='col-span-3 px-[50px]'>
            <div className='flex items-center space-x-[49px]'>
             <div className='space-y-[51px] relative -top-10'>
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
                <div className='p-[30px] h-[300px]  shadow-sm bg-[#FFF4F0] w-full mx-auto rounded-[32px] flex flex-col items-center space-y-3'>
                    <Image src={'/images/ticketlogo.svg'} width={40} height={40} alt='logo'/>
                    <p className='font-bold text-[#222222]'>Customizable Tickets</p>
                    <p className='text-[14px] text-center text-[#585757CC]'>Our platform allows you to easily choose your preferred seating, ticket types, and any custom options available for specific events.. </p>
                </div>
             </div>
            </div>
           </div>
           
          </section>

          <section className='bg-[#164473] rounded-[16px] mx-[40px] grid grid-cols-6 gap-[10px] items-center text-white p-[40px] my-[40px]'>
          <div className='col-span-4 text-[20px]'>
          At PassPro, event ticketing meets simplicity and security. Launched in [Year], our platform is designed to transform the way you discover and attend events. Whether you’re booking tickets for concerts, conferences, sports events, or festivals, Passpro makes it easy for you to explore, select, and secure your spot at your favorite experiences.
          </div>
          <div className='col-span-2 flex items-center justify-center w-full'>
          <Button variant="outline" className=' font-medium bg-none text-white px-[56px] py-[18.5px] bg-transparent h-[60px] hover:bg-transparent hover:text-white active:scale-90 transition-all '>
        Get Started
      </Button>
          </div>
          </section>

          <section className='bg-[#FFF1EC] rounded-[48px] h-[400px] grid grid-cols-2 items-center mx-[40px] my-[200px]'>
          <Image
          src={'https://s3-alpha-sig.figma.com/img/b941/2f56/54d4fcfbede8da126f72fd29a33cc709?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJuOeLCmMdTkRj4KvTqQrhX6mOd8BV1azS00qgZkdu7Re3S-bkiCPY~Mb23AsuoSLRfG5N5Ug4HcBil-WoDdo~kiu77~u78Qxi4Q4gz1ixpeAlaHqjxLNHfaWd7~hONwnh~~93HOM9Zu8APi-SevzF-TuNDcfTGpz8KTxY~IW6WSjAPKJnc7EpqDgGNwIbP~qXL6C3j35QP8HZqYquu2U1W-3mz8VcvTa0B4qoPQV4UmRYFq4EDOUo9aVKRHk-KEaJWYoPlyg5loEmu6DM9tRFGXfx3QXtS-Z91dQ73MVV96EVxkWWTGaAf96sWByQponEovy3EeLy-IgxszQUM~RQ__'}
          alt="image"
          width={500}
          height={500}
          className="rounded-[64px] transform -rotate-[8.46deg] h-[400px] object-cover"
        />
          <div>
            <div>
            <div className='flex flex-col items-start mb-[40px]'>
      <p className="text-[40px] font-bold text-[#343434]">
    What <span className='text-[#fc6435]'>Sets Us</span> Apart
  </p>
  <div className='w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mt-1'></div>
</div>
      <p className='text-[#585757CC] w-3/4 text-[20px]'>We believe in providing a seamless, secure, and transparent experience for both event-goers and organizers. Our values reflect our commitment to making ticketing effortless, building trust with our users, and fostering a vibrant community of shared experiences.</p>
            </div>
          
          </div>
          </section>

          <section className='bg-[#FFF1EC] flex flex-col items-center w-full'>
          <div className="space-y-1 mb-4">
        <p className="text-[40px] font-bold text-[#343434] pt-[40px]">
          Meet <span className="text-[#FC6435]">The</span> Team
        </p>
        <div className="w-[114px] h-[5px] rounded-[5px] bg-[#FC6435] mx-auto"></div>
      </div>
      <div className='grid grid-cols-5 gap-[40px] p-[40px]'>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/82eb/6069/fa68144f5d544ddb1f06791c80b26e7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRwmd8PoKOwqGuk1twlHXk80xG~Hhux7E4KaDd3SFsH60Uz2eSK29E6ooXA-b09sK9GTU0vOcQ4RHswbZD8Z2b7TqTnguruNiQbpwQeKbFDr76~JX9mG18vSf7P6CniYo~NNf1I26zlLJT1ivNmJK-qgKEpfq2rMfYFKxZzQtU2I9gvnTByWU89JBR8pa15GxttotzQJ~Sf5L49ofgVQUuCoIG4xA4U5v21chUCUNBhISKU990IZZpQ-xhizTpNAOVo9qbGGn~CP8AUwp7tZFbd1yCvrJ03EakpWQG7FSzC8Vb1Xakbw4gd-DlFJIzCqxqAJG5KaeBzOSB9MEmu6XA__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/7b09/11f8/cb12839d28ef80377203b448c00d1792?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAaLzWziXNkk30KmsA5wTVMVVf3GKPDjtRZvAPi1QhAwvw7qMFk8exfBtNwII1GfHxxGCCOblQ1MB6a3OwPq5IChAknESEXxKe31VXpVkFTACv7klxNfIvRmE7l1dx2jEzKhd5Dap9ysTBURRVBPfKMr1JDPdoLFmw0dYEigeHTiAWUV6IqfPzQK8tDLz4vyBKx7jtuJHg7DHlqQAJS7xI8aBqZstvQTyp9DzFSbGWp1rQXNhMW-xDZKiAjifnE-45esRFg3RxIrqgqj1i~4MCOADY4ziLUr7YWyYGAbhojJImgEbbZVSiMxkun6PNBtUFv5jz3wMP-FIUfxIx7Ouw__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/05b2/88dd/2383b71fe7de5b4276a4155e4530b677?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPnEgVsj7J8-BZzjz9TDWVCJxsWAgJ95M7Pfky1wCq1RZt3~rbGLbTZkkWTCSc3~I1rPEDUOMvis4fctfOHkPkHfFh5nGljC8WDwj0K8maype4OIafjwxrba2yhPjrsPli7X1nVC3ROn~uX88Lbh62u~QO-nay76e3OYZNV6jDBYYo1X3m-Dw9c6TZsGobWWgcXbZxmZ6qBKCZ~8X8PwXcBKh8mIehLK6UXiB1qVVibJd~TG2Aev1Ln8-5IcU4zEZrjKNR7Xn49gfaK1O2UKgNYSU8gcnoyQoRnV4v0UY2o7N0e1E7PGJIFgb6BALHG49rZkHAfqjcAscQNqAzbotw__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/5011/4c02/e21b3ac914b3eeb68cad5f393b4d6478?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHSaVsT3YZfKcQo6C3ruSSPw0IJbjn0eViXBZFQGrrwWVSMqzEy-hKl4aWQ-JyFyIHr6iPIhmXapYsyyuy3P5wPdZKyboMBiWPDoOkdX5BHbiDz5nD4INHdS5GfJt9FywBUJaehuNtwuB9ZoKhk4N2rRboQkxKK3yw0qeuiTFkzd8oEkR7Q7XQQb2t8sAKjhYk~5hpsSE3syMpj0qfUNoTSsHhmK1652P-juv030UldHnXQbFGO7tmHKDkIM6h5AfeH-nNse-N41cR8OW6ZaNDNmAJhFVpm9IrwQqw76bGVesbN8-chT3vBz-LYmAI9V3lKUYjM1PaS6T4PBV42IHg__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/82eb/6069/fa68144f5d544ddb1f06791c80b26e7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRwmd8PoKOwqGuk1twlHXk80xG~Hhux7E4KaDd3SFsH60Uz2eSK29E6ooXA-b09sK9GTU0vOcQ4RHswbZD8Z2b7TqTnguruNiQbpwQeKbFDr76~JX9mG18vSf7P6CniYo~NNf1I26zlLJT1ivNmJK-qgKEpfq2rMfYFKxZzQtU2I9gvnTByWU89JBR8pa15GxttotzQJ~Sf5L49ofgVQUuCoIG4xA4U5v21chUCUNBhISKU990IZZpQ-xhizTpNAOVo9qbGGn~CP8AUwp7tZFbd1yCvrJ03EakpWQG7FSzC8Vb1Xakbw4gd-DlFJIzCqxqAJG5KaeBzOSB9MEmu6XA__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/82eb/6069/fa68144f5d544ddb1f06791c80b26e7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRwmd8PoKOwqGuk1twlHXk80xG~Hhux7E4KaDd3SFsH60Uz2eSK29E6ooXA-b09sK9GTU0vOcQ4RHswbZD8Z2b7TqTnguruNiQbpwQeKbFDr76~JX9mG18vSf7P6CniYo~NNf1I26zlLJT1ivNmJK-qgKEpfq2rMfYFKxZzQtU2I9gvnTByWU89JBR8pa15GxttotzQJ~Sf5L49ofgVQUuCoIG4xA4U5v21chUCUNBhISKU990IZZpQ-xhizTpNAOVo9qbGGn~CP8AUwp7tZFbd1yCvrJ03EakpWQG7FSzC8Vb1Xakbw4gd-DlFJIzCqxqAJG5KaeBzOSB9MEmu6XA__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/82eb/6069/fa68144f5d544ddb1f06791c80b26e7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRwmd8PoKOwqGuk1twlHXk80xG~Hhux7E4KaDd3SFsH60Uz2eSK29E6ooXA-b09sK9GTU0vOcQ4RHswbZD8Z2b7TqTnguruNiQbpwQeKbFDr76~JX9mG18vSf7P6CniYo~NNf1I26zlLJT1ivNmJK-qgKEpfq2rMfYFKxZzQtU2I9gvnTByWU89JBR8pa15GxttotzQJ~Sf5L49ofgVQUuCoIG4xA4U5v21chUCUNBhISKU990IZZpQ-xhizTpNAOVo9qbGGn~CP8AUwp7tZFbd1yCvrJ03EakpWQG7FSzC8Vb1Xakbw4gd-DlFJIzCqxqAJG5KaeBzOSB9MEmu6XA__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
       <div className='flex flex-col items-center'>
        <Image src={'https://s3-alpha-sig.figma.com/img/82eb/6069/fa68144f5d544ddb1f06791c80b26e7d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mRwmd8PoKOwqGuk1twlHXk80xG~Hhux7E4KaDd3SFsH60Uz2eSK29E6ooXA-b09sK9GTU0vOcQ4RHswbZD8Z2b7TqTnguruNiQbpwQeKbFDr76~JX9mG18vSf7P6CniYo~NNf1I26zlLJT1ivNmJK-qgKEpfq2rMfYFKxZzQtU2I9gvnTByWU89JBR8pa15GxttotzQJ~Sf5L49ofgVQUuCoIG4xA4U5v21chUCUNBhISKU990IZZpQ-xhizTpNAOVo9qbGGn~CP8AUwp7tZFbd1yCvrJ03EakpWQG7FSzC8Vb1Xakbw4gd-DlFJIzCqxqAJG5KaeBzOSB9MEmu6XA__'} height={150} width={150} alt='meet' className='h-[150px] object-cover rounded-[8px] mb-[20px]'/>
        <p className='text-center text-[20px] font-semibold'>Taiwo Hammed</p>
        <p className='text-[#8F8F8F] text-[14px]'>Founder/CEO</p>
       </div>
      </div>
          </section>

          <section       
                style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/bannerImage2.jpeg')`, // Adjust opacity in rgba
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className='my-[140px] h-[90vh] mx-[40px] rounded-[20px]'>
                 <div className="flex w-full h-full flex-col items-center justify-center space-y-[30px] text-center">
         
          <p className="font-extrabold text-[white] text-[60px] w-3/4">Explore, Discover, and Book Your Next Event with Ease</p>
          <p className="text-[20px] text-white w-2/4">
          With [Your Platform Name], booking tickets to your favorite events has never been easier. From concerts to conferences, we connect you to the experiences you love with just a few clicks. Ready to find your next event?
          </p>
            <Button variant="outline" className="hover:bg-[#FC6435] font-medium bg-[#FC6435] text-white px-[56px] h-[70px] py-[18.5px] hover:text-white active:scale-90 transition-all border-none">
              Sign Up Now
            </Button>
          
        </div>
          </section>
    </div>
  )
}

export default About
