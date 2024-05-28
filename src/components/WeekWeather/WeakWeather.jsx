import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './WeakWeather.module.css';

const WeekWeather = () => {
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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    };

    return (
        <div className="container shadow bg-white rounded my-3 p-3">
            {weatherData && weatherData.daily && (
                <div className="row">
                    <div className="col">
                        <div className={styles.weekForecast}>
                            <h2 className="text-center my-3">Weekly Weather Forecast</h2>
                            <div className={`row my-3 gx-2 ${styles.weeklyForecast}`}>
                                {weatherData.daily.slice(1).map(day => (
                                    <div key={day.dt} className={`col-md-2 col-sm-3  d-flex align-items-center flex-column my-3  ${styles.weeklyForecastItem}`}>
                                        <div className={styles.weatherForecastItem}>
                                            <div className={styles.day}>{moment(day.dt * 1000).format('dddd')}</div>
                                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
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

export default WeekWeather;
