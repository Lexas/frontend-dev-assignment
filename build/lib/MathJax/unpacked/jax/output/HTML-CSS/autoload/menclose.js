/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/menclose.js
 *  
 *  Implements the HTML-CSS output for <menclose> elements.
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r="http://www.w3.org/2000/svg"
,i="urn:schemas-microsoft-com:vml",s="mjxvml";t.menclose.Augment({toHTML:function(
e){var r=this.getValues("notation","thickness","padding","mathcolor","color");r.color&&!
this.mathcolor&&(r.mathcolor=r.color),r.thickness==null&&(r.thickness=".075em"),r
.padding==null&&(r.padding=".2em"),e=this.HTMLcreateSpan(e);var i=this.HTMLgetMu(
e),s=this.HTMLgetScale(),o=n.length2em(r.padding,i,1/n.em)*s,u=n.length2em(r.thickness
,i,1/n.em)*s;u=Math.max(1/n.em,u);var a=n.Em(u)+" solid",f=n.createStack(e),l=n.createBox
(f);this.HTMLmeasureChild(0,l);var c=l.bbox.h+o+u,h=l.bbox.d+o+u,p=l.bbox.w+2*(o+
u),d=n.createFrame(f,c+h,0,p,u,"none");d.id="MathJax-frame-"+this.spanID,n.addBox
(f,d),f.insertBefore(d,l);var v=0,m=0,g=0,y=0,b=0,w=0,E,S,x,T,N;r.mathcolor?e.style
.color=r.mathcolor:r.mathcolor="black";var C=MathJax.Hub.SplitList(r.notation),k=
{};for(var L=0,A=C.length;L<A;L++)k[C[L]]=!0;k[t.NOTATION.UPDIAGONALARROW]&&(k[t.
NOTATION.UPDIAGONALSTRIKE]=!1);var O;for(var M in k){if(!k.hasOwnProperty(M)||!k[
M])continue;switch(M){case t.NOTATION.BOX:d.style.border=a,n.msieBorderWidthBug||
(v=m=y=g=u);break;case t.NOTATION.ROUNDEDBOX:n.useVML?(S||(S=this.HTMLvml(f,c,h,p
,u,r.mathcolor)),N=Math.floor(1e3*Math.min(p,c+h)-2*u),x=Math.floor(4e3*(p-2*u)),
T=Math.floor(4e3*(c+h-2*u)),this.HTMLvmlElement(S,"shape",{style:{width:this.HTMLpx
(p-2*u),height:this.HTMLpx(c+h-2*u),left:this.HTMLpx(u,.5),top:this.HTMLpx(u,.5)}
,path:"m "+N+",0 qx 0,"+N+" l 0,"+(T-N)+" qy "+N+","+T+" "+"l "+(x-N)+","+T+" qx "+
x+","+(T-N)+" l "+x+","+N+" qy "+(x-N)+",0 x e",coordsize:x+","+T})):(E||(E=this.
HTMLsvg(f,c,h,p,u,r.mathcolor)),this.HTMLsvgElement(E.firstChild,"rect",{x:1,y:1,
width:this.HTMLpx(p-u)-1,height:this.HTMLpx(c+h-u)-1,rx:this.HTMLpx(Math.min(c+h,
p)/4)}));break;case t.NOTATION.CIRCLE:n.useVML?(S||(S=this.HTMLvml(f,c,h,p,u,r.mathcolor
)),this.HTMLvmlElement(S,"oval",{style:{width:this.HTMLpx(p-2*u),height:this.HTMLpx
(c+h-2*u),left:this.HTMLpx(u,.5),top:this.HTMLpx(u,.5)}})):(E||(E=this.HTMLsvg(f,
c,h,p,u,r.mathcolor)),this.HTMLsvgElement(E.firstChild,"ellipse",{rx:this.HTMLpx(
p/2-u),ry:this.HTMLpx((c+h)/2-u),cx:this.HTMLpx(p/2),cy:this.HTMLpx((c+h)/2)}));break;
case t.NOTATION.LEFT:d.style.borderLeft=a,n.msieBorderWidthBug||(y=u);break;case t
.NOTATION.ACTUARIAL:d.style.borderTop=a,n.msieBorderWidthBug||(v=u,d.bbox.w+=o-u)
;case t.NOTATION.RIGHT:d.style.borderRight=a,n.msieBorderWidthBug||(g=u);break;case t
.NOTATION.VERTICALSTRIKE:O=n.createRule(f,c+h-u/2,0,u),n.addBox(f,O),n.placeBox(O
,o+u+l.bbox.w/2,-h,!0);break;case t.NOTATION.TOP:d.style.borderTop=a,n.msieBorderWidthBug||
(v=u);break;case t.NOTATION.BOTTOM:d.style.borderBottom=a,n.msieBorderWidthBug||(
m=u);break;case t.NOTATION.HORIZONTALSTRIKE:O=n.createRule(f,u,0,p-u/2),n.addBox(
f,O),n.placeBox(O,0,(c+h)/2-h,!0);break;case t.NOTATION.UPDIAGONALSTRIKE:n.useVML?
(S||(S=this.HTMLvml(f,c,h,p,u,r.mathcolor)),O=this.HTMLvmlElement(S,"line",{from:"0,"+
this.HTMLpx(c+h-u),to:this.HTMLpx(p)+",0"})):(E||(E=this.HTMLsvg(f,c,h,p,u,r.mathcolor
)),this.HTMLsvgElement(E.firstChild,"line",{x1:1,y1:this.HTMLpx(c+h-u),x2:this.HTMLpx
(p-u),y2:this.HTMLpx(u)}));break;case t.NOTATION.UPDIAGONALARROW:if(n.useVML)S||(
S=this.HTMLvml(f,c,h,p,u,r.mathcolor)),O=this.HTMLvmlElement(S,"line",{from:"0,"+
this.HTMLpx(c+h-u),to:this.HTMLpx(p)+","+this.HTMLpx(u)}),this.HTMLvmlElement(O,"stroke"
,{endarrow:"classic"});else{E||(E=this.HTMLsvg(f,c,h,p,u,r.mathcolor));var _=Math
.sqrt(p*p+(c+h)*(c+h)),D=1/_*10*this.scale/n.em*u/.075;x=p*D,T=(c+h)*D;var P=p-u/2
,H=u/2;H+T-.4*x<0&&(H=.4*x-T),this.HTMLsvgElement(E.firstChild,"line",{x1:1,y1:this
.HTMLpx(c+h-u),x2:this.HTMLpx(P-.7*x),y2:this.HTMLpx(H+.7*T)}),this.HTMLsvgElement
(E.firstChild,"polygon",{points:this.HTMLpx(P)+","+this.HTMLpx(H)+" "+this.HTMLpx
(P-x-.4*T)+","+this.HTMLpx(H+T-.4*x)+" "+this.HTMLpx(P-.7*x)+","+this.HTMLpx(H+.7*
T)+" "+this.HTMLpx(P-x+.4*T)+","+this.HTMLpx(H+T+.4*x)+" "+this.HTMLpx(P)+","+this
.HTMLpx(H),fill:r.mathcolor,stroke:"none"})}break;case t.NOTATION.DOWNDIAGONALSTRIKE
:n.useVML?(S||(S=this.HTMLvml(f,c,h,p,u,r.mathcolor)),this.HTMLvmlElement(S,"line"
,{from:"0,0",to:this.HTMLpx(p)+","+this.HTMLpx(c+h-u)})):(E||(E=this.HTMLsvg(f,c,
h,p,u,r.mathcolor)),this.HTMLsvgElement(E.firstChild,"line",{x1:1,y1:this.HTMLpx(
u),x2:this.HTMLpx(p-u),y2:this.HTMLpx(c+h-u)}));break;case t.NOTATION.PHASORANGLE
:p-=2*o,o=(c+h)/2,p+=o,n.useVML?(S||(S=this.HTMLvml(f,c,h,p,u,r.mathcolor)),this.
HTMLvmlElement(S,"shape",{style:{width:this.HTMLpx(p),height:this.HTMLpx(c+h)},path
:"m "+this.HTMLpt(o+u/2,u/2)+" l "+this.HTMLpt(u/2,c+h-u)+" "+this.HTMLpt(p-u/2,c+
h-u)+" e",coordsize:this.HTMLpt(p,c+h)})):(E||(E=this.HTMLsvg(f,c,h,p,u,r.mathcolor
)),this.HTMLsvgElement(E.firstChild,"path",{d:"M "+this.HTMLpx(o)+",1"+"L 1,"+this
.HTMLpx(c+h-u)+" L "+this.HTMLpx(p)+","+this.HTMLpx(c+h-u)}),n.placeBox(E.parentNode
,0,-h,!0));break;case t.NOTATION.MADRUWB:d.style.borderBottom=a,d.style.borderRight=
a,n.msieBorderWidthBug||(m=g=u);break;case t.NOTATION.RADICAL:n.useVML?(S||(S=this
.HTMLvml(f,c,h,p,u,r.mathcolor)),this.HTMLvmlElement(S,"shape",{style:{width:this
.HTMLpx(p),height:this.HTMLpx(c+h)},path:"m "+this.HTMLpt(u/2,.6*(c+h))+" l "+this
.HTMLpt(o,c+h-u)+" "+this.HTMLpt(2*o,u/2)+" "+this.HTMLpt(p,u/2)+" e",coordsize:this
.HTMLpt(p,c+h)}),b=o):(E||(E=this.HTMLsvg(f,c,h,p,u,r.mathcolor)),this.HTMLsvgElement
(E.firstChild,"path",{d:"M 1,"+this.HTMLpx(.6*(c+h))+" L "+this.HTMLpx(o)+","+this
.HTMLpx(c+h)+" L "+this.HTMLpx(2*o)+",1 L "+this.HTMLpx(p)+",1"}),n.placeBox(E.parentNode
,0,o/2-h,!0),b=o,w=u);break;case t.NOTATION.LONGDIV:n.useVML?(S||(S=this.HTMLvml(
f,c,h,p,u,r.mathcolor)),this.HTMLvmlElement(S,"line",{from:"0,"+this.HTMLpx(u/2),
to:this.HTMLpx(p-u)+","+this.HTMLpx(u/2)}),this.HTMLvmlElement(S,"arc",{style:{width
:this.HTMLpx(2*o),height:this.HTMLpx(c+h-2*u),left:this.HTMLpx(-o),top:this.HTMLpx
(u)},startangle:"10",endangle:"170"}),b=o):(E||(E=this.HTMLsvg(f,c,h,p,u,r.mathcolor
)),this.HTMLsvgElement(E.firstChild,"path",{d:"M "+this.HTMLpx(p)+",1 L 1,1 "+"a"+
this.HTMLpx(o)+","+this.HTMLpx((c+h)/2-u)+" 0 0,1 1,"+this.HTMLpx(c+h-2*u)}),n.placeBox
(E.parentNode,0,u-h,!0),b=o,w=u)}}return d.style.width=n.Em(p-y-g),d.style.height=
n.Em(c+h-v-m),n.placeBox(d,0,w-h,!0),n.placeBox(l,b+o+u,0),this.HTMLhandleSpace(e
),this.HTMLhandleColor(e),e},HTMLpx:function(e){return e*n.em},HTMLpt:function(e,
t){return Math.floor(1e3*e)+","+Math.floor(1e3*t)},HTMLhandleColor:function(e){var n=
document.getElementById("MathJax-frame-"+this.spanID);if(n){var r=this.getValues("mathbackground"
,"background");this.style&&e.style.backgroundColor&&(r.mathbackground=e.style.backgroundColor
,e.style.backgroundColor=""),r.background&&!this.mathbackground&&(r.mathbackground=
r.background),r.mathbackground&&r.mathbackground!==t.COLOR.TRANSPARENT&&(n.style.
backgroundColor=r.mathbackground)}else this.SUPER(arguments).HTMLhandleColor.call
(this,e)},HTMLsvg:function(e,t,i,s,o,u){var a=document.createElementNS(r,"svg");a
.style&&(a.style.width=n.Em(s),a.style.height=n.Em(t+i));var f=n.createBox(e);return f
.appendChild(a),n.placeBox(f,0,-i,!0),this.HTMLsvgElement(a,"g",{fill:"none",stroke
:u,"stroke-width":o*n.em}),a},HTMLsvgElement:function(e,t,n){var i=document.createElementNS
(r,t);i.isMathJax=!0;if(n)for(var s in n)n.hasOwnProperty(s)&&i.setAttributeNS(null
,s,n[s].toString());return e.appendChild(i),i},HTMLvml:function(e,t,r,i,s,o){var u=
n.createFrame(e,t+r,0,i,0,"none");return n.addBox(e,u),n.placeBox(u,0,-r,!0),this
.constructor.VMLcolor=o,this.constructor.VMLthickness=this.HTMLpx(s),u},HTMLvmlElement
:function(e,t,r){var i=n.addElement(e,s+":"+t,{isMathJax:!0});return i.style.position="absolute"
,i.style.left=i.style.top=0,MathJax.Hub.Insert(i,r),r.fillcolor||(i.fillcolor="none"
),r.strokecolor||(i.strokecolor=this.constructor.VMLcolor),r.strokeweight||(i.strokeweight=
this.constructor.VMLthickness),i}}),MathJax.Hub.Browser.Select({MSIE:function(e){
(document.documentMode||0)<9&&(t.menclose.Augment({HTMLpx:function(e,t){return e*
n.em+(t||0)+"px"}}),n.useVML=!0,document.namespaces[s]||(document.documentMode&&document
.documentMode===8?document.namespaces.add(s,i,"#default#VML"):(document.namespaces
.add(s,i),document.createStyleSheet().addRule(s+"\\: *","{behavior: url(#default#VML)}"
))))}}),MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready"),MathJax.Ajax.loadComplete
(n.autoloadDir+"/menclose.js")});