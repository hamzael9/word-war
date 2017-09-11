import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Warrior.css';

import {finishGameAction} from '../StartGame/StartGame.actions'
/*
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var source = audioContext.createBufferSource();
var request = new XMLHttpRequest();
request.open('GET', './punch.mp3', true);
request.responseType = 'arraybuffer';
request.onload = function(){
  audioContext.decodeAudioData(request.response, function(buffer) {
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.loop = true;
    source.start(0);
  }, function(e) {
    console.log('Audio error !', e);
  });
}

request.send();
*/
var punchAudio = new Audio('./sounds/punch.mp3');
var screamingAudio = new Audio('./sounds/screaming1.mp3');

class Warrior extends Component {

constructor (props)
    {
      super(props);

      let leftCoordinatesForWarrior = props.position === "left" ? 135  : -135 ;
      this.state = {
        playerNumber: props.playerNumber,
        position: props.position,
        coordinatesForWarrior :  { left:  leftCoordinatesForWarrior, top: 0 },
        coordinatesForHadoogen: {left: leftCoordinatesForWarrior+135, opacity: 0 },
        attacking : false,
        gettingHit : false,
        falling: false
      };
    }


    componentWillReceiveProps(nextProps)
    {
      let new_coordinates_for_warrior = 0;
      let new_coordinate_for_hadoogen = 0;
      let falling = false;
      let gettingHit = false;
      let attacking = false;

      if ( nextProps.lastWord.playerNumber < 0 ) // START OVER
      {
        new_coordinates_for_warrior = this.state.position === "left" ? 135 : -135;
      }
      else if ( nextProps.lastWord.playerNumber !== this.state.playerNumber ) // defending
      {
          gettingHit = true;
          new_coordinates_for_warrior = this.state.position === "left" ? this.state.coordinatesForWarrior.left - nextProps.lastWord.points : this.state.coordinatesForWarrior.left + nextProps.lastWord.points;
          if ( (this.state.position === 'left' && new_coordinates_for_warrior < -130) || (this.state.position === 'right' && new_coordinates_for_warrior > 130  ) )
          {
            new_coordinates_for_warrior = this.state.position === 'left' ? -195 : 195;
            falling = true;
          }
      }
      else // attacking 
      {
        attacking = true;
        new_coordinates_for_warrior = this.state.coordinatesForWarrior.left;
      }

      new_coordinate_for_hadoogen = new_coordinates_for_warrior + 130;

      this.setState ( (prevState,props) => {
            return { 
              ...prevState, 
              coordinatesForWarrior : {left : new_coordinates_for_warrior , top: falling? 362 : 0},
              coordinatesForHadoogen: {left: new_coordinate_for_hadoogen, opacity: gettingHit? 1 : 0} ,
              attacking: attacking,
              falling: falling,
              gettingHit: gettingHit };
      });

      if ( attacking )
        punchAudio.play();
      else if ( falling )
      {
        screamingAudio.play();
        this.props.finishGame();
      }

    }


  render() {

    return (
      <div className="warrior">
        <img className={`${this.state.position} ${this.state.falling ? 'falling' : ''}`} 
             src={`images/player-icons/${this.state.attacking ? 'player-attacking' : (this.state.falling || this.state.gettingHit ? 'player-falling' : 'player-standing')}.png`}
             style={ this.state.coordinatesForWarrior } >
        </img>
        <span className={`hadoogen ${this.state.position}`}
              style={ this.state.coordinatesForHadoogen } >
        </span>
      </div>
    );

  }
}

const mapStateToProps = (state) =>
{
  return {
    lastWord : state.wordInputReducer
  };
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    finishGame : () => dispatch ( finishGameAction () )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Warrior);