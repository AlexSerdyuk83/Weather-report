import React from "react";
import styles from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = (props) => {

  const { setCity } = props;

  return (
    <nav className={styles.nav_container}>
      <div
        className={styles.nav_item}
        onClick={() => setCity('Minsk')}>
        <NavLink to={'/Minsk'} activeClassName={styles.activeLink}>{'Minsk'}</NavLink>
      </div>
      <div
        className={styles.nav_item}
        onClick={() => setCity('Moscow')}>
        <NavLink to={'/Moscow'} activeClassName={styles.activeLink}>{'Moscow'}</NavLink>
      </div>
      <div
        className={styles.nav_item}
        onClick={() => setCity('Bratislava')}>
        <NavLink to={'/Bratislava'} activeClassName={styles.activeLink}>{'Bratislava'}</NavLink>
      </div>
    </nav>
  )
};

export default Navigation;
