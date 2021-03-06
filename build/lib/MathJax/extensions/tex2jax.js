/*
 *  /MathJax/extensions/tex2jax.js
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

MathJax.Extension.tex2jax={version:"2.5.0",config:{inlineMath:[["\\(","\\)"]],displayMath
:[["$$","$$"],["\\[","\\]"]],balanceBraces:!0,skipTags:["script","noscript","style"
,"textarea","pre","code","annotation","annotation-xml"],ignoreClass:"tex2jax_ignore"
,processClass:"tex2jax_process",processEscapes:!1,processEnvironments:!0,processRefs
:!0,preview:"TeX"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub
.CombineConfig("tex2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this
,this.config.Augment),typeof this.config.previewTeX!="undefined"&&!this.config.previewTeX&&
(this.config.preview="none"),this.configured=!0),typeof e=="string"&&(e=document.
getElementById(e)),e||(e=document.body),this.createPatterns()&&this.scanElement(e
,e.nextSibling)},createPatterns:function(){var e=[],t=[],n,r,i=this.config;this.match=
{};for(n=0,r=i.inlineMath.length;n<r;n++)e.push(this.patternQuote(i.inlineMath[n]
[0])),this.match[i.inlineMath[n][0]]={mode:"",end:i.inlineMath[n][1],pattern:this
.endPattern(i.inlineMath[n][1])};for(n=0,r=i.displayMath.length;n<r;n++)e.push(this
.patternQuote(i.displayMath[n][0])),this.match[i.displayMath[n][0]]={mode:"; mode=display"
,end:i.displayMath[n][1],pattern:this.endPattern(i.displayMath[n][1])};e.length&&
t.push(e.sort(this.sortLength).join("|")),i.processEnvironments&&t.push("\\\\begin\\{([^}]*)\\}"
),i.processEscapes&&t.push("\\\\*\\\\\\$"),i.processRefs&&t.push("\\\\(eq)?ref\\{[^}]*\\}"
),this.start=new RegExp(t.join("|"),"g"),this.skipTags=new RegExp("^("+i.skipTags
.join("|")+")$","i");var s=[];return MathJax.Hub.config.preRemoveClass&&s.push(MathJax
.Hub.config.preRemoveClass),i.ignoreClass&&s.push(i.ignoreClass),this.ignoreClass=
s.length?new RegExp("(^| )("+s.join("|")+")( |$)"):/^$/,this.processClass=new RegExp
("(^| )("+i.processClass+")( |$)"),t.length>0},patternQuote:function(e){return e.
replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(e){return new RegExp
(this.patternQuote(e)+"|\\\\.|[{}]","g")},sortLength:function(e,t){return e.length!==
t.length?t.length-e.length:e==t?0:e<t?-1:1},scanElement:function(e,t,n){var r,i,s
,o;while(e&&e!=t)e.nodeName.toLowerCase()==="#text"?n||(e=this.scanText(e)):(r=typeof 
e.className=="undefined"?"":e.className,i=typeof e.tagName=="undefined"?"":e.tagName
,typeof r!="string"&&(r=String(r)),o=this.processClass.exec(r),e.firstChild&&!r.match
(/(^| )MathJax/)&&(o||!this.skipTags.exec(i))&&(s=(n||this.ignoreClass.exec(r))&&!
o,this.scanElement(e.firstChild,t,s))),e&&(e=e.nextSibling)},scanText:function(e)
{if(e.nodeValue.replace(/\s+/,"")=="")return e;var t,n;this.search={start:!0},this
.pattern=this.start;while(e){this.pattern.lastIndex=0;while(e&&e.nodeName.toLowerCase
()==="#text"&&(t=this.pattern.exec(e.nodeValue)))this.search.start?e=this.startMatch
(t,e):e=this.endMatch(t,e);this.search.matched&&(e=this.encloseMath(e));if(e){do n=
e,e=e.nextSibling;while(e&&(e.nodeName.toLowerCase()==="br"||e.nodeName.toLowerCase
()==="#comment"));if(!e||e.nodeName!=="#text")return this.search.close?this.prevEndMatch
():n}}return e},startMatch:function(e,t){var n=this.match[e[0]];if(n!=null)this.search=
{end:n.end,mode:n.mode,pcount:0,open:t,olen:e[0].length,opos:this.pattern.lastIndex-
e[0].length},this.switchPattern(n.pattern);else if(e[0].substr(0,6)==="\\begin")this
.search={end:"\\end{"+e[1]+"}",mode:"; mode=display",pcount:0,open:t,olen:0,opos:
this.pattern.lastIndex-e[0].length,isBeginEnd:!0},this.switchPattern(this.endPattern
(this.search.end));else{if(e[0].substr(0,4)==="\\ref"||e[0].substr(0,6)==="\\eqref"
)return this.search={mode:"",end:"",open:t,pcount:0,olen:0,opos:this.pattern.lastIndex-
e[0].length},this.endMatch([""],t);var r=e[0].substr(0,e[0].length-1),i,s;r.length%2===0?
(s=[r.replace(/\\\\/g,"\\")],i=1):(s=[r.substr(1).replace(/\\\\/g,"\\"),"$"],i=0)
,s=MathJax.HTML.Element("span",null,s);var o=MathJax.HTML.TextNode(t.nodeValue.substr
(0,e.index));t.nodeValue=t.nodeValue.substr(e.index+e[0].length-i),t.parentNode.insertBefore
(s,t),t.parentNode.insertBefore(o,s),this.pattern.lastIndex=i}return t},endMatch:
function(e,t){var n=this.search;if(e[0]==n.end){if(!n.close||n.pcount===0)n.close=
t,n.cpos=this.pattern.lastIndex,n.clen=n.isBeginEnd?0:e[0].length;n.pcount===0&&(
n.matched=!0,t=this.encloseMath(t),this.switchPattern(this.start))}else e[0]==="{"?
n.pcount++:e[0]==="}"&&n.pcount&&n.pcount--;return t},prevEndMatch:function(){this
.search.matched=!0;var e=this.encloseMath(this.search.close);return this.switchPattern
(this.start),e},switchPattern:function(e){e.lastIndex=this.pattern.lastIndex,this
.pattern=e,this.search.start=e===this.start},encloseMath:function(e){var t=this.search
,n=t.close,r,i;t.cpos===n.length?n=n.nextSibling:n=n.splitText(t.cpos),n||(r=n=MathJax
.HTML.addText(t.close.parentNode,"")),t.close=n,i=t.opos?t.open.splitText(t.opos)
:t.open;while(i.nextSibling&&i.nextSibling!==n)i.nextSibling.nodeValue!==null?i.nextSibling
.nodeName==="#comment"?i.nodeValue+=i.nextSibling.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/
,"$1"):i.nodeValue+=i.nextSibling.nodeValue:this.msieNewlineBug?i.nodeValue+=i.nextSibling
.nodeName.toLowerCase()==="br"?"\n":" ":i.nodeValue+=" ",i.parentNode.removeChild
(i.nextSibling);var s=i.nodeValue.substr(t.olen,i.nodeValue.length-t.olen-t.clen)
;return i.parentNode.removeChild(i),this.config.preview!=="none"&&this.createPreview
(t.mode,s),i=this.createMathTag(t.mode,s),this.search={},this.pattern.lastIndex=0
,r&&r.parentNode.removeChild(r),i},insertNode:function(e){var t=this.search;t.close
.parentNode.insertBefore(e,t.close)},createPreview:function(e,t){var n=this.config
.preview;if(n==="none")return;n==="TeX"&&(n=[this.filterPreview(t)]),n&&(n=MathJax
.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},n),this.insertNode
(n))},createMathTag:function(e,t){var n=document.createElement("script");return n
.type="math/tex"+e,MathJax.HTML.setScript(n,t),this.insertNode(n),n},filterPreview
:function(e){return e},msieNewlineBug:MathJax.Hub.Browser.isMSIE&&document.documentMode<9
},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.tex2jax]),MathJax
.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");