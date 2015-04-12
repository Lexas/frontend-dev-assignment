/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/mglyph.js
 *  
 *  Implements the HTML-CSS output for <mglyph> elements.
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var e="2.5.0",t=
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r=MathJax.Localization;t.mglyph
.Augment({toHTML:function(e,i){var s=e,o=this.getValues("src","width","height","valign"
,"alt"),u;e=this.HTMLcreateSpan(e);if(o.src===""){var a=this.Get("index");if(a){i=
this.HTMLgetVariant();var f=i.defaultFont;f&&(f.noStyleChar=!0,f.testString=String
.fromCharCode(a)+"ABCabc",n.Font.testFont(f)?this.HTMLhandleVariant(e,i,String.fromCharCode
(a)):(o.alt===""&&(o.alt=r._(["MathML","BadMglyphFont"],"Bad font: %1",f.family))
,u=t.Error(o.alt,{mathsize:"75%"}),this.Append(u),u.toHTML(e),this.data.pop(),e.bbox=
u.HTMLspanElement().bbox))}}else{this.img||(this.img=t.mglyph.GLYPH[o.src]);if(!this
.img){this.img=t.mglyph.GLYPH[o.src]={img:new Image,status:"pending"};var l=this.
img.img;l.onload=MathJax.Callback(["HTMLimgLoaded",this]),l.onerror=MathJax.Callback
(["HTMLimgError",this]),l.src=o.src,MathJax.Hub.RestartAfter(l.onload)}if(this.img
.status!=="OK")u=t.Error(r._(["MathML","BadMglyph"],"Bad mglyph: %1",o.src),{mathsize
:"75%"}),this.Append(u),u.toHTML(e),this.data.pop(),e.bbox=u.HTMLspanElement().bbox
;else{var c=this.HTMLgetMu(e);l=n.addElement(e,"img",{isMathJax:!0,src:o.src,alt:
o.alt,title:o.alt}),o.width&&(l.style.width=n.Em(n.length2em(o.width,c,this.img.img
.width/n.em))),o.height&&(l.style.height=n.Em(n.length2em(o.height,c,this.img.img
.height/n.em))),e.bbox.w=e.bbox.rw=l.offsetWidth/n.em,e.bbox.h=l.offsetHeight/n.em
,o.valign&&(e.bbox.d=-n.length2em(o.valign,c,this.img.img.height/n.em),l.style.verticalAlign=
n.Em(-e.bbox.d),e.bbox.h-=e.bbox.d)}}return s.bbox?e.bbox&&(s.bbox.w+=e.bbox.w,s.
bbox.w>s.bbox.rw&&(s.bbox.rw=s.bbox.w),e.bbox.h>s.bbox.h&&(s.bbox.h=e.bbox.h),e.bbox
.d>s.bbox.d&&(s.bbox.d=e.bbox.d)):s.bbox={w:e.bbox.w,h:e.bbox.h,d:e.bbox.d,rw:e.bbox
.rw,lw:e.bbox.lw},this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLimgLoaded
:function(e,t){typeof e=="string"&&(t=e),this.img.status=t||"OK"},HTMLimgError:function(
){this.img.img.onload("error")}},{GLYPH:{}}),MathJax.Hub.Startup.signal.Post("HTML-CSS mglyph Ready"
),MathJax.Ajax.loadComplete(n.autoloadDir+"/mglyph.js")});