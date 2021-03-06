import React from "react";
import classes from "./BurgerIngredients.module.scss";
import PropTypes from "prop-types";

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-top":
      ingredient = (
        <div className={classes.breadTop}>
          <div className={classes.seeds1}></div>
          <div className={classes.seeds2}></div>
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = <div className={classes.breadBottom}></div>;
      break;
    case "meat":
      ingredient = <div className={classes.meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.bacon}></div>;
      break;
    default:
      ingredient = null;

      break;
  }

  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
