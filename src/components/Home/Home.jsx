import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import homeImage from '../../../src/Assets/images/background1.jpg';
import Chart from '../Chart/Chart';
export default function Home() {

  return (
    <div>
      <img src={homeImage} alt="Homepage" className={styles.image} /> 
    </div>
  )
}
