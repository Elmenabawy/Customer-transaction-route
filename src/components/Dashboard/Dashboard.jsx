import React from 'react';
import styles from './Dashboard.module.css';
import Chart from '../Chart/Chart';
import WeatherCard from '../WeatherCard/Weather';
export default function Dashboard() {
  return <>
  <div className=''>
      <h2 className='d-flex justify-content-center pt-4'>Dashboard</h2>
      <div className='row'>
        <div className="col-md-12 w-100">
          <Chart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 w-100 ">
            <WeatherCard />
        </div>
      </div>
  </div>
  </>
}
