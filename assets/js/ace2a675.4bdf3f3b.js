"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[8293],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return r.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(t),s=o,k=c["".concat(i,".").concat(s)]||c[s]||m[s]||n;return t?r.createElement(k,l(l({ref:a},d),{},{components:t})):r.createElement(k,l({ref:a},d))}));function s(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=c;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<n;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},869:function(e,a,t){t.d(a,{Z:function(){return i}});var r=t(7294),o=t(6775),n="apiTable_e8hp";function l(e,a){var t=e.name,n=e.children,l=function(e){for(var a=e;(0,r.isValidElement)(a);)a=r.Children.toArray(a.props.children)[0];return a}(n),p=t?t+"-"+l:l,i="#"+p,u=(0,o.k6)();return r.createElement("tr",{id:p,tabIndex:0,ref:u.location.hash===i?a:void 0,onClick:function(){u.push(i)},onKeyDown:function(e){"Enter"===e.key&&u.push(i)}},n.props.children)}var p=r.forwardRef(l);function i(e){var a=e.children,t=e.name,o=r.Children.toArray(a.props.children),l=o[0],i=o[1],u=(0,r.useRef)(null);(0,r.useEffect)((function(){var e;null==(e=u.current)||e.focus()}),[u]);var d=r.Children.map(i.props.children,(function(e){return r.createElement(p,{name:t,ref:u},e)}));return r.createElement("table",{className:n},l,r.createElement("tbody",null,d))}},5316:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=t(3117),o=t(102),n=(t(7294),t(3905)),l=t(869),p=["components"],i={title:"Venda da Prote\xe7\xe3o",description:"Como comprar, vender ou alugar uma prote\xe7\xe3o.",sidebar_position:5},u="Vender ou Alugar Prote\xe7\xe3o",d={unversionedId:"protecao/venda",id:"protecao/venda",title:"Venda da Prote\xe7\xe3o",description:"Como comprar, vender ou alugar uma prote\xe7\xe3o.",source:"@site/docs/protecao/venda.md",sourceDirName:"protecao",slug:"/protecao/venda",permalink:"/protecao/venda",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Venda da Prote\xe7\xe3o",description:"Como comprar, vender ou alugar uma prote\xe7\xe3o.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Prote\xe7\xe3o Avan\xe7ada",permalink:"/protecao/avancada"},next:{title:"Perda da Prote\xe7\xe3o",permalink:"/protecao/perda"}},m={},c=[{value:"Comandos",id:"comandos",level:2},{value:"Vender uma Prote\xe7\xe3o",id:"vender-uma-prote\xe7\xe3o",level:2},{value:"Alugar uma Prote\xe7\xe3o",id:"alugar-uma-prote\xe7\xe3o",level:2},{value:"Alugar com Acesso a Construir",id:"alugar-com-acesso-a-construir",level:3},{value:"Alugar com Acesso a Ba\xfas",id:"alugar-com-acesso-a-ba\xfas",level:3}],s={toc:c};function k(e){var a=e.components,t=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vender-ou-alugar-prote\xe7\xe3o"},"Vender ou Alugar Prote\xe7\xe3o"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Para ",(0,n.kt)("strong",{parentName:"p"},"comprar")," ou ",(0,n.kt)("strong",{parentName:"p"},"alugar")," uma prote\xe7\xe3o de outro jogador basta clicar com o ",(0,n.kt)("strong",{parentName:"p"},"bot\xe3o direito")," na placa onde cont\xe9m as informa\xe7\xf5es da venda ou aluguel da prote\xe7\xe3o.")),(0,n.kt)("h2",{id:"comandos"},"Comandos"),(0,n.kt)(l.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Comando"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob")," ou ",(0,n.kt)("inlineCode",{parentName:"td"},"/imobiliaria")),(0,n.kt)("td",{parentName:"tr",align:null},"Comando principal do sistema de imobili\xe1ria")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob ajuda")),(0,n.kt)("td",{parentName:"tr",align:null},"Listar todos os comandos do sistema de imobili\xe1ria")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob listar todos")),(0,n.kt)("td",{parentName:"tr",align:null},"Listar todas as prote\xe7\xf5es que est\xe3o \xe0 venda ou alugando")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob listar venda")),(0,n.kt)("td",{parentName:"tr",align:null},"Listar todas as prote\xe7\xf5es que est\xe3o \xe0 venda")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob listar aluguel")),(0,n.kt)("td",{parentName:"tr",align:null},"Listar todas as prote\xe7\xf5es que est\xe3o alugando")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob autorenovar ativar")),(0,n.kt)("td",{parentName:"tr",align:null},"Ativar a renova\xe7\xe3o autom\xe1tica de aluguel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob autorenovar desativar")),(0,n.kt)("td",{parentName:"tr",align:null},"Desativar a renova\xe7\xe3o autom\xe1tica de aluguel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/imob info")),(0,n.kt)("td",{parentName:"tr",align:null},"Exibir informa\xe7\xf5es da prote\xe7\xe3o que voc\xea estiver dentro"))))),(0,n.kt)("h2",{id:"vender-uma-prote\xe7\xe3o"},"Vender uma Prote\xe7\xe3o"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ao vender uma prote\xe7\xe3o os blocos de prote\xe7\xe3o utilizados s\xe3o transferidos do vendedor para o comprador.",(0,n.kt)("br",{parentName:"p"}),"\n","N\xe3o \xe9 poss\xedvel vender uma sub-prote\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Uma placa deve ser colocada dentro da prote\xe7\xe3o que voc\xea deseja vender.")),(0,n.kt)("p",null,"1\xb0 linha da placa deve ser colocado qualquer palavra abaixo:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"[vende]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[venda]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[vendese]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[vende-se]")),(0,n.kt)("p",null,"2\xb0 linha da placa deve ser colocado o valor de venda da prote\xe7\xe3o:",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplos: ",(0,n.kt)("inlineCode",{parentName:"p"},"50000")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"1000")," (nunca usar ponto ou v\xedrgula)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo da placa para vender uma prote\xe7\xe3o:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/6KLSuqH.png",alt:"Exemplo1",title:"Exemplo de como criar uma placa de venda"})),(0,n.kt)("h2",{id:"alugar-uma-prote\xe7\xe3o"},"Alugar uma Prote\xe7\xe3o"),(0,n.kt)("h3",{id:"alugar-com-acesso-a-construir"},"Alugar com Acesso a Construir"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"N\xe3o \xe9 poss\xedvel alterar uma prote\xe7\xe3o quando uma sub-prote\xe7\xe3o estiver alugada.",(0,n.kt)("br",{parentName:"p"}),"\n","O jogador que colocar para alugar perde todas as permiss\xf5es na prote\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Uma placa deve ser colocada dentro da prote\xe7\xe3o que voc\xea deseja alugar.")),(0,n.kt)("p",null,"1\xb0 linha da placa deve ser colocado qualquer palavra abaixo:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"[aluga]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[aluguel]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[alugase]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[aluga-se]")),(0,n.kt)("p",null,"2\xb0 linha da placa deve ser colocado o valor do aluguel.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplos: ",(0,n.kt)("inlineCode",{parentName:"p"},"50000")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"1000")," (nunca usar ponto ou v\xedrgula)  "),(0,n.kt)("p",null,"3\xb0 linha da placa deve ser colocado o per\xedodo do aluguel.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplos: ",(0,n.kt)("inlineCode",{parentName:"p"},"30d")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"30 dias")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"1 semana")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"2 semanas"),(0,n.kt)("br",{parentName:"p"}),"\n","Caso n\xe3o seja preenchido o tempo ser\xe1 de 7 dias."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo da placa para alugar com permiss\xe3o de construir:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/TclXF7E.png",alt:"Exemplo2",title:"Exemplo de como criar uma placa de aluguel com permiss\xe3o de construir"})),(0,n.kt)("h3",{id:"alugar-com-acesso-a-ba\xfas"},"Alugar com Acesso a Ba\xfas"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"N\xe3o \xe9 poss\xedvel alterar uma prote\xe7\xe3o quando uma sub-prote\xe7\xe3o estiver alugada.",(0,n.kt)("br",{parentName:"p"}),"\n","O jogador que colocar para alugar perde todas as permiss\xf5es na prote\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Uma placa deve ser colocada dentro da prote\xe7\xe3o que voc\xea deseja alugar.")),(0,n.kt)("p",null,"1\xb0 linha da placa deve ser colocado qualquer palavra abaixo:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"[alugabau]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[aluga-bau]")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"[aluguel-bau]")),(0,n.kt)("p",null,"2\xb0 linha da placa deve ser colocado o valor do aluguel.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplos: ",(0,n.kt)("inlineCode",{parentName:"p"},"50000")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"1000")," (nunca usar ponto ou v\xedrgula)  "),(0,n.kt)("p",null,"3\xb0 linha da placa deve ser colocado o per\xedodo do aluguel.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplos: ",(0,n.kt)("inlineCode",{parentName:"p"},"30d")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"30 dias")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"1 semana")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"2 semanas"),(0,n.kt)("br",{parentName:"p"}),"\n","Caso n\xe3o seja preenchido o tempo ser\xe1 de 7 dias."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exemplo da placa para alugar com permiss\xe3o apenas a ba\xfas:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/sgdW7zJ.png",alt:"Exemplo3",title:"Exemplo de como criar uma placa de aluguel com acesso apenas a ba\xfas"})))}k.isMDXComponent=!0}}]);