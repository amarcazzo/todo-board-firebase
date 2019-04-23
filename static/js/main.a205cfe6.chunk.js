(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(48)},37:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),c=(n(37),n(6)),u=n(7),s=n(9),d=n(8),l=n(10),p=n(1),h=n(2),f=n(11),b=n(5),m=n.n(b),g=n(4),v=n(14),O=n(16),y=n.n(O),j={apiKey:"AIzaSyB2yCyUNY6rbVV_8iVJI_hJnaBhvivrvAY",authDomain:"todo-board-cad1d.firebaseapp.com",databaseURL:"https://todo-board-cad1d.firebaseio.com",projectId:"todo-board-cad1d",storageBucket:"todo-board-cad1d.appspot.com",messagingSenderId:"598932242116"};y.a.initializeApp(j);function x(){var e=Object(p.a)(["\n  border-radius: 50%;\n  max-width: 40px;\n  border: 1px solid;\n  boder-color: #dbe4ee;\n  margin: 5px;\n\n  &:hover {\n    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(p.a)(["\n  margin: 5px;\n  height: 30px;\n  width: 80px;\n  font-weight: 500;\n  font-size: 14px;\n  border: none;\n  background-color: transparent;\n  transition: transform 0.2s;\n  outline: none;\n\n  &:hover {\n    background-color: #f7f8f9;\n    border-radius: 4px;\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin: 15px;\n"]);return w=function(){return e},e}var T=h.a.div(w()),I=h.a.button(k()),E=h.a.img(x()),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.authInit()}},{key:"render",value:function(){var e=this.props.isLoggedIn?this.props.logOut:this.props.logIn,t=this.props.isLoggedIn?"Log Out":"Log In",n=this.props.picture||"./images/profile_placeholder.png";return r.a.createElement(T,null,r.a.createElement(E,{src:n}),r.a.createElement(I,{onClick:e},t))}}]),t}(a.Component),_=Object(f.b)(function(e){return{username:e.user.name,picture:e.user.picture,isLoggedIn:e.user.isLoggedIn}},{logIn:function(){return function(){var e=Object(v.a)(m.a.mark(function e(t){var n,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new y.a.auth.GoogleAuthProvider,e.next=3,y.a.auth().signInWithPopup(n);case 3:return e.next=5,y.a.auth().currentUser;case 5:a=e.sent,r={name:a.displayName,email:a.email,picture:a.photoURL,id:a.uid,isLoggedIn:!0},t({type:"LOG_IN",payload:Object(g.a)({},r)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(v.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.auth().signOut();case 2:t({type:"LOG_OUT",payload:{id:"",name:"",email:"",picture:"",isLoggedIn:!1}});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},authInit:function(){return function(){var e=Object(v.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.auth().onAuthStateChanged(function(e){var n={name:e.displayName,email:e.email,picture:e.photoURL,id:e.uid,isLoggedIn:!0};t({type:"AUTH_INIT",payload:Object(g.a)({},n)})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(S);function C(){var e=Object(p.a)(['\n  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\n  padding: 20px;\n']);return C=function(){return e},e}function L(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return L=function(){return e},e}var A=h.a.div(L()),U=h.a.h1(C()),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={title:"To-do Board"},n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state;return r.a.createElement(A,null,r.a.createElement(U,null,e.title),r.a.createElement(_,{user:e.user,logIn:this.handleLogIn,logOut:this.handleLogOut,isUserSignedIn:this.isUserSignedIn}))}}]),t}(a.Component),D=n(3),R=n(17),B=n.n(R);B.a.initializeApp(j);function G(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 5px;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: #ecf5fc;\n    button {\n      display: inline;\n    }\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(p.a)(["\n  border: none;\n  border-radius: 2px;\n  transition-duration: 0.4s;\n  margin: 0;\n  padding: 0;\n  display: none;\n  height: 18px;\n  width: 18px;\n  background-color: transparent;\n\n  &:hover {\n    background-color: ",";\n    color: white;\n  }\n"]);return K=function(){return e},e}var z=h.a.button(K(),function(e){return"changeState"===e.name?"#4caf50":"#c42952"}),H=h.a.li(G()),V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(D.a)(Object(D.a)(n))),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){this.props.handleChangeState(this.props.id)}},{key:"render",value:function(){var e=this.props,t=r.a.createElement("div",null,r.a.createElement(z,{name:"changeState",onClick:this.handleClick},"\u2713"));return r.a.createElement(H,{id:e.id},r.a.createElement("label",null,e.title),2!==e.boardType?t:"")}}]),t}(r.a.Component);var J=function(e){return r.a.createElement("div",null,e.items.map(function(t){return r.a.createElement(V,{key:t.id,id:t.id,title:t.title,boardType:e.boardType,handleChangeState:e.handleChangeState,handleRemove:e.handleRemove})}))};function X(){var e=Object(p.a)(["\n  border-radius: inherit;\n  background-color: #f3f4f6;\n  width: 90%;\n  border: none;\n  padding: 10px;\n  margin: 10px 0 10px 0;\n  outline: none;\n"]);return X=function(){return e},e}function M(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  width: 90%;\n"]);return M=function(){return e},e}function P(){var e=Object(p.a)(["\n  width: 95%;\n  padding: 10px;\n"]);return P=function(){return e},e}function W(){var e=Object(p.a)(["\n  border-radius: 4px;\n  background-color: #f3f4f6;\n  margin: 10px -10px 10px -10px;\n  width: 100%;\n  border: none;\n  padding: 10px;\n  outline: none;\n"]);return W=function(){return e},e}function Y(){var e=Object(p.a)(["\n  margin: 0px;\n  padding: 0px;\n  width: 95%;\n  list-style-type: circle;\n"]);return Y=function(){return e},e}function $(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 30%;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  padding: 10px;\n"]);return $=function(){return e},e}var q=h.a.div($()),F=h.a.ul(Y()),Q=h.a.input(W()),Z=h.a.div(P()),ee=h.a.form(M()),te=h.a.input(X()),ne=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={boardTitle:e.boardTitle,boardType:Number(e.boardType),newTask:{title:"",state:0},search:""},n.handleInput=n.handleInput.bind(Object(D.a)(Object(D.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(D.a)(Object(D.a)(n))),n.handleRemove=n.handleRemove.bind(Object(D.a)(Object(D.a)(n))),n.handleChangeState=n.handleChangeState.bind(Object(D.a)(Object(D.a)(n))),n.handleSearch=n.handleSearch.bind(Object(D.a)(Object(D.a)(n))),n}return Object(l.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.newTask;this.setState({newTask:{title:"",state:0}}),this.props.addTask(t)}},{key:"handleInput",value:function(e){this.setState({newTask:{title:e.target.value,state:0}})}},{key:"handleRemove",value:function(e){this.props.deleteTask(e)}},{key:"handleChangeState",value:function(e){var t=this.props.tasks.find(function(t){return t.id===e});t.state<2&&(t.state+=1),this.props.changeState(t)}},{key:"handleSearch",value:function(e){this.setState({search:e.target.value.toLowerCase()})}},{key:"componentDidMount",value:function(){this.props.getTasks(this.props.userId)}},{key:"render",value:function(){var e=this,t=this.props.tasks.filter(function(t){return t.state===e.state.boardType&&t.title.toLowerCase().includes(e.state.search)}),n=r.a.createElement(ee,{onSubmit:this.handleSubmit},r.a.createElement(Q,{type:"text",onChange:this.handleInput,placeholder:"New task",value:this.state.newTask.title})),a=r.a.createElement("small",null,"No tasks found.");return r.a.createElement(q,null,r.a.createElement(Z,null,this.state.boardTitle),r.a.createElement(te,{type:"text",placeholder:"Search",onChange:this.handleSearch}),r.a.createElement(F,null,0===t.length?a:r.a.createElement(J,{items:t,handleChangeState:this.handleChangeState,boardType:this.state.boardType})),0===this.state.boardType?n:"")}}]),t}(a.Component),ae=Object(f.b)(function(e){return{tasks:e.tasks.items,lastUpdatedItemId:e.tasks.lastUpdatedItemId,userId:e.user.id}},{getTasks:function(e){return function(t){var n=[];B.a.firestore().collection("tasks").where("userId","==",e).orderBy("timestamp","asc").onSnapshot(function(e){e.docChanges().forEach(function(e){if("removed"!==e.type&&"modified"!==e.type){var t=Object(g.a)({},e.doc.data(),{id:e.doc.id});n.push(t)}}),t({type:"GET_TASKS",payload:n})})}},addTask:function(e){return function(){var t=Object(v.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.firestore().collection("tasks").add({userId:B.a.auth().currentUser.uid,title:e.title,body:"",timestamp:new Date,state:e.state}).then(function(e){n({type:"ADD_TASK",payload:e.id})});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},changeState:function(e){return function(){var t=Object(v.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.firestore().collection("tasks").doc(e.id).update({state:e.state}).then(function(){n({type:"CHANGE_STATE",payload:e.id})});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteTask:function(e){return function(){var t=Object(v.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.firestore().collection("tasks").doc(e).delete().then(function(){n({type:"DELETE_TASK",payload:e})});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(ne);function re(){var e=Object(p.a)(["\n  font-size: 24px;\n  font-weight: 500;\n  width: 30%;\n  border: 1px solid;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);\n  padding: 15px;\n"]);return re=function(){return e},e}function ie(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 10px;\n  padding: 5px;\n"]);return ie=function(){return e},e}var oe=h.a.div(ie()),ce=h.a.div(re());function ue(e){var t=r.a.createElement(oe,null,r.a.createElement(ae,{boardType:"0",boardTitle:"Backlog"}),r.a.createElement(ae,{boardType:"1",boardTitle:"In Progress"}),r.a.createElement(ae,{boardType:"2",boardTitle:"Done"})),n=r.a.createElement(oe,null,r.a.createElement(ce,null,"Necesita estar logueado para poder utilizar esta herramienta."));return e.isLoggedIn?t:n}ue.propTypes={};var se=Object(f.b)(function(e){return{isLoggedIn:e.user.isLoggedIn}},{})(ue),de=n(12),le=n(30),pe={items:[],lastUpdatedItemId:""},he={name:"",id:"",email:"",picture:"../images/profile_placeholder.png",isLoggedIn:!1},fe=Object(de.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASKS":return{items:t.payload,lastUpdatedItemId:""};case"ADD_TASK":case"CHANGE_STATE":case"DELETE_TASK":return Object(g.a)({},e,{lastUpdatedItemId:t.payload});case"SEARCH_TASK":return Object(g.a)({},e,{items:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":case"LOG_OUT":case"AUTH_INIT":return Object(g.a)({},e,t.payload);default:return e}}}),be=[le.a],me=Object(de.e)(fe,{},Object(de.d)(de.a.apply(void 0,be),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({trace:!0}))),ge=(n(47),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:me},r.a.createElement(N,null),r.a.createElement(se,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.a205cfe6.chunk.js.map