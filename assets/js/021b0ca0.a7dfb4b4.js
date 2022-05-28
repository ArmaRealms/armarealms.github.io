"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[85],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},869:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7294),n=r(6775),o="apiTable_e8hp";function i(e,t){var r=e.name,o=e.children,i=function(e){for(var t=e;(0,a.isValidElement)(t);)t=a.Children.toArray(t.props.children)[0];return t}(o),l=r?r+"-"+i:i,p="#"+l,u=(0,n.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:u.location.hash===p?t:void 0,onClick:function(){u.push(p)},onKeyDown:function(e){"Enter"===e.key&&u.push(p)}},o.props.children)}var l=a.forwardRef(i);function p(e){var t=e.children,r=e.name,n=a.Children.toArray(t.props.children),i=n[0],p=n[1],u=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=u.current)||e.focus()}),[u]);var c=a.Children.map(p.props.children,(function(e){return a.createElement(l,{name:r,ref:u},e)}));return a.createElement("table",{className:o},i,a.createElement("tbody",null,c))}},2954:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(869),l=["components"],p={title:"Bloqueio de Mapas",description:"Sistema de bloqueio de c\xf3pia de mapas.",sidebar_position:6},u="Bloqueio de Mapas",c={unversionedId:"melhorias/copyright",id:"melhorias/copyright",title:"Bloqueio de Mapas",description:"Sistema de bloqueio de c\xf3pia de mapas.",source:"@site/docs/melhorias/copyright.md",sourceDirName:"melhorias",slug:"/melhorias/copyright",permalink:"/melhorias/copyright",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Bloqueio de Mapas",description:"Sistema de bloqueio de c\xf3pia de mapas.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"La\xe7o Inteligente",permalink:"/melhorias/laco"},next:{title:"Remo\xe7\xe3o de Geradores",permalink:"/melhorias/gerador"}},m={},s=[{value:"Comando",id:"comando",level:2},{value:"Bloquear Mapa",id:"bloquear-mapa",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bloqueio-de-mapas"},"Bloqueio de Mapas"),(0,o.kt)("p",null,"Bloqueio de mapas (copyright) serve para impedir a c\xf3pia de mapas bloqueados.",(0,o.kt)("br",{parentName:"p"}),"\n","Utilizado principalmente para proteger MapArts!"),(0,o.kt)("h2",{id:"comando"},"Comando"),(0,o.kt)(i.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Comando"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/copyright")),(0,o.kt)("td",{parentName:"tr",align:null},"Bloquear c\xf3pia do mapa")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/copyright confirm")),(0,o.kt)("td",{parentName:"tr",align:null},"Confirmar bloqueio de c\xf3pia do mapa"))))),(0,o.kt)("h2",{id:"bloquear-mapa"},"Bloquear Mapa"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Custo: $5.000 coins por mapa bloqueado")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Envie ",(0,o.kt)("inlineCode",{parentName:"li"},"/copyright")," com o mapa que deseja bloquear na m\xe3o."),(0,o.kt)("li",{parentName:"ol"},"Clique na mensagem que aparecer\xe1 no chat para confirmar.")),(0,o.kt)("p",null,"\u26a0\ufe0f Use ",(0,o.kt)("inlineCode",{parentName:"p"},"/copyright confirm")," para bloquear o mapa sem precisar de clicar no chat."),(0,o.kt)("p",null,"\u26a0\ufe0f Voc\xea pode bloquear v\xe1rios mapas com apenas um comando, o valor ser\xe1 multiplicado pela quantidade de mapas que estiver na m\xe3o."),(0,o.kt)("p",null,"\u26a0\ufe0f O autor do bloqueio pode copiar os mapas mesmo ele estando bloqueado."),(0,o.kt)("p",null,"\ud83c\udfaf Exemplo: ",(0,o.kt)("inlineCode",{parentName:"p"},"/copyright confirm")," segurando 10 mapas custar\xe1 $50.000 coins."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo de mapa bloqueado:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ilFyA0N.png",alt:"imagem"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Erro ao tentar duplicar mapa bloqueado:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/x4Zs4a4.png",alt:"imagem2"})))}f.isMDXComponent=!0}}]);