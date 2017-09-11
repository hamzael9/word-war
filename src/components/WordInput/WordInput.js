import React, {Component} from 'react';

import './WordInput.css';

import {connect} from 'react-redux';

import {addWordAction} from '../WordInput/WordInput.actions';
import {changeToNextPlayerAction} from '../Player/Player.actions';


class WordInput extends Component {

    constructor( props )
    {
        super ( props );
        this.state = { allowed : false };
    }

    handleKeyPress (e)
    {
        if (  this.props.gameStarted && e.key === 'Enter' )
        {
            let wordToAdd = this.refs.myWordInput.value;
            let checkResult = this.checkWordIsValid(wordToAdd);
            if ( checkResult.isValid )
            {
                this.props.addWord(wordToAdd, this.props.actualPlayerNumber);

                
                this.refs.myWordInput.value = '';
            }
            else
            {
                alert (checkResult.msg);
            }
            
        }
    }

    checkWordIsValid (word)
    {
        let ret = {isValid: false, msg: ''};

        if ( /[0-9]/.test (word) )
        {
            ret.isValid = false;
            ret.msg = 'Numbers are not allowed !';
        }
        else if ( /[!@#$%^&*()?<>"':[]\/\+=-_}{]/.test(word) )
        {
            ret.isValid = false;
            ret.msg = 'Special Characters are not allowed !';
        }
        else if (this.props.lastWord !== undefined && this.props.lastWord !== '' && word[0] !== this.props.lastWord.substr(-1))
        {
            ret.isValid = false;
            ret.msg = `Word does not start with the last letter of the last word : ${this.props.lastWord.substr(-1)}`;
        }
        else
        {
            ret.isValid = true;
            ret.msg = '';
        }

        return ret;
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
        actualPlayerNumber : state.playerReducer.actualPlayerNumber,
        lastWord:       state.wordInputReducer.word
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        addWord : (word, player_number) => dispatch (addWordAction(word, player_number))
        //changeToNextPlayer  : () => dispatch (changeToNextPlayerAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordInput);