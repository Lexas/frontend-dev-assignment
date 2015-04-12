/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/multiline.js
 *  
 *  Implements the SVG output for <mrow>'s that contain line breaks.
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
.ElementJax.mml,n=MathJax.OutputJax.SVG,r=n.BBOX,i={newline:0,nobreak:1e6,goodbreak
:[-200],badbreak:[200],auto:[0],toobig:800,nestfactor:400,spacefactor:-100,spaceoffset
:2,spacelimit:1,fence:500,close:500},s={linebreakstyle:"after"};t.mrow.Augment({SVGmultiline
:function(e){var r=this;while(r.inferred||r.parent&&r.parent.type==="mrow"&&r.parent
.data.length===1)r=r.parent;var o=r.type==="math"&&r.Get("display")==="block"||r.
type==="mtd";r.isMultiline=!0;var u=this.getValues("linebreak","linebreakstyle","lineleading"
,"linebreakmultchar","indentalign","indentshift","indentalignfirst","indentshiftfirst"
,"indentalignlast","indentshiftlast");u.linebreakstyle===t.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE&&
(u.linebreakstyle=this.Get("infixlinebreakstyle")),u.lineleading=n.length2em(u.lineleading
,1,.5),e=this.SVG(),o&&r.type!=="mtd"&&(n.linebreakWidth<n.BIGDIMEN?e.w=n.linebreakWidth
:e.w=n.cwidth);var a={n:0,Y:0,scale:this.scale||1,isTop:o,values:{},VALUES:u},f=this
.SVGgetAlign(a,{}),l=this.SVGgetShift(a,{},f),c=[],h={index:[],penalty:i.nobreak,
w:0,W:l,shift:l,scanW:l,nest:0},p=!1;while(this.SVGbetterBreak(h,a)&&(h.scanW>=n.
linebreakWidth||h.penalty===i.newline))this.SVGaddLine(e,c,h.index,a,h.values,p),
c=h.index.slice(0),p=!0,f=this.SVGgetAlign(a,h.values),l=this.SVGgetShift(a,h.values
,f),f===t.INDENTALIGN.CENTER&&(l=0),h.W=h.shift=h.scanW=l,h.penalty=i.nobreak;return a
.isLast=!0,this.SVGaddLine(e,c,[],a,s,p),this.SVGhandleSpace(e),this.SVGhandleColor
(e),e.isMultiline=!0,this.SVGsaveData(e),e}}),t.mbase.Augment({SVGlinebreakPenalty
:i,SVGbetterBreak:function(e,t){if(this.isToken)return!1;if(this.isEmbellished())
return e.embellished=this,this.CoreMO().SVGbetterBreak(e,t);if(this.linebreakContainer
)return!1;var r=e.index.slice(0),s=e.index.shift(),o=this.data.length,u,a,f,l=e.index
.length>0,c=!1;s==null&&(s=-1),l||(s++,e.W+=e.w,e.w=0),f=e.scanW=e.W,e.nest++;while(
s<o&&e.scanW<1.33*n.linebreakWidth){if(this.data[s]){if(this.data[s].SVGbetterBreak
(e,t)){c=!0,r=[s].concat(e.index),u=e.W,a=e.w;if(e.penalty===i.newline)return e.index=
r,e.nest&&e.nest--,!0}f=l?e.scanW:this.SVGaddWidth(s,e,f)}e.index=[],s++,l=!1}return e
.nest&&e.nest--,e.index=r,c&&(e.W=u),c},SVGaddWidth:function(e,t,n){if(this.data[
e]){var r=this.data[e].SVGdata;n+=r.w+r.x,r.X&&(n+=r.X),t.W=t.scanW=n,t.w=0}return n
},SVGaddLine:function(e,t,i,s,o,u){var a=r();s.first=u,s.last=!0,this.SVGmoveLine
(t,i,a,s,o),a.Clean();var f=this.SVGgetAlign(s,o),l=this.SVGgetShift(s,o,f);if(s.
n>0){var c=n.FONTDATA.baselineskip*s.scale,h=(s.values.lineleading==null?s.VALUES
:s.values).lineleading*s.scale;s.Y-=Math.max(c,s.d+a.h+h)}a.w+l>e.w&&(e.w=a.w+l),
e.Align(a,f,0,s.Y,l),s.d=a.d,s.values=o,s.n++},SVGgetAlign:function(e,n){var r=n,
i=e.values,s=e.VALUES,o;return e.n===0?o=r.indentalignfirst||i.indentalignfirst||
s.indentalignfirst:e.isLast?o=i.indentalignlast||s.indentalignlast:o=i.indentalign||
s.indentalign,o===t.INDENTALIGN.INDENTALIGN&&(o=i.indentalign||s.indentalign),o===
t.INDENTALIGN.AUTO&&(o=e.isTop?this.displayAlign:t.INDENTALIGN.LEFT),o},SVGgetShift
:function(e,r,i){var s=r,o=e.values,u=e.VALUES,a;e.n===0?a=s.indentshiftfirst||o.
indentshiftfirst||u.indentshiftfirst:e.isLast?a=o.indentshiftlast||u.indentshiftlast
:a=o.indentshift||u.indentshift,a===t.INDENTSHIFT.INDENTSHIFT&&(a=o.indentshift||
u.indentshift);if(a==="auto"||a==="")a="0";a=n.length2em(a,1,n.cwidth);if(e.isTop&&
this.displayIndent!=="0"){var f=n.length2em(this.displayIndent,1,n.cwidth);a+=i===
t.INDENTALIGN.RIGHT?-f:f}return a},SVGmoveLine:function(e,t,n,r,i){var s=e[0],o=t
[0];s==null&&(s=-1),o==null&&(o=this.data.length-1);if(s===o&&e.length>1)this.data
[s].SVGmoveSlice(e.slice(1),t.slice(1),n,r,i,"paddingLeft");else{var u=r.last;r.last=!1
;while(s<o)this.data[s]&&(e.length<=1?this.data[s].SVGmove(n,r,i):this.data[s].SVGmoveSlice
(e.slice(1),[],n,r,i,"paddingLeft")),s++,r.first=!1,e=[];r.last=u,this.data[s]&&(
t.length<=1?this.data[s].SVGmove(n,r,i):this.data[s].SVGmoveSlice([],t.slice(1),n
,r,i,"paddingRight"))}},SVGmoveSlice:function(e,t,n,i,s,o){var u=r();return this.
SVGmoveLine(e,t,u,i,s),u.Clean(),this.SVGhandleColor(u),n.Add(u,n.w,0,!0),u},SVGmove
:function(e,n,r){if(!n.first&&!n.last||n.first&&n.values.linebreakstyle===t.LINEBREAKSTYLE
.BEFORE||n.last&&r.linebreakstyle===t.LINEBREAKSTYLE.AFTER){var i=this.toSVG(this
.SVGdata.HW,this.SVGdata.D);if(n.first||n.nextIsFirst)i.x=0;n.last&&i.X&&(i.X=0),
e.Add(i,e.w,0,!0)}n.first&&i&&i.w===0?n.nextIsFirst=!0:delete n.nextIsFirst}}),t.
mfenced.Augment({SVGbetterBreak:function(e,t){var r=e.index.slice(0),s=e.index.shift
(),o=this.data.length,u,a,f,l=e.index.length>0,c=!1;s==null&&(s=-1),l||(s++,e.W+=
e.w,e.w=0),f=e.scanW=e.W,e.nest++;if(!this.dataI){this.dataI=[],this.data.open&&this
.dataI.push("open"),o&&this.dataI.push(0);for(var h=1;h<o;h++)this.data["sep"+h]&&
this.dataI.push("sep"+h),this.dataI.push(h);this.data.close&&this.dataI.push("close"
)}o=this.dataI.length;while(s<o&&e.scanW<1.33*n.linebreakWidth){var p=this.dataI[
s];if(this.data[p]){if(this.data[p].SVGbetterBreak(e,t)){c=!0,r=[s].concat(e.index
),u=e.W,a=e.w;if(e.penalty===i.newline)return e.index=r,e.nest&&e.nest--,!0}f=l?e
.scanW:this.SVGaddWidth(s,e,f)}e.index=[],s++,l=!1}return e.nest&&e.nest--,e.index=
r,c&&(e.W=u,e.w=a),c},SVGmoveLine:function(e,t,n,r,i){var s=e[0],o=t[0];s==null&&
(s=-1),o==null&&(o=this.dataI.length-1);if(s===o&&e.length>1)this.data[this.dataI
[s]].SVGmoveSlice(e.slice(1),t.slice(1),n,r,i,"paddingLeft");else{var u=r.last;r.
last=!1;var a=this.dataI[s];while(s<o)this.data[a]&&(e.length<=1?this.data[a].SVGmove
(n,r,i):this.data[a].SVGmoveSlice(e.slice(1),[],n,r,i,"paddingLeft")),s++,a=this.
dataI[s],r.first=!1,e=[];r.last=u,this.data[a]&&(t.length<=1?this.data[a].SVGmove
(n,r,i):this.data[a].SVGmoveSlice([],t.slice(1),n,r,i,"paddingRight"))}}}),t.msubsup
.Augment({SVGbetterBreak:function(e,t){if(!this.data[this.base])return!1;var n=e.
index.slice(0),r=e.index.shift(),s,o,u,a=e.index.length>0,f=!1;return a||(e.W+=e.
w,e.w=0),u=e.scanW=e.W,r==null&&(this.SVGdata.dw=this.SVGdata.w-this.data[this.base
].SVGdata.w),this.data[this.base].SVGbetterBreak(e,t)&&(f=!0,n=[this.base].concat
(e.index),s=e.W,o=e.w,e.penalty===i.newline&&(f=a=!0)),a||this.SVGaddWidth(this.base
,e,u),e.scanW+=this.SVGdata.dw,e.W=e.scanW,e.index=[],f&&(e.W=s,e.w=o,e.index=n),
f},SVGmoveLine:function(e,t,n,r,i){this.data[this.base]&&(e.length>1?this.data[this
.base].SVGmoveSlice(e.slice(1),t.slice(1),n,r,i,"paddingLeft"):t.length<=1?this.data
[this.base].SVGmove(n,r,i):this.data[this.base].SVGmoveSlice([],t.slice(1),n,r,i,"paddingRight"
));if(t.length===0){var s=this.data[this.sup],o=this.data[this.sub],u=n.w,a;s&&(a=
s.SVGdata||{},n.Add(s.toSVG(),u+(a.dx||0),a.dy)),o&&(a=o.SVGdata||{},n.Add(o.toSVG
(),u+(a.dx||0),a.dy))}}}),t.mmultiscripts.Augment({SVGbetterBreak:function(e,t){if(!
this.data[this.base])return!1;var n=e.index.slice(0);e.index.shift();var r,s,o,u=
e.index.length>0,a=!1;u||(e.W+=e.w,e.w=0),e.scanW=e.W;var f=this.SVGdata.w-this.data
[this.base].SVGdata.w-this.SVGdata.dx;return e.scanW+=this.SVGdata.dx,o=e.scanW,this
.data[this.base].SVGbetterBreak(e,t)&&(a=!0,n=[this.base].concat(e.index),r=e.W,s=
e.w,e.penalty===i.newline&&(a=u=!0)),u||this.SVGaddWidth(this.base,e,o),e.scanW+=
f,e.W=e.scanW,e.index=[],a&&(e.W=r,e.w=s,e.index=n),a},SVGmoveLine:function(e,t,n
,r,i){var s,o=this.SVGdata;if(e.length<1){this.scriptBox=this.SVGgetScripts(this.
SVGdata.s);var u=this.scriptBox[2],a=this.scriptBox[3];s=n.w+o.dx,a&&n.Add(a,s+o.
delta-a.w,o.u),u&&n.Add(u,s-u.w,-o.v)}this.data[this.base]&&(e.length>1?this.data
[this.base].SVGmoveSlice(e.slice(1),t.slice(1),n,r,i,"paddingLeft"):t.length<=1?this
.data[this.base].SVGmove(n,r,i):this.data[this.base].SVGmoveSlice([],t.slice(1),n
,r,i,"paddingRight"));if(t.length===0){var f=this.scriptBox[0],l=this.scriptBox[1
];s=n.w+o.s,l&&n.Add(l,s,o.u),f&&n.Add(f,s-o.delta,-o.v),delete this.scriptBox}}}
),t.mo.Augment({SVGbetterBreak:function(e,r){if(e.values&&e.values.last===this)return!1
;var s=this.getValues("linebreak","linebreakstyle","lineleading","linebreakmultchar"
,"indentalign","indentshift","indentalignfirst","indentshiftfirst","indentalignlast"
,"indentshiftlast","texClass","fence");s.linebreakstyle===t.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE&&
(s.linebreakstyle=this.Get("infixlinebreakstyle")),s.texClass===t.TEXCLASS.OPEN&&
e.nest++,s.texClass===t.TEXCLASS.CLOSE&&e.nest&&e.nest--;var o=e.scanW,u=e.embellished
;delete e.embellished;if(!u||!u.SVGdata)u=this;var a=u.SVGdata,f=a.w+a.x;s.linebreakstyle===
t.LINEBREAKSTYLE.AFTER&&(o+=f,f=0);if(o-e.shift===0&&s.linebreak!==t.LINEBREAK.NEWLINE
)return!1;var l=n.linebreakWidth-o;if(r.n===0&&(s.indentshiftfirst!==r.VALUES.indentshiftfirst||
s.indentalignfirst!==r.VALUES.indentalignfirst)){var c=this.SVGgetAlign(r,s),h=this
.SVGgetShift(r,s,c);l+=e.shift-h}var p=Math.floor(l/n.linebreakWidth*1e3);p<0&&(p=
i.toobig-3*p),s.fence&&(p+=i.fence);if(s.linebreakstyle===t.LINEBREAKSTYLE.AFTER&&
s.texClass===t.TEXCLASS.OPEN||s.texClass===t.TEXCLASS.CLOSE)p+=i.close;p+=e.nest*
i.nestfactor;var d=i[s.linebreak||t.LINEBREAK.AUTO];return d instanceof Array?p=Math
.max(1,p+d[0]*e.nest):l>=0&&(p=d*e.nest),p>=e.penalty?!1:(e.penalty=p,e.values=s,
e.W=o,e.w=f,s.lineleading=n.length2em(s.lineleading,1,r.VALUES.lineleading),s.last=
this,!0)}}),t.mspace.Augment({SVGbetterBreak:function(e,r){if(e.values&&e.values.
last===this)return!1;var s=this.getValues("linebreak"),o=s.linebreak;if(!o||this.
hasDimAttr())o=t.LINEBREAK.AUTO;var u=e.scanW,a=this.SVGdata,f=a.w+a.x;if(u-e.shift===0
)return!1;var l=n.linebreakWidth-u,c=Math.floor(l/n.linebreakWidth*1e3);c<0&&(c=i
.toobig-3*c),c+=e.nest*i.nestfactor;var h=i[o];return o===t.LINEBREAK.AUTO&&f>=i.
spacelimit*1e3&&!this.mathbackground&&!this.backrgound&&(h=[(f/1e3+i.spaceoffset)*
i.spacefactor]),h instanceof Array?c=Math.max(1,c+h[0]*e.nest):l>=0&&(c=h*e.nest)
,c>=e.penalty?!1:(e.penalty=c,e.values=s,e.W=u,e.w=f,s.lineleading=r.VALUES.lineleading
,s.linebreakstyle="before",s.last=this,!0)}}),MathJax.Hub.Register.StartupHook("TeX mathchoice Ready"
,function(){t.TeXmathchoice.Augment({SVGbetterBreak:function(e,t){return this.Core
().SVGbetterBreak(e,t)},SVGmoveLine:function(e,t,n,r,i){return this.Core().SVGmoveSlice
(e,t,n,r,i)}})}),t.maction.Augment({SVGbetterBreak:function(e,t){return this.Core
().SVGbetterBreak(e,t)},SVGmoveLine:function(e,t,n,r,i){return this.Core().SVGmoveSlice
(e,t,n,r,i)}}),t.semantics.Augment({SVGbetterBreak:function(e,t){return this.data
[0]?this.data[0].SVGbetterBreak(e,t):!1},SVGmoveLine:function(e,t,n,r,i){return this
.data[0]?this.data[0].SVGmoveSlice(e,t,n,r,i):null}}),MathJax.Hub.Startup.signal.
Post("SVG multiline Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/multiline.js"
)});