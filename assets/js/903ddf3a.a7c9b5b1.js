"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l="Confluence",i={unversionedId:"integrations/sources/confluence",id:"integrations/sources/confluence",title:"Confluence",description:"Overview",source:"@site/../docs/02-integrations/01-sources/confluence.md",sourceDirName:"02-integrations/01-sources",slug:"/integrations/sources/confluence",permalink:"/integrations/sources/confluence",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/01-sources/confluence.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commercetools",permalink:"/integrations/sources/commercetools"},next:{title:"Customer.io",permalink:"/integrations/sources/customer-io"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"confluence"},"Confluence"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Confluence source supports Full Refresh syncs. "),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get"},"Pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get"},"Blog Posts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-space/#api-wiki-rest-api-space-get"},"Space")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-group/#api-wiki-rest-api-group-get"},"Group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-audit/#api-wiki-rest-api-audit-get"},"Audit"))),(0,r.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/confluence/rest/intro/#about"},"Confluence API")," uses the same ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema")," types that Airbyte uses internally ","(",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),")",", so no type conversions happen as part of this source."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"The Confluence connector should not run into Confluence API limitations under normal usage. Please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confluence Account"),(0,r.kt)("li",{parentName:"ul"},"Confluence API Token"),(0,r.kt)("li",{parentName:"ul"},"Confluence domain name"),(0,r.kt)("li",{parentName:"ul"},"Confluence email address")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"this article")," to create an API token for your Confluence account. "),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-31"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9831"},"9831")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix: Spec was not pushed to cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7241"},"7241")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Confluence")))))}u.isMDXComponent=!0}}]);