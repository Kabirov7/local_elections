(this.webpackJsonplocal_elections=this.webpackJsonplocal_elections||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),i=n.n(r),o=(n(107),n(108),n(10)),s=n(152),l=n(119),u=n(173),j=n(4),b=Object(s.a)((function(e){return{fromControl:{width:"70%"},typography:{fontSize:"19px"}}})),d=function(e){var t=b(),n=c.a.useState(""),r=Object(o.a)(n,2),i=r[0],s=r[1],d=e.index,O=e.response,p=e.returnAnswer,f=e.label,h=e.disabled,x=e.title;Object(a.useEffect)((function(){O&&s(O)}),[O]);return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(j.jsx)(l.a,{classes:t.typography,variant:"h6",component:"h6",children:x}),Object(j.jsx)(u.a,{disabled:h&&!0,id:"textField",value:i,label:f&&f,onChange:function(e){s(e.target.value),p(e.target.value,d)}})]})})},O=n(67),p=n(176),f=n(157),h=n(170);Object(s.a)((function(e){return{formControl:{minWidth:"30%",maxWidth:300},typography:{fontSize:"24px"}}}));var x=n(57);x.a.initializeApp({apiKey:"AIzaSyD29vr6hDlRBNnNTTMG_EDGqTW6J0PuGa4",authDomain:"local-elections-210f5.firebaseapp.com",projectId:"local-elections-210f5",storageBucket:"local-elections-210f5.appspot.com",messagingSenderId:"666238817996",appId:"1:666238817996:web:57fd88586b301e8fe15469",measurementId:"G-EK2H89C8LB"});new x.a.auth.GoogleAuthProvider;var g=x.a,m=n(155),v=n(174),y=n(159),S=n(172),w=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),width:"70%"},typography:{fontSize:"19px"},radio:{fontSize:"15px",color:"black"}}}));var k=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),b=u[0],d=u[1],O=Object(a.useState)([]),x=Object(o.a)(O,2),g=x[0],k=x[1],C=w(),A=c.a.useState(!1),E=Object(o.a)(A,2),_=E[0],N=E[1],T=e.title,z=e.answers,I=e.returnAnswer,q=e.index;return Object(a.useEffect)((function(){var e=z.map((function(e,t){return e.answers})),t=z.map((function(e,t){return e.title==r})).indexOf(!0);k(e[t]),d("")}),[r]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{classes:C.typography,variant:"h6",component:"h6",children:T}),Object(j.jsx)(f.a,{className:C.formControl,children:Object(j.jsx)(h.a,{open:_,value:r,onChange:function(e){i(e.target.value),I(void 0,q)},onClose:function(){N(!1)},onOpen:function(){N(!0)},input:Object(j.jsx)(m.a,{id:"grouped-select"}),children:z.map((function(e,t){return Object(j.jsx)(p.a,{value:e.title,children:e.title})}))})}),g&&Object(j.jsx)("div",{style:{paddingTop:15},children:Object(j.jsx)(f.a,{error:!0,style:{margin:0,padding:0},const:"fieldset",children:Object(j.jsx)(v.a,{value:b,onChange:function(e){d(e.target.value);var t=r+"=>"+e.target.value;I(t,q)},children:g.map((function(e,t){return Object(j.jsx)(y.a,{value:e,control:Object(j.jsx)(S.a,{}),label:Object(j.jsx)(l.a,{variant:"body2",component:"p",className:C.radio,color:"textSecondary",children:e})},t)}))})})})]})})},C=n(162),A=n(171),E=n(161),_=n(160),N=Object(s.a)((function(e){return{typography:{fontSize:"24px"}}})),T=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(null),i=Object(o.a)(r,2),s=i[0],u=i[1],b=Object(a.useState)(null),d=Object(o.a)(b,2),O=d[0],p=d[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2),x=h[0],m=h[1],v=N(),S=e.title,w=e.index,k=e.returnAnswer,T=e.lang;Object(a.useEffect)((function(){k(!!x&&"abondon",w)}),[x]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{classes:v.typography,variant:"h6",component:"h6",children:S}),!s&&Object(j.jsx)(y.a,{control:Object(j.jsx)(_.a,{checked:x,onChange:function(e){m(!x)},name:"checkedB",color:"primary"}),label:"ru"==T?"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f":"\u0411\u0430\u0448 \u0442\u0430\u0440\u0443\u0443"}),Object(j.jsx)("br",{}),!x&&Object(j.jsxs)(E.a,{style:{marginBottom:15},color:"primary",variant:"contained",component:"label",children:["Upload File",Object(j.jsx)("input",{type:"file",onChange:function(e){if(e.target.files[0]){c(e.target.files[0]);var t=e.target.files[0],n=t.lastModified+t.name+"___"+new Date;g.storage().ref("images/".concat(n)).put(e.target.files[0]).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;p(t)}),(function(e){console.log(e)}),(function(){g.storage().ref("images").child(n).getDownloadURL().then((function(e){console.log(e),k(e,w),u(e)}))}))}},hidden:!0})]}),Object(j.jsx)("br",{}),!x&&O&&Object(j.jsxs)(A.a,{className:v.uploadLine,position:"relative",display:"inline-flex",children:[Object(j.jsx)(C.a,{variant:"determinate",value:O}),Object(j.jsx)(A.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(j.jsx)(l.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(O),"%")})})]})]})},z=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",textAlign:"left"},typography:{fontSize:"18px"},radio:{fontSize:"15px",color:"black"}}})),I=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),r=n[0],i=n[1],s=z(),u=e.title,b=(e.id,e.answers),d=e.ans,O=e.index,p=(e.values,e.returnAnswer);return Object(a.useEffect)((function(){if(d){var e=Object.values(d)[0].split("_")[1]-1;i(b[e])}}),[d]),Object(j.jsxs)("div",{className:s.formControl,children:[Object(j.jsx)(l.a,{className:s.typography,variant:"h6",component:"p",children:u}),Object(j.jsx)("div",{style:{paddingTop:15},children:Object(j.jsx)(f.a,{error:!0,style:{margin:0,padding:0},const:"fieldset",children:Object(j.jsx)(v.a,{"aria-label":u,name:u,value:r,onChange:function(e){i(e.target.value),p("answ_"+(1+b.indexOf(e.target.value)),O)},children:b.map((function(e,t){return Object(j.jsx)(y.a,{value:e,control:Object(j.jsx)(S.a,{}),label:Object(j.jsx)(l.a,{variant:"body2",component:"p",className:s.radio,color:"textSecondary",children:e})},t)}))})})})]})},q=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",textAlign:"left"},typography:{fontSize:"18px"},radio:{fontSize:"15px",color:"black"}}})),B=function(e){var t=c.a.useState(""),n=Object(o.a)(t,2),r=n[0],i=n[1],s=c.a.useState(null),l=Object(o.a)(s,2),u=l[0],b=l[1],O=q(),p=e.title,f=e.lang,h=(e.id,e.answers),x=e.ans,g=e.index,m=(e.values,e.returnAnswer);return Object(a.useEffect)((function(){if(x){var e=Object.values(x)[0].split("_")[1]-1;i(h[e])}}),[x]),Object(a.useEffect)((function(){m("answ_1"==r?r:void 0,g)}),[r]),Object(a.useEffect)((function(){m(r+"=="+u,g),r+"=="+u=="answ_2=="&&m(void 0,g)}),[u]),Object(j.jsxs)("div",{className:O.formControl,children:[Object(j.jsx)(I,{title:p,answers:h,returnAnswer:function(e){i(e)},id:g,index:g,values:h},g),"answ_2"===r&&Object(j.jsx)(d,{returnAnswer:function(e){b(e)},index:g,title:"ru"==f?"\u041f\u043e\u0434 \u043a\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0432\u044b \u0432\u044b\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0435\u0441\u044c":"\u0421\u0438\u0437 \u043a\u0430\u0439\u0441\u044b \u043d\u043e\u043c\u0435\u0440\u0433\u0435 \u043a\u04e9\u0440\u0441\u04e9\u0442\u04af\u043b\u0433\u04e9\u043d\u0441\u04af\u0437"})]})},F=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],b=e.returnFields,p=e.lang;Object(a.useEffect)((function(){var e=g.firestore(),t="kg"==p?"applicant_kg":"applicant";e.collection("fields").doc(t).onSnapshot((function(e){r(e.data().questions)}))}),[]);var f=function(e,t){var n=Object(O.a)(l);n[t]=e,u(n),b(n)};return Object(j.jsx)("div",{children:c.map((function(e,t){return"text"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(d,{returnAnswer:f,index:t,title:e.title})}):"photo"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(T,{lang:p,returnAnswer:f,index:t,title:e.title})}):"select_with_future"==e.type?Object(j.jsx)("div",{style:{marginTop:30},children:Object(j.jsx)(k,{answers:e.answers,title:e.title,index:t,returnAnswer:f})}):"radio"==e.type?Object(j.jsx)(B,{title:e.title,answers:e.answers,returnAnswer:f,id:t,index:t,values:e.answers},t):void 0}))})},P=n(65),D=Object(s.a)((function(e){return{typography:{fontSize:"24px",margin:"0 auto",marginTop:"10px",width:"70%"}}}));function U(e){var t=e.text,n=D();return Object(j.jsx)("div",{className:n.typography,children:Object(j.jsx)(l.a,{color:"secondary",variant:"caption",component:"p",children:t})})}var G=n(163),L=Object(s.a)((function(e){return{formControl:{marginTop:"30px",margin:"0 auto",width:"70%"},typography:{fontSize:"24px"},pagination:{padding:0,margin:"30px 0"}}})),R=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)({}),d=Object(o.a)(b,2),p=d[0],f=d[1],h=Object(a.useState)(),x=Object(o.a)(h,2),m=(x[0],x[1]),v=Object(a.useState)(0),y=Object(o.a)(v,2),S=y[0],w=y[1],k=Object(a.useState)([]),C=Object(o.a)(k,2),A=C[0],_=C[1],N=Object(a.useState)(null),T=Object(o.a)(N,2),z=T[0],q=T[1],B=Object(a.useState)(null),F=Object(o.a)(B,2),D=(F[0],F[1],Object(a.useState)(0)),R=Object(o.a)(D,2),V=R[0],W=R[1],M=Object(a.useState)(30),J=Object(o.a)(M,2),K=J[0],H=(J[1],Object(a.useState)([])),Y=Object(o.a)(H,2),Z=(Y[0],Y[1],L()),Q=(e.persons,e.lang),X=e.returnAxisesAverage;Object(a.useEffect)((function(){var e=g.firestore(),t="ru"==Q?"all_questions":"all_questions_kg";e.collection("questions").doc(t).onSnapshot((function(e){r(e.data().questions)}));var n="ru"==Q?"axises":"axises_kg";e.collection("questions").doc(n).onSnapshot((function(e){f(e.data().axises),m(Object.keys(e.data().axises).forEach((function(t){return e.data().axises[t]=0})))}))}),[]);var $=function(){return l.map((function(e,t){return e&&Object.keys(e)[0]})).filter(Boolean).map((function(e){return parseInt(e)}))};Object(a.useEffect)((function(){var e=$();w(100*e.length/c.length);var t=c.map((function(e,t){return t}));if(t=(t=t.map((function(t){return e.includes(t)&&t}))).slice(V,V+K),_(t),e.length==c.length&0!=c){var n=l.map((function(e,t){return c[t].values[e[t]]})),a=Object.keys(p),r={};a.forEach((function(e){return r[e]=0}));var i={};a.forEach((function(e){return i[e]=0})),n.map((function(e,t){Object.keys(e).forEach((function(t){r[t]+=e[t],i[t]+=1}))}));var o={};Object.keys(r).map((function(e,t){o[e]=r[e]?r[e]/i[e]:0})),m(o),X(o)}}),[l]);var ee=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},te=function(e,t){var n=Object(O.a)(l);n[t]=Object(P.a)({},t,e),u(n),console.log(n)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(G.a,{style:{position:"sticky",top:0},variant:"determinate",value:S||0}),Object(j.jsx)("div",{style:{textAlign:"left"},children:c.slice(V,V+K).map((function(e,t){return Object(j.jsxs)("div",{id:"question"+(t+V),children:[Object(j.jsx)(I,{title:e.title,answers:e.answers.he,returnAnswer:te,id:t,ans:l[V+t],index:t+V,values:e.values},t+V),!A.includes(t+V)&&z&&Object(j.jsx)(U,{text:"\u041e\u0422\u0412\u0415\u0422\u042c\u0422\u0415 \u041f\u041b\u0418\u0418\u0418\u0417"})]})}))}),Object(j.jsxs)("div",{className:Z.pagination,children:[V+K>K?Object(j.jsx)(E.a,{variant:"contained",color:"secondary",onClick:function(){return W(V-K),void ee()},children:"Previous"}):Object(j.jsx)("div",{}),Object(j.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=$(),t=c.map((function(e,t){return t}));if(t=(t=t.map((function(t){return e.includes(t)&&t}))).slice(V,V+K),_(t),q(!0),-1!=t.indexOf(!1)){var n=document.getElementById("question".concat(t.indexOf(!1)+V));n&&n.scrollIntoView({behavior:"smooth",block:"start"})}else W(V+K),q(null),ee()}()},children:"Next"})]})]})},V=Object(a.createContext)(),W=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){g.auth().onAuthStateChanged(i)}),[]),Object(j.jsx)(V.Provider,{value:{currentUser:r},children:t})},M=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(null),b=Object(o.a)(u,2),d=b[0],O=b[1],p=Object(a.useState)(null),f=Object(o.a)(p,2),h=f[0],x=f[1],m=Object(a.useState)(null),v=Object(o.a)(m,2),y=v[0],S=v[1],w=Object(a.useState)(null),k=Object(o.a)(w,2),C=(k[0],k[1],Object(a.useState)("start")),A=Object(o.a)(C,2),_=A[0],N=A[1],T=Object(a.useContext)(V).currentUser;Object(a.useEffect)((function(){g.firestore().collection("fields").doc("applicant").onSnapshot((function(e){O(e.data().questions)}))}),[]),Object(a.useEffect)((function(){if(s){var e=n[0],t=n[1],a=T.phoneNumber,c=n[2].split("=>")[0],r=n[2].split("=>")[1],i=n[3],o="answ_1"==n[4],l=!!n[4].split("==")[1]&&n[4].split("==")[1],u={name:e,lastName:t,number:a,region:c,party:r,photoUrl:i,axises:s,centralized:o,applicants_num:l};g.firestore().collection("applicants").doc(T.uid).set(u),N("final")}}),[s]);return Object(j.jsx)("div",{className:"App",children:y?Object(j.jsx)("div",{children:"start"==_?Object(j.jsxs)("div",{children:[h&&Object(j.jsx)(U,{text:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"}),Object(j.jsx)(F,{returnFields:function(e){c(e)},lang:y}),Object(j.jsx)(E.a,{style:{marginTop:20},onClick:function(){return function(){var e=n.filter(Boolean);-1===(e=e.map((function(e){return e.length>=2}))).indexOf(!1)&&e.length==d.length&&e.length>0?N("questions"):x(!0)}()},color:"secondary",variant:"contained",children:"ru"==y?"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c":"\u0421\u0443\u0440\u043e\u043e\u043b\u043e\u0440"}),Object(j.jsx)(E.a,{style:{margin:"20px 0 0 20px"},color:"primary",variant:"contained",onClick:function(){return g.auth().signOut()},children:"ru"==y?"\u0412\u044b\u0439\u0442\u0438":"\u0427\u044b\u0433\u0443\u0443"})]}):"questions"==_?Object(j.jsx)(R,{lang:y,returnAxisesAverage:function(e){l(e)},persons:"applicants"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[" ","ru"==y?"\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.":"\u0420\u0430\u0445\u043c\u0430\u0442"]}),Object(j.jsx)("img",{src:"https://st.depositphotos.com/1724162/4091/i/600/depositphotos_40912841-stock-photo-cats-eyes.jpg",alt:"kitty"})]})}):Object(j.jsx)(I,{title:"\u041a\u0430\u043a\u043e\u0439 \u044f\u0437\u044b\u043a?",answers:["ru","kg"],values:["ru","kg"],returnAnswer:function(e){S(["ru","kg"][e.split("_")[1]-1])}})})},J=n(15),K=Object(s.a)((function(e){return{container:{paddingTop:20,paddingBottom:15},typography:{fontSize:"18px"}}})),H=function(e){var t=e.text,n=K();return Object(j.jsx)("div",{className:n.container,children:Object(j.jsx)(l.a,{className:n.typography,variant:"h6",component:"p",children:t})})},Y=Object(J.f)((function(e){e.history;var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(null),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)(null),O=Object(o.a)(b,2),p=O[0],f=O[1],h=Object(a.useState)([]),x=Object(o.a)(h,2),m=x[0],v=x[1],y=Object(a.useState)(null),S=Object(o.a)(y,2),w=S[0],k=S[1],C=Object(a.useContext)(V).currentUser;if(Object(a.useEffect)((function(){var e=g.firestore(),t="ru"==w?"login":"login_kg";e.collection("texts").doc(t).onSnapshot((function(e){v(e.data().texts)}))}),[w]),C)return Object(j.jsx)(J.a,{to:"/applicants"});var A=function(){window.recaptchaVerifier=new g.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(e){_()}})},_=function(){A();var e=c,t=window.recaptchaVerifier;g.auth().signInWithPhoneNumber(e,t).then((function(e){window.confirmationResult=e,f(!0)})).catch((function(e){console.log(e)}))};return Object(j.jsx)("div",{style:{marginTop:50},children:w?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{id:"recaptcha-container"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://kloop.kg/wp-content/uploads/2020/10/rZkloop-political-compass.jpg",style:{width:"30%"},alt:""}),m.map((function(e,t){return Object(j.jsx)(H,{text:e})})),Object(j.jsx)(d,{index:0,disabled:p,response:c,returnAnswer:function(e){r(e)},label:"+996555333222",title:"ru"==w?"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440":"\u0421\u0438\u0437\u0434\u0438\u043d \u0431\u04e9\u043b\u043c\u04e9\u043d\u04af\u043d \u043d\u043e\u043c\u0435\u0440\u0438"}),!p&&Object(j.jsx)(E.a,{style:{marginTop:15},variant:"contained",color:"primary",onClick:function(){return _()},children:"ru"==w?"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u041a\u0420"})]}),p&&Object(j.jsxs)("div",{style:{marginTop:20},children:[Object(j.jsx)(d,{index:1,response:0,label:"ru"==w?"\u041a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441":"\u043a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441 \u041a\u0420",returnAnswer:function(e){u(e)},title:"ru"==w?"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u0441\u043c\u0441 \u041a\u0420"}),Object(j.jsx)(E.a,{style:{marginTop:15},variant:"contained",color:"secondary",onClick:function(){return function(e){var t=l;window.confirmationResult.confirm(t).then((function(e){e.user})).catch((function(e){console.log(e),alert("Incorrect OTP")}))}()},children:"ru"==w?"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c":"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u041a\u0420"})]})]}):Object(j.jsx)(I,{title:"\u041a\u0430\u043a\u043e\u0439 \u044f\u0437\u044b\u043a?",answers:["ru","kg"],values:["ru","kg"],returnAnswer:function(e){k(["ru","kg"][e.split("_")[1]-1])}})})})),Z=n(165),Q=n(169),X=n(168),$=n(164),ee=n(166),te=n(167),ne=n(158),ae=Object(s.a)({table:{minWidth:650}});function ce(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}ce("Frozen yoghurt",159,6,24,4),ce("Ice cream sandwich",237,9,37,4.3),ce("Eclair",262,16,24,6),ce("Cupcake",305,3.7,67,4.3),ce("Gingerbread",356,16,49,3.9);function re(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=ae();return Object(a.useEffect)((function(){g.firestore().collection("applicants").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)}))}),[]),Object(j.jsx)($.a,{component:ne.a,children:Object(j.jsxs)(Z.a,{className:r.table,size:"small","aria-label":"a dense table",children:[Object(j.jsx)(ee.a,{children:Object(j.jsxs)(te.a,{children:[Object(j.jsx)(X.a,{align:"right",children:"Name"}),Object(j.jsx)(X.a,{align:"right",children:"Party"}),Object(j.jsx)(X.a,{align:"right",children:"Centralized"}),Object(j.jsx)(X.a,{align:"right",children:"Num"})]})}),Object(j.jsx)(Q.a,{children:n.map((function(e){return Object(j.jsxs)(te.a,{children:[Object(j.jsxs)(X.a,{component:"th",scope:"row",children:[e.name," ",e.lastName]}),Object(j.jsx)(X.a,{align:"right",children:e.party}),Object(j.jsx)(X.a,{align:"right",children:e.centralized?"YES":"NO"}),Object(j.jsx)(X.a,{align:"right",children:e.applicants_num})]},e.name+" "+e.lastName)}))})]})})}var ie=n(79),oe=n(69),se=n(88),le=function(e){var t=e.component,n=Object(se.a)(e,["component"]),c=Object(a.useContext)(V).currentUser;return Object(j.jsx)(J.b,Object(oe.a)(Object(oe.a)({},n),{},{render:function(e){return c?Object(j.jsx)(t,Object(oe.a)({},e)):Object(j.jsx)(J.a,{to:"/login"})}}))},ue=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(ie.a,{children:[Object(j.jsx)(W,{children:Object(j.jsxs)(ie.a,{children:[Object(j.jsx)(le,{exact:!0,path:"/applicants",component:M}),Object(j.jsx)(J.b,{exact:!0,path:"/login",component:Y})]})}),Object(j.jsx)(J.b,{exact:!0,path:"/admin",component:re})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(ue,{})}),document.getElementById("root")),je()}},[[117,1,2]]]);
//# sourceMappingURL=main.2844ccc9.chunk.js.map