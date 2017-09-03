import React, { Component } from 'react';

import {connect} from 'react-redux';

import './Player.css';


import Warrior from '../Warrior/Warrior';
import Bar from '../Bar/Bar';
import WordList from '../WordList/WordList';

class Player extends Component {
  
  constructor(props) {
    super (props);

    this.state = {
      name  : props.name,
      number: props.nbr,
      isHuman  : props.isHuman
    };

  }

  render() {
    return (
      <div className="player">
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
    myTurn: state.playerInputReducer
  }
};

export default connect (mapStateToProps)(Player);