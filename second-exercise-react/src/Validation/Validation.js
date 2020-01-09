import React, { useState } from 'react'

const Validation = (props) => {

    let outputText = "Length: " + props.length
    if (props.length < 5) {
        outputText = "Text too short"
    }
    else if (props.length > 12) {
        outputText = "Text too long"
    }

    return (
        <div>
            <p>{outputText}</p>
        </div>
    )
}

export default Validation