---
sidebar_position: 3
---

# Handling Side Effects with useEffect Hook

In this lesson, you will learn how to handle side effects in functional components using the `useEffect` Hook. Side effects include tasks like data fetching, subscriptions, or manually interacting with the DOM, which need to be performed after React renders the component.

## Importing useEffect
   To use the `useEffect` Hook, import it from React.
   ```javascript
   import React, { useEffect } from 'react';
   ```

## Syntax and Purpose
   The `useEffect` Hook takes two arguments: a callback function and an optional array of dependencies. The callback function is where you define the side effect you want to perform, and the dependencies array is used to specify which values the effect depends on.
   ```javascript
   useEffect(() => {
     // Side effect logic here
   }, [dependency1, dependency2]);
   ```

## Effect Execution
   The callback function inside `useEffect` will run after every render of the component. If you want to control when the effect runs, you can use dependencies. If the dependencies array is empty, the effect runs only once after the initial render.

## Cleanup with useEffect
   The `useEffect` Hook also supports cleanup functions, which run when the component is unmounted or before the effect is re-run. The cleanup function is returned from the effect callback.
   ```javascript
   useEffect(() => {
     // Side effect logic here

     return () => {
       // Cleanup logic here
     };
   }, [dependency]);
   ```
   This is useful for tasks like clearing timers or canceling subscriptions when the component is no longer in use.

---

Congratulations! You've completed the lessons in Section 4 on "React Hooks." With React Hooks, you can build more functional and maintainable components without the need for class components. In the next section, we will explore React Routing to create navigation within your React applications. Keep up the excellent progress!