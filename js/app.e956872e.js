(function(t){function n(n){for(var o,r,s=n[0],c=n[1],l=n[2],f=0,p=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var c=e[s];0!==a[c]&&(o=!1)}o&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},a={app:0},i=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"02f9":function(t,n,e){},"034f":function(t,n,e){"use strict";var o=e("85ec"),a=e.n(o);a.a},"0805":function(t,n,e){"use strict";var o=e("c59b"),a=e.n(o);a.a},"2dbd":function(t,n,e){t.exports=e.p+"img/food4.a64d832d.png"},"48ef":function(t,n,e){"use strict";var o=e("a489"),a=e.n(o);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-main",{staticClass:"img"},[e("v-app-bar",{attrs:{color:"#6A76AB",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":""}},[e("h2",{staticStyle:{"font-size":"45px"}},[t._v("Welcome to 2020 YAJA")])]),e("v-app-bar",[e("v-tabs",{attrs:{"align-with-title":"",color:"#FFFFFF","background-color":"#708090","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"",dark:""}},[e("v-tab",{on:{click:function(n){return t.goto("/")}}},[e("v-icon",[t._v("mdi-home")]),t._v("首頁 ")],1),e("v-tab",{on:{click:function(n){return t.goto("/programList")}}},[t._v("活動節目")]),e("v-tab",{on:{click:function(n){return t.goto("/menu")}}},[t._v("菜單")]),e("v-tab",{on:{click:function(n){return t.goto("/maps")}}},[t._v("地點")])],1)],1),e("Snackbar",{staticStyle:{height:"0"}}),e("router-view")],1),e("v-card",{attrs:{height:"125px"}},[e("v-footer",[e("v-card",{staticClass:"black lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[e("v-card-text",t._l(t.icons,(function(n){return e("v-btn",{key:n,staticClass:"mx-4",attrs:{icon:""}},[e("v-icon",{attrs:{size:"24px",color:"white"},on:{click:function(e){return t.goto(n)}}},[t._v(t._s(n))])],1)})),1),e("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+"."+t._s((new Date).getMonth()+1)+"."+t._s((new Date).getDate())+" — "),e("strong",[t._v("YAJA")])])],1)],1)],1)],1)},i=[],r=e("5530"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-snackbar",{attrs:{color:"#FF8888"},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[t._v(" "+t._s(this.$store.state.snackbar.msg)+" "),t.showClose?e("v-btn",{attrs:{color:this.$store.state.snackbar.color,text:""},on:{click:t.close}},[t._v("Close")]):t._e()],1)],1)},c=[],l={components:{},data:function(){return{}},computed:{visible:function(){return this.$store.state.snackbar.visible},showClose:function(){return this.$store.state.snackbar.showClose}},methods:{close:function(){this.$store.commit("snackbar/CLOSE_SNACKBAR")}}},u=l,f=e("2877"),p=e("6544"),m=e.n(p),d=e("8336"),h=e("2db4"),v=Object(f["a"])(u,s,c,!1,null,null,null),g=v.exports;m()(v,{VBtn:d["a"],VSnackbar:h["a"]});var b=e("2f62"),k={name:"App",components:{Snackbar:g},data:function(){return{icons:["mdi-home","mdi-phone","mdi-email","mdi-calendar"]}},methods:Object(r["a"])({goto:function(t){t!=this.$route.path&&this.$router.push(t),"mdi-home"==t&&(this.$router.push("/"),this.$router.go(0))},bt:function(){this.test({msg:"尚無內容"})}},Object(b["b"])({test:"snackbar/openSnackbar",count:"snackbar/increment"}))},x=k,w=(e("034f"),e("7496")),_=e("40dc"),y=e("b0af"),C=e("99d9"),O=e("553a"),A=e("132d"),P=e("f6c4"),S=e("71a3"),$=e("fe57"),V=Object(f["a"])(x,a,i,!1,null,null,null),E=V.exports;m()(V,{VApp:w["a"],VAppBar:_["a"],VBtn:d["a"],VCard:y["a"],VCardText:C["a"],VFooter:O["a"],VIcon:A["a"],VMain:P["a"],VTab:S["a"],VTabs:$["a"]});var j=e("f309");o["a"].use(j["a"]);var F=new j["a"]({}),I=e("8c4f"),W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-sparkline",{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)},B=[],D={data:function(){return{width:2,radius:10,padding:8,lineCap:"round",gradient:[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],value:[0,8,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",fill:!1,type:"trend",autoLineWidth:!1}}},M=D,T=e("7f2e"),z=Object(f["a"])(M,W,B,!1,null,null,null),K=z.exports;m()(z,{VSparkline:T["a"]});var N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-expansion-panels",{attrs:{accordion:!1,popout:!0,inset:!1,multiple:!1,focusable:!0,disabled:!1,readonly:!1,flat:!1,hover:!1,tile:!1}},t._l(t.ex,(function(n,o){return e("v-expansion-panel",{key:o},[e("v-expansion-panel-header",[t._v(t._s(o+1)+". "+t._s(n.name)+" -")]),e("v-expansion-panel-content",{staticClass:"formSize"},[t._v(t._s(n.ex))])],1)})),1)],1)},R=[],L={data:function(){return{ex:[{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"},{name:"自訂標題",ex:"一些內容或圖片"}]}},methods:{}},H=L,J=(e("e57f"),e("cd55")),q=e("49e2"),G=e("c865"),Y=e("0393"),U=Object(f["a"])(H,N,R,!1,null,"7657b224",null),Z=U.exports;m()(U,{VExpansionPanel:J["a"],VExpansionPanelContent:q["a"],VExpansionPanelHeader:G["a"],VExpansionPanels:Y["a"]});var Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-carousel",{staticClass:"formSize",attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":""}},t._l(t.ex,(function(n,o){return e("v-carousel-item",{key:o},[e("img",{attrs:{src:n.foodImg}}),e("v-spacer",{staticStyle:{color:"#000"}},[t._v(" "+t._s(n.name)+" "),e("v-btn",{class:0!=t.favs[o].fav?"red--text":"",attrs:{icon:""},on:{click:function(n){return t.likeFav(o)}}},[e("v-icon",{attrs:{dense:!0}},[t._v("mdi-heart")])],1)],1)],1)})),1)],1)},X=[],tt=(e("b0c0"),e("bc3a")),nt=e.n(tt),et={data:function(){return{ex:[{name:"自訂文字或圖片",count:"",foodImg:e("7f53")},{name:"自訂文字或圖片",count:"",foodImg:e("9578")},{name:"自訂文字或圖片",count:"",foodImg:e("deba")},{name:"自訂文字或圖片",count:"",foodImg:e("c1d9")},{name:"自訂文字或圖片",count:"",foodImg:e("2dbd")},{name:"自訂文字或圖片",count:"",foodImg:e("c677")}],favs:this.$store.state.menuinfo.favs}},methods:{likeFav:function(t){this.$store.commit("menuinfo/set_fav",t),1==this.favs[t].fav?this.updata(t,"+"):this.updata(t,"-")},updata:function(t,n){var e=this;nt.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:n})).then((function(n){e.ex[t].count=n.data})).catch((function(t){console.log(t)}))},info:function(t){var n=this;nt.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:"*"})).then((function(e){n.ex[t].count=e.data})).catch((function(t){console.log(t)}))}}},ot=et,at=(e("48ef"),e("5e66")),it=e("3e35"),rt=e("2fa4"),st=Object(f["a"])(ot,Q,X,!1,null,"66b9f5f6",null),ct=st.exports;m()(st,{VBtn:d["a"],VCarousel:at["a"],VCarouselItem:it["a"],VIcon:A["a"],VSpacer:rt["a"]});var lt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"show"},[e("a",{attrs:{href:"https://www.google.com/maps/dir/?api=1&origin=&destination=台北車站&travelmode=walking"}},[e("v-btn",{attrs:{color:"#1DE9B6"}},[t._v("導航")])],1),e("v-btn",{attrs:{color:"#5DADE2"},on:{click:t.currentPosition}},[t._v("本人位置")]),e("v-btn",{attrs:{color:"#FF7433"},on:{click:t.foodCurrentPosition}},[t._v("餐廳位置")]),e("GmapMap",{ref:"mapRef",attrs:{id:"map",center:t.map.center,zoom:t.map.zoom,"map-type-id":"terrain"}},[t._l(t.infoWindows,(function(t,n){return e("GmapInfoWindow",{key:"info"+n,attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,content:t.infoContent},on:{closeclick:function(n){t.infoOpened=!1}}})})),t._l(t.markers,(function(n,o){return e("GmapMarker",{key:o,attrs:{position:n.position,clickable:!0,draggable:!1,animation:n.Animat,label:n.label,title:n.title,icon:n.icon},on:{click:function(n){return t.markerAnimat(t.google,o)}}})}))],2)],1)},ut=[],ft=(e("d81d"),e("755e")),pt={data:function(){return{map:{zoom:15,center:{lat:25.0476,lng:121.517529}},markers:[{position:{lat:0,lng:0},label:"",Animat:null,title:"A點"},{position:{lat:25.0476,lng:121.517529},label:"",Animat:null,title:"B點",icon:""}],infoWindows:[{infoPosition:{lat:0,lng:0},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:本人位置</H3></p>"}},{infoPosition:{lat:25.0476,lng:121.517529},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:台北車站</H3></p><p>地址:台北市中正區北平西路3號</p><p>電話:0987654321</p><p>電子信箱:test123@test.com</p>"}}],watchID:"",options:{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3}}},methods:{markerAnimat:function(t,n){null!==this.markers[n].Animat?this.markers[n].Animat=null:this.markers[n].Animat=t.maps.Animation.BOUNCE,this.infoWindow(t,n)},infoWindow:function(t,n){1==this.infoWindows[n].infoOpened?this.infoWindows[n].infoOpened=!1:this.infoWindows[n].infoOpened=!0},error:function(t){var n=t.code;1==n?alert("取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。"):2==n?alert("取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。"):3==n?alert("取得地理資訊超過時限，利用PositionOptions.timeout 來定義取得地理資訊的時限。"):alert("未知錯誤:"+n)},success:function(t){var n=this.markers[1].position.lat,e=this.markers[0].position.lng;console.log(n+","+e),console.log(t.coords.latitude+","+t.coords.longitude),this.setCurrentPosition(t.coords.latitude,t.coords.longitude)},currentPosition:function(){navigator.geolocation.clearWatch(this.watchID),navigator.geolocation&&(this.watchID=navigator.geolocation.watchPosition(this.success,this.error,this.options))},setCurrentPosition:function(t,n){this.markers[0].position.lat=t,this.markers[0].position.lng=n,this.infoWindows[0].infoPosition.lat=t,this.infoWindows[0].infoPosition.lng=n,this.$refs.mapRef.$mapPromise.then((function(e){e.panTo({lat:t,lng:n})}))},foodCurrentPosition:function(){var t=this;this.$refs.mapRef.$mapPromise.then((function(n){n.panTo({lat:t.map.center.lat,lng:t.map.center.lng})})),navigator.geolocation.clearWatch(this.watchID)}},mounted:function(){},computed:{google:ft["gmapApi"]}},mt=pt,dt=(e("0805"),Object(f["a"])(mt,lt,ut,!1,null,null,null)),ht=dt.exports;m()(dt,{VBtn:d["a"]}),o["a"].use(I["a"]);var vt=new I["a"]({routes:[{path:"/",name:"home",component:K},{path:"/programList",name:"programlist",component:Z},{path:"/menu",name:"menu",component:ct},{path:"/maps",name:"googleMap",component:ht}]}),gt=vt,bt={namespaced:!0,state:{msg:"",visible:!1,showClose:!0,timeout:6e3,color:"cyan darken-2",count:0},mutations:{OPEN_SNACKBAR:function(t,n){t.visible=!0,t.msg=n.msg},CLOSE_SNACKBAR:function(t){t.visible=!1},setShowClose:function(t,n){t.showClose=n},setTimeout:function(t,n){t.timeout=n},setColor:function(t,n){t.color=n},increment:function(t){t.count++}},actions:{openSnackbar:function(t,n){var e=t.state.timeout;t.commit("OPEN_SNACKBAR",{msg:n.msg}),setTimeout((function(){t.commit("CLOSE_SNACKBAR")}),e)},increment:function(t){t.commit("increment")}}},kt=bt,xt={namespaced:!0,state:{favs:[{fav:0},{fav:0},{fav:0},{fav:0},{fav:0},{fav:0}]},mutations:{set_fav:function(t,n){0==t.favs[n].fav?t.favs[n].fav=1:t.favs[n].fav=0}}},wt=xt,_t=o["a"].use(ft,{load:{key:"AIzaSyD9oZzx4EfjooEgKaMiOENK46j9hPoembA",libraries:"places"}}),yt=_t;o["a"].use(b["a"]);var Ct=new b["a"].Store({modules:{snackbar:kt,menuinfo:wt,googleMap:yt}}),Ot=Ct,At=e("4328"),Pt=e.n(At);o["a"].prototype.$qs=Pt.a,o["a"].config.productionTip=!1,new o["a"]({vuetify:F,router:gt,store:Ot,render:function(t){return t(E)}}).$mount("#app")},"7f53":function(t,n,e){t.exports=e.p+"img/food5.2f0df1bf.png"},"85ec":function(t,n,e){},9578:function(t,n,e){t.exports=e.p+"img/food2.326896db.png"},a489:function(t,n,e){},c1d9:function(t,n,e){t.exports=e.p+"img/food3.22a269bd.png"},c59b:function(t,n,e){},c677:function(t,n,e){t.exports=e.p+"img/food1.d6c4171b.png"},deba:function(t,n,e){t.exports=e.p+"img/food6.087c3315.png"},e57f:function(t,n,e){"use strict";var o=e("02f9"),a=e.n(o);a.a}});
//# sourceMappingURL=app.e956872e.js.map