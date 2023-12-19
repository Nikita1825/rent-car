import { CarItem } from './carItem';
import { useSelector} from 'react-redux';

import css from './car.module.css'
import { selectFilteredContacts } from '../redux/selectors';



export const CarList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
    <ul className={css.carList}>
      {filteredContacts.map(advert => (
        <CarItem key={advert.id} advert={advert} />
        ))}
    </ul>
    
        </>
  );
};
