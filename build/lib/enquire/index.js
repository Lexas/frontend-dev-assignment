/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(e,t,n){var r=window.matchMedia;"undefined"!=typeof module&&module.exports?
module.exports=n(r):"function"==typeof define&&define.amd?define([],function(){return t
[e]=n(r)}):t[e]=n(r)}("enquire",this,function(e){"use strict";function t(e,t){var n
,r=0,i=e.length;for(r;i>r&&(n=t(e[r],r),n!==!1);r++);}function n(e){return"[object Array]"===
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
.queries[e])),this}},new o});