(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"259b":function(t,e){t.exports={title:"北京南天",baseUrl:"http://localhost:9018",baseApi:"/",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},"43bc":function(t,e,n){"use strict";n.r(e);var a=n("e017"),i=n.n(a),r=n("21a1"),s=n.n(r),o=new i.a({id:"icon-app",use:"icon-app-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-app"><path fill="#ffffff" d="M417.798203 1016.25308c28.670112 16.894887 51.196629 5.631629 51.196629-28.670112V588.76123c0-34.301741-23.038483-68.603482-51.196629-85.49837L87.579948 297.964379c-28.670112-11.263258-51.196629 0-51.196629 28.670112v398.821738c0 34.301741 23.038483 68.603482 51.196629 85.49837l330.218255 205.298481zM138.776577 172.532639c-28.670112 16.894887-28.670112 39.93337 0 56.828258l325.098592 205.298481c28.670112 16.894887 68.603482 16.894887 96.761628 5.631629L885.73539 274.925896c28.670112-16.894887 28.670112-39.93337 0-56.828258L543.229944 12.799157c-23.038483-16.894887-68.603482-16.894887-96.761629 0L138.776577 172.532639z m421.86022 815.050329c0 34.301741 23.038483 45.565 51.196629 28.670112l325.098592-165.365111c28.670112-16.894887 51.196629-51.196629 51.196629-85.49837v-399.333704c0-34.301741-23.038483-45.565-51.196629-28.670112l-325.098592 165.365111c-28.670112 16.894887-51.196629 51.196629-51.196629 85.49837v399.333704z" /></symbol>'});s.a.add(o);e["default"]=o},"51ff":function(t,e,n){var a={"./app.svg":"43bc"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="51ff"},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"formatDate",(function(){return st})),n.d(a,"hidePhone",(function(){return ct}));n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)},s=[],o={name:"App"},c=o,u=(n("5c0b"),n("2877")),f=Object(u["a"])(c,r,s,!1,null,null,null),l=f.exports,d=(n("99af"),n("4160"),n("d3b7"),n("159b"),n("ddb0"),n("d0ff")),p=n("8c4f"),h=[{path:"/",redirect:"/gallery"}],m=n("d56b");m.keys().forEach((function(t){var e=m(t);h=[].concat(Object(d["a"])(h),Object(d["a"])(e.default||e))})),i["a"].use(p["a"]);var v=function(){return new p["a"]({scrollBehavior:function(){return{y:0}},routes:h})},b=v();var y=b,w=n("4eb5"),g=n.n(w);n("fb6a"),n("b0c0"),n("ac1f"),n("5319");function x(t){if(t)return t.charAt(0).toUpperCase()+t.slice(1)}function A(t){return/^\S+\.vue$/.test(t)&&t.replace(/^\S+\/(\w+)\.vue$/,(function(t,e){return x(e)}))}var E=n("ffe0");E.keys().forEach((function(t){var e=E(t),n=A(t),a="index"===n.toLowerCase()?x(e.default.name):n;i["a"].component(a,e.default||e)}));n("d81d");var _=n("c00a");i["a"].component("svg-icon",_["default"]);var S=function(t){return t.keys().map(t)},O=n("51ff");S(O);var T=n("2f62"),D={},k=D,j={detail:null},U={SET_DETAIL:function(t,e){t.detail=e}},$={setDetail:function(t,e){var n=t.commit;n("SET_DETAIL",e)}},N={state:j,mutations:U,actions:$},C={wxInfo:null},M={SET_WXINFO:function(t,e){t.wxInfo=e}},I={setWxInfo:function(t,e){var n=t.commit;n("SET_WXINFO",e)}},P={state:C,mutations:M,actions:I},L=n("0e44");i["a"].use(T["a"]);var F=new T["a"].Store({modules:{morningPaper:N,wechart:P},getters:k,plugins:[Object(L["a"])()]}),R=F,X=n("da54"),z=n.n(X);n("77ed");function B(t){t.directive("animate",{inserted:function(t,e){var n=e.value,a=" animated ".concat(n.name);t.className+=a,t.style.animationDelay=n.delay+"ms"}})}var W={install:B},J=n("f121"),q=(n("e17f"),n("2241")),H=(n("0cc8"),n("3104")),V=(n("d82d"),n("7278")),Y=(n("81e6"),n("9ffb")),G=(n("4d48"),n("d1e1")),K=(n("4b0a"),n("2bb1")),Q=(n("7844"),n("5596")),Z=(n("480b"),n("a37c")),tt=(n("c3a6"),n("ad06")),et=(n("4056"),n("44bf")),nt=(n("be7f"),n("565f")),at=(n("38d5"),n("772a")),it=(n("f1dc"),n("6e47")),rt=(n("66b9"),n("b650"));i["a"].use(rt["a"]),i["a"].use(it["a"]),i["a"].use(at["a"]),i["a"].use(nt["a"]),i["a"].use(et["a"]),i["a"].use(tt["a"]),i["a"].use(Z["a"]),i["a"].use(Q["a"]),i["a"].use(K["a"]),i["a"].use(G["a"]),i["a"].use(Y["a"]),i["a"].use(V["a"]),i["a"].use(H["a"]),i["a"].use(q["a"]);n("9536"),n("499a"),n("4de4"),n("b64b"),n("4d63"),n("25f0");function st(t,e){if(void 0!==t){var n=new Date(t);/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(var i in a)if(new RegExp("(".concat(i,")")).test(e)){var r=a[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:ot(r))}return e}}function ot(t){return("00"+t).substr(t.length)}function ct(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}Object.keys(a).forEach((function(t){return i["a"].filter(t,a[t])})),i["a"].prototype.$formatDate=i["a"].filter("formatDate"),i["a"].prototype.$hidePhone=i["a"].filter("hidePhone"),i["a"].use(W),i["a"].use(z.a),i["a"].prototype.$cdn=J["$cdn"],i["a"].config.productionTip=!1,i["a"].use(g.a),g.a.config.autoSetContainer=!0,y.beforeEach((function(t,e,n){document.title=t.meta.title||"北京南天",n()})),new i["a"]({el:"#app",router:y,store:R,render:function(t){return t(l)}})},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"6b66":function(t,e,n){},7609:function(t,e,n){var a={"./env.development":"259b","./env.development.js":"259b","./env.production":"f1e0","./env.production.js":"f1e0","./env.staging":"e101","./env.staging.js":"e101"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="7609"},9536:function(t,e,n){},"9c0c":function(t,e,n){},"9faf":function(t,e,n){"use strict";n.r(e);n("d3b7");e["default"]=[{path:"/gallery",name:"gallery",component:function(){return n.e("chunk-09d73dcd").then(n.bind(null,"5bfe"))},meta:{title:"2021，感恩有你！",keepAlive:!1}}]},af81:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["vue-countdown-component",{theme2:1!==t.theme},{ie:t.isIE}]},[t._l(t.timeArray,(function(e,a){return[n("div",{key:a,class:["time-box"]},[n("div",{staticClass:"base"},[t._v(" "+t._s(e)+" "),n("div",{staticClass:"base-b"},[t._v(t._s(t.timeArrayT[a]))])]),n("div",{class:["face",{anime:t.isAnimate[a]}],on:{animationend:function(e){return t.onAnimateEnd(a)}}},[t._v(" "+t._s(t.timeArrayT[a])+" ")]),n("div",{class:["back",{anime:t.isAnimate[a]}]},[t._v(t._s(e))])]),t.isTimeUnitShow(a)?n("div",{key:"unit-"+a,staticClass:"time-unit"},[t._v(" "+t._s(t.setTimeUnit(a))+" "),1===a?[t._v("天")]:t._e(),3===a?[t._v(":")]:t._e(),5===a?[t._v(":")]:t._e()],2):t._e()]}))],2)},i=[],r=(n("cb29"),n("4160"),n("caad6"),n("c975"),n("a9e3"),n("ac1f"),n("2532"),n("4d90"),n("1276"),n("159b"),n("d0ff")),s={name:"FlipCountdown",data:function(){return{isIE:!1,timeArray:2===this.theme?new Array(2*this.type).fill("0"):new Array(this.type).fill("00"),timeArrayT:2===this.theme?new Array(2*this.type).fill("0"):new Array(this.type).fill("00"),isAnimate:2===this.theme?new Array(2*this.type).fill(!1):new Array(this.type).fill(!1)}},props:{endDate:{type:[Date,Number,String],default:0},type:{type:[Number,String],default:4},theme:{type:[Number,String],default:1},timeUnit:{type:Array,default:function(){return[]}}},computed:{endTime:function(){return this.endDate instanceof Date?this.endDate.getTime():Number(this.endDate)>0?Number(this.endDate):0},step:function(){return 1===this.theme?1:2},arr:function(){var t=this.timeArray.length,e=this.step,n=[t-1,t-e-1,t-2*e-1,t-3*e-1];return n.length=this.type>1?this.type:1,n}},watch:{timeArray:function(t,e){var n=this,a=[];t.forEach((function(t,i){t!==e[i]&&(a.push({value:t,index:i}),n.$set(n.isAnimate,i,!0))})),setTimeout((function(){a.forEach((function(t){n.$set(n.timeArrayT,t.index,t.value)}))}),350)},endTime:function(t){t>0&&this.start()}},mounted:function(){(window.ActiveXObject||"ActiveXObject"in window||window.navigator.userAgent.indexOf("Edge")>-1)&&(this.isIE=!0),this.start(0)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{start:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;clearTimeout(this.timer),this.timer=setTimeout((function(){var e=t.endTime-(new Date).getTime();e=e<0?0:e;var n=0,a=0,i=0,s=0,o=Number(t.type);o>=4?(n=Math.floor(e/864e5),a=Math.floor(e/36e5-24*n),i=Math.floor(e/6e4-1440*n-60*a),s=Math.floor(e/1e3-86400*n-3600*a-60*i)):o>=3?(a=Math.floor(e/36e5),i=Math.floor(e/6e4-60*a),s=Math.floor(e/1e3-3600*a-60*i)):o>=2?(i=Math.floor(e/6e4),s=Math.floor(e/1e3-60*i)):s=Math.floor(e/1e3);var c=[];1===Number(t.theme)?(o>=4&&c.push(String(n).padStart(2,"0")),o>=3&&c.push(String(a).padStart(2,"0")),o>=2&&c.push(String(i).padStart(2,"0")),c.push(String(s).padStart(2,"0"))):(o>=4&&c.push.apply(c,Object(r["a"])(String(n).padStart(2,"0").split(""))),o>=3&&c.push.apply(c,Object(r["a"])(String(a).padStart(2,"0").split(""))),o>=2&&c.push.apply(c,Object(r["a"])(String(i).padStart(2,"0").split(""))),c.push.apply(c,Object(r["a"])(String(s).padStart(2,"0").split("")))),t.timeArray=c,e>0?t.start():t.$emit("timeUp")}),e)},onAnimateEnd:function(t){this.$set(this.isAnimate,t,!1)},isTimeUnitShow:function(t){return!!this.arr.includes(t)&&!(t===this.timeArray.length-1&&!this.timeUnit[3])},setTimeUnit:function(t){switch(t){case this.timeArray.length-1:return this.timeUnit[3]||"";case this.timeArray.length-this.step-1:return this.timeUnit[2]||"";case this.timeArray.length-2*this.step-1:return this.timeUnit[1]||"";default:return this.timeUnit[0]||""}}}},o=s,c=(n("b7bc"),n("2877")),u=Object(c["a"])(o,a,i,!1,null,"f9ec0d1e",null);e["default"]=u.exports},b7bc:function(t,e,n){"use strict";var a=n("fafb"),i=n.n(a);i.a},c00a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.svgClass,attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.iconName}})])},i=[],r={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String}},computed:{iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"}}},s=r,o=(n("eda7"),n("2877")),c=Object(o["a"])(s,a,i,!1,null,"47301787",null);e["default"]=c.exports},d56b:function(t,e,n){var a={"./gallery.js":"9faf"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="d56b"},e101:function(t,e){t.exports={title:"北京南天",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},eda7:function(t,e,n){"use strict";var a=n("6b66"),i=n.n(a);i.a},f121:function(t,e,n){var a="production",i=n("7609")("./env."+a);t.exports=i},f1e0:function(t,e){t.exports={title:"北京南天",baseUrl:"https://www.xxx.com/",baseApi:"https://www.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},fafb:function(t,e,n){},ffe0:function(t,e,n){var a={"./FlipCountdown/index.vue":"af81","./SvgIcon/index.vue":"c00a"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="ffe0"}},[[0,"runtime","chunk-vantUI","chunk-libs"]]]);