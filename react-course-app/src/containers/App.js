import React, { useState } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      />
    );
  }

  return (
    // <StyleRoot>
    //adding CSS Modules classes.App

    <div>
      <Cockpit
        title={props.appTitle}
        persons={personsState.persons}
        show={showPersons}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
    // </StyledRoot>
  );
};

//extra export
// export default Radium(App);
export default App;
