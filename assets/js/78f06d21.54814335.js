"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={description:"Pub/Sub is an asynchronous messaging service provided by Google Cloud Provider."},i="Google PubSub",l={unversionedId:"integrations/destinations/pubsub",id:"integrations/destinations/pubsub",title:"Google PubSub",description:"Pub/Sub is an asynchronous messaging service provided by Google Cloud Provider.",source:"@site/../docs/02-integrations/02-destinations/pubsub.md",sourceDirName:"02-integrations/02-destinations",slug:"/integrations/destinations/pubsub",permalink:"/integrations/destinations/pubsub",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/02-integrations/02-destinations/pubsub.md",tags:[],version:"current",frontMatter:{description:"Pub/Sub is an asynchronous messaging service provided by Google Cloud Provider."},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/integrations/destinations/postgres"},next:{title:"Pulsar",permalink:"/integrations/destinations/pulsar"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Google cloud project",id:"google-cloud-project",level:4},{value:"PubSub topic for Airbyte syncs",id:"pubsub-topic-for-airbyte-syncs",level:4},{value:"Service account",id:"service-account",level:4},{value:"Service account key",id:"service-account-key",level:4},{value:"Setup the PubSub destination in Airbyte",id:"setup-the-pubsub-destination-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-pubsub"},"Google PubSub"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Airbyte Google PubSub destination allows you to send/stream data into PubSub. Pub/Sub is an asynchronous messaging service provided by Google Cloud Provider."),(0,n.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,n.kt)("h4",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"Each stream will be output a PubSubMessage with attributes. The message attributes will be"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_stream"),": the name of stream where the data is coming from"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_namespace"),": namespace if available from the stream")),(0,n.kt)("p",null,"The data will be a serialized JSON, containing the following fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid string assigned by Airbyte to each event that is processed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a long timestamp","(","ms",")"," representing when the event was pulled from the data source."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json string representing source data.")),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"To use the PubSub destination, you'll need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Google Cloud Project with PubSub enabled"),(0,n.kt)("li",{parentName:"ul"},"A PubSub Topic to which Airbyte can stream/sync your data"),(0,n.kt)("li",{parentName:"ul"},"A Google Cloud Service Account with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Pub/Sub Editor")," role in your GCP project"),(0,n.kt)("li",{parentName:"ul"},"A Service Account Key to authenticate into your Service Account")),(0,n.kt)("p",null,"See the setup guide for more information about how to create the required resources."),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h4",{id:"google-cloud-project"},"Google cloud project"),(0,n.kt)("p",null,'If you have a Google Cloud Project with PubSub enabled, skip to the "Create a Topic" section.'),(0,n.kt)("p",null,"First, follow along the Google Cloud instructions to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#before_you_begin"},"Create a Project"),". PubSub is enabled automatically in new projects. If this is not the case for your project, find it in ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/marketplace/product/google/pubsub.googleapis.com"},"Marketplace")," and enable."),(0,n.kt)("h4",{id:"pubsub-topic-for-airbyte-syncs"},"PubSub topic for Airbyte syncs"),(0,n.kt)("p",null,"Airbyte needs a topic in PubSub to write the data being streamed/synced from your data sources. If you already have a Topic into which Airbyte should stream/sync data, skip this section. Otherwise, follow the Google Cloud guide for ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub/docs/admin#creating_a_topic"},"Creating a PubSub Topic")," to achieve this."),(0,n.kt)("h4",{id:"service-account"},"Service account"),(0,n.kt)("p",null,"In order for Airbyte to stream/sync data into PubSub, it needs credentials for a ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"Service Account")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pub/Sub Editor")," role, which grants permissions to publish messages into PubSub topics. We highly recommend that this Service Account is exclusive to Airbyte for ease of permissioning and auditing. However, you can use a pre-existing Service Account if you already have one with the correct permissions."),(0,n.kt)("p",null,"The easiest way to create a Service Account is to follow GCP's guide for ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Creating a Service Account"),". Once you've created the Service Account, make sure to keep its ID handy as you will need to reference it when granting roles. Service Account IDs typically take the form ",(0,n.kt)("inlineCode",{parentName:"p"},"<account-name>@<project-name>.iam.gserviceaccount.com")),(0,n.kt)("p",null,"Then, add the service account as a Member in your Google Cloud Project with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pub/Sub Editor")," role. To do this, follow the instructions for ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting-console"},"Granting Access")," in the Google documentation. The email address of the member you are adding is the same as the Service Account ID you just created."),(0,n.kt)("p",null,"At this point you should have a service account with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pub/Sub Editor")," project-level permission."),(0,n.kt)("h4",{id:"service-account-key"},"Service account key"),(0,n.kt)("p",null,"Service Account Keys are used to authenticate as Google Service Accounts. For Airbyte to leverage the permissions you granted to the Service Account in the previous step, you'll need to provide its Service Account Keys. See the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts#service_account_keys"},"Google documentation")," for more information about Keys."),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Creating and Managing Service Account Keys")," guide to create a key. Airbyte currently supports JSON Keys only, so make sure you create your key in that format. As soon as you created the key, make sure to download it, as that is the only time Google will allow you to see its contents. Once you've successfully configured BigQuery as a destination in Airbyte, delete this key from your computer."),(0,n.kt)("h3",{id:"setup-the-pubsub-destination-in-airbyte"},"Setup the PubSub destination in Airbyte"),(0,n.kt)("p",null,"You should now have all the requirements needed to configure BigQuery as a destination in the UI. You'll need the following information to configure the BigQuery destination:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project ID"),": GCP project id"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Topic ID"),": name of pubsub topic under the project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Account Key"),": the contents of your Service Account Key JSON file")),(0,n.kt)("p",null,"Once you've configured PubSub as a destination, delete the Service Account Key from your computer."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 21, 2022"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9819"},"#","9819")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade version of google-cloud-pubsub")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(unpublished) Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"December 29, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9183"},"#","9183")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"August 13, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"#","4699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added json config validator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"June 24, 2021"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4339"},"#","4339")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release")))))}p.isMDXComponent=!0}}]);