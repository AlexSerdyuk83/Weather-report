import axios from "axios";

const getWeather = async (cityName, daysCount = 3) => await axios.get(
  `https://api.weatherapi.com/v1/forecast.json?key=bc4123eb05524e7798b190148210510&q=${cityName}&days=${daysCount}&aqi=no&alerts=no`
);

export default getWeather;
