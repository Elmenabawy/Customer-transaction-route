// BatteryCapsule.js
import React from 'react';
import styles from './Battery.module.css';

function BatteryCapsule() {
  return (
    <>
    <div className="d-flex justify-content-center ">
        <div className={styles.batteryCapsule}>
          <div className={styles.batteryFill} style={{ width: '60%' }} />
          <span className={styles.batteryPercentage}>60%</span>
        </div>
    </div>
    </>
  );
}

export default BatteryCapsule;