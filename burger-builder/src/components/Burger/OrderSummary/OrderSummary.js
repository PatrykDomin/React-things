import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCanceled,
  purchaseContinued,
  totalPrice,
}) => {
  const ingSummary = Object.keys(ingredients).map((key) => {
    return (
      <li key={key}>
        {key}: {ingredients[key]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Burger ingredients:</p>
      <ul>{ingSummary}</ul>
      <p>
        <strong>Total price: {totalPrice.toFixed(2)} $</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled}>CANCEL</Button>
      <Button success clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
