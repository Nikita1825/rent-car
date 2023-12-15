import { useDispatch } from 'react-redux';
import { Image,CarsOptions,Item, DescriptionBox } from './CarItem.styled';
import css from './car.module.css';
import { useState } from 'react';
import { Modal } from './modal';
import { ModalCard } from './modalCard';

export const CarItem = ({ advert }) => {
    const dispath = useDispatch();
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
    const cityCountry =
      advert.address && address.slice(address.indexOf(',') + 2);
    const city =
      advert.address && cityCountry.slice(0, cityCountry.indexOf(','));
    const country =
      advert.address && cityCountry.slice(cityCountry.indexOf(',') + 2);
    const company = advert.rentalCompany;
    const type = advert.type;
    const model = advert.model;
    const Id = advertInfo.id;

const [isOpenModal, setIsOpenModal] = useState(false);
    const handleModal = () => {
    setIsOpenModal(true)
  }
  const handleClose = () => {
    setIsOpenModal(false);
  };
    
    return (
      <>
        <li className={css.carLi}>
          <img
            className={css.imgCar}
            src={
              advert.img
                ? advert.img
                : 'https://images.cars.com/cldstatic/wp-content/uploads/1673941437-1425510881103.jpeg'
            }
            alt=""
          />
          {/* <img
            className={css.imgCar}
            src="https://res.cloudinary.com/dxwbdzeld/image/upload/v1698962945/car/carSmall/image_1_kjf9ie.jpg"
            alt=""
          /> */}
          <div className={css.carInfo}>
            <p className={css.carP}>{advert.make}</p>
            <p className={css.carP}>{advert.model},</p>
            <p className={css.carP}>{advert.year}</p>
            <p className={css.carP}>{advert.rentalPrice}</p>
          </div>

          <CarsOptions>
            {city && ` ${city} |`} {country && ` ${country} |`}
            {company && ` ${company} |`}
            {type && `  ${type} |`}
            {model && ` ${model} |`} {Id} {' |'}
          </CarsOptions>

          <button className={css.btnCar} onClick={handleModal}>
            Learn more
          </button>
        </li>
        {isOpenModal && (
          <Modal isOpen={isOpenModal} onClose={handleClose}>
            <ModalCard advert={advert} />
          </Modal>
        )}
      </>
    );
};