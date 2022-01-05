import React from 'react';
import './style.scss';
import TimerStyle from './index.module.css';

const Timer = () => {
  return (
    <div className={TimerStyle.timer}>
      00:00:000
    </div>
  )
};

export default Timer;