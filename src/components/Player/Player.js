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
      order    : numberOfPlayers,
      isHuman  : props.isHuman,
      playing  : false
    };

  }

  componentDidMount()
  {
    this.props.addPlayer(this.state.name, this.state.order, this.state.isHuman);
  }

  componentWillReceiveProps(nextProps)
  {
    let amIPlaying = nextProps.actualPlayerNumber == this.state.order;
    this.setState((prevState,props) => { return { playing: amIPlaying } });
  }

  render() {
    return (
      <div className={`player ${this.state.playing ? 'active' : 'inactive'}`}>
          <h2 className="name">{`${this.state.name}`} <span className="type">{`( ${this.state.isHuman ? 'Human' : 'Robot'} )`}</span></h2>
          <Warrior />
          <WordList />
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
    actualPlayerNumber : state.playerReducer.actualPlayerNumber
  };
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addPlayer : (name, order, isHuman) => dispatch ( addPlayerAction (name, order, isHuman) )
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Player);