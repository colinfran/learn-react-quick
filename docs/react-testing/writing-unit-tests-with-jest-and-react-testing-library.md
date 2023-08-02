---
sidebar_position: 1
---

# Writing Unit Tests with Jest and React Testing Library

In this lesson, we'll introduce you to writing unit tests for your React components using Jest and React Testing Library. Unit tests help ensure that individual parts of your code work as expected and can catch bugs early in the development process.

## Setting up Jest and React Testing Library
   - If you haven't already, make sure you have Jest and React Testing Library installed in your project. You can install them using npm or yarn:
   ```
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

## Writing a Simple Test
   - Create a new test file for your TodoItem component. For example, create a file called `TodoItem.test.js`.
   - Import the necessary dependencies at the beginning of the test file:
   ```jsx
   import React from 'react';
   import { render } from '@testing-library/react';
   import TodoItem from './TodoItem';
   ```

## Writing a Basic Test Case
   - Write a basic test case to check if the TodoItem component renders without any errors. Use the `render` function from React Testing Library to render the component:
   ```jsx
   test('renders TodoItem component without errors', () => {
     render(<TodoItem task={{ id: 1, description: 'Test task', completed: false }} />);
   });
   ```

## Testing Component Content
   - Add more test cases to check if the component renders the correct content. You can use Jest's `expect` and `toBe` functions along with React Testing Library's `getByText` function to assert that certain content is present in the component:
   ```jsx
   test('displays task description', () => {
     const task = { id: 1, description: 'Test task', completed: false };
     const { getByText } = render(<TodoItem task={task} />);
     expect(getByText(task.description)).toBeInTheDocument();
   });

   test('displays checkbox to mark task as completed', () => {
     const task = { id: 1, description: 'Test task', completed: false };
     const { getByRole } = render(<TodoItem task={task} />);
     const checkbox = getByRole('checkbox');
     expect(checkbox).toBeInTheDocument();
     expect(checkbox).not.toBeChecked();
   });
   ```

## Testing Interactions
   - Write test cases to simulate interactions with the component and ensure that it behaves correctly. For example, you can test if clicking the checkbox calls the appropriate function to mark the task as completed:
   ```jsx
   test('calling toggleTaskCompletion when checkbox is clicked', () => {
     const task = { id: 1, description: 'Test task', completed: false };
     const toggleTaskCompletion = jest.fn();
     const { getByRole } = render(<TodoItem task={task} toggleTaskCompletion={toggleTaskCompletion} />);
     const checkbox = getByRole('checkbox');
     checkbox.click();
     expect(toggleTaskCompletion).toHaveBeenCalledTimes(1);
     expect(toggleTaskCompletion).toHaveBeenCalledWith(task.id);
   });
   ```

## Run Tests
   - Run your tests using the Jest test runner. In the terminal, enter:
   ```
   npm test
   ```
   - Jest will execute all the test cases you've written, and you'll see the results in the terminal.

--- 

By the end of this lesson, you'll have written unit tests for your TodoItem component using Jest and React Testing Library. These tests will help you ensure that your component behaves as expected under different scenarios.
