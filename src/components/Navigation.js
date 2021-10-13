import React from "react";
import styles from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
import Form from "./Form";
import _ from "lodash";

const Navigation = ({ cities }) => {

  return (
    <div className={styles.nav_container}>
      <nav>
        {
          cities.map((city) => <div key={_.uniqueId()} className={styles.nav_item}>
              <NavLink
                to={`/${city}`}
                activeClassName={styles.activeLink}
              >
                {city}
              </NavLink>
            </div>
          )
        }
      </nav>
      <Form/>
    </div>
  )
};

export default Navigation;
