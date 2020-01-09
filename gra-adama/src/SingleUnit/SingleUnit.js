import React from 'react';
import './SingleUnit.css';
import { useState } from 'react'

function SingleUnit(props) {

    const [health, setHealth] = useState(parseInt(props.hp));
    if (health > props.hp) {
        setHealth(props.hp);
    } else if (health < 0) {
        setHealth(0);
    }

    return (
        <div className="SingleUnit">
            <h2>{props.name} {props.id}</h2>
            <h5>{health}</h5>
            <div class="ButtonContainer">
                <button onClick={() => setHealth(health - 1)}>-</button>
                <button onClick={() => setHealth(health + 1)}>+</button>
            </div>
            <button>Usuń</button>
        </div >
    );
}

export default SingleUnit;
