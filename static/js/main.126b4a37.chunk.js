(this.webpackJsonplocal_elections=this.webpackJsonplocal_elections||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(17),r=n.n(i),o=(n(104),n(105),n(10)),s=n(144),l=n(116),u=n(158),j=n(4),b=Object(s.a)((function(e){return{fromControl:{width:"70%"},typography:{fontSize:"19px"}}})),d=function(e){var t=b(),n=a.a.useState(""),i=Object(o.a)(n,2),r=i[0],s=i[1],d=e.index,f=e.response,p=e.returnAnswer,O=e.label,x=e.disabled,h=e.title;Object(c.useEffect)((function(){f&&s(f)}),[f]);return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(j.jsx)(l.a,{classes:t.typography,variant:"h6",component:"h6",children:h}),Object(j.jsx)(u.a,{disabled:x&&!0,id:"textField",value:r,label:O&&O,onChange:function(e){s(e.target.value),p(e.target.value,d)}})]})})},f=n(65),p=n(161),O=n(149),x=n(155);Object(s.a)((function(e){return{formControl:{minWidth:"30%",maxWidth:300},typography:{fontSize:"24px"}}}));var h=n(56);h.a.initializeApp({apiKey:"AIzaSyD29vr6hDlRBNnNTTMG_EDGqTW6J0PuGa4",authDomain:"local-elections-210f5.firebaseapp.com",projectId:"local-elections-210f5",storageBucket:"local-elections-210f5.appspot.com",messagingSenderId:"666238817996",appId:"1:666238817996:web:57fd88586b301e8fe15469",measurementId:"G-EK2H89C8LB"});new h.a.auth.GoogleAuthProvider;var v=h.a,m=n(147),g=n(159),y=n(150),S=n(157),w=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),width:"70%"},typography:{fontSize:"19px"},radio:{fontSize:"15px",color:"black"}}}));var C=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(""),u=Object(o.a)(s,2),b=u[0],d=u[1],f=Object(c.useState)([]),h=Object(o.a)(f,2),v=h[0],C=h[1],k=w(),A=a.a.useState(!1),E=Object(o.a)(A,2),T=E[0],N=E[1],_=e.title,z=e.answers,I=e.returnAnswer,B=e.index;return Object(c.useEffect)((function(){var e=z.map((function(e,t){return e.answers})),t=z.map((function(e,t){return e.title==i})).indexOf(!0);C(e[t]),d("")}),[i]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{classes:k.typography,variant:"h6",component:"h6",children:_}),Object(j.jsx)(O.a,{className:k.formControl,children:Object(j.jsx)(x.a,{open:T,value:i,onChange:function(e){r(e.target.value),I(void 0,B)},onClose:function(){N(!1)},onOpen:function(){N(!0)},input:Object(j.jsx)(m.a,{id:"grouped-select"}),children:z.map((function(e,t){return Object(j.jsx)(p.a,{value:e.title,children:e.title})}))})}),v&&Object(j.jsx)("div",{style:{paddingTop:15},children:Object(j.jsx)(O.a,{error:!0,style:{margin:0,padding:0},const:"fieldset",children:Object(j.jsx)(g.a,{value:b,onChange:function(e){d(e.target.value);var t=i+"=>"+e.target.value;I(t,B)},children:v.map((function(e,t){return Object(j.jsx)(y.a,{value:e,control:Object(j.jsx)(S.a,{}),label:Object(j.jsx)(l.a,{variant:"body2",component:"p",className:k.radio,color:"textSecondary",children:e})},t)}))})})})]})})},k=n(153),A=n(156),E=n(152),T=n(151),N=Object(s.a)((function(e){return{typography:{fontSize:"24px"}}})),_=function(e){var t=Object(c.useState)(null),n=Object(o.a)(t,2),a=(n[0],n[1]),i=Object(c.useState)(null),r=Object(o.a)(i,2),s=r[0],u=r[1],b=Object(c.useState)(null),d=Object(o.a)(b,2),f=d[0],p=d[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),h=x[0],m=x[1],g=N(),S=e.title,w=e.index,C=e.returnAnswer;Object(c.useEffect)((function(){C(!!h&&"abondon",w)}),[h]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{classes:g.typography,variant:"h6",component:"h6",children:S}),!s&&Object(j.jsx)(y.a,{control:Object(j.jsx)(T.a,{checked:h,onChange:function(e){m(!h)},name:"checkedB",color:"primary"}),label:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)("br",{}),!h&&Object(j.jsxs)(E.a,{style:{marginBottom:15},color:"primary",variant:"contained",component:"label",children:["Upload File",Object(j.jsx)("input",{type:"file",onChange:function(e){if(e.target.files[0]){a(e.target.files[0]);var t=e.target.files[0],n=t.lastModified+t.name+"___"+new Date;v.storage().ref("images/".concat(n)).put(e.target.files[0]).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;p(t)}),(function(e){console.log(e)}),(function(){v.storage().ref("images").child(n).getDownloadURL().then((function(e){console.log(e),C(e,w),u(e)}))}))}},hidden:!0})]}),Object(j.jsx)("br",{}),!h&&f&&Object(j.jsxs)(A.a,{className:g.uploadLine,position:"relative",display:"inline-flex",children:[Object(j.jsx)(k.a,{variant:"determinate",value:f}),Object(j.jsx)(A.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(j.jsx)(l.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(f),"%")})})]})]})},z=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",textAlign:"left"},typography:{fontSize:"18px"},radio:{fontSize:"15px",color:"black"}}})),I=function(e){var t=a.a.useState(""),n=Object(o.a)(t,2),i=n[0],r=n[1],s=z(),u=e.title,b=(e.id,e.answers),d=e.ans,f=e.index,p=(e.values,e.returnAnswer);return Object(c.useEffect)((function(){if(d){var e=Object.values(d)[0].split("_")[1]-1;r(b[e])}}),[d]),Object(j.jsxs)("div",{className:s.formControl,children:[Object(j.jsx)(l.a,{className:s.typography,variant:"h6",component:"p",children:u}),Object(j.jsx)("div",{style:{paddingTop:15},children:Object(j.jsx)(O.a,{error:!0,style:{margin:0,padding:0},const:"fieldset",children:Object(j.jsx)(g.a,{"aria-label":u,name:u,value:i,onChange:function(e){r(e.target.value),p("answ_"+(1+b.indexOf(e.target.value)),f)},children:b.map((function(e,t){return Object(j.jsx)(y.a,{value:e,control:Object(j.jsx)(S.a,{}),label:Object(j.jsx)(l.a,{variant:"body2",component:"p",className:s.radio,color:"textSecondary",children:e})},t)}))})})})]})},B=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",textAlign:"left"},typography:{fontSize:"18px"},radio:{fontSize:"15px",color:"black"}}})),q=function(e){var t=a.a.useState(""),n=Object(o.a)(t,2),i=n[0],r=n[1],s=a.a.useState(null),l=Object(o.a)(s,2),u=l[0],b=l[1],f=B(),p=e.title,O=(e.id,e.answers),x=e.ans,h=e.index,v=(e.values,e.returnAnswer);return Object(c.useEffect)((function(){if(x){var e=Object.values(x)[0].split("_")[1]-1;r(O[e])}}),[x]),Object(c.useEffect)((function(){v("answ_1"==i?i:void 0,h)}),[i]),Object(c.useEffect)((function(){v(i+"=="+u,h),i+"=="+u=="answ_2=="&&v(void 0,h)}),[u]),Object(j.jsxs)("div",{className:f.formControl,children:[Object(j.jsx)(I,{title:p,answers:O,returnAnswer:function(e){r(e)},id:h,index:h,values:O},h),"answ_2"===i&&Object(j.jsx)(d,{returnAnswer:function(e){b(e)},index:h,title:"\u041f\u043e\u0434 \u043a\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0432\u044b \u0432\u044b\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0435\u0441\u044c"})]})},F=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),l=s[0],u=s[1],b=e.returnFields;Object(c.useEffect)((function(){v.firestore().collection("fields").doc("applicant").onSnapshot((function(e){i(e.data().questions)}))}),[]),Object(c.useEffect)((function(){console.log(l)}),[l]);var p=function(e,t){var n=Object(f.a)(l);n[t]=e,u(n),b(n)};return Object(j.jsx)("div",{children:a.map((function(e,t){return"text"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(d,{returnAnswer:p,index:t,title:e.title})}):"photo"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(_,{returnAnswer:p,index:t,title:e.title})}):"select_with_future"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(C,{answers:e.answers,title:e.title,index:t,returnAnswer:p})}):"radio"==e.type?Object(j.jsx)(q,{title:e.title,answers:e.answers,returnAnswer:p,id:t,index:t,values:e.answers},t):void 0}))})},P=n(64),D=Object(s.a)((function(e){return{typography:{fontSize:"24px",margin:"0 auto",marginTop:"10px",width:"70%"}}}));function U(e){var t=e.text,n=D();return Object(j.jsx)("div",{className:n.typography,children:Object(j.jsx)(l.a,{color:"secondary",variant:"caption",component:"p",children:t})})}var G=n(154),L=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",width:"70%"},typography:{fontSize:"24px"},pagination:{padding:0,margin:"30px 0"}}})),R=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),l=s[0],u=s[1],b=Object(c.useState)({}),d=Object(o.a)(b,2),p=d[0],O=d[1],x=Object(c.useState)(),h=Object(o.a)(x,2),m=(h[0],h[1]),g=Object(c.useState)(0),y=Object(o.a)(g,2),S=y[0],w=y[1],C=Object(c.useState)([]),k=Object(o.a)(C,2),A=k[0],T=k[1],N=Object(c.useState)(null),_=Object(o.a)(N,2),z=_[0],B=_[1],q=Object(c.useState)(null),F=Object(o.a)(q,2),D=(F[0],F[1],Object(c.useState)(0)),R=Object(o.a)(D,2),V=R[0],M=R[1],W=Object(c.useState)(30),J=Object(o.a)(W,2),K=J[0],H=(J[1],Object(c.useState)([])),Z=Object(o.a)(H,2),Q=(Z[0],Z[1],L()),X=(e.persons,e.returnAxisesAverage);Object(c.useEffect)((function(){var e=v.firestore();e.collection("questions").doc("all_questions").onSnapshot((function(e){i(e.data().questions)})),e.collection("questions").doc("axises").onSnapshot((function(e){O(e.data().axises),m(Object.keys(e.data().axises).forEach((function(t){return e.data().axises[t]=0})))}))}),[]);var Y=function(){return l.map((function(e,t){return e&&Object.keys(e)[0]})).filter(Boolean).map((function(e){return parseInt(e)}))};Object(c.useEffect)((function(){var e=Y();w(100*e.length/a.length);var t=a.map((function(e,t){return t}));if(t=(t=t.map((function(t){return e.includes(t)&&t}))).slice(V,V+K),T(t),e.length==a.length&0!=a){var n=l.map((function(e,t){return a[t].values[e[t]]})),c=Object.keys(p),i={};c.forEach((function(e){return i[e]=0}));var r={};c.forEach((function(e){return r[e]=0})),n.map((function(e,t){Object.keys(e).forEach((function(t){i[t]+=e[t],r[t]+=1}))}));var o={};Object.keys(i).map((function(e,t){o[e]=i[e]?i[e]/r[e]:0})),m(o),X(o)}}),[l]);var $=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},ee=function(e,t){var n=Object(f.a)(l);n[t]=Object(P.a)({},t,e),u(n),console.log(n)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(G.a,{style:{position:"sticky",top:0},variant:"determinate",value:S||0}),Object(j.jsx)("div",{style:{textAlign:"left"},children:a.slice(V,V+K).map((function(e,t){return Object(j.jsxs)("div",{id:"question"+(t+V),children:[Object(j.jsx)(I,{title:e.title,answers:e.answers.he,returnAnswer:ee,id:t,ans:l[V+t],index:t+V,values:e.values},t+V),!A.includes(t+V)&&z&&Object(j.jsx)(U,{text:"\u041e\u0422\u0412\u0415\u0422\u042c\u0422\u0415 \u041f\u041b\u0418\u0418\u0418\u0417"})]})}))}),Object(j.jsxs)("div",{className:Q.pagination,children:[V+K>K?Object(j.jsx)(E.a,{variant:"contained",color:"secondary",onClick:function(){return M(V-K),void $()},children:"Previous"}):Object(j.jsx)("div",{}),Object(j.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=Y(),t=a.map((function(e,t){return t}));if(t=(t=t.map((function(t){return e.includes(t)&&t}))).slice(V,V+K),T(t),B(!0),-1!=t.indexOf(!1)){var n=document.getElementById("question".concat(t.indexOf(!1)+V));n&&n.scrollIntoView({behavior:"smooth",block:"start"})}else M(V+K),B(null),$()}()},children:"Next"})]})]})},V=Object(c.createContext)(),M=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){v.auth().onAuthStateChanged(r)}),[]),Object(j.jsx)(V.Provider,{value:{currentUser:i},children:t})},W=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),r=Object(o.a)(i,2),s=r[0],l=r[1],u=Object(c.useState)(null),b=Object(o.a)(u,2),d=b[0],f=b[1],p=Object(c.useState)(null),O=Object(o.a)(p,2),x=O[0],h=O[1],m=Object(c.useState)(null),g=Object(o.a)(m,2),y=(g[0],g[1],Object(c.useState)("start")),S=Object(o.a)(y,2),w=S[0],C=S[1],k=Object(c.useContext)(V).currentUser;Object(c.useEffect)((function(){v.firestore().collection("fields").doc("applicant").onSnapshot((function(e){f(e.data().questions)}))}),[]),Object(c.useEffect)((function(){if(s){var e=n[0],t=n[1],c=k.phoneNumber,a=n[2].split("=>")[0],i=n[2].split("=>")[1],r=n[3],o="answ_1"==n[4],l=!!n[4].split("==")[1]&&n[4].split("==")[1],u={name:e,lastName:t,number:c,region:a,party:i,photoUrl:r,axises:s,centralized:o,applicants_num:l};v.firestore().collection("applicants").doc(k.uid).set(u),C("final")}}),[s]);return Object(j.jsx)("div",{className:"App",children:"start"==w?Object(j.jsxs)("div",{children:[x&&Object(j.jsx)(U,{text:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"}),Object(j.jsx)(F,{returnFields:function(e){a(e)}}),Object(j.jsx)(E.a,{style:{marginTop:20},onClick:function(){return function(){var e=n.filter(Boolean);-1===(e=e.map((function(e){return e.length>=2}))).indexOf(!1)&&e.length==d.length&&e.length>0?C("questions"):h(!0)}()},color:"secondary",variant:"contained",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c"}),Object(j.jsx)(E.a,{style:{margin:"20px 0 0 20px"},color:"primary",variant:"contained",onClick:function(){return v.auth().signOut()},children:"\u0412\u044b\u0439\u0442\u0438"})]}):"questions"==w?Object(j.jsx)(R,{returnAxisesAverage:function(e){l(e)},persons:"applicants"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"\u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0442\u043e \u0447\u0442\u043e \u043f\u0440\u043e\u0448\u043b\u0438 \u043d\u0430\u0448 \u0442\u0435\u0441\u0442"}),Object(j.jsx)("img",{src:"https://st.depositphotos.com/1724162/4091/i/600/depositphotos_40912841-stock-photo-cats-eyes.jpg",alt:"kitty"})]})})},J=n(14),K=Object(s.a)((function(e){return{container:{paddingTop:20,paddingBottom:15},typography:{fontSize:"18px"}}})),H=function(e){var t=e.text,n=K();return Object(j.jsx)("div",{className:n.container,children:Object(j.jsx)(l.a,{className:n.typography,variant:"h6",component:"p",children:t})})},Z=Object(J.f)((function(e){e.history;var t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(null),s=Object(o.a)(r,2),l=s[0],u=s[1],b=Object(c.useState)(null),f=Object(o.a)(b,2),p=f[0],O=f[1],x=Object(c.useState)([]),h=Object(o.a)(x,2),m=h[0],g=h[1],y=Object(c.useContext)(V).currentUser;if(Object(c.useEffect)((function(){v.firestore().collection("texts").doc("login").onSnapshot((function(e){g(e.data().texts)}))}),[]),y)return Object(j.jsx)(J.a,{to:"/applicants"});var S=function(){window.recaptchaVerifier=new v.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(e){w()}})},w=function(){S();var e=a,t=window.recaptchaVerifier;v.auth().signInWithPhoneNumber(e,t).then((function(e){window.confirmationResult=e,O(!0)})).catch((function(e){console.log(e)}))};return Object(j.jsxs)("div",{style:{marginTop:50},children:[Object(j.jsx)("div",{id:"recaptcha-container"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://kloop.kg/wp-content/uploads/2020/10/rZkloop-political-compass.jpg",style:{width:"30%"},alt:""}),m.map((function(e,t){return Object(j.jsx)(H,{text:e})})),Object(j.jsx)(d,{index:0,disabled:p,response:a,returnAnswer:function(e){i(e)},label:"+996555333222",title:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440"}),!p&&Object(j.jsx)(E.a,{style:{marginTop:15},variant:"contained",color:"primary",onClick:function(){return w()},children:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]}),p&&Object(j.jsxs)("div",{style:{marginTop:20},children:[Object(j.jsx)(d,{index:1,response:0,label:"\u041a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441",returnAnswer:function(e){u(e)},title:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441"}),Object(j.jsx)(E.a,{style:{marginTop:15},variant:"contained",color:"secondary",onClick:function(){return function(e){var t=l;window.confirmationResult.confirm(t).then((function(e){e.user})).catch((function(e){console.log(e),alert("Incorrect OTP")}))}()},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})})),Q=n(77),X=n(67),Y=n(86),$=function(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=Object(c.useContext)(V).currentUser;return Object(j.jsx)(J.b,Object(X.a)(Object(X.a)({},n),{},{render:function(e){return a?Object(j.jsx)(t,Object(X.a)({},e)):Object(j.jsx)(J.a,{to:"/login"})}}))},ee=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(Q.a,{children:Object(j.jsx)(M,{children:Object(j.jsxs)(Q.a,{children:[Object(j.jsx)($,{exact:!0,path:"/applicants",component:W}),Object(j.jsx)(J.b,{exact:!0,path:"/login",component:Z})]})})})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ee,{})}),document.getElementById("root")),te()}},[[114,1,2]]]);
//# sourceMappingURL=main.126b4a37.chunk.js.map