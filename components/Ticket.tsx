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
  } from "@/components/ui/select";
  import { updateFirstName,
    updateLastName,
    updateEmail,
    updateConfirmEmail,
    updatePhoneNumber,
    toggleSendToDifferentEmail,
    updateAttendeeFirstName,
    updateAttendeeLastName,
    updateAttendeeEmail,
    updateAttendeeConfirmEmail, 
    updateTickets,
    revertState} from "@/redux/slices/paymentInfoslice";
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import useFetch from '@/hooks/useFetch';
import FadeLoader from 'react-spinners/FadeLoader';
import { toast } from '@/hooks/use-toast';


const Ticket = () => {
  const { first_name, last_name, email, confirm_email, phone_number, attendee_first_name, attendee_last_name, attendee_email, attendee_confirm_email, send_to_different_email, tickets } = useSelector((state: RootState) => state.payment);
  const { makePayment, loading, makeFreePayment } = useFetch();
    const [selectedValue, setSelectedValue] = useState("0"); // Default to "0"
    const [selectedCountryCode, setSelectedCountryCode] = useState("+234"); 
    const [showDifferentAddressFields, setShowDifferentAddressFields] = useState('No'); // New state for additional fields
    const [isChoosingTickets, setIsChoosingTickets] = useState(true); // Tracks current section

    const router = useRouter();
  const dispatch = useDispatch();
  const { eventBook } = useSelector((state: RootState) => state.event);
  const calculateCharge = (price: number, transfersFeesToGuest: number) => {
    if (price === 0 || transfersFeesToGuest === 0) return 0; // No charge for free tickets or if fee transfer is disabled
    return parseFloat((price * 0.04 + 100).toFixed(2));
  };
  useEffect(() => {
    const sendToDifferentEmail = showDifferentAddressFields === "Yes";
    dispatch(toggleSendToDifferentEmail(sendToDifferentEmail));
  },[showDifferentAddressFields])

  // Track selected tickets
  const [selectedTickets, setSelectedTickets] = useState<{
    id: number;
    ticket_name: string;
    ticket_quantity: number;
    ticket_price: number;
    ticket_category: string;
    transfers_fees_to_guest: number;
  }[]>([]);

  // Handle ticket selection
  const handleSelect = (id: number, quantity: number, price: number, category: string, name: string, transfersFeesToGuest: number) => {
    const cleanPrice = parseFloat(price.toString().replace(/\.00$/, ""));
  
    setSelectedTickets((prev) => {
      if (quantity === 0) {
        return prev.filter((item) => item.id !== id);
      }
  
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                ticket_quantity: quantity,
                ticket_price: cleanPrice,
                ticket_category: category,
                transfers_fees_to_guest: transfersFeesToGuest,
              }
            : item
        );
      }
  
      return [
        ...prev,
        {
          id,
          ticket_quantity: quantity,
          ticket_price: cleanPrice,
          ticket_category: category,
          ticket_name: name,
          transfers_fees_to_guest: transfersFeesToGuest,
        },
      ];
    });
  };
  

  const calculateTotal = () => {
    const total = selectedTickets.reduce((sum, ticket) => {
        const charge = calculateCharge(ticket.ticket_price, ticket.transfers_fees_to_guest);
        const adjustedPrice = ticket.ticket_price + charge;
        return sum + adjustedPrice * ticket.ticket_quantity;
    }, 0);

    const value = total.toFixed(2);
    return `${new Intl.NumberFormat('en-NG').format(parseFloat(value))}`;
};

  

    return (
    <div className='grid grid-cols-2 items-start px-[40px] py-[51px] gap-[63px]'>
            {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <FadeLoader color="#FC6435" />
       
    </div> 
  )}
      <section>
        {isChoosingTickets ? <div className='flex items-center justify-between mb-[42px]'>
           <div className='flex space-x-2 items-center'>
            <Image src='/icons/TicketIcon.svg' width={34} height={34} alt='image'/>
            <p className='text-[#fc6435]'>Tickets</p>
           </div>
           <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

           <div className='flex space-x-2 items-center'>
           <Image src='/icons/across.svg' width={34} height={34} alt='image'/>
           <p>Contact</p>
           </div>
        </div> : 
        <div className='flex items-center justify-between mb-[42px]'>
        <div className='flex space-x-2 items-center'>
         <Image src='/icons/viewTicket.svg' width={34} height={34} alt='image'/>
         <p>Tickets</p>
        </div>
        <hr className="flex-grow border-t border-[#FC6435] mx-4" /> {/* Horizontal line */}

        <div className='flex space-x-2 items-center'>
        <Image src='/icons/profileredIcon.svg' width={34} height={34} alt='image'/>
        <p className='text-[#fc6435]'>Contact</p>
        </div>
     </div>
        }
        
        {isChoosingTickets ?  <div>
            <p className='text-[#343434] text-[24px] font-semibold mb-[26px]'>Choose Tickets</p>
            
            <div className='space-y-[40px]'>
            {eventBook?.tickets?.map((ticket: any) => {
            // Check ticket stock and determine maxQuantity
            const maxQuantity =
              ticket.ticket_stock === "Limited Stock"
                ? Math.min(ticket.ticket_purchase_limit, ticket.ticket_quantity)
                : ticket.ticket_purchase_limit;

                const charge = calculateCharge(ticket.ticket_price, ticket.transfers_fees_to_guest);
            const adjustedPrice = ticket.ticket_price + charge;

            return (
              <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]" key={ticket.id}>
                <div className="space-y-[15px]">
                  <p className="text-[#343434] text-[20px] font-semibold">{ticket.ticket_name}</p>
                  <p className="text-[#606060] ">
                  {ticket.ticket_price === '0.00' ? (
            <span className="font-bold text-[#FC6435]">Free</span>
          ) : (
            <span className="font-bold text-[#FC6435]">
            ₦{new Intl.NumberFormat('en-NG').format(parseFloat(ticket.ticket_price))} <span className="text-[#606060] font-normal">
  + ₦{new Intl.NumberFormat('en-NG').format(charge)} Fee
</span>
            </span>
          )}
                  </p>
                  <p className="text-[#343434] font-normal">{ticket.ticket_description}</p>
                </div>
                <Select
                  value={selectedTickets.find((item) => item.id === ticket.id)?.ticket_quantity.toString() || "0"}
                  onValueChange={(value) =>
                    handleSelect(ticket.id, parseInt(value), ticket.ticket_price, ticket.ticket_category, ticket.ticket_name,             ticket.transfers_fees_to_guest // Pass this here
 
                  )
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
        <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '
        onChange={(e) => dispatch(updateFirstName(e.target.value))}

        />
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Last Name <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Enter Last Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '
         onChange={(e) => dispatch(updateLastName(e.target.value))}

        />
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '
        onChange={(e) => dispatch(updateEmail(e.target.value))}

        />
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Confirm Email <span className='text-[#FC6435]'>*</span></Label>
        <Input type='text' placeholder='Confirm Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '
        onChange={(e) => dispatch(updateConfirmEmail(e.target.value))}

        />
        </div>
        <div className='space-y-[11px]'>
        <Label className='text-[#343434]'>Phone Number <span className='text-[#FC6435]'>*</span></Label>
        <div className='flex items-center space-x-2'>
        <Select onValueChange={(value) => setSelectedCountryCode(value)}
              defaultValue={selectedCountryCode} >
        <SelectTrigger className="w-[74px] px-[7px] py-[14px] focus:ring-0 focus:ring-offset-0 text-[#8F8F8F] border-[#D9D9D9]">
    <SelectValue  />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
    <SelectLabel>Country Code</SelectLabel>
                  <SelectItem value="+234">+234</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
<Input type='text'   maxLength={11}
 placeholder='Enter Phone Number' className='placeholder:text-[#8F8F8F] border-[#D9D9D9]  focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px] '
onChange={(e) => {
  dispatch(updatePhoneNumber(`${selectedCountryCode}${e.target.value}`));
}}
/>
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
      onValueChange={(value) => {
        setShowDifferentAddressFields(value);
        if (value === "No") {
          // Clear all attendee-related states immediately
          dispatch(updateAttendeeFirstName(""));
          dispatch(updateAttendeeLastName(""));
          dispatch(updateAttendeeEmail(""));
          dispatch(updateAttendeeConfirmEmail(""));
        }
      }} 
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
            <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' 
            onChange={(e) => dispatch(updateAttendeeFirstName(e.target.value))}
            />
          </div>
          <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Last Name <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter First Name' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' 
            onChange={(e) => dispatch(updateAttendeeLastName(e.target.value))}
            />
          </div>
          <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Enter A Valid Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' 
             onChange={(e) => dispatch(updateAttendeeEmail(e.target.value))}
            />
          </div>
          <div className='space-y-[11px]'>
            <Label className='text-[#343434]'>Email <span className='text-[#FC6435]'>*</span></Label>
            <Input type='text' placeholder='Confirm Email Address' className='placeholder:text-[#8F8F8F] border-[#D9D9D9] focus-visible:ring-0 focus-visible:ring-offset-0 p-[16px]' 
              onChange={(e) => dispatch(updateAttendeeConfirmEmail(e.target.value))}
            />
          </div>
        </>
      )}
    </div>
        }

       
      </section>
      <section className='border rounded-[8px] px-[40px] py-[50px]'>
        <p className='font-semibold text-[32px] text-center text-[#164473]'>Reserve A Seat</p>

        <p className="text-[20px] mt-[20px] text-[#343434] font-semibold w-3/4">
                    {eventBook?.event_name}
                  </p>
         
         <div className='space-y-[14px] py-[10px]'>
         {selectedTickets.map((ticket) => {
            const charge = calculateCharge(ticket.ticket_price, ticket.transfers_fees_to_guest);
            const adjustedPrice = ticket.ticket_price + charge;

            return (
              <div
                key={ticket.id}
                className="flex items-center justify-between border border-[#D9D9D9] rounded-[4px] px-[20px] py-[20px]"
              >
                <div>
                  <p className="text-[20px] text-[#343434] font-semibold w-4/4">
                    {ticket?.ticket_name}
                  </p>
                  <p className="text-[#8F8F8F]">
                    {ticket.ticket_quantity} x {ticket.ticket_category}
                  </p>
                </div>
                <p className="font-semibold">
  ₦{new Intl.NumberFormat('en-NG').format(adjustedPrice * ticket.ticket_quantity)}
</p>
              </div>
            );
          })}
          <div className="flex items-center justify-between py-[22px]">
            <p className="text-[24px] text-[#343434] font-semibold">Total</p>
            <p className="text-[24px] text-[#343434]">{`₦${calculateTotal()}`}</p>
          </div>
        </div>
        <div className='flex items-center justify-center w-full'>
        {isChoosingTickets ? (
    <Button
      onClick={() => {
        dispatch(revertState())
        setIsChoosingTickets(false) ;   
        dispatch(updateTickets(selectedTickets));
      }

      }
      disabled={selectedTickets.length === 0} // Disable when no tickets are selected
      className={`px-6 py-[19px] text-[18px] font-medium w-[450px] ${selectedTickets.length === 0 ? 'bg-gray-300 text-gray-500' : 'bg-[#FC6435] hover:bg-[#fc6435] text-white'}`} // Disabled styling
    >
      Continue
    </Button>
  ) : (
   <Button
   onClick={() => {
    const total = parseFloat(calculateTotal()); // Convert total to a number
    if (total === 0.00) {
      if (email !== confirm_email) {
        toast({
          description: 'Email Mismatch', // Ensure it's a string
          variant: 'destructive', // Optional, for error styling
        });
        return;
      }
    
      if (send_to_different_email && attendee_email !== attendee_confirm_email) {
        toast({
          description: 'Email Mismatch', // Ensure it's a string
          variant: 'destructive', // Optional, for error styling
        });
        return;
      }
      makeFreePayment();
    } else {
      if (email !== confirm_email) {
        toast({
          description: 'Email Mismatch', // Ensure it's a string
          variant: 'destructive', // Optional, for error styling
        });
                return;
      }
    
      if (send_to_different_email && attendee_email !== attendee_confirm_email) {
        toast({
          description: 'Email Mismatch', // Ensure it's a string
          variant: 'destructive', // Optional, for error styling
        });
                return;
      }
      makePayment();
    }
  }}
  disabled={
    // Check if required fields are filled
    !first_name ||
    !last_name ||
    !email ||
    !confirm_email ||
    !phone_number ||
    (send_to_different_email &&
      (!attendee_first_name || !attendee_last_name || !attendee_email || !attendee_confirm_email))
  }
  className={`px-6 py-[19px] text-[18px] font-medium w-[450px] ${
    !first_name ||
    !last_name ||
    !email ||
    !confirm_email ||
    !phone_number ||
    (send_to_different_email &&
      (!attendee_first_name || !attendee_last_name || !attendee_email || !attendee_confirm_email))
      ? 'bg-gray-300 text-gray-500'
      : 'bg-[#FC6435] hover:bg-[#fc6435] text-white hover:text-white'
  }`} // Disabled styling
>
  Buy Ticket
</Button>
  )}
         </div>
      </section>
    </div>
  )
}

export default Ticket
