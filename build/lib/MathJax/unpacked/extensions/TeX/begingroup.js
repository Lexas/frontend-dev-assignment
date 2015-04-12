/*************************************************************
 *
 *  MathJax/extensions/TeX/begingroup.js
 *  
 *  Implements \begingroup and \endgroup commands that make local 
 *  definitions possible and are removed when the \endgroup occurs.  
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2011-2015 The MathJax Consortium
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

MathJax.Extension["TeX/begingroup"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=e.Definitions,n=MathJax.
Object.Subclass({macros:null,environments:null,Init:function(e,t){this.macros=e||
{},this.environments=t||{}},Find:function(e,t){if(this[t][e])return this[t][e]},Def
:function(e,t,n){this[n][e]=t},Undef:function(e,t){delete this[t][e]},Merge:function(
e){MathJax.Hub.Insert(this.macros,e.macros),MathJax.Hub.Insert(this.environments,
e.environments)},MergeGlobals:function(e){var t=this.macros;for(var n in t)t.hasOwnProperty
(n)&&t[n].global&&(e.Def(n,t[n],"macros",!0),delete t[n].global,delete t[n])},Clear
:function(e){this.environments={};if(e)this.macros={};else{var t=this.macros;for(
var n in t)t.hasOwnProperty(n)&&!t[n].global&&delete t[n]}return this}}),r=e.nsStack=
MathJax.Object.Subclass({stack:null,top:0,isEqn:!1,Init:function(e){this.isEqn=e,
this.stack=[],e?this.Push(n()):this.Push(n(t.macros,t.environment))},Def:function(
e,t,n,r){var i=this.top-1;if(r){while(i>0)this.stack[i].Undef(e,n),i--;t instanceof 
Array||(t=[t]),this.isEqn&&(t.global=!0)}this.stack[i].Def(e,t,n)},Push:function(
e){this.stack.push(e),this.top=this.stack.length},Pop:function(){var e;return this
.top>1?(e=this.stack[--this.top],this.isEqn&&this.stack.pop()):this.isEqn&&this.Clear
(),e},Find:function(e,t){for(var n=this.top-1;n>=0;n--){var r=this.stack[n].Find(
e,t);if(r)return r}return null},Merge:function(e){e.stack[0].MergeGlobals(this),this
.stack[this.top-1].Merge(e.stack[0]);var t=[this.top,this.stack.length-this.top].
concat(e.stack.slice(1));this.stack.splice.apply(this.stack,t),this.top=this.stack
.length},Reset:function(){this.top=this.stack.length},Clear:function(e){this.stack=
[this.stack[0].Clear()],this.top=this.stack.length}},{nsFrame:n});t.Add({macros:{
begingroup:"BeginGroup",endgroup:"EndGroup",global:["Extension","newcommand"],gdef
:["Extension","newcommand"]}},null,!0),e.Parse.Augment({BeginGroup:function(t){e.
eqnStack.Push(n())},EndGroup:function(t){e.eqnStack.top>1?e.eqnStack.Pop():e.rootStack
.top===1?e.Error(["ExtraEndMissingBegin","Extra %1 or missing \\begingroup",t]):(
e.eqnStack.Clear(),e.rootStack.Pop())},csFindMacro:function(t){return e.eqnStack.
Find(t,"macros")||e.rootStack.Find(t,"macros")},envFindName:function(t){return e.
eqnStack.Find(t,"environments")||e.rootStack.Find(t,"environments")}}),e.rootStack=
r(),e.eqnStack=r(!0),e.prefilterHooks.Add(function(){e.rootStack.Reset(),e.eqnStack
.Clear(!0)}),e.postfilterHooks.Add(function(){e.rootStack.Merge(e.eqnStack)}),MathJax
.Hub.Register.StartupHook("TeX newcommand Ready",function(){t.Add({macros:{global
:"Global",gdef:["Macro","\\global\\def"]}},null,!0),e.Parse.Augment({setDef:function(
t,n){n.isUser=!0,e.eqnStack.Def(t,n,"macros",this.stack.env.isGlobal),delete this
.stack.env.isGlobal},setEnv:function(t,n){n.isUser=!0,e.eqnStack.Def(t,n,"environments"
)},Global:function(t){var n=this.i,r=this.GetCSname(t);this.i=n,r!=="let"&&r!=="def"&&
r!=="newcommand"&&e.Error(["GlobalNotFollowedBy","%1 not followed by \\let, \\def, or \\newcommand"
,t]),this.stack.env.isGlobal=!0}})}),MathJax.Hub.Startup.signal.Post("TeX begingroup Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/begingroup.js");