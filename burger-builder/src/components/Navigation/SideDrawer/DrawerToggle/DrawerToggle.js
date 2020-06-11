import React from "react";
import classes from "./DrawerToggle.module.scss";

const DrawerToggle = ({ clicked }) => {
  return (
    <div className={classes.drawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
