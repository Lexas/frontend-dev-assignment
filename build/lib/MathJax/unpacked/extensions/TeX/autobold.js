/*************************************************************
 *
 *  MathJax/extensions/TeX/autobold.js
 *  
 *  Adds \boldsymbol around mathematics that appears in a section
 *  of an HTML page that is in bold.
 *  
 *  ---------------------------------------------------------------------
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

MathJax.Extension["TeX/autobold"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX;e.prefilterHooks.Add(function(
e){var t=e.script.parentNode.insertBefore(document.createElement("span"),e.script
);t.visibility="hidden",t.style.fontFamily="Times, serif",t.appendChild(document.
createTextNode("ABCXYZabcxyz"));var n=t.offsetWidth;t.style.fontWeight="bold",n&&
t.offsetWidth===n&&(e.math="\\boldsymbol{"+e.math+"}"),t.parentNode.removeChild(t
)}),MathJax.Hub.Startup.signal.Post("TeX autobold Ready")}),MathJax.Ajax.loadComplete
("[MathJax]/extensions/TeX/autobold.js");