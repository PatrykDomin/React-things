import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = () => {

  const [nickName, setNickName] = useState(
    {
      username: "hozimiku"
    }
  )

  const userNameHandler = (event) => {
    setNickName({
      username: event.target.value
    })
  }

  const style = {
    backgroundColor: '#eee',
    margin: '0 auto',
    width: '50%',
    fontSize: '22px'
  }

  return (
    <div style={style} className="App">
      <UserOutput nickName={nickName.username} />
      <UserOutput nickName="other nick" />
      <UserInput nickName={nickName.username} changed={userNameHandler} />

    </div>
  )
}

export default App;