(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"4ef5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting"},[i("v-switch",{attrs:{primary:"",label:"启用暗黑主题"},model:{value:t.useDarkTheme,callback:function(e){t.useDarkTheme=e},expression:"useDarkTheme"}}),t.$store.state.userData?i("div",[t._v(" 欢迎，"+t._s(t.$store.state.userData.id)+" ")]):i("v-form",{staticClass:"ma-6"},[i("v-text-field",{attrs:{label:"用户名",outlined:"",autocomplete:"off"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}}),i("v-text-field",{attrs:{label:"密码",outlined:"",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),i("div",{staticClass:"d-flex flex-row justify-space-around"},[i("v-btn",{staticClass:"px-6",attrs:{color:"success"},on:{click:function(e){return t.login()}}},[t._v("登录")]),i("v-btn",{staticClass:"px-6",attrs:{color:"success"},on:{click:function(e){return t.register()}}},[t._v("注册")])],1)],1)],1)},s=[],a=(i("96cf"),i("1da1")),r={data:function(){return{form:{id:null,password:null}}},computed:{useDarkTheme:{get:function(){return this.$store.state.theme.useDarktheme},set:function(t){this.$vuetify.theme.dark=t,this.$store.commit("setTheme",{useDarktheme:t})}},token:function(){return this.$store.state.token}},methods:{register:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.form.id||!t.form.password){e.next=6;break}return e.next=3,t.$axios.post("/register",{id:t.form.id,password:t.form.password});case 3:i=e.sent,n=i.data,s=n.code,a=n.msg,"0000"===s?t.$store.commit("showMsg",{text:a,type:"success"}):t.$store.commit("showMsg",{text:a,type:"error"});case 6:case"end":return e.stop()}}),e)})))()},login:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.form.id||!t.form.password){e.next=12;break}return e.next=3,t.$axios.post("/login",{id:t.form.id,password:t.form.password});case 3:if(i=e.sent,n=i.data,s=n.code,a=n.msg,r=n.token,"0000"!==s){e.next=11;break}return t.$store.commit("setToken",r),e.next=9,t.syncData();case 9:e.next=12;break;case 11:t.$store.commit("showMsg",{text:a,type:"error"});case 12:case"end":return e.stop()}}),e)})))()},syncData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=t.$store.state.token,!i){e.next=7;break}return e.next=4,t.$axios.post("/getUserData",{token:i});case 4:n=e.sent,s=n.data,a=s.code,r=s.data,"0000"===a?t.$store.commit("setUserData",r):(t.$store.commit("setUserData",null),t.$store.commit("setToken",null));case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.syncData()}},o=r,u=i("2877"),c=i("6544"),l=i.n(c),h=i("8336"),d=(i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b"),i("5530")),f=i("58df"),p=i("7e2b"),v=i("3206"),m=Object(f["a"])(p["a"],Object(v["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(d["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),g=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),b=i("5607"),w=i("2b0e"),k=w["a"].extend({name:"rippleable",directives:{ripple:b["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),x=i("80d2"),$=w["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:x["h"]}}});function y(t){t.preventDefault()}var _=Object(f["a"])(g["a"],k,$).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=g["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:y},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:y},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),C=i("c3f0"),V=i("0789"),D=i("490a"),j=_.extend({name:"v-switch",directives:{Touch:C["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(d["a"])(Object(d["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(d["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(d["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(V["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(D["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===x["p"].left&&this.isActive||t.keyCode===x["p"].right&&!this.isActive)&&this.onChange()}}}),O=i("8654"),B=Object(u["a"])(o,n,s,!1,null,null,null);e["default"]=B.exports;l()(B,{VBtn:h["a"],VForm:m,VSwitch:j,VTextField:O["a"]})},"9d01":function(t,e,i){},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,r=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-r&&t.left(t),t.right&&i>e+r&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-r&&t.up(t),t.down&&s>n+r&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function c(t,e,i){var s=e.value,a=s.parent?t.parentElement:t,r=s.options||{passive:!0};if(a){var o=u(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=o,Object(n["q"])(o).forEach((function(t){a.addEventListener(t,o[t],r)}))}}function l(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var a=s._touchHandlers[i.context._uid];Object(n["q"])(a).forEach((function(t){s.removeEventListener(t,a[t])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:c,unbind:l};e["a"]=h},ec29:function(t,e,i){}}]);
//# sourceMappingURL=setting.1a4bebb1.js.map