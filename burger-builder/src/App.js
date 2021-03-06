import React from "react";
import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <div className={classes.mainDiv}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
