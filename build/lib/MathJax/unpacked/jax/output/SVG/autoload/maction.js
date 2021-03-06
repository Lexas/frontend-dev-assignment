/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/maction.js
 *  
 *  Implements the SVG output for <maction> elements.
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
.ElementJax.mml,n=MathJax.OutputJax.SVG,r,i,s,o=n.config.tooltip=MathJax.Hub.Insert
({delayPost:600,delayClear:600,offsetX:10,offsetY:5},n.config.tooltip||{});t.maction
.Augment({SVGtooltip:MathJax.HTML.addElement(document.body,"div",{id:"MathJax_SVG_Tooltip"
}),toSVG:function(e,t){this.SVGgetStyles();var n=this.SVG(),r=this.selected();return r
.type=="null"?(this.SVGsaveData(n),n):(n.Add(this.SVGdataStretched(this.Get("selection"
)-1,e,t)),this.SVGhandleHitBox(n),this.SVGhandleSpace(n),this.SVGhandleColor(n),this
.SVGsaveData(n),n)},SVGhandleHitBox:function(e){var t=n.addElement(e.element,"rect"
,{width:e.w,height:e.h+e.d,y:-e.d,fill:"none","pointer-events":"all"}),r=this.Get
("actiontype");this.SVGaction[r]&&this.SVGaction[r].call(this,e,t,this.Get("selection"
))},SVGstretchH:t.mbase.prototype.SVGstretchH,SVGstretchV:t.mbase.prototype.SVGstretchV
,SVGaction:{toggle:function(e,t,r){this.selection=r,n.Element(t,{cursor:"pointer"
}),t.onclick=MathJax.Callback(["SVGclick",this])},statusline:function(e,t,n){t.onmouseover=
MathJax.Callback(["SVGsetStatus",this]),t.onmouseout=MathJax.Callback(["SVGclearStatus"
,this]),t.onmouseover.autoReset=t.onmouseout.autoReset=!0},tooltip:function(e,t,n
){t.onmouseover=MathJax.Callback(["SVGtooltipOver",this]),t.onmouseout=MathJax.Callback
(["SVGtooltipOut",this]),t.onmouseover.autoReset=t.onmouseout.autoReset=!0}},SVGclick
:function(e){this.selection++,this.selection>this.data.length&&(this.selection=1)
;var t=this;while(t.type!=="math")t=t.inherit;var n=MathJax.Hub.getJaxFor(t.inputID
);return n.Update(),MathJax.Extension.MathEvents.Event.False(e)},SVGsetStatus:function(
e){this.messageID=MathJax.Message.Set(this.data[1]&&this.data[1].isToken?this.data
[1].data.join(""):this.data[1].toString())},SVGclearStatus:function(e){this.messageID&&
MathJax.Message.Clear(this.messageID,0),delete this.messageID},SVGtooltipOver:function(
e){e||(e=window.event),s&&(clearTimeout(s),s=null),i&&clearTimeout(i);var t=e.pageX
,n=e.pageY;t==null&&(t=e.clientX+document.body.scrollLeft+document.documentElement
.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop
);var r=MathJax.Callback(["SVGtooltipPost",this,t+o.offsetX,n+o.offsetY]);i=setTimeout
(r,o.delayPost)},SVGtooltipOut:function(e){i&&(clearTimeout(i),i=null),s&&clearTimeout
(s);var t=MathJax.Callback(["SVGtooltipClear",this,80]);s=setTimeout(t,o.delayClear
)},SVGtooltipPost:function(e,n){i=null,s&&(clearTimeout(s),s=null);var o=this.SVGtooltip
;o.style.display="block",o.style.opacity="";if(this===r)return;o.style.left=e+"px"
,o.style.top=n+"px",o.innerHTML="";var u=MathJax.HTML.addElement(o,"span"),a=this
;while(a.type!=="math")a=a.inherit;var f=MathJax.Hub.getJaxFor(a.inputID);this.em=
t.mbase.prototype.em=f.SVG.em,this.ex=f.SVG.ex,this.linebreakWidth=f.SVG.lineWidth
,this.cwidth=f.SVG.cwidth;var l=this.data[1];a=t.math(l);try{a.toSVG(u,o)}catch(c
){this.SetData(1,l),o.style.display="none";if(!c.restart)throw c;MathJax.Callback
.After(["SVGtooltipPost",this,e,n],c.restart);return}this.SetData(1,l),r=this},SVGtooltipClear
:function(e){var t=this.SVGtooltip;e<=0?(t.style.display="none",t.style.opacity=""
,s=null):(t.style.opacity=e/100,s=setTimeout(MathJax.Callback(["SVGtooltipClear",
this,e-20]),50))}}),MathJax.Hub.Startup.signal.Post("SVG maction Ready"),MathJax.
Ajax.loadComplete(n.autoloadDir+"/maction.js")});