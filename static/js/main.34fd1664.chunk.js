(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{63:function(e,n,t){"use strict";t.r(n);var c,r,a,i,s,o,l,b,j=t(7),d=t.n(j),u=t(46),O=t.n(u),x=t(0),h=t.n(x),p=t(2),f=t(11),m=t(12),g=t(14),w=t(23),v=t(13),y=function(e){return"".concat(e/16,"rem")},k="#1DA1F2",N="#14171A",S="#657786",F="#F5F8FA",C="#FF0000",A="#ffffff",z=(y(14),y(16),y(18),y(24),y(28),y(30),y(45),y(50),"576px"),I="768px",D="1200px",U=("@media only screen and (max-width: ".concat(z,")"),"@media only screen and (max-width: ".concat(I,")"),"@media only screen and (max-width: ".concat(D,")"),{overflow:"hidden",position:"absolute",clip:"rect(0, 0, 0, 0)",clipPath:"circle(0)",width:"1px",height:" 1px",margin:"-1px",border:"0",padding:"0",whiteSpace:"nowrap"}),E=t(5),T=v.b.form(c||(c=Object(m.a)(["\n  max-width: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ",";\n  margin: 0 ",";\n\n  .a11y-hidden {\n    ","\n  }\n"])),z,y(8),y(60),U),P=v.b.div(r||(r=Object(m.a)(["\n  width: 100%;\n  flex-grow: 1;\n  margin: "," 0;\n"])),y(8)),L=v.b.input(a||(a=Object(m.a)(["\n  width: 100%;\n"]))),_=v.b.input(i||(i=Object(m.a)(["\n  width: 100%;\n  background: ",";\n  color: ",";\n"])),k,A),q=v.b.div(s||(s=Object(m.a)(["\n  word-break: break-all;\n  p {\n    color: ",";\n    white-space: pre-line;\n    width: 100%;\n    font-size: ",";\n  }\n"])),C,y(12)),J=function(e){var n=e.newAccount,t=Object(j.useState)(""),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(j.useState)(""),s=Object(f.a)(i,2),o=s[0],l=s[1],b=Object(j.useState)(""),d=Object(f.a)(b,2),u=d[0],O=d[1],x=function(e){var n=e.target,t=n.name,c=n.value;"email"===t?a(c):"password"===t&&l(c)},m=function(){var e=Object(p.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c=Object(w.d)(),!n){e.next=8;break}return e.next=6,Object(w.c)(c,r,o).then((function(e){var n=e.user,t=e.password;console.log(n,t)}));case 6:e.next=10;break;case 8:return e.next=10,Object(w.e)(c,r,o);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),O(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(T,{onSubmit:m,children:[Object(E.jsxs)(P,{children:[Object(E.jsx)("label",{htmlFor:"Email",className:"a11y-hidden",children:"Email"}),Object(E.jsx)(L,{name:"email",type:"email",placeholder:"Email",required:!0,value:r,onChange:x})]}),Object(E.jsxs)(P,{children:[Object(E.jsx)("label",{htmlFor:"password",className:"a11y-hidden",children:"Password"}),Object(E.jsx)(L,{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:x})]}),Object(E.jsx)(P,{children:Object(E.jsx)(_,{type:"submit",value:n?"Create Account":"Sign In"})})]}),Object(E.jsx)(q,{children:Object(E.jsx)("p",{className:"error",children:u})})]})},B=t(27),G=t(18),H=v.b.p(o||(o=Object(m.a)(["\n  margin: "," 0;\n  color: ",";\n  text-align: center;\n  cursor: pointer;\n"])),y(16),k),Q=v.b.div(l||(l=Object(m.a)(["\n  display: flex;\n  padding: ",";\n  text-align: center;\n  vertical-align: center;\n"])),y(8)),R=v.b.button(b||(b=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  margin: 0 ",";\n  white-space: nowrap;\n  color: ",";\n  background-color: ",";\n  border: transparent;\n  border-radius: ",";\n  justify-content: center;\n  align-items: center;\n\n  .method-icon {\n    margin: ",";\n  }\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),y(8),N,A,y(16),y(4),S,A);var W=function(){var e=Object(j.useState)(!0),n=Object(f.a)(e,2),t=n[0],c=n[1],r=function(){var e=Object(p.a)(h.a.mark((function e(n){var t,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.name,c=Object(w.d)(),"google"===t?r=new w.b:"github"===t&&(r=new w.a),e.next=5,Object(w.f)(c,r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(J,{newAccount:t}),Object(E.jsx)(H,{onClick:function(){c((function(e){return!e}))},children:t?"Sign In":"Create Account"}),Object(E.jsxs)(Q,{children:[Object(E.jsxs)(R,{name:"google",onClick:r,children:["Continue with Google",Object(E.jsx)(G.a,{className:"method-icon",icon:B.b,size:"1x"})]}),Object(E.jsxs)(R,{name:"github",onClick:r,children:["Continue with Github",Object(E.jsx)(G.a,{className:"method-icon",icon:B.a,size:"1x"})]})]})]})},K=t(50),M=t(51),V=t(19),Y=t(31);Object(M.a)({apiKey:"AIzaSyAPzZmk9EJldvtoF3VQNunDb82hh_m7iWQ",authDomain:"twitter-clone-10caf.firebaseapp.com",projectId:"twitter-clone-10caf",storageBucket:"twitter-clone-10caf.appspot.com",messagingSenderId:"746401167684",appId:"1:746401167684:web:78ea40f2dc56535f8bff11"});var Z,X,$,ee,ne,te,ce,re,ae,ie,se,oe,le,be,je,de,ue,Oe,xe=Object(w.d)(),he=Object(V.f)(),pe=Object(Y.c)(),fe=v.b.input(Z||(Z=Object(m.a)(["\n  width: 100%;\n  min-height: ",";\n  max-height: ",";\n"])),y(80),y(150)),me=function(e){var n=e.setNewTweet,t=e.newTweet;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("label",{htmlFor:"tweet-editor",className:"a11y-hidden",children:"Edit yout Tweet"}),Object(E.jsx)(fe,{id:"tweet-editor",type:"text",value:t,required:!0,onChange:function(e){var t=e.target.value;n(t)}})]})},ge=t(29),we=v.b.div(X||(X=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: "," ",";\n"])),y(16),y(32)),ve=v.b.form($||($=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]))),ye=v.b.div(ee||(ee=Object(m.a)(["\n  color: ",";\n  margin: 0 ",";\n"])),k,y(8)),ke=v.b.button(ne||(ne=Object(m.a)(["\n  background: transparent;\n  color: ",";\n  border: transparent;\n  cursor: pointer;\n\n  .icon-x {\n    transform: rotate(45deg);\n    margin: auto 0 auto ",";\n  }\n"])),k,y(8)),Ne=v.b.div(te||(te=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: "," ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),y(16),y(32),y(16)),Se=v.b.div(ce||(ce=Object(m.a)(["\n  background: ",";\n  min-height: ",";\n  max-height: ",";\n  padding: ",";\n  color: ",";\n  word-break: break-all;\n\n  p {\n    font-size: ",";\n    white-space: pre-line;\n  }\n"])),F,y(80),y(150),y(16),N,y(18)),Fe=v.b.div(re||(re=Object(m.a)(["\n  max-height: ",";\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"])),y(150)),Ce=v.b.div(ae||(ae=Object(m.a)(["\n  position: absolute;\n  right: ",";\n  bottom: ",";\n\n  button {\n    background: transparent;\n    border: transparent;\n    border-radius: 0;\n    color: ",";\n\n    :hover {\n      color: ",";\n    }\n  }\n"])),y(8),y(8),k,N),Ae=function(e){var n=e.userObj,t=e.message,c=e.isOwner,r=Object(j.useState)(!1),a=Object(f.a)(r,2),i=a[0],s=a[1],o=Object(j.useState)(t),l=Object(f.a)(o,2),b=l[0],d=l[1],u=Object(V.d)(he,"tweets","".concat(n.id)),O=Object(Y.d)(pe,n.imageUrl),x=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=6;break}return e.next=4,Object(V.c)(u);case 4:return e.next=6,Object(Y.a)(O);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){s((function(e){return!e}))},g=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(b,n),e.next=4,Object(V.j)(u,{tweet:b});case 4:s(!1);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsx)("li",{children:i?Object(E.jsxs)(we,{children:[Object(E.jsxs)(ve,{onSubmit:g,children:[Object(E.jsx)(me,{setNewTweet:d,newTweet:b}),Object(E.jsxs)(ye,{children:[Object(E.jsx)("label",{htmlFor:"update-tweet",children:Object(E.jsx)(G.a,{icon:ge.c})}),Object(E.jsx)("input",{id:"update-tweet",type:"submit",value:"Update Tweet",className:"a11y-hidden"})]})]}),Object(E.jsxs)(ke,{onClick:m,children:[Object(E.jsx)("span",{children:"Cancel"}),Object(E.jsx)(G.a,{icon:ge.b,className:"icon-x"})]})]}):Object(E.jsxs)(Ne,{children:[t&&Object(E.jsx)(Se,{children:Object(E.jsx)("p",{children:t})}),n.imageUrl&&Object(E.jsx)(Fe,{children:Object(E.jsx)("img",{src:n.imageUrl,alt:"uploaded file"})}),c&&Object(E.jsxs)(Ce,{children:[Object(E.jsxs)("button",{onClick:x,children:[Object(E.jsx)("span",{className:"a11y-hidden",children:"Delete Tweet"}),Object(E.jsx)(G.a,{icon:ge.d})]}),Object(E.jsxs)("button",{onClick:m,children:[Object(E.jsx)("span",{className:"a11y-hidden",children:"Edit Tweet"}),Object(E.jsx)(G.a,{icon:ge.a})]})]})]})},n.id)},ze=t(65),Ie=v.b.form(ie||(ie=Object(m.a)(["\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .a11y-hidden {\n    ","\n  }\n"])),U),De=v.b.div(se||(se=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Ue=v.b.div(oe||(oe=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: "," 0;\n  color: ",";\n  font-size: ",";\n\n  label {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    span {\n      margin-right: ",";\n    }\n  }\n"])),y(16),k,y(14),y(8)),Ee=v.b.input(le||(le=Object(m.a)(["\n  width: 100%;\n  flex-grow: 1;\n"]))),Te=v.b.div(be||(be=Object(m.a)(["\n  background: ",";\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 ",";\n\n  .icon-twitter {\n    width: 100%;\n    color: ",";\n  }\n\n  :hover {\n    background: ",";\n    .icon-twitter {\n      color: ",";\n    }\n  }\n"])),k,y(40),y(40),y(8),A,A,k),Pe=v.b.div(je||(je=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: "," 0;\n\n  img {\n    width: ",";\n    height: auto;\n  }\n"])),y(16),y(240)),Le=v.b.button(de||(de=Object(m.a)(["\n  background: transparent;\n  color: ",";\n  border: transparent;\n  cursor: pointer;\n\n  .icon-x {\n    transform: rotate(45deg);\n    margin: auto 0 auto ",";\n  }\n\n  :hover,\n  :active {\n    border: transparent;\n    outline: transparent;\n  }\n"])),k,y(8)),_e=function(e){var n=e.userObj,t=Object(j.useState)(""),c=Object(f.a)(t,2),r=c[0],a=c[1],i=Object(j.useState)(""),s=Object(f.a)(i,2),o=s[0],l=s[1],b=function(){var e=Object(p.a)(h.a.mark((function e(t){var c,i,s,b,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c="",""===o){e.next=10;break}return i=Object(Y.d)(pe,"".concat(n.uid,"/").concat(Object(ze.a)())),e.next=6,Object(Y.e)(i,o,"data_url");case 6:return s=e.sent,e.next=9,Object(Y.b)(s.ref);case 9:c=e.sent;case 10:return b={tweet:r,createAt:Date.now(),creatorId:n.uid,imageUrl:c},e.prev=11,e.next=14,Object(V.a)(Object(V.b)(he,"tweets"),b);case 14:j=e.sent,console.log("Document witten with ID : ",j.id),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.error("Error adding document : ",e.t0);case 21:a(""),l("");case 23:case"end":return e.stop()}}),e,null,[[11,18]])})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsxs)(Ie,{onSubmit:b,children:[Object(E.jsxs)(De,{children:[Object(E.jsx)(Ee,{type:"text",name:"upload-tweet",value:r,onChange:function(e){var n=e.target.value;a(n)},placeholder:"What's on your mind?",maxLength:120}),Object(E.jsxs)(Te,{children:[Object(E.jsx)("label",{htmlFor:"submit-tweet",children:Object(E.jsx)(G.a,{icon:B.c,className:"icon-twitter"})}),Object(E.jsx)("input",{id:"submit-tweet",type:"submit",value:"tweet",className:"a11y-hidden"})]})]}),Object(E.jsxs)(Ue,{children:[Object(E.jsxs)("label",{htmlFor:"upload-image",children:[Object(E.jsx)("span",{children:"Upload Image"}),Object(E.jsx)(G.a,{icon:ge.b})]}),Object(E.jsx)("input",{id:"upload-image",type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],t=new FileReader;t.onloadend=function(e){var n=e.currentTarget.result;l(n)},t.readAsDataURL(n)},className:"a11y-hidden"}),o&&Object(E.jsxs)(Pe,{children:[Object(E.jsx)("img",{src:o,alt:"uploaded file"}),Object(E.jsxs)(Le,{onClick:function(){l("")},children:[Object(E.jsx)("span",{children:"Clear"}),Object(E.jsx)(G.a,{icon:ge.b,className:"icon-x"})]})]})]})]})},qe=v.b.div(ue||(ue=Object(m.a)(["\n  width: ",";\n  /* position: relative; */\n  /* display: flex;\n  flex-direction: column; */\n  /* align-items: center;\n  justify-content: center; */\n  margin: 0 ",";\n\n  .a11y-hidden {\n    ","\n  }\n"])),z,y(32),U),Je=v.b.ul(Oe||(Oe=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  /* align-items: center;\n  justify-content: center; */\n"])));var Be,Ge,He,Qe,Re,We,Ke,Me,Ve,Ye,Ze=function(e){var n=e.userObj,t=Object(j.useState)([]),c=Object(f.a)(t,2),r=c[0],a=c[1];return Object(j.useEffect)((function(){var e=Object(V.i)(Object(V.b)(he,"tweets"),Object(V.h)("createAt","desc"));Object(V.g)(e,(function(e){var n=e.docs.map((function(e){return Object(K.a)({id:e.id},e.data())}));a(n)}))}),[]),Object(E.jsxs)(qe,{children:[Object(E.jsx)("h1",{className:"a11y-hidden",children:"Home"}),Object(E.jsx)(_e,{userObj:n}),Object(E.jsx)(Je,{children:r.map((function(e){return Object(E.jsx)(Ae,{userObj:e,message:e.tweet,isOwner:e.creatorId===n.uid},e.id)}))})]})},Xe=t(30),$e=v.b.ul(Be||(Be=Object(m.a)(["\n  display: flex;\n  width: ",";\n  align-items: center;\n  justify-content: center;\n"])),z),en=v.b.li(Ge||(Ge=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: ",";\n  align-items: center;\n  font-weight: bold;\n"])),y(8)),nn=v.b.div(He||(He=Object(m.a)(["\n  color: ",";\n  height: ",";\n  margin-bottom: ",";\n"])),k,y(8),y(32)),tn=function(e){var n=e.userObj;return Object(E.jsx)("nav",{children:Object(E.jsxs)($e,{children:[Object(E.jsxs)(en,{children:[Object(E.jsx)(nn,{children:Object(E.jsx)(G.a,{icon:B.c,size:"2x"})}),Object(E.jsx)(Xe.b,{to:"/",children:"Home"})]}),Object(E.jsxs)(en,{children:[Object(E.jsx)(nn,{children:Object(E.jsx)(G.a,{icon:ge.e,size:"2x"})}),Object(E.jsxs)(Xe.b,{to:"/profile",children:[n.displayName,"'s Profile"]})]})]})})},cn=v.b.ul(Qe||(Qe=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin: auto;\n"]))),rn=v.b.li(Re||(Re=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n  align-items: center;\n"]))),an=function(){return Object(E.jsx)("nav",{children:Object(E.jsx)(cn,{children:Object(E.jsxs)(rn,{children:[Object(E.jsx)(G.a,{icon:B.c,color:"#04AAFF",size:"2x"}),Object(E.jsx)(Xe.b,{to:"/"})]})})})},sn=v.b.div(We||(We=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 ",";\n"])),y(32)),on=v.b.form(Ke||(Ke=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),ln=v.b.input(Me||(Me=Object(m.a)(["\n  flex-grow: 1;\n  width: 100%;\n  margin-bottom: ",";\n"])),y(8)),bn=v.b.input(Ve||(Ve=Object(m.a)(["\n  width: 100%;\n  background: ",";\n  color: ",";\n  margin-bottom: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),k,A,y(32),A,k),jn=v.b.button(Ye||(Ye=Object(m.a)(["\n  width: 100%;\n  background: ",";\n  color: ",";\n  border: 1px solid transparent;\n\n  &:hover {\n    box-sizing: border-box;\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n  }\n"])),C,A,A,C,C);var dn,un,On,xn=function(e){var n=e.userObj,t=e.refreshUser,c=Object(j.useState)(n.displayName),r=Object(f.a)(c,2),a=r[0],i=r[1],s=Object(g.f)(),o=Object(w.d)(),l=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(V.i)(Object(V.b)(he,"tweets"),Object(V.k)("creatorId","==",n.uid)),e.next=3,Object(V.e)(t);case 3:e.sent.forEach((function(e){console.log(e.id,"=>",e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){l()}),[]);var b=function(){var e=Object(p.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===a){e.next=8;break}if(null!==n.displayName){e.next=5;break}return e.next=5,Object(w.h)(n,{displayName:"Anonymous"});case 5:return e.next=7,Object(w.h)(n,{displayName:a});case 7:t();case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(E.jsxs)(sn,{children:[Object(E.jsxs)("h1",{children:[n.displayName,"'s Profile"]}),Object(E.jsxs)(on,{onSubmit:b,children:[Object(E.jsx)(ln,{type:"text",onChange:function(e){var n=e.target.value;i(n)},value:a,placeholder:"Display Name"}),Object(E.jsx)(bn,{type:"submit",value:"Update Profile"})]}),Object(E.jsx)(jn,{onClick:function(){Object(w.g)(o),s("/")},children:"Log out"})]})},hn=v.b.div(dn||(dn=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),pn=function(e){var n=e.isLoggedIn,t=e.userObj,c=e.refreshUser;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(hn,{children:n?Object(E.jsx)(tn,{userObj:t}):Object(E.jsx)(an,{})}),Object(E.jsxs)(g.c,{children:[n?Object(E.jsx)(g.a,{path:"/",element:Object(E.jsx)(Ze,{userObj:t})}):Object(E.jsx)(g.a,{path:"/",element:Object(E.jsx)(W,{})}),Object(E.jsx)(g.a,{path:"/profile",element:Object(E.jsx)(xn,{userObj:t,refreshUser:c})})]})]})},fn=v.b.footer(un||(un=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: ",";\n"])),y(32)),mn=v.b.p(On||(On=Object(m.a)(["\n  margin: "," 0;\n"])),y(16)),gn=function(){var e=(new Date).getFullYear();return Object(E.jsxs)(fn,{children:[Object(E.jsxs)("a",{href:"https://github.com/green9930",target:"_blank",rel:"noopener noreferrer",children:[Object(E.jsx)(G.a,{icon:B.a}),"green9930"]}),Object(E.jsxs)(mn,{children:["\xa9twitter_clone ",e," "]})]})};var wn,vn=function(){var e=Object(j.useState)(!1),n=Object(f.a)(e,2),t=n[0],c=n[1],r=Object(j.useState)(!1),a=Object(f.a)(r,2),i=a[0],s=a[1],o=Object(j.useState)(null),l=Object(f.a)(o,2),b=l[0],d=l[1],u=Object(j.useState)(""),O=Object(f.a)(u,2),x=(O[0],O[1]);return Object(j.useEffect)((function(){xe.onAuthStateChanged(function(){var e=Object(p.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?(null===n.displayName&&n.updateProfile({displayName:"User"}),s(!0),d(n)):s(!1),c(!0);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),Object(E.jsxs)(E.Fragment,{children:[t?Object(E.jsx)(pn,{isLoggedIn:i,userObj:b,refreshUser:function(){x(xe.currentUser.displayName)}}):"Initializing...",Object(E.jsx)(gn,{})]})},yn=Object(v.a)(wn||(wn=Object(m.a)(["\n\n  html {\n    font-size: 16px;\n  }\n  \n  body {\n    margin: 0 auto;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n  }\n  \n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  ul, li {\n    list-style: none;\n    padding: 0px;\n  }\n\n  button {\n    border-radius: ",";\n    padding: ",";\n  }\n\n  input {\n    box-sizing: border-box;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n\n    :focus {\n      outline: none;\n      border: 2px solid ",";\n    }\n  }\n\n  button:focus,\n  a:focus {\n    outline: 1px solid ","\n  }\n"])),y(32),y(8),y(8),k,y(32),k,k);O.a.render(Object(E.jsxs)(d.a.StrictMode,{children:[Object(E.jsx)(yn,{}),Object(E.jsx)(Xe.a,{basename:"/twitter-clone",children:Object(E.jsx)(vn,{})})]}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.34fd1664.chunk.js.map