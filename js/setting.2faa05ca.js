(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"4ef5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting"},[i("v-switch",{attrs:{primary:"",label:"启用暗黑主题"},model:{value:t.useDarkTheme,callback:function(e){t.useDarkTheme=e},expression:"useDarkTheme"}})],1)},s=[],a={data:function(){return{}},computed:{useDarkTheme:{get:function(){return this.$store.state.theme.useDarktheme},set:function(t){this.$vuetify.theme.dark=t,this.$store.commit("setTheme",{useDarktheme:t})}}},methods:{}},o=a,r=i("2877"),u=i("6544"),c=i.n(u),l=(i("0481"),i("4069"),i("5530")),h=(i("ec29"),i("9d01"),i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("c37a")),d=i("5607"),p=i("2b0e"),f=p["a"].extend({name:"rippleable",directives:{ripple:d["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),v=i("80d2"),m=p["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:v["h"]}}}),g=i("58df");function b(t){t.preventDefault()}var w=Object(g["a"])(h["a"],f,m).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=h["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:b},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:b},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),C=i("c3f0"),y=i("0789"),k=i("490a"),V=w.extend({name:"v-switch",directives:{Touch:C["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(l["a"])(Object(l["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(l["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(l["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(y["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(k["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v["p"].left&&this.isActive||t.keyCode===v["p"].right&&!this.isActive)&&this.onChange()}}}),S=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=S.exports;c()(S,{VSwitch:V})},"9d01":function(t,e,i){},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,a=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))};function a(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function u(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function c(t,e,i){var s=e.value,a=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(a){var r=u(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=r,Object(n["q"])(r).forEach((function(t){a.addEventListener(t,r[t],o)}))}}function l(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var a=s._touchHandlers[i.context._uid];Object(n["q"])(a).forEach((function(t){s.removeEventListener(t,a[t])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:c,unbind:l};e["a"]=h},ec29:function(t,e,i){}}]);
//# sourceMappingURL=setting.2faa05ca.js.map