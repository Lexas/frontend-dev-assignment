/*
 *  /MathJax/extensions/TeX/enclose.js
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

MathJax.Extension["TeX/enclose"]={version:"2.5.0",ALLOWED:{arrow:1,color:1,mathcolor
:1,background:1,mathbackground:1,padding:1,thickness:1}},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml,n=
MathJax.Extension["TeX/enclose"].ALLOWED;e.Definitions.Add({macros:{enclose:"Enclose"
}},null,!0),e.Parse.Augment({Enclose:function(e){var r=this.GetArgument(e),i=this
.GetBrackets(e),s=this.ParseArg(e),o={notation:r.replace(/,/g," ")};if(i){i=i.replace
(/ /g,"").split(/,/);for(var u=0,f=i.length;u<f;u++){var l=i[u].split(/[:=]/);n[l
[0]]&&(l[1]=l[1].replace(/^"(.*)"$/,"$1"),l[1]==="true"&&(l[1]=!0),l[1]==="false"&&
(l[1]=!1),l[0]==="arrow"&&l[1]?o.notation=o.notation+" updiagonalarrow":o[l[0]]=l
[1])}}this.Push(t.menclose(s).With(o))}}),MathJax.Hub.Startup.signal.Post("TeX enclose Ready"
)}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/enclose.js");