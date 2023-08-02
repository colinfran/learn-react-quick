---
sidebar_position: 2
---

# Creating a Simple Global State Example

In this lesson, we'll apply the concepts learned in the previous lesson to create a simple global state example using React Context.


## Setup Context Provider
   - Create a new file called `AppContext.js`.
   - Import React and create a new context using `React.createContext()`.
   - Create a context provider component that wraps your entire application and provides the global state and update functions.

## Define Global State
   - Decide on the data you want to store in the global state. For example, a simple todo list could have an array of todos and functions to add and remove todos.

## Accessing Global State and Actions
   - In components that need access to the global state or actions, import the `AppContext` and use the `useContext` hook to access the state and functions.
   - Update components to use the global state instead of local state for managing the data.

## Testing the Todo App
   - Test the todo application by adding and removing todos. Verify that the global state is updated correctly and that changes are reflected in all components that use the context.

## Cleaning Up
   - Discuss how to clean up the context and remove any unnecessary data from the global state when it's no longer needed.

---

By the end of this lesson, you'll have a simple todo application that demonstrates how to manage global state using React Context. You'll also have a solid foundation for more complex state management in larger React projects.

---

Congratulations! You have completed both lessons in Section 8 ("Managing Global State"). In the next section, we will apply the concepts learned so far to build a real-world Todo App in React. Happy coding!