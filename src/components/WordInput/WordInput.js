import React, {Component} from 'react';

import './WordInput.css';

import {connect} from 'react-redux';

import {changeToNextPlayerAction} from '../Player/Player.actions';

class WordInput extends Component {

    constructor( props )
    {
        super ( props );
        this.state = { allowed : false };
    }

    handleKeyPress (e)
    {
        if ( e.key === 'Enter' )
        {
            this.props.changeToNextPlayer();
        }
    }

    render ()
    {
        return (
            <div className="word-input-container">
                <input className={`word-input ${this.props.gameStarted ? 'allowed' : 'blocked'}`} 
                       type="text" 
                       placeholder={`${ this.props.gameStarted ? 'Enter your word !' : ''}`}
                       onKeyPress={this.handleKeyPress.bind(this)}/> 
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        gameStarted  : state.appReducer.gameStarted,
        playerNumber : state.playerReducer.playingTurn
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        //addWordToList : (word, player_number) => dispatch ( ),
        changeToNextPlayer  : () => dispatch (changeToNextPlayerAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);