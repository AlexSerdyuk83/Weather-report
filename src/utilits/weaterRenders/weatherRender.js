import React from "react";
import daysWeatherRender from "./daysWeatherRender";

export const getWeatherTime = (time) => time.split(' ')[1];
export const getWeatherDate = (time) => time.split(' ')[0];
export const generateUrlIcons = (url) => `https:${url}`;

export const weatherRender = (data, styles) => {

  const { container, flex, bord, wd_100} = styles;

  const currTemp = `${data.current.temp_c}C`;

  return <div className={container}>
      <div>
        <span>{`Weather in ${data.location.name} on `}</span><span>{getWeatherTime(data.location.localtime)}</span>
        <div className={`${flex} ${bord} ${wd_100}`}>
          <img src={generateUrlIcons(data.current.condition.icon)} alt={"condition"}/>
          <p>{currTemp}</p>
        </div>
        <span>{`Weather in ${data.location.name} for 3 days`}</span>
      </div>
    {daysWeatherRender(data, styles)}
    </div>
};



