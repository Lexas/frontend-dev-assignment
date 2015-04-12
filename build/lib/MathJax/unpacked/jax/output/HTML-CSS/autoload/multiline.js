/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/multiline.js
 *  
 *  Implements the HTML-CSS output for <mrow>'s that contain line breaks.
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
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r={newline:0,nobreak:1e6,goodbreak
:[-200],badbreak:[200],auto:[0],toobig:800,nestfactor:400,spacefactor:-100,spaceoffset
:2,spacelimit:1,fence:500,close:500},i={linebreakstyle:"after"};t.mbase.Augment({
HTMLlinebreakPenalty:r,HTMLmultiline:function(e){var s=this;while(s.inferred||s.parent&&
s.parent.type==="mrow"&&s.parent.data.length===1)s=s.parent;var o=s.type==="math"&&
s.Get("display")==="block"||s.type==="mtd";s.isMultiline=!0;var u=this.getValues("linebreak"
,"linebreakstyle","lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst"
,"indentshiftfirst","indentalignlast","indentshiftlast");u.linebreakstyle===t.LINEBREAKSTYLE
.INFIXLINEBREAKSTYLE&&(u.linebreakstyle=this.Get("infixlinebreakstyle")),u.lineleading=
n.length2em(u.lineleading,1,.5),this.HTMLremoveColor(e);var a=n.createStack(e);this
.HTMLgetScale();var f={n:0,Y:0,scale:this.scale||1,isTop:o,values:{},VALUES:u},l=
this.HTMLgetAlign(f,{}),c=this.HTMLgetShift(f,{},l),h=[],p={index:[],penalty:r.nobreak
,w:0,W:c,shift:c,scanW:c,nest:0},d=!1;while(this.HTMLbetterBreak(p,f)&&(p.scanW>=
n.linebreakWidth||p.penalty===r.newline))this.HTMLaddLine(a,h,p.index,f,p.values,
d),h=p.index.slice(0),d=!0,l=this.HTMLgetAlign(f,p.values),c=this.HTMLgetShift(f,
p.values,l),l===t.INDENTALIGN.CENTER&&(c=0),p.W=p.shift=p.scanW=c,p.penalty=r.nobreak
;return f.isLast=!0,this.HTMLaddLine(a,h,[],f,i,d),o&&(a.style.width="100%",s.type==="math"&&
(e.bbox.width="100%")),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e.bbox.isMultiline=!0
,e},HTMLbetterBreak:function(e,t){if(this.isToken)return!1;if(this.isEmbellished(
))return e.embellished=this,this.CoreMO().HTMLbetterBreak(e,t);if(this.linebreakContainer
)return!1;var i=e.index.slice(0),s=e.index.shift(),o=this.data.length,u,a,f,l=e.index
.length>0,c=!1;s==null&&(s=-1),l||(s++,e.W+=e.w,e.w=0),f=e.scanW=e.W,e.nest++;while(
s<o&&e.scanW<1.33*n.linebreakWidth){if(this.data[s]){if(this.data[s].HTMLbetterBreak
(e,t)){c=!0,i=[s].concat(e.index),u=e.W,a=e.w;if(e.penalty===r.newline)return e.index=
i,e.nest&&e.nest--,!0}f=l?e.scanW:this.HTMLaddWidth(s,e,f)}e.index=[],s++,l=!1}return e
.nest&&e.nest--,e.index=i,c&&(e.W=u,e.w=a),c},HTMLaddWidth:function(e,t,r){if(this
.data[e]){var i=this.data[e].HTMLspanElement();r+=i.bbox.w,i.style.paddingLeft&&(
r+=n.unEm(i.style.paddingLeft)),i.style.paddingRight&&(r+=n.unEm(i.style.paddingRight
)),t.W=t.scanW=r,t.w=0}return r},HTMLaddLine:function(e,t,r,i,s,o){line=n.createBox
(e),line.bbox=this.HTMLemptyBBox({}),i.first=o,i.last=!0,this.HTMLmoveLine(t,r,line
,i,s),this.HTMLcleanBBox(line.bbox);var u=this.HTMLgetAlign(i,s),a=this.HTMLgetShift
(i,s,u);if(i.n>0){var f=n.FONTDATA.baselineskip*i.scale,l=(i.values.lineleading==
null?i.VALUES:i.values).lineleading*i.scale;i.Y-=Math.max(f,i.d+line.bbox.h+l)}n.
alignBox(line,u,i.Y,a),i.d=line.bbox.d,i.values=s,i.n++},HTMLgetAlign:function(e,
n){var r=n,i=e.values,s=e.VALUES,o;return e.n===0?o=r.indentalignfirst||i.indentalignfirst||
s.indentalignfirst:e.isLast?o=i.indentalignlast||s.indentalignlast:o=i.indentalign||
s.indentalign,o===t.INDENTALIGN.INDENTALIGN&&(o=i.indentalign||s.indentalign),o===
t.INDENTALIGN.AUTO&&(o=e.isTop?this.displayAlign:t.INDENTALIGN.LEFT),o},HTMLgetShift
:function(e,r,i){var s=r,o=e.values,u=e.VALUES,a;e.n===0?a=s.indentshiftfirst||o.
indentshiftfirst||u.indentshiftfirst:e.isLast?a=o.indentshiftlast||u.indentshiftlast
:a=o.indentshift||u.indentshift,a===t.INDENTSHIFT.INDENTSHIFT&&(a=o.indentshift||
u.indentshift);if(a==="auto"||a==="")a="0";a=n.length2em(a,1,n.cwidth);if(e.isTop&&
this.displayIndent!=="0"){var f=n.length2em(this.displayIndent,1,n.cwidth);a+=i===
t.INDENTALIGN.RIGHT?-f:f}return a},HTMLmoveLine:function(e,t,n,r,i){var s=e[0],o=
t[0];s==null&&(s=-1),o==null&&(o=this.data.length-1);if(s===o&&e.length>1)this.data
[s].HTMLmoveSlice(e.slice(1),t.slice(1),n,r,i,"paddingLeft");else{var u=r.last;r.
last=!1;while(s<o)this.data[s]&&(e.length<=1?this.data[s].HTMLmoveSpan(n,r,i):this
.data[s].HTMLmoveSlice(e.slice(1),[],n,r,i,"paddingLeft")),s++,r.first=!1,e=[];r.
last=u,this.data[s]&&(t.length<=1?this.data[s].HTMLmoveSpan(n,r,i):this.data[s].HTMLmoveSlice
([],t.slice(1),n,r,i,"paddingRight"))}},HTMLmoveSlice:function(e,t,n,r,i,s){this.
HTMLremoveColor();var o=this.HTMLcreateSliceSpan(n);this.HTMLmoveLine(e,t,o,r,i),
o.style[s]="",this.HTMLcombineBBoxes(o,n.bbox),this.HTMLcleanBBox(o.bbox);if(t.length===0
){n=this.HTMLspanElement(),n.parentNode.removeChild(n),n.nextMathJaxSpan.id=n.id;
var u=0;while(n=n.nextMathJaxSpan){var a=this.HTMLhandleColor(n);a&&(a.id+="-MathJax-Continue-"+
u,u++)}}return o},HTMLcreateSliceSpan:function(e){var t=this.HTMLspanElement(),n=0
,r=t;while(r.nextMathJaxSpan)r=r.nextMathJaxSpan,n++;var i=t.cloneNode(!1);return r
.nextMathJaxSpan=i,i.nextMathJaxSpan=null,i.id+="-MathJax-Continue-"+n,i.bbox=this
.HTMLemptyBBox({}),e.appendChild(i)},HTMLmoveSpan:function(e,r,i){if(!r.first&&!r
.last||r.first&&r.values.linebreakstyle===t.LINEBREAKSTYLE.BEFORE||r.last&&i.linebreakstyle===
t.LINEBREAKSTYLE.AFTER){var s=document.getElementById("MathJax-Color-"+this.spanID+
n.idPostfix);s&&e.appendChild(s);var o=this.HTMLspanElement();e.appendChild(o),r.
last&&(o.style.paddingRight="");if(r.first||r.nextIsFirst)o.style.paddingLeft="",
s&&(this.HTMLremoveColor(o),this.HTMLhandleColor(o));r.first&&o.bbox.w===0?r.nextIsFirst=!0
:delete r.nextIsFirst,this.HTMLcombineBBoxes(this,e.bbox)}}}),t.mfenced.Augment({
HTMLbetterBreak:function(e,t){var i=e.index.slice(0),s=e.index.shift(),o=this.data
.length,u,a,f,l=e.index.length>0,c=!1;s==null&&(s=-1),l||(s++,e.W+=e.w,e.w=0),f=e
.scanW=e.W,e.nest++;if(!this.dataI){this.dataI=[],this.data.open&&this.dataI.push
("open"),o&&this.dataI.push(0);for(var h=1;h<o;h++)this.data["sep"+h]&&this.dataI
.push("sep"+h),this.dataI.push(h);this.data.close&&this.dataI.push("close")}o=this
.dataI.length;while(s<o&&e.scanW<1.33*n.linebreakWidth){var p=this.dataI[s];if(this
.data[p]){if(this.data[p].HTMLbetterBreak(e,t)){c=!0,i=[s].concat(e.index),u=e.W,
a=e.w;if(e.penalty===r.newline)return e.index=i,e.nest&&e.nest--,!0}f=l?e.scanW:this
.HTMLaddWidth(s,e,f)}e.index=[],s++,l=!1}return e.nest&&e.nest--,e.index=i,c&&(e.
W=u,e.w=a),c},HTMLmoveLine:function(e,t,n,r,i){var s=e[0],o=t[0];s==null&&(s=-1),
o==null&&(o=this.dataI.length-1);if(s===o&&e.length>1)this.data[this.dataI[s]].HTMLmoveSlice
(e.slice(1),t.slice(1),n,r,i,"paddingLeft");else{var u=r.last;r.last=!1;var a=this
.dataI[s];while(s<o)this.data[a]&&(e.length<=1?this.data[a].HTMLmoveSpan(n,r,i):this
.data[a].HTMLmoveSlice(e.slice(1),[],n,r,i,"paddingLeft")),s++,a=this.dataI[s],r.
first=!1,e=[];r.last=u,this.data[a]&&(t.length<=1?this.data[a].HTMLmoveSpan(n,r,i
):this.data[a].HTMLmoveSlice([],t.slice(1),n,r,i,"paddingRight"))}}}),t.msubsup.Augment
({HTMLbetterBreak:function(e,t){if(!this.data[this.base])return!1;var n=e.index.slice
(0),i=e.index.shift(),s,o,u,a=e.index.length>0,f=!1;return a||(e.W+=e.w,e.w=0),u=
e.scanW=e.W,i==null&&(this.HTMLbaseW=this.data[this.base].HTMLspanElement().bbox.
w,this.HTMLdw=this.HTMLspanElement().bbox.w-this.HTMLbaseW),this.data[this.base].
HTMLbetterBreak(e,t)&&(f=!0,n=[this.base].concat(e.index),s=e.W,o=e.w,e.penalty===
r.newline&&(f=a=!0)),a||this.HTMLaddWidth(this.base,e,u),e.scanW+=this.HTMLdw,e.W=
e.scanW,e.index=[],f&&(e.W=s,e.w=o,e.index=n),f},HTMLmoveLine:function(e,t,r,i,s)
{this.data[this.base]&&(e.length>1?this.data[this.base].HTMLmoveSlice(e.slice(1),
t.slice(1),r,i,s,"paddingLeft"):t.length<=1?this.data[this.base].HTMLmoveSpan(r,i
,s):this.data[this.base].HTMLmoveSlice([],t.slice(1),r,i,s,"paddingRight"));if(t.
length===0){var o=this.data[this.sup]||this.data[this.sub];if(o&&this.HTMLnotEmpty
(o)){var u=o.HTMLspanElement().parentNode,a=u.parentNode;this.data[this.base]&&a.
removeChild(a.firstChild);for(u=a.firstChild;u;u=u.nextSibling)u.style.left=n.Em(
n.unEm(u.style.left)-this.HTMLbaseW);a.bbox.w-=this.HTMLbaseW,a.style.width=n.Em(
a.bbox.w),this.HTMLcombineBBoxes(a,r.bbox),r.appendChild(a)}}}}),t.mmultiscripts.
Augment({HTMLbetterBreak:function(e,t){if(!this.data[this.base])return!1;var n=e.
index.slice(0);e.index.shift();var i,s,o,u=e.index.length>0,a=!1;u||(e.W+=e.w,e.w=0
),e.scanW=e.W;var f=this.HTMLspanElement().bbox,l=this.data[this.base].HTMLspanElement
().bbox,c=f.w-l.w;return e.scanW+=f.dx,o=e.scanW,this.data[this.base].HTMLbetterBreak
(e,t)&&(a=!0,n=[this.base].concat(e.index),i=e.W,s=e.w,e.penalty===r.newline&&(a=
u=!0)),u||this.HTMLaddWidth(this.base,e,o),e.scanW+=c,e.W=e.scanW,e.index=[],a&&(
e.W=i,e.w=s,e.index=n),a},HTMLmoveLine:function(e,t,r,i,s){var o=this.HTMLspanElement
(),u=o.bbox,a=o.firstChild,f={};n.msiePaddingWidthBug&&(a=a.nextSibling);var l=a.
firstChild;while(l)l.bbox&&l.bbox.name&&(f[l.bbox.name]=l),l=l.nextSibling;if(e.length<1
)if(f.presub||f.presup){var c=n.createStack(r);f.presup&&(n.addBox(c,f.presup),n.
placeBox(f.presup,u.dx-f.presup.bbox.w,u.u)),f.presub&&(n.addBox(c,f.presub),n.placeBox
(f.presub,u.dx+u.delta-f.presub.bbox.w,-u.v)),this.HTMLcombineBBoxes(c,r.bbox),r.
appendChild(c),c.style.width=n.Em(u.dx)}this.data[this.base]&&(e.length>1?this.data
[this.base].HTMLmoveSlice(e.slice(1),t.slice(1),r,i,s,"paddingLeft"):t.length<=1?
this.data[this.base].HTMLmoveSpan(r,i,s):this.data[this.base].HTMLmoveSlice([],t.
slice(1),r,i,s,"paddingRight"));if(t.length===0){this.data[this.base]&&a.removeChild
(a.firstChild);for(l=a.firstChild;l;l=l.nextSibling)l.style.left=n.Em(n.unEm(l.style
.left)-u.px);a.bbox.w-=u.px,a.style.width=n.Em(a.bbox.w),this.HTMLcombineBBoxes(a
,r.bbox),r.appendChild(a)}}}),t.mo.Augment({HTMLbetterBreak:function(e,i){if(e.values&&
e.values.id===this.spanID)return!1;var s=this.getValues("linebreak","linebreakstyle"
,"lineleading","linebreakmultchar","indentalign","indentshift","indentalignfirst"
,"indentshiftfirst","indentalignlast","indentshiftlast","texClass","fence");s.linebreakstyle===
t.LINEBREAKSTYLE.INFIXLINEBREAKSTYLE&&(s.linebreakstyle=this.Get("infixlinebreakstyle"
)),s.texClass===t.TEXCLASS.OPEN&&e.nest++,s.texClass===t.TEXCLASS.CLOSE&&e.nest&&
e.nest--;var o=e.scanW,u=e.embellished||this;delete e.embellished;var a=u.HTMLspanElement
(),f=a.bbox.w;a.style.paddingLeft&&(f+=n.unEm(a.style.paddingLeft)),s.linebreakstyle===
t.LINEBREAKSTYLE.AFTER&&(o+=f,f=0);if(o-e.shift===0&&s.linebreak!==t.LINEBREAK.NEWLINE
)return!1;var l=n.linebreakWidth-o;if(i.n===0&&(s.indentshiftfirst!==i.VALUES.indentshiftfirst||
s.indentalignfirst!==i.VALUES.indentalignfirst)){var c=this.HTMLgetAlign(i,s),h=this
.HTMLgetShift(i,s,c);l+=e.shift-h}var p=Math.floor(l/n.linebreakWidth*1e3);p<0&&(
p=r.toobig-3*p),s.fence&&(p+=r.fence);if(s.linebreakstyle===t.LINEBREAKSTYLE.AFTER&&
s.texClass===t.TEXCLASS.OPEN||s.texClass===t.TEXCLASS.CLOSE)p+=r.close;p+=e.nest*
r.nestfactor;var d=r[s.linebreak||t.LINEBREAK.AUTO];return d instanceof Array?p=Math
.max(1,p+d[0]*e.nest):l>=0&&(p=d*e.nest),p>=e.penalty?!1:(e.penalty=p,e.values=s,
e.W=o,e.w=f,s.lineleading=n.length2em(s.lineleading,1,i.VALUES.lineleading),s.id=
this.spanID,!0)}}),t.mspace.Augment({HTMLbetterBreak:function(e,i){if(e.values&&e
.values.id===this.spanID)return!1;var s=this.getValues("linebreak"),o=s.linebreak
;if(!o||this.hasDimAttr())o=t.LINEBREAK.AUTO;var u=e.scanW,a=this.HTMLspanElement
(),f=a.bbox.w;a.style.paddingLeft&&(f+=n.unEm(a.style.paddingLeft));if(u-e.shift===0
)return!1;var l=n.linebreakWidth-u,c=Math.floor(l/n.linebreakWidth*1e3);c<0&&(c=r
.toobig-3*c),c+=e.nest*r.nestfactor;var h=r[o];return o===t.LINEBREAK.AUTO&&f>=r.
spacelimit&&!this.mathbackground&&!this.background&&(h=[(f+r.spaceoffset)*r.spacefactor
]),h instanceof Array?c=Math.max(1,c+h[0]*e.nest):l>=0&&(c=h*e.nest),c>=e.penalty?!1
:(e.penalty=c,e.values=s,e.W=u,e.w=f,s.lineleading=i.VALUES.lineleading,s.linebreakstyle="before"
,s.id=this.spanID,!0)}}),MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",
function(){t.TeXmathchoice.Augment({HTMLbetterBreak:function(e,t){return this.Core
().HTMLbetterBreak(e,t)},HTMLmoveLine:function(e,t,n,r,i){return this.Core().HTMLmoveSlice
(e,t,n,r,i)}})}),t.maction.Augment({HTMLbetterBreak:function(e,t){return this.Core
().HTMLbetterBreak(e,t)},HTMLmoveLine:function(e,t,n,r,i){return this.Core().HTMLmoveSlice
(e,t,n,r,i)},HTMLmoveSlice:function(e,t,r,i,s,o){var u=document.getElementById("MathJax-HitBox-"+
this.spanID+n.idPostfix);u&&u.parentNode.removeChild(u);var a=this.SUPER(arguments
).HTMLmoveSlice.apply(this,arguments);if(t.length===0){r=this.HTMLspanElement();var f=0
;while(r)u=this.HTMLhandleHitBox(r,"-Continue-"+f),r=r.nextMathJaxSpan,f++}return a
}}),t.semantics.Augment({HTMLbetterBreak:function(e,t){return this.data[0]?this.data
[0].HTMLbetterBreak(e,t):!1},HTMLmoveLine:function(e,t,n,r,i){return this.data[0]?
this.data[0].HTMLmoveSlice(e,t,n,r,i):null}}),MathJax.Hub.Startup.signal.Post("HTML-CSS multiline Ready"
),MathJax.Ajax.loadComplete(n.autoloadDir+"/multiline.js")});