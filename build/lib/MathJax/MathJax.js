/*
 *  /MathJax.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

document.getElementById&&document.childNodes&&document.createElement&&(!window.MathJax||!
MathJax.Hub)&&(window.MathJax?window.MathJax={AuthorConfig:window.MathJax}:window
.MathJax={},MathJax.isPacked=!0,MathJax.version="2.5.1",MathJax.fileversion="2.5.1"
,MathJax.cdnVersion="2.5.1",MathJax.cdnFileVersions={},function(e){var t=window[e
];t||(t=window[e]={});var n=[],r=function(e){var t=e.constructor;t||(t=function()
{});for(var n in e)n!=="constructor"&&e.hasOwnProperty(n)&&(t[n]=e[n]);return t},
i=function(){return function(){return arguments.callee.Init.call(this,arguments)}
};t.Object=r({constructor:i(),Subclass:function(e,t){var r=i();return r.SUPER=this
,r.Init=this.Init,r.Subclass=this.Subclass,r.Augment=this.Augment,r.protoFunction=
this.protoFunction,r.can=this.can,r.has=this.has,r.isa=this.isa,r.prototype=new this
(n),r.prototype.constructor=r,r.Augment(e,t),r},Init:function(e){var t=this;return e
.length===1&&e[0]===n?t:(t instanceof e.callee||(t=new e.callee(n)),t.Init.apply(
t,e)||t)},Augment:function(e,t){var n;if(e!=null){for(n in e)e.hasOwnProperty(n)&&
this.protoFunction(n,e[n]);e.toString!==this.prototype.toString&&e.toString!=={}.
toString&&this.protoFunction("toString",e.toString)}if(t!=null)for(n in t)t.hasOwnProperty
(n)&&(this[n]=t[n]);return this},protoFunction:function(e,t){this.prototype[e]=t,typeof 
t=="function"&&(t.SUPER=this.SUPER.prototype)},prototype:{Init:function(){},SUPER
:function(e){return e.callee.SUPER},can:function(e){return typeof this[e]=="function"
},has:function(e){return typeof this[e]!="undefined"},isa:function(e){return e instanceof 
Object&&this instanceof e}},can:function(e){return this.prototype.can.call(this,e
)},has:function(e){return this.prototype.has.call(this,e)},isa:function(e){var t=
this;while(t){if(t===e)return!0;t=t.SUPER}return!1},SimpleSUPER:r({constructor:function(
e){return this.SimpleSUPER.define(e)},define:function(e){var t={};if(e!=null){for(
var n in e)e.hasOwnProperty(n)&&(t[n]=this.wrap(n,e[n]));e.toString!==this.prototype
.toString&&e.toString!=={}.toString&&(t.toString=this.wrap("toString",e.toString)
)}return t},wrap:function(e,t){if(typeof t!="function"||!t.toString().match(/\.\s*SUPER\s*\(/
))return t;var n=function(){this.SUPER=n.SUPER[e];try{var r=t.apply(this,arguments
)}catch(i){throw delete this.SUPER,i}return delete this.SUPER,r};return n.toString=
function(){return t.toString.apply(t,arguments)},n}})})}("MathJax"),function(BASENAME
){var BASE=window[BASENAME];BASE||(BASE=window[BASENAME]={});var CALLBACK=function(
e){var t=function(){return arguments.callee.execute.apply(arguments.callee,arguments
)};for(var n in CALLBACK.prototype)CALLBACK.prototype.hasOwnProperty(n)&&(typeof 
e[n]!="undefined"?t[n]=e[n]:t[n]=CALLBACK.prototype[n]);return t.toString=CALLBACK
.prototype.toString,t};CALLBACK.prototype={isCallback:!0,hook:function(){},data:[
],object:window,execute:function(){if(!this.called||this.autoReset)return this.called=!
this.autoReset,this.hook.apply(this.object,this.data.concat([].slice.call(arguments
,0)))},reset:function(){delete this.called},toString:function(){return this.hook.
toString.apply(this.hook,arguments)}};var ISCALLBACK=function(e){return typeof e=="function"&&
e.isCallback},EVAL=function(code){return eval.call(window,code)},TESTEVAL=function(
){EVAL("var __TeSt_VaR__ = 1");if(window.__TeSt_VaR__)try{delete window.__TeSt_VaR__
}catch(e){window.__TeSt_VaR__=null}else window.execScript?EVAL=function(e){BASE.__code=
e,e="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}"
,window.execScript(e);var t=BASE.__result;delete BASE.__result,delete BASE.__code
;if(t instanceof Error)throw t;return t}:EVAL=function(e){BASE.__code=e,e="try {"+
BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}"
;var t=document.getElementsByTagName("head")[0];t||(t=document.body);var n=document
.createElement("script");n.appendChild(document.createTextNode(e)),t.appendChild(
n),t.removeChild(n);var r=BASE.__result;delete BASE.__result,delete BASE.__code;if(
r instanceof Error)throw r;return r};TESTEVAL=null},USING=function(e,t){arguments
.length>1&&(arguments.length===2&&typeof arguments[0]!="function"&&arguments[0]instanceof 
Object&&typeof arguments[1]=="number"?e=[].slice.call(e,t):e=[].slice.call(arguments
,0)),e instanceof Array&&e.length===1&&(e=e[0]);if(typeof e=="function")return e.
execute===CALLBACK.prototype.execute?e:CALLBACK({hook:e});if(e instanceof Array){
if(typeof e[0]=="string"&&e[1]instanceof Object&&typeof e[1][e[0]]=="function")return CALLBACK
({hook:e[1][e[0]],object:e[1],data:e.slice(2)});if(typeof e[0]=="function")return CALLBACK
({hook:e[0],data:e.slice(1)});if(typeof e[1]=="function")return CALLBACK({hook:e[1
],object:e[0],data:e.slice(2)})}else{if(typeof e=="string")return TESTEVAL&&TESTEVAL
(),CALLBACK({hook:EVAL,data:[e]});if(e instanceof Object)return CALLBACK(e);if(typeof 
e=="undefined")return CALLBACK({})}throw Error("Can't make callback from given data"
)},DELAY=function(e,t){return t=USING(t),t.timeout=setTimeout(t,e),t},WAITFOR=function(
e,t){e=USING(e),e.called||(WAITSIGNAL(e,t),t.pending++)},WAITEXECUTE=function(){var e=
this.signal;delete this.signal,this.execute=this.oldExecute,delete this.oldExecute
;var t=this.execute.apply(this,arguments);if(ISCALLBACK(t)&&!t.called)WAITSIGNAL(
t,e);else for(var n=0,r=e.length;n<r;n++)e[n].pending--,e[n].pending<=0&&e[n].call
()},WAITSIGNAL=function(e,t){t instanceof Array||(t=[t]),e.signal?t.length===1?e.
signal.push(t[0]):e.signal=e.signal.concat(t):(e.oldExecute=e.execute,e.execute=WAITEXECUTE
,e.signal=t)},AFTER=function(e){e=USING(e),e.pending=0;for(var t=1,n=arguments.length
;t<n;t++)arguments[t]&&WAITFOR(arguments[t],e);if(e.pending===0){var r=e();ISCALLBACK
(r)&&(e=r)}return e},HOOKS=MathJax.Object.Subclass({Init:function(e){this.hooks=[
],this.remove=[],this.reset=e,this.running=!1},Add:function(e,t){t==null&&(t=10),
ISCALLBACK(e)||(e=USING(e)),e.priority=t;var n=this.hooks.length;while(n>0&&t<this
.hooks[n-1].priority)n--;return this.hooks.splice(n,0,e),e},Remove:function(e){for(
var t=0,n=this.hooks.length;t<n;t++)if(this.hooks[t]===e){this.running?this.remove
.push(t):this.hooks.splice(t,1);return}},Execute:function(){var e=[{}];this.running=!0
;for(var t=0,n=this.hooks.length;t<n;t++){this.reset&&this.hooks[t].reset();var r=
this.hooks[t].apply(window,arguments);ISCALLBACK(r)&&!r.called&&e.push(r)}return this
.running=!1,this.remove.length&&this.RemovePending(),e.length===1?null:e.length===2?
e[1]:AFTER.apply({},e)},RemovePending:function(){this.remove=this.remove.sort();for(
var e=this.remove.length-1;e>=0;e--)this.hooks.splice(e,1);this.remove=[]}}),EXECUTEHOOKS=
function(e,t,n){if(!e)return null;e instanceof Array||(e=[e]),t instanceof Array||
(t=t==null?[]:[t]);var r=HOOKS(n);for(var i=0,s=e.length;i<s;i++)r.Add(e[i]);return r
.Execute.apply(r,t)},QUEUE=BASE.Object.Subclass({Init:function(){this.pending=this
.running=0,this.queue=[],this.Push.apply(this,arguments)},Push:function(){var e;for(
var t=0,n=arguments.length;t<n;t++)e=USING(arguments[t]),e===arguments[t]&&!e.called&&
(e=USING(["wait",this,e])),this.queue.push(e);return!this.running&&!this.pending&&
this.Process(),e},Process:function(e){while(!this.running&&!this.pending&&this.queue
.length){var t=this.queue[0];e=this.queue.slice(1),this.queue=[],this.Suspend();var n=
t();this.Resume(),e.length&&(this.queue=e.concat(this.queue)),ISCALLBACK(n)&&!n.called&&
WAITFOR(n,this)}},Suspend:function(){this.running++},Resume:function(){this.running&&
this.running--},call:function(){this.Process.apply(this,arguments)},wait:function(
e){return e}}),SIGNAL=QUEUE.Subclass({Init:function(e){QUEUE.prototype.Init.call(
this),this.name=e,this.posted=[],this.listeners=HOOKS(!0),this.posting=!1,this.callback=
null},Post:function(e,t,n){t=USING(t);if(this.posting||this.pending)this.Push(["Post"
,this,e,t,n]);else{this.callback=t,t.reset(),n||this.posted.push(e),this.Suspend(
),this.posting=!0;var r=this.listeners.Execute(e);ISCALLBACK(r)&&!r.called&&WAITFOR
(r,this),this.Resume(),this.posting=!1,this.pending||this.call()}return t},Clear:
function(e){return e=USING(e),this.posting||this.pending?e=this.Push(["Clear",this
,e]):(this.posted=[],e()),e},call:function(){this.callback(this),this.Process()},
Interest:function(e,t,n){e=USING(e),this.listeners.Add(e,n);if(!t)for(var r=0,i=this
.posted.length;r<i;r++){e.reset();var s=e(this.posted[r]);ISCALLBACK(s)&&r===this
.posted.length-1&&WAITFOR(s,this)}return e},NoInterest:function(e){this.listeners
.Remove(e)},MessageHook:function(e,t,n){t=USING(t),this.hooks||(this.hooks={},this
.Interest(["ExecuteHooks",this])),this.hooks[e]||(this.hooks[e]=HOOKS(!0)),this.hooks
[e].Add(t,n);for(var r=0,i=this.posted.length;r<i;r++)this.posted[r]==e&&(t.reset
(),t(this.posted[r]));return t.msg=e,t},ExecuteHooks:function(e){var t=e instanceof 
Array?e[0]:e;return this.hooks[t]?this.hooks[t].Execute(e):null},RemoveHook:function(
e){this.hooks[e.msg].Remove(e)}},{signals:{},find:function(e){return SIGNAL.signals
[e]||(SIGNAL.signals[e]=new SIGNAL(e)),SIGNAL.signals[e]}});BASE.Callback=BASE.CallBack=
USING,BASE.Callback.Delay=DELAY,BASE.Callback.After=AFTER,BASE.Callback.Queue=QUEUE
,BASE.Callback.Signal=SIGNAL.find,BASE.Callback.Hooks=HOOKS,BASE.Callback.ExecuteHooks=
EXECUTEHOOKS}("MathJax"),function(e){var t=window[e];t||(t=window[e]={});var n=navigator
.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub=="undefined",r=0,i=function(
e){return document.styleSheets&&document.styleSheets.length>r&&(r=document.styleSheets
.length),e||(e=document.head||document.getElementsByTagName("head")[0],e||(e=document
.body)),e},s=[],o=function(){for(var e=0,n=s.length;e<n;e++)t.Ajax.head.removeChild
(s[e]);s=[]},u={};u[e]="",t.Ajax={loaded:{},loading:{},loadHooks:{},timeout:15e3,
styleDelay:1,config:{root:"",path:u},STATUS:{OK:1,ERROR:-1},fileURL:function(e){var t=
e.match(/^\[([-._a-z0-9]+)\]/i);return t&&t[1]in u&&(e=(u[t[1]]||this.config.root
)+e.substr(t[1].length+2)),e},fileName:function(t){var n=this.config.root;if(t.substr
(0,n.length)===n)t="["+e+"]"+t.substr(n.length);else for(var r in u)if(u.hasOwnProperty
(r)&&u[r]&&t.substr(0,u[r].length)===u[r]){t="["+r+"]"+t.substr(u[r].length);break}
return t},fileRev:function(e){var n=t.cdnFileVersions[name]||t.cdnVersion;return n&&
(n="?rev="+n),n},urlRev:function(e){return this.fileURL(e)+this.fileRev(e)},Require
:function(e,n){n=t.Callback(n);var r;if(e instanceof Object)for(var i in e)e.hasOwnProperty
(i)&&(r=i.toUpperCase(),e=e[i]);else r=e.split(/\./).pop().toUpperCase();e=this.fileURL
(e);if(this.loaded[e])n(this.loaded[e]);else{var s={};s[r]=e,this.Load(s,n)}return n
},Load:function(e,n){n=t.Callback(n);var r;if(e instanceof Object)for(var s in e)
e.hasOwnProperty(s)&&(r=s.toUpperCase(),e=e[s]);else r=e.split(/\./).pop().toUpperCase
();e=this.fileURL(e);if(this.loading[e])this.addHook(e,n);else{this.head=i(this.head
);if(!this.loader[r])throw Error("Can't load files of type "+r);this.loader[r].call
(this,e,n)}return n},LoadHook:function(e,n,r){n=t.Callback(n);if(e instanceof Object
)for(var i in e)e.hasOwnProperty(i)&&(e=e[i]);return e=this.fileURL(e),this.loaded
[e]?n(this.loaded[e]):this.addHook(e,n,r),n},addHook:function(e,t,n){this.loadHooks
[e]||(this.loadHooks[e]=MathJax.Callback.Hooks()),this.loadHooks[e].Add(t,n),t.file=
e},removeHook:function(e){this.loadHooks[e.file]&&(this.loadHooks[e.file].Remove(
e),this.loadHooks[e.file].hooks.length||delete this.loadHooks[e.file])},Preloading
:function(){for(var e=0,t=arguments.length;e<t;e++){var n=this.fileURL(arguments[
e]);this.loading[n]||(this.loading[n]={preloaded:!0})}},loader:{JS:function(e,n){
var r=this.fileName(e),i=document.createElement("script"),s=t.Callback(["loadTimeout"
,this,e]);this.loading[e]={callback:n,timeout:setTimeout(s,this.timeout),status:this
.STATUS.OK,script:i},this.loading[e].message=t.Message.File(r),i.onerror=s,i.type="text/javascript"
,i.src=e+this.fileRev(r),this.head.appendChild(i)},CSS:function(e,n){var r=this.fileName
(e),i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.href=
e+this.fileRev(r),this.loading[e]={callback:n,message:t.Message.File(r),status:this
.STATUS.OK},this.head.appendChild(i),this.timer.create.call(this,[this.timer.file
,e],i)}},timer:{create:function(e,i){return e=t.Callback(e),i.nodeName==="STYLE"&&
i.styleSheet&&typeof i.styleSheet.cssText!="undefined"?e(this.STATUS.OK):window.chrome&&
i.nodeName==="LINK"?e(this.STATUS.OK):n?this.timer.start(this,[this.timer.checkSafari2
,r++,e],this.styleDelay):this.timer.start(this,[this.timer.checkLength,i,e],this.
styleDelay),e},start:function(e,n,r,i){n=t.Callback(n),n.execute=this.execute,n.time=
this.time,n.STATUS=e.STATUS,n.timeout=i||e.timeout,n.delay=n.total=r||0,r?setTimeout
(n,r):n()},time:function(e){return this.total+=this.delay,this.delay=Math.floor(this
.delay*1.05+5),this.total>=this.timeout?(e(this.STATUS.ERROR),1):0},file:function(
e,n){n<0?t.Ajax.loadTimeout(e):t.Ajax.loadComplete(e)},execute:function(){this.hook
.call(this.object,this,this.data[0],this.data[1])},checkSafari2:function(e,t,n){if(
e.time(n))return;document.styleSheets.length>t&&document.styleSheets[t].cssRules&&
document.styleSheets[t].cssRules.length?n(e.STATUS.OK):setTimeout(e,e.delay)},checkLength
:function(e,n,r){if(e.time(r))return;var i=0,s=n.sheet||n.styleSheet;try{(s.cssRules||
s.rules||[]).length>0&&(i=1)}catch(o){o.message.match(/protected variable|restricted URI/
)?i=1:o.message.match(/Security error/)&&(i=1)}i?setTimeout(t.Callback([r,e.STATUS
.OK]),0):setTimeout(e,e.delay)}},loadComplete:function(e){e=this.fileURL(e);var n=
this.loading[e];return n&&!n.preloaded?(t.Message.Clear(n.message),clearTimeout(n
.timeout),n.script&&(s.length===0&&setTimeout(o,0),s.push(n.script)),this.loaded[
e]=n.status,delete this.loading[e],this.addHook(e,n.callback)):(n&&delete this.loading
[e],this.loaded[e]=this.STATUS.OK,n={status:this.STATUS.OK}),this.loadHooks[e]?this
.loadHooks[e].Execute(n.status):null},loadTimeout:function(e){this.loading[e].timeout&&
clearTimeout(this.loading[e].timeout),this.loading[e].status=this.STATUS.ERROR,this
.loadError(e),this.loadComplete(e)},loadError:function(e){t.Message.Set(["LoadFailed"
,"File failed to load: %1",e],null,2e3),t.Hub.signal.Post(["file load error",e])}
,Styles:function(e,n){var r=this.StyleString(e);if(r==="")n=t.Callback(n),n();else{
var s=document.createElement("style");s.type="text/css",this.head=i(this.head),this
.head.appendChild(s),s.styleSheet&&typeof s.styleSheet.cssText!="undefined"?s.styleSheet
.cssText=r:s.appendChild(document.createTextNode(r)),n=this.timer.create.call(this
,n,s)}return n},StyleString:function(e){if(typeof e=="string")return e;var t="",n
,r;for(n in e)if(e.hasOwnProperty(n))if(typeof e[n]=="string")t+=n+" {"+e[n]+"}\n"
;else if(e[n]instanceof Array)for(var i=0;i<e[n].length;i++)r={},r[n]=e[n][i],t+=
this.StyleString(r);else if(n.substr(0,6)==="@media")t+=n+" {"+this.StyleString(e
[n])+"}\n";else if(e[n]!=null){r=[];for(var s in e[n])e[n].hasOwnProperty(s)&&e[n
][s]!=null&&(r[r.length]=s+": "+e[n][s]);t+=n+" {"+r.join("; ")+"}\n"}return t}}}
("MathJax"),MathJax.HTML={Element:function(e,t,n){var r=document.createElement(e)
;if(t){if(t.style){var i=t.style;t.style={};for(var s in i)i.hasOwnProperty(s)&&(
t.style[s.replace(/-([a-z])/g,this.ucMatch)]=i[s])}MathJax.Hub.Insert(r,t)}if(n){
n instanceof Array||(n=[n]);for(var o=0;o<n.length;o++)n[o]instanceof Array?r.appendChild
(this.Element(n[o][0],n[o][1],n[o][2])):e==="script"?this.setScript(r,n[o]):r.appendChild
(document.createTextNode(n[o]))}return r},ucMatch:function(e,t){return t.toUpperCase
()},addElement:function(e,t,n,r){return e.appendChild(this.Element(t,n,r))},TextNode
:function(e){return document.createTextNode(e)},addText:function(e,t){return e.appendChild
(this.TextNode(t))},setScript:function(e,t){if(this.setScriptBug)e.text=t;else{while(
e.firstChild)e.removeChild(e.firstChild);this.addText(e,t)}},getScript:function(e
){var t=e.text===""?e.innerHTML:e.text;return t.replace(/^\s+/,"").replace(/\s+$/
,"")},Cookie:{prefix:"mjx",expires:365,Set:function(e,t){var n=[];if(t)for(var r in 
t)t.hasOwnProperty(r)&&n.push(r+":"+t[r].toString().replace(/&/g,"&&"));var i=this
.prefix+"."+e+"="+escape(n.join("&;"));if(this.expires){var s=new Date;s.setDate(
s.getDate()+this.expires),i+="; expires="+s.toGMTString()}try{document.cookie=i+"; path=/"
}catch(o){}},Get:function(e,t){t||(t={});var n=new RegExp("(?:^|;\\s*)"+this.prefix+"\\."+
e+"=([^;]*)(?:;|$)"),r;try{r=n.exec(document.cookie)}catch(i){}if(r&&r[1]!==""){var s=
unescape(r[1]).split("&;");for(var o=0,u=s.length;o<u;o++){r=s[o].match(/([^:]+):(.*)/
);var a=r[2].replace(/&&/g,"&");a==="true"?a=!0:a==="false"?a=!1:a.match(/^-?(\d+(\.\d+)?|\.\d+)$/
)&&(a=parseFloat(a)),t[r[1]]=a}}return t}}},MathJax.Localization={locale:"en",directory
:"[MathJax]/localization",strings:{ast:{menuTitle:"asturianu"},bcc:{menuTitle:"بلوچی"
},br:{menuTitle:"brezhoneg"},ca:{menuTitle:"català"},cdo:{menuTitle:"Mìng-dĕ̤ng-ngṳ̄"
},cs:{menuTitle:"čeština"},da:{menuTitle:"dansk"},de:{menuTitle:"Deutsch"},en:{menuTitle
:"English",isLoaded:!0},eo:{menuTitle:"Esperanto"},es:{menuTitle:"español"},fa:{menuTitle
:"فارسی"},fi:{menuTitle:"suomi"},fr:{menuTitle:"français"},gl:{menuTitle:"galego"
},he:{menuTitle:"עברית"},ia:{menuTitle:"interlingua"},it:{menuTitle:"italiano"},ja
:{menuTitle:"日本語"},kn:{menuTitle:"ಕನ್ನಡ"},ko:{menuTitle:"한국어"},lb:{menuTitle:"Lëtzebuergesch"
},mk:{menuTitle:"македонски"},nl:{menuTitle:"Nederlands"},oc:{menuTitle:"occitan"
},pl:{menuTitle:"polski"},pt:{menuTitle:"portugusê"},"pt-br":{menuTitle:"português do Brasil"
},ru:{menuTitle:"русский"},sco:{menuTitle:"Scots"},sl:{menuTitle:"slovenščina"},sv
:{menuTitle:"svenska"},tr:{menuTitle:"Türkçe"},uk:{menuTitle:"українська"},vi:{menuTitle
:"Tiếng Việt"},"zh-hans":{menuTitle:"中文（简体）"}},pattern:/%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g
,SPLIT:"axb".split(/(x)/).length===3?function(e,t){return e.split(t)}:function(e,
t){var n=[],r,i=0;t.lastIndex=0;while(r=t.exec(e))n.push(e.substr(i,r.index-i)),n
.push.apply(n,r.slice(1)),i=r.index+r[0].length;return n.push(e.substr(i)),n},_:function(
e,t){return t instanceof Array?this.processSnippet(e,t):this.processString(this.lookupPhrase
(e,t),[].slice.call(arguments,2))},processString:function(e,t,n){var r,i;for(r=0,
i=t.length;r<i;r++)n&&t[r]instanceof Array&&(t[r]=this.processSnippet(n,t[r]));var s=
this.SPLIT(e,this.pattern);for(r=1,i=s.length;r<i;r+=2){var o=s[r].charAt(0);if(o>="0"&&
o<="9")s[r]=t[s[r]-1],typeof s[r]=="number"&&(s[r]=this.number(s[r]));else if(o==="{"
){o=s[r].substr(1);if(o>="0"&&o<="9")s[r]=t[s[r].substr(1,s[r].length-2)-1],typeof 
s[r]=="number"&&(s[r]=this.number(s[r]));else{var u=s[r].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/
);if(u)if(u[1]==="plural"){var a=t[u[2]-1];if(typeof a=="undefined")s[r]="???";else{
a=this.plural(a)-1;var f=u[3].replace(/(^|[^%])(%%)*%\|/g,"$1$2%").split(/\|/);a>=0&&
a<f.length?s[r]=this.processString(f[a].replace(/\uEFEF/g,"|"),t,n):s[r]="???"}}else s
[r]="%"+s[r]}}s[r]==null&&(s[r]="???")}if(!n)return s.join("");var l=[],c="";for(
r=0;r<i;r++)c+=s[r],r++,r<i&&(s[r]instanceof Array?(l.push(c),l=l.concat(s[r]),c=""
):c+=s[r]);return c!==""&&l.push(c),l},processSnippet:function(e,t){var n=[];for(
var r=0,i=t.length;r<i;r++)if(t[r]instanceof Array){var s=t[r];if(typeof s[1]=="string"
){var o=s[0];o instanceof Array||(o=[e,o]);var u=this.lookupPhrase(o,s[1]);n=n.concat
(this.processMarkdown(u,s.slice(2),e))}else s[1]instanceof Array?n=n.concat(this.
processSnippet.apply(this,s)):s.length>=3?n.push([s[0],s[1],this.processSnippet(e
,s[2])]):n.push(t[r])}else n.push(t[r]);return n},markdownPattern:/(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/
,processMarkdown:function(e,t,n){var r=[],i,s=e.split(this.markdownPattern),o=s[0
];for(var u=1,a=s.length;u<a;u+=8)s[u+1]?(i=this.processString(s[u+2],t,n),i instanceof 
Array||(i=[i]),i=[["b","i","i"][s[u+1].length-1],{},i],s[u+1].length===3&&(i=["b"
,{},i])):s[u+3]?(i=this.processString(s[u+4].replace(/^\s/,"").replace(/\s$/,""),
t,n),i instanceof Array||(i=[i]),i=["code",{},i]):s[u+5]?(i=this.processString(s[
u+5],t,n),i instanceof Array||(i=[i]),i=["a",{href:this.processString(s[u+6],t),target
:"_blank"},i]):(o+=s[u],i=null),i&&(r=this.concatString(r,o,t,n),r.push(i),o=""),
s[u+7]!==""&&(o+=s[u+7]);return r=this.concatString(r,o,t,n),r},concatString:function(
e,t,n,r){return t!=""&&(t=this.processString(t,n,r),t instanceof Array||(t=[t]),e=
e.concat(t)),e},lookupPhrase:function(e,t,n){n||(n="_"),e instanceof Array&&(n=e[0
]||"_",e=e[1]||"");var r=this.loadDomain(n);r&&MathJax.Hub.RestartAfter(r);var i=
this.strings[this.locale];if(i&&i.domains&&n in i.domains){var s=i.domains[n];s.strings&&
e in s.strings&&(t=s.strings[e])}return t},loadFile:function(e,t,n){n=MathJax.Callback
(n),e=t.file||e,e.match(/\.js$/)||(e+=".js");if(!e.match(/^([a-z]+:|\[MathJax\])/
)){var r=this.strings[this.locale].directory||this.directory+"/"+this.locale||"[MathJax]/localization/"+
this.locale;e=r+"/"+e}var i=MathJax.Ajax.Require(e,function(){return t.isLoaded=!0
,n()});return i.called?null:i},loadDomain:function(e,t){var n,r=this.strings[this
.locale];if(r){if(!r.isLoaded){n=this.loadFile(this.locale,r);if(n)return MathJax
.Callback.Queue(n,["loadDomain",this,e]).Push(t||{})}if(r.domains&&e in r.domains
){var i=r.domains[e];if(!i.isLoaded){n=this.loadFile(e,i);if(n)return MathJax.Callback
.Queue(n).Push(t)}}}return MathJax.Callback(t)()},Try:function(e){e=MathJax.Callback
(e),e.autoReset=!0;try{e()}catch(t){if(!t.restart)throw t;MathJax.Callback.After(
["Try",this,e],t.restart)}},resetLocale:function(e){if(!e)return;e=e.toLowerCase(
);while(!this.strings[e]){var t=e.lastIndexOf("-");if(t===-1)return;e=e.substring
(0,t)}var n=this.strings[e].remap;this.locale=n?n:e},setLocale:function(e){this.resetLocale
(e),MathJax.Menu&&this.loadDomain("MathMenu")},addTranslation:function(e,t,n){var r=
this.strings[e],i=!1;r||(r=this.strings[e]={},i=!0),r.domains||(r.domains={}),t&&
(r.domains[t]||(r.domains[t]={}),r=r.domains[t]),MathJax.Hub.Insert(r,n),i&&MathJax
.Menu.menu&&MathJax.Menu.CreateLocaleMenu()},setCSS:function(e){var t=this.strings
[this.locale];return t&&(t.fontFamily&&(e.style.fontFamily=t.fontFamily),t.fontDirection&&
(e.style.direction=t.fontDirection,t.fontDirection==="rtl"&&(e.style.textAlign="right"
))),e},fontFamily:function(){var e=this.strings[this.locale];return e?e.fontFamily
:null},fontDirection:function(){var e=this.strings[this.locale];return e?e.fontDirection
:null},plural:function(e){var t=this.strings[this.locale];return t&&t.plural?t.plural
(e):e==1?1:2},number:function(e){var t=this.strings[this.locale];return t&&t.number?
t.number(e):e}},MathJax.Message={ready:!1,log:[{}],current:null,textNodeBug:navigator
.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub=="undefined"||window
.hasOwnProperty&&window.hasOwnProperty("konqueror"),styles:{"#MathJax_Message":{position
:"fixed",left:"1px",bottom:"2px","background-color":"#E6E6E6",border:"1px solid #959595"
,margin:"0px",padding:"2px 8px","z-index":"102",color:"black","font-size":"80%",width
:"auto","white-space":"nowrap"},"#MathJax_MSIE_Frame":{position:"absolute",top:0,
left:0,width:"0px","z-index":101,border:"0px",margin:"0px",padding:"0px"}},browsers
:{MSIE:function(e){MathJax.Message.msieFixedPositionBug=(document.documentMode||0
)<7,MathJax.Message.msieFixedPositionBug&&(MathJax.Hub.config.styles["#MathJax_Message"
].position="absolute"),MathJax.Message.quirks=document.compatMode==="BackCompat"}
,Chrome:function(e){MathJax.Hub.config.styles["#MathJax_Message"].bottom="1.5em",
MathJax.Hub.config.styles["#MathJax_Message"].left="1em"}},Init:function(e){e&&(this
.ready=!0);if(!document.body||!this.ready)return!1;this.div&&this.div.parentNode==
null&&(this.div=document.getElementById("MathJax_Message"),this.div&&(this.text=this
.div.firstChild));if(!this.div){var t=document.body;this.msieFixedPositionBug&&window
.attachEvent&&(t=this.frame=this.addDiv(document.body),t.removeAttribute("id"),t.
style.position="absolute",t.style.border=t.style.margin=t.style.padding="0px",t.style
.zIndex="101",t.style.height="0px",t=this.addDiv(t),t.id="MathJax_MSIE_Frame",window
.attachEvent("onscroll",this.MoveFrame),window.attachEvent("onresize",this.MoveFrame
),this.MoveFrame()),this.div=this.addDiv(t),this.div.style.display="none",this.text=
this.div.appendChild(document.createTextNode(""))}return!0},addDiv:function(e){var t=
document.createElement("div");return t.id="MathJax_Message",e.firstChild?e.insertBefore
(t,e.firstChild):e.appendChild(t),t},MoveFrame:function(){var e=MathJax.Message.quirks?
document.body:document.documentElement,t=MathJax.Message.frame;t.style.left=e.scrollLeft+"px"
,t.style.top=e.scrollTop+"px",t.style.width=e.clientWidth+"px",t=t.firstChild,t.style
.height=e.clientHeight+"px"},localize:function(e){return MathJax.Localization._(e
,e)},filterText:function(e,t,n){return MathJax.Hub.config.messageStyle==="simple"&&
(n==="LoadFile"?(this.loading||(this.loading=this.localize("Loading")+" "),e=this
.loading,this.loading+="."):n==="ProcessMath"?(this.processing||(this.processing=
this.localize("Processing")+" "),e=this.processing,this.processing+="."):n==="TypesetMath"&&
(this.typesetting||(this.typesetting=this.localize("Typesetting")+" "),e=this.typesetting
,this.typesetting+=".")),e},Set:function(e,t,n){t==null&&(t=this.log.length,this.
log[t]={});var r="";if(e instanceof Array){r=e[0],r instanceof Array&&(r=r[1]);try{
e=MathJax.Localization._.apply(MathJax.Localization,e)}catch(i){if(!i.restart)throw i
;if(!i.restart.called)return this.log[t].restarted==null&&(this.log[t].restarted=0
),this.log[t].restarted++,delete this.log[t].cleared,MathJax.Callback.After(["Set"
,this,e,t,n],i.restart),t}}return this.timer&&(clearTimeout(this.timer),delete this
.timer),this.log[t].text=e,this.log[t].filteredText=e=this.filterText(e,t,r),typeof 
this.log[t].next=="undefined"&&(this.log[t].next=this.current,this.current!=null&&
(this.log[this.current].prev=t),this.current=t),this.current===t&&MathJax.Hub.config
.messageStyle!=="none"&&(this.Init()?(this.textNodeBug?this.div.innerHTML=e:this.
text.nodeValue=e,this.div.style.display="",this.status&&(window.status="",delete 
this.status)):(window.status=e,this.status=!0)),this.log[t].restarted&&(this.log[
t].cleared&&(n=0),--this.log[t].restarted===0&&delete this.log[t].cleared),n?setTimeout
(MathJax.Callback(["Clear",this,t]),n):n==0&&this.Clear(t,0),t},Clear:function(e,
t){this.log[e].prev!=null&&(this.log[this.log[e].prev].next=this.log[e].next),this
.log[e].next!=null&&(this.log[this.log[e].next].prev=this.log[e].prev),this.current===
e&&(this.current=this.log[e].next,this.text?(this.div.parentNode==null&&this.Init
(),this.current==null?(this.timer&&(clearTimeout(this.timer),delete this.timer),t==
null&&(t=600),t===0?this.Remove():this.timer=setTimeout(MathJax.Callback(["Remove"
,this]),t)):MathJax.Hub.config.messageStyle!=="none"&&(this.textNodeBug?this.div.
innerHTML=this.log[this.current].filteredText:this.text.nodeValue=this.log[this.current
].filteredText),this.status&&(window.status="",delete this.status)):this.status&&
(window.status=this.current==null?"":this.log[this.current].text)),delete this.log
[e].next,delete this.log[e].prev,delete this.log[e].filteredText,this.log[e].restarted&&
(this.log[e].cleared=!0)},Remove:function(){this.text.nodeValue="",this.div.style
.display="none"},File:function(e){return this.Set(["LoadFile","Loading %1",e],null
,null)},Log:function(){var e=[];for(var t=1,n=this.log.length;t<n;t++)e[t]=this.log
[t].text;return e.join("\n")}},MathJax.Hub={config:{root:"",config:[],styleSheets
:[],styles:{".MathJax_Preview":{color:"#888"}},jax:[],extensions:[],preJax:null,postJax
:null,displayAlign:"center",displayIndent:"0",preRemoveClass:"MathJax_Preview",showProcessingMessages
:!0,messageStyle:"normal",delayStartupUntil:"none",skipStartupTypeset:!1,elements
:[],positionToHash:!0,showMathMenu:!0,showMathMenuMSIE:!0,menuSettings:{zoom:"None"
,CTRL:!1,ALT:!1,CMD:!1,Shift:!1,discoverable:!1,zscale:"200%",renderer:"",font:"Auto"
,context:"MathJax",locale:"en",mpContext:!1,mpMouse:!1,texHints:!0,semantics:!1},
errorSettings:{message:["[",["MathProcessingError","Math Processing Error"],"]"],
style:{color:"#CC0000","font-style":"italic"}},ignoreMMLattributes:{}},preProcessors
:MathJax.Callback.Hooks(!0),inputJax:{},outputJax:{order:{}},processSectionDelay:50
,processUpdateTime:250,processUpdateDelay:10,signal:MathJax.Callback.Signal("Hub"
),Config:function(e){this.Insert(this.config,e),this.config.Augment&&this.Augment
(this.config.Augment)},CombineConfig:function(e,t){var n=this.config,r,i;e=e.split
(/\./);for(var s=0,o=e.length;s<o;s++)r=e[s],n[r]||(n[r]={}),i=n,n=n[r];return i[
r]=n=this.Insert(t,n),n},Register:{PreProcessor:function(){return MathJax.Hub.preProcessors
.Add.apply(MathJax.Hub.preProcessors,arguments)},MessageHook:function(){return MathJax
.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},StartupHook:function(
){return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,
arguments)},LoadHook:function(){return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments
)}},UnRegister:{PreProcessor:function(e){MathJax.Hub.preProcessors.Remove(e)},MessageHook
:function(e){MathJax.Hub.signal.RemoveHook(e)},StartupHook:function(e){MathJax.Hub
.Startup.signal.RemoveHook(e)},LoadHook:function(e){MathJax.Ajax.removeHook(e)}},
getAllJax:function(e){var t=[],n=this.elementScripts(e);for(var r=0,i=n.length;r<
i;r++)n[r].MathJax&&n[r].MathJax.elementJax&&t.push(n[r].MathJax.elementJax);return t
},getJaxByType:function(e,t){var n=[],r=this.elementScripts(t);for(var i=0,s=r.length
;i<s;i++)r[i].MathJax&&r[i].MathJax.elementJax&&r[i].MathJax.elementJax.mimeType===
e&&n.push(r[i].MathJax.elementJax);return n},getJaxByInputType:function(e,t){var n=
[],r=this.elementScripts(t);for(var i=0,s=r.length;i<s;i++)r[i].MathJax&&r[i].MathJax
.elementJax&&r[i].type&&r[i].type.replace(/ *;(.|\s)*/,"")===e&&n.push(r[i].MathJax
.elementJax);return n},getJaxFor:function(e){typeof e=="string"&&(e=document.getElementById
(e));if(e&&e.MathJax)return e.MathJax.elementJax;if(e&&e.isMathJax){while(e&&!e.jaxID
)e=e.parentNode;if(e)return MathJax.OutputJax[e.jaxID].getJaxFromMath(e)}return null
},isJax:function(e){typeof e=="string"&&(e=document.getElementById(e));if(e&&e.isMathJax
)return 1;if(e&&e.tagName!=null&&e.tagName.toLowerCase()==="script"){if(e.MathJax
)return e.MathJax.state===MathJax.ElementJax.STATE.PROCESSED?1:-1;if(e.type&&this
.inputJax[e.type.replace(/ *;(.|\s)*/,"")])return-1}return 0},setRenderer:function(
e,t){if(!e)return;if(!MathJax.OutputJax[e]){this.config.menuSettings.renderer="";
var n="[MathJax]/jax/output/"+e+"/config.js";return MathJax.Ajax.Require(n,["setRenderer"
,this,e,t])}this.config.menuSettings.renderer=e,t==null&&(t="jax/mml");var r=this
.outputJax;return r[t]&&r[t].length&&e!==r[t][0].id?(r[t].unshift(MathJax.OutputJax
[e]),this.signal.Post(["Renderer Selected",e])):null},Queue:function(){return this
.queue.Push.apply(this.queue,arguments)},Typeset:function(e,t){if(!MathJax.isReady
)return null;var n=this.elementCallback(e,t);if(n.count)var r=MathJax.Callback.Queue
(["PreProcess",this,n.elements],["Process",this,n.elements]);return r.Push(n.callback
)},PreProcess:function(e,t){var n=this.elementCallback(e,t),r=MathJax.Callback.Queue
();if(n.count){var i=n.count===1?[n.elements]:n.elements;r.Push(["Post",this.signal
,["Begin PreProcess",n.elements]]);for(var s=0,o=i.length;s<o;s++)i[s]&&r.Push(["Execute"
,this.preProcessors,i[s]]);r.Push(["Post",this.signal,["End PreProcess",n.elements
]])}return r.Push(n.callback)},Process:function(e,t){return this.takeAction("Process"
,e,t)},Update:function(e,t){return this.takeAction("Update",e,t)},Reprocess:function(
e,t){return this.takeAction("Reprocess",e,t)},Rerender:function(e,t){return this.
takeAction("Rerender",e,t)},takeAction:function(e,t,n){var r=this.elementCallback
(t,n),i=r.elements,s=MathJax.Callback.Queue(["Clear",this.signal]),o={scripts:[],
start:(new Date).getTime(),i:0,j:0,jax:{},jaxIDs:[]};if(r.count){var u=["Delay",MathJax
.Callback,this.processSectionDelay];u[2]||(u={}),s.Push(["Post",this.signal,["Begin "+
e,i]],["Post",this.signal,["Begin Math",i,e]],["prepareScripts",this,e,i,o],["Post"
,this.signal,["Begin Math Input",i,e]],["processInput",this,o],["Post",this.signal
,["End Math Input",i,e]],u,["prepareOutput",this,o,"preProcess"],u,["Post",this.signal
,["Begin Math Output",i,e]],["processOutput",this,o],["Post",this.signal,["End Math Output"
,i,e]],u,["prepareOutput",this,o,"postProcess"],u,["Post",this.signal,["End Math"
,i,e]],["Post",this.signal,["End "+e,i]])}return s.Push(r.callback)},scriptAction
:{Process:function(e){},Update:function(e){var t=e.MathJax.elementJax;t&&t.needsUpdate
()?(t.Remove(!0),e.MathJax.state=t.STATE.UPDATE):e.MathJax.state=t.STATE.PROCESSED
},Reprocess:function(e){var t=e.MathJax.elementJax;t&&(t.Remove(!0),e.MathJax.state=
t.STATE.UPDATE)},Rerender:function(e){var t=e.MathJax.elementJax;t&&(t.Remove(!0)
,e.MathJax.state=t.STATE.OUTPUT)}},prepareScripts:function(e,t,n){if(arguments.callee
.disabled)return;var r=this.elementScripts(t),i=MathJax.ElementJax.STATE;for(var s=0
,o=r.length;s<o;s++){var u=r[s];u.type&&this.inputJax[u.type.replace(/ *;(.|\n)*/
,"")]&&(u.MathJax&&(u.MathJax.elementJax&&u.MathJax.elementJax.hover&&MathJax.Extension
.MathEvents.Hover.ClearHover(u.MathJax.elementJax),u.MathJax.state!==i.PENDING&&this
.scriptAction[e](u)),u.MathJax||(u.MathJax={state:i.PENDING}),u.MathJax.state!==i
.PROCESSED&&n.scripts.push(u))}},checkScriptSiblings:function(e){if(e.MathJax.checked
)return;var t=this.config,n=e.previousSibling;if(n&&n.nodeName==="#text"){var r,i
,s=e.nextSibling;s&&s.nodeName!=="#text"&&(s=null),t.preJax&&(typeof t.preJax=="string"&&
(t.preJax=new RegExp(t.preJax+"$")),r=n.nodeValue.match(t.preJax)),t.postJax&&s&&
(typeof t.postJax=="string"&&(t.postJax=new RegExp("^"+t.postJax)),i=s.nodeValue.
match(t.postJax)),r&&(!t.postJax||i)&&(n.nodeValue=n.nodeValue.replace(t.preJax,r
.length>1?r[1]:""),n=null),i&&(!t.preJax||r)&&(s.nodeValue=s.nodeValue.replace(t.
postJax,i.length>1?i[1]:"")),n&&!n.nodeValue.match(/\S/)&&(n=n.previousSibling)}t
.preRemoveClass&&n&&n.className===t.preRemoveClass&&(e.MathJax.preview=n),e.MathJax
.checked=1},processInput:function(e){var t,n=MathJax.ElementJax.STATE,r,i,s=e.scripts
.length;try{while(e.i<s){r=e.scripts[e.i];if(!r){e.i++;continue}i=r.previousSibling
,i&&i.className==="MathJax_Error"&&i.parentNode.removeChild(i);if(!r.MathJax||r.MathJax
.state===n.PROCESSED){e.i++;continue}if(!r.MathJax.elementJax||r.MathJax.state===
n.UPDATE){this.checkScriptSiblings(r);var o=r.type.replace(/ *;(.|\s)*/,"");t=this
.inputJax[o].Process(r,e);if(typeof t=="function"){if(t.called)continue;this.RestartAfter
(t)}t.Attach(r,this.inputJax[o].id),this.saveScript(t,e,r,n)}else r.MathJax.state===
n.OUTPUT&&this.saveScript(r.MathJax.elementJax,e,r,n);e.i++;var u=(new Date).getTime
();u-e.start>this.processUpdateTime&&e.i<e.scripts.length&&(e.start=u,this.RestartAfter
(MathJax.Callback.Delay(1)))}}catch(a){return this.processError(a,e,"Input")}return e
.scripts.length&&this.config.showProcessingMessages&&MathJax.Message.Set(["ProcessMath"
,"Processing math: %1%%",100],0),e.start=(new Date).getTime(),e.i=e.j=0,null},saveScript
:function(e,t,n,r){if(!this.outputJax[e.mimeType])throw n.MathJax.state=r.UPDATE,
Error("No output jax registered for "+e.mimeType);e.outputJax=this.outputJax[e.mimeType
][0].id,t.jax[e.outputJax]||(t.jaxIDs.length===0?t.jax[e.outputJax]=t.scripts:(t.
jaxIDs.length===1&&(t.jax[t.jaxIDs[0]]=t.scripts.slice(0,t.i)),t.jax[e.outputJax]=
[]),t.jaxIDs.push(e.outputJax)),t.jaxIDs.length>1&&t.jax[e.outputJax].push(n),n.MathJax
.state=r.OUTPUT},prepareOutput:function(e,t){while(e.j<e.jaxIDs.length){var n=e.jaxIDs
[e.j],r=MathJax.OutputJax[n];if(r[t])try{var i=r[t](e);if(typeof i=="function"){if(
i.called)continue;this.RestartAfter(i)}}catch(s){return s.restart||(MathJax.Message
.Set(["PrepError","Error preparing %1 output (%2)",n,t],null,600),MathJax.Hub.lastPrepError=
s,e.j++),MathJax.Callback.After(["prepareOutput",this,e,t],s.restart)}e.j++}return null
},processOutput:function(e){var t,n=MathJax.ElementJax.STATE,r,i=e.scripts.length
;try{while(e.i<i){r=e.scripts[e.i];if(!r||!r.MathJax||r.MathJax.error){e.i++;continue}
var s=r.MathJax.elementJax;if(!s){e.i++;continue}t=MathJax.OutputJax[s.outputJax]
.Process(r,e),t!==!1&&(r.MathJax.state=n.PROCESSED,r.MathJax.preview&&(r.MathJax.
preview.innerHTML=""),this.signal.Post(["New Math",s.inputID])),e.i++;var o=(new 
Date).getTime();o-e.start>this.processUpdateTime&&e.i<e.scripts.length&&(e.start=
o,this.RestartAfter(MathJax.Callback.Delay(this.processUpdateDelay)))}}catch(u){return this
.processError(u,e,"Output")}return e.scripts.length&&this.config.showProcessingMessages&&
(MathJax.Message.Set(["TypesetMath","Typesetting math: %1%%",100],0),MathJax.Message
.Clear(0)),e.i=e.j=0,null},processMessage:function(e,t){var n=Math.floor(e.i/e.scripts
.length*100),r=t==="Output"?["TypesetMath","Typesetting math: %1%%"]:["ProcessMath"
,"Processing math: %1%%"];this.config.showProcessingMessages&&MathJax.Message.Set
(r.concat(n),0)},processError:function(e,t,n){if(!e.restart){if(!this.config.errorSettings
.message)throw e;this.formatError(t.scripts[t.i],e),t.i++}return this.processMessage
(t,n),MathJax.Callback.After(["process"+n,this,t],e.restart)},formatError:function(
e,t){var n="Error: "+t.message+"\n";t.sourceURL&&(n+="\nfile: "+t.sourceURL),t.line&&
(n+="\nline: "+t.line),e.MathJax.error=MathJax.OutputJax.Error.Jax(n,e);var r=this
.config.errorSettings,i=MathJax.Localization._(r.messageId,r.message),s=MathJax.HTML
.Element("span",{className:"MathJax_Error",jaxID:"Error",isMathJax:!0},i);MathJax
.Extension.MathEvents?(s.oncontextmenu=MathJax.Extension.MathEvents.Event.Menu,s.
onmousedown=MathJax.Extension.MathEvents.Event.Mousedown):MathJax.Ajax.Require("[MathJax]/extensions/MathEvents.js"
,function(){s.oncontextmenu=MathJax.Extension.MathEvents.Event.Menu,s.onmousedown=
MathJax.Extension.MathEvents.Event.Mousedown}),e.parentNode.insertBefore(s,e),e.MathJax
.preview&&(e.MathJax.preview.innerHTML=""),this.lastError=t,this.signal.Post(["Math Processing Error"
,e,t])},RestartAfter:function(e){throw this.Insert(Error("restart"),{restart:MathJax
.Callback(e)})},elementCallback:function(e,t){if(t==null&&(e instanceof Array||typeof 
e=="function"))try{MathJax.Callback(e),t=e,e=null}catch(n){}e==null&&(e=this.config
.elements||[]),this.isHTMLCollection(e)&&(e=this.HTMLCollection2Array(e)),e instanceof 
Array||(e=[e]),e=[].concat(e);for(var r=0,i=e.length;r<i;r++)typeof e[r]=="string"&&
(e[r]=document.getElementById(e[r]));return document.body||(document.body=document
.getElementsByTagName("body")[0]),e.length==0&&e.push(document.body),t||(t={}),{count
:e.length,elements:e.length===1?e[0]:e,callback:t}},elementScripts:function(e){var t=
[];if(e instanceof Array||this.isHTMLCollection(e)){for(var n=0,r=e.length;n<r;n++
){var i=0;for(var s=0;s<n&&!i;s++)i=e[s].contains(e[n]);i||t.push.apply(t,this.elementScripts
(e[n]))}return t}return typeof e=="string"&&(e=document.getElementById(e)),document
.body||(document.body=document.getElementsByTagName("body")[0]),e==null&&(e=document
.body),e.tagName!=null&&e.tagName.toLowerCase()==="script"?[e]:(t=e.getElementsByTagName
("script"),this.msieHTMLCollectionBug&&(t=this.HTMLCollection2Array(t)),t)},isHTMLCollection
:function(e){return"HTMLCollection"in window&&typeof e=="object"&&e instanceof HTMLCollection
},HTMLCollection2Array:function(e){if(!this.msieHTMLCollectionBug)return[].slice.
call(e);var t=[];for(var n=0,r=e.length;n<r;n++)t[n]=e[n];return t},Insert:function(
e,t){for(var n in t)t.hasOwnProperty(n)&&(typeof t[n]!="object"||t[n]instanceof Array||typeof 
e[n]!="object"&&typeof e[n]!="function"?e[n]=t[n]:this.Insert(e[n],t[n]));return e
},SplitList:"trim"in String.prototype?function(e){return e.trim().split(/\s+/)}:function(
e){return e.replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/)}},MathJax.Hub.Insert
(MathJax.Hub.config.styles,MathJax.Message.styles),MathJax.Hub.Insert(MathJax.Hub
.config.styles,{".MathJax_Error":MathJax.Hub.config.errorSettings.style}),MathJax
.Extension={},MathJax.Hub.Configured=MathJax.Callback({}),MathJax.Hub.Startup={script
:"",queue:MathJax.Callback.Queue(),signal:MathJax.Callback.Signal("Startup"),params
:{},Config:function(){this.queue.Push(["Post",this.signal,"Begin Config"]),this.params
.locale&&(MathJax.Localization.resetLocale(this.params.locale),MathJax.Hub.config
.menuSettings.locale=this.params.locale);if(this.params.config){var e=this.params
.config.split(/,/);for(var t=0,n=e.length;t<n;t++)e[t].match(/\.js$/)||(e[t]+=".js"
),this.queue.Push(["Require",MathJax.Ajax,this.URL("config",e[t])])}this.queue.Push
(["Config",MathJax.Hub,MathJax.AuthorConfig]),this.script.match(/\S/)&&this.queue
.Push(this.script+";\n1;"),this.queue.Push(["ConfigDelay",this],["ConfigBlocks",this
],[function(e){return e.loadArray(MathJax.Hub.config.config,"config",null,!0)},this
],["Post",this.signal,"End Config"])},ConfigDelay:function(){var e=this.params.delayStartupUntil||
MathJax.Hub.config.delayStartupUntil;return e==="onload"?this.onload:e==="configured"?
MathJax.Hub.Configured:e},ConfigBlocks:function(){var e=document.getElementsByTagName
("script"),t=null,n=MathJax.Callback.Queue();for(var r=0,i=e.length;r<i;r++){var s=
String(e[r].type).replace(/ /g,"");s.match(/^text\/x-mathjax-config(;.*)?$/)&&!s.
match(/;executed=true/)&&(e[r].type+=";executed=true",t=n.Push(e[r].innerHTML+";\n1;"
))}return t},Cookie:function(){return this.queue.Push(["Post",this.signal,"Begin Cookie"
],["Get",MathJax.HTML.Cookie,"menu",MathJax.Hub.config.menuSettings],[function(e)
{e.menuSettings.locale&&MathJax.Localization.resetLocale(e.menuSettings.locale);var t=
e.menuSettings.renderer,n=e.jax;if(t){var r="output/"+t;n.sort();for(var i=0,s=n.
length;i<s;i++)if(n[i].substr(0,7)==="output/")break;if(i==s-1)n.pop();else while(
i<s){if(n[i]===r){n.splice(i,1);break}i++}n.unshift(r)}e.menuSettings.CHTMLpreview&&!
MathJax.Extension["CHTML-preview"]&&MathJax.Hub.config.extensions.push("CHTML-preview.js"
)},MathJax.Hub.config],["Post",this.signal,"End Cookie"])},Styles:function(){return this
.queue.Push(["Post",this.signal,"Begin Styles"],["loadArray",this,MathJax.Hub.config
.styleSheets,"config"],["Styles",MathJax.Ajax,MathJax.Hub.config.styles],["Post",
this.signal,"End Styles"])},Jax:function(){var e=MathJax.Hub.config,t=MathJax.Hub
.outputJax;for(var n=0,r=e.jax.length,i=0;n<r;n++){var s=e.jax[n].substr(7);e.jax
[n].substr(0,7)==="output/"&&t.order[s]==null&&(t.order[s]=i,i++)}var o=MathJax.Callback
.Queue();return o.Push(["Post",this.signal,"Begin Jax"],["loadArray",this,e.jax,"jax"
,"config.js"],["Post",this.signal,"End Jax"])},Extensions:function(){var e=MathJax
.Callback.Queue();return e.Push(["Post",this.signal,"Begin Extensions"],["loadArray"
,this,MathJax.Hub.config.extensions,"extensions"],["Post",this.signal,"End Extensions"
])},Message:function(){MathJax.Message.Init(!0)},Menu:function(){var e=MathJax.Hub
.config.menuSettings,t=MathJax.Hub.outputJax,n;for(var r in t)if(t.hasOwnProperty
(r)&&t[r].length){n=t[r];break}n&&n.length&&(e.renderer&&e.renderer!==n[0].id&&n.
unshift(MathJax.OutputJax[e.renderer]),e.renderer=n[0].id)},Hash:function(){if(MathJax
.Hub.config.positionToHash&&document.location.hash&&document.body&&document.body.
scrollIntoView){var e=document.location.hash.substr(1),t=document.getElementById(
e);if(!t){var n=document.getElementsByTagName("a");for(var r=0,i=n.length;r<i;r++
)if(n[r].name===e){t=n[r];break}}if(t){while(!t.scrollIntoView)t=t.parentNode;t=this
.HashCheck(t),t&&t.scrollIntoView&&setTimeout(function(){t.scrollIntoView(!0)},1)
}}},HashCheck:function(e){if(e.isMathJax){var t=MathJax.Hub.getJaxFor(e);t&&MathJax
.OutputJax[t.outputJax].hashCheck&&(e=MathJax.OutputJax[t.outputJax].hashCheck(e)
)}return e},MenuZoom:function(){MathJax.Hub.config.showMathMenu&&(MathJax.Extension
.MathMenu?setTimeout(MathJax.Callback(["loadDomain",MathJax.Localization,"MathMenu"
]),1e3):setTimeout(function(){MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/MathMenu.js"
,{}],["loadDomain",MathJax.Localization,"MathMenu"])},1e3),MathJax.Extension.MathZoom||
setTimeout(MathJax.Callback(["Require",MathJax.Ajax,"[MathJax]/extensions/MathZoom.js"
,{}]),2e3))},onLoad:function(){var e=this.onload=MathJax.Callback(function(){MathJax
.Hub.Startup.signal.Post("onLoad")});if(document.body&&document.readyState)if(MathJax
.Hub.Browser.isMSIE){if(document.readyState==="complete")return[e]}else if(document
.readyState!=="loading")return[e];return window.addEventListener?(window.addEventListener
("load",e,!1),this.params.noDOMContentEvent||window.addEventListener("DOMContentLoaded"
,e,!1)):window.attachEvent?window.attachEvent("onload",e):window.onload=e,e},Typeset
:function(e,t){return MathJax.Hub.config.skipStartupTypeset?function(){}:this.queue
.Push(["Post",this.signal,"Begin Typeset"],["Typeset",MathJax.Hub,e,t],["Post",this
.signal,"End Typeset"])},URL:function(e,t){return t.match(/^([a-z]+:\/\/|\[|\/)/)||
(t="[MathJax]/"+e+"/"+t),t},loadArray:function(e,t,n,r){if(e){e instanceof Array||
(e=[e]);if(e.length){var i=MathJax.Callback.Queue(),s={},o;for(var u=0,a=e.length
;u<a;u++)o=this.URL(t,e[u]),n&&(o+="/"+n),r?i.Push(["Require",MathJax.Ajax,o,s]):
i.Push(MathJax.Ajax.Require(o,s));return i.Push({})}}return null}},function(e){var t=
window[e],n="["+e+"]",r=t.Hub,i=t.Ajax,s=t.Callback,o=MathJax.Object.Subclass({JAXFILE
:"jax.js",require:null,config:{},Init:function(e,t){return arguments.length===0?this
:this.constructor.Subclass(e,t)()},Augment:function(e,t){var n=this.constructor,i=
{};if(e!=null){for(var s in e)e.hasOwnProperty(s)&&(typeof e[s]=="function"?n.protoFunction
(s,e[s]):i[s]=e[s]);e.toString!==n.prototype.toString&&e.toString!=={}.toString&&
n.protoFunction("toString",e.toString)}return r.Insert(n.prototype,i),n.Augment(null
,t),this},Translate:function(e,t){throw Error(this.directory+"/"+this.JAXFILE+" failed to define the Translate() method"
)},Register:function(e){},Config:function(){this.config=r.CombineConfig(this.id,this
.config),this.config.Augment&&this.Augment(this.config.Augment)},Startup:function(
){},loadComplete:function(e){if(e==="config.js")return i.loadComplete(this.directory+"/"+
e);var t=s.Queue();return t.Push(r.Register.StartupHook("End Config",{}),["Post",
r.Startup.signal,this.id+" Jax Config"],["Config",this],["Post",r.Startup.signal,
this.id+" Jax Require"],[function(e){return MathJax.Hub.Startup.loadArray(e.require
,this.directory)},this],[function(e,t){return MathJax.Hub.Startup.loadArray(e.extensions
,"extensions/"+t)},this.config||{},this.id],["Post",r.Startup.signal,this.id+" Jax Startup"
],["Startup",this],["Post",r.Startup.signal,this.id+" Jax Ready"]),this.copyTranslate&&
t.Push([function(e){e.preProcess=e.preTranslate,e.Process=e.Translate,e.postProcess=
e.postTranslate},this.constructor.prototype]),t.Push(["loadComplete",i,this.directory+"/"+
e])}},{id:"Jax",version:"2.5.0",directory:n+"/jax",extensionDir:n+"/extensions"})
;t.InputJax=o.Subclass({elementJax:"mml",sourceMenuTitle:["Original","Original Form"
],copyTranslate:!0,Process:function(e,n){var o=s.Queue(),u,l=this.elementJax;l instanceof 
Array||(l=[l]);for(var h=0,p=l.length;h<p;h++)u=t.ElementJax.directory+"/"+l[h]+"/"+
this.JAXFILE,this.require?this.require instanceof Array||(this.require=[this.require
]):this.require=[],this.require.push(u),o.Push(i.Require(u));u=this.directory+"/"+
this.JAXFILE;var d=o.Push(i.Require(u));return d.called||(this.constructor.prototype
.Process=function(){if(!d.called)return d;throw Error(u+" failed to load properly"
)}),l=r.outputJax["jax/"+l[0]],l&&o.Push(i.Require(l[0].directory+"/"+this.JAXFILE
)),o.Push({})},needsUpdate:function(e){var n=e.SourceElement();return e.originalText!==
t.HTML.getScript(n)},Register:function(e){r.inputJax||(r.inputJax={}),r.inputJax[
e]=this}},{id:"InputJax",version:"2.5.0",directory:o.directory+"/input",extensionDir
:o.extensionDir}),t.OutputJax=o.Subclass({copyTranslate:!0,preProcess:function(e)
{var t,n=this.directory+"/"+this.JAXFILE;return this.constructor.prototype.preProcess=
function(e){if(!t.called)return t;throw Error(n+" failed to load properly")},t=i.
Require(n),t},Register:function(e){var n=r.outputJax;n[e]||(n[e]=[]),n[e].length&&
(this.id===r.config.menuSettings.renderer||(n.order[this.id]||0)<(n.order[n[e][0]
.id]||0))?n[e].unshift(this):n[e].push(this),this.require?this.require instanceof 
Array||(this.require=[this.require]):this.require=[],this.require.push(t.ElementJax
.directory+"/"+e.split(/\//)[1]+"/"+this.JAXFILE)},Remove:function(e){}},{id:"OutputJax"
,version:"2.5.0",directory:o.directory+"/output",extensionDir:o.extensionDir,fontDir
:n+(t.isPacked?"":"/..")+"/fonts",imageDir:n+(t.isPacked?"":"/..")+"/images"}),t.
ElementJax=o.Subclass({Init:function(e,t){return this.constructor.Subclass(e,t)},
inputJax:null,outputJax:null,inputID:null,originalText:"",mimeType:"",sourceMenuTitle
:["MathMLcode","MathML Code"],Text:function(e,n){var i=this.SourceElement();return t
.HTML.setScript(i,e),i.MathJax.state=this.STATE.UPDATE,r.Update(i,n)},Reprocess:function(
e){var t=this.SourceElement();return t.MathJax.state=this.STATE.UPDATE,r.Reprocess
(t,e)},Update:function(e){return this.Rerender(e)},Rerender:function(e){var t=this
.SourceElement();return t.MathJax.state=this.STATE.OUTPUT,r.Process(t,e)},Remove:
function(e){this.hover&&this.hover.clear(this),t.OutputJax[this.outputJax].Remove
(this),e||(r.signal.Post(["Remove Math",this.inputID]),this.Detach())},needsUpdate
:function(){return t.InputJax[this.inputJax].needsUpdate(this)},SourceElement:function(
){return document.getElementById(this.inputID)},Attach:function(e,n){var r=e.MathJax
.elementJax;return e.MathJax.state===this.STATE.UPDATE?r.Clone(this):(r=e.MathJax
.elementJax=this,e.id?this.inputID=e.id:(e.id=this.inputID=t.ElementJax.GetID(),this
.newID=1)),r.originalText=t.HTML.getScript(e),r.inputJax=n,r.root&&(r.root.inputID=
r.inputID),r},Detach:function(){var e=this.SourceElement();if(!e)return;try{delete 
e.MathJax}catch(t){e.MathJax=null}this.newID&&(e.id="")},Clone:function(e){var t;
for(t in this){if(!this.hasOwnProperty(t))continue;typeof e[t]=="undefined"&&t!=="newID"&&delete 
this[t]}for(t in e){if(!e.hasOwnProperty(t))continue;if(typeof this[t]=="undefined"||
this[t]!==e[t]&&t!=="inputID")this[t]=e[t]}}},{id:"ElementJax",version:"2.5.0",directory
:o.directory+"/element",extensionDir:o.extensionDir,ID:0,STATE:{PENDING:1,PROCESSED
:2,UPDATE:3,OUTPUT:4},GetID:function(){return this.ID++,"MathJax-Element-"+this.ID
},Subclass:function(){var e=o.Subclass.apply(this,arguments);return e.loadComplete=
this.prototype.loadComplete,e}}),t.ElementJax.prototype.STATE=t.ElementJax.STATE,
t.OutputJax.Error={id:"Error",version:"2.5.0",config:{},ContextMenu:function(){return t
.Extension.MathEvents.Event.ContextMenu.apply(t.Extension.MathEvents.Event,arguments
)},Mousedown:function(){return t.Extension.MathEvents.Event.AltContextMenu.apply(
t.Extension.MathEvents.Event,arguments)},getJaxFromMath:function(e){return(e.nextSibling
.MathJax||{}).error},Jax:function(e,t){var n=MathJax.Hub.inputJax[t.type.replace(/ *;(.|\s)*/
,"")];return{inputJax:(n||{id:"Error"}).id,outputJax:"Error",sourceMenuTitle:["ErrorMessage"
,"Error Message"],sourceMenuFormat:"Error",originalText:MathJax.HTML.getScript(t)
,errorText:e}}},t.InputJax.Error={id:"Error",version:"2.5.0",config:{},sourceMenuTitle
:["Original","Original Form"]}}("MathJax"),function(e){var t=window[e];t||(t=window
[e]={});var n=t.Hub,r=n.Startup,i=n.config,s=document.head||document.getElementsByTagName
("head")[0];s||(s=document.childNodes[0]);var o=(document.documentElement||document
).getElementsByTagName("script");o.length===0&&s.namespaceURI&&(o=document.getElementsByTagNameNS
(s.namespaceURI,"script"));var u=new RegExp("(^|/)"+e+"\\.js(\\?.*)?$");for(var a=
o.length-1;a>=0;a--)if((o[a].src||"").match(u)){r.script=o[a].innerHTML;if(RegExp
.$2){var f=RegExp.$2.substr(1).split(/\&/);for(var l=0,c=f.length;l<c;l++){var h=
f[l].match(/(.*)=(.*)/);h&&(r.params[unescape(h[1])]=unescape(h[2]))}}i.root=o[a]
.src.replace(/(^|\/)[^\/]*(\?.*)?$/,"").replace(/^(https?:)\/\/[0-9a-f]+(-[0-9a-f]+)?.ssl.cf1.rackcdn.com\//
,"$1//cdn.mathjax.org/"),t.Ajax.config.root=i.root;break}var p=navigator.userAgent
,d={isMac:navigator.platform.substr(0,3)==="Mac",isPC:navigator.platform.substr(0
,3)==="Win",isMSIE:"ActiveXObject"in window&&"clipboardData"in window,isFirefox:p
.match(/Gecko\//)&&!p.match(/like Gecko/),isSafari:p.match(/ (Apple)?WebKit\//)!=
null&&(!window.chrome||window.chrome.loadTimes==null),isChrome:window.chrome!=null&&
window.chrome.loadTimes!=null,isOpera:window.opera!=null&&window.opera.version!=null
,isKonqueror:"konqueror"in window&&navigator.vendor=="KDE",versionAtLeast:function(
e){var t=this.version.split(".");e=(new String(e)).split(".");for(var n=0,r=e.length
;n<r;n++)if(t[n]!=e[n])return parseInt(t[n]||"0")>=parseInt(e[n]);return!0},Select
:function(e){var t=e[n.Browser];return t?t(n.Browser):null}},v=p.replace(/^Mozilla\/(\d+\.)+\d+ /
,"").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,"").replace
(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,"");n.Browser=n.Insert(n.Insert(new 
String("Unknown"),{version:"0.0"}),d);for(var m in d)if(d.hasOwnProperty(m)&&d[m]&&
m.substr(0,2)==="is"){m=m.slice(2);if(m==="Mac"||m==="PC")continue;n.Browser=n.Insert
(new String(m),d);var g=new RegExp(".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|.*("+
m+")"+(m=="MSIE"?" ":"/")+"((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)"
),y=g.exec(v)||["","","","unknown","0.0"];n.Browser.name=y[1]!=""?m:y[3]||y[5],n.
Browser.version=y[2]||y[4]||y[6];break}n.Browser.Select({Safari:function(e){var t=
parseInt(String(e.version).split(".")[0]);t>85&&(e.webkit=e.version),t>=538?e.version="8.0"
:t>=537?e.version="7.0":t>=536?e.version="6.0":t>=534?e.version="5.1":t>=533?e.version="5.0"
:t>=526?e.version="4.0":t>=525?e.version="3.1":t>500?e.version="3.0":t>400?e.version="2.0"
:t>85&&(e.version="1.0"),e.webkit=navigator.appVersion.match(/WebKit\/(\d+)\./)[1
],e.isMobile=navigator.appVersion.match(/Mobile/i)!=null,e.noContextMenu=e.isMobile
},Firefox:function(e){if((e.version==="0.0"||p.match(/Firefox/)==null)&&navigator
.product==="Gecko"){var t=p.match(/[\/ ]rv:(\d+\.\d.*?)[\) ]/);if(t)e.version=t[1
];else{var n=(navigator.buildID||navigator.productSub||"0").substr(0,8);n>="20111220"?
e.version="9.0":n>="20111120"?e.version="8.0":n>="20110927"?e.version="7.0":n>="20110816"?
e.version="6.0":n>="20110621"?e.version="5.0":n>="20110320"?e.version="4.0":n>="20100121"?
e.version="3.6":n>="20090630"?e.version="3.5":n>="20080617"?e.version="3.0":n>="20061024"&&
(e.version="2.0")}}e.isMobile=navigator.appVersion.match(/Android/i)!=null||p.match
(/ Fennec\//)!=null||p.match(/Mobile/)!=null},Opera:function(e){e.version=opera.version
()},MSIE:function(e){e.isIE9=!(!document.documentMode||!window.performance&&!window
.msPerformance),MathJax.HTML.setScriptBug=!e.isIE9||document.documentMode<9,MathJax
.Hub.msieHTMLCollectionBug=document.documentMode<9;if(document.documentMode<10&&!
r.params.NoMathPlayer){try{new ActiveXObject("MathPlayer.Factory.1"),e.hasMathPlayer=!0
}catch(t){}try{if(e.hasMathPlayer){var n=document.createElement("object");n.id="mathplayer"
,n.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987",s.appendChild(n),document
.namespaces.add("m","http://www.w3.org/1998/Math/MathML"),e.mpNamespace=!0,document
.readyState&&(document.readyState==="loading"||document.readyState==="interactive"
)&&(document.write('<?import namespace="m" implementation="#MathPlayer">'),e.mpImported=!0
)}else document.namespaces.add("mjx_IE_fix","http://www.w3.org/1999/xlink")}catch(
t){}}}}),n.Browser.Select(MathJax.Message.browsers),t.AuthorConfig&&typeof t.AuthorConfig
.AuthorInit=="function"&&t.AuthorConfig.AuthorInit(),n.queue=t.Callback.Queue(),n
.queue.Push(["Post",r.signal,"Begin"],["Config",r],["Cookie",r],["Styles",r],["Message"
,r],function(){var e=t.Callback.Queue(r.Jax(),r.Extensions());return e.Push({})},
["Menu",r],r.onLoad(),function(){MathJax.isReady=!0},["Typeset",r],["Hash",r],["MenuZoom"
,r],["Post",r.signal,"End"])}("MathJax"));