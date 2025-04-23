"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { revertState, updateTickets } from "@/redux/slices/paymentInfoslice";

const CheckoutTicket = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { eventBook } = useSelector((state: RootState) => state.event);
  const { event_name, id } = useSelector((state: RootState) => state.event.eventBook);

  // Track selected tickets
  const calculateCharge = (price: number, transfersFeesToGuest: number) => {
    if (price === 0 || transfersFeesToGuest === 0) return 0; // No charge for free tickets or if fee transfer is disabled
    return parseFloat((price * 0.04 + 100).toFixed(2));
  };

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

  
  // Handle Continue button click
  const handleContinue = () => {
    dispatch(revertState());
    dispatch(updateTickets(selectedTickets));
    router.push("/info");
  };


  return (
    <div className="px-[20px] py-[31px]">
      <div className="flex items-center justify-between mb-[42px]">
        <p className="text-[20px] text-[#606060] font-medium">Checkout</p>
        <Image
          onClick={() => {
            router.push(`/booking/${event_name}/${id}`);
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

              const charge = calculateCharge(ticket.ticket_price, ticket.transfers_fees_to_guest);
          const adjustedPrice = ticket.ticket_price + charge;

            return (
              <div className="flex items-center justify-between border-b border-b-[#D9D9D9] py-[6px]" key={ticket.id}>
                <div className="space-y-[15px]">
                  <p className="text-[#343434] font-semibold">{ticket.ticket_name}</p>
                  <p className="text-[#606060] text-[14px]">
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
                  <p className="text-[#343434] font-normal w-[85%] text-[14px]">{ticket?.ticket_description}</p>
                </div>
                <Select
                   value={selectedTickets.find((item) => item.id === ticket.id)?.ticket_quantity.toString() || "0"}
                   onValueChange={(value) =>
                     handleSelect(ticket.id, parseInt(value), ticket.ticket_price, ticket.ticket_category, ticket.ticket_name,             ticket.transfers_fees_to_guest
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
          <div className="flex items-center justify-between bg-[#FC6435] p-[12px] rounded-[10px]">
            <p className="text-[20px] text-white">Buy Ticket</p>
            <Button
              variant="outline"
              disabled={selectedTickets.length === 0} // Disable when no tickets are selected
              className={`w-max flex justify-center font-medium px-[15px] py-[7px] active:scale-90 transition-all ${
                selectedTickets.length === 0
                  ? 'bg-gray-300 text-gray-500'
                  : 'bg-white hover:bg-white text-[#FC6435] hover:text-[#FC6435]'
              }`}
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
