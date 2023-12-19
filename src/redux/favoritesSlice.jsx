import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
        const index = state.favorites.findIndex(
          advert => advert.id === action.payload
        );
        state.favorites.splice(index, 1);
    },
  },
});
export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const favoriteReduser = favoriteSlice.reducer;
