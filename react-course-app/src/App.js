import React, { useState } from 'react'
import './App.css'
import Person from './Preson/Person'

const App = () => {

  //use multiple useState !

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: "Patryk", age: 21 },
      { id: 2, name: "Manu", age: 21 },
      { id: 3, name: "Martyna", age: 29 }
    ]
  })

  const [otherValue, setOtherValue] = useState("Value")

  const [showPersons, setShowPersons] = useState(false)


  const nameChangedHendler = (event, id) => {

    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id
    })

    //create a copy of a person with specific index
    const person = {
      ...personsState.persons[personIndex]
    }

    person.name = event.target.value

    //create a copy of persons array to change one person
    const persons = [...personsState.persons]
    persons[personIndex] = person

    //assign new values to the persons array :)
    setPersonsState({
      persons: persons
    })
  }

  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice()
    // better to make a copy! 
    let persons = [...personsState.persons]
    persons.splice(personIndex, 1)
    setPersonsState({ persons: persons })
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersons
    setShowPersons(!doesShow)
  }

  let persons = null //more efficient than 'sth ? true : false'
  if (showPersons) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return (
              <Person
                click={deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => nameChangedHendler(e, person.id)} />
            )
          })
        }
      </div>
    )
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
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