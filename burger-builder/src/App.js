import React from "react";
import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";

const App = () => {
  function f() {
    x += 2;
    var x = 1;
    return x;
  }
  console.log(f());

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  "I'm a JavaScript master!"
    .split("")
    .reverse()
    .join("");

  return (
    <div>
      <Layout>
        <h1 className={classes.header}>Burger builder</h1>
      </Layout>
    </div>
  );
};

export default App;
