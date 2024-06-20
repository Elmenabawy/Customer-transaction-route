import React from 'react';
import styles from './Dashboard.module.css';
import Chart from '../Chart/Chart';
import WeatherCard from '../Weather/Weather';
import WeekWeather from '../WeekWeather/WeakWeather';
import Battery from '../Battery/Battery';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Prediction from '../Prediction/Prediction';

export default function Dashboard() {
  return <>
  <div className=''>
      <h2 className='d-flex justify-content-center pt-4'>Dashboard</h2>
      <div className='row'>
        <div className="col-md-12 w-100">
          <Chart />
        </div>
      </div>
      {/* weather */}
      {/* <div className="row">
        <div className="">
            <WeatherCard />
        </div>
      </div>*/}
      {/* <div className="row">
        <div className="">
          <WeekWeather />
        </div>
      </div>  */}
      <div className="container bg-white shadow-lg rounded my-4 py-4 ">
        <div className="row">
          <div className="col-md-6">
            <Battery />
          </div>
          <div className="col-md-6">
            <Prediction />
          </div>
        </div>
      </div>
  </div>
  </>
}
