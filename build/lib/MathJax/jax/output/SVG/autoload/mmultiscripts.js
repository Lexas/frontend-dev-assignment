/*
 *  /MathJax/jax/output/SVG/autoload/mmultiscripts.js
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e="2.5.0",t=MathJax
.ElementJax.mml,n=MathJax.OutputJax.SVG;t.mmultiscripts.Augment({toSVG:function(e
,t){this.SVGgetStyles();var r=this.SVG(),i=this.SVGgetScale(r);this.SVGhandleSpace
(r);var s=this.data[this.base]?this.SVGdataStretched(this.base,e,t):n.BBOX.G().Clean
(),o=n.TeX.x_height*i,u=n.TeX.scriptspace*i*.75,a=this.SVGgetScripts(u),f=a[0],l=
a[1],h=a[2],p=a[3],d=(this.data[1]||this).SVGgetScale(),v=n.TeX.sup_drop*d,m=n.TeX
.sub_drop*d,g=s.h-v,y=s.d+m,b=0,w;s.ic&&(b=s.ic),this.data[this.base]&&(this.data
[this.base].type==="mi"||this.data[this.base].type==="mo")&&this.data[this.base].
data.join("").length===1&&s.scale===1&&!s.stretched&&!this.data[this.base].Get("largeop"
)&&(g=y=0);var E=this.getValues("subscriptshift","superscriptshift"),S=this.SVGgetMu
(r);E.subscriptshift=E.subscriptshift===""?0:n.length2em(E.subscriptshift,S),E.superscriptshift=
E.superscriptshift===""?0:n.length2em(E.superscriptshift,S);var x=0;h?x=h.w+b:p&&
(x=p.w-b),r.Add(s,Math.max(0,x),0);if(!l&&!p)y=Math.max(y,n.TeX.sub1*i,E.subscriptshift
),f&&(y=Math.max(y,f.h-.8*o)),h&&(y=Math.max(y,h.h-.8*o)),f&&r.Add(f,x+s.w+u-b,-y
),h&&r.Add(h,0,-y);else if(!f&&!h){var T=this.getValues("displaystyle","texprimestyle"
);w=n.TeX[T.displaystyle?"sup1":T.texprimestyle?"sup3":"sup2"],g=Math.max(g,w*i,E
.superscriptshift),l&&(g=Math.max(g,l.d+.25*o)),p&&(g=Math.max(g,p.d+.25*o)),l&&r
.Add(l,x+s.w+u,g),p&&r.Add(p,0,g)}else{y=Math.max(y,n.TeX.sub2*i);var N=n.TeX.rule_thickness*
i,C=(f||h).h,k=(l||p).d;h&&(C=Math.max(C,h.h)),p&&(k=Math.max(k,p.d)),g-k-(C-y)<3*
N&&(y=3*N-g+k+C,v=.8*o-(g-k),v>0&&(g+=v,y-=v)),g=Math.max(g,E.superscriptshift),y=
Math.max(y,E.subscriptshift),l&&r.Add(l,x+s.w+u,g),p&&r.Add(p,x+b-p.w,g),f&&r.Add
(f,x+s.w+u-b,-y),h&&r.Add(h,x-h.w,-y)}r.Clean(),this.SVGhandleColor(r),this.SVGsaveData
(r);var L=this.SVGdata;return L.dx=x,L.s=u,L.u=g,L.v=y,L.delta=b,r},SVGgetScripts
:function(e){var t,r,i=[],s=1,o=this.data.length,u=0;for(var a=0;a<4;a+=2){while(
s<o&&this.data[s].type!=="mprescripts"){for(var f=a;f<a+2;f++)this.data[s]&&this.
data[s].type!=="none"&&(i[f]||(i[f]=n.BBOX.G()),i[f].Add(this.data[s].toSVG().With
({x:u}))),s++;r=i[a]||{w:0},t=i[a+1]||{w:0},r.w=t.w=u=Math.max(r.w,t.w)}s++,u=0}for(
f=0;f<4;f++)i[f]&&(i[f].w+=e,i[f].Clean());return i}}),MathJax.Hub.Startup.signal
.Post("SVG mmultiscripts Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mmultiscripts.js"
)});