import React, {Component} from 'react';

import './WordInput.css';

import {connect} from 'react-redux';

import {addWordToListAction} from './WordInput.actions';
import {changeToNextPlayerAction} from '../Player/Player.actions';


class WordInput extends Component {

    constructor( props )
    {
        super ( props );
        this.state = { allowed : false };
    }

    handleKeyPress (e)
    {
        if (  this.props.gameStarted && e.key === 'Enter')
        {
            let wordToAdd = this.refs.myWordInput.value;

            this.props.addWordToList(wordToAdd, this.props.actualPlayerNumber);

            this.refs.myWordInput.value = '';
            this.props.changeToNextPlayer();
        }
    }

    render ()
    {
        return (
            <div className="word-input-container">
                <input ref="myWordInput" className={`word-input ${this.props.gameStarted ? 'allowed' : 'blocked'}`} 
                       type="text" 
                       placeholder={`${ this.props.gameStarted ? 'Enter your word !' : ''}`}
                       onKeyPress={this.handleKeyPress.bind(this)} /> 
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        gameStarted  : state.appReducer.gameStarted,
        actualPlayerNumber : state.playerReducer.actualPlayerNumber
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        addWordToList : (word, player_number) => dispatch (addWordToListAction(word, player_number)),
        changeToNextPlayer  : () => dispatch (changeToNextPlayerAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);