import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from './Weather.module.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentPosition();
        const data = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  };

  return (
    <div className="container my-4">
      {weatherData && (
        <div className="row">
          <div className="col">
            <div className={styles.futureForecast}>
              <div className="today d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <img src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
                <div className={styles.other}>Today
                  <div className={styles.temp}>Night - {weatherData.daily[0].temp.night}&#176;C</div>
                  <div className={styles.temp}>Day - {weatherData.daily[0].temp.day}&#176;C</div>
                </div>
              </div>
              <div className="row">
                {weatherData.daily.slice(1).map(day => (
                  <div key={day.dt} className="col-md-4 col-sm-6 my-2 ">
                    <div className={`shadow p-3 mb-5 bg-white rounded d-flex  align-items-center flex-column  ${styles.weatherForecastItem}`}>
                      <div className={`shadow-lg ${styles.day}`}>{moment(day.dt * 1000).format('ddd')}</div>
                      <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
                      <div className={styles.temp}>Night - {day.temp.night}&#176;C</div>
                      <div className={styles.temp}>Day - {day.temp.day}&#176;C</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Weather;
