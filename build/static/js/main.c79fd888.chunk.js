(this["webpackJsonpgmail-clone-personal-project"]=this["webpackJsonpgmail-clone-personal-project"]||[]).push([[0],{113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(32),i=c.n(a),j=(c(113),c(114),c(115),c(69)),l=c.n(j),r=c(149),o=c(152),d=c(70),b=c.n(d),O=c(52),m=c.n(O),u=c(71),x=c.n(u),h=c(72),p=c.n(h),f=c(15),v=c(40),_=Object(v.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),g=_.actions,N=g.login,I=g.logout,M=function(e){return e.user.user},y=_.reducer,S=c(47),w=S.a.initializeApp({apiKey:"AIzaSyCGLJ-QI21XVqmha-_ld-FziyDZ_LRXk6Q",authDomain:"clone-personal-project-4d9af.firebaseapp.com",projectId:"clone-personal-project-4d9af",storageBucket:"clone-personal-project-4d9af.appspot.com",messagingSenderId:"515689684792",appId:"1:515689684792:web:d823c2739b90af68242bcd",measurementId:"G-R853TZHH28"}).firestore(),k=S.a.auth(),L=new S.a.auth.GoogleAuthProvider,R=c(3);var C=function(){var e=Object(f.c)(M),t=Object(f.b)();return Object(R.jsxs)("div",{className:"header",children:[Object(R.jsxs)("div",{className:"header__left",children:[Object(R.jsx)(r.a,{children:Object(R.jsx)(l.a,{})}),Object(R.jsx)("img",{src:"https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png",alt:""})]}),Object(R.jsxs)("div",{className:"header__middle",children:[Object(R.jsx)(b.a,{}),Object(R.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(R.jsx)(m.a,{className:"header__inputCaret"})]}),Object(R.jsxs)("div",{className:"header__right",children:[Object(R.jsx)(r.a,{children:Object(R.jsx)(x.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(p.a,{})}),Object(R.jsx)(o.a,{onClick:function(){k.signOut().then((function(){t(I())}))},src:null===e||void 0===e?void 0:e.photoUrl})]})]})},q=c(26),z=c(150),B=(c(123),c(73)),A=c.n(B),D=c(53),E=c.n(D);c(124);var U=function(e){var t=e.Icon,c=e.title,s=e.number,n=e.selected;return Object(R.jsxs)("div",{className:"sidebarOption ".concat(n&&"sidebarOption--active"),children:[Object(R.jsx)(t,{}),Object(R.jsx)("h3",{children:c}),Object(R.jsx)("p",{children:s})]})},P=c(74),Y=c.n(P),G=c(75),H=c.n(G),J=c(46),W=c.n(J),Q=c(76),T=c.n(Q),X=c(77),Z=c.n(X),F=c(78),K=c.n(F),V=c(79),$=c.n(V),ee=c(80),te=c.n(ee),ce=c(81),se=c.n(ce),ne=Object(v.b)({name:"mail",initialState:{selectedMail:null,sendMessageIsOpen:!1},reducers:{selectMail:function(e,t){e.selectedMail=t.payload},openSendMessage:function(e){e.sendMessageIsOpen=!0},closeSendMessage:function(e){e.sendMessageIsOpen=!1}}}),ae=ne.actions,ie=ae.selectMail,je=ae.openSendMessage,le=ae.closeSendMessage,re=function(e){return e.mail.selectedMail},oe=function(e){return e.mail.sendMessageIsOpen},de=ne.reducer;var be=function(){var e=Object(f.b)(),t=(Object(f.c)(re),Object(s.useState)([])),c=Object(q.a)(t,2),n=c[0],a=c[1];return Object(s.useEffect)((function(){w.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(R.jsxs)("div",{className:"sidebar",children:[Object(R.jsx)(z.a,{className:"sidebar__compose",startIcon:Object(R.jsx)(A.a,{fontSize:"large"}),onClick:function(){return e(je())},children:"Compose"}),Object(R.jsx)(U,{Icon:E.a,title:"Inbox",number:n.length,selected:!0}),Object(R.jsx)(U,{Icon:Y.a,title:"Starred",number:n.length}),Object(R.jsx)(U,{Icon:H.a,title:"Snoozed",number:n.length}),Object(R.jsx)(U,{Icon:W.a,title:"Important",number:n.length}),Object(R.jsx)(U,{Icon:T.a,title:"Sent",number:n.length}),Object(R.jsx)(U,{Icon:Z.a,title:"Drafts",number:n.length}),Object(R.jsx)(U,{Icon:K.a,title:"More",number:n.length}),Object(R.jsx)("div",{className:"sidebar__footer",children:Object(R.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(R.jsx)(r.a,{children:Object(R.jsx)($.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(te.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(se.a,{})})]})})]})},Oe=c(57),me=c(13),ue=(c(125),c(82)),xe=c.n(ue),he=c(83),pe=c.n(he),fe=c(84),ve=c.n(fe),_e=c(85),ge=c.n(_e),Ne=c(86),Ie=c.n(Ne),Me=c(87),ye=c.n(Me),Se=c(88),we=c.n(Se),ke=c(54),Le=c.n(ke),Re=c(89),Ce=c.n(Re),qe=c(90),ze=c.n(qe),Be=c(91),Ae=c.n(Be);var De=function(){var e=Object(me.f)(),t=Object(f.c)(re);return Object(R.jsxs)("div",{className:"mail",children:[Object(R.jsxs)("div",{className:"mail__tools",children:[Object(R.jsxs)("div",{className:"mail__toolsLeft",children:[Object(R.jsx)(r.a,{onClick:function(){return e.push("/")},children:Object(R.jsx)(xe.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(pe.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(ve.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(ge.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Ie.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(ye.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(we.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(W.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Le.a,{})})]}),Object(R.jsxs)("div",{className:"mail__toolsRight",children:[Object(R.jsx)(r.a,{children:Object(R.jsx)(Ce.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(ze.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Ae.a,{})})]})]}),Object(R.jsxs)("div",{className:"mail__body",children:[Object(R.jsxs)("div",{className:"mail__bodyHeader",children:[Object(R.jsx)("h2",{children:null===t||void 0===t?void 0:t.subject}),Object(R.jsx)(W.a,{className:"mail__important"}),Object(R.jsx)("p",{children:null===t||void 0===t?void 0:t.title}),Object(R.jsx)("p",{className:"mail__time",children:null===t||void 0===t?void 0:t.time})]}),Object(R.jsx)("div",{className:"mail__message",children:Object(R.jsx)("p",{children:null===t||void 0===t?void 0:t.description})})]})]})},Ee=c(151),Ue=(c(127),c(95)),Pe=c.n(Ue),Ye=c(96),Ge=c.n(Ye),He=c(97),Je=c.n(He),We=c(98),Qe=c.n(We),Te=c(99),Xe=c.n(Te);c(128);var Ze=function(e){var t=e.Icon,c=e.title,s=e.color,n=e.selected;return Object(R.jsxs)("div",{className:"section ".concat(n&&"section--selected"),style:{borderBottom:"3px solid ".concat(s),color:"".concat(n&&s)},children:[Object(R.jsx)(t,{}),Object(R.jsx)("h4",{children:c})]})},Fe=c(100),Ke=c.n(Fe),Ve=c(101),$e=c.n(Ve),et=(c(129),c(92)),tt=c.n(et),ct=c(93),st=c.n(ct),nt=c(94),at=c.n(nt);var it=function(e){var t=e.id,c=e.title,s=e.subject,n=e.description,a=e.time,i=Object(me.f)(),j=Object(f.b)();return Object(R.jsxs)("div",{onClick:function(){j(ie({id:t,title:c,subject:s,description:n,time:a})),i.push("/mail")},className:"emailRow",children:[Object(R.jsxs)("div",{className:"emailRow__options",children:[Object(R.jsx)(tt.a,{}),Object(R.jsx)(r.a,{children:Object(R.jsx)(st.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(at.a,{})})]}),Object(R.jsx)("h3",{className:"emailRow__title",children:c}),Object(R.jsx)("div",{className:"emailRow__message",children:Object(R.jsxs)("h4",{children:[s,Object(R.jsxs)("span",{className:"emailRow__description",children:[" "," - ",n]})]})}),Object(R.jsx)("div",{className:"emailRow__time",children:a})]})};var jt=function(){var e=Object(s.useState)([]),t=Object(q.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){w.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(R.jsxs)("div",{className:"emailList",children:[Object(R.jsxs)("div",{className:"emailList__settings",children:[Object(R.jsxs)("div",{className:"emailList__settingsLeft",children:[Object(R.jsx)(Ee.a,{}),Object(R.jsx)(r.a,{children:Object(R.jsx)(m.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Pe.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Le.a,{})})]}),Object(R.jsxs)("div",{className:"emailList__settingsRight",children:[Object(R.jsx)(r.a,{children:Object(R.jsx)(Ge.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Je.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Qe.a,{})}),Object(R.jsx)(r.a,{children:Object(R.jsx)(Xe.a,{})})]})]}),Object(R.jsxs)("div",{className:"emailList__sections",children:[Object(R.jsx)(Ze,{Icon:E.a,title:"Primary",color:"red",selected:!0}),Object(R.jsx)(Ze,{Icon:Ke.a,title:"Social",color:"#1A73E8"}),Object(R.jsx)(Ze,{Icon:$e.a,title:"Promotions",color:"green"})]}),Object(R.jsx)("div",{className:"emailList__list",children:c.map((function(e){var t=e.id,c=e.data,s=c.to,n=c.subject,a=c.message,i=c.timestamp;return Object(R.jsx)(it,{id:t,title:s,subject:n,description:a,time:i},t)}))})]})},lt=c(36),rt=(c(130),c(103)),ot=c.n(rt),dt=c(104),bt=c(102),Ot=c.n(bt);var mt=function(){var e=Object(dt.a)(),t=e.register,c=e.handleSubmit,s=(e.watch,e.errors,Object(f.b)());return Object(R.jsxs)("div",{className:"sendMail",children:[Object(R.jsxs)("div",{className:"sendMail__header",children:[Object(R.jsx)("h3",{children:"New Message"}),Object(R.jsx)(ot.a,{onClick:function(){return s(le())},className:"sendMail__close"})]}),Object(R.jsxs)("form",{onSubmit:c((function(e){console.log(e),w.collection("emails").add({to:e.to,subject:e.subject,message:e.message,timestamp:Ot()(new Date).format("MMMM Do YYYY, h:mm:ss a")}),s(le())})),children:[Object(R.jsx)("input",Object(lt.a)(Object(lt.a)({name:"to",placeholder:"To",type:"email"},t("to",{required:!0})),{},{required:!0})),Object(R.jsx)("input",Object(lt.a)(Object(lt.a)({name:"subject",placeholder:"Subject",type:"text"},t("subject",{required:!0})),{},{required:!0})),Object(R.jsx)("input",Object(lt.a)(Object(lt.a)({name:"message",placeholder:"Message...",type:"text",className:"sendMail__message"},t("message",{required:!0})),{},{required:!0})),Object(R.jsx)("div",{className:"sendMail__options",children:Object(R.jsx)(z.a,{className:"sendMail__send",variant:"contained",color:"primary",type:"submit",children:"Send"})})]})]})};c(133);var ut=function(){var e=Object(f.b)();return Object(R.jsx)("div",{className:"login",children:Object(R.jsxs)("div",{className:"login__container",children:[Object(R.jsx)("img",{src:"https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg",alt:""}),Object(R.jsx)(z.a,{variant:"contained",color:"primary",onClick:function(){k.signInWithPopup(L).then((function(t){var c=t.user;e(N({displayName:c.displayName,email:c.email,photoUrl:c.photoURL}))})).catch((function(e){return alert(e.message)}))},children:"Login"})]})})};var xt=function(){var e=Object(f.c)(oe),t=Object(f.c)(M),c=Object(f.b)();return Object(s.useEffect)((function(){k.onAuthStateChanged((function(e){e&&c(N({displayName:e.displayName,email:e.email,photoUrl:e.photoURL}))}))}),[]),Object(R.jsx)(Oe.a,{children:t?Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(C,{}),Object(R.jsxs)("div",{className:"app__body",children:[Object(R.jsx)(be,{}),Object(R.jsxs)(me.c,{children:[Object(R.jsx)(me.a,{path:"/mail",children:Object(R.jsx)(De,{})}),Object(R.jsx)(me.a,{path:"/",children:Object(R.jsx)(jt,{})})]})]}),e&&Object(R.jsx)(mt,{})]}):Object(R.jsx)(ut,{})})},ht=Object(v.a)({reducer:{mail:de,user:y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(f.a,{store:ht,children:Object(R.jsx)(xt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[134,1,2]]]);
//# sourceMappingURL=main.c79fd888.chunk.js.map