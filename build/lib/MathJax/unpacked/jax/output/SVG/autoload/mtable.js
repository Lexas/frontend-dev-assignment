/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/mtable.js
 *  
 *  Implements the SVG output for <mtable> elements.
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
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX;t.mtable.Augment({toSVG:function(
e){this.SVGgetStyles();var i=this.SVG(),s=this.SVGgetScale(i);if(this.data.length===0
)return this.SVGsaveData(i),i;var o=this.getValues("columnalign","rowalign","columnspacing"
,"rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame"
,"framespacing","align","useHeight","width","side","minlabelspacing");o.width.match
(/%$/)&&(i.width=o.width=n.Em(n.cwidth/1e3*(parseFloat(o.width)/100)));var u=this
.SVGgetMu(i),a=-1,f=[],l=[],c=[],h=[],p=[],d,v,m=-1,g,y,b,w,E,S,x,T=n.FONTDATA.lineH*
s*o.useHeight,N=n.FONTDATA.lineD*s*o.useHeight;for(d=0,g=this.data.length;d<g;d++
){w=this.data[d],b=w.type==="mlabeledtr"?a:0,h[d]=[],f[d]=T,l[d]=N;for(v=b,y=w.data
.length+b;v<y;v++){c[v]==null&&(v>m&&(m=v),p[v]=r.G(),c[v]=-n.BIGDIMEN),E=w.data[
v-b],h[d][v]=E.toSVG();if(E.isEmbellished()){S=E.CoreMO();var C=S.Get("minsize",!0
);C&&(S.SVGcanStretch("Vertical")?(x=S.SVGdata.h+S.SVGdata.d,x&&(C=n.length2em(C,
u,x),C*S.SVGdata.h/x>f[d]&&(f[d]=C*S.SVGdata.h/x),C*S.SVGdata.d/x>l[d]&&(l[d]=C*S
.SVGdata.d/x))):S.SVGcanStretch("Horizontal")&&(C=n.length2em(C,u,S.SVGdata.w),C>
c[v]&&(c[v]=C)))}h[d][v].h>f[d]&&(f[d]=h[d][v].h),h[d][v].d>l[d]&&(l[d]=h[d][v].d
),h[d][v].w>c[v]&&(c[v]=h[d][v].w)}}var k=MathJax.Hub.SplitList,L=k(o.columnspacing
),A=k(o.rowspacing),O=k(o.columnalign),M=k(o.rowalign),_=k(o.columnlines),D=k(o.rowlines
),P=k(o.columnwidth),H=[];for(d=0,g=L.length;d<g;d++)L[d]=n.length2em(L[d],u);for(
d=0,g=A.length;d<g;d++)A[d]=n.length2em(A[d],u);while(L.length<m)L.push(L[L.length-1
]);while(O.length<=m)O.push(O[O.length-1]);while(_.length<m)_.push(_[_.length-1])
;while(P.length<=m)P.push(P[P.length-1]);while(A.length<h.length)A.push(A[A.length-1
]);while(M.length<=h.length)M.push(M[M.length-1]);while(D.length<h.length)D.push(
D[D.length-1]);p[a]&&(O[a]=o.side.substr(0,1)==="l"?"left":"right",L[a]=-c[a]);for(
d=0,g=h.length;d<g;d++){w=this.data[d],H[d]=[],w.rowalign&&(M[d]=w.rowalign);if(w
.columnalign){H[d]=k(w.columnalign);while(H[d].length<=m)H[d].push(H[d][H[d].length-1
])}}if(o.equalrows){var B=Math.max.apply(Math,f),j=Math.max.apply(Math,l);for(d=0
,g=h.length;d<g;d++)b=(B+j-(f[d]+l[d]))/2,f[d]+=b,l[d]+=b}x=f[0]+l[h.length-1];for(
d=0,g=h.length-1;d<g;d++)x+=Math.max(0,l[d]+f[d+1]+A[d]);var F=0,I=0,q,R=x;if(o.frame!=="none"||
(o.columnlines+o.rowlines).match(/solid|dashed/)){var U=k(o.framespacing);U.length!=2&&
(U=k(this.defaults.framespacing)),F=n.length2em(U[0],u),I=n.length2em(U[1],u),R=x+2*
I}var z,W,X="";typeof o.align!="string"&&(o.align=String(o.align)),o.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/
)?(X=RegExp.$3||"",o.align=RegExp.$1):o.align=this.defaults.align;if(X!==""){X=parseInt
(X),X<0&&(X=h.length+1+X),X<1?X=1:X>h.length&&(X=h.length),z=0,W=-(x+I)+f[0];for(
d=0,g=X-1;d<g;d++){var V=Math.max(0,l[d]+f[d+1]+A[d]);z+=V,W+=V}}else z={top:-(f[0
]+I),bottom:x+I-f[0],center:x/2-f[0],baseline:x/2-f[0],axis:x/2+n.TeX.axis_height*
s-f[0]}[o.align],W={top:-(x+2*I),bottom:0,center:-(x/2+I),baseline:-(x/2+I),axis:
n.TeX.axis_height*s-x/2-I}[o.align];var $,J=0,K=0,Q=0,G=0,Y=0,Z=[],et=[],tt=1;if(
o.equalcolumns&&o.width!=="auto"){$=n.length2em(o.width,u);for(d=0,g=Math.min(m+1
,L.length);d<g;d++)$-=L[d];$/=m+1;for(d=0,g=Math.min(m+1,P.length);d<g;d++)c[d]=$
}else{for(d=0,g=Math.min(m+1,P.length);d<g;d++)P[d]==="auto"?K+=c[d]:P[d]==="fit"?
(et[Y]=d,Y++,K+=c[d]):P[d].match(/%$/)?(Z[G]=d,G++,Q+=c[d],J+=n.length2em(P[d],u,1
)):(c[d]=n.length2em(P[d],u),K+=c[d]);if(o.width==="auto")J>.98?(tt=Q/(K+Q),$=K+Q
):$=K/(1-J);else{$=n.length2em(o.width,u);for(d=0,g=Math.min(m+1,L.length);d<g;d++
)$-=L[d]}for(d=0,g=Z.length;d<g;d++)c[Z[d]]=n.length2em(P[Z[d]],u,$*tt),K+=c[Z[d]
];if(Math.abs($-K)>.01)if(Y&&$>K){$=($-K)/Y;for(d=0,g=et.length;d<g;d++)c[et[d]]+=
$}else{$/=K;for(v=0;v<=m;v++)c[v]*=$}if(o.equalcolumns){var nt=Math.max.apply(Math
,c);for(v=0;v<=m;v++)c[v]=nt}}var rt=z,it,st;b=p[a]?a:0;for(v=b;v<=m;v++){p[v].w=
c[v];for(d=0,g=h.length;d<g;d++){if(h[d][v]){b=this.data[d].type==="mlabeledtr"?a
:0,E=this.data[d].data[v-b];if(E.SVGcanStretch("Horizontal"))h[d][v]=E.SVGstretchH
(c[v]);else if(E.SVGcanStretch("Vertical")){S=E.CoreMO();var ot=S.symmetric;S.symmetric=!1
,h[d][v]=E.SVGstretchV(f[d],l[d]),S.symmetric=ot}st=E.rowalign||this.data[d].rowalign||
M[d],it={top:f[d]-h[d][v].h,bottom:h[d][v].d-l[d],center:(f[d]-l[d]-(h[d][v].h-h[
d][v].d))/2,baseline:0,axis:0}[st]||0,st=E.columnalign||H[d][v]||O[v],p[v].Align(
h[d][v],st,0,rt+it)}d<h.length-1&&(rt-=Math.max(0,l[d]+f[d+1]+A[d]))}rt=z}var ut=1.5*
n.em,at=F-ut/2;for(v=0;v<=m;v++)i.Add(p[v],at,0),at+=c[v]+L[v],_[v]!=="none"&&v<m&&
v!==a&&i.Add(r.VLINE(R,ut,_[v]),at-L[v]/2,W);i.w+=F,i.d=-W,i.h=R+W,q=i.w,o.frame!=="none"&&
(i.Add(r.HLINE(q,ut,o.frame),0,W+R-ut),i.Add(r.HLINE(q,ut,o.frame),0,W),i.Add(r.VLINE
(R,ut,o.frame),0,W),i.Add(r.VLINE(R,ut,o.frame),q-ut,W)),rt=z-ut/2;for(d=0,g=h.length-1
;d<g;d++)it=Math.max(0,l[d]+f[d+1]+A[d]),D[d]!=="none"&&i.Add(r.HLINE(q,ut,D[d]),0
,rt-l[d]-(it-l[d]-f[d+1])/2),rt-=it;i.Clean(),this.SVGhandleSpace(i),this.SVGhandleColor
(i);if(p[a]){i.tw=Math.max(i.w,i.r)-Math.min(0,i.l);var ft=this.getValues("indentalignfirst"
,"indentshiftfirst","indentalign","indentshift");ft.indentalignfirst!==t.INDENTALIGN
.INDENTALIGN&&(ft.indentalign=ft.indentalignfirst),ft.indentalign===t.INDENTALIGN
.AUTO&&(ft.indentalign=this.displayAlign),ft.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&
(ft.indentshift=ft.indentshiftfirst);if(ft.indentshift==="auto"||ft.indentshift===""
)ft.indentshift="0";var lt=n.length2em(ft.indentshift,u,n.cwidth),ct=n.length2em(
o.minlabelspacing,u,n.cwidth);if(this.displayIndent!=="0"){var ht=n.length2em(this
.displayIndent,u,n.cwidth);lt+=ft.indentAlign===t.INDENTALIGN.RIGHT?-ht:ht}var pt=
i;i=this.SVG(),i.w=i.r=n.cwidth,i.hasIndent=!0,i.Align(p[a],O[a],ct,0),i.Align(pt
,ft.indentalign,0,0,lt),i.tw+=p[a].w+lt+(ft.indentalign===t.INDENTALIGN.CENTER?8:4
)*ct}return this.SVGsaveData(i),i},SVGhandleSpace:function(e){!this.hasFrame&&!e.
width&&(e.x=e.X=167),this.SUPER(arguments).SVGhandleSpace.call(this,e)}}),t.mtd.Augment
({toSVG:function(e,t){var n=this.svg=this.SVG();return this.data[0]&&(n.Add(this.
SVGdataStretched(0,e,t)),n.Clean()),this.SVGhandleColor(n),this.SVGsaveData(n),n}
}),MathJax.Hub.Startup.signal.Post("SVG mtable Ready"),MathJax.Ajax.loadComplete(
n.autoloadDir+"/mtable.js")});