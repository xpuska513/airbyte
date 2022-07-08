"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3002],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(n),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48512:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Locally testing your changes",u={unversionedId:"contributing-to-airbyte/updating-documentation/locally_testing_docusaurus",id:"contributing-to-airbyte/updating-documentation/locally_testing_docusaurus",title:"Locally testing your changes",description:"testing is fun and games until it blows up",source:"@site/../docs/09-contributing-to-airbyte/10-updating-documentation/04-locally_testing_docusaurus.md",sourceDirName:"09-contributing-to-airbyte/10-updating-documentation",slug:"/contributing-to-airbyte/updating-documentation/locally_testing_docusaurus",permalink:"/contributing-to-airbyte/updating-documentation/locally_testing_docusaurus",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/10-updating-documentation/04-locally_testing_docusaurus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying and Reverting Docs",permalink:"/contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs"},next:{title:"Docusaurus / Docs",permalink:"/contributing-to-airbyte/updating-documentation/docusaurus/"}},c={},l=[],s={toc:l};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"locally-testing-your-changes"},"Locally testing your changes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"testing is fun and games until it blows up",src:n(88631).Z,width:"1200",height:"800"})),(0,o.kt)("p",null,"You can test any change you make to see how it will look in production"),(0,o.kt)("p",null,"The processes are almost identical from local testing to production so\nyou can have a high degree of confidence in the results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# navigate to docusaurus\ncd airbyte-cloud/docusaurus\n# install the packages to run docusaurus\nyarn install\n# compile the current state of airbyte-cloud/docs\n# into the website and serve it at http://localhost:3000\nyarn build && yarn serve\n# control-c sends the SIGTERM command to the running process\n# this is a common way to exit running shell applications\n# to exit the running server use control-c\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you encounter a build error there may be multiple causes\nbut usually this is due to a broken link:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- fix your broken links and the build should work\n"))),(0,o.kt)("li",{parentName:"ul"},"look at the changes you made locally,\nif they look great commit and add a funny picture to the PR for karma (technically optional)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"important note"),"\nif you run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build && yarn serve")," and make changes after that you will need\nto exit the server using ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c")," from the command line and then running the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build && yarn serve")," again to see your new changes"))}d.isMDXComponent=!0},88631:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/science-kid-65a597f28e7ba187aacc258272bdab48.jpg"}}]);