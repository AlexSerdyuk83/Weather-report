import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Footer.module.css"
import btn_style from "./Form.module.css";

const Footer = ({ weather, setWeatherForOtherCity }) => {

  const setWeatherHandle = (e) => {
    e.preventDefault();
    setWeatherForOtherCity(weather);
  };

  return (
    <div className={styles.container} onClick={setWeatherHandle}>
        <NavLink to={`/byHours/`}>
          <button type="submit" className={btn_style.form_btn}>{`Weather by the hour`}</button>
        </NavLink>
    </div>
  );
};

export default Footer;
