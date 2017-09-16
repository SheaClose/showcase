import React, { Component } from 'react';
//import './.css';

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }
  onChange(e) {
    this.setState({
      userInput: e.target.value,
      isPalindrome: ''
    });
  }
  onClick() {
    var isPalindrome = (function isPalindrome(x) {
      var back = x
        .toLowerCase()
        .split('')
        .slice()
        .reverse()
        .join('');
      x = x
        .toLowerCase()
        .split('')
        .slice()
        .join('');
      return x === back;
    })(this.state.userInput);
    console.log(isPalindrome);
    this.setState({ isPalindrome: isPalindrome ? 'True' : 'False' });
  }

  render() {
    return (
      <div className="">
        <div className="puzzleBox palindromePB">
          <h4> Palindrome </h4>
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
            Is Palindrome: {this.state.isPalindrome}
          </span>
        </div>
      </div>
    );
  }
}
