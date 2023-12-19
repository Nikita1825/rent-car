import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../redux/operations';
import { CarList } from 'components/carList';
import { FilterForm } from 'components/FilterForm';



const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  });
  return (
    <div>
      <h1>catalog</h1>
      <FilterForm  />
      <CarList />
    </div>
  );
};
export default Catalog;
