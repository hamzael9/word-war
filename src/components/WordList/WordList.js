import React, { Component } from 'react';
import './WordList.css';

class WordList extends Component {

  constructor()
  {
    super();
    this.state = {
        listOfWords : [<WordListElement key="0" />, <WordListElement key="1" />] 
    };
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

export default WordList;