import React, { Component } from 'react';
import './Player.css';
import Warrior from './Warrior';
import Bar from './Bar';
import WordList from './WordList';

class Player extends Component {
  
  constructor(props) {
    super (props);
    this.state = {
        pointsEarned : 0,
        pointsLeft   : 100
    };
  }

  render() {
    return (
      <div className="player">
          <h2 className="name">{this.props.name}</h2>
          <Bar />
          <Warrior />
          <WordList />
      </div>
    );
  }
}

Player.defaultProps = {
  name : "Player"
};

export default Player;