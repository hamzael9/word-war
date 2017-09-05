import React, { Component } from 'react';
import './WordList.css';

import {changeToNextPlayerAction} from '../Player/Player.actions';

import {connect} from 'react-redux';

class WordList extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        playerNumber: props.playerNumber,
        listOfWords : [] 
    };
  }

  componentWillReceiveProps(nextProps)
  {

    if (this.state.playerNumber === nextProps.wordToAdd.playerNumber)
        this.setState( (prevState) => {
            return {
                ...prevState,
                listOfWords : [...prevState.listOfWords, <WordListElement key={prevState.listOfWords.length} word={nextProps.wordToAdd.word} />]
            }
        });
    
  }

  componentDidUpdate()
  {
    if (this.state.playerNumber === this.props.wordToAdd.playerNumber)
        this.props.changeToNextPlayer();
  }

  render()
  {
    return (
      <div className="word-list">
          { this.state.listOfWords }
      </div>
    );
  }

}

class WordListElement extends Component {
    render () {
        return (
            <div className="element">
                <h6>{this.props.word}</h6>
            </div>
        );
    }
}

WordListElement.defaultProps = {
    word : "drinking"
};

const mapStateToProps = (state) =>
{
    return {
        wordToAdd : state.wordInputReducer,

    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        changeToNextPlayer : () => dispatch ( changeToNextPlayerAction() )
    };
};

export default connect (mapStateToProps, mapDispatchToProps) (WordList);