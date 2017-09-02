import React, { Component } from 'react';
//import logo from '../logo.svg';
import './App.css';
import Player from '../Player/Player';
import StartGame from '../StartGame/StartGame';


class App extends Component {

  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="App">

        <StartGame />

        <Player name="Hamza"/>
        <Player name="Mehdi" />

      </div>
    );
  }

}


export default App;
