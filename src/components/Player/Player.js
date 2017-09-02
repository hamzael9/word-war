import React, { Component } from 'react';
import './Player.css';
import Warrior from '../Warrior/Warrior';
import Bar from '../Bar/Bar';
import WordList from '../WordList/WordList';

class Player extends Component {
  
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <div className="player">
          <h2 className="name">{this.props.name}</h2>
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