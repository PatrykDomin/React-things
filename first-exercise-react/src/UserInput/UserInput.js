import React from 'react'
import './UserInput.css'


const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.nickName} />
        </div>
    )
}

export default UserInput