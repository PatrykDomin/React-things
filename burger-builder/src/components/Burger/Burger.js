import React from "react";
import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = [];

  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={key + i} type={key} />
      );
    }
  }

  // = Object.keys(props.ingredients).map(igKey => {
  //   return [...Array(props.ingredients[igKey])].map((_, id) => {
  //     return <BurgerIngredient key={igKey + id} type={igKey} />;
  //   });
  // });

  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
