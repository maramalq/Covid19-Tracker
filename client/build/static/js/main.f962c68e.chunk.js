(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){e.exports={container:"Charts_container__1mZfu"}},136:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(136),a(13)),i=a(19),l=a.n(i),d=a(25),u=a(7),j=a(6),b=a(11),h=a(10),O=(a(86),a(300)),p=a(304),m=a(305),g=a(306),f=a(64),x=a.n(f),v=a(49),y=a.n(v),w=a(2),C=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(w.jsx)("div",{className:y.a.container,children:Object(w.jsxs)(O.a,{container:!0,spacing:3,justify:"center",children:[Object(w.jsx)(O.a,{item:!0,component:p.a,className:y.a.infected,children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:" Infected "}),Object(w.jsxs)(g.a,{variant:"h5",children:[" ",Object(w.jsx)(x.a,{start:0,end:a.value,duration:2.5,separator:","})]}),Object(w.jsx)(g.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(g.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(w.jsx)(O.a,{item:!0,component:p.a,className:y.a.recovered,children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:" Recovered "}),Object(w.jsxs)(g.a,{variant:"h5",children:[" ",Object(w.jsx)(x.a,{start:0,end:n.value,duration:2.5,separator:","})]}),Object(w.jsx)(g.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(g.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(w.jsx)(O.a,{item:!0,component:p.a,className:y.a.deaths,children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:" Deaths "}),Object(w.jsxs)(g.a,{variant:"h5",children:[" ",Object(w.jsx)(x.a,{start:0,end:r.value,duration:2.5,separator:","})]}),Object(w.jsx)(g.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(g.a,{variant:"body2",children:"Number of deaths cuased by COVID-19"})]})})]})}):"Loading..."},S=a(34),N=a.n(S),D="https://covid19.mathdro.id/api",k=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,s,o,i,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,o=r.deaths,i=r.lastUpdate,d={confirmed:c,recovered:s,deaths:o,lastUpdate:i},e.abrupt("return",d);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),F=a(83),E=a(123),I=a.n(E),U=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,s=e.country,i=Object(n.useState)([]),u=Object(o.a)(i,2),j=u[0],b=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,_();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?Object(w.jsx)(F.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"Infected",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,O=j.length?Object(w.jsx)(F.b,{data:{labels:j.map((function(e){return e.date})),datasets:[{data:j.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return Object(w.jsx)("div",{className:I.a.container,children:s?h:O})},L=a(309),B=a(124),V=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(w.jsx)(L.a,{children:Object(w.jsxs)(B.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(w.jsx)("option",{value:"global",children:"Global"}),c.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))]})})},R=a(26),T=function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("h5",{children:[" You are not a member yet. What you are waiting for? | ",Object(w.jsx)(R.a,{to:"/register",children:" Register "})," "]}),Object(w.jsxs)("h5",{children:[" You are already a member? | ",Object(w.jsx)(R.a,{to:"/login",children:" Login "})," "]})]})},W=a(9),Y=a(18),z=a(307),A=a(308),H=function(e){var t=e.setUser,a=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)([]),l=Object(o.a)(i,2),d=l[0],u=l[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),h=b[0],O=b[1],p=Object(n.useState)(""),m=Object(o.a)(p,2),g=m[0],f=m[1],x=Object(n.useState)(""),v=Object(o.a)(x,2),y=v[0],C=v[1],S=Object(n.useState)(""),D=Object(o.a)(S,2),k=D[0],_=D[1],P=Object(n.useState)(""),F=Object(o.a)(P,2),E=F[0],I=F[1],U=function(e){console.log("e.target.name",e.target.name),console.log("e.target.value",e.target.value),"firstName"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<3?C("First Name should be at least 3 characters"):e.target.value.length>=3&&C("")),"lastName"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<3?_("Last Name should be at least 3 characters"):e.target.value.length>=3&&_("")),"email"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<3?O(" Please Enter Valid Email"):e.target.value.length>=3&&O("")),"password"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<8?f(" Password should be at least 8 characters"):e.target.value.length>=8&&f("")),"confirmPassword"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),c.password!==e.target.value||e.target.value<8?I("Confirm Password should match password"):I(""))};return Object(w.jsxs)(w.Fragment,{children:[d.map((function(e,t){return Object(w.jsx)("p",{children:e},t)})),Object(w.jsx)("h2",{children:"  "}),Object(w.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("submitting form"),N.a.post("http://localhost:8000/api/register",c).then((function(e){console.log(e.data),t(e.data.user),Object(R.c)("/")})).catch((function(e){console.log("Hello");for(var t=e.response.data.errors,a=[],n=0,r=Object.keys(t);n<r.length;n++){var c=r[n];a.push(t[c].message)}u(a)}))},children:Object(w.jsxs)("fieldset",{style:{margin:"0 auto",width:500},children:[Object(w.jsx)("legend",{style:{fontFamily:"Ubuntu , sans-serif"},children:" Create a new account "}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"First Name",type:"text",name:"firstName",onChange:U,value:c.firstName}),y?Object(w.jsx)("p",{children:y}):""]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Last Name",type:"text",name:"lastName",onChange:U,value:c.lastName}),Object(w.jsx)("br",{}),k?Object(w.jsx)("p",{children:k}):""]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Email",type:"text",name:"email",onChange:U,value:c.email}),h?Object(w.jsx)("p",{children:h}):""]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Password",type:"password",name:"password",onChange:U,value:c.password}),g?Object(w.jsx)("p",{children:g}):""]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Confirm Password",style:{marginBottom:20},type:"password",name:"confirmPassword",onChange:U,value:c.confirmPassword}),E?Object(w.jsx)("p",{children:E}):""]}),Object(w.jsx)(A.a,{variant:"contained",color:"primary",type:"submit",children:"Register"})," \xa0",Object(w.jsx)(A.a,{variant:"contained",color:"secondary",children:Object(w.jsx)(R.a,{to:"/",style:{textDecoration:"none",color:"white"},children:" Cancel"})})]})})]})},J=function(e){var t=e.setUser,a=Object(n.useState)({email:"",password:""}),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),d=l[0],u=l[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),h=b[0],O=b[1],p=function(e){console.log("changing state"),"email"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<3?u(" Please Enter Valid Email"):e.target.value.length>=3&&u("")),"password"===e.target.name&&(s(Object(Y.a)(Object(Y.a)({},c),{},Object(W.a)({},e.target.name,e.target.value))),e.target.value.length<8?O(" Password should be at least 8 characters"):e.target.value.length>=8&&O(""))};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"  "}),Object(w.jsx)("form",{onSubmit:function(e){e.preventDefault(),N.a.post("http://localhost:8000/api/login",c,{withCredentials:!0}).then((function(e){console.log(e.data.user),t(e.data.user),Object(R.c)("/")})).catch((function(e){console.log("Hello")}))},children:Object(w.jsxs)("fieldset",{style:{margin:"0 auto",width:500},children:[Object(w.jsx)("legend",{style:{fontFamily:"Ubuntu , sans-serif"},children:" Login to your account "}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Email",type:"text",name:"email",onChange:p}),d?Object(w.jsx)("p",{children:d}):""]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(z.a,{id:"standard-basic",label:"Password",style:{marginBottom:20},type:"password",name:"password",onChange:p}),h?Object(w.jsx)("p",{children:h}):""]}),Object(w.jsx)(A.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})," \xa0",Object(w.jsx)(A.a,{variant:"contained",color:"secondary",children:Object(w.jsx)(R.a,{to:"/",style:{textDecoration:"none",color:"white"},children:" Cancel"})})]})})]})},M=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h1",{children:" Welcome to Corona Tracker !"}),Object(w.jsx)(C,{data:t}),Object(w.jsx)(V,{handleCountryChange:this.handleCountryChange,handleChartChange:this.handleChartChange}),Object(w.jsx)(U,{data:t,country:a}),Object(w.jsx)(q,{})]})}}]),a}(r.a.Component),q=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(w.jsx)(w.Fragment,{children:a?Object(w.jsx)("div",{children:Object(w.jsxs)("h1",{children:[" Welcome ",a&&a.firstName," :)"]})}):Object(w.jsxs)(R.b,{children:[Object(w.jsx)(T,{path:"/"}),Object(w.jsx)(H,{path:"/register",setUser:r}),Object(w.jsx)(J,{path:"/login",setUser:r})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,311)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),G()},49:function(e,t,a){e.exports={container:"Cards_container__3bjn6",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},86:function(e,t,a){}},[[270,1,2]]]);
//# sourceMappingURL=main.f962c68e.chunk.js.map