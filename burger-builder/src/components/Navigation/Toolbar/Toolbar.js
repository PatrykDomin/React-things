import React from "react";
import classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={classes.toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <Logo height="80%" />
      <nav className={classes.desktop}>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
