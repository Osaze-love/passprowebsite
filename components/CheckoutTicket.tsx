"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTickets } from "@/redux/slices/paymentInfoslice";

const CheckoutTicket = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { eventBook } = useSelector((state: RootState) => state.event);

  // Track selected tickets

  const [selectedTickets, setSelectedTickets] = useState<{ id: number; ticket_quantity: number }[]>([]);

  // Handle ticket selection
  const handleSelect = (id: number, quantity: number) => {
    setSelectedTickets((prev) => {
      if (quantity === 0) {
        // Remove the item if quantity is 0
        return prev.filter((item) => item.id !== id);
      }
  
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        // Update the quantity if the item exists
        return prev.map((item) =>
          item.id === id ? { ...item, ticket_quantity: quantity } : item
        );
      }
  
      // Add a new item if it doesn't exist
      return [...prev, { id, ticket_quantity: quantity }];
    });
    
  };

  
  // Handle Continue button click
  const handleContinue = () => {
    dispatch(updateTickets(selectedTickets));
    router.push("/info");
  };

  return (
    <div className="px-[20px] py-[31px]">
      <div className="flex items-center justify-between mb-[42px]">
        <p className="text-[20px] text-[#606060] font-medium">Checkout</p>
        <Image
          onClick={() => {
            router.push("/booking");
          }}
          src="/icons/closeIcon.svg"
          width={14}
          height={14}
          alt="image"
        />
      </div>
      <div className="flex items-center justify-between mb-[42px]">
        <div className="flex space-x-2 items-center">
          <Image src="/icons/TicketIcon.svg" width={20} height={20} alt="image" />
          <p className="text-[#FC6435]">Tickets</p>
        </div>
        <hr className="flex-grow border-t border-[#FC6435] mx-4" />
        <div className="flex space-x-2 items-center">
          <Image src="/icons/across.svg" width={20} height={20} alt="image" />
          <p>Contact</p>
        </div>
      </div>
      <div>
        <p className="text-[#343434] text-[20px] font-semibold mb-[26px]">Choose Tickets</p>
        <div className="space-y-[10px]">
          {eventBook?.tickets?.map((ticket: any) => {
            // Check ticket stock and determine maxQuantity
            const maxQuantity =
              ticket.ticket_stock === "Limited Stock"
                ? Math.min(ticket.ticket_purchase_limit, ticket.ticket_quantity)
                : ticket.ticket_purchase_limit;

            return (
              <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]" key={ticket.id}>
                <div className="space-y-[15px]">
                  <p className="text-[#343434] font-semibold">{ticket.ticket_name}</p>
                  <p className="text-[#606060] text-[14px]">
                    <span className="font-bold text-[#FC6435]">{ticket.ticket_price}</span> + #850 fee
                  </p>
                  <p className="text-[#343434] font-normal text-[14px]">{ticket.ticket_category}</p>
                </div>
                <Select
                  value={selectedTickets.find((item) => item.id === ticket.id)?.ticket_quantity.toString() || "0"}
                  onValueChange={(value) => handleSelect(ticket.id, parseInt(value))}
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
          <div className="flex items-center justify-between bg-[#FC6435] p-[12px] rounded-[10px]">
            <p className="text-[20px] text-white">Buy Ticket</p>
            <Button
              variant="outline"
              className="bg-white w-max flex lg:hidden justify-center hover:bg-white text-[#FC6435] font-medium px-[15px] py-[7px] active:scale-90 transition-all hover:text-[#FC6435]"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTicket;
