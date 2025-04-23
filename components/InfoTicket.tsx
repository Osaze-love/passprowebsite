"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName,
  updateLastName,
  updateEmail,
  updateConfirmEmail,
  updatePhoneNumber,
  toggleSendToDifferentEmail,
  updateAttendeeFirstName,
  updateAttendeeLastName,
  updateAttendeeEmail,
  updateAttendeeConfirmEmail } from "@/redux/slices/paymentInfoslice";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import FadeLoader from "react-spinners/FadeLoader";
import { toast } from "@/hooks/use-toast";


const InfoTicket = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { first_name, last_name, email, confirm_email, phone_number, attendee_first_name, attendee_last_name, attendee_email, attendee_confirm_email, send_to_different_email, tickets } = useSelector((state: RootState) => state.payment);
  const { makePayment,loading, makeFreePayment } = useFetch();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [showDifferentAddressFields, setShowDifferentAddressFields] = useState(
    "No"
  );

  useEffect(() => {
    const sendToDifferentEmail = showDifferentAddressFields === "Yes";
    dispatch(toggleSendToDifferentEmail(sendToDifferentEmail));
  },[showDifferentAddressFields])

  const calculateCharge = (price: number, transfersFeesToGuest: number) => {
    if (price === 0 || transfersFeesToGuest === 0) return 0; // No charge for free tickets or if fee transfer is disabled
    return parseFloat((price * 0.04 + 100).toFixed(2));
  };

  const calculateTotal = () => {
    const total = tickets.reduce((sum, ticket) => {
      const charge = calculateCharge(ticket.ticket_price, ticket.transfers_fees_to_guest);
      const adjustedPrice = ticket.ticket_price + charge;
  
      return sum + adjustedPrice * ticket.ticket_quantity;
    }, 0);
  
    return total.toFixed(2);
  };
  

  const handleSubmit = () => {
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
  };

 

  return (
    <div className="px-[20px] py-[31px]">
         {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
     
        <FadeLoader color="#FC6435" />
       
    </div> 
  )}
      <div className="flex items-center justify-between mb-[42px]">
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/viewTicket.svg"
            width={20}
            height={20}
            alt="image"
          />
          <p>Tickets</p>
        </div>
        <hr className="flex-grow border-t border-[#FC6435] mx-4" />
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/profileredIcon.svg"
            width={20}
            height={20}
            alt="image"
          />
          <p className="text-[#FC6435]">Contact</p>
        </div>
      </div>
      <div>
        <p className="text-[#343434] text-[20px] font-semibold mb-[26px]">
          Contact Information
        </p>
      </div>
      {/* <div className="bg-[#FFD8C8] text-[14px] flex items-center w-full justify-center">
        <p className="p-[16px] text-center">
          We’ve reserved your ticket. Please complete checkout within 09:46 to
          secure your tickets.
        </p>
      </div> */}
      <div className="space-y-[20px] mt-[24px]">
        {/* Regular Fields */}
        <div className="space-y-[11px]">
          <Label className="text-[#343434] text-[14px]">
            First Name <span className="text-[#FC6435]">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter First Name"
            className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
            onChange={(e) => dispatch(updateFirstName(e.target.value))}
          />
        </div>
        <div className="space-y-[11px]">
          <Label className="text-[#343434] text-[14px]">
            Last Name <span className="text-[#FC6435]">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter Last Name"
            className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
            onChange={(e) => dispatch(updateLastName(e.target.value))}
          />
        </div>
        <div className="space-y-[11px]">
          <Label className="text-[#343434] text-[14px]">
            Email <span className="text-[#FC6435]">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Enter A Valid Email Address"
            className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </div>
        <div className="space-y-[11px]">
          <Label className="text-[#343434] text-[14px]">
            Confirm Email <span className="text-[#FC6435]">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Confirm Email Address"
            className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
            onChange={(e) => dispatch(updateConfirmEmail(e.target.value))}
          />
        </div>
        <div className="space-y-[11px]">
          <Label className="text-[#343434] text-[14px]">
            Phone Number <span className="text-[#FC6435]">*</span>
          </Label>
          <div className="flex space-x-2">
            {/* Country Code Selector */}
            <Select
              onValueChange={(value) => setSelectedCountryCode(value)}
              defaultValue={selectedCountryCode}
            
            >
              <SelectTrigger className="w-[100px] focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Code" className="text-[#8F8F8F]"/>
              </SelectTrigger>
              <SelectContent className="text-[#8F8F8F]">
                <SelectGroup>
                  <SelectLabel>Country Code</SelectLabel>
                  <SelectItem value="+234">+234</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  {/* Add more options as needed */}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* Input for Phone Number */}
            <Input
              type="text"
              maxLength={11}
              placeholder="Enter Phone Number"
              className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
              onChange={(e) => {
                dispatch(updatePhoneNumber(`${selectedCountryCode}${e.target.value}`));
              }}
            />
          </div>
        </div>
        {/* Radio Fields */}
        <div className="space-y-[15px]">
          <p className="text-[#343434] font-semibold">
            Send ticket to different addresses?
          </p>
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
            }}          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" />
              <Label className="text-[12px]">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" />
              <Label className="text-[12px]">No</Label>
            </div>
          </RadioGroup>
        </div>
        {/* Conditional Fields */}
        {showDifferentAddressFields === "Yes" && (
          <>
            <div className="space-y-[11px]">
              <Label className="text-[#343434] text-[14px]">
                First Name <span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter First Name"
                className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
                onChange={(e) => dispatch(updateAttendeeFirstName(e.target.value))}
              />
            </div>
            <div className="space-y-[11px]">
              <Label className="text-[#343434] text-[14px]">
                Last Name <span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter Last Name"
                className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
                onChange={(e) => dispatch(updateAttendeeLastName(e.target.value))}
              />
            </div>
            <div className="space-y-[11px]">
              <Label className="text-[#343434] text-[14px]">
                Email <span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter Email"
                className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
                onChange={(e) => dispatch(updateAttendeeEmail(e.target.value))}
              />
            </div>
            <div className="space-y-[11px]">
              <Label className="text-[#343434] text-[14px]">
                Confirm Email Address <span className="text-[#FC6435]">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Confirm Email Address"
                className="placeholder:text-[12px] text-[12px] placeholder:text-[#8F8F8F]"
                onChange={(e) => dispatch(updateAttendeeConfirmEmail(e.target.value))}
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-center">
        <Button
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
          variant="outline"
          className={`px-6 py-[19px] font-bold w-full ${
            !first_name ||
            !last_name ||
            !email ||
            !confirm_email ||
            !phone_number ||
            (send_to_different_email &&
              (!attendee_first_name || !attendee_last_name || !attendee_email || !attendee_confirm_email))
              ? 'bg-gray-300 text-gray-500'
              : 'bg-[#FC6435] hover:bg-[#fc6435] text-white hover:text-white'
          }`}
          onClick={handleSubmit}
        >
          Buy Ticket
        </Button>
        </div>
       
      </div>
    </div>
  );
};

export default InfoTicket;
