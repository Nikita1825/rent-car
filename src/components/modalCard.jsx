import React from 'react'

import css from './modal.module.css';
import { CarsOptions,  CarsModalOptions, Accessories,Functionalities, Conditions, } from './CarItem.styled';
export const ModalCard = ({ advert, onClose }) => {
  const pick = (obj, keys) => Object.fromEntries(keys.map(n => [n, obj[n]]));
  const advertInfo = pick(advert, [
    'id',
    'type',
    'fuelConsumption',
    'engineSize',
    'accessories',
    'functionalities',
    'rentalCompany',
    'address',
  ]);

  const address = advert.address && advert.address;
  const cityCountry = advert.address && address.slice(address.indexOf(',') + 2);
  const city = advert.address && cityCountry.slice(0, cityCountry.indexOf(','));
  const country =
    advert.address && cityCountry.slice(cityCountry.indexOf(',') + 2);
  
  const type = advert.type;
  
  const Id = advertInfo.id;
  const year = advert.year;
  const fuelConsumption = advert.fuelConsumption;
  const engineSize = advert.engineSize;
  const accessories = advert.accessories;
  const functionalities = advert.functionalities;
  const mileage = advert.mileage;
  const rentalPrice = advert.rentalPrice;

  
  return (
    <div>
      <li className={css.carLi}>
        <img
          className={css.imgModal}
          src={
            advert.img
              ? advert.img
              : 'https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg'
          }
          alt=""
        />
        <div className={css.carInfo}>
          <p className={css.carP}>{advert.make}</p>
          <p className={css.carP}>{advert.model},</p>
          <p className={css.carP}>{advert.year}</p>
          {/* <p className={css.carP}>{advert.rentalPrice}</p> */}
        </div>
        <CarsOptions className={css.carsOptions}>
          {city && ` ${city} |`} {country && ` ${country} |`} Id: {Id} {' |'}{' '}
          Year: {year && `${year} | `}
          Type: {type && `  ${type}`}
        </CarsOptions>
        <CarsModalOptions className={css.carsOptions}>
          Fuel Consumption: {fuelConsumption && ` ${fuelConsumption} | `}
          EngineSize:{engineSize && ` ${engineSize} `}
        </CarsModalOptions>
        <p className={css.carDescription}>{advert.description}</p>
        <p className={css.carDescription}>Accessories and functionalities:</p>
        <Accessories className={css.accessories}>
          {accessories && `${accessories}  `}
        </Accessories>
        <Functionalities className={css.accessories}>
          {functionalities && `${functionalities}  `}
        </Functionalities>
        <p className={css.conditions}>Rental Conditions: </p>
        <div className={css.rental}>
          <p className={css.carRenal}>
            {advert.rentalConditions.split('\n')[0]}
          </p>
          <p className={css.carRenal}>
            {advert.rentalConditions.split('\n')[1]}
          </p>
        </div>
        <div className={css.rental}>
          <p className={css.carRenal}>
            {advert.rentalConditions.split('\n')[2]}
          </p>
          <Conditions>Mileage: {mileage && `${mileage} `}</Conditions>
          <Conditions>Price: {rentalPrice && `${rentalPrice}  `}</Conditions>
        </div>
        <button className={css.btnCar}>Rental car</button>
        
      </li>
    </div>
  );
};
