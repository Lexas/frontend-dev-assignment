/*************************************************************
 *
 *  MathJax/extensions/mml2jax.js
 *  
 *  Implements the MathML to Jax preprocessor that locates <math> nodes
 *  within the text of a document and replaces them with SCRIPT tags
 *  for processing by MathJax.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2015 The MathJax Consortium
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

MathJax.Extension.mml2jax={version:"2.5.0",config:{preview:"mathml"},MMLnamespace
:"http://www.w3.org/1998/Math/MathML",PreProcess:function(e){this.configured||(this
.config=MathJax.Hub.CombineConfig("mml2jax",this.config),this.config.Augment&&MathJax
.Hub.Insert(this,this.config.Augment),this.InitBrowser(),this.configured=!0),typeof 
e=="string"&&(e=document.getElementById(e)),e||(e=document.body);var t=[];this.PushMathElements
(t,e,"math"),this.PushMathElements(t,e,"math",this.MMLnamespace);var n,r;if(typeof 
document.namespaces!="undefined")try{for(n=0,r=document.namespaces.length;n<r;n++
){var i=document.namespaces[n];i.urn===this.MMLnamespace&&this.PushMathElements(t
,e,i.name+":math")}}catch(s){}else{var o=document.getElementsByTagName("html")[0]
;if(o)for(n=0,r=o.attributes.length;n<r;n++){var u=o.attributes[n];u.nodeName.substr
(0,6)==="xmlns:"&&u.nodeValue===this.MMLnamespace&&this.PushMathElements(t,e,u.nodeName
.substr(6)+":math")}}this.ProcessMathArray(t)},PushMathElements:function(e,t,n,r)
{var i,s=MathJax.Hub.config.preRemoveClass;if(r){if(!t.getElementsByTagNameNS)return;
i=t.getElementsByTagNameNS(r,n)}else i=t.getElementsByTagName(n);for(var o=0,u=i.
length;o<u;o++){var a=i[o].parentNode;a&&a.className!==s&&!i[o].prefix==!r&&e.push
(i[o])}},ProcessMathArray:function(e){var t,n=e.length;if(n)if(this.MathTagBug)for(
t=0;t<n;t++)e[t].nodeName==="MATH"?this.ProcessMathFlattened(e[t]):this.ProcessMath
(e[t]);else for(t=0;t<n;t++)this.ProcessMath(e[t])},ProcessMath:function(e){var t=
e.parentNode;if(!t||t.className===MathJax.Hub.config.preRemoveClass)return;var n=
document.createElement("script");n.type="math/mml",t.insertBefore(n,e);if(this.AttributeBug
){var r=this.OuterHTML(e);this.CleanupHTML&&(r=r.replace(/<\?import .*?>/i,"").replace
(/<\?xml:namespace .*?\/>/i,""),r=r.replace(/&nbsp;/g,"&#xA0;")),MathJax.HTML.setScript
(n,r),t.removeChild(e)}else{var i=MathJax.HTML.Element("span");i.appendChild(e),MathJax
.HTML.setScript(n,i.innerHTML)}this.config.preview!=="none"&&this.createPreview(e
,n)},ProcessMathFlattened:function(e){var t=e.parentNode;if(!t||t.className===MathJax
.Hub.config.preRemoveClass)return;var n=document.createElement("script");n.type="math/mml"
,t.insertBefore(n,e);var r="",i,s=e;while(e&&e.nodeName!=="/MATH")i=e,e=e.nextSibling
,r+=this.NodeHTML(i),i.parentNode.removeChild(i);e&&e.nodeName==="/MATH"&&e.parentNode
.removeChild(e),n.text=r+"</math>",this.config.preview!=="none"&&this.createPreview
(s,n)},NodeHTML:function(e){var t,n,r;if(e.nodeName==="#text")t=this.quoteHTML(e.
nodeValue);else if(e.nodeName==="#comment")t="<!--"+e.nodeValue+"-->";else{t="<"+
e.nodeName.toLowerCase();for(n=0,r=e.attributes.length;n<r;n++){var i=e.attributes
[n];if(i.specified&&i.nodeName.substr(0,10)!=="_moz-math-"){t+=" "+i.nodeName.toLowerCase
().replace(/xmlns:xmlns/,"xmlns")+"=";var s=i.nodeValue;s==null&&i.nodeName==="style"&&
e.style&&(s=e.style.cssText),t+='"'+this.quoteHTML(s)+'"'}}t+=">";if(e.outerHTML!=
null&&e.outerHTML.match(/(.<\/[A-Z]+>|\/>)$/)){for(n=0,r=e.childNodes.length;n<r;
n++)t+=this.OuterHTML(e.childNodes[n]);t+="</"+e.nodeName.toLowerCase()+">"}}return t
},OuterHTML:function(e){if(e.nodeName.charAt(0)==="#")return this.NodeHTML(e);if(!
this.AttributeBug)return e.outerHTML;var t=this.NodeHTML(e);for(var n=0,r=e.childNodes
.length;n<r;n++)t+=this.OuterHTML(e.childNodes[n]);return t+="</"+e.nodeName.toLowerCase
()+">",t},quoteHTML:function(e){return e==null&&(e=""),e.replace(/&/g,"&#x26;").replace
(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},createPreview:function(
e,t){var n=this.config.preview;if(n==="none")return;var r=!1;n==="mathml"&&(r=!0,
this.MathTagBug?n="alttext":n=e.cloneNode(!0));if(n==="alttext"||n==="altimg"){r=!0
;var i=this.filterPreview(e.getAttribute("alttext"));if(n==="alttext")i!=null?n=MathJax
.HTML.TextNode(i):n=null;else{var s=e.getAttribute("altimg");if(s!=null){var o={width
:e.getAttribute("altimg-width"),height:e.getAttribute("altimg-height")};n=MathJax
.HTML.Element("img",{src:s,alt:i,style:o})}else n=null}}if(n){var u;r?(u=MathJax.
HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass}),u.appendChild(
n)):u=MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},n
),t.parentNode.insertBefore(u,t)}},filterPreview:function(e){return e},InitBrowser
:function(){var e=MathJax.HTML.Element("span",{id:"<",className:"mathjax",innerHTML
:"<math><mi>x</mi><mspace /></math>"}),t=e.outerHTML||"";this.AttributeBug=t!==""&&!
(t.match(/id="&lt;"/)&&t.match(/class="mathjax"/)&&t.match(/<\/math>/)),this.MathTagBug=
e.childNodes.length>1,this.CleanupHTML=MathJax.Hub.Browser.isMSIE}},MathJax.Hub.Register
.PreProcessor(["PreProcess",MathJax.Extension.mml2jax],5),MathJax.Ajax.loadComplete
("[MathJax]/extensions/mml2jax.js");