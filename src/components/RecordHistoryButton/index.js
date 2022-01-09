import React from 'react';
import RecordHistoryButtonStyle from './index.module.scss';

const RecordHistoryButton = () => {
  return (
    <div className={ RecordHistoryButtonStyle.container }>
      <div className={ RecordHistoryButtonStyle.buttonName }>作業履歴</div>
    </div>

  )
};

export default RecordHistoryButton;
