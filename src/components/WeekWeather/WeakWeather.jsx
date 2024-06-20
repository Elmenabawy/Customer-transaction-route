import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './WeakWeather.module.css';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const WeekWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [consumptionData, setConsumptionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const position = await getCurrentPosition();
                const weatherResponse = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
                const token = localStorage.getItem("userToken");
                const decoded = jwtDecode(token);
                const userId = decoded.usrid;

                const consumptionResponse = await axios.get(`https://gogreenserver-1-1-numd.onrender.com/api/${userId}/getPredictedConsumptions`);
                const consumptionData = await consumptionResponse.data;

                setWeatherData(weatherResponse);
                setConsumptionData(consumptionData);
            } catch (error) {
                console.error('Error fetching data:', error);
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
        console.log(data);
        return data;
    };

    return (
        <div className="container shadow bg-white rounded my-3 p-3">
            {weatherData && consumptionData && (
                <div className="row">
                    <div className="col">
                        <div className={styles.weekForecast}>
                            <h2 className="text-center my-3">Weekly Weather Forecast</h2>
                            <div className={styles.weeklyForecast}>
                                {weatherData.daily && weatherData.daily.slice(1).map((day, index) => (
                                    <div key={day.dt} className={styles.weeklyForecastItem}>
                                        <div className={styles.weatherForecastItem}>
                                            <div className={styles.day}>{moment(day.dt * 1000).format('dddd')}</div>
                                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
                                            <div className={styles.temp}>Day - {day.temp.day}&#176;C</div>
                                            {consumptionData && consumptionData[index] && (
                                                <div className={styles.consumptionContainer}>
                                                    <div className={styles.consumption}>
                                                        <span className={styles.consumptionLabel}>Predicted Consumption:</span>
                                                        <span className={styles.consumptionValue}>{parseInt(consumptionData[index].predicted_consumption)}</span>
                                                        <span className={styles.consumptionUnit}>kWh</span>
                                                    </div>
                                                </div>
                                            )}
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













































// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import styles from './WeakWeather.module.css';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';

// const WeekWeather = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const [consumptionData, setConsumptionData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const position = await getCurrentPosition();
//                 const weatherResponse = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
//                 const token = localStorage.getItem("userToken");
//                 const decoded = jwtDecode(token);
//                 const userId = decoded.usrid;

//                 const consumptionResponse = await axios.get(`https://gogreenserver-1-1-numd.onrender.com/api/${userId}/getPredictedConsumptions`);
//                 const consumptionData = consumptionResponse.data;

//                 setWeatherData(weatherResponse.daily.slice(1, 8)); // Update the state with the sliced array
//                 setConsumptionData(consumptionData);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const getCurrentPosition = () => {
//         return new Promise((resolve, reject) => {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//     };

//     const fetchWeatherData = async (latitude, longitude) => {
//         const API_KEY = '49cc8c821cd2aff9af04c9f98c36eb74';
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`);
//         if (!response.ok) {
//             throw new Error(`Weather API error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log(data.daily.slice(0, 8));
//         return data;
//     };

//     return (
//         <div className="container shadow bg-white rounded my-3 p-3">
//             <div className="row">
//                 <div className="col">
//                     <div className={styles.weekForecast}>
//                         <h2 className="text-center my-3">Weekly Weather Forecast</h2>
//                         <div className={`row my-3 gx-2 ${styles.weeklyForecast}`}>
//                             {weatherData?.daily?.map((day, index) => (
//                                 <div key={day.dt} className={`col-md-2 col-sm-3 d-flex align-items-center flex-column my-3 ${styles.weeklyForecastItem}`}>
//                                     <div className={styles.weatherForecastItem}>
//                                         <div className={styles.day}>{moment(day.dt * 1000).format('dddd')}</div>
//                                         <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" className={styles.wIcon} />
//                                         <div className={styles.temp}>Day - {day.temp.day}&#176;C</div>
//                                         {consumptionData && consumptionData[index] && (
//                                             <div className={styles.consumptionContainer}>
//                                                 <div className={styles.consumption}>
//                                                     <span className={styles.consumptionLabel}>Predicted Consumption:</span>
//                                                     <span className={styles.consumptionValue}>{parseInt(consumptionData[index].predicted_consumption)}</span>
//                                                     <span className={styles.consumptionUnit}>kWh</span>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WeekWeather;