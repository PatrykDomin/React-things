import React from "react";
import classes from "./Layout.module.scss";

const Layout = props => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
