/*************************************************************
 *
 *  MathJax/extensions/asciimath2jax.js
 *  
 *  Implements the AsciiMath to Jax preprocessor that locates AsciiMath
 *  code within the text of a document and replaces it with SCRIPT tags for
 *  processing by MathJax.
 *
 *  Modified by David Lippman, based on tex2jax.js.
 *  Additional work by Davide P. Cervone.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2015 The MathJax Consortium
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

MathJax.Extension.asciimath2jax={version:"2.5.0",config:{delimiters:[["`","`"]],skipTags
:["script","noscript","style","textarea","pre","code","annotation","annotation-xml"
],ignoreClass:"asciimath2jax_ignore",processClass:"asciimath2jax_process",preview
:"AsciiMath"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub.CombineConfig
("asciimath2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this,this.config
.Augment),this.configured=!0),typeof e=="string"&&(e=document.getElementById(e)),
e||(e=document.body),this.createPatterns()&&this.scanElement(e,e.nextSibling)},createPatterns
:function(){var e=[],t,n,r=this.config;this.match={};if(r.delimiters.length===0)return!1
;for(t=0,n=r.delimiters.length;t<n;t++)e.push(this.patternQuote(r.delimiters[t][0
])),this.match[r.delimiters[t][0]]={mode:"",end:r.delimiters[t][1],pattern:this.endPattern
(r.delimiters[t][1])};this.start=new RegExp(e.sort(this.sortLength).join("|"),"g"
),this.skipTags=new RegExp("^("+r.skipTags.join("|")+")$","i");var i=[];return MathJax
.Hub.config.preRemoveClass&&i.push(MathJax.Hub.config.preRemoveClass),r.ignoreClass&&
i.push(r.ignoreClass),this.ignoreClass=i.length?new RegExp("(^| )("+i.join("|")+")( |$)"
):/^$/,this.processClass=new RegExp("(^| )("+r.processClass+")( |$)"),!0},patternQuote
:function(e){return e.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(
e){return new RegExp(this.patternQuote(e)+"|\\\\.","g")},sortLength:function(e,t)
{return e.length!==t.length?t.length-e.length:e==t?0:e<t?-1:1},scanElement:function(
e,t,n){var r,i,s,o;while(e&&e!=t)e.nodeName.toLowerCase()==="#text"?n||(e=this.scanText
(e)):(r=typeof e.className=="undefined"?"":e.className,i=typeof e.tagName=="undefined"?""
:e.tagName,typeof r!="string"&&(r=String(r)),o=this.processClass.exec(r),e.firstChild&&!
r.match(/(^| )MathJax/)&&(o||!this.skipTags.exec(i))&&(s=(n||this.ignoreClass.exec
(r))&&!o,this.scanElement(e.firstChild,t,s))),e&&(e=e.nextSibling)},scanText:function(
e){if(e.nodeValue.replace(/\s+/,"")=="")return e;var t,n;this.search={start:!0},this
.pattern=this.start;while(e){this.pattern.lastIndex=0;while(e&&e.nodeName.toLowerCase
()==="#text"&&(t=this.pattern.exec(e.nodeValue)))this.search.start?e=this.startMatch
(t,e):e=this.endMatch(t,e);this.search.matched&&(e=this.encloseMath(e));if(e){do n=
e,e=e.nextSibling;while(e&&(e.nodeName.toLowerCase()==="br"||e.nodeName.toLowerCase
()==="#comment"));if(!e||e.nodeName!=="#text")return n}}return e},startMatch:function(
e,t){var n=this.match[e[0]];return n!=null&&(this.search={end:n.end,mode:n.mode,open
:t,olen:e[0].length,opos:this.pattern.lastIndex-e[0].length},this.switchPattern(n
.pattern)),t},endMatch:function(e,t){return e[0]==this.search.end&&(this.search.close=
t,this.search.cpos=this.pattern.lastIndex,this.search.clen=this.search.isBeginEnd?0
:e[0].length,this.search.matched=!0,t=this.encloseMath(t),this.switchPattern(this
.start)),t},switchPattern:function(e){e.lastIndex=this.pattern.lastIndex,this.pattern=
e,this.search.start=e===this.start},encloseMath:function(e){var t=this.search,n=t
.close,r,i;t.cpos===n.length?n=n.nextSibling:n=n.splitText(t.cpos),n||(r=n=MathJax
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
.preview;if(n==="none")return;n==="AsciiMath"&&(n=[this.filterPreview(t)]),n&&(n=
MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},n),this
.insertNode(n))},createMathTag:function(e,t){var n=document.createElement("script"
);return n.type="math/asciimath"+e,MathJax.HTML.setScript(n,t),this.insertNode(n)
,n},filterPreview:function(e){return e},msieNewlineBug:MathJax.Hub.Browser.isMSIE&&
(document.documentMode||0)<9},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax
.Extension.asciimath2jax]),MathJax.Ajax.loadComplete("[MathJax]/extensions/asciimath2jax.js"
);