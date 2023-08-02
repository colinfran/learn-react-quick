---
sidebar_position: 2
---

# Testing React Components and Interactions

In this lesson, we'll learn how to test React components that interact with each other, such as the TodoForm and TodoList components in the Todo app. We'll simulate user interactions and test the overall behavior of the app.


## Creating a Test Suite
   - Create a new test file for your Todo app. For example, create a file called `TodoApp.test.js`.
   - Import the necessary dependencies at the beginning of the test file, including your custom components and React Testing Library functions:
   ```jsx
   import React from 'react';
   import { render, fireEvent } from '@testing-library/react';
   import TodoApp from './TodoApp'; // Assume this is the main component that renders TodoForm and TodoList.
   ```

## Writing Test Cases for Todo Form
   - Write test cases to simulate user interactions with the TodoForm component and test the functionality of adding new tasks:
   ```jsx
   test('adding a new task', () => {
     const { getByPlaceholderText, getByText } = render(<TodoApp />);
     const input = getByPlaceholderText('Add a new task');
     const addButton = getByText('Add Task');
     
     // Simulate user typing in the input

 field and clicking the "Add Task" button
     fireEvent.change(input, { target: { value: 'New test task' } });
     fireEvent.click(addButton);
     
     // Assert that the new task is added to the list
     expect(getByText('New test task')).toBeInTheDocument();
   });
   ```

## Writing Test Cases for Todo List
   - Write test cases to test the functionality of marking tasks as completed and deleting tasks from the TodoList component:
   ```jsx
   test('marking a task as completed', () => {
     const { getByText } = render(<TodoApp />);
     const task = getByText('Test task'); // Assuming 'Test task' is a task in the initial state
     const checkbox = task.querySelector('input[type="checkbox"]');
     
     // Simulate clicking the checkbox to mark the task as completed
     fireEvent.click(checkbox);
     
     // Assert that the task is now marked as completed
     expect(task).toHaveClass('completed');
   });

   test('deleting a task', () => {
     const { getByText, queryByText } = render(<TodoApp />);
     const task = getByText('Test task'); // Assuming 'Test task' is a task in the initial state
     const deleteButton = task.querySelector('button');
     
     // Simulate clicking the delete button to remove the task
     fireEvent.click(deleteButton);
     
     // Assert that the task is removed from the list
     expect(queryByText('Test task')).not.toBeInTheDocument();
   });
   ```

## Run Tests
   - Run your tests using the Jest test runner. In the terminal, enter:
   ```
   npm test
   ```
   - Jest will execute all the test cases you've written, and you'll see the results in the terminal.

By the end of this lesson, you'll have written comprehensive tests for your Todo app, including testing interactions between components. These tests will give you confidence in the functionality and behavior of your app as you continue to develop and make changes.

---

Congratulations! You have completed both lessons in Section 10 ("Introduction to React Testing"). Testing is an essential part of the development process, and now you have the skills to test your React components effectively. Happy testing!
