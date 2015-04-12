/*
 *  /MathJax/jax/output/HTML-CSS/autoload/annotation-xml.js
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t["annotation-xml"].Augment
({toHTML:function(e){e=this.HTMLhandleSize(this.HTMLcreateSpan(e));var t=this.Get
("encoding");for(var n=0,r=this.data.length;n<r;n++)this.data[n].toHTML(e,t);return this
.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLgetScale:function(){return this
.SUPER(arguments).HTMLgetScale.call(this)/n.scale}}),t.xml.Augment({toHTML:function(
e,t){for(var r=0,i=this.data.length;r<i;r++)e.appendChild(this.data[r].cloneNode(!0
));e.bbox.w=n.getW(e),e.bbox.rw=e.bbox.w;var s=n.getHD(e);e.bbox.h=s.h,e.bbox.d=s
.d}}),MathJax.Hub.Startup.signal.Post("HTML-CSS annotation-xml Ready"),MathJax.Ajax
.loadComplete(n.autoloadDir+"/annotation-xml.js")});