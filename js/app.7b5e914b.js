(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({"chapters~content~result":"chapters~content~result","chapters~content":"chapters~content",chapters:"chapters","content~result":"content~result",content:"content",result:"result","search~setting":"search~setting",search:"search",setting:"setting"}[t]||t)+"."+{"chapters~content~result":"f2fc7806","chapters~content":"243ffe91",chapters:"22944d52","content~result":"65099efd",content:"714795a6",result:"2e367c90","search~setting":"5e525fc8",search:"d3f98a6f",setting:"bc298d09"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chapters~content~result":1,"chapters~content":1,chapters:1,"content~result":1,content:1,result:1,"search~setting":1,search:1,setting:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({"chapters~content~result":"chapters~content~result","chapters~content":"chapters~content",chapters:"chapters","content~result":"content~result",content:"content",result:"result","search~setting":"search~setting",search:"search",setting:"setting"}[t]||t)+"."+{"chapters~content~result":"f64a5a45","chapters~content":"425462bb",chapters:"5c8076a7","content~result":"19216224",content:"1cc6f2c1",result:"601d8c98","search~setting":"f1d98b82",search:"ac78dc99",setting:"9357cc44"}[t]+".css",s=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],f.parentNode.removeChild(f),n(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),s=n.n(a),o={baseURL:"https://9txs.dreamoon.workers.dev",withCredentials:!1},c=s.a.create(o);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},r["a"].use(Plugin);Plugin;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.showNav?n("v-bottom-navigation",{attrs:{grow:"",shift:"",app:""},model:{value:t.navValue,callback:function(e){t.navValue=e},expression:"navValue"}},[n("v-btn",{attrs:{height:"100%",value:"search",to:"/search"}},[n("span",[t._v("搜索")]),n("v-icon",[t._v("mdi-cloud-search")])],1),n("v-btn",{attrs:{height:"100%",value:"bookshelf",to:"/"}},[n("span",[t._v("书架")]),n("v-icon",[t._v("mdi-book")])],1),n("v-btn",{attrs:{height:"100%",value:"mine",to:"/setting"}},[n("span",[t._v("我的")]),n("v-icon",[t._v("mdi-face-profile")])],1)],1):t._e(),n("v-main",[n("router-view"),n("v-snackbar",{attrs:{color:t.$store.state.snackbar.type,timeout:t.$store.state.snackbar.timeout,bottom:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.showSnackbar=!1}}},"v-btn",r,!1),[t._v(" 关闭 ")])]}}]),model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v(" "+t._s(t.$store.state.snackbar.text)+" ")])],1)],1)},u=[],l={name:"App",data:function(){return{drawer:!1,miniDrawer:!1,navValue:"bookshelf"}},computed:{showNav:function(){return this.$store.state.theme.showNav},showSnackbar:{get:function(){return this.$store.state.snackbar.show},set:function(t){this.$store.commit("showMsg",{show:t})}}},mounted:function(){this.$vuetify.theme.dark=this.$store.state.theme.useDarktheme}},h=l,f=n("2877"),p=n("6544"),m=n.n(p),v=n("7496"),d=n("b81c"),b=n("8336"),g=n("132d"),y=n("f6c4"),w=n("2db4"),_=Object(f["a"])(h,i,u,!1,null,null,null),k=_.exports;m()(_,{VApp:v["a"],VBottomNavigation:d["a"],VBtn:b["a"],VIcon:g["a"],VMain:y["a"],VSnackbar:w["a"]});var x=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},C=[],P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},O=[],S={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=S,E=n("62ad"),$=n("a523"),N=n("adda"),A=n("0fd9"),T=Object(f["a"])(V,P,O,!1,null,null,null),L=T.exports;m()(T,{VCol:E["a"],VContainer:$["a"],VImg:N["a"],VRow:A["a"]});var D={name:"Home",components:{HelloWorld:L}},M=D,I=Object(f["a"])(M,j,C,!1,null,null,null),q=I.exports;r["a"].use(x["a"]);var H=[{path:"/",name:"Home",component:q},{path:"/setting",name:"Setting",component:function(){return Promise.all([n.e("search~setting"),n.e("setting")]).then(n.bind(null,"4ef5"))}},{path:"/search",name:"Search",component:function(){return Promise.all([n.e("search~setting"),n.e("search")]).then(n.bind(null,"2d3b"))}},,{path:"/result",name:"Result",component:function(){return Promise.all([n.e("chapters~content~result"),n.e("content~result"),n.e("result")]).then(n.bind(null,"eeac"))}},{path:"/chapters",name:"Chapters",component:function(){return Promise.all([n.e("chapters~content~result"),n.e("chapters~content"),n.e("chapters")]).then(n.bind(null,"b125"))}},{path:"/content",name:"Content",component:function(){return Promise.all([n.e("chapters~content~result"),n.e("content~result"),n.e("chapters~content"),n.e("content")]).then(n.bind(null,"29ff"))}}],B=new x["a"]({routes:H}),W=B,R=n("5530"),F=n("2f62"),U=n("0e44"),J=n("88b4"),K=n.n(J),Q=(n("fb6a"),new K.a({isCompression:!1}));r["a"].use(F["a"]);var z=new F["a"].Store({state:{theme:{useDarktheme:!1,showNav:!0},snackbar:{show:!1,type:"info",text:"",timeout:1400}},getters:{},mutations:{setTheme:function(t,e){return t.theme=Object(R["a"])(Object(R["a"])({},t.theme),e)},showMsg:function(t,e){!1===e.show?t.snackbar.show=!1:t.snackbar=Object(R["a"])({show:!0,type:"info",text:"",timeout:1400},e)}},actions:{},plugins:[Object(U["a"])({key:"dreamReder-UserData",storage:{getItem:function(t){return Q.get(t)},setItem:function(t,e){return Q.set(t,e)},removeItem:function(t){return Q.remove(t)}}})]}),G=n("f309");r["a"].use(G["a"]);var X=new G["a"]({}),Y=n("d18b"),Z=n("7890"),tt=n.n(Z);r["a"].use(Y["a"]),r["a"].use(tt.a),r["a"].config.productionTip=!1,new r["a"]({router:W,store:z,vuetify:X,render:function(t){return t(k)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.7b5e914b.js.map