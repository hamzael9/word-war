import React, { Component } from 'react';

import {connect} from 'react-redux';

import './Player.css';
import {addPlayerAction} from './Player.actions'


import Warrior from '../Warrior/Warrior';
import Bar from '../Bar/Bar';
import WordList from '../WordList/WordList';


class Player extends Component {
  
  constructor(props) {
    super (props);

    this.state = {
      name     : props.name,
      number   : props.number,
      isHuman  : props.isHuman,
      playing  : false
    };

  }

  componentDidMount()
  {
    this.props.addPlayer(this.state.name, this.state.number, this.state.isHuman);
  }

  render() {
    return (
      <div className={`player ${this.props.playerNumber === this.state.number ? 'active' : 'inactive'}`}>
          <h2 className="name">{this.props.name} <span className="type">{`( ${this.state.isHuman ? 'Human' : 'Robot'} )`}</span></h2>
          <Warrior />
          <WordList />
      </div>
    );
  }
}

Player.defaultProps = {
  name : "Player",
  number  : 1,
  isHuman : true
};

const mapStateToProps = (state) => 
{
  return {
        playerNumber : state.playerReducer.playingTurn
  };
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addPlayer : (name, number, isHuman) => dispatch ( addPlayerAction (name, number, isHuman) )
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Player);