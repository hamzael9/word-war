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
    for (var index = 0; index < 3; index++)
      playerArray.push(<Player key={index} name={`player ${index}`} isHuman={true} />)

    return playerArray;

  }

  render()
  {
    return (
      <div className="App">

        <StartGame timerValue={10} />

        <div className={`field ${this.props.gameInitiated ? 'visible' : 'hidden'}`} >
          <WordInput />
          {this.createPlayers()}
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
