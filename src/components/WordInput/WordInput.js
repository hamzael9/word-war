import React, {Component} from 'react';

import './WordInput.css';

import {connect} from 'react-redux';

class WordInput extends Component {

    constructor( props )
    {
        super ( props );
        this.state = { allowed : false };
    }

    render ()
    {
        return (
            <div className="word-input-container">
                <input className={`word-input ${this.props.gameStarted ? 'allowed' : 'blocked'}`} type="text" placeholder={`${ this.props.gameStarted ? 'Enter your word !' : ''}`} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        gameStarted : state.appReducer.gameStarted,
        player: state.appReducer.player
    }
};

export default connect(mapStateToProps)(WordInput);