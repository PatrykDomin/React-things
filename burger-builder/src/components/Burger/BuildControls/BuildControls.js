import React from "react";
import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.buildControls}>
      <p>Current price: {props.price.toFixed(2)} $</p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            disabled={props.disabled[ctrl.type]}
            added={() => props.ingAdded(ctrl.type)}
            deleted={() => props.ingDeleted(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        className={classes.orderButton}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
