import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Warrior.css';

class Warrior extends Component {
  render() {
    return (
      <div className="warrior">
        <span className="icon"></span>
      </div>
    );
  }
}

export default Warrior;
/*
const mapStateToProps = (reducers) => {
  console.log(reducers);
  return {
      myreducer : reducers.reducer2
  }
}

//export default Clock;
export default connect (mapStateToProps)(Warrior);
*/