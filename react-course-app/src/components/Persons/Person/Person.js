import React, { Fragment, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
//import styled from "styled-components";
//import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/WithClass";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 10px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

const Person = props => {
  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <Fragment>
      {/* <div className="Person" style={style}> */}
      {/* <StyledDiv> */}
      {props.isAuth ? <p>Authenticated!</p> : <p>Log In</p>}
      <p onClick={props.click}>
        I'm {props.name} and I'm a {props.age} years old.
      </p>
      {/* <Test> children here </Test> */}
      <p>{props.children}</p>
      <input
        ref={inputElRef}
        type="text"
        onChange={props.changed}
        value={props.name}
      />
      {/* </StyledDiv> */}
      {/* </div> */}
    </Fragment>
  );
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, classes.Person);
