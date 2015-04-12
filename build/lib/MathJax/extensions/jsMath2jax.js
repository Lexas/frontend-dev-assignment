/*
 *  /MathJax/extensions/jsMath2jax.js
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

MathJax.Extension.jsMath2jax={version:"2.5.0",config:{preview:"TeX"},PreProcess:function(
e){this.configured||(this.config=MathJax.Hub.CombineConfig("jsMath2jax",this.config
),this.config.Augment&&MathJax.Hub.Insert(this,this.config.Augment),typeof this.config
.previewTeX!="undefined"&&!this.config.previewTeX&&(this.config.preview="none"),this
.previewClass=MathJax.Hub.config.preRemoveClass,this.configured=!0),typeof e=="string"&&
(e=document.getElementById(e)),e||(e=document.body);var t=e.getElementsByTagName("span"
),n;for(n=t.length-1;n>=0;n--)String(t[n].className).match(/(^| )math( |$)/)&&this
.ConvertMath(t[n],"");var r=e.getElementsByTagName("div");for(n=r.length-1;n>=0;n--
)String(r[n].className).match(/(^| )math( |$)/)&&this.ConvertMath(r[n],"; mode=display"
)},ConvertMath:function(e,t){if(e.getElementsByTagName("script").length===0){var n=
e.parentNode,r=this.createMathTag(t,e.innerHTML);e.nextSibling?n.insertBefore(r,e
.nextSibling):n.appendChild(r),this.config.preview!=="none"&&this.createPreview(e
),n.removeChild(e)}},createPreview:function(e){var t=this.config.preview;t==="TeX"&&
(t=[this.filterPreview(e.innerHTML)]),t&&(t=MathJax.HTML.Element("span",{className
:MathJax.Hub.config.preRemoveClass},t),e.parentNode.insertBefore(t,e))},createMathTag
:function(e,t){t=t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"
);var n=document.createElement("script");return n.type="math/tex"+e,MathJax.HTML.
setScript(n,t),n},filterPreview:function(e){return e}},MathJax.Hub.Register.PreProcessor
(["PreProcess",MathJax.Extension.jsMath2jax],8),MathJax.Ajax.loadComplete("[MathJax]/extensions/jsMath2jax.js"
);