(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{204:function(t,e,n){},205:function(t,e,n){"use strict";n.r(e);n(77),n(78);var i=n(0),a=n.n(i),o=n(75),d=n.n(o),s=n(6),l=n.n(s),r=n(9),c=n(3),u=n(4),b=(n(8),n(27),n(76)),h=n.n(b).a.create({baseURL:"".concat("https://pomodoro-server.up.railway.app")}),f=n(36),w=n(1);var j=n(5),O=n(13),g=function(){return Object(w.jsxs)("div",{className:"text-center pt-4 pb-4 statsNavContainer",children:[Object(w.jsx)(O.b,{to:"/stats/day",children:Object(w.jsx)("button",{type:"button",className:"btn btn-secondary statsNavigation statsNavigationLeft",children:"Day"})}),Object(w.jsx)(O.b,{to:"/stats/week",children:Object(w.jsx)("button",{type:"button",className:"btn btn-secondary statsNavigation",children:"Week"})}),Object(w.jsx)(O.b,{to:"/stats/month",children:Object(w.jsx)("button",{type:"button",className:"btn btn-secondary statsNavigation",children:"Month"})}),Object(w.jsx)(O.b,{to:"/stats/year",children:Object(w.jsx)("button",{type:"button",className:"btn btn-secondary statsNavigation statsNavigationRight",children:"Year"})})]})},p=function(t){var e=t.setLoadingStyle,n=Object(i.useState)({}),a=Object(c.a)(n,2),o=a[0],d=a[1],s=Object(i.useState)({}),l=Object(c.a)(s,2),r=l[0],u=l[1],b=Object(i.useState)(4),f=Object(c.a)(b,2),O=f[0],p=f[1],S=Object(i.useState)(4),W=Object(c.a)(S,2),x=W[0],y=W[1],m=Object(i.useState)(4),C=Object(c.a)(m,2),F=C[0],v=C[1],z=Object(i.useState)(0),L=Object(c.a)(z,2),k=L[0],A=L[1],E=Object(i.useState)(!1),N=Object(c.a)(E,2),R=N[0],q=N[1];j.Chart.defaults.global.defaultFontColor="#F8F9FA",Object(i.useEffect)((function(){h.get("/day").then((function(t){var n=t.data[0],i=t.data[0].total;d(n),A(i),q(!0),e("displayNone")})).catch((function(t){t.response&&console.log(t.response),t.request&&console.log(t.request)}))}),[]),Object(i.useEffect)((function(){T()}),[R,O]);var T=function(){u({labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],datasets:[{label:"Pomodoros Completed",data:[o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],o[8],o[9],o[10],o[11],o[12],o[13],o[14],o[15],o[16],o[17],o[18],o[19],o[20],o[21],o[22],o[23]],backgroundColor:["#54AEA9"],borderWidth:F,pointRadius:O,pointHoverRadius:x}]})},U=function(){window.addEventListener("resize",(function(){window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15))}))};return Object(i.useEffect)((function(){return U(),window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15)),function(){window.removeEventListener("resize",U)}}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(g,{}),Object(w.jsx)("div",{className:"graph",style:{width:"100%",height:"100%"},children:Object(w.jsx)(j.Line,{data:r,options:{responsive:!0,maintainAspectRatio:!1,title:{text:"Day Total: ".concat(k),display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})},S=function(t){var e=t.setLoadingStyle,n=Object(i.useState)({}),a=Object(c.a)(n,2),o=a[0],d=a[1],s=Object(i.useState)({}),l=Object(c.a)(s,2),r=l[0],u=l[1],b=Object(i.useState)(4),f=Object(c.a)(b,2),O=f[0],p=f[1],S=Object(i.useState)(4),W=Object(c.a)(S,2),x=W[0],y=W[1],m=Object(i.useState)(4),C=Object(c.a)(m,2),F=C[0],v=C[1],z=Object(i.useState)(0),L=Object(c.a)(z,2),k=L[0],A=L[1],E=Object(i.useState)(!1),N=Object(c.a)(E,2),R=N[0],q=N[1];j.Chart.defaults.global.defaultFontColor="#F8F9FA",Object(i.useEffect)((function(){h.get("/week").then((function(t){var n=t.data[0],i=t.data[0].total;d(n),A(i),q(!0),e("displayNone")})).catch((function(t){t.response&&console.log(t.response),t.request&&console.log(t.request)}))}),[]),Object(i.useEffect)((function(){T()}),[R,O]);var T=function(){u({labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{label:"Pomodoros Completed",data:[o[0],o[1],o[2],o[3],o[4],o[5],o[6]],backgroundColor:["#54AEA9"],borderWidth:F,pointRadius:O,pointHoverRadius:x}]})},U=function(){window.addEventListener("resize",(function(){window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15))}))};return Object(i.useEffect)((function(){return U(),window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15)),function(){window.removeEventListener("resize",U)}}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(g,{}),Object(w.jsx)("div",{className:"graph",style:{width:"100%",height:"100%"},children:Object(w.jsx)(j.Line,{data:r,options:{responsive:!0,maintainAspectRatio:!1,title:{text:"Week Total: ".concat(k),display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})},W=function(t){var e=t.setLoadingStyle,n=Object(i.useState)({}),a=Object(c.a)(n,2),o=a[0],d=a[1],s=Object(i.useState)({}),l=Object(c.a)(s,2),r=l[0],u=l[1],b=Object(i.useState)(4),f=Object(c.a)(b,2),O=f[0],p=f[1],S=Object(i.useState)(4),W=Object(c.a)(S,2),x=W[0],y=W[1],m=Object(i.useState)(4),C=Object(c.a)(m,2),F=C[0],v=C[1],z=Object(i.useState)(0),L=Object(c.a)(z,2),k=L[0],A=L[1],E=Object(i.useState)(!1),N=Object(c.a)(E,2),R=N[0],q=N[1];j.Chart.defaults.global.defaultFontColor="#F8F9FA",Object(i.useEffect)((function(){h.get("/month").then((function(t){var n=t.data[0],i=t.data[0].total;u(n),A(i),q(!0),e("displayNone")})).catch((function(t){t.response&&console.log(t.response),t.request&&console.log(t.request)}))}),[]),Object(i.useEffect)((function(){T()}),[R,O]);var T=function(){d({labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],datasets:[{label:"Pomodoros Completed",data:[r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18],r[19],r[20],r[21],r[22],r[23],r[24],r[25],r[26],r[27],r[28],r[29],r[30],r[31]],backgroundColor:["#54AEA9"],borderWidth:F,pointRadius:O,pointHoverRadius:x}]})},U=function(){window.addEventListener("resize",(function(){window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15))}))};return Object(i.useEffect)((function(){return U(),window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15)),function(){window.removeEventListener("resize",U)}}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(g,{}),Object(w.jsx)("div",{className:"graph",style:{width:"100%",height:"100%"},children:Object(w.jsx)(j.Line,{data:o,options:{responsive:!0,maintainAspectRatio:!1,title:{text:"Month Total: ".concat(k),display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})},x=function(t){var e=t.setLoadingStyle,n=Object(i.useState)({}),a=Object(c.a)(n,2),o=a[0],d=a[1],s=Object(i.useState)({}),l=Object(c.a)(s,2),r=l[0],u=l[1],b=Object(i.useState)(4),f=Object(c.a)(b,2),O=f[0],p=f[1],S=Object(i.useState)(4),W=Object(c.a)(S,2),x=W[0],y=W[1],m=Object(i.useState)(4),C=Object(c.a)(m,2),F=C[0],v=C[1],z=Object(i.useState)(0),L=Object(c.a)(z,2),k=L[0],A=L[1],E=Object(i.useState)(!1),N=Object(c.a)(E,2),R=N[0],q=N[1];j.Chart.defaults.global.defaultFontColor="#F8F9FA",Object(i.useEffect)((function(){h.get("/year").then((function(t){var n=t.data[0],i=t.data[0].total;u(n),A(i),q(!0),e("displayNone")})).catch((function(t){t.response&&console.log(t.response),t.request&&console.log(t.request)}))}),[]),Object(i.useEffect)((function(){T()}),[R,O]);var T=function(){d({labels:["1","2","3","4","5","6","7","8","9","10","11","12"],datasets:[{label:"Pomodoros Completed",data:[r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11]],backgroundColor:["#54AEA9"],borderWidth:F,pointRadius:O,pointHoverRadius:x}]})},U=function(){window.addEventListener("resize",(function(){window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15))}))};return Object(i.useEffect)((function(){return U(),window.innerWidth<1781&&(j.Chart.defaults.global.defaultFontSize=12,p(4),y(4),v(4)),window.innerWidth>=1781&&window.innerWidth<1900&&(j.Chart.defaults.global.defaultFontSize=15,p(6),y(6),v(6)),window.innerWidth>=1900&&window.innerWidth<2137&&(j.Chart.defaults.global.defaultFontSize=18,p(7),y(7),v(7)),window.innerWidth>=2137&&window.innerWidth<2850&&(j.Chart.defaults.global.defaultFontSize=20,p(8),y(8),v(8)),window.innerWidth>=2850&&window.innerWidth<4275&&(j.Chart.defaults.global.defaultFontSize=25,p(9),y(9),v(9)),window.innerWidth>=4275&&(j.Chart.defaults.global.defaultFontSize=40,p(12),y(12),v(15)),function(){window.removeEventListener("resize",U)}}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(g,{}),Object(w.jsx)("div",{className:"graph",style:{width:"100%",height:"100%"},children:Object(w.jsx)(j.Line,{data:o,options:{responsive:!0,maintainAspectRatio:!1,title:{text:"Year Total: ".concat(k),display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})})]})},y=new f.UnityContext({loaderUrl:"build/build.loader.js",dataUrl:"build/build.data",frameworkUrl:"build/build.framework.js",codeUrl:"build/build.wasm"}),m=function(){var t,e=Object(i.useState)("text-center loading displayInline !important"),n=Object(c.a)(e,2),o=(n[0],n[1]),d=Object(i.useState)(15e5),s=Object(c.a)(d,2),b=(s[0],s[1],Object(i.useState)(3e5)),h=Object(c.a)(b,2),f=(h[0],h[1],Object(i.useRef)(null)),j=Object(u.m)();function O(){return(O=Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.current.style.right="-60%",window.location.href="https://react-unity-webgl-test.netlify.app";case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.current.style.right="-60%",t.next=3,y.quitUnityInstance();case 3:j("/stats/day");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t=f,Object(i.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&"0px"===f.current.style.right&&(f.current.style.right="-60%")}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t]);return a.a.useEffect((function(){window.location.replace("https://react-unity-webgl-test.netlify.app")}),[]),Object(w.jsxs)("div",{children:[Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{exact:!0,path:"/",component:function(){return window.location.href="https://react-unity-webgl-test.netlify.app",null}}),Object(w.jsx)(u.a,{path:"/stats/day",element:Object(w.jsx)(p,{setLoadingStyle:o})}),Object(w.jsx)(u.a,{path:"/stats/week",element:Object(w.jsx)(S,{setLoadingStyle:o})}),Object(w.jsx)(u.a,{path:"/stats/month",element:Object(w.jsx)(W,{setLoadingStyle:o})}),Object(w.jsx)(u.a,{path:"/stats/year",element:Object(w.jsx)(x,{setLoadingStyle:o})})]}),Object(w.jsx)("div",{className:"mhead",children:Object(w.jsx)("img",{className:"menu-ham",src:"/img/hamburger.png",onClick:function(){f.current.style.right="0px"},alt:""})}),Object(w.jsxs)("div",{className:"menu",ref:f,children:[Object(w.jsx)("div",{className:"close-menu",children:Object(w.jsx)("img",{src:"/img/exit.png",onClick:function(){f.current.style.right="-60%"},className:"menu-exit",alt:""})}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("button",{onClick:function(){return function(){return O.apply(this,arguments)}()},children:Object(w.jsx)("li",{children:"Pomodoro"})}),Object(w.jsx)("button",{onClick:function(){return function(){return g.apply(this,arguments)}()},children:Object(w.jsx)("li",{children:"Statistics"})})]})]})]})};n(204);d.a.render(Object(w.jsx)(O.a,{children:Object(w.jsx)(m,{})}),document.querySelector("#root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.b014c113.chunk.js.map