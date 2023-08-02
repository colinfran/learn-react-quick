---
sidebar_position: 3
---

# Creating Your First React Component!

Now that you have your environment set up, lets start building!


## Step 1: Create a New React Project

Let's create a new React project. In your terminal or command prompt, navigate to the directory where you want to create your project and run the following command:

```
npx create-react-app my-first-react-app
```

This will create a new folder named `my-first-react-app` and set up a basic React project inside it.

## Step 2: Navigate to the Project Directory

Change into the newly created project directory:

```
cd my-first-react-app
```

## Step 3: Explore the Project Structure

Before we start creating our first component, let's take a quick look at the project structure. The main files we'll be working with are located in the `src` folder. Open your project in a code editor and explore the files inside the `src` folder.

## Step 4: Create Your First Functional Component

Now it's time to create our first React component! We'll start with a functional component.

Open the `App.js` file in the `src` folder and replace its content with the following code:

```jsx
import React from 'react';

function MyFirstComponent() {
  return (
    <div>
      <h1>Hello, this is my first functional component!</h1>
    </div>
  );
}

export default MyFirstComponent;
```

## Step 5: Rendering the Component

To see our component in action, we need to render it in the `App.js` file.

Open `App.js` and replace its content with the following code:

```jsx
import React from 'react';
import MyFirstComponent from './MyFirstComponent';

function App() {
  return (
    <div>
      <h1>Welcome to my first React app!</h1>
      <MyFirstComponent />
    </div>
  );
}

export default App;
```

## Step 6: Start the Development Server

Now that we've created and rendered our first functional component, let's see it in the browser.

In the terminal or command prompt, make sure you are in the project directory (`my-first-react-app`). Then run the following command:

```
npm start
```

This will start the development server, and you should see your React app running in your default web browser. You will see both the "Welcome to my first React app!" heading from the `App.js` file and the "Hello, this is my first functional component!" heading from our `MyFirstComponent` functional component.


## Step 7: Check the Result

Everytime you save your changes, the development server will automatically update your app in the browser. You should now see both the functional component and the class component rendered on the page.

---

Congratulations! You've successfully created your first functional component in React using `create-react-app`!
