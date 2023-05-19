import { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [isFilled, setIsFilled] = useState(false);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    if (props.onChange) {
      props.onChange(value);
    }
    if (value !== "") {
      setIsFilled(true);
      return;
    }
    setIsFilled(false);
  };
  return (
    <div className={classes.container}>
      <label
        className={`${classes.placeholder} ${
          isFilled ? classes["active-label"] : ""
        }`}
      >
        {props.placeholder}
      </label>
      <input
        type={props.type}
        className={classes.input}
        onChange={inputChangeHandler}
        required
      ></input>
    </div>
  );
};

export default Input;
