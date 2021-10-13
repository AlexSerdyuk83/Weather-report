import React, {useState} from "react";
import _ from "lodash";
import styles from "./Form.module.css";
import {NavLink} from "react-router-dom";

const Form = () => {

  const [value, setValue] = useState('');

  const changeValueHandle = (e) => setValue(e.target.value);

  return (
    <form className={styles.form_container}>
      <input
        type="text"
        className={styles.form_input}
        placeholder={'name of the city'}
        onChange={changeValueHandle}
        value={value}
      />
      <NavLink to={`/${_.capitalize(value)}`} onClick={() => setValue('')}>
        <button type="submit" className={styles.form_btn}>{'Show'}</button>
      </NavLink>
    </form>
  )
};

export default Form;
