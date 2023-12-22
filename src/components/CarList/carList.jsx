import { CarItem } from '../CarItem/carItem';
import { useSelector } from 'react-redux';
import css from '../CarItem/car.module.css';
import { selectFilteredContacts } from '../../redux/selectors';
import { useState } from 'react';

export const CarList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const [elloadMore, setLoadMore] = useState(12);
  const loadMore = () => {
    setLoadMore(elloadMore + elloadMore);
  };
  const slice = filteredContacts.slice(0, elloadMore);
  return (
    <>
      <ul className={css.carList}>
        {slice.map(advert => (
          <CarItem key={advert.id} advert={advert} />
        ))}
      </ul>
      <button className={css.btnLoadMore} onClick={() => loadMore()}>
        Load More
      </button>
    </>
  );
};
