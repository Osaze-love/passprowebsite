import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  featuredEvents: [] as any[],
  popularEvents: [] as any[],
  freeEvents: [] as any[],
  eventBook: {} as any,
};

// Redux slice
export const eventslice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateFeaturedEvents: (state, action: PayloadAction<any[]>) => {
      state.featuredEvents = action.payload;
    },

    updatePopularEvents: (state, action: PayloadAction<any[]>) => {
        state.popularEvents = action.payload;
      },
    updateFreeEvents: (state, action: PayloadAction<any[]>) => {
        state.freeEvents = action.payload;
      },
      updateEventBook: (state, action: PayloadAction<any[]>) => {
        state.eventBook = action.payload;
      },
    
  },
});

// Export the actions
export const {
  updateFeaturedEvents, 
  updateFreeEvents,
  updatePopularEvents,
  updateEventBook
} = eventslice.actions;

// Export the reducer
export default eventslice.reducer;
