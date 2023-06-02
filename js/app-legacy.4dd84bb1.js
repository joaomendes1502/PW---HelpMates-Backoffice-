(function(){"use strict";var t={7197:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var i,n,o,s,r=a(144),l=function(){var t=this,e=t._self._c;return e("div",{class:{"nav-open":t.$sidebar.showSidebar}},[e("notifications"),e("router-view")],1)},c=[],u={},d=u,p=a(1001),v=(0,p.Z)(d,l,c,!1,null,null,null),f=v.exports,m=a(8345),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("side-bar",[e("template",{slot:"links"},[e("sidebar-link",{attrs:{to:"/dashboard",name:"Dashboard",icon:"ti-panel"}}),e("sidebar-link",{attrs:{to:"/stats",name:"Criar Atividade",icon:"ti-pencil-alt2"}}),e("sidebar-link",{attrs:{to:"/notifications",name:"Atividades",icon:"ti-bell"}}),e("sidebar-link",{attrs:{to:"/table-list",name:"Utilizadores",icon:"ti-user"}}),e("sidebar-link",{attrs:{to:"/icons",name:"Funcionários",icon:"ti-user"}}),e("sidebar-link",{attrs:{to:"/typography",name:"Marcações",icon:"ti-view-list-alt"}}),e("sidebar-link",{attrs:{to:"/maps",name:"Sede",icon:"ti-map"}})],1),e("mobile-menu",[e("li",{staticClass:"nav-item"}),e("li",{staticClass:"divider"})])],2),e("div",{staticClass:"main-panel"},[e("top-navbar"),e("dashboard-content",{nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}}),e("content-footer")],1)],1)},g=[],b={},_=(0,p.Z)(b,i,n,!1,null,null,null),y=_.exports,C={},w=(0,p.Z)(C,o,s,!1,null,null,null),S=w.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])},k=[],D={},O=D,I=(0,p.Z)(O,x,k,!1,null,null,null),T=I.exports,N=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav navbar-nav nav-mobile-menu"},[t._t("default")],2)},L=[],M={},$=M,F=(0,p.Z)($,N,L,!1,null,null,null),P=F.exports,A={components:{TopNavbar:y,ContentFooter:S,DashboardContent:T,MobileMenu:P},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},z=A,Z=(0,p.Z)(z,h,g,!1,null,null,null),j=Z.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-us full-screen"},[e("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),e("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._m(1),e("footer",{staticClass:"footer-demo"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"pull-left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),e("li",[e("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._m(2)])])])},V=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper wrapper-full-page section content"},[e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[e("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),e("h2",{staticClass:"title"},[t._v(" Oops! It seems that this page does not exist. ")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright pull-right"},[t._v(" © 2017, made with "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by Paper admin ")])}],E={},R=E,U=(0,p.Z)(R,J,V,!1,null,null,null),B=U.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex bg-gray-100 rounded shadow p-4"},[e("div",{staticClass:"mr-8"},[e("p",{staticClass:"text-lg font-semibold"},[t._v("Utilizadores:")]),e("p",{staticClass:"text-xl"},[t._v(t._s(t.utilizadorCount))])]),e("div",{staticClass:"mr-8"},[e("p",{staticClass:"text-lg font-semibold"},[t._v("Funcionários:")]),e("p",{staticClass:"text-xl"},[t._v(t._s(t.funcionariosCount))])]),e("div",{staticClass:"mr-8"},[e("p",{staticClass:"text-lg font-semibold"},[t._v("Oportunidades:")]),e("p",{staticClass:"text-xl"},[t._v(t._s(t.itensDetalheCount))])]),e("div",{staticClass:"mr-8"},[e("p",{staticClass:"text-lg font-semibold"},[t._v("Marcações:")]),e("p",{staticClass:"text-xl"},[t._v(t._s(t.marcacaoCount))])]),e("div",[e("p",{staticClass:"text-lg font-semibold"},[t._v("Doações:")]),e("p",{staticClass:"text-xl"},[t._v(t._s(t.TodasDoacoesCount))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-12"},[e("chart-card",{attrs:{title:"Estado das Marcações","chart-data":t.filteredData,"chart-type":"Pie"}})],1)])])},q=[],G=(a(7941),a(7327),a(1539),a(6699),a(6977),a(7658),a(2222),function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group",class:{"input-group":t.hasIcon}},[t._t("label",(function(){return[t.label?e("label",{staticClass:"control-label"},[t._v(" "+t._s(t.label)+" ")]):t._e()]})),t._t("addonLeft",(function(){return[t.addonLeftIcon?e("span",{staticClass:"input-group-prepend"},[e("i",{staticClass:"input-group-text",class:t.addonLeftIcon})]):t._e()]})),e("input",t._b({staticClass:"form-control",attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._t("default"),t._t("addonRight",(function(){return[t.addonRightIcon?e("span",{staticClass:"input-group-append"},[e("i",{staticClass:"input-group-text",class:t.addonRightIcon})]):t._e()]}))],2)}),W=[],X=(a(9653),{inheritAttrs:!1,name:"fg-input",props:{label:String,value:[String,Number],addonRightIcon:String,addonLeftIcon:String},computed:{hasIcon:function(){var t=this.$slots,e=t.addonRight,a=t.addonLeft;return void 0!==e||void 0!==a||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}}}),Y=X,K=(0,p.Z)(Y,G,W,!1,null,null,null),Q=K.exports,tt=function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],tag:"component",staticClass:"dropdown",class:{show:t.isOpen},on:{click:t.toggleDropDown}},[e("a",{staticClass:"dropdown-toggle btn-rotate",class:t.titleClasses,attrs:{"data-toggle":"dropdown"}},[t._t("title",(function(){return[e("i",{class:t.icon}),e("span",{staticClass:"notification"},[t._v(t._s(t.title)+" "),e("b",{staticClass:"caret"})])]}))],2),e("ul",{staticClass:"dropdown-menu",class:{show:t.isOpen}},[t._t("default")],2)])},et=[],at={props:{tag:{type:String,default:"li"},title:String,icon:String,titleClasses:[String,Object,Array]},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},closeDropDown:function(){this.isOpen=!1,this.$emit("change",!1)}}},it=at,nt=(0,p.Z)(it,tt,et,!1,null,null,null),ot=nt.exports,st=function(){var t=this,e=t._self._c;return e("table",{staticClass:"table",class:t.tableClass},[e("thead",[t._t("columns",(function(){return t._l(t.columns,(function(a){return e("th",{key:a},[t._v(t._s(a))])}))}))],2),e("tbody",t._l(t.data,(function(a,i){return e("tr",{key:i},[t._t("default",(function(){return t._l(t.columns,(function(i,n){return t.hasValue(a,i)?e("td",{key:n},[t._v(" "+t._s(t.itemValue(a,i))+" ")]):t._e()}))}),{row:a})],2)})),0)])},rt=[],lt={name:"paper-table",props:{columns:Array,data:Array,type:{type:String,default:"striped"},title:{type:String,default:""},subTitle:{type:String,default:""}},computed:{tableClass:function(){return"table-".concat(this.type)}},methods:{hasValue:function(t,e){return"undefined"!==t[e.toLowerCase()]},itemValue:function(t,e){return t[e.toLowerCase()]}}},ct=lt,ut=(0,p.Z)(ct,st,rt,!1,null,null,null),dt=ut.exports,pt=a(5222),vt=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component",staticClass:"btn",class:[{"btn-round":t.round},{"btn-block":t.block},{"btn-just-icon":t.icon},(0,pt.Z)({},"btn-".concat(t.type),t.type&&!t.outline),(0,pt.Z)({},"btn-outline-".concat(t.type),t.type&&t.outline),(0,pt.Z)({},"btn-".concat(t.size),t.size),{"btn-link":t.simple}],attrs:{type:t.nativeType,disabled:t.disabled||t.loading}},[t._t("loading",(function(){return[t.loading?e("i",{staticClass:"fa fa-spinner fa-spin"}):t._e()]})),t._t("default")],2)},ft=[],mt={name:"p-button",props:{tag:{type:String,default:"button"},round:Boolean,icon:Boolean,outline:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,type:{type:String,default:"default"},nativeType:{type:String,default:"button"},size:{type:String,default:""},simple:Boolean}},ht=mt,gt=(0,p.Z)(ht,vt,ft,!1,null,null,null),bt=gt.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t.$slots.image?e("div",{staticClass:"card-image"},[t._t("image")],2):t._e(),t.$slots.header||t.title?e("div",{staticClass:"card-header"},[t._t("header",(function(){return[e("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t.subTitle?e("p",{staticClass:"card-category"},[t._v(t._s(t.subTitle))]):t._e()]}))],2):t._e(),t.$slots.default?e("div",{staticClass:"card-body"},[t._t("default")],2):t._e(),t._t("raw-content"),t.$slots.footer?e("div",{staticClass:"card-footer"},[e("hr"),t._t("footer")],2):t._e()],2)},yt=[],Ct={name:"card",props:{title:String,subTitle:String}},wt=Ct,St=(0,p.Z)(wt,_t,yt,!1,null,null,null),xt=St.exports,kt=function(){var t=this,e=t._self._c;return e("card",[e("template",{slot:"header"},[t.$slots.title||t.title?e("h4",{staticClass:"card-title"},[t._t("title",(function(){return[t._v(" "+t._s(t.title)+" ")]}))],2):t._e(),e("p",{staticClass:"card-category"},[t._t("subTitle",(function(){return[t._v(" "+t._s(t.subTitle)+" ")]}))],2)]),e("div",[e("div",{staticClass:"ct-chart",attrs:{id:t.chartId}}),e("div",{staticClass:"footer"},[e("div",{staticClass:"chart-legend"},[t._t("legend")],2),e("hr"),e("div",{staticClass:"stats"},[t._t("footer")],2),e("div",{staticClass:"pull-right"})])])],2)},Dt=[],Ot=(a(9714),a(8783),a(3948),{name:"chart-card",components:{Card:xt},props:{footerText:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""},chartType:{type:String,default:"Line"},chartOptions:{type:Object,default:function(){return{}}},chartData:{type:Object,default:function(){return{labels:[],series:[]}}}},data:function(){return{chartId:"no-id"}},methods:{initChart:function(t){var e="#".concat(this.chartId);t[this.chartType](e,this.chartData,this.chartOptions)},updateChartId:function(){var t=(new Date).getTime().toString(),e=this.getRandomInt(0,t);this.chartId="div_".concat(e)},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},mounted:function(){var t=this;this.updateChartId(),Promise.resolve().then(a.t.bind(a,9259,23)).then((function(e){var a=e.default||e;t.$nextTick((function(){t.initChart(a)}))}))}}),It=Ot,Tt=(0,p.Z)(It,kt,Dt,!1,null,null,null),Nt=Tt.exports,Lt=function(){var t=this,e=t._self._c;return e("card",[e("div",[e("div",{staticClass:"row"},[t.$slots.header?e("div",{staticClass:"col-5"},[t._t("header")],2):t._e(),t.$slots.content?e("div",{staticClass:"col-7"},[t._t("content")],2):t._e()]),t.$slots.footer?e("div",[e("hr"),t._t("footer")],2):t._e()])])},Mt=[],$t={name:"stats-card",components:{Card:xt}},Ft=$t,Pt=(0,p.Z)(Ft,Lt,Mt,!1,null,null,null),At=Pt.exports,zt=(a(8309),function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar",attrs:{"data-background-color":t.backgroundColor,"data-active-color":t.activeColor}},[e("div",{staticClass:"sidebar-wrapper",attrs:{id:"style-3"}},[e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text",attrs:{href:"#"}},[t._v(" "+t._s(t.title)+" ")])]),t._t("default"),e("ul",{staticClass:"nav"},[t._t("links",(function(){return t._l(t.sidebarLinks,(function(t,a){return e("sidebar-link",{key:a,attrs:{to:t.path,name:t.name,icon:t.icon}})}))}))],2),e("moving-arrow",{attrs:{"move-y":t.arrowMovePx}})],2)])}),Zt=[],jt=(a(4747),a(561),function(){var t=this,e=t._self._c;return e("div",{staticClass:"moving-arrow",style:t.arrowStyle})}),Jt=[],Vt={props:{moveY:{type:Number,default:0}},computed:{arrowStyle:function(){return{transform:"translate3d(0px, ".concat(this.moveY,"px, 0px)")}}}},Et=Vt,Rt=(0,p.Z)(Et,jt,Jt,!1,null,null,null),Ut=Rt.exports,Bt=function(){var t=this,e=t._self._c;return e(t.tag,t._b({tag:"component",staticClass:"nav-item",attrs:{tag:"li"},nativeOn:{click:function(e){return t.hideSidebar.apply(null,arguments)}}},"component",t.$attrs,!1),[e("a",{staticClass:"nav-link"},[t._t("default",(function(){return[t.icon?e("i",{class:t.icon}):t._e(),e("p",[t._v(t._s(t.name))])]}))],2)])},Ht=[],qt={name:"sidebar-link",inheritAttrs:!1,inject:{autoClose:{default:!0},addLink:{default:function(){}},removeLink:{default:function(){}}},props:{name:String,icon:String,tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar.displaySidebar(!1)},isActive:function(){return this.$el.classList.contains("active")}},mounted:function(){this.addLink&&this.addLink(this)},beforeDestroy:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeLink&&this.removeLink(this)}},Gt=qt,Wt=(0,p.Z)(Gt,Bt,Ht,!1,null,null,null),Xt=Wt.exports,Yt={props:{title:{type:String,default:"HelpMates"},backgroundColor:{type:String,default:"black",validator:function(t){var e=["white","black","darkblue"];return-1!==e.indexOf(t)}},activeColor:{type:String,default:"success",validator:function(t){var e=["primary","info","success","warning","danger"];return-1!==e.indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose,addLink:this.addLink,removeLink:this.removeLink}},components:{MovingArrow:Ut,SidebarLink:Xt},computed:{arrowMovePx:function(){return this.linkHeight*this.activeLinkIndex}},data:function(){return{linkHeight:65,activeLinkIndex:0,windowWidth:0,isWindows:!1,hasAutoHeight:!1,links:[]}},methods:{findActiveLink:function(){var t=this;this.links.forEach((function(e,a){e.isActive()&&(t.activeLinkIndex=a)}))},addLink:function(t){var e=this.$slots.links.indexOf(t.$vnode);this.links.splice(e,0,t)},removeLink:function(t){var e=this.links.indexOf(t);e>-1&&this.links.splice(e,1)}},mounted:function(){this.$watch("$route",this.findActiveLink,{immediate:!0})}},Kt=Yt,Qt=(0,p.Z)(Kt,zt,Zt,!1,null,null,null),te=Qt.exports,ee={showSidebar:!1,sidebarLinks:[],displaySidebar:function(t){this.showSidebar=t}},ae={install:function(t){var e=new t({data:{sidebarStore:ee}});t.prototype.$sidebar=e.sidebarStore,t.component("side-bar",te),t.component("sidebar-link",Xt)}},ie=ae,ne=a(9259),oe=a.n(ne),se=(a(714),{components:{StatsCard:At,ChartCard:Nt},data:function(){return{utilizadorCount:0,itensDetalheCount:0,marcacaoCount:0,TodasDoacoesCount:0,statsCards:[{type:"warning",icon:"ti-server",title:"Capacity",value:"105GB",footerText:"Updated now",footerIcon:"ti-reload"},{type:"success",icon:"ti-wallet",title:"Revenue",value:"$1,345",footerText:"Last day",footerIcon:"ti-calendar"},{type:"danger",icon:"ti-pulse",title:"Errors",value:"23",footerText:"In the last hour",footerIcon:"ti-timer"},{type:"info",icon:"ti-twitter-alt",title:"Followers",value:"+45",footerText:"Updated now",footerIcon:"ti-reload"}],usersChart:{data:{labels:["9:00AM","12:00AM","3:00PM","6:00PM","9:00PM","12:00PM","3:00AM","6:00AM"],series:[[287,385,490,562,594,626,698,895,952],[67,152,193,240,387,435,535,642,744],[23,113,67,108,190,239,307,410,410]]},options:{low:0,high:1e3,showArea:!0,height:"245px",axisX:{showGrid:!1},lineSmooth:oe().Interpolation.simple({divisor:3}),showLine:!0,showPoint:!1}},activityChart:{data:{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[542,543,520,680,653,753,326,434,568,610,756,895],[230,293,380,480,503,553,600,664,698,710,736,795]]},options:{seriesBarDistance:10,axisX:{showGrid:!1},height:"245px"}},preferencesChart:{data:{labels:["62%","32%","6%"],series:[62,32,6]},options:{}}}},mounted:function(){this.calculateCounts()},methods:{calculateCounts:function(){var t=localStorage.getItem("utilizador");if(t){var e=JSON.parse(t);this.utilizadorCount=e.length}var a=localStorage.getItem("ItensDetalhe");if(a){var i=JSON.parse(a);this.itensDetalheCount=i.length}var n=localStorage.getItem("marcacao");if(n){var o=JSON.parse(n);this.marcacaoCount=o.length}var s=localStorage.getItem("funcionarios");if(s){var r=JSON.parse(s);this.funcionariosCount=r.length}var l=localStorage.getItem("TodasDoacoes");if(l){var c=JSON.parse(l);this.TodasDoacoesCount=c.length}}},computed:{filteredData:function(){var t=JSON.parse(localStorage.getItem("marcacao")),e=t.filter((function(t){return["Aceite","Rejeitado","Pendente"].includes(t.estado)})),a=e.length,i=[],n=[];return["Aceite","Rejeitado","Pendente"].forEach((function(t){var o=e.filter((function(e){return e.estado===t})).length,s=a>0?(o/a*100).toFixed(2):0;o>0&&(i.push("".concat(t," (").concat(s,"%)")),n.push(o))})),{labels:i,series:n}}}}),re=se,le=(0,p.Z)(re,H,q,!1,null,"6ee1a2be",null),ce=le.exports,ue=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.createActivity.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Imagem:")]),e("div",{staticClass:"file-upload"},[e("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.handleImageUpload}}),e("span",{staticClass:"file-upload-label"},[t._v("Escolher ficheiro")])])]),e("div",{staticClass:"form-group"},[e("label",[t._v("Descrição:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activity.Descricaoo,expression:"activity.Descricaoo"}],domProps:{value:t.activity.Descricaoo},on:{input:function(e){e.target.composing||t.$set(t.activity,"Descricaoo",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Organizaçao:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.Organizacao,expression:"activity.Organizacao"}],attrs:{type:"text"},domProps:{value:t.activity.Organizacao},on:{input:function(e){e.target.composing||t.$set(t.activity,"Organizacao",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Data:")]),e("datepicker",{attrs:{format:"yyyy-MM-dd"},model:{value:t.activity.Data,callback:function(e){t.$set(t.activity,"Data",e)},expression:"activity.Data"}})],1),e("div",{staticClass:"form-group"},[e("label",[t._v("Local:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.Local,expression:"activity.Local"}],attrs:{type:"text"},domProps:{value:t.activity.Local},on:{input:function(e){e.target.composing||t.$set(t.activity,"Local",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Vagas disponiveis:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.VagasDisponiveis,expression:"activity.VagasDisponiveis"}],attrs:{type:"number",min:"1"},domProps:{value:t.activity.VagasDisponiveis},on:{input:function(e){e.target.composing||t.$set(t.activity,"VagasDisponiveis",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Tipo:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.Tipo,expression:"activity.Tipo"}],attrs:{type:"text"},domProps:{value:t.activity.Tipo},on:{input:function(e){e.target.composing||t.$set(t.activity,"Tipo",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Contacto:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.Contacto,expression:"activity.Contacto"}],attrs:{type:"text"},domProps:{value:t.activity.Contacto},on:{input:function(e){e.target.composing||t.$set(t.activity,"Contacto",e.target.value)}}})]),e("button",{attrs:{type:"submit"}},[t._v("Criar atividade")])])])},de=[],pe=a(5082),ve=(a(285),a(1637),a(2062),a(9826),a(8862),a(7540)),fe={components:{Datepicker:ve.Z},data:function(){return{activity:{Descricaoo:"",Organizacao:"",Data:"",Local:"",VagasDisponiveis:"",Tipo:"",Contacto:"",imagem:null}}},methods:{handleImageUpload:function(t){var e=t.target.files[0];this.activity.imagem=URL.createObjectURL(e)},createActivity:function(){var t=this;if(this.validateForm()){var e=JSON.parse(localStorage.getItem("ItensDetalhe"))||[],a=e.find((function(e){return e.Contacto===t.activity.Contacto}));if(a)return void alert("Contacto já registado.");var i=(0,pe.Z)({},this.activity);delete i.imagem;var n=new Date(i.Data);i.Data=n.toISOString().substr(0,10),e.push(i),localStorage.setItem("ItensDetalhe",JSON.stringify(e));var o=JSON.parse(localStorage.getItem("ImagemDetalhe"))||[];o.push({imagem:this.activity.imagem,Tipo:this.activity.Tipo}),localStorage.setItem("ImagemDetalhe",JSON.stringify(o)),this.resetForm(),alert("Atividade criada!")}},resetForm:function(){this.activity={Descricaoo:"",Organizacao:"",Data:"",Local:"",VagasDisponiveis:"",Tipo:"",Contacto:"",imagem:null}},validateForm:function(){for(var t in this.activity)if(!this.activity[t])return alert("Todos os campos têm de ser preenchidos"),!1;return 9===this.activity.Contacto.length&&!isNaN(this.activity.Contacto)||(alert("O contacto deve ser um número com 9 dígitos"),!1)}}},me=fe,he=(0,p.Z)(me,ue,de,!1,null,"1639f802",null),ge=he.exports,be=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card-plain"},[e("div",{staticClass:"table-full-width table-responsive"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.tableData,(function(a,i){return e("tr",{key:i},[a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Descricaoo,expression:"item.Descricaoo"}],attrs:{type:"text"},domProps:{value:a.Descricaoo},on:{input:function(e){e.target.composing||t.$set(a,"Descricaoo",e.target.value)}}})]):e("td",[t._v(t._s(a.Descricaoo))]),a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Tipo,expression:"item.Tipo"}],attrs:{type:"text"},domProps:{value:a.Tipo},on:{input:function(e){e.target.composing||t.$set(a,"Tipo",e.target.value)}}})]):e("td",[t._v(t._s(a.Tipo))]),a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.VagasDisponiveis,expression:"item.VagasDisponiveis"}],attrs:{type:"text"},domProps:{value:a.VagasDisponiveis},on:{input:function(e){e.target.composing||t.$set(a,"VagasDisponiveis",e.target.value)}}})]):e("td",[t._v(t._s(a.VagasDisponiveis))]),a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Data,expression:"item.Data"}],attrs:{type:"text"},domProps:{value:a.Data},on:{input:function(e){e.target.composing||t.$set(a,"Data",e.target.value)}}})]):e("td",[t._v(t._s(a.Data))]),a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Local,expression:"item.Local"}],attrs:{type:"text"},domProps:{value:a.Local},on:{input:function(e){e.target.composing||t.$set(a,"Local",e.target.value)}}})]):e("td",[t._v(t._s(a.Local))]),a.editMode?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.Organizacao,expression:"item.Organizacao"}],attrs:{type:"text"},domProps:{value:a.Organizacao},on:{input:function(e){e.target.composing||t.$set(a,"Organizacao",e.target.value)}}})]):e("td",[t._v(t._s(a.Organizacao))]),e("td",[t._v(t._s(a.Contacto))]),e("td",[a.editMode?e("button",{on:{click:function(e){return t.saveChanges(a)}}},[t._v("Save")]):e("button",{on:{click:function(e){return t.toggleEditMode(a)}}},[t._v("Editar")])]),e("td",[e("button",{on:{click:function(e){return t.deleteItem(i)}}},[t._v("Apagar")])])])})),0)])])])])])},_e=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Descrição")]),e("th",[t._v("Tipo")]),e("th",[t._v("Vagas Disponiveis")]),e("th",[t._v("Data")]),e("th",[t._v("Local")]),e("th",[t._v("Organização")]),e("th",[t._v("Contacto")]),e("th",[t._v("Editar")]),e("th",[t._v("Apagar")])])])}],ye=(a(1249),{data:function(){return{tableData:[]}},mounted:function(){var t=JSON.parse(localStorage.getItem("ItensDetalhe"));t&&(this.tableData=t.map((function(t){return(0,pe.Z)((0,pe.Z)({},t),{},{editMode:!1})})))},methods:{toggleEditMode:function(t){t.editMode=!t.editMode},saveChanges:function(t){t.editMode=!1,this.updateLocalStorage()},deleteItem:function(t){if(confirm("De certeza que quer apagar esta oportunidade?")){var e=this.tableData[t];this.tableData.splice(t,1),this.updateLocalStorage();var a=JSON.parse(localStorage.getItem("marcacao")),i=a.filter((function(t){return t.Contacto!==e.Contacto}));localStorage.setItem("marcacao",JSON.stringify(i))}},updateLocalStorage:function(){localStorage.setItem("ItensDetalhe",JSON.stringify(this.tableData))}}}),Ce=ye,we=(0,p.Z)(Ce,be,_e,!1,null,null,null),Se=we.exports,xe=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card-plain"},[e("div",{staticClass:"table-full-width table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",t._l(t.table2.columns,(function(a){return e("th",{key:a},[t._v(t._s(a))])})),0)]),e("tbody",t._l(t.table2.data,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(a.nome))]),e("td",[t._v(t._s(a.email))]),e("td",[e("button",{on:{click:function(e){return t.confirmDelete(i)}}},[t._v("Apagar Funcionário")])])])})),0)])])])]),e("div",[e("h3",[t._v("Criar Funcionário")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newFuncionario.nome,expression:"newFuncionario.nome"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:t.newFuncionario.nome},on:{input:function(e){e.target.composing||t.$set(t.newFuncionario,"nome",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newFuncionario.email,expression:"newFuncionario.email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:t.newFuncionario.email},on:{input:function(e){e.target.composing||t.$set(t.newFuncionario,"email",e.target.value)}}}),e("button",{attrs:{disabled:!t.isValidEmail(t.newFuncionario.email)},on:{click:t.addFuncionario}},[t._v("Criar Funcionario")]),t.isValidEmail(t.newFuncionario.email)?t._e():e("span",{staticStyle:{color:"red"}},[t._v(" Email Inválido")])])])},ke=[],De=(a(4916),a(7601),{data:function(){return{table2:{title:"Table on Plain Background",subTitle:"Here is a subtitle for this table",columns:["Nome","Email","Ação"],data:[]},newFuncionario:{nome:"",email:""}}},mounted:function(){this.retrieveFuncionarios()},methods:{retrieveFuncionarios:function(){var t=localStorage.getItem("funcionarios");t&&(this.table2.data=JSON.parse(t))},addFuncionario:function(){var t=(0,pe.Z)({},this.newFuncionario);this.table2.data.push(t),this.saveFuncionarios(),this.resetNewFuncionario()},confirmDelete:function(t){confirm("De certeza que quer apagar este funcionário?")&&this.deleteFuncionario(t)},deleteFuncionario:function(t){if(this.table2.data.length>0){var e=this.table2.data.splice(t,1);this.saveFuncionarios(),console.log("Deleted Funcionario:",e)}},saveFuncionarios:function(){localStorage.setItem("funcionarios",JSON.stringify(this.table2.data))},resetNewFuncionario:function(){this.newFuncionario={nome:"",email:""}},isValidEmail:function(t){var e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(t)}}}),Oe=De,Ie=(0,p.Z)(Oe,xe,ke,!1,null,null,null),Te=Ie.exports,Ne=function(){var t=this,e=t._self._c;return e("card",{staticClass:"card-map",attrs:{title:"Sede"}},[e("div",{staticClass:"map"},[e("div",{attrs:{id:"map"}})])])},Le=[],Me={mounted:function(){var t=new window.google.maps.LatLng(41.450592,-8.294208),e={zoom:13,center:t,scrollwheel:!1,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}]},a=new window.google.maps.Map(document.getElementById("map"),e),i=new window.google.maps.Marker({position:t,title:"Hello World!"});i.setMap(a)}},$e=Me,Fe=(0,p.Z)($e,Ne,Le,!1,null,null,null),Pe=Fe.exports,Ae=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card-plain"},[e("div",{staticClass:"table-full-width table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[t._l(t.table2.columns,(function(a){return e("th",{key:a},[t._v(t._s(a))])})),e("th",[t._v("Selecionar Funcionário")])],2)]),e("tbody",t._l(t.table2.data,(function(a,i){return e("tr",{key:i},[t._l(a,(function(a,i){return e("td",{key:i},[t._v(t._s(a))])})),e("td",[e("button",{attrs:{disabled:!a.funcionario||"Aceite"===a.estado||t.isVagasDisponiveisZeroOrLess(a.Contacto)},on:{click:function(e){return t.acceptMarcacao(i)}}},[t._v(" Aceitar ")])]),e("td",["Rejeitado"!==a.estado?e("button",{on:{click:function(e){return t.rejectMarcacao(i)}}},[t._v("Rejeitar")]):t._e()]),e("td",["Aceite"!==a.estado?e("select",{directives:[{name:"model",rawName:"v-model",value:a.funcionario,expression:"row.funcionario"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(a,"funcionario",e.target.multiple?i:i[0])}}},[e("option",{attrs:{value:""}},[t._v("Selecionar Funcionario")]),t._l(t.funcionarios,(function(a){return e("option",{domProps:{value:a.nome}},[t._v(t._s(a.nome))])}))],2):t._e()])],2)})),0)])])])])])},ze=[],Ze={components:{PaperTable:dt},data:function(){return{table2:{title:"Table on Plain Background",subTitle:"Here is a subtitle for this table",columns:["Estado","Data","Contacto","Organização","Username","Funcionário","Aceitar","Rejeitar"],data:[]},funcionarios:[]}},mounted:function(){var t=localStorage.getItem("marcacao");t&&(this.table2.data=JSON.parse(t));var e=localStorage.getItem("funcionarios");e&&(this.funcionarios=JSON.parse(e))},methods:{acceptMarcacao:function(t){if(this.table2.data.length>0){var e=this.table2.data[t];e.estado="Aceite";var a=e.funcionario,i=localStorage.getItem("ItensDetalhe");if(i){for(var n=JSON.parse(i),o=e.Contacto,s=0;s<n.length;s++)if(n[s].Contacto===o){n[s].VagasDisponiveis-=1;break}localStorage.setItem("ItensDetalhe",JSON.stringify(n))}this.table2.data.forEach((function(e,i){i!==t&&e.funcionario===a&&(e.funcionario="")})),a&&localStorage.setItem("funcionario",JSON.stringify(a));var r={estado:e.estado,data:e.Data,organizacao:e.Organizacao,contacto:e.Contacto,username:e.Username,funcionario:a};localStorage.setItem("marcacaoaceite",JSON.stringify(r)),localStorage.setItem("marcacao",JSON.stringify(this.table2.data)),console.log("Accepted Marcacao:",e)}},rejectMarcacao:function(t){if(this.table2.data.length>0){var e=this.table2.data[t];e.funcionario&&(e.funcionario=""),e.estado="Rejeitado",localStorage.removeItem("marcacaoaceite"),localStorage.setItem("marcacao",JSON.stringify(this.table2.data)),console.log("Rejected Marcacao:",e)}},isVagasDisponiveisZeroOrLess:function(t){var e=localStorage.getItem("ItensDetalhe");if(e){var a=JSON.parse(e),i=a.find((function(e){return e.Contacto===t}));return i&&i.VagasDisponiveis<=0}return!1}}},je=Ze,Je=(0,p.Z)(je,Ae,ze,!1,null,null,null),Ve=Je.exports,Ee=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card-plain"},[e("div",{staticClass:"table-full-width table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",t._l(t.table2.columns,(function(a){return e("th",{key:a},[t._v(t._s(a))])})),0)]),e("tbody",t._l(t.table2.data,(function(a,i){return e("tr",{key:i},[t._l(a,(function(a,i){return e("td",{key:i},[t._v(t._s(a))])})),e("td",[e("button",{on:{click:function(e){return t.confirmDelete(i)}}},[t._v("Apagar Utilizador")])])],2)})),0)])])])])])},Re=[],Ue={components:{PaperTable:dt},data:function(){return{table2:{title:"Table on Plain Background",subTitle:"Here is a subtitle for this table",columns:["Tipo","Username","Nome","Email","Password","Ação"],data:[]}}},mounted:function(){var t=localStorage.getItem("utilizador");t&&(this.table2.data=JSON.parse(t))},methods:{confirmDelete:function(t){confirm("Tem a certeza que quer apagar este utilizador?")&&this.deleteUtilizador(t)},deleteUtilizador:function(t){if(this.table2.data.length>0){var e=this.table2.data.splice(t,1);localStorage.setItem("utilizador",JSON.stringify(this.table2.data)),console.log("Deleted Utilizador:",e)}}}},Be=Ue,He=(0,p.Z)(Be,Ee,Re,!1,null,null,null),qe=He.exports,Ge=[{path:"/",component:j,redirect:"/dashboard",children:[{path:"dashboard",name:"dashboard",component:ce},{path:"stats",name:"stats",component:ge},{path:"notifications",name:"notifications",component:Se},{path:"icons",name:"icons",component:Te},{path:"maps",name:"maps",component:Pe},{path:"typography",name:"typography",component:Ve},{path:"table-list",name:"table-list",component:qe}]},{path:"*",component:B}],We=Ge;r["default"].use(m.Z);var Xe=new m.Z({routes:We,linkActiveClass:"active"}),Ye=Xe,Ke=a(9656),Qe=a.n(Ke),ta={install:function(t){t.component("fg-input",Q),t.component("drop-down",ot),t.component("card",xt),t.component("p-button",bt)}},ea=ta,aa=a(5463),ia={install:function(t){t.directive("click-outside",aa.XM)}},na=ia,oa=(a(7310),{install:function(t){t.use(ea),t.use(na),t.use(ie),t.use(Qe())}});
/*!

 =========================================================
 * Vue Paper Dashboard - v1.0.1
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
r["default"].use(oa),new r["default"]({router:Ye,render:function(t){return t(f)}}).$mount("#app")}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,o){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],o=t[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"===typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"===typeof i.then)return i}var o=Object.create(null);a.r(o);var s={};t=t||[null,e({}),e([]),e(e)];for(var r=2&n&&i;"object"==typeof r&&!~t.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach((function(t){s[t]=function(){return i[t]}}));return s["default"]=function(){return i},a.d(o,s),o}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var u=l(a)}for(e&&e(i);c<s.length;c++)o=s[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},i=self["webpackChunkvue_paper_dashboard"]=self["webpackChunkvue_paper_dashboard"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(7197)}));i=a.O(i)})();
//# sourceMappingURL=app-legacy.4dd84bb1.js.map