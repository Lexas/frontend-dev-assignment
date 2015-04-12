/*
 *  /MathJax/jax/output/SVG/autoload/mtable.js
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
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX;t.mtable.Augment({toSVG:function(
e){this.SVGgetStyles();var i=this.SVG(),s=this.SVGgetScale(i);if(this.data.length===0
)return this.SVGsaveData(i),i;var o=this.getValues("columnalign","rowalign","columnspacing"
,"rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame"
,"framespacing","align","useHeight","width","side","minlabelspacing");o.width.match
(/%$/)&&(i.width=o.width=n.Em(n.cwidth/1e3*(parseFloat(o.width)/100)));var u=this
.SVGgetMu(i),f=-1,l=[],c=[],h=[],p=[],v=[],m,g,y=-1,w,E,S,x,T,N,C,k=n.FONTDATA.lineH*
s*o.useHeight,L=n.FONTDATA.lineD*s*o.useHeight;for(m=0,w=this.data.length;m<w;m++
){x=this.data[m],S=x.type==="mlabeledtr"?f:0,p[m]=[],l[m]=k,c[m]=L;for(g=S,E=x.data
.length+S;g<E;g++){h[g]==null&&(g>y&&(y=g),v[g]=r.G(),h[g]=-n.BIGDIMEN),T=x.data[
g-S],p[m][g]=T.toSVG();if(T.isEmbellished()){N=T.CoreMO();var A=N.Get("minsize",!0
);A&&(N.SVGcanStretch("Vertical")?(C=N.SVGdata.h+N.SVGdata.d,C&&(A=n.length2em(A,
u,C),A*N.SVGdata.h/C>l[m]&&(l[m]=A*N.SVGdata.h/C),A*N.SVGdata.d/C>c[m]&&(c[m]=A*N
.SVGdata.d/C))):N.SVGcanStretch("Horizontal")&&(A=n.length2em(A,u,N.SVGdata.w),A>
h[g]&&(h[g]=A)))}p[m][g].h>l[m]&&(l[m]=p[m][g].h),p[m][g].d>c[m]&&(c[m]=p[m][g].d
),p[m][g].w>h[g]&&(h[g]=p[m][g].w)}}var O=MathJax.Hub.SplitList,M=O(o.columnspacing
),_=O(o.rowspacing),D=O(o.columnalign),P=O(o.rowalign),H=O(o.columnlines),B=O(o.rowlines
),j=O(o.columnwidth),F=[];for(m=0,w=M.length;m<w;m++)M[m]=n.length2em(M[m],u);for(
m=0,w=_.length;m<w;m++)_[m]=n.length2em(_[m],u);while(M.length<y)M.push(M[M.length-1
]);while(D.length<=y)D.push(D[D.length-1]);while(H.length<y)H.push(H[H.length-1])
;while(j.length<=y)j.push(j[j.length-1]);while(_.length<p.length)_.push(_[_.length-1
]);while(P.length<=p.length)P.push(P[P.length-1]);while(B.length<p.length)B.push(
B[B.length-1]);v[f]&&(D[f]=o.side.substr(0,1)==="l"?"left":"right",M[f]=-h[f]);for(
m=0,w=p.length;m<w;m++){x=this.data[m],F[m]=[],x.rowalign&&(P[m]=x.rowalign);if(x
.columnalign){F[m]=O(x.columnalign);while(F[m].length<=y)F[m].push(F[m][F[m].length-1
])}}if(o.equalrows){var I=Math.max.apply(Math,l),q=Math.max.apply(Math,c);for(m=0
,w=p.length;m<w;m++)S=(I+q-(l[m]+c[m]))/2,l[m]+=S,c[m]+=S}C=l[0]+c[p.length-1];for(
m=0,w=p.length-1;m<w;m++)C+=Math.max(0,c[m]+l[m+1]+_[m]);var R=0,U=0,z,W=C;if(o.frame!=="none"||
(o.columnlines+o.rowlines).match(/solid|dashed/)){var X=O(o.framespacing);X.length!=2&&
(X=O(this.defaults.framespacing)),R=n.length2em(X[0],u),U=n.length2em(X[1],u),W=C+2*
U}var V,$,J="";typeof o.align!="string"&&(o.align=String(o.align)),o.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/
)?(J=RegExp.$3||"",o.align=RegExp.$1):o.align=this.defaults.align;if(J!==""){J=parseInt
(J),J<0&&(J=p.length+1+J),J<1?J=1:J>p.length&&(J=p.length),V=0,$=-(C+U)+l[0];for(
m=0,w=J-1;m<w;m++){var K=Math.max(0,c[m]+l[m+1]+_[m]);V+=K,$+=K}}else V={top:-(l[0
]+U),bottom:C+U-l[0],center:C/2-l[0],baseline:C/2-l[0],axis:C/2+n.TeX.axis_height*
s-l[0]}[o.align],$={top:-(C+2*U),bottom:0,center:-(C/2+U),baseline:-(C/2+U),axis:
n.TeX.axis_height*s-C/2-U}[o.align];var Q,G=0,Y=0,Z=0,et=0,tt=0,nt=[],rt=[],it=1;
if(o.equalcolumns&&o.width!=="auto"){Q=n.length2em(o.width,u);for(m=0,w=Math.min(
y+1,M.length);m<w;m++)Q-=M[m];Q/=y+1;for(m=0,w=Math.min(y+1,j.length);m<w;m++)h[m
]=Q}else{for(m=0,w=Math.min(y+1,j.length);m<w;m++)j[m]==="auto"?Y+=h[m]:j[m]==="fit"?
(rt[tt]=m,tt++,Y+=h[m]):j[m].match(/%$/)?(nt[et]=m,et++,Z+=h[m],G+=n.length2em(j[
m],u,1)):(h[m]=n.length2em(j[m],u),Y+=h[m]);if(o.width==="auto")G>.98?(it=Z/(Y+Z)
,Q=Y+Z):Q=Y/(1-G);else{Q=n.length2em(o.width,u);for(m=0,w=Math.min(y+1,M.length);
m<w;m++)Q-=M[m]}for(m=0,w=nt.length;m<w;m++)h[nt[m]]=n.length2em(j[nt[m]],u,Q*it)
,Y+=h[nt[m]];if(Math.abs(Q-Y)>.01)if(tt&&Q>Y){Q=(Q-Y)/tt;for(m=0,w=rt.length;m<w;
m++)h[rt[m]]+=Q}else{Q/=Y;for(g=0;g<=y;g++)h[g]*=Q}if(o.equalcolumns){var st=Math
.max.apply(Math,h);for(g=0;g<=y;g++)h[g]=st}}var ot=V,ut,at;S=v[f]?f:0;for(g=S;g<=
y;g++){v[g].w=h[g];for(m=0,w=p.length;m<w;m++){if(p[m][g]){S=this.data[m].type==="mlabeledtr"?
f:0,T=this.data[m].data[g-S];if(T.SVGcanStretch("Horizontal"))p[m][g]=T.SVGstretchH
(h[g]);else if(T.SVGcanStretch("Vertical")){N=T.CoreMO();var ft=N.symmetric;N.symmetric=!1
,p[m][g]=T.SVGstretchV(l[m],c[m]),N.symmetric=ft}at=T.rowalign||this.data[m].rowalign||
P[m],ut={top:l[m]-p[m][g].h,bottom:p[m][g].d-c[m],center:(l[m]-c[m]-(p[m][g].h-p[
m][g].d))/2,baseline:0,axis:0}[at]||0,at=T.columnalign||F[m][g]||D[g],v[g].Align(
p[m][g],at,0,ot+ut)}m<p.length-1&&(ot-=Math.max(0,c[m]+l[m+1]+_[m]))}ot=V}var lt=1.5*
n.em,ct=R-lt/2;for(g=0;g<=y;g++)i.Add(v[g],ct,0),ct+=h[g]+M[g],H[g]!=="none"&&g<y&&
g!==f&&i.Add(r.VLINE(W,lt,H[g]),ct-M[g]/2,$);i.w+=R,i.d=-$,i.h=W+$,z=i.w,o.frame!=="none"&&
(i.Add(r.HLINE(z,lt,o.frame),0,$+W-lt),i.Add(r.HLINE(z,lt,o.frame),0,$),i.Add(r.VLINE
(W,lt,o.frame),0,$),i.Add(r.VLINE(W,lt,o.frame),z-lt,$)),ot=V-lt/2;for(m=0,w=p.length-1
;m<w;m++)ut=Math.max(0,c[m]+l[m+1]+_[m]),B[m]!=="none"&&i.Add(r.HLINE(z,lt,B[m]),0
,ot-c[m]-(ut-c[m]-l[m+1])/2),ot-=ut;i.Clean(),this.SVGhandleSpace(i),this.SVGhandleColor
(i);if(v[f]){i.tw=Math.max(i.w,i.r)-Math.min(0,i.l);var ht=this.getValues("indentalignfirst"
,"indentshiftfirst","indentalign","indentshift");ht.indentalignfirst!==t.INDENTALIGN
.INDENTALIGN&&(ht.indentalign=ht.indentalignfirst),ht.indentalign===t.INDENTALIGN
.AUTO&&(ht.indentalign=this.displayAlign),ht.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&
(ht.indentshift=ht.indentshiftfirst);if(ht.indentshift==="auto"||ht.indentshift===""
)ht.indentshift="0";var pt=n.length2em(ht.indentshift,u,n.cwidth),dt=n.length2em(
o.minlabelspacing,u,n.cwidth);if(this.displayIndent!=="0"){var vt=n.length2em(this
.displayIndent,u,n.cwidth);pt+=ht.indentAlign===t.INDENTALIGN.RIGHT?-vt:vt}var mt=
i;i=this.SVG(),i.w=i.r=n.cwidth,i.hasIndent=!0,i.Align(v[f],D[f],dt,0),i.Align(mt
,ht.indentalign,0,0,pt),i.tw+=v[f].w+pt+(ht.indentalign===t.INDENTALIGN.CENTER?8:4
)*dt}return this.SVGsaveData(i),i},SVGhandleSpace:function(e){!this.hasFrame&&!e.
width&&(e.x=e.X=167),this.SUPER(arguments).SVGhandleSpace.call(this,e)}}),t.mtd.Augment
({toSVG:function(e,t){var n=this.svg=this.SVG();return this.data[0]&&(n.Add(this.
SVGdataStretched(0,e,t)),n.Clean()),this.SVGhandleColor(n),this.SVGsaveData(n),n}
}),MathJax.Hub.Startup.signal.Post("SVG mtable Ready"),MathJax.Ajax.loadComplete(
n.autoloadDir+"/mtable.js")});