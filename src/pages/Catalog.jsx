import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { fetchCar } from 'redux/operations';
import { fetchAdverts } from '../redux/operations';
import { CarList } from 'components/carList';



const Catalog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdverts());
  })
  return (
    <div>
      <h1>catalog</h1>
      <CarList/>
    </div>
  );
};
export default Catalog;
