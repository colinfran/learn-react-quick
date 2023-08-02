---
sidebar_position: 1
---

# Functional Components vs. Class Components

React components can be created using two primary approaches: functional components and class components.

## Functional Components

Functional components are the simplest way to create React components. They are JavaScript functions that return JSX elements. These components are lightweight and easier to read and test. They only receive `props` as input and do not have their own internal state. Functional components are ideal for simple, presentational UI elements.

Example of a functional component:
```jsx
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

Note that the function `Greeting` is written as an 'arrow function'. Arrow functions are much preferred in modern codebases but you can always technically write the function as so:
```jsx
function Greeting(props){
  return <h1>Hello, {props.name}!</h1>;
};
```

## Class Components

Class components are another way to create React components. They are ES6 classes that extend the `React.Component` class. Class components can have their own internal state and lifecycle methods. They are suitable for more complex components that require state management and handling lifecycle events.

Example of a class component:
```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}
```
