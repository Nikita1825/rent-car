import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

import { Label, Select, Form, Options } from './Filter.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Form>
      <Label>
        Car brand
        <Select name="brand" onChange={onFilterChange}>
          <Options value="">Enter the text</Options>
          <Options value="Buick">Buick</Options>
          <Options value="Volvo">Volvo</Options>
          <Options value="HUMMER">HUMMER</Options>
          <Options value="Subaru">Subaru</Options>
          <Options value="Mitsubishi">Mitsubishi</Options>
          <Options value="Nissan">Nissan</Options>
          <Options value="Lincoln">Lincoln</Options>
          <Options value="GMC">GMC</Options>
          <Options value="Hyundai">Hyundai</Options>
          <Options value="MINI">MINI</Options>
          <Options value="Bentley">Bentley</Options>
          <Options value="Mercedes-Benz">Mercedes-Benz</Options>
          <Options value="Aston Martin">Aston Martin</Options>
          <Options value="Pontiac">Pontiac</Options>
          <Options value="Lamborghini">Lamborghini</Options>
          <Options value="Audi">Audi</Options>
          <Options value="BMW">BMW</Options>
          <Options value="Chevrolet">Chevrolet</Options>
          <Options value="Chrysler">Chrysler</Options>
          <Options value="Kia">Kia</Options>
          <Options value="Land">Land</Options>
        </Select>
      </Label>
    </Form>
  );
};
