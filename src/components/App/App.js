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

  createPlayers()
  {
    let playerArray = [];
    let playerNames = ['hamza', 'mehdi', 'brahim'];
    for (var index = 0; index < 2; index++)
      playerArray.push(<Player key={index} name={playerNames[index]} number={index+1} isHuman={true} />)

    return playerArray;

  }

  render()
  {
    return (
      <div className="App">

        <StartGame timerValue={25} />

        <div className={`field ${this.props.gameInitiated ? 'visible' : 'hidden'}`} >
          <WordInput />
          <div className="player-wrapper">
            {this.createPlayers()}
          </div>
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
