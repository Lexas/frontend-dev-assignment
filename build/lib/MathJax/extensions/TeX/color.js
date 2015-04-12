/*
 *  /MathJax/extensions/TeX/color.js
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

MathJax.Extension["TeX/color"]={version:"2.5.0",config:MathJax.Hub.CombineConfig("TeX.color"
,{padding:"5px",border:"2px"}),colors:{Apricot:"#FBB982",Aquamarine:"#00B5BE",Bittersweet
:"#C04F17",Black:"#221E1F",Blue:"#2D2F92",BlueGreen:"#00B3B8",BlueViolet:"#473992"
,BrickRed:"#B6321C",Brown:"#792500",BurntOrange:"#F7921D",CadetBlue:"#74729A",CarnationPink
:"#F282B4",Cerulean:"#00A2E3",CornflowerBlue:"#41B0E4",Cyan:"#00AEEF",Dandelion:"#FDBC42"
,DarkOrchid:"#A4538A",Emerald:"#00A99D",ForestGreen:"#009B55",Fuchsia:"#8C368C",Goldenrod
:"#FFDF42",Gray:"#949698",Green:"#00A64F",GreenYellow:"#DFE674",JungleGreen:"#00A99A"
,Lavender:"#F49EC4",LimeGreen:"#8DC73E",Magenta:"#EC008C",Mahogany:"#A9341F",Maroon
:"#AF3235",Melon:"#F89E7B",MidnightBlue:"#006795",Mulberry:"#A93C93",NavyBlue:"#006EB8"
,OliveGreen:"#3C8031",Orange:"#F58137",OrangeRed:"#ED135A",Orchid:"#AF72B0",Peach
:"#F7965A",Periwinkle:"#7977B8",PineGreen:"#008B72",Plum:"#92268F",ProcessBlue:"#00B0F0"
,Purple:"#99479B",RawSienna:"#974006",Red:"#ED1B23",RedOrange:"#F26035",RedViolet
:"#A1246B",Rhodamine:"#EF559F",RoyalBlue:"#0071BC",RoyalPurple:"#613F99",RubineRed
:"#ED017D",Salmon:"#F69289",SeaGreen:"#3FBC9D",Sepia:"#671800",SkyBlue:"#46C5DD",
SpringGreen:"#C6DC67",Tan:"#DA9D76",TealBlue:"#00AEB3",Thistle:"#D883B7",Turquoise
:"#00B4CE",Violet:"#58429B",VioletRed:"#EF58A0",White:"#FFFFFF",WildStrawberry:"#EE2967"
,Yellow:"#FFF200",YellowGreen:"#98CC70",YellowOrange:"#FAA21A"},getColor:function(
e,t){e||(e="named");var n=this["get_"+e];return n||this.TEX.Error(["UndefinedColorModel"
,"Color model '%1' not defined",e]),n.call(this,t)},get_rgb:function(e){e=e.replace
(/^\s+/,"").replace(/\s+$/,"").split(/\s*,\s*/);var t="#";e.length!==3&&this.TEX.
Error(["ModelArg1","Color values for the %1 model require 3 numbers","rgb"]);for(
var n=0;n<3;n++){e[n].match(/^(\d+(\.\d*)?|\.\d+)$/)||this.TEX.Error(["InvalidDecimalNumber"
,"Invalid decimal number"]);var r=parseFloat(e[n]);(r<0||r>1)&&this.TEX.Error(["ModelArg2"
,"Color values for the %1 model must be between %2 and %3","rgb",0,1]),r=Math.floor
(r*255).toString(16),r.length<2&&(r="0"+r),t+=r}return t},get_RGB:function(e){e=e
.replace(/^\s+/,"").replace(/\s+$/,"").split(/\s*,\s*/);var t="#";e.length!==3&&this
.TEX.Error(["ModelArg1","Color values for the %1 model require 3 numbers","RGB"])
;for(var n=0;n<3;n++){e[n].match(/^\d+$/)||this.TEX.Error(["InvalidNumber","Invalid number"
]);var r=parseInt(e[n]);r>255&&this.TEX.Error(["ModelArg2","Color values for the %1 model must be between %2 and %3"
,"RGB",0,255]),r=r.toString(16),r.length<2&&(r="0"+r),t+=r}return t},get_gray:function(
e){e.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)||this.TEX.Error(["InvalidDecimalNumber"
,"Invalid decimal number"]);var t=parseFloat(e);return(t<0||t>1)&&this.TEX.Error(
["ModelArg2","Color values for the %1 model must be between %2 and %3","gray",0,1
]),t=Math.floor(t*255).toString(16),t.length<2&&(t="0"+t),"#"+t+t+t},get_named:function(
e){return this.colors[e]?this.colors[e]:e},padding:function(){var e="+"+this.config
.padding,t=this.config.padding.replace(/^.*?([a-z]*)$/,"$1"),n="+"+2*parseFloat(e
)+t;return{width:n,height:e,depth:e,lspace:this.config.padding}}},MathJax.Hub.Register
.StartupHook("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax
.mml,n=e.Stack.Item,r=MathJax.Extension["TeX/color"];r.TEX=e,e.Definitions.Add({macros
:{color:"Color",textcolor:"TextColor",definecolor:"DefineColor",colorbox:"ColorBox"
,fcolorbox:"fColorBox"}},null,!0),e.Parse.Augment({Color:function(e){var t=this.GetBrackets
(e),i=this.GetArgument(e);i=r.getColor(t,i);var s=n.style().With({styles:{mathcolor
:i}});this.stack.env.color=i,this.Push(s)},TextColor:function(e){var n=this.GetBrackets
(e),i=this.GetArgument(e);i=r.getColor(n,i);var s=this.stack.env.color;this.stack
.env.color=i;var o=this.ParseArg(e);s?this.stack.env.color:delete this.stack.env.
color,this.Push(t.mstyle(o).With({mathcolor:i}))},DefineColor:function(e){var t=this
.GetArgument(e),n=this.GetArgument(e),i=this.GetArgument(e);r.colors[t]=r.getColor
(n,i)},ColorBox:function(e){var n=this.GetArgument(e),i=this.InternalMath(this.GetArgument
(e));this.Push(t.mpadded.apply(t,i).With({mathbackground:r.getColor("named",n)}).
With(r.padding()))},fColorBox:function(e){var n=this.GetArgument(e),i=this.GetArgument
(e),s=this.InternalMath(this.GetArgument(e));this.Push(t.mpadded.apply(t,s).With(
{mathbackground:r.getColor("named",i),style:"border: "+r.config.border+" solid "+
r.getColor("named",n)}).With(r.padding()))}}),MathJax.Hub.Startup.signal.Post("TeX color Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/color.js");