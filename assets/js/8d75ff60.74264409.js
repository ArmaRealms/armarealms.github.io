"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[248],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},869:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(6775),o="apiTable_e8hp";function l(e,t){var a=e.name,o=e.children,l=function(e){for(var t=e;(0,r.isValidElement)(t);)t=r.Children.toArray(t.props.children)[0];return t}(o),i=a?a+"-"+l:l,p="#"+i,d=(0,n.k6)();return r.createElement("tr",{id:i,tabIndex:0,ref:d.location.hash===p?t:void 0,onClick:function(){d.push(p)},onKeyDown:function(e){"Enter"===e.key&&d.push(p)}},o.props.children)}var i=r.forwardRef(l);function p(e){var t=e.children,a=e.name,n=r.Children.toArray(t.props.children),l=n[0],p=n[1],d=(0,r.useRef)(null);(0,r.useEffect)((function(){var e;null==(e=d.current)||e.focus()}),[d]);var c=r.Children.map(p.props.children,(function(e){return r.createElement(i,{name:a,ref:d},e)}));return r.createElement("table",{className:o},l,r.createElement("tbody",null,c))}},5191:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=a(869),i=["components"],p={title:"Marry",description:"Tudo sobre o sistema de casamento entre jogadores.",sidebar_position:13},d="Casamento entre Jogadores",c={unversionedId:"marry",id:"marry",title:"Marry",description:"Tudo sobre o sistema de casamento entre jogadores.",source:"@site/docs/marry.md",sourceDirName:".",slug:"/marry",permalink:"/marry",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Marry",description:"Tudo sobre o sistema de casamento entre jogadores.",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Duelo",permalink:"/duelo"},next:{title:"VIP",permalink:"/vip"}},u={},s=[{value:"Comandos",id:"comandos",level:2},{value:"Beneficios",id:"beneficios",level:2},{value:"B\xf4nus de Experi\xeancia",id:"b\xf4nus-de-experi\xeancia",level:3},{value:"Teleporte Instant\xe2neo",id:"teleporte-instant\xe2neo",level:3},{value:"Enviar Presentes",id:"enviar-presentes",level:3},{value:"Definir Base do Casal",id:"definir-base-do-casal",level:3},{value:"Chat Privado do Casal",id:"chat-privado-do-casal",level:3},{value:"\xcdcone no Chat e TAB",id:"\xedcone-no-chat-e-tab",level:3}],m={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"casamento-entre-jogadores"},"Casamento entre Jogadores"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Custo para se casar \xe9 de $100.000 coins para cada jogador.")),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)(l.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Comando"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry")),(0,o.kt)("td",{parentName:"tr",align:null},"Listar todos os comandos do marry")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry listar")),(0,o.kt)("td",{parentName:"tr",align:null},"Listar todos os jogadores casados")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry [jogador]")),(0,o.kt)("td",{parentName:"tr",align:null},"Enviar pedido de casamento a outro jogador. ",(0,o.kt)("p",null,"Custo: $100.000 coins para cada jogador"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry divorciar")),(0,o.kt)("td",{parentName:"tr",align:null},"Divorciar do seu parceiro(a)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/mc [mensagem]")),(0,o.kt)("td",{parentName:"tr",align:null},"Enviar mensagem para o parceiro(a)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/mca")),(0,o.kt)("td",{parentName:"tr",align:null},"Entrar ou sair do chat do casal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry tp")),(0,o.kt)("td",{parentName:"tr",align:null},"Teleportar para o seu parceiro(a) ",(0,o.kt)("p",null,"Custo: $10 coins"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry home")),(0,o.kt)("td",{parentName:"tr",align:null},"Teleportar para a home do casal ",(0,o.kt)("p",null,"Custo: $10 coins"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry sethome")),(0,o.kt)("td",{parentName:"tr",align:null},"Definir home do casal ",(0,o.kt)("p",null,"Custo: $1.000 coins"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry delhome")),(0,o.kt)("td",{parentName:"tr",align:null},"Apagar home do casal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry presentear")),(0,o.kt)("td",{parentName:"tr",align:null},"Presentear o seu parceiro(a) ",(0,o.kt)("p",null,"Custo: $10 coins"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry beijar")),(0,o.kt)("td",{parentName:"tr",align:null},"Beijar seu parceiro(a)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry abra\xe7ar")),(0,o.kt)("td",{parentName:"tr",align:null},"Abra\xe7ar seu parceiro(a)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/marry seen")),(0,o.kt)("td",{parentName:"tr",align:null},"Exibir o \xfaltimo login do seu parceiro(a)"))))),(0,o.kt)("h2",{id:"beneficios"},"Beneficios"),(0,o.kt)("h3",{id:"b\xf4nus-de-experi\xeancia"},"B\xf4nus de Experi\xeancia"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"B\xf4nus ao receber experi\xeancia")),(0,o.kt)("p",null,"Receba o dobro de experi\xeancia ao matar matar mobs e outras a\xe7\xf5es que dropa XP."),(0,o.kt)("h3",{id:"teleporte-instant\xe2neo"},"Teleporte Instant\xe2neo"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Teleporte instant\xe2neo entre casal",(0,o.kt)("br",{parentName:"p"}),"\n","\u26a0\ufe0f Custo: $10 coins")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Envie ",(0,o.kt)("inlineCode",{parentName:"li"},"/marry tp")," para teleportar at\xe9 seu parceiro.")),(0,o.kt)("p",null,"N\xe3o \xe9 necess\xe1rio aceitar pedidos de teleporte entre o casal."),(0,o.kt)("h3",{id:"enviar-presentes"},"Enviar Presentes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Enviar presente para o parceiro",(0,o.kt)("br",{parentName:"p"}),"\n","\u26a0\ufe0f Custo: $10 coins")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Coloque o item que deseja presentear na m\xe3o"),(0,o.kt)("li",{parentName:"ol"},"Envie ",(0,o.kt)("inlineCode",{parentName:"li"},"/marry presentear")," para enviar o presente")),(0,o.kt)("h3",{id:"definir-base-do-casal"},"Definir Base do Casal"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Definir base do casal",(0,o.kt)("br",{parentName:"p"}),"\n","\u26a0\ufe0f Custo: $10 coins")),(0,o.kt)("h3",{id:"chat-privado-do-casal"},"Chat Privado do Casal"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Chat privado entre o casal",(0,o.kt)("br",{parentName:"p"}),"\n","Entre no chat do casal com ",(0,o.kt)("inlineCode",{parentName:"p"},"/mca"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Envie ",(0,o.kt)("inlineCode",{parentName:"li"},"/mc [mensagem]")," para conversar com seu parceiro")),(0,o.kt)("h3",{id:"\xedcone-no-chat-e-tab"},"\xcdcone no Chat e TAB"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\xcdcone de casado no chat e TAB")))}k.isMDXComponent=!0}}]);