import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 const $instance = axios.create({
   baseURL: 'https://6576f5c3197926adf62cdf02.mockapi.io',
   
 });
//  const $instance = axios.create({
//    baseURL: ' https://6544c4cb5a0b4b04436cf141.mockapi.io',
  
//  });
export const fetchAdverts = createAsyncThunk('adverts/fetch', async (_, thunkAPI) => {
  try {
    const { data } = await $instance.get('/advert');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});