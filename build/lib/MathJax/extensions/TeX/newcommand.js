/*
 *  /MathJax/extensions/TeX/newcommand.js
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

MathJax.Extension["TeX/newcommand"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=e.Definitions;t.Add({macros
:{newcommand:"NewCommand",renewcommand:"NewCommand",newenvironment:"NewEnvironment"
,renewenvironment:"NewEnvironment",def:"MacroDef",let:"Let"}},null,!0),e.Parse.Augment
({NewCommand:function(t){var n=this.trimSpaces(this.GetArgument(t)),r=this.GetBrackets
(t),i=this.GetBrackets(t),s=this.GetArgument(t);n.charAt(0)==="\\"&&(n=n.substr(1
)),n.match(/^(.|[a-z]+)$/i)||e.Error(["IllegalControlSequenceName","Illegal control sequence name for %1"
,t]),r&&(r=this.trimSpaces(r),r.match(/^[0-9]+$/)||e.Error(["IllegalParamNumber","Illegal number of parameters specified in %1"
,t])),this.setDef(n,["Macro",s,r,i])},NewEnvironment:function(t){var n=this.trimSpaces
(this.GetArgument(t)),r=this.GetBrackets(t),i=this.GetBrackets(t),s=this.GetArgument
(t),o=this.GetArgument(t);r&&(r=this.trimSpaces(r),r.match(/^[0-9]+$/)||e.Error(["IllegalParamNumber"
,"Illegal number of parameters specified in %1",t])),this.setEnv(n,["BeginEnv",[null
,"EndEnv"],s,o,r,i])},MacroDef:function(e){var t=this.GetCSname(e),n=this.GetTemplate
(e,"\\"+t),r=this.GetArgument(e);n instanceof Array?this.setDef(t,["MacroWithTemplate"
,r].concat(n)):this.setDef(t,["Macro",r,n])},Let:function(e){var n=this.GetCSname
(e),r,i=this.GetNext();i==="="&&(this.i++,i=this.GetNext()),i==="\\"?(e=this.GetCSname
(e),r=this.csFindMacro(e),r||(t.mathchar0mi[e]?r=["csMathchar0mi",t.mathchar0mi[e
]]:t.mathchar0mo[e]?r=["csMathchar0mo",t.mathchar0mo[e]]:t.mathchar7[e]?r=["csMathchar7"
,t.mathchar7[e]]:t.delimiter["\\"+e]!=null&&(r=["csDelimiter",t.delimiter["\\"+e]
]))):(r=["Macro",i],this.i++),this.setDef(n,r)},setDef:function(e,n){n.isUser=!0,
t.macros[e]=n},setEnv:function(e,n){n.isUser=!0,t.environment[e]=n},GetCSname:function(
t){var n=this.GetNext();n!=="\\"&&e.Error(["MissingCS","%1 must be followed by a control sequence"
,t]);var r=this.trimSpaces(this.GetArgument(t));return r.substr(1)},GetTemplate:function(
t,n){var r,i=[],s=0;r=this.GetNext();var o=this.i;while(this.i<this.string.length
){r=this.GetNext();if(r==="#")o!==this.i&&(i[s]=this.string.substr(o,this.i-o)),r=
this.string.charAt(++this.i),r.match(/^[1-9]$/)||e.Error(["CantUseHash2","Illegal use of # in template for %1"
,n]),parseInt(r)!=++s&&e.Error(["SequentialParam","Parameters for %1 must be numbered sequentially"
,n]),o=this.i+1;else if(r==="{")return o!==this.i&&(i[s]=this.string.substr(o,this
.i-o)),i.length>0?[s,i]:s;this.i++}e.Error(["MissingReplacementString","Missing replacement string for definition of %1"
,t])},MacroWithTemplate:function(t,n,r,i){if(r){var s=[];this.GetNext(),i[0]&&!this
.MatchParam(i[0])&&e.Error(["MismatchUseDef","Use of %1 doesn't match its definition"
,t]);for(var o=0;o<r;o++)s.push(this.GetParameter(t,i[o+1]));n=this.SubstituteArgs
(s,n)}this.string=this.AddArgs(n,this.string.slice(this.i)),this.i=0,++this.macroCount>
e.config.MAXMACROS&&e.Error(["MaxMacroSub1","MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
])},BeginEnv:function(e,t,n,r,i){if(r){var s=[];if(i!=null){var o=this.GetBrackets
("\\begin{"+name+"}");s.push(o==null?i:o)}for(var u=s.length;u<r;u++)s.push(this.
GetArgument("\\begin{"+name+"}"));t=this.SubstituteArgs(s,t),n=this.SubstituteArgs
([],n)}return this.string=this.AddArgs(t,this.string.slice(this.i)),this.i=0,e},EndEnv
:function(e,t,n,r){var i="\\end{\\end\\"+e.name+"}";return this.string=this.AddArgs
(n,i+this.string.slice(this.i)),this.i=0,null},GetParameter:function(t,n){if(n==null
)return this.GetArgument(t);var r=this.i,i=0,s=0;while(this.i<this.string.length)
if(this.string.charAt(this.i)==="{")this.i===r&&(s=1),this.GetArgument(t),i=this.
i-r;else{if(this.MatchParam(n))return s&&(r++,i-=2),this.string.substr(r,i);this.
i++,i++,s=0}e.Error(["RunawayArgument","Runaway argument for %1?",t])},MatchParam
:function(e){return this.string.substr(this.i,e.length)!==e?0:(this.i+=e.length,1
)}}),e.Environment=function(e){t.environment[e]=["BeginEnv","EndEnv"].concat([].slice
.call(arguments,1)),t.environment[e].isUser=!0},MathJax.Hub.Startup.signal.Post("TeX newcommand Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/newcommand.js");