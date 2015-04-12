/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/mmultiscripts.js
 *  
 *  Implements the SVG output for <mmultiscripts> elements.
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e="2.5.0",t=MathJax
.ElementJax.mml,n=MathJax.OutputJax.SVG;t.mmultiscripts.Augment({toSVG:function(e
,t){this.SVGgetStyles();var r=this.SVG(),i=this.SVGgetScale(r);this.SVGhandleSpace
(r);var s=this.data[this.base]?this.SVGdataStretched(this.base,e,t):n.BBOX.G().Clean
(),o=n.TeX.x_height*i,u=n.TeX.scriptspace*i*.75,a=this.SVGgetScripts(u),f=a[0],l=
a[1],c=a[2],h=a[3],p=(this.data[1]||this).SVGgetScale(),d=n.TeX.sup_drop*p,v=n.TeX
.sub_drop*p,m=s.h-d,g=s.d+v,y=0,b;s.ic&&(y=s.ic),this.data[this.base]&&(this.data
[this.base].type==="mi"||this.data[this.base].type==="mo")&&this.data[this.base].
data.join("").length===1&&s.scale===1&&!s.stretched&&!this.data[this.base].Get("largeop"
)&&(m=g=0);var w=this.getValues("subscriptshift","superscriptshift"),E=this.SVGgetMu
(r);w.subscriptshift=w.subscriptshift===""?0:n.length2em(w.subscriptshift,E),w.superscriptshift=
w.superscriptshift===""?0:n.length2em(w.superscriptshift,E);var S=0;c?S=c.w+y:h&&
(S=h.w-y),r.Add(s,Math.max(0,S),0);if(!l&&!h)g=Math.max(g,n.TeX.sub1*i,w.subscriptshift
),f&&(g=Math.max(g,f.h-.8*o)),c&&(g=Math.max(g,c.h-.8*o)),f&&r.Add(f,S+s.w+u-y,-g
),c&&r.Add(c,0,-g);else if(!f&&!c){var x=this.getValues("displaystyle","texprimestyle"
);b=n.TeX[x.displaystyle?"sup1":x.texprimestyle?"sup3":"sup2"],m=Math.max(m,b*i,w
.superscriptshift),l&&(m=Math.max(m,l.d+.25*o)),h&&(m=Math.max(m,h.d+.25*o)),l&&r
.Add(l,S+s.w+u,m),h&&r.Add(h,0,m)}else{g=Math.max(g,n.TeX.sub2*i);var T=n.TeX.rule_thickness*
i,N=(f||c).h,C=(l||h).d;c&&(N=Math.max(N,c.h)),h&&(C=Math.max(C,h.d)),m-C-(N-g)<3*
T&&(g=3*T-m+C+N,d=.8*o-(m-C),d>0&&(m+=d,g-=d)),m=Math.max(m,w.superscriptshift),g=
Math.max(g,w.subscriptshift),l&&r.Add(l,S+s.w+u,m),h&&r.Add(h,S+y-h.w,m),f&&r.Add
(f,S+s.w+u-y,-g),c&&r.Add(c,S-c.w,-g)}r.Clean(),this.SVGhandleColor(r),this.SVGsaveData
(r);var k=this.SVGdata;return k.dx=S,k.s=u,k.u=m,k.v=g,k.delta=y,r},SVGgetScripts
:function(e){var t,r,i=[],s=1,o=this.data.length,u=0;for(var a=0;a<4;a+=2){while(
s<o&&this.data[s].type!=="mprescripts"){for(var f=a;f<a+2;f++)this.data[s]&&this.
data[s].type!=="none"&&(i[f]||(i[f]=n.BBOX.G()),i[f].Add(this.data[s].toSVG().With
({x:u}))),s++;r=i[a]||{w:0},t=i[a+1]||{w:0},r.w=t.w=u=Math.max(r.w,t.w)}s++,u=0}for(
f=0;f<4;f++)i[f]&&(i[f].w+=e,i[f].Clean());return i}}),MathJax.Hub.Startup.signal
.Post("SVG mmultiscripts Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mmultiscripts.js"
)});