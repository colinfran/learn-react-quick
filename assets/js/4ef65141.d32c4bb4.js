"use strict";(self.webpackChunklearnreactquick=self.webpackChunklearnreactquick||[]).push([[181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(m,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="Creating Controlled Forms",i={unversionedId:"forms-in-react/creating-controlled-forms",id:"forms-in-react/creating-controlled-forms",title:"Creating Controlled Forms",description:"In this lesson, we'll explore how to create controlled forms in React. Controlled forms allow us to manage form state using React components, making it easier to handle form input and user interactions.",source:"@site/docs/forms-in-react/creating-controlled-forms.md",sourceDirName:"forms-in-react",slug:"/forms-in-react/creating-controlled-forms",permalink:"/learn-react-quick/course/forms-in-react/creating-controlled-forms",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Forms in React",permalink:"/learn-react-quick/course/category/forms-in-react"},next:{title:"Form Validation and Error Handling",permalink:"/learn-react-quick/course/forms-in-react/form-validation-and-error-handling"}},m={},s=[{value:"Create a New React Component",id:"create-a-new-react-component",level:2},{value:"Set Up the Form Structure",id:"set-up-the-form-structure",level:2},{value:"Create State for the Form",id:"create-state-for-the-form",level:2},{value:"Handle Form Input Changes",id:"handle-form-input-changes",level:2},{value:"Bind Form Inputs to State",id:"bind-form-inputs-to-state",level:2},{value:"Handle Form Submission",id:"handle-form-submission",level:2},{value:"Complete the Component",id:"complete-the-component",level:2},{value:"Use the Controlled Form Component",id:"use-the-controlled-form-component",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-controlled-forms"},"Creating Controlled Forms"),(0,a.kt)("p",null,"In this lesson, we'll explore how to create controlled forms in React. Controlled forms allow us to manage form state using React components, making it easier to handle form input and user interactions."),(0,a.kt)("h2",{id:"create-a-new-react-component"},"Create a New React Component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm.js")," in your project's components folder."),(0,a.kt)("li",{parentName:"ul"},"Import React at the top of the file: ",(0,a.kt)("inlineCode",{parentName:"li"},"import React from 'react';"))),(0,a.kt)("h2",{id:"set-up-the-form-structure"},"Set Up the Form Structure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm")," component, create a form element using the ",(0,a.kt)("inlineCode",{parentName:"li"},"<form>")," tag."),(0,a.kt)("li",{parentName:"ul"},"Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"<input>")," element for a username field with a ",(0,a.kt)("inlineCode",{parentName:"li"},'type="text"')," attribute and a ",(0,a.kt)("inlineCode",{parentName:"li"},'name="username"')," attribute."),(0,a.kt)("li",{parentName:"ul"},"Add a submit button using the ",(0,a.kt)("inlineCode",{parentName:"li"},"<button>")," tag with a ",(0,a.kt)("inlineCode",{parentName:"li"},'type="submit"')," attribute.")),(0,a.kt)("h2",{id:"create-state-for-the-form"},"Create State for the Form"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm")," component, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," hook to create state variables for the form data. For example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const [formData, setFormData] = React.useState({\n  username: '',\n});\n")))),(0,a.kt)("h2",{id:"handle-form-input-changes"},"Handle Form Input Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange")," event handler to the username input element to update the state when the user types in the input field."),(0,a.kt)("li",{parentName:"ul"},"Inside the event handler function, update the state with the new value of the input:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const handleInputChange = (event) => {\n  const { name, value } = event.target;\n  setFormData({ ...formData, [name]: value });\n};\n")))),(0,a.kt)("h2",{id:"bind-form-inputs-to-state"},"Bind Form Inputs to State"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect the form inputs to the state by setting their ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," attribute to the corresponding state values:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<input\n  type="text"\n  name="username"\n  value={formData.username}\n  onChange={handleInputChange}\n/>\n')))),(0,a.kt)("h2",{id:"handle-form-submission"},"Handle Form Submission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit")," event handler to the form element to handle form submission."),(0,a.kt)("li",{parentName:"ul"},"Inside the event handler function, prevent the default form submission behavior using ",(0,a.kt)("inlineCode",{parentName:"li"},"event.preventDefault()")," and perform any necessary actions with the form data.")),(0,a.kt)("h2",{id:"complete-the-component"},"Complete the Component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finish the ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm")," component by closing the form element and exporting the component.")),(0,a.kt)("h2",{id:"use-the-controlled-form-component"},"Use the Controlled Form Component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the main application file, import the ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm")," component."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlledForm")," component inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement of the main component to render it on the screen.")),(0,a.kt)("p",null,"Now you have a fully functional controlled form in your React application. As the user types in the input field, the state will update, and when the form is submitted, you can access the form data from the state."))}p.isMDXComponent=!0}}]);