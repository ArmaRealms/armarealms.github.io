"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[738],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||n;return r?o.createElement(k,l(l({ref:t},c),{},{components:r})):o.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},869:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(7294),a=r(6775),n="apiTable_e8hp";function l(e,t){var r=e.name,n=e.children,l=function(e){for(var t=e;(0,o.isValidElement)(t);)t=o.Children.toArray(t.props.children)[0];return t}(n),i=r?r+"-"+l:l,p="#"+i,u=(0,a.k6)();return o.createElement("tr",{id:i,tabIndex:0,ref:u.location.hash===p?t:void 0,onClick:function(){u.push(p)},onKeyDown:function(e){"Enter"===e.key&&u.push(p)}},n.props.children)}var i=o.forwardRef(l);function p(e){var t=e.children,r=e.name,a=o.Children.toArray(t.props.children),l=a[0],p=a[1],u=(0,o.useRef)(null);(0,o.useEffect)((function(){var e;null==(e=u.current)||e.focus()}),[u]);var c=o.Children.map(p.props.children,(function(e){return o.createElement(i,{name:r,ref:u},e)}));return o.createElement("table",{className:n},l,o.createElement("tbody",null,c))}},8983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var o=r(3117),a=r(102),n=(r(7294),r(3905)),l=r(869),i=["components"],p={title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",sidebar_position:4},u="Prote\xe7\xe3o Avan\xe7ada",c={unversionedId:"protecao/avancada",id:"protecao/avancada",title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",source:"@site/docs/protecao/avancada.md",sourceDirName:"protecao",slug:"/protecao/avancada",permalink:"/protecao/avancada",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gerenciar Prote\xe7\xe3o",permalink:"/protecao/gerenciar"},next:{title:"Venda da Prote\xe7\xe3o",permalink:"/protecao/venda"}},d={},s=[{value:"Comandos",id:"comandos",level:2},{value:"Criar uma Sub-Prote\xe7\xe3o",id:"criar-uma-sub-prote\xe7\xe3o",level:2},{value:"Visualizar Sub-Prote\xe7\xe3o",id:"visualizar-sub-prote\xe7\xe3o",level:2},{value:"Expandir Sub-Prote\xe7\xe3o",id:"expandir-sub-prote\xe7\xe3o",level:2},{value:"Excluir Sub-Prote\xe7\xe3o",id:"excluir-sub-prote\xe7\xe3o",level:2}],m={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prote\xe7\xe3o-avan\xe7ada"},"Prote\xe7\xe3o Avan\xe7ada"),(0,n.kt)("h2",{id:"comandos"},"Comandos"),(0,n.kt)(l.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Comando"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/claimsubdivide")),(0,n.kt)("td",{parentName:"tr",align:null},"Altere a p\xe1 de ouro para o modo de subdivis\xe3o de prote\xe7\xf5es")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/claimrestrict")),(0,n.kt)("td",{parentName:"tr",align:null},"Restrinja a sub-prote\xe7\xe3o para que jogadores com permiss\xe3o na prote\xe7\xe3o principal n\xe3o tenha permiss\xe3o na sub-prote\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/basicclaims")),(0,n.kt)("td",{parentName:"tr",align:null},"Altere a p\xe1 de ouro para o modo b\xe1sico de prote\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/abandontoplevelclaim")),(0,n.kt)("td",{parentName:"tr",align:null},"Apague uma prote\xe7\xe3o e todas suas sub-prote\xe7\xf5es"))))),(0,n.kt)("h2",{id:"criar-uma-sub-prote\xe7\xe3o"},"Criar uma Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/kit prot")," e coloque a ",(0,n.kt)("inlineCode",{parentName:"li"},"p\xe1 de ouro")," na m\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimsubdivide")," para entrar no modo de sub-prote\xe7\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Segure a ",(0,n.kt)("inlineCode",{parentName:"li"},"p\xe1 de ouro")," e dentro da sua prote\xe7\xe3o, clique em duas quinas para criar a sub-prote\xe7\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimrestrict")," para que a sub-prote\xe7\xe3o n\xe3o herde permiss\xf5es da prote\xe7\xe3o principal.")),(0,n.kt)("p",null,"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/basicclaims")," para voltar ao modo de prote\xe7\xe3o normal."),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Exemplo de como criar uma sub-prote\xe7\xe3o com imagens!")),(0,n.kt)("div",null,(0,n.kt)("p",null,"1. Dentro da ",(0,n.kt)("a",{href:"/protecao/basica#utilizando-a-p\xe1-de-ouro",target:"_blank"},"prote\xe7\xe3o"),", vamos criar uma sub-prote\xe7\xe3o no local do ba\xfa abaixo:"),(0,n.kt)("img",{src:"https://i.imgur.com/oyfX3qo.png",alt:"Primeiro passo"}),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"2. Envie ",(0,n.kt)("code",null,"/kit prot")," e coloque a p\xe1 de ouro na m\xe3o."),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"3. Envie ",(0,n.kt)("code",null,"/claimsubdivide")," para entrar no modo de sub-prote\xe7\xe3o."),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"4. Clique com o ",(0,n.kt)("b",null,"bot\xe3o direito")," para selecionar a primeira quina:"),(0,n.kt)("img",{src:"https://i.imgur.com/fUBmp8J.png",alt:"Quarto passo"}),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"5. Clique com o ",(0,n.kt)("b",null,"bot\xe3o direito")," para seleciona a segunda quina:"),(0,n.kt)("img",{src:"https://i.imgur.com/hgUJFEE.png",alt:"Quinto passo"}),(0,n.kt)("p",null,"No local onde for selecionada a segunda quina aparecer\xe1 um bloco de ferro."),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"6. ",(0,n.kt)("b",null,"Pronto, sub-prote\xe7\xe3o criada com sucesso!")),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"7. Envie ",(0,n.kt)("code",null,"/claimrestrict")," dentro da sub-prote\xe7\xe3o:"),(0,n.kt)("img",{src:"https://i.imgur.com/NORhMh5.png",alt:"S\xe9timo passo"}),(0,n.kt)("p",null,"Jogadores que tenham qualquer permiss\xe3o na sua prote\xe7\xe3o principal n\xe3o ter\xe3o permiss\xe3o na sub-prote\xe7\xe3o onde voc\xea enviou o comando."),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"8. Envie ",(0,n.kt)("code",null,"/basicclaims")," para voltar ao modo de prote\xe7\xe3o normal."),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"9. Com o graveto na m\xe3o, clique com o ",(0,n.kt)("b",null,"bot\xe3o direito")," no local para ver sua sub-prote\xe7\xe3o:"),(0,n.kt)("img",{src:"https://i.imgur.com/zFqDCNz.png",alt:"Nono passo"}),(0,n.kt)("p",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"10. A sub-prote\xe7\xe3o ser\xe1 circulada por bloco de l\xe3 com bloco de ferro nas quinas:"),(0,n.kt)("img",{src:"https://i.imgur.com/Jr9qO1H.png",alt:"D\xe9cimo passo"}))),(0,n.kt)("h2",{id:"visualizar-sub-prote\xe7\xe3o"},"Visualizar Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/kit prot")," e coloque o graveto na m\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Mire no local onde deseja inspecionar prote\xe7\xf5es."),(0,n.kt)("li",{parentName:"ol"},"Clique com o ",(0,n.kt)("strong",{parentName:"li"},"bot\xe3o direito")," para visualizar a sub-prote\xe7\xe3o.")),(0,n.kt)("h2",{id:"expandir-sub-prote\xe7\xe3o"},"Expandir Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimexpand <tamanho>")," virado para a dire\xe7\xe3o que deseja expandir.  ")),(0,n.kt)("p",null,"Exemplo 1: ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimexpand 10")," - Expande em 10 blocos para a dire\xe7\xe3o que voc\xea estiver olhando.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplo 2: ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimexpand -5")," - Diminui em 5 blocos a prote\xe7\xe3o na dire\xe7\xe3o que voc\xea estiver olhando."),(0,n.kt)("h2",{id:"excluir-sub-prote\xe7\xe3o"},"Excluir Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/abandonclaim")," dentro da sub-prote\xe7\xe3o que voc\xea deseja excluir.")),(0,n.kt)("p",null,"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/abandontoplevelclaim")," para excluir a prote\xe7\xe3o principal e todas as sua sub-prote\xe7\xf5es."))}k.isMDXComponent=!0}}]);