import './App.css';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import _ from 'lodash';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MinskWeather from "./components/MinskWeather";
import MoscowWeather from "./components/MoscowWeather";
import BratislavaWeather from "./components/BratislavaWeather";
import getWeather from "./utilits/getWeather";
import WeatherByHours from "./components/WeatherByHours";

function App() {

  const partsOfPath = useLocation().pathname.split('/');
  const location = partsOfPath[partsOfPath.length - 1]

  const [city, setCity] = useState(!location ? 'Minsk' : location);
  const [weatherForMinsk, setWeatherForMinsk] = useState({});
  const [weatherForMoscow, setWeatherForMoscow] = useState({});
  const [weatherForBratislava, setWeatherForBratislava] = useState({});
  const [weatherForHours, setWeatherForHours] = useState({});

  const citiesTools = {
    'Minsk': { isWeather: weatherForMinsk, setWeather: setWeatherForMinsk },
    'Moscow': { isWeather: weatherForMoscow, setWeather: setWeatherForMoscow },
    'Bratislava': { isWeather: weatherForBratislava, setWeather: setWeatherForBratislava },
  };

  useEffect(() => {
    if (_.isEmpty(citiesTools[city].isWeather)) {
      getWeather(city)
        .then(weather => citiesTools[city].setWeather(weather.data))
        .catch(err => console.log(err))
    }
  }, [city]);


  return (
    <div className="container">
      <Header/>
      <Navigation setCity={setCity}/>
      <div className="content">
        <Switch>
          <Route exact path={'/Minsk'} render={() => <MinskWeather weather={weatherForMinsk}/>}/>
          <Route path={'/Moscow'} render={() => <MoscowWeather weather={weatherForMoscow}/>}/>
          <Route path={'/Bratislava'} render={() => <BratislavaWeather weather={weatherForBratislava}/>}/>
          <Route
            path={`/byHours/`}
            render={() => <WeatherByHours
              weather={weatherForHours}
              setWeatherForHours={setWeatherForHours}
            />}
          />
          <Redirect from={'/'} to={'/Minsk'}/>
        </Switch>
      </div>
      <Footer currentCity={city} weather={citiesTools[city].isWeather} setWeatherForOtherCity={setWeatherForHours}/>
    </div>
  );
}

export default App;
