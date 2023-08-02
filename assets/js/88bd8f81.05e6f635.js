"use strict";(self.webpackChunklearnreactquick=self.webpackChunklearnreactquick||[]).push([[698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},l="State Management and Interaction",r={unversionedId:"building-todo-app/state-management-and-interaction",id:"building-todo-app/state-management-and-interaction",title:"State Management and Interaction",description:"In this lesson, we'll dive deeper into the state management and interaction within the Todo app. We'll enhance the app with more features and improve the user experience.",source:"@site/docs/building-todo-app/state-management-and-interaction.md",sourceDirName:"building-todo-app",slug:"/building-todo-app/state-management-and-interaction",permalink:"/learn-react-quick/course/building-todo-app/state-management-and-interaction",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Applying Concepts to Create a Todo Application",permalink:"/learn-react-quick/course/building-todo-app/applying-concepts-to-create-app"},next:{title:"Testing in React.js",permalink:"/learn-react-quick/course/category/testing-in-reactjs"}},s={},p=[{value:"Add Styling",id:"add-styling",level:2},{value:"Handling Completed Tasks",id:"handling-completed-tasks",level:2},{value:"Filtering Tasks",id:"filtering-tasks",level:2},{value:"Clear Completed Tasks",id:"clear-completed-tasks",level:2},{value:"Persistence with Local Storage",id:"persistence-with-local-storage",level:2},{value:"Improving User Experience",id:"improving-user-experience",level:2},{value:"Testing the Enhanced Todo App",id:"testing-the-enhanced-todo-app",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-management-and-interaction"},"State Management and Interaction"),(0,o.kt)("p",null,"In this lesson, we'll dive deeper into the state management and interaction within the Todo app. We'll enhance the app with more features and improve the user experience."),(0,o.kt)("h2",{id:"add-styling"},"Add Styling"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In this step, you'll add styling to your Todo app to make it visually appealing and user-friendly. You can either use inline styles or Styled Components, as we've learned in previous sections.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To keep this tutorial concise, we won't provide specific styling examples. You can add styles to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FormContainer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ListContainer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemContainer"),", and other components in the previous code examples."))),(0,o.kt)("h2",{id:"handling-completed-tasks"},"Handling Completed Tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enhance the ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItem")," component to handle marking tasks as completed when the user clicks on the checkbox. Update the state accordingly and visually indicate completed tasks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItem")," component as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const TodoItem = ({ task, toggleTaskCompletion }) => {\n  const handleCheckboxChange = () => {\n    toggleTaskCompletion(task.id);\n  };\n\n  return (\n    <ItemContainer completed={task.completed}>\n      <input type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />\n      <span>{task.description}</span>\n      <button onClick={handleDeleteClick}>Delete</button>\n    </ItemContainer>\n  );\n};\n')))),(0,o.kt)("h2",{id:"filtering-tasks"},"Filtering Tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add buttons to filter tasks based on their completion status (All, Completed, Active).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a filter function that shows only the relevant tasks based on the user's selection.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList")," component to add filtering functionality:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {\n  const [filter, setFilter] = useState('All');\n\n  const handleFilterChange = (filterType) => {\n    setFilter(filterType);\n  };\n\n  const filteredTasks = filter === 'All' ? tasks :\n    filter === 'Completed' ? tasks.filter(task => task.completed) :\n    tasks.filter(task => !task.completed);\n\n  return (\n    <ListContainer>\n      <div>\n        <button onClick={() => handleFilterChange('All')}>All</button>\n        <button onClick={() => handleFilterChange('Completed')}>Completed</button>\n        <button onClick={() => handleFilterChange('Active')}>Active</button>\n      </div>\n      {filteredTasks.map((task) => (\n        <TodoItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />\n      ))}\n    </ListContainer>\n  );\n};\n")))),(0,o.kt)("h2",{id:"clear-completed-tasks"},"Clear Completed Tasks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add a button to"),(0,o.kt)("p",{parentName:"li"},"clear all completed tasks from the list.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Implement a function to remove completed tasks from the state when the button is clicked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoList"),' component to add a "Clear Completed" button:'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {\n  // ... (previous code)\n\n  const clearCompletedTasks = () => {\n    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));\n  };\n\n  return (\n    <ListContainer>\n      <div>\n        <button onClick={() => handleFilterChange('All')}>All</button>\n        <button onClick={() => handleFilterChange('Completed')}>Completed</button>\n        <button onClick={() => handleFilterChange('Active')}>Active</button>\n        <button onClick={clearCompletedTasks}>Clear Completed</button>\n      </div>\n      {/* ... (previous code) */}\n    </ListContainer>\n  );\n};\n")))),(0,o.kt)("h2",{id:"persistence-with-local-storage"},"Persistence with Local Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enhance the Todo app by persisting the tasks in the local storage of the browser.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load tasks from local storage on app initialization and save changes to local storage when the state is updated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppContextProvider")," component to handle local storage persistence:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { createContext, useState, useEffect } from 'react';\n// ...\n\nconst AppContextProvider = ({ children }) => {\n  const [tasks, setTasks] = useState(() => {\n    const storedTasks = localStorage.getItem('tasks');\n    return storedTasks ? JSON.parse(storedTasks) : [\n      { id: 1, description: 'Learn React', completed: false },\n      { id: 2, description: 'Build a Todo App', completed: false },\n      // Add more initial tasks if needed\n    ];\n  });\n\n  useEffect(() => {\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }, [tasks]);\n\n  // ... (previous code)\n};\n")))),(0,o.kt)("h2",{id:"improving-user-experience"},"Improving User Experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Implement additional user experience improvements, such as showing the number of tasks remaining, providing feedback for empty submissions, and improving the layout and design.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"These improvements involve adding additional HTML elements, styles, and logic to the components. For example, you can display a message when the Todo list is empty or show the number of tasks that are not completed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Feel free to get creative and make the app more user-friendly!"))),(0,o.kt)("h2",{id:"testing-the-enhanced-todo-app"},"Testing the Enhanced Todo App"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test the Todo app again with the new features and verify that the user experience is improved, and tasks persist across page reloads.")),(0,o.kt)("p",null,"By the end of this lesson, you'll have a fully functional and feature-rich Todo application in React, showcasing various state management techniques and user interaction functionalities."),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Congratulations! You have completed both lessons in Section 9 ("Building a Todo App"). In the final section, we will cover Introduction to React Testing, where you\'ll learn how to write unit tests for your React components using Jest and React Testing Library. Happy coding!'))}m.isMDXComponent=!0}}]);