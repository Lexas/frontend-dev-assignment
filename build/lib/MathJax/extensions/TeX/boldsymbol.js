/*
 *  /MathJax/extensions/TeX/boldsymbol.js
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

MathJax.Extension["TeX/boldsymbol"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,n=
t.Definitions,r={};r[e.VARIANT.NORMAL]=e.VARIANT.BOLD,r[e.VARIANT.ITALIC]=e.VARIANT
.BOLDITALIC,r[e.VARIANT.FRAKTUR]=e.VARIANT.BOLDFRAKTUR,r[e.VARIANT.SCRIPT]=e.VARIANT
.BOLDSCRIPT,r[e.VARIANT.SANSSERIF]=e.VARIANT.BOLDSANSSERIF,r["-tex-caligraphic"]="-tex-caligraphic-bold"
,r["-tex-oldstyle"]="-tex-oldstyle-bold",n.Add({macros:{boldsymbol:"Boldsymbol"}}
,null,!0),t.Parse.Augment({mmlToken:function(t){if(this.stack.env.boldsymbol){var n=
t.Get("mathvariant");n==null?t.mathvariant=e.VARIANT.BOLD:t.mathvariant=r[n]||n}return t
},Boldsymbol:function(e){var t=this.stack.env.boldsymbol,n=this.stack.env.font;this
.stack.env.boldsymbol=!0,this.stack.env.font=null;var r=this.ParseArg(e);this.stack
.env.font=n,this.stack.env.boldsymbol=t,this.Push(r)}}),MathJax.Hub.Startup.signal
.Post("TeX boldsymbol Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/boldsymbol.js"
);