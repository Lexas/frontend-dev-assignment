/*
 *  /MathJax/extensions/TeX/noErrors.js
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

(function(e,t){var n="2.5.1",r=e.CombineConfig("TeX.noErrors",{disabled:!1,multiLine
:!0,inlineDelimiters:["",""],style:{"font-size":"90%","text-align":"left",color:"black"
,padding:"1px 3px",border:"1px solid"}}),i=" ";MathJax.Extension["TeX/noErrors"]=
{version:n,config:r},e.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax
.InputJax.TeX.formatError;MathJax.InputJax.TeX.Augment({formatError:function(n,s,
o,u){if(r.disabled)return t.apply(this,arguments);var l=n.message.replace(/\n.*/,""
);e.signal.Post(["TeX Jax - parse error",l,s,o,u]);var h=r.inlineDelimiters,p=o||
r.multiLine;return o||(s=h[0]+s+h[1]),p?s=s.replace(/ /g,i):s=s.replace(/\n/g," "
),MathJax.ElementJax.mml.merror(s).With({isError:!0,multiLine:p})}})}),e.Register
.StartupHook("HTML-CSS Jax Config",function(){e.Config({"HTML-CSS":{styles:{".MathJax .noError"
:e.Insert({"vertical-align":e.Browser.isMSIE&&r.multiLine?"-2px":""},r.style)}}})
}),e.Register.StartupHook("HTML-CSS Jax Ready",function(){var e=MathJax.ElementJax
.mml,t=MathJax.OutputJax["HTML-CSS"],n=e.math.prototype.toHTML,r=e.merror.prototype
.toHTML;e.math.Augment({toHTML:function(e,t){var r=this.data[0];return r&&r.data[0
]&&r.data[0].isError?(e.style.fontSize="",e=this.HTMLcreateSpan(e),e.bbox=r.data[0
].toHTML(e).bbox):e=n.apply(this,arguments),e}}),e.merror.Augment({toHTML:function(
e){if(!this.isError)return r.apply(this,arguments);e=this.HTMLcreateSpan(e),e.className="noError"
,this.multiLine&&(e.style.display="inline-block");var n=this.data[0].data[0].data
.join("").split(/\n/);for(var i=0,s=n.length;i<s;i++)t.addText(e,n[i]),i!==s-1&&t
.addElement(e,"br",{isMathJax:!0});var o=t.getHD(e.parentNode),u=t.getW(e.parentNode
);if(s>1){var a=(o.h+o.d)/2,f=t.TeX.x_height/2;e.parentNode.style.verticalAlign=t
.Em(o.d+(f-a)),o.h=f+a,o.d=a-f}return e.bbox={h:o.h,d:o.d,w:u,lw:0,rw:u},e}})}),e
.Register.StartupHook("SVG Jax Config",function(){e.Config({SVG:{styles:{".MathJax_SVG .noError"
:e.Insert({"vertical-align":e.Browser.isMSIE&&r.multiLine?"-2px":""},r.style)}}})
}),e.Register.StartupHook("SVG Jax Ready",function(){var e=MathJax.ElementJax.mml
,n=e.math.prototype.toSVG,r=e.merror.prototype.toSVG;e.math.Augment({toSVG:function(
e,t){var r=this.data[0];return r&&r.data[0]&&r.data[0].isError?e=r.data[0].toSVG(
e):e=n.apply(this,arguments),e}}),e.merror.Augment({toSVG:function(e){if(!this.isError||
this.Parent().type!=="math")return r.apply(this,arguments);e=t.addElement(e,"span"
,{className:"noError",isMathJax:!0}),this.multiLine&&(e.style.display="inline-block"
);var n=this.data[0].data[0].data.join("").split(/\n/);for(var i=0,s=n.length;i<s
;i++)t.addText(e,n[i]),i!==s-1&&t.addElement(e,"br",{isMathJax:!0});if(s>1){var o=
e.offsetHeight/2;e.style.verticalAlign=-o+o/s+"px"}return e}})}),e.Register.StartupHook
("NativeMML Jax Ready",function(){var e=MathJax.ElementJax.mml,t=MathJax.Extension
["TeX/noErrors"].config,n=e.math.prototype.toNativeMML,r=e.merror.prototype.toNativeMML
;e.math.Augment({toNativeMML:function(e){var t=this.data[0];return t&&t.data[0]&&
t.data[0].isError?e=t.data[0].toNativeMML(e):e=n.apply(this,arguments),e}}),e.merror
.Augment({toNativeMML:function(e){if(!this.isError)return r.apply(this,arguments)
;e=e.appendChild(document.createElement("span"));var n=this.data[0].data[0].data.
join("").split(/\n/);for(var i=0,s=n.length;i<s;i++)e.appendChild(document.createTextNode
(n[i])),i!==s-1&&e.appendChild(document.createElement("br"));this.multiLine&&(e.style
.display="inline-block",s>1&&(e.style.verticalAlign="middle"));for(var o in t.style
)if(t.style.hasOwnProperty(o)){var u=o.replace(/-./g,function(e){return e.charAt(1
).toUpperCase()});e.style[u]=t.style[o]}return e}})}),e.Register.StartupHook("CommonHTML Jax Config"
,function(){e.Config({CommonHTML:{styles:{".MathJax_CHTML .noError":e.Insert({"vertical-align"
:e.Browser.isMSIE&&r.multiLine?"-2px":""},r.style)}}})}),e.Register.StartupHook("CommonHTML Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.HTML,n=e.merror.prototype.toCommonHTML
;e.merror.Augment({toCommonHTML:function(e){if(!this.isError)return n.apply(this,
arguments);e=this.CHTMLcreateSpan(e),e.className="noError",this.multiLine&&(e.style
.display="inline-block");var r=this.data[0].data[0].data.join("").split(/\n/);for(
var i=0,s=r.length;i<s;i++)t.addText(e,r[i]),i!==s-1&&t.addElement(e,"br",{isMathJax
:!0});return e}})}),e.Startup.signal.Post("TeX noErrors Ready")})(MathJax.Hub,MathJax
.HTML),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");