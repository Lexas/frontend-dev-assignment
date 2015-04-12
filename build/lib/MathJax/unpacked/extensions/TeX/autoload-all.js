/*************************************************************
 *
 *  MathJax/extensions/TeX/autoload-all.js
 *  
 *  Provides pre-defined macros to autoload all the extensions
 *  so that all macros that MathJax knows about are available.
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

MathJax.Extension["TeX/autoload-all"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e={action:["mathtip","texttip","toggle"],AMSmath:
["mathring","nobreakspace","negmedspace","negthickspace","intI","iiiint","idotsint"
,"dddot","ddddot","sideset","boxed","substack","injlim","projlim","varliminf","varlimsup"
,"varinjlim","varprojlim","DeclareMathOperator","operatorname","genfrac","tfrac","dfrac"
,"binom","tbinom","dbinom","cfrac","shoveleft","shoveright","xrightarrow","xleftarrow"
],begingroup:["begingroup","endgroup","gdef","global"],cancel:["cancel","bcancel"
,"xcancel","cancelto"],color:["color","textcolor","colorbox","fcolorbox","definecolor"
],enclose:["enclose"],extpfeil:["Newextarrow","xlongequal","xmapsto","xtofrom","xtwoheadleftarrow"
,"xtwoheadrightarrow"],mhchem:["ce","cee","cf"]},t={AMSmath:["subarray","smallmatrix"
,"equation","equation*"],AMScd:["CD"]},n,r,i,s={macros:{},environment:{}};for(n in 
e)if(e.hasOwnProperty(n)&&!MathJax.Extension["TeX/"+n]){var o=e[n];for(r=0,i=o.length
;r<i;r++)s.macros[o[r]]=["Extension",n]}for(n in t)if(t.hasOwnProperty(n)&&!MathJax
.Extension["TeX/"+n]){var u=t[n];for(r=0,i=u.length;r<i;r++)s.environment[u[r]]=["ExtensionEnv"
,null,n]}MathJax.InputJax.TeX.Definitions.Add(s),MathJax.Hub.Startup.signal.Post("TeX autoload-all Ready"
)}),MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/TeX/AMSsymbols.js"
],["loadComplete",MathJax.Ajax,"[MathJax]/extensions/TeX/autoload-all.js"]);