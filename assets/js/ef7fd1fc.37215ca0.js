"use strict";(self.webpackChunkarmawiki=self.webpackChunkarmawiki||[]).push([[684],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},869:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),r=t(6775),i="apiTable_e8hp";function o(e,n){var t=e.name,i=e.children,o=function(e){for(var n=e;(0,a.isValidElement)(n);)n=a.Children.toArray(n.props.children)[0];return n}(i),l=t?t+"-"+o:o,s="#"+l,u=(0,r.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:u.location.hash===s?n:void 0,onClick:function(){u.push(s)},onKeyDown:function(e){"Enter"===e.key&&u.push(s)}},i.props.children)}var l=a.forwardRef(o);function s(e){var n=e.children,t=e.name,r=a.Children.toArray(n.props.children),o=r[0],s=r[1],u=(0,a.useRef)(null);(0,a.useEffect)((function(){var e;null==(e=u.current)||e.focus()}),[u]);var c=a.Children.map(s.props.children,(function(e){return a.createElement(l,{name:t,ref:u},e)}));return a.createElement("table",{className:i},o,a.createElement("tbody",null,c))}},6695:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(869),l=["components"],s={title:"Skin Customizada",description:"Sistema de skins customizadas.",sidebar_position:4},u="Skin Customizada",c={unversionedId:"melhorias/skin",id:"melhorias/skin",title:"Skin Customizada",description:"Sistema de skins customizadas.",source:"@site/docs/melhorias/skin.md",sourceDirName:"melhorias",slug:"/melhorias/skin",permalink:"/melhorias/skin",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Skin Customizada",description:"Sistema de skins customizadas.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Funil inteligente",permalink:"/melhorias/funil"},next:{title:"Cadeira Customizada",permalink:"/melhorias/cadeira"}},p={},m=[{value:"Comandos",id:"comandos",level:2},{value:"Adicionar Skin por Link",id:"adicionar-skin-por-link",level:2},{value:"Adicionar Skin por Nick",id:"adicionar-skin-por-nick",level:2},{value:"Usu\xe1rios do Tlauncher",id:"usu\xe1rios-do-tlauncher",level:2}],d={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"skin-customizada"},"Skin Customizada"),(0,i.kt)("p",null,"Skin customizada serve para que o jogadorsem Minecraft Original possa usar skins no Armageddon."),(0,i.kt)("h2",{id:"comandos"},"Comandos"),(0,i.kt)(o.Z,{mdxType:"APITable"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Comando"),(0,i.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/skin set [nick]")),(0,i.kt)("td",{parentName:"tr",align:null},"Alterar sua skin usando uma conta original")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/skin url [https://site.com/final.png]")),(0,i.kt)("td",{parentName:"tr",align:null},"Alterar sua skin usando uma imagem")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/skin clear")),(0,i.kt)("td",{parentName:"tr",align:null},"Remover sua skin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/skin update")),(0,i.kt)("td",{parentName:"tr",align:null},"Atualizar sua skin"))))),(0,i.kt)("h2",{id:"adicionar-skin-por-link"},"Adicionar Skin por Link"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"M\xe9todo Recomendado!"))),(0,i.kt)("p",null,"Envie sua skin em qualquer site de armazenamento de imagens.",(0,i.kt)("br",{parentName:"p"}),"\n","\u26a0\ufe0f Site indicado: ",(0,i.kt)("a",{parentName:"p",href:"https://imgur.com"},"https://imgur.com/")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copie o link direto da imagem (link com final .png)."),(0,i.kt)("li",{parentName:"ol"},"Envie dentro do server ",(0,i.kt)("inlineCode",{parentName:"li"},"/skin url link.com/final.png"),"  ")),(0,i.kt)("p",null,"\ud83c\udfaf Exemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},"/skin url https://i.imgur.com/CN2PHw3.png")),(0,i.kt)("h2",{id:"adicionar-skin-por-nick"},"Adicionar Skin por Nick"),(0,i.kt)("p",null,"Procure contas originais com a skin que deseja usar.",(0,i.kt)("br",{parentName:"p"}),"\n","\u26a0\ufe0f Site indicado: ",(0,i.kt)("a",{parentName:"p",href:"https://pt.namemc.com"},"https://pt.namemc.com/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/skin set [nick]")," - Adicionar a mesma skin da conta orginal.  ")),(0,i.kt)("p",null,"\ud83c\udfaf Exemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},"/skin set viniccius13")),(0,i.kt)("p",null,"Observa\xe7\xe3o: Quando o dono da conta altera a skin, sua skin tamb\xe9m ser\xe1 alterada."),(0,i.kt)("h2",{id:"usu\xe1rios-do-tlauncher"},"Usu\xe1rios do Tlauncher"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aten\xe7\xe3o ao usar Tlauncher!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Caso voc\xea utilize o cliente Tlauncher e quer utilizar skins no server, desative o sistema de skins do pr\xf3prio Tlauncher. Clique para desmarcar a op\xe7\xe3o "Use peles Tlauncher".'),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/730263790377107477/739543620226515016/unknown.png",alt:"Exemplo"})))))}k.isMDXComponent=!0}}]);