In this step we are going to build our `Palindrome` component.

### Instructions

<b>The problem summary:</b> Using a given string, determine if it is spelt the same backwards as it is forwards.

<b>The component outline:</b> One parent `div` element, one `h4` element, one `input` element, one `button` element, and one `span` element.

* Open `src/components/Topics/Palindrome.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox filterStringPB"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * `span` - className="resultsBox"
* Assign the `h4` element the value of `"Palindrome"`.
* Create a `constructor` method that creates an initial state:
  * `userInput` - This should default to an empty string.
  * `palindrome` - This should default to an empty string.
* Create an `onChange` prop for the input element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `palindrome`.
* Assign the `span` element the value of `palindrome`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep track of what the user input is and if the user input is a palindrome or not.

```js
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }
```

Next, let's update our `span` element to display `palindrome`.

```js
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

Next, let's update our `input` element to handle user input

```js
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to handle setting `palindrome` to `"true"` or `"false"`.

```js
  isPalindrome(userInput) {

  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/showcase/blob/solution/readme/4g.gif" />

## Step 7

### Summary

In this step we are going to build our `Sum` component.

### Instructions

<b>The problem summary:</b> Given two numbers, calculate the sum and display it.

<b>The component outline:</b> One parent `div` element, one `h4` element, two `input` elements, one `button` element, and one `span` element.

* Open src/components/Topics/Sum.js.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox sumPB"
  * The two `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * `span` - className="resultsBox"
* Assign the `h4` element the `value` of `"Sum"`.
* Create a `constructor` method that creates an initital state:
  * `number1` - This should default to `0`.
  * `number2` - This should default to `0`.
  * `sum` - This should default to `null`.
* Create an `onChange` prop for the first `input` element that updates the value of `number1` on state.
* Create an `onChange` prop for the second `input` element that updates the value of `number2` on state.
* Create an `onClick` prop for the button element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `sum`.
* Assign the `span` element the value of `sum`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"></input>
        <input className="inputLine" type="number"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep track of two numbers the user gives us and the sum of those two numbers.

```js
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
```

Next, let's update our `span` element to display `sum`.

```js
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"></input>
        <input className="inputLine" type="number"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Next, let's update our `input` elements to handle user input

```js
  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to update the value of `sum`.

```js
  add(num1, num2) {

  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/showcase/blob/solution/readme/5g.gif" />

## Black Diamond

To take this project a step further try to add more toy problems to the project throughout your time at DevMountain. This is completely optional, however this project has the potential to be a `showcase` of your knowledge to solve CS problems.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
