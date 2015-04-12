/*
 *  /MathJax/extensions/TeX/mhchem.js
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

MathJax.Extension["TeX/mhchem"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.Object.Subclass(
{string:"",i:0,tex:"",atom:!1,sup:"",sub:"",Init:function(e){this.string=e},ParseTable
:{"-":"Minus","+":"Plus","(":"Open",")":"Close","[":"Open","]":"Close","<":"Less"
,"^":"Superscript",_:"Subscript","*":"Dot",".":"Dot","=":"Equal","#":"Pound",$:"Math"
,"\\":"Macro"," ":"Space"},Arrows:{"->":"rightarrow","<-":"leftarrow","<->":"leftrightarrow"
,"<=>":"rightleftharpoons","<=>>":"Rightleftharpoons","<<=>":"Leftrightharpoons","^"
:"uparrow",v:"downarrow"},Bonds:{"-":"-","=":"=","#":"\\equiv","~":"\\tripledash"
,"~-":"\\begin{CEstack}{}\\tripledash\\\\-\\end{CEstack}","~=":"\\raise2mu{\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}"
,"~--":"\\raise2mu{\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}","-~-"
:"\\raise2mu{\\begin{CEstack}{}-\\\\\\tripledash\\\\-\\end{CEstack}}","...":"{\\cdot}{\\cdot}{\\cdot}"
,"....":"{\\cdot}{\\cdot}{\\cdot}{\\cdot}","->":"\\rightarrow","<-":"\\leftarrow"
,"??":"\\text{??}"},Parse:function(){this.tex="",this.atom=!1;while(this.i<this.string
.length){var e=this.string.charAt(this.i);e.match(/[a-z]/i)?this.ParseLetter():e.
match(/[0-9]/)?this.ParseNumber():this["Parse"+(this.ParseTable[e]||"Other")](e)}
return this.FinishAtom(),this.tex},ParseLetter:function(){this.FinishAtom(),this.
Match(/^v( |$)/)?this.tex+="{\\"+this.Arrows.v+"}":(this.tex+="\\text{"+this.Match
(/^[a-z]+/i)+"}",this.atom=!0)},ParseNumber:function(){var e=this.Match(/^\d+/);if(
this.atom&&!this.sub)this.sub=e;else{this.FinishAtom();var t=this.Match(/^\/\d+/)
;if(t){var n="\\frac{"+e+"}{"+t.substr(1)+"}";this.tex+="\\mathchoice{\\textstyle"+
n+"}{"+n+"}{"+n+"}{"+n+"}"}else this.tex+=e,this.i<this.string.length&&(this.tex+="\\,"
)}},ParseMinus:function(e){if(!this.atom||this.i!==this.string.length-1&&this.string
.charAt(this.i+1)!==" "){this.FinishAtom();if(this.string.substr(this.i,2)==="->"
){this.i+=2,this.AddArrow("->");return}this.tex+="{-}"}else this.sup+=e;this.i++}
,ParsePlus:function(e){this.atom?this.sup+=e:(this.FinishAtom(),this.tex+=e),this
.i++},ParseDot:function(e){this.FinishAtom(),this.tex+="\\cdot ",this.i++},ParseEqual
:function(e){this.FinishAtom(),this.tex+="{=}",this.i++},ParsePound:function(e){this
.FinishAtom(),this.tex+="{\\equiv}",this.i++},ParseOpen:function(e){this.FinishAtom
();var t=this.Match(/^\([v^]\)/);t?this.tex+="{\\"+this.Arrows[t.charAt(1)]+"}":(
this.tex+="{"+e,this.i++)},ParseClose:function(e){this.FinishAtom(),this.atom=!0,
this.tex+=e+"}",this.i++},ParseLess:function(e){this.FinishAtom();var t=this.Match
(/^(<->?|<=>>?|<<=>)/);t?this.AddArrow(t):(this.tex+=e,this.i++)},ParseSuperscript
:function(e){e=this.string.charAt(++this.i);if(e==="{"){this.i++;var n=this.Find("}"
);n==="-."?this.sup+="{-}{\\cdot}":n&&(this.sup+=t(n).Parse().replace(/^\{-\}/,"-"
))}else if(e===" "||e==="")this.tex+="{\\"+this.Arrows["^"]+"}",this.i++;else{var r=
this.Match(/^(\d+|-\.)/);r&&(this.sup+=r)}},ParseSubscript:function(e){if(this.string
.charAt(++this.i)=="{")this.i++,this.sub+=t(this.Find("}")).Parse().replace(/^\{-\}/
,"-");else{var n=this.Match(/^\d+/);n&&(this.sub+=n)}},ParseMath:function(e){this
.FinishAtom(),this.i++,this.tex+=this.Find(e)},ParseMacro:function(e){this.FinishAtom
(),this.i++;var t=this.Match(/^([a-z]+|.)/i)||" ";if(t==="sbond")this.tex+="{-}";
else if(t==="dbond")this.tex+="{=}";else if(t==="tbond")this.tex+="{\\equiv}";else if(
t==="bond"){var n=this.Match(/^\{.*?\}/)||"";n=n.substr(1,n.length-2),this.tex+="{"+
(this.Bonds[n]||"\\text{??}")+"}"}else t==="{"?this.tex+="{\\{":t==="}"?(this.tex+="\\}}"
,this.atom=!0):this.tex+=e+t},ParseSpace:function(e){this.FinishAtom(),this.i++},
ParseOther:function(e){this.FinishAtom(),this.tex+=e,this.i++},AddArrow:function(
e){var t=this.Match(/^[CT]\[/);t&&(this.i--,t=t.charAt(0));var n=this.GetBracket(
t),r=this.GetBracket(t);e=this.Arrows[e],n||r?(r&&(e+="["+r+"]"),e+="{"+n+"}",e="\\mathrel{\\x"+
e+"}"):e="\\long"+e+" ",this.tex+=e},FinishAtom:function(){if(this.sup||this.sub)
{if(this.sup&&this.sub&&!this.atom){var e=this.sup,t=this.sub;e.match(/\d/)||(e+="\\vphantom{0}"
),t.match(/\d/)||(t+="\\vphantom{0}"),this.tex+="\\raise 1pt{\\scriptstyle\\begin{CEscriptstack}"+
e+"\\\\"+t+"\\end{CEscriptstack}}\\kern-.125em "}else this.sup||(this.sup="\\Space{0pt}{0pt}{.2em}"
),this.tex+="^{"+this.sup+"}_{"+this.sub+"}";this.sup=this.sub=""}this.atom=!1},GetBracket
:function(e){if(this.string.charAt(this.i)!=="[")return"";this.i++;var t=this.Find
("]");return e==="C"?t="\\ce{"+t+"}":e==="T"&&(t.match(/^\{.*\}$/)||(t="{"+t+"}")
,t="\\text"+t),t},Match:function(e){var t=e.exec(this.string.substr(this.i));return t&&
(t=t[0],this.i+=t.length),t},Find:function(t){var n=this.string.length,r=this.i,i=0
;while(this.i<n){var s=this.string.charAt(this.i++);if(s===t&&i===0)return this.string
.substr(r,this.i-r-1);s==="{"?i++:s==="}"&&(i?i--:e.Error(["ExtraCloseMissingOpen"
,"Extra close brace or missing open brace"]))}i&&e.Error(["MissingCloseBrace","Missing close brace"
]),e.Error(["NoClosingChar","Can't find closing %1",t])}});MathJax.Extension["TeX/mhchem"
].CE=t,e.Definitions.Add({macros:{ce:"CE",cf:"CE",cee:"CE",xleftrightarrow:["Extension"
,"AMSmath"],xrightleftharpoons:["Extension","AMSmath"],xRightleftharpoons:["Extension"
,"AMSmath"],xLeftrightharpoons:["Extension","AMSmath"],longrightleftharpoons:["Macro"
,"\\stackrel{\\textstyle{{-}\\!\\!{\\rightharpoonup}}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"
],longRightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\small\\smash\\leftharpoondown}"
],longLeftrightharpoons:["Macro","\\stackrel{\\rightharpoonup}{{{\\leftharpoondown}\\!\\!\\textstyle{-}}}"
],hyphen:["Macro","\\text{-}"],tripledash:["Macro","\\raise3mu{\\tiny\\text{-}\\kern2mu\\text{-}\\kern2mu\\text{-}}"
]},environment:{CEstack:["Array",null,null,null,"r",null,"0.001em","T",1],CEscriptstack
:["Array",null,null,null,"r",null,"0.2em","S",1]}},null,!0),MathJax.Extension["TeX/AMSmath"
]||e.Definitions.Add({macros:{xrightarrow:["Extension","AMSmath"],xleftarrow:["Extension"
,"AMSmath"]}},null,!0),MathJax.Hub.Register.StartupHook("TeX AMSmath Ready",function(
){e.Definitions.Add({macros:{xleftrightarrow:["xArrow",8596,6,6],xrightleftharpoons
:["xArrow",8652,5,7],xRightleftharpoons:["xArrow",8652,5,7],xLeftrightharpoons:["xArrow"
,8652,5,7]}},null,!0)}),e.Parse.Augment({CE:function(e){var n=this.GetArgument(e)
,r=t(n).Parse();this.string=r+this.string.substr(this.i),this.i=0}}),MathJax.Hub.
Startup.signal.Post("TeX mhchem Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mhchem.js"
);