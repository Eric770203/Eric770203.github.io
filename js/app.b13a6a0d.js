(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],f=0,m=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02f9":function(t,e,n){},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"0805":function(t,e,n){"use strict";var o=n("c59b"),a=n.n(o);a.a},1734:function(t,e,n){},3497:function(t){t.exports=JSON.parse('{"Home":"首页","Activities":"活動項目","Menu":"菜單","Map":"地圖"}')},"3c11":function(t,e,n){"use strict";var o=n("1734"),a=n.n(o);a.a},"51b4":function(t,e,n){t.exports=n.p+"img/food4.a64d832d.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticClass:"img"},[n("v-app-bar",{attrs:{color:"#6A76AB",dark:"","shrink-on-scroll":"",prominent:"",src:t.randomImg,"fade-img-on-scroll":""}},[n("h2",{staticStyle:{"font-size":"45px"}},[t._v("Welcome to "+t._s((new Date).getFullYear())+" TEST")])]),n("v-app-bar",[n("v-tabs",{attrs:{"align-with-title":"",color:"#FFFFFF","background-color":"#708090","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"",dark:""}},[n("v-tab",{on:{click:function(e){return t.goto("/")}}},[n("v-icon",[t._v("mdi-home")]),t._v(" "+t._s(this.$t("Home"))+" ")],1),n("v-tab",{on:{click:function(e){return t.goto("/programList")}}},[t._v(t._s(this.$t("Activities")))]),n("v-tab",{on:{click:function(e){return t.goto("/menu")}}},[t._v(t._s(this.$t("Menu")))]),n("v-tab",{on:{click:function(e){return t.goto("/maps")}}},[t._v(t._s(this.$t("Map")))]),n("v-spacer"),n("v-col",{attrs:{sm:"1"}},[t._v(" "+t._s(t.localeLanguage())+" "),n("v-select",{attrs:{items:t.Language,label:"翻譯"},model:{value:t.selectName,callback:function(e){t.selectName=e},expression:"selectName"}})],1)],1)],1),n("Snackbar",{staticStyle:{height:"0"}}),n("router-view")],1),n("v-card",{attrs:{height:"125px"}},[n("v-footer",[n("v-card",{staticClass:"black lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4",attrs:{icon:""}},[n("v-icon",{attrs:{size:"24px",color:"white"},on:{click:function(n){return t.goto(e)}}},[t._v(t._s(e))])],1)})),1),n("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+"."+t._s((new Date).getMonth()+1)+"."+t._s((new Date).getDate())+" — "),n("strong",[t._v("TEST")])])],1)],1)],1)],1)},i=[],s=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-snackbar",{attrs:{color:"#FF8888"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._v(" "+t._s(this.$store.state.snackbar.msg)+" "),t.showClose?n("v-btn",{attrs:{color:this.$store.state.snackbar.color,text:""},on:{click:t.close}},[t._v("Close")]):t._e()],1)],1)},c=[],l={components:{},data:function(){return{}},computed:{visible:function(){return this.$store.state.snackbar.visible},showClose:function(){return this.$store.state.snackbar.showClose}},methods:{close:function(){this.$store.commit("snackbar/CLOSE_SNACKBAR")}}},u=l,f=n("2877"),m=n("6544"),p=n.n(m),d=n("8336"),v=n("2db4"),h=Object(f["a"])(u,r,c,!1,null,null,null),g=h.exports;p()(h,{VBtn:d["a"],VSnackbar:v["a"]});var b=n("2f62"),x={name:"App",components:{Snackbar:g},data:function(){return{icons:["mdi-home","mdi-phone","mdi-email","mdi-calendar"],selectName:"",Language:["中文","English"],randomImg:"https://picsum.photos/1920/1080?random"}},methods:Object(s["a"])({localeLanguage:function(){"中文"===this.selectName?this.$i18n.locale="zh":"English"===this.selectName&&(this.$i18n.locale="en")},goto:function(t){t!=this.$route.path&&this.$router.push(t),"mdi-home"==t&&(this.$router.push("/"),this.$router.go(0)),"mdi-calendar"==t&&(this.$router.push("/calendar"),this.$router.go(0))},bt:function(){this.test({msg:"尚無內容"})}},Object(b["b"])({test:"snackbar/openSnackbar",count:"snackbar/increment"}))},k=x,_=(n("034f"),n("7496")),w=n("40dc"),y=n("b0af"),C=n("99d9"),A=n("62ad"),O=n("553a"),S=n("132d"),$=n("f6c4"),V=n("b974"),P=n("2fa4"),E=n("71a3"),M=n("fe57"),B=Object(f["a"])(k,a,i,!1,null,null,null),j=B.exports;p()(B,{VApp:_["a"],VAppBar:w["a"],VBtn:d["a"],VCard:y["a"],VCardText:C["a"],VCol:A["a"],VFooter:O["a"],VIcon:S["a"],VMain:$["a"],VSelect:V["a"],VSpacer:P["a"],VTab:E["a"],VTabs:M["a"]});var D=n("f309");o["a"].use(D["a"]);var T=new D["a"]({}),I=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"gif1",attrs:{src:t.gif[0],height:"400",width:"250"}})])},F=[],W={data:function(){return{gif:[n("8d57")]}}},z=W,H=(n("9a66"),Object(f["a"])(z,N,F,!1,null,"b17bb4ae",null)),K=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-expansion-panels",{attrs:{accordion:!1,popout:!0,inset:!1,multiple:!1,focusable:!0,disabled:!1,readonly:!1,flat:!1,hover:!1,tile:!1}},t._l(t.ex,(function(e,o){return n("v-expansion-panel",{key:o},[n("v-expansion-panel-header",[t._v(t._s(o+1)+". "+t._s(e.name)+" -")]),n("v-expansion-panel-content",{staticClass:"formSize"},[t._v(t._s(e.ex))])],1)})),1)],1)},R=[],G={data:function(){return{ex:[{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"}]}},methods:{}},J=G,q=(n("e57f"),n("cd55")),Y=n("49e2"),U=n("c865"),Z=n("0393"),Q=Object(f["a"])(J,L,R,!1,null,"7657b224",null),X=Q.exports;p()(Q,{VExpansionPanel:q["a"],VExpansionPanelContent:Y["a"],VExpansionPanelHeader:U["a"],VExpansionPanels:Z["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-carousel",{staticClass:"formSize",attrs:{cycle:"",height:"550","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":""}},t._l(t.ex,(function(e,o){return n("v-carousel-item",{key:o},[n("img",{attrs:{src:e.foodImg}}),n("v-spacer",{staticStyle:{color:"#000"}},[t._v(" "+t._s(e.name)+" "),n("v-btn",{class:0!=t.favs[o].fav?"red--text":"",attrs:{icon:""},on:{click:function(e){return t.likeFav(o)}}},[n("v-icon",{attrs:{dense:!0}},[t._v("mdi-heart")])],1)],1),n("v-rating",{model:{value:t.ratings[o],callback:function(e){t.$set(t.ratings,o,e)},expression:"ratings[index]"}})],1)})),1)],1)},et=[],nt=(n("b0c0"),n("bc3a")),ot=n.n(nt),at={data:function(){return{ex:[{name:"自訂文字或圖片",count:"",foodImg:n("5e8e")},{name:"自訂文字或圖片",count:"",foodImg:n("d577")},{name:"自訂文字或圖片",count:"",foodImg:n("af93")},{name:"自訂文字或圖片",count:"",foodImg:n("f1e1")},{name:"自訂文字或圖片",count:"",foodImg:n("51b4")},{name:"自訂文字或圖片",count:"",foodImg:n("a1a8")}],favs:this.$store.state.menuinfo.favs,ratings:this.$store.state.menuinfo.ratings}},methods:{ratingNum:function(){alert(this.ratings)},likeFav:function(t){this.$store.commit("menuinfo/set_fav",t),1==this.favs[t].fav?this.updata(t,"+"):this.updata(t,"-")},updata:function(t,e){var n=this;ot.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:e})).then((function(e){n.ex[t].count=e.data})).catch((function(t){console.log(t)}))},info:function(t){var e=this;ot.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:"*"})).then((function(n){e.ex[t].count=n.data})).catch((function(t){console.log(t)}))}}},it=at,st=(n("6cca"),n("5e66")),rt=n("3e35"),ct=n("1d4d"),lt=Object(f["a"])(it,tt,et,!1,null,"7788ce0a",null),ut=lt.exports;p()(lt,{VBtn:d["a"],VCarousel:st["a"],VCarouselItem:rt["a"],VIcon:S["a"],VRating:ct["a"],VSpacer:P["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show"},[n("a",{attrs:{href:"https://www.google.com/maps/dir/?api=1&origin=&destination=台北車站&travelmode=walking"}},[n("v-btn",{attrs:{color:"#1DE9B6"}},[t._v("導航")])],1),n("v-btn",{attrs:{color:"#5DADE2"},on:{click:t.currentPosition}},[t._v("本人位置")]),n("v-btn",{attrs:{color:"#FF7433"},on:{click:t.foodCurrentPosition}},[t._v("餐廳位置")]),n("GmapMap",{ref:"mapRef",attrs:{id:"map",center:t.map.center,zoom:t.map.zoom,"map-type-id":"terrain"}},[t._l(t.infoWindows,(function(t,e){return n("GmapInfoWindow",{key:"info"+e,attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,content:t.infoContent},on:{closeclick:function(e){t.infoOpened=!1}}})})),t._l(t.markers,(function(e,o){return n("GmapMarker",{key:o,attrs:{position:e.position,clickable:!0,draggable:!1,animation:e.Animat,label:e.label,title:e.title,icon:e.icon},on:{click:function(e){return t.markerAnimat(t.google,o)}}})}))],2)],1)},mt=[],pt=(n("d81d"),n("755e")),dt={data:function(){return{map:{zoom:15,center:{lat:25.0476,lng:121.517529}},markers:[{position:{lat:0,lng:0},label:"",Animat:null,title:"A點"},{position:{lat:25.0476,lng:121.517529},label:"",Animat:null,title:"B點",icon:""}],infoWindows:[{infoPosition:{lat:0,lng:0},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:本人位置</H3></p>"}},{infoPosition:{lat:25.0476,lng:121.517529},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:台北車站</H3></p><p>地址:台北市中正區北平西路3號</p><p>電話:0987654321</p><p>電子信箱:test123@test.com</p>"}}],watchID:"",options:{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3}}},methods:{markerAnimat:function(t,e){null!==this.markers[e].Animat?this.markers[e].Animat=null:this.markers[e].Animat=t.maps.Animation.BOUNCE,this.infoWindow(t,e)},infoWindow:function(t,e){1==this.infoWindows[e].infoOpened?this.infoWindows[e].infoOpened=!1:this.infoWindows[e].infoOpened=!0},error:function(t){var e=t.code;1==e?alert("取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。"):2==e?alert("取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。"):3==e?alert("取得地理資訊超過時限，利用PositionOptions.timeout 來定義取得地理資訊的時限。"):alert("未知錯誤:"+e)},success:function(t){var e=this.markers[1].position.lat,n=this.markers[0].position.lng;console.log(e+","+n),console.log(t.coords.latitude+","+t.coords.longitude),this.setCurrentPosition(t.coords.latitude,t.coords.longitude)},currentPosition:function(){navigator.geolocation.clearWatch(this.watchID),navigator.geolocation&&(this.watchID=navigator.geolocation.watchPosition(this.success,this.error,this.options))},setCurrentPosition:function(t,e){this.markers[0].position.lat=t,this.markers[0].position.lng=e,this.infoWindows[0].infoPosition.lat=t,this.infoWindows[0].infoPosition.lng=e,this.$refs.mapRef.$mapPromise.then((function(n){n.panTo({lat:t,lng:e})}))},foodCurrentPosition:function(){var t=this;this.$refs.mapRef.$mapPromise.then((function(e){e.panTo({lat:t.map.center.lat,lng:t.map.center.lng})})),navigator.geolocation.clearWatch(this.watchID)}},mounted:function(){},computed:{google:pt["gmapApi"]}},vt=dt,ht=(n("0805"),Object(f["a"])(vt,ft,mt,!1,null,null,null)),gt=ht.exports;p()(ht,{VBtn:d["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{staticClass:"ma-2",attrs:{items:t.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("v-subheader"),n("v-calendar",{ref:"calendar",attrs:{weekdays:t.weekday,type:t.type,events:t.events,"event-overlap-threshold":30,"event-color":t.getEventColor},on:{change:t.getEvents},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("div",{staticClass:"container"},[t._v(" 敘述:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textA,expression:"textA"}],staticStyle:{"border-style":"solid"},domProps:{value:t.textA},on:{input:function(e){e.target.composing||(t.textA=e.target.value)}}}),n("v-text-field",{domProps:{textContent:t._s("時間: "+t.value)}}),n("div",{staticClass:"row"},[n("v-col",{attrs:{cols:"5",sm:"2"}},[n("v-select",{staticClass:"text-md-center",attrs:{cols:"1",sm:"1",items:t.dates},model:{value:t.dateA,callback:function(e){t.dateA=e},expression:"dateA"}})],1),n("v-col",{attrs:{cols:"5",sm:"2"}},[n("v-select",{staticClass:"text-md-center",attrs:{cols:"1",sm:"1",items:t.dates2},model:{value:t.dateB,callback:function(e){t.dateB=e},expression:"dateB"}})],1),n("v-col",{attrs:{cols:"5",sm:"2"}},[n("v-select",{staticClass:"text-md-center",attrs:{cols:"1",sm:"1",items:t.colors.key},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),n("v-btn",{on:{click:t.btn}},[t._v("输入")]),n("v-btn",{on:{click:t.rebtn}},[t._v("移除")])],1)],1)},xt=[],kt=(n("a434"),n("ac1f"),n("1276"),{name:"calendar",data:function(){return{textA:"",dateA:"",dateB:"",dates:["1點","2點","3點","4點","5點","6點","7點","8點","9點","10點","11點","12點","13點","14點","15點","16點","17點","18點","19點","20點","21點","22點","23點","00點"],dates2:["0分","5分","10分","15分","20分","25分","30分","35分","40分","45分","50分","55分"],value:"",weekday:[0,1,2,3,4,5,6],type:"month",types:["month","week","day","4day"],events:[],color:"",colors:{key:["藍色","紅色","靛青","深紫色","青色","綠色","橘色","灰色"],value:["blue","red","indigo","deep-purple","cyan","green","orange","grey darken-1"]},name:"活動",mintime:null}},methods:{getEvents:function(t){var e=t.start,n=[],o=new Date("".concat(e.date,"T00:00:00"));this.mintime=o.getTime()-864e5;var a=o.getTime()-864e5+24192e5+666e5,i=new Date(a-a%9e5),s=new Date(i.getTime());n.push({name:this.name,start:i,end:s,color:this.colors.value[0],timed:!0}),this.events=n},rebtn:function(){for(var t=0;t<this.events.length;t++){var e=new Date(this.events[t].start),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();this.value==n&&this.events.splice(t,1)}},btn:function(){for(var t="",e=0;e<this.colors.key.length;e++)if(t=this.colors.key[e],this.color==t){this.color=this.colors.value[e];break}if(""==this.dateA||""==this.dateB||""==this.textA||""==this.value)return""!=this.dateA&&""!=this.dateB||alert("时间未选择"),""==this.textA&&alert("内容未填写"),""==this.value&&alert("日期未选择"),!1;for(var n=this.value.split("-"),o=this.dateA.split("點"),a=this.dateB.split("分"),i=this.mintime+864e5*n[2]+36e5*o[0]+6e4*a[0],s=new Date(i-i%9e5),r=new Date(s.getTime()),c=[],l=0;l<this.events.length;l++)c.push({name:this.events[l].name,start:this.events[l].start,end:this.events[l].end,color:this.events[l].color,timed:!0});c.push({name:this.textA,start:s,end:r,color:this.color,timed:!0}),this.color=t,this.events=c},getEventColor:function(t){return t.color}}}),_t=kt,wt=(n("3c11"),n("a4f6")),yt=n("e0c7"),Ct=n("8654"),At=Object(f["a"])(_t,bt,xt,!1,null,null,null),Ot=At.exports;p()(At,{VBtn:d["a"],VCalendar:wt["a"],VCol:A["a"],VSelect:V["a"],VSubheader:yt["a"],VTextField:Ct["a"]}),o["a"].use(I["a"]);var St=new I["a"]({routes:[{path:"/",name:"home",component:K},{path:"/programList",name:"programlist",component:X},{path:"/menu",name:"menu",component:ut},{path:"/maps",name:"googleMap",component:gt},{path:"/calendar",name:"calendar",component:Ot}]}),$t=St,Vt={namespaced:!0,state:{msg:"",visible:!1,showClose:!0,timeout:6e3,color:"cyan darken-2",count:0},mutations:{OPEN_SNACKBAR:function(t,e){t.visible=!0,t.msg=e.msg},CLOSE_SNACKBAR:function(t){t.visible=!1},setShowClose:function(t,e){t.showClose=e},setTimeout:function(t,e){t.timeout=e},setColor:function(t,e){t.color=e},increment:function(t){t.count++}},actions:{openSnackbar:function(t,e){var n=t.state.timeout;t.commit("OPEN_SNACKBAR",{msg:e.msg}),setTimeout((function(){t.commit("CLOSE_SNACKBAR")}),n)},increment:function(t){t.commit("increment")}}},Pt=Vt,Et={namespaced:!0,state:{favs:[{fav:0},{fav:0},{fav:0},{fav:0},{fav:0},{fav:0}],ratings:[0,0,0,0,0,0]},mutations:{set_fav:function(t,e){0==t.favs[e].fav?t.favs[e].fav=1:t.favs[e].fav=0}}},Mt=Et,Bt=o["a"].use(pt,{load:{key:"AIzaSyD9oZzx4EfjooEgKaMiOENK46j9hPoembA",libraries:"places"}}),jt=Bt;o["a"].use(b["a"]);var Dt=new b["a"].Store({modules:{snackbar:Pt,menuinfo:Mt,googleMap:jt}}),Tt=Dt,It=n("a925"),Nt=n("a3df"),Ft=n("3497");o["a"].use(It["a"]);var Wt="zh",zt={zh:Ft,en:Nt},Ht=new It["a"]({locale:Wt,messages:zt}),Kt=Ht,Lt=n("4328"),Rt=n.n(Lt);o["a"].prototype.$qs=Rt.a,o["a"].config.productionTip=!1,new o["a"]({vuetify:T,router:$t,store:Tt,i18n:Kt,render:function(t){return t(j)}}).$mount("#app")},"5e8e":function(t,e,n){t.exports=n.p+"img/food5.2f0df1bf.png"},"6cca":function(t,e,n){"use strict";var o=n("fbc2"),a=n.n(o);a.a},"85ec":function(t,e,n){},"8d57":function(t,e,n){t.exports=n.p+"img/IMG_1644.a79aa852.gif"},"9a66":function(t,e,n){"use strict";var o=n("b723"),a=n.n(o);a.a},a1a8:function(t,e,n){t.exports=n.p+"img/food1.d6c4171b.png"},a3df:function(t){t.exports=JSON.parse('{"Home":"Home","Activities":"Activities","Menu":"Menu","Map":"Map"}')},af93:function(t,e,n){t.exports=n.p+"img/food6.087c3315.png"},b723:function(t,e,n){},c59b:function(t,e,n){},d577:function(t,e,n){t.exports=n.p+"img/food2.326896db.png"},e57f:function(t,e,n){"use strict";var o=n("02f9"),a=n.n(o);a.a},f1e1:function(t,e,n){t.exports=n.p+"img/food3.22a269bd.png"},fbc2:function(t,e,n){}});
//# sourceMappingURL=app.b13a6a0d.js.map