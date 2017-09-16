import React, { Component } from 'react';
//import './.css';

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };
  }
  onClick() {
    this.setState({
      oddArray: this.state.userInput.split(' ').filter(c => c % 2),
      evenArray: this.state.userInput.split(' ').filter(c => !(c % 2))
    });
  }
  onChange(e) {
    this.setState({ userInput: e.target.value });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input onChange={e => this.onChange(e)} className="inputLine" />
        <button
          onClick={() => this.onClick()}
          className="confirmationButton"
          type="button"
        >
          Split
        </button>
        <span className="resultsBox">
          {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
