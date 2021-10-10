import React from "react";
import _ from "lodash";
import {generateUrlIcons} from "./weatherRender";

const daysWeatherRender = (data, styles) => {
  const {
    container_items,
    item,
    bord,
    flex,
    img_size_50,
  } = styles;

  const tempsForThreeDay = data.forecast.forecastday;

  return <div className={`${container_items} ${flex}`}>
    {
      tempsForThreeDay.map((day) => <div key={_.uniqueId()} className={`${item} ${bord}`}>
        <p>{day.date}</p>
        <img src={generateUrlIcons(day.day.condition.icon)} alt={"condition"} className={img_size_50}/>
        <p>{`+${day.day.mintemp_c} ... +${day.day.maxtemp_c}`}</p>
      </div>)
    }
  </div>
};

export default daysWeatherRender;
