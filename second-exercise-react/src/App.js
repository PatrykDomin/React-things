import React, { useState } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const inputChangedHandler = event => {
    setUserInput(event.target.value);
  };

  const deleteCharHandler = charIndex => {
    const chars = userInput.split("");
    chars.splice(charIndex, 1);
    const updatedText = chars.join("");
    setUserInput(updatedText);
  };

  const singleLetters = (
    <div>
      {userInput.split("").map((ch, index) => {
        return (
          <Char
            click={deleteCharHandler.bind(this, index)}
            letter={ch}
            key={index}
          />
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <input type="text" onChange={inputChangedHandler} value={userInput} />
      <p>{userInput.length}</p>
      <Validation length={userInput.length} />
      {singleLetters}
    </div>
  );
};

export default App;
