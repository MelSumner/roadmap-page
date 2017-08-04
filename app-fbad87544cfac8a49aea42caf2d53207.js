(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t){return t[ie]}function e(t,e){t[ie]=e}function n(t){if(null===t||void 0===t)throw new Error("Expected value to be present")
return t}function i(t,e){if(null===t||void 0===t)throw new Error(e)
return t}function r(){return new Error("unreachable")}function o(t){return t-4}function s(t,e){if(!t)throw new Error(e||"assertion failure")}function a(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
if(null!==n&&"object"===(void 0===n?"undefined":qt(n)))for(var i=ue(n),r=0;r<i.length;r++){var o=i[r]
t[o]=n[o]}}return t}function u(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=null
return e}function p(t){return t._guid=++pe}function c(t){return t._guid||p(t)}function h(){}function l(){return new h}function f(t){var e=Ce.length
Ce.push(function(t){return t.value()}),Ne.push(function(t,e){return t.validate(e)}),t.id=e}function d(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n].tag
if(r===Te)return Te
r!==Oe&&e.push(r)}return v(e)}function y(t){for(var e=[],n=t.head();null!==n;){var i=n.tag
if(i===Te)return Te
i!==Oe&&e.push(i),n=t.nextNode(n)}return v(e)}function m(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n]
if(r===Te)return Te
r!==Oe&&e.push(r)}return v(e)}function v(t){switch(t.length){case 0:return Oe
case 1:return t[0]
case 2:return Le.create(t[0],t[1])
default:return Fe.create(t)}}function g(t,e){return new Pe(t,e)}function b(t){return t!==He}function k(t){return t.tag===Oe}function S(t){return"function"!=typeof t.toString?"":String(t)}function w(t){for(var e=[],n=0;n<t.length;n++){var i=t[n].value()
!1!==i&&null!==i&&void 0!==i&&e.push(i)}return 0===e.length?null:e.join(" ")}function E(t){return JSON.stringify("<"+t.tagName.toLowerCase()+" />")}function A(t,e){return new xn(t,e)}function _(t,e){for(var n=t.parentElement(),i=t.firstNode(),r=t.lastNode(),o=i;o;){var s=o.nextSibling
if(n.insertBefore(o,e),o===r)return s
o=s}return null}function C(t){for(var e=t.parentElement(),n=t.firstNode(),i=t.lastNode(),r=n;r;){var o=r.nextSibling
if(e.removeChild(r),r===i)return o
r=o}return null}function N(t){return"object"===(void 0===t?"undefined":qt(t))&&null!==t&&t[In]}function x(t){return"object"===(void 0===t?"undefined":qt(t))&&null!==t&&"function"==typeof t.toHTML}function O(t){return"object"===(void 0===t?"undefined":qt(t))&&null!==t&&"number"==typeof t.nodeType}function T(t){return"string"==typeof t}function D(t,e,n){if(T(n))return Un.insert(t,e,n)
if(x(n))return Vn.insert(t,e,n)
if(O(n))return zn.insert(t,e,n)
throw r()}function M(t,e,n){if(T(n))return Hn.insert(t,e,n)
if(O(n))return zn.insert(t,e,n)
throw r()}function B(t){return null===t||void 0===t||"function"!=typeof t.toString}function L(t){return B(t)?"":String(t)}function F(t){return B(t)?"":T(t)?t:x(t)?t.toHTML():O(t)?t:String(t)}function R(t){return B(t)?"":T(t)?t:x(t)||O(t)?t:String(t)}function I(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}function j(t){return function(e){return Array.isArray(e)&&e[0]===t}}function P(t,e){var n=new si(e)
return t.compile(n),n.compile()}function U(t,e){return new yi(t,e)}function H(t){return"object"===(void 0===t?"undefined":qt(t))&&null!==t&&"function"==typeof t.compile}function V(t,e,n){var i=t[1],r=t[2],o=t[3]
z(r,n),o?n.dynamicAttrNS(i,o,e):n.dynamicAttr(i,e)}function z(t,e){Array.isArray(t)?Ai.compile(t,e):e.primitive(t)}function J(t,e){if(!t)return 0
for(var n=0;n<t.length;n++)z(t[n],e)
return t.length}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Ni,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Oi
return t.add("if",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.test("environment"),o.enter(1),o.jumpUnless("ELSE"),o.invokeStatic(n(i)),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("unless",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.test("environment"),o.enter(1),o.jumpIf("ELSE"),o.invokeStatic(n(i)),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("with",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.dup(),o.test("environment"),o.enter(2),o.jumpUnless("ELSE"),o.invokeStatic(n(i),1),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("each",function(t,e,i,r,o){o.startLabels(),o.pushFrame(),o.returnTo("END"),e&&"key"===e[0][0]?z(e[1][0],o):o.primitive(null),z(t[0],o),o.enter(2),o.putIterator(),o.jumpUnless("ELSE"),o.pushFrame(),o.returnTo("ITER"),o.dup(ge.fp,1),o.enterList("BODY"),o.label("ITER"),o.iterate("BREAK"),o.label("BODY"),o.invokeStatic(n(i),2),o.pop(2),o.exit(),o.return(),o.label("BREAK"),o.exitList(),o.popFrame(),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("-in-element",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #-in-element requires a single argument")
if(o.startLabels(),o.pushFrame(),o.returnTo("END"),e&&e[0].length){var s=e[0],a=e[1]
if(1!==s.length||"nextSibling"!==s[0])throw new Error("SYNTAX ERROR: #-in-element does not take a `"+s[0]+"` option")
z(a[0],o)}else z(null,o)
z(t[0],o),o.dup(),o.test("simple"),o.enter(3),o.jumpUnless("ELSE"),o.pushRemoteElement(),o.invokeStatic(n(i)),o.popRemoteElement(),o.label("ELSE"),o.exit(),o.return(),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("-with-dynamic-vars",function(t,e,i,r,o){if(e){var s=e[0]
J(e[1],o),o.pushDynamicScope(),o.bindDynamicScope(s),o.invokeStatic(n(i)),o.popDynamicScope()}else o.invokeStatic(n(i))}),{blocks:t,inlines:e}}function G(t,e){bi.compile(t,e)}function Y(t,e,n){for(var i=new yi(n,e),r=0;r<t.length;r++)G(t[r],i)
return i}function X(t,e){for(var n=t[2],i=t[4],r=0;r<n.length;r++)e.push(n[r])
if(e.push([Di.FlushElement]),i)for(var o=i.statements,s=0;s<o.length;s++)e.push(o[s])
e.push([Di.CloseElement])}function K(t,e,n,i){var r=e.push(vi)
i.push([Di.ClientSideStatement,ii.OpenComponentElement,t]),i.push([Di.ClientSideStatement,ii.DidCreateElement]),i.push([Di.Yield,r,be]),i.push.apply(i,n)}function q(t,e){return-1!==t.indexOf(e)}function $(t,e){return(null===t||q(Fi,t))&&q(Ii,e)}function Q(t,e){return null!==t&&(q(Ri,t)&&q(ji,e))}function Z(t,e){return $(t,e)||Q(t,e)}function tt(t,e,n,i){var r=null
if(null===i||void 0===i)return i
if(x(i))return i.toHTML()
r=e?e.tagName.toUpperCase():null
var o=L(i)
if($(r,n)){var s=t.protocolForURL(o)
if(q(Li,s))return"unsafe:"+o}return Q(r,n)?"unsafe:"+o:o}function et(t,e){var n=void 0,i=void 0
if(e in t)i=e,n="prop"
else{var r=e.toLowerCase()
r in t?(n="prop",i=r):(n="attr",i=e)}return"prop"!==n||"style"!==i.toLowerCase()&&!nt(t.tagName,i)||(n="attr"),{normalized:i,type:n}}function nt(t,e){var n=Pi[t.toUpperCase()]
return n&&n[e.toLowerCase()]||!1}function it(t,e){if(!t)return e
if(!ot(t))return e
var n=t.createElement("div")
return function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,i,r){if(null===r||""===r)return t.prototype.insertHTMLBefore.call(this,e,i,r)
var o=e.tagName.toLowerCase(),s=Ui[o]
return void 0===s?t.prototype.insertHTMLBefore.call(this,e,i,r):rt(e,s,n,r,i)},e}(e)}function rt(t,e,n,i,r){var o=e.before+i+e.after
n.innerHTML=o
for(var s=n,a=0;a<e.depth;a++)s=s.childNodes[0]
var u=ht(s,t,r),p=u[0],c=u[1]
return new Nn(t,p,c)}function ot(t){var e=t.createElement("table")
try{e.innerHTML="<tbody></tbody>"}catch(t){}finally{if(0!==e.childNodes.length)return!1}return!0}function st(t,e,n){if(!t)return e
if(!ut(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):at(e,i,o,r)},e}(e)}function at(t,e,n,i){var r="<svg>"+n+"</svg>"
e.innerHTML=r
var o=ht(e.firstChild,t,i),s=o[0],a=o[1]
return new Nn(t,s,a)}function ut(t,e){var i=t.createElementNS(e,"svg")
try{i.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==i.childNodes.length||n(i.firstChild).namespaceURI!==Hi}}function pt(t,e){return t&&ct(t)?function(t){function e(n){$t(this,e)
var i=te(this,t.call(this,n))
return i.uselessComment=i.createComment(""),i}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,n,i){if(null===i)return t.prototype.insertHTMLBefore.call(this,e,n,i)
var r=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(r=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,i)
return r&&e.removeChild(this.uselessComment),s},e}(e):e}function ct(t){var e=t.createElement("div")
return e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2!==e.childNodes.length}function ht(t,e,n){for(var i=t.firstChild,r=null,o=i;o;)r=o,o=o.nextSibling,e.insertBefore(r,n)
return[i,r]}function lt(t,e,n,i){var r=e,o=t,s=n,a=s?s.previousSibling:r.lastChild,u=void 0
if(null===i||""===i)return new Nn(r,null,null)
null===s?(r.insertAdjacentHTML("beforeend",i),u=r.lastChild):s instanceof HTMLElement?(s.insertAdjacentHTML("beforebegin",i),u=s.previousSibling):(r.insertBefore(o,s),o.insertAdjacentHTML("beforebegin",i),u=o.previousSibling,r.removeChild(o))
var p=a?a.nextSibling:r.firstChild
return new Nn(r,p,u)}function ft(t){return t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function dt(t,e,n,i){var r=t.tagName
if(t.namespaceURI===Vi)return mt(r,e)
var o=et(t,e),s=o.type,a=o.normalized
return"attr"===s?mt(r,a):yt(r,a)}function yt(t,e){return Z(t,e)?new er(e):bt(t,e)?ir:kt(t,e)?or:new tr(e)}function mt(t,e){return Z(t,e)?new sr(e):new Zi(e)}function vt(t){return!1===t||void 0===t||null===t?null:!0===t?"":"function"==typeof t?null:String(t)}function gt(t){return null===t||void 0===t}function bt(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}function kt(t,e){return"OPTION"===t&&"selected"===e}function St(t){var e=t.id,n=t.meta,i=t.block,r=void 0,o=e||"client-"+Ar++
return{id:o,meta:n,create:function(t,e){var s=e?a({},e,n):n
return r||(r=JSON.parse(i)),new _r(o,s,t,r)}}}function wt(){}function Et(t){return-1===t.indexOf(":")}function At(t,e,n,i,r){var o=[t.slice(0,1),null,null,null],s=[t.slice(1),Nt(e),n,i]
return r.component.dynamic(o,Ct,s),!0}function _t(t,e,n,i){var r=[e.slice(0,1),null,null,null],o=[e.slice(1),Nt(n),null,null]
return i.component.dynamic(r,Ct,o),!0}function Ct(t,e,n){var i=e.positional.at(0),r=t.env
return new zr(i,r,n)}function Nt(t){return null===t?null:[t[0].map(function(t){return"@"+t}),t[1]]}function xt(t,e){var n=t.getSelf(),i=e.capture(),r=i.positional.at(0).value()
return"function"!=typeof r&&Ot(r,i.positional.at(0)),new Ve(function(){var t=i.positional.value()
t.shift(),t.push.apply(t,arguments),r.apply(n&&n.value(),t)})}function Ot(t,e){var n=Tt(e)
throw new Error("You tried to create an action with the {{action}} helper, but the first argument "+n+"was "+(void 0===t?"undefined":qt(t))+" instead of a function.")}function Tt(t){var e="",n=void 0,i=void 0
return null===t||void 0===t?e:("parent"in t&&"property"in t?(n=t.parent.value(),i=t.property):"_parentValue"in t&&"_propertyKey"in t&&(n=t._parentValue,i=t._propertyKey),void 0!==i&&(e+="('"+i+"' on "+Dt(n)+") "),e)}function Dt(t){var e=void 0===t?"undefined":qt(t)
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}function Mt(t){return function(e,n){return new Wr(t,n)}}function Bt(t,e){t.add("component",At),e.add("component",_t)}function Lt(t){return void 0!==t.createComponentDefinition}function Ft(){}function Rt(t){var e=t.split(":"),n=e[0],i=e[1]
return!!(n&&i&&0===i.indexOf("/")&&i.split("/").length>3)}function It(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function jt(t){var e=t.type,n=Pt(t)
return n?e+":"+n:e}function Pt(t){var e=[]
if(t.rootName&&e.push(t.rootName),t.collection&&e.push(t.collection),t.namespace&&e.push(t.namespace),t.name&&e.push(t.name),e.length>0){var n=e.join("/")
return It(t)&&(n="/"+n),n}}function Ut(t){var e={}
if(t.indexOf(":")>-1){var n=t.split(":"),i=n[0],r=n[1]
e.type=i
var o=void 0
0===r.indexOf("/")?(o=r.substr(1).split("/"),e.rootName=o.shift(),e.collection=o.shift()):o=r.split("/"),o.length>0&&(e.name=o.pop(),o.length>0&&(e.namespace=o.join("/")))}else e.type=t
return e}function Ht(t,e){if(!e)throw new Error("Assertion Failed: "+t)}function Vt(t,e,n,i){var r=Wt(t)
return r.trackedProperties[e]=!0,r.trackedPropertyDependencies[e]=i||[],{enumerable:!0,configurable:!1,get:n.get,set:function(){Wt(this).dirtyableTagFor(e).inner.dirty(),n.set.apply(this,arguments),no()}}}function zt(t,e){var n=Symbol(e)
Wt(t).trackedProperties[e]=!0,void 0!==t[e]&&t[e],Object.defineProperty(t,e,{configurable:!0,get:function(){return this[n]},set:function(t){Wt(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,no()}})}function Jt(t,e,n){var i=[t.dirtyableTagFor(e)]
if(n&&n.length)for(var r=0;r<n.length;r++)i.push(t.tagFor(n[r]))
return m(i)}function Wt(t){var e=t[to]
return e&&Gt(t,to)?e:t[to]=new Zr(e)}function Gt(t,e){return eo.call(t,e)}function Yt(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if("object"===(void 0===t?"undefined":qt(t))&&t){return Wt(t).tagFor(e)}return Oe}function Xt(t,e){throw new io(t,e,"The '"+e+"' property on the "+t+" was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.")}var Kt,qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Qt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Zt=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},te=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},ee=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
$t(this,t),this._registry=e,this._resolver=n,this._lookups={},this._factoryDefinitionLookups={}}return t.prototype.factoryFor=function(t){var e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)},t.prototype.lookup=function(t){var e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
var n=this.factoryFor(t)
if(n){if(!1===this._registry.registeredOption(t,"instantiate"))return n.class
var i=n.create()
return e&&i&&(this._lookups[t]=i),i}},t.prototype.defaultInjections=function(t){return{}},t.prototype.buildInjections=function(t){for(var e=this.defaultInjections(t),n=this._registry.registeredInjections(t),i=void 0,r=0;r<n.length;r++)i=n[r],e[i.property]=this.lookup(i.source)
return e},t.prototype.buildFactory=function(t,e){var n=this.buildInjections(t)
return{class:e,create:function(t){var i=Object.assign({},n,t)
return e.create(i)}}},t}(),ne=function(){function t(e){$t(this,t),this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}return t.prototype.register=function(t,e,n){this._registrations[t]=e,n&&(this._registeredOptions[t]=n)},t.prototype.registration=function(t){var e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e},t.prototype.unregister=function(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]},t.prototype.registerOption=function(t,e,n){var i=this._registeredOptions[t]
i||(i={},this._registeredOptions[t]=i),i[e]=n},t.prototype.registeredOption=function(t,e){var n=void 0,i=this.registeredOptions(t)
return i&&(n=i[e]),void 0===n&&void 0!==this._fallback&&(n=this._fallback.registeredOption(t,e)),n},t.prototype.registeredOptions=function(t){var e=this._registeredOptions[t]
if(void 0===e){var n=t.split(":"),i=n[0]
e=this._registeredOptions[i]}return e},t.prototype.unregisterOption=function(t,e){var n=this._registeredOptions[t]
n&&delete n[e]},t.prototype.registerInjection=function(t,e,n){var i=this._registeredInjections[t]
void 0===i&&(this._registeredInjections[t]=i=[]),i.push({property:e,source:n})},t.prototype.registeredInjections=function(t){var e=t.split(":"),n=e[0],i=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(i,this._registeredInjections[n]),Array.prototype.push.apply(i,this._registeredInjections[t]),i},t}(),ie="__owner__";(function(t){t[t.Trace=0]="Trace",t[t.Debug=1]="Debug",t[t.Warn=2]="Warn",t[t.Error=3]="Error"})(Kt||(Kt={}))
var re=function(){function t(){$t(this,t)}return t.prototype.log=function(t){},t.prototype.warn=function(t){},t.prototype.error=function(t){},t.prototype.trace=function(){},t}(),oe=void 0,se=function(){function t(e){var n=e.console,i=e.level
$t(this,t),this.f=oe,this.force=oe,this.console=n,this.level=i}return t.prototype.skipped=function(t){return t<this.level},t.prototype.trace=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(Kt.Trace)||(this.console.log(t),i&&this.console.trace())},t.prototype.debug=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(Kt.Debug)||(this.console.log(t),i&&this.console.trace())},t.prototype.warn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(Kt.Warn)||(this.console.warn(t),i&&this.console.trace())},t.prototype.error=function(t){this.skipped(Kt.Error)||this.console.error(t)},t}(),ae="undefined"==typeof console?new re:console
oe=new se({console:ae,level:Kt.Trace}),new se({console:ae,level:Kt.Debug})
var ue=Object.keys,pe=0,ce=Object.create(null,{constructor:{value:void 0,enumerable:!1,writable:!0}})
h.prototype=ce
var he=function(){function t(){$t(this,t),this.dict=l()}return t.prototype.add=function(t){return"string"==typeof t?this.dict[t]=t:this.dict[c(t)]=t,this},t.prototype.delete=function(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]},t.prototype.forEach=function(t){for(var e=this.dict,n=Object.keys(e),i=0;n.length;i++)t(e[n[i]])},t.prototype.toArray=function(){return Object.keys(this.dict)},t}(),le=function(){function t(){$t(this,t),this.stack=[],this.current=null}return t.prototype.toArray=function(){return this.stack},t.prototype.push=function(t){this.current=t,this.stack.push(t)},t.prototype.pop=function(){var t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t},t.prototype.isEmpty=function(){return 0===this.stack.length},t}(),fe=function t(e){$t(this,t),this.next=null,this.prev=null,this.value=e},de=function(){function t(){$t(this,t),this.clear()}return t.fromSlice=function(e){var n=new t
return e.forEachNode(function(t){return n.append(t.clone())}),n},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.clear=function(){this._head=this._tail=null},t.prototype.isEmpty=function(){return null===this._head},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.splice=function(t,e,n){var i=void 0
null===n?(i=this._tail,this._tail=e):(i=n.prev,e.next=n,n.prev=e),i&&(i.next=t,t.prev=i)},t.prototype.nextNode=function(t){return t.next},t.prototype.prevNode=function(t){return t.prev},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=e.next},t.prototype.contains=function(t){for(var e=this._head;null!==e;){if(e===t)return!0
e=e.next}return!1},t.prototype.insertBefore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)},t.prototype.append=function(t){var e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t},t.prototype.pop=function(){return this._tail?this.remove(this._tail):null},t.prototype.prepend=function(t){return this._head?this.insertBefore(t,this._head):this._head=this._tail=t},t.prototype.remove=function(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t},t}(),ye=function(){function t(e,n){$t(this,t),this._head=e,this._tail=n}return t.toList=function(t){var e=new de
return t.forEachNode(function(t){return e.append(t.clone())}),e},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=this.nextNode(e)},t.prototype.contains=function(t){for(var e=this._head;null!==e;){if(e===t)return!0
e=e.next}return!1},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t===this._tail?null:t.next},t.prototype.prevNode=function(t){return t===this._head?null:t.prev},t.prototype.isEmpty=function(){return!1},t}(),me=(new ye(null,null),function(){if("function"!=typeof WeakMap)return!1
var t=new WeakMap
return"[object WeakMap]"===Object.prototype.toString.call(t)}()),ve="undefined"!=typeof Uint32Array
ve?Uint32Array:Array
var ge,be=me?Object.freeze([]):[];(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1"})(ge||(ge={}))
var ke=function(){function t(){$t(this,t),this.evaluateOpcode=u(72).slice()}return t.prototype.add=function(t,e){this.evaluateOpcode[t]=e},t.prototype.evaluate=function(t,e,n){(0,this.evaluateOpcode[n])(t,e)},t}(),Se=new ke,we=function(){function t(){$t(this,t),p(this)}return t.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},t}(),Ee=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.next=null,n.prev=null,n}return Zt(e,t),e}(we),Ae=1,_e=function(){function t(){$t(this,t)}return t.prototype.validate=function(t){return this.value()===t},t}()
_e.id=0
var Ce=[],Ne=[],xe=function(){function t(e,n){$t(this,t),this.type=e,this.inner=n}return t.prototype.value=function(){return(0,Ce[this.type])(this.inner)},t.prototype.validate=function(t){return(0,Ne[this.type])(this.inner,t)},t}()
Ce.push(function(){return 0}),Ne.push(function(t,e){return 0===e})
var Oe=new xe(0,null)
Ce.push(function(){return NaN}),Ne.push(function(t,e){return NaN===e})
var Te=new xe(1,null)
Ce.push(function(){return De}),Ne.push(function(t,e){return e===De})
var De=(new xe(2,null),Ae),Me=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De
$t(this,e)
var i=te(this,t.call(this))
return i.revision=n,i}return Zt(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De
return new xe(this.id,new e(t))},e.prototype.value=function(){return this.revision},e.prototype.dirty=function(){this.revision=++De},e}(_e)
f(Me)
var Be=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return Zt(e,t),e.prototype.value=function(){var t=this.lastChecked
this.lastValue
return t!==De&&(this.lastChecked=De,this.lastValue=this.compute()),this.lastValue},e.prototype.invalidate=function(){this.lastChecked=null},e}(_e),Le=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this))
return r.first=n,r.second=i,r}return Zt(e,t),e.create=function(t,n){return new xe(this.id,new e(t,n))},e.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},e}(Be)
f(Le)
var Fe=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.tags=n,i}return Zt(e,t),e.create=function(t){return new xe(this.id,new e(t))},e.prototype.compute=function(){for(var t=this.tags,e=-1,n=0;n<t.length;n++){var i=t[n].value()
e=Math.max(i,e)}return e},e}(Be)
f(Fe)
var Re=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.tag=n,i.lastUpdated=Ae,i}return Zt(e,t),e.create=function(t){return new xe(this.id,new e(t))},e.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},e.prototype.update=function(t){t!==this.tag&&(this.tag=t,this.lastUpdated=De,this.invalidate())},e}(Be)
f(Re)
var Ie,je=function(){function t(){$t(this,t),this.lastRevision=null,this.lastValue=null}return t.prototype.value=function(){var t=this.tag,e=this.lastRevision,n=this.lastValue
return e&&t.validate(e)||(n=this.lastValue=this.compute(),this.lastRevision=t.value()),n},t.prototype.invalidate=function(){this.lastRevision=null},t}(),Pe=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this))
return r.tag=n.tag,r.reference=n,r.mapper=i,r}return Zt(e,t),e.prototype.compute=function(){var t=this.reference
return(0,this.mapper)(t.value())},e}(je),Ue=function(){function t(e){$t(this,t),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return t.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},t.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var t=this.reference,e=this.lastRevision,n=t.tag
if(n.validate(e))return He
this.lastRevision=n.value()
var i=this.lastValue,r=t.value()
return r===i?He:(this.lastValue=r,r)},t.prototype.initialize=function(){var t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e},t}(),He="adb3b78e-3d22-4e4b-877a-6317c2c5c145",Ve=function(){function t(e){$t(this,t),this.inner=e,this.tag=Oe}return t.prototype.value=function(){return this.inner},t}(),ze=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this,n.valueReferenceFor(i)))
return r.retained=!1,r.seen=!1,r.key=i.key,r.iterable=n,r.memo=n.memoReferenceFor(i),r}return Zt(e,t),e.prototype.update=function(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)},e.prototype.shouldRemove=function(){return!this.retained},e.prototype.reset=function(){this.retained=!1,this.seen=!1},e}(fe),Je=function(){function t(e){$t(this,t),this.map=l(),this.list=new de,this.tag=e.tag,this.iterable=e}return t.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},t.prototype.iterate=function(){var t=this.iterator||this.iterable.iterate()
return this.iterator=null,t},t.prototype.has=function(t){return!!this.map[t]},t.prototype.get=function(t){return this.map[t]},t.prototype.wasSeen=function(t){var e=this.map[t]
return e&&e.seen},t.prototype.append=function(t){var e=this.map,n=this.list,i=this.iterable,r=e[t.key]=new ze(i,t)
return n.append(r),r},t.prototype.insertBefore=function(t,e){var n=this.map,i=this.list,r=this.iterable,o=n[t.key]=new ze(r,t)
return o.retained=!0,i.insertBefore(o,e),o},t.prototype.move=function(t,e){var n=this.list
t.retained=!0,n.remove(t),n.insertBefore(t,e)},t.prototype.remove=function(t){this.list.remove(t),delete this.map[t.key]},t.prototype.nextNode=function(t){return this.list.nextNode(t)},t.prototype.head=function(){return this.list.head()},t}(),We=function(){function t(e){$t(this,t),this.iterator=null
var n=new Je(e)
this.artifacts=n}return t.prototype.next=function(){var t=this.artifacts,e=this.iterator=this.iterator||t.iterate(),n=e.next()
return n?t.append(n):null},t}();(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(Ie||(Ie={}))
var Ge=function(){function t(e){var n=e.target,i=e.artifacts
$t(this,t),this.target=n,this.artifacts=i,this.iterator=i.iterate(),this.current=i.head()}return t.prototype.sync=function(){for(var t=Ie.Append;;)switch(t){case Ie.Append:t=this.nextAppend()
break
case Ie.Prune:t=this.nextPrune()
break
case Ie.Done:return void this.nextDone()}},t.prototype.advanceToKey=function(t){for(var e=this.current,n=this.artifacts,i=e;i&&i.key!==t;)i.seen=!0,i=n.nextNode(i)
this.current=i&&n.nextNode(i)},t.prototype.nextAppend=function(){var t=this.iterator,e=this.current,n=this.artifacts,i=t.next()
if(null===i)return this.startPrune()
var r=i.key
return e&&e.key===r?this.nextRetain(i):n.has(r)?this.nextMove(i):this.nextInsert(i),Ie.Append},t.prototype.nextRetain=function(t){var e=this.artifacts,n=this.current
n=i(n,"BUG: current is empty"),n.update(t),this.current=e.nextNode(n),this.target.retain(t.key,n.value,n.memo)},t.prototype.nextMove=function(t){var e=this.current,n=this.artifacts,i=this.target,r=t.key,o=n.get(t.key)
o.update(t),n.wasSeen(t.key)?(n.move(o,e),i.move(o.key,o.value,o.memo,e?e.key:null)):this.advanceToKey(r)},t.prototype.nextInsert=function(t){var e=this.artifacts,n=this.target,i=this.current,r=e.insertBefore(t,i)
n.insert(r.key,r.value,r.memo,i?i.key:null)},t.prototype.startPrune=function(){return this.current=this.artifacts.head(),Ie.Prune},t.prototype.nextPrune=function(){var t=this.artifacts,e=this.target,n=this.current
if(null===n)return Ie.Done
var i=n
return this.current=t.nextNode(i),i.shouldRemove()?(t.remove(i),e.delete(i.key)):i.reset(),Ie.Prune},t.prototype.nextDone=function(){this.target.done()},t}(),Ye=function(t){function e(n){return $t(this,e),te(this,t.call(this,n))}return Zt(e,t),e.create=function(t){return void 0===t?qe:null===t?$e:!0===t?Qe:!1===t?Ze:"number"==typeof t?new Ke(t):new Xe(t)},e.prototype.get=function(t){return qe},e}(Ve),Xe=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.lengthReference=null,n}return Zt(e,t),e.prototype.get=function(e){if("length"===e){var n=this.lengthReference
return null===n&&(n=this.lengthReference=new Ke(this.inner.length)),n}return t.prototype.get.call(this,e)},e}(Ye),Ke=function(t){function e(n){return $t(this,e),te(this,t.call(this,n))}return Zt(e,t),e}(Ye),qe=new Ke(void 0),$e=new Ke(null),Qe=new Ke(!0),Ze=new Ke(!1),tn=function(){function t(e){$t(this,t),this.inner=e,this.tag=e.tag}return t.prototype.value=function(){return this.toBool(this.inner.value())},t.prototype.toBool=function(t){return!!t},t}(),en=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.parts=n,i.tag=d(n),i}return Zt(e,t),e.prototype.compute=function(){for(var t=new Array,e=0;e<this.parts.length;e++){var n=this.parts[e].value()
null!==n&&void 0!==n&&(t[e]=S(n))}return t.length>0?t.join(""):null},e}(je)
Se.add(1,function(t,e){var n=e.op1,i=t.stack,r=t.constants.getFunction(n),o=i.pop(),s=r(t,o)
o.clear(),t.stack.push(s)}),Se.add(2,function(t,e){var n=e.op1,i=t.constants.getFunction(n)
t.stack.push(i(t))}),Se.add(5,function(t,e){var n=e.op1,i=t.referenceForSymbol(n)
t.stack.push(i)}),Se.add(4,function(t,e){var n=e.op1,i=t.stack.pop()
t.scope().bindSymbol(n,i)}),Se.add(70,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.scope().getPartialMap(),o=r[i]
void 0===o&&(o=t.getSelf().get(i)),t.stack.push(o)}),Se.add(19,function(t,e){var n=e.op1,i=e.op2
t.pushRootScope(n,!!i)}),Se.add(6,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.stack.pop()
t.stack.push(r.get(i))}),Se.add(7,function(t,e){var n=e.op1,i=n?t.constants.getBlock(n):null
t.stack.push(i)}),Se.add(8,function(t,e){var n=e.op1
t.stack.push(t.scope().getBlock(n))}),Se.add(9,function(t,e){var n=e.op1,i=!!t.scope().getBlock(n)
t.stack.push(i?Qe:Ze)}),Se.add(10,function(t,e){var n=e.op1,i=t.scope().getBlock(n),r=i&&i.symbolTable.parameters.length
t.stack.push(r?Qe:Ze)}),Se.add(11,function(t,e){for(var n=e.op1,i=[],r=n;r>0;r--)i.push(t.stack.pop())
t.stack.push(new en(i.reverse()))})
var nn=function(){function t(){$t(this,t),this.stack=null,this.positional=new rn,this.named=new sn}return t.prototype.empty=function(){return this.setup(null,!0),this},t.prototype.setup=function(t,e){this.stack=t
var n=t.fromTop(0),i=n.length,r=t.fromTop(i+1),o=r+i+2
this.positional.setup(t,o,r),this.named.setup(t,i,n,e)},t.prototype.at=function(t){return this.positional.at(t)},t.prototype.get=function(t){return this.named.get(t)},t.prototype.capture=function(){return{tag:this.tag,length:this.length,positional:this.positional.capture(),named:this.named.capture()}},t.prototype.clear=function(){var t=this.stack,e=this.length
t.pop(e+2)},Qt(t,[{key:"tag",get:function(){return d([this.positional,this.named])}},{key:"length",get:function(){return this.positional.length+this.named.length}}]),t}(),rn=function(){function t(){$t(this,t),this.length=0,this.stack=null,this.start=0,this._tag=null,this._references=null}return t.prototype.setup=function(t,e,n){this.stack=t,this.start=e,this.length=n,this._tag=null,this._references=null},t.prototype.at=function(t){var e=this.start,n=this.length
if(t<0||t>=n)return qe
var i=e-t-1
return this.stack.fromTop(i)},t.prototype.capture=function(){return new on(this.tag,this.references)},Qt(t,[{key:"tag",get:function(){var t=this._tag
return t||(t=this._tag=d(this.references)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.length
t=this._references=new Array(e)
for(var n=0;n<e;n++)t[n]=this.at(n)}return t}}]),t}(),on=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
$t(this,t),this.tag=e,this.references=n,this.length=i}return t.prototype.at=function(t){return this.references[t]},t.prototype.value=function(){return this.references.map(this.valueOf)},t.prototype.get=function(t){var e=this.references,n=this.length
if("length"===t)return Ye.create(n)
var i=parseInt(t,10)
return i<0||i>=n?qe:e[i]},t.prototype.valueOf=function(t){return t.value()},t}(),sn=function(){function t(){$t(this,t),this.length=0,this._tag=null,this._references=null,this._names=null,this._realNames=be}return t.prototype.setup=function(t,e,n,i){this.stack=t,this.length=e,this._tag=null,this._references=null,i?(this._names=n,this._realNames=be):(this._names=null,this._realNames=n)},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.length,i=e.indexOf(t)
if(-1===i)return qe
var r=n-i
return this.stack.fromTop(r)},t.prototype.capture=function(){return new an(this.tag,this.names,this.references)},t.prototype.sliceName=function(t){return t.slice(1)},Qt(t,[{key:"tag",get:function(){return d(this.references)}},{key:"names",get:function(){var t=this._names
return t||(t=this._names=this._realNames.map(this.sliceName)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.names,n=this.length
t=this._references=[]
for(var i=0;i<n;i++)t[i]=this.get(e[i])}return t}}]),t}(),an=function(){function t(e,n,i){$t(this,t),this.tag=e,this.names=n,this.references=i,this.length=n.length,this._map=null}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.references,i=e.indexOf(t)
return-1===i?qe:n[i]},t.prototype.value=function(){for(var t=this.names,e=this.references,n=l(),i=0;i<t.length;i++){n[t[i]]=e[i].value()}return n},Qt(t,[{key:"map",get:function(){var t=this._map
if(!t){var e=this.names,n=this.references
t=this._map=l()
for(var i=0;i<e.length;i++){t[e[i]]=n[i]}}return t}}]),t}(),un=new nn
Se.add(20,function(t){return t.pushChildScope()}),Se.add(21,function(t){return t.popScope()}),Se.add(39,function(t){return t.pushDynamicScope()}),Se.add(40,function(t){return t.popDynamicScope()}),Se.add(12,function(t,e){var n=e.op1
t.stack.push(n)}),Se.add(13,function(t,e){var n=e.op1
t.stack.push(t.constants.getOther(n))}),Se.add(14,function(t,e){var n=e.op1,i=t.stack,r=(n&3<<30)>>>30,o=n&~(3<<30)
switch(r){case 0:i.push(Ye.create(o))
break
case 1:i.push(Ye.create(t.constants.getString(o)))
break
case 2:switch(o){case 0:i.push(Ze)
break
case 1:i.push(Qe)
break
case 2:i.push($e)
break
case 3:i.push(qe)}}}),Se.add(15,function(t,e){var n=e.op1,i=e.op2,r=t.fetchValue(n)-i
t.stack.dup(r)}),Se.add(16,function(t,e){var n=e.op1
return t.stack.pop(n)}),Se.add(17,function(t,e){var n=e.op1
return t.load(n)}),Se.add(18,function(t,e){var n=e.op1
return t.fetch(n)}),Se.add(38,function(t,e){var n=e.op1,i=t.constants.getArray(n)
t.bindDynamicScope(i)}),Se.add(47,function(t){return t.pushFrame()}),Se.add(48,function(t){return t.popFrame()}),Se.add(49,function(t,e){var n=e.op1
return t.enter(n)}),Se.add(50,function(t){return t.exit()}),Se.add(41,function(t){var e=t.stack,n=e.pop()
e.push(n?n.compileDynamic(t.env):null)}),Se.add(42,function(t,e){var n=e.op1,i=t.constants.getBlock(n),r=i.compileStatic(t.env)
t.call(r.handle)}),Se.add(43,function(t,e){var n=e.op1,i=t.constants.getOther(n),r=t.stack.pop()
i.invoke(t,r)}),Se.add(44,function(t,e){var n=e.op1
return t.goto(n)}),Se.add(45,function(t,e){var n=e.op1,i=t.stack.pop()
if(k(i))i.value()&&t.goto(n)
else{var r=new Ue(i)
r.peek()&&t.goto(n),t.updateWith(new ln(r))}}),Se.add(46,function(t,e){var n=e.op1,i=t.stack.pop()
if(k(i))i.value()||t.goto(n)
else{var r=new Ue(i)
r.peek()||t.goto(n),t.updateWith(new ln(r))}}),Se.add(22,function(t){return t.return()}),Se.add(23,function(t,e){var n=e.op1
t.returnTo(n)})
var pn=function(t,e){return new Ve(!!t.value())},cn=function(t,e){return t},hn=function(t,e){return e.toConditionalReference(t)}
Se.add(51,function(t,e){var n=e.op1,i=t.stack,r=i.pop(),o=t.constants.getFunction(n)
i.push(o(r,t.env))})
var ln=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.type="assert",i.tag=n.tag,i.cache=n,i}return Zt(e,t),e.prototype.evaluate=function(t){b(this.cache.revalidate())&&t.throw()},e.prototype.toJSON=function(){var t=this.type,e=this._guid,n=this.cache,i=void 0
try{i=JSON.stringify(n.peek())}catch(t){i=String(n.peek())}return{args:[],details:{expected:i},guid:e,type:t}},e}(Ee),fn=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this))
return r.target=i,r.type="jump-if-not-modified",r.tag=n,r.lastRevision=n.value(),r}return Zt(e,t),e.prototype.evaluate=function(t){var e=this.tag,n=this.target,i=this.lastRevision
!t.alwaysRevalidate&&e.validate(i)&&t.goto(n)},e.prototype.didModify=function(){this.lastRevision=this.tag.value()},e.prototype.toJSON=function(){return{args:[JSON.stringify(this.target.inspect())],guid:this._guid,type:this.type}},e}(Ee),dn=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.target=n,i.type="did-modify",i.tag=Oe,i}return Zt(e,t),e.prototype.evaluate=function(){this.target.didModify()},e}(Ee),yn=function(){function t(e){$t(this,t),this.tag=Oe,this.type="label",this.label=null,this.prev=null,this.next=null,p(this),this.label=e}return t.prototype.evaluate=function(){},t.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},t.prototype.toJSON=function(){return{args:[JSON.stringify(this.inspect())],guid:this._guid,type:this.type}},t}()
Se.add(24,function(t,e){var n=e.op1
t.elements().appendText(t.constants.getString(n))}),Se.add(25,function(t,e){var n=e.op1
t.elements().appendComment(t.constants.getString(n))}),Se.add(27,function(t,e){var n=e.op1
t.elements().openElement(t.constants.getString(n))}),Se.add(28,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.stack.pop()
t.elements().openElement(i,r)}),Se.add(29,function(t){var e=t.stack.pop(),n=t.stack.pop().value()
t.elements().openElement(n,e)}),Se.add(36,function(t){var e=t.stack.pop(),n=t.stack.pop(),i=void 0,r=void 0
if(k(e))i=e.value()
else{var o=new Ue(e)
i=o.peek(),t.updateWith(new ln(o))}if(k(n))r=n.value()
else{var s=new Ue(n)
r=s.peek(),t.updateWith(new ln(s))}t.elements().pushRemoteElement(i,r)}),Se.add(37,function(t){return t.elements().popRemoteElement()})
var mn=function(){function t(){$t(this,t),this.list=null,this.isConst=!0}return t.prototype.append=function(t){var e=this.list,n=this.isConst
null===e&&(e=this.list=[]),e.push(t),this.isConst=n&&k(t)},t.prototype.toReference=function(){var t=this.list,e=this.isConst
return t?e?Ye.create(w(t)):new vn(t):$e},t}(),vn=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.list=[],i.tag=d(n),i.list=n,i}return Zt(e,t),e.prototype.compute=function(){return w(this.list)},e}(je),gn=function(){function t(e){$t(this,t),this.env=e,this.opcodes=null,this.classList=null}return t.prototype.addStaticAttribute=function(t,e,n){"class"===e?this.addClass(Ye.create(n)):this.env.getAppendOperations().setAttribute(t,e,n)},t.prototype.addStaticAttributeNS=function(t,e,n,i){this.env.getAppendOperations().setAttribute(t,n,i,e)},t.prototype.addDynamicAttribute=function(t,e,n,i){if("class"===e)this.addClass(n)
else{var r=this.env.attributeFor(t,e,i),o=new wn(t,r,e,n)
this.addAttribute(o)}},t.prototype.addDynamicAttributeNS=function(t,e,n,i,r){var o=this.env.attributeFor(t,n,r,e),s=new wn(t,o,n,i,e)
this.addAttribute(s)},t.prototype.flush=function(t,e){for(var n=e.env,i=this.opcodes,r=this.classList,o=0;i&&o<i.length;o++)e.updateWith(i[o])
if(r){var s=n.attributeFor(t,"class",!1),a=new wn(t,s,"class",r.toReference()),u=a.flush(n)
u&&e.updateWith(u)}this.opcodes=null,this.classList=null},t.prototype.addClass=function(t){var e=this.classList
e||(e=this.classList=new mn),e.append(t)},t.prototype.addAttribute=function(t){var e=t.flush(this.env)
if(e){var n=this.opcodes
n||(n=this.opcodes=[]),n.push(e)}},t}(),bn=function(){function t(e){$t(this,t),this.env=e,this.attributeNames=null,this.attributes=null,this.classList=null}return t.prototype.addStaticAttribute=function(t,e,n){"class"===e?this.addClass(Ye.create(n)):this.shouldAddAttribute(e)&&this.addAttribute(e,new Sn(t,e,n))},t.prototype.addStaticAttributeNS=function(t,e,n,i){this.shouldAddAttribute(n)&&this.addAttribute(n,new Sn(t,n,i,e))},t.prototype.addDynamicAttribute=function(t,e,n,i){if("class"===e)this.addClass(n)
else if(this.shouldAddAttribute(e)){var r=this.env.attributeFor(t,e,i),o=new wn(t,r,e,n)
this.addAttribute(e,o)}},t.prototype.addDynamicAttributeNS=function(t,e,n,i,r){if(this.shouldAddAttribute(n)){var o=this.env.attributeFor(t,n,r,e),s=new wn(t,o,n,i,e)
this.addAttribute(n,s)}},t.prototype.flush=function(t,e){for(var n=this.env,i=this.attributes,r=this.classList,o=0;i&&o<i.length;o++){var s=i[o].flush(n)
s&&e.updateWith(s)}if(r){var a=n.attributeFor(t,"class",!1),u=new wn(t,a,"class",r.toReference()),p=u.flush(n)
p&&e.updateWith(p)}},t.prototype.shouldAddAttribute=function(t){return!this.attributeNames||-1===this.attributeNames.indexOf(t)},t.prototype.addClass=function(t){var e=this.classList
e||(e=this.classList=new mn),e.append(t)},t.prototype.addAttribute=function(t,e){var i=this.attributeNames,r=this.attributes
i||(i=this.attributeNames=[],r=this.attributes=[]),i.push(t),n(r).push(e)},t}()
Se.add(33,function(t){var e=t.elements(),n="FlushElementOpcode#evaluate"
e.expectOperations(n).flush(e.expectConstructing(n),t),e.flushElement()}),Se.add(34,function(t){return t.elements().closeElement()}),Se.add(30,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.constants.getString(i)
if(r){var a=t.constants.getString(r)
t.elements().setStaticAttributeNS(a,o,s)}else t.elements().setStaticAttribute(o,s)}),Se.add(35,function(t,e){var n=e.op1,i=t.constants.getOther(n),r=t.stack,o=r.pop(),s=o.tag,a=t.elements(),u=a.constructing,p=a.updateOperations,c=t.dynamicScope(),h=i.create(u,o,c,p)
o.clear(),t.env.scheduleInstallModifier(h,i)
var l=i.getDestructor(h)
l&&t.newDestroyable(l),t.updateWith(new kn(s,i,h))})
var kn=function(t){function e(n,i,r){$t(this,e)
var o=te(this,t.call(this))
return o.tag=n,o.manager=i,o.modifier=r,o.type="update-modifier",o.lastUpdated=n.value(),o}return Zt(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.modifier,i=this.tag,r=this.lastUpdated
i.validate(r)||(t.env.scheduleUpdateModifier(n,e),this.lastUpdated=i.value())},e.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},e}(Ee),Sn=function(){function t(e,n,i,r){$t(this,t),this.element=e,this.name=n,this.value=i,this.namespace=r}return t.prototype.flush=function(t){return t.getAppendOperations().setAttribute(this.element,this.name,this.value,this.namespace),null},t}(),wn=function(){function t(e,n,i,r,o){$t(this,t),this.element=e,this.attributeManager=n,this.name=i,this.reference=r,this.namespace=o,this.cache=null,this.tag=r.tag}return t.prototype.patch=function(t){var e=this.element,n=this.cache,r=i(n,"must patch after flush").revalidate()
b(r)&&this.attributeManager.updateAttribute(t,e,r,this.namespace)},t.prototype.flush=function(t){var e=this.reference,n=this.element
if(k(e)){var i=e.value()
return this.attributeManager.setAttribute(t,n,i,this.namespace),null}var r=this.cache=new Ue(e),o=r.peek()
return this.attributeManager.setAttribute(t,n,o,this.namespace),new En(this)},t.prototype.toJSON=function(){var t=this.element,e=this.namespace,n=this.name,r=this.cache,o=E(t),s=i(r,"must serialize after flush").peek()
return e?{element:o,lastValue:s,name:n,namespace:e,type:"attribute"}:{element:o,lastValue:s,name:n,namespace:void 0===e?null:e,type:"attribute"}},t}()
Se.add(32,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.constants.getString(i),a=t.stack.pop()
t.elements().setDynamicAttributeNS(s,o,a,!!r)}),Se.add(31,function(t,e){var n=e.op1,i=e.op2,r=t.constants.getString(n),o=t.stack.pop()
t.elements().setDynamicAttribute(r,o,!!i)})
var En=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.type="patch-element",i.tag=n.tag,i.operation=n,i}return Zt(e,t),e.prototype.evaluate=function(t){this.operation.patch(t.env)},e.prototype.toJSON=function(){var t=this._guid,e=this.type
return{details:this.operation.toJSON(),guid:t,type:e}},e}(Ee)
Se.add(56,function(t,e){var n=e.op1,i=t.constants.getOther(n)
t.stack.push({definition:i,manager:i.manager,component:null})}),Se.add(57,function(t){var e=t.stack,n=e.pop(),i=k(n)?void 0:new Ue(n),r=i?i.peek():n.value()
e.push({definition:r,manager:r.manager,component:null}),i&&t.updateWith(new ln(i))}),Se.add(58,function(t,e){var n=e.op1,i=t.stack
un.setup(i,!!n),i.push(un)}),Se.add(59,function(t,e){var n=e.op1,i=t.stack,r=t.fetchValue(n),o=r.definition,s=r.manager,a=i.pop(),u=s.prepareArgs(o,a)
if(u){a.clear()
for(var p=u.positional,c=u.named,h=p.length,l=0;l<h;l++)i.push(p[l])
i.push(h)
for(var f=Object.keys(c),d=f.length,y=[],m=0;m<d;m++){var v=c[f[m]],g="@"+f[m]
i.push(v),y.push(g)}i.push(y),a.setup(i,!1)}i.push(a)}),Se.add(60,function(t,e){var n,i=e.op1,r=e.op2,o=void 0,s=void 0,a=t.stack.pop(),u=t.dynamicScope(),p=(n=t.fetchValue(r),o=n.definition,s=n.manager,n),c=1&i,h=s.create(t.env,o,a,u,t.getSelf(),!!c)
p.component=h,t.updateWith(new An(a.tag,o.name,h,s,u))}),Se.add(61,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s=r.getDestructor(o)
s&&t.newDestroyable(s)}),Se.add(65,function(t){t.beginCacheGroup(),t.elements().pushSimpleBlock()}),Se.add(62,function(t){t.stack.push(new bn(t.env))}),Se.add(67,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s="DidCreateElementOpcode#evaluate"
r.didCreateElement(o,t.elements().expectConstructing(s),t.elements().expectOperations(s))}),Se.add(63,function(t,e){var n=e.op1,i=t.fetchValue(n)
t.stack.push(i.manager.getSelf(i.component))}),Se.add(64,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.definition,s=i.component
t.stack.push(r.layoutFor(o,s,t.env))}),Se.add(68,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s=t.elements().popBlock()
r.didRenderLayout(o,s),t.env.didCreate(o,r),t.updateWith(new _n(r,o,s))}),Se.add(66,function(t){return t.commitCacheGroup()})
var An=function(t){function e(n,i,r,o,s){$t(this,e)
var a=te(this,t.call(this))
a.name=i,a.component=r,a.manager=o,a.dynamicScope=s,a.type="update-component"
var u=o.getTag(r)
return a.tag=u?m([n,u]):n,a}return Zt(e,t),e.prototype.evaluate=function(t){var e=this.component,n=this.manager,i=this.dynamicScope
n.update(e,i)},e.prototype.toJSON=function(){return{args:[JSON.stringify(this.name)],guid:this._guid,type:this.type}},e}(Ee),_n=function(t){function e(n,i,r){$t(this,e)
var o=te(this,t.call(this))
return o.manager=n,o.component=i,o.bounds=r,o.type="did-update-layout",o.tag=Oe,o}return Zt(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.component,i=this.bounds
e.didUpdateLayout(n,i),t.env.didUpdate(n,e)},e}(Ee),Cn=function t(e,n){$t(this,t),this.element=e,this.nextSibling=n},Nn=function(){function t(e,n,i){$t(this,t),this.parentNode=e,this.first=n,this.last=i}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.first},t.prototype.lastNode=function(){return this.last},t}(),xn=function(){function t(e,n){$t(this,t),this.parentNode=e,this.node=n}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.node},t.prototype.lastNode=function(){return this.node},t}(),On=function(){function t(e){$t(this,t),this.node=e}return t.prototype.firstNode=function(){return this.node},t}(),Tn=function(){function t(e){$t(this,t),this.node=e}return t.prototype.lastNode=function(){return this.node},t}(),Dn=function(){function t(e){$t(this,t),this.bounds=e}return t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.update=function(t){this.bounds=t},t}(),Mn=function(){function t(e,n,i){$t(this,t),this.constructing=null,this.operations=null,this.elementStack=new le,this.nextSiblingStack=new le,this.blockStack=new le,this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM(),this.element=n,this.nextSibling=i,this.defaultOperations=new gn(e),this.pushSimpleBlock(),this.elementStack.push(this.element),this.nextSiblingStack.push(this.nextSibling)}return t.forInitialRender=function(e,n,i){return new t(e,n,i)},t.resume=function(e,n,i){var r=n.parentElement(),o=new t(e,r,i)
return o.pushBlockTracker(n),o},t.prototype.expectConstructing=function(t){return i(this.constructing,t+" should only be called while constructing an element")},t.prototype.expectOperations=function(t){return i(this.operations,t+" should only be called while constructing an element")},t.prototype.block=function(){return i(this.blockStack.current,"Expected a current block tracker")},t.prototype.popElement=function(){var t=this.elementStack,e=this.nextSiblingStack,n=t.pop()
return e.pop(),this.element=i(t.current,"can't pop past the last element"),this.nextSibling=e.current,n},t.prototype.pushSimpleBlock=function(){var t=new Bn(this.element)
return this.pushBlockTracker(t),t},t.prototype.pushUpdatableBlock=function(){var t=new Fn(this.element)
return this.pushBlockTracker(t),t},t.prototype.pushBlockTracker=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),e||n.newBounds(t)),this.blockStack.push(t),t},t.prototype.pushBlockList=function(t){var e=new Rn(this.element,t),n=this.blockStack.current
return null!==n&&(n.newDestroyable(e),n.newBounds(e)),this.blockStack.push(e),e},t.prototype.popBlock=function(){return this.block().finalize(this),i(this.blockStack.pop(),"Expected popBlock to return a block")},t.prototype.openElement=function(t,e){var n=void 0===e?this.defaultOperations:e,i=this.dom.createElement(t,this.element)
return this.constructing=i,this.operations=n,i},t.prototype.flushElement=function(){var t=this.element,e=i(this.constructing,"flushElement should only be called when constructing an element")
this.dom.insertBefore(t,e,this.nextSibling),this.constructing=null,this.operations=null,this.pushElement(e,null),this.block().openElement(e)},t.prototype.pushRemoteElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.pushElement(t,e)
var n=new Ln(t)
this.pushBlockTracker(n,!0)},t.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},t.prototype.pushElement=function(t,e){this.element=t,this.elementStack.push(t),this.nextSibling=e,this.nextSiblingStack.push(e)},t.prototype.newDestroyable=function(t){this.block().newDestroyable(t)},t.prototype.newBounds=function(t){this.block().newBounds(t)},t.prototype.appendText=function(t){var e=this.dom,n=e.createTextNode(t)
return e.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},t.prototype.appendComment=function(t){var e=this.dom,n=e.createComment(t)
return e.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},t.prototype.setStaticAttribute=function(t,e){this.expectOperations("setStaticAttribute").addStaticAttribute(this.expectConstructing("setStaticAttribute"),t,e)},t.prototype.setStaticAttributeNS=function(t,e,n){this.expectOperations("setStaticAttributeNS").addStaticAttributeNS(this.expectConstructing("setStaticAttributeNS"),t,e,n)},t.prototype.setDynamicAttribute=function(t,e,n){this.expectOperations("setDynamicAttribute").addDynamicAttribute(this.expectConstructing("setDynamicAttribute"),t,e,n)},t.prototype.setDynamicAttributeNS=function(t,e,n,i){this.expectOperations("setDynamicAttributeNS").addDynamicAttributeNS(this.expectConstructing("setDynamicAttributeNS"),t,e,n,i)},t.prototype.closeElement=function(){this.block().closeElement(),this.popElement()},t}(),Bn=function(){function t(e){$t(this,t),this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return t.prototype.destroy=function(){var t=this.destroyables
if(t&&t.length)for(var e=0;e<t.length;e++)t[e].destroy()},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){return this.first&&this.first.firstNode()},t.prototype.lastNode=function(){return this.last&&this.last.lastNode()},t.prototype.openElement=function(t){this.newNode(t),this.nesting++},t.prototype.closeElement=function(){this.nesting--},t.prototype.newNode=function(t){0===this.nesting&&(this.first||(this.first=new On(t)),this.last=new Tn(t))},t.prototype.newBounds=function(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)},t.prototype.newDestroyable=function(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)},t.prototype.finalize=function(t){this.first||t.appendComment("")},t}(),Ln=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),C(this)},e}(Bn),Fn=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.reset=function(t){var e=this.destroyables
if(e&&e.length)for(var n=0;n<e.length;n++)t.didDestroy(e[n])
var i=C(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,i},e}(Bn),Rn=function(){function t(e,n){$t(this,t),this.parent=e,this.boundList=n,this.parent=e,this.boundList=n}return t.prototype.destroy=function(){this.boundList.forEachNode(function(t){return t.destroy()})},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){var t=this.boundList.head()
return t&&t.firstNode()},t.prototype.lastNode=function(){var t=this.boundList.tail()
return t&&t.lastNode()},t.prototype.openElement=function(t){s(!1,"Cannot openElement directly inside a block list")},t.prototype.closeElement=function(){s(!1,"Cannot closeElement directly inside a block list")},t.prototype.newNode=function(t){s(!1,"Cannot create a new node directly inside a block list")},t.prototype.newBounds=function(t){},t.prototype.newDestroyable=function(t){},t.prototype.finalize=function(t){},t}(),In="COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]",jn=function t(e,n,i){$t(this,t),this[In]=!0,this.name=e,this.manager=n,this.ComponentClass=i},Pn=function t(e){$t(this,t),this.bounds=e},Un=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this,n))
return r.textNode=i,r}return Zt(e,t),e.insert=function(t,n,i){var r=t.createTextNode(i)
return t.insertBefore(n.element,r,n.nextSibling),new e(new xn(n.element,r),r)},e.prototype.update=function(t,e){if(T(e)){return this.textNode.nodeValue=e,!0}return!1},e}(Pn),Hn=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.insert=function(t,n,i){return new e(t.insertHTMLBefore(n.element,n.nextSibling,i))},e.prototype.update=function(t,e){if(T(e)){var n=this.bounds,i=n.parentElement(),r=C(n)
return this.bounds=t.insertHTMLBefore(i,r,e),!0}return!1},e}(Pn),Vn=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this,n))
return r.lastStringValue=i,r}return Zt(e,t),e.insert=function(t,n,i){var r=i.toHTML()
return new e(t.insertHTMLBefore(n.element,n.nextSibling,r),r)},e.prototype.update=function(t,e){if(x(e)){var n=e.toHTML()
if(n!==this.lastStringValue){var i=this.bounds,r=i.parentElement(),o=C(i)
this.bounds=t.insertHTMLBefore(r,o,n),this.lastStringValue=n}return!0}return!1},e}(Pn),zn=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.insert=function(t,n,i){return t.insertBefore(n.element,i,n.nextSibling),new e(A(n.element,i))},e.prototype.update=function(t,e){if(O(e)){var n=this.bounds,i=n.parentElement(),r=C(n)
return this.bounds=t.insertNodeBefore(i,e,r),!0}return!1},e}(Pn)
Se.add(26,function(t,e){var n=e.op1
t.constants.getOther(n).evaluate(t)})
var Jn=function(){function t(){$t(this,t)}return t.prototype.evaluate=function(t){var e=t.stack.pop(),n=this.normalize(e),i=void 0,r=void 0
k(e)?i=n.value():(r=new Ue(n),i=r.peek())
var o=t.elements(),s=this.insert(t.env.getAppendOperations(),o,i),a=new Dn(s.bounds)
o.newBounds(a),r&&t.updateWith(this.updateWith(t,e,r,a,s))},t}(),Wn=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.create=function(t){return new e(t)},e.prototype.toBool=function(t){return N(t)},e}(tn),Gn=function(t){function e(n,i,r){$t(this,e)
var o=te(this,t.call(this))
return o.cache=n,o.bounds=i,o.upsert=r,o.tag=n.tag,o}return Zt(e,t),e.prototype.evaluate=function(t){var e=this.cache.revalidate()
if(b(e)){var n=this.bounds,i=this.upsert,r=t.dom
if(!this.upsert.update(r,e)){var o=new Cn(n.parentElement(),C(n))
i=this.upsert=this.insert(t.env.getAppendOperations(),o,e)}n.update(i.bounds)}},e.prototype.toJSON=function(){var t=this._guid,e=this.type,n=this.cache
return{details:{lastValue:JSON.stringify(n.peek())},guid:t,type:e}},e}(Ee),Yn=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.type="optimized-cautious-append",n}return Zt(e,t),e.prototype.normalize=function(t){return g(t,R)},e.prototype.insert=function(t,e,n){return D(t,e,n)},e.prototype.updateWith=function(t,e,n,i,r){return new Xn(n,i,r)},e}(Jn),Xn=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.type="optimized-cautious-update",n}return Zt(e,t),e.prototype.insert=function(t,e,n){return D(t,e,n)},e}(Gn),Kn=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.type="optimized-trusting-append",n}return Zt(e,t),e.prototype.normalize=function(t){return g(t,F)},e.prototype.insert=function(t,e,n){return M(t,e,n)},e.prototype.updateWith=function(t,e,n,i,r){return new qn(n,i,r)},e}(Jn),qn=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.type="optimized-trusting-update",n}return Zt(e,t),e.prototype.insert=function(t,e,n){return M(t,e,n)},e}(Gn),$n=I,Qn=function(){function t(e,n,i){$t(this,t),this.scope=e,this.locals=l()
for(var r=0;r<i.length;r++){var o=i[r],s=n[o-1],a=e.getSymbol(o)
this.locals[s]=a}}return t.prototype.get=function(t){var e=this.scope,n=this.locals,i=t.split("."),r=t.split("."),o=r[0],s=r.slice(1),a=e.getEvalScope(),u=void 0
return"this"===o?u=e.getSelf():n[o]?u=n[o]:0===o.indexOf("@")&&a[o]?u=a[o]:(u=this.scope.getSelf(),s=i),s.reduce(function(t,e){return t.get(e)},u)},t}()
Se.add(71,function(t,e){var n=e.op1,i=e.op2,r=t.constants.getOther(n),o=t.constants.getArray(i),s=new Qn(t.scope(),r,o)
$n(t.getSelf().value(),function(t){return s.get(t).value()})}),Se.add(69,function(t){var e=t.stack,n=e.pop()
e.push(n.value().template.asPartial())})
var Zn=function(){function t(e){$t(this,t),this.tag=e.tag,this.artifacts=e}return t.prototype.value=function(){return!this.artifacts.isEmpty()},t}()
Se.add(54,function(t){var e=t.stack,n=e.pop(),i=e.pop(),r=t.env.iterableFor(n,i.value()),o=new We(r)
e.push(o),e.push(new Zn(o.artifacts))}),Se.add(52,function(t,e){var n=e.op1
t.enterList(n)}),Se.add(53,function(t){return t.exitList()}),Se.add(55,function(t,e){var n=e.op1,i=t.stack,r=i.peek().next()
if(r){var o=t.iterate(r.memo,r.value)
t.enterItem(r.key,o)}else t.goto(n)})
var ti;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.FlushElement=7]="FlushElement",t[t.CloseElement=8]="CloseElement",t[t.StaticAttr=9]="StaticAttr",t[t.DynamicAttr=10]="DynamicAttr",t[t.Yield=11]="Yield",t[t.Partial=12]="Partial",t[t.DynamicArg=13]="DynamicArg",t[t.StaticArg=14]="StaticArg",t[t.TrustingAttr=15]="TrustingAttr",t[t.Debugger=16]="Debugger",t[t.ClientSideStatement=17]="ClientSideStatement",t[t.Unknown=18]="Unknown",t[t.Get=19]="Get",t[t.MaybeLocal=20]="MaybeLocal",t[t.FixThisBeforeWeMerge=21]="FixThisBeforeWeMerge",t[t.HasBlock=22]="HasBlock",t[t.HasBlockParams=23]="HasBlockParams",t[t.Undefined=24]="Undefined",t[t.Helper=25]="Helper",t[t.Concat=26]="Concat",t[t.ClientSideExpression=27]="ClientSideExpression"})(ti||(ti={}))
var ei;(function(t){function e(t){return null===t||"object"!==(void 0===t?"undefined":qt(t))}t.isUnknown=j(ti.Unknown),t.isGet=j(ti.Get),t.isConcat=j(ti.Concat),t.isHelper=j(ti.Helper),t.isHasBlock=j(ti.HasBlock),t.isHasBlockParams=j(ti.HasBlockParams),t.isUndefined=j(ti.Undefined),t.isClientSide=j(ti.ClientSideExpression),t.isMaybeLocal=j(ti.MaybeLocal),t.isPrimitiveValue=e})(ei||(ei={}))
var ni;(function(t){function e(t){return t[0]===ti.StaticAttr||t[0]===ti.DynamicAttr||t[0]===ti.TrustingAttr}function n(t){return t[0]===ti.StaticArg||t[0]===ti.DynamicArg}function i(t){return e(t)||n(t)}function r(t){return t[1]}t.isText=j(ti.Text),t.isAppend=j(ti.Append),t.isComment=j(ti.Comment),t.isModifier=j(ti.Modifier),t.isBlock=j(ti.Block),t.isComponent=j(ti.Component),t.isOpenElement=j(ti.OpenElement),t.isFlushElement=j(ti.FlushElement),t.isCloseElement=j(ti.CloseElement),t.isStaticAttr=j(ti.StaticAttr),t.isDynamicAttr=j(ti.DynamicAttr),t.isYield=j(ti.Yield),t.isPartial=j(ti.Partial),t.isDynamicArg=j(ti.DynamicArg),t.isStaticArg=j(ti.StaticArg),t.isTrustingAttr=j(ti.TrustingAttr),t.isDebugger=j(ti.Debugger),t.isClientSide=j(ti.ClientSideStatement),t.isAttribute=e,t.isArgument=n,t.isParameter=i,t.getParameterName=r})(ni||(ni={}))
var ii;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.DidRenderLayout=2]="DidRenderLayout",t[t.FunctionExpression=3]="FunctionExpression"})(ii||(ii={}))
var ri=function t(e){$t(this,t),this.handle=e},oi=function t(e,n){$t(this,t),this.handle=e,this.symbolTable=n},si=function(){function t(e){$t(this,t),this.env=e}return t.prototype.wrapLayout=function(t){this.inner=new ai(this.env,t)},t.prototype.fromLayout=function(t,e){this.inner=new ui(this.env,t,e)},t.prototype.compile=function(){return this.inner.compile()},Qt(t,[{key:"tag",get:function(){return this.inner.tag}},{key:"attrs",get:function(){return this.inner.attrs}}]),t}(),ai=function(){function t(e,n){$t(this,t),this.env=e,this.layout=n,this.tag=new pi,this.attrs=new ci}return t.prototype.compile=function(){var t=this.env,e=this.layout,n={templateMeta:e.meta,symbols:e.symbols,asPartial:!1},i=this.tag.getDynamic(),r=this.tag.getStatic(),o=U(t,n)
if(o.startLabels(),i?(o.fetch(ge.s1),z(i,o),o.dup(),o.load(ge.s1),o.test("simple"),o.jumpUnless("BODY"),o.fetch(ge.s1),o.pushComponentOperations(),o.openDynamicElement()):r&&(o.pushComponentOperations(),o.openElementWithOperations(r)),i||r){o.didCreateElement(ge.s0)
for(var s=this.attrs.buffer,a=0;a<s.length;a++)G(s[a],o)
o.flushElement()}o.label("BODY"),o.invokeStatic(e.asBlock()),i?(o.fetch(ge.s1),o.test("simple"),o.jumpUnless("END"),o.closeElement()):r&&o.closeElement(),o.label("END"),o.didRenderLayout(ge.s0),i&&o.load(ge.s1),o.stopLabels()
var u=o.start
o.finalize()
return new oi(u,{meta:n,hasEval:e.hasEval,symbols:e.symbols.concat([vi])})},t}(),ui=function(){function t(e,n,i){$t(this,t),this.env=e,this.componentName=n,this.layout=i,this.attrs=new ci}return t.prototype.compile=function(){var t=this.env
return this.layout.asLayout(this.componentName,this.attrs.buffer).compileDynamic(t)},Qt(t,[{key:"tag",get:function(){throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")}}]),t}(),pi=function(){function t(){$t(this,t),this.isDynamic=null,this.isStatic=null,this.staticTagName=null,this.dynamicTagName=null}return t.prototype.getDynamic=function(){if(this.isDynamic)return this.dynamicTagName},t.prototype.getStatic=function(){if(this.isStatic)return this.staticTagName},t.prototype.static=function(t){this.isStatic=!0,this.staticTagName=t},t.prototype.dynamic=function(t){this.isDynamic=!0,this.dynamicTagName=[ti.ClientSideExpression,ii.FunctionExpression,t]},t}(),ci=function(){function t(){$t(this,t),this.buffer=[]}return t.prototype.static=function(t,e){this.buffer.push([ti.StaticAttr,t,e,null])},t.prototype.dynamic=function(t,e){this.buffer.push([ti.DynamicAttr,t,[ti.ClientSideExpression,ii.FunctionExpression,e],null])},t}(),hi=function(){function t(e){$t(this,t),this.builder=e,this.env=e.env}return t.prototype.static=function(t,e){var n=e[0],i=e[1],r=e[2],o=e[3],s=this.builder
s.pushComponentManager(t),s.invokeComponent(null,n,i,r,o)},t.prototype.dynamic=function(t,e,n){function i(t,n){return e(t,n,p)}var r=n[0],o=n[1],s=n[2],a=n[3],u=this.builder
if(!t||0===t.length)throw new Error("Dynamic syntax without an argument")
var p=this.builder.meta.templateMeta
u.startLabels(),u.pushFrame(),u.returnTo("END"),u.compileArgs(t[0],t[1],!0),u.helper(i),u.dup(),u.test("simple"),u.enter(2),u.jumpUnless("ELSE"),u.pushDynamicComponentManager(),u.invokeComponent(null,r,o,s,a),u.label("ELSE"),u.exit(),u.return(),u.label("END"),u.popFrame(),u.stopLabels()},t}(),li=function(){function t(e,n,i){$t(this,t),this.meta=e,this.statements=n,this.parameters=i}return t.prototype.scan=function(){return new Ti(this.statements,{parameters:this.parameters,meta:this.meta})},t}(),fi=function(){function t(){$t(this,t),this.labels=l(),this.targets=[]}return t.prototype.label=function(t,e){this.labels[t]=e},t.prototype.target=function(t,e,n){this.targets.push({at:t,Target:e,target:n})},t.prototype.patch=function(t){for(var e=this.targets,n=this.labels,i=0;i<e.length;i++){var r=e[i],o=r.at,s=r.target,a=n[s]-o
t.heap.setbyaddr(o+1,a)}},t}(),di=function(){function t(e,n,i){$t(this,t),this.env=e,this.meta=n,this.program=i,this.labelsStack=new le,this.constants=i.constants,this.heap=i.heap,this.start=this.heap.malloc()}return t.prototype.upvars=function(t){return u(t)},t.prototype.reserve=function(t){this.push(t,0,0,0)},t.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
this.heap.push(t),this.heap.push(e),this.heap.push(n),this.heap.push(i)},t.prototype.finalize=function(){return this.push(22),this.heap.finishMalloc(this.start),this.start},t.prototype.pushArgs=function(t){this.push(58,!0===t?1:0)},t.prototype.startLabels=function(){this.labelsStack.push(new fi)},t.prototype.stopLabels=function(){i(this.labelsStack.pop(),"unbalanced push and pop labels").patch(this.program)},t.prototype.pushComponentManager=function(t){this.push(56,this.other(t))},t.prototype.pushDynamicComponentManager=function(){this.push(57)},t.prototype.prepareArgs=function(t){this.push(59,t)},t.prototype.createComponent=function(t,e,n){var i=(!0===e?1:0)|(!0===n?1:0)<<1
this.push(60,i,t)},t.prototype.registerComponentDestructor=function(t){this.push(61,t)},t.prototype.beginComponentTransaction=function(){this.push(65)},t.prototype.commitComponentTransaction=function(){this.push(66)},t.prototype.pushComponentOperations=function(){this.push(62)},t.prototype.getComponentSelf=function(t){this.push(63,t)},t.prototype.getComponentLayout=function(t){this.push(64,t)},t.prototype.didCreateElement=function(t){this.push(67,t)},t.prototype.didRenderLayout=function(t){this.push(68,t)},t.prototype.getPartialTemplate=function(){this.push(69)},t.prototype.resolveMaybeLocal=function(t){this.push(70,this.string(t))},t.prototype.debugger=function(t,e){this.push(71,this.constants.other(t),this.constants.array(e))},t.prototype.dynamicContent=function(t){this.push(26,this.other(t))},t.prototype.cautiousAppend=function(){this.dynamicContent(new Yn)},t.prototype.trustingAppend=function(){this.dynamicContent(new Kn)},t.prototype.text=function(t){this.push(24,this.constants.string(t))},t.prototype.openPrimitiveElement=function(t){this.push(27,this.constants.string(t))},t.prototype.openElementWithOperations=function(t){this.push(28,this.constants.string(t))},t.prototype.openDynamicElement=function(){this.push(29)},t.prototype.flushElement=function(){this.push(33)},t.prototype.closeElement=function(){this.push(34)},t.prototype.staticAttr=function(t,e,n){var i=this.constants.string(t),r=e?this.constants.string(e):0,o=this.constants.string(n)
this.push(30,i,o,r)},t.prototype.dynamicAttrNS=function(t,e,n){var i=this.constants.string(t),r=this.constants.string(e)
this.push(32,i,r,!0===n?1:0)},t.prototype.dynamicAttr=function(t,e){var n=this.constants.string(t)
this.push(31,n,!0===e?1:0)},t.prototype.comment=function(t){var e=this.constants.string(t)
this.push(25,e)},t.prototype.modifier=function(t){this.push(35,this.other(t))},t.prototype.putIterator=function(){this.push(54)},t.prototype.enterList=function(t){this.reserve(52),this.labels.target(this.pos,52,t)},t.prototype.exitList=function(){this.push(53)},t.prototype.iterate=function(t){this.reserve(55),this.labels.target(this.pos,55,t)},t.prototype.setVariable=function(t){this.push(4,t)},t.prototype.getVariable=function(t){this.push(5,t)},t.prototype.getProperty=function(t){this.push(6,this.string(t))},t.prototype.getBlock=function(t){this.push(8,t)},t.prototype.hasBlock=function(t){this.push(9,t)},t.prototype.hasBlockParams=function(t){this.push(10,t)},t.prototype.concat=function(t){this.push(11,t)},t.prototype.function=function(t){this.push(2,this.func(t))},t.prototype.load=function(t){this.push(17,t)},t.prototype.fetch=function(t){this.push(18,t)},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.sp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(15,t,e)},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(16,t)},t.prototype.pushRemoteElement=function(){this.push(36)},t.prototype.popRemoteElement=function(){this.push(37)},t.prototype.label=function(t){this.labels.label(t,this.nextPos)},t.prototype.pushRootScope=function(t,e){this.push(19,t,e?1:0)},t.prototype.pushChildScope=function(){this.push(20)},t.prototype.popScope=function(){this.push(21)},t.prototype.returnTo=function(t){this.reserve(23),this.labels.target(this.pos,23,t)},t.prototype.pushDynamicScope=function(){this.push(39)},t.prototype.popDynamicScope=function(){this.push(40)},t.prototype.pushImmediate=function(t){this.push(13,this.other(t))},t.prototype.primitive=function(t){var e=0,n=void 0
switch(void 0===t?"undefined":qt(t)){case"number":n=t
break
case"string":n=this.string(t),e=1
break
case"boolean":n=0|t,e=2
break
case"object":n=2,e=2
break
case"undefined":n=3,e=2
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(14,e<<30|n)},t.prototype.helper=function(t){this.push(1,this.func(t))},t.prototype.pushBlock=function(t){this.push(7,this.block(t))},t.prototype.bindDynamicScope=function(t){this.push(38,this.names(t))},t.prototype.enter=function(t){this.push(49,t)},t.prototype.exit=function(){this.push(50)},t.prototype.return=function(){this.push(22)},t.prototype.pushFrame=function(){this.push(47)},t.prototype.popFrame=function(){this.push(48)},t.prototype.compileDynamicBlock=function(){this.push(41)},t.prototype.invokeDynamic=function(t){this.push(43,this.other(t))},t.prototype.invokeStatic=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.symbolTable.parameters,i=n.length,r=Math.min(e,i)
if(this.pushFrame(),r){this.pushChildScope()
for(var o=0;o<r;o++)this.dup(ge.fp,e-o),this.setVariable(n[o])}var s=this.constants.block(t)
this.push(42,s),r&&this.popScope(),this.popFrame()},t.prototype.test=function(t){var e=void 0
if("const"===t)e=pn
else if("simple"===t)e=cn
else if("environment"===t)e=hn
else{if("function"!=typeof t)throw new Error("unreachable")
e=t}var n=this.constants.function(e)
this.push(51,n)},t.prototype.jump=function(t){this.reserve(44),this.labels.target(this.pos,44,t)},t.prototype.jumpIf=function(t){this.reserve(45),this.labels.target(this.pos,45,t)},t.prototype.jumpUnless=function(t){this.reserve(46),this.labels.target(this.pos,46,t)},t.prototype.string=function(t){return this.constants.string(t)},t.prototype.names=function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n]
e[n]=this.constants.string(i)}return this.constants.array(e)},t.prototype.symbols=function(t){return this.constants.array(t)},t.prototype.other=function(t){return this.constants.other(t)},t.prototype.block=function(t){return t?this.constants.block(t):0},t.prototype.func=function(t){return this.constants.function(t)},Qt(t,[{key:"pos",get:function(){return o(this.heap.size())}},{key:"nextPos",get:function(){return this.heap.size()}},{key:"labels",get:function(){return i(this.labelsStack.current,"bug: not in a label stack")}}]),t}(),yi=function(t){function e(n,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.program
$t(this,e)
var o=te(this,t.call(this,n,i,r))
return o.component=new hi(o),o}return Zt(e,t),e.prototype.compileArgs=function(t,e,n){var i=0
if(t){for(var r=0;r<t.length;r++)z(t[r],this)
i=t.length}this.pushImmediate(i)
var o=be
if(e){o=e[0]
for(var s=e[1],a=0;a<s.length;a++)z(s[a],this)}this.pushImmediate(o),this.pushArgs(n)},e.prototype.compile=function(t){return H(t)?t.compile(this):t},e.prototype.guardedAppend=function(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),z(t,this),this.dup(),this.test(function(t){return Wn.create(t)}),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(),this.invokeComponent(null,null,null,null,null),this.exit(),this.return(),this.label("ELSE"),e?this.trustingAppend():this.cautiousAppend(),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},e.prototype.invokeComponent=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
this.fetch(ge.s0),this.dup(ge.sp,1),this.load(ge.s0),this.pushBlock(i),this.pushBlock(r),this.compileArgs(e,n,!1),this.prepareArgs(ge.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(ge.s0,null!==i,null!==r),this.registerComponentDestructor(ge.s0),this.getComponentSelf(ge.s0),this.getComponentLayout(ge.s0),this.invokeDynamic(new Si(t&&t.scan())),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(ge.s0)},e.prototype.template=function(t){return t?new li(this.meta,t.statements,t.parameters):null},e}(di),mi=ti,vi="&attrs",gi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
$t(this,t),this.offset=e,this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.compile=function(t,e){var n=t[this.offset],i=this.names[n],r=this.funcs[i]
s(!!r,"expected an implementation for "+(0===this.offset?mi[t[0]]:ii[t[1]])),r(t,e)},t}(),bi=new gi,ki=new gi(1)
bi.add(mi.Text,function(t,e){e.text(t[1])}),bi.add(mi.Comment,function(t,e){e.comment(t[1])}),bi.add(mi.CloseElement,function(t,e){e.closeElement()}),bi.add(mi.FlushElement,function(t,e){e.flushElement()}),bi.add(mi.Modifier,function(t,e){var n=e.env,i=e.meta,r=t[1],o=t[2],s=t[3]
if(!n.hasModifier(r,i.templateMeta))throw new Error("Compile Error "+r+" is not a modifier: Helpers may not be used in the element form.")
e.compileArgs(o,s,!0),e.modifier(n.lookupModifier(r,i.templateMeta))}),bi.add(mi.StaticAttr,function(t,e){var n=t[1],i=t[2],r=t[3]
e.staticAttr(n,r,i)}),bi.add(mi.DynamicAttr,function(t,e){V(t,!1,e)}),bi.add(mi.TrustingAttr,function(t,e){V(t,!0,e)}),bi.add(mi.OpenElement,function(t,e){e.openPrimitiveElement(t[1])}),ki.add(ii.OpenComponentElement,function(t,e){e.pushComponentOperations(),e.openElementWithOperations(t[2])}),ki.add(ii.DidCreateElement,function(t,e){e.didCreateElement(ge.s0)}),ki.add(ii.DidRenderLayout,function(t,e){e.didRenderLayout(ge.s0)}),bi.add(mi.Append,function(t,e){var n=t[1],i=t[2]
if(!0!==(e.env.macros().inlines.compile(t,e)||n)){var r=Ci.isGet(n),o=Ci.isMaybeLocal(n)
i?e.guardedAppend(n,!0):r||o?e.guardedAppend(n,!1):(z(n,e),e.cautiousAppend())}}),bi.add(mi.Block,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4],s=t[5],a=e.template(o),u=e.template(s),p=a&&a.scan(),c=u&&u.scan()
e.env.macros().blocks.compile(n,i,r,p,c,e)})
var Si=function(){function t(e){$t(this,t),this.attrs=e}return t.prototype.invoke=function(t,e){var n=e.symbolTable,i=n.symbols,r=n.hasEval,o=t.stack,a=t.pushRootScope(i.length+1,!0)
a.bindSelf(o.pop()),a.bindBlock(i.indexOf(vi)+1,this.attrs)
var u=null
r&&(i.indexOf("$eval")+1,u=l())
for(var p=o.pop(),c=p.length-1;c>=0;c--){var h=i.indexOf(p[c]),f=o.pop();-1!==h&&a.bindSymbol(h+1,f),r&&(u[p[c]]=f)}var d=o.pop()
s("number"==typeof d,"[BUG] Incorrect value of positional argument count found during invoke-dynamic-layout."),o.pop(d)
var y=i.indexOf("&inverse"),m=o.pop();-1!==y&&a.bindBlock(y+1,m),u&&(u["&inverse"]=m)
var v=i.indexOf("&default"),g=o.pop();-1!==v&&a.bindBlock(v+1,g),u&&(u["&default"]=g),u&&a.bindEvalScope(u),t.pushFrame(),t.call(e.handle)},t.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-layout>"}},t}()
bi.add(mi.Component,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4]
if(e.env.hasComponentDefinition(n,e.meta.templateMeta)){var s=e.template(o),a=new li(e.meta,i,be),u=e.env.getComponentDefinition(n,e.meta.templateMeta)
e.pushComponentManager(u),e.invokeComponent(a,null,r,s&&s.scan())}else{if(o&&o.parameters.length)throw new Error("Compile Error: Cannot find component "+n)
e.openPrimitiveElement(n)
for(var p=0;p<i.length;p++)bi.compile(i[p],e)
if(e.flushElement(),o)for(var c=o.statements,h=0;h<c.length;h++)bi.compile(c[h],e)
e.closeElement()}})
var wi=function(){function t(e,n){$t(this,t),this.outerSymbols=e,this.evalInfo=n}return t.prototype.invoke=function(t,e){var i=n(e),r=i.symbolTable.symbols,o=t.scope(),s=t.pushRootScope(r.length,!1)
s.bindCallerScope(o.getCallerScope()),s.bindEvalScope(o.getEvalScope()),s.bindSelf(o.getSelf())
for(var a=this.evalInfo,u=this.outerSymbols,p=l(),c=0;c<a.length;c++){var h=a[c],f=u[h-1],d=o.getSymbol(h)
p[f]=d}for(var y=o.getEvalScope(),m=0;m<r.length;m++){var v=r[m],g=m+1,b=y[v]
void 0!==b&&s.bind(g,b)}s.bindPartialMap(p),t.pushFrame(),t.call(i.handle)},t}()
bi.add(mi.Partial,function(t,e){function n(t,e){var n=t.env
return g(e.positional.at(0),function(t){if("string"==typeof t&&t){if(!n.hasPartial(t,s))throw new Error('Could not find a partial named "'+t+'"')
return n.lookupPartial(t,s)}if(t)throw new Error('Could not find a partial named "'+String(t)+'"')
return null})}var i=t[1],r=t[2],o=e.meta,s=o.templateMeta,a=o.symbols
e.startLabels(),e.pushFrame(),e.returnTo("END"),z(i,e),e.pushImmediate(1),e.pushImmediate(be),e.pushArgs(!0),e.helper(n),e.dup(),e.test("simple"),e.enter(2),e.jumpUnless("ELSE"),e.getPartialTemplate(),e.compileDynamicBlock(),e.invokeDynamic(new wi(a,r)),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()})
var Ei=function(){function t(e){$t(this,t),this.callerCount=e}return t.prototype.invoke=function(t,e){var n=this.callerCount,i=t.stack
if(!e)return t.pushFrame(),void t.pushCallerScope()
var r=e.symbolTable,o=r.parameters,s=o?o.length:0,a=Math.min(n,s)
t.pushFrame(),t.pushCallerScope(s>0)
for(var u=t.scope(),p=0;p<a;p++)u.bindSymbol(o[p],i.fromBase(n-p))
t.call(e.handle)},t.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-yield caller-count="+this.callerCount+">"}},t}()
bi.add(mi.Yield,function(t,e){var n=t[1],i=t[2],r=J(i,e)
e.getBlock(n),e.compileDynamicBlock(),e.invokeDynamic(new Ei(r)),e.popScope(),e.popFrame(),r&&e.pop(r)}),bi.add(mi.Debugger,function(t,e){var n=t[1]
e.debugger(e.meta.symbols,n)}),bi.add(mi.ClientSideStatement,function(t,e){ki.compile(t,e)})
var Ai=new gi,_i=new gi(1),Ci=ei
Ai.add(mi.Unknown,function(t,e){var n=t[1]
e.env.hasHelper(n,e.meta.templateMeta)?Ai.compile([mi.Helper,n,be,null],e):e.meta.asPartial?e.resolveMaybeLocal(n):(e.getVariable(0),e.getProperty(n))}),Ai.add(mi.Concat,function(t,e){for(var n=t[1],i=0;i<n.length;i++)z(n[i],e)
e.concat(n.length)}),_i.add(ii.FunctionExpression,function(t,e){e.function(t[2])}),Ai.add(mi.Helper,function(t,e){var n=e.env,i=e.meta,r=t[1],o=t[2],s=t[3]
if(!n.hasHelper(r,i.templateMeta))throw new Error("Compile Error: "+r+" is not a helper")
e.compileArgs(o,s,!0),e.helper(n.lookupHelper(r,i.templateMeta))}),Ai.add(mi.Get,function(t,e){var n=t[1],i=t[2]
e.getVariable(n)
for(var r=0;r<i.length;r++)e.getProperty(i[r])}),Ai.add(mi.MaybeLocal,function(t,e){var n=t[1]
if(e.meta.asPartial){var i=n[0]
n=n.slice(1),e.resolveMaybeLocal(i)}else e.getVariable(0)
for(var r=0;r<n.length;r++)e.getProperty(n[r])}),Ai.add(mi.Undefined,function(t,e){return e.primitive(void 0)}),Ai.add(mi.HasBlock,function(t,e){e.hasBlock(t[1])}),Ai.add(mi.HasBlockParams,function(t,e){e.hasBlockParams(t[1])}),Ai.add(mi.ClientSideExpression,function(t,e){_i.compile(t,e)})
var Ni=function(){function t(){$t(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e,n,i,r,o){var a=this.names[t]
if(void 0===a){s(!!this.missing,t+" not found, and no catch-all block handler was registered")
s(!!(0,this.missing)(t,e,n,i,r,o),t+" not found, and the catch-all block handler didn't handle it")}else{(0,this.funcs[a])(e,n,i,r,o)}},t}(),xi=new Ni,Oi=function(){function t(){$t(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e){var n=t[1]
if(!Array.isArray(n))return["expr",n]
var i=void 0,r=void 0,o=void 0
if(n[0]===mi.Helper)i=n[1],r=n[2],o=n[3]
else{if(n[0]!==mi.Unknown)return["expr",n]
i=n[1],r=o=null}var s=this.names[i]
if(void 0===s&&this.missing){var a=this.missing,u=a(i,r,o,e)
return!1===u?["expr",n]:u}if(void 0!==s){var p=this.funcs[s],c=p(i,r,o,e)
return!1===c?["expr",n]:c}return["expr",n]},t}()
W(xi,new Oi)
var Ti=function(){function t(e,n){$t(this,t),this.statements=e,this.symbolTable=n,this.compiledStatic=null,this.compiledDynamic=null}return t.prototype.compileStatic=function(t){var e=this.compiledStatic
if(!e){var n=Y(this.statements,this.symbolTable.meta,t)
n.finalize()
var i=n.start
e=this.compiledStatic=new ri(i)}return e},t.prototype.compileDynamic=function(t){var e=this.compiledDynamic
if(!e){var n=this.compileStatic(t)
e=new oi(n.handle,this.symbolTable)}return e},t}(),Di=ti,Mi=function(){function t(e,n){$t(this,t),this.block=e,this.env=n}return t.prototype.scanEntryPoint=function(t){var e=this.block,n=e.statements,i=e.symbols,r=e.hasEval
return new Ti(n,{meta:t,symbols:i,hasEval:r})},t.prototype.scanBlock=function(t){var e=this.block,n=e.statements
return new Ti(n,{meta:t,parameters:be})},t.prototype.scanLayout=function(t,e,n){for(var i=this.block,r=i.statements,o=i.symbols,s=i.hasEval,a={meta:t,hasEval:s,symbols:o},u=[],p=void 0,c=!1,h=0;h<r.length;h++){var l=r[h]
if(ni.isComponent(l)){var f=l[1]
this.env.hasComponentDefinition(f,t.templateMeta)?void 0===p&&f===n?(p=f,K(f,o,e,u),X(l,u)):u.push(l):(void 0!==p?u.push([Di.OpenElement,f]):(p=f,K(f,o,e,u)),X(l,u))}else if(void 0===p&&ni.isOpenElement(l))p=l[1],c=!0,K(p,o,e,u)
else{if(c)if(ni.isFlushElement(l))c=!1
else if(ni.isModifier(l))throw Error('Found modifier "'+l[1]+'" on the top-level element of "'+n+'". Modifiers cannot be on the top-level element')
u.push(l)}}return u.push([Di.ClientSideStatement,ii.DidRenderLayout]),new Ti(u,a)},t}(),Bi=function(){function t(){$t(this,t),this.references=[],this.strings=[],this.expressions=[],this.arrays=[],this.blocks=[],this.functions=[],this.others=[]}return t.prototype.getReference=function(t){return this.references[t-1]},t.prototype.reference=function(t){var e=this.references.length
return this.references.push(t),e+1},t.prototype.getString=function(t){return this.strings[t-1]},t.prototype.string=function(t){var e=this.strings.length
return this.strings.push(t),e+1},t.prototype.getExpression=function(t){return this.expressions[t-1]},t.prototype.getArray=function(t){return this.arrays[t-1]},t.prototype.getNames=function(t){for(var e=[],n=this.getArray(t),i=0;i<n.length;i++){var r=n[i]
e[i]=this.getString(r)}return e},t.prototype.array=function(t){var e=this.arrays.length
return this.arrays.push(t),e+1},t.prototype.getBlock=function(t){return this.blocks[t-1]},t.prototype.block=function(t){var e=this.blocks.length
return this.blocks.push(t),e+1},t.prototype.getFunction=function(t){return this.functions[t-1]},t.prototype.function=function(t){var e=this.functions.length
return this.functions.push(t),e+1},t.prototype.getOther=function(t){return this.others[t-1]},t.prototype.other=function(t){var e=this.others.length
return this.others.push(t),e+1},t}(),Li=["javascript:","vbscript:"],Fi=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Ri=["EMBED"],Ii=["href","src","background","action"],ji=["src"],Pi={BUTTON:{type:!0,form:!0},INPUT:{type:!0,form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}},Ui={colgroup:{depth:2,before:"<table><colgroup>",after:"</colgroup></table>"},table:{depth:1,before:"<table>",after:"</table>"},tbody:{depth:2,before:"<table><tbody>",after:"</tbody></table>"},tfoot:{depth:2,before:"<table><tfoot>",after:"</tfoot></table>"},thead:{depth:2,before:"<table><thead>",after:"</thead></table>"},tr:{depth:3,before:"<table><tbody><tr>",after:"</tr></tbody></table>"}},Hi="http://www.w3.org/2000/svg",Vi="http://www.w3.org/2000/svg",zi={foreignObject:1,desc:1,title:1},Ji=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(t){return Ji[t]=1})
var Wi,Gi="undefined"==typeof document?null:document,Yi=function(){function t(e){$t(this,t),this.document=e,this.setupUselessElement()}return t.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},t.prototype.createElement=function(t,e){var n=void 0,i=void 0
if(e?(n=e.namespaceURI===Vi||"svg"===t,i=zi[e.tagName]):(n="svg"===t,i=!1),n&&!i){if(Ji[t])throw new Error("Cannot create a "+t+" inside an SVG context")
return this.document.createElementNS(Vi,t)}return this.document.createElement(t)},t.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},t.prototype.insertHTMLBefore=function(t,e,n){return lt(this.uselessElement,t,e,n)},t.prototype.createTextNode=function(t){return this.document.createTextNode(t)},t.prototype.createComment=function(t){return this.document.createComment(t)},t}();(function(t){var e=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.createElementNS=function(t,e){return this.document.createElementNS(t,e)},e.prototype.setAttribute=function(t,e,n,i){i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)},e}(Yi)
t.TreeConstruction=e
var n=e
n=pt(Gi,n),n=it(Gi,n),n=st(Gi,n,Vi),t.DOMTreeConstruction=n})(Wi||(Wi={}))
var Xi=function(t){function e(n){$t(this,e)
var i=te(this,t.call(this,n))
return i.document=n,i.namespace=null,i}return Zt(e,t),e.prototype.setAttribute=function(t,e,n){t.setAttribute(e,n)},e.prototype.setAttributeNS=function(t,e,n,i){t.setAttributeNS(e,n,i)},e.prototype.removeAttribute=function(t,e){t.removeAttribute(e)},e.prototype.removeAttributeNS=function(t,e,n){t.removeAttributeNS(e,n)},e.prototype.insertNodeBefore=function(t,e,n){if(ft(e)){var i=e.firstChild,r=e.lastChild
return this.insertBefore(t,e,n),new Nn(t,i,r)}return this.insertBefore(t,e,n),new xn(t,e)},e.prototype.insertTextBefore=function(t,e,n){var i=this.createTextNode(n)
return this.insertBefore(t,i,e),i},e.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},e.prototype.insertAfter=function(t,e,n){this.insertBefore(t,e,n.nextSibling)},e}(Yi),Ki=Xi
Ki=function(t,e){return t&&ct(t)?function(t){function e(n){$t(this,e)
var i=te(this,t.call(this,n))
return i.uselessComment=n.createComment(""),i}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,n,i){if(null===i)return t.prototype.insertHTMLBefore.call(this,e,n,i)
var r=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(r=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,i)
return r&&e.removeChild(this.uselessComment),s},e}(e):e}(Gi,Ki),Ki=function(t,e){if(!t)return e
if(!ot(t))return e
var n=t.createElement("div")
return function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,i,r){if(null===r||""===r)return t.prototype.insertHTMLBefore.call(this,e,i,r)
var o=e.tagName.toLowerCase(),s=Ui[o]
return void 0===s?t.prototype.insertHTMLBefore.call(this,e,i,r):rt(e,s,n,r,i)},e}(e)}(Gi,Ki),Ki=function(t,e,n){if(!t)return e
if(!ut(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):at(e,i,o,r)},e}(e)}(Gi,Ki,Vi)
var qi,$i=Ki,Qi=Wi.DOMTreeConstruction,Zi=function(){function t(e){$t(this,t),this.attr=e}return t.prototype.setAttribute=function(t,e,n,i){var r=t.getAppendOperations(),o=vt(n)
gt(o)||r.setAttribute(e,this.attr,o,i)},t.prototype.updateAttribute=function(t,e,n,i){null===n||void 0===n||!1===n?i?t.getDOM().removeAttributeNS(e,i,this.attr):t.getDOM().removeAttribute(e,this.attr):this.setAttribute(t,e,n)},t}(),tr=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.setAttribute=function(t,e,n,i){gt(n)||(e[this.attr]=n)},e.prototype.removeAttribute=function(t,e,n){var i=this.attr
n?t.getDOM().removeAttributeNS(e,n,i):t.getDOM().removeAttribute(e,i)},e.prototype.updateAttribute=function(t,e,n,i){e[this.attr]=n,gt(n)&&this.removeAttribute(t,e,i)},e}(Zi),er=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.setAttribute=function(e,n,i){t.prototype.setAttribute.call(this,e,n,tt(e,n,this.attr,i))},e.prototype.updateAttribute=function(e,n,i){t.prototype.updateAttribute.call(this,e,n,tt(e,n,this.attr,i))},e}(tr),nr=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.setAttribute=function(t,e,n){e.value=L(n)},e.prototype.updateAttribute=function(t,e,n){var i=e,r=i.value,o=L(n)
r!==o&&(i.value=o)},e}(Zi),ir=new nr("value"),rr=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.setAttribute=function(t,e,n){if(null!==n&&void 0!==n&&!1!==n){e.selected=!0}},e.prototype.updateAttribute=function(t,e,n){var i=e
i.selected=!!n},e}(tr),or=new rr("selected"),sr=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.setAttribute=function(e,n,i){t.prototype.setAttribute.call(this,e,n,tt(e,n,this.attr,i))},e.prototype.updateAttribute=function(e,n,i,r){t.prototype.updateAttribute.call(this,e,n,tt(e,n,this.attr,i))},e}(Zi),ar=function(){function t(e,n,i,r){$t(this,t),this.slots=e,this.callerScope=n,this.evalScope=i,this.partialMap=r}return t.root=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(n+1),r=0;r<=n;r++)i[r]=qe
return new t(i,null,null,null).init({self:e})},t.sized=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=new Array(e+1),i=0;i<=e;i++)n[i]=qe
return new t(n,null,null,null)},t.prototype.init=function(t){var e=t.self
return this.slots[0]=e,this},t.prototype.getSelf=function(){return this.get(0)},t.prototype.getSymbol=function(t){return this.get(t)},t.prototype.getBlock=function(t){return this.get(t)},t.prototype.getEvalScope=function(){return this.evalScope},t.prototype.getPartialMap=function(){return this.partialMap},t.prototype.bind=function(t,e){this.set(t,e)},t.prototype.bindSelf=function(t){this.set(0,t)},t.prototype.bindSymbol=function(t,e){this.set(t,e)},t.prototype.bindBlock=function(t,e){this.set(t,e)},t.prototype.bindEvalScope=function(t){this.evalScope=t},t.prototype.bindPartialMap=function(t){this.partialMap=t},t.prototype.bindCallerScope=function(t){this.callerScope=t},t.prototype.getCallerScope=function(){return this.callerScope},t.prototype.child=function(){return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},t.prototype.get=function(t){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
return this.slots[t]},t.prototype.set=function(t,e){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
this.slots[t]=e},t}(),ur=function(){function t(){$t(this,t),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return t.prototype.didCreate=function(t,e){this.createdComponents.push(t),this.createdManagers.push(e)},t.prototype.didUpdate=function(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)},t.prototype.scheduleInstallModifier=function(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)},t.prototype.scheduleUpdateModifier=function(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)},t.prototype.didDestroy=function(t){this.destructors.push(t)},t.prototype.commit=function(){for(var t=this.createdComponents,e=this.createdManagers,n=0;n<t.length;n++){var i=t[n]
e[n].didCreate(i)}for(var r=this.updatedComponents,o=this.updatedManagers,s=0;s<r.length;s++){var a=r[s]
o[s].didUpdate(a)}for(var u=this.destructors,p=0;p<u.length;p++)u[p].destroy()
for(var c=this.scheduledInstallManagers,h=this.scheduledInstallModifiers,l=0;l<c.length;l++){var f=c[l],d=h[l]
f.install(d)}for(var y=this.scheduledUpdateModifierManagers,m=this.scheduledUpdateModifiers,v=0;v<y.length;v++){var g=y[v],b=m[v]
g.update(b)}},t}(),pr=function(){function t(e){$t(this,t),this.heap=e,this.offset=0}return Qt(t,[{key:"type",get:function(){return this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),t}();(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(qi||(qi={}))
var cr,hr=function(){function t(){$t(this,t),this.heap=[],this.offset=0,this.handle=0,this.table=[]}return t.prototype.push=function(t){this.heap[this.offset++]=t},t.prototype.getbyaddr=function(t){return this.heap[t]},t.prototype.setbyaddr=function(t,e){this.heap[t]=e},t.prototype.malloc=function(){this.table.push(this.offset,0,0)
var t=this.handle
return this.handle+=3,t},t.prototype.finishMalloc=function(t){var e=this.table[t],n=this.offset
this.table[t+1]=n-e},t.prototype.size=function(){return this.offset},t.prototype.getaddr=function(t){return this.table[t]},t.prototype.gethandle=function(t){this.table.push(t,0,qi.Pointer)
var e=this.handle
return this.handle+=3,e},t.prototype.sizeof=function(t){return-1},t.prototype.free=function(t){this.table[t+2]=1},t.prototype.compact=function(){for(var t=0,e=this.table,n=this.table.length,i=this.heap,r=0;r<n;r+=3){var o=e[r],s=e[r+1],a=e[r+2]
if(a!==qi.Purged)if(a===qi.Freed)e[r+2]=2,t+=s
else if(a===qi.Allocated){for(var u=o;u<=r+s;u++)i[u-t]=i[u]
e[r]=o-t}else a===qi.Pointer&&(e[r]=o-t)}this.offset=this.offset-t},t}(),lr=function(){function t(){$t(this,t),this.heap=new hr,this._opcode=new pr(this.heap),this.constants=new Bi}return t.prototype.opcode=function(t){return this._opcode.offset=t,this._opcode},t}(),fr=function(){function t(e){var n=e.appendOperations,i=e.updateOperations
$t(this,t),this._macros=null,this._transaction=null,this.program=new lr,this.appendOperations=n,this.updateOperations=i}return t.prototype.toConditionalReference=function(t){return new tn(t)},t.prototype.getAppendOperations=function(){return this.appendOperations},t.prototype.getDOM=function(){return this.updateOperations},t.prototype.getIdentity=function(t){return c(t)+""},t.prototype.begin=function(){s(!this._transaction,"a glimmer transaction was begun, but one already exists. You may have a nested transaction"),this._transaction=new ur},t.prototype.didCreate=function(t,e){this.transaction.didCreate(t,e)},t.prototype.didUpdate=function(t,e){this.transaction.didUpdate(t,e)},t.prototype.scheduleInstallModifier=function(t,e){this.transaction.scheduleInstallModifier(t,e)},t.prototype.scheduleUpdateModifier=function(t,e){this.transaction.scheduleUpdateModifier(t,e)},t.prototype.didDestroy=function(t){this.transaction.didDestroy(t)},t.prototype.commit=function(){var t=this.transaction
this._transaction=null,t.commit()},t.prototype.attributeFor=function(t,e,n,i){return dt(t,e,n,void 0===i?null:i)},t.prototype.macros=function(){var t=this._macros
return t||(this._macros=t=this.populateBuiltins()),t},t.prototype.populateBuiltins=function(){return W()},Qt(t,[{key:"transaction",get:function(){return i(this._transaction,"must be in a transaction")}}]),t}(),dr=function(){function t(e,n){var i=n.alwaysRevalidate,r=void 0!==i&&i
$t(this,t),this.frameStack=new le,this.env=e,this.constants=e.program.constants,this.dom=e.getDOM(),this.alwaysRevalidate=r}return t.prototype.execute=function(t,e){var n=this.frameStack
for(this.try(t,e);;){if(n.isEmpty())break
var i=this.frame.nextStatement()
null!==i?i.evaluate(this):this.frameStack.pop()}},t.prototype.goto=function(t){this.frame.goto(t)},t.prototype.try=function(t,e){this.frameStack.push(new br(this,t,e))},t.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},t.prototype.evaluateOpcode=function(t){t.evaluate(this)},Qt(t,[{key:"frame",get:function(){return i(this.frameStack.current,"bug: expected a frame")}}]),t}(),yr=function(t){function e(n,i,r,o){$t(this,e)
var s=te(this,t.call(this))
s.start=n,s.type="block",s.next=null,s.prev=null
var a=i.env,u=i.scope,p=i.dynamicScope,c=i.stack
return s.children=o,s.env=a,s.scope=u,s.dynamicScope=p,s.stack=c,s.bounds=r,s}return Zt(e,t),e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.evaluate=function(t){t.try(this.children,null)},e.prototype.destroy=function(){this.bounds.destroy()},e.prototype.didDestroy=function(){this.env.didDestroy(this.bounds)},e.prototype.toJSON=function(){var t=l()
return t.guid=""+this._guid,{guid:this._guid,type:this.type,details:t,children:this.children.toArray().map(function(t){return t.toJSON()})}},e}(Ee),mr=function(t){function e(n,i,r,o){$t(this,e)
var s=te(this,t.call(this,n,i,r,o))
return s.type="try",s.tag=s._tag=Re.create(Oe),s}return Zt(e,t),e.prototype.didInitializeChildren=function(){this._tag.inner.update(y(this.children))},e.prototype.evaluate=function(t){t.try(this.children,this)},e.prototype.handleException=function(){var t=this,e=this.env,n=this.bounds,i=this.children,r=this.scope,o=this.dynamicScope,s=this.start,a=this.stack,u=this.prev,p=this.next
i.clear()
var c=Mn.resume(e,n,n.reset(e)),h=new wr(e,r,o,c),l=new de
h.execute(s,function(e){e.stack=Sr.restore(a),e.updatingOpcodeStack.push(l),e.updateWith(t),e.updatingOpcodeStack.push(i)}),this.prev=u,this.next=p},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this),n=e.details
return n||(n=e.details={}),t.prototype.toJSON.call(this)},e}(yr),vr=function(){function t(e,n){$t(this,t),this.opcode=e,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return t.prototype.insert=function(t,e,n,i){var r=this.map,o=this.opcode,s=this.updating,a=null,u=null
i?(u=r[i],a=u.bounds.firstNode()):a=this.marker
var p=o.vmForInsertion(a),c=null,h=o.start
p.execute(h,function(i){r[t]=c=i.iterate(n,e),i.updatingOpcodeStack.push(new de),i.updateWith(c),i.updatingOpcodeStack.push(c.children)}),s.insertBefore(c,u),this.didInsert=!0},t.prototype.retain=function(t,e,n){},t.prototype.move=function(t,e,n,i){var r=this.map,o=this.updating,s=r[t],a=r[i]||null
i?_(s,a.firstNode()):_(s,this.marker),o.remove(s),o.insertBefore(s,a)},t.prototype.delete=function(t){var e=this.map,n=e[t]
n.didDestroy(),C(n),this.updating.remove(n),delete e[t],this.didDelete=!0},t.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},t}(),gr=function(t){function e(n,i,r,o,s){$t(this,e)
var a=te(this,t.call(this,n,i,r,o))
a.type="list-block",a.map=l(),a.lastIterated=Ae,a.artifacts=s
var u=a._tag=Re.create(Oe)
return a.tag=m([s.tag,u]),a}return Zt(e,t),e.prototype.didInitializeChildren=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(y(this.children))},e.prototype.evaluate=function(e){var n=this.artifacts,r=this.lastIterated
if(!n.tag.validate(r)){var o=this.bounds,s=e.dom,a=s.createComment("")
s.insertAfter(o.parentElement(),a,i(o.lastNode(),"can't insert after an empty bounds"))
var u=new vr(this,a)
new Ge({target:u,artifacts:n}).sync(),this.parentElement().removeChild(a)}t.prototype.evaluate.call(this,e)},e.prototype.vmForInsertion=function(t){var e=this.env,n=this.scope,i=this.dynamicScope,r=Mn.forInitialRender(this.env,this.bounds.parentElement(),t)
return new wr(e,n,i,r)},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this),n=this.map,i=Object.keys(n).map(function(t){return JSON.stringify(t)+": "+n[t]._guid}).join(", "),r=e.details
return r||(r=e.details={}),r.map="{"+i+"}",e},e}(yr),br=function(){function t(e,n,i){$t(this,t),this.vm=e,this.ops=n,this.exceptionHandler=i,this.vm=e,this.ops=n,this.current=n.head()}return t.prototype.goto=function(t){this.current=t},t.prototype.nextStatement=function(){var t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t},t.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},t}(),kr=function(){function t(e,n,i){$t(this,t),this.env=e,this.updating=n,this.bounds=i}return t.prototype.rerender=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1},e=t.alwaysRevalidate,n=void 0!==e&&e,i=this.env,r=this.updating
new dr(i,{alwaysRevalidate:n}).execute(r,this)},t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.opcodes=function(){return this.updating},t.prototype.handleException=function(){throw"this should never happen"},t.prototype.destroy=function(){this.bounds.destroy(),C(this.bounds)},t}(),Sr=function(){function t(e,n,i){$t(this,t),this.stack=e,this.fp=n,this.sp=i}return t.empty=function(){return new this([],0,-1)},t.restore=function(t){return new this(t.slice(),0,t.length-1)},t.prototype.isEmpty=function(){return-1===this.sp},t.prototype.push=function(t){this.stack[++this.sp]=t},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.push(this.stack[t])},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.stack[this.sp]
return this.sp-=t,e},t.prototype.peek=function(){return this.stack[this.sp]},t.prototype.fromBase=function(t){return this.stack[this.fp-t]},t.prototype.fromTop=function(t){return this.stack[this.sp-t]},t.prototype.capture=function(t){var e=this.sp+1,n=e-t
return this.stack.slice(n,e)},t.prototype.reset=function(){this.stack.length=0},t.prototype.toArray=function(){return this.stack.slice(this.fp,this.sp+1)},t}(),wr=function(){function t(e,n,i,r){$t(this,t),this.env=e,this.elementStack=r,this.dynamicScopeStack=new le,this.scopeStack=new le,this.updatingOpcodeStack=new le,this.cacheGroups=new le,this.listBlockStack=new le,this.stack=Sr.empty(),this.pc=-1,this.ra=-1,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.env=e,this.heap=e.program.heap,this.constants=e.program.constants,this.elementStack=r,this.scopeStack.push(n),this.dynamicScopeStack.push(i)}return t.prototype.fetch=function(t){this.stack.push(this[ge[t]])},t.prototype.load=function(t){this[ge[t]]=this.stack.pop()},t.prototype.fetchValue=function(t){return this[ge[t]]},t.prototype.loadValue=function(t,e){this[ge[t]]=e},t.prototype.pushFrame=function(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1},t.prototype.popFrame=function(){this.sp=this.fp-1,this.ra=this.stack.fromBase(0),this.fp=this.stack.fromBase(-1)},t.prototype.goto=function(t){this.pc=o(this.pc+t)},t.prototype.call=function(t){var e=this.heap.getaddr(t)
this.ra=this.pc,this.pc=e},t.prototype.returnTo=function(t){this.ra=o(this.pc+t)},t.prototype.return=function(){this.pc=this.ra},t.initial=function(e,n,i,r,o){var s=ar.root(n,o.symbolTable.symbols.length),a=new t(e,s,i,r)
return a.pc=a.heap.getaddr(o.handle),a.updatingOpcodeStack.push(new de),a},t.prototype.capture=function(t){return{dynamicScope:this.dynamicScope(),env:this.env,scope:this.scope(),stack:this.stack.capture(t)}},t.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},t.prototype.commitCacheGroup=function(){var t=new yn("END"),e=this.updating(),n=this.cacheGroups.pop(),i=n?e.nextNode(n):e.head(),r=e.tail(),o=y(new ye(i,r)),s=new fn(o,t)
e.insertBefore(s,i),e.append(new dn(s)),e.append(t)},t.prototype.enter=function(t){var e=new de,n=this.capture(t),i=this.elements().pushUpdatableBlock(),r=new mr(this.heap.gethandle(this.pc),n,i,e)
this.didEnter(r)},t.prototype.iterate=function(t,e){var n=this.stack
n.push(e),n.push(t)
var i=this.capture(2),r=this.elements().pushUpdatableBlock()
return new mr(this.heap.gethandle(this.pc),i,r,new de)},t.prototype.enterItem=function(t,e){this.listBlock().map[t]=e,this.didEnter(e)},t.prototype.enterList=function(t){var e=new de,n=this.capture(0),i=this.elements().pushBlockList(e),r=this.stack.peek().artifacts,s=this.heap.gethandle(o(this.pc+t)),a=new gr(s,n,i,e,r)
this.listBlockStack.push(a),this.didEnter(a)},t.prototype.didEnter=function(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)},t.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},t.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},t.prototype.updateWith=function(t){this.updating().append(t)},t.prototype.listBlock=function(){return i(this.listBlockStack.current,"expected a list block")},t.prototype.updating=function(){return i(this.updatingOpcodeStack.current,"expected updating opcode on the updating opcode stack")},t.prototype.elements=function(){return this.elementStack},t.prototype.scope=function(){return i(this.scopeStack.current,"expected scope on the scope stack")},t.prototype.dynamicScope=function(){return i(this.dynamicScopeStack.current,"expected dynamic scope on the dynamic scope stack")},t.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},t.prototype.pushCallerScope=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=i(this.scope().getCallerScope(),"pushCallerScope is called when a caller scope is present")
this.scopeStack.push(t?e.child():e)},t.prototype.pushDynamicScope=function(){var t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t},t.prototype.pushRootScope=function(t,e){var n=ar.sized(t)
return e&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},t.prototype.popScope=function(){this.scopeStack.pop()},t.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},t.prototype.newDestroyable=function(t){this.elements().newDestroyable(t)},t.prototype.getSelf=function(){return this.scope().getSelf()},t.prototype.referenceForSymbol=function(t){return this.scope().getSymbol(t)},t.prototype.execute=function(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
for(var n=void 0;;)if(n=this.next(),n.done)break
return n.value},t.prototype.next=function(){var t=this.env,e=this.updatingOpcodeStack,n=this.elementStack,r=this.nextStatement(t),o=void 0
return null!==r?(Se.evaluate(this,r,r.type),o={done:!1,value:null}):(this.stack.reset(),o={done:!0,value:new kr(t,i(e.pop(),"there should be a final updating opcode stack"),n.popBlock())}),o},t.prototype.nextStatement=function(t){var e=this.pc
if(-1===e)return null
var n=t.program
return this.pc+=4,n.opcode(e)},t.prototype.evaluateOpcode=function(t){Se.evaluate(this,t,t.type)},t.prototype.bindDynamicScope=function(t){for(var e=this.dynamicScope(),n=t.length-1;n>=0;n--){var i=this.constants.getString(t[n])
e.set(i,this.stack.pop())}},Qt(t,[{key:"fp",get:function(){return this.stack.fp},set:function(t){this.stack.fp=t}},{key:"sp",get:function(){return this.stack.sp},set:function(t){this.stack.sp=t}}]),t}(),Er=function(){function t(e){$t(this,t),this.vm=e}return t.prototype.next=function(){return this.vm.next()},t}(),Ar=0,_r=function(){function t(e,n,i,r){$t(this,t),this.id=e,this.meta=n,this.env=i,this.entryPoint=null,this.layout=null,this.partial=null,this.block=null,this.scanner=new Mi(r,i),this.symbols=r.symbols,this.hasEval=r.hasEval}return t.prototype.render=function(t,e,n){var i=this.env,r=Mn.forInitialRender(i,e,null),o=this.asEntryPoint().compileDynamic(i),s=wr.initial(i,t,n,r,o)
return new Er(s)},t.prototype.asEntryPoint=function(){return this.entryPoint||(this.entryPoint=this.scanner.scanEntryPoint(this.compilationMeta())),this.entryPoint},t.prototype.asLayout=function(t,e){return this.layout||(this.layout=this.scanner.scanLayout(this.compilationMeta(),e||be,t)),this.layout},t.prototype.asPartial=function(){return this.partial||(this.partial=this.scanner.scanEntryPoint(this.compilationMeta(!0))),this.partial},t.prototype.asBlock=function(){return this.block||(this.block=this.scanner.scanBlock(this.compilationMeta())),this.block},t.prototype.compilationMeta=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{templateMeta:this.meta,symbols:this.symbols,asPartial:t}},t}();(function(t){t[t.Element=0]="Element",t[t.Attribute=1]="Attribute",t[t.Text=2]="Text",t[t.CdataSection=3]="CdataSection",t[t.EntityReference=4]="EntityReference",t[t.Entity=5]="Entity",t[t.ProcessingInstruction=6]="ProcessingInstruction",t[t.Comment=7]="Comment",t[t.Document=8]="Document",t[t.DocumentType=9]="DocumentType",t[t.DocumentFragment=10]="DocumentFragment",t[t.Notation=11]="Notation"})(cr||(cr={}))
var Cr=function(){function t(e,n){$t(this,t),this.cache=wt,this.inner=null,this.chains=null,this.lastParentValue=wt,this._guid=0,this.tag=Te,this.parent=e,this.property=n}return t.prototype.value=function(){var t=this.lastParentValue,e=this.property,n=this.inner,i=this._parentValue()
if(null===i||void 0===i)return this.cache=void 0
if(t===i)n=this.inner
else{var r="object"===(void 0===i?"undefined":qt(i))?Lr.for(i).referenceTypeFor(e):Fr
n=this.inner=new r(i,e,this)}return this.cache=n.value()},t.prototype.get=function(e){var n=this._getChains()
return e in n?n[e]:n[e]=new t(this,e)},t.prototype.label=function(){return"[reference Direct]"},t.prototype._getChains=function(){return this.chains?this.chains:this.chains=l()},t.prototype._parentValue=function(){var t=this.parent.value()
return this.lastParentValue=t,t},t}(),Nr=function(){function t(e){$t(this,t),this.chains=l(),this.tag=Te,this.object=e}return t.prototype.value=function(){return this.object},t.prototype.update=function(t){this.object=t},t.prototype.get=function(t){var e=this.chains
return t in e?e[t]:e[t]=new Cr(this,t)},t.prototype.chainFor=function(t){var e=this.chains
return t in e?e[t]:null},t.prototype.path=function(t){return t.split(".").reduce(function(t,e){return t.get(e)},this)},t.prototype.referenceFromParts=function(t){return t.reduce(function(t,e){return t.get(e)},this)},t.prototype.label=function(){return"[reference Root]"},t}(),xr={destroy:function(){}},Or=function(){function t(e,n){$t(this,t),this.tag=Te,this.parent=e}return t.prototype.chain=function(){return xr},t.prototype.notify=function(){},t.prototype.value=function(){return this.parent[this.property]},t.prototype.get=function(e){return new t(this.parent[this.property],e)},t}(),Tr=function(){function t(e){$t(this,t),this.tag=Te,this.inner=e}return t.prototype.update=function(t){this.inner=t},t.prototype.chain=function(){return xr},t.prototype.notify=function(){},t.prototype.value=function(){return this.inner},t.prototype.referenceFromParts=function(t){throw new Error("Not implemented")},t.prototype.chainFor=function(t){throw new Error("Not implemented")},t.prototype.get=function(t){return new Or(this.inner,t)},t}(),Dr=function(){function t(e){$t(this,t),this.object=e}return t.prototype.root=function(){return new Tr(this.object)},t}(),Mr="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Br=Object.hasOwnProperty,Lr=function(){function t(e,n){var i=n.RootReferenceFactory,r=n.DefaultPathReferenceFactory
$t(this,t),this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=e,this.RootReferenceFactory=i||Nr,this.DefaultPathReferenceFactory=r||Fr}return t.for=function(e){if(null===e||void 0===e)return new t(e,{})
if(Br.call(e,"_meta")&&e._meta)return e._meta
if(!Object.isExtensible(e))return new Dr(e)
var n=t
if(e.constructor&&e.constructor[Mr]){n=e.constructor[Mr].InstanceMetaConstructor}else e[Mr]&&(n=e[Mr].InstanceMetaConstructor)
return e._meta=new n(e,{})},t.exists=function(t){return"object"===(void 0===t?"undefined":qt(t))&&t._meta},t.metadataForProperty=function(t){return null},t.prototype.addReference=function(t,e){var n=this.references=this.references||l();(n[t]=n[t]||new he).add(e)},t.prototype.addReferenceTypeFor=function(t,e){this.referenceTypes=this.referenceTypes||l(),this.referenceTypes[t]=e},t.prototype.referenceTypeFor=function(t){return this.referenceTypes?this.referenceTypes[t]||Fr:Fr},t.prototype.removeReference=function(t,e){if(this.references){this.references[t].delete(e)}},t.prototype.getReferenceTypes=function(){return this.referenceTypes=this.referenceTypes||l(),this.referenceTypes},t.prototype.referencesFor=function(t){return this.references?this.references[t]:null},t.prototype.getSlots=function(){return this.slots=this.slots||l()},t.prototype.root=function(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)},t}(),Fr=function(){function t(e,n,i){$t(this,t),this.tag=Te,this.object=e,this.property=n}return t.prototype.value=function(){return this.object[this.property]},t.prototype.label=function(){return"[reference Property]"},t}(),Rr=function(){function t(e,n){$t(this,t),this._registry=e,this._resolver=n}return t.prototype.register=function(t,e,n){var i=this._toAbsoluteSpecifier(t)
this._registry.register(i,e,n)},t.prototype.registration=function(t){var e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)},t.prototype.unregister=function(t){var e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)},t.prototype.registerOption=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(i,e,n)},t.prototype.registeredOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(n,e)},t.prototype.registeredOptions=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)},t.prototype.unregisterOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(n,e)},t.prototype.registerInjection=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t),r=this._toAbsoluteSpecifier(n)
this._registry.registerInjection(i,e,r)},t.prototype.registeredInjections=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)},t.prototype._toAbsoluteSpecifier=function(t,e){return this._resolver.identify(t,e)},t.prototype._toAbsoluteOrTypeSpecifier=function(t){return Et(t)?t:this._toAbsoluteSpecifier(t)},t}(),Ir=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
$t(this,t),this.bucket=e?a({},e):{}}return t.prototype.get=function(t){return this.bucket[t]},t.prototype.set=function(t,e){return this.bucket[t]=e},t.prototype.child=function(){return new t(this.bucket)},t}(),jr=function(){function t(e,n){$t(this,t),this.position=0,this.array=e,this.keyFor=n}return t.prototype.isEmpty=function(){return 0===this.array.length},t.prototype.next=function(){var t=this.position,e=this.array,n=this.keyFor
if(t>=e.length)return null
var i=e[t],r=n(i,t),o=t
return this.position++,{key:r,value:i,memo:o}},t}(),Pr=function(){function t(e,n,i){$t(this,t),this.position=0,this.keys=e,this.values=n,this.keyFor=i}return t.prototype.isEmpty=function(){return 0===this.keys.length},t.prototype.next=function(){var t=this.position,e=this.keys,n=this.values,i=this.keyFor
if(t>=e.length)return null
var r=n[t],o=e[t],s=i(r,o)
return this.position++,{key:s,value:r,memo:o}},t}(),Ur=function(){function t(){$t(this,t)}return t.prototype.isEmpty=function(){return!0},t.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},t}(),Hr=new Ur,Vr=function(){function t(e,n){$t(this,t),this.tag=e.tag,this.ref=e,this.keyFor=n}return t.prototype.iterate=function(){var t=this.ref,e=this.keyFor,n=t.value()
if(Array.isArray(n))return n.length>0?new jr(n,e):Hr
if(void 0===n||null===n)return Hr
if(void 0!==n.forEach){var i=[]
return n.forEach(function(t){i.push(t)}),i.length>0?new jr(i,e):Hr}if("object"===(void 0===n?"undefined":qt(n))){var r=Object.keys(n)
return r.length>0?new Pr(r,r.map(function(t){return n[t]}),e):Hr}throw new Error("Don't know how to {{#each "+n+"}}")},t.prototype.valueReferenceFor=function(t){return new Nr(t.value)},t.prototype.updateValueReference=function(t,e){t.update(e.value)},t.prototype.memoReferenceFor=function(t){return new Nr(t.memo)},t.prototype.updateMemoReference=function(t,e){t.update(e.memo)},t}(),zr=function(){function t(e,n,i){$t(this,t),this.nameRef=e,this.env=n,this.meta=i,this.tag=e.tag}return t.prototype.value=function(){var t=this.env,e=this.nameRef,n=e.value()
return"string"==typeof n?t.getComponentDefinition(n,this.meta):null},t.prototype.get=function(){return qe},t}(),Jr=function(){function t(e,n){$t(this,t),this.tag=Te,this.parent=e,this.property=n}return t.prototype.value=function(){return this.parent.value()[this.property]},t.prototype.get=function(e){return new t(this,e)},t}(),Wr=function(){function t(e,n){$t(this,t),this.tag=Te,this.helper=e,this.args=n.capture()}return t.prototype.value=function(){var t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())},t.prototype.get=function(t){return new Jr(this,t)},t}(),Gr=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.prototype.toJSON=function(){return"<default-component-definition name="+this.name+">"},e}(jn),Yr={action:xt},Xr=function(n){function i(r){$t(this,i)
var o=te(this,n.call(this,{appendOperations:r.appendOperations,updateOperations:new $i(r.document||document)}))
return o.helpers=l(),o.modifiers=l(),o.components=l(),o.managers=l(),e(o,t(r)),o.uselessAnchor=r.document.createElement("a"),o}return Zt(i,n),i.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Qi(t.document),new i(t)},i.prototype.protocolForURL=function(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol},i.prototype.hasPartial=function(){return!1},i.prototype.lookupPartial=function(){},i.prototype.managerFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",n=void 0
if(!(n=this.managers[e])){var i=t(this)
if(!(n=this.managers[e]=t(this).lookup("component-manager:/"+i.rootName+"/component-managers/"+e)))throw new Error("No component manager found for ID "+e+".")}return n},i.prototype.hasComponentDefinition=function(t,e){return!!this.getComponentDefinition(t,e)},i.prototype.getComponentDefinition=function(e,n){var i=t(this),r="template:"+e,o=n.specifier,s=i.identify(r,o)
if(void 0===s)throw i.identify("component:"+e,o)?new Error("The component '"+e+"' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory."):new Error("Could not find template for "+e)
return this.components[s]?this.components[s]:this.registerComponent(e,s,n,i)},i.prototype.registerComponent=function(t,e,n,i){var r=i.lookup("template",e),o=i.identify("component",e),s=null
o&&(s=i.factoryFor(o))
var a=St(r).create(this),u=this.managerFor(n.managerId),p=void 0
return p=Lt(u)?u.createComponentDefinition(t,a,s):new Gr(t,u,s),this.components[e]=p,p},i.prototype.hasHelper=function(t,e){return!!this.lookupHelper(t,e)},i.prototype.lookupHelper=function(e,n){if(Yr[e])return Yr[e]
var i=t(this),r="helper:"+e,o=n.specifier,s=i.identify(r,o)
return void 0!==s?this.helpers[s]?this.helpers[s]:this.registerHelper(s,i):void 0},i.prototype.registerHelper=function(t,e){var n=e.lookup(t),i=Mt(n)
return this.helpers[t]=i,i},i.prototype.hasModifier=function(t,e){return 1===t.length&&t in this.modifiers},i.prototype.lookupModifier=function(t,e){var n=this.modifiers[t]
if(!n)throw new Error("Modifier for "+t+" not found.")
return n},i.prototype.iterableFor=function(t,e){var n=void 0
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":n=function(t,e){return String(e)}
break
case"@primitive":n=function(t){return String(t)}
break
default:n=function(t){return t[e]}}return new Vr(t,n)},i.prototype.macros=function(){var t=n.prototype.macros.call(this)
return Bt(t.blocks,t.inlines),t},i}(fr),Kr={id:"UN61+JFU",block:'{"symbols":["root"],"statements":[[4,"each",[[19,0,["roots"]]],[["key"],["id"]],{"statements":[[4,"-in-element",[[19,1,["parent"]]],[["nextSibling"],[[19,1,["nextSibling"]]]],{"statements":[[1,[25,"component",[[19,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/templates/main"}},qr=function(){function t(e){$t(this,t),this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._rerender=Ft,this.rootName=e.rootName,this.resolver=e.resolver,this.document=e.document||window.document}return t.prototype.registerInitializer=function(t){this._initializers.push(t)},t.prototype.initRegistry=function(){var t=this._registry=new ne,e=new Rr(this._registry,this.resolver)
t.register("environment:/"+this.rootName+"/main/main",Xr),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register("document:/"+this.rootName+"/main/main",this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document","document:/"+this.rootName+"/main/main"),t.registerInjection("component-manager","env","environment:/"+this.rootName+"/main/main")
for(var n=this._initializers,i=0;i<n.length;i++)n[i].initialize(e)
this._initialized=!0},t.prototype.initContainer=function(){var t=this
this._container=new ee(this._registry,this.resolver),this._container.defaultInjections=function(n){var i={}
return e(i,t),i}},t.prototype.initialize=function(){this.initRegistry(),this.initContainer()},t.prototype.boot=function(){this.initialize(),this.env=this.lookup("environment:/"+this.rootName+"/main/main"),this.render()},t.prototype.render=function(){var t=this
this.env.begin()
var e=St(Kr).create(this.env),n=new Nr({roots:this._roots}),i=this.document,r=i.body,o=new Ir,s=e.render(n,r,o),a=void 0
do{a=s.next()}while(!a.done)
this.env.commit()
var u=a.value
this._rerender=function(){t.env.begin(),u.rerender(),t.env.commit(),t._didRender()},this._didRender()},t.prototype._didRender=function(){this._rendered=!0},t.prototype.renderComponent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:n}),this.scheduleRerender()},t.prototype.scheduleRerender=function(){var t=this
!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(function(){t._scheduled=!1,t._rerender(),t._rendering=!1}))},t.prototype.identify=function(t,e){return this.resolver.identify(t,e)},t.prototype.factoryFor=function(t,e){return this._container.factoryFor(this.identify(t,e))},t.prototype.lookup=function(t,e){return this._container.lookup(this.identify(t,e))},t}(),$r=function(){function t(e,n){$t(this,t),this.config=e,this.registry=n}return t.prototype.identify=function(t,e){if(Rt(t))return t
var n=Ut(t),i=void 0
if(e){var r=Ut(e)
if(It(r)){if(Ht("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=r.rootName,n.collection=r.collection,n.name?n.namespace=r.namespace?r.namespace+"/"+r.name:r.name:(n.namespace=r.namespace,n.name=r.name),i=this._serializeAndVerify(n))return i
var o=this._definitiveCollection(n.type)
if(o&&(n.namespace+="/-"+o,i=this._serializeAndVerify(n)))return i
n.rootName=n.collection=n.namespace=void 0}else Ht('Referrer must either be "absolute" or include a `type` to determine the associated type',r.type),n.collection=this._definitiveCollection(r.type),Ht("'"+r.type+"' does not have a definitive collection",n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Ht("'"+n.type+"' does not have a definitive collection",n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",i=this._serializeAndVerify(n))return i
n.namespace?(this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(i=this._serializeAndVerify(n))?i:void 0},t.prototype.retrieve=function(t){return this.registry.get(t)},t.prototype.resolve=function(t,e){var n=this.identify(t,e)
if(n)return this.retrieve(n)},t.prototype._definitiveCollection=function(t){var e=this.config.types[t]
return Ht("'"+t+"' is not a recognized type",e),e.definitiveCollection},t.prototype._serializeAndVerify=function(t){var e=jt(t)
if(this.registry.has(e))return e},t}(),Qr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
$t(this,t),this._entries=e}return t.prototype.has=function(t){return t in this._entries},t.prototype.get=function(t){return this._entries[t]},t}(),Zr=function(){function t(e){$t(this,t),this.tags=l(),this.computedPropertyTags=l(),this.trackedProperties=e?Object.create(e.trackedProperties):l(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):l()}return t.prototype.tagFor=function(t){var e=this.tags[t]
if(e)return e
var n=void 0
return(n=this.trackedPropertyDependencies[t])?this.tags[t]=Jt(this,t,n):this.tags[t]=Me.create()},t.prototype.dirtyableTagFor=function(t){var e=this.trackedPropertyDependencies[t]
return e?this.computedPropertyTags[t]||(this.computedPropertyTags[t]=Me.create()):this.tags[t]||(this.tags[t]=Me.create())},t}(),to=Symbol("ember-object"),eo=Object.prototype.hasOwnProperty,no=function(){},io=function(t){function e(n,i,r){$t(this,e)
var o=te(this,t.call(this,r))
return o.target=n,o.key=i,o}return Zt(e,t),e.for=function(t,n){return new e(t,n,"The property '"+n+"' on "+t+" was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")},e}(Error),ro=function(){function t(e){$t(this,t),this.element=null,this.debugName=null,this.__args__=null,Object.assign(this,e)}return t.create=function(t){return new this(t)},t.prototype.didInsertElement=function(){},t.prototype.didUpdate=function(){},t.prototype.willDestroy=function(){},t.prototype.destroy=function(){this.willDestroy()},t.prototype.toString=function(){return this.debugName+" component"},Qt(t,[{key:"args",get:function(){return this.__args__},set:function(t){this.__args__=t,Wt(this).dirtyableTagFor("args").inner.dirty()}}]),t}(),oo=function(t){function e(n,i,r,o){$t(this,e)
var s=te(this,t.call(this,n,i,o))
return s.template=r,s.componentFactory=o,s}return Zt(e,t),e.prototype.toJSON=function(){return{GlimmerDebug:'<component-definition name="'+this.name+'">'}},e}(jn),so=function(){function t(){$t(this,t)}return t.prototype.get=function(t){return po.create(this,t)},t}(),ao=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n._lastRevision=null,n._lastValue=null,n}return Zt(e,t),e.prototype.value=function(){var t=this.tag,e=this._lastRevision,n=this._lastValue
return e&&t.validate(e)||(n=this._lastValue=this.compute(),this._lastRevision=t.value()),n},e}(so),uo=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.children=l(),n}return Zt(e,t),e.prototype.get=function(t){var e=this.children[t]
return e||(e=this.children[t]=new co(this.inner,t)),e},e}(Ve),po=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e.create=function(t,e){return k(t)?new co(t.value(),e):new ho(t,e)},e.prototype.get=function(t){return new ho(this,t)},e}(ao),co=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this))
return r._parentValue=n,r._propertyKey=i,r.tag=Yt(n,i,Xt),r}return Zt(e,t),e.prototype.compute=function(){return this._parentValue[this._propertyKey]},e}(po),ho=function(t){function e(n,i){$t(this,e)
var r=te(this,t.call(this)),o=n.tag,s=Re.create(Oe)
return r._parentReference=n,r._parentObjectTag=s,r._propertyKey=i,r.tag=m([o,s]),r}return Zt(e,t),e.prototype.compute=function(){var t=this._parentReference,e=this._parentObjectTag,n=this._propertyKey,i=t.value()
return e.inner.update(Yt(i,n)),"string"==typeof i&&"length"===n?i.length:"object"===(void 0===i?"undefined":qt(i))&&i?i[n]:void 0},e}(po),lo=(function(t){function e(n){$t(this,e)
var i=te(this,t.call(this))
return i.tag=Me.create(),i._value=n,i}Zt(e,t),e.prototype.value=function(){return this._value},e.prototype.update=function(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)}}(so),function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}Zt(e,t),e.create=function(t){if(k(t)){var n=t.value()
return Ye.create(n)}return new e(t)}}(tn),function(){function t(n,i,r){$t(this,t)
var o=n.componentFactory,s=n.name
this.args=i
var a={debugName:s,args:this.namedArgsSnapshot()}
e(a,r),this.component=o.create(a)}return t.prototype.namedArgsSnapshot=function(){return Object.freeze(this.args.named.value())},t}()),fo=function(){function t(e,n){$t(this,t),this.template=n,this.name=e}return t.prototype.compile=function(t){t.fromLayout(this.name,this.template)},t}(),yo=function(){function e(t){$t(this,e),this.env=t.env}return e.create=function(t){return new e(t)},e.prototype.prepareArgs=function(t,e){return null},e.prototype.create=function(e,n,i){if(!n.componentFactory)return null
var r=t(this.env)
return new lo(n,i.capture(),r)},e.prototype.createComponentDefinition=function(t,e,n){return new oo(t,this,e,n)},e.prototype.layoutFor=function(t,e,n){var i=t.template
return P(new fo(t.name,i),this.env)},e.prototype.getSelf=function(t){return t?new uo(t.component):null},e.prototype.didCreateElement=function(t,e){t&&(t.component.element=e)},e.prototype.didRenderLayout=function(t,e){},e.prototype.didCreate=function(t){t&&t.component.didInsertElement()},e.prototype.getTag=function(){return null},e.prototype.update=function(t,e){if(t){var n=t.component
n.args=t.namedArgsSnapshot(),n.didUpdate()}},e.prototype.didUpdateLayout=function(){},e.prototype.didUpdate=function(t){},e.prototype.getDestructor=function(t){if(t)return t.component},e}(),mo=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),e}(ro),vo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":qt(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s)
return o>3&&s&&Object.defineProperty(e,n,s),s},go=function(t){function e(){return $t(this,e),te(this,t.apply(this,arguments))}return Zt(e,t),Qt(e,[{key:"feature",get:function(){return this.args.feature}}]),e}(ro)
vo([function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
var i=e[0],r=e[1],o=e[2]
return"string"==typeof i?function(t,n,i){return Vt(t,n,i,e)}:o?Vt(i,r,o,[]):void zt(i,r)}("@feature")],go.prototype,"feature",null)
var bo={id:"+F3uMzgg",block:'{"symbols":["champion","resource"],"statements":[[6,"div"],[9,"class","Feature"],[7],[0,"\\n    "],[6,"img"],[9,"class","Feature-Icon"],[10,"src",[26,[[20,["feature","icon"]]]]],[7],[8],[0,"\\n    "],[6,"div"],[9,"class","Feature-Inner"],[7],[0,"\\n        "],[6,"div"],[9,"class","Feature-Head"],[7],[0,"\\n            "],[6,"h2"],[9,"class","Feature-Heading"],[7],[1,[20,["feature","name"]],false],[8],[0,"\\n            "],[6,"div"],[9,"class","Feature-HeadContent"],[7],[0,"\\n                "],[6,"p"],[10,"class",[26,["Feature-Status status--",[20,["feature","status"]]]]],[7],[1,[20,["feature","statusText"]],false],[8],[0,"\\n                "],[6,"div"],[9,"class","Feature-Description"],[7],[0,"\\n                    "],[6,"p"],[7],[1,[20,["feature","description"]],false],[8],[0,"\\n                "],[8],[0,"\\n            "],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"div"],[10,"class",[26,["Feature-Detail ",[18,"stateClass"]]]],[7],[0,"\\n"],[4,"if",[[19,0,["feature","availability"]]],null,{"statements":[[0,"                "],[6,"div"],[9,"class","Feature-Availability"],[7],[0,"\\n                    "],[6,"h3"],[7],[0,"Availability"],[8],[0,"\\n                    "],[6,"p"],[7],[1,[20,["feature","availability"]],false],[8],[0,"\\n                "],[8],[0,"\\n"]],"parameters":[]},null],[0,"            "],[6,"div"],[9,"class","Feature-DetailContent"],[7],[0,"\\n"],[4,"if",[[19,0,["feature","resources"]]],null,{"statements":[[0,"                "],[6,"h3"],[7],[0,"Resources"],[8],[0,"\\n                "],[6,"ul"],[9,"class","Feature-ResourcesList"],[7],[0,"\\n"],[4,"each",[[19,0,["feature","resources"]]],[["key"],["@index"]],{"statements":[[0,"                    "],[6,"li"],[7],[6,"span"],[10,"class",[26,["icon-",[19,2,["type"]]]]],[7],[8],[6,"a"],[10,"href",[26,[[19,2,["url"]]]]],[7],[1,[19,2,["name"]],false],[8],[8],[0,"\\n"]],"parameters":[2]},null],[0,"                "],[8],[0,"\\n"]],"parameters":[]},null],[4,"if",[[19,0,["feature","champions"]]],null,{"statements":[[0,"                "],[6,"h3"],[7],[0,"Core Team Champions"],[8],[0,"\\n                "],[6,"ul"],[9,"class","Feature-Champions"],[7],[0,"\\n"],[4,"each",[[19,0,["feature","champions"]]],[["key"],["@index"]],{"statements":[[0,"                    "],[6,"li"],[9,"class","Feature-Champion"],[7],[0,"\\n                        "],[6,"a"],[10,"href",[26,[[19,1,["url"]]]]],[7],[0,"\\n                            "],[6,"img"],[10,"src",[26,[[19,1,["image"]]]]],[7],[8],[0,"\\n                            "],[6,"span"],[7],[1,[19,1,["name"]],false],[8],[0,"\\n                        "],[8],[0,"\\n                    "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"                "],[8],[0,"\\n"]],"parameters":[]},null],[0,"            "],[8],[0,"\\n        "],[8],[0,"\\n    "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/roadmap-page/components/feature-list/feature-item"}},ko={id:"aA/PXqha",block:'{"symbols":["feature","@features"],"statements":[[6,"div"],[9,"class","Features"],[7],[0,"\\n"],[4,"each",[[19,2,[]]],[["key"],["@index"]],{"statements":[[0,"    "],[5,"feature-item",[],[["@feature"],[[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[8]],"hasEval":false}',meta:{specifier:"template:/roadmap-page/components/feature-list"}},So=window.features,wo=function(){function t(){$t(this,t),this.features=So}return t.prototype.fetchFeatures=function(){return this.features},t}(),Eo=function(t){function e(){$t(this,e)
var n=te(this,t.apply(this,arguments))
return n.featureService=new wo,n}return Zt(e,t),Qt(e,[{key:"features",get:function(){return this.featureService.fetchFeatures()}}]),e}(ro),Ao={id:"pOLsFr1/",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","Roadmap-Intro"],[7],[0,"\\n  "],[6,"h1"],[7],[0,"The Ember Roadmap"],[8],[0,"\\n  "],[6,"p"],[7],[0,"Ember is an SDK for building ambitious application that take advantage of the most cutting-edge features of the web platform. Here\'s what we\'ve build and what we\'re building."],[8],[0,"\\n  "],[6,"p"],[7],[0,"And don\'t miss the additional functionality available via Ember\'s vibrant addon community at "],[6,"a"],[9,"href",""],[7],[0,"Ember Observer"],[8],[0,"."],[8],[0,"\\n"],[8],[0,"\\n\\n"],[5,"feature-list",[],[["@features"],[[18,"features"]]],{"statements":[],"parameters":[]}]],"hasEval":false}',meta:{specifier:"template:/roadmap-page/components/roadmap-page"}},_o={"component:/roadmap-page/components/feature-list":mo,"component:/roadmap-page/components/feature-list/feature-item":go,"template:/roadmap-page/components/feature-list/feature-item":bo,"template:/roadmap-page/components/feature-list":ko,"component:/roadmap-page/components/roadmap-page":Eo,"template:/roadmap-page/components/roadmap-page":Ao},Co={app:{name:"roadmap-page",rootName:"roadmap-page"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},helper:{definitiveCollection:"components"},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","template","helper"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}},No=function(t){function e(){$t(this,e)
var n=new Qr(_o),i=new $r(Co,n)
return te(this,t.call(this,{rootName:Co.app.rootName,resolver:i}))}return Zt(e,t),e}(qr),xo=new No,Oo=document.getElementById("app");(function(t){no=t})(function(){xo.scheduleRerender()}),xo.registerInitializer({initialize:function(t){t.register("component-manager:/"+xo.rootName+"/component-managers/main",yo)}}),xo.renderComponent("roadmap-page",Oo,null),xo.boot()})
