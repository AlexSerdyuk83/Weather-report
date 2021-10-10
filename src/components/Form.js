import React, {useState} from "react";
import _ from "lodash";
import styles from "./Form.module.css";
import getWeather from "../utilits/getWeather";

const Form = ({ setWeatherForOtherCity, setError }) => {

  const [value, setValue] = useState('');

  const changeValueHandle = (e) => setValue(e.target.value);

  const showWeatherForOtherCityHandle = (e) => {
    e.preventDefault();
    getWeather(_.capitalize(value), 1)
      .then(weather => {
        setWeatherForOtherCity(weather.data);
        setError('');
      })
      .catch(() => setError('Sorry, there is no such city in the list'));

    setValue('');
  };

  return (
    <form onSubmit={showWeatherForOtherCityHandle} className={styles.form_container}>
      <input
        onChange={changeValueHandle}
        type="text"
        value={value}
        className={styles.form_input}
        placeholder={'name of the city'}
      />
      <button type="submit" className={styles.form_btn}>{'Show'}</button>
    </form>
  )
};

export default Form;
