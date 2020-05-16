import React from "react";
import classes from "./Layout.module.scss";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
