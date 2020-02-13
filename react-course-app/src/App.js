import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const App = () => {
  const StyledButton = styled.button`
    background-color: ${p => (p.shown ? "red" : "green")};
    color: white;
    font: inherit;
    border: 0;
    border-radius: 5px;
    padding: 8px;
    cursor: pointer;
    backface-visibility: hidden;

    /* & -> this component */
    &:hover {
      background-color: ${p => (p.shown ? "salmon" : "lightgreen")};
      color: black;
    }
  `;

  //use multiple useState !
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: "Patryk", age: 21 },
      { id: 2, name: "Manu", age: 21 },
      { id: 3, name: "Martyna", age: 29 }
    ]
  });

  const [showPersons, setShowPersons] = useState(true);

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

  let persons = null; //more efficient than 'sth ? true : false'
  if (showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={e => nameChangedHandler(e, person.id)}
            />
          );
        })}
      </div>
    );
  }

  let classes = [];

  if (personsState.persons.length < 3) {
    classes.push("red");
  }
  if (personsState.persons.length < 2) {
    classes.push("bold");
  }

  return (
    // <StyleRoot>
    <div className="App">
      <h1>Hi, i'm a React app!</h1>
      <p className={classes.join(" ")}>It works!</p>
      {/* <Person></Person> */}
      <StyledButton shown={showPersons} onClick={togglePersonsHandler}>
        Toggle Persons
      </StyledButton>
      {/* Better use .bind than anonymous function */}
      {persons}
    </div>
    // </StyledRoot>
  );
};

//extra export
// export default Radium(App);
export default App;
