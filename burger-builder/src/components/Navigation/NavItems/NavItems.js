import React from "react";
import classes from "./NavItems.module.scss";
import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className={classes.navItems}>
      <NavItem link="/" active>
        Burger Builder
      </NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default NavItems;
