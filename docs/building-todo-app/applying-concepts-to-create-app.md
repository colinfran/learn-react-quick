---
sidebar_position: 1
---

# Applying Concepts to Create a Todo Application

In this lesson, we'll apply the concepts we've learned so far to build a simple Todo application in React. The Todo app will allow users to add, complete, and remove tasks.


## Project Setup
   - Create a new React project using Create React App or any other preferred method.
   - Install any necessary dependencies. For this tutorial, we'll use Styled Components for styling, so you can install it using npm or yarn:
   ```
   npm install styled-components
   ```

## Create Components
   - Create a new folder called `components` inside the `src` folder to store your components.
   - Create a new file called `TodoForm.js` inside the `components` folder for the form component.
   - Create a new file called `TodoList.js` inside the `components` folder for the list component.
   - Create a new file called `TodoItem.js` inside the `components` folder for the individual task component.

## Implement TodoForm
   - In the `TodoForm.js` file, import React and any necessary dependencies (e.g., Styled Components).
   - Create a functional component called `TodoForm`.
   - In the component, create a form with an input field to add new tasks. Use controlled form inputs to manage the form state and the new task's description.
   ```jsx
   import React, { useState } from 'react';
   import styled from 'styled-components';
   
   const FormContainer = styled.div`
     /* Add your custom styles here */
   `;
   
   const TodoForm = () => {
     const [newTask, setNewTask] = useState('');
   
     const handleInputChange = (event) => {
       setNewTask(event.target.value);
     };
   
     const handleFormSubmit = (event) => {
       event.preventDefault();
       // Add logic to handle adding the new task to the list
       // You can use the state management concepts we've learned (e.g., React Context) to handle this.
       // For this tutorial, we'll assume you have a function called `addTask` to add the task to the list.
       addTask(newTask);
       setNewTask(''); // Clear the input field after adding the task
     };
   
     return (
       <FormContainer>
         <form onSubmit={handleFormSubmit}>
           <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a new task" />
           <button type="submit">Add Task</button>
         </form>
       </FormContainer>
     );
   };
   
   export default TodoForm;
   ```

## Implement TodoList
   - In the `TodoList.js` file, import React and any necessary dependencies (e.g., Styled Components).
   - Create a functional component called `TodoList` that receives a list of tasks as props from the parent component.
   - Map through the list of tasks and render the `TodoItem` component for each task.
   ```jsx
   import React from 'react';
   import styled from 'styled-components';
   import TodoItem from './TodoItem';
   
   const ListContainer = styled.div`
     /* Add your custom styles here */
   `;
   
   const TodoList = ({ tasks }) => {
     return (
       <ListContainer>
         {tasks.map((task) => (
           <TodoItem key={task.id} task={task} />
         ))}
       </ListContainer>
     );
   };
   
   export default TodoList;
   ```

## Implement TodoItem
   - In the `TodoItem.js` file, import React and any necessary dependencies (e.g., Styled Components).
   - Create a functional component called `TodoItem` that represents each individual task.
   - Display the task description along with a checkbox for marking the task as completed and a button for deleting the task.
   ```jsx
   import React from 'react';
   import styled from 'styled-components';
   
   const ItemContainer = styled.div`
     /* Add your custom styles here */
   `;
   
   const TodoItem = ({ task }) => {
     const handleCheckboxChange = () => {
       // Add logic to handle marking the task as completed
       // You can use the state management concepts we've learned (e.g., React Context) to handle this.
       // For this tutorial, we'll assume you have a function called `toggleTaskCompletion` to toggle the task's completion status.
       toggleTaskCompletion(task.id);
     };
   
     const handleDeleteClick = () => {
       // Add logic to handle deleting the task
       // You can use the state management concepts we've learned (e.g., React Context) to handle this.
       // For this tutorial, we'll assume you have a function called `deleteTask` to delete the task.
       deleteTask(task.id);
     };
   
     return (
       <ItemContainer>
         <input type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
         <span>{task.description}</span>
         <button onClick={handleDeleteClick}>Delete</button>
       </ItemContainer>
     );
   };
   
   export default TodoItem;
   ```

## Managing Todo State
   - In the main application file (e.g., `App.js`), import React, TodoForm, TodoList, and any necessary dependencies (e.g., Styled Components).
   - Manage the list of tasks using React `useState` hook, and create functions to add, complete, and remove tasks.
   ```jsx
   import React, { useState } from 'react';
   import styled from 'styled-components';
   import Todo

Form from './components/TodoForm';
   import TodoList from './components/TodoList';
   
   const AppContainer = styled.div`
     /* Add your custom styles here */
   `;
   
   const App = () => {
     const [tasks, setTasks] = useState([
       { id: 1, description: 'Learn React', completed: false },
       { id: 2, description: 'Build a Todo App', completed: false },
       // Add more initial tasks if needed
     ]);
   
     const addTask = (newTaskDescription) => {
       const newTask = {
         id: Date.now(), // Use a unique ID (you can use a library like uuid for production apps)
         description: newTaskDescription,
         completed: false,
       };
       setTasks([...tasks, newTask]);
     };
   
     const toggleTaskCompletion = (taskId) => {
       setTasks((prevTasks) =>
         prevTasks.map((task) =>
           task.id === taskId ? { ...task, completed: !task.completed } : task
         )
       );
     };
   
     const deleteTask = (taskId) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
     };
   
     return (
       <AppContainer>
         <h1>Todo App</h1>
         <TodoForm addTask={addTask} />
         <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
       </AppContainer>
     );
   };
   
   export default App;
   ```

## Use React Context
   - In the main application file (e.g., `App.js`), create a new file called `AppContext.js`.
   - Inside `AppContext.js`, import React and create a new context using `React.createContext()`.
   - Create a context provider component (`AppContextProvider`) that wraps the entire Todo app and provides the global state of the Todo list and the functions to update it.
   - Use `AppContextProvider` to wrap the components in the `App` component.
   ```jsx
   import React, { createContext, useState } from 'react';
   import styled from 'styled-components';
   import TodoForm from './components/TodoForm';
   import TodoList from './components/TodoList';
   
   const AppContainer = styled.div`
     /* Add your custom styles here */
   `;
   
   const AppContext = createContext();
   
   const AppContextProvider = ({ children }) => {
     const [tasks, setTasks] = useState([
       { id: 1, description: 'Learn React', completed: false },
       { id: 2, description: 'Build a Todo App', completed: false },
       // Add more initial tasks if needed
     ]);
   
     const addTask = (newTaskDescription) => {
       const newTask = {
         id: Date.now(), // Use a unique ID (you can use a library like uuid for production apps)
         description: newTaskDescription,
         completed: false,
       };
       setTasks([...tasks, newTask]);
     };
   
     const toggleTaskCompletion = (taskId) => {
       setTasks((prevTasks) =>
         prevTasks.map((task) =>
           task.id === taskId ? { ...task, completed: !task.completed } : task
         )
       );
     };
   
     const deleteTask = (taskId) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
     };
   
     return (
       <AppContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>
         {children}
       </AppContext.Provider>
     );
   };
   
   const App = () => {
     return (
       <AppContextProvider>
         <AppContainer>
           <h1>Todo App</h1>
           <TodoForm />
           <TodoList />
         </AppContainer>
       </AppContextProvider>
     );
   };
   
   export default App;
   ```

## Test the Todo App
   - Test the Todo app by adding, completing, and removing tasks. Verify that the global state is updated correctly, and the changes are reflected in all components that use the context.

--- 

By the end of this lesson, you'll have a working Todo application in React, and you'll have a good understanding of how to manage state and interaction within a real-world React application.
