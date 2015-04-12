/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mglyph.js
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r=MathJax.Localization;t.mglyph
.Augment({toHTML:function(e,i){var s=e,o=this.getValues("src","width","height","valign"
,"alt"),u;e=this.HTMLcreateSpan(e);if(o.src===""){var f=this.Get("index");if(f){i=
this.HTMLgetVariant();var l=i.defaultFont;l&&(l.noStyleChar=!0,l.testString=String
.fromCharCode(f)+"ABCabc",n.Font.testFont(l)?this.HTMLhandleVariant(e,i,String.fromCharCode
(f)):(o.alt===""&&(o.alt=r._(["MathML","BadMglyphFont"],"Bad font: %1",l.family))
,u=t.Error(o.alt,{mathsize:"75%"}),this.Append(u),u.toHTML(e),this.data.pop(),e.bbox=
u.HTMLspanElement().bbox))}}else{this.img||(this.img=t.mglyph.GLYPH[o.src]);if(!this
.img){this.img=t.mglyph.GLYPH[o.src]={img:new Image,status:"pending"};var c=this.
img.img;c.onload=MathJax.Callback(["HTMLimgLoaded",this]),c.onerror=MathJax.Callback
(["HTMLimgError",this]),c.src=o.src,MathJax.Hub.RestartAfter(c.onload)}if(this.img
.status!=="OK")u=t.Error(r._(["MathML","BadMglyph"],"Bad mglyph: %1",o.src),{mathsize
:"75%"}),this.Append(u),u.toHTML(e),this.data.pop(),e.bbox=u.HTMLspanElement().bbox
;else{var h=this.HTMLgetMu(e);c=n.addElement(e,"img",{isMathJax:!0,src:o.src,alt:
o.alt,title:o.alt}),o.width&&(c.style.width=n.Em(n.length2em(o.width,h,this.img.img
.width/n.em))),o.height&&(c.style.height=n.Em(n.length2em(o.height,h,this.img.img
.height/n.em))),e.bbox.w=e.bbox.rw=c.offsetWidth/n.em,e.bbox.h=c.offsetHeight/n.em
,o.valign&&(e.bbox.d=-n.length2em(o.valign,h,this.img.img.height/n.em),c.style.verticalAlign=
n.Em(-e.bbox.d),e.bbox.h-=e.bbox.d)}}return s.bbox?e.bbox&&(s.bbox.w+=e.bbox.w,s.
bbox.w>s.bbox.rw&&(s.bbox.rw=s.bbox.w),e.bbox.h>s.bbox.h&&(s.bbox.h=e.bbox.h),e.bbox
.d>s.bbox.d&&(s.bbox.d=e.bbox.d)):s.bbox={w:e.bbox.w,h:e.bbox.h,d:e.bbox.d,rw:e.bbox
.rw,lw:e.bbox.lw},this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLimgLoaded
:function(e,t){typeof e=="string"&&(t=e),this.img.status=t||"OK"},HTMLimgError:function(
){this.img.img.onload("error")}},{GLYPH:{}}),MathJax.Hub.Startup.signal.Post("HTML-CSS mglyph Ready"
),MathJax.Ajax.loadComplete(n.autoloadDir+"/mglyph.js")});