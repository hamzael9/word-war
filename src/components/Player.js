import React, { Component } from 'react';
import './Player.css';
import Warrior from './Warrior';
import Bar from './Bar';
import WordList from './WordList';

class Player extends Component {
  render() {
    return (
      <div className="player">
          <h2 className="name">Player </h2>
          <Bar />
          <Warrior />
            <WordList />
      </div>
    );
  }
}

export default Player;