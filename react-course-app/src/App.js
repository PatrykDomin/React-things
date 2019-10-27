import React, { useState } from 'react'
import './App.css'
import Person from './Preson/Person'

const App = () => {

  //use multiple useState !

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Patryk", age: 21 },
      { name: "Manu", age: 21 },
      { name: "Martyna", age: 29 }
    ]
  })

  const [otherValue, setOtherValue] = useState("Value")

  const [showPersons, setShowPersons] = useState(false)

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const switchNameHander = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 21 },
        { name: "Manu", age: 41 },
        { name: "Martyna", age: 21 }
      ]
    })
  }

  const nameChangedHendler = (event) => {
    setPersonsState({
      persons: [
        { name: "Patryk", age: 21 },
        { name: event.target.value, age: 29 },
        { name: "Martyna", age: 21 }
      ]
    })
  }

  const togglePersonsHandler = () => {
    // showPersons.showPersons ? setShowPersons({ showPersons: false }) : setShowPersons({ showPersons: true })
    const doesShow = showPersons
    setShowPersons(!doesShow)
  }

  let persons = null //more efficient than 'sth ? true : false'
  if (showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age} />
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, i'm a React app!</h1>
      <p>It works!</p>
      {/* <Person></Person> */}
      <button
        onClick={togglePersonsHandler}
        style={style}>Toggle Persons</button>
      {/* Better use .bind than annonymous function */}
      {persons}
    </div>
  )
}

export default App