(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(4),a=c.n(n),i=c(2),j=(c(9),c(0)),r=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(i.a)(a,2),u=r[0],b=r[1],o=Object(s.useState)(0),l=Object(i.a)(o,2),O=l[0],d=l[1],h=Object(s.useState)(""),x=Object(i.a)(h,2),p=x[0],m=x[1],v=Object(s.useState)(!0),q=Object(i.a)(v,2),w=q[0],N=q[1],z=Object(s.useState)(!0),S=Object(i.a)(z,2),f=S[0],g=S[1],y=Object(s.useState)(""),C=Object(i.a)(y,2),k=C[0],G=C[1],J=Object(s.useState)(!0),W=Object(i.a)(J,2),B=W[0],E=W[1],I=Object(s.useState)(!0),L=Object(i.a)(I,2),Y=L[0],A=L[1],D=[{quiz:"22 + (99 - 83) * 2 : 4",answer:"30"},{quiz:"90 - 60 : (2 + 3) * 7",answer:"6"},{quiz:"21 + 80",answer:"101"},{quiz:"42 : (39 - 36) + 6 * 7",answer:"56"},{quiz:"15 + 15 - 5",answer:"25"},{quiz:"40 : 2 + 1",answer:"21"},{quiz:"61 - 11 * 5 : (2 + 3)",answer:"50"},{quiz:"100 * 2",answer:"200"},{quiz:"80 - 40",answer:"40"},{quiz:"66 - 56 : 8 * (2 + 6)",answer:"10"}];return Object(j.jsx)("div",{className:"app",children:u?Object(j.jsxs)("div",{className:"score-section",children:[f?Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{children:"Welcome! What is your name?"}),Object(j.jsx)("input",{placeholder:"type...",type:"text",value:k,onChange:function(e){G(e.target.value)}}),Object(j.jsx)("div",{className:"name",children:Object(j.jsx)("span",{children:Y?"":"required name"})}),Object(j.jsx)("button",{onClick:function(){""===k?A(!1):(b(!1),A(!0))},children:"Let Start Game"})]}):Object(j.jsxs)("div",{className:"score",children:[" ",k," Good job! ",Object(j.jsx)("br",{})," You scored ",O," out of ",D.length," "]}),"  "]}):Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"question-section",children:[Object(j.jsxs)("div",{className:"question-text",children:[D[c].quiz," =",Object(j.jsx)("input",{type:"text",onChange:function(e){m(e.target.value)},value:p})]}),Object(j.jsxs)("div",{className:"btn-section",children:[Object(j.jsx)("div",{className:"span",children:Object(j.jsx)("span",{children:B?"":"required"})}),Object(j.jsx)("button",{className:w?"button":"btnNoCorrect",onClick:function(){return function(){var e=c+1;e<D.length&&""!==p&&n(e),m(""),g(!1),E(""!==p),p===D[c].answer?(d(O+1),N(!0)):N(!1),b(e===D.length)}()},children:"Next"})]})]})})})};a.a.render(Object(j.jsx)(r,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.b4df5579.chunk.js.map