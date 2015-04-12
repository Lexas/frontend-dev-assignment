/*************************************************************
 *
 *  MathJax/config/MMLorHTML.js
 *  
 *  Chooses between the NativeMML and HTML-CSS output jax depending
 *  on the capabilities of the browser and configuration settings
 *  of the page.
 *  
 *  This file should be added to the config array when configuring
 *  MathJax.  Note that if you include this, you should NOT include
 *  an output jax in the jax array (it will be added for you by
 *  this file).
 *  
 *  You can specify the preferred output jax on a global or
 *  browser-by-browser basis.  To specify it globally, use
 *  
 *      MathJax.Hub.Config({
 *        MMLorHTML: {prefer: "MML"} // or "HTML"
 *      });
 *  
 *  To specify on a browser-by-borwser basis, use
 *  
 *      MathJax.Hub.Config({
 *        MMLorHTML: {prefer: {
 *          MSIE:    "MML",
 *          Firefox: "MML",
 *          Opera:   "HTML",
 *          other:   "HTML"
 *        }}
 *      });
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2015 The MathJax Consortium
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

(function(e,t){var n="2.5.0",r=MathJax.Hub.CombineConfig("MMLorHTML",{prefer:{MSIE
:"MML",Firefox:"HTML",Opera:"HTML",Chrome:"HTML",Safari:"HTML",other:"HTML"}}),i=
{Firefox:3,Opera:9.52,MSIE:6,Chrome:.3,Safari:2,Konqueror:4},s=t.version==="0.0"||
t.versionAtLeast(i[t]||0),o=t.isFirefox&&t.versionAtLeast("1.5")||t.isMSIE&&t.hasMathPlayer||
t.isSafari&&t.versionAtLeast("5.0")||t.isOpera&&t.versionAtLeast("9.52");e.Register
.StartupHook("End Config",function(){var t=r.prefer&&typeof r.prefer=="object"?r.
prefer[MathJax.Hub.Browser]||r.prefer.other||"HTML":r.prefer;s||o?o&&(t==="MML"||!
s)?(MathJax.OutputJax.NativeMML?MathJax.OutputJax.NativeMML.Register("jax/mml"):e
.config.jax.unshift("output/NativeMML"),e.Startup.signal.Post("NativeMML output selected"
)):(MathJax.OutputJax["HTML-CSS"]?MathJax.OutputJax["HTML-CSS"].Register("jax/mml"
):e.config.jax.unshift("output/HTML-CSS"),e.Startup.signal.Post("HTML-CSS output selected"
)):(e.PreProcess.disabled=!0,e.prepareScripts.disabled=!0,MathJax.Message.Set(["MathJaxNotSupported"
,"Your browser does not support MathJax"],null,4e3),e.Startup.signal.Post("MathJax not supported"
))})})(MathJax.Hub,MathJax.Hub.Browser),MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js"
);