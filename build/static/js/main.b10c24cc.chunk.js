(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(16),o=a.n(l),c=(a(65),a(66),a(67),a(68),a(1)),s=a(10),i=a(24),m=a.n(i),u=a(35),d=a(38),p=a(25);var h=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=(t[0],t[1]),l=Object(r.useState)(!1),o=Object(d.a)(l,2),s=(o[0],o[1]),i=Object(p.b)(!0,null,{from:{opacity:0},enter:function(e){return function(){var e=Object(u.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.next=4,t({opacity:1});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},leave:{opacity:0}}),h=Object(p.b)(!0,null,{from:{opacity:0},enter:function(e){return function(){var e=Object(u.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:return e.next=4,t({opacity:1});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},leave:{opacity:0}});return Object(r.useEffect)((function(){s(),a()}),[]),n.a.createElement("div",{style:{width:"100%",margin:"auto",overflow:"scroll"}},n.a.createElement(c.Grid,{className:"home-grid"},n.a.createElement(c.Cell,{col:12},h.map((function(e){var t=e.item,a=e.key,r=e.props;return t&&n.a.createElement(p.a.div,{key:a,style:r},n.a.createElement("img",{src:"/resume-reactapp/my-avatar-2.png",alt:"avatar",className:"avatar-img"}))})),i.map((function(e){var t=e.item,a=e.key,r=e.props;return t&&n.a.createElement(p.a.div,{key:a,style:r},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,"Full Stack Developer"),n.a.createElement("hr",null),n.a.createElement("p",null,"React-Native | ReactJS | Redux | NodeJS | JavaScript | HTML/CSS | Firebase | MySQL | MongoDB | REST/Graphql API"),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/roshan-pandey-690a2813b/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin-square socialBtn","arai-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/roshan-p",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-github-square socialBtn","arai-hidden":"true"})),n.a.createElement("a",{href:"https://wwww.facebook.com/roshan-hellverse",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("i",{className:"fa fa-facebook-square socialBtn","arai-hidden":"true"})))))})))))},E=a(5),g=a(9),b=a(7),f=a(6),y=a(58),v=a.n(y),C=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(E.a)(this,a),(r=t.call(this,e)).state={name:"",email:"",message:"",disabled:!1,emailSent:null},r}return Object(g.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(e.target),this.setState({disabled:!0}),v.a.post("https://ro-portfolio-api.herokuapp.com/api/email",this.state).then((function(e){e.data.success?t.setState({disabled:!1,emailSent:!0,name:"",email:"",message:""}):t.setState({disabled:!1,emailSent:!1,name:"",email:"",message:""})})).catch((function(e){console.log(e),t.setState({disabled:!1,emailSent:!1,name:"",email:"",message:""})}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:"EmailForm"},n.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"message"},"Message"),n.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),n.a.createElement("button",{type:"submit",className:"btn btn-submit-email"},"Submit")),!0===this.state.emailSent&&n.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&n.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(n.a.Component),k=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-body"},n.a.createElement(c.Grid,{className:"contact-grid"},n.a.createElement(c.Cell,{col:6},n.a.createElement("h2",null,"Roshan Pandey (Ro)"),n.a.createElement("img",{src:"/resume-reactapp/my-avatar-2.png",alt:"avatar",style:{height:"250px"}}),n.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"90/416 Soi Watluang Wognsawang Road Bangsue District Bangkok 10800 Thailand")),n.a.createElement(c.Cell,{col:6},n.a.createElement("h2",null,"Contact Me"),n.a.createElement("hr",null),n.a.createElement("div",{className:"contact-list"},n.a.createElement(c.List,null,n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},n.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(+66) 832-360-493")),n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},n.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"roshan007191@gmail.com"))),n.a.createElement("hr",null),n.a.createElement(C,null)))))}}]),a}(r.Component),N=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(c.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),n.a.createElement("p",null,this.props.schoolDescription)))}}]),a}(r.Component),x=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),n.a.createElement(c.Cell,{col:8},n.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),n.a.createElement("p",null,this.props.jobDescription)))}}]),a}(r.Component),j=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:12},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("text",{className:"skill-label"},this.props.skill)," ",n.a.createElement(c.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress})," ")))}}]),a}(r.Component),w=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:12},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"/resume-reactapp/my-avatar-2.png",alt:"avatar",style:{height:"200px"}})),n.a.createElement("h2",{style:{paddingTop:"2em"}},"Roshan Pandey"),n.a.createElement("h4",{style:{color:"grey"}},"Full Stack Developer (React-Ntive)"),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"100%"}}),n.a.createElement("h5",null,"My Interests"),n.a.createElement(c.List,null,n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,null,n.a.createElement("i",{style:{fontSize:"2em"},className:"fa fa-book ","aria-hidden":"true"})," Manga")),n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,null,n.a.createElement("i",{style:{fontSize:"2em"},className:"fa fa-tv ","aria-hidden":"true"})," Anime")),n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,null,n.a.createElement("i",{style:{fontSize:"2em"},className:"fa fa-code ","aria-hidden":"true"})," Programming")),n.a.createElement(c.ListItem,null,n.a.createElement(c.ListItemContent,null,n.a.createElement("i",{style:{fontSize:"2em"},className:"fa fa-heart ","aria-hidden":"true"})," Gym"))),n.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"100%"}}))))}}]),a}(r.Component),S=a(140),T=a(141),O=a(142),B="url(https://reactjs.org/logo-og.png) center / cover",R="url(https://bestinternet.co.th/img/blog/nodejs%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpeg) center / cover",A=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(E.a)(this,a),(r=t.call(this,e)).state={activeTab:0},r}return Object(g.a)(a,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?n.a.createElement(S.a,null,n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React Project #1"),n.a.createElement(c.CardText,null,"React web app for my resume"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/resume-reactapp",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React Project #2"),n.a.createElement(c.CardText,null,"React front end for chat application"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/exam-frontend",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React Project #3"),n.a.createElement(c.CardText,null,"Show real-time data with redux"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/techcurve-test/tree/master/client",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React Project #4"),n.a.createElement(c.CardText,null,"React hooks demo"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/react-hooks-demo",rel:"noopener noreferrer",target:"_blank"},"View on github")))))):1===this.state.activeTab?n.a.createElement(S.a,null,n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React-Native Project #1"),n.a.createElement(c.CardText,null,'"Livvz" Property market plaform owned by Raimon Land Public Company Limited'),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://apps.apple.com/th/app/livvz/id1465686975",rel:"noopener noreferrer",target:"_blank"},"App Store")),n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.rml.livvz&hl=en_US",rel:"noopener noreferrer",target:"_blank"},"Google Play"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React-Native Project #2"),n.a.createElement(c.CardText,null,"React-native with redux demo"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/Blockchain-with-network-nodes",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:B}},"React-Native Project #3"),n.a.createElement(c.CardText,null,"React-Native-GoogleMap-Demo"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/React-Native-GoogleMap-Demo",rel:"noopener noreferrer",target:"_blank"},"View on github")))))):2===this.state.activeTab?n.a.createElement(S.a,null,n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:R}},"NodeJS #1"),n.a.createElement(c.CardText,null,"Blockchain Demo with 5 network nodes"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/Blockchain-with-network-nodes",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:R}},"NodeJS #2"),n.a.createElement(c.CardText,null,"Online shopping cart by using Node.js / Express / MongoDB"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/Online-Shopping-Cart",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:R}},"NodeJS #3"),n.a.createElement(c.CardText,null,"Back-end for chat application by using Node.js / Express / MongoDB (Graphql API)"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/exam-backend",rel:"noopener noreferrer",target:"_blank"},"View on github"))))),n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:R}},"NodeJS #4"),n.a.createElement(c.CardText,null,"Back-end for chart application by using Node.js / Express / MongoDB (REST API)"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/techcurve-test",rel:"noopener noreferrer",target:"_blank"},"View on github")))))):3===this.state.activeTab?n.a.createElement(S.a,null,n.a.createElement(T.a,{xs:"12",md:"6",lg:"4"},n.a.createElement(c.Card,{shadow:5,className:"projects-card"},n.a.createElement(c.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://www.educative.io/api/page/5393602882568192/image/download/6038586442907648) center / cover"}},"C++ Project #1"),n.a.createElement(c.CardText,null,"License plates detection with OpenCV"),n.a.createElement(c.CardActions,{border:!0},n.a.createElement(c.Button,{colored:!0,onClick:!0},n.a.createElement("a",{href:"https://github.com/roshan-p/LPDS",rel:"noopener noreferrer",target:"_blank"},"View on github")))))):void 0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(c.Tabs,{className:"projects-tab",activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},n.a.createElement(c.Tab,null,"ReactJS"),n.a.createElement(c.Tab,null,"React-Naitve"),n.a.createElement(c.Tab,null,"\u0e3aNodeJS"),n.a.createElement(c.Tab,null,"C++")),n.a.createElement(O.a,null,n.a.createElement("div",{className:"content"},this.toggleCategories())))}}]),a}(r.Component),L=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(c.Grid,null,n.a.createElement(c.Cell,{col:4},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"/resume-reactapp/my-avatar-2.png",alt:"avatar",style:{height:"200px"}})),n.a.createElement("h2",{style:{paddingTop:"2em"}},"Roshan Pandey"),n.a.createElement("h5",{style:{color:"grey"}},"** Thai Nationality **"),n.a.createElement("h4",{style:{color:"grey"}},"Full Stack Developer (React-Ntive)"),n.a.createElement("hr",{style:{borderTop:"3px solid #00d2ff",width:"50%"}}),n.a.createElement("p",null,"To take a challenging and managerial role in the field of computer programming and implement the expertise and experience gained in this field to develop complex project with efficiency and quality."),n.a.createElement("hr",{style:{borderTop:"3px solid #00d2ff",width:"50%"}}),n.a.createElement("h5",null,"Address"),n.a.createElement("p",null,"90/416 Soi Watluang Wognsawang Road Bangsue District Bangkok 10800 Thailand"),n.a.createElement("h5",null,"Phone"),n.a.createElement("p",null,"(+66) 832-360-493"),n.a.createElement("h5",null,"Email"),n.a.createElement("p",null,"roshan007191@gmail.com"),n.a.createElement("h5",null,"Web"),n.a.createElement("a",{href:"https://roshan-p.github.io/resume-reactapp/#/",target:"_blank"},"roshan-p.github.io"),n.a.createElement("hr",{style:{borderTop:"3px solid #00d2ff",width:"50%"}})),n.a.createElement(c.Cell,{className:"resume-right-col",col:8},n.a.createElement("h2",null,"Education"),n.a.createElement(N,{startYear:2011,endYear:2016,schoolName:"ASSUMPTION UNIVERSITY OF THAILAND",schoolDescription:"BACHELOR OF SCIENCE AND TECHNOLOGY\r MAJOR IN COMPUTER SCIENCE\r "}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Experience"),n.a.createElement(x,{startYear:2017,endYear:2018,jobName:"CAKEBOX SOLUTIONS",jobDescription:"My key responsibilities were to develop a front-end for the web application by using JavaScript, HTML, CSS, and\r AngularJS for the web application.\r "}),n.a.createElement(x,{startYear:2018,endYear:"Present",jobName:"Raimon Land Public Company Limited",jobDescription:"My key responsibility is to be a part of team developing mobile application and web application"}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Skills"),n.a.createElement(j,{skill:"Javascript",progress:90}),n.a.createElement(j,{skill:"React-Native",progress:80}),n.a.createElement(j,{skill:"Firebase",progress:70}),n.a.createElement(j,{skill:"ReactJS",progress:60}),n.a.createElement(j,{skill:"NodeJS",progress:60}),n.a.createElement(j,{skill:"MySQL",progress:50}),n.a.createElement(j,{skill:"HTML/CSS",progress:50}),n.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),n.a.createElement("h2",null,"Languages"),n.a.createElement("h4",null,"Thai (Native)"),n.a.createElement("h4",null,"English"),n.a.createElement("h4",null,"Hindi"),n.a.createElement("h4",null,"Japanese ( Just a bit )"))))}}]),a}(r.Component),P=function(){return n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:h}),n.a.createElement(s.a,{exact:!0,path:"/aboutme",component:w}),n.a.createElement(s.a,{exact:!0,path:"/contact",component:k}),n.a.createElement(s.a,{exact:!0,path:"/projects",component:A}),n.a.createElement(s.a,{exact:!0,path:"/resume",component:L}))},D=a(11);var I=function(){return n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(c.Layout,null,n.a.createElement(c.Header,{className:"header-color",title:n.a.createElement(D.b,{className:"nav-btn",to:"/"},"Ro's World"),scroll:!0},n.a.createElement(c.Navigation,null,n.a.createElement(D.b,{className:"nav-btn",to:"/resume"},"Resume"),n.a.createElement(D.b,{className:"nav-btn",to:"/aboutme"},"About me"),n.a.createElement(D.b,{className:"nav-btn",to:"/projects"},"Projects"),n.a.createElement(D.b,{className:"nav-btn",to:"/contact"},"Contact"))),n.a.createElement(c.Drawer,{title:n.a.createElement(D.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Ro's World")},n.a.createElement(c.Navigation,null,n.a.createElement(D.b,{style:{textDecoration:"none",color:"grey"},to:"/resume"},"Resume"),n.a.createElement(D.b,{style:{textDecoration:"none",color:"grey"},to:"/aboutme"},"About me"),n.a.createElement(D.b,{style:{textDecoration:"none",color:"grey"},to:"/projects"},"Projects"),n.a.createElement(D.b,{style:{textDecoration:"none",color:"grey"},to:"/contact"},"Contact"))),n.a.createElement(c.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(137);o.a.render(n.a.createElement(D.a,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(138)},67:function(e,t,a){},68:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.b10c24cc.chunk.js.map