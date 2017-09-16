import React, { Component } from 'react';
//import './.css';

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO'
        }
      ],
      filteredArray: [],
      userInput: ''
    };
  }
  onChange(e) {
    this.setState({ userInput: e.target.value });
  }
  onClick() {
    var filteredArray = this.state.employees.filter(c => {
      return c.hasOwnProperty(this.state.userInput);
    });
    this.setState({
      filteredArray: filteredArray
    });
  }
  render() {
    return (
      <div className="">
        <div className="puzzleBox filterObjectPB">
          <h4> Filter Object </h4>
          <p>{JSON.stringify(this.state.employees)}</p>
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
            {JSON.stringify(this.state.filteredArray)}
          </span>
        </div>
      </div>
    );
  }
}
