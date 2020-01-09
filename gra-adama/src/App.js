import React from 'react';
import './App.css';
import SingleUnit from './SingleUnit/SingleUnit';
import { useState } from 'react'

function App() {

    const [infantryNumber, setinfantryNumber] = useState(0)
    const [infantry, setInfantry] = useState([{
        health: 2,
        name: "Piechota",
        id: 0
    }]);


    let infantryContainer = null;
    if (infantryNumber) {

    }


    return (
        <div className="App">
            <div className="Unit">
                <button onClick={() => setinfantryNumber(infantryNumber++)}>Piechota</button>

            </div>
        </div>
    );
}

export default App;
