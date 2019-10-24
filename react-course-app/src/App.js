import React, { Component } from 'react'
import './App.css'
import Person from './Preson/Person'


class App extends Component {

  state = {
    persons: [
      { name: "Patryk", age: 21 },
      { name: "Martyna", age: 21 },
      { name: "Manu", age: 29 }
    ],
    otherState: "Value"
  }

  switchNameHandler = () => {
    // DON'T USE -> this.state.persons[0].name = "Patryyyyyk"
    this.setState({
      persons: [
        { name: "Patryyyyyk", age: 21 },
        { name: "Martyna", age: 21 },
        { name: "Manu", age: 41 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React app!</h1>
        <p>It works!</p>
        {/* <Person></Person> */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: Dogs</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App
