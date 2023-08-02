---
sidebar_position: 3
---

# Component Composition

React encourages a component-based approach to building applications. Component composition involves combining multiple smaller components to form more complex and feature-rich components.

By breaking down the UI into smaller, reusable components, you can create a more maintainable and scalable codebase. Each component focuses on a specific responsibility, making the application structure clearer and easier to manage.

Example of component composition:
```jsx
import React from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Component Composition Example</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};
```
