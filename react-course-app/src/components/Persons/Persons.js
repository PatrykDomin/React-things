import React from "react";
import Person from "./Person/Person";

//=> () return statement
const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={props.clicked.bind(this, index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={e => props.changed(e, person.id)}
      />
    );
  });

export default Persons;
