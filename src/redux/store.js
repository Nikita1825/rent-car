import { configureStore } from '@reduxjs/toolkit';
import { AdvertsReducer } from './carSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    adverts: AdvertsReducer,
    filter: filterReducer
  },
});
