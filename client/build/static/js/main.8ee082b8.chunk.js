(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e){e.exports=[{title:"Home",navLink:"/admin",imgUrl:"inbox"},{title:"Tools and Links",navLink:"/admin/tools",imgUrl:"mail"},{title:"Holiday Calender",navLink:"/admin/holidays",imgUrl:"inbox"}]},123:function(e,t,a){e.exports=a(201)},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),c=a(113),o=a(39),s=a(19),m=a(14),u=a(22),d=a(20),p=a(21),h=(a(132),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={newName:""},a.getPrevName="",a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("List componentWillReceiveProps",e),this.setState({newName:e.sendData})}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){console.log("componentWillUpdate",e,t),this.getPrevName=e.sendData}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate",e,t),this.getPrevName=e.sendData}},{key:"render",value:function(){return console.log("@@@@@",this.getPrevName),i.a.createElement("div",null,"This is List Component",i.a.createElement("h1",null,this.state.newName))}}]),t}(n.Component)),b=(n.Component,a(49)),f=a(42),E=a(102),g=a(3),v=a(202),O=a(60),j=a(252),x=a(247),k=a(237),w=a(248),y=a(65),C=a(250),N=a(249),S=a(109),U=a.n(S),B=a(110),T=a.n(B),D=a(254),L=a(114),P=a(236),A=a(84),I=a.n(A),R=a(85),W=a.n(R),q=a(57),H=a.n(q),M=a(103),_=Object(M.autoPlay)(H.a),z=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"NeONBRAND Digital Marketing, Las Vegas, United States",imgPath:"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Go\u010d, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}],G=Object(v.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:600,display:"block",overflow:"hidden",width:"100%"}}});var F=function(){var e=G(),t=Object(O.a)(),a=i.a.useState(0),n=Object(f.a)(a,2),r=n[0],l=n[1],c=z.length;return i.a.createElement("div",{className:e.root},i.a.createElement(L.a,{square:!0,elevation:0,className:e.header},i.a.createElement(y.a,null,z[r].label)),i.a.createElement(_,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){l(e)},enableMouseEvents:!0},z.map(function(t,a){return i.a.createElement("div",{key:t.label},Math.abs(r-a)<=2?i.a.createElement("img",{className:e.img,src:t.imgPath,alt:t.label}):null)})),i.a.createElement(D.a,{steps:c,position:"static",variant:"text",activeStep:r,nextButton:i.a.createElement(P.a,{size:"small",onClick:function(){l(function(e){return e+1})},disabled:r===c-1},"Next","rtl"===t.direction?i.a.createElement(I.a,null):i.a.createElement(W.a,null)),backButton:i.a.createElement(P.a,{size:"small",onClick:function(){l(function(e){return e-1})},disabled:0===r},"rtl"===t.direction?i.a.createElement(W.a,null):i.a.createElement(I.a,null),"Back")}))},J=a(104),V=a(105),K=a.n(V),Q=(a(193),a(194),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(J.a,{defaultView:"dayGridMonth",plugins:[K.a],events:[{title:"event 1",date:"2019-07-31"},{title:"event 2",date:"2019-04-02"}]})}}]),t}(i.a.Component)),X=a(106),Y=a(253),Z=a(238),$=a(251),ee=a(240),te=a(242),ae=a(241),ne=a(239),ie=a(41),re=a(64);function le(e){var t=e.children,a=e.value,n=e.index,r=Object(X.a)(e,["children","value","index"]);return i.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),i.a.createElement($.a,{p:3},t))}var ce=Object(v.a)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}});function oe(){var e=ce(),t=Object(O.a)(),a=i.a.useState(0),n=Object(f.a)(a,2),r=n[0],l=n[1];i.a.createElement("span",{className:e.bullet},"\u2022");return i.a.createElement("div",{className:e.root},i.a.createElement(k.a,{position:"static",color:"default"},i.a.createElement(Y.a,{value:r,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"full width tabs example"},re.map(function(e,t){return i.a.createElement(Z.a,Object.assign({label:e.menuTitle},{id:"full-width-tab-".concat(a=t),"aria-controls":"full-width-tabpanel-".concat(a)}));var a}))),i.a.createElement(H.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){l(e)}},i.a.createElement(le,{value:r,index:0,dir:t.direction},i.a.createElement(ne.a,{container:!0,spacing:3},re.map(function(t,a){if(t.cardmenus&&0===a)return t.cardmenus.map(function(t,a){return i.a.createElement(ne.a,{item:!0,xs:12,sm:12,md:6,lg:4},i.a.createElement(ie.b,{to:t.link},i.a.createElement(ee.a,{className:e.card},i.a.createElement(ae.a,null,i.a.createElement(y.a,{className:e.title,color:"textSecondary",gutterBottom:!0},t.title),i.a.createElement(y.a,{variant:"h5",component:"h2"},t.description)),i.a.createElement(te.a,null,i.a.createElement(P.a,{size:"small"},"Learn More")))))})}))),i.a.createElement(le,{value:r,index:1,dir:t.direction},i.a.createElement(ne.a,{container:!0,spacing:3},re.map(function(t,a){if(t.cardmenus&&1===a)return t.cardmenus.map(function(t,a){return i.a.createElement(ne.a,{item:!0,xs:12,sm:12,md:6,lg:4},i.a.createElement(ie.b,{to:t.link},i.a.createElement(ee.a,{className:e.card},i.a.createElement(ae.a,null,i.a.createElement(y.a,{className:e.title,color:"textSecondary",gutterBottom:!0},t.title),i.a.createElement(y.a,{variant:"h5",component:"h2"},t.description)),i.a.createElement(te.a,null,i.a.createElement(P.a,{size:"small"},"Learn More")))))})}))),i.a.createElement(le,{value:r,index:2,dir:t.direction},"Item Three")))}var se=a(81),me=a.n(se),ue=a(82),de=a.n(ue),pe=a(243),he=a(244),be=a(245),fe=a(246),Ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"selectedmenu",value:function(e){this.props.menuSelection(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"pt-5",onClick:this.selectedmenu.bind(this,this.props.menus.navLink)},i.a.createElement(pe.a,null,i.a.createElement(ie.b,{to:this.props.menus.navLink,key:this.props.menus.index},i.a.createElement(he.a,{button:!0,key:this.props.menus.index},i.a.createElement(be.a,null,"inbox"===this.props.menus.imgUrl?i.a.createElement(me.a,null):null,"mail"===this.props.menus.imgUrl?i.a.createElement(de.a,null):null),i.a.createElement(fe.a,{primary:this.props.menus.title})))))}}]),t}(n.Component),ge=(a(200),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footerCls"},i.a.createElement("p",{className:"text-left"},"Footer"))}}]),t}(n.Component)),ve=a(108),Oe=Object(v.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(E.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),marginBottom:130,transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create(["margin"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}});function je(){var e=Oe(),t=(Object(O.a)(),i.a.useState(!1)),a=Object(f.a)(t,2),n=a[0],r=a[1],l=i.a.useState("/admin"),c=Object(f.a)(l,2),o=c[0],s=c[1];if(window.location)window.location.pathname.substring(1,window.location.pathname.length);function m(e){s(e)}return i.a.createElement("div",{className:e.root},i.a.createElement(x.a,null),i.a.createElement(k.a,{position:"fixed",className:Object(g.a)(e.appBar,Object(b.a)({},e.appBarShift,n))},i.a.createElement(w.a,null,i.a.createElement(N.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){r(!0)},edge:"start",className:Object(g.a)(e.menuButton,n&&e.hide)},i.a.createElement(U.a,null)),i.a.createElement(y.a,{variant:"h6",noWrap:!0},"Administrative Asst. HUB"))),i.a.createElement(j.a,{className:e.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:e.drawerPaper}},i.a.createElement("div",{className:e.drawerHeader},i.a.createElement(N.a,{onClick:function(){r(!1)}},i.a.createElement(T.a,null))),i.a.createElement(C.a,null),ve.map(function(e,t){return i.a.createElement(Ee,{menus:e,index:t,menuSelection:m})})),i.a.createElement("main",{className:Object(g.a)(e.content,Object(b.a)({},e.contentShift,n))},i.a.createElement("div",{className:e.drawerHeader}),i.a.createElement("div",null,function(){switch(o){case"/admin":return i.a.createElement(F,null);case"/admin/tools":return i.a.createElement(oe,null);case"/admin/holidays":return i.a.createElement(Q,null);default:return null}}(),o?null:i.a.createElement(F,null))),i.a.createElement(ge,null))}var xe=a(33),ke=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(ie.a,null,i.a.createElement(xe.c,null,i.a.createElement(xe.a,{exact:!0,path:"/",component:je})))}}]),t}(n.Component),we=a(35),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER_DATA":return{user:Object(we.a)(e.user.concat(t.payload))};case"UPDATE_USER_DATA":var a=Object(we.a)(e.user).findIndex(function(e,a){return a===t.payload.id});console.log("indexToUpdate",a);var n={name:t.payload.userUpdatedData.name,email:t.payload.userUpdatedData.email,mobile:t.payload.userUpdatedData.mobile};return{user:[].concat(Object(we.a)(e.user.slice(0,a)),[n],Object(we.a)(e.user.slice(a+1)))};case"DELETE_USER_DATA":return{user:[].concat(Object(we.a)(e.user.slice(0,t.payload)),Object(we.a)(e.user.slice(t.payload+1)))};default:return e}},Ce=Object(o.c)({customer:ye}),Ne=a(111),Se=a.n(Ne),Ue=a(112),Be=Object(o.a)(Se.a,Ue.a),Te=Object(o.d)(Ce,Be);l.a.render(i.a.createElement(c.a,{store:Te},i.a.createElement(ke,null)),document.getElementById("root"))},64:function(e){e.exports=[{menuTitle:"Title One",cardmenus:[{title:"Card title 1",description:"Card description 21",link:""},{title:"Card title 11",description:"Card description 22",link:""},{title:"Card title 2",description:"Card description 23",link:""},{title:"Card title 3",description:"Card description 24",link:""},{title:"Card title 4",description:"Card description 25",link:""},{title:"Card title 5",description:"Card description 26",link:""}]},{menuTitle:"Title Two",link:"",cardmenus:[{title:"Card title 1",description:"Card description 121",link:""},{title:"Card title 11",description:"Card description 122",link:""}]},{menuTitle:"Title Thrid"}]}},[[123,1,2]]]);
//# sourceMappingURL=main.8ee082b8.chunk.js.map