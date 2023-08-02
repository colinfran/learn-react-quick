---
sidebar_position: 1
---

# Using React Context for State Management

In this lesson, we'll learn about React Context, a built-in feature that allows us to manage global state in a React application without prop drilling.

## Understanding Global State
   - Explain the concept of global state and why it's essential for certain data that needs to be accessible across multiple components.

## Create a Context
   - In your project, create a new file called `AppContext.js`.
   - Import React and create a new context using `React.createContext()`.
   ```jsx
   import React from 'react';
   const AppContext = React.createContext();
   ```

## Wrap the App with Context Provider
   - In your main application file (e.g., `App.js`), wrap the entire application with the `AppContext.Provider`.
   - Provide an initial value for the context (this can be an object or a state variable).

## Accessing Global State
   - In any component that needs access to the global state, import the `AppContext` and use the `useContext` hook to access the data.
   ```jsx
   import React, { useContext } from 'react';
   import AppContext from './AppContext';
   
   function MyComponent() {
     const appState = useContext(AppContext);
     // Use appState data as needed
   }
   ```

## Updating Global State
   - To update the global state, create functions in the `AppContext` file that modify the state. You can pass these functions down through the context to be used in child components.
   ```jsx
   const AppContext = React.createContext();
   
   function AppContextProvider({ children }) {
     const [globalState, setGlobalState] = React.useState(initialState);
   
     const updateGlobalState = (newValue) => {
       setGlobalState(newValue);
     };
   
     return (
       <AppContext.Provider value={{ state: globalState, updateState: updateGlobalState }}>
         {children}
       </AppContext.Provider>
     );
   }
   ```

## Testing the Context Provider
   - Test the global state by updating it in one component and verifying that the changes are reflected in other components that access the context.

---

By the end of this lesson, you'll have a basic understanding of how to use React Context to manage global state in your application.
