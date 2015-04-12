/*
 *  /MathJax/jax/output/HTML-CSS/autoload/menclose.js
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r="http://www.w3.org/2000/svg"
,i="urn:schemas-microsoft-com:vml",s="mjxvml";t.menclose.Augment({toHTML:function(
e){var r=this.getValues("notation","thickness","padding","mathcolor","color");r.color&&!
this.mathcolor&&(r.mathcolor=r.color),r.thickness==null&&(r.thickness=".075em"),r
.padding==null&&(r.padding=".2em"),e=this.HTMLcreateSpan(e);var i=this.HTMLgetMu(
e),s=this.HTMLgetScale(),o=n.length2em(r.padding,i,1/n.em)*s,u=n.length2em(r.thickness
,i,1/n.em)*s;u=Math.max(1/n.em,u);var f=n.Em(u)+" solid",l=n.createStack(e),c=n.createBox
(l);this.HTMLmeasureChild(0,c);var h=c.bbox.h+o+u,p=c.bbox.d+o+u,d=c.bbox.w+2*(o+
u),v=n.createFrame(l,h+p,0,d,u,"none");v.id="MathJax-frame-"+this.spanID,n.addBox
(l,v),l.insertBefore(v,c);var m=0,g=0,y=0,w=0,E=0,S=0,x,T,N,C,k;r.mathcolor?e.style
.color=r.mathcolor:r.mathcolor="black";var L=MathJax.Hub.SplitList(r.notation),A=
{};for(var O=0,M=L.length;O<M;O++)A[L[O]]=!0;A[t.NOTATION.UPDIAGONALARROW]&&(A[t.
NOTATION.UPDIAGONALSTRIKE]=!1);var _;for(var D in A){if(!A.hasOwnProperty(D)||!A[
D])continue;switch(D){case t.NOTATION.BOX:v.style.border=f,n.msieBorderWidthBug||
(m=g=w=y=u);break;case t.NOTATION.ROUNDEDBOX:n.useVML?(T||(T=this.HTMLvml(l,h,p,d
,u,r.mathcolor)),k=Math.floor(1e3*Math.min(d,h+p)-2*u),N=Math.floor(4e3*(d-2*u)),
C=Math.floor(4e3*(h+p-2*u)),this.HTMLvmlElement(T,"shape",{style:{width:this.HTMLpx
(d-2*u),height:this.HTMLpx(h+p-2*u),left:this.HTMLpx(u,.5),top:this.HTMLpx(u,.5)}
,path:"m "+k+",0 qx 0,"+k+" l 0,"+(C-k)+" qy "+k+","+C+" l "+(N-k)+","+C+" qx "+N+","+
(C-k)+" l "+N+","+k+" qy "+(N-k)+",0 x e",coordsize:N+","+C})):(x||(x=this.HTMLsvg
(l,h,p,d,u,r.mathcolor)),this.HTMLsvgElement(x.firstChild,"rect",{x:1,y:1,width:this
.HTMLpx(d-u)-1,height:this.HTMLpx(h+p-u)-1,rx:this.HTMLpx(Math.min(h+p,d)/4)}));break;
case t.NOTATION.CIRCLE:n.useVML?(T||(T=this.HTMLvml(l,h,p,d,u,r.mathcolor)),this.
HTMLvmlElement(T,"oval",{style:{width:this.HTMLpx(d-2*u),height:this.HTMLpx(h+p-2*
u),left:this.HTMLpx(u,.5),top:this.HTMLpx(u,.5)}})):(x||(x=this.HTMLsvg(l,h,p,d,u
,r.mathcolor)),this.HTMLsvgElement(x.firstChild,"ellipse",{rx:this.HTMLpx(d/2-u),
ry:this.HTMLpx((h+p)/2-u),cx:this.HTMLpx(d/2),cy:this.HTMLpx((h+p)/2)}));break;case t
.NOTATION.LEFT:v.style.borderLeft=f,n.msieBorderWidthBug||(w=u);break;case t.NOTATION
.ACTUARIAL:v.style.borderTop=f,n.msieBorderWidthBug||(m=u,v.bbox.w+=o-u);case t.NOTATION
.RIGHT:v.style.borderRight=f,n.msieBorderWidthBug||(y=u);break;case t.NOTATION.VERTICALSTRIKE
:_=n.createRule(l,h+p-u/2,0,u),n.addBox(l,_),n.placeBox(_,o+u+c.bbox.w/2,-p,!0);break;
case t.NOTATION.TOP:v.style.borderTop=f,n.msieBorderWidthBug||(m=u);break;case t.
NOTATION.BOTTOM:v.style.borderBottom=f,n.msieBorderWidthBug||(g=u);break;case t.NOTATION
.HORIZONTALSTRIKE:_=n.createRule(l,u,0,d-u/2),n.addBox(l,_),n.placeBox(_,0,(h+p)/2-
p,!0);break;case t.NOTATION.UPDIAGONALSTRIKE:n.useVML?(T||(T=this.HTMLvml(l,h,p,d
,u,r.mathcolor)),_=this.HTMLvmlElement(T,"line",{from:"0,"+this.HTMLpx(h+p-u),to:
this.HTMLpx(d)+",0"})):(x||(x=this.HTMLsvg(l,h,p,d,u,r.mathcolor)),this.HTMLsvgElement
(x.firstChild,"line",{x1:1,y1:this.HTMLpx(h+p-u),x2:this.HTMLpx(d-u),y2:this.HTMLpx
(u)}));break;case t.NOTATION.UPDIAGONALARROW:if(n.useVML)T||(T=this.HTMLvml(l,h,p
,d,u,r.mathcolor)),_=this.HTMLvmlElement(T,"line",{from:"0,"+this.HTMLpx(h+p-u),to
:this.HTMLpx(d)+","+this.HTMLpx(u)}),this.HTMLvmlElement(_,"stroke",{endarrow:"classic"
});else{x||(x=this.HTMLsvg(l,h,p,d,u,r.mathcolor));var P=Math.sqrt(d*d+(h+p)*(h+p
)),H=1/P*10*this.scale/n.em*u/.075;N=d*H,C=(h+p)*H;var B=d-u/2,j=u/2;j+C-.4*N<0&&
(j=.4*N-C),this.HTMLsvgElement(x.firstChild,"line",{x1:1,y1:this.HTMLpx(h+p-u),x2
:this.HTMLpx(B-.7*N),y2:this.HTMLpx(j+.7*C)}),this.HTMLsvgElement(x.firstChild,"polygon"
,{points:this.HTMLpx(B)+","+this.HTMLpx(j)+" "+this.HTMLpx(B-N-.4*C)+","+this.HTMLpx
(j+C-.4*N)+" "+this.HTMLpx(B-.7*N)+","+this.HTMLpx(j+.7*C)+" "+this.HTMLpx(B-N+.4*
C)+","+this.HTMLpx(j+C+.4*N)+" "+this.HTMLpx(B)+","+this.HTMLpx(j),fill:r.mathcolor
,stroke:"none"})}break;case t.NOTATION.DOWNDIAGONALSTRIKE:n.useVML?(T||(T=this.HTMLvml
(l,h,p,d,u,r.mathcolor)),this.HTMLvmlElement(T,"line",{from:"0,0",to:this.HTMLpx(
d)+","+this.HTMLpx(h+p-u)})):(x||(x=this.HTMLsvg(l,h,p,d,u,r.mathcolor)),this.HTMLsvgElement
(x.firstChild,"line",{x1:1,y1:this.HTMLpx(u),x2:this.HTMLpx(d-u),y2:this.HTMLpx(h+
p-u)}));break;case t.NOTATION.PHASORANGLE:d-=2*o,o=(h+p)/2,d+=o,n.useVML?(T||(T=this
.HTMLvml(l,h,p,d,u,r.mathcolor)),this.HTMLvmlElement(T,"shape",{style:{width:this
.HTMLpx(d),height:this.HTMLpx(h+p)},path:"m "+this.HTMLpt(o+u/2,u/2)+" l "+this.HTMLpt
(u/2,h+p-u)+" "+this.HTMLpt(d-u/2,h+p-u)+" e",coordsize:this.HTMLpt(d,h+p)})):(x||
(x=this.HTMLsvg(l,h,p,d,u,r.mathcolor)),this.HTMLsvgElement(x.firstChild,"path",{
d:"M "+this.HTMLpx(o)+",1L 1,"+this.HTMLpx(h+p-u)+" L "+this.HTMLpx(d)+","+this.HTMLpx
(h+p-u)}),n.placeBox(x.parentNode,0,-p,!0));break;case t.NOTATION.MADRUWB:v.style
.borderBottom=f,v.style.borderRight=f,n.msieBorderWidthBug||(g=y=u);break;case t.
NOTATION.RADICAL:n.useVML?(T||(T=this.HTMLvml(l,h,p,d,u,r.mathcolor)),this.HTMLvmlElement
(T,"shape",{style:{width:this.HTMLpx(d),height:this.HTMLpx(h+p)},path:"m "+this.HTMLpt
(u/2,.6*(h+p))+" l "+this.HTMLpt(o,h+p-u)+" "+this.HTMLpt(2*o,u/2)+" "+this.HTMLpt
(d,u/2)+" e",coordsize:this.HTMLpt(d,h+p)}),E=o):(x||(x=this.HTMLsvg(l,h,p,d,u,r.
mathcolor)),this.HTMLsvgElement(x.firstChild,"path",{d:"M 1,"+this.HTMLpx(.6*(h+p
))+" L "+this.HTMLpx(o)+","+this.HTMLpx(h+p)+" L "+this.HTMLpx(2*o)+",1 L "+this.
HTMLpx(d)+",1"}),n.placeBox(x.parentNode,0,o/2-p,!0),E=o,S=u);break;case t.NOTATION
.LONGDIV:n.useVML?(T||(T=this.HTMLvml(l,h,p,d,u,r.mathcolor)),this.HTMLvmlElement
(T,"line",{from:"0,"+this.HTMLpx(u/2),to:this.HTMLpx(d-u)+","+this.HTMLpx(u/2)}),
this.HTMLvmlElement(T,"arc",{style:{width:this.HTMLpx(2*o),height:this.HTMLpx(h+p-2*
u),left:this.HTMLpx(-o),top:this.HTMLpx(u)},startangle:"10",endangle:"170"}),E=o)
:(x||(x=this.HTMLsvg(l,h,p,d,u,r.mathcolor)),this.HTMLsvgElement(x.firstChild,"path"
,{d:"M "+this.HTMLpx(d)+",1 L 1,1 a"+this.HTMLpx(o)+","+this.HTMLpx((h+p)/2-u)+" 0 0,1 1,"+
this.HTMLpx(h+p-2*u)}),n.placeBox(x.parentNode,0,u-p,!0),E=o,S=u)}}return v.style
.width=n.Em(d-w-y),v.style.height=n.Em(h+p-m-g),n.placeBox(v,0,S-p,!0),n.placeBox
(c,E+o+u,0),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLpx:function(e)
{return e*n.em},HTMLpt:function(e,t){return Math.floor(1e3*e)+","+Math.floor(1e3*
t)},HTMLhandleColor:function(e){var n=document.getElementById("MathJax-frame-"+this
.spanID);if(n){var r=this.getValues("mathbackground","background");this.style&&e.
style.backgroundColor&&(r.mathbackground=e.style.backgroundColor,e.style.backgroundColor=""
),r.background&&!this.mathbackground&&(r.mathbackground=r.background),r.mathbackground&&
r.mathbackground!==t.COLOR.TRANSPARENT&&(n.style.backgroundColor=r.mathbackground
)}else this.SUPER(arguments).HTMLhandleColor.call(this,e)},HTMLsvg:function(e,t,i
,s,o,u){var a=document.createElementNS(r,"svg");a.style&&(a.style.width=n.Em(s),a
.style.height=n.Em(t+i));var f=n.createBox(e);return f.appendChild(a),n.placeBox(
f,0,-i,!0),this.HTMLsvgElement(a,"g",{fill:"none",stroke:u,"stroke-width":o*n.em}
),a},HTMLsvgElement:function(e,t,n){var i=document.createElementNS(r,t);i.isMathJax=!0
;if(n)for(var s in n)n.hasOwnProperty(s)&&i.setAttributeNS(null,s,n[s].toString()
);return e.appendChild(i),i},HTMLvml:function(e,t,r,i,s,o){var u=n.createFrame(e,
t+r,0,i,0,"none");return n.addBox(e,u),n.placeBox(u,0,-r,!0),this.constructor.VMLcolor=
o,this.constructor.VMLthickness=this.HTMLpx(s),u},HTMLvmlElement:function(e,t,r){
var i=n.addElement(e,s+":"+t,{isMathJax:!0});return i.style.position="absolute",i
.style.left=i.style.top=0,MathJax.Hub.Insert(i,r),r.fillcolor||(i.fillcolor="none"
),r.strokecolor||(i.strokecolor=this.constructor.VMLcolor),r.strokeweight||(i.strokeweight=
this.constructor.VMLthickness),i}}),MathJax.Hub.Browser.Select({MSIE:function(e){
(document.documentMode||0)<9&&(t.menclose.Augment({HTMLpx:function(e,t){return e*
n.em+(t||0)+"px"}}),n.useVML=!0,document.namespaces[s]||(document.documentMode&&document
.documentMode===8?document.namespaces.add(s,i,"#default#VML"):(document.namespaces
.add(s,i),document.createStyleSheet().addRule(s+"\\: *","{behavior: url(#default#VML)}"
))))}}),MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready"),MathJax.Ajax.loadComplete
(n.autoloadDir+"/menclose.js")});