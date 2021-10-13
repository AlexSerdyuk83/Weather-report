import React from "react";
import _ from "lodash";
import {generateUrlIcons, getWeatherDate, getWeatherTime} from "./weatherRender";

const weatherRenderByTime = (data, styles) => {
  const {
    container,
    bord,
    flex,
    wd_100,
    mr_10,
    ml_10,
    mt_10,
    wd_60,
    ta_c,
    img_size_30,
  } = styles;

  const tempsForHours = data.forecast.forecastday[0];

  return <div className={ml_10}>
    <p>{`Weather in ${data.location.name} on ${getWeatherDate(data.location.localtime)}`}</p>
    <div className={`${container} ${flex}`}>
      {
        tempsForHours.hour.map((day) => <div key={_.uniqueId()} className={`${bord} ${wd_100} ${mr_10} ${mt_10} ${wd_60}`}>
          <p className={ta_c}>{getWeatherTime(day.time)}</p>
          <img src={generateUrlIcons(day.condition.icon)} alt={"condition"} className={`${img_size_30} ${bord} ${ml_10}`}/>
          <p className={ta_c}>{`+${day.temp_c}C`}</p>
        </div>)
      }
    </div>
  </div>
};

export default weatherRenderByTime;
