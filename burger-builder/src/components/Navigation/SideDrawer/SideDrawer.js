import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.module.scss";

const SideDrawer = () => {
  return (
    <div className={classes.sideDrawer}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
