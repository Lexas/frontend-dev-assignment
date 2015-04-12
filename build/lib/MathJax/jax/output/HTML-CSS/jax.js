/*
 *  /MathJax/jax/output/HTML-CSS/jax.js
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

(function(e,t,n){var r,i=t.Browser.isMobile,s=function(){var e=[].slice.call(arguments
,0);return e[0][0]=["HTML-CSS",e[0][0]],MathJax.Message.Set.apply(MathJax.Message
,e)},o=MathJax.Object.Subclass({timeout:(i?15:8)*1e3,comparisonFont:["sans-serif"
,"monospace","script","Times","Courier","Arial","Helvetica"],testSize:["40px","50px"
,"60px","30px","20px"],FedoraSTIXcheck:{family:"STIXSizeOneSym",testString:"abcABC"
,noStyleChar:!0},Init:function(){this.div=MathJax.HTML.addElement(document.body,"div"
,{style:{position:"absolute",width:0,height:0,overflow:"hidden",padding:0,border:0
,margin:0}},[["div",{id:"MathJax_Font_Test",style:{position:"absolute",visibility
:"hidden",top:0,left:0,width:"auto",padding:0,border:0,margin:0,whiteSpace:"nowrap"
,textAlign:"left",textIndent:0,textTransform:"none",lineHeight:"normal",letterSpacing
:"normal",wordSpacing:"normal",fontSize:this.testSize[0],fontWeight:"normal",fontStyle
:"normal",fontSizeAdjust:"none"}},[""]]]).firstChild,this.text=this.div.firstChild
},findFont:function(e,t){var n=null;if(t&&this.testCollection(t))n=t;else for(var r=0
,i=e.length;r<i;r++){if(e[r]===t)continue;if(this.testCollection(e[r])){n=e[r];break}
}return n==="STIX"&&this.testFont(this.FedoraSTIXcheck)&&(n=null),n},testCollection
:function(e){var t={testString:"() {} []"};return t.family={TeX:"MathJax_Size1",STIX
:"STIXSizeOneSym"}[e]||e.replace(/-(Math)?/,"")+"MathJax_Size1",e==="STIX"&&(t.noStyleChar=!0
),this.testFont(t)},testFont:function(e){e.isWebFont&&n.FontFaceBug?this.div.style
.fontWeight=this.div.style.fontStyle="normal":(this.div.style.fontWeight=e.weight||"normal"
,this.div.style.fontStyle=e.style||"normal");var t=e.familyFixed||e.family;t.match
(/^(STIX|MathJax)|'/)||(t=t.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").
replace(/ Jax/,"Jax")+"','"+t+"','"+t+"-",e.weight&&(t+="Bold"),e.style&&(t+="Italic"
),!e.weight&&!e.style&&(t+="Regular"),e.familyFixed=t="'"+t+"'");var r=this.getComparisonWidths
(e.testString,e.noStyleChar),i=null;if(r){this.div.style.fontFamily=t+","+this.comparisonFont
[0],this.div.offsetWidth==r[0]&&(this.div.style.fontFamily=t+","+this.comparisonFont
[r[2]],this.div.offsetWidth==r[1]&&(i=!1));if(i===null&&(this.div.offsetWidth!=r[3
]||this.div.offsetHeight!=r[4]))if(!e.noStyleChar&&n.FONTDATA&&n.FONTDATA.hasStyleChar
)for(var s=0,o=this.testSize.length;s<o;s++)this.testStyleChar(e,this.testSize[s]
)&&(i=!0,o=0);else i=!0}return n.safariTextNodeBug?this.div.innerHTML="":this.text
.nodeValue="",i},styleChar:"",versionChar:"",compChar:"",testStyleChar:function(
e,t){var r=3+(e.weight?2:0)+(e.style?4:0),i="",s=0,o=this.div.style.fontSize;this
.div.style.fontSize=t,n.msieItalicWidthBug&&e.style==="italic"&&(this.text.nodeValue=
i=this.compChar,s=this.div.offsetWidth),n.safariTextNodeBug?this.div.innerHTML=this
.compChar+i:this.text.nodeValue=this.compChar+i;var u=this.div.offsetWidth-s;n.safariTextNodeBug?
this.div.innerHTML=this.styleChar+i:this.text.nodeValue=this.styleChar+i;var a=Math
.floor((this.div.offsetWidth-s)/u+.5);return a===r&&(n.safariTextNodeBug?this.div
.innerHTML=this.versionChar+i:this.text.nodeValue=this.versionChar+i,e.version=Math
.floor((this.div.offsetWidth-s)/u+1.5)/2),this.div.style.fontSize=o,a===r},getComparisonWidths
:function(e,t){n.FONTDATA&&n.FONTDATA.hasStyleChar&&!t&&(e+=this.styleChar+" "+this
.compChar),n.safariTextNodeBug?this.div.innerHTML=e:this.text.nodeValue=e,this.div
.style.fontFamily=this.comparisonFont[0];var r=this.div.offsetWidth;this.div.style
.fontFamily=n.webFontDefault;var i=this.div.offsetWidth,s=this.div.offsetHeight;for(
var o=1,u=this.comparisonFont.length;o<u;o++){this.div.style.fontFamily=this.comparisonFont
[o];if(this.div.offsetWidth!=r)return[r,this.div.offsetWidth,o,i,s]}return null},
loadWebFont:function(r){t.Startup.signal.Post("HTML-CSS Jax - Web-Font "+n.fontInUse+"/"+
r.directory);var i=s(["LoadWebFont","Loading web-font %1",n.fontInUse+"/"+r.directory
]),o=MathJax.Callback({}),u=MathJax.Callback(["loadComplete",this,r,i,o]);return e
.timer.start(e,[this.checkWebFont,r,u],0,this.timeout),o},loadComplete:function(r
,i,s,o){MathJax.Message.Clear(i);if(o===e.STATUS.OK){this.webFontLoaded=!0,s();return}
this.loadError(r);if(t.Browser.isFirefox&&n.allowWebFonts){var u=document.location
.protocol+"//"+document.location.hostname;document.location.port!=""&&(u+=":"+document
.location.port),u+="/",e.fileURL(n.webfontDir).substr(0,u.length)!==u&&this.firefoxFontError
(r)}this.webFontLoaded?s():n.loadWebFontError(r,s)},loadError:function(e){s(["CantLoadWebFont"
,"Can't load web font %1",n.fontInUse+"/"+e.directory],null,2e3),t.Startup.signal
.Post(["HTML-CSS Jax - web font error",n.fontInUse+"/"+e.directory,e])},firefoxFontError
:function(e){s(["FirefoxCantLoadWebFont","Firefox can't load web fonts from a remote host"
],null,3e3),t.Startup.signal.Post("HTML-CSS Jax - Firefox web fonts on remote host error"
)},checkWebFont:function(e,t,r){if(e.time(r))return;n.Font.testFont(t)?r(e.STATUS
.OK):setTimeout(e,e.delay)},fontFace:function(t){var r=n.allowWebFonts,i=n.FONTDATA
.FONTS[t];n.msieFontCSSBug&&!i.family.match(/-Web$/)&&(i.family+="-Web");var s=n.
webfontDir+"/"+r,o=e.fileURL(s),u=t.replace(/-b/,"-B").replace(/-i/,"-I").replace
(/-Bold-/,"-Bold");u.match(/-/)||(u+="-Regular"),r==="svg"?u+=".svg#"+u:u+="."+r;
var a=e.fileRev(s+"/"+u.replace(/#.*/,"")),f={"font-family":i.family,src:"url('"+
o+"/"+u+a+"')"};r==="otf"?(u=u.replace(/otf$/,"woff"),a=e.fileRev(s+"/"+u),f.src+=" format('opentype')"
,o=e.fileURL(n.webfontDir+"/woff"),f.src="url('"+o+"/"+u+a+"') format('woff'), "+
f.src):r!=="eot"&&(f.src+=" format('"+r+"')");if(!n.FontFaceBug||!i.isWebFont)t.match
(/-bold/)&&(f["font-weight"]="bold"),t.match(/-italic/)&&(f["font-style"]="italic"
);return f}}),u,a,f;n.Augment({config:{styles:{".MathJax":{display:"inline","font-style"
:"normal","font-weight":"normal","line-height":"normal","font-size":"100%","font-size-adjust"
:"none","text-indent":0,"text-align":"left","text-transform":"none","letter-spacing"
:"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float"
:"none",direction:"ltr","max-width":"none","max-height":"none","min-width":0,"min-height"
:0,border:0,padding:0,margin:0},".MathJax_Display":{position:"relative",display:"block!important"
,"text-indent":0,"max-width":"none","max-height":"none","min-width":0,"min-height"
:0,width:"100%"},".MathJax img, .MathJax nobr, .MathJax a":{border:0,padding:0,margin
:0,"max-width":"none","max-height":"none","min-width":0,"min-height":0,"vertical-align"
:0,"line-height":"normal","text-decoration":"none"},"img.MathJax_strut":{border:"0!important"
,padding:"0!important",margin:"0!important","vertical-align":"0!important"},".MathJax span"
:{display:"inline",position:"static",border:0,padding:0,margin:0,"vertical-align"
:0,"line-height":"normal","text-decoration":"none"},".MathJax nobr":{"white-space"
:"nowrap!important"},".MathJax img":{display:"inline!important","float":"none!important"
},".MathJax *":{transition:"none","-webkit-transition":"none","-moz-transition":"none"
,"-ms-transition":"none","-o-transition":"none"},".MathJax_Processing":{visibility
:"hidden",position:"fixed",width:0,height:0,overflow:"hidden"},".MathJax_Processed"
:{display:"none!important"},".MathJax_ExBox":{display:"block!important",overflow:"hidden"
,width:"1px",height:"60ex","min-height":0,"max-height":"none"},".MathJax .MathJax_EmBox"
:{display:"block!important",overflow:"hidden",width:"1px",height:"60em","min-height"
:0,"max-height":"none"},".MathJax .MathJax_HitBox":{cursor:"text",background:"white"
,opacity:0,filter:"alpha(opacity=0)"},".MathJax .MathJax_HitBox *":{filter:"none"
,opacity:1,background:"transparent"},"#MathJax_Tooltip":{position:"absolute",left
:0,top:0,width:"auto",height:"auto",display:"none"},"#MathJax_Tooltip *":{filter:"none"
,opacity:1,background:"transparent"},"@font-face":{"font-family":"MathJax_Blank",
src:"url('about:blank')"}}},settings:t.config.menuSettings,Font:null,webFontDefault
:"MathJax_Blank",allowWebFonts:"otf",maxStretchyParts:1e3,fontName:{TeXLocal:"TeX"
,TeXWeb:["","TeX"],TeXImage:["",""],STIXLocal:["STIX","STIX-Web"],STIXWeb:"STIX-Web"
,AsanaMathWeb:"Asana-Math",GyrePagellaWeb:"Gyre-Pagella",GyreTermesWeb:"Gyre-Termes"
,LatinModernWeb:"Latin-Modern",NeoEulerWeb:"Neo-Euler"},fontInUse:"generic",FONTDATA
:{TeX_factor:1,baselineskip:1.2,lineH:.8,lineD:.2,ffLineH:.8,FONTS:{},VARIANT:{normal
:{fonts:[]},"-generic-variant":{},"-largeOp":{},"-smallOp":{}},RANGES:[],DELIMITERS
:{},RULECHAR:45,REMAP:{}},Config:function(){this.require||(this.require=[]),this.
Font=o(),this.SUPER(arguments).Config.call(this);var e=this.settings,n=this.config
,r=e.font;this.adjustAvailableFonts&&this.adjustAvailableFonts(n.availableFonts),
e.scale&&(n.scale=e.scale),r&&r!=="Auto"&&this.fontName[r]&&(n.availableFonts=[],delete 
n.fonts,this.fontName[r]instanceof Array?(n.preferredFont=this.fontName[r][0],n.webFont=
this.fontName[r][1]):n.preferredFont=n.webFont=this.fontName[r],n.preferredFont&&
(n.availableFonts[0]=n.preferredFont)),n.fonts&&(n.availableFonts=n.fonts,n.preferredFont=
n.webFont=n.fonts[0],n.webFont==="STIX"&&(n.webFont+="-Web")),r=this.Font.findFont
(n.availableFonts,n.preferredFont),!r&&this.allowWebFonts&&(r=n.webFont,r&&(this.
webFonts=!0)),!r&&this.config.imageFont&&(r=n.imageFont,this.imgFonts=!0),r?(this
.fontInUse=r,this.fontDir+="/"+r,this.webfontDir+="/"+r,this.require.push(this.fontDir+"/fontdata.js"
),this.imgFonts&&(this.require.push(this.directory+"/imageFonts.js"),t.Startup.signal
.Post("HTML-CSS Jax - using image fonts"))):(s(["CantFindFontUsing","Can't find a valid font using %1"
,"["+this.config.availableFonts.join(", ")+"]"],null,3e3),t.Startup.signal.Post("HTML-CSS Jax - no valid font"
)),this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(
){u=MathJax.Extension.MathEvents.Event,a=MathJax.Extension.MathEvents.Touch,f=MathJax
.Extension.MathEvents.Hover,this.ContextMenu=u.ContextMenu,this.Mousedown=u.AltContextMenu
,this.Mouseover=f.Mouseover,this.Mouseout=f.Mouseout,this.Mousemove=f.Mousemove,this
.hiddenDiv=this.Element("div",{style:{visibility:"hidden",overflow:"hidden",position
:"absolute",top:0,height:"1px",width:"auto",padding:0,border:0,margin:0,textAlign
:"left",textIndent:0,textTransform:"none",lineHeight:"normal",letterSpacing:"normal"
,wordSpacing:"normal"}}),document.body.firstChild?document.body.insertBefore(this
.hiddenDiv,document.body.firstChild):document.body.appendChild(this.hiddenDiv),this
.hiddenDiv=this.addElement(this.hiddenDiv,"div",{id:"MathJax_Hidden"});var t=this
.addElement(this.hiddenDiv,"div",{style:{width:"5in"}});this.pxPerInch=t.offsetWidth/5
,this.hiddenDiv.removeChild(t),this.startMarker=this.createStrut(this.Element("span"
),10,!0),this.endMarker=this.addText(this.Element("span"),"x").parentNode,this.HDspan=
this.Element("span"),this.operaHeightBug&&this.createStrut(this.HDspan,0);if(this
.msieInlineBlockAlignBug){this.HDimg=this.addElement(this.HDspan,"img",{style:{height
:"0px",width:"1px"}});try{this.HDimg.src="about:blank"}catch(n){}}else this.HDimg=
this.createStrut(this.HDspan,0);return this.EmExSpan=this.Element("span",{style:{
position:"absolute","font-size-adjust":"none"}},[["span",{className:"MathJax_ExBox"
}],["span",{className:"MathJax"},[["span",{className:"MathJax_EmBox"}]]]]),this.linebreakSpan=
this.Element("span",null,[["hr",{style:{width:"100%",size:1,padding:0,border:0,margin
:0}}]]),e.Styles(this.config.styles,["InitializeHTML",this])},removeSTIXfonts:function(
e){for(var t=0,n=e.length;t<n;t++)e[t]==="STIX"&&(e.splice(t,1),n--,t--);this.config
.preferredFont==="STIX"&&(this.config.preferredFont=e[0])},PreloadWebFonts:function(
){if(!n.allowWebFonts||!n.config.preloadWebFonts)return;for(var e=0,t=n.config.preloadWebFonts
.length;e<t;e++){var r=n.FONTDATA.FONTS[n.config.preloadWebFonts[e]];r.available||
n.Font.testFont(r)}},InitializeHTML:function(){this.PreloadWebFonts(),this.getDefaultExEm
();if(this.defaultEm)return;var r=MathJax.Callback();return e.timer.start(e,function(
e){if(e.time(r)){t.signal.Post(["HTML-CSS Jax - no default em size"]);return}n.getDefaultExEm
(),n.defaultEm?r():setTimeout(e,e.delay)},this.defaultEmDelay,this.defaultEmTimeout
),r},defaultEmDelay:100,defaultEmTimeout:1e3,getDefaultExEm:function(){document.body
.appendChild(this.EmExSpan),document.body.appendChild(this.linebreakSpan),this.defaultEx=
this.EmExSpan.firstChild.offsetHeight/60,this.defaultEm=this.EmExSpan.lastChild.firstChild
.offsetHeight/60,this.defaultWidth=this.linebreakSpan.firstChild.offsetWidth,document
.body.removeChild(this.linebreakSpan),document.body.removeChild(this.EmExSpan)},preTranslate
:function(e){var n=e.jax[this.id],r,i=n.length,s,o,f,l,c,h,p,d,v,m,g=!1,y,w=this.
config.linebreaks.automatic,E=this.config.linebreaks.width;w?(g=E.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/
)!=null,g?E=E.replace(/\s*container\s*/,""):m=this.defaultWidth,E===""&&(E="100%"
)):m=1e5;for(r=0;r<i;r++){s=n[r];if(!s.parentNode)continue;o=s.previousSibling,o&&
String(o.className).match(/^MathJax(_Display)?( MathJax_Processing)?$/)&&o.parentNode
.removeChild(o),h=s.MathJax.elementJax;if(!h)continue;h.HTMLCSS={display:h.root.Get
("display")==="block"},f=l=this.Element("span",{className:"MathJax",id:h.inputID+"-Frame"
,isMathJax:!0,jaxID:this.id,oncontextmenu:u.Menu,onmousedown:u.Mousedown,onmouseover
:u.Mouseover,onmouseout:u.Mouseout,onmousemove:u.Mousemove,onclick:u.Click,ondblclick
:u.DblClick}),t.Browser.noContextMenu&&(f.ontouchstart=a.start,f.ontouchend=a.end
),h.HTMLCSS.display?(l=this.Element("div",{className:"MathJax_Display"}),l.appendChild
(f)):this.msieDisappearingBug&&(f.style.display="inline-block"),l.className+=" MathJax_Processing"
,s.parentNode.insertBefore(l,s),s.parentNode.insertBefore(this.EmExSpan.cloneNode
(!0),s),l.parentNode.insertBefore(this.linebreakSpan.cloneNode(!0),l)}for(r=0;r<i
;r++){s=n[r];if(!s.parentNode)continue;c=s.previousSibling,l=c.previousSibling,h=
s.MathJax.elementJax;if(!h)continue;p=c.firstChild.offsetHeight/60,d=c.lastChild.
firstChild.offsetHeight/60,y=l.previousSibling.firstChild.offsetWidth,g&&(m=y);if(
p===0||p==="NaN")this.hiddenDiv.appendChild(l),h.HTMLCSS.isHidden=!0,p=this.defaultEx
,d=this.defaultEm,y=this.defaultWidth,g&&(m=y);v=this.config.matchFontHeight?p/this
.TeX.x_height/d:1,v=Math.floor(Math.max(this.config.minScaleAdjust/100,v)*this.config
.scale),h.HTMLCSS.scale=v/100,h.HTMLCSS.fontSize=v+"%",h.HTMLCSS.em=h.HTMLCSS.outerEm=
d,this.em=d*v/100,h.HTMLCSS.ex=p,h.HTMLCSS.cwidth=y/this.em,h.HTMLCSS.lineWidth=w?
this.length2em(E,1,m/this.em):1e6}for(r=0;r<i;r++){s=n[r];if(!s.parentNode)continue;
c=n[r].previousSibling,h=n[r].MathJax.elementJax;if(!h)continue;f=c.previousSibling
,h.HTMLCSS.isHidden||(f=f.previousSibling),f.parentNode.removeChild(f),c.parentNode
.removeChild(c)}e.HTMLCSSeqn=e.HTMLCSSlast=0,e.HTMLCSSi=-1,e.HTMLCSSchunk=this.config
.EqnChunk,e.HTMLCSSdelay=!1},PHASE:{I:1,II:2,III:3},Translate:function(e,n){if(!e
.parentNode)return;n.HTMLCSSdelay&&(n.HTMLCSSdelay=!1,t.RestartAfter(MathJax.Callback
.Delay(this.config.EqnChunkDelay)));var r=e.MathJax.elementJax,i=r.root,s=document
.getElementById(r.inputID+"-Frame"),o=r.HTMLCSS.display?(s||{}).parentNode:s;if(!
o)return;this.getMetrics(r),this.scale!==1&&(s.style.fontSize=r.HTMLCSS.fontSize)
,this.initImg(s),this.initHTML(i,s),this.savePreview(e);try{i.setTeXclass(),r.HTMLCSS
.span=s,r.HTMLCSS.div=o,i.toHTML(s,o,this.PHASE.I)}catch(u){if(u.restart)while(s.
firstChild)s.removeChild(s.firstChild);throw this.restorePreview(e),u}return this
.restorePreview(e),r.HTMLCSS.isHidden&&e.parentNode.insertBefore(o,e),o.className=
o.className.split(/ /)[0]+" MathJax_Processed",t.signal.Post(["New Math Pending",
r.inputID]),n.HTMLCSSeqn+=n.i-n.HTMLCSSi,n.HTMLCSSi=n.i,n.HTMLCSSeqn>=n.HTMLCSSlast+
n.HTMLCSSchunk&&(this.postTranslate(n,!0),n.HTMLCSSchunk=Math.floor(n.HTMLCSSchunk*
this.config.EqnChunkFactor),n.HTMLCSSdelay=!0),!1},savePreview:function(e){var t=
e.MathJax.preview;t&&(e.MathJax.tmpPreview=document.createElement("span"),t.parentNode
.replaceChild(e.MathJax.tmpPreview,t))},restorePreview:function(e){var t=e.MathJax
.tmpPreview;t&&(t.parentNode.replaceChild(e.MathJax.preview,t),delete e.MathJax.tmpPreview
)},getMetrics:function(e){var t=e.HTMLCSS;this.em=r.mbase.prototype.em=t.em*t.scale
,this.outerEm=t.em,this.scale=t.scale,this.cwidth=t.cwidth,this.linebreakWidth=t.
lineWidth},postTranslate:function(e,n){var r=e.jax[this.id],i,s,o,u;for(o=e.HTMLCSSlast
,u=e.HTMLCSSeqn;o<u;o++)i=r[o],i&&i.MathJax.elementJax&&(s=i.MathJax.elementJax,this
.getMetrics(s),s.root.toHTML(s.HTMLCSS.span,s.HTMLCSS.div,this.PHASE.II));for(o=e
.HTMLCSSlast,u=e.HTMLCSSeqn;o<u;o++)i=r[o],i&&i.MathJax.elementJax&&(s=i.MathJax.
elementJax,this.getMetrics(s),s.root.toHTML(s.HTMLCSS.span,s.HTMLCSS.div,this.PHASE
.III),delete s.HTMLCSS.span,delete s.HTMLCSS.div,i.MathJax.state=s.STATE.PROCESSED
,t.signal.Post(["New Math",i.MathJax.elementJax.inputID]),i.previousSibling.className=
i.previousSibling.className.split(/ /)[0],i.MathJax.preview&&(i.MathJax.preview.innerHTML=""
));if(this.forceReflow){var a=(document.styleSheets||[])[0]||{};a.disabled=!0,a.disabled=!1
}e.HTMLCSSlast=e.HTMLCSSeqn},getJaxFromMath:function(e){e.parentNode.className==="MathJax_Display"&&
(e=e.parentNode);do e=e.nextSibling;while(e&&e.nodeName.toLowerCase()!=="script")
;return t.getJaxFor(e)},getHoverSpan:function(e,t){return e.root.HTMLspanElement(
)},getHoverBBox:function(e,t,n){var r=t.bbox,i=e.HTMLCSS.outerEm,s={w:r.w*i,h:r.h*
i,d:r.d*i};return r.width&&(s.width=r.width),s},Zoom:function(e,i,s,o,a){i.className="MathJax"
,i.style.fontSize=e.HTMLCSS.fontSize;var f=i.appendChild(this.EmExSpan.cloneNode(!0
)),l=f.lastChild.firstChild.offsetHeight/60;this.em=r.mbase.prototype.em=l,this.outerEm=
l/e.HTMLCSS.scale,f.parentNode.removeChild(f),this.scale=e.HTMLCSS.scale,this.linebreakWidth=
e.HTMLCSS.lineWidth,this.cwidth=e.HTMLCSS.cwidth,this.zoomScale=parseInt(t.config
.menuSettings.zscale)/100,this.idPostfix="-zoom",e.root.toHTML(i,i),this.idPostfix=""
,this.zoomScale=1;var c=e.root.HTMLspanElement().bbox,h=c.width;if(h){c.tw&&(o=c.
tw*l),c.w*l<o&&(o=c.w*l),i.style.width=Math.floor(o-1.5*n.em)+"px",i.style.display="inline-block"
;var p=(e.root.id||"MathJax-Span-"+e.root.spanID)+"-zoom",v=document.getElementById
(p).firstChild;while(v&&v.style.width!==h)v=v.nextSibling;if(v){var m=v.offsetWidth
;v.style.width="100%",m>o&&(i.style.width=m+100+"px")}}v=i.firstChild.firstChild.
style,c.H!=null&&c.H>c.h&&(v.marginTop=n.Em(c.H-Math.max(c.h,n.FONTDATA.lineH))),
c.D!=null&&c.D>c.d&&(v.marginBottom=n.Em(c.D-Math.max(c.d,n.FONTDATA.lineD))),c.lw<0&&
(v.paddingLeft=n.Em(-c.lw)),c.rw>c.w&&(v.marginRight=n.Em(c.rw-c.w)),i.style.position="absolute"
,h||(s.style.position="absolute");var y=i.offsetWidth,w=i.offsetHeight,E=s.offsetHeight
,S=s.offsetWidth;return i.style.position=s.style.position="",{Y:-u.getBBox(i).h,mW
:S,mH:E,zW:y,zH:w}},initImg:function(e){},initHTML:function(e,t){},initFont:function(
t){var r=n.FONTDATA.FONTS,i=n.config.availableFonts;return i&&i.length&&n.Font.testFont
(r[t])?(r[t].available=!0,r[t].familyFixed&&(r[t].family=r[t].familyFixed,delete 
r[t].familyFixed),null):this.allowWebFonts?(r[t].isWebFont=!0,n.FontFaceBug&&(r[t
].family=t,n.msieFontCSSBug&&(r[t].family+="-Web")),e.Styles({"@font-face":this.Font
.fontFace(t)})):null},Remove:function(e){var t=document.getElementById(e.inputID+"-Frame"
);t&&(e.HTMLCSS.display&&(t=t.parentNode),t.parentNode.removeChild(t)),delete e.HTMLCSS
},getHD:function(e){if(e.bbox&&this.config.noReflows)return{h:e.bbox.h,d:e.bbox.d
};var t=e.style.position;e.style.position="absolute",this.HDimg.style.height="0px"
,e.appendChild(this.HDspan);var n={h:e.offsetHeight};return this.HDimg.style.height=
n.h+"px",n.d=e.offsetHeight-n.h,n.h-=n.d,n.h/=this.em,n.d/=this.em,e.removeChild(
this.HDspan),e.style.position=t,n},getW:function(e){var t,n,r=(e.bbox||{}).w,i=e;
if(e.bbox&&this.config.noReflows&&e.bbox.exactW!==!1)return e.bbox.exactW||(e.style
.paddingLeft&&(r+=this.unEm(e.style.paddingLeft)*(e.scale||1)),e.style.paddingRight&&
(r+=this.unEm(e.style.paddingRight)*(e.scale||1))),r;if(e.bbox&&e.bbox.exactW)return r
;if(e.bbox&&r>=0&&!this.initialSkipBug&&!this.msieItalicWidthBug||this.negativeBBoxes||!
e.firstChild)t=e.offsetWidth,n=e.parentNode.offsetHeight;else if(e.bbox&&r<0&&this
.msieNegativeBBoxBug)t=-e.offsetWidth,n=e.parentNode.offsetHeight;else{var s=e.style
.position;e.style.position="absolute",i=this.startMarker,e.insertBefore(i,e.firstChild
),e.appendChild(this.endMarker),t=this.endMarker.offsetLeft-i.offsetLeft,e.removeChild
(this.endMarker),e.removeChild(i),e.style.position=s}return n!=null&&(e.parentNode
.HH=n/this.em),t/this.em},Measured:function(e,t){var n=e.bbox;if(n.width==null&&n
.w&&!n.isMultiline){var r=this.getW(e);n.rw+=r-n.w,n.w=r,n.exactW=!0}return t||(t=
e.parentNode),t.bbox||(t.bbox=n),e},Remeasured:function(e,t){t.bbox=this.Measured
(e,t).bbox},MeasureSpans:function(e){var t=[],n,r,i,s,o,u,a,f;for(r=0,i=e.length;
r<i;r++){n=e[r];if(!n)continue;s=n.bbox,f=this.parentNode(n);if(s.exactW||s.width||
s.w===0||s.isMultiline||this.config.noReflows&&s.exactW!==!1){f.bbox||(f.bbox=s);
continue}this.negativeBBoxes||!n.firstChild||s.w>=0&&!this.initialSkipBug||s.w<0&&
this.msieNegativeBBoxBug?t.push([n]):this.initialSkipBug?(o=this.startMarker.cloneNode
(!0),u=this.endMarker.cloneNode(!0),n.insertBefore(o,n.firstChild),n.appendChild(
u),t.push([n,o,u,n.style.position]),n.style.position="absolute"):(u=this.endMarker
.cloneNode(!0),n.appendChild(u),t.push([n,null,u]))}for(r=0,i=t.length;r<i;r++)n=
t[r][0],s=n.bbox,f=this.parentNode(n),s.w>=0&&!this.initialSkipBug||this.negativeBBoxes||!
n.firstChild?(a=n.offsetWidth,f.HH=f.offsetHeight/this.em):s.w<0&&this.msieNegativeBBoxBug?
(a=-n.offsetWidth,f.HH=f.offsetHeight/this.em):a=t[r][2].offsetLeft-((t[r][1]||{}
).offsetLeft||0),a/=this.em,s.rw+=a-s.w,s.w=a,s.exactW=!0,f.bbox||(f.bbox=s);for(
r=0,i=t.length;r<i;r++)n=t[r],n[1]&&(n[1].parentNode.removeChild(n[1]),n[0].style
.position=n[3]),n[2]&&n[2].parentNode.removeChild(n[2])},Em:function(e){return Math
.abs(e)<6e-4?"0em":e.toFixed(3).replace(/\.?0+$/,"")+"em"},EmRounded:function(e){
return e=(Math.round(e*n.em)+.05)/n.em,Math.abs(e)<6e-4?"0em":e.toFixed(3).replace
(/\.?0+$/,"")+"em"},unEm:function(e){return parseFloat(e)},Px:function(e){e*=this
.em;var t=e<0?"-":"";return t+Math.abs(e).toFixed(1).replace(/\.?0+$/,"")+"px"},unPx
:function(e){return parseFloat(e)/this.em},Percent:function(e){return(100*e).toFixed
(1).replace(/\.?0+$/,"")+"%"},length2em:function(e,t,i){typeof e!="string"&&(e=e.
toString());if(e==="")return"";if(e===r.SIZE.NORMAL)return 1;if(e===r.SIZE.BIG)return 2
;if(e===r.SIZE.SMALL)return.71;if(e==="infinity")return n.BIGDIMEN;var s=this.FONTDATA
.TeX_factor,o=(n.zoomScale||1)/n.em;if(e.match(/mathspace$/))return n.MATHSPACE[e
]*s;var u=e.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
),a=parseFloat(u[1]||"1"),f=u[2];return i==null&&(i=1),t==null&&(t=1),f==="em"?a*
s:f==="ex"?a*n.TeX.x_height*s:f==="%"?a/100*i:f==="px"?a*o:f==="pt"?a/10*s:f==="pc"?
a*1.2*s:f==="in"?a*this.pxPerInch*o:f==="cm"?a*this.pxPerInch*o/2.54:f==="mm"?a*this
.pxPerInch*o/25.4:f==="mu"?a/18*s*t:a*i},thickness2em:function(e,t){var i=n.TeX.rule_thickness
;return e===r.LINETHICKNESS.MEDIUM?i:e===r.LINETHICKNESS.THIN?.67*i:e===r.LINETHICKNESS
.THICK?1.67*i:this.length2em(e,t,i)},getPadding:function(e){var t={top:0,right:0,
bottom:0,left:0},n=!1;for(var r in t)if(t.hasOwnProperty(r)){var i=e.style["padding"+
r.charAt(0).toUpperCase()+r.substr(1)];i&&(t[r]=this.length2em(i),n=!0)}return n?
t:!1},getBorders:function(e){var t={top:0,right:0,bottom:0,left:0},n={},r=!1;for(
var i in t)if(t.hasOwnProperty(i)){var s="border"+i.charAt(0).toUpperCase()+i.substr
(1),o=e.style[s+"Style"];o&&(r=!0,t[i]=this.length2em(e.style[s+"Width"]),n[s]=[e
.style[s+"Width"],e.style[s+"Style"],e.style[s+"Color"]].join(" "))}return t.css=
n,r?t:!1},setBorders:function(e,t){if(t)for(var n in t.css)t.css.hasOwnProperty(n
)&&(e.style[n]=t.css[n])},createStrut:function(e,t,n){var r=this.Element("span",{
isMathJax:!0,style:{display:"inline-block",overflow:"hidden",height:t+"px",width:"1px"
,marginRight:"-1px"}});return n?e.insertBefore(r,e.firstChild):e.appendChild(r),r
},createBlank:function(e,t,n){var r=this.Element("span",{isMathJax:!0,style:{display
:"inline-block",overflow:"hidden",height:"1px",width:this.Em(t)}});return t<0&&(r
.style.marginRight=r.style.width,r.style.width=0),n?e.insertBefore(r,e.firstChild
):e.appendChild(r),r},createShift:function(e,t,n){var r=this.Element("span",{style
:{marginLeft:this.Em(t)},isMathJax:!0});return n?e.insertBefore(r,e.firstChild):e
.appendChild(r),r},createSpace:function(e,t,i,s,o,u){t<-i&&(i=-t);var a=this.Em(t+
i),f=this.Em(-i);this.msieInlineBlockAlignBug&&(f=this.Em(n.getHD(e.parentNode).d-
i));if(e.isBox||u){var l=e.scale==null?1:e.scale;e.bbox={exactW:!0,h:t*l,d:i*l,w:
s*l,rw:s*l,lw:0},e.style.height=a,e.style.verticalAlign=f,e.HH=(t+i)*l}else e=this
.addElement(e,"span",{style:{height:a,verticalAlign:f},isMathJax:!0});return s>=0?
(e.style.width=this.Em(s),e.style.display="inline-block",e.style.overflow="hidden"
):(this.msieNegativeSpaceBug&&(e.style.height=""),e.style.marginLeft=this.Em(s),n
.safariNegativeSpaceBug&&e.parentNode.firstChild==e&&this.createBlank(e,0,!0)),o&&
o!==r.COLOR.TRANSPARENT&&(e.style.backgroundColor=o,e.style.position="relative"),
e},createRule:function(e,t,r,i,s){t<-r&&(r=-t);var o=n.TeX.min_rule_thickness,u=1
;i>0&&i*this.em<o&&(i=o/this.em),t+r>0&&(t+r)*this.em<o&&(u=1/(t+r)*(o/this.em),t*=
u,r*=u),s?s="solid "+s:s="solid",s=this.Em(i)+" "+s;var a=u===1?this.Em(t+r):o+"px"
,f=this.Em(-r),l=this.addElement(e,"span",{style:{borderLeft:s,display:"inline-block"
,overflow:"hidden",width:0,height:a,verticalAlign:f},bbox:{h:t,d:r,w:i,rw:i,lw:0,
exactW:!0},noAdjust:!0,HH:t+r,isMathJax:!0});this.msieRuleBug&&i>0&&(l.style.width=
this.Em(i));if(e.isBox||e.className=="mspace")e.bbox=l.bbox,e.HH=t+r;return l},createFrame
:function(e,t,n,r,i,s){t<-n&&(n=-t);var o=2*i;this.msieFrameSizeBug&&(r<o&&(r=o),
t+n<o&&(t=o-n)),this.msieBorderWidthBug&&(o=0);var u=this.Em(t+n-o),a=this.Em(-n-
i),f=this.Em(r-o),l=this.Em(i)+" "+s,c=this.addElement(e,"span",{style:{border:l,
display:"inline-block",overflow:"hidden",width:f,height:u},bbox:{h:t,d:n,w:r,rw:r
,lw:0,exactW:!0},noAdjust:!0,HH:t+n,isMathJax:!0});return a&&(c.style.verticalAlign=
a),c},parentNode:function(e){var t=e.parentNode;return t.nodeName.toLowerCase()==="a"&&
(t=t.parentNode),t},createStack:function(e,t,n){this.msiePaddingWidthBug&&this.createStrut
(e,0);var r=String(n).match(/%$/),i=!r&&n!=null?n:0;return e=this.addElement(e,"span"
,{noAdjust:!0,HH:0,isMathJax:!0,style:{display:"inline-block",position:"relative"
,width:r?"100%":this.Em(i),height:0}}),t||(e.parentNode.bbox=e.bbox={exactW:!0,h:-
this.BIGDIMEN,d:-this.BIGDIMEN,w:i,lw:this.BIGDIMEN,rw:!r&&n!=null?n:-this.BIGDIMEN
},r&&(e.bbox.width=n)),e},createBox:function(e,t){var n=this.addElement(e,"span",
{style:{position:"absolute"},isBox:!0,isMathJax:!0});return t!=null&&(n.style.width=
t),n},addBox:function(e,t){return t.style.position="absolute",t.isBox=t.isMathJax=!0
,e.appendChild(t)},placeBox:function(e,t,r,i){e.isMathJax=!0;var s=n.parentNode(e
),o=e.bbox,u=s.bbox;this.msiePlaceBoxBug&&this.addText(e,this.NBSP),this.imgSpaceBug&&
this.addText(e,this.imgSpace);var a,f=0;e.HH!=null?a=e.HH:o?a=Math.max(3,o.h+o.d)
:a=e.offsetHeight/this.em,e.noAdjust||(a+=1,a=Math.round(a*this.em)/this.em,this.
msieInlineBlockAlignBug?this.addElement(e,"img",{className:"MathJax_strut",border
:0,src:"about:blank",isMathJax:!0,style:{width:0,height:this.Em(a)}}):(this.addElement
(e,"span",{isMathJax:!0,style:{display:"inline-block",width:0,height:this.Em(a)}}
),n.chromeHeightBug&&(a-=(e.lastChild.offsetHeight-Math.round(a*this.em))/this.em
)));if(o){this.initialSkipBug&&(o.lw<0&&(f=o.lw,n.createBlank(e,-f,!0)),o.rw>o.w&&
n.createBlank(e,o.rw-o.w+.1));if(!this.msieClipRectBug&&!o.noclip&&!i){var l=3/this
.em,c=o.H==null?o.h:o.H,h=o.D==null?o.d:o.D,p=a-c-l,v=a+h+l,m=-1e3,g=1e3;e.style.
clip="rect("+this.Em(p)+" "+this.Em(g)+" "+this.Em(v)+" "+this.Em(m)+")"}}e.style
.top=this.Em(-r-a),e.style.left=this.Em(t+f),o&&u&&(o.H!=null&&(u.H==null||o.H+r>
u.H)&&(u.H=o.H+r),o.D!=null&&(u.D==null||o.D-r>u.D)&&(u.D=o.D-r),o.h+r>u.h&&(u.h=
o.h+r),o.d-r>u.d&&(u.d=o.d-r),u.H!=null&&u.H<=u.h&&delete u.H,u.D!=null&&u.D<=u.d&&delete 
u.D,o.w+t>u.w&&(u.w=o.w+t,u.width==null&&(s.style.width=this.Em(u.w))),o.rw+t>u.rw&&
(u.rw=o.rw+t),o.lw+t<u.lw&&(u.lw=o.lw+t),o.width!=null&&!o.isFixed&&(u.width==null&&
(s.style.width=u.width="100%",o.minWidth&&(s.style.minWidth=u.minWidth=o.minWidth
)),e.style.width=o.width),o.tw&&(u.tw=o.tw))},alignBox:function(e,n,r,i){i==null&&
(i=0),this.placeBox(e,i,r);if(this.msiePlaceBoxBug){var s=e.lastChild;while(s&&s.
nodeName!=="#text")s=s.previousSibling;s&&e.removeChild(s)}var o=e.bbox;if(o.isMultiline
)return;var u=o.width!=null&&!o.isFixed,a=0,f=i-o.w/2,l="50%";this.initialSkipBug&&
(a=o.w-o.rw-.1,f+=o.lw),this.msieMarginScaleBug?f=f*this.em+"px":f=this.Em(f),u&&
(f=i===0?"":this.Em(i),l=50-parseFloat(o.width)/2+"%"),t.Insert(e.style,{right:{left
:"",right:this.Em(a-i)},center:{left:l,marginLeft:f}}[n])},setStackWidth:function(
e,t){if(typeof t=="number"){e.style.width=this.Em(Math.max(0,t));var n=e.bbox;n&&
(n.w=t,n.exactW=!0),n=e.parentNode.bbox,n&&(n.w=t,n.exactW=!0)}else e.style.width=
e.parentNode.style.width="100%",e.bbox&&(e.bbox.width=t),e.parentNode.bbox&&(e.parentNode
.bbox.width=t)},createDelimiter:function(n,i,s,o,u){if(!i){n.bbox={h:0,d:0,w:this
.TeX.nulldelimiterspace,lw:0},n.bbox.rw=n.bbox.w,this.createSpace(n,n.bbox.h,n.bbox
.d,n.bbox.w);return}o||(o=1),s instanceof Array||(s=[s,s]);var a=s[1];s=s[0];var f=
{alias:i};while(f.alias)i=f.alias,f=this.FONTDATA.DELIMITERS[i],f||(f={HW:[0,this
.FONTDATA.VARIANT[r.VARIANT.NORMAL]]});f.load&&t.RestartAfter(e.Require(this.fontDir+"/fontdata-"+
f.load+".js"));for(var l=0,c=f.HW.length;l<c;l++)if(f.HW[l][0]*o>=s-.01||l==c-1&&!
f.stretch){f.HW[l][2]&&(o*=f.HW[l][2]),f.HW[l][3]&&(i=f.HW[l][3]);var p=this.addElement
(n,"span");this.createChar(p,[i,f.HW[l][1]],o,u),n.bbox=p.bbox,n.offset=.65*n.bbox
.w,n.scale=o;return}f.stretch&&this["extendDelimiter"+f.dir](n,a,f.stretch,o,u)},
extendDelimiterV:function(e,t,n,r,i){var s=this.createStack(e,!0),o=this.createBox
(s),u=this.createBox(s);this.createChar(o,n.top||n.ext,r,i),this.createChar(u,n.bot||
n.ext,r,i);var a={bbox:{w:0,lw:0,rw:0}},f=a,l,c=o.bbox.h+o.bbox.d+u.bbox.h+u.bbox
.d,h=-o.bbox.h;this.placeBox(o,0,h,!0),h-=o.bbox.d,n.mid&&(f=this.createBox(s),this
.createChar(f,n.mid,r,i),c+=f.bbox.h+f.bbox.d),n.min&&t<c*n.min&&(t=c*n.min);if(t>
c){a=this.Element("span"),this.createChar(a,n.ext,r,i);var p=a.bbox.h+a.bbox.d,d=
p-.05,v,m,g=n.mid?2:1;m=v=Math.min(Math.ceil((t-c)/(g*d)),this.maxStretchyParts),
n.fullExtenders||(d=(t-c)/(g*v));var y=v/(v+1)*(p-d);d=p-y,h+=y+d-a.bbox.h;while(
g-->0){while(v-->0)this.msieCloneNodeBug?(l=this.Element("span"),this.createChar(
l,n.ext,r,i)):l=a.cloneNode(!0),l.bbox=a.bbox,h-=d,this.placeBox(this.addBox(s,l)
,0,h,!0);h+=y-a.bbox.d,n.mid&&g&&(this.placeBox(f,0,h-f.bbox.h,!0),v=m,h+=-(f.bbox
.h+f.bbox.d)+y+d-a.bbox.h)}}else h+=(c-t)/2,n.mid&&(this.placeBox(f,0,h-f.bbox.h,!0
),h+=-(f.bbox.h+f.bbox.d)),h+=(c-t)/2;this.placeBox(u,0,h-u.bbox.h,!0),h-=u.bbox.
h+u.bbox.d,e.bbox={w:Math.max(o.bbox.w,a.bbox.w,u.bbox.w,f.bbox.w),lw:Math.min(o.
bbox.lw,a.bbox.lw,u.bbox.lw,f.bbox.lw),rw:Math.max(o.bbox.rw,a.bbox.rw,u.bbox.rw,
f.bbox.rw),h:0,d:-h,exactW:!0},e.scale=r,e.offset=.55*e.bbox.w,e.isMultiChar=!0,this
.setStackWidth(s,e.bbox.w)},extendDelimiterH:function(e,t,n,r,i){var s=this.createStack
(e,!0),o=this.createBox(s),u=this.createBox(s);this.createChar(o,n.left||n.rep,r,
i),this.createChar(u,n.right||n.rep,r,i);var a=this.Element("span");this.createChar
(a,n.rep,r,i);var f={bbox:{h:-this.BIGDIMEN,d:-this.BIGDIMEN}},l;this.placeBox(o,-
o.bbox.lw,0,!0);var c=o.bbox.rw-o.bbox.lw+(u.bbox.rw-u.bbox.lw)-.05,h=o.bbox.rw-o
.bbox.lw-.025,p;n.mid&&(f=this.createBox(s),this.createChar(f,n.mid,r,i),c+=f.bbox
.w),n.min&&t<c*n.min&&(t=c*n.min);if(t>c){var d=a.bbox.rw-a.bbox.lw,v=d-.05,m,g,y=
n.mid?2:1;g=m=Math.min(Math.ceil((t-c)/(y*v)),this.maxStretchyParts),n.fillExtenders||
(v=(t-c)/(y*m)),p=m/(m+1)*(d-v),v=d-p,h-=a.bbox.lw+p;while(y-->0){while(m-->0)this
.cloneNodeBug?(l=this.Element("span"),this.createChar(l,n.rep,r,i)):l=a.cloneNode
(!0),l.bbox=a.bbox,this.placeBox(this.addBox(s,l),h,0,!0),h+=v;n.mid&&y&&(this.placeBox
(f,h,0,!0),h+=f.bbox.w-p,m=g)}}else h-=(c-t)/2,n.mid&&(this.placeBox(f,h,0,!0),h+=
f.bbox.w),h-=(c-t)/2;this.placeBox(u,h,0,!0),e.bbox={w:h+u.bbox.rw,lw:0,rw:h+u.bbox
.rw,H:Math.max(o.bbox.h,a.bbox.h,u.bbox.h,f.bbox.h),D:Math.max(o.bbox.d,a.bbox.d,
u.bbox.d,f.bbox.d),h:a.bbox.h,d:a.bbox.d,exactW:!0},e.scale=r,e.isMultiChar=!0,this
.setStackWidth(s,e.bbox.w)},createChar:function(e,t,n,i){e.isMathJax=!0;var s=e,o=""
,u={fonts:[t[1]],noRemap:!0};i&&i===r.VARIANT.BOLD&&(u.fonts=[t[1]+"-bold",t[1]])
,typeof t[1]!="string"&&(u=t[1]);if(t[0]instanceof Array)for(var a=0,f=t[0].length
;a<f;a++)o+=String.fromCharCode(t[0][a]);else o=String.fromCharCode(t[0]);t[4]&&(
n*=t[4]),n!==1||t[3]?(s=this.addElement(e,"span",{style:{fontSize:this.Percent(n)
},scale:n,isMathJax:!0}),this.handleVariant(s,u,o),e.bbox=s.bbox):this.handleVariant
(e,u,o),t[2]&&(e.style.marginLeft=this.Em(t[2])),t[3]&&(e.firstChild.style.verticalAlign=
this.Em(t[3]),e.bbox.h+=t[3],e.bbox.h<0&&(e.bbox.h=0)),t[5]&&(e.bbox.h+=t[5]),t[6
]&&(e.bbox.d+=t[6]),this.AccentBug&&e.bbox.w===0&&(s.firstChild.nodeValue+=this.NBSP
)},positionDelimiter:function(e,t){t-=e.bbox.h,e.bbox.d-=t,e.bbox.h+=t,t&&(this.safariVerticalAlignBug||
this.konquerorVerticalAlignBug||this.operaVerticalAlignBug&&e.isMultiChar?(e.firstChild
.style.display===""&&e.style.top!==""&&(e=e.firstChild,t-=n.unEm(e.style.top)),e.
style.position="relative",e.style.top=this.Em(-t)):(e.style.verticalAlign=this.Em
(t),n.ffVerticalAlignBug&&(n.createRule(e.parentNode,e.bbox.h,0,0),delete e.parentNode
.bbox)))},handleVariant:function(e,t,n){var i="",s,o,u,a,f=e,l=!!e.style.fontFamily
;if(n.length===0)return;e.bbox||(e.bbox={w:0,h:-this.BIGDIMEN,d:-this.BIGDIMEN,rw
:-this.BIGDIMEN,lw:this.BIGDIMEN}),t||(t=this.FONTDATA.VARIANT[r.VARIANT.NORMAL])
,a=t;for(var c=0,h=n.length;c<h;c++){t=a,s=n.charCodeAt(c),o=n.charAt(c);if(s>=55296&&
s<56319){c++,s=(s-55296<<10)+(n.charCodeAt(c)-56320)+65536;if(this.FONTDATA.RemapPlane1
){var p=this.FONTDATA.RemapPlane1(s,t);s=p.n,t=p.variant}}else{var d,v,m=this.FONTDATA
.RANGES;for(d=0,v=m.length;d<v;d++){if(m[d].name==="alpha"&&t.noLowerCase)continue;
var y=t["offset"+m[d].offset];if(y&&s>=m[d].low&&s<=m[d].high){m[d].remap&&m[d].remap
[s]?s=y+m[d].remap[s]:(s=s-m[d].low+y,m[d].add&&(s+=m[d].add)),t["variant"+m[d].offset
]&&(t=this.FONTDATA.VARIANT[t["variant"+m[d].offset]]);break}}}t.remap&&t.remap[s
]?(s=t.remap[s],t.remap.variant&&(t=this.FONTDATA.VARIANT[t.remap.variant])):this
.FONTDATA.REMAP[s]&&!t.noRemap&&(s=this.FONTDATA.REMAP[s]),s instanceof Array&&(t=
this.FONTDATA.VARIANT[s[1]],s=s[0]);if(typeof s=="string"){n=s+n.substr(c+1),h=n.
length,c=-1;continue}u=this.lookupChar(t,s),o=u[s];if(l||!this.checkFont(u,f.style
)&&!o[5].img){i.length&&(this.addText(f,i),i="");var b=!!f.style.fontFamily||!!e.
style.fontStyle||!!e.style.fontWeight||!u.directory||l;l=!1,f!==e&&(b=!this.checkFont
(u,e.style),f=e),b&&(f=this.addElement(e,"span",{isMathJax:!0,subSpan:!0})),this.
handleFont(f,u,f!==e)}i=this.handleChar(f,u,o,s,i),(o[5]||{}).space||(o[0]/1e3>e.
bbox.h&&(e.bbox.h=o[0]/1e3),o[1]/1e3>e.bbox.d&&(e.bbox.d=o[1]/1e3)),e.bbox.w+o[3]/1e3<
e.bbox.lw&&(e.bbox.lw=e.bbox.w+o[3]/1e3),e.bbox.w+o[4]/1e3>e.bbox.rw&&(e.bbox.rw=
e.bbox.w+o[4]/1e3),e.bbox.w+=o[2]/1e3,(o[5]||{}).isUnknown&&(e.bbox.exactW=!1)}i.
length&&this.addText(f,i),e.scale&&e.scale!==1&&(e.bbox.h*=e.scale,e.bbox.d*=e.scale
,e.bbox.w*=e.scale,e.bbox.lw*=e.scale,e.bbox.rw*=e.scale),n.length==1&&u.skew&&u.
skew[s]&&(e.bbox.skew=u.skew[s])},checkFont:function(e,t){var n=t.fontWeight||"normal"
;return n.match(/^\d+$/)&&(n=parseInt(n)>=600?"bold":"normal"),e.family.replace(/'/g
,"")===t.fontFamily.replace(/'/g,"")&&(e.style||"normal")===(t.fontStyle||"normal"
)&&(e.weight||"normal")===n},handleFont:function(e,t,r){e.style.fontFamily=t.family
,t.directory||(e.style.fontSize=Math.floor(n.config.scale/n.scale+.5)+"%");if(!n.
FontFaceBug||!t.isWebFont){var i=t.style||"normal",s=t.weight||"normal";if(i!=="normal"||
r)e.style.fontStyle=i;if(s!=="normal"||r)e.style.fontWeight=s}},handleChar:function(
e,t,r,i,s){var o=r[5];if(o.space)return s.length&&this.addText(e,s),n.createShift
(e,r[2]/1e3),"";if(o.img)return this.handleImg(e,t,r,i,s);if(o.isUnknown&&this.FONTDATA
.DELIMITERS[i]){s.length&&this.addText(e,s);var u=e.scale;return n.createDelimiter
(e,i,0,1,t),this.FONTDATA.DELIMITERS[i].dir==="V"&&(e.style.verticalAlign=this.Em
(e.bbox.d),e.bbox.h+=e.bbox.d,e.bbox.d=0),e.scale=u,r[0]=e.bbox.h*1e3,r[1]=e.bbox
.d*1e3,r[2]=e.bbox.w*1e3,r[3]=e.bbox.lw*1e3,r[4]=e.bbox.rw*1e3,""}if(o.c==null)if(
i<=65535)o.c=String.fromCharCode(i);else{var a=i-65536;o.c=String.fromCharCode((a>>10
)+55296)+String.fromCharCode((a&1023)+56320)}return o.rfix?(this.addText(e,s+o.c)
,n.createShift(e,o.rfix/1e3),""):r[2]||!this.msieAccentBug||s.length?s+o.c:(n.createShift
(e,r[3]/1e3),n.createShift(e,(r[4]-r[3])/1e3),this.addText(e,o.c),n.createShift(e
,-r[4]/1e3),"")},handleImg:function(e,t,n,r,i){return i},lookupChar:function(e,t)
{var r,i;if(!e.FONTS){var s=this.FONTDATA.FONTS,o=e.fonts||this.FONTDATA.VARIANT.
normal.fonts;o instanceof Array||(o=[o]),e.fonts!=o&&(e.fonts=o),e.FONTS=[];for(r=0
,i=o.length;r<i;r++)s[o[r]]&&(e.FONTS.push(s[o[r]]),s[o[r]].name=o[r])}for(r=0,i=
e.FONTS.length;r<i;r++){var u=e.FONTS[r];typeof u=="string"&&(delete e.FONTS,this
.loadFont(u));if(u[t]){u[t].length===5&&(u[t][5]={});if(!n.allowWebFonts||!!u.available
)return u;this.loadWebFont(u)}else this.findBlock(u,t)}return this.unknownChar(e,
t)},unknownChar:function(e,r){var i=e.defaultFont||{family:n.config.undefinedFamily
};return e.bold&&(i.weight="bold"),e.italic&&(i.style="italic"),i[r]||(i[r]=[800,200
,500,0,500,{isUnknown:!0}]),t.signal.Post(["HTML-CSS Jax - unknown char",r,e]),i}
,findBlock:function(e,t){if(e.Ranges)for(var n=0,r=e.Ranges.length;n<r;n++){if(t<
e.Ranges[n][0])return;if(t<=e.Ranges[n][1]){var i=e.Ranges[n][2];for(var s=e.Ranges
.length-1;s>=0;s--)e.Ranges[s][2]==i&&e.Ranges.splice(s,1);this.loadFont(e.directory+"/"+
i+".js")}}},loadFont:function(r){var i=MathJax.Callback.Queue();i.Push(["Require"
,e,this.fontDir+"/"+r]),this.imgFonts&&(MathJax.isPacked||(r=r.replace(/\/([^\/]*)$/
,n.imgPacked+"/$1")),i.Push(["Require",e,this.webfontDir+"/png/"+r])),t.RestartAfter
(i.Push({}))},loadWebFont:function(e){e.available=e.isWebFont=!0,n.FontFaceBug&&(
e.family=e.name,n.msieFontCSSBug&&(e.family+="-Web")),t.RestartAfter(this.Font.loadWebFont
(e))},loadWebFontError:function(n,r){t.Startup.signal.Post("HTML-CSS Jax - disable web fonts"
),n.isWebFont=!1,this.config.imageFont&&this.config.imageFont===this.fontInUse?(this
.imgFonts=!0,t.Startup.signal.Post("HTML-CSS Jax - switch to image fonts"),t.Startup
.signal.Post("HTML-CSS Jax - using image fonts"),s(["WebFontNotAvailable","Web-Fonts not available -- using image fonts instead"
],null,3e3),e.Require(this.directory+"/imageFonts.js",r)):(this.allowWebFonts=!1,
r())},Element:MathJax.HTML.Element,addElement:MathJax.HTML.addElement,TextNode:MathJax
.HTML.TextNode,addText:MathJax.HTML.addText,ucMatch:MathJax.HTML.ucMatch,BIGDIMEN
:1e7,ID:0,idPostfix:"",GetID:function(){return this.ID++,this.ID},MATHSPACE:{veryverythinmathspace
:1/18,verythinmathspace:2/18,thinmathspace:3/18,mediummathspace:4/18,thickmathspace
:5/18,verythickmathspace:6/18,veryverythickmathspace:7/18,negativeveryverythinmathspace
:-1/18,negativeverythinmathspace:-2/18,negativethinmathspace:-3/18,negativemediummathspace
:-4/18,negativethickmathspace:-5/18,negativeverythickmathspace:-6/18,negativeveryverythickmathspace
:-7/18},TeX:{x_height:.430554,quad:1,num1:.676508,num2:.393732,num3:.44373,denom1
:.685951,denom2:.344841,sup1:.412892,sup2:.362892,sup3:.288888,sub1:.15,sub2:.247217
,sup_drop:.386108,sub_drop:.05,delim1:2.39,delim2:1,axis_height:.25,rule_thickness
:.06,big_op_spacing1:.111111,big_op_spacing2:.166666,big_op_spacing3:.2,big_op_spacing4
:.6,big_op_spacing5:.1,scriptspace:.1,nulldelimiterspace:.12,delimiterfactor:901,
delimitershortfall:.3,min_rule_thickness:1.25},NBSP:" ",rfuzz:0}),MathJax.Hub.Register
.StartupHook("mml Jax Ready",function(){r=MathJax.ElementJax.mml,r.mbase.Augment(
{toHTML:function(e){e=this.HTMLcreateSpan(e),this.type!="mrow"&&(e=this.HTMLhandleSize
(e));for(var t=0,n=this.data.length;t<n;t++)this.data[t]&&this.data[t].toHTML(e);
var r=this.HTMLcomputeBBox(e),i=e.bbox.h,s=e.bbox.d,o=!1,u;for(t=0,n=r.length;t<n
;t++){u=r[t].HTMLspanElement().bbox;if(r[t].forceStretch||u.h!==i||u.d!==s)r[t].HTMLstretchV
(e,i,s),o=!0}return o&&this.HTMLcomputeBBox(e,!0),this.HTMLlineBreaks(e)&&(e=this
.HTMLmultiline(e)),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),this.data.length===1&&
this.data[0]&&(u=this.data[0].HTMLspanElement().bbox,u.skew&&(e.bbox.skew=u.skew)
),e},HTMLlineBreaks:function(){return!1},HTMLmultiline:function(){r.mbase.HTMLautoloadFile
("multiline")},HTMLcomputeBBox:function(e,t,n,r){n==null&&(n=0),r==null&&(r=this.
data.length);var i=e.bbox={exactW:!0},s=[];while(n<r){var o=this.data[n];if(!o)continue;!
t&&o.HTMLcanStretch("Vertical")&&(s.push(o),o=o.CoreMO()||o),this.HTMLcombineBBoxes
(o,i),n++}return this.HTMLcleanBBox(i),s},HTMLcombineBBoxes:function(e,t){t.w==null&&
this.HTMLemptyBBox(t);var r=e.bbox?e:e.HTMLspanElement();if(!r||!r.bbox)return;var i=
r.bbox;i.d>t.d&&(t.d=i.d),i.h>t.h&&(t.h=i.h),i.D!=null&&i.D>t.D&&(t.D=i.D),i.H!=null&&
i.H>t.H&&(t.H=i.H),r.style.paddingLeft&&(t.w+=n.unEm(r.style.paddingLeft)*(r.scale||1
)),t.w+i.lw<t.lw&&(t.lw=t.w+i.lw),t.w+i.rw>t.rw&&(t.rw=t.w+i.rw),t.w+=i.w,r.style
.paddingRight&&(t.w+=n.unEm(r.style.paddingRight)*(r.scale||1)),i.width&&(t.width=
i.width,t.minWidth=i.minWidth),i.tw&&(t.tw=i.tw),i.ic?t.ic=i.ic:delete t.ic,t.exactW&&!
i.exactW&&delete t.exactW},HTMLemptyBBox:function(e){return e.h=e.d=e.H=e.D=e.rw=-
n.BIGDIMEN,e.w=0,e.lw=n.BIGDIMEN,e},HTMLcleanBBox:function(e){e.h===this.BIGDIMEN&&
(e.h=e.d=e.H=e.D=e.w=e.rw=e.lw=0),e.D<=e.d&&delete e.D,e.H<=e.h&&delete e.H},HTMLzeroBBox
:function(){return{h:0,d:0,w:0,lw:0,rw:0}},HTMLcanStretch:function(e){if(this.isEmbellished
()){var t=this.Core();if(t&&t!==this)return t.HTMLcanStretch(e)}return!1},HTMLstretchH
:function(e,t){return this.HTMLspanElement()},HTMLstretchV:function(e,t,n){return this
.HTMLspanElement()},HTMLnotEmpty:function(e){while(e){if(e.type!=="mrow"&&e.type!=="texatom"||
e.data.length>1)return!0;e=e.data[0]}return!1},HTMLmeasureChild:function(e,t){this
.data[e]?n.Measured(this.data[e].toHTML(t),t):t.bbox=this.HTMLzeroBBox()},HTMLboxChild
:function(e,t){return this.data[e]||this.SetData(e,r.mrow()),this.data[e].toHTML(
t)},HTMLcreateSpan:function(e){if(this.spanID){var t=this.HTMLspanElement();if(t&&
(t.parentNode===e||(t.parentNode||{}).parentNode===e)){while(t.firstChild)t.removeChild
(t.firstChild);return t.bbox=this.HTMLzeroBBox(),t.scale=1,t.isMultChar=t.HH=null
,t.style.cssText="",t}}return this.href&&(e=n.addElement(e,"a",{href:this.href,isMathJax
:!0})),e=n.addElement(e,"span",{className:this.type,isMathJax:!0}),n.imgHeightBug&&
(e.style.display="inline-block"),this["class"]&&(e.className+=" "+this["class"]),
this.spanID||(this.spanID=n.GetID()),e.id=(this.id||"MathJax-Span-"+this.spanID)+
n.idPostfix,e.bbox=this.HTMLzeroBBox(),this.styles={},this.style&&(e.style.cssText=
this.style,e.style.fontSize&&(this.mathsize=e.style.fontSize,e.style.fontSize="")
,this.styles={border:n.getBorders(e),padding:n.getPadding(e)},this.styles.border&&
(e.style.border=""),this.styles.padding&&(e.style.padding="")),this.href&&(e.parentNode
.bbox=e.bbox),this.HTMLaddAttributes(e),e},HTMLaddAttributes:function(e){if(this.
attrNames){var n=this.attrNames,i=r.nocopyAttributes,s=t.config.ignoreMMLattributes
,o=this.type==="mstyle"?r.math.prototype.defaults:this.defaults;for(var u=0,a=n.length
;u<a;u++){var f=n[u];(s[f]==0||!i[f]&&!s[f]&&o[f]==null&&typeof e[f]=="undefined"
)&&e.setAttribute(f,this.attr[f])}}},HTMLspanElement:function(){return this.spanID?
document.getElementById((this.id||"MathJax-Span-"+this.spanID)+n.idPostfix):null}
,HTMLhandleVariant:function(e,t,r){n.handleVariant(e,t,r)},HTMLhandleSize:function(
e){return e.scale||(e.scale=this.HTMLgetScale(),e.scale!==1&&(e.style.fontSize=n.
Percent(e.scale))),e},HTMLhandleDir:function(e){var t=this.Get("dir",!0);return t&&
(e.dir=t),e},HTMLhandleColor:function(e){var t=this.getValues("mathcolor","color"
);this.mathbackground&&(t.mathbackground=this.mathbackground),this.background&&(t
.background=this.background),this.style&&e.style.backgroundColor&&(t.mathbackground=
e.style.backgroundColor,e.style.backgroundColor="transparent");var i=(this.styles||
{}).border,s=(this.styles||{}).padding;t.color&&!this.mathcolor&&(t.mathcolor=t.color
),t.background&&!this.mathbackground&&(t.mathbackground=t.background),t.mathcolor&&
(e.style.color=t.mathcolor);if(t.mathbackground&&t.mathbackground!==r.COLOR.TRANSPARENT||
i||s){var o=e.bbox,u=o.exact?0:1/n.em,a=0,f=0,l=e.style.paddingLeft,c=e.style.paddingRight
;this.isToken&&(a=o.lw,f=o.rw-o.w),l!==""&&(a+=n.unEm(l)*(e.scale||1)),c!==""&&(f-=
n.unEm(c)*(e.scale||1));var h=n.PaddingWidthBug||o.keepPadding||o.exactW?0:f-a,p=
Math.max(0,n.getW(e)+h),v=o.h+o.d,m=-o.d,y=0,b=0;p>0&&(p+=2*u,a-=u),v>0&&(v+=2*u,
m-=u),f=-p-a,i&&(f-=i.right,m-=i.bottom,y+=i.left,b+=i.right,o.h+=i.top,o.d+=i.bottom
,o.w+=i.left+i.right,o.lw-=i.left,o.rw+=i.right),s&&(v+=s.top+s.bottom,p+=s.left+
s.right,f-=s.right,m-=s.bottom,y+=s.left,b+=s.right,o.h+=s.top,o.d+=s.bottom,o.w+=
s.left+s.right,o.lw-=s.left,o.rw+=s.right),b&&(e.style.paddingRight=n.Em(b));var w=
n.Element("span",{id:"MathJax-Color-"+this.spanID+n.idPostfix,isMathJax:!0,style:
{display:"inline-block",backgroundColor:t.mathbackground,width:n.Em(p),height:n.Em
(v),verticalAlign:n.Em(m),marginLeft:n.Em(a),marginRight:n.Em(f)}});return n.setBorders
(w,i),o.width&&(w.style.width=o.width,w.style.marginRight="-"+o.width),n.msieInlineBlockAlignBug&&
(w.style.position="relative",w.style.width=w.style.height=0,w.style.verticalAlign=
w.style.marginLeft=w.style.marginRight="",w.style.border=w.style.padding="",i&&n.
msieBorderWidthBug&&(v+=i.top+i.bottom,p+=i.left+i.right),w.style.width=n.Em(y+u)
,n.placeBox(n.addElement(w,"span",{noAdjust:!0,isMathJax:!0,style:{display:"inline-block"
,position:"absolute",overflow:"hidden",background:t.mathbackground||"transparent"
,width:n.Em(p),height:n.Em(v)}}),a,o.h+u),n.setBorders(w.firstChild,i)),e.parentNode
.insertBefore(w,e),n.msieColorPositionBug&&(e.style.position="relative"),w}return null
},HTMLremoveColor:function(){var e=document.getElementById("MathJax-Color-"+this.
spanID+n.idPostfix);e&&e.parentNode.removeChild(e)},HTMLhandleSpace:function(e){if(
this.useMMLspacing){if(this.type!=="mo")return;var t=this.getValues("scriptlevel"
,"lspace","rspace");if(t.scriptlevel<=0||this.hasValue("lspace")||this.hasValue("rspace"
)){var r=this.HTMLgetMu(e);t.lspace=Math.max(0,n.length2em(t.lspace,r)),t.rspace=
Math.max(0,n.length2em(t.rspace,r));var i=this,s=this.Parent();while(s&&s.isEmbellished
()&&s.Core()===i)i=s,s=s.Parent(),e=i.HTMLspanElement();t.lspace&&(e.style.paddingLeft=
n.Em(t.lspace)),t.rspace&&(e.style.paddingRight=n.Em(t.rspace))}}else{var o=this.
texSpacing();o!==""&&(this.HTMLgetScale(),o=n.length2em(o,this.scale)/(e.scale||1
)*this.mscale,e.style.paddingLeft&&(o+=n.unEm(e.style.paddingLeft)),e.style.paddingLeft=
n.Em(o))}},HTMLgetScale:function(){if(this.scale)return this.scale*this.mscale;var e=1
,t=this.getValues("scriptlevel","fontsize");t.mathsize=(this.isToken?this:this.Parent
()).Get("mathsize");if(this.style){var r=this.HTMLspanElement();r.style.fontSize!=""&&
(t.fontsize=r.style.fontSize)}return t.fontsize&&!this.mathsize&&(t.mathsize=t.fontsize
),t.scriptlevel!==0&&(t.scriptlevel>2&&(t.scriptlevel=2),e=Math.pow(this.Get("scriptsizemultiplier"
),t.scriptlevel),t.scriptminsize=n.length2em(this.Get("scriptminsize")),e<t.scriptminsize&&
(e=t.scriptminsize)),this.scale=e,this.mscale=n.length2em(t.mathsize),e*this.mscale
},HTMLgetMu:function(e){var t=1,n=this.getValues("scriptlevel","scriptsizemultiplier"
);return e.scale&&e.scale!==1&&(t=1/e.scale),n.scriptlevel!==0&&(n.scriptlevel>2&&
(n.scriptlevel=2),t=Math.sqrt(Math.pow(n.scriptsizemultiplier,n.scriptlevel))),t}
,HTMLgetVariant:function(){var e=this.getValues("mathvariant","fontfamily","fontweight"
,"fontstyle");e.hasVariant=this.Get("mathvariant",!0),e.hasVariant||(e.family=e.fontfamily
,e.weight=e.fontweight,e.style=e.fontstyle);if(this.style){var t=this.HTMLspanElement
();!e.family&&t.style.fontFamily&&(e.family=t.style.fontFamily),!e.weight&&t.style
.fontWeight&&(e.weight=t.style.fontWeight),!e.style&&t.style.fontStyle&&(e.style=
t.style.fontStyle)}e.weight&&e.weight.match(/^\d+$/)&&(e.weight=parseInt(e.weight
)>600?"bold":"normal");var i=e.mathvariant;return this.variantForm&&(i="-"+n.fontInUse+"-variant"
),e.family&&!e.hasVariant?(!e.weight&&e.mathvariant.match(/bold/)&&(e.weight="bold"
),!e.style&&e.mathvariant.match(/italic/)&&(e.style="italic"),{FONTS:[],fonts:[],
noRemap:!0,defaultFont:{family:e.family,style:e.style,weight:e.weight}}):(e.weight==="bold"?
i={normal:r.VARIANT.BOLD,italic:r.VARIANT.BOLDITALIC,fraktur:r.VARIANT.BOLDFRAKTUR
,script:r.VARIANT.BOLDSCRIPT,"sans-serif":r.VARIANT.BOLDSANSSERIF,"sans-serif-italic"
:r.VARIANT.SANSSERIFBOLDITALIC}[i]||i:e.weight==="normal"&&(i={bold:r.VARIANT.normal
,"bold-italic":r.VARIANT.ITALIC,"bold-fraktur":r.VARIANT.FRAKTUR,"bold-script":r.
VARIANT.SCRIPT,"bold-sans-serif":r.VARIANT.SANSSERIF,"sans-serif-bold-italic":r.VARIANT
.SANSSERIFITALIC}[i]||i),e.style==="italic"?i={normal:r.VARIANT.ITALIC,bold:r.VARIANT
.BOLDITALIC,"sans-serif":r.VARIANT.SANSSERIFITALIC,"bold-sans-serif":r.VARIANT.SANSSERIFBOLDITALIC
}[i]||i:e.style==="normal"&&(i={italic:r.VARIANT.NORMAL,"bold-italic":r.VARIANT.BOLD
,"sans-serif-italic":r.VARIANT.SANSSERIF,"sans-serif-bold-italic":r.VARIANT.BOLDSANSSERIF
}[i]||i),i in n.FONTDATA.VARIANT||(i="normal"),n.FONTDATA.VARIANT[i])}},{HTMLautoload
:function(){var r=n.autoloadDir+"/"+this.type+".js";t.RestartAfter(e.Require(r))}
,HTMLautoloadFile:function(r){var i=n.autoloadDir+"/"+r+".js";t.RestartAfter(e.Require
(i))},HTMLstretchH:function(e,t){return this.HTMLremoveColor(),this.toHTML(e,t)},
HTMLstretchV:function(e,t,n){return this.HTMLremoveColor(),this.toHTML(e,t,n)}}),
r.chars.Augment({toHTML:function(e,t,r,i){var s=this.data.join("").replace(/[\u2061-\u2064]/g
,"");r&&(s=r(s,i));if(t.fontInherit){var o=Math.floor(n.config.scale/n.scale+.5)+"%"
;n.addElement(e,"span",{style:{"font-size":o}},[s]),t.bold&&(e.lastChild.style.fontWeight="bold"
),t.italic&&(e.lastChild.style.fontStyle="italic"),e.bbox=null;var u=n.getHD(e),a=
n.getW(e);e.bbox={h:u.h,d:u.d,w:a,lw:0,rw:a,exactW:!0}}else this.HTMLhandleVariant
(e,t,s)}}),r.entity.Augment({toHTML:function(e,t,r,i){var s=this.toString().replace
(/[\u2061-\u2064]/g,"");r&&(s=r(s,i));if(t.fontInherit){var o=Math.floor(n.config
.scale/n.scale+.5)+"%";n.addElement(e,"span",{style:{"font-size":o}},[s]),t.bold&&
(e.lastChild.style.fontWeight="bold"),t.italic&&(e.lastChild.style.fontStyle="italic"
),delete e.bbox;var u=n.getHD(e),a=n.getW(e);e.bbox={h:u.h,d:u.d,w:a,lw:0,rw:a,exactW
:!0}}else this.HTMLhandleVariant(e,t,s)}}),r.mi.Augment({toHTML:function(e){e=this
.HTMLhandleSize(this.HTMLcreateSpan(e)),e.bbox=null;var t=this.HTMLgetVariant();for(
var r=0,i=this.data.length;r<i;r++)this.data[r]&&this.data[r].toHTML(e,t);e.bbox||
(e.bbox=this.HTMLzeroBBox());var s=this.data.join(""),o=e.bbox;return o.skew&&s.length!==1&&delete 
o.skew,o.rw>o.w&&s.length===1&&!t.noIC&&(o.ic=o.rw-o.w,n.createBlank(e,o.ic/this.
mscale),o.w=o.rw),this.HTMLhandleSpace(e),this.HTMLhandleColor(e),this.HTMLhandleDir
(e),e}}),r.mn.Augment({toHTML:function(e){e=this.HTMLhandleSize(this.HTMLcreateSpan
(e)),e.bbox=null;var t=this.HTMLgetVariant();for(var n=0,r=this.data.length;n<r;n++
)this.data[n]&&this.data[n].toHTML(e,t);return e.bbox||(e.bbox=this.HTMLzeroBBox(
)),this.data.join("").length!==1&&delete e.bbox.skew,this.HTMLhandleSpace(e),this
.HTMLhandleColor(e),this.HTMLhandleDir(e),e}}),r.mo.Augment({toHTML:function(e){e=
this.HTMLhandleSize(this.HTMLcreateSpan(e));if(this.data.length==0)return e;e.bbox=
null;var t=this.data.join(""),i=this.HTMLgetVariant(),s=this.getValues("largeop","displaystyle"
);s.largeop&&(i=n.FONTDATA.VARIANT[s.displaystyle?"-largeOp":"-smallOp"]);var o=this
.CoreParent(),u=o&&o.isa(r.msubsup)&&this!==o.data[o.base],a=u?this.remapChars:null
;if(t.length===1&&o&&o.isa(r.munderover)&&this.CoreText(o.data[o.base]).length===1
){var f=o.data[o.over],l=o.data[o.under];f&&this===f.CoreMO()&&o.Get("accent")?a=
n.FONTDATA.REMAPACCENT:l&&this===l.CoreMO()&&o.Get("accentunder")&&(a=n.FONTDATA.
REMAPACCENTUNDER)}u&&t.match(/['`"\u00B4\u2032-\u2037\u2057]/)&&(i=n.FONTDATA.VARIANT
["-"+n.fontInUse+"-variant"]);for(var c=0,h=this.data.length;c<h;c++)this.data[c]&&
this.data[c].toHTML(e,i,this.remap,a);e.bbox||(e.bbox=this.HTMLzeroBBox()),t.length!==1&&delete 
e.bbox.skew,n.AccentBug&&e.bbox.w===0&&t.length===1&&e.firstChild&&(e.firstChild.
nodeValue+=n.NBSP,n.createSpace(e,0,0,-e.offsetWidth/n.em));if(s.largeop){var p=n
.TeX.axis_height*this.scale*this.mscale,v=(e.bbox.h-e.bbox.d)/2-p;n.safariVerticalAlignBug&&
e.lastChild.nodeName==="IMG"?e.lastChild.style.verticalAlign=n.Em(n.unEm(e.lastChild
.style.verticalAlign||0)/n.em-v/e.scale):n.konquerorVerticalAlignBug&&e.lastChild
.nodeName==="IMG"?(e.style.position="relative",e.lastChild.style.position="relative"
,e.lastChild.style.top=n.Em(v/e.scale)):e.style.verticalAlign=n.Em(-v/e.scale),e.
bbox.h-=v,e.bbox.d+=v,e.bbox.rw>e.bbox.w&&(e.bbox.ic=e.bbox.rw-e.bbox.w,n.createBlank
(e,e.bbox.ic/this.mscale),e.bbox.w=e.bbox.rw)}return this.HTMLhandleSpace(e),this
.HTMLhandleColor(e),this.HTMLhandleDir(e),e},HTMLcanStretch:function(e){if(!this.
Get("stretchy"))return!1;var t=this.data.join("");if(t.length>1)return!1;var i=this
.CoreParent();if(i&&i.isa(r.munderover)&&this.CoreText(i.data[i.base]).length===1
){var s=i.data[i.over],o=i.data[i.under];s&&this===s.CoreMO()&&i.Get("accent")?t=
n.FONTDATA.REMAPACCENT[t]||t:o&&this===o.CoreMO()&&i.Get("accentunder")&&(t=n.FONTDATA
.REMAPACCENTUNDER[t]||t)}t=n.FONTDATA.DELIMITERS[t.charCodeAt(0)];var u=t&&t.dir===
e.substr(0,1);return this.forceStretch=u&&(this.Get("minsize",!0)||this.Get("maxsize"
,!0)),u},HTMLstretchV:function(e,t,r){this.HTMLremoveColor();var i=this.getValues
("symmetric","maxsize","minsize"),s=this.HTMLspanElement(),o=this.HTMLgetMu(s),u,
a=this.HTMLgetScale(),f=n.TeX.axis_height*a;return i.symmetric?u=2*Math.max(t-f,r+
f):u=t+r,i.maxsize=n.length2em(i.maxsize,o,s.bbox.h+s.bbox.d),i.minsize=n.length2em
(i.minsize,o,s.bbox.h+s.bbox.d),u=Math.max(i.minsize,Math.min(i.maxsize,u)),u!=i.
minsize&&(u=[Math.max(u*n.TeX.delimiterfactor/1e3,u-n.TeX.delimitershortfall),u])
,s=this.HTMLcreateSpan(e),n.createDelimiter(s,this.data.join("").charCodeAt(0),u,
a),i.symmetric?u=(s.bbox.h+s.bbox.d)/2+f:u=(s.bbox.h+s.bbox.d)*t/(t+r),n.positionDelimiter
(s,u),this.HTMLhandleSpace(s),this.HTMLhandleColor(s),s},HTMLstretchH:function(e,
t){this.HTMLremoveColor();var i=this.getValues("maxsize","minsize","mathvariant","fontweight"
);(i.fontweight==="bold"||parseInt(i.fontweight)>=600)&&!this.Get("mathvariant",!0
)&&(i.mathvariant=r.VARIANT.BOLD);var s=this.HTMLspanElement(),o=this.HTMLgetMu(s
),u=s.scale;return i.maxsize=n.length2em(i.maxsize,o,s.bbox.w),i.minsize=n.length2em
(i.minsize,o,s.bbox.w),t=Math.max(i.minsize,Math.min(i.maxsize,t)),s=this.HTMLcreateSpan
(e),n.createDelimiter(s,this.data.join("").charCodeAt(0),t,u,i.mathvariant),this.
HTMLhandleSpace(s),this.HTMLhandleColor(s),s}}),r.mtext.Augment({toHTML:function(
e){e=this.HTMLhandleSize(this.HTMLcreateSpan(e));var t=this.HTMLgetVariant();if(n
.config.mtextFontInherit||this.Parent().type==="merror"){var r=this.Get("mathvariant"
);r==="monospace"?e.className+=" MJX-monospace":r.match(/sans-serif/)&&(e.className+=" MJX-sans-serif"
),t={bold:t.bold,italic:t.italic,fontInherit:!0}}for(var i=0,s=this.data.length;i<
s;i++)this.data[i]&&this.data[i].toHTML(e,t);return e.bbox||(e.bbox=this.HTMLzeroBBox
()),this.data.join("").length!==1&&delete e.bbox.skew,this.HTMLhandleSpace(e),this
.HTMLhandleColor(e),this.HTMLhandleDir(e),e}}),r.merror.Augment({toHTML:function(
e){var t=MathJax.HTML.addElement(e,"span",{style:{display:"inline-block"}});e=this
.SUPER(arguments).toHTML.call(this,t);var r=n.getHD(t),i=n.getW(t);return t.bbox=
{h:r.h,d:r.d,w:i,lw:0,rw:i,exactW:!0},t.id=e.id,e.id=null,t}}),r.ms.Augment({toHTML
:r.mbase.HTMLautoload}),r.mglyph.Augment({toHTML:r.mbase.HTMLautoload}),r.mspace.
Augment({toHTML:function(e){e=this.HTMLcreateSpan(e);var t=this.getValues("height"
,"depth","width"),r=this.HTMLgetMu(e);this.HTMLgetScale(),t.mathbackground=this.mathbackground
,this.background&&!this.mathbackground&&(t.mathbackground=this.background);var i=
n.length2em(t.height,r)*this.mscale,s=n.length2em(t.depth,r)*this.mscale,o=n.length2em
(t.width,r)*this.mscale;return n.createSpace(e,i,s,o,t.mathbackground,!0),e}}),r.
mphantom.Augment({toHTML:function(e,t,r){e=this.HTMLcreateSpan(e);if(this.data[0]!=
null){var i=this.data[0].toHTML(e);r!=null?n.Remeasured(this.data[0].HTMLstretchV
(e,t,r),e):t!=null?n.Remeasured(this.data[0].HTMLstretchH(e,t),e):i=n.Measured(i,
e),e.bbox={w:i.bbox.w,h:i.bbox.h,d:i.bbox.d,lw:0,rw:0,exactW:!0};for(var s=0,o=e.
childNodes.length;s<o;s++)e.childNodes[s].style.visibility="hidden"}return this.HTMLhandleSpace
(e),this.HTMLhandleColor(e),e},HTMLstretchH:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase
.HTMLstretchV}),r.mpadded.Augment({toHTML:function(e,t,r){e=this.HTMLcreateSpan(e
);if(this.data[0]!=null){var i=n.createStack(e,!0),s=n.createBox(i),o=this.data[0
].toHTML(s);r!=null?n.Remeasured(this.data[0].HTMLstretchV(s,t,r),s):t!=null?n.Remeasured
(this.data[0].HTMLstretchH(s,t),s):n.Measured(o,s);var u=this.getValues("height","depth"
,"width","lspace","voffset"),a=0,f=0,l=this.HTMLgetMu(e);this.HTMLgetScale(),u.lspace&&
(a=this.HTMLlength2em(s,u.lspace,l)),u.voffset&&(f=this.HTMLlength2em(s,u.voffset
,l)),n.placeBox(s,a,f),a/=this.mscale,f/=this.mscale,e.bbox={h:s.bbox.h,d:s.bbox.
d,w:s.bbox.w,exactW:!0,lw:s.bbox.lw+a,rw:s.bbox.rw+a,H:Math.max(s.bbox.H==null?-n
.BIGDIMEN:s.bbox.H+f,s.bbox.h+f),D:Math.max(s.bbox.D==null?-n.BIGDIMEN:s.bbox.D-f
,s.bbox.d-f)},u.height!==""&&(e.bbox.h=this.HTMLlength2em(s,u.height,l,"h",0)),u.
depth!==""&&(e.bbox.d=this.HTMLlength2em(s,u.depth,l,"d",0)),u.width!==""&&(e.bbox
.w=this.HTMLlength2em(s,u.width,l,"w",0)),e.bbox.H<=e.bbox.h&&delete e.bbox.H,e.bbox
.D<=e.bbox.d&&delete e.bbox.D;var c=/^\s*(\d+(\.\d*)?|\.\d+)\s*(pt|em|ex|mu|px|pc|in|mm|cm)\s*$/
;e.bbox.exact=!!(this.data[0]&&this.data[0].data.length==0||c.exec(u.height)||c.exec
(u.width)||c.exec(u.depth)),n.setStackWidth(i,e.bbox.w)}return this.HTMLhandleSpace
(e),this.HTMLhandleColor(e),e},HTMLlength2em:function(e,t,r,i,s){s==null&&(s=-n.BIGDIMEN
);var o=String(t).match(/width|height|depth/),u=o?e.bbox[o[0].charAt(0)]:i?e.bbox
[i]:0,a=n.length2em(t,r,u/this.mscale)*this.mscale;return i&&String(t).match(/^\s*[-+]/
)?Math.max(s,e.bbox[i]+a):a},HTMLstretchH:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase
.HTMLstretchV}),r.mrow.Augment({HTMLlineBreaks:function(e){return this.parent.linebreakContainer?
n.config.linebreaks.automatic&&e.bbox.w>n.linebreakWidth||this.hasNewline():!1},HTMLstretchH
:function(e,t){this.HTMLremoveColor();var n=this.HTMLspanElement();return this.data
[this.core].HTMLstretchH(n,t),this.HTMLcomputeBBox(n,!0),this.HTMLhandleColor(n),
n},HTMLstretchV:function(e,t,n){this.HTMLremoveColor();var r=this.HTMLspanElement
();return this.data[this.core].HTMLstretchV(r,t,n),this.HTMLcomputeBBox(r,!0),this
.HTMLhandleColor(r),r}}),r.mstyle.Augment({toHTML:function(e,t,n){e=this.HTMLcreateSpan
(e);if(this.data[0]!=null){var r=this.data[0].toHTML(e);n!=null?this.data[0].HTMLstretchV
(e,t,n):t!=null&&this.data[0].HTMLstretchH(e,t),e.bbox=r.bbox}return this.HTMLhandleSpace
(e),this.HTMLhandleColor(e),e},HTMLstretchH:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase
.HTMLstretchV}),r.mfrac.Augment({toHTML:function(e){e=this.HTMLcreateSpan(e);var t=
n.createStack(e),r=n.createBox(t),i=n.createBox(t);n.MeasureSpans([this.HTMLboxChild
(0,r),this.HTMLboxChild(1,i)]);var s=this.getValues("displaystyle","linethickness"
,"numalign","denomalign","bevelled"),o=this.HTMLgetScale(),u=s.displaystyle,a=n.TeX
.axis_height*o;if(s.bevelled){var f=u?.4:.15,l=Math.max(r.bbox.h+r.bbox.d,i.bbox.
h+i.bbox.d)+2*f,c=n.createBox(t);n.createDelimiter(c,47,l),n.placeBox(r,0,(r.bbox
.d-r.bbox.h)/2+a+f),n.placeBox(c,r.bbox.w-f/2,(c.bbox.d-c.bbox.h)/2+a),n.placeBox
(i,r.bbox.w+c.bbox.w-f,(i.bbox.d-i.bbox.h)/2+a-f)}else{var h=Math.max(r.bbox.w,i.
bbox.w),p=n.thickness2em(s.linethickness,this.scale)*this.mscale,v,m,g,y,b=n.TeX.
min_rule_thickness/this.em;u?(g=n.TeX.num1,y=n.TeX.denom1):(g=p===0?n.TeX.num3:n.
TeX.num2,y=n.TeX.denom2),g*=o,y*=o;if(p===0)v=Math.max((u?7:3)*n.TeX.rule_thickness
,2*b),m=g-r.bbox.d-(i.bbox.h-y),m<v&&(g+=(v-m)/2,y+=(v-m)/2);else{v=Math.max((u?2
:0)*b+p,p/2+1.5*b),m=g-r.bbox.d-(a+p/2),m<v&&(g+=v-m),m=a-p/2-(i.bbox.h-y),m<v&&(
y+=v-m);var w=n.createBox(t);n.createRule(w,p,0,h+2*p),n.placeBox(w,0,a-p/2)}n.alignBox
(r,s.numalign,g),n.alignBox(i,s.denomalign,-y)}return this.HTMLhandleSpace(e),this
.HTMLhandleColor(e),e},HTMLcanStretch:function(e){return!1},HTMLhandleSpace:function(
e){if(!this.texWithDelims&&!this.useMMLspacing){var t=n.TeX.nulldelimiterspace*this
.mscale,r=e.childNodes[n.msiePaddingWidthBug?1:0].style;r.marginLeft=r.marginRight=
n.Em(t),e.bbox.w+=2*t,e.bbox.r+=2*t}this.SUPER(arguments).HTMLhandleSpace.call(this
,e)}}),r.msqrt.Augment({toHTML:function(e){e=this.HTMLcreateSpan(e);var t=n.createStack
(e),r=n.createBox(t),i=n.createBox(t),s=n.createBox(t),o=this.HTMLgetScale(),u=n.
TeX.rule_thickness*o,a,f,l,c;this.Get("displaystyle")?a=n.TeX.x_height*o:a=u,f=Math
.max(u+a/4,1.5*n.TeX.min_rule_thickness/this.em);var h=this.HTMLboxChild(0,r);l=h
.bbox.h+h.bbox.d+f+u,n.createDelimiter(s,8730,l,o),n.MeasureSpans([h,s]),c=h.bbox
.w;var p=0;if(s.isMultiChar||n.AdjustSurd&&n.imgFonts)s.bbox.w*=.95;s.bbox.h+s.bbox
.d>l&&(f=(s.bbox.h+s.bbox.d-(l-u))/2);var v=n.FONTDATA.DELIMITERS[n.FONTDATA.RULECHAR
];return!v||c<v.HW[0][0]*o||o<.75?n.createRule(i,0,u,c):n.createDelimiter(i,n.FONTDATA
.RULECHAR,c,o),l=h.bbox.h+f+u,f=l*n.rfuzz,s.isMultiChar&&(f=n.rfuzz),p=this.HTMLaddRoot
(t,s,p,s.bbox.h+s.bbox.d-l,o),n.placeBox(s,p,l-s.bbox.h),n.placeBox(i,p+s.bbox.w,
l-i.bbox.h+f),n.placeBox(r,p+s.bbox.w,0),this.HTMLhandleSpace(e),this.HTMLhandleColor
(e),e},HTMLaddRoot:function(e,t,n,r,i){return n}}),r.mroot.Augment({toHTML:r.msqrt
.prototype.toHTML,HTMLaddRoot:function(e,t,r,i,s){var o=n.createBox(e);if(this.data
[1]){var u=this.data[1].toHTML(o);u.style.paddingRight=u.style.paddingLeft="",n.Measured
(u,o)}else o.bbox=this.HTMLzeroBBox();var a=this.HTMLrootHeight(t.bbox.h+t.bbox.d
,s,o)-i,f=Math.min(o.bbox.w,o.bbox.rw);return r=Math.max(f,t.offset),n.placeBox(o
,r-f,a),r-t.offset},HTMLrootHeight:function(e,t,n){return.45*(e-.9*t)+.6*t+Math.max
(0,n.bbox.d-.075)}}),r.mfenced.Augment({toHTML:function(e){e=this.HTMLcreateSpan(
e),this.data.open&&this.data.open.toHTML(e),this.data[0]!=null&&this.data[0].toHTML
(e);for(var t=1,n=this.data.length;t<n;t++)this.data[t]&&(this.data["sep"+t]&&this
.data["sep"+t].toHTML(e),this.data[t].toHTML(e));this.data.close&&this.data.close
.toHTML(e);var r=this.HTMLcomputeBBox(e),i=e.bbox.h,s=e.bbox.d;for(t=0,n=r.length
;t<n;t++)r[t].HTMLstretchV(e,i,s);return r.length&&this.HTMLcomputeBBox(e,!0),this
.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLcomputeBBox:function(e,t){var n=
e.bbox={},r=[];this.HTMLcheckStretchy(this.data.open,n,r,t),this.HTMLcheckStretchy
(this.data[0],n,r,t);for(var i=1,s=this.data.length;i<s;i++)this.data[i]&&(this.HTMLcheckStretchy
(this.data["sep"+i],n,r,t),this.HTMLcheckStretchy(this.data[i],n,r,t));return this
.HTMLcheckStretchy(this.data.close,n,r,t),this.HTMLcleanBBox(n),r},HTMLcheckStretchy
:function(e,t,n,r){e&&(!r&&e.HTMLcanStretch("Vertical")&&(n.push(e),e=e.CoreMO()||
e),this.HTMLcombineBBoxes(e,t))}}),r.menclose.Augment({toHTML:r.mbase.HTMLautoload
}),r.maction.Augment({toHTML:r.mbase.HTMLautoload}),r.semantics.Augment({toHTML:function(
e,t,n){e=this.HTMLcreateSpan(e);if(this.data[0]!=null){var r=this.data[0].toHTML(
e);n!=null?this.data[0].HTMLstretchV(e,t,n):t!=null&&this.data[0].HTMLstretchH(e,
t),e.bbox=r.bbox}return this.HTMLhandleSpace(e),e},HTMLstretchH:r.mbase.HTMLstretchH
,HTMLstretchV:r.mbase.HTMLstretchV}),r.munderover.Augment({toHTML:function(e,t,i)
{var s=this.getValues("displaystyle","accent","accentunder","align");if(!s.displaystyle&&
this.data[this.base]!=null&&this.data[this.base].CoreMO().Get("movablelimits"))return r
.msubsup.prototype.toHTML.call(this,e);e=this.HTMLcreateSpan(e);var o=this.HTMLgetScale
(),u=n.createStack(e),a=[],f=[],l=[],c,h,p;for(h=0,p=this.data.length;h<p;h++)this
.data[h]!=null&&(c=a[h]=n.createBox(u),f[h]=this.data[h].toHTML(c),h==this.base?(
i!=null?this.data[this.base].HTMLstretchV(c,t,i):t!=null&&this.data[this.base].HTMLstretchH
(c,t),l[h]=i==null&&t!=null?!1:this.data[h].HTMLcanStretch("Horizontal")):(l[h]=this
.data[h].HTMLcanStretch("Horizontal"),f[h].style.paddingLeft=f[h].style.paddingRight=""
));n.MeasureSpans(f);var v=-n.BIGDIMEN,m=v;for(h=0,p=this.data.length;h<p;h++)this
.data[h]&&(a[h].bbox.w>m&&(m=a[h].bbox.w),!l[h]&&m>v&&(v=m));i==null&&t!=null?v=t
:v==-n.BIGDIMEN&&(v=m);for(h=m=0,p=this.data.length;h<p;h++)this.data[h]&&(c=a[h]
,l[h]&&(c.bbox=this.data[h].HTMLstretchH(c,v).bbox,h!==this.base&&(f[h].style.paddingLeft=
f[h].style.paddingRight="")),c.bbox.w>m&&(m=c.bbox.w));var y=n.TeX.rule_thickness*
this.mscale,b=n.FONTDATA.TeX_factor,w=a[this.base]||{bbox:this.HTMLzeroBBox()},E,
S,x,T,N,C,k,L=0;w.bbox.ic&&(L=1.3*w.bbox.ic+.05);for(h=0,p=this.data.length;h<p;h++
)if(this.data[h]!=null){c=a[h],N=n.TeX.big_op_spacing5*o;var A=h!=this.base&&s[this
.ACCENTS[h]];A&&c.bbox.w<=1/n.em+1e-4&&(c.bbox.w=c.bbox.rw-c.bbox.lw,c.bbox.noclip=!0
,c.bbox.lw&&c.insertBefore(n.createSpace(c.parentNode,0,0,-c.bbox.lw),c.firstChild
),n.createBlank(c,0,0,c.bbox.rw+.1)),C={left:0,center:(m-c.bbox.w)/2,right:m-c.bbox
.w}[s.align],E=C,S=0,h==this.over?(A?(k=Math.max(y*o*b,2.5/this.em),N=0,w.bbox.skew&&
(E+=w.bbox.skew,e.bbox.skew=w.bbox.skew,E+c.bbox.w>m&&(e.bbox.skew+=(m-c.bbox.w-E
)/2))):(x=n.TeX.big_op_spacing1*o*b,T=n.TeX.big_op_spacing3*o*b,k=Math.max(x,T-Math
.max(0,c.bbox.d))),k=Math.max(k,1.5/this.em),E+=L/2,S=w.bbox.h+c.bbox.d+k,c.bbox.
h+=N):h==this.under&&(A?(k=3*y*o*b,N=0):(x=n.TeX.big_op_spacing2*o*b,T=n.TeX.big_op_spacing4*
o*b,k=Math.max(x,T-c.bbox.h)),k=Math.max(k,1.5/this.em),E-=L/2,S=-(w.bbox.d+c.bbox
.h+k),c.bbox.d+=N),n.placeBox(c,E,S)}return this.HTMLhandleSpace(e),this.HTMLhandleColor
(e),e},HTMLstretchH:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase.HTMLstretchV}),r.msubsup
.Augment({toHTML:function(e,t,r){e=this.HTMLcreateSpan(e);var i=this.HTMLgetScale
(),s=this.HTMLgetMu(e),o=n.createStack(e),u,a=[],f=n.createBox(o);this.data[this.
base]?(a.push(this.data[this.base].toHTML(f)),r!=null?this.data[this.base].HTMLstretchV
(f,t,r):t!=null&&this.data[this.base].HTMLstretchH(f,t)):f.bbox=this.HTMLzeroBBox
();var l=n.TeX.x_height*i,c=n.TeX.scriptspace*i*.75,h,p;this.HTMLnotEmpty(this.data
[this.sup])&&(h=n.createBox(o),a.push(this.data[this.sup].toHTML(h))),this.HTMLnotEmpty
(this.data[this.sub])&&(p=n.createBox(o),a.push(this.data[this.sub].toHTML(p))),n
.MeasureSpans(a),h&&(h.bbox.w+=c,h.bbox.rw=Math.max(h.bbox.w,h.bbox.rw)),p&&(p.bbox
.w+=c,p.bbox.rw=Math.max(p.bbox.w,p.bbox.rw)),n.placeBox(f,0,0);var v=i;h?v=this.
data[this.sup].HTMLgetScale():p&&(v=this.data[this.sub].HTMLgetScale());var m=n.TeX
.sup_drop*v,g=n.TeX.sub_drop*v,y=f.bbox.h-m,b=f.bbox.d+g,w=0,E;f.bbox.ic&&(f.bbox
.w-=f.bbox.ic,w=1.3*f.bbox.ic+.05),this.data[this.base]&&t==null&&r==null&&(this.
data[this.base].type==="mi"||this.data[this.base].type==="mo")&&this.data[this.base
].data.join("").length===1&&a[0].scale===1&&!this.data[this.base].Get("largeop")&&
(y=b=0);var S=this.getValues("subscriptshift","superscriptshift");S.subscriptshift=
S.subscriptshift===""?0:n.length2em(S.subscriptshift,s),S.superscriptshift=S.superscriptshift===""?0
:n.length2em(S.superscriptshift,s);if(!h)p&&(b=Math.max(b,n.TeX.sub1*i,p.bbox.h-.8*
l,S.subscriptshift),n.placeBox(p,f.bbox.w,-b,p.bbox));else if(!p)u=this.getValues
("displaystyle","texprimestyle"),E=n.TeX[u.displaystyle?"sup1":u.texprimestyle?"sup3"
:"sup2"],y=Math.max(y,E*i,h.bbox.d+.25*l,S.superscriptshift),n.placeBox(h,f.bbox.
w+w,y,h.bbox);else{b=Math.max(b,n.TeX.sub2*i);var x=n.TeX.rule_thickness*i;y-h.bbox
.d-(p.bbox.h-b)<3*x&&(b=3*x-y+h.bbox.d+p.bbox.h,m=.8*l-(y-h.bbox.d),m>0&&(y+=m,b-=
m)),n.placeBox(h,f.bbox.w+w,Math.max(y,S.superscriptshift)),n.placeBox(p,f.bbox.w
,-Math.max(b,S.subscriptshift))}return this.HTMLhandleSpace(e),this.HTMLhandleColor
(e),e},HTMLstretchH:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase.HTMLstretchV}),r.mmultiscripts
.Augment({toHTML:r.mbase.HTMLautoload}),r.mtable.Augment({toHTML:r.mbase.HTMLautoload
}),r["annotation-xml"].Augment({toHTML:r.mbase.HTMLautoload}),r.annotation.Augment
({toHTML:function(e){return this.HTMLcreateSpan(e)}}),r.math.Augment({toHTML:function(
e,i,s){var o,u,a,f;if(!s||s===n.PHASE.I){var l=n.addElement(e,"nobr",{isMathJax:!0
});e=this.HTMLcreateSpan(l);var c=this.Get("alttext");c&&!e.getAttribute("aria-label"
)&&e.setAttribute("aria-label",c),e.getAttribute("role")||e.setAttribute("role","math"
),o=n.createStack(e),u=n.createBox(o),o.style.fontSize=l.parentNode.style.fontSize
,l.parentNode.style.fontSize="",this.data[0]!=null&&(n.msieColorBug&&(this.background&&
(this.data[0].background=this.background,delete this.background),this.mathbackground&&
(this.data[0].mathbackground=this.mathbackground,delete this.mathbackground)),r.mbase
.prototype.displayAlign=t.config.displayAlign,r.mbase.prototype.displayIndent=t.config
.displayIndent,String(t.config.displayIndent).match(/^0($|[a-z%])/i)&&(r.mbase.prototype
.displayIndent="0"),a=this.data[0].toHTML(u),a.bbox.exactW=!0)}else e=e.firstChild
.firstChild,this.href&&(e=e.firstChild),o=e.firstChild,o.style.position!=="relative"&&
(o=o.nextSibling),u=o.firstChild,a=u.firstChild;f=!s||s===n.PHASE.II?n.Measured(a
,u):a;if(!s||s===n.PHASE.III){n.placeBox(u,0,0),e.style.width=n.Em(Math.max(0,Math
.round(f.bbox.w*this.em)+.25)/n.outerEm),e.style.display="inline-block";var h=1/n
.em,p=n.em/n.outerEm;n.em/=p,e.bbox.h*=p,e.bbox.d*=p,e.bbox.w*=p,e.bbox.lw*=p,e.bbox
.rw*=p,e.bbox.H&&(e.bbox.H*=p),e.bbox.D&&(e.bbox.D*=p),f&&f.bbox.width!=null&&(e.
style.minWidth=f.bbox.minWidth||e.style.width,e.style.width=f.bbox.width,u.style.
width=o.style.width="100%");var v=this.HTMLhandleColor(e);f&&n.createRule(e,(f.bbox
.h+h)*p,(f.bbox.d+h)*p,0);if(!this.isMultiline&&this.Get("display")==="block"&&e.
bbox.width==null){var m=this.getValues("indentalignfirst","indentshiftfirst","indentalign"
,"indentshift");m.indentalignfirst!==r.INDENTALIGN.INDENTALIGN&&(m.indentalign=m.
indentalignfirst),m.indentalign===r.INDENTALIGN.AUTO&&(m.indentalign=this.displayAlign
),m.indentshiftfirst!==r.INDENTSHIFT.INDENTSHIFT&&(m.indentshift=m.indentshiftfirst
),m.indentshift==="auto"&&(m.indentshift="0");var y=n.length2em(m.indentshift,1,n
.scale*n.cwidth);if(this.displayIndent!=="0"){var w=n.length2em(this.displayIndent
,1,n.scale*n.cwidth);y+=m.indentalign===r.INDENTALIGN.RIGHT?-w:w}i.style.textAlign=
m.indentalign,y&&(y*=n.em/n.outerEm,t.Insert(e.style,{left:{marginLeft:n.Em(y)},right
:{marginLeft:n.Em(Math.max(0,e.bbox.w+y)),marginRight:n.Em(-y)},center:{marginLeft
:n.Em(y),marginRight:n.Em(-y)}}[m.indentalign]),v&&(v.style.marginLeft=n.Em(parseFloat
(v.style.marginLeft)+y),v.style.marginRight=n.Em(parseFloat(v.style.marginRight)-
y+(m.indentalign==="right"?Math.min(0,e.bbox.w+y)-e.bbox.w:0))))}}return e},HTMLspanElement
:r.mbase.prototype.HTMLspanElement}),r.TeXAtom.Augment({toHTML:function(e,t,i){e=
this.HTMLcreateSpan(e);if(this.data[0]!=null)if(this.texClass===r.TEXCLASS.VCENTER
){var s=n.createStack(e),o=n.createBox(s),u=this.data[0].toHTML(o);i!=null?n.Remeasured
(this.data[0].HTMLstretchV(o,t,i),o):t!=null?n.Remeasured(this.data[0].HTMLstretchH
(o,t),o):n.Measured(u,o);var a=n.TeX.axis_height*this.HTMLgetScale();n.placeBox(o
,0,a-(o.bbox.h+o.bbox.d)/2+o.bbox.d)}else{var f=this.data[0].toHTML(e,t,i);i!=null?
f=this.data[0].HTMLstretchV(o,t,i):t!=null&&(f=this.data[0].HTMLstretchH(o,t)),e.
bbox=f.bbox}return this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLstretchH
:r.mbase.HTMLstretchH,HTMLstretchV:r.mbase.HTMLstretchV}),t.Register.StartupHook("onLoad"
,function(){setTimeout(MathJax.Callback(["loadComplete",n,"jax.js"]),0)})}),t.Register
.StartupHook("End Config",function(){t.Browser.Select({MSIE:function(e){var t=document
.documentMode||0,r=e.versionAtLeast("7.0"),i=e.versionAtLeast("8.0")&&t>7,s=document
.compatMode==="BackCompat";t<9&&(n.config.styles[".MathJax .MathJax_HitBox"]["background-color"
]="white",n.config.styles[".MathJax .MathJax_HitBox"].opacity=0,n.config.styles[".MathJax .MathJax_HitBox"
].filter="alpha(opacity=0)"),n.Augment({PaddingWidthBug:!0,msieAccentBug:!0,msieColorBug
:!0,msieColorPositionBug:!0,msieRelativeWidthBug:s,msieDisappearingBug:t>=8,msieMarginScaleBug
:t<8,msiePaddingWidthBug:!0,msieBorderWidthBug:s,msieFrameSizeBug:t<=8,msieInlineBlockAlignBug
:!i||s,msiePlaceBoxBug:i&&!s,msieClipRectBug:!i,msieNegativeSpaceBug:s,msieRuleBug
:t<7,cloneNodeBug:i&&e.version==="8.0",msieItalicWidthBug:!0,initialSkipBug:t<8,msieNegativeBBoxBug
:t>=8,msieIE6:!r,msieItalicWidthBug:!0,FontFaceBug:t<9,msieFontCSSBug:e.isIE9,allowWebFonts
:t>=9?"woff":"eot"})},Firefox:function(e){var r=!1;if(e.versionAtLeast("3.5")){var i=
String(document.location).replace(/[^\/]*$/,"");if(document.location.protocol!=="file:"||
t.config.root.match(/^https?:\/\//)||(t.config.root+"/").substr(0,i.length)===i)r="otf"
}n.Augment({ffVerticalAlignBug:!e.versionAtLeast("20.0"),AccentBug:!0,allowWebFonts
:r})},Safari:function(e){var r=e.versionAtLeast("3.0"),i=e.versionAtLeast("3.1"),
s=navigator.appVersion.match(/ Safari\/\d/)&&navigator.appVersion.match(/ Version\/\d/
)&&navigator.vendor.match(/Apple/),o=navigator.appVersion.match(/ Android (\d+)\.(\d+)/
),u=i&&e.isMobile&&(navigator.platform.match(/iPad|iPod|iPhone/)&&!e.versionAtLeast
("5.0")||o!=null&&(o[1]<2||o[1]==2&&o[2]<2));n.Augment({config:{styles:{".MathJax img, .MathJax nobr, .MathJax a"
:{"max-width":"5000em","max-height":"5000em"}}},Em:(e.webkit||0)>=538?n.EmRounded
:n.Em,rfuzz:.011,AccentBug:!0,AdjustSurd:!0,negativeBBoxes:!0,safariNegativeSpaceBug
:!0,safariVerticalAlignBug:!i,safariTextNodeBug:!r,forceReflow:!0,FontFaceBug:!0,
allowWebFonts:i&&!u?"otf":!1}),s&&n.Augment({webFontDefault:e.isMobile?"sans-serif"
:"serif"}),e.isPC&&n.Augment({adjustAvailableFonts:n.removeSTIXfonts,checkWebFontsTwice
:!0});if(u){var a=t.config["HTML-CSS"];a?(a.availableFonts=[],a.preferredFont=null
):t.config["HTML-CSS"]={availableFonts:[],preferredFont:null}}},Chrome:function(e
){n.Augment({Em:n.EmRounded,cloneNodeBug:!0,rfuzz:-0.02,AccentBug:!0,AdjustSurd:!0
,FontFaceBug:e.versionAtLeast("32.0"),negativeBBoxes:!0,safariNegativeSpaceBug:!0
,safariWebFontSerif:[""],forceReflow:!0,allowWebFonts:e.versionAtLeast("4.0")?"otf"
:"svg"})},Opera:function(e){e.isMini=navigator.appVersion.match("Opera Mini")!=null
,n.config.styles[".MathJax .merror"]["vertical-align"]=null,n.config.styles[".MathJax span"
]["z-index"]=0,n.Augment({operaHeightBug:!0,operaVerticalAlignBug:!0,operaFontSizeBug
:e.versionAtLeast("10.61"),initialSkipBug:!0,FontFaceBug:!0,PaddingWidthBug:!0,allowWebFonts
:e.versionAtLeast("10.0")&&!e.isMini?"otf":!1,adjustAvailableFonts:n.removeSTIXfonts
})},Konqueror:function(e){n.Augment({konquerorVerticalAlignBug:!0})}})}),MathJax.
Hub.Register.StartupHook("End Cookie",function(){t.config.menuSettings.zoom!=="None"&&
e.Require("[MathJax]/extensions/MathZoom.js")})})(MathJax.Ajax,MathJax.Hub,MathJax
.OutputJax["HTML-CSS"]);