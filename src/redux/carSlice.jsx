import { createSlice } from '@reduxjs/toolkit'
import { fetchAdverts } from './operations';


const AdvertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
   
  },
 
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.totalLimit = action.payload.length < state.limit;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { clearItems, incPage } = AdvertsSlice.actions;
export const AdvertsReducer = AdvertsSlice.reducer;