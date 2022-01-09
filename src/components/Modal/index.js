import React from 'react';
import ModalStyle from './index.module.scss';

const Modal = () => {
  return (
    <div className={ModalStyle.container}>
      <div className={ ModalStyle.close }>×</div>
      <div className={ModalStyle.content}>
        <div className={ModalStyle.contentLabel}>作業内容</div>
        <input type="text"></input>
      </div>
      <div className={ModalStyle.category}>
        <div className={ModalStyle.categoryLabel}>作業種別</div>
        <input type="text"></input>
      </div>
      <div className={ModalStyle.postRecordButton}>作業開始</div>
    </div>
  )
};

export default Modal;
