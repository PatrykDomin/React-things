import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => (
  <button
    className={`${classes.button} ${
      props.success ? classes.success : classes.danger
    }`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
