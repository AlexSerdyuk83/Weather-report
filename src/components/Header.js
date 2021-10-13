import React from "react";
import styles from "./Header.module.css"
import {useLocation} from "react-router-dom";

const Header = () => {

  const location = useLocation().pathname.split('/');
  const city = location[location.length - 1];

  return (
    <div className={styles.container}>
      <span className={styles.description}>{`Weather report in ${city}`}</span>
    </div>
  )
};

export default Header;
