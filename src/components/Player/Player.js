import React, { Component } from 'react';

import {connect} from 'react-redux';

import './Player.css';
import {addPlayerAction} from './Player.actions'


import Warrior from '../Warrior/Warrior';
import Bar from '../Bar/Bar';
import WordList from '../WordList/WordList';

var numberOfPlayers = 0;

class Player extends Component {

  constructor(props) {
    super (props);
    numberOfPlayers++;

    this.state = {
      name     : props.name,
      number   : props.number,
      isHuman  : props.isHuman,
      playing  : false,
      points   : 0
    };

  }

  componentDidMount()
  {
    this.props.addPlayer(this.state.name, this.state.number, this.state.isHuman);
  }

  componentWillReceiveProps(nextProps)
  {
    let amIPlaying = nextProps.actualPlayerNumber == this.state.number;
    this.setState((prevState,props) => { return { playing: amIPlaying } });

    // handle word added
    if ( nextProps.lastWordToAdd.playerNumber === this.state.number )
      this.setState ( (prevState, props) => { return { points: prevState.points+nextProps.lastWordToAdd.pointsEarned }; } );
  }

  render() {
    return (
      <div className={`player ${this.state.playing ? 'active' : 'inactive'}`}>
          <h2 className="name">{`${this.state.name}`} 
            <span className="type">{`( ${this.state.isHuman ? 'Human' : 'Robot'} )`}</span>
            <span className="points"> {this.state.points} </span>
          </h2>
          <Warrior />
          <WordList playerNumber={this.state.number} />
      </div>
    );
  }
}

Player.defaultProps = {
  name : "Player",
  number  : -1,
  isHuman : true
};

const mapStateToProps = (state) => 
{
  return {
    actualPlayerNumber : state.playerReducer.actualPlayerNumber,
    lastWordToAdd      : state.wordInputReducer
  };
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addPlayer : (name, number, isHuman) => dispatch ( addPlayerAction (name, number, isHuman) )
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Player);