import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Warrior.css';

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
      else if ( nextProps.lastWord.playerNumber != this.state.playerNumber ) // defending
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
              coordinatesForWarrior : {left : new_coordinates_for_warrior , top: falling? 374 : 0},
              coordinatesForHadoogen: {left: new_coordinate_for_hadoogen, opacity: gettingHit? 1 : 0} ,
              attacking: attacking,
              falling: falling,
              gettingHit: gettingHit };
      });

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

export default connect(mapStateToProps) (Warrior);