// Home.jsx

import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import About from './About/About';
export default function Home() {

  return (<>
    <div className={styles.heroContainer}>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.overlayContent}`}>
        <h2 className='fw-bolder font-xxl'>Welcome to GoGreen Eco system</h2>
        <p className='mt-3 font-lg'>Your source for sustainable energy solutions</p>
      </div>
    </div>
    <About/>
  </>
    
  );
}
