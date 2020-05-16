import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.4,
  bacon: 0.8,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [price, setPrice] = useState(4);
  const [purchaseable, setPurchaseable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const purchasableHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchaseable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...ingredients,
    };
    if (ingredients[type] < 4) {
      updatedIngredients[type]++;
      setIngredients(updatedIngredients);
      const newPrice = price + INGREDIENT_PRICES[type];
      setPrice(newPrice);
    }
    purchasableHandler(updatedIngredients);
  };
  const deleteIngredientHandler = (type) => {
    const updatedIngredients = {
      ...ingredients,
    };
    if (ingredients[type] > 0) {
      updatedIngredients[type]--;
      setIngredients(updatedIngredients);
      const newPrice = price - INGREDIENT_PRICES[type];
      setPrice(newPrice);
    }
    purchasableHandler(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(!purchasing);
  };

  const purchaseContinueHandler = () => {
    alert("continue");
  };

  const disableInfo = {
    ...ingredients,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseHandler}>
        <OrderSummary
          totalPrice={price}
          purchaseCanceled={purchaseHandler}
          purchaseContinued={purchaseContinueHandler}
          ingredients={ingredients}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={price}
        ingAdded={addIngredientHandler}
        ingDeleted={deleteIngredientHandler}
        disabled={disableInfo}
        purchasable={purchaseable}
        ordered={purchaseHandler}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
