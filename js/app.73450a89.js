(function(t){function n(n){for(var e,s,r=n[0],c=n[1],l=n[2],f=0,p=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,n=0;n<a.length;n++){for(var o=a[n],e=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(e=!1)}e&&(a.splice(n--,1),t=s(s.s=o[0]))}return t}var e={},i={app:0},a=[];function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,n,o){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)s.d(o,e,function(n){return t[n]}.bind(null,e));return o},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,n,o){t.exports=o("56d7")},"034f":function(t,n,o){"use strict";var e=o("85ec"),i=o.n(e);i.a},"0805":function(t,n,o){"use strict";var e=o("c59b"),i=o.n(e);i.a},"20c9":function(t,n,o){"use strict";var e=o("a912"),i=o.n(e);i.a},"2dbd":function(t,n,o){t.exports=o.p+"img/food4.a64d832d.png"},"56d7":function(t,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var e=o("2b0e"),i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-app",[o("v-main",{staticClass:"img"},[o("div",{staticStyle:{"text-align":"center"}},[o("h2",{staticStyle:{"font-size":"50px"}},[t._v("Welcome to 2020 YAJA")]),o("router-link",{staticStyle:{padding:"0px 20px 0px 0px","font-size":"30px"},attrs:{to:"/ProgramList"}},[t._v("活動節目")]),t._v(" "),o("router-link",{staticStyle:{padding:"0px 20px 0px 0px","font-size":"30px"},attrs:{to:"/Menu"}},[t._v("菜單")]),t._v(" "),o("router-link",{staticStyle:{padding:"0px 20px 0px 0px","font-size":"30px"},attrs:{to:"/Maps"}},[t._v("地點")]),t._v(" "),o("v-btn",{on:{click:t.bt}},[t._v("msg")]),o("Snackbar",{staticStyle:{height:"0"}})],1),o("router-view")],1)],1)},a=[],s=o("5530"),r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("v-snackbar",{attrs:{color:"#FF8888"},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[t._v(" "+t._s(this.$store.state.snackbar.msg)+" "),t.showClose?o("v-btn",{attrs:{color:this.$store.state.snackbar.color,text:""},on:{click:t.close}},[t._v("Close")]):t._e()],1)],1)},c=[],l={components:{},data:function(){return{}},computed:{visible:function(){return this.$store.state.snackbar.visible},showClose:function(){return this.$store.state.snackbar.showClose}},methods:{close:function(){this.$store.commit("snackbar/CLOSE_SNACKBAR")}}},u=l,f=o("2877"),p=o("6544"),m=o.n(p),d=o("8336"),h=o("2db4"),v=Object(f["a"])(u,r,c,!1,null,null,null),g=v.exports;m()(v,{VBtn:d["a"],VSnackbar:h["a"]});var b=o("2f62"),x={name:"App",components:{Snackbar:g},data:function(){return{}},methods:Object(s["a"])({bt:function(){this.test({msg:"尚無內容"})}},Object(b["b"])({test:"snackbar/openSnackbar",count:"snackbar/increment"}))},_=x,k=(o("034f"),o("7496")),w=o("f6c4"),y=Object(f["a"])(_,i,a,!1,null,null,null),O=y.exports;m()(y,{VApp:k["a"],VBtn:d["a"],VMain:w["a"]});var A=o("f309");e["a"].use(A["a"]);var C=new A["a"]({}),S=o("8c4f"),P=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"show_content"},t._l(t.ex,(function(n,e){return o("div",{key:e},[null==n.ex?o("p",[t._v(t._s(e+1)+". "+t._s(n.name)+" -")]):o("p",[t._v(" "+t._s(e+1)+"."+t._s(n.name)+" - "),o("a",{staticStyle:{"font-size":"10px"},attrs:{href:"#"},on:{click:function(o){return t.dataText(n)}}},[t._v("點擊展開")]),o("br"),n.exing?o("span",{staticStyle:{"font-size":"18px",padding:"0px 0px 0px 40px"}},[t._v(t._s(n.ex))]):t._e()])])})),0)},$=[],j={data:function(){return{ex:[{name:"致詞"},{name:"表演",ex:"內容或圖片",exing:!1},{name:"用餐"},{name:"表演",ex:"內容或圖片",exing:!1},{name:"抽獎"},{name:"表演",ex:"內容或圖片",exing:!1},{name:"用餐"},{name:"抽獎"},{name:"合照"}]}},methods:{dataText:function(t){t.exing=!t.exing}}},E=j,M=(o("20c9"),Object(f["a"])(E,P,$,!1,null,"f891baf2",null)),I=M.exports,W=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"show_content"},t._l(t.ex,(function(n,e){return o("div",{key:e},[t._v(" "+t._s(e+1)+". "+t._s(n.name)+" "),o("v-btn",{class:0!=t.favs[e].fav?"red--text":"",attrs:{icon:""},on:{click:function(n){return t.likeFav(e)}}},[o("v-icon",{attrs:{dense:!0}},[t._v("mdi-heart")])],1),o("img",{attrs:{src:n.foodImg}})],1)})),0)},B=[],z=(o("b0c0"),o("bc3a")),K=o.n(z),N={data:function(){return{ex:[{name:"測試圖1",count:"",foodImg:o("7f53")},{name:"測試圖2",count:"",foodImg:o("9578")},{name:"測試圖3",count:"",foodImg:o("deba")},{name:"測試圖4",count:"",foodImg:o("c1d9")},{name:"測試圖5",count:"",foodImg:o("2dbd")},{name:"測試圖6",count:"",foodImg:o("c677")}],favs:this.$store.state.menuinfo.favs}},methods:{likeFav:function(t){this.$store.commit("menuinfo/set_fav",t),1==this.favs[t].fav?this.updata(t,"+"):this.updata(t,"-")},updata:function(t,n){var o=this;K.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:n})).then((function(n){o.ex[t].count=n.data})).catch((function(t){console.log(t)}))},info:function(t){var n=this;K.a.post("http://localhost:8081/likeMenu/menu",this.$qs.stringify({name:this.ex[t].name,sign:"*"})).then((function(o){n.ex[t].count=o.data})).catch((function(t){console.log(t)}))}}},T=N,D=o("132d"),R=Object(f["a"])(T,W,B,!1,null,null,null),V=R.exports;m()(R,{VBtn:d["a"],VIcon:D["a"]});var F=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"show"},[o("a",{attrs:{href:"https://www.google.com/maps/dir/?api=1&origin=&destination=台北車站&travelmode=walking"}},[o("v-btn",{attrs:{color:"#1DE9B6"}},[t._v("導航")])],1),o("v-btn",{attrs:{color:"#5DADE2"},on:{click:t.currentPosition}},[t._v("本人位置")]),o("v-btn",{attrs:{color:"#FF7433"},on:{click:t.foodCurrentPosition}},[t._v("餐廳位置")]),o("GmapMap",{ref:"mapRef",attrs:{id:"map",center:t.map.center,zoom:t.map.zoom,"map-type-id":"terrain"}},[t._l(t.infoWindows,(function(t,n){return o("GmapInfoWindow",{key:"info"+n,attrs:{options:t.infoOptions,position:t.infoPosition,opened:t.infoOpened,content:t.infoContent},on:{closeclick:function(n){t.infoOpened=!1}}})})),t._l(t.markers,(function(n,e){return o("GmapMarker",{key:e,attrs:{position:n.position,clickable:!0,draggable:!1,animation:n.Animat,label:n.label,title:n.title,icon:n.icon},on:{click:function(n){return t.markerAnimat(t.google,e)}}})}))],2)],1)},H=[],L=(o("d81d"),o("755e")),q={data:function(){return{map:{zoom:15,center:{lat:25.0476,lng:121.517529}},markers:[{position:{lat:0,lng:0},label:"",Animat:null,title:"A點"},{position:{lat:25.0476,lng:121.517529},label:"",Animat:null,title:"B點",icon:"http://maps.google.com/mapfiles/kml/shapes/snack_bar.png"}],infoWindows:[{infoPosition:{lat:0,lng:0},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:本人位置</H3></p>"}},{infoPosition:{lat:25.0476,lng:121.517529},infoContent:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35},content:"<p><H3>資訊:台北車站</H3></p><p>地址:台北市中正區北平西路3號</p><p>電話:0987654321</p><p>電子信箱:test123@test.com</p>"}}],watchID:"",options:{enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3}}},methods:{markerAnimat:function(t,n){null!==this.markers[n].Animat?this.markers[n].Animat=null:this.markers[n].Animat=t.maps.Animation.BOUNCE,this.infoWindow(t,n)},infoWindow:function(t,n){1==this.infoWindows[n].infoOpened?this.infoWindows[n].infoOpened=!1:this.infoWindows[n].infoOpened=!0},error:function(t){var n=t.code;1==n?alert("取得地理資訊失敗，因為此頁面沒有獲取地理位置信息的權限。"):2==n?alert("取得地理資訊失敗，因為至少有一個地理位置信息內的資訊回傳了錯誤。"):3==n?alert("取得地理資訊超過時限，利用PositionOptions.timeout 來定義取得地理資訊的時限。"):alert("未知錯誤:"+n)},success:function(t){var n=this.markers[1].position.lat,o=this.markers[0].position.lng;console.log(n+","+o),console.log(t.coords.latitude+","+t.coords.longitude),this.setCurrentPosition(t.coords.latitude,t.coords.longitude)},currentPosition:function(){"geolocation"in navigator&&(navigator.geolocation.clearWatch(this.watchID),this.watchID=navigator.geolocation.watchPosition(this.success,this.error,this.options))},setCurrentPosition:function(t,n){this.markers[0].position.lat=t,this.markers[0].position.lng=n,this.infoWindows[0].infoPosition.lat=t,this.infoWindows[0].infoPosition.lng=n,this.$refs.mapRef.$mapPromise.then((function(o){o.panTo({lat:t,lng:n})}))},foodCurrentPosition:function(){var t=this;this.$refs.mapRef.$mapPromise.then((function(n){n.panTo({lat:t.map.center.lat,lng:t.map.center.lng})})),navigator.geolocation.clearWatch(this.watchID)}},mounted:function(){},computed:{google:L["gmapApi"]}},G=q,J=(o("0805"),Object(f["a"])(G,F,H,!1,null,null,null)),U=J.exports;m()(J,{VBtn:d["a"]}),e["a"].use(S["a"]);var Y=new S["a"]({routes:[{path:"/ProgramList",name:"programlist",component:I},{path:"/Menu",name:"menu",component:V},{path:"/Maps",name:"googleMap",component:U}]}),Z=Y,Q={namespaced:!0,state:{msg:"",visible:!1,showClose:!0,timeout:6e3,color:"cyan darken-2",count:0},mutations:{OPEN_SNACKBAR:function(t,n){t.visible=!0,t.msg=n.msg},CLOSE_SNACKBAR:function(t){t.visible=!1},setShowClose:function(t,n){t.showClose=n},setTimeout:function(t,n){t.timeout=n},setColor:function(t,n){t.color=n},increment:function(t){t.count++}},actions:{openSnackbar:function(t,n){var o=t.state.timeout;t.commit("OPEN_SNACKBAR",{msg:n.msg}),setTimeout((function(){t.commit("CLOSE_SNACKBAR")}),o)},increment:function(t){t.commit("increment")}}},X=Q,tt={namespaced:!0,state:{favs:[{fav:0},{fav:0},{fav:0},{fav:0},{fav:0},{fav:0}]},mutations:{set_fav:function(t,n){0==t.favs[n].fav?t.favs[n].fav=1:t.favs[n].fav=0}}},nt=tt,ot=e["a"].use(L,{load:{key:"AIzaSyD9oZzx4EfjooEgKaMiOENK46j9hPoembA",libraries:"places"}}),et=ot;e["a"].use(b["a"]);var it=new b["a"].Store({modules:{snackbar:X,menuinfo:nt,googleMap:et}}),at=it,st=o("4328"),rt=o.n(st);e["a"].prototype.$qs=rt.a,e["a"].config.productionTip=!1,new e["a"]({vuetify:C,router:Z,store:at,render:function(t){return t(O)}}).$mount("#app")},"7f53":function(t,n,o){t.exports=o.p+"img/food5.2f0df1bf.png"},"85ec":function(t,n,o){},9578:function(t,n,o){t.exports=o.p+"img/food2.326896db.png"},a912:function(t,n,o){},c1d9:function(t,n,o){t.exports=o.p+"img/food3.22a269bd.png"},c59b:function(t,n,o){},c677:function(t,n,o){t.exports=o.p+"img/food1.d6c4171b.png"},deba:function(t,n,o){t.exports=o.p+"img/food6.087c3315.png"}});
//# sourceMappingURL=app.73450a89.js.map