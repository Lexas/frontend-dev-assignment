/*************************************************************
 *
 *  MathJax/jax/output/NativeMML/jax.js
 *
 *  Implements the NativeMML OutputJax that displays mathematics
 *  using a browser's native MathML capabilities (if any).
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

(function(e,t,n,r){var i,s=t.Browser.isMSIE,o,u,a,f;t.Register.StartupHook("MathZoom Ready"
,function(){f=MathJax.Extension.MathZoom});var l=function(e,t){var n=r.Element("span"
);e="padding"+e,t&&(n.style.cssText=t.getAttribute("style")||"",n.style.padding===""&&
(n.style[e]||"")===""&&(n.style[e]="0px",t.setAttribute("style",n.style.cssText))
)},c=function(e,t,n){if(e){var i=r.Element("span");i.style.cssText=e.getAttribute
("style")||"";if(i.style.padding===""){var s={paddingLeft:n,paddingTop:t,paddingRight
:"0px",paddingBottom:"0px"};for(var o in s)s.hasOwnProperty(o)&&(i.style[o]||"")===""&&
(i.style[o]=s[o])}e.setAttribute("style",i.style.cssText)}};e.Augment({config:{styles
:{".MathJax_MathML":{"font-style":"normal","font-weight":"normal","line-height":"normal"
,"font-size":"100%","font-size-adjust":"none","text-indent":0,"text-align":"left"
,"text-transform":"none","letter-spacing":"normal","word-spacing":"normal","word-wrap"
:"normal","white-space":"nowrap","float":"none",direction:"ltr","max-width":"none"
,"max-height":"none","min-width":0,"min-height":0,border:0,padding:0,margin:0},"span.MathJax_MathML"
:{display:"inline!important"},"div.MathJax_MathML":{display:"block!important"},".MathJax_mmlExBox"
:{display:"block!important",overflow:"hidden",height:"1px",width:"60ex","min-height"
:0,"max-height":"none",padding:0,border:0,margin:0}}},handlesVariants:!1,settings
:t.config.menuSettings,ex:1,scale:1,adjustWidths:[],Config:function(){this.SUPER(
arguments).Config.call(this),this.settings.scale&&(this.config.scale=this.settings
.scale);if(t.config.displayAlign!=="center"){var e=t.config.displayAlign,n=t.config
.displayIndent,r={"text-align":e+"!important"};r["margin-"+e]=n+"!important",t.Insert
(this.config.styles,{"div.MathJax_MathML":r,"div.MathJax_MathML math":{"text-align"
:e},"div.MathJax_MathContainer > span":{"text-align":e+"!important"}})}this.require||
(this.require=[]),this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js"
)},Startup:function(){return o=MathJax.Extension.MathEvents.Event,u=MathJax.Extension
.MathEvents.Touch,a=MathJax.Extension.MathEvents.Hover,this.ContextMenu=o.ContextMenu
,this.Mousedown=o.AltContextMenu,this.Mouseover=a.Mouseover,this.Mouseout=a.Mouseout
,this.Mousemove=a.Mousemove,t.Browser.hasMathPlayer||(this.EmExSpan=r.Element("span"
,{style:{position:"absolute","font-size-adjust":"none"}},[["div",{className:"MathJax_mmlExBox"
}],["span",{className:"MathJax_MathML"}]]),i.math(i.mspace().With({width:"60ex"})
).toNativeMML(this.EmExSpan.lastChild)),n.Styles(this.config.styles)},InitializeMML
:function(){this.initialized=!0;if(t.Browser.hasMathPlayer)try{if(!t.Browser.mpNamespace
){var e=document.createElement("object");e.id="mathplayer",e.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987"
,document.getElementsByTagName("head")[0].appendChild(e),document.namespaces.add("m"
,"http://www.w3.org/1998/Math/MathML"),t.Browser.mpNamespace=!0}t.Browser.mpImported||
(document.namespaces.m.doImport("#mathplayer"),t.Browser.mpImported=!0)}catch(n){
this.config.noMathPlayerWarning||alert(MathJax.Localization._(["MathML","MathPlayer"
],"MathJax was not able to set up MathPlayer.\n\nIf MathPlayer is not installed, you need to install it first.\nOtherwise, your security settings may be preventing ActiveX     \ncontrols from running.  Use the Internet Options item under\nthe Tools menu and select the Security tab, then press the\nCustom Level button. Check that the settings for\n'Run ActiveX Controls', and 'Binary and script behaviors'\nare enabled.\n\nCurrently you will see error messages rather than\ntypeset mathematics."
))}else document.body.appendChild(this.EmExSpan),this.defaultEx=this.EmExSpan.firstChild
.offsetWidth/60,this.defaultMEx=this.EmExSpan.lastChild.offsetWidth/60,document.body
.removeChild(this.EmExSpan)},preTranslate:function(e){var t=e.jax[this.id],n,i=t.
length,o,u,a,f,l,c,h,p,d;for(n=0;n<i;n++){o=t[n];if(!o.parentNode)continue;this.initialized||
this.InitializeMML(),u=o.previousSibling,u&&u.className==="MathJax_MathML"&&u.parentNode
.removeChild(u),c=o.MathJax.elementJax;if(!c)continue;l=c.root,c.NativeMML={};var v=
l.Get("display")==="block"?"div":"span";a=r.Element(v,{className:"MathJax_MathML"
,id:c.inputID+"-Frame"},[["span",{className:"MathJax_MathContainer",isMathJax:!0,
jaxID:this.id,style:{position:"relative",display:"inline-block","white-space":"nowrap"
}},[["span",{isMathJax:!0,style:{display:"inline-block"}}]]]]),o.parentNode.insertBefore
(a,o),s||o.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),o)}for(n=0;n<i;n++
){o=t[n];if(!o.parentNode)continue;c=o.MathJax.elementJax;if(!c)continue;if(!s){f=
o.previousSibling,h=f.firstChild.offsetWidth/60,p=f.lastChild.offsetWidth/60;if(h===0||
h==="NaN")h=this.defaultEx,p=this.defaultMEx;d=this.config.matchFontHeight&&p>1?h/
p:1,d=Math.floor(Math.max(this.config.minScaleAdjust/100,d)*this.config.scale),c.
NativeMML.ex=h,c.NativeMML.mex=p}else d=100;c.NativeMML.fontSize=d+"%",c.NativeMML
.scale=d/100}if(!s)for(n=0;n<i;n++)o=t[n],o.parentNode&&o.MathJax.elementJax&&o.parentNode
.removeChild(o.previousSibling)},Translate:function(e){if(!e.parentNode)return;var n=
e.MathJax.elementJax,r=n.root,i=document.getElementById(n.inputID+"-Frame");if(!i
)return;var a=i.firstChild,f=a.firstChild;this.ex=n.NativeMML.ex||this.defaultEx,
this.scale=n.NativeMML.scale||1,this.scale!==1&&(i.style.fontSize=n.NativeMML.fontSize
);try{r.toNativeMML(f,n)}catch(l){if(l.restart)while(f.firstChild)f.removeChild(f
.firstChild);throw l}if(s)if(a.addEventListener)for(var c in this.MSIE9events)this
.MSIE9events.hasOwnProperty(c)&&a.addEventListener(c,this.MSIE9event,!0);else{var h=
(this.config.showMathMenuMSIE!=null?this:t).config;h.showMathMenuMSIE&&!this.settings
.mpContext&&!this.settings.mpMouse?this.MSIEoverlay(a):(a.style.position="",f.firstChild
.onmousedown=this.MSIEaltMenu)}else a.oncontextmenu=o.Menu,a.onmouseover=o.Mouseover
,a.onmouseout=o.Mouseout,a.onmousedown=o.Mousedown,a.onclick=o.Click,a.ondblclick=
o.DblClick,t.Browser.noContextMenu&&(a.ontouchstart=u.start,a.ontouchend=u.end)},
postTranslate:function(e){if(this.forceReflow){var t=(document.styleSheets||[])[0
]||{};t.disabled=!0,t.disabled=!1}},Remove:function(e){var t=e.SourceElement();if(!
t)return;t=t.previousSibling;if(!t)return;t.className.match(/MathJax_MathML/)&&t.
parentNode.removeChild(t)},MMLnamespace:"http://www.w3.org/1998/Math/MathML",isFullWidth
:function(e){if(!e)return;var t=e.getAttribute("width")||(String(e.getAttribute("style"
)).match(/(?:^| )width: *([^; ]*)/)||[])[1];if(t)return!!t.match(/%/);if(e.nodeName
.match(/^(semantics|math|mstyle)$/))t=this.isFullWidth(e.firstChild);else if(e.nodeName
.toLowerCase()==="mrow")for(var n=0,r=e.childNodes.length;n<r&&!t;n++)t=this.isFullWidth
(e.childNodes[n]);if(t){var i="width:100%; "+(e.getAttribute("style")||"");e.setAttribute
("style",i.replace(/ +$/,""))}return t},MSIEoverlay:function(e){var n=e.firstChild
;n.nodeName.toLowerCase()==="span"&&(n=n.firstChild);var i=this.getHoverBBox(null
,n,{});r.addElement(e,"span",{style:{display:"inline-block",width:0,height:0,position
:"relative"}},[["span",{isMathJax:!0,className:"MathJax_MathPlayer_Overlay",style
:{display:"inline-block",position:"absolute",left:a.Px(-i.w),top:a.Px(-i.h-(i.y||0
)-1),width:a.Px(i.w),height:a.Px(i.h+i.d),cursor:"pointer","background-color":"white"
,filter:"alpha(opacity=0)"}}]]),t.Insert(e,{msieMath:n,onmousedown:this.MSIEevent
,oncontextmenu:this.MSIEevent,onclick:this.MSIEevent,onmouseup:this.MSIEevent,onmousemove
:this.MSIEevent,ondblclick:this.MSIEevent,onmouseover:this.MSIEevent,onmouseout:this
.MSIEevent})},MSIEevents:{mousedown:"Mousedown",contextmenu:"ContextMenu",click:"Click"
,mouseup:"Mouseup",mousemove:"Mousemove",dblclick:"DblClick",mouseover:"Mouseover"
,mouseout:"Mouseout"},MSIEevent:function(){var t=window.event,n=e.MSIEevents[t.type
];return e[n]&&e[n](t,this)===!1?!1:f&&f.HandleEvent(t,n,this)===!1?!1:(t.srcElement
.className==="MathJax_MathPlayer_Overlay"&&this.msieMath.fireEvent&&(n==="ContextMenu"||
n==="Mouseover"||n==="Mouseout")&&this.msieMath.fireEvent("on"+t.type,t),o.False(
t))},MSIEaltMenu:function(){var e=this.parentNode.parentNode;while(!e.jaxID)e=e.parentNode
;o.AltContextMenu(window.event,e)},MSIE9events:{contextmenu:"Menu",click:"Click",
dblclick:"DblClick",mouseup:"False",mouseover:"Mouseover",mouseout:"Mouseout"},MSIE9event
:function(t){if(t.type==="contextmenu"&&e.settings.mpContext)return!0;if(t.type==="mouseup"&&
e.settings.mpMouse)return!0;if(t.type==="click"&&e.settings.mpContext)return o.AltContextMenu
(t,this);var n=e.MSIE9events[t.type];return o[n].call(this,t)},getJaxFromMath:function(
e){e=e.parentNode;do e=e.nextSibling;while(e&&e.nodeName.toLowerCase()!=="script"
);return t.getJaxFor(e)},getHoverSpan:function(e,t){return t.firstChild},getHoverBBox
:function(e,t,n){return o.getBBox(t.parentNode)},Zoom:function(t,n,r,i,s){t.root.
toNativeMML(n),this.msieIE8HeightBug&&(n.style.position="absolute"),e.widthBug&&(
n.style.width=n.parentNode.style.width=""),n.parentNode.style.width.match(/%$/)&&
(n.parentNode.style.minWidth=Math.ceil(3*s/4)+"px");var u=r.offsetWidth||r.scrollWidth
,a=r.offsetHeight||r.scrollHeight,f=n.offsetWidth,l=n.offsetHeight;if(e.widthBug||
n.style.width.match(/%/)){var c=n.firstChild.firstChild.scrollWidth;c>f&&(f=c,n.parentNode
.style.width=n.style.minWidth=f+"px")}return this.msieIE8HeightBug&&(n.style.position=""
),{Y:-o.getBBox(n.parentNode).h,mW:u,mH:a,zW:f,zH:l}},NAMEDSPACE:{negativeveryverythinmathspace
:"-.0556em",negativeverythinmathspace:"-.1111em",negativethinmathspace:"-.1667em"
,negativemediummathspace:"-.2222em",negativethickmathspace:"-.2778em",negativeverythickmathspace
:"-.3333em",negativeveryverythickmathspace:"-.3889em",veryverythinmathspace:".0556em"
,verythinmathspace:".1111em",thinmathspace:".1667em",mediummathspace:".2222em",thickmathspace
:".2778em",verythickmathspace:".3333em",veryverythickmathspace:".3889em"}}),t.Register
.StartupHook("mml Jax Ready",function(){i=MathJax.ElementJax.mml,i.mbase.Augment(
{toNativeMML:function(e){var t=this.NativeMMLelement(this.type);this.NativeMMLattributes
(t);for(var n=0,r=this.data.length;n<r;n++)this.data[n]?this.data[n].toNativeMML(
t):t.appendChild(this.NativeMMLelement("mrow"));e.appendChild(t)},NativeMMLattributes
:function(e){var t=this.type==="mstyle"?i.math.prototype.defaults:this.defaults,n=
this.attrNames||i.copyAttributeNames,r=i.skipAttributes,s=i.copyAttributes;if(!this
.attrNames)for(var o in t)!r[o]&&!s[o]&&t.hasOwnProperty(o)&&this[o]!=null&&this[
o]!==t[o]&&e.setAttribute(o,this.NativeMMLattribute(this[o]));for(var u=0,a=n.length
;u<a;u++){if(s[n[u]]===1&&!t.hasOwnProperty(n[u]))continue;var f=(this.attr||{})[
n[u]];f==null&&(f=this[n[u]]),f!=null&&e.setAttribute(n[u],this.NativeMMLattribute
(f))}this.NativeMMLclass(e)},NativeMMLclass:function(e){var t=[];this["class"]&&t
.push(this["class"]);if(this.isa(i.TeXAtom)){var n=["ORD","OP","BIN","REL","OPEN"
,"CLOSE","PUNCT","INNER","VCENTER"][this.texClass];n&&t.push("MJX-TeXAtom-"+n)}this
.mathvariant&&this.NativeMMLvariants[this.mathvariant]&&t.push("MJX"+this.mathvariant
),this.variantForm&&t.push("MJX-variant"),t.length&&e.setAttribute("class",t.join
(" "))},NativeMMLattribute:function(t){return t=String(t),e.NAMEDSPACE[t]?t=e.NAMEDSPACE
[t]:t.match(/^\s*(([-+])?(\d+(\.\d*)?|\.\d+))\s*mu\s*$/)?t=(RegExp.$2||"")+(1/18*
RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em":this.NativeMMLvariants[t]&&(t=this
.NativeMMLvariants[t]),t},NativeMMLvariants:{"-tex-caligraphic":i.VARIANT.SCRIPT,"-tex-caligraphic-bold"
:i.VARIANT.BOLDSCRIPT,"-tex-oldstyle":i.VARIANT.NORMAL,"-tex-oldstyle-bold":i.VARIANT
.BOLD,"-tex-mathit":i.VARIANT.ITALIC},NativeMMLelement:function(n){var r=document
.createElementNS?document.createElementNS(e.MMLnamespace,n):t.Browser.mpNamespace?
document.createElement("m:"+n):document.createElement(n);return r.isMathJax=!0,r}
}),i.mrow.Augment({toNativeMML:function(t){var n,r;if(this.inferred&&this.parent.
inferRow)for(n=0,r=this.data.length;n<r;n++)this.data[n]?this.data[n].toNativeMML
(t):t.appendChild(this.NativeMMLelement("mrow"));else if(e.stretchyMoBug&&(this.open||
this.close)){var i=this.NativeMMLelement("mfenced");this.NativeMMLattributes(i),n=0
,r=this.data.length,this.open&&(i.setAttribute("open",this.open),n++),this.close&&
(i.setAttribute("close",this.close),r--);var s=i;r-n+1>1&&(s=this.NativeMMLelement
("mrow"),t.appendChild(i),t=i);for(;n<r;n++)this.data[n]?this.data[n].toNativeMML
(s):s.appendChild(this.NativeMMLelement("mrow"));t.appendChild(s)}else this.SUPER
(arguments).toNativeMML.call(this,t)}}),i.msubsup.Augment({toNativeMML:function(e
){var t=this.type;this.data[this.sup]==null&&(t="msub"),this.data[this.sub]==null&&
(t="msup");var n=this.NativeMMLelement(t);this.NativeMMLattributes(n),this.data[0
]&&delete this.data[0].inferred;for(var r=0,i=this.data.length;r<i;r++)this.data[
r]&&this.data[r].toNativeMML(n);e.appendChild(n)}}),i.munderover.Augment({toNativeMML
:function(e){var t=this.type;this.data[this.under]==null&&(t="mover"),this.data[this
.over]==null&&(t="munder");var n=this.NativeMMLelement(t);this.NativeMMLattributes
(n),this.data[0]&&delete this.data[0].inferred;for(var r=0,i=this.data.length;r<i
;r++)this.data[r]&&this.data[r].toNativeMML(n);e.appendChild(n)}});if(!s){var o=t
.SplitList;i.mtable.Augment({toNativeMML:function(n){var r,s;if(e.tableSpacingBug
){var u=this.getValues("rowspacing","columnspacing");this.nMMLtopPadding=o("0px "+
u.rowspacing),this.nMMLleftPadding=o("0px "+u.columnspacing);var a=this.nMMLtopPadding
,f=a.length;for(r=0,s=this.data.length;r<s;r++)this.data[r]&&(this.data[r].nMMLtopPadding=
a[r<f?r:f-1])}if(e.tableLabelBug)for(r=0,s=this.data.length;r<s;r++)if(this.data[
r]&&this.data[r].isa(i.mlabeledtr)){var l=t.config.displayAlign.charAt(0),c=this.
Get("side").charAt(0);this.nMMLhasLabels=!0,this.nMMLlaMatch=l===c,this.nMMLforceWidth=
l==="c"||!!(this.width||"").match("%");break}if(this.width&&this.ffTableWidthBug)
{var h=(this.style||"").replace(/;\s*$/,"").split(";");h[0]===""&&h.shift(),h.push
("width:"+this.width),this.style=h.join(";")}this.SUPER(arguments).toNativeMML.call
(this,n);if(this.nMMLhasLabels){var p=n.firstChild;if(this.nMMLforceWidth||c!=="r"
){var d=(l!=="l"?1:0)+(c==="l"?1:0);if(d){var v={columnalign:"left",columnwidth:"auto"
,columnspacing:"0px",columnlines:"none"};for(var m in v)if(v.hasOwnProperty(m)&&this
[m]){var g=[v[m],v[m]].slice(2-d).join(" ")+" ";p.setAttribute(m,g+p.getAttribute
(m))}}}(this.nMMLforceWidth||!this.nMMLlaMatch)&&p.setAttribute("width","100%")}}
}),i.mtr.Augment({toNativeMML:function(n){this.SUPER(arguments).toNativeMML.call(
this,n);var r=n.lastChild;if(e.tableSpacingBug){var i=this.parent.nMMLleftPadding
,s=i.length;for(var o=r.firstChild,u=0;o;o=o.nextSibling,u++)c(o,this.nMMLtopPadding
,i[u<s?u:s-1])}if(e.tableLabelBug){var a=this.parent.nMMLforceWidth,f=this.parent
.Get("side").charAt(0),h=t.config.displayAlign.charAt(0);if(this.parent.nMMLhasLabels&&
r.firstChild){if(a||f!=="r")l("Left",r.firstChild),h!=="l"&&r.insertBefore(this.NativeMMLelement
("mtd"),r.firstChild).setAttribute("style","padding:0"),f==="l"&&r.insertBefore(this
.NativeMMLelement("mtd"),r.firstChild).setAttribute("style","padding:0");(a||f!=="l"
)&&l("Right",r.lastChild)}}}}),i.mlabeledtr.Augment({toNativeMML:function(n){var r=
this.NativeMMLelement("mtr");this.NativeMMLattributes(r);for(var i=1,s=this.data.
length;i<s;i++)this.data[i]?this.data[i].toNativeMML(r):r.appendChild(this.NativeMMLelement
("mtd"));if(e.tableSpacingBug){var o=this.parent.nMMLleftPadding,u=o.length;i=0;for(
var a=r.firstChild;a;a=a.nextSibling,i++)c(a,this.nMMLtopPadding,o[i<u?i:u-1])}if(
e.tableLabelBug&&this.data[0]){var f=this.parent.Get("side").charAt(0),h=t.config
.displayAlign.charAt(0),p=t.config.displayIndent;this.data[0].toNativeMML(r);var d=
r.lastChild,v=d;f===h?(d.setAttribute("style","width:"+p),d.setAttribute("columnalign"
,t.config.displayAlign)):(v=this.NativeMMLelement("mpadded"),v.setAttribute("style"
,"width:0"),v.setAttribute("width","0px"),v.appendChild(d.firstChild),d.appendChild
(v)),l("",d),r.removeChild(d);var m=100,g=this.parent.nMMLforceWidth;(this.parent
.width||"").match(/%/)&&(m-=parseFloat(this.parent.width));var y=m;if(g||f!=="r")
l("Left",r.firstChild),h!=="l"&&(h==="c"&&(y/=2),m-=y,r.insertBefore(this.NativeMMLelement
("mtd"),r.firstChild).setAttribute("style","padding:0;width:"+y+"%")),f==="l"&&r.
insertBefore(d,r.firstChild);if(g||f!=="l")l("Right",r.lastChild),h!=="r"&&r.appendChild
(this.NativeMMLelement("mtd")).setAttribute("style","padding:0;width:"+m+"%"),f==="r"&&
(f!==h&&v.setAttribute("lspace","-1width"),r.appendChild(d))}n.appendChild(r)}}),
i.mtd.Augment({toNativeMML:function(t){var n=t.appendChild(this.NativeMMLelement(
this.type));this.NativeMMLattributes(n),e.mtdWidthBug&&(e.adjustWidths.push(n),n=
n.appendChild(this.NativeMMLelement("mrow")));for(var r=0,i=this.data.length;r<i;
r++)this.data[r]?this.data[r].toNativeMML(n):n.appendChild(this.NativeMMLelement("mrow"
))}}),i.mspace.Augment({toNativeMML:function(t){this.SUPER(arguments).toNativeMML
.call(this,t);if(e.spaceWidthBug&&this.width){var n=t.lastChild,r=n.getAttribute("width"
),i=(n.getAttribute("style")||"").replace(/;?\s*/,"; ");n.setAttribute("style",i+"width:"+
r)}}});var u=n.fileURL(MathJax.OutputJax.fontDir+"/HTML-CSS/TeX/otf");e.Augment({
config:{styles:{'[class="MJX-tex-oldstyle"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"
},'[class="MJX-tex-oldstyle-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"
,"font-weight":"bold"},'[class="MJX-tex-caligraphic"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"
},'[class="MJX-tex-caligraphic-bold"]':{"font-family":"MathJax_Caligraphic, MathJax_Caligraphic-WEB"
,"font-weight":"bold"},"@font-face /*1*/":{"font-family":"MathJax_Caligraphic-WEB"
,src:"url('"+u+"/MathJax_Caligraphic-Regular.otf')"},"@font-face /*2*/":{"font-family"
:"MathJax_Caligraphic-WEB","font-weight":"bold",src:"url('"+u+"/MathJax_Caligraphic-Bold.otf')"
}}}}),this.handlesVariants||e.Augment({config:{styles:{'[mathvariant="double-struck"]'
:{"font-family":"MathJax_AMS, MathJax_AMS-WEB"},'[mathvariant="script"]':{"font-family"
:"MathJax_Script, MathJax_Script-WEB"},'[mathvariant="fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB"
},'[mathvariant="bold-script"]':{"font-family":"MathJax_Script, MathJax_Caligraphic-WEB"
,"font-weight":"bold"},'[mathvariant="bold-fraktur"]':{"font-family":"MathJax_Fraktur, MathJax_Fraktur-WEB"
,"font-weight":"bold"},'[mathvariant="monospace"]':{"font-family":"monospace"},'[mathvariant="sans-serif"]'
:{"font-family":"sans-serif"},'[mathvariant="bold-sans-serif"]':{"font-family":"sans-serif"
,"font-weight":"bold"},'[mathvariant="sans-serif-italic"]':{"font-family":"sans-serif"
,"font-style":"italic"},'[mathvariant="sans-serif-bold-italic"]':{"font-family":"sans-serif"
,"font-style":"italic","font-weight":"bold"},"@font-face /*3*/":{"font-family":"MathJax_AMS-WEB"
,src:"url('"+u+"/MathJax_AMS-Regular.otf')"},"@font-face /*4*/":{"font-family":"MathJax_Script-WEB"
,src:"url('"+u+"/MathJax_Script-Regular.otf')"},"@font-face /*5*/":{"font-family"
:"MathJax_Fraktur-WEB",src:"url('"+u+"/MathJax_Fraktur-Regular.otf')"},"@font-face /*6*/"
:{"font-family":"MathJax_Fraktur-WEB","font-weight":"bold",src:"url('"+u+"/MathJax_Fraktur-Bold.otf')"
}}}})}i.math.Augment({toNativeMML:function(n,r){var i=this.NativeMMLelement(this.
type),s=i,o=r?MathJax.InputJax[r.inputJax].annotationEncoding:null,u,a;e.adjustWidths=
[],i.setAttribute("xmlns",e.MMLnamespace),this.NativeMMLattributes(i),e.widthBug&&
(i=i.appendChild(this.NativeMMLelement("mrow")));if(o){i=i.appendChild(this.NativeMMLelement
("semantics")),i.appendChild(this.NativeMMLelement("mrow"));var f=i.appendChild(this
.NativeMMLelement("annotation"));f.appendChild(document.createTextNode(r.originalText
)),f.setAttribute("encoding",o),i=i.firstChild}for(u=0,a=this.data.length;u<a;u++
)this.data[u]?this.data[u].toNativeMML(i):i.appendChild(this.NativeMMLelement("mrow"
));var l=(this.data[0]||{data:[]}).data[0]||{};if(l.nMMLhasLabels){if(l.nMMLforceWidth||!
l.nMMLlaMatch)i.setAttribute("style","width:100%"),o&&i.parentNode.setAttribute("style"
,"width:100%");l.nMMLlaMatch&&n.parentNode.parentNode.nodeName.toLowerCase()==="div"&&
n.parentNode.parentNode.style.setProperty("margin-"+t.config.displayAlign,"0px","important"
)}var c=e.isFullWidth(s);c&&(n.style.width=n.parentNode.style.width="100%"),n.appendChild
(s),e.widthBug&&!c&&(n.style.width=(s.firstChild.scrollWidth/e.ex/e.scale).toFixed
(3)+"ex",r&&(r.NativeMML.scrollWidth=s.firstChild.scrollWidth));if(e.adjustWidths
.length){var h=[];for(u=0,a=e.adjustWidths.length;u<a;u++){i=e.adjustWidths[u];var p=
i.getAttribute("style")||"";if(!p.match(/(^|;)\s*min-width:/)){var d=i.firstChild
.scrollWidth;h.push(d),d=(d/e.ex).toFixed(3)+"ex",p=p.replace(/;?\s*$/,"; "),i.setAttribute
("style",p+"min-width:"+d)}}r||(r=t.getJaxFor(n)),r&&(r.NativeMML.mtds=h),s.MathJaxMtds=
e.adjustWidths,e.adjustWidths=[]}}}),i.mfenced.Augment({toNativeMML:function(n){if(!
e.mfencedBug){this.SUPER(arguments).toNativeMML.call(this,n);return}var r=t.Browser
.isOpera,i,s,o,u=this.getValues("open","close","separators");u.open=u.open.replace
(/^\s+/,"").replace(/\s+$/,""),u.close=u.close.replace(/^\s+/,"").replace(/\s+$/,""
),u.separators=u.separators.replace(/\s+/g,"").split("");if(u.separators.length==0
)u.separators=null;else if(u.separators.length<this.data.length-1){var a=u.separators
[u.separators.length-1];for(i=this.data.length-1-u.separators.length;i>0;i--)u.separators
.push(a)}var f=this.NativeMMLelement(r?this.type:"mrow");this.NativeMMLattributes
(f),f.removeAttribute("separators"),r?(f.setAttribute("open",u.open),f.setAttribute
("close",u.close),this.data.length>1&&(n.appendChild(f),n=f,f=this.NativeMMLelement
("mrow"))):(f.removeAttribute("open"),f.removeAttribute("close")),r||(o=this.NativeMMLelement
("mo"),o.setAttribute("fence","true"),o.textContent=u.open,f.appendChild(o));for(
i=0,s=this.data.length;i<s;i++)u.separators&&i>0&&(o=this.NativeMMLelement("mo"),
o.setAttribute("separator","true"),o.textContent=u.separators[i-1],f.appendChild(
o)),this.data[i]?this.data[i].toNativeMML(f):f.appendChild(this.NativeMMLelement("mrow"
));r||(o=this.NativeMMLelement("mo"),o.setAttribute("fence","true"),o.textContent=
u.close,f.appendChild(o)),n.appendChild(f)}}),i.TeXAtom.Augment({toNativeMML:function(
e){var t=this.NativeMMLelement("mrow");this.NativeMMLattributes(t),this.data[0].toNativeMML
(t),e.appendChild(t)}}),i.chars.Augment({toNativeMML:function(e){e.appendChild(document
.createTextNode(this.toString()))}}),i.entity.Augment({toNativeMML:function(e){e.
appendChild(document.createTextNode(this.toString()))}}),i.xml.Augment({toNativeMML
:function(e){for(var t=0,n=this.data.length;t<n;t++)e.appendChild(this.data[t].cloneNode
(!0))}}),i.mi.Augment({toNativeMML:function(t){this.SUPER(arguments).toNativeMML.
call(this,t);if(e.miItalicBug&&this.Get("mathvariant")===i.VARIANT.NORMAL){var n=
t.lastChild;n.setAttribute("mathvariant",i.VARIANT.NORMAL)}}}),i.mo.Augment({toNativeMML
:function(t){this.SUPER(arguments).toNativeMML.call(this,t);if(e.webkitMoSpacingBug
){var n=0,i=0,s=this.parent;if(s&&s.type==="mrow"&&(s.inferred||!s.isEmbellished(
))){var o=this.getValues("lspace","rspace");n=o.lspace,i=o.rspace,e.NAMEDSPACE[n]&&
(n=e.NAMEDSPACE[n]),e.NAMEDSPACE[i]&&(i=e.NAMEDSPACE[i])}var u=t.lastChild,a=r.Element
("span");a.style.cssText=u.getAttribute("style")||"",a.style.setProperty("-webkit-margin-start"
,n),a.style.setProperty("-webkit-margin-end",i),u.setAttribute("style",a.style.cssText
)}}}),i.mmultiscripts.Augment({toNativeMML:function(t){if(!e.mmultiscriptsBug||this
.data.length===0){this.SUPER(arguments).toNativeMML.call(this,t);return}var n=this
.NativeMMLelement("mrow");this.NativeMMLattributes(n),this.data[0]?this.data[0].toNativeMML
(n):n.appendChild(this.NativeMMLelement("mrow"));var r=n.removeChild(n.lastChild)
,i=this.data.length,s,o;for(s=1;s<i;s+=2){if(this.data[s].type==="mprescripts")break;
o=this.NativeMMLelement("msubsup"),o.appendChild(r),this.data[s]?this.data[s].toNativeMML
(o):o.appendChild(this.NativeMMLelement("mrow")),s+1<i&&this.data[s+1]?this.data[
s+1].toNativeMML(o):o.appendChild(this.NativeMMLelement("mrow")),r=o}n.appendChild
(r);for(s++;s<i;s+=2)o=this.NativeMMLelement("msubsup"),o.appendChild(this.NativeMMLelement
("mrow")),this.data[s]?this.data[s].toNativeMML(o):o.appendChild(this.NativeMMLelement
("mrow")),s+1<i&&this.data[s+1]?this.data[s+1].toNativeMML(o):o.appendChild(this.
NativeMMLelement("mrow")),n.insertBefore(o,r);t.appendChild(n)}}),t.Register.StartupHook
("TeX mathchoice Ready",function(){i.TeXmathchoice.Augment({toNativeMML:function(
e){this.Core().toNativeMML(e)}})}),setTimeout(MathJax.Callback(["loadComplete",e,"jax.js"
]),0)}),t.Browser.Select({MSIE:function(t){var n=document.documentMode||0;e.msieIE8HeightBug=
n===8},Opera:function(t){e.operaPositionBug=!0,e.stretchyMoBug=!0,e.tableLabelBug=!0
,e.mfencedBug=!0,e.miBug=!0,e.mmultiscriptsBug=!0},Firefox:function(t){var n=t.versionAtLeast
("29.0");e.ffTableWidthBug=!t.versionAtLeast("13.0"),e.forceReflow=!n,e.widthBug=!
n,e.mtdWidthBug=!0,e.handlesVariants=n,e.spaceWidthBug=!t.versionAtLeast("20.0"),
e.tableSpacingBug=!t.versionAtLeast("33.0"),e.tableLabelBug=!0,e.mfencedBug=!0},Chrome
:function(t){e.tableSpacingBug=!0,e.tableLabelBug=!0,e.mfencedBug=!0},Safari:function(
t){e.tableSpacingBug=!0,e.tableLabelBug=!0,e.mfencedBug=!0,e.miItalicBug=!0,e.webkitMoSpacingBug=!0
,e.spaceWidthBug=!0,e.mmultiscriptsBug=!0}}),t.Register.StartupHook("End Cookie",
function(){t.config.menuSettings.zoom!=="None"&&n.Require("[MathJax]/extensions/MathZoom.js"
)})})(MathJax.OutputJax.NativeMML,MathJax.Hub,MathJax.Ajax,MathJax.HTML);