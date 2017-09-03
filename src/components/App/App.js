import React, { Component } from 'react';
//import logo from '../logo.svg';
import './App.css';
import StartGame from '../StartGame/StartGame';
import WordInput from '../WordInput/WordInput';
import Player from '../Player/Player';

import {connect} from 'react-redux';


class App extends Component {

  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="App">

        <StartGame timerValue={10} />

        <div className={`field ${this.props.gameInitiated ? 'visible' : 'hidden'}`} >
          <WordInput />
          <Player name="Hamza" isHuman={true} number={1} />
          <Player name="Mehdi" isHuman={true} number={2} />
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => 
{
  return { gameInitiated : state.appReducer.gameInitiated };
}


export default connect (mapStateToProps, null) (App) ;
