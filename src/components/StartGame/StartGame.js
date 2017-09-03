import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StartGame.css';

import {initGameAction, startGameAction, finishGameAction} from './StartGame.actions';

import {connect} from 'react-redux';


class StartGame extends Component {

    constructor (props)
    {
        super(props);
        this.state = {
                seconds: this.props.timerValue,
                timer : null
        };
    }

    startGameClickHandler () 
    {
        if (this.props.gameInitiated && !this.props.gameStarted)
        {
            this.setState ({seconds : this.props.timerValue});
            this.props.gameStarted ? null : this.props.startGame();
        }
        //else
        //    this.props.gameStarted ? null : this.props.initGame();

    }

    componentDidMount()
    {
        this.props.initGame();
    }

    componentWillReceiveProps (nextProps)
    {
        if ( this.props.gameFinished && nextProps.gameStarted )
        {
            let timerID = setInterval(this.tick.bind(this), 1000);
            this.setState({timer: timerID});
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
            clearInterval(this.state.timer);
            this.props.finishGame();
        }
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
    return { initGame    : () => dispatch ( initGameAction () ),
             startGame   : () => dispatch ( startGameAction() ),
             finishGame  : () => dispatch ( finishGameAction()  )
    };
};

export default connect (mapStateToProps, mapDispatchToProps) (StartGame);