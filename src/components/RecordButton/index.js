import React from 'react';
import RecordButtonStyle from './index.module.scss';

const RecordButton = () => {
  return (
    <div className={ RecordButtonStyle.container }>
      <div className={ RecordButtonStyle.buttonName }>作業記録</div>
    </div>
  )
};

export default RecordButton;
