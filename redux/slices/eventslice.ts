import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a single user object

const initialState = {
  featuredEvents: [] as any[],
  popularEvents: [] as any[],
  freeEvents: [] as any[],
  eventBook: {} as any,
  allPopularEvents : [] as any[],
  allFreeEvents : [] as any[],
  allFeaturedEvents : [] as any[],
  categories: [] as any[],
};

// Redux slice
export const eventslice = createSlice({
  name: "event",
  initialState,
  reducers: {
    updateFeaturedEvents: (state, action: PayloadAction<any[]>) => {
      state.featuredEvents = action.payload;
    },
    updateAllFeaturedEvents: (state, action: PayloadAction<any[]>) => {
      state.allFeaturedEvents = action.payload;
    },
    updatePopularEvents: (state, action: PayloadAction<any[]>) => {
        state.popularEvents = action.payload;
      },
    updateAllPopularEvents: (state, action: PayloadAction<any[]>) => {
        state.allPopularEvents = action.payload;
      },
    updateFreeEvents: (state, action: PayloadAction<any[]>) => {
        state.freeEvents = action.payload;
      },
      updateAllFreeEvents: (state, action: PayloadAction<any[]>) => {
        state.allFreeEvents = action.payload;
      },
      updateEventBook: (state, action: PayloadAction<any>) => {
        state.eventBook = action.payload;
      },
      updateCategories: (state, action: PayloadAction<any[]>) => {
        state.categories = action.payload;
      },

    
  },
});

// Export the actions
export const {
  updateFeaturedEvents, 
  updateFreeEvents,
  updatePopularEvents,
  updateEventBook,
  updateAllFeaturedEvents,
  updateAllFreeEvents,
  updateAllPopularEvents,
  updateCategories
} = eventslice.actions;

// Export the reducer
export default eventslice.reducer;
