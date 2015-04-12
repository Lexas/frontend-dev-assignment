/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/annotation-xml.js
 *  
 *  Implements the SVG output for <annotation-xml> elements.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013-2015 The MathJax Consortium
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e="2.5.0",t=MathJax
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX;r.FOREIGN=r.Subclass({type:"foreignObject"
,removeable:!1}),t["annotation-xml"].Augment({toSVG:function(){var e=this.SVG();this
.SVGhandleSpace(e);var t=this.Get("encoding");for(var n=0,r=this.data.length;n<r;
n++)e.Add(this.data[n].toSVG(t),e.w,0);return e.Clean(),this.SVGhandleColor(e),this
.SVGsaveData(e),e}}),t.xml.Augment({toSVG:function(e){var t=n.textSVG.parentNode;
n.mathDiv.style.width="auto",t.insertBefore(this.div,n.textSVG);var i=this.div.offsetWidth
,s=this.div.offsetHeight,o=MathJax.HTML.addElement(this.div,"span",{style:{display
:"inline-block",overflow:"hidden",height:s+"px",width:"1px",marginRight:"-1px"}})
,u=this.div.offsetHeight-s;s-=u,this.div.removeChild(o),t.removeChild(this.div),n
.mathDiv.style.width="";var a=1e3/n.em,f=r.FOREIGN({y:-s+"px",width:i+"px",height
:s+u+"px",transform:"scale("+a+") matrix(1 0 0 -1 0 0)"});for(var l=0,c=this.data
.length;l<c;l++)f.element.appendChild(this.data[l].cloneNode(!0));return f.w=i*a,
f.h=s*a,f.d=u*a,f.r=f.w,f.l=0,f.Clean(),this.SVGsaveData(f),f}}),MathJax.Hub.Startup
.signal.Post("SVG annotation-xml Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/annotation-xml.js"
)});