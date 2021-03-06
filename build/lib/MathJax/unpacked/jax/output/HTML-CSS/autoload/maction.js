/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/maction.js
 *  
 *  Implements the HTML-CSS output for <maction> elements.
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var e="2.5.1",t=
MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"],r,i,s,o=n.config.tooltip=MathJax
.Hub.Insert({delayPost:600,delayClear:600,offsetX:10,offsetY:5},n.config.tooltip||
{});t.maction.Augment({HTMLtooltip:n.addElement(document.body,"div",{id:"MathJax_Tooltip"
}),toHTML:function(e,t,r){var i=this.selected();if(i.type=="null")return e=this.HTMLcreateSpan
(e),e.bbox=this.HTMLzeroBBox(),e;e=this.HTMLcreateSpan(e),e.bbox=null,e.scale=this
.HTMLgetScale();var s=i.toHTML(e);return r!=null?n.Remeasured(i.HTMLstretchV(e,t,
r),e):t!=null?n.Remeasured(i.HTMLstretchH(e,t),e):n.Measured(s,e),this.HTMLhandleHitBox
(e),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLhandleHitBox:function(
e,t){var r;if(n.msieHitBoxBug){var i=n.addElement(e,"span",{isMathJax:!0});r=n.createFrame
(i,e.bbox.h,e.bbox.d,e.bbox.w,0,"none"),e.insertBefore(i,e.firstChild),i.style.marginRight=
n.Em(-e.bbox.w),n.msieInlineBlockAlignBug&&(r.style.verticalAlign=n.Em(n.getHD(e)
.d-e.bbox.d))}else r=n.createFrame(e,e.bbox.h,e.bbox.d,e.bbox.w,0,"none"),e.insertBefore
(r,e.firstChild),r.style.marginRight=n.Em(-e.bbox.w);r.className="MathJax_HitBox"
,r.id="MathJax-HitBox-"+this.spanID+(t||"")+n.idPostfix;var s=this.Get("actiontype"
);this.HTMLaction[s]&&this.HTMLaction[s].call(this,e,r,this.Get("selection"))},HTMLstretchH
:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV,HTMLaction:{toggle:function(
e,t,n){this.selection=n,t.onclick=e.childNodes[1].onclick=MathJax.Callback(["HTMLclick"
,this]),t.style.cursor=e.childNodes[1].style.cursor="pointer"},statusline:function(
e,t,n){t.onmouseover=e.childNodes[1].onmouseover=MathJax.Callback(["HTMLsetStatus"
,this]),t.onmouseout=e.childNodes[1].onmouseout=MathJax.Callback(["HTMLclearStatus"
,this]),t.onmouseover.autoReset=t.onmouseout.autoReset=!0},tooltip:function(e,t,n
){this.data[1]&&this.data[1].isToken?t.title=t.alt=e.childNodes[1].title=e.childNodes
[1].alt=this.data[1].data.join(""):(t.onmouseover=e.childNodes[1].onmouseover=MathJax
.Callback(["HTMLtooltipOver",this]),t.onmouseout=e.childNodes[1].onmouseout=MathJax
.Callback(["HTMLtooltipOut",this]),t.onmouseover.autoReset=t.onmouseout.autoReset=!0
)}},HTMLclick:function(e){this.selection++,this.selection>this.data.length&&(this
.selection=1);var t=this;while(t.type!=="math")t=t.inherit;var n=MathJax.Hub.getJaxFor
(t.inputID),r=!!n.hover;n.Update();if(r){var i=document.getElementById(n.inputID+"-Span"
);MathJax.Extension.MathEvents.Hover.Hover(n,i)}return MathJax.Extension.MathEvents
.Event.False(e)},HTMLsetStatus:function(e){this.messageID=MathJax.Message.Set(this
.data[1]&&this.data[1].isToken?this.data[1].data.join(""):this.data[1].toString()
)},HTMLclearStatus:function(e){this.messageID&&MathJax.Message.Clear(this.messageID
,0),delete this.messageID},HTMLtooltipOver:function(e){e||(e=window.event),s&&(clearTimeout
(s),s=null),i&&clearTimeout(i);var t=e.pageX,n=e.pageY;t==null&&(t=e.clientX+document
.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+
document.documentElement.scrollTop);var r=MathJax.Callback(["HTMLtooltipPost",this
,t+o.offsetX,n+o.offsetY]);i=setTimeout(r,o.delayPost)},HTMLtooltipOut:function(e
){i&&(clearTimeout(i),i=null),s&&clearTimeout(s);var t=MathJax.Callback(["HTMLtooltipClear"
,this,80]);s=setTimeout(t,o.delayClear)},HTMLtooltipPost:function(e,o){i=null,s&&
(clearTimeout(s),s=null);var u=this.HTMLtooltip;u.style.display="block",u.style.opacity=""
,u.style.filter=n.config.styles["#MathJax_Tooltip"].filter;if(this===r)return;u.style
.left=e+"px",u.style.top=o+"px",u.innerHTML='<span class="MathJax"><nobr></nobr></span>'
;var a=u.insertBefore(n.EmExSpan.cloneNode(!0),u.firstChild),f=a.firstChild.offsetHeight/60
,l=a.lastChild.firstChild.offsetHeight/60;n.em=n.outerEm=t.mbase.prototype.em=l;var c=
Math.floor(Math.max(n.config.minScaleAdjust/100,f/n.TeX.x_height/l)*n.config.scale
);u.firstChild.style.fontSize=c+"%",a.parentNode.removeChild(a);var h=n.createStack
(u.firstChild.firstChild),p=n.createBox(h);try{n.Measured(this.data[1].toHTML(p),
p)}catch(d){if(!d.restart)throw d;u.style.display="none",MathJax.Callback.After(["HTMLtooltipPost"
,this,e,o],d.restart);return}n.placeBox(p,0,0),n.createRule(u.firstChild.firstChild
,p.bbox.h,p.bbox.d,0),r=this},HTMLtooltipClear:function(e){var t=this.HTMLtooltip
;e<=0?(t.style.display="none",t.style.opacity=t.style.filter="",s=null):(t.style.
opacity=e/100,t.style.filter="alpha(opacity="+e+")",s=setTimeout(MathJax.Callback
(["HTMLtooltipClear",this,e-20]),50))}}),MathJax.Hub.Browser.Select({MSIE:function(
e){n.msieHitBoxBug=!0}}),MathJax.Hub.Startup.signal.Post("HTML-CSS maction Ready"
),MathJax.Ajax.loadComplete(n.autoloadDir+"/maction.js")});