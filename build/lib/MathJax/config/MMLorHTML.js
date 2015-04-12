/*
 *  /MathJax/config/MMLorHTML.js
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