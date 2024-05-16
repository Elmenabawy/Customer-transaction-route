import React from 'react';
import styles from './Dashboard.module.css';
import Chart from '../Chart/Chart';
export default function Dashboard() {
  return <>
  <div className='bg-danger'>
      <h2 className='d-flex justify-content-center pt-4'>Dashboard</h2>
      <div className='row'>
        <div className="col-md-5 w-100">
          <Chart />
        </div>
      </div>
  </div>
  </>
}
