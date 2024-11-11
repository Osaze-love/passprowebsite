"use client";
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = ({ textColor, bgColor }: { textColor: string, bgColor?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const activeStyles = `text-[#FC6435] border-b-2 border-[#FC6435] rounded-none hover:bg-transparent hover:text-[#fc6435]`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Explore', path: '/explore' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <div className={`flex items-center z-50 justify-between px-[50px] py-[34px]  sticky top-0 ${bgColor}`}>
      <div>
        {textColor === 'text-white'? <Image src={'/images/passprologowhite.svg'} width={240} height={56} alt="passprologo" /> : <Image src={'/images/passprologo.svg'} width={240} height={56} alt="passprologo" />}
        
      </div>
      <div className={`flex items-center space-x-[20px] ${textColor}`}>
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            onClick={() => router.push(item.path)}
            className={`${
              item.path === '/' ? (pathname === item.path ? activeStyles : `hover:bg-transparent hover:${textColor}`) :
              pathname?.includes(item.path) ? activeStyles : `hover:bg-transparent hover:${textColor}`
            } font-medium`}
          >
            {item.name}
          </Button>
        ))}
        <Button
          variant="outline"
          className="bg-[#FC6435] hover:bg-[#FC6435] text-white font-medium px-[56px] py-[18.5px] active:scale-90 transition-all border-none hover:text-white"
        >
          Create Event
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
