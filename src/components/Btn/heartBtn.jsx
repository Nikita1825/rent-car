import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorites, addFavorites } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';
import { BtnHeart, FillHeart, StrokeHeart } from './heartBtn.styled';

export const HeartBtn = ({ advert }) => {
  const dispatch = useDispatch();
  const favoriteAdvert = useSelector(selectFavorites);
  const isFavorites = favoriteAdvert.favorites.some(
    favorite => favorite.id === advert.id
  );
  const toggleFavorites = () => {
    if (isFavorites) {
      dispatch(removeFavorites(advert));
    } else {
      dispatch(addFavorites(advert));
    }
  };
  return (
    <div>
      <BtnHeart onClick={toggleFavorites}>
        {isFavorites ? <FillHeart size={18} /> : <StrokeHeart size={20} />}
      </BtnHeart>
    </div>
  );
};
