import React from "react";
import classes from "./NavItem.module.scss";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
