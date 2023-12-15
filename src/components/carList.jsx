import { CarItem } from './carItem';
import { useSelector } from 'react-redux';
// import { selectFilteredContacts } from 'redux/сontact/selectors';
// import css from './contact.module.css';
import css from './car.module.css'
import { selectFilteredContacts } from '../redux/selectors';

export const CarList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.carList}>
      
      {filteredContacts.map(advert => (
        <CarItem key={advert.id} advert={advert}></CarItem>
      ))}
    </ul>
  );
};
