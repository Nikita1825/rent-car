import React from 'react'

import {

  CloseIcon,
} from './CarItem.styled';
import css from './modal.module.css'



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
