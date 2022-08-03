"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[6707],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),o=r(6010),i=r(3651),c=r(9960),a=r(3919),s=r(5999),l="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function p(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",f),title:c},c))}function d(e){var t=e.item,r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){var t,r=e.item,o=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:o,title:r.label,description:null==c?void 0:c.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{key:t,item:e}))})))}},4778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),c=r(2991),a=r(3651),s=["components"],l={title:"Eventos",description:"Tudo sobre os eventos do servidor."},u="Eventos",f={unversionedId:"eventos/eventos",id:"eventos/eventos",title:"Eventos",description:"Tudo sobre os eventos do servidor.",source:"@site/docs/eventos/eventos.md",sourceDirName:"eventos",slug:"/eventos/",permalink:"/eventos/",draft:!1,tags:[],version:"current",frontMatter:{title:"Eventos",description:"Tudo sobre os eventos do servidor."},sidebar:"tutorialSidebar",previous:{title:"Membro do Cl\xe3",permalink:"/clan/membro"},next:{title:"Agenda",permalink:"/eventos/agenda"}},m={},p=[],d={toc:p};function v(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eventos"},"Eventos"),(0,i.kt)("p",null,"Tutorial sobre todos os eventos do servidor!"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);