/*************************************************************
 *
 *  MathJax/extensions/TeX/verb.js
 *  
 *  Implements the \verb|...| command for including text verbatim
 *  (with no processing of macros or special characters).
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

MathJax.Extension["TeX/verb"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,n=t.Definitions;n
.Add({macros:{verb:"Verb"}},null,!0),t.Parse.Augment({Verb:function(n){var r=this
.GetNext(),i=++this.i;r==""&&t.Error(["MissingArgFor","Missing argument for %1",n
]);while(this.i<this.string.length&&this.string.charAt(this.i)!=r)this.i++;this.i==
this.string.length&&t.Error(["NoClosingDelim","Can't find closing delimiter for %1"
,n]);var s=this.string.slice(i,this.i).replace(/ /g," ");this.i++,this.Push(e.mtext
(s).With({mathvariant:e.VARIANT.MONOSPACE}))}}),MathJax.Hub.Startup.signal.Post("TeX verb Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/verb.js");