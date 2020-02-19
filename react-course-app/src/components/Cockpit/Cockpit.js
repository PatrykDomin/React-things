import React, { useEffect } from "react";
import styled from "styled-components";
import classes from "./Cockpit.css";

const StyledButton = styled.button`
  background-color: ${p => (p.shown ? "red" : "green")};
  color: white;
  font: inherit;
  border: 0;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  backface-visibility: hidden;
  transition: background-color 0.3s ease-in-out;
  /* & -> this component */
  &:hover {
    background-color: ${p => (p.shown ? "salmon" : "lightgreen")};
    animation: buttonAnimation 0.3s ease-in-out;
    color: black;
  }

  @keyframes buttonAnimation {
    25% {
      transform: translateX(2px);
    }
    75% {
      transform: translateX(-2px);
    }
  }
`;

const Cockpit = props => {
  //only on 1st render and unmount
  useEffect(() => {
    console.log("[Cockpit.js]  useEffect");
    //http request
    const timer = setTimeout(() => {
      alert("timeout");
    }, 1000);

    //it runs BEFORE the main useEffect func runs, but AFTER the (firs) render cycle
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] cleanup");
    };
  }, []);
  //[] -> just 1st time
  //[props.name or variable] -> any time this prop change

  //whenever component updates!
  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect");
    return () => {
      console.log("[cockpit.js] 2nd cleanup");
    };
  });

  let assignedClasses = [];

  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>It works!</p>
      {/* <Person></Person> */}
      <StyledButton shown={props.show} onClick={props.clicked}>
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default Cockpit;
