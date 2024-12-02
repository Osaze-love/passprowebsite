import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state
// interface Ticket {
//   id: number;
//   ticket_quantity: number;
// }

interface PaymentInfoState {
  tickets: any[];
  first_name: string;
  last_name: string;
  email: string;
  confirm_email: string;
  phone_number: string;
  send_to_different_email: boolean;
  attendee_first_name: string;
  attendee_last_name: string;
  attendee_email: string;
  attendee_confirm_email: string;
  ticketEmail: string;
}

// Initial state
const initialState: PaymentInfoState = {
  tickets: [],
  first_name: "",
  last_name: "",
  email: "",
  confirm_email: "",
  phone_number: "",
  send_to_different_email: false,
  attendee_first_name: "",
  attendee_last_name: "",
  attendee_email: "",
  attendee_confirm_email: "",
  ticketEmail: "",
};

// Redux slice
export const paymentInfoslice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateTickets: (state, action: PayloadAction<any[]>) => {
      state.tickets = action.payload;
    },
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.last_name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateConfirmEmail: (state, action: PayloadAction<string>) => {
      state.confirm_email = action.payload;
    },
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload;
    },
    toggleSendToDifferentEmail: (state, action: PayloadAction<boolean>) => {
      state.send_to_different_email = action.payload;
    },
    updateAttendeeFirstName: (state, action: PayloadAction<string>) => {
      state.attendee_first_name = action.payload;
    },
    updateAttendeeLastName: (state, action: PayloadAction<string>) => {
      state.attendee_last_name = action.payload;
    },
    updateAttendeeEmail: (state, action: PayloadAction<string>) => {
      state.attendee_email = action.payload;
    },
    updateAttendeeConfirmEmail: (state, action: PayloadAction<string>) => {
      state.attendee_confirm_email = action.payload;
    },
    revertState: (state) => {
      return {
        ...state,
        tickets: [],
        first_name: "",
        last_name: "",
        email: "",
        confirm_email: "",
        phone_number: "",
        send_to_different_email: false,
        attendee_first_name: "",
        attendee_last_name: "",
        attendee_email: "",
        attendee_confirm_email: "",
      };
    },
    updateTicketEmail: (state, action: PayloadAction<string>) => {
      state.ticketEmail = action.payload;
    },
  },
});

// Export the actions
export const {
  updateTickets,
  updateFirstName,
  updateLastName,
  updateEmail,
  updateConfirmEmail,
  updatePhoneNumber,
  toggleSendToDifferentEmail,
  updateAttendeeFirstName,
  updateAttendeeLastName,
  updateAttendeeEmail,
  updateAttendeeConfirmEmail,
  revertState,
  updateTicketEmail
} = paymentInfoslice.actions;

// Export the reducer
export default paymentInfoslice.reducer;
