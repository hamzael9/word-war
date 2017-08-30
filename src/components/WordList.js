import React, { Component } from 'react';
import './WordList.css';

class WordList extends Component {
  render() {
    return (
      <div className="word-list">
          <WordListElement />
          <WordListElement />
          <WordListElement />
          <WordListElement />
          <WordListElement />
          <WordListElement />
      </div>
    );
  }
}

class WordListElement extends Component {
    render () {
        return (
            <div className="element">
                <h6>SomeWord</h6>
            </div>
        );
    }
}

export default WordList;