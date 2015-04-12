/*************************************************************
 *
 *  MathJax/extensions/Safe.js
 *  
 *  Implements a "Safe" mode that disables features that could be
 *  misused in a shared environment (such as href's to javascript URL's).
 *  See the CONFIG variable below for configuration options.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013-2015 The MathJax Consortium
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

(function(e,t){var n="2.5.0",r=MathJax.Hub.CombineConfig("Safe",{allow:{URLs:"safe"
,classes:"safe",cssIDs:"safe",styles:"safe",fontsize:"all",require:"safe"},sizeMin
:.7,sizeMax:1.44,safeProtocols:{http:!0,https:!0,file:!0,javascript:!1},safeStyles
:{color:!0,backgroundColor:!0,border:!0,cursor:!0,margin:!0,padding:!0,textShadow
:!0,fontFamily:!0,fontSize:!0,fontStyle:!0,fontWeight:!0,opacity:!0,outline:!0},safeRequire
:{action:!0,amscd:!0,amsmath:!0,amssymbols:!0,autobold:!1,"autoload-all":!1,bbox:!0
,begingroup:!0,boldsymbol:!0,cancel:!0,color:!0,enclose:!0,extpfeil:!0,HTML:!0,mathchoice
:!0,mhchem:!0,newcommand:!0,noErrors:!1,noUndefined:!1,unicode:!0,verb:!0}}),i=r.
allow;i.fontsize!=="all"&&(r.safeStyles.fontSize=!1);var s=MathJax.Extension.Safe=
{version:n,config:r,div1:document.createElement("div"),div2:document.createElement
("div"),filter:{href:"filterURL",src:"filterURL",altimg:"filterURL","class":"filterClass"
,style:"filterStyles",id:"filterID",fontsize:"filterFontSize",mathsize:"filterFontSize"
,scriptminsize:"filterFontSize",scriptsizemultiplier:"filterSizeMultiplier",scriptlevel
:"filterScriptLevel"},filterURL:function(e){var t=(e.match(/^\s*([a-z]+):/i)||[null
,""])[1].toLowerCase();if(i.URLs==="none"||i.URLs!=="all"&&!r.safeProtocols[t])e=
null;return e},filterClass:function(e){if(i.classes==="none"||i.classes!=="all"&&!
e.match(/^MJX-[-a-zA-Z0-9_.]+$/))e=null;return e},filterID:function(e){if(i.cssIDs==="none"||
i.cssIDs!=="all"&&!e.match(/^MJX-[-a-zA-Z0-9_.]+$/))e=null;return e},filterStyles
:function(e){if(i.styles==="all")return e;if(i.styles==="none")return null;try{var t=
this.div1.style,n=this.div2.style;t.cssText=e,n.cssText="";for(var s in r.safeStyles
)if(r.safeStyles.hasOwnProperty(s)){var o=this.filterStyle(s,t[s]);o!=null&&(n[s]=
o)}e=n.cssText}catch(u){e=null}return e},filterStyle:function(e,t){return typeof 
t!="string"?null:t.match(/^\s*expression/)?null:t.match(/javascript:/)?null:r.safeStyles
[e]?t:null},filterSize:function(e){return i.fontsize==="none"?null:(i.fontsize!=="all"&&
(e=Math.min(Math.max(e,r.sizeMin),r.sizeMax)),e)},filterFontSize:function(e){return i
.fontsize==="all"?e:null},filterSizeMultiplier:function(e){return i.fontsize==="none"?
e=null:i.fontsize!=="all"&&(e=Math.min(1,Math.max(.6,e)).toString()),e},filterScriptLevel
:function(e){return i.fontsize==="none"?e=null:i.fontsize!=="all"&&(e=Math.max(0,
e).toString()),e},filterRequire:function(e){if(i.require==="none"||i.require!=="all"&&!
r.safeRequire[e.toLowerCase()])e=null;return e}};e.Register.StartupHook("TeX HTML Ready"
,function(){var e=MathJax.InputJax.TeX;e.Parse.Augment({HREF_attribute:function(e
){var t=s.filterURL(this.GetArgument(e)),n=this.GetArgumentMML(e);t&&n.With({href
:t}),this.Push(n)},CLASS_attribute:function(e){var t=s.filterClass(this.GetArgument
(e)),n=this.GetArgumentMML(e);t&&(n["class"]!=null&&(t=n["class"]+" "+t),n.With({"class"
:t})),this.Push(n)},STYLE_attribute:function(e){var t=s.filterStyles(this.GetArgument
(e)),n=this.GetArgumentMML(e);t&&(n.style!=null&&(t.charAt(t.length-1)!==";"&&(t+=";"
),t=n.style+" "+t),n.With({style:t})),this.Push(n)},ID_attribute:function(e){var t=
s.filterID(this.GetArgument(e)),n=this.GetArgumentMML(e);t&&n.With({id:t}),this.Push
(n)}})}),e.Register.StartupHook("TeX Jax Ready",function(){var e=MathJax.InputJax
.TeX,t=e.Parse,n=s.filter;t.Augment({Require:function(e){var t=this.GetArgument(e
).replace(/.*\//,"").replace(/[^a-z0-9_.-]/ig,"");t=s.filterRequire(t),t&&this.Extension
(null,t)},MmlFilterAttribute:function(e,t){return n[e]&&(t=s[n[e]](t)),t},SetSize
:function(t,n){n=s.filterSize(n),n&&(this.stack.env.size=n,this.Push(e.Stack.Item
.style().With({styles:{mathsize:n+"em"}})))}})}),e.Register.StartupHook("TeX bbox Ready"
,function(){var e=MathJax.InputJax.TeX;e.Parse.Augment({BBoxStyle:function(e){return s
.filterStyles(e)}})}),e.Register.StartupHook("MathML Jax Ready",function(){var e=
MathJax.InputJax.MathML.Parse,t=s.filter;e.Augment({filterAttribute:function(e,n)
{return t[e]&&(n=s[t[e]](n)),n}})}),e.Startup.signal.Post("Safe Extension Ready")
,t.loadComplete("[MathJax]/extensions/Safe.js")})(MathJax.Hub,MathJax.Ajax);