"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[31],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return p}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},869:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(7294),a=t(6775),o="apiTable_e8hp";function i(e,r){var t=e.name,o=e.children,i=function(e){for(var r=e;(0,n.isValidElement)(r);)r=n.Children.toArray(r.props.children)[0];return r}(o),l=t?t+"-"+i:i,c="#"+l,d=(0,a.k6)();return n.createElement("tr",{id:l,tabIndex:0,ref:d.location.hash===c?r:void 0,onClick:function(){d.push(c)},onKeyDown:function(e){"Enter"===e.key&&d.push(c)}},o.props.children)}var l=n.forwardRef(i);function c(e){var r=e.children,t=e.name,a=n.Children.toArray(r.props.children),i=a[0],c=a[1],d=(0,n.useRef)(null);(0,n.useEffect)((function(){var e;null==(e=d.current)||e.focus()}),[d]);var s=n.Children.map(c.props.children,(function(e){return n.createElement(l,{name:t,ref:d},e)}));return n.createElement("table",{className:o},i,n.createElement("tbody",null,s))}},7762:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(869),l=["components"],c={title:"Remo\xe7\xe3o de Geradores",description:"Sistema de remo\xe7\xe3o de geradores (spawners).",sidebar_position:7},d="Remo\xe7\xe3o de Geradores",s={unversionedId:"melhorias/gerador",id:"melhorias/gerador",title:"Remo\xe7\xe3o de Geradores",description:"Sistema de remo\xe7\xe3o de geradores (spawners).",source:"@site/docs/melhorias/gerador.md",sourceDirName:"melhorias",slug:"/melhorias/gerador",permalink:"/melhorias/gerador",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Remo\xe7\xe3o de Geradores",description:"Sistema de remo\xe7\xe3o de geradores (spawners).",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Bloqueio de Mapas",permalink:"/melhorias/copyright"},next:{title:"Super Craft",permalink:"/melhorias/craft"}},u={},m=[{value:"Chance de Remo\xe7\xe3o",id:"chance-de-remo\xe7\xe3o",level:2},{value:"Ferramenta Necess\xe1ria",id:"ferramenta-necess\xe1ria",level:2},{value:"Alterar Gerador",id:"alterar-gerador",level:2}],p={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"remo\xe7\xe3o-de-geradores"},"Remo\xe7\xe3o de Geradores"),(0,o.kt)("p",null,"Remo\xe7\xe3o de geradores (spawners) serve para que jogadores possam construir farms de XP."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"Esse sistema funciona apenas no servidor G\xeanesis!"))),(0,o.kt)("h2",{id:"chance-de-remo\xe7\xe3o"},"Chance de Remo\xe7\xe3o"),(0,o.kt)(i.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Cargo"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Chance de Remover Spawner"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Membro"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10% de chance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Premium"),(0,o.kt)("td",{parentName:"tr",align:"center"},"30% de chance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Master"),(0,o.kt)("td",{parentName:"tr",align:"center"},"40% de chance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ultimate"),(0,o.kt)("td",{parentName:"tr",align:"center"},"50% de chance"))))),(0,o.kt)("h2",{id:"ferramenta-necess\xe1ria"},"Ferramenta Necess\xe1ria"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Picareta de diamante com encantamento toque suave."),(0,o.kt)("li",{parentName:"ul"},"Picareta de netherite com encantamento toque suave.")),(0,o.kt)("h2",{id:"alterar-gerador"},"Alterar Gerador"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\xc9 poss\xedvel alterar o mob que spawna do gerador.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Coloque o ovo gerador do mob que deseja na m\xe3o"),(0,o.kt)("li",{parentName:"ol"},"Clique com o ",(0,o.kt)("strong",{parentName:"li"},"bot\xe3o direito")," no gerador.")),(0,o.kt)("p",null,"Voc\xea pode comprar ovo gerador de mobs na loja do servidor ou ao matar mobs pelo mapa."))}f.isMDXComponent=!0}}]);