(this["webpackJsonpacionistas-front"]=this["webpackJsonpacionistas-front"]||[]).push([[0],{209:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(42),o=n.n(c),l=n(22),r=n(29),s=n(6);var d,b,j,p,u,x,g,h,O,m,v,f,y,k,C,R,N,L,A,F,w,D,z,S,M,P=function(){var e=Object(s.g)();a.a.useEffect((function(){console.log("react-router location changed: ".concat(e.pathname))}),[e])},I=n(45),T=n(26),$=Object(T.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),E=$.actions,B=E.increment,W=E.decrement,J=E.incrementByAmount,Z=function(e){return e.counter.value},G=$.reducer,U=(l.c,n(3)),V=n(2),H=V.d.div(d||(d=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 auto;\n\n  & > div {\n    display: flex;\n  }\n"]))),X=V.d.button(b||(b=Object(U.a)(["\n  background: ",";\n  color: black;\n  outline: none;\n  border: 0px;\n  padding: 20px;\n  font-size: 18px;\n  margin: 10px;\n"])),(function(e){return e.theme.primaryColor})),Y=V.d.div(j||(j=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  & span {\n    font-size: 48px;\n    font-weight: bold;\n  }\n"]))),q=V.d.input(p||(p=Object(U.a)(["\n  font-size: 48px;\n  text-align: center;\n"]))),K=n(1),Q=function(){var e=Object(l.c)(Z),t=Object(l.b)(),n=Object(i.useState)("2"),a=Object(I.a)(n,2),c=a[0],o=a[1];return Object(K.jsxs)(H,{children:[Object(K.jsxs)("div",{children:[Object(K.jsx)(X,{type:"button","aria-label":"Increment value",onClick:function(){return t(B())},children:"+"}),Object(K.jsxs)(Y,{children:["useAppSelector: ",Object(K.jsx)("span",{"data-testid":"count",children:e})]}),Object(K.jsx)(X,{type:"button","aria-label":"Decrement value",onClick:function(){return t(W())},children:"-"})]}),Object(K.jsxs)("div",{children:[Object(K.jsx)(X,{type:"button",onClick:function(){return t(J(Number(c)||0))},children:"Add Amount"}),Object(K.jsx)(q,{"data-testid":"counterinput","aria-label":"Set increment amount",value:c,onChange:function(e){return o(e.target.value)}}),Object(K.jsx)(X,{type:"button",onClick:function(){return t((e=Number(c)||0,function(t){setTimeout((function(){t(J(e))}),1e3)}));var e},children:"Add Async"})]})]})},_=function(){return Object(K.jsx)(Q,{})},ee=V.d.div(u||(u=Object(U.a)(["\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  * {\n    color: #1D4588;\n  }\n"]))),te=V.d.img(x||(x=Object(U.a)(["\n  filter: invert(21%) sepia(13%) saturate(7300%) hue-rotate(198deg) brightness(96%) contrast(91%);\n  height: 44px;\n  display: inline-block;\n"]))),ne=V.d.div(g||(g=Object(U.a)(["\n  position: relative;\n  display: inline-block;\n  left: 0px;\n"]))),ie=V.d.div(h||(h=Object(U.a)(["\n  position: relative;\n  top: -22px;\n  display: inline-block;\n  left: 20px;\n  .title {\n    font-size: 36px;\n    font: normal normal 300 36px/41px Roboto;\n    letter-spacing: 1.22px;\n  }\n  .subheading {\n    /* font-size: 15px; */\n    letter-spacing: 0.51px;\n    font: italic normal normal 15px/19px Roboto;\n  }\n"]))),ae=function(e){var t=e.title,n=e.subheading,i=e.icon;return Object(K.jsx)(ee,{children:Object(K.jsxs)("div",{children:[Object(K.jsx)(ne,{children:Object(K.jsx)(te,{src:i})}),Object(K.jsx)(ie,{children:Object(K.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(K.jsx)("div",{className:"p-col-12 title",children:t}),Object(K.jsx)("div",{className:"p-col-12 subheading",children:n})]})})]})})},ce=V.d.div(O||(O=Object(U.a)(["\n  height: 'calc(100vh - 80px)';\n  padding: 50px;\n"]))),oe=n.p+"static/media/globe-americas.c5f17689.svg",le=n(13),re=V.d.div(m||(m=Object(U.a)(["\n  border: 1px solid #707070;\n  border-radius: 13px;\n  padding: 20px;\n  "]))),se=V.d.div(v||(v=Object(U.a)(["\n  width: 100%;\n"]))),de=V.d.img(f||(f=Object(U.a)(["\n  width: 21px;\n"]))),be=V.d.span(y||(y=Object(U.a)(["\n  text-align: left;\n  font: normal normal bold 21px/24px Roboto;\n  letter-spacing: 0.71px;\n  color: #000000;\n  opacity: 1;\n  padding-left: 5px;\n"]))),je=function(e){var t=e.title,n=e.icon,i=e.children,a=e.style,c=e.className;return Object(K.jsxs)(re,{style:a,className:c,children:[Object(K.jsxs)(se,{children:[Object(K.jsx)(de,{src:n})," ",Object(K.jsx)(be,{children:t})]}),i]})},pe=Object(V.d)(je)(k||(k=Object(U.a)(["\n  font-family: Roboto;\n  min-height: 300px;\n  .left {\n    margin-top: 10px;\n    text-align: left;\n  }\n  .right {\n    margin-top: 10px;\n    text-align: right;\n    font-weight: bold;\n  }\n  .blue {\n    color: #1D4588;\n  }\n  .green {\n    color: #1D8848;\n  }\n  .black {\n    color: #000000;\n  }\n"]))),ue=function(e){var t=e.title,n=e.icon,i=e.firstLine,a=e.secondLine,c=e.thirdLine,o=e.graph;return Object(K.jsx)(pe,{title:t,icon:n,children:Object(K.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(K.jsx)("div",{className:"p-col-6 left blue",children:i.valueLeft}),Object(K.jsx)("div",{className:"p-col-6 right blue",children:i.valueRight}),Object(K.jsx)("div",{className:"p-col-6 left green",children:a.valueLeft}),Object(K.jsx)("div",{className:"p-col-6 right green",children:a.valueRight}),c&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"p-col-6 left black",children:i.valueLeft}),Object(K.jsx)("div",{className:"p-col-6 right black",children:i.valueRight})]}),o&&Object(K.jsx)("div",{className:"p-col-12",children:o})]})})},xe=n.p+"static/media/calendar-check.afafa597.svg",ge=n(7),he=function(e){Object(le.a)(e);var t=Object(K.jsx)("div",{style:{paddingTop:"20px"},children:Object(K.jsx)(ge.a,{type:ge.a,data:{labels:["11 de maio","12 de maio","13 de maio","14 de maio","15 de maio","16 de maio"],datasets:[{data:[12,19,3,5,2,3],label:"Realizado",backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1},{data:[8,4,8,9,12,5],label:"Projetado",backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{scales:{yAxes:{ticks:{beginAtZero:!0},grid:{display:!1}},xAxes:{grid:{display:!1}}},events:[],plugins:{legend:{display:!1}}}})});return Object(K.jsx)(ue,{title:"Faturamento M\xeas",icon:xe,firstLine:{valueLeft:"Realizado",valueRight:"R$ 5.584.320,00"},secondLine:{valueLeft:"Projetado",valueRight:"R$ 3.800.100,00"},graph:t})},Oe=n.p+"static/media/calendar-alt.923d61d6.svg",me=function(e){Object(le.a)(e);var t=Object(K.jsx)("div",{style:{paddingTop:"20px"},children:Object(K.jsx)(ge.a,{type:ge.a,data:{labels:["11 de maio","12 de maio","13 de maio","14 de maio","15 de maio","16 de maio"],datasets:[{data:[12,19,3,5,2,3],label:"Realizado",backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1},{data:[8,4,8,9,12,5],label:"Projetado",backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{scales:{yAxes:{ticks:{beginAtZero:!0},grid:{display:!1}},xAxes:{grid:{display:!1}}},events:[],plugins:{legend:{display:!1}}}})});return Object(K.jsx)(ue,{title:"Faturamento Ano Fiscal",icon:Oe,firstLine:{valueLeft:"Estimado 2021",valueRight:"R$ 60.584.320,00"},secondLine:{valueLeft:"Parcial at\xe9 agora",valueRight:"R$ 47.500.100,00"},graph:t})},ve=n.p+"static/media/file-times.412d18e2.svg",fe=function(e){Object(le.a)(e);var t=Object(K.jsx)("div",{style:{paddingTop:"20px"},children:Object(K.jsx)(ge.b,{type:ge.b,data:{labels:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho"],datasets:[{label:"Reserva",data:[10,20,30,40,50,60],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"#1D8848",yAxisID:"y-axis-2",pointStyle:"line"},{label:"Efetivo",data:[20,30,50,70,80,100],fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"#1D4588",yAxisID:"y-axis-2",pointStyle:"line"}]},options:{scales:{"y-axis-1":{type:"linear",display:!0,position:"left",grid:{display:!1}},"y-axis-2":{type:"linear",display:!1,position:"right",grid:{display:!1}}},events:[],plugins:{legend:{display:!1}}}})});return Object(K.jsx)(ue,{title:"Inadimpl\xeancia",icon:ve,firstLine:{valueLeft:"Reserva",valueRight:"R$ 1.808.320,00"},secondLine:{valueLeft:"Efetivo",valueRight:"R$ 609.200,00"},graph:t})},ye=n.p+"static/media/files-medical.dc57e36d.svg",ke=function(e){Object(le.a)(e);var t=Object(K.jsx)("div",{style:{paddingTop:"20px"},children:Object(K.jsx)(ge.a,{type:ge.a,data:{labels:["11 de maio","12 de maio","13 de maio","14 de maio","15 de maio","16 de maio"],datasets:[{data:[12,19,3,5,2,3],label:"Realizado",backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1},{data:[8,4,8,9,12,5],label:"Projetado",backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{scales:{yAxes:{ticks:{beginAtZero:!0},grid:{display:!1}},xAxes:{grid:{display:!1}}},events:[],plugins:{legend:{display:!1}}}})});return Object(K.jsx)(ue,{title:"Contratos",icon:ye,firstLine:{valueLeft:"Efetivados M\xeas",valueRight:"118"},secondLine:{valueLeft:"Solicita\xe7\xf5es M\xeas",valueRight:"243"},thirdLine:{valueLeft:"Total Ativo",valueRight:"1630"},graph:t})},Ce=function(e){Object(le.a)(e);var t=Object(K.jsx)("div",{style:{paddingTop:"20px"},children:Object(K.jsx)(ge.b,{type:ge.b,data:{labels:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho"],datasets:[{label:"Reserva",data:[1,2,4,3,7,1],fill:!1,backgroundColor:"blue",borderColor:"blue",yAxisID:"y-axis-2"},{label:"Efetivo",data:[2,7,4,5,3,10],fill:!1,backgroundColor:"red",borderColor:"red",yAxisID:"y-axis-2"}]},options:{scales:{"y-axis-1":{type:"linear",display:!0,position:"left",grid:{display:!1}},"y-axis-2":{type:"linear",display:!1,position:"right",grid:{display:!1}}},events:[],plugins:{legend:{display:!1}}}})});return Object(K.jsx)(ue,{title:"Faturamento 12 meses",icon:xe,firstLine:{valueLeft:"Realizado",valueRight:"R$ 158.005.320,00"},secondLine:{valueLeft:"Projetado",valueRight:"R$ 143.500.100,00"},graph:t})},Re=function(e){Object(le.a)(e);var t={radius:120,plugins:{legend:{title:{display:!0}},tooltip:{callbacks:{label:function(e,t){return"".concat(e.label,": R$ ").concat(function(e){var t="XYZABC",n=e.replace(",",t);return(n=n.replace(".",",")).replace(t,".")}(e.formattedValue))}}}}};return Object(K.jsx)("div",{children:Object(K.jsx)(ge.c,{type:ge.c,data:{labels:["Garantia","Emprestados"],datasets:[{label:"# of Votes",data:[47247.56,35123.23],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:t})})},Ne=function(){return Object(K.jsx)(ce,{children:Object(K.jsxs)("div",{className:"p-grid",children:[Object(K.jsx)("div",{className:"p-col-12",children:Object(K.jsx)(ae,{title:"Desempenho da Tecredi",subheading:"\xdaltima atualiza\xe7\xe3o: 05/05/2021 - 11:43",icon:oe})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(he,{})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(me,{})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(fe,{})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(Re,{})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(ke,{})}),Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(Ce,{})})]})})},Le=function(){return Object(K.jsx)("div",{children:"P\xe1gina n\xe3o encontrada"})},Ae=n(11),Fe=n(92),we=V.d.div(C||(C=Object(U.a)(["\n  background: #f1f1f1 0% 0% no-repeat padding-box; \n  opacity: 1;  \n  height: calc(100vh - 80px); \n  margin: 0;\n  padding: 0;\n  position: relative;\n"]))),De=V.d.div(R||(R=Object(U.a)(["\n  width: 100%;\n  height: 0px;\n  border-bottom: 1px solid #C7C7C7;\n  opacity: 1;\n"]))),ze=V.d.div(N||(N=Object(U.a)(["\n  vertical-align: middle;\n  line-height: normal;\n  display: inline-block;\n  margin-left: 0.8rem;\n  font-family: Roboto;\n  font-size: 1rem;\n"]))),Se=V.d.div(L||(L=Object(U.a)(["\n  cursor: pointer;\n  height: 80px;\n  opacity: 1;\n  line-height: 80px;\n  position: relative;\n  ","\n"])),(function(e){return e.selected&&"\n      color: #122D5A;\n      font-weight: bold;\n    "})),Me=V.d.div(A||(A=Object(U.a)(["\n  height: 79px;\n  width: 10px;\n  background-color: #2C7BFF;\n  position: absolute;\n"]))),Pe=V.d.img(F||(F=Object(U.a)(["\n  vertical-align: middle;\n  line-height: normal;\n  display: inline-block;\n  height: 1.3rem;\n  margin-left: 2rem;\n"]))),Ie=n.p+"static/media/user-circle.5fecad2e.svg",Te=n.p+"static/media/plus-circle.a695a0f3.svg",$e=n.p+"static/media/file-contract.0db3f6cb.svg",Ee=n.p+"static/media/user-headset.c21a197f.svg",Be=function(e){var t=e.icon,n=(e.selected,e.children,Object(Fe.a)(e,["icon","selected","children"]));return Object(K.jsxs)(Se,Object(Ae.a)(Object(Ae.a)({selected:e.selected},n),{},{children:[e.selected&&Object(K.jsx)(Me,{}),t&&Object(K.jsx)(Pe,{src:t}),Object(K.jsx)(ze,{children:e.children})]}))},We=function(){return Object(K.jsxs)(we,{children:[Object(K.jsx)(Be,{icon:oe,selected:!0,children:"Resumo Geral"}),Object(K.jsx)(De,{}),Object(K.jsx)(Be,{icon:Ie,children:"Meus investimentos"}),Object(K.jsx)(De,{}),Object(K.jsx)(Be,{icon:$e,children:"Meus contratos"}),Object(K.jsx)(De,{}),Object(K.jsx)(Be,{icon:Te,children:"Novo investimento"}),Object(K.jsxs)("span",{style:{position:"absolute",bottom:"0",width:"100%"},children:[Object(K.jsx)(De,{}),Object(K.jsx)(Be,{icon:Ee,children:"Atendimento"})]})]})},Je=n.p+"static/media/logo-white-transparent-bg.b95f982c.png",Ze=function(e){return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("img",Object(Ae.a)(Object(Ae.a)({},e),{},{src:Je}))})},Ge=V.d.div(w||(w=Object(U.a)(["\n  background: #122D5A 0% 0% no-repeat padding-box;\n  opacity: 1;\n  height: 80px;\n  line-height: 80px;\n  text-align: center;\n  img {\n    height: 35px;\n  }\n"]))),Ue=V.d.div(D||(D=Object(U.a)(["\n  background: #1D4588 0% 0% no-repeat padding-box;\n  height: 80px;\n  opacity: 1;\n  line-height: 80px;\n  * {\n    font-family: Roboto;\n    font-size: 1.2rem;\n    color: white;\n    letter-spacing: 0.71px;\n  }\n"]))),Ve=V.d.span(z||(z=Object(U.a)(["\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;\n"]))),He=V.d.span(S||(S=Object(U.a)(["\n  border: thin solid white;\n  border-radius: 25px;\n  padding: 10px 30px;\n"]))),Xe=V.d.span(M||(M=Object(U.a)(["\n  margin-left: -50px;\n  cursor: pointer;\n"]))),Ye=function(){return Object(K.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(K.jsx)("div",{className:"p-col-2",children:Object(K.jsx)(Ge,{children:Object(K.jsx)(Ve,{children:Object(K.jsx)(Ze,{})})})}),Object(K.jsx)("div",{className:"p-col",children:Object(K.jsx)(Ue,{children:Object(K.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(K.jsx)("div",{className:"p-col-4",children:Object(K.jsx)(Ve,{style:{marginLeft:"3rem"},children:"Portal do Investidor"})}),Object(K.jsx)("div",{className:"p-col-3 p-offset-4",children:Object(K.jsx)(He,{children:"Nome do usu\xe1rio"})}),Object(K.jsx)("div",{className:"p-col",children:Object(K.jsx)(Xe,{children:"Sair"})})]})})})]})},qe=function(e){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Ye,{}),Object(K.jsxs)("div",{className:"p-grid p-nogutter",children:[Object(K.jsx)("div",{className:"p-col-2",children:Object(K.jsx)(We,{})}),Object(K.jsx)("div",{className:"p-col",children:Object(K.jsx)(s.b,Object(Ae.a)({},e))})]})]})},Ke=function(){return P(),Object(K.jsx)("div",{children:Object(K.jsxs)(s.d,{children:[Object(K.jsx)(qe,{exact:!0,path:"/",component:Ne}),Object(K.jsx)(s.b,{exact:!0,path:"/counter",component:_}),Object(K.jsx)(s.b,{path:"/404",component:Le}),Object(K.jsx)(s.a,{to:"/404"})]})})},Qe=function(){return Object(K.jsx)(r.a,{basename:"/tecreditest",children:Object(K.jsx)(Ke,{})})},_e={name:"DefaultTheme",backgroundColor:"#FFFFFF",textColor:"black",primaryColor:"yellow"},et=function(e){var t=e.children;return Object(K.jsx)(V.a,{theme:_e,children:t})};et.defaultProps={children:null};var tt,nt,it=et,at=Object(V.b)(tt||(tt=Object(U.a)(["\n","\n"])),(function(e){var t=e.theme;return Object(V.c)(nt||(nt=Object(U.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n\n  html,\n  body,\n  #root {\n  }\n  body {\n    background: ",";\n  }\n\n  html {\n    font-size: '100%';\n  }\n"])),t.backgroundColor)})),ct=n(88),ot=n.n(ct),lt=n(15),rt=Object(lt.b)({counter:G}),st=Object(T.a)({reducer:rt,middleware:Object(T.c)().concat(ot.a)}),dt=(n(208),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))}),bt=n(89);o.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsxs)(it,{children:[Object(K.jsx)(at,{}),Object(K.jsxs)(l.a,{store:st,children:[Object(K.jsx)(bt.a,{children:Object(K.jsx)("title",{children:"Portal do Investidor"})}),Object(K.jsx)(Qe,{})]})]})}),document.getElementById("root")),dt()}},[[209,1,2]]]);
//# sourceMappingURL=main.60adc5b3.chunk.js.map