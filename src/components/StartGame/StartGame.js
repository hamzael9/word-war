import React, { Component } from 'react';
import './StartGame.css';

import {startGameAction, stopGameAction} from './StartGame.actions';

import {connect} from 'react-redux';


class StartGame extends Component {

    constructor (props)
    {
        super(props);
        this.state = {
            seconds: 30,
            timer : null
        };
    }

    startGameClickHandler () 
    {
        this.props.gameStarted ? null : this.props.startGame();
    }

    componentWillReceiveProps (nextProps)
    {
        console.log (nextProps);
        if ( this.props.gameStarted != nextProps.gameStarted )
        {
            console.log ('game started')
            let timerID = setInterval(this.tick.bind(this), 1000);
        }
        
    }



    tick ()
    {
        this.setState ((prevState, props) => {
            return {
                seconds : prevState.seconds - 1
            }
        });
        if (this.state.seconds === 0)
            this.props.stopGame();
    }

    stopTimer ()
    {
    }

  render() 
  {
    return (
      <div className="start-game">
          <button onClick={ () =>  this.startGameClickHandler() } > Start Playing !</button>
          <div className={`clock ${this.props.gameStarted ? 'visible' : 'hidden'}`}>
            <h6>Time remaining : <span className="timer">{this.state.seconds}</span></h6>
          </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => 
{
    return {
        gameStarted: state.appReducer.gameStarted
    } 
};

const mapDispatchToProps = dispatch =>
{
    return { startGame : () =>  dispatch ( startGameAction() ),
             stopGame  : () => dispatch ( stopGameAction() )
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (StartGame);