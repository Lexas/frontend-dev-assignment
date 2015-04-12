/*
 *  /MathJax/jax/output/CommonHTML/jax.js
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

(function(e,t,n,r){var i,s,o,u,a="'Times New Roman',Times,STIXGeneral,serif",f={".MJXc-script"
:{"font-size":".8em"},".MJXc-right":{"-webkit-transform-origin":"right","-moz-transform-origin"
:"right","-ms-transform-origin":"right","-o-transform-origin":"right","transform-origin"
:"right"},".MJXc-bold":{"font-weight":"bold"},".MJXc-italic":{"font-style":"italic"
},".MJXc-scr":{"font-family":"MathJax_Script,"+a},".MJXc-frak":{"font-family":"MathJax_Fraktur,"+
a},".MJXc-sf":{"font-family":"MathJax_SansSerif,"+a},".MJXc-cal":{"font-family":"MathJax_Caligraphic,"+
a},".MJXc-mono":{"font-family":"MathJax_Typewriter,"+a},".MJXc-largeop":{"font-size"
:"150%"},".MJXc-largeop.MJXc-int":{"vertical-align":"-.2em"},".MJXc-math":{display
:"inline-block","line-height":"1.2","text-indent":"0","font-family":a,"white-space"
:"nowrap","border-collapse":"collapse"},".MJXc-display":{display:"block","text-align"
:"center",margin:"1em 0"},".MJXc-math span":{display:"inline-block"},".MJXc-box":
{display:"block!important","text-align":"center"},".MJXc-box:after":{content:'" "'
},".MJXc-rule":{display:"block!important","margin-top":".1em"},".MJXc-char":{display
:"block!important"},".MJXc-mo":{margin:"0 .15em"},".MJXc-mfrac":{margin:"0 .125em"
,"vertical-align":".25em"},".MJXc-denom":{display:"inline-table!important",width:"100%"
},".MJXc-denom > *":{display:"table-row!important"},".MJXc-surd":{"vertical-align"
:"top"},".MJXc-surd > *":{display:"block!important"},".MJXc-script-box > * ":{display
:"table!important",height:"50%"},".MJXc-script-box > * > *":{display:"table-cell!important"
,"vertical-align":"top"},".MJXc-script-box > *:last-child > *":{"vertical-align":"bottom"
},".MJXc-script-box > * > * > *":{display:"block!important"},".MJXc-mphantom":{visibility
:"hidden"},".MJXc-munderover":{display:"inline-table!important"},".MJXc-over":{display
:"inline-block!important","text-align":"center"},".MJXc-over > *":{display:"block!important"
},".MJXc-munderover > *":{display:"table-row!important"},".MJXc-mtable":{"vertical-align"
:".25em",margin:"0 .125em"},".MJXc-mtable > *":{display:"inline-table!important","vertical-align"
:"middle"},".MJXc-mtr":{display:"table-row!important"},".MJXc-mtd":{display:"table-cell!important"
,"text-align":"center",padding:".5em 0 0 .5em"},".MJXc-mtr > .MJXc-mtd:first-child"
:{"padding-left":0},".MJXc-mtr:first-child > .MJXc-mtd":{"padding-top":0},".MJXc-mlabeledtr"
:{display:"table-row!important"},".MJXc-mlabeledtr > .MJXc-mtd:first-child":{"padding-left"
:0},".MJXc-mlabeledtr:first-child > .MJXc-mtd":{"padding-top":0},".MJXc-merror":{"background-color"
:"#FFFF88",color:"#CC0000",border:"1px solid #CC0000",padding:"1px 3px","font-style"
:"normal","font-size":"90%"}};(function(){for(var e=0;e<10;e++){var t="scaleX(."+
e+")";f[".MJXc-scale"+e]={"-webkit-transform":t,"-moz-transform":t,"-ms-transform"
:t,"-o-transform":t,transform:t}}})();var l=1e6,c="V",h="H";r.Augment({settings:t
.config.menuSettings,config:{styles:f},hideProcessedMath:!1,maxStretchyParts:1e3,
Config:function(){this.require||(this.require=[]),this.SUPER(arguments).Config.call
(this);var e=this.settings;e.scale&&(this.config.scale=e.scale),this.require.push
(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){s=MathJax.Extension
.MathEvents.Event,o=MathJax.Extension.MathEvents.Touch,u=MathJax.Extension.MathEvents
.Hover,this.ContextMenu=s.ContextMenu,this.Mousedown=s.AltContextMenu,this.Mouseover=
u.Mouseover,this.Mouseout=u.Mouseout,this.Mousemove=u.Mousemove;var t=n.addElement
(document.body,"div",{style:{width:"5in"}});return this.pxPerInch=t.offsetWidth/5
,t.parentNode.removeChild(t),e.Styles(this.config.styles,["InitializeCHTML",this]
)},InitializeCHTML:function(){},preTranslate:function(e){var r=e.jax[this.id],i,u=
r.length,a,f,l,c,h;for(i=0;i<u;i++){a=r[i];if(!a.parentNode)continue;f=a.previousSibling
,f&&String(f.className).match(/^MathJax_CHTML(_Display)?( MathJax_Processing)?$/)&&
f.parentNode.removeChild(f),h=a.MathJax.elementJax;if(!h)continue;h.CHTML={display
:h.root.Get("display")==="block"},l=c=n.Element("span",{className:"MathJax_CHTML"
,id:h.inputID+"-Frame",isMathJax:!0,jaxID:this.id,oncontextmenu:s.Menu,onmousedown
:s.Mousedown,onmouseover:s.Mouseover,onmouseout:s.Mouseout,onmousemove:s.Mousemove
,onclick:s.Click,ondblclick:s.DblClick}),t.Browser.noContextMenu&&(l.ontouchstart=
o.start,l.ontouchend=o.end),h.CHTML.display&&(c=n.Element("div",{className:"MathJax_CHTML_Display"
}),c.appendChild(l)),c.className+=" MathJax_Processing",a.parentNode.insertBefore
(c,a)}},Translate:function(e,t){if(!e.parentNode)return;var n=e.MathJax.elementJax
,r=n.root,i=document.getElementById(n.inputID+"-Frame"),s=n.CHTML.display?i.parentNode
:i;this.initCHTML(r,i);try{r.toCommonHTML(i)}catch(o){if(o.restart)while(i.firstChild
)i.removeChild(i.firstChild);throw o}s.className=s.className.split(/ /)[0],this.hideProcessedMath&&
(s.className+=" MathJax_Processed",e.MathJax.preview&&(n.CHTML.preview=e.MathJax.
preview,delete e.MathJax.preview))},postTranslate:function(e){var t=e.jax[this.id
];if(!this.hideProcessedMath)return;for(var n=0,r=t.length;n<r;n++){var i=t[n];if(
i&&i.MathJax.elementJax){i.previousSibling.className=i.previousSibling.className.
split(/ /)[0];var s=i.MathJax.elementJax.CHTML;s.preview&&(s.preview.innerHTML=""
,i.MathJax.preview=s.preview,delete s.preview)}}},getJaxFromMath:function(e){e.parentNode
.className==="MathJax_CHTML_Display"&&(e=e.parentNode);do e=e.nextSibling;while(e&&
e.nodeName.toLowerCase()!=="script");return t.getJaxFor(e)},getHoverSpan:function(
e,t){return e.root.CHTMLspanElement()},getHoverBBox:function(e,t,n){return BBOX},
Zoom:function(e,t,n,r,i){t.className="MathJax",this.idPostfix="-zoom",e.root.toCHTML
(t,t),this.idPostfix="",t.style.position="absolute",width||(n.style.position="absolute"
);var o=t.offsetWidth,u=t.offsetHeight,a=n.offsetHeight,f=n.offsetWidth;return f===0&&
(f=n.parentNode.offsetWidth),t.style.position=n.style.position="",{Y:-s.getBBox(t
).h,mW:f,mH:a,zW:o,zH:u}},initCHTML:function(e,t){},Remove:function(e){var t=document
.getElementById(e.inputID+"-Frame");t&&(e.CHTML.display&&(t=t.parentNode),t.parentNode
.removeChild(t)),delete e.CHTML},ID:0,idPostfix:"",GetID:function(){return this.ID++
,this.ID},VARIANT:{bold:"MJXc-bold",italic:"MJXc-italic","bold-italic":"MJXc-bold MJXc-italic"
,script:"MJXc-scr","bold-script":"MJXc-scr MJXc-bold",fraktur:"MJXc-frak","bold-fraktur"
:"MJXc-frak MJXc-bold",monospace:"MJXc-mono","sans-serif":"MJXc-sf","-tex-caligraphic"
:"MJXc-cal"},MATHSPACE:{veryverythinmathspace:1/18,verythinmathspace:2/18,thinmathspace
:3/18,mediummathspace:4/18,thickmathspace:5/18,verythickmathspace:6/18,veryverythickmathspace
:7/18,negativeveryverythinmathspace:-1/18,negativeverythinmathspace:-2/18,negativethinmathspace
:-3/18,negativemediummathspace:-4/18,negativethickmathspace:-5/18,negativeverythickmathspace
:-6/18,negativeveryverythickmathspace:-7/18,thin:.08,medium:.1,thick:.15,infinity
:l},TeX:{x_height:.430554},pxPerInch:72,em:16,DELIMITERS:{"(":{dir:c},"{":{dir:c,
w:.58},"[":{dir:c},"|":{dir:c,w:.275},")":{dir:c},"}":{dir:c,w:.58},"]":{dir:c},"/"
:{dir:c},"\\":{dir:c},"∣":{dir:c,w:.275},"∥":{dir:c,w:.55},"⌊":{dir:c,w:.5},"⌋":{
dir:c,w:.5},"⌈":{dir:c,w:.5},"⌉":{dir:c,w:.5},"⟨":{dir:c,w:.5},"⟩":{dir:c,w:.5},"↑"
:{dir:c,w:.65},"↓":{dir:c,w:.65},"⇑":{dir:c,w:.75},"⇓":{dir:c,w:.75},"↕":{dir:c,w
:.65},"⇕":{dir:c,w:.75},"⟮":{dir:c,w:.275},"⟯":{dir:c,w:.275},"⎰":{dir:c,w:.6},"⎱"
:{dir:c,w:.6}},REMAPACCENT:{"⃗":"→","'":"ˋ","`":"ˊ",".":"˙","^":"ˆ","-":"ˉ","~":"˜"
,"¯":"ˉ","°":"˚","´":"ˊ","̀":"ˋ","́":"ˊ","̂":"ˆ","̃":"˜","̄":"ˉ","̅":"ˉ","̆":"˘","̇"
:"˙","̈":"¨","̌":"ˇ"},REMAPACCENTUNDER:{},length2em:function(e,t){typeof e!="string"&&
(e=e.toString());if(e==="")return"";if(e===i.SIZE.NORMAL)return 1;if(e===i.SIZE.BIG
)return 2;if(e===i.SIZE.SMALL)return.71;if(this.MATHSPACE[e])return this.MATHSPACE
[e];var n=e.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
),r=parseFloat(n[1]||"1"),s=n[2];return t==null&&(t=1),s==="em"?r:s==="ex"?r*this
.TeX.x_height:s==="%"?r/100*t:s==="px"?r/this.em:s==="pt"?r/10:s==="pc"?r*1.2:s==="in"?
r*this.pxPerInch/this.em:s==="cm"?r*this.pxPerInch/this.em/2.54:s==="mm"?r*this.pxPerInch/
this.em/25.4:s==="mu"?r/18:r*t},Em:function(e){return Math.abs(e)<.001?"0em":e.toFixed
(3).replace(/\.?0+$/,"")+"em"},arrayEntry:function(e,t){return e[Math.max(0,Math.
min(t,e.length-1))]}}),MathJax.Hub.Register.StartupHook("mml Jax Ready",function(
){i=MathJax.ElementJax.mml,i.mbase.Augment({toCommonHTML:function(e,t){return this
.CHTMLdefaultSpan(e,t)},CHTMLdefaultSpan:function(e,t){t||(t={}),e=this.CHTMLcreateSpan
(e),this.CHTMLhandleStyle(e),this.CHTMLhandleColor(e),this.isToken&&this.CHTMLhandleToken
(e);for(var n=0,r=this.data.length;n<r;n++)this.CHTMLaddChild(e,n,t);return e},CHTMLaddChild
:function(e,t,r){var i=this.data[t];i?(r.childSpans&&(e=n.addElement(e,"span",{className
:r.className})),i.toCommonHTML(e),r.noBBox||(this.CHTML.w+=i.CHTML.w+i.CHTML.l+i.
CHTML.r,i.CHTML.h>this.CHTML.h&&(this.CHTML.h=i.CHTML.h),i.CHTML.d>this.CHTML.d&&
(this.CHTML.d=i.CHTML.d),i.CHTML.t>this.CHTML.t&&(this.CHTML.t=i.CHTML.t),i.CHTML
.b>this.CHTML.b&&(this.CHTML.b=i.CHTML.b))):r.forceChild&&n.addElement(e,"span")}
,CHTMLstretchChild:function(e,t,n){var r=this.data[e];if(r&&r.CHTMLcanStretch("Vertical"
,t,n)){var i=this.CHTML,s=r.CHTML,o=s.w;r.CHTMLstretchV(t,n),i.w+=s.w-o,s.h>i.h&&
(i.h=s.h),s.d>i.d&&(i.d=s.d)}},CHTMLcreateSpan:function(e){this.CHTML||(this.CHTML=
{}),this.CHTML={w:0,h:0,d:0,l:0,r:0,t:0,b:0};if(this.inferred)return e;if(this.type==="mo"&&
this.data.join("")==="∫")r.lastIsInt=!0;else if(this.type!=="mspace"||this.width!=="negativethinmathspace"
)r.lastIsInt=!1;this.CHTMLspanID||(this.CHTMLspanID=r.GetID());var t=this.id||"MJXc-Span-"+
this.CHTMLspanID;return n.addElement(e,"span",{className:"MJXc-"+this.type,id:t})
},CHTMLspanElement:function(){return this.CHTMLspanID?document.getElementById(this
.id||"MJXc-Span-"+this.CHTMLspanID):null},CHTMLhandleToken:function(e){var t=this
.getValues("mathvariant");t.mathvariant!==i.VARIANT.NORMAL&&(e.className+=" "+r.VARIANT
[t.mathvariant])},CHTMLhandleStyle:function(e){this.style&&(e.style.cssText=this.
style)},CHTMLhandleColor:function(e){this.mathcolor&&(e.style.color=this.mathcolor
),this.mathbackground&&(e.style.backgroundColor=this.mathbackground)},CHTMLhandleScriptlevel
:function(e){var t=this.Get("scriptlevel");t&&(e.className+=" MJXc-script")},CHTMLhandleText
:function(e,t){var i,s,o=0,u=0,a=0;for(var f=0,l=t.length;f<l;f++){s=t.charCodeAt
(f),i=t.charAt(f),s>=55296&&s<56319&&(f++,s=(s-55296<<10)+(t.charCodeAt(f)-56320)+65536
);var c=.7,h=.22,p=.5;s<127&&(i.match(/[A-Za-ehik-or-xz0-9]/)&&(h=0),i.match(/[A-HK-Z]/
)?p=.67:i.match(/[IJ]/)&&(p=.36),i.match(/[acegm-su-z]/)?c=.45:i.match(/[ij]/)&&(
c=.75),i.match(/[ijlt]/)&&(p=.28)),r.DELIMITERS[i]&&(p=r.DELIMITERS[i].w||.4),c>o&&
(o=c),h>u&&(u=h),a+=p}this.CHML||(this.CHTML={}),this.CHTML={h:.9,d:.3,w:a,l:0,r:0
,t:o,b:u},n.addText(e,t)},CHTMLbboxFor:function(e){return this.data[e]&&this.data
[e].CHTML?this.data[e].CHTML:{w:0,h:0,d:0,l:0,r:0,t:0,b:0}},CHTMLcanStretch:function(
e,t,n){if(this.isEmbellished()){var r=this.Core();if(r&&r!==this)return r.CHTMLcanStretch
(e,t,n)}return!1},CHTMLstretchV:function(e,t){},CHTMLstretchH:function(e){},CoreParent
:function(){var e=this;while(e&&e.isEmbellished()&&e.CoreMO()===this&&!e.isa(i.math
))e=e.Parent();return e},CoreText:function(e){if(!e)return"";if(e.isEmbellished()
)return e.CoreMO().data.join("");while((e.isa(i.mrow)||e.isa(i.TeXAtom)||e.isa(i.
mstyle)||e.isa(i.mphantom))&&e.data.length===1&&e.data[0])e=e.data[0];return e.isToken?
e.data.join(""):""}}),i.chars.Augment({toCommonHTML:function(e){var t=this.toString
().replace(/[\u2061-\u2064]/g,"");this.CHTMLhandleText(e,t)}}),i.entity.Augment({
toCommonHTML:function(e){var t=this.toString().replace(/[\u2061-\u2064]/g,"");this
.CHTMLhandleText(e,t)}}),i.math.Augment({toCommonHTML:function(e){return e=this.CHTMLdefaultSpan
(e),this.Get("display")==="block"&&(e.className+=" MJXc-display"),e}}),i.mo.Augment
({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e),this.CHTMLadjustAccent(e);var t=
this.getValues("lspace","rspace","scriptlevel","displaystyle","largeop");t.scriptlevel===0?
(this.CHTML.l=r.length2em(t.lspace),this.CHTML.r=r.length2em(t.rspace),e.style.marginLeft=
r.Em(this.CHTML.l),e.style.marginRight=r.Em(this.CHTML.r)):(this.CHTML.l=.15,this
.CHTML.r=.1);if(t.displaystyle&&t.largeop){var i=n.Element("span",{className:"MJXc-largeop"
});i.appendChild(e.firstChild),e.appendChild(i),this.CHTML.h*=1.2,this.CHTML.d*=1.2
,this.data.join("")==="∫"&&(i.className+=" MJXc-int")}return e},CHTMLadjustAccent
:function(e){var t=this.CoreParent();if(t&&t.isa(i.munderover)&&this.CoreText(t.data
[t.base]).length===1){var n=t.data[t.over],s=t.data[t.under],o=this.data.join("")
,u;n&&this===n.CoreMO()&&t.Get("accent")?u=r.REMAPACCENT[o]:s&&this===s.CoreMO()&&
t.Get("accentunder")&&(u=r.REMAPACCENTUNDER[o]),u&&(o=e.innerHTML=u),o.match(/[\u02C6-\u02DC\u00A8]/
)?this.CHTML.acc=-0.52:o==="→"&&(this.CHTML.acc=-0.15,this.CHTML.vec=!0)}},CHTMLcanStretch
:function(e,t,n){if(!this.Get("stretchy"))return!1;var i=this.data.join("");if(i.
length>1)return!1;i=r.DELIMITERS[i];var s=i&&i.dir===e.substr(0,1);return s&&(s=this
.CHTML.h!==t||this.CHTML.d!==n||this.Get("minsize",!0)||this.Get("maxsize",!0)),s
},CHTMLstretchV:function(e,t){var i=this.CHTMLspanElement(),s=this.CHTML,o=this.getValues
("symmetric","maxsize","minsize");o.symmetric?h=2*Math.max(e-.25,t+.25):h=e+t,o.maxsize=
r.length2em(o.maxsize,s.h+s.d),o.minsize=r.length2em(o.minsize,s.h+s.d),h=Math.max
(o.minsize,Math.min(o.maxsize,h));var u=h/(s.h+s.d-.3),a=n.Element("span",{style:
{"font-size":r.Em(u)}});if(u>1.25){var f=Math.ceil(1.25/u*10);a.className="MJXc-right MJXc-scale"+
f,a.style.marginLeft=r.Em(s.w*(f/10-1)+.07),s.w*=u*f/10}a.appendChild(i.firstChild
),i.appendChild(a),o.symmetric&&(i.style.verticalAlign=r.Em(.25*(1-u)))}}),i.mspace
.Augment({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e);var t=this.getValues
("height","depth","width"),n=r.length2em(t.width),i=r.length2em(t.height),s=r.length2em
(t.depth),o=this.CHTML;return o.w=n,o.h=i,o.d=s,n<0&&(r.lastIsInt||(e.style.marginLeft=
r.Em(n)),n=0),e.style.width=r.Em(n),e.style.height=r.Em(i+s),s&&(e.style.verticalAlign=
r.Em(-s)),e}}),i.mpadded.Augment({toCommonHTML:function(e){e=this.CHTMLdefaultSpan
(e,{childSpans:!0,className:"MJXc-box",forceChild:!0});var t=e.firstChild,n=this.
getValues("width","height","depth","lspace","voffset"),i=this.CHTMLdimen(n.lspace
),s=0,o=0,u=i.len,a=-i.len,f=0;return n.width!==""&&(i=this.CHTMLdimen(n.width,"w"
,0),i.pm?a+=i.len:e.style.width=r.Em(i.len)),n.height!==""&&(i=this.CHTMLdimen(n.
height,"h",0),i.pm||(s+=-this.CHTMLbboxFor(0).h),s+=i.len),n.depth!==""&&(i=this.
CHTMLdimen(n.depth,"d",0),i.pm||(o+=-this.CHTMLbboxFor(0).d,f+=-i.len),o+=i.len),
n.voffset!==""&&(i=this.CHTMLdimen(n.voffset),s-=i.len,o+=i.len,f+=i.len),s&&(t.style
.marginTop=r.Em(s)),o&&(t.style.marginBottom=r.Em(o)),u&&(t.style.marginLeft=r.Em
(u)),a&&(t.style.marginRight=r.Em(a)),f&&(e.style.verticalAlign=r.Em(f)),e},CHTMLdimen
:function(e,t,n){n==null&&(n=-l),e=String(e);var i=e.match(/width|height|depth/),
s=i?this.CHTML[i[0].charAt(0)]:t?this.CHTML[t]:0;return{len:r.length2em(e,s)||0,pm
:!!e.match(/^[-+]/)}}}),i.munderover.Augment({toCommonHTML:function(e){var t=this
.getValues("displaystyle","accent","accentunder","align");if(!t.displaystyle&&this
.data[this.base]!=null&&this.data[this.base].CoreMO().Get("movablelimits"))return e=
i.msubsup.prototype.toCommonHTML.call(this,e),e.className=e.className.replace(/munderover/
,"msubsup"),e;e=this.CHTMLdefaultSpan(e,{childSpans:!0,className:"",noBBox:!0});var s=
this.CHTMLbboxFor(this.over),o=this.CHTMLbboxFor(this.under),u=this.CHTMLbboxFor(
this.base),a=this.CHTML,f=s.acc;if(this.data[this.over]){e.lastChild.firstChild.style
.marginLeft=s.l=e.lastChild.firstChild.style.marginRight=s.r=0;var l=n.Element("span"
,{},[["span",{className:"MJXc-over"}]]);l.firstChild.appendChild(e.lastChild),e.childNodes
.length>(this.data[this.under]?1:0)&&l.firstChild.appendChild(e.firstChild),this.
data[this.over].CHTMLhandleScriptlevel(l.firstChild.firstChild),f!=null&&(s.vec&&
(l.firstChild.firstChild.firstChild.style.fontSize="60%",s.h*=.6,s.d*=.6,s.w*=.6)
,f=f-s.d+.1,u.t!=null&&(f+=u.t-u.h),l.firstChild.firstChild.style.marginBottom=r.
Em(f)),e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)}return this.data
[this.under]&&(e.lastChild.firstChild.style.marginLeft=o.l=e.lastChild.firstChild
.marginRight=o.r=0,this.data[this.under].CHTMLhandleScriptlevel(e.lastChild)),a.w=
Math.max(.8*s.w,.8*o.w,u.w),a.h=.8*(s.h+s.d+(f||0))+u.h,a.d=u.d+.8*(o.h+o.d),e}})
,i.msubsup.Augment({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e,{noBBox:!0
}),this.data[this.base]||(e.firstChild?e.insertBefore(n.Element("span"),e.firstChild
):e.appendChild(n.Element("span")));var t=this.data[this.base],i=this.data[this.sub
],s=this.data[this.sup];t||(t={bbox:{h:.8,d:.2}}),e.firstChild.style.marginRight=".05em"
;var o=Math.max(.4,t.CHTML.h-.4),u=Math.max(.2,t.CHTML.d+.1),a=this.CHTML;if(s&&i
){var f=n.Element("span",{className:"MJXc-script-box",style:{height:r.Em(o+s.CHTML
.h*.8+u+i.CHTML.d*.8),"vertical-align":r.Em(-u-i.CHTML.d*.8)}},[["span",{},[["span"
,{},[["span",{style:{"margin-bottom":r.Em(-(s.CHTML.d-.05))}}]]]]],["span",{},[["span"
,{},[["span",{style:{"margin-top":r.Em(-(s.CHTML.h-.05))}}]]]]]]);i.CHTMLhandleScriptlevel
(f.firstChild),s.CHTMLhandleScriptlevel(f.lastChild),f.firstChild.firstChild.firstChild
.appendChild(e.lastChild),f.lastChild.firstChild.firstChild.appendChild(e.lastChild
),e.appendChild(f),a.h=Math.max(t.CHTML.h,s.CHTML.h*.8+o),a.d=Math.max(t.CHTML.d,
i.CHTML.d*.8+u),a.w=t.CHTML.w+Math.max(s.CHTML.w,i.CHTML.w)+.07}else s?(e.lastChild
.style.verticalAlign=r.Em(o),s.CHTMLhandleScriptlevel(e.lastChild),a.h=Math.max(t
.CHTML.h,s.CHTML.h*.8+o),a.d=Math.max(t.CHTML.d,s.CHTML.d*.8-o),a.w=t.CHTML.w+s.CHTML
.w+.07):i&&(e.lastChild.style.verticalAlign=r.Em(-u),i.CHTMLhandleScriptlevel(e.lastChild
),a.h=Math.max(t.CHTML.h,i.CHTML.h*.8-u),a.d=Math.max(t.CHTML.d,i.CHTML.d*.8+u),a
.w=t.CHTML.w+i.CHTML.w+.07);return e}}),i.mfrac.Augment({toCommonHTML:function(e)
{e=this.CHTMLdefaultSpan(e,{childSpans:!0,className:"MJXc-box",forceChild:!0,noBBox
:!0});var t=this.getValues("linethickness","displaystyle");t.displaystyle||(this.
data[0]&&this.data[0].CHTMLhandleScriptlevel(e.firstChild),this.data[1]&&this.data
[1].CHTMLhandleScriptlevel(e.lastChild));var i=n.Element("span",{className:"MJXc-box"
,style:{"margin-top":"-.8em"}},[["span",{className:"MJXc-denom"},[["span",{},[["span"
,{className:"MJXc-rule"}]]],["span"]]]]);i.firstChild.lastChild.appendChild(e.lastChild
),e.appendChild(i);var s=this.CHTMLbboxFor(0),o=this.CHTMLbboxFor(1),u=this.CHTML
;u.w=Math.max(s.w,o.w)*.8,u.h=s.h+s.d+.1+.25,u.d=o.h+o.d-.25,u.l=u.r=.125,t.linethickness=
Math.max(0,r.length2em(t.linethickness||"0",0));if(t.linethickness){var a=i.firstChild
.firstChild.firstChild,f=r.Em(t.linethickness);a.style.borderTop=(t.linethickness<.15?"1px"
:f)+" solid",a.style.margin=f+" 0",f=t.linethickness,i.style.marginTop=r.Em(3*f-.9
),e.style.verticalAlign=r.Em(1.5*f+.1),u.h+=1.5*f-.1,u.d+=1.5*f}return e}}),i.msqrt
.Augment({toCommonHTML:function(e){return e=this.CHTMLdefaultSpan(e,{childSpans:!0
,className:"MJXc-box",forceChild:!0,noBBox:!0}),this.CHTMLlayoutRoot(e,e.firstChild
),e},CHTMLlayoutRoot:function(e,t){var i=this.CHTMLbboxFor(0),s=Math.ceil((i.h+i.
d+.14)*100),o=r.Em(14/s),u=n.Element("span",{className:"MJXc-surd"},[["span",{style
:{"font-size":s+"%","margin-top":o}},["√"]]]),a=n.Element("span",{className:"MJXc-root"
},[["span",{className:"MJXc-rule",style:{"border-top":".08em solid"}}]]),f=1.2/2.2*
s/100;if(s>150){var l=Math.ceil(150/s*10);u.firstChild.className="MJXc-right MJXc-scale"+
l,u.firstChild.style.marginLeft=r.Em(f*(l/10-1)/s*100),f=f*l/10,a.firstChild.style
.borderTopWidth=r.Em(.08/Math.sqrt(l/10))}return a.appendChild(t),e.appendChild(u
),e.appendChild(a),this.CHTML.h=i.h+.18,this.CHTML.d=i.d,this.CHTML.w=i.w+f,e}}),
i.mroot.Augment({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e,{childSpans:!0
,className:"MJXc-box",forceChild:!0,noBBox:!0});var t=this.CHTMLbboxFor(1),i=e.removeChild
(e.lastChild),s=this.CHTMLlayoutRoot(n.Element("span"),e.firstChild);i.className="MJXc-script"
;var o=parseInt(s.firstChild.firstChild.style.fontSize),u=.55*(o/120)+t.d*.8,a=-0.6*
(o/120);return o>150&&(a*=.95*Math.ceil(150/o*10)/10),i.style.marginRight=r.Em(a)
,i.style.verticalAlign=r.Em(u),-a>t.w*.8&&(i.style.marginLeft=r.Em(-a-t.w*.8)),e.
appendChild(i),e.appendChild(s),this.CHTML.w+=Math.max(0,t.w*.8+a),this.CHTML.h=Math
.max(this.CHTML.h,t.h*.8+u),e},CHTMLlayoutRoot:i.msqrt.prototype.CHTMLlayoutRoot}
),i.mfenced.Augment({toCommonHTML:function(e){e=this.CHTMLcreateSpan(e),this.CHTMLhandleStyle
(e),this.CHTMLhandleColor(e),this.addFakeNodes(),this.CHTMLaddChild(e,"open",{});
for(var t=0,n=this.data.length;t<n;t++)this.CHTMLaddChild(e,"sep"+t,{}),this.CHTMLaddChild
(e,t,{});this.CHTMLaddChild(e,"close",{});var r=this.CHTML.h,i=this.CHTML.d;this.
CHTMLstretchChild("open",r,i);for(t=0,n=this.data.length;t<n;t++)this.CHTMLstretchChild
("sep"+t,r,i),this.CHTMLstretchChild(t,r,i);return this.CHTMLstretchChild("close"
,r,i),e}}),i.mrow.Augment({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e);var t=
this.CHTML.h,n=this.CHTML.d;for(var r=0,i=this.data.length;r<i;r++)this.CHTMLstretchChild
(r,t,n);return e}}),i.mstyle.Augment({toCommonHTML:function(e){return e=this.CHTMLdefaultSpan
(e),this.CHTMLhandleScriptlevel(e),e}}),i.TeXAtom.Augment({toCommonHTML:function(
e){return e=this.CHTMLdefaultSpan(e),e.className="MJXc-mrow",e}}),i.mtable.Augment
({toCommonHTML:function(e){e=this.CHTMLdefaultSpan(e,{noBBox:!0});var t=this.getValues
("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns"
,"equalrows","columnlines","rowlines","frame","framespacing","align","width"),i=MathJax
.Hub.SplitList,s,o,u,a,f=i(t.columnspacing),l=i(t.rowspacing),c=i(t.columnalign),
h=i(t.rowalign);for(s=0,o=f.length;s<o;s++)f[s]=r.length2em(f[s]);for(s=0,o=l.length
;s<o;s++)l[s]=r.length2em(l[s]);var p=n.Element("span");while(e.firstChild)p.appendChild
(e.firstChild);e.appendChild(p);var d=0,v=0;for(s=0,o=this.data.length;s<o;s++){var m=
this.data[s];if(m){var y=r.arrayEntry(l,s-1),b=r.arrayEntry(h,s),w=m.CHTML,E=m.CHTMLspanElement
();E.style.verticalAlign=b;var S=m.type==="mlabeledtr"?1:0;for(u=0,a=m.data.length
;u<a-S;u++){var x=m.data[u+S];if(x){var T=r.arrayEntry(f,u-1),N=r.arrayEntry(c,u)
,C=x.CHTMLspanElement();u&&(w.w+=T,C.style.paddingLeft=r.Em(T)),s&&(C.style.paddingTop=
r.Em(y)),C.style.textAlign=N}}d+=w.h+w.d,s&&(d+=y),w.w>v&&(v=w.w)}}var k=this.CHTML
;return k.w=v,k.h=d/2+.25,k.d=d/2-.25,k.l=k.r=.125,e}}),i.mlabeledtr.Augment({CHTMLdefaultSpan
:function(e,t){t||(t={}),e=this.CHTMLcreateSpan(e),this.CHTMLhandleStyle(e),this.
CHTMLhandleColor(e),this.isToken&&this.CHTMLhandleToken(e);for(var n=1,r=this.data
.length;n<r;n++)this.CHTMLaddChild(e,n,t);return e}}),i.semantics.Augment({toCommonHTML
:function(e){return e=this.CHTMLcreateSpan(e),this.data[0]&&(this.data[0].toCommonHTML
(e),MathJax.Hub.Insert(this.data[0].CHTML||{},this.CHTML)),e}}),i.annotation.Augment
({toCommonHTML:function(e){}}),i["annotation-xml"].Augment({toCommonHTML:function(
e){}}),MathJax.Hub.Register.StartupHook("onLoad",function(){setTimeout(MathJax.Callback
(["loadComplete",r,"jax.js"]),0)})}),MathJax.Hub.Register.StartupHook("End Cookie"
,function(){t.config.menuSettings.zoom!=="None"&&e.Require("[MathJax]/extensions/MathZoom.js"
)})})(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.OutputJax.CommonHTML);