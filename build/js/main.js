/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(e,t,n){var r=window.matchMedia;"undefined"!=typeof module&&module.exports?
module.exports=n(r):"function"==typeof define&&define.amd?define("enquire",[],function(
){return t[e]=n(r)}):t[e]=n(r)}("enquire",this,function(e){"use strict";function t
(e,t){var n,r=0,i=e.length;for(r;i>r&&(n=t(e[r],r),n!==!1);r++);}function n(e){return"[object Array]"===
Object.prototype.toString.apply(e)}function r(e){return"function"==typeof e}function i
(e){this.options=e,!e.deferSetup&&this.setup()}function s(t,n){this.query=t,this.
isUnconditional=n,this.handlers=[],this.mql=e(t);var r=this;this.listener=function(
e){r.mql=e,r.assess()},this.mql.addListener(this.listener)}function o(){if(!e)throw new 
Error("matchMedia not present, legacy browsers require a polyfill");this.queries=
{},this.browserIsIncapable=!e("only all").matches}return i.prototype={setup:function(
){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this
.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(
){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?
this.options.destroy():this.off()},equals:function(e){return this.options===e||this
.options.match===e}},s.prototype={addHandler:function(e){var t=new i(e);this.handlers
.push(t),this.matches()&&t.on()},removeHandler:function(e){var n=this.handlers;t(
n,function(t,r){return t.equals(e)?(t.destroy(),!n.splice(r,1)):void 0})},matches
:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this
.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers
.length=0},assess:function(){var e=this.matches()?"on":"off";t(this.handlers,function(
t){t[e]()})}},o.prototype={register:function(e,i,o){var u=this.queries,a=o&&this.
browserIsIncapable;return u[e]||(u[e]=new s(e,a)),r(i)&&(i={match:i}),n(i)||(i=[i
]),t(i,function(t){r(t)&&(t={match:t}),u[e].addHandler(t)}),this},unregister:function(
e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this
.queries[e])),this}},new o}),!function(e,t){"object"==typeof module&&"object"==typeof 
module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new 
Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof 
window?window:this,function(a,b){function s(e){var t=e.length,r=n.type(e);return"function"===
r||n.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&
t>0&&t-1 in e}function x(e,t,r){if(n.isFunction(t))return n.grep(e,function(e,n){
return!!t.call(e,n,e)!==r});if(t.nodeType)return n.grep(e,function(e){return e===
t!==r});if("string"==typeof t){if(w.test(t))return n.filter(t,e,r);t=n.filter(t,e
)}return n.grep(e,function(e){return g.call(t,e)>=0!==r})}function D(e,t){while((
e=e[t])&&1!==e.nodeType);return e}function G(e){var t=F[e]={};return n.each(e.match
(E)||[],function(e,n){t[n]=!0}),t}function I(){l.removeEventListener("DOMContentLoaded"
,I,!1),a.removeEventListener("load",I,!1),n.ready()}function K(){Object.defineProperty
(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}function P
(e,t,r){var i;if(void 0===r&&1===e.nodeType)if(i="data-"+t.replace(O,"-$1").toLowerCase
(),r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===
r?null:+r+""===r?+r:N.test(r)?n.parseJSON(r):r}catch(s){}M.set(e,t,r)}else r=void 0
;return r}function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement
}catch(e){}}function jb(e,t){return n.nodeName(e,"table")&&n.nodeName(11!==t.nodeType?
t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument
.createElement("tbody")):e}function kb(e){return e.type=(null!==e.getAttribute("type"
))+"/"+e.type,e}function lb(e){var t=gb.exec(e.type);return t?e.type=t[1]:e.removeAttribute
("type"),e}function mb(e,t){for(var n=0,r=e.length;r>n;n++)L.set(e[n],"globalEval"
,!t||L.get(t[n],"globalEval"))}function nb(e,t){var r,i,s,o,u,a,f,l;if(1===t.nodeType
){if(L.hasData(e)&&(o=L.access(e),u=L.set(t,o),l=o.events)){delete u.handle,u.events=
{};for(s in l)for(r=0,i=l[s].length;i>r;r++)n.event.add(t,s,l[s][r])}M.hasData(e)&&
(a=M.access(e),f=n.extend({},a),M.set(t,f))}}function ob(e,t){var r=e.getElementsByTagName?
e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===
t||t&&n.nodeName(e,t)?n.merge([e],r):r}function pb(e,t){var n=t.nodeName.toLowerCase
();"input"===n&&T.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&
(t.defaultValue=e.defaultValue)}function sb(e,t){var r,i=n(t.createElement(e)).appendTo
(t.body),s=a.getDefaultComputedStyle&&(r=a.getDefaultComputedStyle(i[0]))?r.display
:n.css(i[0],"display");return i.detach(),s}function tb(e){var t=l,r=rb[e];return r||
(r=sb(e,t),"none"!==r&&r||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>"
)).appendTo(t.documentElement),t=qb[0].contentDocument,t.write(),t.close(),r=sb(e
,t),qb.detach()),rb[e]=r),r}function xb(e,t,r){var i,s,o,u,a=e.style;return r=r||
wb(e),r&&(u=r.getPropertyValue(t)||r[t]),r&&(""!==u||n.contains(e.ownerDocument,e
)||(u=n.style(e,t)),vb.test(u)&&ub.test(t)&&(i=a.width,s=a.minWidth,o=a.maxWidth,
a.minWidth=a.maxWidth=a.width=u,u=r.width,a.width=i,a.minWidth=s,a.maxWidth=o)),void 0!==
u?u+"":u}function yb(e,t){return{get:function(){return e()?void delete this.get:(
this.get=t).apply(this,arguments)}}}function Fb(e,t){if(t in e)return t;var n=t[0
].toUpperCase()+t.slice(1),r=t,i=Eb.length;while(i--)if(t=Eb[i]+n,t in e)return t
;return r}function Gb(e,t,n){var r=Ab.exec(t);return r?Math.max(0,r[1]-(n||0))+(r
[2]||"px"):t}function Hb(e,t,r,i,s){for(var o=r===(i?"border":"content")?4:"width"===
t?1:0,u=0;4>o;o+=2)"margin"===r&&(u+=n.css(e,r+R[o],!0,s)),i?("content"===r&&(u-=
n.css(e,"padding"+R[o],!0,s)),"margin"!==r&&(u-=n.css(e,"border"+R[o]+"Width",!0,
s))):(u+=n.css(e,"padding"+R[o],!0,s),"padding"!==r&&(u+=n.css(e,"border"+R[o]+"Width"
,!0,s)));return u}function Ib(e,t,r){var i=!0,s="width"===t?e.offsetWidth:e.offsetHeight
,o=wb(e),u="border-box"===n.css(e,"boxSizing",!1,o);if(0>=s||null==s){if(s=xb(e,t
,o),(0>s||null==s)&&(s=e.style[t]),vb.test(s))return s;i=u&&(k.boxSizingReliable(
)||s===e.style[t]),s=parseFloat(s)||0}return s+Hb(e,t,r||(u?"border":"content"),i
,o)+"px"}function Jb(e,t){for(var r,i,s,o=[],u=0,a=e.length;a>u;u++)i=e[u],i.style&&
(o[u]=L.get(i,"olddisplay"),r=i.style.display,t?(o[u]||"none"!==r||(i.style.display=""
),""===i.style.display&&S(i)&&(o[u]=L.access(i,"olddisplay",tb(i.nodeName)))):(s=
S(i),"none"===r&&s||L.set(i,"olddisplay",s?r:n.css(i,"display"))));for(u=0;a>u;u++
)i=e[u],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=
t?o[u]||"":"none"));return e}function Kb(e,t,n,r,i){return new Kb.prototype.init(
e,t,n,r,i)}function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb
(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=R[r],i["margin"+n]=i["padding"+
n]=e;return t&&(i.opacity=i.width=e),i}function Ub(e,t,n){for(var r,i=(Rb[t]||[])
.concat(Rb["*"]),s=0,o=i.length;o>s;s++)if(r=i[s].call(n,t,e))return r}function Vb
(e,t,r){var i,s,o,u,a,f,l,c,h=this,p={},d=e.style,v=e.nodeType&&S(e),m=L.get(e,"fxshow"
);r.queue||(a=n._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,f=a.empty.fire
,a.empty.fire=function(){a.unqueued||f()}),a.unqueued++,h.always(function(){h.always
(function(){a.unqueued--,n.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&
("height"in t||"width"in t)&&(r.overflow=[d.overflow,d.overflowX,d.overflowY],l=n
.css(e,"display"),c="none"===l?L.get(e,"olddisplay")||tb(e.nodeName):l,"inline"===
c&&"none"===n.css(e,"float")&&(d.display="inline-block")),r.overflow&&(d.overflow="hidden"
,h.always(function(){d.overflow=r.overflow[0],d.overflowX=r.overflow[1],d.overflowY=
r.overflow[2]}));for(i in t)if(s=t[i],Nb.exec(s)){if(delete t[i],o=o||"toggle"===
s,s===(v?"hide":"show")){if("show"!==s||!m||void 0===m[i])continue;v=!0}p[i]=m&&m
[i]||n.style(e,i)}else l=void 0;if(n.isEmptyObject(p))"inline"===("none"===l?tb(e
.nodeName):l)&&(d.display=l);else{m?"hidden"in m&&(v=m.hidden):m=L.access(e,"fxshow"
,{}),o&&(m.hidden=!v),v?n(e).show():h.done(function(){n(e).hide()}),h.done(function(
){var t;L.remove(e,"fxshow");for(t in p)n.style(e,t,p[t])});for(i in p)u=Ub(v?m[i
]:0,i,h),i in m||(m[i]=u.start,v&&(u.end=u.start,u.start="width"===i||"height"===
i?1:0))}}function Wb(e,t){var r,i,s,o,u;for(r in e)if(i=n.camelCase(r),s=t[i],o=e
[r],n.isArray(o)&&(s=o[1],o=e[r]=o[0]),r!==i&&(e[i]=o,delete e[r]),u=n.cssHooks[i
],u&&"expand"in u){o=u.expand(o),delete e[i];for(r in o)r in e||(e[r]=o[r],t[r]=s
)}else t[i]=s}function Xb(e,t,r){var i,s,o=0,u=Qb.length,a=n.Deferred().always(function(
){delete f.elem}),f=function(){if(s)return!1;for(var t=Lb||Sb(),n=Math.max(0,l.startTime+
l.duration-t),r=n/l.duration||0,i=1-r,o=0,u=l.tweens.length;u>o;o++)l.tweens[o].run
(i);return a.notifyWith(e,[l,i,n]),1>i&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise
({elem:e,props:n.extend({},t),opts:n.extend(!0,{specialEasing:{}},r),originalProperties
:t,originalOptions:r,startTime:Lb||Sb(),duration:r.duration,tweens:[],createTween
:function(t,r){var i=n.Tween(e,l.opts,t,r,l.opts.specialEasing[t]||l.opts.easing)
;return l.tweens.push(i),i},stop:function(t){var n=0,r=t?l.tweens.length:0;if(s)return this
;for(s=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith
(e,[l,t]),this}}),c=l.props;for(Wb(c,l.opts.specialEasing);u>o;o++)if(i=Qb[o].call
(l,e,c,l.opts))return i;return n.map(c,Ub,l),n.isFunction(l.opts.start)&&l.opts.start
.call(e,l),n.fx.timer(n.extend(f,{elem:e,anim:l,queue:l.opts.queue})),l.progress(
l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts
.always)}function qc(e){return function(t,r){"string"!=typeof t&&(r=t,t="*");var i
,s=0,o=t.toLowerCase().match(E)||[];if(n.isFunction(r))while(i=o[s++])"+"===i[0]?
(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(r)):(e[i]=e[i]||[]).push(r)}}function rc
(e,t,r,i){function u(l){var h;return s[l]=!0,n.each(e[l]||[],function(e,n){var a=
n(t,r,i);return"string"!=typeof a||o||s[a]?o?!(h=a):void 0:(t.dataTypes.unshift(a
),u(a),!1)}),h}var s={},o=e===mc;return u(t.dataTypes[0])||!s["*"]&&u("*")}function sc
(e,t){var r,i,s=n.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((s[r]?e
:i||(i={}))[r]=t[r]);return i&&n.extend(!0,e,i),e}function tc(e,t,n){var r,i,s,o,
u=e.contents,a=e.dataTypes;while("*"===a[0])a.shift(),void 0===r&&(r=e.mimeType||
t.getResponseHeader("Content-Type"));if(r)for(i in u)if(u[i]&&u[i].test(r)){a.unshift
(i);break}if(a[0]in n)s=a[0];else{for(i in n){if(!a[0]||e.converters[i+" "+a[0]])
{s=i;break}o||(o=i)}s=s||o}return s?(s!==a[0]&&a.unshift(s),n[s]):void 0}function uc
(e,t,n,r){var i,s,o,u,a,f={},l=e.dataTypes.slice();if(l[1])for(o in e.converters)
f[o.toLowerCase()]=e.converters[o];s=l.shift();while(s)if(e.responseFields[s]&&(n
[e.responseFields[s]]=t),!a&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a=s,
s=l.shift())if("*"===s)s=a;else if("*"!==a&&a!==s){if(o=f[a+" "+s]||f["* "+s],!o)
for(i in f)if(u=i.split(" "),u[1]===s&&(o=f[a+" "+u[0]]||f["* "+u[0]])){o===!0?o=
f[i]:f[i]!==!0&&(s=u[0],l.unshift(u[1]));break}if(o!==!0)if(o&&e["throws"])t=o(t)
;else try{t=o(t)}catch(c){return{state:"parsererror",error:o?c:"No conversion from "+
a+" to "+s}}}return{state:"success",data:t}}function Ac(e,t,r,i){var s;if(n.isArray
(t))n.each(t,function(t,n){r||wc.test(e)?i(e,n):Ac(e+"["+("object"==typeof n?t:""
)+"]",n,r,i)});else if(r||"object"!==n.type(t))i(e,t);else for(s in t)Ac(e+"["+s+"]"
,t[s],r,i)}function Jc(e){return n.isWindow(e)?e:9===e.nodeType&&e.defaultView}var c=
[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty
,k={},l=a.document,m="2.1.3",n=function(e,t){return new n.fn.init(e,t)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
,p=/^-ms-/,q=/-([\da-z])/gi,r=function(e,t){return t.toUpperCase()};n.fn=n.prototype=
{jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this
)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:d.call(this)},pushStack
:function(e){var t=n.merge(this.constructor(),e);return t.prevObject=this,t.context=
this.context,t},each:function(e,t){return n.each(this,e,t)},map:function(e){return this
.pushStack(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this
.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(
){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this
.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor
(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var e
,t,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;for("boolean"==typeof u&&
(l=u,u=arguments[a]||{},a++),"object"==typeof u||n.isFunction(u)||(u={}),a===f&&(
u=this,a--);f>a;a++)if(null!=(e=arguments[a]))for(t in e)r=u[t],i=e[t],u!==i&&(l&&
i&&(n.isPlainObject(i)||(s=n.isArray(i)))?(s?(s=!1,o=r&&n.isArray(r)?r:[]):o=r&&n
.isPlainObject(r)?r:{},u[t]=n.extend(l,o,i)):void 0!==i&&(u[t]=i));return u},n.extend
({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(
e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===
n.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window
},isNumeric:function(e){return!n.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:
function(e){return"object"!==n.type(e)||e.nodeType||n.isWindow(e)?!1:e.constructor&&!
j.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){
var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof 
e||"function"==typeof e?h[i.call(e)]||"object":typeof e},globalEval:function(a){var b
,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),
b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(
e){return e.replace(p,"ms-").replace(q,r)},nodeName:function(e,t){return e.nodeName&&
e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length
,u=s(e);if(n){if(u){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in 
e)if(r=t.apply(e[i],n),r===!1)break}else if(u){for(;o>i;i++)if(r=t.call(e[i],i,e[
i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},
trim:function(e){return null==e?"":(e+"").replace(o,"")},makeArray:function(e,t){
var r=t||[];return null!=e&&(s(Object(e))?n.merge(r,"string"==typeof e?[e]:e):f.call
(r,e)),r},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(
e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},
grep:function(e,t,n){for(var r,i=[],s=0,o=e.length,u=!n;o>s;s++)r=!t(e[s],s),r!==
u&&i.push(e[s]);return i},map:function(t,n,r){var i,o=0,u=t.length,a=s(t),f=[];if(
a)for(;u>o;o++)i=n(t[o],o,r),null!=i&&f.push(i);else for(o in t)i=n(t[o],o,r),null!=
i&&f.push(i);return e.apply([],f)},guid:1,proxy:function(e,t){var r,i,s;return"string"==typeof 
t&&(r=e[t],t=e,e=r),n.isFunction(e)?(i=d.call(arguments,2),s=function(){return e.
apply(t||this,i.concat(d.call(arguments)))},s.guid=e.guid=e.guid||n.guid++,s):void 0
},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error"
.split(" "),function(e,t){h["[object "+t+"]"]=t.toLowerCase()});var t=function(e)
{function ot(e,t,r,i){var s,u,f,l,c,d,g,y,S,x;if((t?t.ownerDocument||t:E)!==p&&h(
t),t=t||p,r=r||[],l=t.nodeType,"string"!=typeof e||!e||1!==l&&9!==l&&11!==l)return r
;if(!i&&v){if(11!==l&&(s=Z.exec(e)))if(f=s[1]){if(9===l){if(u=t.getElementById(f)
,!u||!u.parentNode)return r;if(u.id===f)return r.push(u),r}else if(t.ownerDocument&&
(u=t.ownerDocument.getElementById(f))&&b(t,u)&&u.id===f)return r.push(u),r}else{if(
s[2])return D.apply(r,t.getElementsByTagName(e)),r;if((f=s[3])&&n.getElementsByClassName
)return D.apply(r,t.getElementsByClassName(f)),r}if(n.qsa&&(!m||!m.test(e))){if(y=
g=w,S=t,x=1!==l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){d=o(e),(g=t.getAttribute
("id"))?y=g.replace(tt,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",c=d.length
;while(c--)d[c]=y+gt(d[c]);S=et.test(e)&&vt(t.parentNode)||t,x=d.join(",")}if(x)try{
return D.apply(r,S.querySelectorAll(x)),r}catch(T){}finally{g||t.removeAttribute("id"
)}}}return a(e.replace(z,"$1"),t,r,i)}function ut(){function t(n,i){return e.push
(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function at
(e){return e[w]=!0,e}function ft(e){var t=p.createElement("div");try{return!!e(t)
}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt
(e,t){var n=e.split("|"),i=e.length;while(i--)r.attrHandle[n[i]]=t}function ct(e,
t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||L)-(~e.sourceIndex||
L);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ht
(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===
e}}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===
n||"button"===n)&&t.type===e}}function dt(e){return at(function(t){return t=+t,at
(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r
[i]=n[i]))})})}function vt(e){return e&&"undefined"!=typeof e.getElementsByTagName&&
e}function mt(){}function gt(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value
;return r}function yt(e,t,n){var r=t.dir,i=n&&"parentNode"===r,s=x++;return t.first?
function(t,n,s){while(t=t[r])if(1===t.nodeType||i)return e(t,n,s)}:function(t,n,o
){var u,a,f=[S,s];if(o){while(t=t[r])if((1===t.nodeType||i)&&e(t,n,o))return!0}else while(
t=t[r])if(1===t.nodeType||i){if(a=t[w]||(t[w]={}),(u=a[r])&&u[0]===S&&u[1]===s)return f
[2]=u[2];if(a[r]=f,f[2]=e(t,n,o))return!0}}}function bt(e){return e.length>1?function(
t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function wt
(e,t,n){for(var r=0,i=t.length;i>r;r++)ot(e,t[r],n);return n}function Et(e,t,n,r,
i){for(var s,o=[],u=0,a=e.length,f=null!=t;a>u;u++)(s=e[u])&&(!n||n(s,r,i))&&(o.push
(s),f&&t.push(u));return o}function St(e,t,n,r,i,s){return r&&!r[w]&&(r=St(r)),i&&!
i[w]&&(i=St(i,s)),at(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||wt(t||"*"
,u.nodeType?[u]:u,[]),m=!e||!s&&t?v:Et(v,h,e,u,a),g=n?i||(s?e:d||r)?[]:o:m;if(n&&
n(m,g,u,a),r){f=Et(g,p),r(f,[],u,a),l=f.length;while(l--)(c=f[l])&&(g[p[l]]=!(m[p
[l]]=c))}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);
i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?H(s,c):h[l])>-1&&(s[f]=!(o[f
]=c))}}else g=Et(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):D.apply(o,g)})}function xt
(e){for(var t,n,i,s=e.length,o=r.relative[e[0].type],u=o||r.relative[" "],a=o?1:0
,l=yt(function(e){return e===t},u,!0),c=yt(function(e){return H(t,e)>-1},u,!0),h=
[function(e,n,r){var i=!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r));return t=
null,i}];s>a;a++)if(n=r.relative[e[a].type])h=[yt(bt(h),n)];else{if(n=r.filter[e[
a].type].apply(null,e[a].matches),n[w]){for(i=++a;s>i;i++)if(r.relative[e[i].type
])break;return St(a>1&&bt(h),a>1&&gt(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*"
:""})).replace(z,"$1"),n,i>a&&xt(e.slice(a,i)),s>i&&xt(e=e.slice(i)),s>i&&gt(e))}
h.push(n)}return bt(h)}function Tt(e,t){var n=t.length>0,i=e.length>0,s=function(
s,o,u,a,l){var c,h,d,v=0,m="0",g=s&&[],y=[],b=f,w=s||i&&r.find.TAG("*",l),E=S+=null==
b?1:Math.random()||.1,x=w.length;for(l&&(f=o!==p&&o);m!==x&&null!=(c=w[m]);m++){if(
i&&c){h=0;while(d=e[h++])if(d(c,o,u)){a.push(c);break}l&&(S=E)}n&&((c=!d&&c)&&v--
,s&&g.push(c))}if(v+=m,n&&m!==v){h=0;while(d=t[h++])d(g,y,o,u);if(s){if(v>0)while(
m--)g[m]||y[m]||(y[m]=M.call(a));y=Et(y)}D.apply(a,y),l&&!s&&y.length>0&&v+t.length>1&&
ot.uniqueSort(a)}return l&&(S=E,f=b),g};return n?at(s):s}var t,n,r,i,s,o,u,a,f,l,
c,h,p,d,v,m,g,y,b,w="sizzle"+1*new Date,E=e.document,S=0,x=0,T=ut(),N=ut(),C=ut()
,k=function(e,t){return e===t&&(c=!0),0},L=1<<31,A={}.hasOwnProperty,O=[],M=O.pop
,_=O.push,D=O.push,P=O.slice,H=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[
n]===t)return n;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped"
,j="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",I=F.replace("w","w#"
),q="\\["+j+"*("+F+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+
I+"))|)"+j+"*\\]",R=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+
q+")*)|.*)\\)|)",U=new RegExp(j+"+","g"),z=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+
j+"+$","g"),W=new RegExp("^"+j+"*,"+j+"*"),X=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"
),V=new RegExp("="+j+"*([^\\]'\"]*?)"+j+"*\\]","g"),$=new RegExp(R),J=new RegExp("^"+
I+"$"),K={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),TAG:new RegExp
("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+q),PSEUDO:new RegExp("^"+R),CHILD
:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+
j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+B+")$","i")
,needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i
,G=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/[+~]/
,tt=/'|\\/g,nt=new RegExp("\\\\([\\da-f]{1,6}"+j+"?|("+j+")|.)","ig"),rt=function(
e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String
.fromCharCode(r>>10|55296,1023&r|56320)},it=function(){h()};try{D.apply(O=P.call(
E.childNodes),E.childNodes),O[E.childNodes.length].nodeType}catch(st){D={apply:O.
length?function(e,t){_.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(
e[n++]=t[r++]);e.length=n-1}}}n=ot.support={},s=ot.isXML=function(e){var t=e&&(e.
ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},h=ot.setDocument=
function(e){var t,i,o=e?e.ownerDocument||e:E;return o!==p&&9===o.nodeType&&o.documentElement?
(p=o,d=o.documentElement,i=o.defaultView,i&&i!==i.top&&(i.addEventListener?i.addEventListener
("unload",it,!1):i.attachEvent&&i.attachEvent("onunload",it)),v=!s(o),n.attributes=
ft(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=
ft(function(e){return e.appendChild(o.createComment("")),!e.getElementsByTagName("*"
).length}),n.getElementsByClassName=Y.test(o.getElementsByClassName),n.getById=ft
(function(e){return d.appendChild(e).id=w,!o.getElementsByName||!o.getElementsByName
(w).length}),n.getById?(r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&
v){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(
e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete 
r.find.ID,r.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n="undefined"!=typeof 
e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=
n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?
t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n
,r=[],i=0,s=t.getElementsByTagName(e);if("*"===e){while(n=s[i++])1===n.nodeType&&
r.push(n);return r}return s},r.find.CLASS=n.getElementsByClassName&&function(e,t)
{return v?t.getElementsByClassName(e):void 0},g=[],m=[],(n.qsa=Y.test(o.querySelectorAll
))&&(ft(function(e){d.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\f]' msallowcapture=''><option selected=''></option></select>"
,e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+j+"*(?:''|\"\")"
),e.querySelectorAll("[selected]").length||m.push("\\["+j+"*(?:value|"+B+")"),e.querySelectorAll
("[id~="+w+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push
(":checked"),e.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]")}),ft(function(
e){var t=o.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t
).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+j+"*[*^$|!~]?="
),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll
("*,:x"),m.push(",.*:")})),(n.matchesSelector=Y.test(y=d.matches||d.webkitMatchesSelector||
d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ft(function(e){n
.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),g.push("!=",R)}),m=m.length&&new 
RegExp(m.join("|")),g=g.length&&new RegExp(g.join("|")),t=Y.test(d.compareDocumentPosition
),b=t||Y.test(d.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,
r=t&&t.parentNode;return e===r||!!r&&1===r.nodeType&&!!(n.contains?n.contains(r):
e.compareDocumentPosition&&16&e.compareDocumentPosition(r))}:function(e,t){if(t)while(
t=t.parentNode)if(t===e)return!0;return!1},k=t?function(e,t){if(e===t)return c=!0
,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||
e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!n.sortDetached&&t.
compareDocumentPosition(e)===r?e===o||e.ownerDocument===E&&b(E,e)?-1:t===o||t.ownerDocument===
E&&b(E,t)?1:l?H(l,e)-H(l,t):0:4&r?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n
,r=0,i=e.parentNode,s=t.parentNode,u=[e],a=[t];if(!i||!s)return e===o?-1:t===o?1:
i?-1:s?1:l?H(l,e)-H(l,t):0;if(i===s)return ct(e,t);n=e;while(n=n.parentNode)u.unshift
(n);n=t;while(n=n.parentNode)a.unshift(n);while(u[r]===a[r])r++;return r?ct(u[r],
a[r]):u[r]===E?-1:a[r]===E?1:0},o):p},ot.matches=function(e,t){return ot(e,null,null
,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&h(e),t=t.replace
(V,"='$1']"),!(!n.matchesSelector||!v||g&&g.test(t)||m&&m.test(t)))try{var r=y.call
(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(
i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||
e)!==p&&h(e),b(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&h(e);var i=r
.attrHandle[t.toLowerCase()],s=i&&A.call(r.attrHandle,t.toLowerCase())?i(e,t,!v):void 0
;return void 0!==s?s:n.attributes||!v?e.getAttribute(t):(s=e.getAttributeNode(t))&&
s.specified?s.value:null},ot.error=function(e){throw new Error("Syntax error, unrecognized expression: "+
e)},ot.uniqueSort=function(e){var t,r=[],i=0,s=0;if(c=!n.detectDuplicates,l=!n.sortStable&&
e.slice(0),e.sort(k),c){while(t=e[s++])t===e[s]&&(i=r.push(s));while(i--)e.splice
(r[i],1)}return l=null,e},i=ot.getText=function(e){var t,n="",r=0,s=e.nodeType;if(
s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent
;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===s||4===s)return e.nodeValue
}else while(t=e[r++])n+=i(t);return n},r=ot.selectors={cacheLength:50,createPseudo
:at,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{
dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"
}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[3]||e[4]||
e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(
e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e
[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===
e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD
.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&(t=o(n,!0))&&(t=n.indexOf
(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3)
)}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(
){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(
e){var t=T[e+" "];return t||(t=new RegExp("(^|"+j+")"+e+"("+j+"|$)"))&&T(e,function(
e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e
.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(
r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==
n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n
.length)===n:"~="===t?(" "+i.replace(U," ")+" ").indexOf(n)>-1:"|="===t?i===n||i.
slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var s="nth"!==e.slice
(0,3),o="last"!==e.slice(-4),u="of-type"===t;return 1===r&&0===i?function(e){return!!
e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling"
,m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(
c=c[v])if(u?c.nodeName.toLowerCase()===g:1===c.nodeType)return!1;d=v="only"===e&&!
d&&"nextSibling"}return!0}if(d=[o?m.firstChild:m.lastChild],o&&y){l=m[w]||(m[w]={
}),f=l[e]||[],p=f[0]===S&&f[1],h=f[0]===S&&f[2],c=p&&m.childNodes[p];while(c=++p&&
c&&c[v]||(h=p=0)||d.pop())if(1===c.nodeType&&++h&&c===t){l[e]=[S,p,h];break}}else if(
y&&(f=(t[w]||(t[w]={}))[e])&&f[0]===S)h=f[1];else while(c=++p&&c&&c[v]||(h=p=0)||
d.pop())if((u?c.nodeName.toLowerCase()===g:1===c.nodeType)&&++h&&(y&&((c[w]||(c[w
]={}))[e]=[S,h]),c===t))break;return h-=i,h===r||h%r===0&&h/r>=0}}},PSEUDO:function(
e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+
e);return i[w]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase
())?at(function(e,n){var r,s=i(e,t),o=s.length;while(o--)r=H(e,s[o]),e[r]=!(n[r]=
s[o])}):function(e){return i(e,0,n)}):i}},pseudos:{not:at(function(e){var t=[],n=
[],r=u(e.replace(z,"$1"));return r[w]?at(function(e,t,n,i){var s,o=r(e,null,i,[])
,u=e.length;while(u--)(s=o[u])&&(e[u]=!(t[u]=s))}):function(e,i,s){return t[0]=e,
r(t,null,s,n),t[0]=null,!n.pop()}}),has:at(function(e){return function(t){return ot
(e,t).length>0}}),contains:at(function(e){return e=e.replace(nt,rt),function(t){return(
t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:at(function(e){return J.test
(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(
t){var n;do if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=
n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType
);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice
(1)===t.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&
(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e)
{return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(
e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!
e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,
e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6
)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(
e){return G.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button
:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===
t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:dt(function()
{return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[0>n?
n+t:n]}),even:dt(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:dt(function(
e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){for(var r=0>
n?n+t:n;--r>=0;)e.push(r);return e}),gt:dt(function(e,t,n){for(var r=0>n?n+t:n;++
r<t;)e.push(r);return e})}},r.pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox
:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ht(t);for(t in{submit:!0,reset:!0}
)r.pseudos[t]=pt(t);return mt.prototype=r.filters=r.pseudos,r.setFilters=new mt,o=
ot.tokenize=function(e,t){var n,i,s,o,u,a,f,l=N[e+" "];if(l)return t?0:l.slice(0)
;u=e,a=[],f=r.preFilter;while(u){(!n||(i=W.exec(u)))&&(i&&(u=u.slice(i[0].length)||
u),a.push(s=[])),n=!1,(i=X.exec(u))&&(n=i.shift(),s.push({value:n,type:i[0].replace
(z," ")}),u=u.slice(n.length));for(o in r.filter)!(i=K[o].exec(u))||f[o]&&!(i=f[o
](i))||(n=i.shift(),s.push({value:n,type:o,matches:i}),u=u.slice(n.length));if(!n
)break}return t?u.length:u?ot.error(e):N(e,a).slice(0)},u=ot.compile=function(e,t
){var n,r=[],i=[],s=C[e+" "];if(!s){t||(t=o(e)),n=t.length;while(n--)s=xt(t[n]),s
[w]?r.push(s):i.push(s);s=C(e,Tt(i,r)),s.selector=e}return s},a=ot.select=function(
e,t,i,s){var a,f,l,c,h,p="function"==typeof e&&e,d=!s&&o(e=p.selector||e);if(i=i||
[],1===d.length){if(f=d[0]=d[0].slice(0),f.length>2&&"ID"===(l=f[0]).type&&n.getById&&9===
t.nodeType&&v&&r.relative[f[1].type]){if(t=(r.find.ID(l.matches[0].replace(nt,rt)
,t)||[])[0],!t)return i;p&&(t=t.parentNode),e=e.slice(f.shift().value.length)}a=K
.needsContext.test(e)?0:f.length;while(a--){if(l=f[a],r.relative[c=l.type])break;
if((h=r.find[c])&&(s=h(l.matches[0].replace(nt,rt),et.test(f[0].type)&&vt(t.parentNode
)||t))){if(f.splice(a,1),e=s.length&&gt(f),!e)return D.apply(i,s),i;break}}}return(
p||u(e,d))(s,t,!v,i,et.test(e)&&vt(t.parentNode)||t),i},n.sortStable=w.split("").
sort(k).join("")===w,n.detectDuplicates=!!c,h(),n.sortDetached=ft(function(e){return 1&
e.compareDocumentPosition(p.createElement("div"))}),ft(function(e){return e.innerHTML="<a href='#'></a>"
,"#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(
e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&
ft(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""
),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==
e.nodeName.toLowerCase()?void 0:e.defaultValue}),ft(function(e){return null==e.getAttribute
("disabled")})||lt(B,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase
():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ot}(a);n.find=t,n.expr=t
.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=
t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/
,w=/^.[^:#\[\.,]*$/;n.filter=function(e,t,r){var i=t[0];return r&&(e=":not("+e+")"
),1===t.length&&1===i.nodeType?n.find.matchesSelector(i,e)?[i]:[]:n.find.matches(
e,n.grep(t,function(e){return 1===e.nodeType}))},n.fn.extend({find:function(e){var t
,r=this.length,i=[],s=this;if("string"!=typeof e)return this.pushStack(n(e).filter
(function(){for(t=0;r>t;t++)if(n.contains(s[t],this))return!0}));for(t=0;r>t;t++)
n.find(e,s[t],i);return i=this.pushStack(r>1?n.unique(i):i),i.selector=this.selector?
this.selector+" "+e:e,i},filter:function(e){return this.pushStack(x(this,e||[],!1
))},not:function(e){return this.pushStack(x(this,e||[],!0))},is:function(e){return!!
x(this,"string"==typeof e&&u.test(e)?n(e):e||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
,A=n.fn.init=function(e,t){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===
e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:z.exec(e),!r||!r[1]&&t)return!
t||t.jquery?(t||y).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof 
n?t[0]:t,n.merge(this,n.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:l,!0)),v.
test(r[1])&&n.isPlainObject(t))for(r in t)n.isFunction(this[r])?this[r](t[r]):this
.attr(r,t[r]);return this}return i=l.getElementById(r[2]),i&&i.parentNode&&(this.
length=1,this[0]=i),this.context=l,this.selector=e,this}return e.nodeType?(this.context=
this[0]=e,this.length=1,this):n.isFunction(e)?"undefined"!=typeof y.ready?y.ready
(e):e(n):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),
n.makeArray(e,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/
,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(e,t,r){var i=
[],s=void 0!==r;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(s&&n(e).is(r
))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===
e.nodeType&&e!==t&&n.push(e);return n}}),n.fn.extend({has:function(e){var t=n(e,this
),r=t.length;return this.filter(function(){for(var e=0;r>e;e++)if(n.contains(this
,t[e]))return!0})},closest:function(e,t){for(var r,i=0,s=this.length,o=[],a=u.test
(e)||"string"!=typeof e?n(e,t||this.context):0;s>i;i++)for(r=this[i];r&&r!==t;r=r
.parentNode)if(r.nodeType<11&&(a?a.index(r)>-1:1===r.nodeType&&n.find.matchesSelector
(r,e))){o.push(r);break}return this.pushStack(o.length>1?n.unique(o):o)},index:function(
e){return e?"string"==typeof e?g.call(n(e),this[0]):g.call(this,e.jquery?e[0]:e):
this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this
.pushStack(n.unique(n.merge(this.get(),n(e,t))))},addBack:function(e){return this
.add(null==e?this.prevObject:this.prevObject.filter(e))}}),n.each({parent:function(
e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return n
.dir(e,"parentNode")},parentsUntil:function(e,t,r){return n.dir(e,"parentNode",r)
},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling"
)},nextAll:function(e){return n.dir(e,"nextSibling")},prevAll:function(e){return n
.dir(e,"previousSibling")},nextUntil:function(e,t,r){return n.dir(e,"nextSibling"
,r)},prevUntil:function(e,t,r){return n.dir(e,"previousSibling",r)},siblings:function(
e){return n.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return n
.sibling(e.firstChild)},contents:function(e){return e.contentDocument||n.merge([]
,e.childNodes)}},function(e,t){n.fn[e]=function(r,i){var s=n.map(this,t,r);return"Until"!==
e.slice(-5)&&(i=r),i&&"string"==typeof i&&(s=n.filter(i,s)),this.length>1&&(C[e]||
n.unique(s),B.test(e)&&s.reverse()),this.pushStack(s)}});var E=/\S+/g,F={};n.Callbacks=
function(e){e="string"==typeof e?F[e]||G(e):n.extend({},e);var t,r,i,s,o,u,a=[],f=!
e.once&&[],l=function(n){for(t=e.memory&&n,r=!0,u=s||0,s=0,o=a.length,i=!0;a&&o>u
;u++)if(a[u].apply(n[0],n[1])===!1&&e.stopOnFalse){t=!1;break}i=!1,a&&(f?f.length&&
l(f.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var r=a.length;!function u
(t){n.each(t,function(t,r){var i=n.type(r);"function"===i?e.unique&&c.has(r)||a.push
(r):r&&r.length&&"string"!==i&&u(r)})}(arguments),i?o=a.length:t&&(s=r,l(t))}return this
},remove:function(){return a&&n.each(arguments,function(e,t){var r;while((r=n.inArray
(t,a,r))>-1)a.splice(r,1),i&&(o>=r&&o--,u>=r&&u--)}),this},has:function(e){return e?
n.inArray(e,a)>-1:!!a&&!!a.length},empty:function(){return a=[],o=0,this},disable
:function(){return a=f=t=void 0,this},disabled:function(){return!a},lock:function(
){return f=void 0,t||c.disable(),this},locked:function(){return!f},fireWith:function(
e,t){return!a||r&&!f||(t=t||[],t=[e,t.slice?t.slice():t],i?f.push(t):l(t)),this},
fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!
r}};return c},n.extend({Deferred:function(e){var t=[["resolve","done",n.Callbacks
("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"
],["notify","progress",n.Callbacks("memory")]],r="pending",i={state:function(){return r
},always:function(){return s.done(arguments).fail(arguments),this},then:function(
){var e=arguments;return n.Deferred(function(r){n.each(t,function(t,o){var u=n.isFunction
(e[t])&&e[t];s[o[1]](function(){var e=u&&u.apply(this,arguments);e&&n.isFunction(
e.promise)?e.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[o[0]+"With"
](this===i?r.promise():this,u?[e]:arguments)})}),e=null}).promise()},promise:function(
e){return null!=e?n.extend(e,i):i}},s={};return i.pipe=i.then,n.each(t,function(e
,n){var o=n[2],u=n[3];i[n[1]]=o.add,u&&o.add(function(){r=u},t[1^e][2].disable,t[2
][2].lock),s[n[0]]=function(){return s[n[0]+"With"](this===s?i:this,arguments),this
},s[n[0]+"With"]=o.fireWith}),i.promise(s),e&&e.call(s,s),s},when:function(e){var t=0
,r=d.call(arguments),i=r.length,s=1!==i||e&&n.isFunction(e.promise)?i:0,o=1===s?e
:n.Deferred(),u=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?
d.call(arguments):r,n===a?o.notifyWith(t,n):--s||o.resolveWith(t,n)}},a,f,l;if(i>1
)for(a=new Array(i),f=new Array(i),l=new Array(i);i>t;t++)r[t]&&n.isFunction(r[t]
.promise)?r[t].promise().done(u(t,l,r)).fail(o.reject).progress(u(t,f,a)):--s;return s||
o.resolveWith(l,r),o.promise()}});var H;n.fn.ready=function(e){return n.ready.promise
().done(e),this},n.extend({isReady:!1,readyWait:1,holdReady:function(e){e?n.readyWait++
:n.ready(!0)},ready:function(e){(e===!0?--n.readyWait:n.isReady)||(n.isReady=!0,e!==!0&&--
n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"
),n(l).off("ready"))))}}),n.ready.promise=function(e){return H||(H=n.Deferred(),"complete"===
l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener
("load",I,!1))),H.promise(e)},n.ready.promise();var J=n.access=function(e,t,r,i,s
,o,u){var a=0,f=e.length,l=null==r;if("object"===n.type(r)){s=!0;for(a in r)n.access
(e,t,a,r[a],!0,o,u)}else if(void 0!==i&&(s=!0,n.isFunction(i)||(u=!0),l&&(u?(t.call
(e,i),t=null):(l=t,t=function(e,t,r){return l.call(n(e),r)})),t))for(;f>a;a++)t(e
[a],r,u?i:i.call(e[a],a,t(e[a],r)));return s?e:l?t.call(e):f?t(e[0],r):o};n.acceptData=
function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},K.uid=1,K.accepts=
n.acceptData,K.prototype={key:function(e){if(!K.accepts(e))return 0;var t={},r=e[
this.expando];if(!r){r=K.uid++;try{t[this.expando]={value:r},Object.defineProperties
(e,t)}catch(i){t[this.expando]=r,n.extend(e,t)}}return this.cache[r]||(this.cache
[r]={}),r},set:function(e,t,r){var i,s=this.key(e),o=this.cache[s];if("string"==typeof 
t)o[t]=r;else if(n.isEmptyObject(o))n.extend(this.cache[s],t);else for(i in t)o[i
]=t[i];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===
t?n:n[t]},access:function(e,t,r){var i;return void 0===t||t&&"string"==typeof t&&void 0===
r?(i=this.get(e,t),void 0!==i?i:this.get(e,n.camelCase(t))):(this.set(e,t,r),void 0!==
r?r:t)},remove:function(e,t){var r,i,s,o=this.key(e),u=this.cache[o];if(void 0===
t)this.cache[o]={};else{n.isArray(t)?i=t.concat(t.map(n.camelCase)):(s=n.camelCase
(t),t in u?i=[t,s]:(i=s,i=i in u?[i]:i.match(E)||[])),r=i.length;while(r--)delete 
u[i[r]]}},hasData:function(e){return!n.isEmptyObject(this.cache[e[this.expando]]||
{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var L=new 
K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;n.extend({hasData:function(
e){return M.hasData(e)||L.hasData(e)},data:function(e,t,n){return M.access(e,t,n)
},removeData:function(e,t){M.remove(e,t)},_data:function(e,t,n){return L.access(e
,t,n)},_removeData:function(e,t){L.remove(e,t)}}),n.fn.extend({data:function(e,t)
{var r,i,s,o=this[0],u=o&&o.attributes;if(void 0===e){if(this.length&&(s=M.get(o)
,1===o.nodeType&&!L.get(o,"hasDataAttrs"))){r=u.length;while(r--)u[r]&&(i=u[r].name
,0===i.indexOf("data-")&&(i=n.camelCase(i.slice(5)),P(o,i,s[i])));L.set(o,"hasDataAttrs"
,!0)}return s}return"object"==typeof e?this.each(function(){M.set(this,e)}):J(this
,function(t){var r,i=n.camelCase(e);if(o&&void 0===t){if(r=M.get(o,e),void 0!==r)
return r;if(r=M.get(o,i),void 0!==r)return r;if(r=P(o,i,void 0),void 0!==r)return r
}else this.each(function(){var n=M.get(this,i);M.set(this,i,t),-1!==e.indexOf("-"
)&&void 0!==n&&M.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:
function(e){return this.each(function(){M.remove(this,e)})}}),n.extend({queue:function(
e,t,r){var i;return e?(t=(t||"fx")+"queue",i=L.get(e,t),r&&(!i||n.isArray(r)?i=L.
access(e,t,n.makeArray(r)):i.push(r)),i||[]):void 0},dequeue:function(e,t){t=t||"fx"
;var r=n.queue(e,t),i=r.length,s=r.shift(),o=n._queueHooks(e,t),u=function(){n.dequeue
(e,t)};"inprogress"===s&&(s=r.shift(),i--),s&&("fx"===t&&r.unshift("inprogress"),delete 
o.stop,s.call(e,u,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var r=t+"queueHooks"
;return L.get(e,r)||L.access(e,r,{empty:n.Callbacks("once memory").add(function()
{L.remove(e,[t+"queue",r])})})}}),n.fn.extend({queue:function(e,t){var r=2;return"string"!=typeof 
e&&(t=e,e="fx",r--),arguments.length<r?n.queue(this[0],e):void 0===t?this:this.each
(function(){var r=n.queue(this,e,t);n._queueHooks(this,e),"fx"===e&&"inprogress"!==
r[0]&&n.dequeue(this,e)})},dequeue:function(e){return this.each(function(){n.dequeue
(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(
e,t){var r,i=1,s=n.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith
(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(u--)r=L.get(o[u],e+"queueHooks"
),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(t)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/
.source,R=["Top","Right","Bottom","Left"],S=function(e,t){return e=t||e,"none"===
n.css(e,"display")||!n.contains(e.ownerDocument,e)},T=/^(?:checkbox|radio)$/i;!function(
){var e=l.createDocumentFragment(),t=e.appendChild(l.createElement("div")),n=l.createElement
("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute
("name","t"),t.appendChild(n),k.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild
.checked,t.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!t.cloneNode(!0).
lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/
,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/
;n.event={global:{},add:function(e,t,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,g=L.get(e);
if(g){r.handler&&(o=r,r=o.handler,s=o.selector),r.guid||(r.guid=n.guid++),(f=g.events
)||(f=g.events={}),(u=g.handle)||(u=g.handle=function(t){return typeof n!==U&&n.event
.triggered!==t.type?n.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(
E)||[""],l=t.length;while(l--)a=Y.exec(t[l])||[],d=m=a[1],v=(a[2]||"").split(".")
.sort(),d&&(h=n.event.special[d]||{},d=(s?h.delegateType:h.bindType)||d,h=n.event
.special[d]||{},c=n.extend({type:d,origType:m,data:i,handler:r,guid:r.guid,selector
:s,needsContext:s&&n.expr.match.needsContext.test(s),namespace:v.join(".")},o),(p=
f[d])||(p=f[d]=[],p.delegateCount=0,h.setup&&h.setup.call(e,i,v,u)!==!1||e.addEventListener&&
e.addEventListener(d,u,!1)),h.add&&(h.add.call(e,c),c.handler.guid||(c.handler.guid=
r.guid)),s?p.splice(p.delegateCount++,0,c):p.push(c),n.event.global[d]=!0)}},remove
:function(e,t,r,i,s){var o,u,a,f,l,c,h,p,d,v,m,g=L.hasData(e)&&L.get(e);if(g&&(f=
g.events)){t=(t||"").match(E)||[""],l=t.length;while(l--)if(a=Y.exec(t[l])||[],d=
m=a[1],v=(a[2]||"").split(".").sort(),d){h=n.event.special[d]||{},d=(i?h.delegateType
:h.bindType)||d,p=f[d]||[],a=a[2]&&new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"
),u=o=p.length;while(o--)c=p[o],!s&&m!==c.origType||r&&r.guid!==c.guid||a&&!a.test
(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(p.splice(o,1),c.selector&&
p.delegateCount--,h.remove&&h.remove.call(e,c));u&&!p.length&&(h.teardown&&h.teardown
.call(e,v,g.handle)!==!1||n.removeEvent(e,d,g.handle),delete f[d])}else for(d in 
f)n.event.remove(e,d+t[l],r,i,!0);n.isEmptyObject(f)&&(delete g.handle,L.remove(e
,"events"))}},trigger:function(e,t,r,i){var s,o,u,f,c,h,p,d=[r||l],v=j.call(e,"type"
)?e.type:e,m=j.call(e,"namespace")?e.namespace.split("."):[];if(o=u=r=r||l,3!==r.
nodeType&&8!==r.nodeType&&!X.test(v+n.event.triggered)&&(v.indexOf(".")>=0&&(m=v.
split("."),v=m.shift(),m.sort()),c=v.indexOf(":")<0&&"on"+v,e=e[n.expando]?e:new 
n.Event(v,"object"==typeof e&&e),e.isTrigger=i?2:3,e.namespace=m.join("."),e.namespace_re=
e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0
,e.target||(e.target=r),t=null==t?[e]:n.makeArray(t,[e]),p=n.event.special[v]||{}
,i||!p.trigger||p.trigger.apply(r,t)!==!1)){if(!i&&!p.noBubble&&!n.isWindow(r)){for(
f=p.delegateType||v,X.test(f+v)||(o=o.parentNode);o;o=o.parentNode)d.push(o),u=o;
u===(r.ownerDocument||l)&&d.push(u.defaultView||u.parentWindow||a)}s=0;while((o=d
[s++])&&!e.isPropagationStopped())e.type=s>1?f:p.bindType||v,h=(L.get(o,"events")||
{})[e.type]&&L.get(o,"handle"),h&&h.apply(o,t),h=c&&o[c],h&&h.apply&&n.acceptData
(o)&&(e.result=h.apply(o,t),e.result===!1&&e.preventDefault());return e.type=v,i||
e.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),t)!==!1||!n.acceptData
(r)||c&&n.isFunction(r[v])&&!n.isWindow(r)&&(u=r[c],u&&(r[c]=null),n.event.triggered=
v,r[v](),n.event.triggered=void 0,u&&(r[c]=u)),e.result}},dispatch:function(e){e=
n.event.fix(e);var t,r,i,s,o,u=[],a=d.call(arguments),f=(L.get(this,"events")||{}
)[e.type]||[],l=n.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||
l.preDispatch.call(this,e)!==!1){u=n.event.handlers.call(this,e,f),t=0;while((s=u
[t++])&&!e.isPropagationStopped()){e.currentTarget=s.elem,r=0;while((o=s.handlers
[r++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(
o.namespace))&&(e.handleObj=o,e.data=o.data,i=((n.event.special[o.origType]||{}).
handle||o.handler).apply(s.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault
(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result
}},handlers:function(e,t){var r,i,s,o,u=[],a=t.delegateCount,f=e.target;if(a&&f.nodeType&&
(!e.button||"click"!==e.type))for(;f!==this;f=f.parentNode||this)if(f.disabled!==!0||"click"!==
e.type){for(i=[],r=0;a>r;r++)o=t[r],s=o.selector+" ",void 0===i[s]&&(i[s]=o.needsContext?
n(s,this).index(f)>=0:n.find(s,this,null,[f]).length),i[s]&&i.push(o);i.length&&u
.push({elem:f,handlers:i})}return a<t.length&&u.push({elem:this,handlers:t.slice(
a)}),u},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
.split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter
:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode
),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement"
.split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=
t.clientX&&(n=e.target.ownerDocument||l,r=n.documentElement,i=n.body,e.pageX=t.clientX+
(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=
t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)
),e.which||void 0===s||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[n.expando
])return e;var t,r,i,s=e.type,o=e,u=this.fixHooks[s];u||(this.fixHooks[s]=u=W.test
(s)?this.mouseHooks:V.test(s)?this.keyHooks:{}),i=u.props?this.props.concat(u.props
):this.props,e=new n.Event(o),t=i.length;while(t--)r=i[t],e[r]=o[r];return e.target||
(e.target=l),3===e.target.nodeType&&(e.target=e.target.parentNode),u.filter?u.filter
(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&
this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(
){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},
click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this
,"input")?(this.click(),!1):void 0},_default:function(e){return n.nodeName(e.target
,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&
(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,r,i){var s=n.extend
(new n.Event,r,{type:e,isSimulated:!0,originalEvent:{}});i?n.event.trigger(s,null
,t):n.event.dispatch.call(t,s),s.isDefaultPrevented()&&r.preventDefault()}},n.removeEvent=
function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},n.Event=function(
e,t){return this instanceof n.Event?(e&&e.type?(this.originalEvent=e,this.type=e.
type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?
Z:$):this.type=e,t&&n.extend(this,t),this.timeStamp=e&&e.timeStamp||n.now(),void 
(this[n.expando]=!0)):new n.Event(e,t)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped
:$,isImmediatePropagationStopped:$,preventDefault:function(){var e=this.originalEvent
;this.isDefaultPrevented=Z,e&&e.preventDefault&&e.preventDefault()},stopPropagation
:function(){var e=this.originalEvent;this.isPropagationStopped=Z,e&&e.stopPropagation&&
e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
;this.isImmediatePropagationStopped=Z,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation
(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",
pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){n.event.special
[e]={delegateType:t,bindType:t,handle:function(e){var r,i=this,s=e.relatedTarget,
o=e.handleObj;return(!s||s!==i&&!n.contains(i,s))&&(e.type=o.origType,r=o.handler
.apply(this,arguments),e.type=t),r}}}),k.focusinBubbles||n.each({focus:"focusin",
blur:"focusout"},function(e,t){var r=function(e){n.event.simulate(t,e.target,n.event
.fix(e),!0)};n.event.special[t]={setup:function(){var n=this.ownerDocument||this,
i=L.access(n,t);i||n.addEventListener(e,r,!0),L.access(n,t,(i||0)+1)},teardown:function(
){var n=this.ownerDocument||this,i=L.access(n,t)-1;i?L.access(n,t,i):(n.removeEventListener
(e,r,!0),L.remove(n,t))}}}),n.fn.extend({on:function(e,t,r,i,s){var o,u;if("object"==typeof 
e){"string"!=typeof t&&(r=r||t,t=void 0);for(u in e)this.on(u,t,r,e[u],s);return this
}if(null==r&&null==i?(i=t,r=t=void 0):null==i&&("string"==typeof t?(i=r,r=void 0)
:(i=r,r=t,t=void 0)),i===!1)i=$;else if(!i)return this;return 1===s&&(o=i,i=function(
e){return n().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=n.guid++)),this
.each(function(){n.event.add(this,e,i,r,t)})},one:function(e,t,n,r){return this.on
(e,t,n,r,1)},off:function(e,t,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=
e.handleObj,n(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType
,i.selector,i.handler),this;if("object"==typeof e){for(s in e)this.off(s,t,e[s]);
return this}return(t===!1||"function"==typeof t)&&(r=t,t=void 0),r===!1&&(r=$),this
.each(function(){n.event.remove(this,e,r,t)})},trigger:function(e,t){return this.
each(function(){n.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this
[0];return r?n.event.trigger(e,t,r,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i
,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"
],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"
],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=
ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td,n.extend(
{clone:function(e,t,r){var i,s,o,u,a=e.cloneNode(!0),f=n.contains(e.ownerDocument
,e);if(!(k.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||n.isXMLDoc(e)))for(u=
ob(a),o=ob(e),i=0,s=o.length;s>i;i++)pb(o[i],u[i]);if(t)if(r)for(o=o||ob(e),u=u||
ob(a),i=0,s=o.length;s>i;i++)nb(o[i],u[i]);else nb(e,a);return u=ob(a,"script"),u
.length>0&&mb(u,!f&&ob(e,"script")),a},buildFragment:function(e,t,r,i){for(var s,
o,u,a,f,l,c=t.createDocumentFragment(),h=[],p=0,d=e.length;d>p;p++)if(s=e[p],s||0===
s)if("object"===n.type(s))n.merge(h,s.nodeType?[s]:s);else if(cb.test(s)){o=o||c.
appendChild(t.createElement("div")),u=(bb.exec(s)||["",""])[1].toLowerCase(),a=ib
[u]||ib._default,o.innerHTML=a[1]+s.replace(ab,"<$1></$2>")+a[2],l=a[0];while(l--
)o=o.lastChild;n.merge(h,o.childNodes),o=c.firstChild,o.textContent=""}else h.push
(t.createTextNode(s));c.textContent="",p=0;while(s=h[p++])if((!i||-1===n.inArray(
s,i))&&(f=n.contains(s.ownerDocument,s),o=ob(c.appendChild(s),"script"),f&&mb(o),
r)){l=0;while(s=o[l++])fb.test(s.type||"")&&r.push(s)}return c},cleanData:function(
e){for(var t,r,i,s,o=n.event.special,u=0;void 0!==(r=e[u]);u++){if(n.acceptData(r
)&&(s=r[L.expando],s&&(t=L.cache[s]))){if(t.events)for(i in t.events)o[i]?n.event
.remove(r,i):n.removeEvent(r,i,t.handle);L.cache[s]&&delete L.cache[s]}delete M.cache
[r[M.expando]]}}}),n.fn.extend({text:function(e){return J(this,function(e){return void 0===
e?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===
this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(
){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===
this.nodeType){var t=jb(this,e);t.appendChild(e)}})},prepend:function(){return this
.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this
.nodeType){var t=jb(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){
return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore
(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&
this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var r
,i=e?n.filter(e,this):this,s=0;null!=(r=i[s]);s++)t||1!==r.nodeType||n.cleanData(
ob(r)),r.parentNode&&(t&&n.contains(r.ownerDocument,r)&&mb(ob(r,"script")),r.parentNode
.removeChild(r));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++
)1===e.nodeType&&(n.cleanData(ob(e,!1)),e.textContent="");return this},clone:function(
e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return n.clone(this,
e,t)})},html:function(e){return J(this,function(e){var t=this[0]||{},r=0,i=this.length
;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!db.test
(e)&&!ib[(bb.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ab,"<$1></$2>");try{
for(;i>r;r++)t=this[r]||{},1===t.nodeType&&(n.cleanData(ob(t,!1)),t.innerHTML=e);
t=0}catch(s){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(
){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode
,n.cleanData(ob(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this
:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(t,
r){t=e.apply([],t);var i,s,o,u,a,f,l=0,c=this.length,h=this,p=c-1,d=t[0],v=n.isFunction
(d);if(v||c>1&&"string"==typeof d&&!k.checkClone&&eb.test(d))return this.each(function(
e){var n=h.eq(e);v&&(t[0]=d.call(this,e,n.html())),n.domManip(t,r)});if(c&&(i=n.buildFragment
(t,this[0].ownerDocument,!1,this),s=i.firstChild,1===i.childNodes.length&&(i=s),s
)){for(o=n.map(ob(i,"script"),kb),u=o.length;c>l;l++)a=i,l!==p&&(a=n.clone(a,!0,!0
),u&&n.merge(o,ob(a,"script"))),r.call(this[l],a,l);if(u)for(f=o[o.length-1].ownerDocument
,n.map(o,lb),l=0;u>l;l++)a=o[l],fb.test(a.type||"")&&!L.access(a,"globalEval")&&n
.contains(f,a)&&(a.src?n._evalUrl&&n._evalUrl(a.src):n.globalEval(a.textContent.replace
(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore
:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){n.fn[e]=function(
e){for(var r,i=[],s=n(e),o=s.length-1,u=0;o>=u;u++)r=u===o?this:this.clone(!0),n(
s[u])[t](r),f.apply(i,r.get());return this.pushStack(i)}});var qb,rb={},ub=/^margin/
,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(e){return e.ownerDocument
.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):a.getComputedStyle
(e,null)};!function(){var e,t,r=l.documentElement,i=l.createElement("div"),s=l.createElement
("div");if(s.style){s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip=""
,k.clearCloneStyle="content-box"===s.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"
,i.appendChild(s);function o(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"
,s.innerHTML="",r.appendChild(i);var n=a.getComputedStyle(s,null);e="1%"!==n.top,
t="4px"===n.width,r.removeChild(i)}a.getComputedStyle&&n.extend(k,{pixelPosition:
function(){return o(),e},boxSizingReliable:function(){return null==t&&o(),t},reliableMarginRight
:function(){var e,t=s.appendChild(l.createElement("div"));return t.style.cssText=
s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"
,t.style.marginRight=t.style.width="0",s.style.width="1px",r.appendChild(i),e=!parseFloat
(a.getComputedStyle(t,null).marginRight),r.removeChild(i),s.removeChild(t),e}})}}
(),n.swap=function(e,t,n,r){var i,s,o={};for(s in t)o[s]=e.style[s],e.style[s]=t[
s];i=n.apply(e,r||[]);for(s in t)e.style[s]=o[s];return i};var zb=/^(none|table(?!-c[ea]).+)/
,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position
:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight
:"400"},Eb=["Webkit","O","Moz","ms"];n.extend({cssHooks:{opacity:{get:function(e,
t){if(t){var n=xb(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity
:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans
:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t
,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var s,o,u,a=n.camelCase(t),f=
e.style;return t=n.cssProps[a]||(n.cssProps[a]=Fb(f,a)),u=n.cssHooks[t]||n.cssHooks
[a],void 0===r?u&&"get"in u&&void 0!==(s=u.get(e,!1,i))?s:f[t]:(o=typeof r,"string"===
o&&(s=Bb.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(n.css(e,t)),o="number"),null!=r&&r===
r&&("number"!==o||n.cssNumber[a]||(r+="px"),k.clearCloneStyle||""!==r||0!==t.indexOf
("background")||(f[t]="inherit"),u&&"set"in u&&void 0===(r=u.set(e,r,i))||(f[t]=r
)),void 0)}},css:function(e,t,r,i){var s,o,u,a=n.camelCase(t);return t=n.cssProps
[a]||(n.cssProps[a]=Fb(e.style,a)),u=n.cssHooks[t]||n.cssHooks[a],u&&"get"in u&&(
s=u.get(e,!0,r)),void 0===s&&(s=xb(e,t,i)),"normal"===s&&t in Db&&(s=Db[t]),""===
r||r?(o=parseFloat(s),r===!0||n.isNumeric(o)?o||0:s):s}}),n.each(["height","width"
],function(e,t){n.cssHooks[t]={get:function(e,r,i){return r?zb.test(n.css(e,"display"
))&&0===e.offsetWidth?n.swap(e,Cb,function(){return Ib(e,t,i)}):Ib(e,t,i):void 0}
,set:function(e,r,i){var s=i&&wb(e);return Gb(e,r,i?Hb(e,t,i,"border-box"===n.css
(e,"boxSizing",!1,s),s):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(
e,t){return t?n.swap(e,{display:"inline-block"},xb,[e,"marginRight"]):void 0}),n.
each({margin:"",padding:"",border:"Width"},function(e,t){n.cssHooks[e+t]={expand:
function(n){for(var r=0,i={},s="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+R[
r]+t]=s[r]||s[r-2]||s[0];return i}},ub.test(e)||(n.cssHooks[e+t].set=Gb)}),n.fn.extend
({css:function(e,t){return J(this,function(e,t,r){var i,s,o={},u=0;if(n.isArray(t
)){for(i=wb(e),s=t.length;s>u;u++)o[t[u]]=n.css(e,t[u],!1,i);return o}return void 0!==
r?n.style(e,t,r):n.css(e,t)},e,t,arguments.length>1)},show:function(){return Jb(this
,!0)},hide:function(){return Jb(this)},toggle:function(e){return"boolean"==typeof 
e?e?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide
()})}}),n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(e,t,r,i,s,o){this.elem=
e,this.prop=r,this.easing=s||"swing",this.options=t,this.start=this.now=this.cur(
),this.end=i,this.unit=o||(n.cssNumber[r]?"":"px")},cur:function(){var e=Kb.propHooks
[this.prop];return e&&e.get?e.get(this):Kb.propHooks._default.get(this)},run:function(
e){var t,r=Kb.propHooks[this.prop];return this.pos=t=this.options.duration?n.easing
[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this
.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem
,this.now,this),r&&r.set?r.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype
.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(e){var t;return null==
e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=n.css(e.elem,e.prop,""
),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){n.fx.step[e.prop]?n.fx.step[
e.prop](e):e.elem.style&&(null!=e.elem.style[n.cssProps[e.prop]]||n.cssHooks[e.prop
])?n.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Kb.propHooks.scrollTop=
Kb.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem
[e.prop]=e.now)}},n.easing={linear:function(e){return e},swing:function(e){return.5-
Math.cos(e*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/
,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb=
{"*":[function(e,t){var r=this.createTween(e,t),i=r.cur(),s=Ob.exec(t),o=s&&s[3]||
(n.cssNumber[e]?"":"px"),u=(n.cssNumber[e]||"px"!==o&&+i)&&Ob.exec(n.css(r.elem,e
)),a=1,f=20;if(u&&u[3]!==o){o=o||u[3],s=s||[],u=+i||1;do a=a||".5",u/=a,n.style(r
.elem,e,u+o);while(a!==(a=r.cur()/i)&&1!==a&&--f)}return s&&(u=r.start=+u||+i||0,
r.unit=o,r.end=s[1]?u+(s[1]+1)*s[2]:+s[2]),r}]};n.Animation=n.extend(Xb,{tweener:
function(e,t){n.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var r,i=0,s=e.length
;s>i;i++)r=e[i],Rb[r]=Rb[r]||[],Rb[r].unshift(t)},prefilter:function(e,t){t?Qb.unshift
(e):Qb.push(e)}}),n.speed=function(e,t,r){var i=e&&"object"==typeof e?n.extend({}
,e):{complete:r||!r&&t||n.isFunction(e)&&e,duration:e,easing:r&&t||t&&!n.isFunction
(t)&&t};return i.duration=n.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in 
n.fx.speeds?n.fx.speeds[i.duration]:n.fx.speeds._default,(null==i.queue||i.queue===!0
)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){n.isFunction(i.old)&&i.old
.call(this),i.queue&&n.dequeue(this,i.queue)},i},n.fn.extend({fadeTo:function(e,t
,n,r){return this.filter(S).css("opacity",0).show().end().animate({opacity:t},e,n
,r)},animate:function(e,t,r,i){var s=n.isEmptyObject(e),o=n.speed(t,r,i),u=function(
){var t=Xb(this,n.extend({},e),o);(s||L.get(this,"finish"))&&t.stop(!0)};return u
.finish=u,s||o.queue===!1?this.each(u):this.queue(o.queue,u)},stop:function(e,t,r
){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=
t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,s=
null!=e&&e+"queueHooks",o=n.timers,u=L.get(this);if(s)u[s]&&u[s].stop&&i(u[s]);else for(
s in u)u[s]&&u[s].stop&&Pb.test(s)&&i(u[s]);for(s=o.length;s--;)o[s].elem!==this||
null!=e&&o[s].queue!==e||(o[s].anim.stop(r),t=!1,o.splice(s,1));(t||!r)&&n.dequeue
(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t
,r=L.get(this),i=r[e+"queue"],s=r[e+"queueHooks"],o=n.timers,u=i?i.length:0;for(r
.finish=!0,n.queue(this,e,[]),s&&s.stop&&s.stop.call(this,!0),t=o.length;t--;)o[t
].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;u>t;t++
)i[t]&&i[t].finish&&i[t].finish.call(this);delete r.finish})}}),n.each(["toggle","show"
,"hide"],function(e,t){var r=n.fn[t];n.fn[t]=function(e,n,i){return null==e||"boolean"==typeof 
e?r.apply(this,arguments):this.animate(Tb(t,!0),e,n,i)}}),n.each({slideDown:Tb("show"
),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity
:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){n.fn[e]=function(e,n,r){return this
.animate(t,e,n,r)}}),n.timers=[],n.fx.tick=function(){var e,t=0,r=n.timers;for(Lb=
n.now();t<r.length;t++)e=r[t],e()||r[t]!==e||r.splice(t--,1);r.length||n.fx.stop(
),Lb=void 0},n.fx.timer=function(e){n.timers.push(e),e()?n.fx.start():n.timers.pop
()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval
))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200
,_default:400},n.fn.delay=function(e,t){return e=n.fx?n.fx.speeds[e]||e:e,t=t||"fx"
,this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(
r)}})},function(){var e=l.createElement("input"),t=l.createElement("select"),n=t.
appendChild(l.createElement("option"));e.type="checkbox",k.checkOn=""!==e.value,k
.optSelected=n.selected,t.disabled=!0,k.optDisabled=!n.disabled,e=l.createElement
("input"),e.value="t",e.type="radio",k.radioValue="t"===e.value}();var Yb,Zb,$b=n
.expr.attrHandle;n.fn.extend({attr:function(e,t){return J(this,n.attr,e,t,arguments
.length>1)},removeAttr:function(e){return this.each(function(){n.removeAttr(this,
e)})}}),n.extend({attr:function(e,t,r){var i,s,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==
o)return typeof e.getAttribute===U?n.prop(e,t,r):(1===o&&n.isXMLDoc(e)||(t=t.toLowerCase
(),i=n.attrHooks[t]||(n.expr.match.bool.test(t)?Zb:Yb)),void 0===r?i&&"get"in i&&
null!==(s=i.get(e,t))?s:(s=n.find.attr(e,t),null==s?void 0:s):null!==r?i&&"set"in 
i&&void 0!==(s=i.set(e,r,t))?s:(e.setAttribute(t,r+""),r):void n.removeAttr(e,t))
},removeAttr:function(e,t){var r,i,s=0,o=t&&t.match(E);if(o&&1===e.nodeType)while(
r=o[s++])i=n.propFix[r]||r,n.expr.match.bool.test(r)&&(e[i]=!1),e.removeAttribute
(r)},attrHooks:{type:{set:function(e,t){if(!k.radioValue&&"radio"===t&&n.nodeName
(e,"input")){var r=e.value;return e.setAttribute("type",t),r&&(e.value=r),t}}}}})
,Zb={set:function(e,t,r){return t===!1?n.removeAttr(e,r):e.setAttribute(r,r),r}},
n.each(n.expr.match.bool.source.match(/\w+/g),function(e,t){var r=$b[t]||n.find.attr
;$b[t]=function(e,t,n){var i,s;return n||(s=$b[t],$b[t]=i,i=null!=r(e,t,n)?t.toLowerCase
():null,$b[t]=s),i}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop
:function(e,t){return J(this,n.prop,e,t,arguments.length>1)},removeProp:function(
e){return this.each(function(){delete this[n.propFix[e]||e]})}}),n.extend({propFix
:{"for":"htmlFor","class":"className"},prop:function(e,t,r){var i,s,o,u=e.nodeType
;if(e&&3!==u&&8!==u&&2!==u)return o=1!==u||!n.isXMLDoc(e),o&&(t=n.propFix[t]||t,s=
n.propHooks[t]),void 0!==r?s&&"set"in s&&void 0!==(i=s.set(e,r,t))?i:e[t]=r:s&&"get"in 
s&&null!==(i=s.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute
("tabindex")||_b.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),k.optSelected||(n.propHooks
.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode
.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding"
,"rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix
[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(e
){var t,r,i,s,o,u,a="string"==typeof e&&e,f=0,l=this.length;if(n.isFunction(e))return this
.each(function(t){n(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||""
).match(E)||[];l>f;f++)if(r=this[f],i=1===r.nodeType&&(r.className?(" "+r.className+" "
).replace(ac," "):" ")){o=0;while(s=t[o++])i.indexOf(" "+s+" ")<0&&(i+=s+" ");u=n
.trim(i),r.className!==u&&(r.className=u)}return this},removeClass:function(e){var t
,r,i,s,o,u,a=0===arguments.length||"string"==typeof e&&e,f=0,l=this.length;if(n.isFunction
(e))return this.each(function(t){n(this).removeClass(e.call(this,t,this.className
))});if(a)for(t=(e||"").match(E)||[];l>f;f++)if(r=this[f],i=1===r.nodeType&&(r.className?
(" "+r.className+" ").replace(ac," "):"")){o=0;while(s=t[o++])while(i.indexOf(" "+
s+" ")>=0)i=i.replace(" "+s+" "," ");u=e?n.trim(i):"",r.className!==u&&(r.className=
u)}return this},toggleClass:function(e,t){var r=typeof e;return"boolean"==typeof 
t&&"string"===r?t?this.addClass(e):this.removeClass(e):this.each(n.isFunction(e)?
function(r){n(this).toggleClass(e.call(this,r,this.className,t),t)}:function(){if("string"===
r){var t,i=0,s=n(this),o=e.match(E)||[];while(t=o[i++])s.hasClass(t)?s.removeClass
(t):s.addClass(t)}else(r===U||"boolean"===r)&&(this.className&&L.set(this,"__className__"
,this.className),this.className=this.className||e===!1?"":L.get(this,"__className__"
)||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===
this[n].nodeType&&(" "+this[n].className+" ").replace(ac," ").indexOf(t)>=0)return!0
;return!1}});var bc=/\r/g;n.fn.extend({val:function(e){var t,r,i,s=this[0];if(arguments
.length)return i=n.isFunction(e),this.each(function(r){var s;1===this.nodeType&&(
s=i?e.call(this,r,n(this).val()):e,null==s?s="":"number"==typeof s?s+="":n.isArray
(s)&&(s=n.map(s,function(e){return null==e?"":e+""})),t=n.valHooks[this.type]||n.
valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,s,"value"
)||(this.value=s))});if(s)return t=n.valHooks[s.type]||n.valHooks[s.nodeName.toLowerCase
()],t&&"get"in t&&void 0!==(r=t.get(s,"value"))?r:(r=s.value,"string"==typeof r?r
.replace(bc,""):null==r?"":r)}}),n.extend({valHooks:{option:{get:function(e){var t=
n.find.attr(e,"value");return null!=t?t:n.trim(n.text(e))}},select:{get:function(
e){for(var t,r,i=e.options,s=e.selectedIndex,o="select-one"===e.type||0>s,u=o?null
:[],a=o?s+1:i.length,f=0>s?a:o?s:0;a>f;f++)if(r=i[f],!(!r.selected&&f!==s||(k.optDisabled?
r.disabled:null!==r.getAttribute("disabled"))||r.parentNode.disabled&&n.nodeName(
r.parentNode,"optgroup"))){if(t=n(r).val(),o)return t;u.push(t)}return u},set:function(
e,t){var r,i,s=e.options,o=n.makeArray(t),u=s.length;while(u--)i=s[u],(i.selected=
n.inArray(i.value,o)>=0)&&(r=!0);return r||(e.selectedIndex=-1),o}}}}),n.each(["radio"
,"checkbox"],function(){n.valHooks[this]={set:function(e,t){return n.isArray(t)?e
.checked=n.inArray(n(e).val(),t)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(
e){return null===e.getAttribute("value")?"on":e.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
.split(" "),function(e,t){n.fn[t]=function(e,n){return arguments.length>0?this.on
(t,null,e,n):this.trigger(t)}}),n.fn.extend({hover:function(e,t){return this.mouseenter
(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(
e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r
)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off
(t,e||"**",n)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(e){return JSON.parse
(e+"")},n.parseXML=function(e){var t,r;if(!e||"string"!=typeof e)return null;try{
r=new DOMParser,t=r.parseFromString(e,"text/xml")}catch(i){t=void 0}return(!t||t.
getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+e),t};var ec=/#.*$/
,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/
,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||
[];n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal
:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8"
,accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml"
,json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/
},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters
:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions
:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?sc(sc(e,n.ajaxSettings),t)
:sc(n.ajaxSettings,e)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(e,
t){function T(e,t,o,a){var l,g,y,w,E,x=t;2!==b&&(b=2,u&&clearTimeout(u),r=void 0,
s=a||"",S.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(w=tc(c,S,o)),w=uc(c,w,S
,l),l?(c.ifModified&&(E=S.getResponseHeader("Last-Modified"),E&&(n.lastModified[i
]=E),E=S.getResponseHeader("etag"),E&&(n.etag[i]=E)),204===e||"HEAD"===c.type?x="nocontent"
:304===e?x="notmodified":(x=w.state,g=w.data,y=w.error,l=!y)):(y=x,(e||!x)&&(x="error"
,0>e&&(e=0))),S.status=e,S.statusText=(t||x)+"",l?d.resolveWith(h,[g,x,S]):d.rejectWith
(h,[S,x,y]),S.statusCode(m),m=void 0,f&&p.trigger(l?"ajaxSuccess":"ajaxError",[S,
c,l?g:y]),v.fireWith(h,[S,x]),f&&(p.trigger("ajaxComplete",[S,c]),--n.active||n.event
.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,s,o,u,a
,f,l,c=n.ajaxSetup({},t),h=c.context||c,p=c.context&&(h.nodeType||h.jquery)?n(h):
n.event,d=n.Deferred(),v=n.Callbacks("once memory"),m=c.statusCode||{},g={},y={},
b=0,w="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!
o){o={};while(t=gc.exec(s))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==
t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:
function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,g[e]=t),this},overrideMimeType
:function(e){return b||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>
b)for(t in e)m[t]=[m[t],e[t]];else S.always(e[S.status]);return this},abort:function(
e){var t=e||w;return r&&r.abort(t),T(0,t),this}};if(d.promise(S).complete=v.add,S
.success=S.done,S.error=S.fail,c.url=((e||c.url||oc)+"").replace(ec,"").replace(jc
,pc[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=n.trim(c.dataType||"*"
).toLowerCase().match(E)||[""],null==c.crossDomain&&(a=kc.exec(c.url.toLowerCase(
)),c.crossDomain=!(!a||a[1]===pc[1]&&a[2]===pc[2]&&(a[3]||("http:"===a[1]?"80":"443"
))===(pc[3]||("http:"===pc[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof 
c.data&&(c.data=n.param(c.data,c.traditional)),rc(lc,c,t,S),2===b)return S;f=n.event&&
c.global,f&&0===n.active++&&n.event.trigger("ajaxStart"),c.type=c.type.toUpperCase
(),c.hasContent=!ic.test(c.type),i=c.url,c.hasContent||(c.data&&(i=c.url+=(dc.test
(i)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=fc.test(i)?i.replace(fc,"$1_="+
cc++):i+(dc.test(i)?"&":"?")+"_="+cc++)),c.ifModified&&(n.lastModified[i]&&S.setRequestHeader
("If-Modified-Since",n.lastModified[i]),n.etag[i]&&S.setRequestHeader("If-None-Match"
,n.etag[i])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&S.setRequestHeader
("Content-Type",c.contentType),S.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts
[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+nc+"; q=0.01"
:""):c.accepts["*"]);for(l in c.headers)S.setRequestHeader(l,c.headers[l]);if(!c.
beforeSend||c.beforeSend.call(h,S,c)!==!1&&2!==b){w="abort";for(l in{success:1,error
:1,complete:1})S[l](c[l]);if(r=rc(mc,c,t,S)){S.readyState=1,f&&p.trigger("ajaxSend"
,[S,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){S.abort("timeout")},c.timeout
));try{b=1,r.send(g,T)}catch(x){if(!(2>b))throw x;T(-1,x)}}else T(-1,"No Transport"
);return S}return S.abort()},getJSON:function(e,t,r){return n.get(e,t,r,"json")},
getScript:function(e,t){return n.get(e,void 0,t,"script")}}),n.each(["get","post"
],function(e,t){n[t]=function(e,r,i,s){return n.isFunction(r)&&(s=s||i,i=r,r=void 0
),n.ajax({url:e,type:t,dataType:s,data:r,success:i})}}),n._evalUrl=function(e){return n
.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.
extend({wrapAll:function(e){var t;return n.isFunction(e)?this.each(function(t){n(
this).wrapAll(e.call(this,t))}):(this[0]&&(t=n(e,this[0].ownerDocument).eq(0).clone
(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(
e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner
:function(e){return this.each(n.isFunction(e)?function(t){n(this).wrapInner(e.call
(this,t))}:function(){var t=n(this),r=t.contents();r.length?r.wrapAll(e):t.append
(e)})},wrap:function(e){var t=n.isFunction(e);return this.each(function(r){n(this
).wrapAll(t?e.call(this,r):e)})},unwrap:function(){return this.parent().each(function(
){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr
.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},n.expr.filters
.visible=function(e){return!n.expr.filters.hidden(e)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g
,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i
;n.param=function(e,t){var r,i=[],s=function(e,t){t=n.isFunction(t)?t():null==t?""
:t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=
n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(e)||e.jquery&&!n.isPlainObject
(e))n.each(e,function(){s(this.name,this.value)});else for(r in e)Ac(r,e[r],t,s);
return i.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param
(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=
n.prop(this,"elements");return e?n.makeArray(e):this}).filter(function(){var e=this
.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test
(e)&&(this.checked||!T.test(e))}).map(function(e,t){var r=n(this).val();return null==
r?null:n.isArray(r)?n.map(r,function(e){return{name:t.name,value:e.replace(xc,"\r\n"
)}}):{name:t.name,value:r.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(
){try{return new XMLHttpRequest}catch(e){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=
n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var e in 
Cc)Cc[e]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(
e){var t;return k.cors||Ec&&!e.crossDomain?{send:function(n,r){var i,s=e.xhr(),o=++
Bc;if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields
)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType
),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");
for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete 
Cc[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status,s.statusText
):r(Dc[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText
}:void 0,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=Cc[o]=
t("abort");try{s.send(e.hasContent&&e.data||null)}catch(u){if(t)throw u}},abort:function(
){t&&t()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return n
.globalEval(e),e}}}),n.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1
),e.crossDomain&&(e.type="GET")}),n.ajaxTransport("script",function(e){if(e.crossDomain
){var t,r;return{send:function(i,s){t=n("<script>").prop({async:!0,charset:e.scriptCharset
,src:e.url}).on("load error",r=function(e){t.remove(),r=null,e&&s("error"===e.type?404
:200,e.type)}),l.head.appendChild(t[0])},abort:function(){r&&r()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/
;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fc.pop()||n.expando+"_"+
cc++;return this[e]=!0,e}}),n.ajaxPrefilter("json jsonp",function(e,t,r){var i,s,
o,u=e.jsonp!==!1&&(Gc.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||""
).indexOf("application/x-www-form-urlencoded")&&Gc.test(e.data)&&"data");return u||"jsonp"===
e.dataTypes[0]?(i=e.jsonpCallback=n.isFunction(e.jsonpCallback)?e.jsonpCallback()
:e.jsonpCallback,u?e[u]=e[u].replace(Gc,"$1"+i):e.jsonp!==!1&&(e.url+=(dc.test(e.
url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return o||n.error
(i+" was not called"),o[0]},e.dataTypes[0]="json",s=a[i],a[i]=function(){o=arguments
},r.always(function(){a[i]=s,e[i]&&(e.jsonpCallback=t.jsonpCallback,Fc.push(i)),o&&
n.isFunction(s)&&s(o[0]),o=s=void 0}),"script"):void 0}),n.parseHTML=function(e,t
,r){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(r=t,t=!1),t=t||l;
var i=v.exec(e),s=!r&&[];return i?[t.createElement(i[1])]:(i=n.buildFragment([e],
t,s),s&&s.length&&n(s).remove(),n.merge([],i.childNodes))};var Hc=n.fn.load;n.fn.
load=function(e,t,r){if("string"!=typeof e&&Hc)return Hc.apply(this,arguments);var i
,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=n.trim(e.slice(a)),e=e.slice(0,a)),n
.isFunction(t)?(r=t,t=void 0):t&&"object"==typeof t&&(s="POST"),u.length>0&&n.ajax
({url:e,type:s,dataType:"html",data:t}).done(function(e){o=arguments,u.html(i?n("<div>"
).append(n.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){u.each(r,o||[e.responseText
,t,e])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess"
,"ajaxSend"],function(e,t){n.fn[t]=function(e){return this.on(t,e)}}),n.expr.filters
.animated=function(e){return n.grep(n.timers,function(t){return e===t.elem}).length
};var Ic=a.document.documentElement;n.offset={setOffset:function(e,t,r){var i,s,o
,u,a,f,l,c=n.css(e,"position"),h=n(e),p={};"static"===c&&(e.style.position="relative"
),a=h.offset(),o=n.css(e,"top"),f=n.css(e,"left"),l=("absolute"===c||"fixed"===c)&&
(o+f).indexOf("auto")>-1,l?(i=h.position(),u=i.top,s=i.left):(u=parseFloat(o)||0,
s=parseFloat(f)||0),n.isFunction(t)&&(t=t.call(e,r,a)),null!=t.top&&(p.top=t.top-
a.top+u),null!=t.left&&(p.left=t.left-a.left+s),"using"in t?t.using.call(e,p):h.css
(p)}},n.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:
this.each(function(t){n.offset.setOffset(this,e,t)});var t,r,i=this[0],s={top:0,left
:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,n.contains(t,i)?(typeof 
i.getBoundingClientRect!==U&&(s=i.getBoundingClientRect()),r=Jc(o),{top:s.top+r.pageYOffset-
t.clientTop,left:s.left+r.pageXOffset-t.clientLeft}):s},position:function(){if(this
[0]){var e,t,r=this[0],i={top:0,left:0};return"fixed"===n.css(r,"position")?t=r.getBoundingClientRect
():(e=this.offsetParent(),t=this.offset(),n.nodeName(e[0],"html")||(i=e.offset())
,i.top+=n.css(e[0],"borderTopWidth",!0),i.left+=n.css(e[0],"borderLeftWidth",!0))
,{top:t.top-i.top-n.css(r,"marginTop",!0),left:t.left-i.left-n.css(r,"marginLeft"
,!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||
Ic;while(e&&!n.nodeName(e,"html")&&"static"===n.css(e,"position"))e=e.offsetParent
;return e||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(
e,t){var r="pageYOffset"===t;n.fn[e]=function(n){return J(this,function(e,n,i){var s=
Jc(e);return void 0===i?s?s[t]:e[n]:void (s?s.scrollTo(r?a.pageXOffset:i,r?i:a.pageYOffset
):e[n]=i)},e,n,arguments.length,null)}}),n.each(["top","left"],function(e,t){n.cssHooks
[t]=yb(k.pixelPosition,function(e,r){return r?(r=xb(e,t),vb.test(r)?n(e).position
()[t]+"px":r):void 0})}),n.each({Height:"height",Width:"width"},function(e,t){n.each
({padding:"inner"+e,content:t,"":"outer"+e},function(r,i){n.fn[i]=function(i,s){var o=
arguments.length&&(r||"boolean"!=typeof i),u=r||(i===!0||s===!0?"margin":"border"
);return J(this,function(t,r,i){var s;return n.isWindow(t)?t.document.documentElement
["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+
e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===i?n.css(t,r,u):n.style
(t,r,i,u)},t,o?i:void 0,o,null)}})}),n.fn.size=function(){return this.length},n.fn
.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(
){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(e){return a.$===
n&&(a.$=Lc),e&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n}),
requirejs.config({baseUrl:"./",paths:{jquery:"lib/jquery/index",mathjax:"lib/MathJax/MathJax.js?config=TeX-AMS_HTML"
,enquire:"lib/enquire/index"},map:{mathjax:{MathJax:"lib/MathJax"}},shim:{jquery:
{exports:"jQuery"},mathjax:{exports:"MathJax"}}}),requirejs(["enquire","jquery","mathjax"
],function(e,t,n){"use strict";function i(e,n,s,o){n=n?n:0,s=s?s:0,o=o?o:e.length
;var u=t("<ol></ol>");for(;s<o;s++)if(e.eq(s).is(r[n])){var a=t('<li><a href="#index-'+
s+'"></a></li>');e.eq(s).attr("id","index-"+s),a.find("a").append(e.eq(s).text())
,u.append(a)}else{if(!e.eq(s).is(r[n+1]))break;var f=i(e,n+1,s,o);t("li",u).last(
).append(f),s+=f.find("li").length-1}return u}function s(){e.register("screen and (min-width:45em)"
,{match:function(){t("#index").show()},unmatch:function(){t("#index").hide()},setup
:function(){var e=t(".title").not(".worked_example h2");r.push(e.filter("h1")),r.
push(e.filter("h2").not(".worked_example h2"));var n=t('<section id="index"><h1>Index</h1></section>'
),s=i(e);n.append(s),t(".section").first().before(n)},deferSetup:!0})}var r=[];document
.readyState==="complete"?s():document.onready=s});