import React, { useState, Fragment } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";

const App = props => {
  //use multiple useState !
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: "Patryk", age: 21 },
      { id: 2, name: "Manu", age: 21 },
      { id: 3, name: "Martyna", age: 29 }
    ]
  });
  const [showPersons, setShowPersons] = useState(true);
  const [showCockpit, setShowCockpit] = useState(true);
  const [changeCounter, setChangeCounter] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    //create a copy of a person with specific index
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    //create a copy of persons array to change one person
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    //assign new values to the persons array :)
    setPersonsState({
      persons: persons
    });
    setChangeCounter(changeCounter + 1);
  };

  const deletePersonHandler = personIndex => {
    // const persons = personsState.persons.slice()
    // better to make a copy!
    let persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  const loginHandler = () => {
    setAuthenticated(true);
  };

  let persons = null; //more efficient than 'sth ? true : false'
  if (showPersons) {
    persons = (
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
        isAuthenticated={authenticated}
      />
    );
  }

  return (
    // <StyleRoot>
    //adding CSS Modules classes.App
    // <WithClass classes={classes.App}>
    <Fragment>
      <button onClick={() => setShowCockpit(!showCockpit)}>
        Remove Cockpit
      </button>
      <AuthContext.Provider
        value={{ authenticated: authenticated, login: loginHandler }}
      >
        {showCockpit ? (
          <Cockpit
            title={props.appTitle}
            personsLength={personsState.persons.length}
            show={showPersons}
            clicked={togglePersonsHandler}
          />
        ) : null}
        {persons}
      </AuthContext.Provider>
    </Fragment>

    // </WithClass>
    // </StyledRoot>
  );
};

//extra export
// export default Radium(App);
export default withClass(App, classes.App);
