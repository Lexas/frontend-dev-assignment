/*************************************************************
 *
 *  MathJax/extensions/TeX/enclose.js
 *  
 *  Implements the \enclose macros, which give access from TeX to the
 *  <menclose> tag in the MathML that underlies MathJax's internal format.
 *  
 *  Usage:
 *  
 *      \enclose{notation}{math}                  % enclose math using given notation
 *      \enclose{notation,notation,...}{math}     % enclose with several notations
 *      \enclose{notation}[attributes]{math}      % enclose with attributes
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

MathJax.Extension["TeX/enclose"]={version:"2.5.0",ALLOWED:{arrow:1,color:1,mathcolor
:1,background:1,mathbackground:1,padding:1,thickness:1}},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml,n=
MathJax.Extension["TeX/enclose"].ALLOWED;e.Definitions.Add({macros:{enclose:"Enclose"
}},null,!0),e.Parse.Augment({Enclose:function(e){var r=this.GetArgument(e),i=this
.GetBrackets(e),s=this.ParseArg(e),o={notation:r.replace(/,/g," ")};if(i){i=i.replace
(/ /g,"").split(/,/);for(var u=0,a=i.length;u<a;u++){var f=i[u].split(/[:=]/);n[f
[0]]&&(f[1]=f[1].replace(/^"(.*)"$/,"$1"),f[1]==="true"&&(f[1]=!0),f[1]==="false"&&
(f[1]=!1),f[0]==="arrow"&&f[1]?o.notation=o.notation+" updiagonalarrow":o[f[0]]=f
[1])}}this.Push(t.menclose(s).With(o))}}),MathJax.Hub.Startup.signal.Post("TeX enclose Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/enclose.js");