import React, {useState} from "react";
import hoursWeatherRender from "../utilits/weaterRenders/hoursWeatherRender";
import styles from "./Weather.module.css";
import _ from "lodash";
import Form from "./Form";

const WeatherByHours = ({ weather }) => {

  const [weatherForOtherCity, setWeatherForOtherCity] = useState(weather);
  const [error, setError] = useState('');

  const render = () => {
    if (error.length !== 0) {
      return <p className={styles.error}>{error}</p>;
    }
    return _.isEmpty(weather) ? null : hoursWeatherRender(weatherForOtherCity, styles)
  };

  return (
    <div>
      <Form setWeatherForOtherCity={setWeatherForOtherCity} setError={setError}/>
      {render()}
    </div>
  );
};

export default WeatherByHours;
