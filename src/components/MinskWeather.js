import React from "react";
import _ from 'lodash';
import {weatherRender} from "../utilits/weaterRenders/weatherRender";
import styles from "./Weather.module.css";

const MinskWeather = (props) => {
  const { weather } = props;

  return (
    <div>{_.isEmpty(weather) ? null : weatherRender(weather, styles)}</div>
  );
};

export default MinskWeather;
