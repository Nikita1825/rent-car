import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const $instance = axios.create({
   baseURL: 'https://6576f5c3197926adf62cdf02.mockapi.io',
   
 });



export const fetchAdverts = createAsyncThunk('adverts/fetch', async (count, thunkAPI) => {
  try {
    
   
    const { data } = await $instance.get(`/advert`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
