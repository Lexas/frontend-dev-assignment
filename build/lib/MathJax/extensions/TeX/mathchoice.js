/*
 *  /MathJax/extensions/TeX/mathchoice.js
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

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var e="2.5.0",t=MathJax
.ElementJax.mml,n=MathJax.InputJax.TeX,r=n.Definitions;r.Add({macros:{mathchoice:"MathChoice"
}},null,!0),n.Parse.Augment({MathChoice:function(e){var n=this.ParseArg(e),r=this
.ParseArg(e),i=this.ParseArg(e),s=this.ParseArg(e);this.Push(t.TeXmathchoice(n,r,
i,s))}}),t.TeXmathchoice=t.mbase.Subclass({type:"TeXmathchoice",notParent:!0,choice
:function(e){var t=0,n=this.getValues("displaystyle","scriptlevel");return n.scriptlevel>0?
t=Math.min(3,n.scriptlevel+1):t=n.displaystyle?0:1,t},selected:function(){return this
.data[this.choice()]},setTeXclass:function(e){return this.selected().setTeXclass(
e)},isSpacelike:function(){return this.selected().isSpacelike()},isEmbellished:function(
){return this.selected().isEmbellished()},Core:function(){return this.selected()}
,CoreMO:function(){return this.selected().CoreMO()},toHTML:function(e){return e=this
.HTMLcreateSpan(e),e.bbox=this.Core().toHTML(e).bbox,e.firstChild&&e.firstChild.style
.marginLeft&&(e.style.marginLeft=e.firstChild.style.marginLeft,e.firstChild.style
.marginLeft=""),e},toSVG:function(){var e=this.Core().toSVG();return this.SVGsaveData
(e),e},toCommonHTML:function(e){return e=this.CHTMLcreateSpan(e),this.CHTMLhandleStyle
(e),this.CHTMLhandleColor(e),this.CHTMLaddChild(e,this.choice(),{}),e}}),MathJax.
Hub.Startup.signal.Post("TeX mathchoice Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mathchoice.js"
);