import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.scss";

const Logo = ({ height }) => (
  <div className={classes.logo} style={{ height: height }}>
    <img src={burgerLogo} alt="burger logo" />
  </div>
);

export default Logo;
