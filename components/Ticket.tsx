"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'


const Ticket = () => {
    const [selectedValue, setSelectedValue] = useState("0"); // Default to "0"
    const [selectedCountryCode, setSelectedCountryCode] = useState("+234"); 
    const [showDifferentAddressFields, setShowDifferentAddressFields] = useState('No'); // New state for additional fields
    const [isChoosingTickets, setIsChoosingTickets] = useState(true); // Tracks current section

    const router = useRouter();
  const dispatch = useDispatch();
  const { eventBook } = useSelector((state: RootState) => state.event);
 
  const calculateCharge = (price: number) => parseFloat((price * 0.04 + 100).toFixed(2));

  // Track selected tickets
  const [selectedTickets, setSelectedTickets] = useState<{
    id: number;
    ticket_quantity: number;
    ticket_price: number;
    ticket_category: string;
  }[]>([]);

  // Handle ticket selection
  const handleSelect = (id: number, quantity: number, price: number, category: string) => {
    // Ensure price is parsed as a number
    const cleanPrice = parseFloat(price.toString().replace(/\.00$/, ""));
    
    setSelectedTickets((prev) => {
      if (quantity === 0) {
        // Remove the ticket if quantity is 0
        return prev.filter((item) => item.id !== id);
      }
  
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        // Update ticket details
        return prev.map((item) =>
          item.id === id
            ? { ...item, ticket_quantity: quantity, ticket_price: cleanPrice, ticket_category: category }
            : item
        );
      }
  
      // Add a new ticket
      return [...prev, { id, ticket_quantity: quantity, ticket_price: cleanPrice, ticket_category: category }];
    });
  };

  const calculateTotal = () => {
    const total = selectedTickets.reduce((sum, ticket) => {
      const charge = calculateCharge(ticket.ticket_price);
      const adjustedPrice = ticket.ticket_price + charge;
      return sum + adjustedPrice * ticket.ticket_quantity;
    }, 0);
  
    // Return the total formatted to two decimal places
    return total.toFixed(2);
  };

  useEffect(() => {
    console.log(selectedTickets);

  },[selectedTickets])

    return (
    <div className='grid grid-cols-2 items-center px-[40px] py-[51px] gap-[63px]'>
      <section>
        <div className='flex items-center justify-between mb-[42px]'>
           <div className='flex space-x-2 items-center'>
            <Image src='/icons/TicketIcon.svg' width={34} height={34} alt='image'/>
            <p>Tickets</p>
           </div>
           <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

           <div className='flex space-x-2 items-center'>
           <Image src='/icons/ContactIcon.svg' width={34} height={34} alt='image'/>
           <p>Contact</p>
           </div>
        </div>
        {isChoosingTickets ?  <div>
            <p className='text-[#343434] text-[24px] font-semibold mb-[26px]'>Choose Tickets</p>
            
            <div className='space-y-[40px]'>
            {eventBook?.tickets?.map((ticket: any) => {
            // Check ticket stock and determine maxQuantity
            const maxQuantity =
              ticket.ticket_stock === "Limited Stock"
                ? Math.min(ticket.ticket_purchase_limit, ticket.ticket_quantity)
                : ticket.ticket_purchase_limit;

                const charge = calculateCharge(ticket.ticket_price);
            const adjustedPrice = ticket.ticket_price + charge;

            return (
              <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]" key={ticket.id}>
                <div className="space-y-[15px]">
                  <p className="text-[#343434] text-[20px] font-semibold">{ticket.ticket_name}</p>
                  <p className="text-[#606060] ">
                    <span className="font-bold text-[#FC6435]">                      ₦{ticket.ticket_price} + ₦{charge}
                    </span> 
                  </p>
                  <p className="text-[#343434] font-normal">{ticket.ticket_category}</p>
                </div>
                <Select
                  value={selectedTickets.find((item) => item.id === ticket.id)?.ticket_quantity.toString() || "0"}
                  onValueChange={(value) =>
                    handleSelect(ticket.id, parseInt(value), ticket.ticket_price, ticket.ticket_category)
                  }
                   >
                  <SelectTrigger className="w-[100px] h-[40px] px-[17px] py-[15px] focus:ring-0 focus:ring-offset-0">
                  <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {[...Array(maxQuantity + 1)].map((_, index) => (
                        <SelectItem value={index.toString()} key={index}>
                          {index}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            );
          })}
            
            </div>
        </div> : 
          
        <div className='space-y-[30px]'>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>First Name <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Last Name <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Enter Last Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Confirm Email <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Confirm Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Phone Number <span className='text-[#FC6435]'>*</span></Label>
        <div className='flex items-center space-x-2'>
        <Select value={selectedCountryCode} onValueChange={(value) => setSelectedCountryCode(value)} >
        <SelectTrigger className="w-[74px] px-[7px] py-[14px] focus:ring-0 focus:ring-offset-0 text-[#8F8F8F] border-[#D9D9D9]">
    <SelectValue  />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="+234">+234</SelectItem>
     

    </SelectGroup>
  </SelectContent>
</Select>
<Input type='text' placeholder='Enter Phone Number' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '/>
        </div>
        
        </div>
       <div className='space-y-[15px]'>
        <p className='text-[20px] text-[#343434] font-semibold'>Send ticket to different addresses ?</p>
        <div className='flex items-center space-x-[11px]'>
          <Image src={'/icons/infoIcon.svg'} width={25} height={25} alt='image'/>
          <p className='text-[#8F8F8F]'>Tickets will only be sent to the email address you provide here</p>         
        </div>
        <RadioGroup 
        value={showDifferentAddressFields}
         onValueChange={(value) => setShowDifferentAddressFields(value)}
        className='flex items-center space-x-[22px]'>
     <div className="flex items-center space-x-2">
    <RadioGroupItem className='text-[#FC6435] border-transparent border-black' value="Yes" />
    <Label className='text-[12px]'>Yes</Label>
      </div>
 
    <div className="flex items-center space-x-2">
    <RadioGroupItem className='text-[#FC6435] border-transparent border-black' value="No" />
    <Label className='text-[12px]'>No</Label>
      </div>
    </RadioGroup>
       </div>
       {showDifferentAddressFields === 'Yes' && (
        <>
          <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>First Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
          </div>
          <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' />
          </div>
        </>
      )}
    </div>
        }

       
      </section>
      <section className='border rounded-[8px] px-[40px] py-[50px]'>
        <p className='font-semibold text-[32px] text-center text-[#164473]'>Reserve A Seat</p>
         
         <div className='space-y-[14px] py-[38px]'>
         {selectedTickets.map((ticket) => {
            const charge = calculateCharge(ticket.ticket_price);
            const adjustedPrice = ticket.ticket_price + charge;

            return (
              <div
                key={ticket.id}
                className="flex items-center justify-between border border-[#D9D9D9] rounded-[4px] px-[20px] py-[20px]"
              >
                <div>
                  <p className="text-[20px] text-[#343434] font-semibold w-3/4">
                    {eventBook?.event_name}
                  </p>
                  <p className="text-[#8F8F8F]">
                    {ticket.ticket_quantity} x {ticket.ticket_category}
                  </p>
                </div>
                <p className="font-semibold">₦{adjustedPrice * ticket.ticket_quantity}</p>
              </div>
            );
          })}
          <div className="flex items-center justify-between py-[22px]">
            <p className="text-[24px] text-[#343434] font-semibold">Total</p>
            <p className="text-[24px] text-[#343434]">{`₦${calculateTotal()}`}</p>
          </div>
        </div>
        <div className='flex items-center justify-center w-full'>
         <Button variant="outline" className="hover:bg-[#FC6435]  w-3/4 my-[48px] font-medium bg-[#FC6435] text-white py-[25px] hover:text-white active:scale-90 transition-all border-none text-[20px]" onClick={() => {
          setIsChoosingTickets(!isChoosingTickets);
         }}>
         {isChoosingTickets ? "Continue" : "Buy Ticket"}            </Button>
         </div>
      </section>
    </div>
  )
}

export default Ticket
