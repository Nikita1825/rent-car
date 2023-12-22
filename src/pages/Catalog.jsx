import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../redux/operations';
import { CarList } from 'components/CarList/carList';
import { FilterForm } from 'components/Filter/FilterForm';
import css from '../components/CarItem/car.module.css';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  });
  return (
    <div className={css.catalog}>
      <FilterForm />
      <CarList />
    </div>
  );
};
export default Catalog;
