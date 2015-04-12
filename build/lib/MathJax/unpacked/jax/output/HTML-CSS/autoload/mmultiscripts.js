/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/mmultiscripts.js
 *  
 *  Implements the HTML-CSS output for <mmultiscripts> elements.
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.mmultiscripts.Augment({toHTML
:function(e,t,r){e=this.HTMLcreateSpan(e);var i=this.HTMLgetScale(),s=n.createStack
(e),o,u=n.createBox(s);if(this.data[this.base]){var a=this.data[this.base].toHTML
(u);r!=null?this.data[this.base].HTMLstretchV(u,t,r):t!=null&&this.data[this.base
].HTMLstretchH(u,t),n.Measured(a,u)}else u.bbox=this.HTMLzeroBBox();var f=n.TeX.x_height*
i,l=n.TeX.scriptspace*i*.75,c=this.HTMLgetScripts(s,l),h=c[0],p=c[1],d=c[2],v=c[3
],m=i;for(var g=1;g<this.data.length;g++)if(this.data[g]&&this.data[g].spanID){m=
this.data[g].HTMLgetScale();break}var y=n.TeX.sup_drop*m,b=n.TeX.sub_drop*m,w=u.bbox
.h-y,E=u.bbox.d+b,S=0,x;u.bbox.ic&&(S=u.bbox.ic),this.data[this.base]&&(this.data
[this.base].type==="mi"||this.data[this.base].type==="mo")&&this.data[this.base].
data.join("").length===1&&u.bbox.scale===1&&!this.data[this.base].Get("largeop")&&
(w=E=0);var T=this.getValues("subscriptshift","superscriptshift"),N=this.HTMLgetMu
(e);T.subscriptshift=T.subscriptshift===""?0:n.length2em(T.subscriptshift,N),T.superscriptshift=
T.superscriptshift===""?0:n.length2em(T.superscriptshift,N);var C=0;d?C=d.bbox.w+
S:v&&(C=v.bbox.w-S),C<0&&(C=0),n.placeBox(u,C,0);if(!p&&!v)E=Math.max(E,n.TeX.sub1*
i,T.subscriptshift),h&&(E=Math.max(E,h.bbox.h-.8*f)),d&&(E=Math.max(E,d.bbox.h-.8*
f)),h&&n.placeBox(h,C+u.bbox.w+l-S,-E),d&&n.placeBox(d,0,-E);else if(!h&&!d)o=this
.getValues("displaystyle","texprimestyle"),x=n.TeX[o.displaystyle?"sup1":o.texprimestyle?"sup3"
:"sup2"],w=Math.max(w,x*i,T.superscriptshift),p&&(w=Math.max(w,p.bbox.d+.25*f)),v&&
(w=Math.max(w,v.bbox.d+.25*f)),p&&n.placeBox(p,C+u.bbox.w+l,w),v&&n.placeBox(v,0,
w);else{E=Math.max(E,n.TeX.sub2*i);var k=n.TeX.rule_thickness*i,L=(h||d).bbox.h,A=
(p||v).bbox.d;d&&(L=Math.max(L,d.bbox.h)),v&&(A=Math.max(A,v.bbox.d)),w-A-(L-E)<3*
k&&(E=3*k-w+A+L,y=.8*f-(w-A),y>0&&(w+=y,E-=y)),w=Math.max(w,T.superscriptshift),E=
Math.max(E,T.subscriptshift),p&&n.placeBox(p,C+u.bbox.w+l,w),v&&n.placeBox(v,C+S-
v.bbox.w,w),h&&n.placeBox(h,C+u.bbox.w+l-S,-E),d&&n.placeBox(d,C-d.bbox.w,-E)}this
.HTMLhandleSpace(e),this.HTMLhandleColor(e);var O=e.bbox;return O.dx=C,O.s=l,O.u=
w,O.v=E,O.delta=S,O.px=C+u.bbox.w,e},HTMLgetScripts:function(e,t){var r,i,s=[],o=1
,u=this.data.length,a=0;for(var f=0;f<4;f+=2){while(o<u&&this.data[o].type!=="mprescripts"
){for(var l=f;l<f+2;l++)this.data[o]&&this.data[o].type!=="none"&&(s[l]||(s[l]=n.
createBox(e),s[l].bbox=this.HTMLemptyBBox({}),a&&(n.createBlank(s[l],a),s[l].bbox
.w=s[l].bbox.rw=a)),this.data[o].toHTML(s[l]),this.HTMLcombineBBoxes(this.data[o]
,s[l].bbox)),o++;i=s[f],r=s[f+1],i&&r&&(i.bbox.w<r.bbox.w?(n.createBlank(i,r.bbox
.w-i.bbox.w),i.bbox.w=r.bbox.w,i.bbox.rw=Math.max(i.bbox.w,i.bbox.rw)):i.bbox.w>r
.bbox.w&&(n.createBlank(r,i.bbox.w-r.bbox.w),r.bbox.w=i.bbox.w,r.bbox.rw=Math.max
(r.bbox.w,r.bbox.rw))),i?a=i.bbox.w:r&&(a=r.bbox.w)}o++,a=0}for(l=0;l<4;l++)s[l]&&
(s[l].bbox.w+=t,s[l].bbox.rw=Math.max(s[l].bbox.w,s[l].bbox.rw),s[l].bbox.name=["sub"
,"sup","presub","presup"][l],this.HTMLcleanBBox(s[l].bbox));return s},HTMLstretchH
:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV}),MathJax.Hub.Startup.signal
.Post("HTML-CSS mmultiscripts Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mmultiscripts.js"
)});