/*************************************************************
 *
 *  MathJax/extensions/TeX/noUndefined.js
 *  
 *  This causes undefined control sequences to be shown as their macro
 *  names rather than producing an error message.  So $X_{\xxx}$ would
 *  display as an X with a subscript consiting of the text "\xxx".
 *  
 *  To configure this extension, use for example
 *  
 *      MathJax.Hub.Config({
 *        TeX: {
 *          noUndefined: {
 *            attributes: {
 *              mathcolor: "red",
 *              mathbackground: "#FFEEEE",
 *              mathsize: "90%"
 *            }
 *          }
 *        }
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

MathJax.Extension["TeX/noUndefined"]={version:"2.5.0",config:MathJax.Hub.CombineConfig
("TeX.noUndefined",{disabled:!1,attributes:{mathcolor:"red"}})},MathJax.Hub.Register
.StartupHook("TeX Jax Ready",function(){var e=MathJax.Extension["TeX/noUndefined"
].config,t=MathJax.ElementJax.mml,n=MathJax.InputJax.TeX.Parse.prototype.csUndefined
;MathJax.InputJax.TeX.Parse.Augment({csUndefined:function(r){if(e.disabled)return n
.apply(this,arguments);MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence"
,r]),this.Push(t.mtext(r).With(e.attributes))}}),MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");