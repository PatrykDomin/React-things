import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ({ closed, open }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className={`${classes.sideDrawer} ${
          open ? classes.open : classes.close
        }`}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
