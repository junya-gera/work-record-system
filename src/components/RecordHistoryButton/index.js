import React from 'react';
import './style.scss';
import RecordHistoryButtonStyle from './index.module.css';

const RecordHistoryButton = () => {
  return (
    <div className={ RecordHistoryButtonStyle.container }>
      <div className={ RecordHistoryButtonStyle.buttonName }>作業履歴</div>
    </div>

  )
};

export default RecordHistoryButton;
