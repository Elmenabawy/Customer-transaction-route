import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './Weather.module.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentPosition();
        const data = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
        setWeatherData(data);
        console.log(data)
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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  };

  return (<>
    <div className="container shadow-lg rounded p-4">
      {weatherData && weatherData.hourly && (
        <div className="row">
          <div className="col ">
            <div className={styles.futureForecast}>
              <h2 className="text-center py-3">Hourly Weather Forecast</h2>
              <div className={`row ${styles.hourlyForecast}`}>
                {weatherData.hourly.slice(0, 24).map(hour => (
                  <div key={hour.dt} className={`col-md-1 col-sm-2 my-2 ${styles.hourlyForecastItem}`}>
                    <div className={styles.weatherForecastItem}>
                      <div className={styles.time}>{moment(hour.dt * 1000).format('hA')}</div>
                      <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
                      <div className={styles.temp}>{hour.temp}&#176;C</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>  
    </>
  );
};


export default Weather;
