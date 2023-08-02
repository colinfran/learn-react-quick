"use strict";(self.webpackChunklearnreactquick=self.webpackChunklearnreactquick||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Using JSX to Create Elements",s={unversionedId:"understanding-components/using-jsx",id:"understanding-components/using-jsx",title:"Using JSX to Create Elements",description:"JSX is a powerful syntax extension that simplifies the process of creating React elements. It allows developers to write HTML-like code within JavaScript, making it easier to visualize and build the UI. JSX elements can represent both built-in HTML elements and custom React components.",source:"@site/docs/understanding-components/using-jsx.md",sourceDirName:"understanding-components",slug:"/understanding-components/using-jsx",permalink:"/learn-react-quick/course/understanding-components/using-jsx",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Functional Components vs. Class Components",permalink:"/learn-react-quick/course/understanding-components/functional-vs-class"},next:{title:"Component Composition",permalink:"/learn-react-quick/course/understanding-components/component-composition"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-jsx-to-create-elements"},"Using JSX to Create Elements"),(0,o.kt)("p",null,"JSX is a powerful syntax extension that simplifies the process of creating React elements. It allows developers to write HTML-like code within JavaScript, making it easier to visualize and build the UI. JSX elements can represent both built-in HTML elements and custom React components."),(0,o.kt)("p",null,"Example of JSX elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <h2>Welcome to my website!</h2>\n      <p>This is a JSX element representing a simple component.</p>\n      <button>Click Me</button>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0}}]);