import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WeatherInCity from "./components/WeatherInCity";
import {citiesList} from "./utilits/citiesList";


function App() {

  return (
    <div className="container">
      <Header/>
      <Navigation cities={citiesList}/>
      <div className="content">
        <Switch>
          <Route path={'/:city'} render={() => <WeatherInCity/>}/>
          <Redirect exact from={'/'} to={'/Minsk'}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
