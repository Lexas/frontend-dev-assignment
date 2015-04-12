/*
 *  /MathJax/extensions/TeX/unicode.js
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

MathJax.Extension["TeX/unicode"]={version:"2.5.1",unicode:{},config:MathJax.Hub.CombineConfig
("TeX.unicode",{fonts:"STIXGeneral,'Arial Unicode MS'"})},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml,n=
MathJax.Extension["TeX/unicode"].unicode;e.Definitions.Add({macros:{unicode:"Unicode"
}},null,!0),e.Parse.Augment({Unicode:function(e){var r=this.GetBrackets(e),i;r&&(
r.replace(/ /g,"").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)?(r=r.replace
(/ /g,"").split(/,/),i=this.GetBrackets(e)):(i=r,r=null));var s=this.trimSpaces(this
.GetArgument(e)),o=parseInt(s.match(/^x/)?"0"+s:s);n[o]?i||(i=n[o][2]):n[o]=[800,200
,i,o],r&&(n[o][0]=Math.floor(r[0]*1e3),n[o][1]=Math.floor(r[1]*1e3));var u=this.stack
.env.font,f={};i?(n[o][2]=f.fontfamily=i.replace(/"/g,"'"),u&&(u.match(/bold/)&&(
f.fontweight="bold"),u.match(/italic|-mathit/)&&(f.fontstyle="italic"))):u&&(f.mathvariant=
u),f.unicode=[].concat(n[o]),this.Push(t.mtext(t.entity("#"+s)).With(f))}}),MathJax
.Hub.Startup.signal.Post("TeX unicode Ready")}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.Extension["TeX/unicode"].config
.fonts,n=e.mbase.prototype.HTMLgetVariant;e.mbase.Augment({HTMLgetVariant:function(
){var e=n.apply(this,arguments);e.unicode&&(delete e.unicode,delete e.FONTS);if(!
this.unicode)return e;e.unicode=!0,e.defaultFont||(e=MathJax.Hub.Insert({},e),e.defaultFont=
{family:t});var r=this.unicode[2];return r?r+=","+t:r=t,e.defaultFont[this.unicode
[3]]=[this.unicode[0],this.unicode[1],500,0,500,{isUnknown:!0,isUnicode:!0,font:r
}],e}})}),MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e=MathJax
.ElementJax.mml,t=MathJax.Extension["TeX/unicode"].config.fonts,n=e.mbase.prototype
.SVGgetVariant;e.mbase.Augment({SVGgetVariant:function(){var e=n.call(this);return e
.unicode&&(delete e.unicode,delete e.FONTS),this.unicode?(e.unicode=!0,e.forceFamily||
(e=MathJax.Hub.Insert({},e)),e.defaultFamily=t,e.noRemap=!0,e.h=this.unicode[0],e
.d=this.unicode[1],e):e}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/unicode.js"
);