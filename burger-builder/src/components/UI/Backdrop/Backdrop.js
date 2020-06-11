import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop = ({ clicked, show }) => {
  return show && <div className={classes.backdrop} onClick={clicked}></div>;
};

export default Backdrop;
