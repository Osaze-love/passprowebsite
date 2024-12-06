"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({
  textColor,
  bgColor,
  bgMobile,
}: {
  textColor: string;
  bgColor?: string;
  bgMobile?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const activeStyles = `text-[#FC6435] border-b-2 border-[#FC6435] rounded-none hover:bg-transparent hover:text-[#FC6435]`;
  const activeMobileStyles = `text-[#FC6435] font-semibold`; // Active style for mobile
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Our Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
   
  };
  useEffect(() => {
    if (open) {
      // Disable scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
    {bgColor === 'bg-[#164473]' ? <div
        className={`flex items-center z-20 justify-between px-[20px] py-[34px] lg:px-[50px] lg:py-[34px] sticky top-0 bg-white lg:bg-[#164473]`}
      > 
       <div className="block lg:hidden">
          {bgMobile === "bg-white" ? (
            <div style={{ position: 'relative', width: '150px', height: '35px',   }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            alt="passprologo"
            className="object-cover cursor-pointer"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
           
          ) : (
            <div style={{ position: 'relative', width: '200px', height: '35px',  }}>
            <Image
            src={"/images/passprologowhite.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          )}
        </div>
        <div className="hidden lg:block">
          {textColor === "text-white" ? (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologowhite.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          ) : (
            <div style={{ position: 'relative', width: '200px', height: '35px',  }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          )}
        </div>
        
        <div
          className={`hidden lg:flex items-center space-x-[4px] xl:space-x-[20px] ${textColor}`}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => router.push(item.path)}
              className={`${
                item.path === "/"
                  ? pathname === item.path
                    ? activeStyles
                    : `hover:bg-transparent hover:${textColor}`
                  : pathname?.includes(item.path)
                  ? activeStyles
                  : `hover:bg-transparent hover:${textColor}`
              } font-medium`}
            >
              {item.name}
            </Button>
          ))}
         <a
  href="https://verify.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="bg-[#FC6435] hover:bg-[#FC6435] text-white font-medium px-[40px] xl:px-[56px] py-[18.5px] active:scale-90 transition-all border-none hover:text-white"
  >
    Verify Ticket
  </Button>
</a>

        </div>
        <div className="lg:hidden">
          <Image
            src={
              bgMobile === "bg-black"
                ? "/icons/hamburgerwhite.svg"
                : "/icons/navbarIcon.svg"
            }
            height={22}
            width={25}
            alt="hamburger icon"
            className="cursor-pointer transition-all active:scale-95"
            onClick={toggleMenu}
          />
        </div>
      </div> :  
      bgColor === 'bg-[#f6ece9]' ? <div
        className={`flex items-center z-20 justify-between px-[20px] py-[34px] lg:px-[50px] lg:py-[34px] sticky top-0 bg-[#f6ece9]`}
      > 
       <div className="block lg:hidden">
       <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
           
        
        </div>
        <div className="hidden lg:block">
          {textColor === "text-white" ? (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologowhite.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          ) : (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          )}
        </div>
        
        <div
          className={`hidden lg:flex items-center space-x-[4px] xl:space-x-[20px] ${textColor}`}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => router.push(item.path)}
              className={`${
                item.path === "/"
                  ? pathname === item.path
                    ? activeStyles
                    : `hover:bg-transparent hover:${textColor}`
                  : pathname?.includes(item.path)
                  ? activeStyles
                  : `hover:bg-transparent hover:${textColor}`
              } font-medium`}
            >
              {item.name}
            </Button>
          ))}
         <a
  href="https://verify.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="bg-[#FC6435] hover:bg-[#FC6435] text-white font-medium px-[40px] xl:px-[56px] py-[18.5px] active:scale-90 transition-all border-none hover:text-white"
  >
    Verify Ticket
  </Button>
</a>

        </div>
        <div className="lg:hidden">
          <Image
            src={
              bgMobile === "bg-black"
                ? "/icons/hamburgerwhite.svg"
                : "/icons/navbarIcon.svg"
            }
            height={22}
            width={25}
            alt="hamburger icon"
            className="cursor-pointer transition-all active:scale-95"
            onClick={toggleMenu}
          />
        </div>
      </div>
      :
    
    <div
        className={`flex items-center z-20 justify-between px-[20px] py-[40px] lg:px-[50px] lg:py-[34px] sticky top-0 ${bgColor}`}
      > 
       <div className="block lg:hidden">
          {bgMobile === "bg-white" ? (
             <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
             <Image
             src={"/images/passprologo.svg"}
             fill
             className="object-cover cursor-pointer"
             alt="passprologo"
             onClick={() => {
               router.push('/')
             }}
           />
            </div>
           
          ) : (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologowhite.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          )}
        </div>
        <div className="hidden lg:block">
          {textColor === "text-white" ? (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologowhite.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          ) : (
            <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
          )}
        </div>
        
        <div
          className={`hidden lg:flex items-center space-x-[4px] xl:space-x-[20px] ${textColor}`}
        >
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => router.push(item.path)}
              className={`${
                item.path === "/"
                  ? pathname === item.path
                    ? activeStyles
                    : `hover:bg-transparent hover:${textColor}`
                  : pathname?.includes(item.path)
                  ? activeStyles
                  : `hover:bg-transparent hover:${textColor}`
              } font-medium`}
            >
              {item.name}
            </Button>
          ))}
           <a
  href="https://verify.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="bg-[#FC6435] hover:bg-[#FC6435] text-white font-medium px-[40px] xl:px-[56px] py-[18.5px] active:scale-90 transition-all border-none hover:text-white"
  >
    Verify Ticket
  </Button>
</a>

        </div>
        <div className="lg:hidden">
          <Image
            src={
              bgMobile === "bg-black"
                ? "/icons/hamburgerwhite.svg"
                : "/icons/navbarIcon.svg"
            }
            height={22}
            width={25}
            alt="hamburger icon"
            className="cursor-pointer transition-all active:scale-95"
            onClick={toggleMenu}
          />
        </div>
      </div>
    }
      

      {/* Mobile Navigation */}
      {open && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center overflow-y-auto scrollbar-hide py-[40px]`}
        >
          <div className="flex items-center justify-between p-[40px] w-full">
          <div style={{ position: 'relative', width: '150px', height: '35px',  }}>
            <Image
            src={"/images/passprologo.svg"}
            fill
            className="object-cover cursor-pointer"
            alt="passprologo"
            onClick={() => {
              router.push('/')
            }}
          />
           </div>
            <Image
              src={"/icons/closeIcon.svg"}
              width={21}
              height={21}
              alt="close icon"
              onClick={toggleMenu}
              className="cursor-pointer transition-all active:scale-95"

            />
          </div>
          <div className="w-full px-[40px] space-y-[23px] overflow-y-auto scrollbar-hide">
            {navItems.map((item) => (
              <p
                key={item.name}
                onClick={async() => {
                  await router.push(item.path);
                  toggleMenu();
                }}
                className={`py-[21px] px-[14px] cursor-pointer border-b border-[#D9D9D9] ${
                  pathname === item.path ? activeMobileStyles : "text-[#343434]"
                }`}
              >
                {item.name}
              </p>
            ))}
           <a
  href="https://verify.passpro.africa/"
  target="_blank"
  rel="noopener noreferrer"
  className=""
>
  <Button
    variant="outline"
    className="bg-[#FC6435] mt-[23px] hover:bg-[#FC6435] text-white font-medium w-full py-[18.5px] active:scale-90 transition-all border-none hover:text-white"
  >
    Verify Ticket
  </Button>
</a>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
