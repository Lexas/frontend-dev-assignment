/*
 *  /MathJax/extensions/CHTML-preview.js
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

(function(e,t){var n=e.config.menuSettings,r=MathJax.Extension["CHTML-preview"]={
version:"2.5.0",config:e.CombineConfig("CHTML-preview",{Chunks:{EqnChunk:1e4,EqnChunkFactor
:1,EqnChunkDelay:0},color:"inherit!important",updateTime:30,updateDelay:6,messageStyle
:"none",disabled:!1}),Config:function(){e.Config({"HTML-CSS":this.config.Chunks,SVG
:this.config.Chunks}),MathJax.Ajax.Styles({".MathJax_Preview .MJXc-math":{color:this
.config.color}});var t,r,i,s,o,u=this.config;!u.disabled&&n.CHTMLpreview==null&&e
.Config({menuSettings:{CHTMLpreview:!0}}),e.Register.MessageHook("Begin Math Output"
,function(){!s&&n.CHTMLpreview&&n.renderer!=="CommonHTML"&&(t=e.processUpdateTime
,r=e.processUpdateDelay,i=e.config.messageStyle,e.processUpdateTime=u.updateTime,
e.processUpdateDelay=u.updateDelay,e.Config({messageStyle:u.messageStyle}),MathJax
.Message.Clear(0,0),o=!0)}),e.Register.MessageHook("End Math Output",function(){!
s&&o&&(e.processUpdateTime=t,e.processUpdateDelay=r,e.Config({messageStyle:i}),s=!0
)})},Preview:function(e){if(!n.CHTMLpreview||n.renderer==="CommonHTML")return;var r=
e.script.MathJax.preview||e.script.previousSibling;if(!r||r.className!==MathJax.Hub
.config.preRemoveClass)r=t.Element("span",{className:MathJax.Hub.config.preRemoveClass
}),e.script.parentNode.insertBefore(r,e.script),e.script.MathJax.preview=r;return r
.innerHTML="",r.style.color="inherit",this.postFilter(r,e)},postFilter:function(t
,n){if(!n.math.root.toCommonHTML){var r=MathJax.Callback.Queue();r.Push(["Require"
,MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/config.js"],["Require",MathJax.Ajax
,"[MathJax]/jax/output/CommonHTML/jax.js"]),e.RestartAfter(r.Push({}))}n.math.root
.toCommonHTML(t)},Register:function(t){e.Register.StartupHook(t+" Jax Require",function(
){var e=MathJax.InputJax[t];e.postfilterHooks.Add(["Preview",MathJax.Extension["CHTML-preview"
]],50)})}};r.Register("TeX"),r.Register("MathML"),r.Register("AsciiMath"),e.Register
.StartupHook("End Config",["Config",r]),e.Startup.signal.Post("CHTML-preview Ready"
)})(MathJax.Hub,MathJax.HTML),MathJax.Ajax.loadComplete("[MathJax]/extensions/CHTML-preview.js"
);