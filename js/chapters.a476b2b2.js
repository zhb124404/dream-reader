(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chapters"],{"0bc6":function(t,e,i){},"3ad0":function(t,e,i){},"61d2":function(t,e,i){},"713a":function(t,e,i){"use strict";var s=i("8212");e["a"]=s["a"]},"899c":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},b125:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search ma-4"},[i("v-list",{attrs:{rounded:""}},[i("v-subheader",[t._v(t._s(t.$route.query.name))]),t._l(t.chapters,(function(e,s){return i("v-list-item",{key:"chapter"+s,on:{click:function(i){return t.goToChapter(e.chapterName,e.chapterUrl)}}},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.chapterName))])],1)],1)}))],2),i("v-overlay",{attrs:{value:t.loading,opacity:0}},[i("v-progress-circular",{attrs:{color:"green darken-1",indeterminate:"",size:"48"}})],1)],1)},n=[],a=(i("96cf"),i("1da1")),r={data:function(){return{loading:!1,chapters:[]}},methods:{getChapters:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,s,n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={id:t.$route.query.id},e.prev=1,t.loading=!0,e.next=5,t.$axios.get("/getChapters",{params:i});case 5:s=e.sent,t.loading=!1,n=s.data,a=n.code,r=n.chapters,"0000"===a?t.chapters=r:t.$store.commit("showMsg",{text:"获取小说目录失败！",type:"warning"}),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),t.loading=!1,t.$store.commit("showMsg",{text:e.t0.message,type:"error"});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()},goToChapter:function(t,e){this.$router.push({name:"Content",query:{name:t,id:e}})}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getChapters();case 2:case"end":return e.stop()}}),e)})))()}},o=r,l=i("2877"),c=i("6544"),u=i.n(c),h=(i("c740"),i("0481"),i("a434"),i("4069"),i("b85c")),d=i("5530"),p=(i("3ad0"),i("8dd9")),v=p["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object(h["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.toggle(t)}}catch(n){i.e(n)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(d["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),m=(i("61d2"),i("a9ad")),f=i("1c87"),g=i("4e82"),b=i("7560"),C=i("f2e7"),O=i("5607"),_=i("80d2"),I=i("d9bd"),j=i("58df"),$=Object(j["a"])(m["a"],f["a"],b["a"],Object(g["a"])("listItemGroup"),Object(C["b"])("inputValue")),x=$.extend().extend({name:"v-list-item",directives:{Ripple:O["a"]},inheritAttrs:!1,inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({"v-list-item":!0},f["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(f["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(I["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(d["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(d["a"])(Object(d["a"])({},n.attrs),this.genAttrs()),n[this.to?"nativeOn":"on"]=Object(d["a"])(Object(d["a"])({},n[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===_["p"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(s="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(s,this.setTextColor(this.color,n),a)}}),k=(i("ac1f"),i("466d"),i("ade3")),y=(i("db42"),i("9d26")),w=(i("498a"),i("2b0e")),B=w["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}}),A=i("7e2b"),L=i("9d65"),G=i("3206"),S=i("0789"),R=Object(j["a"])(A["a"],L["a"],m["a"],Object(G["a"])("list"),C["a"]),V=(R.extend().extend({name:"v-list-group",directives:{ripple:O["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(y["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(B,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(x,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(k["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(d["a"])(Object(d["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(_["l"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(B,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(S["a"],this.genItems())])}}),i("899c"),i("604c")),T=(Object(j["a"])(V["a"],m["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},V["a"].options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(d["a"])(Object(d["a"])({},V["a"].options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),i("4de4"),w["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}}),i("a9e3"),i("713a")),z=(T["a"].extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({"v-list-item__avatar--horizontal":this.horizontal},T["a"].options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=T["a"].options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),Object(_["g"])("v-list-item__action-text","span"),Object(_["g"])("v-list-item__content","div")),N=Object(_["g"])("v-list-item__title","div"),E=(Object(_["g"])("v-list-item__subtitle","div"),i("a797")),M=i("490a"),P=(i("0bc6"),Object(j["a"])(b["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(d["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})),q=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=q.exports;u()(q,{VList:v,VListItem:x,VListItemContent:z,VListItemTitle:N,VOverlay:E["a"],VProgressCircular:M["a"],VSubheader:P})},db42:function(t,e,i){}}]);
//# sourceMappingURL=chapters.a476b2b2.js.map