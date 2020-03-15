import React from "react";
import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Burger = props => {
  // const zmienna = Object.keys(props.ingredients).map(igKey => {
  //   return [...Array(props.ingredients[igKey])].map((_, id) => {
  //     return <BurgerIngredient key={igKey + id} type={igKey} />;
  //   });
  // });

  const burgerIngredients = [];
  let notify = () => toast.warning("Please start adding ingredients!");

  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      burgerIngredients.push(<BurgerIngredient key={key + i} type={key} />);
    }
  }

  if (burgerIngredients.length === 0) {
    notify();
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />

      <div className={classes.burger}>
        <BurgerIngredient type="bread-top" />
        {burgerIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </>
  );
};

export default Burger;
