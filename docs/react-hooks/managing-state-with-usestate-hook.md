---
sidebar_position: 2
---

# Managing State with useState Hook

In this lesson, you will learn how to manage state in functional components using the `useState` Hook. The `useState` Hook allows you to add stateful logic to functional components without converting them into class components.

## Importing useState 
   To use the `useState` Hook, you need to import it from React.
   ```javascript
   import React, { useState } from 'react';
   ```

## Initializing State 
   To initialize state in a functional component, use the `useState` Hook by calling it with the initial state value. It returns an array with two elements: the current state value and a function to update the state.
   ```javascript
   const [count, setCount] = useState(0);
   ```
   In this example, we initialize the state with `0` and set the state variable `count` along with the `setCount` function to update it.

## Accessing and Updating State 
   You can access the state variable `count` directly, and to update it, use the `setCount` function.
   ```javascript
   // Accessing state
   <p>Count: {count}</p>

   // Updating state
   <button onClick={() => setCount(count + 1)}>Increment</button>
   ```

## Functional Updates 
   The `setState` function returned by `useState` does not automatically merge objects like the traditional `setState` in class components. If your update depends on the previous state, you can use the functional update syntax:
   ```javascript
   // Incrementing count using functional update
   <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
   ```
