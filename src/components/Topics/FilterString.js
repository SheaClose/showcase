import React, { Component } from 'react';
//import './.css';

export default class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        'James',
        'Jessica',
        'Melody',
        'Tyler',
        'Blake',
        'Jennifer',
        'Mark',
        'Maddy'
      ],
      userInput: '',
      filteredNames: []
    };
  }
  onChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  onClick() {
    var filteredNames = this.state.names.filter(c => {
      return c.includes(this.state.userInput);
    });
    this.setState({ filteredNames });
  }

  render() {
    return (
      <div className="">
        <div className="puzzleBox filterStringPB">
          <h4> Filter String </h4>
          <p>Names: {this.state.names.join(' ')}</p>
          <br />
          <input onChange={e => this.onChange(e)} className="inputLine" />
          <button
            onClick={() => this.onClick()}
            className="confirmationButton"
            type="button"
          >
            Split
          </button>
          <span className="resultsBox">
            {JSON.stringify(this.state.filteredNames)}
          </span>
        </div>
      </div>
    );
  }
}
