import React, { Component } from 'react';
//import './.css';

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      sum: ''
    };
  }
  onChange(e, prop) {
    this.setState({
      [prop]: e.target.value
    });
  }
  onClick() {
    this.setState({
      sum: +this.state.num1 + +this.state.num2
    });
  }

  render() {
    return (
      <div className="sumPB">
        <div className="puzzleBox sumPB">
          <h4> Sum </h4>
          <br />
          <input
            onChange={e => this.onChange(e, 'num1')}
            className="inputLine"
          />
          <input
            onChange={e => this.onChange(e, 'num2')}
            className="inputLine"
          />
          <button
            onClick={() => this.onClick()}
            className="confirmationButton"
            type="button"
          >
            Sum
          </button>
          <span className="resultsBox">{this.state.sum}</span>
        </div>
      </div>
    );
  }
}
