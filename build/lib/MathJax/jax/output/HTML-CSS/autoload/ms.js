/*
 *  /MathJax/jax/output/HTML-CSS/autoload/ms.js
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var e="2.5.0",t=
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.ms.Augment({toHTML:function(
e){e=this.HTMLhandleSize(this.HTMLcreateSpan(e));var t=this.getValues("lquote","rquote"
),n=this.data.join("");return this.HTMLhandleVariant(e,this.HTMLgetVariant(),t.lquote+
n+t.rquote),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),this.HTMLhandleDir(e)
,e}}),t.ms.prototype.defaults.mathvariant="monospace",MathJax.Hub.Startup.signal.
Post("HTML-CSS ms Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/ms.js")});