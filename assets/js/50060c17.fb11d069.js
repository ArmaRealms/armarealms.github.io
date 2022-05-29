"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[738],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return s}});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(t),s=o,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||n;return t?r.createElement(k,i(i({ref:a},m),{},{components:t})):r.createElement(k,i({ref:a},m))}));function s(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},869:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(7294),o=t(6775),n="apiTable_e8hp";function i(e,a){var t=e.name,n=e.children,i=function(e){for(var a=e;(0,r.isValidElement)(a);)a=r.Children.toArray(a.props.children)[0];return a}(n),l=t?t+"-"+i:i,p="#"+l,u=(0,o.k6)();return r.createElement("tr",{id:l,tabIndex:0,ref:u.location.hash===p?a:void 0,onClick:function(){u.push(p)},onKeyDown:function(e){"Enter"===e.key&&u.push(p)}},n.props.children)}var l=r.forwardRef(i);function p(e){var a=e.children,t=e.name,o=r.Children.toArray(a.props.children),i=o[0],p=o[1],u=(0,r.useRef)(null);(0,r.useEffect)((function(){var e;null==(e=u.current)||e.focus()}),[u]);var m=r.Children.map(p.props.children,(function(e){return r.createElement(l,{name:t,ref:u},e)}));return r.createElement("table",{className:n},i,r.createElement("tbody",null,m))}},8983:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var r=t(7462),o=t(3366),n=(t(7294),t(3905)),i=t(869),l=["components"],p={title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",sidebar_position:4},u="Prote\xe7\xe3o Avan\xe7ada",m={unversionedId:"protecao/avancada",id:"protecao/avancada",title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",source:"@site/docs/protecao/avancada.md",sourceDirName:"protecao",slug:"/protecao/avancada",permalink:"/protecao/avancada",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Prote\xe7\xe3o Avan\xe7ada",description:"Como criar, expandir ou excluir sub-prote\xe7\xf5es.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gerenciar Prote\xe7\xe3o",permalink:"/protecao/gerenciar"},next:{title:"Venda da Prote\xe7\xe3o",permalink:"/protecao/venda"}},c={},d=[{value:"Comandos",id:"comandos",level:2},{value:"Criar uma Sub-Prote\xe7\xe3o",id:"criar-uma-sub-prote\xe7\xe3o",level:2},{value:"Visualizar Sub-Prote\xe7\xe3o",id:"visualizar-sub-prote\xe7\xe3o",level:2},{value:"Expandir Sub-Prote\xe7\xe3o",id:"expandir-sub-prote\xe7\xe3o",level:2},{value:"Excluir Sub-Prote\xe7\xe3o",id:"excluir-sub-prote\xe7\xe3o",level:2}],s={toc:d};function k(e){var a=e.components,t=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prote\xe7\xe3o-avan\xe7ada"},"Prote\xe7\xe3o Avan\xe7ada"),(0,n.kt)("h2",{id:"comandos"},"Comandos"),(0,n.kt)(i.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Comando"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/claimsubdivide")),(0,n.kt)("td",{parentName:"tr",align:null},"Altere a p\xe1 de ouro para o modo de subdivis\xe3o de prote\xe7\xf5es")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/claimrestrict")),(0,n.kt)("td",{parentName:"tr",align:null},"Restrinja a sub-prote\xe7\xe3o para que jogadores com permiss\xe3o na prote\xe7\xe3o principal n\xe3o tenha permiss\xe3o na sub-prote\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/basicclaims")),(0,n.kt)("td",{parentName:"tr",align:null},"Altere a p\xe1 de ouro para o modo b\xe1sico de prote\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/abandontoplevelclaim")),(0,n.kt)("td",{parentName:"tr",align:null},"Apague uma prote\xe7\xe3o e todas suas sub-prote\xe7\xf5es"))))),(0,n.kt)("h2",{id:"criar-uma-sub-prote\xe7\xe3o"},"Criar uma Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/kit prot")," e coloque a ",(0,n.kt)("inlineCode",{parentName:"li"},"p\xe1 de ouro")," na m\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimsubdivide")," para entrar no modo de sub-prote\xe7\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Segure a ",(0,n.kt)("inlineCode",{parentName:"li"},"p\xe1 de ouro")," e dentro da sua prote\xe7\xe3o, clique em duas quinas para criar a sub-prote\xe7\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimrestrict")," para que a sub-prote\xe7\xe3o n\xe3o herde permiss\xf5es da prote\xe7\xe3o principal.")),(0,n.kt)("p",null,"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/basicclaims")," para voltar ao modo de prote\xe7\xe3o normal."),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Exemplo de como criar uma sub-prote\xe7\xe3o com imagens!")),(0,n.kt)("div",null,(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Dentro da ",(0,n.kt)("a",{parentName:"p",href:"/protecao/basica#utilizando-a-p%C3%A1-de-ouro"},"prote\xe7\xe3o"),", vamos criar uma sub-prote\xe7\xe3o no local do ba\xfa abaixo:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/oyfX3qo.png",alt:"imagem1"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/kit prot")," e coloque a p\xe1 de ouro na m\xe3o.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimsubdivide")," para entrar no modo de sub-prote\xe7\xe3o.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique com o bot\xe3o direito para selecionar a primeira quina:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/fUBmp8J.png",alt:"imagem3"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique com o bot\xe3o direito para seleciona a segunda quina:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/hgUJFEE.png",alt:"imagem4"}),"\nNo local onde for selecionada a segunda quina aparecer\xe1 um bloco de ferro.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pronto, sub-prote\xe7\xe3o criada com sucesso!"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimrestrict")," dentro da sub-prote\xe7\xe3o:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/NORhMh5.png",alt:"imagem5"}),"\nJogadores que tenham qualquer permiss\xe3o na sua prote\xe7\xe3o principal n\xe3o ter\xe3o permiss\xe3o na sub-prote\xe7\xe3o onde voc\xea enviou o comando.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/basicclaims")," para voltar ao modo de prote\xe7\xe3o normal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Com o graveto na m\xe3o, clique com o ",(0,n.kt)("strong",{parentName:"p"},"bot\xe3o direito")," no local para visualizar sua sub-prote\xe7\xe3o.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/oR7HDc4.png",alt:"imagem6"})))))),(0,n.kt)("h2",{id:"visualizar-sub-prote\xe7\xe3o"},"Visualizar Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/kit prot")," e coloque o graveto na m\xe3o."),(0,n.kt)("li",{parentName:"ol"},"Mire no local onde deseja inspecionar prote\xe7\xf5es."),(0,n.kt)("li",{parentName:"ol"},"Clique com o ",(0,n.kt)("strong",{parentName:"li"},"bot\xe3o direito")," para visualizar a sub-prote\xe7\xe3o.")),(0,n.kt)("h2",{id:"expandir-sub-prote\xe7\xe3o"},"Expandir Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/claimexpand <tamanho>")," virado para a dire\xe7\xe3o que deseja expandir.  ")),(0,n.kt)("p",null,"Exemplo 1: ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimexpand 10")," - Expande em 10 blocos para a dire\xe7\xe3o que voc\xea estiver olhando.",(0,n.kt)("br",{parentName:"p"}),"\n","Exemplo 2: ",(0,n.kt)("inlineCode",{parentName:"p"},"/claimexpand -5")," - Diminui em 5 blocos a prote\xe7\xe3o na dire\xe7\xe3o que voc\xea estiver olhando."),(0,n.kt)("h2",{id:"excluir-sub-prote\xe7\xe3o"},"Excluir Sub-Prote\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Envie ",(0,n.kt)("inlineCode",{parentName:"li"},"/abandonclaim")," dentro da sub-prote\xe7\xe3o que voc\xea deseja excluir.")),(0,n.kt)("p",null,"Envie ",(0,n.kt)("inlineCode",{parentName:"p"},"/abandontoplevelclaim")," para excluir a prote\xe7\xe3o principal e todas as sua sub-prote\xe7\xf5es."))}k.isMDXComponent=!0}}]);