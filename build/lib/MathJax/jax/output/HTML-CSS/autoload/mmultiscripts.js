/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mmultiscripts.js
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.mmultiscripts.Augment({toHTML
:function(e,t,r){e=this.HTMLcreateSpan(e);var i=this.HTMLgetScale(),s=n.createStack
(e),o,u=n.createBox(s);if(this.data[this.base]){var a=this.data[this.base].toHTML
(u);r!=null?this.data[this.base].HTMLstretchV(u,t,r):t!=null&&this.data[this.base
].HTMLstretchH(u,t),n.Measured(a,u)}else u.bbox=this.HTMLzeroBBox();var f=n.TeX.x_height*
i,l=n.TeX.scriptspace*i*.75,c=this.HTMLgetScripts(s,l),h=c[0],p=c[1],d=c[2],v=c[3
],m=i;for(var g=1;g<this.data.length;g++)if(this.data[g]&&this.data[g].spanID){m=
this.data[g].HTMLgetScale();break}var y=n.TeX.sup_drop*m,w=n.TeX.sub_drop*m,E=u.bbox
.h-y,S=u.bbox.d+w,x=0,T;u.bbox.ic&&(x=u.bbox.ic),this.data[this.base]&&(this.data
[this.base].type==="mi"||this.data[this.base].type==="mo")&&this.data[this.base].
data.join("").length===1&&u.bbox.scale===1&&!this.data[this.base].Get("largeop")&&
(E=S=0);var N=this.getValues("subscriptshift","superscriptshift"),C=this.HTMLgetMu
(e);N.subscriptshift=N.subscriptshift===""?0:n.length2em(N.subscriptshift,C),N.superscriptshift=
N.superscriptshift===""?0:n.length2em(N.superscriptshift,C);var k=0;d?k=d.bbox.w+
x:v&&(k=v.bbox.w-x),k<0&&(k=0),n.placeBox(u,k,0);if(!p&&!v)S=Math.max(S,n.TeX.sub1*
i,N.subscriptshift),h&&(S=Math.max(S,h.bbox.h-.8*f)),d&&(S=Math.max(S,d.bbox.h-.8*
f)),h&&n.placeBox(h,k+u.bbox.w+l-x,-S),d&&n.placeBox(d,0,-S);else if(!h&&!d)o=this
.getValues("displaystyle","texprimestyle"),T=n.TeX[o.displaystyle?"sup1":o.texprimestyle?"sup3"
:"sup2"],E=Math.max(E,T*i,N.superscriptshift),p&&(E=Math.max(E,p.bbox.d+.25*f)),v&&
(E=Math.max(E,v.bbox.d+.25*f)),p&&n.placeBox(p,k+u.bbox.w+l,E),v&&n.placeBox(v,0,
E);else{S=Math.max(S,n.TeX.sub2*i);var L=n.TeX.rule_thickness*i,A=(h||d).bbox.h,O=
(p||v).bbox.d;d&&(A=Math.max(A,d.bbox.h)),v&&(O=Math.max(O,v.bbox.d)),E-O-(A-S)<3*
L&&(S=3*L-E+O+A,y=.8*f-(E-O),y>0&&(E+=y,S-=y)),E=Math.max(E,N.superscriptshift),S=
Math.max(S,N.subscriptshift),p&&n.placeBox(p,k+u.bbox.w+l,E),v&&n.placeBox(v,k+x-
v.bbox.w,E),h&&n.placeBox(h,k+u.bbox.w+l-x,-S),d&&n.placeBox(d,k-d.bbox.w,-S)}this
.HTMLhandleSpace(e),this.HTMLhandleColor(e);var M=e.bbox;return M.dx=k,M.s=l,M.u=
E,M.v=S,M.delta=x,M.px=k+u.bbox.w,e},HTMLgetScripts:function(e,t){var r,i,s=[],o=1
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