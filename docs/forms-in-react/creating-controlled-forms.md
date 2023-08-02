---
sidebar_position: 1
---

# Creating Controlled Forms

In this lesson, we'll explore how to create controlled forms in React. Controlled forms allow us to manage form state using React components, making it easier to handle form input and user interactions.


## Create a New React Component
   - Create a new file called `ControlledForm.js` in your project's components folder.
   - Import React at the top of the file: `import React from 'react';`

## Set Up the Form Structure
   - Inside the `ControlledForm` component, create a form element using the `<form>` tag.
   - Add an `<input>` element for a username field with a `type="text"` attribute and a `name="username"` attribute.
   - Add a submit button using the `<button>` tag with a `type="submit"` attribute.

## Create State for the Form
   - In the `ControlledForm` component, use the `useState` hook to create state variables for the form data. For example:
   ```jsx
   const [formData, setFormData] = React.useState({
     username: '',
   });
   ```

## Handle Form Input Changes
   - Add an `onChange` event handler to the username input element to update the state when the user types in the input field.
   - Inside the event handler function, update the state with the new value of the input:
   ```jsx
   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setFormData({ ...formData, [name]: value });
   };
   ```

## Bind Form Inputs to State
   - Connect the form inputs to the state by setting their `value` attribute to the corresponding state values:
   ```jsx
   <input
     type="text"
     name="username"
     value={formData.username}
     onChange={handleInputChange}
   />
   ```

## Handle Form Submission
   - Add an `onSubmit` event handler to the form element to handle form submission.
   - Inside the event handler function, prevent the default form submission behavior using `event.preventDefault()` and perform any necessary actions with the form data.

## Complete the Component
   - Finish the `ControlledForm` component by closing the form element and exporting the component.

## Use the Controlled Form Component
   - In the main application file, import the `ControlledForm` component.
   - Add the `ControlledForm` component inside the `return` statement of the main component to render it on the screen.

Now you have a fully functional controlled form in your React application. As the user types in the input field, the state will update, and when the form is submitted, you can access the form data from the state.
