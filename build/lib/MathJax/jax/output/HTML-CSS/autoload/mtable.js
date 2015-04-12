/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mtable.js
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.mtable.Augment({toHTML:function(
e){e=this.HTMLcreateSpan(e);if(this.data.length===0)return e;var r=this.getValues
("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns"
,"equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width"
,"side","minlabelspacing"),i=r.width.match(/%$/),s=n.createStack(e),o=this.HTMLgetScale
(),u=this.HTMLgetMu(e),f=-1,l=[],c=[],h=[],p=[],d=[],v,m,g=-1,y,w,E,S,x,T,N=[],C,
k=n.FONTDATA.lineH*o*r.useHeight,L=n.FONTDATA.lineD*o*r.useHeight;for(v=0,y=this.
data.length;v<y;v++){S=this.data[v],E=S.type==="mlabeledtr"?f:0,p[v]=[],l[v]=k,c[
v]=L;for(m=E,w=S.data.length+E;m<w;m++)h[m]==null&&(m>g&&(g=m),d[m]=n.createStack
(n.createBox(s)),h[m]=-n.BIGDIMEN),p[v][m]=n.createBox(d[m]),N.push(S.data[m-E].toHTML
(p[v][m]))}n.MeasureSpans(N);for(v=0,y=this.data.length;v<y;v++){S=this.data[v],E=
S.type==="mlabeledtr"?f:0;for(m=E,w=S.data.length+E;m<w;m++){x=S.data[m-E],x.isMultiline&&
(p[v][m].style.width="100%");if(x.isEmbellished()){T=x.CoreMO();var A=T.Get("minsize"
,!0);if(A){var O=T.HTMLspanElement().bbox;T.HTMLcanStretch("Vertical")?(C=O.h+O.d
,C&&(A=n.length2em(A,u,C),A*O.h/C>l[v]&&(l[v]=A*O.h/C),A*O.d/C>c[v]&&(c[v]=A*O.d/
C))):T.HTMLcanStretch("Horizontal")&&(A=n.length2em(A,u,O.w),A>h[m]&&(h[m]=A))}}p
[v][m].bbox.h>l[v]&&(l[v]=p[v][m].bbox.h),p[v][m].bbox.d>c[v]&&(c[v]=p[v][m].bbox
.d),p[v][m].bbox.w>h[m]&&(h[m]=p[v][m].bbox.w)}}var M=MathJax.Hub.SplitList,_=M(r
.columnspacing),D=M(r.rowspacing),P=M(r.columnalign),H=M(r.rowalign),B=M(r.columnlines
),j=M(r.rowlines),F=M(r.columnwidth),I=[];for(v=0,y=_.length;v<y;v++)_[v]=n.length2em
(_[v],u);for(v=0,y=D.length;v<y;v++)D[v]=n.length2em(D[v],u);while(_.length<g)_.push
(_[_.length-1]);while(P.length<=g)P.push(P[P.length-1]);while(B.length<g)B.push(B
[B.length-1]);while(F.length<=g)F.push(F[F.length-1]);while(D.length<p.length)D.push
(D[D.length-1]);while(H.length<=p.length)H.push(H[H.length-1]);while(j.length<p.length
)j.push(j[j.length-1]);d[f]&&(P[f]=r.side.substr(0,1)==="l"?"left":"right",_[f]=-
h[f]);for(v=0,y=p.length;v<y;v++){S=this.data[v],I[v]=[],S.rowalign&&(H[v]=S.rowalign
);if(S.columnalign){I[v]=M(S.columnalign);while(I[v].length<=g)I[v].push(I[v][I[v
].length-1])}}if(r.equalrows){var q=Math.max.apply(Math,l),R=Math.max.apply(Math,
c);for(v=0,y=p.length;v<y;v++)E=(q+R-(l[v]+c[v]))/2,l[v]+=E,c[v]+=E}C=l[0]+c[p.length-1
];for(v=0,y=p.length-1;v<y;v++)C+=Math.max(0,c[v]+l[v+1]+D[v]);var U=0,z=0,W,X=C;
if(r.frame!=="none"||(r.columnlines+r.rowlines).match(/solid|dashed/)){var V=M(r.
framespacing);V.length!=2&&(V=M(this.defaults.framespacing)),U=n.length2em(V[0],u
),z=n.length2em(V[1],u),X=C+2*z}var $,J,K="";typeof r.align!="string"&&(r.align=String
(r.align)),r.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)?(K=RegExp
.$3||"",r.align=RegExp.$1):r.align=this.defaults.align;if(K!==""){K=parseInt(K),K<0&&
(K=p.length+1+K),K<1?K=1:K>p.length&&(K=p.length),$=0,J=-(C+z)+l[0];for(v=0,y=K-1
;v<y;v++){var Q=Math.max(0,c[v]+l[v+1]+D[v]);$+=Q,J+=Q}}else $={top:-(l[0]+z),bottom
:C+z-l[0],center:C/2-l[0],baseline:C/2-l[0],axis:C/2+n.TeX.axis_height*o-l[0]}[r.
align],J={top:-(C+2*z),bottom:0,center:-(C/2+z),baseline:-(C/2+z),axis:n.TeX.axis_height*
o-C/2-z}[r.align];var G,Y=0,Z=0,et=0,tt=0,nt=0,rt=[],it=[],st=1;if(r.equalcolumns&&
r.width!=="auto")if(i){G=(100/(g+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(v=0,
y=Math.min(g+1,F.length);v<y;v++)F[v]=G;G=0,Y=1,nt=g+1;for(v=0,y=Math.min(g+1,_.length
);v<y;v++)G+=_[v]}else{G=n.length2em(r.width,u);for(v=0,y=Math.min(g+1,_.length);
v<y;v++)G-=_[v];G/=g+1;for(v=0,y=Math.min(g+1,F.length);v<y;v++)h[v]=G}else{for(v=0
,y=Math.min(g+1,F.length);v<y;v++)F[v]==="auto"?Z+=h[v]:F[v]==="fit"?(it[nt]=v,nt++
,Z+=h[v]):F[v].match(/%$/)?(rt[tt]=v,tt++,et+=h[v],Y+=n.length2em(F[v],u,1)):(h[v
]=n.length2em(F[v],u),Z+=h[v]);if(i){G=0;for(v=0,y=Math.min(g,_.length);v<y;v++)G+=
_[v];Y>.98&&(st=.98/Y,Y=.98)}else{if(r.width==="auto")Y>.98?(st=et/(Z+et),G=Z+et)
:G=Z/(1-Y);else{G=n.length2em(r.width,u);for(v=0,y=Math.min(g+1,_.length);v<y;v++
)G-=_[v]}for(v=0,y=rt.length;v<y;v++)h[rt[v]]=n.length2em(F[rt[v]],u,G*st),Z+=h[rt
[v]];if(Math.abs(G-Z)>.01)if(nt&&G>Z){G=(G-Z)/nt;for(v=0,y=it.length;v<y;v++)h[it
[v]]+=G}else{G/=Z;for(m=0;m<=g;m++)h[m]*=G}if(r.equalcolumns){var ot=Math.max.apply
(Math,h);for(m=0;m<=g;m++)h[m]=ot}}}var ut=$,at,ft,lt;E=d[f]?f:0;for(m=E;m<=g;m++
){for(v=0,y=p.length;v<y;v++){if(p[v][m]){E=this.data[v].type==="mlabeledtr"?f:0,
x=this.data[v].data[m-E];if(x.HTMLcanStretch("Horizontal"))p[v][m].bbox=x.HTMLstretchH
(d[m],h[m]).bbox;else if(x.HTMLcanStretch("Vertical")){T=x.CoreMO();var ct=T.symmetric
;T.symmetric=!1,p[v][m].bbox=x.HTMLstretchV(d[m],l[v],c[v]).bbox,p[v][m].HH=null,
p[v][m].bbox.h>l[v]&&(p[v][m].bbox.H=p[v][m].bbox.h,p[v][m].bbox.h=l[v]),p[v][m].
bbox.d>c[v]&&(p[v][m].bbox.D=p[v][m].bbox.d,p[v][m].bbox.d=c[v]),T.symmetric=ct}lt=
x.rowalign||this.data[v].rowalign||H[v],at={top:l[v]-p[v][m].bbox.h,bottom:p[v][m
].bbox.d-c[v],center:(l[v]-c[v]-(p[v][m].bbox.h-p[v][m].bbox.d))/2,baseline:0,axis
:0}[lt]||0,lt=x.columnalign||I[v][m]||P[m],n.alignBox(p[v][m],lt,ut+at)}v<p.length-1&&
(ut-=Math.max(0,c[v]+l[v+1]+D[v]))}ut=$}if(i){var ht=n.createBox(s);ht.style.left=
ht.style.top=0,ht.style.right=n.Em(G+2*U),ht.style.display="inline-block",ht.style
.height="0px",n.msieRelativeWidthBug&&(ht=n.createBox(ht),ht.style.position="relative"
,ht.style.height="1em",ht.style.width="100%",ht.bbox=s.bbox);var pt=0,dt=U,vt,mt;
nt?(vt=100*(1-Y)/nt,mt=Z/nt):(vt=100*(1-Y)/(g+1),mt=Z/(g+1));for(m=0;m<=g;m++){n.
placeBox(d[m].parentNode,0,0),d[m].style.position="relative",d[m].style.left=n.Em
(dt),d[m].style.width="100%",d[m].parentNode.parentNode.removeChild(d[m].parentNode
);var gt=n.createBox(ht);n.addBox(gt,d[m]),d[m]=gt;var yt=gt.style;yt.display="inline-block"
,yt.left=pt+"%";if(F[m].match(/%$/)){var bt=parseFloat(F[m])*st;nt===0?(yt.width=
vt+bt+"%",pt+=vt+bt,gt=n.createBox(gt),n.addBox(gt,d[m].firstChild),gt.style.left=0
,gt.style.right=n.Em(mt),dt-=mt):(yt.width=bt+"%",pt+=bt)}else F[m]==="fit"||nt===0?
(yt.width=vt+"%",gt=n.createBox(gt),n.addBox(gt,d[m].firstChild),gt.style.left=0,
gt.style.right=n.Em(mt-h[m]),dt+=h[m]-mt,pt+=vt):(yt.width=n.Em(h[m]),dt+=h[m]);n
.msieRelativeWidthBug&&(n.addText(gt.firstChild,n.NBSP),gt.firstChild.style.position="relative"
),dt+=_[m],B[m]!=="none"&&m<g&&m!==f&&(ft=n.createBox(ht),ft.style.left=pt+"%",ft=
n.createRule(ft,X,0,1.25/n.em),ft.style.position="absolute",ft.bbox={h:X,d:0,w:0,
rw:1.25/n.em,lw:0},ft.parentNode.bbox=s.bbox,n.placeBox(ft,dt-_[m]/2,J,!0),ft.style
.borderStyle=B[m])}}else{var wt=U;for(m=0;m<=g;m++)d[m].bbox.width||n.setStackWidth
(d[m],h[m]),F[m]!=="auto"&&F[m]!=="fit"&&(d[m].bbox.width=h[m],d[m].bbox.isFixed=!0
),n.placeBox(d[m].parentNode,wt,0),wt+=h[m]+_[m],B[m]!=="none"&&m<g&&m!==f&&(ft=n
.createRule(s,X,0,1.25/n.em),n.addBox(s,ft),ft.bbox={h:X,d:0,w:0,rw:1.25/n.em,lw:0
},n.placeBox(ft,wt-_[m]/2,J,!0),ft.style.borderStyle=B[m])}s.bbox.d=-J,s.bbox.h=X+
J,n.setStackWidth(s,s.bbox.w+U),W=s.bbox.w;var Et;r.frame!=="none"&&(Et=n.createFrame
(s,X,0,W,1.25/n.em,r.frame),n.addBox(s,Et),n.placeBox(Et,0,J,!0),i&&(Et.style.width="100%"
)),ut=$;for(v=0,y=p.length-1;v<y;v++){at=Math.max(0,c[v]+l[v+1]+D[v]);if(j[v]!=="none"
){ft=n.createRule(s,1.25/n.em,0,W),n.addBox(s,ft),ft.bbox={h:1.25/n.em,d:0,w:W,rw
:W,lw:0},n.placeBox(ft,0,ut-c[v]-(at-c[v]-l[v+1])/2,!0);if(j[v]==="dashed"||i)ft.
style.borderTop=ft.style.height+" "+j[v],ft.style.height=0,ft.style.width=ft.style
.borderLeftWidth,ft.style.borderLeft="",i&&(ft.style.width="100%")}ut-=at}i&&(e.bbox
.width=r.width,s.style.width="100%");if(d[f]){var St=s.bbox.w,xt=this.getValues("indentalignfirst"
,"indentshiftfirst","indentalign","indentshift");xt.indentalignfirst!==t.INDENTALIGN
.INDENTALIGN&&(xt.indentalign=xt.indentalignfirst),xt.indentalign===t.INDENTALIGN
.AUTO&&(xt.indentalign=this.displayAlign),xt.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&
(xt.indentshift=xt.indentshiftfirst),xt.indentshift==="auto"&&(xt.indentshift="0"
);var Tt=n.length2em(xt.indentshift,u,n.cwidth),Nt=n.length2em(r.minlabelspacing,
u,n.cwidth);if(this.displayIndent!=="0"){var Ct=n.length2em(this.displayIndent,u,
n.cwidth);Tt+=xt.indentAlign===t.INDENTALIGN.RIGHT?-Ct:Ct}var kt=n.createStack(e,!1
,"100%");n.addBox(kt,s),n.alignBox(s,xt.indentalign,0,Tt),d[f].parentNode.parentNode
.removeChild(d[f].parentNode),n.addBox(kt,d[f]),n.alignBox(d[f],P[f],0),n.msieRelativeWidthBug&&
(s.style.top=d[f].style.top=""),i&&(s.style.width=r.width,e.bbox.width="100%"),d[
f].style.marginRight=d[f].style.marginLeft=n.Em(Nt),xt.indentalign===t.INDENTALIGN
.CENTER?St+=4*Nt+2*d[f].bbox.w:xt.indentalign!==P[f]&&(St+=2*Nt+d[f].bbox.w),St=Math
.max(0,St+Tt),e.bbox.tw=St+2*Nt,e.style.minWidth=e.bbox.minWidth=n.Em(St),kt.style
.minWidth=kt.bbox.minWidth=n.Em(St/n.scale)}i||this.HTMLhandleSpace(e);var Lt=this
.HTMLhandleColor(e);return Lt&&i&&(Et||(Et=n.createFrame(s,X,0,W,0,"none"),n.addBox
(s,Et),n.placeBox(Et,0,J,!0),Et.style.width="100%"),Et.style.backgroundColor=Lt.style
.backgroundColor,Et.parentNode.insertBefore(Et,Et.parentNode.firstChild),Lt.parentNode
.removeChild(Lt)),e},HTMLhandleSpace:function(e){e.bbox.keepPadding=!0,e.bbox.exact=!0
,!this.hasFrame&&e.bbox.width==null&&(e.style.paddingLeft=e.style.paddingRight=n.
Em(1/6)),this.SUPER(arguments).HTMLhandleSpace.call(this,e)}}),t.mtd.Augment({toHTML
:function(e,t,n){e=this.HTMLcreateSpan(e);if(this.data[0]){var r=this.data[0].toHTML
(e);n!=null?r=this.data[0].HTMLstretchV(e,t,n):t!=null&&(r=this.data[0].HTMLstretchH
(e,t)),e.bbox=r.bbox}return this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLstretchH
:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV}),MathJax.Hub.Startup.signal
.Post("HTML-CSS mtable Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mtable.js"
)});