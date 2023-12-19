import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';

import {CarItem} from '../components/carItem.jsx'
import css from '../components/car.module.css';

const Favorite = () => {
  const favoriteCars = useSelector(selectFavorites);
  
  return (
    <div>
      {favoriteCars.favorites.length ? (
      
        <ul className={css.carList}>
          {favoriteCars.favorites.map(favorite => (
            <CarItem key={favorite.id} advert={favorite} />
          ))}
        </ul>
      ) : (
        <div>
          <h1>Your favorites are currently empty...</h1>
        </div>
      )}
    </div>
  );
};
export default Favorite;
