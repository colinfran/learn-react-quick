"use strict";(self.webpackChunklearnreactquick=self.webpackChunklearnreactquick||[]).push([[859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Setting up the Development Environment",l={unversionedId:"introduction-to-react/setting-up-environment",id:"introduction-to-react/setting-up-environment",title:"Setting up the Development Environment",description:"Before we dive into creating React applications, let's set up our development environment to ensure we have all the necessary tools in place.",source:"@site/docs/introduction-to-react/setting-up-environment.md",sourceDirName:"introduction-to-react",slug:"/introduction-to-react/setting-up-environment",permalink:"/learn-react-quick/course/introduction-to-react/setting-up-environment",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is React.js?",permalink:"/learn-react-quick/course/introduction-to-react/what-is-react"},next:{title:"Creating Your First React Component!",permalink:"/learn-react-quick/course/introduction-to-react/creating-first-component"}},s={},p=[{value:"Installing Node.js and npm",id:"installing-nodejs-and-npm",level:2},{value:"Download Code Editor",id:"download-code-editor",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-the-development-environment"},"Setting up the Development Environment"),(0,o.kt)("p",null,"Before we dive into creating React applications, let's set up our development environment to ensure we have all the necessary tools in place."),(0,o.kt)("h2",{id:"installing-nodejs-and-npm"},"Installing Node.js and npm"),(0,o.kt)("p",null,"Node.js is a JavaScript runtime that allows us to run JavaScript code outside the browser, making it suitable for server-side applications and development tools. It comes bundled with npm (Node Package Manager), which we will use to manage our project's dependencies."),(0,o.kt)("p",null,"To install Node.js and npm, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the official Node.js website (",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"https://nodejs.org/"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the appropriate installer for your operating system (Windows, macOS, or Linux).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the installer and follow the installation instructions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After installation, open a terminal or command prompt and type the following command to verify that Node.js and npm are installed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\nnpm -v\n")),(0,o.kt)("p",{parentName:"li"},"You should see the version numbers of Node.js and npm printed in the terminal if the installation was successful."))),(0,o.kt)("h2",{id:"download-code-editor"},"Download Code Editor"),(0,o.kt)("p",null,"There are literally so many code editors to choose from its impossible to list them all here. I will, however, list the most popular ones and the links to download them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"VS Code - ","*","*","Author's choice","*","*"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.sublimetext.com/download"},"Sublime Text"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/webstorm/download/#section=mac"},"WebStorm - ","*","*","Requires subscription - free for students","*","*")))))}d.isMDXComponent=!0}}]);