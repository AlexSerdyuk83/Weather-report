import React, {useEffect, useState} from "react";
import styles from "./Weather.module.css";
import {useParams} from "react-router-dom";
import getWeather from "../utilits/getWeather";
import {weatherRender} from "../utilits/weaterRenders/weatherRender";
import _ from "lodash";
import weatherRenderByTime from "../utilits/weaterRenders/weatherRenderByTime";

const WeatherInCity = () => {

  const { city } = useParams();

  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [isWeatherByTime, setIsWeatherByTime] = useState(false);

  useEffect(() => {
    setError('');
    if (_.isEmpty(localStorage.getItem(city))) {
      getWeather(city)
        .then(response => {
          setWeatherData(response.data);
          localStorage.setItem(city, JSON.stringify(response.data));
        })
        .catch(err => setError(err.response.data.error.message))
    }
  }, [city]);

  const weather = _.isEmpty(localStorage.getItem(city)) ? weatherData : JSON.parse(localStorage.getItem(city));

  const render = () => {
    if (error.length !== 0) {
      return <p className={styles.error}>{error}</p>;
    }
    return _.isEmpty(weather) ? null : weatherRender(weather, styles);
  };

  const weatherByTimeHandle = () => setIsWeatherByTime(!isWeatherByTime);

  return (
    <div>
      <div>
        {
          isWeatherByTime ? weatherRenderByTime(weather, styles) : render()
        }
        {
          error.length === 0
            ? <p className={styles.link} onClick={weatherByTimeHandle}>{`${isWeatherByTime ? 'Hide' : 'Show'} the weather by time`}</p>
            : null
        }
      </div>
    </div>
  );
};

export default WeatherInCity;
