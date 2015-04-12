/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/menclose.js
 *  
 *  Implements the SVG output for <menclose> elements.
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
(s);this.SVGhandleSpace(s);var u=this.SVGdataStretched(0,e,i),a=this.getValues("notation"
,"thickness","padding","mathcolor","color");a.color&&!this.mathcolor&&(a.mathcolor=
a.color),a.thickness==null&&(a.thickness=".075em"),a.padding==null&&(a.padding=".2em"
);var f=this.SVGgetMu(s),l=n.length2em(a.padding,f,1/n.em)*o,c=n.length2em(a.thickness
,f,1/n.em);c=Math.max(1/n.em,c);var h=u.h+l+c,p=u.d+l+c,d=u.w+2*(l+c),v=0,m,g,y,b
,w=[!1,!1,!1,!1];a.mathcolor||(a.mathcolor="black");var E=MathJax.Hub.SplitList(a
.notation),S={};for(y=0,b=E.length;y<b;y++)S[E[y]]=!0;S[t.NOTATION.UPDIAGONALARROW
]&&(S[t.NOTATION.UPDIAGONALSTRIKE]=!1);for(var x in S){if(!S.hasOwnProperty(x)||!
S[x])continue;switch(x){case t.NOTATION.BOX:w=[!0,!0,!0,!0];break;case t.NOTATION
.ROUNDEDBOX:s.Add(r.FRAME(h,p,d,c,"solid",a.mathcolor,{rx:Math.floor(Math.min(h+p-
c,d-c)/4)}));break;case t.NOTATION.CIRCLE:s.Add(r.ELLIPSE(h,p,d,c,a.mathcolor));break;
case t.NOTATION.ACTUARIAL:w[0]=!0;case t.NOTATION.RIGHT:w[1]=!0;break;case t.NOTATION
.LEFT:w[3]=!0;break;case t.NOTATION.TOP:w[0]=!0;break;case t.NOTATION.BOTTOM:w[2]=!0
;break;case t.NOTATION.VERTICALSTRIKE:s.Add(r.VLINE(h+p,c,"solid",a.mathcolor),(d-
c)/2,-p);break;case t.NOTATION.HORIZONTALSTRIKE:s.Add(r.HLINE(d,c,"solid",a.mathcolor
),0,(h+p-c)/2-p);break;case t.NOTATION.UPDIAGONALSTRIKE:s.Add(r.DLINE(h,p,d,c,a.mathcolor
,"up"));break;case t.NOTATION.UPDIAGONALARROW:var T=Math.sqrt(d*d+(h+p)*(h+p)),N=1/
T*10/n.em*c/.075;m=d*N,g=(h+p)*N;var C=.4*g;s.Add(r.DLINE(h-.5*g,p,d-.5*m,c,a.mathcolor
,"up")),s.Add(r.FPOLY([[C+m,g],[C-.4*g,.4*m],[C+.3*m,.3*g],[C+.4*g,-0.4*m],[C+m,g
]],a.mathcolor),d-m-C,h-g);break;case t.NOTATION.DOWNDIAGONALSTRIKE:s.Add(r.DLINE
(h,p,d,c,a.mathcolor,"down"));break;case t.NOTATION.PHASORANGLE:w[2]=!0,d-=2*l,l=
(h+p)/2,d+=l,s.Add(r.DLINE(h,p,l,c,a.mathcolor,"up"));break;case t.NOTATION.MADRUWB
:w[1]=w[2]=!0;break;case t.NOTATION.RADICAL:s.Add(r.PPATH(h,p,d,"M "+this.SVGxy(c/2
,.4*(h+p))+" L "+this.SVGxy(l,c/2)+" L "+this.SVGxy(2*l,h+p-c/2)+" L "+this.SVGxy
(d,h+p-c/2),c,a.mathcolor),0,c),v=l;break;case t.NOTATION.LONGDIV:s.Add(r.PPATH(h
,p,d,"M "+this.SVGxy(c/2,c/2)+" a "+this.SVGxy(l,(h+p)/2-2*c)+" 0 0,1 "+this.SVGxy
(c/2,h+p-c)+" L "+this.SVGxy(d,h+p-c/2),c,a.mathcolor),0,c/2),v=l}}var k=[["H",d,0
,h-c],["V",h+p,d-c,-p],["H",d,0,-p],["V",h+p,0,-p]];for(y=0;y<4;y++)if(w[y]){var L=
k[y];s.Add(r[L[0]+"LINE"](L[1],c,"solid",a.mathcolor),L[2],L[3])}return s.Add(u,v+
l+c,0,!1,!0),s.Clean(),this.SVGhandleSpace(s),this.SVGhandleColor(s),this.SVGsaveData
(s),s},SVGxy:function(e,t){return Math.floor(e)+","+Math.floor(t)}}),MathJax.Hub.
Startup.signal.Post("SVG menclose Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/menclose.js"
)});