import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StartGame.css';

import {initGameAction, startGameAction, finishGameAction} from './StartGame.actions';
import {changeToNextPlayerAction} from '../Player/Player.actions';
import {addWordAction} from '../WordInput/WordInput.actions';

import {connect} from 'react-redux';


class StartGame extends Component {

    constructor (props)
    {
        super(props);
        this.state = {
                seconds: this.props.timerValue,
                timer : null,
                gameOverVisible : false,
                fightVisible : false
        };
    }

    startGameClickHandler () 
    {
        if (this.props.gameInitiated && !this.props.gameStarted)
        {
            this.setState ({seconds : this.props.timerValue});

            this.props.gameStarted ? null : ( () => {
                 this.props.addWord('',-1);
                 this.props.startGame(); 
            })();
        }
    }

    componentDidMount()
    {
        this.props.initGame();
    }

    componentWillReceiveProps (nextProps)
    {
        // new game ?
        if ( this.props.gameFinished && nextProps.gameStarted )
        {
            let timerID = setInterval(this.tick.bind(this), 1000);
            this.setState({timer: timerID});
            this.props.changeToNextPlayer(1);
            this.setState ((prevState) => { return {...prevState, fightVisible : true, gameOverVisible: false}; } );
        }
        // game finished before timeout?
        else if (nextProps.gameFinished && this.props.gameStarted)
        {
            this.stopTimer();
        }
    }


    tick ()
    {
        this.setState ((prevState) => {
            return {
                seconds : prevState.seconds - 1
            };
        });
        if (this.state.seconds === 0)
        {
            this.stopTimer();
            this.finishGame();
        }
    }

    stopTimer ()
    {
        clearInterval(this.state.timer);
        this.setState ((prevState) => { return {...prevState, fightVisible: false, gameOverVisible : true}; } );
    }

    finishGame()
    {
        this.props.finishGame();
    }

  render() 
  {
    return (
      <div className="start-game">
          <button onClick={ () =>  this.startGameClickHandler() } > Start Playing !</button>
          <div className={`clock visible`}>
            <h6>Time remaining : <span className="timer">{this.state.seconds}</span></h6>
          </div>
          <div className={`fight ${this.state.fightVisible ? 'visible' : 'hidden'}`} >
              <h3>FIGHT !</h3>
          </div>
          <div className={`game-over ${this.state.gameOverVisible ? 'visible' : 'hidden'}`}>
              <h3>GAME OVER !</h3>
          </div>
      </div>
    );
  }

}

StartGame.defaultProps = {
    timerValue: 60
}
StartGame.propTypes = {
    timerValue: PropTypes.number
}

const mapStateToProps = (state) => 
{
    return {
        gameInitiated : state.appReducer.gameInitiated,
        gameStarted: state.appReducer.gameStarted,
        gameFinished: state.appReducer.gameFinished
    };
};

const mapDispatchToProps = dispatch =>
{
    return { initGame    : () => dispatch ( initGameAction ()  ),
             startGame   : () => dispatch ( startGameAction ()  ),
             finishGame  : () => dispatch ( finishGameAction () ),
             changeToNextPlayer : (player_number) => dispatch ( changeToNextPlayerAction (player_number) ),
             addWord : (word, player_number) => dispatch (addWordAction(word, player_number)),
    };
};

export default connect (mapStateToProps, mapDispatchToProps) (StartGame);