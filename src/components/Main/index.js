import React from 'react';
import MainStyle from './index.module.css';
import Modal from '../Modal';
import Timer from '../Timer';
import RecordButton from '../RecordButton';
import RecordHistoryButton from '../RecordHistoryButton';

const Main = () => {
  return (
    <div>
      <div className={MainStyle.title}>Work Record</div>
      <Modal />
      <div className={MainStyle.container}>
        <Timer />
        <div className={MainStyle.buttons}>
          <RecordButton />
          <RecordHistoryButton />
        </div>
      </div>

    </div>
  )
};

export default Main;
