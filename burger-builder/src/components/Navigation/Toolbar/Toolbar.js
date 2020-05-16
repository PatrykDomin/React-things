import React from "react";
import classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Toolbar = () => {
  return (
    <header className={classes.toolbar}>
      <div>MENU</div>
      <Logo />
      <NavItems />
    </header>
  );
};

export default Toolbar;
