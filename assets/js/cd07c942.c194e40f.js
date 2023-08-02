"use strict";(self.webpackChunklearnreactquick=self.webpackChunklearnreactquick||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},f),{},{components:n})):r.createElement(h,a({ref:t},f))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="Handling Side Effects with useEffect Hook",c={unversionedId:"react-hooks/handling-side-effects-with-useeffect",id:"react-hooks/handling-side-effects-with-useeffect",title:"Handling Side Effects with useEffect Hook",description:"In this lesson, you will learn how to handle side effects in functional components using the useEffect Hook. Side effects include tasks like data fetching, subscriptions, or manually interacting with the DOM, which need to be performed after React renders the component.",source:"@site/docs/react-hooks/handling-side-effects-with-useeffect.md",sourceDirName:"react-hooks",slug:"/react-hooks/handling-side-effects-with-useeffect",permalink:"/learn-react-quick/course/react-hooks/handling-side-effects-with-useeffect",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Managing State with useState Hook",permalink:"/learn-react-quick/course/react-hooks/managing-state-with-usestate-hook"},next:{title:"Forms in React",permalink:"/learn-react-quick/course/category/forms-in-react"}},s={},l=[{value:"Importing useEffect",id:"importing-useeffect",level:2},{value:"Syntax and Purpose",id:"syntax-and-purpose",level:2},{value:"Effect Execution",id:"effect-execution",level:2},{value:"Cleanup with useEffect",id:"cleanup-with-useeffect",level:2}],f={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handling-side-effects-with-useeffect-hook"},"Handling Side Effects with useEffect Hook"),(0,o.kt)("p",null,"In this lesson, you will learn how to handle side effects in functional components using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," Hook. Side effects include tasks like data fetching, subscriptions, or manually interacting with the DOM, which need to be performed after React renders the component."),(0,o.kt)("h2",{id:"importing-useeffect"},"Importing useEffect"),(0,o.kt)("p",null,"   To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," Hook, import it from React."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useEffect } from 'react';\n")),(0,o.kt)("h2",{id:"syntax-and-purpose"},"Syntax and Purpose"),(0,o.kt)("p",null,"   The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," Hook takes two arguments: a callback function and an optional array of dependencies. The callback function is where you define the side effect you want to perform, and the dependencies array is used to specify which values the effect depends on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  // Side effect logic here\n}, [dependency1, dependency2]);\n")),(0,o.kt)("h2",{id:"effect-execution"},"Effect Execution"),(0,o.kt)("p",null,"   The callback function inside ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," will run after every render of the component. If you want to control when the effect runs, you can use dependencies. If the dependencies array is empty, the effect runs only once after the initial render."),(0,o.kt)("h2",{id:"cleanup-with-useeffect"},"Cleanup with useEffect"),(0,o.kt)("p",null,"   The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," Hook also supports cleanup functions, which run when the component is unmounted or before the effect is re-run. The cleanup function is returned from the effect callback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  // Side effect logic here\n\n  return () => {\n    // Cleanup logic here\n  };\n}, [dependency]);\n")),(0,o.kt)("p",null,"   This is useful for tasks like clearing timers or canceling subscriptions when the component is no longer in use."),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Congratulations! You\'ve completed the lessons in Section 4 on "React Hooks." With React Hooks, you can build more functional and maintainable components without the need for class components. In the next section, we will explore React Routing to create navigation within your React applications. Keep up the excellent progress!'))}p.isMDXComponent=!0}}]);