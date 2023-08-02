---
sidebar_position: 2
---

# State Management and Interaction

In this lesson, we'll dive deeper into the state management and interaction within the Todo app. We'll enhance the app with more features and improve the user experience.


## Add Styling
   - In this step, you'll add styling to your Todo app to make it visually appealing and user-friendly. You can either use inline styles or Styled Components, as we've learned in previous sections.

   - To keep this tutorial concise, we won't provide specific styling examples. You can add styles to the `FormContainer`, `ListContainer`, `ItemContainer`, and other components in the previous code examples.

## Handling Completed Tasks
   - Enhance the `TodoItem` component to handle marking tasks as completed when the user clicks on the checkbox. Update the state accordingly and visually indicate completed tasks.

   - Modify the `TodoItem` component as follows:
   ```jsx
   const TodoItem = ({ task, toggleTaskCompletion }) => {
     const handleCheckboxChange = () => {
       toggleTaskCompletion(task.id);
     };

     return (
       <ItemContainer completed={task.completed}>
         <input type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
         <span>{task.description}</span>
         <button onClick={handleDeleteClick}>Delete</button>
       </ItemContainer>
     );
   };
   ```

## Filtering Tasks
   - Add buttons to filter tasks based on their completion status (All, Completed, Active).
   - Create a filter function that shows only the relevant tasks based on the user's selection.

   - Modify the `TodoList` component to add filtering functionality:
   ```jsx
   const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
     const [filter, setFilter] = useState('All');

     const handleFilterChange = (filterType) => {
       setFilter(filterType);
     };

     const filteredTasks = filter === 'All' ? tasks :
       filter === 'Completed' ? tasks.filter(task => task.completed) :
       tasks.filter(task => !task.completed);

     return (
       <ListContainer>
         <div>
           <button onClick={() => handleFilterChange('All')}>All</button>
           <button onClick={() => handleFilterChange('Completed')}>Completed</button>
           <button onClick={() => handleFilterChange('Active')}>Active</button>
         </div>
         {filteredTasks.map((task) => (
           <TodoItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
         ))}
       </ListContainer>
     );
   };
   ```

## Clear Completed Tasks
   - Add a button to

 clear all completed tasks from the list.
   - Implement a function to remove completed tasks from the state when the button is clicked.

   - Modify the `TodoList` component to add a "Clear Completed" button:
   ```jsx
   const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
     // ... (previous code)

     const clearCompletedTasks = () => {
       setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
     };

     return (
       <ListContainer>
         <div>
           <button onClick={() => handleFilterChange('All')}>All</button>
           <button onClick={() => handleFilterChange('Completed')}>Completed</button>
           <button onClick={() => handleFilterChange('Active')}>Active</button>
           <button onClick={clearCompletedTasks}>Clear Completed</button>
         </div>
         {/* ... (previous code) */}
       </ListContainer>
     );
   };
   ```

## Persistence with Local Storage
   - Enhance the Todo app by persisting the tasks in the local storage of the browser.
   - Load tasks from local storage on app initialization and save changes to local storage when the state is updated.

   - Modify the `AppContextProvider` component to handle local storage persistence:
   ```jsx
   import React, { createContext, useState, useEffect } from 'react';
   // ...

   const AppContextProvider = ({ children }) => {
     const [tasks, setTasks] = useState(() => {
       const storedTasks = localStorage.getItem('tasks');
       return storedTasks ? JSON.parse(storedTasks) : [
         { id: 1, description: 'Learn React', completed: false },
         { id: 2, description: 'Build a Todo App', completed: false },
         // Add more initial tasks if needed
       ];
     });

     useEffect(() => {
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }, [tasks]);

     // ... (previous code)
   };
   ```

## Improving User Experience
   - Implement additional user experience improvements, such as showing the number of tasks remaining, providing feedback for empty submissions, and improving the layout and design.

   - These improvements involve adding additional HTML elements, styles, and logic to the components. For example, you can display a message when the Todo list is empty or show the number of tasks that are not completed.

   - Feel free to get creative and make the app more user-friendly!

## Testing the Enhanced Todo App
   - Test the Todo app again with the new features and verify that the user experience is improved, and tasks persist across page reloads.

By the end of this lesson, you'll have a fully functional and feature-rich Todo application in React, showcasing various state management techniques and user interaction functionalities.

---

Congratulations! You have completed both lessons in Section 9 ("Building a Todo App"). In the final section, we will cover Introduction to React Testing, where you'll learn how to write unit tests for your React components using Jest and React Testing Library. Happy coding!