/*
 *  /MathJax/jax/output/SVG/autoload/menclose.js
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
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX;r.ELLIPSE=r.Subclass({type:"ellipse"
,removeable:!1,Init:function(e,t,n,r,i,s){s==null&&(s={}),s.fill="none",i&&(s.stroke=
i),s["stroke-width"]=r.toFixed(2).replace(/\.?0+$/,""),s.cx=Math.floor(n/2),s.cy=
Math.floor((e+t)/2-t),s.rx=Math.floor((n-r)/2),s.ry=Math.floor((e+t-r)/2),this.SUPER
(arguments).Init.call(this,s),this.w=this.r=n,this.h=this.H=e,this.d=this.D=t,this
.l=0}}),r.DLINE=r.Subclass({type:"line",removeable:!1,Init:function(e,t,n,r,i,s,o
){o==null&&(o={}),o.fill="none",i&&(o.stroke=i),o["stroke-width"]=r.toFixed(2).replace
(/\.?0+$/,""),s=="up"?(o.x1=Math.floor(r/2),o.y1=Math.floor(r/2-t),o.x2=Math.floor
(n-r/2),o.y2=Math.floor(e-r/2)):(o.x1=Math.floor(r/2),o.y1=Math.floor(e-r/2),o.x2=
Math.floor(n-r/2),o.y2=Math.floor(r/2-t)),this.SUPER(arguments).Init.call(this,o)
,this.w=this.r=n,this.h=this.H=e,this.d=this.D=t,this.l=0}}),r.FPOLY=r.Subclass({
type:"polygon",removeable:!1,Init:function(e,t,n){n==null&&(n={}),t&&(n.fill=t);var r=
[],i=1e8,s=i,o=-i,u=o;for(var a=0,f=e.length;a<f;a++){var l=e[a][0],c=e[a][1];l>o&&
(o=l),l<i&&(i=l),c>u&&(u=c),c<s&&(s=c),r.push(Math.floor(l)+","+Math.floor(c))}n.
points=r.join(" "),this.SUPER(arguments).Init.call(this,n),this.w=this.r=o,this.h=
this.H=u,this.d=this.D=-s,this.l=-i}}),r.PPATH=r.Subclass({type:"path",removeable
:!1,Init:function(e,t,n,r,i,s,o){o==null&&(o={}),o.fill="none",s&&(o.stroke=s),o["stroke-width"
]=i.toFixed(2).replace(/\.?0+$/,""),o.d=r,this.SUPER(arguments).Init.call(this,o)
,this.w=this.r=n,this.h=this.H=e+t,this.d=this.D=this.l=0,this.y=-t}}),t.menclose
.Augment({toSVG:function(e,i){this.SVGgetStyles();var s=this.SVG(),o=this.SVGgetScale
(s);this.SVGhandleSpace(s);var u=this.SVGdataStretched(0,e,i),f=this.getValues("notation"
,"thickness","padding","mathcolor","color");f.color&&!this.mathcolor&&(f.mathcolor=
f.color),f.thickness==null&&(f.thickness=".075em"),f.padding==null&&(f.padding=".2em"
);var l=this.SVGgetMu(s),c=n.length2em(f.padding,l,1/n.em)*o,h=n.length2em(f.thickness
,l,1/n.em);h=Math.max(1/n.em,h);var p=u.h+c+h,v=u.d+c+h,m=u.w+2*(c+h),g=0,y,w,E,S
,x=[!1,!1,!1,!1];f.mathcolor||(f.mathcolor="black");var T=MathJax.Hub.SplitList(f
.notation),N={};for(E=0,S=T.length;E<S;E++)N[T[E]]=!0;N[t.NOTATION.UPDIAGONALARROW
]&&(N[t.NOTATION.UPDIAGONALSTRIKE]=!1);for(var C in N){if(!N.hasOwnProperty(C)||!
N[C])continue;switch(C){case t.NOTATION.BOX:x=[!0,!0,!0,!0];break;case t.NOTATION
.ROUNDEDBOX:s.Add(r.FRAME(p,v,m,h,"solid",f.mathcolor,{rx:Math.floor(Math.min(p+v-
h,m-h)/4)}));break;case t.NOTATION.CIRCLE:s.Add(r.ELLIPSE(p,v,m,h,f.mathcolor));break;
case t.NOTATION.ACTUARIAL:x[0]=!0;case t.NOTATION.RIGHT:x[1]=!0;break;case t.NOTATION
.LEFT:x[3]=!0;break;case t.NOTATION.TOP:x[0]=!0;break;case t.NOTATION.BOTTOM:x[2]=!0
;break;case t.NOTATION.VERTICALSTRIKE:s.Add(r.VLINE(p+v,h,"solid",f.mathcolor),(m-
h)/2,-v);break;case t.NOTATION.HORIZONTALSTRIKE:s.Add(r.HLINE(m,h,"solid",f.mathcolor
),0,(p+v-h)/2-v);break;case t.NOTATION.UPDIAGONALSTRIKE:s.Add(r.DLINE(p,v,m,h,f.mathcolor
,"up"));break;case t.NOTATION.UPDIAGONALARROW:var k=Math.sqrt(m*m+(p+v)*(p+v)),L=1/
k*10/n.em*h/.075;y=m*L,w=(p+v)*L;var A=.4*w;s.Add(r.DLINE(p-.5*w,v,m-.5*y,h,f.mathcolor
,"up")),s.Add(r.FPOLY([[A+y,w],[A-.4*w,.4*y],[A+.3*y,.3*w],[A+.4*w,-0.4*y],[A+y,w
]],f.mathcolor),m-y-A,p-w);break;case t.NOTATION.DOWNDIAGONALSTRIKE:s.Add(r.DLINE
(p,v,m,h,f.mathcolor,"down"));break;case t.NOTATION.PHASORANGLE:x[2]=!0,m-=2*c,c=
(p+v)/2,m+=c,s.Add(r.DLINE(p,v,c,h,f.mathcolor,"up"));break;case t.NOTATION.MADRUWB
:x[1]=x[2]=!0;break;case t.NOTATION.RADICAL:s.Add(r.PPATH(p,v,m,"M "+this.SVGxy(h/2
,.4*(p+v))+" L "+this.SVGxy(c,h/2)+" L "+this.SVGxy(2*c,p+v-h/2)+" L "+this.SVGxy
(m,p+v-h/2),h,f.mathcolor),0,h),g=c;break;case t.NOTATION.LONGDIV:s.Add(r.PPATH(p
,v,m,"M "+this.SVGxy(h/2,h/2)+" a "+this.SVGxy(c,(p+v)/2-2*h)+" 0 0,1 "+this.SVGxy
(h/2,p+v-h)+" L "+this.SVGxy(m,p+v-h/2),h,f.mathcolor),0,h/2),g=c}}var O=[["H",m,0
,p-h],["V",p+v,m-h,-v],["H",m,0,-v],["V",p+v,0,-v]];for(E=0;E<4;E++)if(x[E]){var M=
O[E];s.Add(r[M[0]+"LINE"](M[1],h,"solid",f.mathcolor),M[2],M[3])}return s.Add(u,g+
c+h,0,!1,!0),s.Clean(),this.SVGhandleSpace(s),this.SVGhandleColor(s),this.SVGsaveData
(s),s},SVGxy:function(e,t){return Math.floor(e)+","+Math.floor(t)}}),MathJax.Hub.
Startup.signal.Post("SVG menclose Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/menclose.js"
)});