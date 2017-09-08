import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Warrior.css';

class Warrior extends Component {

constructor (props)
    {
      super(props);

      this.state = {
        playerNumber: props.playerNumber,
        position: props.position,
        pixelsToMove :  { left:  props.position === "left" ? 135  : -135 , top: 0 },
        attacking : false,
        gettingHit : false,
        falling: false
      };
    }


    componentWillReceiveProps(nextProps)
    {
      if ( nextProps.lastWord.playerNumber != this.state.playerNumber )
      {
          let new_points = this.state.position === "left" ? this.state.pixelsToMove.left - nextProps.lastWord.points: this.state.pixelsToMove.left + nextProps.lastWord.points;
          let falling = false;
          let gettingHit = false;
          if ( (this.state.position === 'left' && new_points < -130) || (this.state.position === 'right' && new_points > 130  ) )
            falling = true;
          else if ( nextProps.lastWord.playerNumber > 0 )
            gettingHit = true;
            
//          new_points *= 1.5;
        console.info ('will receive props : ' + + new_points);
          this.setState ( (prevState,props) => {
            return { ...prevState, pixelsToMove : {left : new_points, top: falling? 100 : 0}, attacking: false, falling: falling, gettingHit: gettingHit };
          });
      }
      else
      {
        this.setState((prevState) => {return {...prevState, attacking: true}});
      }
    }


  render() {

    return (
      <div className="warrior">
        <img className={`${this.state.position} ${this.state.falling ? 'falling' : ''}`} 
        src={`images/player-icons/${this.state.attacking ? 'player-attacking' : (this.state.falling || this.state.gettingHit ? 'player-falling' : 'player-standing')}.png`}
        style={ this.state.pixelsToMove }  ></img>
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

/*
const mapStateToProps = (reducers) => {
  console.log(reducers);
  return {
      myreducer : reducers.reducer2
  }
}

//export default Clock;
export default connect (mapStateToProps)(Warrior);
*/