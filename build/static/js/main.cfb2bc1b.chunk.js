(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),n=a(21),r=a(5),c=a(6),o=a(8),h=a(7),l=a(65),u=a(66),d=a(67),p=a(1),j=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)("h3",{className:"tagline",children:"Not Found!!!"})}}]),a}(s.Component),b=a(9);function f(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function m(e){return e[Math.floor(Math.random()*e.length)]}function O(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(m(e),"-").concat(m(e),"-").concat(m(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).storeName=i.a.createRef(),s.storeNameEntered=s.storeNameEntered.bind(Object(b.a)(s)),s}return Object(c.a)(a,[{key:"storeNameEntered",value:function(e){e.preventDefault(),console.log(this.storeName.current.value);var t=this.storeName.current.value;this.props.history.push("/store/".concat(t))}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"store-selector",onSubmit:this.storeNameEntered,children:[Object(p.jsx)("h2",{children:"Please Enter A Store"}),Object(p.jsx)("input",{type:"text",ref:this.storeName,placeholder:"Store Name",required:!0,defaultValue:O()}),Object(p.jsx)("button",{type:"submit",children:"Visit Store"})]})})}}]),a}(s.Component),x=a(13),g=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("header",{className:"top",children:[Object(p.jsxs)("h1",{children:["Catch",Object(p.jsxs)("span",{className:"ofThe",children:[Object(p.jsx)("span",{className:"of",children:"of"}),Object(p.jsx)("span",{className:"the",children:"the"})]}),"Day"]}),Object(p.jsx)("h3",{className:"tagline",children:Object(p.jsx)("span",{children:this.props.tagLine})})]})})}}]),a}(s.Component),y=a(18),k=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).renderOrder=function(t){var a=e.props.fishes[t],s=e.props.order[t],i=a&&"available"===a.status;return a?i?Object(p.jsx)(y.CSSTransition,{classNames:"order",timeout:{enter:500,exit:500},children:Object(p.jsx)("li",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)(y.TransitionGroup,{component:"span",className:"count",children:Object(p.jsx)(y.CSSTransition,{classNames:"count",timeout:{enter:500,exit:500},children:Object(p.jsx)("span",{children:s})},s)}),"lbs ",a.name,f(s*a.price),Object(p.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]})},t)},t):Object(p.jsx)(y.CSSTransition,{classNames:"order",timeout:{enter:500,exit:500},children:Object(p.jsxs)("li",{children:["Sorry ",a?a.name:"fish"," is no longer available"]},t)},t):null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var s=e.props.fishes[a],i=e.props.order[a];return s&&"available"===s.status?t+i*s.price:t}),0);return Object(p.jsxs)("div",{className:"order-wrap",children:[Object(p.jsx)("h2",{children:"Order!!"}),Object(p.jsx)(y.TransitionGroup,{component:"ul",className:"order",children:t.map(this.renderOrder)}),Object(p.jsxs)("div",{className:"total",children:["Total:",Object(p.jsx)("strong",{children:f(a)})]})]})}}]),a}(i.a.Component),S=a(19),F=a.n(S),C=a(24),N=a(17),w=a.n(N),T=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).fishName=i.a.createRef(),s.fishPrice=i.a.createRef(),s.fishStatus=i.a.createRef(),s.fishDescription=i.a.createRef(),s.fishImage=i.a.createRef(),s.addFishData=s.addFishData.bind(Object(b.a)(s)),s}return Object(c.a)(a,[{key:"addFishData",value:function(e){e.preventDefault();var t={name:this.fishName.current.value,price:parseFloat(this.fishPrice.current.value),status:this.fishStatus.current.value,description:this.fishDescription.current.value,imageUrl:this.fishImage.current.value};if(!t.price)return null;this.props.addFish(t),e.currentTarget.reset()}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"fish-edit",onSubmit:this.addFishData,children:[Object(p.jsx)("input",{type:"text",placeholder:"Fish Name",name:"fishName",ref:this.fishName}),Object(p.jsx)("input",{type:"text",placeholder:"Fish Price",name:"fishPrice",ref:this.fishPrice}),Object(p.jsxs)("select",{name:"fishStatus",ref:this.fishStatus,children:[Object(p.jsx)("option",{value:"available",children:"Fresh!!"}),Object(p.jsx)("option",{value:"unavailable",children:"Sold Out!!"})]}),Object(p.jsx)("textarea",{placeholder:"Fish Description",name:"fishDescription",ref:this.fishDescription}),Object(p.jsx)("input",{type:"text",placeholder:"Fish Image",name:"fishImage",ref:this.fishImage}),Object(p.jsx)("button",{type:"submit",children:"+ADD ITEM"})]})})}}]),a}(s.Component),D=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).handleChange=s.handleChange.bind(Object(b.a)(s)),s}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=Object(x.a)(Object(x.a)({},this.props.fishes),{},{[e.currentTarget.name]:e.currentTarget.value});this.props.updateFish(this.props.index,t)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"fish-edit",children:[Object(p.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fishes.name}),Object(p.jsx)("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fishes.price}),Object(p.jsxs)("select",{name:"status",onChange:this.handleChange,value:this.props.fishes.status,children:[Object(p.jsx)("option",{value:"available",children:"Fresh!!"}),Object(p.jsx)("option",{value:"unavailable",children:"Sold Out!!"})]}),Object(p.jsx)("textarea",{name:"description",onChange:this.handleChange,value:this.props.fishes.description}),Object(p.jsx)("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fishes.image}),Object(p.jsx)("button",{onClick:function(){return e.props.deleteFish(e.props.index)},children:"REMOVE FISH!"})]})}}]),a}(s.Component);var I=function(e){return Object(p.jsxs)("nav",{className:"login",children:[Object(p.jsx)("h2",{children:"Inventory Login"}),Object(p.jsx)("p",{children:"Sign in to manage your store's inventory."}),Object(p.jsx)("button",{className:"github",onClick:function(){return e.authenticate("Github")},children:"Log In With Github"}),Object(p.jsx)("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")},children:"Log In With Facebook"})]})},L=a(31),A=a.n(L),E=w.a.initializeApp({apiKey:"AIzaSyCLyXdohC9vr5kmoxqjroCTd1cRMkdxJBE",authDomain:"catch-of-the-day-pranavkhapra.firebaseapp.com",databaseURL:"https://catch-of-the-day-pranavkhapra-default-rtdb.firebaseio.com",projectId:"catch-of-the-day-pranavkhapra",storageBucket:"catch-of-the-day-pranavkhapra.appspot.com",messagingSenderId:"786935328991",appId:"1:786935328991:web:61b152f74574ed37adf96a",measurementId:"G-3V5E5L2XCG"}),M=A.a.createClass(E.database()),P=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).state={uid:null,owner:null},s.authHandler=function(){var e=Object(C.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.fetch(s.props.idOfTheStore,{context:Object(b.a)(s)});case 2:if((a=e.sent).owner){e.next=6;break}return e.next=6,M.post("".concat(s.props.idOfTheStore,"/owner"),{data:t.user.uid});case 6:s.setState({uid:t.user.uid,owner:a.owner||t.user.uid});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.logout=Object(C.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.auth().signOut();case 2:s.setState({uid:null});case 3:case"end":return e.stop()}}),e)}))),s.authenticate=s.authenticate.bind(Object(b.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"authenticate",value:function(e){var t=new(w.a.auth["".concat(e,"AuthProvider")]);E.auth().signInWithPopup(t).then(this.authHandler)}},{key:"render",value:function(){var e=this,t=Object(p.jsx)("button",{onClick:this.logout,children:"Log out!"});return this.state.uid?this.state.uid!==this.state.owner?Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Sorry you are not the owner!"}),t]}):Object(p.jsxs)("div",{className:"inventory",children:[Object(p.jsx)("h2",{children:"Inventory!!"}),t,Object.keys(this.props.fishes).map((function(t){return Object(p.jsx)(D,{fishes:e.props.fishes[t],index:t,deleteFish:e.props.deleteFish,updateFish:e.props.updateFish},t)})),Object(p.jsx)(T,{addFish:this.props.addFish}),Object(p.jsx)("button",{type:"button",onClick:this.props.loadSampleFishes,children:"LOAD SAMPLE FISHES"})]}):Object(p.jsx)(I,{authenticate:this.authenticate})}}]),a}(s.Component),R={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",description:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",description:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",description:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",description:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",description:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",description:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",description:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",description:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",description:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},G=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleClick=s.handleClick.bind(Object(b.a)(s)),s}return Object(c.a)(a,[{key:"handleClick",value:function(){this.props.addToOrder(this.props.index)}},{key:"render",value:function(){var e=this.props.fishesDetails,t=e.name,a=e.image,s=e.description,i=e.price,n="available"===e.status;return Object(p.jsxs)("li",{className:"menu-fish",children:[Object(p.jsx)("img",{src:a,alt:t}),Object(p.jsxs)("h3",{className:"fish-name",children:[t,Object(p.jsx)("span",{className:"price",children:f(i)})]}),Object(p.jsx)("p",{children:s}),Object(p.jsx)("button",{type:"submit",disabled:!n,onClick:this.handleClick,children:n?"ADD TO ORDER":"SOLD OUT"})]})}}]),a}(s.Component),H=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).addFish=s.addFish.bind(Object(b.a)(s)),s.loadSampleFishes=s.loadSampleFishes.bind(Object(b.a)(s)),s.addToOrder=s.addToOrder.bind(Object(b.a)(s)),s.updateFish=s.updateFish.bind(Object(b.a)(s)),s.deleteFishFromTheOrder=s.deleteFishFromTheOrder.bind(Object(b.a)(s)),s.deleteFish=s.deleteFish.bind(Object(b.a)(s)),s.state={fishes:{},order:{}},s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.idOfTheStore);e&&this.setState({order:JSON.parse(e)}),this.ref=M.syncState("".concat(this.props.match.params.idOfTheStore,"/fish"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.idOfTheStore,JSON.stringify(this.state.order))}},{key:"addFish",value:function(e){var t=Object(x.a)({},this.state.fishes);t["fish".concat(Date.now())]=e,this.setState({fishes:t})}},{key:"addToOrder",value:function(e){var t=Object(x.a)({},this.state.order);t[e]=t[e]+1||1,this.setState({order:t})}},{key:"loadSampleFishes",value:function(){this.setState({fishes:R})}},{key:"updateFish",value:function(e,t){var a=Object(x.a)({},this.state.fishes);a[e]=t,this.setState({fishes:a})}},{key:"deleteFish",value:function(e){var t=Object(x.a)({},this.state.fishes);t[e]=null,this.setState({fishes:t})}},{key:"deleteFishFromTheOrder",value:function(e){var t=Object(x.a)({},this.state.order);delete t[e],this.setState({order:t})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"catch-of-the-day",children:[Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)(g,{tagLine:"Fresh SeaFood Market"}),Object(p.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(p.jsx)(G,{index:t,fishesDetails:e.state.fishes[t],addToOrder:e.addToOrder,children:t},t)}))})]}),Object(p.jsx)(k,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.deleteFishFromTheOrder}),Object(p.jsx)(P,{addFish:this.addFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,deleteFish:this.deleteFish,updateFish:this.updateFish,idOfTheStore:this.props.match.params.idOfTheStore})]})}}]),a}(s.Component),J=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:v}),Object(p.jsx)(d.a,{exact:!0,path:"/store/:idOfTheStore",component:H}),Object(p.jsx)(d.a,{exact:!0,component:j})]})})})}}]),a}(s.Component);a(61);Object(n.render)(Object(p.jsx)(J,{}),document.querySelector("#main"))}},[[62,1,2]]]);
//# sourceMappingURL=main.cfb2bc1b.chunk.js.map