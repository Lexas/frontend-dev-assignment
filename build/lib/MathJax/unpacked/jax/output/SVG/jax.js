/*************************************************************
 *
 *  MathJax/jax/output/SVG/jax.js
 *
 *  Implements the SVG OutputJax that displays mathematics using
 *  SVG (or VML in IE) to position the characters from math fonts
 *  in their proper locations.
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

(function(e,t,n,r){var i,s="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink"
;r.Augment({config:{styles:{".MathJax_SVG":{display:"inline","font-style":"normal"
,"font-weight":"normal","line-height":"normal","font-size":"100%","font-size-adjust"
:"none","text-indent":0,"text-align":"left","text-transform":"none","letter-spacing"
:"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float"
:"none",direction:"ltr","max-width":"none","max-height":"none","min-width":0,"min-height"
:0,border:0,padding:0,margin:0},".MathJax_SVG_Display":{position:"relative",display
:"block!important","text-indent":0,"max-width":"none","max-height":"none","min-width"
:0,"min-height":0,width:"100%"},".MathJax_SVG *":{transition:"none","-webkit-transition"
:"none","-moz-transition":"none","-ms-transition":"none","-o-transition":"none"},".mjx-svg-href"
:{fill:"blue",stroke:"blue"},".MathJax_SVG_Processing":{visibility:"hidden",position
:"absolute",top:0,left:0,width:0,height:0,overflow:"hidden",display:"block!important"
},".MathJax_SVG_Processed":{display:"none!important"},".MathJax_SVG_ExBox":{display
:"block!important",overflow:"hidden",width:"1px",height:"60ex","min-height":0,"max-height"
:"none",padding:0,border:0,margin:0},"#MathJax_SVG_Tooltip":{position:"absolute",
left:0,top:0,width:"auto",height:"auto",display:"none"}}},hideProcessedMath:!0,fontNames
:["TeX","STIX","STIX-Web","Asana-Math","Gyre-Termes","Gyre-Pagella","Latin-Modern"
,"Neo-Euler"],Config:function(){this.SUPER(arguments).Config.apply(this,arguments
);var e=t.config.menuSettings,n=this.config,r=e.font;e.scale&&(n.scale=e.scale),r&&
r!=="Auto"?(r=r.replace(/(Local|Web|Image)$/i,""),r=r.replace(/([a-z])([A-Z])/,"$1-$2"
),this.fontInUse=r):this.fontInUse=n.font||"TeX",this.fontNames.indexOf(this.fontInUse
)<0&&(this.fontInUse="TeX"),this.fontDir+="/"+this.fontInUse,this.require||(this.
require=[]),this.require.push(this.fontDir+"/fontdata.js"),this.require.push(MathJax
.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){EVENT=MathJax.Extension
.MathEvents.Event,TOUCH=MathJax.Extension.MathEvents.Touch,HOVER=MathJax.Extension
.MathEvents.Hover,this.ContextMenu=EVENT.ContextMenu,this.Mousedown=EVENT.AltContextMenu
,this.Mouseover=HOVER.Mouseover,this.Mouseout=HOVER.Mouseout,this.Mousemove=HOVER
.Mousemove,this.hiddenDiv=n.Element("div",{style:{visibility:"hidden",overflow:"hidden"
,position:"absolute",top:0,height:"1px",width:"auto",padding:0,border:0,margin:0,
textAlign:"left",textIndent:0,textTransform:"none",lineHeight:"normal",letterSpacing
:"normal",wordSpacing:"normal"}}),document.body.firstChild?document.body.insertBefore
(this.hiddenDiv,document.body.firstChild):document.body.appendChild(this.hiddenDiv
),this.hiddenDiv=n.addElement(this.hiddenDiv,"div",{id:"MathJax_SVG_Hidden"});var t=
n.addElement(this.hiddenDiv,"div",{style:{width:"5in"}});return this.pxPerInch=t.
offsetWidth/5,this.hiddenDiv.removeChild(t),this.textSVG=this.Element("svg"),u.GLYPH
.defs=this.addElement(this.addElement(this.hiddenDiv.parentNode,"svg"),"defs",{id
:"MathJax_SVG_glyphs"}),this.ExSpan=n.Element("span",{style:{position:"absolute","font-size-adjust"
:"none"}},[["span",{className:"MathJax_SVG_ExBox"}]]),this.linebreakSpan=n.Element
("span",null,[["hr",{style:{width:"auto",size:1,padding:0,border:0,margin:0}}]]),
e.Styles(this.config.styles,["InitializeSVG",this])},InitializeSVG:function(){document
.body.appendChild(this.ExSpan),document.body.appendChild(this.linebreakSpan),this
.defaultEx=this.ExSpan.firstChild.offsetHeight/60,this.defaultWidth=this.linebreakSpan
.firstChild.offsetWidth,document.body.removeChild(this.linebreakSpan),document.body
.removeChild(this.ExSpan)},preTranslate:function(e){var i=e.jax[this.id],s,o=i.length
,u,a,f,l,c,h,p,d,v,m=!1,g,y=this.config.linebreaks.automatic,b=this.config.linebreaks
.width;y?(m=b.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/)!=null,m?b=b.replace(/\s*container\s*/
,""):v=this.defaultWidth,b===""&&(b="100%")):v=1e5;for(s=0;s<o;s++){u=i[s];if(!u.
parentNode)continue;a=u.previousSibling,a&&String(a.className).match(/^MathJax(_SVG)?(_Display)?( MathJax(_SVG)?_Processing)?$/
)&&a.parentNode.removeChild(a),h=u.MathJax.elementJax;if(!h)continue;h.SVG={display
:h.root.Get("display")==="block"},f=l=n.Element("span",{style:{"font-size":this.config
.scale+"%",display:"inline-block"},className:"MathJax_SVG",id:h.inputID+"-Frame",
isMathJax:!0,jaxID:this.id,oncontextmenu:EVENT.Menu,onmousedown:EVENT.Mousedown,onmouseover
:EVENT.Mouseover,onmouseout:EVENT.Mouseout,onmousemove:EVENT.Mousemove,onclick:EVENT
.Click,ondblclick:EVENT.DblClick}),t.Browser.noContextMenu&&(f.ontouchstart=TOUCH
.start,f.ontouchend=TOUCH.end),h.SVG.display&&(l=n.Element("div",{className:"MathJax_SVG_Display"
}),l.appendChild(f)),l.className+=" MathJax_SVG_Processing",u.parentNode.insertBefore
(l,u),u.parentNode.insertBefore(this.ExSpan.cloneNode(!0),u),l.parentNode.insertBefore
(this.linebreakSpan.cloneNode(!0),l)}for(s=0;s<o;s++){u=i[s];if(!u.parentNode)continue;
c=u.previousSibling,l=c.previousSibling,h=u.MathJax.elementJax;if(!h)continue;p=c
.firstChild.offsetHeight/60,g=l.previousSibling.firstChild.offsetWidth,m&&(v=g);if(
p===0||p==="NaN")this.hiddenDiv.appendChild(l),h.SVG.isHidden=!0,p=this.defaultEx
,g=this.defaultWidth,m&&(v=g);h.SVG.ex=p,h.SVG.em=d=p/r.TeX.x_height*1e3,h.SVG.cwidth=
g/d*1e3,h.SVG.lineWidth=y?this.length2em(b,1,v/d*1e3):r.BIGDIMEN}for(s=0;s<o;s++)
{u=i[s];if(!u.parentNode)continue;c=i[s].previousSibling,f=c.previousSibling,h=i[
s].MathJax.elementJax;if(!h)continue;h.SVG.isHidden||(f=f.previousSibling),f.parentNode
.removeChild(f),c.parentNode.removeChild(c)}e.SVGeqn=e.SVGlast=0,e.SVGi=-1,e.SVGchunk=
this.config.EqnChunk,e.SVGdelay=!1},Translate:function(e,n){if(!e.parentNode)return;
n.SVGdelay&&(n.SVGdelay=!1,t.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay
)));var s=e.MathJax.elementJax,o=s.root,a=document.getElementById(s.inputID+"-Frame"
),f=s.SVG.display?(a||{}).parentNode:a,l=r.config.useFontCache&&!r.config.useGlobalCache
;if(!f)return;this.em=i.mbase.prototype.em=s.SVG.em,this.ex=s.SVG.ex,this.linebreakWidth=
s.SVG.lineWidth,this.cwidth=s.SVG.cwidth,this.mathDiv=f,a.appendChild(this.textSVG
),l&&r.resetGlyphs(),this.initSVG(o,a),o.setTeXclass();try{o.toSVG(a,f)}catch(c){
if(c.restart)while(a.firstChild)a.removeChild(a.firstChild);throw l&&u.GLYPH.n--,
c}a.removeChild(this.textSVG),s.SVG.isHidden&&e.parentNode.insertBefore(f,e),f.className=
f.className.split(/ /)[0],this.hideProcessedMath&&(f.className+=" MathJax_SVG_Processed"
,e.MathJax.preview&&(s.SVG.preview=e.MathJax.preview,delete e.MathJax.preview),n.
SVGeqn+=n.i-n.SVGi,n.SVGi=n.i,n.SVGeqn>=n.SVGlast+n.SVGchunk&&(this.postTranslate
(n,!0),n.SVGchunk=Math.floor(n.SVGchunk*this.config.EqnChunkFactor),n.SVGdelay=!0
))},postTranslate:function(e,t){var n=e.jax[this.id];if(!this.hideProcessedMath)return;
for(var r=e.SVGlast,i=e.SVGeqn;r<i;r++){var s=n[r];if(s&&s.MathJax.elementJax){s.
previousSibling.className=s.previousSibling.className.split(/ /)[0];var o=s.MathJax
.elementJax.SVG;o.preview&&(o.preview.innerHTML="",s.MathJax.preview=o.preview,delete 
o.preview)}}e.SVGlast=e.SVGeqn},resetGlyphs:function(e){if(this.config.useFontCache
){var t=u.GLYPH;this.config.useGlobalCache?(t.defs=document.getElementById("MathJax_SVG_glyphs"
),t.defs.innerHTML=""):(t.defs=this.Element("defs"),t.n++),t.glyphs={},e&&(t.n=0)
}},hashCheck:function(e){if(e&&e.nodeName.toLowerCase()==="g")do e=e.parentNode;while(
e&&e.firstChild.nodeName!=="svg");return e},getJaxFromMath:function(e){e.parentNode
.className==="MathJax_SVG_Display"&&(e=e.parentNode);do e=e.nextSibling;while(e&&
e.nodeName.toLowerCase()!=="script");return t.getJaxFor(e)},getHoverSpan:function(
e,t){return t.style.position="relative",t.firstChild},getHoverBBox:function(e,t,n
){var r=EVENT.getBBox(t.parentNode);return r.h+=2,r.d-=2,r},Zoom:function(e,n,s,o
,u){n.className="MathJax_SVG";var a=n.appendChild(this.ExSpan.cloneNode(!0)),f=a.
firstChild.offsetHeight/60;this.em=i.mbase.prototype.em=f/r.TeX.x_height*1e3,this
.ex=f,this.linebreakWidth=e.SVG.lineWidth,this.cwidth=e.SVG.cwidth,a.parentNode.removeChild
(a),n.appendChild(this.textSVG),this.mathDIV=n,this.zoomScale=parseInt(t.config.menuSettings
.zscale)/100;var l=e.root.data[0].SVGdata.tw;l&&l<this.cwidth&&(this.cwidth=l),this
.idPostfix="-zoom",e.root.toSVG(n,n),this.idPostfix="",this.zoomScale=1,n.removeChild
(this.textSVG);var c=n.getElementsByTagName("svg")[0].style;c.marginTop=c.marginRight=
c.marginLeft=0,c.marginBottom.charAt(0)==="-"&&(n.style.marginBottom=c.marginBottom
.substr(1)),this.operaZoomRefresh&&setTimeout(function(){n.firstChild.style.border="1px solid transparent"
},1),n.offsetWidth<n.firstChild.offsetWidth&&(n.style.minWidth=n.firstChild.offsetWidth+"px"
,s.style.minWidth=s.firstChild.offsetWidth+"px"),n.style.position=s.style.position="absolute"
;var h=n.offsetWidth,p=n.offsetHeight,d=s.offsetHeight,v=s.offsetWidth;return n.style
.position=s.style.position="",{Y:-EVENT.getBBox(n).h,mW:v,mH:d,zW:h,zH:p}},initSVG
:function(e,t){},Remove:function(e){var t=document.getElementById(e.inputID+"-Frame"
);t&&(e.SVG.display&&(t=t.parentNode),t.parentNode.removeChild(t)),delete e.SVG},
Em:function(e){return Math.abs(e)<6e-4?"0em":e.toFixed(3).replace(/\.?0+$/,"")+"em"
},Ex:function(e){return e=Math.round(e/this.TeX.x_height*this.ex)/this.ex,Math.abs
(e)<6e-4?"0ex":e.toFixed(3).replace(/\.?0+$/,"")+"ex"},Percent:function(e){return(100*
e).toFixed(1).replace(/\.?0+$/,"")+"%"},Fixed:function(e,t){return Math.abs(e)<6e-4?"0"
:e.toFixed(t||3).replace(/\.?0+$/,"")},length2em:function(e,t,n){typeof e!="string"&&
(e=e.toString());if(e==="")return"";if(e===i.SIZE.NORMAL)return 1e3;if(e===i.SIZE
.BIG)return 2e3;if(e===i.SIZE.SMALL)return 710;if(e==="infinity")return r.BIGDIMEN
;if(e.match(/mathspace$/))return 1e3*r.MATHSPACE[e];var s=(this.zoomScale||1)/r.em
,o=e.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/),
u=parseFloat(o[1]||"1")*1e3,a=o[2];return n==null&&(n=1e3),t==null&&(t=1),a==="em"?
u:a==="ex"?u*r.TeX.x_height/1e3:a==="%"?u/100*n/1e3:a==="px"?u*s:a==="pt"?u/10:a==="pc"?
u*1.2:a==="in"?u*this.pxPerInch*s:a==="cm"?u*this.pxPerInch*s/2.54:a==="mm"?u*this
.pxPerInch*s/25.4:a==="mu"?u/18*t:u*n/1e3},thickness2em:function(e,t){var n=r.TeX
.rule_thickness;return e===i.LINETHICKNESS.MEDIUM?n:e===i.LINETHICKNESS.THIN?.67*
n:e===i.LINETHICKNESS.THICK?1.67*n:this.length2em(e,t,n)},getPadding:function(e){
var t={top:0,right:0,bottom:0,left:0},n=!1;for(var r in t)if(t.hasOwnProperty(r))
{var i=e["padding"+r.charAt(0).toUpperCase()+r.substr(1)];i&&(t[r]=this.length2em
(i),n=!0)}return n?t:!1},getBorders:function(e){var t={top:0,right:0,bottom:0,left
:0},n=!1;for(var r in t)if(t.hasOwnProperty(r)){var i="border"+r.charAt(0).toUpperCase
()+r.substr(1),s=e[i+"Style"];s&&s!=="none"?(n=!0,t[r]=this.length2em(e[i+"Width"
]),t[r+"Style"]=e[i+"Style"],t[r+"Color"]=e[i+"Color"],t[r+"Color"]==="initial"&&
(t[r+"Color"]="")):delete t[r]}return n?t:!1},Element:function(e,t){var n=typeof 
e=="string"?document.createElementNS(s,e):e;n.isMathJax=!0;if(t)for(var r in t)t.
hasOwnProperty(r)&&n.setAttribute(r,t[r].toString());return n},addElement:function(
e,t,n){return e.appendChild(this.Element(t,n))},TextNode:n.TextNode,addText:n.addText
,ucMatch:n.ucMatch,HandleVariant:function(e,n,s){var o=u.G(),a,f,l,c,h,p,d,v,m,g;
e||(e=this.FONTDATA.VARIANT[i.VARIANT.NORMAL]),e.forceFamily&&(s=u.TEXT(n,s,e.font
),e.h!=null&&(s.h=e.h),e.d!=null&&(s.d=e.d),o.Add(s),s=""),h=e;for(p=0,d=s.length
;p<d;p++){e=h,a=s.charCodeAt(p),l=s.charAt(p);if(a>=55296&&a<56319){p++,a=(a-55296<<10
)+(s.charCodeAt(p)-56320)+65536;if(this.FONTDATA.RemapPlane1){var y=this.FONTDATA
.RemapPlane1(a,e);a=y.n,e=y.variant}}else{g=this.FONTDATA.RANGES;for(v=0,m=g.length
;v<m;v++){if(g[v].name==="alpha"&&e.noLowerCase)continue;f=e["offset"+g[v].offset
];if(f&&a>=g[v].low&&a<=g[v].high){g[v].remap&&g[v].remap[a]?a=f+g[v].remap[a]:(a=
a-g[v].low+f,g[v].add&&(a+=g[v].add)),e["variant"+g[v].offset]&&(e=this.FONTDATA.
VARIANT[e["variant"+g[v].offset]]);break}}}e.remap&&e.remap[a]?(a=e.remap[a],e.remap
.variant&&(e=this.FONTDATA.VARIANT[e.remap.variant])):this.FONTDATA.REMAP[a]&&!e.
noRemap&&(a=this.FONTDATA.REMAP[a]),a instanceof Array&&(e=this.FONTDATA.VARIANT[
a[1]],a=a[0]);if(typeof a=="string"){s=a+s.substr(p+1),d=s.length,p=-1;continue}c=
this.lookupChar(e,a),l=c[a];if(l)l[5]&&l[5].space||l[5]===""&&l[0]+l[1]===0?o.w+=
l[2]:(l=[n,c.id+"-"+a.toString(16).toUpperCase()].concat(l),o.Add(u.GLYPH.apply(u
,l),o.w,0));else if(this.FONTDATA.DELIMITERS[a])l=this.createDelimiter(a,0,1,c),o
.Add(l,o.w,this.FONTDATA.DELIMITERS[a].dir==="V"?l.d:0);else{a<=65535?l=String.fromCharCode
(a):(f=a-65536,l=String.fromCharCode((f>>10)+55296)+String.fromCharCode((f&1023)+56320
));var b=u.TEXT(n*100/r.config.scale,l,{"font-family":e.defaultFamily||r.config.undefinedFamily
,"font-style":e.italic?"italic":"","font-weight":e.bold?"bold":""});e.h!=null&&(b
.h=e.h),e.d!=null&&(b.d=e.d),l=u.G(),l.Add(b),o.Add(l,o.w,0),t.signal.Post(["SVG Jax - unknown char"
,a,e])}}return s.length==1&&c.skew&&c.skew[a]&&(o.skew=c.skew[a]*1e3),o.element.childNodes
.length===1&&(o.element=o.element.firstChild,o.removeable=!1,o.scale=n),o},lookupChar
:function(e,t){var n,r;if(!e.FONTS){var i=this.FONTDATA.FONTS,s=e.fonts||this.FONTDATA
.VARIANT.normal.fonts;s instanceof Array||(s=[s]),e.fonts!=s&&(e.fonts=s),e.FONTS=
[];for(n=0,r=s.length;n<r;n++)i[s[n]]&&e.FONTS.push(i[s[n]])}for(n=0,r=e.FONTS.length
;n<r;n++){var o=e.FONTS[n];typeof o=="string"&&(delete e.FONTS,this.loadFont(o));
if(o[t])return o;this.findBlock(o,t)}return{id:"unknown"}},findBlock:function(e,t
){if(e.Ranges)for(var n=0,r=e.Ranges.length;n<r;n++){if(t<e.Ranges[n][0])return;if(
t<=e.Ranges[n][1]){var i=e.Ranges[n][2];for(var s=e.Ranges.length-1;s>=0;s--)e.Ranges
[s][2]==i&&e.Ranges.splice(s,1);this.loadFont(e.directory+"/"+i+".js")}}},loadFont
:function(n){t.RestartAfter(e.Require(this.fontDir+"/"+n))},createDelimiter:function(
n,s,o,a){o||(o=1);var f=u.G();if(!n)return f.Clean(),delete f.element,f.w=f.r=this
.TeX.nulldelimiterspace*o,f;s instanceof Array||(s=[s,s]);var l=s[1];s=s[0];var c=
{alias:n};while(c.alias)n=c.alias,c=this.FONTDATA.DELIMITERS[n],c||(c={HW:[0,this
.FONTDATA.VARIANT[i.VARIANT.NORMAL]]});c.load&&t.RestartAfter(e.Require(this.fontDir+"/fontdata-"+
c.load+".js"));for(var h=0,p=c.HW.length;h<p;h++)if(c.HW[h][0]*o>=s-10-r.config.blacker||
h==p-1&&!c.stretch)return c.HW[h][2]&&(o*=c.HW[h][2]),c.HW[h][3]&&(n=c.HW[h][3]),
this.createChar(o,[n,c.HW[h][1]],a).With({stretched:!0});return c.stretch&&this["extendDelimiter"+
c.dir](f,l,c.stretch,o,a),f},createChar:function(e,t,n){var r="",s={fonts:[t[1]],
noRemap:!0};n&&n===i.VARIANT.BOLD&&(s.fonts=[t[1]+"-bold",t[1]]),typeof t[1]!="string"&&
(s=t[1]);if(t[0]instanceof Array)for(var o=0,u=t[0].length;o<u;o++)r+=String.fromCharCode
(t[0][o]);else r=String.fromCharCode(t[0]);t[4]&&(e*=t[4]);var a=this.HandleVariant
(s,e,r);return t[2]&&(a.x=t[2]*1e3),t[3]&&(a.y=t[3]*1e3),t[5]&&(a.h+=t[5]*1e3),t[6
]&&(a.d+=t[6]*1e3),a},extendDelimiterV:function(e,t,n,i,s){var o=this.createChar(
i,n.top||n.ext,s),u=this.createChar(i,n.bot||n.ext,s),a=o.h+o.d+u.h+u.d,f=-o.h;e.
Add(o,0,f),f-=o.d;if(n.mid){var l=this.createChar(i,n.mid,s);a+=l.h+l.d}n.min&&t<
a*n.min&&(t=a*n.min);if(t>a){var c=this.createChar(i,n.ext,s),h=n.mid?2:1,p=(t-a)/
h,d=(p+100)/(c.h+c.d);while(h-->0){var v=r.Element("g",{transform:"translate("+c.
y+","+(f-d*c.h+50+c.y)+") scale(1,"+d+")"});v.appendChild(c.element.cloneNode(!1)
),e.element.appendChild(v),f-=p,n.mid&&h&&(e.Add(l,0,f-l.h),f-=l.h+l.d)}}else n.mid?
(f+=(a-t)/2,e.Add(l,0,f-l.h),f+=-(l.h+l.d)+(a-t)/2):f+=a-t;e.Add(u,0,f-u.h),e.Clean
(),e.scale=i,e.isMultiChar=!0},extendDelimiterH:function(e,t,n,i,s){var o=this.createChar
(i,n.left||n.rep,s),u=this.createChar(i,n.right||n.rep,s);e.Add(o,-o.l,0);var a=o
.r-o.l+(u.r-u.l),f=o.r-o.l;if(n.mid){var l=this.createChar(i,n.mid,s);a+=l.w}n.min&&
t<a*n.min&&(t=a*n.min);if(t>a){var c=this.createChar(i,n.rep,s),h=n.fuzz||0,p=n.mid?2
:1,d=(t-a)/p,v=(d+h)/(c.r-c.l);while(p-->0){var m=r.Element("g",{transform:"translate("+
(f-h/2-v*c.l+c.x)+","+c.y+") scale("+v+",1)"});m.appendChild(c.element.cloneNode(!1
)),e.element.appendChild(m),f+=d,n.mid&&p&&(e.Add(l,f,0),f+=l.w)}}else n.mid?(f-=
(a-t)/2,e.Add(l,f,0),f+=l.w-(a-t)/2):f-=a-t;e.Add(u,f-u.l,0),e.Clean(),e.scale=i,
e.isMultiChar=!0},MATHSPACE:{veryverythinmathspace:1/18,verythinmathspace:2/18,thinmathspace
:3/18,mediummathspace:4/18,thickmathspace:5/18,verythickmathspace:6/18,veryverythickmathspace
:7/18,negativeveryverythinmathspace:-1/18,negativeverythinmathspace:-2/18,negativethinmathspace
:-3/18,negativemediummathspace:-4/18,negativethickmathspace:-5/18,negativeverythickmathspace
:-6/18,negativeveryverythickmathspace:-7/18},TeX:{x_height:430.554,quad:1e3,num1:676.508
,num2:393.732,num3:443.73,denom1:685.951,denom2:344.841,sup1:412.892,sup2:362.892
,sup3:288.888,sub1:150,sub2:247.217,sup_drop:386.108,sub_drop:50,delim1:2390,delim2
:1e3,axis_height:250,rule_thickness:60,big_op_spacing1:111.111,big_op_spacing2:166.666
,big_op_spacing3:200,big_op_spacing4:600,big_op_spacing5:100,scriptspace:100,nulldelimiterspace
:120,delimiterfactor:901,delimitershortfall:300,min_rule_thickness:1.25,min_root_space
:1.5},BIGDIMEN:1e7,NBSP:" "});var u=r.BBOX=MathJax.Object.Subclass({type:"g",removeable
:!0,Init:function(e){this.h=this.d=-r.BIGDIMEN,this.H=this.D=0,this.w=this.r=0,this
.l=r.BIGDIMEN,this.x=this.y=0,this.scale=1,this.n=0,this.type&&(this.element=r.Element
(this.type,e))},With:function(e){return t.Insert(this,e)},Add:function(e,t,n,r,i)
{t&&(e.x+=t),n&&(e.y+=n);if(e.element){if(e.removeable&&e.element.childNodes.length===1&&
e.n===1){var s=e.element.firstChild,o=s.nodeName.toLowerCase();if(o==="use"||o==="rect"
){e.element=s,e.scale=e.childScale;var u=e.childX,a=e.childY;e.x+=u,e.y+=a,e.h-=a
,e.d+=a,e.H-=a,e.D+=a,e.w-=u,e.r-=u,e.l+=u,e.removeable=!1,s.setAttribute("x",Math
.floor(e.x/e.scale)),s.setAttribute("y",Math.floor(e.y/e.scale))}}Math.abs(e.x)<1&&
Math.abs(e.y)<1?e.remove=e.removeable:(o=e.element.nodeName.toLowerCase(),o==="g"?
e.element.firstChild?e.element.setAttribute("transform","translate("+Math.floor(e
.x)+","+Math.floor(e.y)+")"):e.remove=e.removeable:o==="line"||o==="polygon"||o==="path"||
o==="a"?e.element.setAttribute("transform","translate("+Math.floor(e.x)+","+Math.
floor(e.y)+")"):(e.element.setAttribute("x",Math.floor(e.x/e.scale)),e.element.setAttribute
("y",Math.floor(e.y/e.scale))));if(e.remove){this.n+=e.n;while(e.element.firstChild
)i&&this.element.firstChild?this.element.insertBefore(e.element.firstChild,this.element
.firstChild):this.element.appendChild(e.element.firstChild)}else i?this.element.insertBefore
(e.element,this.element.firstChild):this.element.appendChild(e.element);delete e.
element}e.hasIndent&&(this.hasIndent=e.hasIndent),e.tw!=null&&(this.tw=e.tw),e.d-
e.y>this.d&&(this.d=e.d-e.y,this.d>this.D&&(this.D=this.d)),e.y+e.h>this.h&&(this
.h=e.y+e.h,this.h>this.H&&(this.H=this.h)),e.D-e.y>this.D&&(this.D=e.D-e.y),e.y+e
.H>this.H&&(this.H=e.y+e.H),e.x+e.l<this.l&&(this.l=e.x+e.l),e.x+e.r>this.r&&(this
.r=e.x+e.r);if(r||e.x+e.w+(e.X||0)>this.w)this.w=e.x+e.w+(e.X||0);return this.childScale=
e.scale,this.childX=e.x,this.childY=e.y,this.n++,e},Align:function(e,t,n,r,i){n={
left:n,center:(this.w-e.w)/2,right:this.w-e.w-n}[t]||0;var s=this.w;this.Add(e,n+
(i||0),r),this.w=s},Clean:function(){return this.h===-r.BIGDIMEN&&(this.h=this.d=
this.l=0),this}});u.ROW=u.Subclass({Init:function(){this.SUPER(arguments).Init.call
(this),this.svg=[],this.sh=this.sd=0},Check:function(e){var t=e.toSVG();this.svg.
push(t),e.SVGcanStretch("Vertical")&&(t.mml=e),t.h>this.sh&&(this.sh=t.h),t.d>this
.sd&&(this.sd=t.d)},Stretch:function(){for(var e=0,t=this.svg.length;e<t;e++){var n=
this.svg[e],r=n.mml;if(r){if(r.forceStretch||r.SVGdata.h!==this.sh||r.SVGdata.d!==
this.sd)n=r.SVGstretchV(this.sh,this.sd);r.SVGdata.HW=this.sh,r.SVGdata.D=this.sd
}n.ic?this.ic=n.ic:delete this.ic,this.Add(n,this.w,0,!0)}delete this.svg}}),u.RECT=
u.Subclass({type:"rect",removeable:!1,Init:function(e,t,n,r){r==null&&(r={stroke:"none"
}),r.width=Math.floor(n),r.height=Math.floor(e+t),this.SUPER(arguments).Init.call
(this,r),this.w=this.r=n,this.h=this.H=e+t,this.d=this.D=this.l=0,this.y=-t}}),u.
FRAME=u.Subclass({type:"rect",removeable:!1,Init:function(e,t,n,i,s,o,u){u==null&&
(u={}),u.fill="none",u["stroke-width"]=r.Fixed(i,2),u.width=Math.floor(n-i),u.height=
Math.floor(e+t-i),u.transform="translate("+Math.floor(i/2)+","+Math.floor(-t+i/2)+")"
,s==="dashed"&&(u["stroke-dasharray"]=[Math.floor(6*r.em),Math.floor(6*r.em)].join
(" ")),this.SUPER(arguments).Init.call(this,u),this.w=this.r=n,this.h=this.H=e,this
.d=this.D=t,this.l=0}}),u.HLINE=u.Subclass({type:"line",removeable:!1,Init:function(
e,t,n,i,s){s==null&&(s={"stroke-linecap":"square"}),i&&i!==""&&(s.stroke=i),s["stroke-width"
]=r.Fixed(t,2),s.x1=s.y1=s.y2=Math.floor(t/2),s.x2=Math.floor(e-t/2);if(n==="dashed"
){var o=Math.floor(Math.max(0,e-t)/(6*t)),u=Math.floor(Math.max(0,e-t)/(2*o+1));s
["stroke-dasharray"]=u+" "+u}n==="dotted"&&(s["stroke-dasharray"]=[1,Math.max(150
,Math.floor(2*t))].join(" "),s["stroke-linecap"]="round"),this.SUPER(arguments).Init
.call(this,s),this.w=this.r=e,this.l=0,this.h=this.H=t,this.d=this.D=0}}),u.VLINE=
u.Subclass({type:"line",removeable:!1,Init:function(e,t,n,i,s){s==null&&(s={"stroke-linecap"
:"square"}),i&&i!==""&&(s.stroke=i),s["stroke-width"]=r.Fixed(t,2),s.x1=s.x2=s.y1=
Math.floor(t/2),s.y2=Math.floor(e-t/2);if(n==="dashed"){var o=Math.floor(Math.max
(0,e-t)/(6*t)),u=Math.floor(Math.max(0,e-t)/(2*o+1));s["stroke-dasharray"]=u+" "+
u}n==="dotted"&&(s["stroke-dasharray"]=[1,Math.max(150,Math.floor(2*t))].join(" "
),s["stroke-linecap"]="round"),this.SUPER(arguments).Init.call(this,s),this.w=this
.r=t,this.l=0,this.h=this.H=e,this.d=this.D=0}}),u.TEXT=u.Subclass({type:"text",removeable
:!1,Init:function(e,t,n){n||(n={}),n.stroke="none",n["font-style"]===""&&delete n
["font-style"],n["font-weight"]===""&&delete n["font-weight"],this.SUPER(arguments
).Init.call(this,n),r.addText(this.element,t),r.textSVG.appendChild(this.element)
;var i=this.element.getBBox();r.textSVG.removeChild(this.element),e*=1e3/r.em,this
.element.setAttribute("transform","scale("+r.Fixed(e)+") matrix(1 0 0 -1 0 0)"),this
.w=this.r=i.width*e,this.l=0,this.h=this.H=-i.y*e,this.d=this.D=(i.height+i.y)*e}
}),u.G=u,u.NULL=u.Subclass({Init:function(){this.SUPER(arguments).Init.apply(this
,arguments),this.Clean()}}),u.GLYPH=u.Subclass({type:"path",removeable:!1,Init:function(
e,t,n,i,s,a,f,l){var c,h=r.config.blacker,p=u.GLYPH,d=r.config.useFontCache,v=e===1?
null:"scale("+r.Fixed(e)+")";d&&!r.config.useGlobalCache&&(t="E"+p.n+"-"+t);if(!d||!
p.glyphs[t])c={"stroke-width":h},d?c.id=t:v&&(c.transform=v),c.d=l?"M"+l+"Z":"",this
.SUPER(arguments).Init.call(this,c),d&&(p.defs.appendChild(this.element),p.glyphs
[t]=!0);d&&(c={},v&&(c.transform=v),this.element=r.Element("use",c),this.element.
setAttributeNS(o,"href","#"+t)),this.h=(n+h)*e,this.d=(i+h)*e,this.w=(s+h/2)*e,this
.l=(a+h/2)*e,this.r=(f+h/2)*e,this.H=Math.max(0,this.h),this.D=Math.max(0,this.d)
,this.x=this.y=0,this.scale=e}},{glyphs:{},defs:null,n:0}),t.Register.StartupHook
("mml Jax Ready",function(){i=MathJax.ElementJax.mml,i.mbase.Augment({SVG:u,toSVG
:function(){this.SVGgetStyles();var e=this.SVGgetVariant(),t=this.SVG();this.SVGgetScale
(t),this.SVGhandleSpace(t);for(var n=0,r=this.data.length;n<r;n++)if(this.data[n]
){var i=t.Add(this.data[n].toSVG(e,t.scale),t.w,0,!0);i.skew&&(t.skew=i.skew)}t.Clean
();var s=this.data.join("");return t.skew&&s.length!==1&&delete t.skew,t.r>t.w&&s
.length===1&&!e.noIC&&(t.ic=t.r-t.w,t.w=t.r),this.SVGhandleColor(t),this.SVGsaveData
(t),t},SVGchildSVG:function(e){return this.data[e]?this.data[e].toSVG():u()},SVGdataStretched
:function(e,t,n){return this.SVGdata={HW:t,D:n},this.data[e]?n!=null?this.data[e]
.SVGstretchV(t,n):t!=null?this.data[e].SVGstretchH(t):this.data[e].toSVG():u()},SVGsaveData
:function(e){this.SVGdata||(this.SVGdata={}),this.SVGdata.w=e.w,this.SVGdata.x=e.
x,this.SVGdata.h=e.h,this.SVGdata.d=e.d,e.y&&(this.SVGdata.h+=e.y,this.SVGdata.d-=
e.y),e.X!=null&&(this.SVGdata.X=e.X),e.tw!=null&&(this.SVGdata.tw=e.tw),e.skew&&(
this.SVGdata.skew=e.skew),e.ic&&(this.SVGdata.ic=e.ic),this["class"]&&(e.removeable=!1
,r.Element(e.element,{"class":this["class"]})),this.id&&(e.removeable=!1,r.Element
(e.element,{id:this.id}));if(this.href){var t=r.Element("a",{"class":"mjx-svg-href"
});t.setAttributeNS(o,"href",this.href),t.onclick=this.SVGlink,r.addElement(t,"rect"
,{width:e.w,height:e.h+e.d,y:-e.d,fill:"none",stroke:"none","pointer-events":"all"
});if(e.type==="svg"){var n=e.element.firstChild;while(n.firstChild)t.appendChild
(n.firstChild);n.appendChild(t)}else t.appendChild(e.element),e.element=t;e.removeable=!1
}r.config.addMMLclasses&&(this.SVGaddClass(e.element,"mjx-svg-"+this.type),e.removeable=!1
);var i=this.style;i&&e.element&&(e.element.style.cssText=i,e.element.style.fontSize&&
(e.element.style.fontSize=""),e.element.style.border=e.element.style.padding="",e
.removeable&&(e.removeable=e.element.style.cssText==="")),this.SVGaddAttributes(e
)},SVGaddClass:function(e,t){var n=e.getAttribute("class");e.setAttribute("class"
,(n?n+" ":"")+t)},SVGaddAttributes:function(e){if(this.attrNames){var n=this.attrNames
,r=i.nocopyAttributes,s=t.config.ignoreMMLattributes,o=this.type==="mstyle"?i.math
.prototype.defaults:this.defaults;for(var u=0,a=n.length;u<a;u++){var f=n[u];if(s
[f]==0||!r[f]&&!s[f]&&o[f]==null&&typeof e.element[f]=="undefined")e.element.setAttribute
(f,this.attr[f]),e.removeable=!1}}},SVGlink:function(){var e=this.href.animVal;if(
e.charAt(0)==="#"){var t=r.hashCheck(document.getElementById(e.substr(1)));t&&t.scrollIntoView&&
setTimeout(function(){t.parentNode.scrollIntoView(!0)},1)}document.location=e},SVGgetStyles
:function(){if(this.style){var e=n.Element("span");e.style.cssText=this.style,this
.styles=this.SVGprocessStyles(e.style)}},SVGprocessStyles:function(e){var t={border
:r.getBorders(e),padding:r.getPadding(e)};return t.border||delete t.border,t.padding||delete 
t.padding,e.fontSize&&(t.fontSize=e.fontSize),e.color&&(t.color=e.color),e.backgroundColor&&
(t.background=e.backgroundColor),e.fontStyle&&(t.fontStyle=e.fontStyle),e.fontWeight&&
(t.fontWeight=e.fontWeight),e.fontFamily&&(t.fontFamily=e.fontFamily),t.fontWeight&&
t.fontWeight.match(/^\d+$/)&&(t.fontWeight=parseInt(t.fontWeight)>600?"bold":"normal"
),t},SVGhandleSpace:function(e){if(this.useMMLspacing){if(this.type!=="mo")return;
var t=this.getValues("scriptlevel","lspace","rspace");if(t.scriptlevel<=0||this.hasValue
("lspace")||this.hasValue("rspace")){var n=this.SVGgetMu(e);t.lspace=Math.max(0,r
.length2em(t.lspace,n)),t.rspace=Math.max(0,r.length2em(t.rspace,n));var i=this,s=
this.Parent();while(s&&s.isEmbellished()&&s.Core()===i)i=s,s=s.Parent();t.lspace&&
(e.x+=t.lspace),t.rspace&&(e.X=t.rspace)}}else{var o=this.texSpacing();this.SVGgetScale
(),o!==""&&(e.x+=r.length2em(o,this.scale)*this.mscale)}},SVGhandleColor:function(
e){var t=this.getValues("mathcolor","color");this.styles&&this.styles.color&&!t.color&&
(t.color=this.styles.color),t.color&&!this.mathcolor&&(t.mathcolor=t.color),t.mathcolor&&
(r.Element(e.element,{fill:t.mathcolor,stroke:t.mathcolor}),e.removeable=!1);var n=
(this.styles||{}).border,s=(this.styles||{}).padding,o=(n||{}).left||0,a=(s||{}).
left||0,f;t.background=this.mathbackground||this.background||(this.styles||{}).background||
i.COLOR.TRANSPARENT;if(o+a){var l=u();for(f in e)e.hasOwnProperty(f)&&(l[f]=e[f])
;l.x=0,l.y=0,e.element=r.Element("g"),e.removeable=!0,e.Add(l,o+a,0)}s&&(e.w+=s.right||0
,e.h+=s.top||0,e.d+=s.bottom||0),n&&(e.w+=n.right||0,e.h+=n.top||0,e.d+=n.bottom||0
);if(t.background!==i.COLOR.TRANSPARENT){var c=e.element.nodeName.toLowerCase();if(
c!=="g"&&c!=="svg"){var h=r.Element("g");h.appendChild(e.element),e.element=h,e.removeable=!0
}e.Add(u.RECT(e.h,e.d,e.w,{fill:t.background,stroke:"none"}),0,0,!1,!0)}if(n){var p=5
,d={left:["V",e.h+e.d,-p,-e.d],right:["V",e.h+e.d,e.w-n.right+p,-e.d],top:["H",e.
w,0,e.h-n.top+p],bottom:["H",e.w,0,-e.d-p]};for(f in d)if(d.hasOwnProperty(f)&&n[
f]){var v=d[f],m=u[v[0]+"LINE"];e.Add(m(v[1],n[f],n[f+"Style"],n[f+"Color"]),v[2]
,v[3])}}},SVGhandleVariant:function(e,t,n){return r.HandleVariant(e,t,n)},SVGgetVariant
:function(){var e=this.getValues("mathvariant","fontfamily","fontweight","fontstyle"
),t=e.mathvariant;return this.variantForm&&(t="-TeX-variant"),e.hasVariant=this.Get
("mathvariant",!0),e.hasVariant||(e.family=e.fontfamily,e.weight=e.fontweight,e.style=
e.fontstyle),this.styles&&(!e.style&&this.styles.fontStyle&&(e.style=this.styles.
fontStyle),!e.weight&&this.styles.fontWeight&&(e.weight=this.styles.fontWeight),!
e.family&&this.styles.fontFamily&&(e.family=this.styles.fontFamily)),e.family&&!e
.hasVariant?(!e.weight&&e.mathvariant.match(/bold/)&&(e.weight="bold"),!e.style&&
e.mathvariant.match(/italic/)&&(e.style="italic"),t={forceFamily:!0,font:{"font-family"
:e.family}},e.style&&(t.font["font-style"]=e.style),e.weight&&(t.font["font-weight"
]=e.weight),t):(e.weight==="bold"?t={normal:i.VARIANT.BOLD,italic:i.VARIANT.BOLDITALIC
,fraktur:i.VARIANT.BOLDFRAKTUR,script:i.VARIANT.BOLDSCRIPT,"sans-serif":i.VARIANT
.BOLDSANSSERIF,"sans-serif-italic":i.VARIANT.SANSSERIFBOLDITALIC}[t]||t:e.weight==="normal"&&
(t={bold:i.VARIANT.normal,"bold-italic":i.VARIANT.ITALIC,"bold-fraktur":i.VARIANT
.FRAKTUR,"bold-script":i.VARIANT.SCRIPT,"bold-sans-serif":i.VARIANT.SANSSERIF,"sans-serif-bold-italic"
:i.VARIANT.SANSSERIFITALIC}[t]||t),e.style==="italic"?t={normal:i.VARIANT.ITALIC,
bold:i.VARIANT.BOLDITALIC,"sans-serif":i.VARIANT.SANSSERIFITALIC,"bold-sans-serif"
:i.VARIANT.SANSSERIFBOLDITALIC}[t]||t:e.style==="normal"&&(t={italic:i.VARIANT.NORMAL
,"bold-italic":i.VARIANT.BOLD,"sans-serif-italic":i.VARIANT.SANSSERIF,"sans-serif-bold-italic"
:i.VARIANT.BOLDSANSSERIF}[t]||t),t in r.FONTDATA.VARIANT||(t="normal"),r.FONTDATA
.VARIANT[t])},SVGgetScale:function(e){var t=1;if(this.mscale)t=this.scale;else{var n=
this.getValues("scriptlevel","fontsize");n.mathsize=(this.isToken?this:this.Parent
()).Get("mathsize"),(this.styles||{}).fontSize&&!n.fontsize&&(n.fontsize=this.styles
.fontSize),n.fontsize&&!this.mathsize&&(n.mathsize=n.fontsize),n.scriptlevel!==0&&
(n.scriptlevel>2&&(n.scriptlevel=2),t=Math.pow(this.Get("scriptsizemultiplier"),n
.scriptlevel),n.scriptminsize=r.length2em(this.Get("scriptminsize"))/1e3,t<n.scriptminsize&&
(t=n.scriptminsize)),this.scale=t,this.mscale=r.length2em(n.mathsize)/1e3}return e&&
(e.scale=t,this.isToken&&(e.scale*=this.mscale)),t*this.mscale},SVGgetMu:function(
e){var t=1,n=this.getValues("scriptlevel","scriptsizemultiplier");return e.scale&&
e.scale!==1&&(t=1/e.scale),n.scriptlevel!==0&&(n.scriptlevel>2&&(n.scriptlevel=2)
,t=Math.sqrt(Math.pow(n.scriptsizemultiplier,n.scriptlevel))),t},SVGnotEmpty:function(
e){while(e){if(e.type!=="mrow"&&e.type!=="texatom"||e.data.length>1)return!0;e=e.
data[0]}return!1},SVGcanStretch:function(e){var t=!1;if(this.isEmbellished()){var n=
this.Core();n&&n!==this&&(t=n.SVGcanStretch(e),t&&n.forceStretch&&(this.forceStretch=!0
))}return t},SVGstretchV:function(e,t){return this.toSVG(e,t)},SVGstretchH:function(
e){return this.toSVG(e)},SVGlineBreaks:function(){return!1}},{SVGautoload:function(
){var n=r.autoloadDir+"/"+this.type+".js";t.RestartAfter(e.Require(n))},SVGautoloadFile
:function(n){var i=r.autoloadDir+"/"+n+".js";t.RestartAfter(e.Require(i))}}),i.chars
.Augment({toSVG:function(e,t,n,r){var i=this.data.join("").replace(/[\u2061-\u2064]/g
,"");return n&&(i=n(i,r)),this.SVGhandleVariant(e,t,i)}}),i.entity.Augment({toSVG
:function(e,t,n,r){var i=this.toString().replace(/[\u2061-\u2064]/g,"");return n&&
(i=n(i,r)),this.SVGhandleVariant(e,t,i)}}),i.mo.Augment({toSVG:function(e,t){this
.SVGgetStyles();var n=this.svg=this.SVG(),s=this.SVGgetScale(n);this.SVGhandleSpace
(n);if(this.data.length==0)return n.Clean(),this.SVGsaveData(n),n;if(t!=null)return this
.SVGstretchV(e,t);if(e!=null)return this.SVG.strechH(e);var o=this.SVGgetVariant(
),u=this.getValues("largeop","displaystyle");u.largeop&&(o=r.FONTDATA.VARIANT[u.displaystyle?"-largeOp"
:"-smallOp"]);var a=this.CoreParent(),f=a&&a.isa(i.msubsup)&&this!==a.data[0],l=f?
this.remapChars:null;if(this.data.join("").length===1&&a&&a.isa(i.munderover)&&this
.CoreText(a.data[a.base]).length===1){var c=a.data[a.over],h=a.data[a.under];c&&this===
c.CoreMO()&&a.Get("accent")?l=r.FONTDATA.REMAPACCENT:h&&this===h.CoreMO()&&a.Get("accentunder"
)&&(l=r.FONTDATA.REMAPACCENTUNDER)}f&&this.data.join("").match(/['`"\u00B4\u2032-\u2037\u2057]/
)&&(o=r.FONTDATA.VARIANT["-TeX-variant"]);for(var p=0,d=this.data.length;p<d;p++)
if(this.data[p]){var v=this.data[p].toSVG(o,s,this.remap,l),m=n.w;m===0&&-v.l>10*
v.w&&(m+=-v.l),n.Add(v,m,0,!0),v.skew&&(n.skew=v.skew)}return n.Clean(),this.data
.join("").length!==1&&delete n.skew,u.largeop&&(n.y=r.TeX.axis_height-(n.h-n.d)/2/
s,n.r>n.w&&(n.ic=n.r-n.w,n.w=n.r)),this.SVGhandleColor(n),this.SVGsaveData(n),n},
SVGcanStretch:function(e){if(!this.Get("stretchy"))return!1;var t=this.data.join(""
);if(t.length>1)return!1;var n=this.CoreParent();if(n&&n.isa(i.munderover)&&this.
CoreText(n.data[n.base]).length===1){var s=n.data[n.over],o=n.data[n.under];s&&this===
s.CoreMO()&&n.Get("accent")?t=r.FONTDATA.REMAPACCENT[t]||t:o&&this===o.CoreMO()&&
n.Get("accentunder")&&(t=r.FONTDATA.REMAPACCENTUNDER[t]||t)}t=r.FONTDATA.DELIMITERS
[t.charCodeAt(0)];var u=t&&t.dir==e.substr(0,1);return u||delete this.svg,this.forceStretch=
u&&(this.Get("minsize",!0)||this.Get("maxsize",!0)),u},SVGstretchV:function(e,t){
var n=this.svg||this.toSVG(),i=this.getValues("symmetric","maxsize","minsize"),s=
r.TeX.axis_height*n.scale,o=this.SVGgetMu(n),u;return i.symmetric?u=2*Math.max(e-
s,t+s):u=e+t,i.maxsize=r.length2em(i.maxsize,o,n.h+n.d),i.minsize=r.length2em(i.minsize
,o,n.h+n.d),u=Math.max(i.minsize,Math.min(i.maxsize,u)),u!=i.minsize&&(u=[Math.max
(u*r.TeX.delimiterfactor/1e3,u-r.TeX.delimitershortfall),u]),n=r.createDelimiter(
this.data.join("").charCodeAt(0),u,n.scale),i.symmetric?u=(n.h+n.d)/2+s:u=(n.h+n.
d)*e/(e+t),n.y=u-n.h,this.SVGhandleSpace(n),this.SVGhandleColor(n),delete this.svg
.element,this.SVGsaveData(n),n.stretched=!0,n},SVGstretchH:function(e){var t=this
.svg||this.toSVG(),n=this.SVGgetMu(t),s=this.getValues("maxsize","minsize","mathvariant"
,"fontweight");return(s.fontweight==="bold"||parseInt(s.fontweight)>=600)&&!this.
Get("mathvariant",!0)&&(s.mathvariant=i.VARIANT.BOLD),s.maxsize=r.length2em(s.maxsize
,n,t.w),s.minsize=r.length2em(s.minsize,n,t.w),e=Math.max(s.minsize,Math.min(s.maxsize
,e)),t=r.createDelimiter(this.data.join("").charCodeAt(0),e,t.scale,s.mathvariant
),this.SVGhandleSpace(t),this.SVGhandleColor(t),delete this.svg.element,this.SVGsaveData
(t),t.stretched=!0,t}}),i.mtext.Augment({toSVG:function(){if(r.config.mtextFontInherit||
this.Parent().type==="merror"){this.SVGgetStyles();var e=this.SVG(),t=this.SVGgetScale
(e);this.SVGhandleSpace(e);var n=this.SVGgetVariant(),i={direction:this.Get("dir"
)};return n.bold&&(i["font-weight"]="bold"),n.italic&&(i["font-style"]="italic"),
n=this.Get("mathvariant"),n==="monospace"?i["class"]="MJX-monospace":n.match(/sans-serif/
)&&(i["class"]="MJX-sans-serif"),e.Add(u.TEXT(t*100/r.config.scale,this.data.join
(""),i)),e.Clean(),this.SVGhandleColor(e),this.SVGsaveData(e),e}return this.SUPER
(arguments).toSVG.call(this)}}),i.merror.Augment({toSVG:function(e,t){this.SVGgetStyles
();var n=this.SVG(),i=r.length2em(this.styles.fontSize||1)/1e3;this.SVGhandleSpace
(n);var s=i!==1?{transform:"scale("+r.Fixed(i)+")"}:{},o=u(s);o.Add(this.SVGchildSVG
(0)),o.Clean();if(i!==1){o.removeable=!1;var a=["w","h","d","l","r","D","H"];for(
var f=0,l=a.length;f<l;f++)o[a[f]]*=i}return n.Add(o),n.Clean(),this.SVGhandleColor
(n),this.SVGsaveData(n),n},SVGgetStyles:function(){var e=n.Element("span",{style:
r.config.merrorStyle});this.styles=this.SVGprocessStyles(e.style),this.style&&(e.
style.cssText=this.style,t.Insert(this.styles,this.SVGprocessStyles(e.style)))}})
,i.ms.Augment({toSVG:i.mbase.SVGautoload}),i.mglyph.Augment({toSVG:i.mbase.SVGautoload
}),i.mspace.Augment({toSVG:function(){this.SVGgetStyles();var e=this.getValues("height"
,"depth","width");e.mathbackground=this.mathbackground,this.background&&!this.mathbackground&&
(e.mathbackground=this.background);var t=this.SVG();this.SVGgetScale(t);var n=this
.mscale,i=this.SVGgetMu(t);return t.h=r.length2em(e.height,i)*n,t.d=r.length2em(e
.depth,i)*n,t.w=t.r=r.length2em(e.width,i)*n,t.w<0&&(t.x=t.w,t.w=t.r=0),t.h<-t.d&&
(t.d=-t.h),t.l=0,t.Clean(),this.SVGhandleColor(t),this.SVGsaveData(t),t}}),i.mphantom
.Augment({toSVG:function(e,t){this.SVGgetStyles();var n=this.SVG();this.SVGgetScale
(n);if(this.data[0]!=null){this.SVGhandleSpace(n),n.Add(this.SVGdataStretched(0,e
,t)),n.Clean();while(n.element.firstChild)n.element.removeChild(n.element.firstChild
)}return this.SVGhandleColor(n),this.SVGsaveData(n),n.removeable&&!n.element.firstChild&&delete 
n.element,n}}),i.mpadded.Augment({toSVG:function(e,t){this.SVGgetStyles();var n=this
.SVG();if(this.data[0]!=null){this.SVGgetScale(n),this.SVGhandleSpace(n);var r=this
.SVGdataStretched(0,e,t),i=this.SVGgetMu(n),s=this.getValues("height","depth","width"
,"lspace","voffset"),o=0,u=0;s.lspace&&(o=this.SVGlength2em(r,s.lspace,i)),s.voffset&&
(u=this.SVGlength2em(r,s.voffset,i));var a=r.h,f=r.d,l=r.w,c=r.y;n.Add(r,o,u),n.Clean
(),n.h=a+c,n.d=f-c,n.w=l,n.removeable=!1,s.height!==""&&(n.h=this.SVGlength2em(n,
s.height,i,"h",0)),s.depth!==""&&(n.d=this.SVGlength2em(n,s.depth,i,"d",0)),s.width!==""&&
(n.w=this.SVGlength2em(n,s.width,i,"w",0)),n.h>n.H&&(n.H=n.h),n.d>n.D&&(n.D=n.d)}
return this.SVGhandleColor(n),this.SVGsaveData(n),n},SVGlength2em:function(e,t,n,
i,s){s==null&&(s=-r.BIGDIMEN);var o=String(t).match(/width|height|depth/),u=o?e[o
[0].charAt(0)]:i?e[i]:0,a=r.length2em(t,n,u/this.mscale)*this.mscale;return i&&String
(t).match(/^\s*[-+]/)?Math.max(s,e[i]+a):a}}),i.mrow.Augment({SVG:u.ROW,toSVG:function(
e,t){this.SVGgetStyles();var n=this.SVG();this.SVGhandleSpace(n),t!=null&&(n.sh=e
,n.sd=t);for(var r=0,i=this.data.length;r<i;r++)this.data[r]&&n.Check(this.data[r
]);n.Stretch(),n.Clean();if(this.data.length===1&&this.data[0]){var s=this.data[0
].SVGdata;s.skew&&(n.skew=s.skew)}return this.SVGlineBreaks(n)&&(n=this.SVGmultiline
(n)),this.SVGhandleColor(n),this.SVGsaveData(n),n},SVGlineBreaks:function(e){return this
.parent.linebreakContainer?r.config.linebreaks.automatic&&e.w>r.linebreakWidth||this
.hasNewline():!1},SVGmultiline:function(e){i.mbase.SVGautoloadFile("multiline")},
SVGstretchH:function(e){var t=this.SVG();this.SVGhandleSpace(t);for(var n=0,r=this
.data.length;n<r;n++)t.Add(this.SVGdataStretched(n,e),t.w,0);return t.Clean(),this
.SVGhandleColor(t),this.SVGsaveData(t),t}}),i.mstyle.Augment({toSVG:function(){this
.SVGgetStyles();var e=this.SVG();if(this.data[0]!=null){this.SVGhandleSpace(e);var t=
e.Add(this.data[0].toSVG());e.Clean(),t.ic&&(e.ic=t.ic),this.SVGhandleColor(e)}return this
.SVGsaveData(e),e},SVGstretchH:function(e){return this.data[0]!=null?this.data[0]
.SVGstretchH(e):u.NULL()},SVGstretchV:function(e,t){return this.data[0]!=null?this
.data[0].SVGstretchV(e,t):u.NULL()}}),i.mfrac.Augment({toSVG:function(){this.SVGgetStyles
();var e=this.SVG(),t=this.SVGgetScale(e),n=u();n.scale=e.scale,this.SVGhandleSpace
(n);var i=this.SVGchildSVG(0),s=this.SVGchildSVG(1),o=this.getValues("displaystyle"
,"linethickness","numalign","denomalign","bevelled"),a=o.displaystyle,f=r.TeX.axis_height*
t;if(o.bevelled){var l=a?400:150,c=Math.max(i.h+i.d,s.h+s.d)+2*l,h=r.createDelimiter
(47,c);n.Add(i,0,(i.d-i.h)/2+f+l),n.Add(h,i.w-l/2,(h.d-h.h)/2+f),n.Add(s,i.w+h.w-
l,(s.d-s.h)/2+f-l)}else{var p=Math.max(i.w,s.w),d=r.thickness2em(o.linethickness,
this.scale)*this.mscale,v,m,g,y,b=r.TeX.min_rule_thickness/r.em*1e3;a?(g=r.TeX.num1
,y=r.TeX.denom1):(g=d===0?r.TeX.num3:r.TeX.num2,y=r.TeX.denom2),g*=t,y*=t,d===0?(
v=Math.max((a?7:3)*r.TeX.rule_thickness,2*b),m=g-i.d-(s.h-y),m<v&&(g+=(v-m)/2,y+=
(v-m)/2),n.w=p,d=0):(v=Math.max((a?2:0)*b+d,d/2+1.5*b),m=g-i.d-(f+d/2),m<v&&(g+=v-
m),m=f-d/2-(s.h-y),m<v&&(y+=v-m),n.Add(u.RECT(d/2,d/2,p+2*d),0,f)),n.Align(i,o.numalign
,d,g),n.Align(s,o.denomalign,d,-y)}return n.Clean(),e.Add(n,0,0),e.Clean(),this.SVGhandleColor
(e),this.SVGsaveData(e),e},SVGcanStretch:function(e){return!1},SVGhandleSpace:function(
e){!this.texWithDelims&&!this.useMMLspacing&&(e.x=e.X=r.TeX.nulldelimiterspace*this
.mscale),this.SUPER(arguments).SVGhandleSpace.call(this,e)}}),i.msqrt.Augment({toSVG
:function(){this.SVGgetStyles();var e=this.SVG(),t=this.SVGgetScale(e);this.SVGhandleSpace
(e);var n=this.SVGchildSVG(0),i,s,o=r.TeX.rule_thickness*t,a,f,l,c=0;return this.
Get("displaystyle")?a=r.TeX.x_height*t:a=o,f=Math.max(o+a/4,1e3*r.TeX.min_root_space/
r.em),l=n.h+n.d+f+o,s=r.createDelimiter(8730,l,t),s.h+s.d>l&&(f=(s.h+s.d-(l-o))/2
),i=u.RECT(o,0,n.w),l=n.h+f+o,c=this.SVGaddRoot(e,s,c,s.h+s.d-l,t),e.Add(s,c,l-s.
h),e.Add(i,c+s.w,l-i.h),e.Add(n,c+s.w,0),e.Clean(),e.h+=o,e.H+=o,this.SVGhandleColor
(e),this.SVGsaveData(e),e},SVGaddRoot:function(e,t,n,r,i){return n}}),i.mroot.Augment
({toSVG:i.msqrt.prototype.toSVG,SVGaddRoot:function(e,t,n,r,i){var s=(t.isMultiChar?.55
:.65)*t.w;if(this.data[1]){var o=this.data[1].toSVG();o.x=0;var u=this.SVGrootHeight
(t.h+t.d,i,o)-r,a=Math.min(o.w,o.r);n=Math.max(a,s),e.Add(o,n-a,u)}else s=n;return n-
s},SVGrootHeight:function(e,t,n){return.45*(e-900*t)+600*t+Math.max(0,n.d-75)}}),
i.mfenced.Augment({SVG:u.ROW,toSVG:function(){this.SVGgetStyles();var e=this.SVG(
);this.SVGhandleSpace(e),this.data.open&&e.Check(this.data.open),this.data[0]!=null&&
e.Check(this.data[0]);for(var t=1,n=this.data.length;t<n;t++)this.data[t]&&(this.
data["sep"+t]&&e.Check(this.data["sep"+t]),e.Check(this.data[t]));return this.data
.close&&e.Check(this.data.close),e.Stretch(),e.Clean(),this.SVGhandleColor(e),this
.SVGsaveData(e),e}}),i.menclose.Augment({toSVG:i.mbase.SVGautoload}),i.maction.Augment
({toSVG:i.mbase.SVGautoload}),i.semantics.Augment({toSVG:function(){this.SVGgetStyles
();var e=this.SVG();return this.data[0]!=null?(this.SVGhandleSpace(e),e.Add(this.
data[0].toSVG()),e.Clean()):e.Clean(),this.SVGsaveData(e),e},SVGstretchH:function(
e){return this.data[0]!=null?this.data[0].SVGstretchH(e):u.NULL()},SVGstretchV:function(
e,t){return this.data[0]!=null?this.data[0].SVGstretchV(e,t):u.NULL()}}),i.munderover
.Augment({toSVG:function(e,t){this.SVGgetStyles();var n=this.getValues("displaystyle"
,"accent","accentunder","align");if(!n.displaystyle&&this.data[this.base]!=null&&
this.data[this.base].CoreMO().Get("movablelimits"))return i.msubsup.prototype.toSVG
.call(this);var s=this.SVG(),o=this.SVGgetScale(s);this.SVGhandleSpace(s);var a=[
],f=[],l,c,h,p=-r.BIGDIMEN,d=p;for(c=0,h=this.data.length;c<h;c++)this.data[c]!=null&&
(c==this.base?(a[c]=this.SVGdataStretched(c,e,t),f[c]=(t!=null||e==null)&&this.data
[c].SVGcanStretch("Horizontal")):(a[c]=this.data[c].toSVG(),a[c].x=0,delete a[c].
X,f[c]=this.data[c].SVGcanStretch("Horizontal")),a[c].w>d&&(d=a[c].w),!f[c]&&d>p&&
(p=d));t==null&&e!=null?p=e:p==-r.BIGDIMEN&&(p=d);for(c=d=0,h=this.data.length;c<
h;c++)this.data[c]&&(f[c]&&(a[c]=this.data[c].SVGstretchH(p),c!==this.base&&(a[c]
.x=0,delete a[c].X)),a[c].w>d&&(d=a[c].w));var v=r.TeX.rule_thickness*this.mscale
,m=a[this.base]||{w:0,h:0,d:0,H:0,D:0,l:0,r:0,y:0,scale:o},g,y,b,w,E,S,x,T=0;m.ic&&
(T=1.3*m.ic+.05);for(c=0,h=this.data.length;c<h;c++)if(this.data[c]!=null){l=a[c]
,E=r.TeX.big_op_spacing5*o;var N=c!=this.base&&n[this.ACCENTS[c]];N&&l.w<=1&&(l.x=-
l.l,a[c]=u.G().With({removeable:!1}),a[c].Add(l),a[c].Clean(),a[c].w=-l.l,l=a[c])
,S={left:0,center:(d-l.w)/2,right:d-l.w}[n.align],g=S,y=0,c==this.over?(N?(x=v*o,
E=0,m.skew&&(g+=m.skew,s.skew=m.skew,g+l.w>d&&(s.skew+=(d-l.w-g)/2))):(b=r.TeX.big_op_spacing1*
o,w=r.TeX.big_op_spacing3*o,x=Math.max(b,w-Math.max(0,l.d))),x=Math.max(x,1500/r.
em),g+=T/2,y=m.y+m.h+l.d+x,l.h+=E,l.h>l.H&&(l.H=l.h)):c==this.under&&(N?(x=3*v*o,
E=0):(b=r.TeX.big_op_spacing2*o,w=r.TeX.big_op_spacing4*o,x=Math.max(b,w-l.h)),x=
Math.max(x,1500/r.em),g-=T/2,y=m.y-(m.d+l.h+x),l.d+=E,l.d>l.D&&(l.D=l.d)),s.Add(l
,g,y)}return s.Clean(),this.SVGhandleColor(s),this.SVGsaveData(s),s}}),i.msubsup.
Augment({toSVG:function(e,t){this.SVGgetStyles();var n=this.SVG(),i=this.SVGgetScale
(n);this.SVGhandleSpace(n);var s=this.SVGgetMu(n),o=n.Add(this.SVGdataStretched(this
.base,e,t)),u=(this.data[this.sup]||this.data[this.sub]||this).SVGgetScale(),a=r.
TeX.x_height*i,f=r.TeX.scriptspace*i,l,c;this.SVGnotEmpty(this.data[this.sup])&&(
l=this.data[this.sup].toSVG(),l.w+=f,l.r=Math.max(l.w,l.r)),this.SVGnotEmpty(this
.data[this.sub])&&(c=this.data[this.sub].toSVG(),c.w+=f,c.r=Math.max(c.w,c.r));var h=
r.TeX.sup_drop*u,p=r.TeX.sub_drop*u,d=o.h+(o.y||0)-h,v=o.d-(o.y||0)+p,m=0,g;o.ic&&
(o.w-=o.ic,m=1.3*o.ic+.05),this.data[this.base]&&(this.data[this.base].type==="mi"||
this.data[this.base].type==="mo")&&this.data[this.base].data.join("").length===1&&
o.scale===1&&!o.stretched&&!this.data[this.base].Get("largeop")&&(d=v=0);var y=this
.getValues("subscriptshift","superscriptshift");y.subscriptshift=y.subscriptshift===""?0
:r.length2em(y.subscriptshift,s),y.superscriptshift=y.superscriptshift===""?0:r.length2em
(y.superscriptshift,s);var b=o.w+o.x;if(!l)c&&(v=Math.max(v,r.TeX.sub1*i,c.h-.8*a
,y.subscriptshift),n.Add(c,b,-v),this.data[this.sub].SVGdata.dy=-v);else if(!c)values=
this.getValues("displaystyle","texprimestyle"),g=r.TeX[values.displaystyle?"sup1"
:values.texprimestyle?"sup3":"sup2"],d=Math.max(d,g*i,l.d+.25*a,y.superscriptshift
),n.Add(l,b+m,d),this.data[this.sup].SVGdata.dx=m,this.data[this.sup].SVGdata.dy=
d;else{v=Math.max(v,r.TeX.sub2*i);var w=r.TeX.rule_thickness*i;d-l.d-(c.h-v)<3*w&&
(v=3*w-d+l.d+c.h,h=.8*a-(d-l.d),h>0&&(d+=h,v-=h)),n.Add(l,b+m,Math.max(d,y.superscriptshift
)),n.Add(c,b,-Math.max(v,y.subscriptshift)),this.data[this.sup].SVGdata.dx=m,this
.data[this.sup].SVGdata.dy=Math.max(d,y.superscriptshift),this.data[this.sub].SVGdata
.dy=-Math.max(v,y.subscriptshift)}return n.Clean(),this.SVGhandleColor(n),this.SVGsaveData
(n),n}}),i.mmultiscripts.Augment({toSVG:i.mbase.SVGautoload}),i.mtable.Augment({toSVG
:i.mbase.SVGautoload}),i["annotation-xml"].Augment({toSVG:i.mbase.SVGautoload}),i
.math.Augment({SVG:u.Subclass({type:"svg",removeable:!1}),toSVG:function(e,n){var s=
r.config;if(this.data[0]){this.SVGgetStyles(),i.mbase.prototype.displayAlign=t.config
.displayAlign,i.mbase.prototype.displayIndent=t.config.displayIndent,String(t.config
.displayIndent).match(/^0($|[a-z%])/i)&&(i.mbase.prototype.displayIndent="0");var a=
u.G();a.Add(this.data[0].toSVG(),0,0,!0),a.Clean(),this.SVGhandleColor(a),r.Element
(a.element,{stroke:"currentColor",fill:"currentColor","stroke-width":0,transform:"matrix(1 0 0 -1 0 0)"
}),a.removeable=!1;var f=this.SVG();f.element.setAttribute("xmlns:xlink",o),s.useFontCache&&!
s.useGlobalCache&&f.element.appendChild(u.GLYPH.defs),f.Add(a),f.Clean(),this.SVGsaveData
(f);if(!e)return f.element=f.element.firstChild,f.element.removeAttribute("transform"
),f.removable=!0,f;var l=Math.max(-f.l,0),c=Math.max(f.r-f.w,0),h=f.element.style
;f.element.setAttribute("width",r.Ex(l+f.w+c)),f.element.setAttribute("height",r.
Ex(f.H+f.D+2*r.em)),h.verticalAlign=r.Ex(-f.D-2*r.em),h.marginLeft=r.Ex(-l),h.marginRight=
r.Ex(-c),f.element.setAttribute("viewBox",r.Fixed(-l,1)+" "+r.Fixed(-f.H-r.em,1)+" "+
r.Fixed(l+f.w+c,1)+" "+r.Fixed(f.H+f.D+2*r.em,1)),h.marginTop=h.marginBottom="1px"
,f.H>f.h&&(h.marginTop=r.Ex(f.h-f.H)),f.D>f.d&&(h.marginBottom=r.Ex(f.d-f.D),h.verticalAlign=
r.Ex(-f.d));var p=this.Get("alttext");p&&!f.element.getAttribute("aria-label")&&e
.setAttribute("aria-label",p),f.element.getAttribute("role")||e.setAttribute("role"
,"math"),e.appendChild(f.element),f.element=null;if(!this.isMultiline&&this.Get("display"
)==="block"&&!f.hasIndent){var d=this.getValues("indentalignfirst","indentshiftfirst"
,"indentalign","indentshift");d.indentalignfirst!==i.INDENTALIGN.INDENTALIGN&&(d.
indentalign=d.indentalignfirst),d.indentalign===i.INDENTALIGN.AUTO&&(d.indentalign=
this.displayAlign),d.indentshiftfirst!==i.INDENTSHIFT.INDENTSHIFT&&(d.indentshift=
d.indentshiftfirst),d.indentshift==="auto"&&(d.indentshift="0");var v=r.length2em
(d.indentshift,1,r.cwidth);if(this.displayIndent!=="0"){var m=r.length2em(this.displayIndent
,1,r.cwidth);v+=d.indentalign===i.INDENTALIGN.RIGHT?-m:m}n.style.textAlign=d.indentalign
,v&&t.Insert(h,{left:{marginLeft:r.Ex(v)},right:{marginRight:r.Ex(-v)},center:{marginLeft
:r.Ex(v),marginRight:r.Ex(-v)}}[d.indentalign])}}return e}}),i.TeXAtom.Augment({toSVG
:function(e,t){this.SVGgetStyles();var n=this.SVG();this.SVGhandleSpace(n);if(this
.data[0]!=null){var s=this.SVGdataStretched(0,e,t),o=0;this.texClass===i.TEXCLASS
.VCENTER&&(o=r.TeX.axis_height-(s.h+s.d)/2+s.d),n.Add(s,0,o),n.ic=s.ic,n.skew=s.skew
}return this.SVGhandleColor(n),this.SVGsaveData(n),n}}),t.Register.StartupHook("onLoad"
,function(){setTimeout(MathJax.Callback(["loadComplete",r,"jax.js"]),0)})}),t.Browser
.Select({Opera:function(e){r.Augment({operaZoomRefresh:!0})}}),t.Register.StartupHook
("End Cookie",function(){t.config.menuSettings.zoom!=="None"&&e.Require("[MathJax]/extensions/MathZoom.js"
)}),document.createElementNS||(document.namespaces.svg||document.namespaces.add("svg"
,s),r.Augment({Element:function(e,t){var n=typeof e=="string"?document.createElement
("svg:"+e):e;n.isMathJax=!0;if(t)for(var r in t)t.hasOwnProperty(r)&&n.setAttribute
(r,t[r].toString());return n}}))})(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.
OutputJax.SVG);