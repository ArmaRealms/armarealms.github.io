"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[655],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),s=a,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},869:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a=r(6775),o="apiTable_e8hp";function l(e,t){var r=e.name,o=e.children,l=function(e){for(var t=e;(0,n.isValidElement)(t);)t=n.Children.toArray(t.props.children)[0];return t}(o),i=r?r+"-"+l:l,d="#"+i,p=(0,a.k6)();return n.createElement("tr",{id:i,tabIndex:0,ref:p.location.hash===d?t:void 0,onClick:function(){p.push(d)},onKeyDown:function(e){"Enter"===e.key&&p.push(d)}},o.props.children)}var i=n.forwardRef(l);function d(e){var t=e.children,r=e.name,a=n.Children.toArray(t.props.children),l=a[0],d=a[1],p=(0,n.useRef)(null);(0,n.useEffect)((function(){var e;null==(e=p.current)||e.focus()}),[p]);var m=n.Children.map(d.props.children,(function(e){return n.createElement(i,{name:r,ref:p},e)}));return n.createElement("table",{className:o},l,n.createElement("tbody",null,m))}},3973:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=r(869),i=["components"],d={title:"Leil\xe3o Virtual",description:"Tudo sobre o leil\xe3o virtual do jogador.",sidebar_position:3},p="Leil\xe3o Virtual de Jogadores",m={unversionedId:"lojas/leilao",id:"lojas/leilao",title:"Leil\xe3o Virtual",description:"Tudo sobre o leil\xe3o virtual do jogador.",source:"@site/docs/lojas/leilao.md",sourceDirName:"lojas",slug:"/lojas/leilao",permalink:"/lojas/leilao",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Leil\xe3o Virtual",description:"Tudo sobre o leil\xe3o virtual do jogador.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Loja dos Jogadores",permalink:"/lojas/jogador"},next:{title:"Cl\xe3s",permalink:"/clan/"}},u={},c=[{value:"Quantidade de Itens",id:"quantidade-de-itens",level:2},{value:"Tempo do Item em Leil\xe3o",id:"tempo-do-item-em-leil\xe3o",level:2},{value:"Comandos",id:"comandos",level:2}],s={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"leil\xe3o-virtual-de-jogadores"},"Leil\xe3o Virtual de Jogadores"),(0,o.kt)("p",null,"Leil\xe3o serve para venda de itens de forma virtual, onde o jogador pode comprar e vender estando em qualquer lugar do mapa utilizando seu saldo em coin."),(0,o.kt)("h2",{id:"quantidade-de-itens"},"Quantidade de Itens"),(0,o.kt)(l.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Cargo"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Quantidade de Itens no Leil\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Membro"),(0,o.kt)("td",{parentName:"tr",align:"center"},"02 itens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Premium"),(0,o.kt)("td",{parentName:"tr",align:"center"},"05 itens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Master"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10 itens")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ultimate"),(0,o.kt)("td",{parentName:"tr",align:"center"},"15 itens"))))),(0,o.kt)("h2",{id:"tempo-do-item-em-leil\xe3o"},"Tempo do Item em Leil\xe3o"),(0,o.kt)(l.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Cargo"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Tempo do Item no Leil\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Membro"),(0,o.kt)("td",{parentName:"tr",align:"center"},"02 dias")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Premium"),(0,o.kt)("td",{parentName:"tr",align:"center"},"04 dias")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Master"),(0,o.kt)("td",{parentName:"tr",align:"center"},"07 dias")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Ultimate"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10 dias"))))),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)(l.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Comando"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah")," ou ",(0,o.kt)("inlineCode",{parentName:"td"},"/leilao")),(0,o.kt)("td",{parentName:"tr",align:null},"Abrir o menu principal de leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah ajuda")),(0,o.kt)("td",{parentName:"tr",align:null},"Listar todos os comandos do leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah vender [pre\xe7o]")),(0,o.kt)("td",{parentName:"tr",align:null},"Vender um item no leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah leiloar [pre\xe7o]")),(0,o.kt)("td",{parentName:"tr",align:null},"Leiloar um item no leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah cancel [id-do-item]")),(0,o.kt)("td",{parentName:"tr",align:null},"Cancelar a venda de um item no leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah coletar")),(0,o.kt)("td",{parentName:"tr",align:null},"Coletar itens cancelados ou expirados do leil\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ah abrir [categoria]")),(0,o.kt)("td",{parentName:"tr",align:null},"Abrir o menu da categoria especificada"))))))}k.isMDXComponent=!0}}]);