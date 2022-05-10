"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[959],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,g=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9263:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Liga",description:"Tudo sobre o sistema de liga do servidor.",sidebar_position:7},p="Liga de Cl\xe3s Mensal",d={unversionedId:"liga",id:"liga",title:"Liga",description:"Tudo sobre o sistema de liga do servidor.",source:"@site/docs/liga.md",sourceDirName:".",slug:"/liga",permalink:"/liga",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Liga",description:"Tudo sobre o sistema de liga do servidor.",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Perca da Prote\xe7\xe3o",permalink:"/protecao/perca"},next:{title:"Lojas",permalink:"/lojas"}},u={},s=[{value:"Comandos",id:"comandos",level:2},{value:"Pontua\xe7\xe3o Positiva",id:"pontua\xe7\xe3o-positiva",level:2},{value:"Eventos Mensais",id:"eventos-mensais",level:3},{value:"Eventos Semanais",id:"eventos-semanais",level:3},{value:"Eventos Di\xe1rios",id:"eventos-di\xe1rios",level:3},{value:"Pontua\xe7\xe3o Negativa",id:"pontua\xe7\xe3o-negativa",level:2},{value:"Puni\xe7\xf5es",id:"puni\xe7\xf5es",level:3},{value:"Exemplo de pontua\xe7\xe3o negativa:",id:"exemplo-de-pontua\xe7\xe3o-negativa",level:4},{value:"Premia\xe7\xe3o",id:"premia\xe7\xe3o",level:2},{value:"Primeiro Lugar",id:"primeiro-lugar",level:3},{value:"Segundo Lugar",id:"segundo-lugar",level:3},{value:"Terceiro Lugar",id:"terceiro-lugar",level:3}],m={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"liga-de-cl\xe3s-mensal"},"Liga de Cl\xe3s Mensal"),(0,o.kt)("p",null,"Liga \xe9 um sistema de pontua\xe7\xe3o dos cl\xe3s de acordo com as atividades de cada jogador no servidor."),(0,o.kt)("p",null,"Toda pontua\xe7\xe3o ganhada ou perdida pelos jogadores \xe9 somada e no final de cada temporada os tr\xeas cl\xe3s com maiores pontua\xe7\xf5es s\xe3o premiados."),(0,o.kt)("p",null,"Cada temporada dura 1 m\xeas completo, do dia 01 ao ultimo dia do respectivo m\xeas. No final da temporada a pontua\xe7\xe3o \xe9 resetada."),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/liga top")," ou ",(0,o.kt)("inlineCode",{parentName:"li"},"/topclans")," - Listar os TOP 10 cl\xe3s com maior pontua\xe7\xe3o."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/liga status [tag-do-cl\xe3]")," - Listar informa\xe7\xf5es sobre o cl\xe3 selecionado.")),(0,o.kt)("h2",{id:"pontua\xe7\xe3o-positiva"},"Pontua\xe7\xe3o Positiva"),(0,o.kt)("h3",{id:"eventos-mensais"},"Eventos Mensais"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Eventos Mensais"),(0,o.kt)("th",{parentName:"tr",align:null},"Pontua\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Constru\xe7\xe3o Mensal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"1\xb0 lugar = 500 pontos"),(0,o.kt)("p",null,"2\xb0 lugar = 400 pontos"),(0,o.kt)("p",null,"3\xb0 lugar = 300 pontos"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Guerra Mensal"),(0,o.kt)("td",{parentName:"tr",align:null},"500 pontos")))),(0,o.kt)("h3",{id:"eventos-semanais"},"Eventos Semanais"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Eventos Semanais"),(0,o.kt)("th",{parentName:"tr",align:null},"Pontua\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Guerra Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},"500 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Arqueiro Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},"100 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Killer Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},"100 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Luta Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},"100 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pr\xe9 Guerra Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},"100 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Torneio Semanal"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"1\xb0 lugar = 100 pontos"),(0,o.kt)("p",null,"2\xb0 lugar = 75 pontos"),(0,o.kt)("p",null,"3\xb0 lugar = 50 pontos"))))),(0,o.kt)("h3",{id:"eventos-di\xe1rios"},"Eventos Di\xe1rios"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Eventos Di\xe1rios"),(0,o.kt)("th",{parentName:"tr",align:null},"Pontua\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Arqueiro"),(0,o.kt)("td",{parentName:"tr",align:null},"20 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Killer"),(0,o.kt)("td",{parentName:"tr",align:null},"20 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Luta"),(0,o.kt)("td",{parentName:"tr",align:null},"20 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Boxe"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Carregador de Gemas"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Folha"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paintball"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"QuakeCraft"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rei da Colina"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rei do Boxe"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sinuca"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spleef"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sum\xf4"),(0,o.kt)("td",{parentName:"tr",align:null},"10 pontos")))),(0,o.kt)("h2",{id:"pontua\xe7\xe3o-negativa"},"Pontua\xe7\xe3o Negativa"),(0,o.kt)("h3",{id:"puni\xe7\xf5es"},"Puni\xe7\xf5es"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Tipo de puni\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:null},"Pontua\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Silenciamento Tempor\xe1rio"),(0,o.kt)("td",{parentName:"tr",align:null},"-50 pontos e -10 pontos por dia silenciado")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Banimento Tempor\xe1rio"),(0,o.kt)("td",{parentName:"tr",align:null},"-100 pontos e -50 pontos por dia banido")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Banimento Permanente"),(0,o.kt)("td",{parentName:"tr",align:null},"-500 pontos")))),(0,o.kt)("h4",{id:"exemplo-de-pontua\xe7\xe3o-negativa"},"Exemplo de pontua\xe7\xe3o negativa:"),(0,o.kt)("p",null,"Cl\xe3 com jogador silenciado por 2 dias perder\xe1 um total de 80 pontos."),(0,o.kt)("p",null,"50 pontos pela puni\xe7\xe3o e 20 pontos pelos 2 dias silenciado."),(0,o.kt)("h2",{id:"premia\xe7\xe3o"},"Premia\xe7\xe3o"),(0,o.kt)("p",null,"O l\xedder de cada cl\xe3 dever\xe1 entrar em contato atrav\xe9s do discord para ativar o VIP."),(0,o.kt)("p",null,"Ao abrir o ticket selecione a op\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"Falar apenas com o Admin.")),(0,o.kt)("p",null,"Pr\xeamio em coins ser\xe1 entregue direto no banco do cl\xe3."),(0,o.kt)("h3",{id:"primeiro-lugar"},"Primeiro Lugar"),(0,o.kt)("p",null,"3x VIP Premium (sem kit de ativa\xe7\xe3o) e 5 milh\xf5es de coins."),(0,o.kt)("h3",{id:"segundo-lugar"},"Segundo Lugar"),(0,o.kt)("p",null,"2x VIP Premium (sem kit de ativa\xe7\xe3o) e 4 milh\xf5es de coins."),(0,o.kt)("h3",{id:"terceiro-lugar"},"Terceiro Lugar"),(0,o.kt)("p",null,"1x VIP Premium (sem kit de ativa\xe7\xe3o) e 3 milh\xf5es de coins."))}k.isMDXComponent=!0}}]);