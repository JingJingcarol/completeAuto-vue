!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("completeSelect",[],t):"object"==typeof exports?exports.completeSelect=t():e.completeSelect=t()}(window,(function(){return function(e){function t(t){for(var o,c,l=t[0],a=t[1],u=t[2],s=0,f=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/";var l=window.webpackJsonpcompleteSelect=window.webpackJsonpcompleteSelect||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=a;return i.push([7,1]),n()}([,function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=r.a},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var c,l=n(15);!function(e){e[e.start=0]="start",e[e.select=1]="select",e[e.end=2]="end"}(c||(c={}));var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.inputvalue=t.value,t.isSelected=c.start,t}return r(t,e),t.prototype.input=function(e){this.isSelected==c.end?this.isSelected=c.start:this.isSelected==c.start&&(this.isSelected=c.select),this.$emit("input",e)},Object.defineProperty(t.prototype,"realList",{get:function(){var e=this;return this.inputvalue&&this.data.slice(0).filter((function(t){return-1!=t.name.indexOf(e.inputvalue)}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canselect",{get:function(){return this.isSelected==c.select},enumerable:!1,configurable:!0}),t.prototype.created=function(){this.lang&&"en"==this.lang&&(this.$i18n.locale="en")},t.prototype.onSelect=function(e){this.inputvalue=e.name,this.isSelected=c.end},t.prototype.onkeyup=function(e){13==e.which&&(this.isSelected=c.start)},t.prototype.getHighLight=function(e){var t=new RegExp(this.inputvalue,"g");return e.replace(t,'<b style="color: #0479e6;">'+this.inputvalue+"</b>")},i([l.Prop()],t.prototype,"data",void 0),i([l.Prop()],t.prototype,"theme",void 0),i([l.Prop()],t.prototype,"lang",void 0),i([l.Prop({default:""})],t.prototype,"value",void 0),i([l.Watch("inputvalue")],t.prototype,"input",null),t=i([l.Component({})],t)}(l.Vue);t.default=a},function(e,t,n){var o=n(13);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("39f1a312",o,!0,{})},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"completeSelect",class:{"dark-theme":"dark"==e.theme}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputvalue,expression:"inputvalue"}],attrs:{type:"text",placeholder:e.$t("common.search placeholder")},domProps:{value:e.inputvalue},on:{keyup:function(t){return e.onkeyup(t)},input:function(t){t.target.composing||(e.inputvalue=t.target.value)}}}),e._v(" "),e.inputvalue?n("div",{staticClass:"selectList"},[e.canselect?n("ul",[0==e.realList.length?n("li",{staticClass:"empty"},[e._t("empty",[e._v("\n                    "+e._s(e.$t("common.empty"))+"\n                ")])],2):e._e(),e._v(" "),e._l(e.realList,(function(t){return n("li",{key:t.id,on:{click:function(n){return e.onSelect(t)}}},[e._t("item",[n("div",{domProps:{innerHTML:e._s(e.getHighLight(t.name))}})],{item:t})],2)}))],2):e._e()]):e._e()])},r=[]},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);o.default.install=function(e){return e.component(o.default.name,o.default)},t.default=o.default},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(1);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(12);var c=n(6),l=Object(c.a)(r.default,o.a,o.b,!1,null,"4a7ee1fc",null);t.default=l.exports},,,,function(e,t,n){"use strict";var o=n(3);n.n(o).a},function(e,t,n){(t=n(14)(!1)).push([e.i,"\n.completeSelect[data-v-4a7ee1fc]{\n    position: relative;\n    text-align: left;\n}\n.completeSelect *[data-v-4a7ee1fc]{\n    box-sizing: border-box;\n    margin: 0;\n}\n.completeSelect input[data-v-4a7ee1fc]{\n    padding: 0.5rem 0.8rem;\n    border: 1px solid #bbb;\n    border-radius: 2px;\n    font-size: 1rem;\n    width: 100%;\n    background: transparent;\n    outline: none;\n}\n.completeSelect .selectList[data-v-4a7ee1fc]{\n    position: absolute;\n    box-shadow: 0 0 8px #ddd;\n    /* padding: 0.5rem; */\n    top: 2rem;\n    background: #fff;\n    width: 100%;\n}\n.completeSelect .selectList li[data-v-4a7ee1fc]{\n    border-bottom: 1px solid #eee;\n    padding: 0.5rem;\n    color: #2c3e50;\n}\n.completeSelect .selectList li[data-v-4a7ee1fc]:hover{\n    background: #2fb2ff;\n    color:#fff\n}\n.completeSelect .selectList li[data-v-4a7ee1fc]:last-child{\n    border-bottom:0\n}\n.completeSelect.dark-theme input[data-v-4a7ee1fc]{\n    color: #fff;\n}\n\n",""]),e.exports=t}])}));
//# sourceMappingURL=completeSelect.js.map