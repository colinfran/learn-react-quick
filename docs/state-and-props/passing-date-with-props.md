---
sidebar_position: 2
---

# Passing Data with Props

In this lesson, you'll learn how to pass data from parent components to child components using props. Props are a way to pass data down the component tree, enabling communication between different parts of your application.


## Passing Props from Parent to Child
   In the parent component, when you render the child component, you can pass data to it using attributes. For example:
   ```javascript
   // Parent component
   render() {
     return (
       <div>
         <ChildComponent message="Hello from parent!" />
       </div>
     );
   }
   ```
   In the child component, you can access the prop using `this.props`.
   ```javascript
   // Child component
   render() {
     return (
       <div>
         <p>{this.props.message}</p>
       </div>
     );
   }
   ```
   This will render "Hello from parent!" inside the `ChildComponent`.

## Passing Complex Data
   Props can be used to pass any type of data, including objects and functions. Remember to use curly braces when passing JavaScript expressions as props.
   ```javascript
   // Parent component
   render() {
     const data = { name: "John", age: 30 };
     return (
       <div>
         <ChildComponent data={data} />
       </div>
     );
   }
   ```
