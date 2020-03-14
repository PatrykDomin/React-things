import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    bacon: 1,
    cheese: 3,
    meat: 2
  });

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <div>Controls</div>
    </Fragment>
  );
};

export default BurgerBuilder;
