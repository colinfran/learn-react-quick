---
sidebar_position: 2
---

# Form Validation and Error Handling

In this lesson, we'll learn how to perform form validation and error handling in React. Validating user input is essential to ensure data integrity and provide a smooth user experience.

## Add Validation Rules
   - Determine the validation rules for your form fields (e.g., required, minimum length, maximum length, etc.).
   - Consider using a library like Yup for more complex validation.

## Add Validation State
   - Create state variables to store the validation status of each form field.
   - For example:
   ```jsx
   const [usernameError, setUsernameError] = React.useState('');
   ```

## Perform Validation on Form Submission
   - Modify the form's `onSubmit` event handler to include form validation logic.
   - Validate the form fields according to your rules and update the validation state accordingly.
   - If there are errors, prevent the default form submission behavior and display error messages to the user.

## Update Input Styling Based on Validation
   - Modify the CSS styling of the form inputs to indicate validation errors visually.
   - For instance, you can add a red border or background to the input fields that have validation errors.

## Handle Error Display
   - Display the error messages near the respective form fields to inform the user about the validation errors.
   - Show the error messages conditionally based on the validation state of each form field.

## Optional: Real-Time Validation
   - If desired, you can implement real-time validation, where error messages appear as the user types in the form field instead of waiting for form submission.

## Testing the Form
   - Test the form with various scenarios, including valid and invalid input, to ensure the error handling works as expected.

## Completing the Component
   - Make sure the `ControlledForm` component is still functioning correctly after adding validation and error handling.
---

By the end of this lesson, your form will be equipped with validation and error handling features, providing a more user-friendly experience and ensuring that the data submitted by users meets your specified requirements.

---

Congratulations! You have completed both lessons in Section 6 ("Forms in React"). In the next section, we will cover styling React components, where you'll learn how to add styles to your React components using inline styles and explore CSS-in-JS with Styled Components. Happy coding!