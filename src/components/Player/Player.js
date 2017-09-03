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

  componentWillReceiveProps(nextProps)
  {
    console.log ('will receive props');
    let amIPlaying = nextProps.playingTurn == this.state.number;
    this.setState((prevState,props) => { return { playing: amIPlaying } });
  }

  
  /*
  componentDidUpdate()
  {
    console.log ('component did update ' + this.props.playingTurn);
    console.log ('component did update ' + this.state.number);
    let amIplaying = this.props.playingTurn == this.state.number ? true : false;
    this.setState( (prevState,props) => { return { playing : amIplaying } } );
  }
  */


  render() {
    return (
      <div className={`player ${this.state.playing ? 'active' : 'inactive'}`}>
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
        playingTurn : state.playerReducer.playingTurn
  };
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    addPlayer : (name, number, isHuman) => dispatch ( addPlayerAction (name, number, isHuman) )
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Player);