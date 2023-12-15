import React from 'react'
import { ModalCard } from './modalCard';
import {

  CloseIcon,
} from './CarItem.styled';
import css from './modal.module.css'
import { CarItem } from './carItem';


export const Modal = ({ children, onClose, isOpen }) => {
  const closeOnBtn = () => {
    onClose();
  };
    return (
      <div className={css.backdrop}>
        <div className={css.wrapper}>
          <button className={css.closeIcon} onClick={closeOnBtn}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    );
}
