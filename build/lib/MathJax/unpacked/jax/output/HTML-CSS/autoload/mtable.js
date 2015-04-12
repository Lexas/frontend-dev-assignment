/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/mtable.js
 *  
 *  Implements the HTML-CSS output for <mtable> elements.
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.mtable.Augment({toHTML:function(
e){e=this.HTMLcreateSpan(e);if(this.data.length===0)return e;var r=this.getValues
("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns"
,"equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width"
,"side","minlabelspacing"),i=r.width.match(/%$/),s=n.createStack(e),o=this.HTMLgetScale
(),u=this.HTMLgetMu(e),a=-1,f=[],l=[],c=[],h=[],p=[],d,v,m=-1,g,y,b,w,E,S,x=[],T,
N=n.FONTDATA.lineH*o*r.useHeight,C=n.FONTDATA.lineD*o*r.useHeight;for(d=0,g=this.
data.length;d<g;d++){w=this.data[d],b=w.type==="mlabeledtr"?a:0,h[d]=[],f[d]=N,l[
d]=C;for(v=b,y=w.data.length+b;v<y;v++)c[v]==null&&(v>m&&(m=v),p[v]=n.createStack
(n.createBox(s)),c[v]=-n.BIGDIMEN),h[d][v]=n.createBox(p[v]),x.push(w.data[v-b].toHTML
(h[d][v]))}n.MeasureSpans(x);for(d=0,g=this.data.length;d<g;d++){w=this.data[d],b=
w.type==="mlabeledtr"?a:0;for(v=b,y=w.data.length+b;v<y;v++){E=w.data[v-b],E.isMultiline&&
(h[d][v].style.width="100%");if(E.isEmbellished()){S=E.CoreMO();var k=S.Get("minsize"
,!0);if(k){var L=S.HTMLspanElement().bbox;S.HTMLcanStretch("Vertical")?(T=L.h+L.d
,T&&(k=n.length2em(k,u,T),k*L.h/T>f[d]&&(f[d]=k*L.h/T),k*L.d/T>l[d]&&(l[d]=k*L.d/
T))):S.HTMLcanStretch("Horizontal")&&(k=n.length2em(k,u,L.w),k>c[v]&&(c[v]=k))}}h
[d][v].bbox.h>f[d]&&(f[d]=h[d][v].bbox.h),h[d][v].bbox.d>l[d]&&(l[d]=h[d][v].bbox
.d),h[d][v].bbox.w>c[v]&&(c[v]=h[d][v].bbox.w)}}var A=MathJax.Hub.SplitList,O=A(r
.columnspacing),M=A(r.rowspacing),_=A(r.columnalign),D=A(r.rowalign),P=A(r.columnlines
),H=A(r.rowlines),B=A(r.columnwidth),j=[];for(d=0,g=O.length;d<g;d++)O[d]=n.length2em
(O[d],u);for(d=0,g=M.length;d<g;d++)M[d]=n.length2em(M[d],u);while(O.length<m)O.push
(O[O.length-1]);while(_.length<=m)_.push(_[_.length-1]);while(P.length<m)P.push(P
[P.length-1]);while(B.length<=m)B.push(B[B.length-1]);while(M.length<h.length)M.push
(M[M.length-1]);while(D.length<=h.length)D.push(D[D.length-1]);while(H.length<h.length
)H.push(H[H.length-1]);p[a]&&(_[a]=r.side.substr(0,1)==="l"?"left":"right",O[a]=-
c[a]);for(d=0,g=h.length;d<g;d++){w=this.data[d],j[d]=[],w.rowalign&&(D[d]=w.rowalign
);if(w.columnalign){j[d]=A(w.columnalign);while(j[d].length<=m)j[d].push(j[d][j[d
].length-1])}}if(r.equalrows){var F=Math.max.apply(Math,f),I=Math.max.apply(Math,
l);for(d=0,g=h.length;d<g;d++)b=(F+I-(f[d]+l[d]))/2,f[d]+=b,l[d]+=b}T=f[0]+l[h.length-1
];for(d=0,g=h.length-1;d<g;d++)T+=Math.max(0,l[d]+f[d+1]+M[d]);var q=0,R=0,U,z=T;
if(r.frame!=="none"||(r.columnlines+r.rowlines).match(/solid|dashed/)){var W=A(r.
framespacing);W.length!=2&&(W=A(this.defaults.framespacing)),q=n.length2em(W[0],u
),R=n.length2em(W[1],u),z=T+2*R}var X,V,$="";typeof r.align!="string"&&(r.align=String
(r.align)),r.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)?($=RegExp
.$3||"",r.align=RegExp.$1):r.align=this.defaults.align;if($!==""){$=parseInt($),$<0&&
($=h.length+1+$),$<1?$=1:$>h.length&&($=h.length),X=0,V=-(T+R)+f[0];for(d=0,g=$-1
;d<g;d++){var J=Math.max(0,l[d]+f[d+1]+M[d]);X+=J,V+=J}}else X={top:-(f[0]+R),bottom
:T+R-f[0],center:T/2-f[0],baseline:T/2-f[0],axis:T/2+n.TeX.axis_height*o-f[0]}[r.
align],V={top:-(T+2*R),bottom:0,center:-(T/2+R),baseline:-(T/2+R),axis:n.TeX.axis_height*
o-T/2-R}[r.align];var K,Q=0,G=0,Y=0,Z=0,et=0,tt=[],nt=[],rt=1;if(r.equalcolumns&&
r.width!=="auto")if(i){K=(100/(m+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(d=0,
g=Math.min(m+1,B.length);d<g;d++)B[d]=K;K=0,Q=1,et=m+1;for(d=0,g=Math.min(m+1,O.length
);d<g;d++)K+=O[d]}else{K=n.length2em(r.width,u);for(d=0,g=Math.min(m+1,O.length);
d<g;d++)K-=O[d];K/=m+1;for(d=0,g=Math.min(m+1,B.length);d<g;d++)c[d]=K}else{for(d=0
,g=Math.min(m+1,B.length);d<g;d++)B[d]==="auto"?G+=c[d]:B[d]==="fit"?(nt[et]=d,et++
,G+=c[d]):B[d].match(/%$/)?(tt[Z]=d,Z++,Y+=c[d],Q+=n.length2em(B[d],u,1)):(c[d]=n
.length2em(B[d],u),G+=c[d]);if(i){K=0;for(d=0,g=Math.min(m,O.length);d<g;d++)K+=O
[d];Q>.98&&(rt=.98/Q,Q=.98)}else{if(r.width==="auto")Q>.98?(rt=Y/(G+Y),K=G+Y):K=G/
(1-Q);else{K=n.length2em(r.width,u);for(d=0,g=Math.min(m+1,O.length);d<g;d++)K-=O
[d]}for(d=0,g=tt.length;d<g;d++)c[tt[d]]=n.length2em(B[tt[d]],u,K*rt),G+=c[tt[d]]
;if(Math.abs(K-G)>.01)if(et&&K>G){K=(K-G)/et;for(d=0,g=nt.length;d<g;d++)c[nt[d]]+=
K}else{K/=G;for(v=0;v<=m;v++)c[v]*=K}if(r.equalcolumns){var it=Math.max.apply(Math
,c);for(v=0;v<=m;v++)c[v]=it}}}var st=X,ot,ut,at;b=p[a]?a:0;for(v=b;v<=m;v++){for(
d=0,g=h.length;d<g;d++){if(h[d][v]){b=this.data[d].type==="mlabeledtr"?a:0,E=this
.data[d].data[v-b];if(E.HTMLcanStretch("Horizontal"))h[d][v].bbox=E.HTMLstretchH(
p[v],c[v]).bbox;else if(E.HTMLcanStretch("Vertical")){S=E.CoreMO();var ft=S.symmetric
;S.symmetric=!1,h[d][v].bbox=E.HTMLstretchV(p[v],f[d],l[d]).bbox,h[d][v].HH=null,
h[d][v].bbox.h>f[d]&&(h[d][v].bbox.H=h[d][v].bbox.h,h[d][v].bbox.h=f[d]),h[d][v].
bbox.d>l[d]&&(h[d][v].bbox.D=h[d][v].bbox.d,h[d][v].bbox.d=l[d]),S.symmetric=ft}at=
E.rowalign||this.data[d].rowalign||D[d],ot={top:f[d]-h[d][v].bbox.h,bottom:h[d][v
].bbox.d-l[d],center:(f[d]-l[d]-(h[d][v].bbox.h-h[d][v].bbox.d))/2,baseline:0,axis
:0}[at]||0,at=E.columnalign||j[d][v]||_[v],n.alignBox(h[d][v],at,st+ot)}d<h.length-1&&
(st-=Math.max(0,l[d]+f[d+1]+M[d]))}st=X}if(i){var lt=n.createBox(s);lt.style.left=
lt.style.top=0,lt.style.right=n.Em(K+2*q),lt.style.display="inline-block",lt.style
.height="0px",n.msieRelativeWidthBug&&(lt=n.createBox(lt),lt.style.position="relative"
,lt.style.height="1em",lt.style.width="100%",lt.bbox=s.bbox);var ct=0,ht=q,pt,dt;
et?(pt=100*(1-Q)/et,dt=G/et):(pt=100*(1-Q)/(m+1),dt=G/(m+1));for(v=0;v<=m;v++){n.
placeBox(p[v].parentNode,0,0),p[v].style.position="relative",p[v].style.left=n.Em
(ht),p[v].style.width="100%",p[v].parentNode.parentNode.removeChild(p[v].parentNode
);var vt=n.createBox(lt);n.addBox(vt,p[v]),p[v]=vt;var mt=vt.style;mt.display="inline-block"
,mt.left=ct+"%";if(B[v].match(/%$/)){var gt=parseFloat(B[v])*rt;et===0?(mt.width=
pt+gt+"%",ct+=pt+gt,vt=n.createBox(vt),n.addBox(vt,p[v].firstChild),vt.style.left=0
,vt.style.right=n.Em(dt),ht-=dt):(mt.width=gt+"%",ct+=gt)}else B[v]==="fit"||et===0?
(mt.width=pt+"%",vt=n.createBox(vt),n.addBox(vt,p[v].firstChild),vt.style.left=0,
vt.style.right=n.Em(dt-c[v]),ht+=c[v]-dt,ct+=pt):(mt.width=n.Em(c[v]),ht+=c[v]);n
.msieRelativeWidthBug&&(n.addText(vt.firstChild,n.NBSP),vt.firstChild.style.position="relative"
),ht+=O[v],P[v]!=="none"&&v<m&&v!==a&&(ut=n.createBox(lt),ut.style.left=ct+"%",ut=
n.createRule(ut,z,0,1.25/n.em),ut.style.position="absolute",ut.bbox={h:z,d:0,w:0,
rw:1.25/n.em,lw:0},ut.parentNode.bbox=s.bbox,n.placeBox(ut,ht-O[v]/2,V,!0),ut.style
.borderStyle=P[v])}}else{var yt=q;for(v=0;v<=m;v++)p[v].bbox.width||n.setStackWidth
(p[v],c[v]),B[v]!=="auto"&&B[v]!=="fit"&&(p[v].bbox.width=c[v],p[v].bbox.isFixed=!0
),n.placeBox(p[v].parentNode,yt,0),yt+=c[v]+O[v],P[v]!=="none"&&v<m&&v!==a&&(ut=n
.createRule(s,z,0,1.25/n.em),n.addBox(s,ut),ut.bbox={h:z,d:0,w:0,rw:1.25/n.em,lw:0
},n.placeBox(ut,yt-O[v]/2,V,!0),ut.style.borderStyle=P[v])}s.bbox.d=-V,s.bbox.h=z+
V,n.setStackWidth(s,s.bbox.w+q),U=s.bbox.w;var bt;r.frame!=="none"&&(bt=n.createFrame
(s,z,0,U,1.25/n.em,r.frame),n.addBox(s,bt),n.placeBox(bt,0,V,!0),i&&(bt.style.width="100%"
)),st=X;for(d=0,g=h.length-1;d<g;d++){ot=Math.max(0,l[d]+f[d+1]+M[d]);if(H[d]!=="none"
){ut=n.createRule(s,1.25/n.em,0,U),n.addBox(s,ut),ut.bbox={h:1.25/n.em,d:0,w:U,rw
:U,lw:0},n.placeBox(ut,0,st-l[d]-(ot-l[d]-f[d+1])/2,!0);if(H[d]==="dashed"||i)ut.
style.borderTop=ut.style.height+" "+H[d],ut.style.height=0,ut.style.width=ut.style
.borderLeftWidth,ut.style.borderLeft="",i&&(ut.style.width="100%")}st-=ot}i&&(e.bbox
.width=r.width,s.style.width="100%");if(p[a]){var wt=s.bbox.w,Et=this.getValues("indentalignfirst"
,"indentshiftfirst","indentalign","indentshift");Et.indentalignfirst!==t.INDENTALIGN
.INDENTALIGN&&(Et.indentalign=Et.indentalignfirst),Et.indentalign===t.INDENTALIGN
.AUTO&&(Et.indentalign=this.displayAlign),Et.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&
(Et.indentshift=Et.indentshiftfirst),Et.indentshift==="auto"&&(Et.indentshift="0"
);var St=n.length2em(Et.indentshift,u,n.cwidth),xt=n.length2em(r.minlabelspacing,
u,n.cwidth);if(this.displayIndent!=="0"){var Tt=n.length2em(this.displayIndent,u,
n.cwidth);St+=Et.indentAlign===t.INDENTALIGN.RIGHT?-Tt:Tt}var Nt=n.createStack(e,!1
,"100%");n.addBox(Nt,s),n.alignBox(s,Et.indentalign,0,St),p[a].parentNode.parentNode
.removeChild(p[a].parentNode),n.addBox(Nt,p[a]),n.alignBox(p[a],_[a],0),n.msieRelativeWidthBug&&
(s.style.top=p[a].style.top=""),i&&(s.style.width=r.width,e.bbox.width="100%"),p[
a].style.marginRight=p[a].style.marginLeft=n.Em(xt),Et.indentalign===t.INDENTALIGN
.CENTER?wt+=4*xt+2*p[a].bbox.w:Et.indentalign!==_[a]&&(wt+=2*xt+p[a].bbox.w),wt=Math
.max(0,wt+St),e.bbox.tw=wt+2*xt,e.style.minWidth=e.bbox.minWidth=n.Em(wt),Nt.style
.minWidth=Nt.bbox.minWidth=n.Em(wt/n.scale)}i||this.HTMLhandleSpace(e);var Ct=this
.HTMLhandleColor(e);return Ct&&i&&(bt||(bt=n.createFrame(s,z,0,U,0,"none"),n.addBox
(s,bt),n.placeBox(bt,0,V,!0),bt.style.width="100%"),bt.style.backgroundColor=Ct.style
.backgroundColor,bt.parentNode.insertBefore(bt,bt.parentNode.firstChild),Ct.parentNode
.removeChild(Ct)),e},HTMLhandleSpace:function(e){e.bbox.keepPadding=!0,e.bbox.exact=!0
,!this.hasFrame&&e.bbox.width==null&&(e.style.paddingLeft=e.style.paddingRight=n.
Em(1/6)),this.SUPER(arguments).HTMLhandleSpace.call(this,e)}}),t.mtd.Augment({toHTML
:function(e,t,n){e=this.HTMLcreateSpan(e);if(this.data[0]){var r=this.data[0].toHTML
(e);n!=null?r=this.data[0].HTMLstretchV(e,t,n):t!=null&&(r=this.data[0].HTMLstretchH
(e,t)),e.bbox=r.bbox}return this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLstretchH
:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV}),MathJax.Hub.Startup.signal
.Post("HTML-CSS mtable Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mtable.js"
)});