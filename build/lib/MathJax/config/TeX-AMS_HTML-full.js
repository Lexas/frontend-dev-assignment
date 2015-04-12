/*
 *  /MathJax/config/TeX-AMS_HTML-full.js
 *  
 *  Copyright (c) 2010-2015 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Ajax.Preloading("[MathJax]/jax/input/TeX/config.js","[MathJax]/jax/output/HTML-CSS/config.js"
,"[MathJax]/jax/output/CommonHTML/config.js","[MathJax]/extensions/tex2jax.js","[MathJax]/extensions/MathEvents.js"
,"[MathJax]/extensions/MathZoom.js","[MathJax]/extensions/MathMenu.js","[MathJax]/jax/element/mml/jax.js"
,"[MathJax]/extensions/toMathML.js","[MathJax]/extensions/TeX/noErrors.js","[MathJax]/extensions/TeX/noUndefined.js"
,"[MathJax]/jax/input/TeX/jax.js","[MathJax]/extensions/TeX/AMSmath.js","[MathJax]/extensions/TeX/AMSsymbols.js"
,"[MathJax]/jax/output/HTML-CSS/jax.js","[MathJax]/jax/output/HTML-CSS/autoload/mtable.js"
,"[MathJax]/jax/output/CommonHTML/jax.js","[MathJax]/extensions/CHTML-preview.js"
),MathJax.Hub.Config({"v1.0-compatible":!1}),MathJax.InputJax.TeX=MathJax.InputJax
({id:"TeX",version:"2.5.0",directory:MathJax.InputJax.directory+"/TeX",extensionDir
:MathJax.InputJax.extensionDir+"/TeX",config:{TagSide:"right",TagIndent:"0.8em",MultLineWidth
:"85%",equationNumbers:{autoNumber:"none",formatNumber:function(e){return e},formatTag
:function(e){return"("+e+")"},formatID:function(e){return"mjx-eqn-"+String(e).replace
(/[:"'<>&]/g,"")},formatURL:function(e){return"#"+escape(e)},useLabelIds:!0}}}),MathJax
.InputJax.TeX.Register("math/tex"),MathJax.InputJax.TeX.loadComplete("config.js")
,MathJax.OutputJax["HTML-CSS"]=MathJax.OutputJax({id:"HTML-CSS",version:"2.5.1",directory
:MathJax.OutputJax.directory+"/HTML-CSS",extensionDir:MathJax.OutputJax.extensionDir+"/HTML-CSS"
,autoloadDir:MathJax.OutputJax.directory+"/HTML-CSS/autoload",fontDir:MathJax.OutputJax
.directory+"/HTML-CSS/fonts",webfontDir:MathJax.OutputJax.fontDir+"/HTML-CSS",config
:{noReflows:!0,matchFontHeight:!0,scale:100,minScaleAdjust:50,availableFonts:["STIX"
,"TeX"],preferredFont:"TeX",webFont:"TeX",imageFont:"TeX",undefinedFamily:"STIXGeneral,'Arial Unicode MS',serif"
,mtextFontInherit:!1,EqnChunk:MathJax.Hub.Browser.isMobile?10:50,EqnChunkFactor:1.5
,EqnChunkDelay:100,linebreaks:{automatic:!1,width:"container"},styles:{".MathJax_Display"
:{"text-align":"center",margin:"1em 0em"},".MathJax .merror":{"background-color":"#FFFF88"
,color:"#CC0000",border:"1px solid #CC0000",padding:"1px 3px","font-style":"normal"
,"font-size":"90%"},".MathJax .MJX-monospace":{"font-family":"monospace"},".MathJax .MJX-sans-serif"
:{"font-family":"sans-serif"},"#MathJax_Tooltip":{"background-color":"InfoBackground"
,color:"InfoText",border:"1px solid black","box-shadow":"2px 2px 5px #AAAAAA","-webkit-box-shadow"
:"2px 2px 5px #AAAAAA","-moz-box-shadow":"2px 2px 5px #AAAAAA","-khtml-box-shadow"
:"2px 2px 5px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
,padding:"3px 4px","z-index":401}}}}),MathJax.Hub.Browser.isMSIE&&document.documentMode>=9&&delete 
MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter,MathJax.Hub
.config.delayJaxRegistration||MathJax.OutputJax["HTML-CSS"].Register("jax/mml"),MathJax
.Hub.Register.StartupHook("End Config",[function(e,t){var n=e.Insert({minBrowserVersion
:{Firefox:3,Opera:9.52,MSIE:6,Chrome:.3,Safari:2,Konqueror:4},inlineMathDelimiters
:["$","$"],displayMathDelimiters:["$$","$$"],multilineDisplay:!0,minBrowserTranslate
:function(t){var r=e.getJaxFor(t),i=["[Math]"],s,o=document.createElement("span",
{className:"MathJax_Preview"});r.inputJax==="TeX"&&(r.root.Get("displaystyle")?(s=
n.displayMathDelimiters,i=[s[0]+r.originalText+s[1]],n.multilineDisplay&&(i=i[0].
split(/\n/))):(s=n.inlineMathDelimiters,i=[s[0]+r.originalText.replace(/^\s+/,"")
.replace(/\s+$/,"")+s[1]]));for(var u=0,f=i.length;u<f;u++)o.appendChild(document
.createTextNode(i[u])),u<f-1&&o.appendChild(document.createElement("br"));t.parentNode
.insertBefore(o,t)}},e.config["HTML-CSS"]||{});e.Browser.version!=="0.0"&&!e.Browser
.versionAtLeast(n.minBrowserVersion[e.Browser]||0)&&(t.Translate=n.minBrowserTranslate
,e.Config({showProcessingMessages:!1}),MathJax.Message.Set(["MathJaxNotSupported"
,"Your browser does not support MathJax"],null,4e3),e.Startup.signal.Post("MathJax not supported"
))},MathJax.Hub,MathJax.OutputJax["HTML-CSS"]]),MathJax.OutputJax["HTML-CSS"].loadComplete
("config.js"),MathJax.OutputJax.CommonHTML=MathJax.OutputJax({id:"CommonHTML",version
:"2.5.0",directory:MathJax.OutputJax.directory+"/CommonHTML",extensionDir:MathJax
.OutputJax.extensionDir+"/CommonHTML",config:{scale:100,minScaleAdjust:50,mtextFontInherit
:!1,linebreaks:{automatic:!1,width:"container"}}}),MathJax.Hub.config.delayJaxRegistration||
MathJax.OutputJax.CommonHTML.Register("jax/mml"),MathJax.OutputJax.CommonHTML.loadComplete
("config.js"),MathJax.Extension.tex2jax={version:"2.5.0",config:{inlineMath:[["\\("
,"\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],balanceBraces:!0,skipTags:["script"
,"noscript","style","textarea","pre","code","annotation","annotation-xml"],ignoreClass
:"tex2jax_ignore",processClass:"tex2jax_process",processEscapes:!1,processEnvironments
:!0,processRefs:!0,preview:"TeX"},PreProcess:function(e){this.configured||(this.config=
MathJax.Hub.CombineConfig("tex2jax",this.config),this.config.Augment&&MathJax.Hub
.Insert(this,this.config.Augment),typeof this.config.previewTeX!="undefined"&&!this
.config.previewTeX&&(this.config.preview="none"),this.configured=!0),typeof e=="string"&&
(e=document.getElementById(e)),e||(e=document.body),this.createPatterns()&&this.scanElement
(e,e.nextSibling)},createPatterns:function(){var e=[],t=[],n,r,i=this.config;this
.match={};for(n=0,r=i.inlineMath.length;n<r;n++)e.push(this.patternQuote(i.inlineMath
[n][0])),this.match[i.inlineMath[n][0]]={mode:"",end:i.inlineMath[n][1],pattern:this
.endPattern(i.inlineMath[n][1])};for(n=0,r=i.displayMath.length;n<r;n++)e.push(this
.patternQuote(i.displayMath[n][0])),this.match[i.displayMath[n][0]]={mode:"; mode=display"
,end:i.displayMath[n][1],pattern:this.endPattern(i.displayMath[n][1])};e.length&&
t.push(e.sort(this.sortLength).join("|")),i.processEnvironments&&t.push("\\\\begin\\{([^}]*)\\}"
),i.processEscapes&&t.push("\\\\*\\\\\\$"),i.processRefs&&t.push("\\\\(eq)?ref\\{[^}]*\\}"
),this.start=new RegExp(t.join("|"),"g"),this.skipTags=new RegExp("^("+i.skipTags
.join("|")+")$","i");var s=[];return MathJax.Hub.config.preRemoveClass&&s.push(MathJax
.Hub.config.preRemoveClass),i.ignoreClass&&s.push(i.ignoreClass),this.ignoreClass=
s.length?new RegExp("(^| )("+s.join("|")+")( |$)"):/^$/,this.processClass=new RegExp
("(^| )("+i.processClass+")( |$)"),t.length>0},patternQuote:function(e){return e.
replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(e){return new RegExp
(this.patternQuote(e)+"|\\\\.|[{}]","g")},sortLength:function(e,t){return e.length!==
t.length?t.length-e.length:e==t?0:e<t?-1:1},scanElement:function(e,t,n){var r,i,s
,o;while(e&&e!=t)e.nodeName.toLowerCase()==="#text"?n||(e=this.scanText(e)):(r=typeof 
e.className=="undefined"?"":e.className,i=typeof e.tagName=="undefined"?"":e.tagName
,typeof r!="string"&&(r=String(r)),o=this.processClass.exec(r),e.firstChild&&!r.match
(/(^| )MathJax/)&&(o||!this.skipTags.exec(i))&&(s=(n||this.ignoreClass.exec(r))&&!
o,this.scanElement(e.firstChild,t,s))),e&&(e=e.nextSibling)},scanText:function(e)
{if(e.nodeValue.replace(/\s+/,"")=="")return e;var t,n;this.search={start:!0},this
.pattern=this.start;while(e){this.pattern.lastIndex=0;while(e&&e.nodeName.toLowerCase
()==="#text"&&(t=this.pattern.exec(e.nodeValue)))this.search.start?e=this.startMatch
(t,e):e=this.endMatch(t,e);this.search.matched&&(e=this.encloseMath(e));if(e){do n=
e,e=e.nextSibling;while(e&&(e.nodeName.toLowerCase()==="br"||e.nodeName.toLowerCase
()==="#comment"));if(!e||e.nodeName!=="#text")return this.search.close?this.prevEndMatch
():n}}return e},startMatch:function(e,t){var n=this.match[e[0]];if(n!=null)this.search=
{end:n.end,mode:n.mode,pcount:0,open:t,olen:e[0].length,opos:this.pattern.lastIndex-
e[0].length},this.switchPattern(n.pattern);else if(e[0].substr(0,6)==="\\begin")this
.search={end:"\\end{"+e[1]+"}",mode:"; mode=display",pcount:0,open:t,olen:0,opos:
this.pattern.lastIndex-e[0].length,isBeginEnd:!0},this.switchPattern(this.endPattern
(this.search.end));else{if(e[0].substr(0,4)==="\\ref"||e[0].substr(0,6)==="\\eqref"
)return this.search={mode:"",end:"",open:t,pcount:0,olen:0,opos:this.pattern.lastIndex-
e[0].length},this.endMatch([""],t);var r=e[0].substr(0,e[0].length-1),i,s;r.length%2===0?
(s=[r.replace(/\\\\/g,"\\")],i=1):(s=[r.substr(1).replace(/\\\\/g,"\\"),"$"],i=0)
,s=MathJax.HTML.Element("span",null,s);var o=MathJax.HTML.TextNode(t.nodeValue.substr
(0,e.index));t.nodeValue=t.nodeValue.substr(e.index+e[0].length-i),t.parentNode.insertBefore
(s,t),t.parentNode.insertBefore(o,s),this.pattern.lastIndex=i}return t},endMatch:
function(e,t){var n=this.search;if(e[0]==n.end){if(!n.close||n.pcount===0)n.close=
t,n.cpos=this.pattern.lastIndex,n.clen=n.isBeginEnd?0:e[0].length;n.pcount===0&&(
n.matched=!0,t=this.encloseMath(t),this.switchPattern(this.start))}else e[0]==="{"?
n.pcount++:e[0]==="}"&&n.pcount&&n.pcount--;return t},prevEndMatch:function(){this
.search.matched=!0;var e=this.encloseMath(this.search.close);return this.switchPattern
(this.start),e},switchPattern:function(e){e.lastIndex=this.pattern.lastIndex,this
.pattern=e,this.search.start=e===this.start},encloseMath:function(e){var t=this.search
,n=t.close,r,i;t.cpos===n.length?n=n.nextSibling:n=n.splitText(t.cpos),n||(r=n=MathJax
.HTML.addText(t.close.parentNode,"")),t.close=n,i=t.opos?t.open.splitText(t.opos)
:t.open;while(i.nextSibling&&i.nextSibling!==n)i.nextSibling.nodeValue!==null?i.nextSibling
.nodeName==="#comment"?i.nodeValue+=i.nextSibling.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/
,"$1"):i.nodeValue+=i.nextSibling.nodeValue:this.msieNewlineBug?i.nodeValue+=i.nextSibling
.nodeName.toLowerCase()==="br"?"\n":" ":i.nodeValue+=" ",i.parentNode.removeChild
(i.nextSibling);var s=i.nodeValue.substr(t.olen,i.nodeValue.length-t.olen-t.clen)
;return i.parentNode.removeChild(i),this.config.preview!=="none"&&this.createPreview
(t.mode,s),i=this.createMathTag(t.mode,s),this.search={},this.pattern.lastIndex=0
,r&&r.parentNode.removeChild(r),i},insertNode:function(e){var t=this.search;t.close
.parentNode.insertBefore(e,t.close)},createPreview:function(e,t){var n=this.config
.preview;if(n==="none")return;n==="TeX"&&(n=[this.filterPreview(t)]),n&&(n=MathJax
.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},n),this.insertNode
(n))},createMathTag:function(e,t){var n=document.createElement("script");return n
.type="math/tex"+e,MathJax.HTML.setScript(n,t),this.insertNode(n),n},filterPreview
:function(e){return e},msieNewlineBug:MathJax.Hub.Browser.isMSIE&&document.documentMode<9
},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.tex2jax]),MathJax
.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js"),function(e,t,n,r,i,s,o){var u="2.5.0"
,a=MathJax.Extension,f=a.MathEvents={version:u},l=e.config.menuSettings,c={hover:500
,frame:{x:3.5,y:5,bwidth:1,bcolor:"#A6D",hwidth:"15px",hcolor:"#83A"},button:{x:-4
,y:-3,wx:-2,src:n.urlRev(s.imageDir+"/MenuArrow-15.png")},fadeinInc:.2,fadeoutInc
:.05,fadeDelay:50,fadeoutStart:400,fadeoutDelay:15e3,styles:{".MathJax_Hover_Frame"
:{"border-radius":".25em","-webkit-border-radius":".25em","-moz-border-radius":".25em"
,"-khtml-border-radius":".25em","box-shadow":"0px 0px 15px #83A","-webkit-box-shadow"
:"0px 0px 15px #83A","-moz-box-shadow":"0px 0px 15px #83A","-khtml-box-shadow":"0px 0px 15px #83A"
,border:"1px solid #A6D ! important",display:"inline-block",position:"absolute"},".MathJax_Hover_Arrow"
:{position:"absolute",width:"15px",height:"11px",cursor:"pointer"}}},h=f.Event={LEFTBUTTON
:0,RIGHTBUTTON:2,MENUKEY:"altKey",Mousedown:function(e){return h.Handler(e,"Mousedown"
,this)},Mouseup:function(e){return h.Handler(e,"Mouseup",this)},Mousemove:function(
e){return h.Handler(e,"Mousemove",this)},Mouseover:function(e){return h.Handler(e
,"Mouseover",this)},Mouseout:function(e){return h.Handler(e,"Mouseout",this)},Click
:function(e){return h.Handler(e,"Click",this)},DblClick:function(e){return h.Handler
(e,"DblClick",this)},Menu:function(e){return h.Handler(e,"ContextMenu",this)},Handler
:function(e,t,r){if(n.loadingMathMenu)return h.False(e);var i=s[r.jaxID];e||(e=window
.event),e.isContextMenu=t==="ContextMenu";if(i[t])return i[t](e,r);if(a.MathZoom)
return a.MathZoom.HandleEvent(e,t,r)},False:function(e){return e||(e=window.event
),e&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation
(),e.cancelBubble=!0),!1},ContextMenu:function(t,u,a){var c=s[u.jaxID],d=c.getJaxFromMath
(u),v=(c.config.showMathMenu!=null?c:e).config.showMathMenu;if(!v||l.context!=="MathJax"&&!
a)return;f.msieEventBug&&(t=window.event||t),h.ClearSelection(),p.ClearHoverTimer
(),d.hover&&(d.hover.remove&&(clearTimeout(d.hover.remove),delete d.hover.remove)
,d.hover.nofade=!0);var m=MathJax.Menu,y,w;if(m){if(m.loadingDomain)return h.False
(t);y=i.loadDomain("MathMenu");if(!y){m.jax=d;var E=m.menu.Find("Show Math As").menu
;E.items[0].name=d.sourceMenuTitle,E.items[0].format=d.sourceMenuFormat||"MathML"
,E.items[1].name=o[d.inputJax].sourceMenuTitle,E.items[5].disabled=!o[d.inputJax]
.annotationEncoding;var S=E.items[2];S.disabled=!0;var x=S.menu.items;annotationList=
MathJax.Hub.Config.semanticsAnnotations;for(var T=0,N=x.length;T<N;T++){var C=x[T
].name[1];d.root&&d.root.getAnnotation(C)!==null?(S.disabled=!1,x[T].hidden=!1):x
[T].hidden=!0}var L=m.menu.Find("Math Settings","MathPlayer");return L.hidden=d.outputJax!=="NativeMML"||!
e.Browser.hasMathPlayer,m.menu.Post(t)}m.loadingDomain=!0,w=function(){delete m.loadingDomain
}}else{if(n.loadingMathMenu)return h.False(t);n.loadingMathMenu=!0,y=n.Require("[MathJax]/extensions/MathMenu.js"
),w=function(){delete n.loadingMathMenu,MathJax.Menu||(MathJax.Menu={})}}var A={pageX
:t.pageX,pageY:t.pageY,clientX:t.clientX,clientY:t.clientY};return r.Queue(y,w,["ContextMenu"
,h,A,u,a]),h.False(t)},AltContextMenu:function(t,n){var r=s[n.jaxID],i=(r.config.
showMathMenu!=null?r:e).config.showMathMenu;if(i){i=(r.config.showMathMenuMSIE!=null?
r:e).config.showMathMenuMSIE;if(l.context==="MathJax"&&!l.mpContext&&i){if(!f.noContextMenuBug||
t.button!==h.RIGHTBUTTON)return}else if(!t[h.MENUKEY]||t.button!==h.LEFTBUTTON)return;
return r.ContextMenu(t,n,!0)}},ClearSelection:function(){f.safariContextMenuBug&&
setTimeout("window.getSelection().empty()",0),document.selection&&setTimeout("document.selection.empty()"
,0)},getBBox:function(e){e.appendChild(f.topImg);var t=f.topImg.offsetTop,n=e.offsetHeight-
t,r=e.offsetWidth;return e.removeChild(f.topImg),{w:r,h:t,d:n}}},p=f.Hover={Mouseover
:function(t,n){if(l.discoverable||l.zoom==="Hover"){var r=t.fromElement||t.relatedTarget
,i=t.toElement||t.target;if(r&&i&&(r.isMathJax!=i.isMathJax||e.getJaxFor(r)!==e.getJaxFor
(i))){var s=this.getJaxFromMath(n);return s.hover?p.ReHover(s):p.HoverTimer(s,n),
h.False(t)}}},Mouseout:function(t,n){if(l.discoverable||l.zoom==="Hover"){var r=t
.fromElement||t.relatedTarget,i=t.toElement||t.target;if(r&&i&&(r.isMathJax!=i.isMathJax||
e.getJaxFor(r)!==e.getJaxFor(i))){var s=this.getJaxFromMath(n);return s.hover?p.UnHover
(s):p.ClearHoverTimer(),h.False(t)}}},Mousemove:function(e,t){if(l.discoverable||
l.zoom==="Hover"){var n=this.getJaxFromMath(t);if(n.hover)return;if(p.lastX==e.clientX&&
p.lastY==e.clientY)return;return p.lastX=e.clientX,p.lastY=e.clientY,p.HoverTimer
(n,t),h.False(e)}},HoverTimer:function(e,t){this.ClearHoverTimer(),this.hoverTimer=
setTimeout(r(["Hover",this,e,t]),c.hover)},ClearHoverTimer:function(){this.hoverTimer&&
(clearTimeout(this.hoverTimer),delete this.hoverTimer)},Hover:function(n,r){if(a.
MathZoom&&a.MathZoom.Hover({},r))return;var i=s[n.outputJax],o=i.getHoverSpan(n,r
),u=i.getHoverBBox(n,o,r),l=(i.config.showMathMenu!=null?i:e).config.showMathMenu
,h=c.frame.x,p=c.frame.y,d=c.frame.bwidth;f.msieBorderWidthBug&&(d=0),n.hover={opacity
:0,id:n.inputID+"-Hover"};var v=t.Element("span",{id:n.hover.id,isMathJax:!0,style
:{display:"inline-block",width:0,height:0,position:"relative"}},[["span",{className
:"MathJax_Hover_Frame",isMathJax:!0,style:{display:"inline-block",position:"absolute"
,top:this.Px(-u.h-p-d-(u.y||0)),left:this.Px(-h-d+(u.x||0)),width:this.Px(u.w+2*h
),height:this.Px(u.h+u.d+2*p),opacity:0,filter:"alpha(opacity=0)"}}]]),m=t.Element
("span",{isMathJax:!0,id:n.hover.id+"Menu",style:{display:"inline-block","z-index"
:1,width:0,height:0,position:"relative"}},[["img",{className:"MathJax_Hover_Arrow"
,isMathJax:!0,math:r,src:c.button.src,onclick:this.HoverMenu,jax:i.id,style:{left
:this.Px(u.w+h+d+(u.x||0)+c.button.x),top:this.Px(-u.h-p-d-(u.y||0)-c.button.y),opacity
:0,filter:"alpha(opacity=0)"}}]]);u.width&&(v.style.width=m.style.width=u.width,v
.style.marginRight=m.style.marginRight="-"+u.width,v.firstChild.style.width=u.width
,m.firstChild.style.left="",m.firstChild.style.right=this.Px(c.button.wx)),o.parentNode
.insertBefore(v,o),l&&o.parentNode.insertBefore(m,o),o.style&&(o.style.position="relative"
),this.ReHover(n)},ReHover:function(e){e.hover.remove&&clearTimeout(e.hover.remove
),e.hover.remove=setTimeout(r(["UnHover",this,e]),c.fadeoutDelay),this.HoverFadeTimer
(e,c.fadeinInc)},UnHover:function(e){e.hover.nofade||this.HoverFadeTimer(e,-c.fadeoutInc
,c.fadeoutStart)},HoverFade:function(e){delete e.hover.timer,e.hover.opacity=Math
.max(0,Math.min(1,e.hover.opacity+e.hover.inc)),e.hover.opacity=Math.floor(1e3*e.
hover.opacity)/1e3;var t=document.getElementById(e.hover.id),n=document.getElementById
(e.hover.id+"Menu");t.firstChild.style.opacity=e.hover.opacity,t.firstChild.style
.filter="alpha(opacity="+Math.floor(100*e.hover.opacity)+")",n&&(n.firstChild.style
.opacity=e.hover.opacity,n.firstChild.style.filter=t.style.filter);if(e.hover.opacity===1
)return;if(e.hover.opacity>0){this.HoverFadeTimer(e,e.hover.inc);return}t.parentNode
.removeChild(t),n&&n.parentNode.removeChild(n),e.hover.remove&&clearTimeout(e.hover
.remove),delete e.hover},HoverFadeTimer:function(e,t,n){e.hover.inc=t,e.hover.timer||
(e.hover.timer=setTimeout(r(["HoverFade",this,e]),n||c.fadeDelay))},HoverMenu:function(
e){return e||(e=window.event),s[this.jax].ContextMenu(e,this.math,!0)},ClearHover
:function(e){e.hover.remove&&clearTimeout(e.hover.remove),e.hover.timer&&clearTimeout
(e.hover.timer),p.ClearHoverTimer(),delete e.hover},Px:function(e){return Math.abs
(e)<.006?"0px":e.toFixed(2).replace(/\.?0+$/,"")+"px"},getImages:function(){if(l.
discoverable){var e=new Image;e.src=c.button.src}}},d=f.Touch={last:0,delay:500,start
:function(e){var t=(new Date).getTime(),n=t-d.last<d.delay&&d.up;d.last=t,d.up=!1
,n&&(d.timeout=setTimeout(d.menu,d.delay,e,this),e.preventDefault())},end:function(
e){var t=(new Date).getTime();d.up=t-d.last<d.delay;if(d.timeout)return clearTimeout
(d.timeout),delete d.timeout,d.last=0,d.up=!1,e.preventDefault(),h.Handler(e.touches
[0]||e.touch,"DblClick",this)},menu:function(e,t){return delete d.timeout,d.last=0
,d.up=!1,h.Handler(e.touches[0]||e.touch,"ContextMenu",t)}};if(e.Browser.isMobile
){var v=c.styles[".MathJax_Hover_Arrow"];v.width="25px",v.height="18px",c.button.
x=-6}e.Browser.Select({MSIE:function(e){var t=document.documentMode||0,n=e.versionAtLeast
("8.0");f.msieBorderWidthBug=document.compatMode==="BackCompat",f.msieEventBug=e.
isIE9,f.msieAlignBug=!n||t<8,t<9&&(h.LEFTBUTTON=1)},Safari:function(e){f.safariContextMenuBug=!0
},Opera:function(e){f.operaPositionBug=!0},Konqueror:function(e){f.noContextMenuBug=!0
}}),f.topImg=f.msieAlignBug?t.Element("img",{style:{width:0,height:0,position:"relative"
},src:"about:blank"}):t.Element("span",{style:{width:0,height:0,display:"inline-block"
}}),f.operaPositionBug&&(f.topImg.style.border="1px solid"),f.config=c=e.CombineConfig
("MathEvents",c);var m=function(){var e=c.styles[".MathJax_Hover_Frame"];e.border=
c.frame.bwidth+"px solid "+c.frame.bcolor+" ! important",e["box-shadow"]=e["-webkit-box-shadow"
]=e["-moz-box-shadow"]=e["-khtml-box-shadow"]="0px 0px "+c.frame.hwidth+" "+c.frame
.hcolor};r.Queue(e.Register.StartupHook("End Config",{}),[m],["getImages",p],["Styles"
,n,c.styles],["Post",e.Startup.signal,"MathEvents Ready"],["loadComplete",n,"[MathJax]/extensions/MathEvents.js"
])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.Callback,MathJax.Localization,MathJax
.OutputJax,MathJax.InputJax),function(e,t,n,r,i){var s="2.5.0",o=e.CombineConfig("MathZoom"
,{styles:{"#MathJax_Zoom":{position:"absolute","background-color":"#F0F0F0",overflow
:"auto",display:"block","z-index":301,padding:".5em",border:"1px solid black",margin
:0,"font-weight":"normal","font-style":"normal","text-align":"left","text-indent"
:0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing"
:"normal","word-wrap":"normal","white-space":"nowrap","float":"none","box-shadow"
:"5px 5px 15px #AAAAAA","-webkit-box-shadow":"5px 5px 15px #AAAAAA","-moz-box-shadow"
:"5px 5px 15px #AAAAAA","-khtml-box-shadow":"5px 5px 15px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
},"#MathJax_ZoomOverlay":{position:"absolute",left:0,top:0,"z-index":300,display:"inline-block"
,width:"100%",height:"100%",border:0,padding:0,margin:0,"background-color":"white"
,opacity:0,filter:"alpha(opacity=0)"},"#MathJax_ZoomFrame":{position:"relative",display
:"inline-block",height:0,width:0},"#MathJax_ZoomEventTrap":{position:"absolute",left
:0,top:0,"z-index":302,display:"inline-block",border:0,padding:0,margin:0,"background-color"
:"white",opacity:0,filter:"alpha(opacity=0)"}}}),u,a,f;MathJax.Hub.Register.StartupHook
("MathEvents Ready",function(){f=MathJax.Extension.MathEvents.Event,u=MathJax.Extension
.MathEvents.Event.False,a=MathJax.Extension.MathEvents.Hover});var l=MathJax.Extension
.MathZoom={version:s,settings:e.config.menuSettings,scrollSize:18,HandleEvent:function(
e,t,n){return l.settings.CTRL&&!e.ctrlKey?!0:l.settings.ALT&&!e.altKey?!0:l.settings
.CMD&&!e.metaKey?!0:l.settings.Shift&&!e.shiftKey?!0:l[t]?l[t](e,n):!0},Click:function(
e,t){if(this.settings.zoom==="Click")return this.Zoom(e,t)},DblClick:function(e,t
){if(this.settings.zoom==="Double-Click"||this.settings.zoom==="DoubleClick")return this
.Zoom(e,t)},Hover:function(e,t){return this.settings.zoom==="Hover"?(this.Zoom(e,
t),!0):!1},Zoom:function(n,r){this.Remove(),a.ClearHoverTimer(),f.ClearSelection(
);var i=MathJax.OutputJax[r.jaxID],s=i.getJaxFromMath(r);s.hover&&a.UnHover(s);var l=
this.findContainer(r),c=Math.floor(.85*l.clientWidth),h=Math.max(document.body.clientHeight
,document.documentElement.clientHeight);this.getOverflow(l)!=="visible"&&(h=Math.
min(l.clientHeight,h)),h=Math.floor(.85*h);var p=t.Element("span",{id:"MathJax_ZoomFrame"
},[["span",{id:"MathJax_ZoomOverlay",onmousedown:this.Remove}],["span",{id:"MathJax_Zoom"
,onclick:this.Remove,style:{visibility:"hidden",fontSize:this.settings.zscale}},[
["span",{style:{display:"inline-block","white-space":"nowrap"}}]]]]),v=p.lastChild
,m=v.firstChild,y=p.firstChild;r.parentNode.insertBefore(p,r),r.parentNode.insertBefore
(r,p),m.addEventListener&&m.addEventListener("mousedown",this.Remove,!0);var w=v.
offsetWidth||v.clientWidth;c-=w,h-=w,v.style.maxWidth=c+"px",v.style.maxHeight=h+"px"
;if(this.msieTrapEventBug){var E=t.Element("span",{id:"MathJax_ZoomEventTrap",onmousedown
:this.Remove});p.insertBefore(E,v)}if(this.msieZIndexBug){var S=t.addElement(document
.body,"img",{src:"about:blank",id:"MathJax_ZoomTracker",width:0,height:0,style:{width
:0,height:0,position:"relative"}});p.style.position="relative",p.style.zIndex=o.styles
["#MathJax_ZoomOverlay"]["z-index"],p=S}var x=i.Zoom(s,m,r,c,h);return this.msiePositionBug&&
(this.msieSizeBug&&(v.style.height=x.zH+"px",v.style.width=x.zW+"px"),v.offsetHeight>
h&&(v.style.height=h+"px",v.style.width=x.zW+this.scrollSize+"px"),v.offsetWidth>
c&&(v.style.width=c+"px",v.style.height=x.zH+this.scrollSize+"px")),this.operaPositionBug&&
(v.style.width=Math.min(c,x.zW)+"px"),v.offsetWidth>w&&v.offsetWidth-w<c&&v.offsetHeight-
w<h&&(v.style.overflow="visible"),this.Position(v,x),this.msieTrapEventBug&&(E.style
.height=v.clientHeight+"px",E.style.width=v.clientWidth+"px",E.style.left=parseFloat
(v.style.left)+v.clientLeft+"px",E.style.top=parseFloat(v.style.top)+v.clientTop+"px"
),v.style.visibility="",this.settings.zoom==="Hover"&&(y.onmouseover=this.Remove)
,window.addEventListener?addEventListener("resize",this.Resize,!1):window.attachEvent?
attachEvent("onresize",this.Resize):(this.onresize=window.onresize,window.onresize=
this.Resize),e.signal.Post(["math zoomed",s]),u(n)},Position:function(e,t){e.style
.display="none";var n=this.Resize(),r=n.x,i=n.y,s=t.mW;e.style.display="";var o=-
s-Math.floor((e.offsetWidth-s)/2),u=t.Y;e.style.left=Math.max(o,10-r)+"px",e.style
.top=Math.max(u,10-i)+"px",l.msiePositionBug||l.SetWH()},Resize:function(e){l.onresize&&
l.onresize(e);var t=document.getElementById("MathJax_ZoomFrame"),n=document.getElementById
("MathJax_ZoomOverlay"),r=l.getXY(t),i=l.findContainer(t);if(l.getOverflow(i)!=="visible"
){n.scroll_parent=i;var s=l.getXY(i);r.x-=s.x,r.y-=s.y,s=l.getBorder(i),r.x-=s.x,
r.y-=s.y}return n.style.left=-r.x+"px",n.style.top=-r.y+"px",l.msiePositionBug?setTimeout
(l.SetWH,0):l.SetWH(),r},SetWH:function(){var e=document.getElementById("MathJax_ZoomOverlay"
);if(!e)return;e.style.display="none";var t=e.scroll_parent||document.documentElement||
document.body;e.style.width=t.scrollWidth+"px",e.style.height=Math.max(t.clientHeight
,t.scrollHeight)+"px",e.style.display=""},findContainer:function(e){e=e.parentNode
;while(e.parentNode&&e!==document.body&&l.getOverflow(e)==="visible")e=e.parentNode
;return e},getOverflow:window.getComputedStyle?function(e){return getComputedStyle
(e).overflow}:function(e){return(e.currentStyle||{overflow:"visible"}).overflow},
getBorder:function(e){var t={thin:1,medium:2,thick:3},n=window.getComputedStyle?getComputedStyle
(e):e.currentStyle||{borderLeftWidth:0,borderTopWidth:0},r=n.borderLeftWidth,i=n.
borderTopWidth;return t[r]?r=t[r]:r=parseInt(r),t[i]?i=t[i]:i=parseInt(i),{x:r,y:
i}},getXY:function(e){var t=0,n=0,r;r=e;while(r.offsetParent)t+=r.offsetLeft,r=r.
offsetParent;l.operaPositionBug&&(e.style.border="1px solid"),r=e;while(r.offsetParent
)n+=r.offsetTop,r=r.offsetParent;return l.operaPositionBug&&(e.style.border=""),{
x:t,y:n}},Remove:function(n){var r=document.getElementById("MathJax_ZoomFrame");if(
r){var i=MathJax.OutputJax[r.previousSibling.jaxID],s=i.getJaxFromMath(r.previousSibling
);e.signal.Post(["math unzoomed",s]),r.parentNode.removeChild(r),r=document.getElementById
("MathJax_ZoomTracker"),r&&r.parentNode.removeChild(r);if(l.operaRefreshBug){var o=
t.addElement(document.body,"div",{style:{position:"fixed",left:0,top:0,width:"100%"
,height:"100%",backgroundColor:"white",opacity:0},id:"MathJax_OperaDiv"});document
.body.removeChild(o)}window.removeEventListener?removeEventListener("resize",l.Resize
,!1):window.detachEvent?detachEvent("onresize",l.Resize):(window.onresize=l.onresize
,delete l.onresize)}return u(n)}};e.Browser.Select({MSIE:function(e){var t=document
.documentMode||0,n=t>=9;l.msiePositionBug=!n,l.msieSizeBug=e.versionAtLeast("7.0"
)&&(!document.documentMode||t===7||t===8),l.msieZIndexBug=t<=7,l.msieInlineBlockAlignBug=
t<=7,l.msieTrapEventBug=!window.addEventListener,document.compatMode==="BackCompat"&&
(l.scrollSize=52),n&&delete o.styles["#MathJax_Zoom"].filter},Opera:function(e){l
.operaPositionBug=!0,l.operaRefreshBug=!0}}),l.topImg=l.msieInlineBlockAlignBug?t
.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}):
t.Element("span",{style:{width:0,height:0,display:"inline-block"}});if(l.operaPositionBug||
l.msieTopBug)l.topImg.style.border="1px solid";MathJax.Callback.Queue(["StartupHook"
,MathJax.Hub.Register,"Begin Styles",{}],["Styles",n,o.styles],["Post",e.Startup.
signal,"MathZoom Ready"],["loadComplete",n,"[MathJax]/extensions/MathZoom.js"])}(
MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax["HTML-CSS"],MathJax.OutputJax
.NativeMML),function(e,t,n,r,i){var s="2.5.0",o=MathJax.Callback.Signal("menu");MathJax
.Extension.MathMenu={version:s,signal:o};var u=function(e){return MathJax.Localization
._.apply(MathJax.Localization,[["MathMenu",e]].concat([].slice.call(arguments,1))
)},a=e.Browser.isPC,f=e.Browser.isMSIE,l=(document.documentMode||0)>8,c=a?null:"5px"
,h=e.CombineConfig("MathMenu",{delay:150,closeImg:n.urlRev(i.imageDir+"/CloseX-31.png"
),showRenderer:!0,showMathPlayer:!0,showFontMenu:!1,showContext:!1,showDiscoverable
:!1,showLocale:!0,showLocaleURL:!1,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"
],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"
],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no"
,menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",
width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen
.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto"
,"text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD"
,color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style"
:"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing"
:"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float"
:"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius"
:"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow"
:"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow"
:"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width
:"auto",padding:a?"2px":"5px 0px",border:"1px solid #CCCCCC",margin:0,cursor:"default"
,font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height"
:"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space"
:"nowrap","float":"none","z-index":201,"border-radius":c,"-webkit-border-radius":
c,"-moz-border-radius":c,"-khtml-border-radius":c,"box-shadow":"0px 10px 20px #808080"
,"-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080"
,"-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
},".MathJax_MenuItem":{padding:a?"2px 2em":"1px 2em",background:"transparent"},".MathJax_MenuArrow"
:{position:"absolute",right:".5em",color:"#666666","font-family":f?"'Arial unicode MS'"
:null},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL"
:{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em"
,"font-family":f?"'Arial unicode MS'":null},".MathJax_MenuCheck.RTL":{right:".7em"
,left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:a?"1em":".7em"}
,".MathJax_MenuRadioCheck.RTL":{right:a?"1em":".7em",left:"auto"},".MathJax_MenuLabel"
:{padding:a?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em","font-style":"italic"},".MathJax_MenuRule"
:{"border-top":a?"1px solid #CCCCCC":"1px solid #DDDDDD",margin:a?"4px 1px 0px":"4px 3px"
},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color"
:a?"Highlight":"#606872",color:a?"HighlightText":"white"},".MathJax_Menu_Close":{
position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}}),p,d;e
.Register.StartupHook("MathEvents Ready",function(){p=MathJax.Extension.MathEvents
.Event.False,d=MathJax.Extension.MathEvents.Hover});var v=MathJax.Menu=MathJax.Object
.Subclass({version:s,items:[],posted:!1,title:null,margin:5,Init:function(e){this
.items=[].slice.call(arguments,0)},With:function(t){return t&&e.Insert(this,t),this
},Post:function(e,n,r){e||(e=window.event);var i=document.getElementById("MathJax_MenuFrame"
);i||(i=v.Background(this),delete m.lastItem,delete m.lastMenu,delete v.skipUp,o.
Post(["post",v.jax]),v.isRTL=MathJax.Localization.fontDirection()==="rtl");var s=
t.Element("div",{onmouseup:v.Mouseup,ondblclick:p,ondragstart:p,onselectstart:p,oncontextmenu
:p,menuItem:this,className:"MathJax_Menu"});r||MathJax.Localization.setCSS(s);for(
var u=0,f=this.items.length;u<f;u++)this.items[u].Create(s);v.isMobile&&t.addElement
(s,"span",{className:"MathJax_Menu_Close",menu:n,ontouchstart:v.Close,ontouchend:
p,onmousedown:v.Close,onmouseup:p},[["img",{src:h.closeImg,style:{width:"100%",height
:"100%"}}]]),i.appendChild(s),this.posted=!0,s.style.width=s.offsetWidth+2+"px";var l=
e.pageX,c=e.pageY;!l&&!c&&(l=e.clientX+document.body.scrollLeft+document.documentElement
.scrollLeft,c=e.clientY+document.body.scrollTop+document.documentElement.scrollTop
);if(!n)l+s.offsetWidth>document.body.offsetWidth-this.margin&&(l=document.body.offsetWidth-
s.offsetWidth-this.margin),v.isMobile&&(l=Math.max(5,l-Math.floor(s.offsetWidth/2
)),c-=20),v.skipUp=e.isContextMenu;else{var d="left",y=n.offsetWidth;l=v.isMobile?30
:y-2,c=0;while(n&&n!==i)l+=n.offsetLeft,c+=n.offsetTop,n=n.parentNode;!v.isMobile&&
(v.isRTL&&l-y-s.offsetWidth>this.margin||!v.isRTL&&l+s.offsetWidth>document.body.
offsetWidth-this.margin)&&(d="right",l=Math.max(this.margin,l-y-s.offsetWidth+6))
,a||(s.style["borderRadiusTop"+d]=0,s.style["WebkitBorderRadiusTop"+d]=0,s.style["MozBorderRadiusTop"+
d]=0,s.style["KhtmlBorderRadiusTop"+d]=0)}return s.style.left=l+"px",s.style.top=
c+"px",document.selection&&document.selection.empty&&document.selection.empty(),p
(e)},Remove:function(e,t){o.Post(["unpost",v.jax]);var n=document.getElementById("MathJax_MenuFrame"
);return n&&(n.parentNode.removeChild(n),this.msieFixedPositionBug&&detachEvent("onresize"
,v.Resize)),v.jax.hover&&(delete v.jax.hover.nofade,d.UnHover(v.jax)),p(e)},Find:
function(e){return this.FindN(1,e,[].slice.call(arguments,1))},FindId:function(e)
{return this.FindN(0,e,[].slice.call(arguments,1))},FindN:function(e,t,n){for(var r=0
,i=this.items.length;r<i;r++)if(this.items[r].name[e]===t)return n.length?this.items
[r].menu?this.items[r].menu.FindN(e,n[0],n.slice(1)):null:this.items[r];return null
},IndexOf:function(e){return this.IndexOfN(1,e)},IndexOfId:function(e){return this
.IndexOfN(0,e)},IndexOfN:function(e,t){for(var n=0,r=this.items.length;n<r;n++)if(
this.items[n].name[e]===t)return n;return null}},{config:h,div:null,Close:function(
e){return v.Event(e,this.menu||this.parentNode,this.menu?"Touchend":"Remove")},Remove
:function(e){return v.Event(e,this,"Remove")},Mouseover:function(e){return v.Event
(e,this,"Mouseover")},Mouseout:function(e){return v.Event(e,this,"Mouseout")},Mousedown
:function(e){return v.Event(e,this,"Mousedown")},Mouseup:function(e){return v.Event
(e,this,"Mouseup")},Touchstart:function(e){return v.Event(e,this,"Touchstart")},Touchend
:function(e){return v.Event(e,this,"Touchend")},Event:function(e,t,n,r){if(v.skipMouseover&&
n==="Mouseover"&&!r)return p(e);if(v.skipUp){if(n.match(/Mouseup|Touchend/))return delete 
v.skipUp,p(e);(n==="Touchstart"||n==="Mousedown"&&!v.skipMousedown)&&delete v.skipUp
}e||(e=window.event);var i=t.menuItem;return i&&i[n]?i[n](e,t):null},BGSTYLE:{position
:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding
:0,margin:0},Background:function(e){var n=t.addElement(document.body,"div",{style
:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:e,onmousedown
:this.Remove}]]),r=n.firstChild;return v.msieBackgroundBug&&(r.style.backgroundColor="white"
,r.style.filter="alpha(opacity=0)"),v.msieFixedPositionBug?(n.width=n.height=0,this
.Resize(),attachEvent("onresize",this.Resize)):r.style.position="fixed",n},Resize
:function(){setTimeout(v.SetWH,0)},SetWH:function(){var e=document.getElementById
("MathJax_MenuFrame");e&&(e=e.firstChild,e.style.width=e.style.height="1px",e.style
.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px"
)},saveCookie:function(){t.Cookie.Set("menu",this.cookie)},getCookie:function(){this
.cookie=t.Cookie.Get("menu")},getImages:function(){if(v.isMobile){var e=new Image
;e.src=h.closeImg}}}),m=v.ITEM=MathJax.Object.Subclass({name:"",Create:function(e
){if(!this.hidden){var n={onmouseover:v.Mouseover,onmouseout:v.Mouseout,onmouseup
:v.Mouseup,onmousedown:v.Mousedown,ondragstart:p,onselectstart:p,onselectend:p,ontouchstart
:v.Touchstart,ontouchend:v.Touchend,className:"MathJax_MenuItem",menuItem:this};this
.disabled&&(n.className+=" MathJax_MenuDisabled"),t.addElement(e,"div",n,this.Label
(n,e))}},Name:function(){return u(this.name[0],this.name[1])},Mouseover:function(
e,t){this.disabled||this.Activate(t);if(!this.menu||!this.menu.posted){var n=document
.getElementById("MathJax_MenuFrame").childNodes,r=t.parentNode.childNodes;for(var i=0
,s=r.length;i<s;i++){var o=r[i].menuItem;o&&o.menu&&o.menu.posted&&o.Deactivate(r
[i])}s=n.length-1;while(s>=0&&t.parentNode.menuItem!==n[s].menuItem)n[s].menuItem
.posted=!1,n[s].parentNode.removeChild(n[s]),s--;this.Timer&&!v.isMobile&&this.Timer
(e,t)}},Mouseout:function(e,t){(!this.menu||!this.menu.posted)&&this.Deactivate(t
),this.timer&&(clearTimeout(this.timer),delete this.timer)},Mouseup:function(e,t)
{return this.Remove(e,t)},Touchstart:function(e,t){return this.TouchEvent(e,t,"Mousedown"
)},Touchend:function(e,t){return this.TouchEvent(e,t,"Mouseup")},TouchEvent:function(
e,t,n){return this!==m.lastItem&&(m.lastMenu&&v.Event(e,m.lastMenu,"Mouseout"),v.
Event(e,t,"Mouseover",!0),m.lastItem=this,m.lastMenu=t),this.nativeTouch?null:(v.
Event(e,t,n),!1)},Remove:function(e,t){return t=t.parentNode.menuItem,t.Remove(e,
t)},Activate:function(e){this.Deactivate(e),e.className+=" MathJax_MenuActive"},Deactivate
:function(e){e.className=e.className.replace(/ MathJax_MenuActive/,"")},With:function(
t){return t&&e.Insert(this,t),this},isRTL:function(){return v.isRTL},rtlClass:function(
){return this.isRTL()?" RTL":""}});v.ITEM.COMMAND=v.ITEM.Subclass({action:function(
){},Init:function(e,t,n){e instanceof Array||(e=[e,e]),this.name=e,this.action=t,
this.With(n)},Label:function(e,t){return[this.Name()]},Mouseup:function(e,t){return this
.disabled||(this.Remove(e,t),o.Post(["command",this]),this.action.call(this,e)),p
(e)}}),v.ITEM.SUBMENU=v.ITEM.Subclass({menu:null,marker:a&&!e.Browser.isSafari?"▶"
:"▸",markerRTL:a&&!e.Browser.isSafari?"▰":"◂",Init:function(e,t){e instanceof Array||
(e=[e,e]),this.name=e;var n=1;t instanceof v.ITEM||(this.With(t),n++),this.menu=v
.apply(v,[].slice.call(arguments,n))},Label:function(e,t){return this.menu.posted=!1
,[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL
()?this.markerRTL:this.marker]]]},Timer:function(e,t){this.timer&&clearTimeout(this
.timer),e={clientX:e.clientX,clientY:e.clientY},this.timer=setTimeout(r(["Mouseup"
,this,e,t]),h.delay)},Touchend:function(e,t){var n=this.menu.posted,r=this.SUPER(
arguments).Touchend.apply(this,arguments);return n&&(this.Deactivate(t),delete m.
lastItem,delete m.lastMenu),r},Mouseup:function(e,t){if(!this.disabled)if(!this.menu
.posted)this.timer&&(clearTimeout(this.timer),delete this.timer),this.menu.Post(e
,t,this.ltr);else{var n=document.getElementById("MathJax_MenuFrame").childNodes,r=
n.length-1;while(r>=0){var i=n[r];i.menuItem.posted=!1,i.parentNode.removeChild(i
);if(i.menuItem===this.menu)break;r--}}return p(e)}}),v.ITEM.RADIO=v.ITEM.Subclass
({variable:null,marker:a?"●":"✓",Init:function(e,t,n){e instanceof Array||(e=[e,e
]),this.name=e,this.variable=t,this.With(n),this.value==null&&(this.value=this.name
[0])},Label:function(e,t){var n={className:"MathJax_MenuRadioCheck"+this.rtlClass
()};return h.settings[this.variable]!==this.value&&(n={style:{display:"none"}}),[
["span",n,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){if(!this.disabled
){var n=t.parentNode.childNodes;for(var r=0,i=n.length;r<i;r++){var s=n[r].menuItem
;s&&s.variable===this.variable&&(n[r].firstChild.style.display="none")}t.firstChild
.display="",h.settings[this.variable]=this.value,v.cookie[this.variable]=h.settings
[this.variable],v.saveCookie(),o.Post(["radio button",this])}return this.Remove(e
,t),this.action&&!this.disabled&&this.action.call(v,this),p(e)}}),v.ITEM.CHECKBOX=
v.ITEM.Subclass({variable:null,marker:"✓",Init:function(e,t,n){e instanceof Array||
(e=[e,e]),this.name=e,this.variable=t,this.With(n)},Label:function(e,t){var n={className
:"MathJax_MenuCheck"+this.rtlClass()};return h.settings[this.variable]||(n={style
:{display:"none"}}),[["span",n,[this.marker]]," "+this.Name()]},Mouseup:function(
e,t){return this.disabled||(t.firstChild.display=h.settings[this.variable]?"none"
:"",h.settings[this.variable]=!h.settings[this.variable],v.cookie[this.variable]=
h.settings[this.variable],v.saveCookie(),o.Post(["checkbox",this])),this.Remove(e
,t),this.action&&!this.disabled&&this.action.call(v,this),p(e)}}),v.ITEM.LABEL=v.
ITEM.Subclass({Init:function(e,t){e instanceof Array||(e=[e,e]),this.name=e,this.
With(t)},Label:function(e,t){return delete e.onmouseover,delete e.onmouseout,delete 
e.onmousedown,e.className+=" MathJax_MenuLabel",[this.Name()]}}),v.ITEM.RULE=v.ITEM
.Subclass({Label:function(e,t){return delete e.onmouseover,delete e.onmouseout,delete 
e.onmousedown,e.className+=" MathJax_MenuRule",null}}),v.About=function(){var n=i
["HTML-CSS"]||{},r=(n.imgFonts?"image":n.fontInUse?(n.webFonts?"web":"local")+" "+
n.fontInUse:i.SVG?"web SVG":"generic")+" fonts",s=!n.webFonts||n.imgFonts?null:n.
allowWebFonts.replace(/otf/,"woff or otf")+" fonts",o=["MathJax.js v"+MathJax.fileversion
,["br"]];o.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),v.About
.GetJax(o,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]),v.About.GetJax(o,MathJax
.OutputJax,["OutputJax","%1 Output Jax v%2"]),v.About.GetJax(o,MathJax.ElementJax
,["ElementJax","%1 Element Jax v%2"]),o.push(["div",{style:{"border-top":"groove 2px"
,margin:".25em 0"}}]),v.About.GetJax(o,MathJax.Extension,["Extension","%1 Extension v%2"
],!0),o.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center"
,{},[e.Browser+" v"+e.Browser.version+(s?" — "+u(s.replace(/ /g,""),s):"")]]),v.About
.div=v.Background(v.About);var a=t.addElement(v.About.div,"div",{id:"MathJax_About"
},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],u(r.replace
(/ /g,""),"using "+r),["br"],["br"],["span",{style:{display:"inline-block","text-align"
:"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4"
,padding:".4em .6em",border:"1px inset"}},o],["br"],["br"],["a",{href:"http://www.mathjax.org/"
},["www.mathjax.org"]],["img",{src:h.closeImg,style:{width:"21px",height:"21px",position
:"absolute",top:".2em",right:".2em"},onclick:v.About.Remove}]]);MathJax.Localization
.setCSS(a);var f=document.documentElement||{},l=window.innerHeight||f.clientHeight||
f.scrollHeight||0;v.prototype.msieAboutBug?(a.style.width="20em",a.style.position="absolute"
,a.style.left=Math.floor((document.documentElement.scrollWidth-a.offsetWidth)/2)+"px"
,a.style.top=Math.floor((l-a.offsetHeight)/3)+document.body.scrollTop+"px"):(a.style
.marginLeft=Math.floor(-a.offsetWidth/2)+"px",a.style.top=Math.floor((l-a.offsetHeight
)/3)+"px")},v.About.Remove=function(e){v.About.div&&(document.body.removeChild(v.
About.div),delete v.About.div)},v.About.GetJax=function(e,t,n,r){var i=[];for(var s in 
t)t.hasOwnProperty(s)&&t[s]&&(r&&t[s].version||t[s].isa&&t[s].isa(t))&&i.push(u(n
[0],n[1],t[s].id||s,t[s].version));i.sort();for(var o=0,a=i.length;o<a;o++)e.push
(i[o],["br"]);return e},v.Help=function(){n.Require("[MathJax]/extensions/HelpDialog.js"
,function(){MathJax.Extension.Help.Dialog()})},v.ShowSource=function(e){e||(e=window
.event);var t={screenX:e.screenX,screenY:e.screenY};if(!v.jax)return;if(this.format==="MathML"
){var i=MathJax.ElementJax.mml;if(i&&typeof i.mbase.prototype.toMathML!="undefined"
)try{v.ShowSource.Text(v.jax.root.toMathML("",v.jax),e)}catch(s){if(!s.restart)throw s
;r.After([this,v.ShowSource,t],s.restart)}else if(!n.loadingToMathML){n.loadingToMathML=!0
,v.ShowSource.Window(e),r.Queue(n.Require("[MathJax]/extensions/toMathML.js"),function(
){delete n.loadingToMathML,i.mbase.prototype.toMathML||(i.mbase.prototype.toMathML=
function(){})},[this,v.ShowSource,t]);return}}else if(this.format==="Error")v.ShowSource
.Text(v.jax.errorText,e);else if(h.semanticsAnnotations[this.format]){var o=v.jax
.root.getAnnotation(this.format);o.data[0]&&v.ShowSource.Text(o.data[0].toString(
))}else{if(v.jax.originalText==null){alert(u("NoOriginalForm","No original form available"
));return}v.ShowSource.Text(v.jax.originalText,e)}},v.ShowSource.Window=function(
e){if(!v.ShowSource.w){var t=[],n=h.windowSettings;for(var r in n)n.hasOwnProperty
(r)&&t.push(r+"="+n[r]);v.ShowSource.w=window.open("","_blank",t.join(","))}return v
.ShowSource.w},v.ShowSource.Text=function(e,t){var n=v.ShowSource.Window(t);delete 
v.ShowSource.w,e=e.replace(/^\s*/,"").replace(/\s*$/,""),e=e.replace(/&/g,"&amp;"
).replace(/</g,"&lt;").replace(/>/g,"&gt;");var r=u("EqSource","MathJax Equation Source"
);if(v.isMobile)n.document.open(),n.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+
r+"</title></head><body style='font-size:85%'>"),n.document.write("<pre>"+e+"</pre>"
),n.document.write("<hr><input type='button' value='"+u("Close","Close")+"' onclick='window.close()' />"
),n.document.write("</body></html>"),n.document.close();else{n.document.open(),n.
document.write("<html><head><title>"+r+"</title></head><body style='font-size:85%'>"
),n.document.write("<table><tr><td><pre>"+e+"</pre></td></tr></table>"),n.document
.write("</body></html>"),n.document.close();var i=n.document.body.firstChild;setTimeout
(function(){var e=n.outerHeight-n.innerHeight||30,r=n.outerWidth-n.innerWidth||30
,s,o;r=Math.max(100,Math.min(Math.floor(.5*screen.width),i.offsetWidth+r+25)),e=Math
.max(40,Math.min(Math.floor(.5*screen.height),i.offsetHeight+e+25)),v.prototype.msieHeightBug&&
(e+=35),n.resizeTo(r,e);var u;try{u=t.screenX}catch(a){}t&&u!=null&&(s=Math.max(0
,Math.min(t.screenX-Math.floor(r/2),screen.width-r-20)),o=Math.max(0,Math.min(t.screenY-
Math.floor(e/2),screen.height-e-20)),n.moveTo(s,o))},50)}},v.Scale=function(){var t=
i["HTML-CSS"],n=i.NativeMML,r=i.SVG,s=(t||n||r||{config:{scale:100}}).config.scale
,o=prompt(u("ScaleMath","Scale all mathematics (compared to surrounding text) by"
),s+"%");o&&(o.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)?(o=parseFloat(o),o?o!==s&&(t&&(t
.config.scale=o),n&&(n.config.scale=o),r&&(r.config.scale=o),v.cookie.scale=o,v.saveCookie
(),e.Rerender()):alert(u("NonZeroScale","The scale should not be zero"))):alert(u
("PercentScale","The scale should be a percentage (e.g., 120%%)")))},v.Zoom=function(
){MathJax.Extension.MathZoom||n.Require("[MathJax]/extensions/MathZoom.js")},v.Renderer=
function(){var n=e.outputJax["jax/mml"];if(n[0]!==h.settings.renderer){var r=e.Browser
,i,s=v.Renderer.Messages,o;switch(h.settings.renderer){case"NativeMML":h.settings
.warnedMML||(r.isChrome&&r.version.substr(0,3)!=="24."?i=s.MML.WebKit:r.isSafari&&!
r.versionAtLeast("5.0")?i=s.MML.WebKit:r.isMSIE?r.hasMathPlayer||(i=s.MML.MSIE):i=
s.MML[r],o="warnedMML");break;case"SVG":h.settings.warnedSVG||r.isMSIE&&!l&&(i=s.
SVG.MSIE)}if(i){i=u(i[0],i[1]),i+="\n\n",i+=u("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"
),v.cookie.renderer=n[0].id,v.saveCookie();if(!confirm(i)){v.cookie.renderer=h.settings
.renderer=t.Cookie.Get("menu").renderer,v.saveCookie();return}o&&(v.cookie.warned=
h.settings.warned=!0),v.cookie.renderer=h.settings.renderer,v.saveCookie()}e.Queue
(["setRenderer",e,h.settings.renderer,"jax/mml"],["Rerender",e])}},v.Renderer.Messages=
{MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."
],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."
],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."
],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."
],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."
]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."
]}},v.Font=function(){var e=i["HTML-CSS"];if(!e)return;document.location.reload()
},v.Locale=function(){MathJax.Localization.setLocale(h.settings.locale),MathJax.Hub
.Queue(["Reprocess",MathJax.Hub])},v.LoadLocale=function(){var e=prompt(u("LoadURL"
,"Load translation data from this URL:"));e&&(e.match(/\.js$/)||alert(u("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"
)),n.Require(e,function(t){t!=n.STATUS.OK&&alert(u("BadData","Failed to load translation data from %1"
,e))}))},v.MPEvents=function(e){var t=h.settings.discoverable,n=v.MPEvents.Messages
;if(!l){if(h.settings.mpMouse&&!confirm(u.apply(u,n.IE8warning))){delete v.cookie
.mpContext,delete h.settings.mpContext,delete v.cookie.mpMouse,delete h.settings.
mpMouse,v.saveCookie();return}h.settings.mpContext=h.settings.mpMouse,v.cookie.mpContext=
v.cookie.mpMouse=h.settings.mpMouse,v.saveCookie(),MathJax.Hub.Queue(["Rerender",
MathJax.Hub])}else!t&&e.name[1]==="Menu Events"&&h.settings.mpContext&&alert(u.apply
(u,n.IE9warning))},v.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"
],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."
]},e.Browser.Select({MSIE:function(e){var t=document.compatMode==="BackCompat",n=
e.versionAtLeast("8.0")&&document.documentMode>7;v.Augment({margin:20,msieBackgroundBug
:(document.documentMode||0)<9,msieFixedPositionBug:t||!n,msieAboutBug:t,msieHeightBug
:(document.documentMode||0)<9}),l&&(delete h.styles["#MathJax_About"].filter,delete 
h.styles[".MathJax_Menu"].filter)},Firefox:function(e){v.skipMouseover=e.isMobile&&
e.versionAtLeast("6.0"),v.skipMousedown=e.isMobile}}),v.isMobile=e.Browser.isMobile
,v.noContextMenu=e.Browser.noContextMenu,v.CreateLocaleMenu=function(){if(!v.menu
)return;var e=v.menu.Find("Language").menu,t=e.items,n=[],r=MathJax.Localization.
strings;for(var i in r)r.hasOwnProperty(i)&&n.push(i);n=n.sort(),e.items=[];for(var s=0
,o=n.length;s<o;s++){var u=r[n[s]].menuTitle;u?u+=" ("+n[s]+")":u=n[s],e.items.push
(m.RADIO([n[s],u],"locale",{action:v.Locale}))}e.items.push(t[t.length-2],t[t.length-1
])},v.CreateAnnotationMenu=function(){if(!v.menu)return;var e=v.menu.Find("Show Math As"
,"Annotation").menu,t=h.semanticsAnnotations;for(var n in t)t.hasOwnProperty(n)&&
e.items.push(m.COMMAND([n,n],v.ShowSource,{hidden:!0,nativeTouch:!0,format:n}))},
e.Register.StartupHook("End Config",function(){h.settings=e.config.menuSettings,typeof 
h.settings.showRenderer!="undefined"&&(h.showRenderer=h.settings.showRenderer),typeof 
h.settings.showFontMenu!="undefined"&&(h.showFontMenu=h.settings.showFontMenu),typeof 
h.settings.showContext!="undefined"&&(h.showContext=h.settings.showContext),v.getCookie
(),v.menu=v(m.SUBMENU(["Show","Show Math As"],m.COMMAND(["MathMLcode","MathML Code"
],v.ShowSource,{nativeTouch:!0,format:"MathML"}),m.COMMAND(["Original","Original Form"
],v.ShowSource,{nativeTouch:!0}),m.SUBMENU(["Annotation","Annotation"],{disabled:!0
}),m.RULE(),m.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),m.CHECKBOX
(["semantics","Add original form as annotation"],"semantics")),m.RULE(),m.SUBMENU
(["Settings","Math Settings"],m.SUBMENU(["ZoomTrigger","Zoom Trigger"],m.RADIO(["Hover"
,"Hover"],"zoom",{action:v.Zoom}),m.RADIO(["Click","Click"],"zoom",{action:v.Zoom
}),m.RADIO(["DoubleClick","Double-Click"],"zoom",{action:v.Zoom}),m.RADIO(["NoZoom"
,"No Zoom"],"zoom",{value:"None"}),m.RULE(),m.LABEL(["TriggerRequires","Trigger Requires:"
]),m.CHECKBOX(e.Browser.isMac?["Option","Option"]:["Alt","Alt"],"ALT"),m.CHECKBOX
(["Command","Command"],"CMD",{hidden:!e.Browser.isMac}),m.CHECKBOX(["Control","Control"
],"CTRL",{hidden:e.Browser.isMac}),m.CHECKBOX(["Shift","Shift"],"Shift")),m.SUBMENU
(["ZoomFactor","Zoom Factor"],m.RADIO("125%","zscale"),m.RADIO("133%","zscale"),m
.RADIO("150%","zscale"),m.RADIO("175%","zscale"),m.RADIO("200%","zscale"),m.RADIO
("250%","zscale"),m.RADIO("300%","zscale"),m.RADIO("400%","zscale")),m.RULE(),m.SUBMENU
(["Renderer","Math Renderer"],{hidden:!h.showRenderer},m.RADIO("HTML-CSS","renderer"
,{action:v.Renderer}),m.RADIO("Fast HTML","renderer",{action:v.Renderer,value:"CommonHTML"
}),m.RADIO("MathML","renderer",{action:v.Renderer,value:"NativeMML"}),m.RADIO("SVG"
,"renderer",{action:v.Renderer}),m.RULE(),m.CHECKBOX("Fast Preview","CHTMLpreview"
)),m.SUBMENU("MathPlayer",{hidden:!e.Browser.isMSIE||!h.showMathPlayer,disabled:!
e.Browser.hasMathPlayer},m.LABEL(["MPHandles","Let MathPlayer Handle:"]),m.CHECKBOX
(["MenuEvents","Menu Events"],"mpContext",{action:v.MPEvents,hidden:!l}),m.CHECKBOX
(["MouseEvents","Mouse Events"],"mpMouse",{action:v.MPEvents,hidden:!l}),m.CHECKBOX
(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:v.MPEvents,hidden:l})
),m.SUBMENU(["FontPrefs","Font Preference"],{hidden:!h.showFontMenu},m.LABEL(["ForHTMLCSS"
,"For HTML-CSS:"]),m.RADIO(["Auto","Auto"],"font",{action:v.Font}),m.RULE(),m.RADIO
(["TeXLocal","TeX (local)"],"font",{action:v.Font}),m.RADIO(["TeXWeb","TeX (web)"
],"font",{action:v.Font}),m.RADIO(["TeXImage","TeX (image)"],"font",{action:v.Font
}),m.RULE(),m.RADIO(["STIXLocal","STIX (local)"],"font",{action:v.Font}),m.RADIO(
["STIXWeb","STIX (web)"],"font",{action:v.Font}),m.RULE(),m.RADIO(["AsanaMathWeb"
,"Asana Math (web)"],"font",{action:v.Font}),m.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"
],"font",{action:v.Font}),m.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action
:v.Font}),m.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:v.Font})
,m.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:v.Font})),m.SUBMENU(["ContextMenu"
,"Contextual Menu"],{hidden:!h.showContext},m.RADIO("MathJax","context"),m.RADIO(
["Browser","Browser"],"context")),m.COMMAND(["Scale","Scale All Math ..."],v.Scale
),m.RULE().With({hidden:!h.showDiscoverable,name:["","discover_rule"]}),m.CHECKBOX
(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!h.showDiscoverable
})),m.SUBMENU(["Locale","Language"],{hidden:!h.showLocale,ltr:!0},m.RADIO("en","locale"
,{action:v.Locale}),m.RULE().With({hidden:!h.showLocaleURL,name:["","localURL_rule"
]}),m.COMMAND(["LoadLocale","Load from URL ..."],v.LoadLocale,{hidden:!h.showLocaleURL
})),m.RULE(),m.COMMAND(["About","About MathJax"],v.About),m.COMMAND(["Help","MathJax Help"
],v.Help)),v.isMobile&&function(){var e=h.settings,t=v.menu.Find("Math Settings","Zoom Trigger"
).menu;t.items[0].disabled=t.items[1].disabled=!0;if(e.zoom==="Hover"||e.zoom=="Click"
)e.zoom="None";t.items=t.items.slice(0,4),navigator.appVersion.match(/[ (]Android[) ]/
)&&v.ITEM.SUBMENU.Augment({marker:"»"})}(),v.CreateLocaleMenu(),v.CreateAnnotationMenu
()}),v.showRenderer=function(e){v.cookie.showRenderer=h.showRenderer=e,v.saveCookie
(),v.menu.Find("Math Settings","Math Renderer").hidden=!e},v.showMathPlayer=function(
e){v.cookie.showMathPlayer=h.showMathPlayer=e,v.saveCookie(),v.menu.Find("Math Settings"
,"MathPlayer").hidden=!e},v.showFontMenu=function(e){v.cookie.showFontMenu=h.showFontMenu=
e,v.saveCookie(),v.menu.Find("Math Settings","Font Preference").hidden=!e},v.showContext=
function(e){v.cookie.showContext=h.showContext=e,v.saveCookie(),v.menu.Find("Math Settings"
,"Contextual Menu").hidden=!e},v.showDiscoverable=function(e){v.cookie.showDiscoverable=
h.showDiscoverable=e,v.saveCookie(),v.menu.Find("Math Settings","Highlight on Hover"
).hidden=!e,v.menu.Find("Math Settings","discover_rule").hidden=!e},v.showLocale=
function(e){v.cookie.showLocale=h.showLocale=e,v.saveCookie(),v.menu.Find("Language"
).hidden=!e},MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){MathJax
.OutputJax["HTML-CSS"].config.imageFont||(v.menu.Find("Math Settings","Font Preference"
,"TeX (image)").disabled=!0)}),r.Queue(e.Register.StartupHook("End Config",{}),["getImages"
,v],["Styles",n,h.styles],["Post",e.Startup.signal,"MathMenu Ready"],["loadComplete"
,n,"[MathJax]/extensions/MathMenu.js"])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax
.CallBack,MathJax.OutputJax),MathJax.ElementJax.mml=MathJax.ElementJax({mimeType:"jax/mml"
},{id:"mml",version:"2.5.1",directory:MathJax.ElementJax.directory+"/mml",extensionDir
:MathJax.ElementJax.extensionDir+"/mml",optableDir:MathJax.ElementJax.directory+"/mml/optable"
}),MathJax.ElementJax.mml.Augment({Init:function(){arguments.length===1&&arguments
[0].type==="math"?this.root=arguments[0]:this.root=MathJax.ElementJax.mml.math.apply
(this,arguments);if(this.root.attr&&this.root.attr.mode){!this.root.display&&this
.root.attr.mode==="display"&&(this.root.display="block",this.root.attrNames.push("display"
)),delete this.root.attr.mode;for(var e=0,t=this.root.attrNames.length;e<t;e++)if(
this.root.attrNames[e]==="mode"){this.root.attrNames.splice(e,1);break}}}},{INHERIT
:"_inherit_",AUTO:"_auto_",SIZE:{INFINITY:"infinity",SMALL:"small",NORMAL:"normal"
,BIG:"big"},COLOR:{TRANSPARENT:"transparent"},VARIANT:{NORMAL:"normal",BOLD:"bold"
,ITALIC:"italic",BOLDITALIC:"bold-italic",DOUBLESTRUCK:"double-struck",FRAKTUR:"fraktur"
,BOLDFRAKTUR:"bold-fraktur",SCRIPT:"script",BOLDSCRIPT:"bold-script",SANSSERIF:"sans-serif"
,BOLDSANSSERIF:"bold-sans-serif",SANSSERIFITALIC:"sans-serif-italic",SANSSERIFBOLDITALIC
:"sans-serif-bold-italic",MONOSPACE:"monospace",INITIAL:"inital",TAILED:"tailed",
LOOPED:"looped",STRETCHED:"stretched",CALIGRAPHIC:"-tex-caligraphic",OLDSTYLE:"-tex-oldstyle"
},FORM:{PREFIX:"prefix",INFIX:"infix",POSTFIX:"postfix"},LINEBREAK:{AUTO:"auto",NEWLINE
:"newline",NOBREAK:"nobreak",GOODBREAK:"goodbreak",BADBREAK:"badbreak"},LINEBREAKSTYLE
:{BEFORE:"before",AFTER:"after",DUPLICATE:"duplicate",INFIXLINBREAKSTYLE:"infixlinebreakstyle"
},INDENTALIGN:{LEFT:"left",CENTER:"center",RIGHT:"right",AUTO:"auto",ID:"id",INDENTALIGN
:"indentalign"},INDENTSHIFT:{INDENTSHIFT:"indentshift"},LINETHICKNESS:{THIN:"thin"
,MEDIUM:"medium",THICK:"thick"},NOTATION:{LONGDIV:"longdiv",ACTUARIAL:"actuarial"
,RADICAL:"radical",BOX:"box",ROUNDEDBOX:"roundedbox",CIRCLE:"circle",LEFT:"left",
RIGHT:"right",TOP:"top",BOTTOM:"bottom",UPDIAGONALSTRIKE:"updiagonalstrike",DOWNDIAGONALSTRIKE
:"downdiagonalstrike",UPDIAGONALARROW:"updiagonalarrow",VERTICALSTRIKE:"verticalstrike"
,HORIZONTALSTRIKE:"horizontalstrike",PHASORANGLE:"phasorangle",MADRUWB:"madruwb"}
,ALIGN:{TOP:"top",BOTTOM:"bottom",CENTER:"center",BASELINE:"baseline",AXIS:"axis"
,LEFT:"left",RIGHT:"right"},LINES:{NONE:"none",SOLID:"solid",DASHED:"dashed"},SIDE
:{LEFT:"left",RIGHT:"right",LEFTOVERLAP:"leftoverlap",RIGHTOVERLAP:"rightoverlap"
},WIDTH:{AUTO:"auto",FIT:"fit"},ACTIONTYPE:{TOGGLE:"toggle",STATUSLINE:"statusline"
,TOOLTIP:"tooltip",INPUT:"input"},LENGTH:{VERYVERYTHINMATHSPACE:"veryverythinmathspace"
,VERYTHINMATHSPACE:"verythinmathspace",THINMATHSPACE:"thinmathspace",MEDIUMMATHSPACE
:"mediummathspace",THICKMATHSPACE:"thickmathspace",VERYTHICKMATHSPACE:"verythickmathspace"
,VERYVERYTHICKMATHSPACE:"veryverythickmathspace",NEGATIVEVERYVERYTHINMATHSPACE:"negativeveryverythinmathspace"
,NEGATIVEVERYTHINMATHSPACE:"negativeverythinmathspace",NEGATIVETHINMATHSPACE:"negativethinmathspace"
,NEGATIVEMEDIUMMATHSPACE:"negativemediummathspace",NEGATIVETHICKMATHSPACE:"negativethickmathspace"
,NEGATIVEVERYTHICKMATHSPACE:"negativeverythickmathspace",NEGATIVEVERYVERYTHICKMATHSPACE
:"negativeveryverythickmathspace"},OVERFLOW:{LINBREAK:"linebreak",SCROLL:"scroll"
,ELIDE:"elide",TRUNCATE:"truncate",SCALE:"scale"},UNIT:{EM:"em",EX:"ex",PX:"px",IN
:"in",CM:"cm",MM:"mm",PT:"pt",PC:"pc"},TEXCLASS:{ORD:0,OP:1,BIN:2,REL:3,OPEN:4,CLOSE
:5,PUNCT:6,INNER:7,VCENTER:8,NONE:-1},TEXCLASSNAMES:["ORD","OP","BIN","REL","OPEN"
,"CLOSE","PUNCT","INNER","VCENTER"],skipAttributes:{texClass:!0,useHeight:!0,texprimestyle
:!0},copyAttributes:{displaystyle:1,scriptlevel:1,open:1,close:1,form:1,actiontype
:1,fontfamily:!0,fontsize:!0,fontweight:!0,fontstyle:!0,color:!0,background:!0,id
:!0,"class":1,href:!0,style:!0},copyAttributeNames:["displaystyle","scriptlevel","open"
,"close","form","actiontype","fontfamily","fontsize","fontweight","fontstyle","color"
,"background","id","class","href","style"],nocopyAttributes:{fontfamily:!0,fontsize
:!0,fontweight:!0,fontstyle:!0,color:!0,background:!0,id:!0,"class":!0,href:!0,style
:!0,xmlns:!0},Error:function(e,t){var n=this.merror(e),r=MathJax.Localization.fontDirection
(),i=MathJax.Localization.fontFamily();t&&(n=n.With(t));if(r||i)n=this.mstyle(n),
r&&(n.dir=r),i&&(n.style.fontFamily="font-family: "+i);return n}}),function(e){e.
mbase=MathJax.Object.Subclass({type:"base",isToken:!1,defaults:{mathbackground:e.
INHERIT,mathcolor:e.INHERIT,dir:e.INHERIT},noInherit:{},noInheritAttribute:{texClass
:!0},linebreakContainer:!1,Init:function(){this.data=[],this.inferRow&&(arguments
.length!==1||!arguments[0].inferred)&&this.Append(e.mrow().With({inferred:!0,notParent
:!0})),this.Append.apply(this,arguments)},With:function(e){for(var t in e)e.hasOwnProperty
(t)&&(this[t]=e[t]);return this},Append:function(){if(this.inferRow&&this.data.length
)this.data[0].Append.apply(this.data[0],arguments);else for(var e=0,t=arguments.length
;e<t;e++)this.SetData(this.data.length,arguments[e])},SetData:function(t,n){n!=null&&
(n instanceof e.mbase||(n=this.isToken||this.isChars?e.chars(n):e.mtext(n)),n.parent=
this,n.setInherit(this.inheritFromMe?this:this.inherit)),this.data[t]=n},Parent:function(
){var e=this.parent;while(e&&e.notParent)e=e.parent;return e},Get:function(t,n,r)
{if(!r){if(this[t]!=null)return this[t];if(this.attr&&this.attr[t]!=null)return this
.attr[t]}var i=this.Parent();if(i&&i["adjustChild_"+t]!=null)return i["adjustChild_"+
t](this.childPosition(),n);var s=this.inherit,o=s;while(s){var u=s[t];u==null&&s.
attr&&(u=s.attr[t]);if(u!=null&&s.noInheritAttribute&&!s.noInheritAttribute[t]){var f=
s.noInherit[this.type];if(!f||!f[t])return u}o=s,s=s.inherit}if(!n){if(this.defaults
[t]===e.AUTO)return this.autoDefault(t);if(this.defaults[t]!==e.INHERIT&&this.defaults
[t]!=null)return this.defaults[t];if(o)return o.defaults[t]}return null},hasValue
:function(e){return this.Get(e,true)!=null},getValues:function(){var e={};for(var t=0
,n=arguments.length;t<n;t++)e[arguments[t]]=this.Get(arguments[t]);return e},adjustChild_scriptlevel
:function(e,t){return this.Get("scriptlevel",t)},adjustChild_displaystyle:function(
e,t){return this.Get("displaystyle",t)},adjustChild_texprimestyle:function(e,t){return this
.Get("texprimestyle",t)},childPosition:function(){var e=this,t=e.parent;while(t.notParent
)e=t,t=e.parent;for(var n=0,r=t.data.length;n<r;n++)if(t.data[n]===e)return n;return null
},setInherit:function(e){if(e!==this.inherit&&this.inherit==null){this.inherit=e;
for(var t=0,n=this.data.length;t<n;t++)this.data[t]&&this.data[t].setInherit&&this
.data[t].setInherit(e)}},setTeXclass:function(e){return this.getPrevClass(e),typeof 
this.texClass!="undefined"?this:e},getPrevClass:function(e){e&&(this.prevClass=e.
Get("texClass"),this.prevLevel=e.Get("scriptlevel"))},updateTeXclass:function(e){
e&&(this.prevClass=e.prevClass,delete e.prevClass,this.prevLevel=e.prevLevel,delete 
e.prevLevel,this.texClass=e.Get("texClass"))},texSpacing:function(){var t=this.prevClass!=
null?this.prevClass:e.TEXCLASS.NONE,n=this.Get("texClass")||e.TEXCLASS.ORD;if(t===
e.TEXCLASS.NONE||n===e.TEXCLASS.NONE)return"";t===e.TEXCLASS.VCENTER&&(t=e.TEXCLASS
.ORD),n===e.TEXCLASS.VCENTER&&(n=e.TEXCLASS.ORD);var r=this.TEXSPACE[t][n];return this
.prevLevel>0&&this.Get("scriptlevel")>0&&r>=0?"":this.TEXSPACELENGTH[Math.abs(r)]
},TEXSPACELENGTH:["",e.LENGTH.THINMATHSPACE,e.LENGTH.MEDIUMMATHSPACE,e.LENGTH.THICKMATHSPACE
],TEXSPACE:[[0,-1,2,3,0,0,0,1],[-1,-1,0,3,0,0,0,1],[2,2,0,0,2,0,0,2],[3,3,0,0,3,0
,0,3],[0,0,0,0,0,0,0,0],[0,-1,2,3,0,0,0,1],[1,1,0,1,1,1,1,1],[1,-1,2,3,1,0,1,1]],
autoDefault:function(e){return""},isSpacelike:function(){return!1},isEmbellished:
function(){return!1},Core:function(){return this},CoreMO:function(){return this},
hasNewline:function(){if(this.isEmbellished())return this.CoreMO().hasNewline();if(
this.isToken||this.linebreakContainer)return!1;for(var e=0,t=this.data.length;e<t
;e++)if(this.data[e]&&this.data[e].hasNewline())return!0;return!1},array:function(
){return this.inferred?this.data:[this]},toString:function(){return this.type+"("+
this.data.join(",")+")"},getAnnotation:function(){return null}},{childrenSpacelike
:function(){for(var e=0,t=this.data.length;e<t;e++)if(!this.data[e].isSpacelike()
)return!1;return!0},childEmbellished:function(){return this.data[0]&&this.data[0]
.isEmbellished()},childCore:function(){return this.data[0]},childCoreMO:function(
){return this.data[0]?this.data[0].CoreMO():null},setChildTeXclass:function(e){return this
.data[0]&&(e=this.data[0].setTeXclass(e),this.updateTeXclass(this.data[0])),e},setBaseTeXclasses
:function(t){this.getPrevClass(t),this.texClass=null,this.data[0]?this.isEmbellished
()||this.data[0].isa(e.mi)?(t=this.data[0].setTeXclass(t),this.updateTeXclass(this
.Core())):(this.data[0].setTeXclass(),t=this):t=this;for(var n=1,r=this.data.length
;n<r;n++)this.data[n]&&this.data[n].setTeXclass();return t},setSeparateTeXclasses
:function(e){this.getPrevClass(e);for(var t=0,n=this.data.length;t<n;t++)this.data
[t]&&this.data[t].setTeXclass();return this.isEmbellished()&&this.updateTeXclass(
this.Core()),this}}),e.mi=e.mbase.Subclass({type:"mi",isToken:!0,texClass:e.TEXCLASS
.ORD,defaults:{mathvariant:e.AUTO,mathsize:e.INHERIT,mathbackground:e.INHERIT,mathcolor
:e.INHERIT,dir:e.INHERIT},autoDefault:function(t){if(t==="mathvariant"){var n=(this
.data[0]||"").toString();return n.length===1||n.length===2&&n.charCodeAt(0)>=55296&&
n.charCodeAt(0)<56320?e.VARIANT.ITALIC:e.VARIANT.NORMAL}return""},setTeXclass:function(
t){this.getPrevClass(t);var n=this.data.join("");return n.length>1&&n.match(/^[a-z][a-z0-9]*$/i
)&&this.texClass===e.TEXCLASS.ORD&&(this.texClass=e.TEXCLASS.OP,this.autoOP=!0),this
}}),e.mn=e.mbase.Subclass({type:"mn",isToken:!0,texClass:e.TEXCLASS.ORD,defaults:
{mathvariant:e.INHERIT,mathsize:e.INHERIT,mathbackground:e.INHERIT,mathcolor:e.INHERIT
,dir:e.INHERIT}}),e.mo=e.mbase.Subclass({type:"mo",isToken:!0,defaults:{mathvariant
:e.INHERIT,mathsize:e.INHERIT,mathbackground:e.INHERIT,mathcolor:e.INHERIT,dir:e.
INHERIT,form:e.AUTO,fence:e.AUTO,separator:e.AUTO,lspace:e.AUTO,rspace:e.AUTO,stretchy
:e.AUTO,symmetric:e.AUTO,maxsize:e.AUTO,minsize:e.AUTO,largeop:e.AUTO,movablelimits
:e.AUTO,accent:e.AUTO,linebreak:e.LINEBREAK.AUTO,lineleading:e.INHERIT,linebreakstyle
:e.AUTO,linebreakmultchar:e.INHERIT,indentalign:e.INHERIT,indentshift:e.INHERIT,indenttarget
:e.INHERIT,indentalignfirst:e.INHERIT,indentshiftfirst:e.INHERIT,indentalignlast:
e.INHERIT,indentshiftlast:e.INHERIT,texClass:e.AUTO},defaultDef:{form:e.FORM.INFIX
,fence:!1,separator:!1,lspace:e.LENGTH.THICKMATHSPACE,rspace:e.LENGTH.THICKMATHSPACE
,stretchy:!1,symmetric:!1,maxsize:e.SIZE.INFINITY,minsize:"0em",largeop:!1,movablelimits
:!1,accent:!1,linebreak:e.LINEBREAK.AUTO,lineleading:"1ex",linebreakstyle:"before"
,indentalign:e.INDENTALIGN.AUTO,indentshift:"0",indenttarget:"",indentalignfirst:
e.INDENTALIGN.INDENTALIGN,indentshiftfirst:e.INDENTSHIFT.INDENTSHIFT,indentalignlast
:e.INDENTALIGN.INDENTALIGN,indentshiftlast:e.INDENTSHIFT.INDENTSHIFT,texClass:e.TEXCLASS
.REL},SPACE_ATTR:{lspace:1,rspace:2,form:4},useMMLspacing:7,autoDefault:function(
t,n){var r=this.def;if(!r){if(t==="form")return this.useMMLspacing&=~this.SPACE_ATTR
.form,this.getForm();var i=this.data.join(""),s=[this.Get("form"),e.FORM.INFIX,e.
FORM.POSTFIX,e.FORM.PREFIX];for(var o=0,u=s.length;o<u;o++){var f=this.OPTABLE[s[
o]][i];if(f){r=this.makeDef(f);break}}r||(r=this.CheckRange(i)),!r&&n?r={}:(r||(r=
MathJax.Hub.Insert({},this.defaultDef)),this.parent?this.def=r:r=MathJax.Hub.Insert
({},r),r.form=s[0])}return this.useMMLspacing&=~(this.SPACE_ATTR[t]||0),r[t]!=null?
r[t]:n?"":this.defaultDef[t]},CheckRange:function(t){var n=t.charCodeAt(0);n>=55296&&
n<56320&&(n=(n-55296<<10)+(t.charCodeAt(1)-56320)+65536);for(var r=0,i=this.RANGES
.length;r<i&&this.RANGES[r][0]<=n;r++)if(n<=this.RANGES[r][1]){if(this.RANGES[r][3
]){var s=e.optableDir+"/"+this.RANGES[r][3]+".js";this.RANGES[r][3]=null,MathJax.
Hub.RestartAfter(MathJax.Ajax.Require(s))}var o=e.TEXCLASSNAMES[this.RANGES[r][2]
];return o=this.OPTABLE.infix[t]=e.mo.OPTYPES[o==="BIN"?"BIN3":o],this.makeDef(o)
}return null},makeDef:function(t){t[2]==null&&(t[2]=this.defaultDef.texClass),t[3
]||(t[3]={});var n=MathJax.Hub.Insert({},t[3]);return n.lspace=this.SPACE[t[0]],n
.rspace=this.SPACE[t[1]],n.texClass=t[2],n.texClass===e.TEXCLASS.REL&&(this.movablelimits||
this.data.join("").match(/^[a-z]+$/i))&&(n.texClass=e.TEXCLASS.OP),n},getForm:function(
){var t=this,n=this.parent,r=this.Parent();while(r&&r.isEmbellished())t=n,n=r.parent
,r=r.Parent();if(n&&n.type==="mrow"&&n.NonSpaceLength()!==1){if(n.FirstNonSpace()===
t)return e.FORM.PREFIX;if(n.LastNonSpace()===t)return e.FORM.POSTFIX}return e.FORM
.INFIX},isEmbellished:function(){return!0},hasNewline:function(){return this.Get("linebreak"
)===e.LINEBREAK.NEWLINE},CoreParent:function(){var t=this;while(t&&t.isEmbellished
()&&t.CoreMO()===this&&!t.isa(e.math))t=t.Parent();return t},CoreText:function(t)
{if(!t)return"";if(t.isEmbellished())return t.CoreMO().data.join("");while(((t.isa
(e.mrow)||t.isa(e.TeXAtom)||t.isa(e.mstyle)||t.isa(e.mphantom))&&t.data.length===1||
t.isa(e.munderover))&&t.data[0])t=t.data[0];return t.isToken?t.data.join(""):""},
remapChars:{"*":"∗",'"':"″","°":"∘","²":"2","³":"3","´":"′","¹":"1"},remap:function(
e,t){return e=e.replace(/-/g,"−"),t&&(e=e.replace(/'/g,"′").replace(/`/g,"‵"),e.length===1&&
(e=t[e]||e)),e},setTeXclass:function(t){var n=this.getValues("form","lspace","rspace"
,"fence");return this.useMMLspacing?(this.texClass=e.TEXCLASS.NONE,this):(n.fence&&!
this.texClass&&(n.form===e.FORM.PREFIX&&(this.texClass=e.TEXCLASS.OPEN),n.form===
e.FORM.POSTFIX&&(this.texClass=e.TEXCLASS.CLOSE)),this.texClass=this.Get("texClass"
),this.data.join("")==="⁡"?(t&&(t.texClass=e.TEXCLASS.OP,t.fnOP=!0),this.texClass=
this.prevClass=e.TEXCLASS.NONE,t):this.adjustTeXclass(t))},adjustTeXclass:function(
t){return this.texClass===e.TEXCLASS.NONE?t:(t?(t.autoOP&&(this.texClass===e.TEXCLASS
.BIN||this.texClass===e.TEXCLASS.REL)&&(t.texClass=e.TEXCLASS.ORD),this.prevClass=
t.texClass||e.TEXCLASS.ORD,this.prevLevel=t.Get("scriptlevel")):this.prevClass=e.
TEXCLASS.NONE,this.texClass!==e.TEXCLASS.BIN||this.prevClass!==e.TEXCLASS.NONE&&this
.prevClass!==e.TEXCLASS.BIN&&this.prevClass!==e.TEXCLASS.OP&&this.prevClass!==e.TEXCLASS
.REL&&this.prevClass!==e.TEXCLASS.OPEN&&this.prevClass!==e.TEXCLASS.PUNCT?this.prevClass===
e.TEXCLASS.BIN&&(this.texClass===e.TEXCLASS.REL||this.texClass===e.TEXCLASS.CLOSE||
this.texClass===e.TEXCLASS.PUNCT)&&(t.texClass=this.prevClass=e.TEXCLASS.ORD):this
.texClass=e.TEXCLASS.ORD,this)}}),e.mtext=e.mbase.Subclass({type:"mtext",isToken:!0
,isSpacelike:function(){return!0},texClass:e.TEXCLASS.ORD,defaults:{mathvariant:e
.INHERIT,mathsize:e.INHERIT,mathbackground:e.INHERIT,mathcolor:e.INHERIT,dir:e.INHERIT
}}),e.mspace=e.mbase.Subclass({type:"mspace",isToken:!0,isSpacelike:function(){return!0
},defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,width:"0em",height:"0ex"
,depth:"0ex",linebreak:e.LINEBREAK.AUTO},hasDimAttr:function(){return this.hasValue
("width")||this.hasValue("height")||this.hasValue("depth")},hasNewline:function()
{return!this.hasDimAttr()&&this.Get("linebreak")===e.LINEBREAK.NEWLINE}}),e.ms=e.
mbase.Subclass({type:"ms",isToken:!0,texClass:e.TEXCLASS.ORD,defaults:{mathvariant
:e.INHERIT,mathsize:e.INHERIT,mathbackground:e.INHERIT,mathcolor:e.INHERIT,dir:e.
INHERIT,lquote:'"',rquote:'"'}}),e.mglyph=e.mbase.Subclass({type:"mglyph",isToken
:!0,texClass:e.TEXCLASS.ORD,defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT
,alt:"",src:"",width:e.AUTO,height:e.AUTO,valign:"0em"}}),e.mrow=e.mbase.Subclass
({type:"mrow",isSpacelike:e.mbase.childrenSpacelike,inferred:!1,notParent:!1,isEmbellished
:function(){var e=!1;for(var t=0,n=this.data.length;t<n;t++){if(this.data[t]==null
)continue;if(this.data[t].isEmbellished()){if(e)return!1;e=!0,this.core=t}else if(!
this.data[t].isSpacelike())return!1}return e},NonSpaceLength:function(){var e=0;for(
var t=0,n=this.data.length;t<n;t++)this.data[t]&&!this.data[t].isSpacelike()&&e++
;return e},FirstNonSpace:function(){for(var e=0,t=this.data.length;e<t;e++)if(this
.data[e]&&!this.data[e].isSpacelike())return this.data[e];return null},LastNonSpace
:function(){for(var e=this.data.length-1;e>=0;e--)if(this.data[0]&&!this.data[e].
isSpacelike())return this.data[e];return null},Core:function(){return!this.isEmbellished
()||typeof this.core=="undefined"?this:this.data[this.core]},CoreMO:function(){return!
this.isEmbellished()||typeof this.core=="undefined"?this:this.data[this.core].CoreMO
()},toString:function(){return this.inferred?"["+this.data.join(",")+"]":this.SUPER
(arguments).toString.call(this)},setTeXclass:function(t){var n,r=this.data.length
;if((this.open||this.close)&&(!t||!t.fnOP)){this.getPrevClass(t),t=null;for(n=0;n<
r;n++)this.data[n]&&(t=this.data[n].setTeXclass(t));return this.hasOwnProperty("texClass"
)||(this.texClass=e.TEXCLASS.INNER),this}for(n=0;n<r;n++)this.data[n]&&(t=this.data
[n].setTeXclass(t));return this.data[0]&&this.updateTeXclass(this.data[0]),t},getAnnotation
:function(e){return this.data.length!=1?null:this.data[0].getAnnotation(e)}}),e.mfrac=
e.mbase.Subclass({type:"mfrac",num:0,den:1,linebreakContainer:!0,isEmbellished:e.
mbase.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,defaults
:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,linethickness:e.LINETHICKNESS.MEDIUM
,numalign:e.ALIGN.CENTER,denomalign:e.ALIGN.CENTER,bevelled:!1},adjustChild_displaystyle
:function(e){return!1},adjustChild_scriptlevel:function(e){var t=this.Get("scriptlevel"
);return(!this.Get("displaystyle")||t>0)&&t++,t},adjustChild_texprimestyle:function(
e){return e==this.den?!0:this.Get("texprimestyle")},setTeXclass:e.mbase.setSeparateTeXclasses
}),e.msqrt=e.mbase.Subclass({type:"msqrt",inferRow:!0,linebreakContainer:!0,texClass
:e.TEXCLASS.ORD,setTeXclass:e.mbase.setSeparateTeXclasses,adjustChild_texprimestyle
:function(e){return!0}}),e.mroot=e.mbase.Subclass({type:"mroot",linebreakContainer
:!0,texClass:e.TEXCLASS.ORD,adjustChild_displaystyle:function(e){return e===1?!1:
this.Get("displaystyle")},adjustChild_scriptlevel:function(e){var t=this.Get("scriptlevel"
);return e===1&&(t+=2),t},adjustChild_texprimestyle:function(e){return e===0?!0:this
.Get("texprimestyle")},setTeXclass:e.mbase.setSeparateTeXclasses}),e.mstyle=e.mbase
.Subclass({type:"mstyle",isSpacelike:e.mbase.childrenSpacelike,isEmbellished:e.mbase
.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,inferRow:!0,defaults
:{scriptlevel:e.INHERIT,displaystyle:e.INHERIT,scriptsizemultiplier:Math.sqrt(.5)
,scriptminsize:"8pt",mathbackground:e.INHERIT,mathcolor:e.INHERIT,dir:e.INHERIT,infixlinebreakstyle
:e.LINEBREAKSTYLE.BEFORE,decimalseparator:"."},adjustChild_scriptlevel:function(e
){var t=this.scriptlevel;if(t==null)t=this.Get("scriptlevel");else if(String(t).match
(/^ *[-+]/)){delete this.scriptlevel;var n=this.Get("scriptlevel");this.scriptlevel=
t,t=n+parseInt(t)}return t},inheritFromMe:!0,noInherit:{mpadded:{width:!0,height:!0
,depth:!0,lspace:!0,voffset:!0},mtable:{width:!0,height:!0,depth:!0,align:!0}},setTeXclass
:e.mbase.setChildTeXclass}),e.merror=e.mbase.Subclass({type:"merror",inferRow:!0,
linebreakContainer:!0,texClass:e.TEXCLASS.ORD}),e.mpadded=e.mbase.Subclass({type:"mpadded"
,inferRow:!0,isSpacelike:e.mbase.childrenSpacelike,isEmbellished:e.mbase.childEmbellished
,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,defaults:{mathbackground:e.INHERIT
,mathcolor:e.INHERIT,width:"",height:"",depth:"",lspace:0,voffset:0},setTeXclass:
e.mbase.setChildTeXclass}),e.mphantom=e.mbase.Subclass({type:"mphantom",texClass:
e.TEXCLASS.ORD,inferRow:!0,isSpacelike:e.mbase.childrenSpacelike,isEmbellished:e.
mbase.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,setTeXclass
:e.mbase.setChildTeXclass}),e.mfenced=e.mbase.Subclass({type:"mfenced",defaults:{
mathbackground:e.INHERIT,mathcolor:e.INHERIT,open:"(",close:")",separators:","},addFakeNodes
:function(){var t=this.getValues("open","close","separators");t.open=t.open.replace
(/[ \t\n\r]/g,""),t.close=t.close.replace(/[ \t\n\r]/g,""),t.separators=t.separators
.replace(/[ \t\n\r]/g,""),t.open!==""&&(this.SetData("open",e.mo(t.open).With({fence
:!0,form:e.FORM.PREFIX,texClass:e.TEXCLASS.OPEN})),this.data.open.useMMLspacing&=~
this.data.open.SPACE_ATTR.form);if(t.separators!==""){while(t.separators.length<this
.data.length)t.separators+=t.separators.charAt(t.separators.length-1);for(var n=1
,r=this.data.length;n<r;n++)this.data[n]&&this.SetData("sep"+n,e.mo(t.separators.
charAt(n-1)).With({separator:!0}))}t.close!==""&&(this.SetData("close",e.mo(t.close
).With({fence:!0,form:e.FORM.POSTFIX,texClass:e.TEXCLASS.CLOSE})),this.data.close
.useMMLspacing&=~this.data.close.SPACE_ATTR.form)},texClass:e.TEXCLASS.OPEN,setTeXclass
:function(t){this.addFakeNodes(),this.getPrevClass(t),this.data.open&&(t=this.data
.open.setTeXclass(t)),this.data[0]&&(t=this.data[0].setTeXclass(t));for(var n=1,r=
this.data.length;n<r;n++)this.data["sep"+n]&&(t=this.data["sep"+n].setTeXclass(t)
),this.data[n]&&(t=this.data[n].setTeXclass(t));return this.data.close&&(t=this.data
.close.setTeXclass(t)),this.updateTeXclass(this.data.open),this.texClass=e.TEXCLASS
.INNER,t}}),e.menclose=e.mbase.Subclass({type:"menclose",inferRow:!0,linebreakContainer
:!0,defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,notation:e.NOTATION.LONGDIV
,texClass:e.TEXCLASS.ORD},setTeXclass:e.mbase.setSeparateTeXclasses}),e.msubsup=e
.mbase.Subclass({type:"msubsup",base:0,sub:1,sup:2,isEmbellished:e.mbase.childEmbellished
,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,defaults:{mathbackground:e.INHERIT
,mathcolor:e.INHERIT,subscriptshift:"",superscriptshift:"",texClass:e.AUTO},autoDefault
:function(t){return t==="texClass"?this.isEmbellished()?this.CoreMO().Get(t):e.TEXCLASS
.ORD:0},adjustChild_displaystyle:function(e){return e>0?!1:this.Get("displaystyle"
)},adjustChild_scriptlevel:function(e){var t=this.Get("scriptlevel");return e>0&&
t++,t},adjustChild_texprimestyle:function(e){return e===this.sub?!0:this.Get("texprimestyle"
)},setTeXclass:e.mbase.setBaseTeXclasses}),e.msub=e.msubsup.Subclass({type:"msub"
}),e.msup=e.msubsup.Subclass({type:"msup",sub:2,sup:1}),e.mmultiscripts=e.msubsup
.Subclass({type:"mmultiscripts",adjustChild_texprimestyle:function(e){return e%2===1?!0
:this.Get("texprimestyle")}}),e.mprescripts=e.mbase.Subclass({type:"mprescripts"}
),e.none=e.mbase.Subclass({type:"none"}),e.munderover=e.mbase.Subclass({type:"munderover"
,base:0,under:1,over:2,sub:1,sup:2,ACCENTS:["","accentunder","accent"],linebreakContainer
:!0,isEmbellished:e.mbase.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.
childCoreMO,defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,accent:e.AUTO,
accentunder:e.AUTO,align:e.ALIGN.CENTER,texClass:e.AUTO,subscriptshift:"",superscriptshift
:""},autoDefault:function(t){return t==="texClass"?this.isEmbellished()?this.CoreMO
().Get(t):e.TEXCLASS.ORD:t==="accent"&&this.data[this.over]?this.data[this.over].
CoreMO().Get("accent"):t==="accentunder"&&this.data[this.under]?this.data[this.under
].CoreMO().Get("accent"):!1},adjustChild_displaystyle:function(e){return e>0?!1:this
.Get("displaystyle")},adjustChild_scriptlevel:function(e){var t=this.Get("scriptlevel"
),n=this.data[this.base]&&!this.Get("displaystyle")&&this.data[this.base].CoreMO(
).Get("movablelimits");return e==this.under&&(n||!this.Get("accentunder"))&&t++,e==
this.over&&(n||!this.Get("accent"))&&t++,t},adjustChild_texprimestyle:function(e)
{return e===this.base&&this.data[this.over]?!0:this.Get("texprimestyle")},setTeXclass
:e.mbase.setBaseTeXclasses}),e.munder=e.munderover.Subclass({type:"munder"}),e.mover=
e.munderover.Subclass({type:"mover",over:1,under:2,sup:1,sub:2,ACCENTS:["","accent"
,"accentunder"]}),e.mtable=e.mbase.Subclass({type:"mtable",defaults:{mathbackground
:e.INHERIT,mathcolor:e.INHERIT,align:e.ALIGN.AXIS,rowalign:e.ALIGN.BASELINE,columnalign
:e.ALIGN.CENTER,groupalign:"{left}",alignmentscope:!0,columnwidth:e.WIDTH.AUTO,width
:e.WIDTH.AUTO,rowspacing:"1ex",columnspacing:".8em",rowlines:e.LINES.NONE,columnlines
:e.LINES.NONE,frame:e.LINES.NONE,framespacing:"0.4em 0.5ex",equalrows:!1,equalcolumns
:!1,displaystyle:!1,side:e.SIDE.RIGHT,minlabelspacing:"0.8em",texClass:e.TEXCLASS
.ORD,useHeight:1},adjustChild_displaystyle:function(){return this.displaystyle!=null?
this.displaystyle:this.defaults.displaystyle},inheritFromMe:!0,noInherit:{mover:{
align:!0},munder:{align:!0},munderover:{align:!0},mtable:{align:!0,rowalign:!0,columnalign
:!0,groupalign:!0,alignmentscope:!0,columnwidth:!0,width:!0,rowspacing:!0,columnspacing
:!0,rowlines:!0,columnlines:!0,frame:!0,framespacing:!0,equalrows:!0,equalcolumns
:!0,displaystyle:!0,side:!0,minlabelspacing:!0,texClass:!0,useHeight:1}},linebreakContainer
:!0,Append:function(){for(var t=0,n=arguments.length;t<n;t++)arguments[t]instanceof 
e.mtr||arguments[t]instanceof e.mlabeledtr||(arguments[t]=e.mtr(arguments[t]));this
.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:e.mbase.setSeparateTeXclasses
}),e.mtr=e.mbase.Subclass({type:"mtr",defaults:{mathbackground:e.INHERIT,mathcolor
:e.INHERIT,rowalign:e.INHERIT,columnalign:e.INHERIT,groupalign:e.INHERIT},inheritFromMe
:!0,noInherit:{mrow:{rowalign:!0,columnalign:!0,groupalign:!0},mtable:{rowalign:!0
,columnalign:!0,groupalign:!0}},linebreakContainer:!0,Append:function(){for(var t=0
,n=arguments.length;t<n;t++)arguments[t]instanceof e.mtd||(arguments[t]=e.mtd(arguments
[t]));this.SUPER(arguments).Append.apply(this,arguments)},setTeXclass:e.mbase.setSeparateTeXclasses
}),e.mtd=e.mbase.Subclass({type:"mtd",inferRow:!0,linebreakContainer:!0,isEmbellished
:e.mbase.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,defaults
:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,rowspan:1,columnspan:1,rowalign:e.
INHERIT,columnalign:e.INHERIT,groupalign:e.INHERIT},setTeXclass:e.mbase.setSeparateTeXclasses
}),e.maligngroup=e.mbase.Subclass({type:"malign",isSpacelike:function(){return!0}
,defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT,groupalign:e.INHERIT},inheritFromMe
:!0,noInherit:{mrow:{groupalign:!0},mtable:{groupalign:!0}}}),e.malignmark=e.mbase
.Subclass({type:"malignmark",defaults:{mathbackground:e.INHERIT,mathcolor:e.INHERIT
,edge:e.SIDE.LEFT},isSpacelike:function(){return!0}}),e.mlabeledtr=e.mtr.Subclass
({type:"mlabeledtr"}),e.maction=e.mbase.Subclass({type:"maction",defaults:{mathbackground
:e.INHERIT,mathcolor:e.INHERIT,actiontype:e.ACTIONTYPE.TOGGLE,selection:1},selected
:function(){return this.data[this.Get("selection")-1]||e.NULL},isEmbellished:function(
){return this.selected().isEmbellished()},isSpacelike:function(){return this.selected
().isSpacelike()},Core:function(){return this.selected().Core()},CoreMO:function(
){return this.selected().CoreMO()},setTeXclass:function(t){return this.Get("actiontype"
)===e.ACTIONTYPE.TOOLTIP&&this.data[1]&&this.data[1].setTeXclass(),this.selected(
).setTeXclass(t)}}),e.semantics=e.mbase.Subclass({type:"semantics",notParent:!0,isEmbellished
:e.mbase.childEmbellished,Core:e.mbase.childCore,CoreMO:e.mbase.childCoreMO,defaults
:{definitionURL:null,encoding:null},setTeXclass:e.mbase.setChildTeXclass,getAnnotation
:function(e){var t=MathJax.Hub.config.MathMenu.semanticsAnnotations[e];if(t)for(var n=0
,r=this.data.length;n<r;n++){var i=this.data[n].Get("encoding");if(i)for(var s=0,
o=t.length;s<o;s++)if(t[s]===i)return this.data[n]}return null}}),e.annotation=e.
mbase.Subclass({type:"annotation",isChars:!0,linebreakContainer:!0,defaults:{definitionURL
:null,encoding:null,cd:"mathmlkeys",name:"",src:null}}),e["annotation-xml"]=e.mbase
.Subclass({type:"annotation-xml",linebreakContainer:!0,defaults:{definitionURL:null
,encoding:null,cd:"mathmlkeys",name:"",src:null}}),e.math=e.mstyle.Subclass({type
:"math",defaults:{mathvariant:e.VARIANT.NORMAL,mathsize:e.SIZE.NORMAL,mathcolor:""
,mathbackground:e.COLOR.TRANSPARENT,dir:"ltr",scriptlevel:0,displaystyle:e.AUTO,display
:"inline",maxwidth:"",overflow:e.OVERFLOW.LINEBREAK,altimg:"","altimg-width":"","altimg-height"
:"","altimg-valign":"",alttext:"",cdgroup:"",scriptsizemultiplier:Math.sqrt(.5),scriptminsize
:"8px",infixlinebreakstyle:e.LINEBREAKSTYLE.BEFORE,lineleading:"1ex",indentshift:"auto"
,indentalign:e.INDENTALIGN.AUTO,indentalignfirst:e.INDENTALIGN.INDENTALIGN,indentshiftfirst
:e.INDENTSHIFT.INDENTSHIFT,indentalignlast:e.INDENTALIGN.INDENTALIGN,indentshiftlast
:e.INDENTSHIFT.INDENTSHIFT,decimalseparator:".",texprimestyle:!1},autoDefault:function(
e){return e==="displaystyle"?this.Get("display")==="block":""},linebreakContainer
:!0,setTeXclass:e.mbase.setChildTeXclass,getAnnotation:function(e){return this.data
.length!=1?null:this.data[0].getAnnotation(e)}}),e.chars=e.mbase.Subclass({type:"chars"
,Append:function(){this.data.push.apply(this.data,arguments)},value:function(){return this
.data.join("")},toString:function(){return this.data.join("")}}),e.entity=e.mbase
.Subclass({type:"entity",Append:function(){this.data.push.apply(this.data,arguments
)},value:function(){return this.data[0].substr(0,2)==="#x"?parseInt(this.data[0].
substr(2),16):this.data[0].substr(0,1)==="#"?parseInt(this.data[0].substr(1)):0},
toString:function(){var e=this.value();return e<=65535?String.fromCharCode(e):(e-=65536
,String.fromCharCode((e>>10)+55296)+String.fromCharCode((e&1023)+56320))}}),e.xml=
e.mbase.Subclass({type:"xml",Init:function(){return this.div=document.createElement
("div"),this.SUPER(arguments).Init.apply(this,arguments)},Append:function(){for(var e=0
,t=arguments.length;e<t;e++){var n=this.Import(arguments[e]);this.data.push(n),this
.div.appendChild(n)}},Import:function(e){if(document.importNode)return document.importNode
(e,!0);var t,n,r;if(e.nodeType===1){t=document.createElement(e.nodeName);for(n=0,
r=e.attributes.length;n<r;n++){var i=e.attributes[n];i.specified&&i.nodeValue!=null&&
i.nodeValue!=""&&t.setAttribute(i.nodeName,i.nodeValue),i.nodeName==="style"&&(t.
style.cssText=i.nodeValue)}e.className&&(t.className=e.className)}else if(e.nodeType===3||
e.nodeType===4)t=document.createTextNode(e.nodeValue);else{if(e.nodeType!==8)return document
.createTextNode("");t=document.createComment(e.nodeValue)}for(n=0,r=e.childNodes.
length;n<r;n++)t.appendChild(this.Import(e.childNodes[n]));return t},value:function(
){return this.div},toString:function(){return this.div.innerHTML}}),e.TeXAtom=e.mbase
.Subclass({type:"texatom",inferRow:!0,notParent:!0,texClass:e.TEXCLASS.ORD,Core:e
.mbase.childCore,CoreMO:e.mbase.childCoreMO,isEmbellished:e.mbase.childEmbellished
,setTeXclass:function(e){return this.data[0].setTeXclass(),this.adjustTeXclass(e)
},adjustTeXclass:e.mo.prototype.adjustTeXclass}),e.NULL=e.mbase().With({type:"null"
});var t=e.TEXCLASS,n={ORD:[0,0,t.ORD],ORD11:[1,1,t.ORD],ORD21:[2,1,t.ORD],ORD02:
[0,2,t.ORD],ORD55:[5,5,t.ORD],OP:[1,2,t.OP,{largeop:!0,movablelimits:!0,symmetric
:!0}],OPFIXED:[1,2,t.OP,{largeop:!0,movablelimits:!0}],INTEGRAL:[0,1,t.OP,{largeop
:!0,symmetric:!0}],INTEGRAL2:[1,2,t.OP,{largeop:!0,symmetric:!0}],BIN3:[3,3,t.BIN
],BIN4:[4,4,t.BIN],BIN01:[0,1,t.BIN],BIN5:[5,5,t.BIN],TALLBIN:[4,4,t.BIN,{stretchy
:!0}],BINOP:[4,4,t.BIN,{largeop:!0,movablelimits:!0}],REL:[5,5,t.REL],REL1:[1,1,t
.REL,{stretchy:!0}],REL4:[4,4,t.REL],RELSTRETCH:[5,5,t.REL,{stretchy:!0}],RELACCENT
:[5,5,t.REL,{accent:!0}],WIDEREL:[5,5,t.REL,{accent:!0,stretchy:!0}],OPEN:[0,0,t.
OPEN,{fence:!0,stretchy:!0,symmetric:!0}],CLOSE:[0,0,t.CLOSE,{fence:!0,stretchy:!0
,symmetric:!0}],INNER:[0,0,t.INNER],PUNCT:[0,3,t.PUNCT],ACCENT:[0,0,t.ORD,{accent
:!0}],WIDEACCENT:[0,0,t.ORD,{accent:!0,stretchy:!0}]};e.mo.Augment({SPACE:["0em","0.1111em"
,"0.1667em","0.2222em","0.2667em","0.3333em"],RANGES:[[32,127,t.REL,"BasicLatin"]
,[160,255,t.ORD,"Latin1Supplement"],[256,383,t.ORD],[384,591,t.ORD],[688,767,t.ORD
,"SpacingModLetters"],[768,879,t.ORD,"CombDiacritMarks"],[880,1023,t.ORD,"GreekAndCoptic"
],[7680,7935,t.ORD],[8192,8303,t.PUNCT,"GeneralPunctuation"],[8304,8351,t.ORD],[8352
,8399,t.ORD],[8400,8447,t.ORD,"CombDiactForSymbols"],[8448,8527,t.ORD,"LetterlikeSymbols"
],[8528,8591,t.ORD],[8592,8703,t.REL,"Arrows"],[8704,8959,t.BIN,"MathOperators"],
[8960,9215,t.ORD,"MiscTechnical"],[9312,9471,t.ORD],[9472,9631,t.ORD],[9632,9727,
t.ORD,"GeometricShapes"],[9984,10175,t.ORD,"Dingbats"],[10176,10223,t.ORD,"MiscMathSymbolsA"
],[10224,10239,t.REL,"SupplementalArrowsA"],[10496,10623,t.REL,"SupplementalArrowsB"
],[10624,10751,t.ORD,"MiscMathSymbolsB"],[10752,11007,t.BIN,"SuppMathOperators"],
[11008,11263,t.ORD,"MiscSymbolsAndArrows"],[119808,120831,t.ORD]],OPTABLE:{prefix
:{"∀":n.ORD21,"∂":n.ORD21,"∃":n.ORD21,"∇":n.ORD21,"∏":n.OP,"∐":n.OP,"∑":n.OP,"−":
n.BIN01,"∓":n.BIN01,"√":[1,1,t.ORD,{stretchy:!0}],"∠":n.ORD,"∫":n.INTEGRAL,"∮":n.
INTEGRAL,"⋀":n.OP,"⋁":n.OP,"⋂":n.OP,"⋃":n.OP,"⌈":n.OPEN,"⌊":n.OPEN,"⟨":n.OPEN,"⟮"
:n.OPEN,"⨀":n.OP,"⨁":n.OP,"⨂":n.OP,"⨄":n.OP,"⨆":n.OP,"¬":n.ORD21,"±":n.BIN01,"(":
n.OPEN,"+":n.BIN01,"-":n.BIN01,"[":n.OPEN,"{":n.OPEN,"|":n.OPEN},postfix:{"!":[1,0
,t.CLOSE],"&":n.ORD,"′":n.ORD02,"‾":n.WIDEACCENT,"⌉":n.CLOSE,"⌋":n.CLOSE,"⏞":n.WIDEACCENT
,"⏟":n.WIDEACCENT,"♭":n.ORD02,"♮":n.ORD02,"♯":n.ORD02,"⟩":n.CLOSE,"⟯":n.CLOSE,"ˆ"
:n.WIDEACCENT,"ˇ":n.WIDEACCENT,"ˉ":n.WIDEACCENT,"ˊ":n.ACCENT,"ˋ":n.ACCENT,"˘":n.ACCENT
,"˙":n.ACCENT,"˜":n.WIDEACCENT,"̂":n.WIDEACCENT,"¨":n.ACCENT,"¯":n.WIDEACCENT,")"
:n.CLOSE,"]":n.CLOSE,"^":n.WIDEACCENT,_:n.WIDEACCENT,"`":n.ACCENT,"|":n.CLOSE,"}"
:n.CLOSE,"~":n.WIDEACCENT},infix:{"":n.ORD,"%":[3,3,t.ORD],"•":n.BIN4,"…":n.INNER
,"⁄":n.TALLBIN,"⁡":n.ORD,"⁢":n.ORD,"⁣":[0,0,t.ORD,{linebreakstyle:"after",separator
:!0}],"⁤":n.ORD,"←":n.WIDEREL,"↑":n.RELSTRETCH,"→":n.WIDEREL,"↓":n.RELSTRETCH,"↔"
:n.WIDEREL,"↕":n.RELSTRETCH,"↖":n.RELSTRETCH,"↗":n.RELSTRETCH,"↘":n.RELSTRETCH,"↙"
:n.RELSTRETCH,"↦":n.WIDEREL,"↩":n.WIDEREL,"↪":n.WIDEREL,"↼":n.WIDEREL,"↽":n.WIDEREL
,"⇀":n.WIDEREL,"⇁":n.WIDEREL,"⇌":n.WIDEREL,"⇐":n.WIDEREL,"⇑":n.RELSTRETCH,"⇒":n.WIDEREL
,"⇓":n.RELSTRETCH,"⇔":n.WIDEREL,"⇕":n.RELSTRETCH,"∈":n.REL,"∉":n.REL,"∋":n.REL,"−"
:n.BIN4,"∓":n.BIN4,"∕":n.TALLBIN,"∖":n.BIN4,"∗":n.BIN4,"∘":n.BIN4,"∙":n.BIN4,"∝":
n.REL,"∣":n.REL,"∥":n.REL,"∧":n.BIN4,"∨":n.BIN4,"∩":n.BIN4,"∪":n.BIN4,"∼":n.REL,"≀"
:n.BIN4,"≃":n.REL,"≅":n.REL,"≈":n.REL,"≍":n.REL,"≐":n.REL,"≠":n.REL,"≡":n.REL,"≤"
:n.REL,"≥":n.REL,"≪":n.REL,"≫":n.REL,"≺":n.REL,"≻":n.REL,"⊂":n.REL,"⊃":n.REL,"⊆":
n.REL,"⊇":n.REL,"⊎":n.BIN4,"⊑":n.REL,"⊒":n.REL,"⊓":n.BIN4,"⊔":n.BIN4,"⊕":n.BIN4,"⊖"
:n.BIN4,"⊗":n.BIN4,"⊘":n.BIN4,"⊙":n.BIN4,"⊢":n.REL,"⊣":n.REL,"⊤":n.ORD55,"⊥":n.REL
,"⊨":n.REL,"⋄":n.BIN4,"⋅":n.BIN4,"⋆":n.BIN4,"⋈":n.REL,"⋮":n.ORD55,"⋯":n.INNER,"⋱"
:[5,5,t.INNER],"△":n.BIN4,"▵":n.BIN4,"▹":n.BIN4,"▽":n.BIN4,"▿":n.BIN4,"◃":n.BIN4,"❘"
:n.REL,"⟵":n.WIDEREL,"⟶":n.WIDEREL,"⟷":n.WIDEREL,"⟸":n.WIDEREL,"⟹":n.WIDEREL,"⟺":
n.WIDEREL,"⟼":n.WIDEREL,"⨯":n.BIN4,"⨿":n.BIN4,"⪯":n.REL,"⪰":n.REL,"±":n.BIN4,"·":
n.BIN4,"×":n.BIN4,"÷":n.BIN4,"*":n.BIN3,"+":n.BIN4,",":[0,3,t.PUNCT,{linebreakstyle
:"after",separator:!0}],"-":n.BIN4,".":[3,3,t.ORD],"/":n.ORD11,":":[1,2,t.REL],";"
:[0,3,t.PUNCT,{linebreakstyle:"after",separator:!0}],"<":n.REL,"=":n.REL,">":n.REL
,"?":[1,1,t.CLOSE],"\\":n.ORD,"^":n.ORD11,_:n.ORD11,"|":[2,2,t.ORD,{fence:!0,stretchy
:!0,symmetric:!0}],"#":n.ORD,$:n.ORD,".":[0,3,t.PUNCT,{separator:!0}],"ʹ":n.ORD,"̀"
:n.ACCENT,"́":n.ACCENT,"̃":n.WIDEACCENT,"̄":n.ACCENT,"̆":n.ACCENT,"̇":n.ACCENT,"̈"
:n.ACCENT,"̌":n.ACCENT,"̲":n.WIDEACCENT,"̸":n.REL4,"―":[0,0,t.ORD,{stretchy:!0}],"‗"
:[0,0,t.ORD,{stretchy:!0}],"†":n.BIN3,"‡":n.BIN3,"⃗":n.ACCENT,"ℑ":n.ORD,"ℓ":n.ORD
,"℘":n.ORD,"ℜ":n.ORD,"∅":n.ORD,"∞":n.ORD,"⌅":n.BIN3,"⌆":n.BIN3,"⌢":n.REL4,"⌣":n.REL4
,"〈":n.OPEN,"〉":n.CLOSE,"⎪":n.ORD,"⎯":[0,0,t.ORD,{stretchy:!0}],"⎰":n.OPEN,"⎱":n.
CLOSE,"─":n.ORD,"◯":n.BIN3,"♠":n.ORD,"♡":n.ORD,"♢":n.ORD,"♣":n.ORD,"〈":n.OPEN,"〉"
:n.CLOSE,"︷":n.WIDEACCENT,"︸":n.WIDEACCENT}}},{OPTYPES:n});var r=e.mo.prototype.OPTABLE
;r.infix["^"]=n.WIDEREL,r.infix._=n.WIDEREL,r.prefix["∣"]=n.OPEN,r.prefix["∥"]=n.
OPEN,r.postfix["∣"]=n.CLOSE,r.postfix["∥"]=n.CLOSE}(MathJax.ElementJax.mml),MathJax
.ElementJax.mml.loadComplete("jax.js"),MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js"
,function(){var e="2.5.0",t=MathJax.ElementJax.mml;SETTINGS=MathJax.Hub.config.menuSettings
,t.mbase.Augment({toMathML:function(e){var t=this.inferred&&this.parent.inferRow;
e==null&&(e="");var n=this.type,r=this.toMathMLattributes();if(n==="mspace")return e+"<"+
n+r+" />";var i=[],s=this.isToken?"":e+(t?"":"  ");for(var o=0,u=this.data.length
;o<u;o++)this.data[o]?i.push(this.data[o].toMathML(s)):!this.isToken&&!this.isChars&&
i.push(s+"<mrow />");return this.isToken||this.isChars?e+"<"+n+r+">"+i.join("")+"</"+
n+">":t?i.join("\n"):i.length===0||i.length===1&&i[0]===""?e+"<"+n+r+" />":e+"<"+
n+r+">\n"+i.join("\n")+"\n"+e+"</"+n+">"},toMathMLattributes:function(){var e=this
.type==="mstyle"?t.math.prototype.defaults:this.defaults,n=this.attrNames||t.copyAttributeNames
,r=t.skipAttributes,i=t.copyAttributes,s=[];this.type==="math"&&(!this.attr||!this
.attr.xmlns)&&s.push('xmlns="http://www.w3.org/1998/Math/MathML"');if(!this.attrNames
)for(var o in e)!r[o]&&!i[o]&&e.hasOwnProperty(o)&&this[o]!=null&&this[o]!==e[o]&&
this.Get(o,null,1)!==this[o]&&s.push(o+'="'+this.toMathMLattribute(this[o])+'"');
for(var u=0,f=n.length;u<f;u++){if(i[n[u]]===1&&!e.hasOwnProperty(n[u]))continue;
value=(this.attr||{})[n[u]],value==null&&(value=this[n[u]]),value!=null&&s.push(n
[u]+'="'+this.toMathMLquote(value)+'"')}return this.toMathMLclass(s),s.length?" "+
s.join(" "):""},toMathMLclass:function(e){var n=[];this["class"]&&n.push(this["class"
]);if(this.isa(t.TeXAtom)&&SETTINGS.texHints){var r=["ORD","OP","BIN","REL","OPEN"
,"CLOSE","PUNCT","INNER","VCENTER"][this.texClass];r&&n.push("MJX-TeXAtom-"+r)}this
.mathvariant&&this.toMathMLvariants[this.mathvariant]&&n.push("MJX"+this.mathvariant
),this.variantForm&&n.push("MJX-variant"),n.length&&e.unshift('class="'+n.join(" "
)+'"')},toMathMLattribute:function(e){return typeof e=="string"&&e.replace(/ /g,""
).match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)?(RegExp.$2||"")+(1/18*RegExp.$3).toFixed
(3).replace(/\.?0+$/,"")+"em":this.toMathMLvariants[e]?this.toMathMLvariants[e]:this
.toMathMLquote(e)},toMathMLvariants:{"-tex-caligraphic":t.VARIANT.SCRIPT,"-tex-caligraphic-bold"
:t.VARIANT.BOLDSCRIPT,"-tex-oldstyle":t.VARIANT.NORMAL,"-tex-oldstyle-bold":t.VARIANT
.BOLD,"-tex-mathit":t.VARIANT.ITALIC},toMathMLquote:function(e){e=String(e).split
("");for(var t=0,n=e.length;t<n;t++){var r=e[t].charCodeAt(0);if(r<=55295||57344<=
r)if(r>126||r<32&&r!==10&&r!==13&&r!==9)e[t]="&#x"+r.toString(16).toUpperCase()+";"
;else{var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[e[t]];i&&(e[t]=i)}else if(
t+1<n){var s=e[t+1].charCodeAt(0),o=(r-55296<<10)+(s-56320)+65536;e[t]="&#x"+o.toString
(16).toUpperCase()+";",e[t+1]="",t++}else e[t]=""}return e.join("")}}),t.math.Augment
({toMathML:function(e,t){var n;e==null&&(e=""),t&&t.originalText&&SETTINGS.semantics&&
(n=MathJax.InputJax[t.inputJax].annotationEncoding);var r=this.data[0]&&this.data
[0].data.length>1,i=this.type,s=this.toMathMLattributes(),o=[],u=e+(n?"  "+(r?"  "
:""):"")+"  ";for(var a=0,f=this.data.length;a<f;a++)this.data[a]?o.push(this.data
[a].toMathML(u)):o.push(u+"<mrow />");if(o.length===0||o.length===1&&o[0]===""){if(!
n)return"<"+i+s+" />";o.push(u+"<mrow />")}if(n){r&&(o.unshift(e+"    <mrow>"),o.
push(e+"    </mrow>")),o.unshift(e+"  <semantics>");var l=t.originalText.replace(/[&<>]/g
,function(e){return{">":"&gt;","<":"&lt;","&":"&amp;"}[e]});o.push(e+'    <annotation encoding="'+
n+'">'+l+"</annotation>"),o.push(e+"  </semantics>")}return e+"<"+i+s+">\n"+o.join
("\n")+"\n"+e+"</"+i+">"}}),t.msubsup.Augment({toMathML:function(e){var t=this.type
;this.data[this.sup]==null&&(t="msub"),this.data[this.sub]==null&&(t="msup");var n=
this.toMathMLattributes();delete this.data[0].inferred;var r=[];for(var i=0,s=this
.data.length;i<s;i++)this.data[i]&&r.push(this.data[i].toMathML(e+"  "));return e+"<"+
t+n+">\n"+r.join("\n")+"\n"+e+"</"+t+">"}}),t.munderover.Augment({toMathML:function(
e){var t=this.type;this.data[this.under]==null&&(t="mover"),this.data[this.over]==
null&&(t="munder");var n=this.toMathMLattributes();delete this.data[0].inferred;var r=
[];for(var i=0,s=this.data.length;i<s;i++)this.data[i]&&r.push(this.data[i].toMathML
(e+"  "));return e+"<"+t+n+">\n"+r.join("\n")+"\n"+e+"</"+t+">"}}),t.TeXAtom.Augment
({toMathML:function(e){var t=this.toMathMLattributes();return!t&&this.data[0].data
.length===1?e.substr(2)+this.data[0].toMathML(e):e+"<mrow"+t+">\n"+this.data[0].toMathML
(e+"  ")+"\n"+e+"</mrow>"}}),t.chars.Augment({toMathML:function(e){return(e||"")+
this.toMathMLquote(this.toString())}}),t.entity.Augment({toMathML:function(e){return(
e||"")+"&"+this.data[0]+";<!-- "+this.toString()+" -->"}}),t.xml.Augment({toMathML
:function(e){return(e||"")+this.toString()}}),MathJax.Hub.Register.StartupHook("TeX mathchoice Ready"
,function(){t.TeXmathchoice.Augment({toMathML:function(e){return this.Core().toMathML
(e)}})}),MathJax.Hub.Startup.signal.Post("toMathML Ready")}),MathJax.Ajax.loadComplete
("[MathJax]/extensions/toMathML.js"),function(e,t){var n="2.5.1",r=e.CombineConfig
("TeX.noErrors",{disabled:!1,multiLine:!0,inlineDelimiters:["",""],style:{"font-size"
:"90%","text-align":"left",color:"black",padding:"1px 3px",border:"1px solid"}}),
i=" ";MathJax.Extension["TeX/noErrors"]={version:n,config:r},e.Register.StartupHook
("TeX Jax Ready",function(){var t=MathJax.InputJax.TeX.formatError;MathJax.InputJax
.TeX.Augment({formatError:function(n,s,o,u){if(r.disabled)return t.apply(this,arguments
);var l=n.message.replace(/\n.*/,"");e.signal.Post(["TeX Jax - parse error",l,s,o
,u]);var h=r.inlineDelimiters,p=o||r.multiLine;return o||(s=h[0]+s+h[1]),p?s=s.replace
(/ /g,i):s=s.replace(/\n/g," "),MathJax.ElementJax.mml.merror(s).With({isError:!0
,multiLine:p})}})}),e.Register.StartupHook("HTML-CSS Jax Config",function(){e.Config
({"HTML-CSS":{styles:{".MathJax .noError":e.Insert({"vertical-align":e.Browser.isMSIE&&
r.multiLine?"-2px":""},r.style)}}})}),e.Register.StartupHook("HTML-CSS Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.OutputJax["HTML-CSS"],n=e.math
.prototype.toHTML,r=e.merror.prototype.toHTML;e.math.Augment({toHTML:function(e,t
){var r=this.data[0];return r&&r.data[0]&&r.data[0].isError?(e.style.fontSize="",
e=this.HTMLcreateSpan(e),e.bbox=r.data[0].toHTML(e).bbox):e=n.apply(this,arguments
),e}}),e.merror.Augment({toHTML:function(e){if(!this.isError)return r.apply(this,
arguments);e=this.HTMLcreateSpan(e),e.className="noError",this.multiLine&&(e.style
.display="inline-block");var n=this.data[0].data[0].data.join("").split(/\n/);for(
var i=0,s=n.length;i<s;i++)t.addText(e,n[i]),i!==s-1&&t.addElement(e,"br",{isMathJax
:!0});var o=t.getHD(e.parentNode),u=t.getW(e.parentNode);if(s>1){var a=(o.h+o.d)/2
,f=t.TeX.x_height/2;e.parentNode.style.verticalAlign=t.Em(o.d+(f-a)),o.h=f+a,o.d=
a-f}return e.bbox={h:o.h,d:o.d,w:u,lw:0,rw:u},e}})}),e.Register.StartupHook("SVG Jax Config"
,function(){e.Config({SVG:{styles:{".MathJax_SVG .noError":e.Insert({"vertical-align"
:e.Browser.isMSIE&&r.multiLine?"-2px":""},r.style)}}})}),e.Register.StartupHook("SVG Jax Ready"
,function(){var e=MathJax.ElementJax.mml,n=e.math.prototype.toSVG,r=e.merror.prototype
.toSVG;e.math.Augment({toSVG:function(e,t){var r=this.data[0];return r&&r.data[0]&&
r.data[0].isError?e=r.data[0].toSVG(e):e=n.apply(this,arguments),e}}),e.merror.Augment
({toSVG:function(e){if(!this.isError||this.Parent().type!=="math")return r.apply(
this,arguments);e=t.addElement(e,"span",{className:"noError",isMathJax:!0}),this.
multiLine&&(e.style.display="inline-block");var n=this.data[0].data[0].data.join(""
).split(/\n/);for(var i=0,s=n.length;i<s;i++)t.addText(e,n[i]),i!==s-1&&t.addElement
(e,"br",{isMathJax:!0});if(s>1){var o=e.offsetHeight/2;e.style.verticalAlign=-o+o/
s+"px"}return e}})}),e.Register.StartupHook("NativeMML Jax Ready",function(){var e=
MathJax.ElementJax.mml,t=MathJax.Extension["TeX/noErrors"].config,n=e.math.prototype
.toNativeMML,r=e.merror.prototype.toNativeMML;e.math.Augment({toNativeMML:function(
e){var t=this.data[0];return t&&t.data[0]&&t.data[0].isError?e=t.data[0].toNativeMML
(e):e=n.apply(this,arguments),e}}),e.merror.Augment({toNativeMML:function(e){if(!
this.isError)return r.apply(this,arguments);e=e.appendChild(document.createElement
("span"));var n=this.data[0].data[0].data.join("").split(/\n/);for(var i=0,s=n.length
;i<s;i++)e.appendChild(document.createTextNode(n[i])),i!==s-1&&e.appendChild(document
.createElement("br"));this.multiLine&&(e.style.display="inline-block",s>1&&(e.style
.verticalAlign="middle"));for(var o in t.style)if(t.style.hasOwnProperty(o)){var u=
o.replace(/-./g,function(e){return e.charAt(1).toUpperCase()});e.style[u]=t.style
[o]}return e}})}),e.Register.StartupHook("CommonHTML Jax Config",function(){e.Config
({CommonHTML:{styles:{".MathJax_CHTML .noError":e.Insert({"vertical-align":e.Browser
.isMSIE&&r.multiLine?"-2px":""},r.style)}}})}),e.Register.StartupHook("CommonHTML Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.HTML,n=e.merror.prototype.toCommonHTML
;e.merror.Augment({toCommonHTML:function(e){if(!this.isError)return n.apply(this,
arguments);e=this.CHTMLcreateSpan(e),e.className="noError",this.multiLine&&(e.style
.display="inline-block");var r=this.data[0].data[0].data.join("").split(/\n/);for(
var i=0,s=r.length;i<s;i++)t.addText(e,r[i]),i!==s-1&&t.addElement(e,"br",{isMathJax
:!0});return e}})}),e.Startup.signal.Post("TeX noErrors Ready")}(MathJax.Hub,MathJax
.HTML),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js"),MathJax.
Extension["TeX/noUndefined"]={version:"2.5.0",config:MathJax.Hub.CombineConfig("TeX.noUndefined"
,{disabled:!1,attributes:{mathcolor:"red"}})},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.Extension["TeX/noUndefined"].config,t=MathJax.ElementJax
.mml,n=MathJax.InputJax.TeX.Parse.prototype.csUndefined;MathJax.InputJax.TeX.Parse
.Augment({csUndefined:function(r){if(e.disabled)return n.apply(this,arguments);MathJax
.Hub.signal.Post(["TeX Jax - undefined control sequence",r]),this.Push(t.mtext(r)
.With(e.attributes))}}),MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready")}
),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js"),function(e
,t,n){var r,i=" ",s=function(e){return MathJax.Localization._.apply(MathJax.Localization
,[["TeX",e]].concat([].slice.call(arguments,1)))},o=MathJax.Object.Subclass({Init
:function(e,t){this.global={isInner:t},this.data=[u.start(this.global)],e&&(this.
data[0].env=e),this.env=this.data[0].env},Push:function(){var e,t,n,i;for(e=0,t=arguments
.length;e<t;e++){n=arguments[e];if(!n)continue;n instanceof r.mbase&&(n=u.mml(n))
,n.global=this.global,i=this.data.length?this.Top().checkItem(n):!0;if(i instanceof 
Array)this.Pop(),this.Push.apply(this,i);else if(i instanceof u)this.Pop(),this.Push
(i);else if(i){this.data.push(n);if(n.env){for(var s in this.env)this.env.hasOwnProperty
(s)&&(n.env[s]=this.env[s]);this.env=n.env}else n.env=this.env}}},Pop:function(){
var e=this.data.pop();return e.isOpen||delete e.env,this.env=this.data.length?this
.Top().env:{},e},Top:function(e){return e==null&&(e=1),this.data.length<e?null:this
.data[this.data.length-e]},Prev:function(e){var t=this.Top();return e?t.data[t.data
.length-1]:t.Pop()},toString:function(){return"stack[\n  "+this.data.join("\n  ")+"\n]"
}}),u=o.Item=MathJax.Object.Subclass({type:"base",endError:["ExtraOpenMissingClose"
,"Extra open brace or missing close brace"],closeError:["ExtraCloseMissingOpen","Extra close brace or missing open brace"
],rightError:["MissingLeftExtraRight","Missing \\left or extra \\right"],Init:function(
){this.isOpen&&(this.env={}),this.data=[],this.Push.apply(this,arguments)},Push:function(
){this.data.push.apply(this.data,arguments)},Pop:function(){return this.data.pop(
)},mmlData:function(e,t){return e==null&&(e=!0),this.data.length===1&&!t?this.data
[0]:r.mrow.apply(r,this.data).With(e?{inferred:!0}:{})},checkItem:function(t){t.type==="over"&&
this.isOpen&&(t.num=this.mmlData(!1),this.data=[]);if(t.type==="cell"&&this.isOpen
){if(t.linebreak)return!1;e.Error(["Misplaced","Misplaced %1",t.name])}return t.isClose&&
this[t.type+"Error"]&&e.Error(this[t.type+"Error"]),t.isNotStack?(this.Push(t.data
[0]),!1):!0},With:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);
return this},toString:function(){return this.type+"["+this.data.join("; ")+"]"}})
;u.start=u.Subclass({type:"start",isOpen:!0,Init:function(e){this.SUPER(arguments
).Init.call(this),this.global=e},checkItem:function(e){return e.type==="stop"?u.mml
(this.mmlData()):this.SUPER(arguments).checkItem.call(this,e)}}),u.stop=u.Subclass
({type:"stop",isClose:!0}),u.open=u.Subclass({type:"open",isOpen:!0,stopError:["ExtraOpenMissingClose"
,"Extra open brace or missing close brace"],checkItem:function(e){if(e.type==="close"
){var t=this.mmlData();return u.mml(r.TeXAtom(t))}return this.SUPER(arguments).checkItem
.call(this,e)}}),u.close=u.Subclass({type:"close",isClose:!0}),u.prime=u.Subclass
({type:"prime",checkItem:function(e){return this.data[0].type!=="msubsup"?[r.msup
(this.data[0],this.data[1]),e]:(this.data[0].SetData(this.data[0].sup,this.data[1
]),[this.data[0],e])}}),u.subsup=u.Subclass({type:"subsup",stopError:["MissingScript"
,"Missing superscript or subscript argument"],supError:["MissingOpenForSup","Missing open brace for superscript"
],subError:["MissingOpenForSub","Missing open brace for subscript"],checkItem:function(
t){if(t.type==="open"||t.type==="left")return!0;if(t.type==="mml")return this.primes&&
(this.position!==2?this.data[0].SetData(2,this.primes):t.data[0]=r.mrow(this.primes
.With({variantForm:!0}),t.data[0])),this.data[0].SetData(this.position,t.data[0])
,this.movesupsub!=null&&(this.data[0].movesupsub=this.movesupsub),u.mml(this.data
[0]);this.SUPER(arguments).checkItem.call(this,t)&&e.Error(this[["","subError","supError"
][this.position]])},Pop:function(){}}),u.over=u.Subclass({type:"over",isClose:!0,
name:"\\over",checkItem:function(t,n){t.type==="over"&&e.Error(["AmbiguousUseOf","Ambiguous use of %1"
,t.name]);if(t.isClose){var i=r.mfrac(this.num,this.mmlData(!1));this.thickness!=
null&&(i.linethickness=this.thickness);if(this.open||this.close)i.texWithDelims=!0
,i=e.fixedFence(this.open,i,this.close);return[u.mml(i),t]}return this.SUPER(arguments
).checkItem.call(this,t)},toString:function(){return"over["+this.num+" / "+this.data
.join("; ")+"]"}}),u.left=u.Subclass({type:"left",isOpen:!0,delim:"(",stopError:["ExtraLeftMissingRight"
,"Extra \\left or missing \\right"],checkItem:function(t){return t.type==="right"?
u.mml(e.fenced(this.delim,this.mmlData(),t.delim)):this.SUPER(arguments).checkItem
.call(this,t)}}),u.right=u.Subclass({type:"right",isClose:!0,delim:")"}),u.begin=
u.Subclass({type:"begin",isOpen:!0,checkItem:function(t){return t.type==="end"?(t
.name!==this.name&&e.Error(["EnvBadEnd","\\begin{%1} ended with \\end{%2}",this.name
,t.name]),this.end?this.parse[this.end].call(this.parse,this,this.data):u.mml(this
.mmlData())):(t.type==="stop"&&e.Error(["EnvMissingEnd","Missing \\end{%1}",this.
name]),this.SUPER(arguments).checkItem.call(this,t))}}),u.end=u.Subclass({type:"end"
,isClose:!0}),u.style=u.Subclass({type:"style",checkItem:function(e){if(!e.isClose
)return this.SUPER(arguments).checkItem.call(this,e);var t=r.mstyle.apply(r,this.
data).With(this.styles);return[u.mml(t),e]}}),u.position=u.Subclass({type:"position"
,checkItem:function(t){t.isClose&&e.Error(["MissingBoxFor","Missing box for %1",this
.name]);if(t.isNotStack){var n=t.mmlData();switch(this.move){case"vertical":return n=
r.mpadded(n).With({height:this.dh,depth:this.dd,voffset:this.dh}),[u.mml(n)];case"horizontal"
:return[u.mml(this.left),t,u.mml(this.right)]}}return this.SUPER(arguments).checkItem
.call(this,t)}}),u.array=u.Subclass({type:"array",isOpen:!0,arraydef:{},Init:function(
){this.table=[],this.row=[],this.env={},this.frame=[],this.hfill=[],this.SUPER(arguments
).Init.apply(this,arguments)},checkItem:function(t){if(t.isClose&&t.type!=="over"
){if(t.isEntry)return this.EndEntry(),this.clearEnv(),!1;if(t.isCR)return this.EndEntry
(),this.EndRow(),this.clearEnv(),!1;this.EndTable(),this.clearEnv();var n=r.mtable
.apply(r,this.table).With(this.arraydef);if(this.frame.length===4)n.frame=this.frame
.dashed?"dashed":"solid";else if(this.frame.length){n.hasFrame=!0,this.arraydef.rowlines&&
(this.arraydef.rowlines=this.arraydef.rowlines.replace(/none( none)+$/,"none")),n=
r.menclose(n).With({notation:this.frame.join(" "),isFrame:!0});if((this.arraydef.
columnlines||"none")!="none"||(this.arraydef.rowlines||"none")!="none")n.padding=0
}if(this.open||this.close)n=e.fenced(this.open,n,this.close);n=u.mml(n);if(this.requireClose
){if(t.type==="close")return n;e.Error(["MissingCloseBrace","Missing close brace"
])}return[n,t]}return this.SUPER(arguments).checkItem.call(this,t)},EndEntry:function(
){var e=r.mtd.apply(r,this.data);this.hfill.length&&(this.hfill[0]===0&&(e.columnalign="right"
),this.hfill[this.hfill.length-1]===this.data.length&&(e.columnalign=e.columnalign?"center"
:"left")),this.row.push(e),this.data=[],this.hfill=[]},EndRow:function(){var e=r.
mtr;this.isNumbered&&this.row.length===3&&(this.row.unshift(this.row.pop()),e=r.mlabeledtr
),this.table.push(e.apply(r,this.row)),this.row=[]},EndTable:function(){if(this.data
.length||this.row.length)this.EndEntry(),this.EndRow();this.checkLines()},checkLines
:function(){if(this.arraydef.rowlines){var e=this.arraydef.rowlines.split(/ /);e.
length===this.table.length?(this.frame.push("bottom"),e.pop(),this.arraydef.rowlines=
e.join(" ")):e.length<this.table.length-1&&(this.arraydef.rowlines+=" none")}if(this
.rowspacing){var t=this.arraydef.rowspacing.split(/ /);while(t.length<this.table.
length)t.push(this.rowspacing+"em");this.arraydef.rowspacing=t.join(" ")}},clearEnv
:function(){for(var e in this.env)this.env.hasOwnProperty(e)&&delete this.env[e]}
}),u.cell=u.Subclass({type:"cell",isClose:!0}),u.mml=u.Subclass({type:"mml",isNotStack
:!0,Add:function(){return this.data.push.apply(this.data,arguments),this}}),u.fn=
u.Subclass({type:"fn",checkItem:function(e){if(this.data[0]){if(e.type!=="mml"||!
e.data[0])return[this.data[0],e];if(e.data[0].isa(r.mspace))return[this.data[0],e
];var t=e.data[0];return t.isEmbellished()&&(t=t.CoreMO()),[0,0,1,1,0,1,1,0,0,0][
t.Get("texClass")]?[this.data[0],e]:[this.data[0],r.mo(r.entity("#x2061")).With({
texClass:r.TEXCLASS.NONE}),e]}return this.SUPER(arguments).checkItem.apply(this,arguments
)}}),u.not=u.Subclass({type:"not",checkItem:function(e){var t,n;if(e.type==="open"||
e.type==="left")return!0;if(e.type==="mml"&&e.data[0].type.match(/^(mo|mi|mtext)$/
)){t=e.data[0],n=t.data.join("");if(n.length===1&&!t.movesupsub)return n=u.not.remap
[n.charCodeAt(0)],n?t.SetData(0,r.chars(String.fromCharCode(n))):t.Append(r.chars
("̸")),e}return t=r.mpadded(r.mtext("⧸")).With({width:0}),t=r.TeXAtom(t).With({texClass
:r.TEXCLASS.REL}),[t,e]}}),u.not.remap={8592:8602,8594:8603,8596:8622,8656:8653,8658
:8655,8660:8654,8712:8713,8715:8716,8739:8740,8741:8742,8764:8769,126:8769,8771:8772
,8773:8775,8776:8777,8781:8813,61:8800,8801:8802,60:8814,62:8815,8804:8816,8805:8817
,8818:8820,8819:8821,8822:8824,8823:8825,8826:8832,8827:8833,8834:8836,8835:8837,8838
:8840,8839:8841,8866:8876,8872:8877,8873:8878,8875:8879,8828:8928,8829:8929,8849:8930
,8850:8931,8882:8938,8883:8939,8884:8940,8885:8941,8707:8708},u.dots=u.Subclass({
type:"dots",checkItem:function(e){if(e.type==="open"||e.type==="left")return!0;var t=
this.ldots;if(e.type==="mml"&&e.data[0].isEmbellished()){var n=e.data[0].CoreMO()
.Get("texClass");if(n===r.TEXCLASS.BIN||n===r.TEXCLASS.REL)t=this.cdots}return[t,
e]}});var a={Add:function(e,t,n){t||(t=this);for(var r in e)if(e.hasOwnProperty(r
))if(typeof e[r]!="object"||e[r]instanceof Array||typeof t[r]!="object"&&typeof t
[r]!="function"){if(!t[r]||!t[r].isUser||!n)t[r]=e[r]}else this.Add(e[r],t[r],e[r
],n);return t}},f=function(){r=MathJax.ElementJax.mml,t.Insert(a,{letter:/[a-z]/i
,digit:/[0-9.]/,number:/^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/,special
:{"\\":"ControlSequence","{":"Open","}":"Close","~":"Tilde","^":"Superscript",_:"Subscript"
," ":"Space","	":"Space","\r":"Space","\n":"Space","'":"Prime","%":"Comment","&":"Entry"
,"#":"Hash"," ":"Space","’":"Prime"},remap:{"-":"2212","*":"2217","`":"2018"},mathchar0mi
:{alpha:"03B1",beta:"03B2",gamma:"03B3",delta:"03B4",epsilon:"03F5",zeta:"03B6",eta
:"03B7",theta:"03B8",iota:"03B9",kappa:"03BA",lambda:"03BB",mu:"03BC",nu:"03BD",xi
:"03BE",omicron:"03BF",pi:"03C0",rho:"03C1",sigma:"03C3",tau:"03C4",upsilon:"03C5"
,phi:"03D5",chi:"03C7",psi:"03C8",omega:"03C9",varepsilon:"03B5",vartheta:"03D1",
varpi:"03D6",varrho:"03F1",varsigma:"03C2",varphi:"03C6",S:["00A7",{mathvariant:r
.VARIANT.NORMAL}],aleph:["2135",{mathvariant:r.VARIANT.NORMAL}],hbar:["210F",{variantForm
:!0}],imath:"0131",jmath:"0237",ell:"2113",wp:["2118",{mathvariant:r.VARIANT.NORMAL
}],Re:["211C",{mathvariant:r.VARIANT.NORMAL}],Im:["2111",{mathvariant:r.VARIANT.NORMAL
}],partial:["2202",{mathvariant:r.VARIANT.NORMAL}],infty:["221E",{mathvariant:r.VARIANT
.NORMAL}],prime:["2032",{mathvariant:r.VARIANT.NORMAL,variantForm:!0}],emptyset:["2205"
,{mathvariant:r.VARIANT.NORMAL}],nabla:["2207",{mathvariant:r.VARIANT.NORMAL}],top
:["22A4",{mathvariant:r.VARIANT.NORMAL}],bot:["22A5",{mathvariant:r.VARIANT.NORMAL
}],angle:["2220",{mathvariant:r.VARIANT.NORMAL}],triangle:["25B3",{mathvariant:r.
VARIANT.NORMAL}],backslash:["2216",{mathvariant:r.VARIANT.NORMAL,variantForm:!0}]
,forall:["2200",{mathvariant:r.VARIANT.NORMAL}],exists:["2203",{mathvariant:r.VARIANT
.NORMAL}],neg:["00AC",{mathvariant:r.VARIANT.NORMAL}],lnot:["00AC",{mathvariant:r
.VARIANT.NORMAL}],flat:["266D",{mathvariant:r.VARIANT.NORMAL}],natural:["266E",{mathvariant
:r.VARIANT.NORMAL}],sharp:["266F",{mathvariant:r.VARIANT.NORMAL}],clubsuit:["2663"
,{mathvariant:r.VARIANT.NORMAL}],diamondsuit:["2662",{mathvariant:r.VARIANT.NORMAL
}],heartsuit:["2661",{mathvariant:r.VARIANT.NORMAL}],spadesuit:["2660",{mathvariant
:r.VARIANT.NORMAL}]},mathchar0mo:{surd:"221A",coprod:["2210",{texClass:r.TEXCLASS
.OP,movesupsub:!0}],bigvee:["22C1",{texClass:r.TEXCLASS.OP,movesupsub:!0}],bigwedge
:["22C0",{texClass:r.TEXCLASS.OP,movesupsub:!0}],biguplus:["2A04",{texClass:r.TEXCLASS
.OP,movesupsub:!0}],bigcap:["22C2",{texClass:r.TEXCLASS.OP,movesupsub:!0}],bigcup
:["22C3",{texClass:r.TEXCLASS.OP,movesupsub:!0}],"int":["222B",{texClass:r.TEXCLASS
.OP}],intop:["222B",{texClass:r.TEXCLASS.OP,movesupsub:!0,movablelimits:!0}],iint
:["222C",{texClass:r.TEXCLASS.OP}],iiint:["222D",{texClass:r.TEXCLASS.OP}],prod:["220F"
,{texClass:r.TEXCLASS.OP,movesupsub:!0}],sum:["2211",{texClass:r.TEXCLASS.OP,movesupsub
:!0}],bigotimes:["2A02",{texClass:r.TEXCLASS.OP,movesupsub:!0}],bigoplus:["2A01",
{texClass:r.TEXCLASS.OP,movesupsub:!0}],bigodot:["2A00",{texClass:r.TEXCLASS.OP,movesupsub
:!0}],oint:["222E",{texClass:r.TEXCLASS.OP}],bigsqcup:["2A06",{texClass:r.TEXCLASS
.OP,movesupsub:!0}],smallint:["222B",{largeop:!1}],triangleleft:"25C3",triangleright
:"25B9",bigtriangleup:"25B3",bigtriangledown:"25BD",wedge:"2227",land:"2227",vee:"2228"
,lor:"2228",cap:"2229",cup:"222A",ddagger:"2021",dagger:"2020",sqcap:"2293",sqcup
:"2294",uplus:"228E",amalg:"2A3F",diamond:"22C4",bullet:"2219",wr:"2240",div:"00F7"
,odot:["2299",{largeop:!1}],oslash:["2298",{largeop:!1}],otimes:["2297",{largeop:!1
}],ominus:["2296",{largeop:!1}],oplus:["2295",{largeop:!1}],mp:"2213",pm:"00B1",circ
:"2218",bigcirc:"25EF",setminus:["2216",{variantForm:!0}],cdot:"22C5",ast:"2217",
times:"00D7",star:"22C6",propto:"221D",sqsubseteq:"2291",sqsupseteq:"2292",parallel
:"2225",mid:"2223",dashv:"22A3",vdash:"22A2",leq:"2264",le:"2264",geq:"2265",ge:"2265"
,lt:"003C",gt:"003E",succ:"227B",prec:"227A",approx:"2248",succeq:"2AB0",preceq:"2AAF"
,supset:"2283",subset:"2282",supseteq:"2287",subseteq:"2286","in":"2208",ni:"220B"
,notin:"2209",owns:"220B",gg:"226B",ll:"226A",sim:"223C",simeq:"2243",perp:"22A5"
,equiv:"2261",asymp:"224D",smile:"2323",frown:"2322",ne:"2260",neq:"2260",cong:"2245"
,doteq:"2250",bowtie:"22C8",models:"22A8",notChar:"29F8",Leftrightarrow:"21D4",Leftarrow
:"21D0",Rightarrow:"21D2",leftrightarrow:"2194",leftarrow:"2190",gets:"2190",rightarrow
:"2192",to:"2192",mapsto:"21A6",leftharpoonup:"21BC",leftharpoondown:"21BD",rightharpoonup
:"21C0",rightharpoondown:"21C1",nearrow:"2197",searrow:"2198",nwarrow:"2196",swarrow
:"2199",rightleftharpoons:"21CC",hookrightarrow:"21AA",hookleftarrow:"21A9",longleftarrow
:"27F5",Longleftarrow:"27F8",longrightarrow:"27F6",Longrightarrow:"27F9",Longleftrightarrow
:"27FA",longleftrightarrow:"27F7",longmapsto:"27FC",ldots:"2026",cdots:"22EF",vdots
:"22EE",ddots:"22F1",dotsc:"2026",dotsb:"22EF",dotsm:"22EF",dotsi:"22EF",dotso:"2026"
,ldotp:["002E",{texClass:r.TEXCLASS.PUNCT}],cdotp:["22C5",{texClass:r.TEXCLASS.PUNCT
}],colon:["003A",{texClass:r.TEXCLASS.PUNCT}]},mathchar7:{Gamma:"0393",Delta:"0394"
,Theta:"0398",Lambda:"039B",Xi:"039E",Pi:"03A0",Sigma:"03A3",Upsilon:"03A5",Phi:"03A6"
,Psi:"03A8",Omega:"03A9",_:"005F","#":"0023",$:"0024","%":"0025","&":"0026",And:"0026"
},delimiter:{"(":"(",")":")","[":"[","]":"]","<":"27E8",">":"27E9","\\lt":"27E8","\\gt"
:"27E9","/":"/","|":["|",{texClass:r.TEXCLASS.ORD}],".":"","\\\\":"\\","\\lmoustache"
:"23B0","\\rmoustache":"23B1","\\lgroup":"27EE","\\rgroup":"27EF","\\arrowvert":"23D0"
,"\\Arrowvert":"2016","\\bracevert":"23AA","\\Vert":["2225",{texClass:r.TEXCLASS.
ORD}],"\\|":["2225",{texClass:r.TEXCLASS.ORD}],"\\vert":["|",{texClass:r.TEXCLASS
.ORD}],"\\uparrow":"2191","\\downarrow":"2193","\\updownarrow":"2195","\\Uparrow"
:"21D1","\\Downarrow":"21D3","\\Updownarrow":"21D5","\\backslash":"\\","\\rangle"
:"27E9","\\langle":"27E8","\\rbrace":"}","\\lbrace":"{","\\}":"}","\\{":"{","\\rceil"
:"2309","\\lceil":"2308","\\rfloor":"230B","\\lfloor":"230A","\\lbrack":"[","\\rbrack"
:"]"},macros:{displaystyle:["SetStyle","D",!0,0],textstyle:["SetStyle","T",!1,0],
scriptstyle:["SetStyle","S",!1,1],scriptscriptstyle:["SetStyle","SS",!1,2],rm:["SetFont"
,r.VARIANT.NORMAL],mit:["SetFont",r.VARIANT.ITALIC],oldstyle:["SetFont",r.VARIANT
.OLDSTYLE],cal:["SetFont",r.VARIANT.CALIGRAPHIC],it:["SetFont","-tex-mathit"],bf:
["SetFont",r.VARIANT.BOLD],bbFont:["SetFont",r.VARIANT.DOUBLESTRUCK],scr:["SetFont"
,r.VARIANT.SCRIPT],frak:["SetFont",r.VARIANT.FRAKTUR],sf:["SetFont",r.VARIANT.SANSSERIF
],tt:["SetFont",r.VARIANT.MONOSPACE],tiny:["SetSize",.5],Tiny:["SetSize",.6],scriptsize
:["SetSize",.7],small:["SetSize",.85],normalsize:["SetSize",1],large:["SetSize",1.2
],Large:["SetSize",1.44],LARGE:["SetSize",1.73],huge:["SetSize",2.07],Huge:["SetSize"
,2.49],arcsin:["NamedFn"],arccos:["NamedFn"],arctan:["NamedFn"],arg:["NamedFn"],cos
:["NamedFn"],cosh:["NamedFn"],cot:["NamedFn"],coth:["NamedFn"],csc:["NamedFn"],deg
:["NamedFn"],det:"NamedOp",dim:["NamedFn"],exp:["NamedFn"],gcd:"NamedOp",hom:["NamedFn"
],inf:"NamedOp",ker:["NamedFn"],lg:["NamedFn"],lim:"NamedOp",liminf:["NamedOp","lim&thinsp;inf"
],limsup:["NamedOp","lim&thinsp;sup"],ln:["NamedFn"],log:["NamedFn"],max:"NamedOp"
,min:"NamedOp",Pr:"NamedOp",sec:["NamedFn"],sin:["NamedFn"],sinh:["NamedFn"],sup:"NamedOp"
,tan:["NamedFn"],tanh:["NamedFn"],limits:["Limits",1],nolimits:["Limits",0],overline
:["UnderOver","00AF"],underline:["UnderOver","005F"],overbrace:["UnderOver","23DE"
,1],underbrace:["UnderOver","23DF",1],overrightarrow:["UnderOver","2192"],underrightarrow
:["UnderOver","2192"],overleftarrow:["UnderOver","2190"],underleftarrow:["UnderOver"
,"2190"],overleftrightarrow:["UnderOver","2194"],underleftrightarrow:["UnderOver"
,"2194"],overset:"Overset",underset:"Underset",stackrel:["Macro","\\mathrel{\\mathop{#2}\\limits^{#1}}"
,2],over:"Over",overwithdelims:"Over",atop:"Over",atopwithdelims:"Over",above:"Over"
,abovewithdelims:"Over",brace:["Over","{","}"],brack:["Over","[","]"],choose:["Over"
,"(",")"],frac:"Frac",sqrt:"Sqrt",root:"Root",uproot:["MoveRoot","upRoot"],leftroot
:["MoveRoot","leftRoot"],left:"LeftRight",right:"LeftRight",middle:"Middle",llap:"Lap"
,rlap:"Lap",raise:"RaiseLower",lower:"RaiseLower",moveleft:"MoveLeftRight",moveright
:"MoveLeftRight",",":["Spacer",r.LENGTH.THINMATHSPACE],":":["Spacer",r.LENGTH.MEDIUMMATHSPACE
],">":["Spacer",r.LENGTH.MEDIUMMATHSPACE],";":["Spacer",r.LENGTH.THICKMATHSPACE],"!"
:["Spacer",r.LENGTH.NEGATIVETHINMATHSPACE],enspace:["Spacer",".5em"],quad:["Spacer"
,"1em"],qquad:["Spacer","2em"],thinspace:["Spacer",r.LENGTH.THINMATHSPACE],negthinspace
:["Spacer",r.LENGTH.NEGATIVETHINMATHSPACE],hskip:"Hskip",hspace:"Hskip",kern:"Hskip"
,mskip:"Hskip",mspace:"Hskip",mkern:"Hskip",Rule:["Rule"],Space:["Rule","blank"],
big:["MakeBig",r.TEXCLASS.ORD,.85],Big:["MakeBig",r.TEXCLASS.ORD,1.15],bigg:["MakeBig"
,r.TEXCLASS.ORD,1.45],Bigg:["MakeBig",r.TEXCLASS.ORD,1.75],bigl:["MakeBig",r.TEXCLASS
.OPEN,.85],Bigl:["MakeBig",r.TEXCLASS.OPEN,1.15],biggl:["MakeBig",r.TEXCLASS.OPEN
,1.45],Biggl:["MakeBig",r.TEXCLASS.OPEN,1.75],bigr:["MakeBig",r.TEXCLASS.CLOSE,.85
],Bigr:["MakeBig",r.TEXCLASS.CLOSE,1.15],biggr:["MakeBig",r.TEXCLASS.CLOSE,1.45],
Biggr:["MakeBig",r.TEXCLASS.CLOSE,1.75],bigm:["MakeBig",r.TEXCLASS.REL,.85],Bigm:
["MakeBig",r.TEXCLASS.REL,1.15],biggm:["MakeBig",r.TEXCLASS.REL,1.45],Biggm:["MakeBig"
,r.TEXCLASS.REL,1.75],mathord:["TeXAtom",r.TEXCLASS.ORD],mathop:["TeXAtom",r.TEXCLASS
.OP],mathopen:["TeXAtom",r.TEXCLASS.OPEN],mathclose:["TeXAtom",r.TEXCLASS.CLOSE],
mathbin:["TeXAtom",r.TEXCLASS.BIN],mathrel:["TeXAtom",r.TEXCLASS.REL],mathpunct:["TeXAtom"
,r.TEXCLASS.PUNCT],mathinner:["TeXAtom",r.TEXCLASS.INNER],vcenter:["TeXAtom",r.TEXCLASS
.VCENTER],mathchoice:["Extension","mathchoice"],buildrel:"BuildRel",hbox:["HBox",0
],text:"HBox",mbox:["HBox",0],fbox:"FBox",strut:"Strut",mathstrut:["Macro","\\vphantom{(}"
],phantom:"Phantom",vphantom:["Phantom",1,0],hphantom:["Phantom",0,1],smash:"Smash"
,acute:["Accent","00B4"],grave:["Accent","0060"],ddot:["Accent","00A8"],tilde:["Accent"
,"007E"],bar:["Accent","00AF"],breve:["Accent","02D8"],check:["Accent","02C7"],hat
:["Accent","005E"],vec:["Accent","2192"],dot:["Accent","02D9"],widetilde:["Accent"
,"007E",1],widehat:["Accent","005E",1],matrix:"Matrix",array:"Matrix",pmatrix:["Matrix"
,"(",")"],cases:["Matrix","{","","left left",null,".1em",null,!0],eqalign:["Matrix"
,null,null,"right left",r.LENGTH.THICKMATHSPACE,".5em","D"],displaylines:["Matrix"
,null,null,"center",null,".5em","D"],cr:"Cr","\\":"CrLaTeX",newline:"Cr",hline:["HLine"
,"solid"],hdashline:["HLine","dashed"],eqalignno:["Matrix",null,null,"right left"
,r.LENGTH.THICKMATHSPACE,".5em","D",null,"right"],leqalignno:["Matrix",null,null,"right left"
,r.LENGTH.THICKMATHSPACE,".5em","D",null,"left"],hfill:"HFill",hfil:"HFill",hfilll
:"HFill",bmod:["Macro",'\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'
],pmod:["Macro","\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}",1],mod:["Macro","\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1"
,1],pod:["Macro","\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)",1
],iff:["Macro","\\;\\Longleftrightarrow\\;"],skew:["Macro","{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}"
,3],mathcal:["Macro","{\\cal #1}",1],mathscr:["Macro","{\\scr #1}",1],mathrm:["Macro"
,"{\\rm #1}",1],mathbf:["Macro","{\\bf #1}",1],mathbb:["Macro","{\\bbFont #1}",1]
,Bbb:["Macro","{\\bbFont #1}",1],mathit:["Macro","{\\it #1}",1],mathfrak:["Macro"
,"{\\frak #1}",1],mathsf:["Macro","{\\sf #1}",1],mathtt:["Macro","{\\tt #1}",1],textrm
:["Macro","\\mathord{\\rm\\text{#1}}",1],textit:["Macro","\\mathord{\\it\\text{#1}}"
,1],textbf:["Macro","\\mathord{\\bf\\text{#1}}",1],textsf:["Macro","\\mathord{\\sf\\text{#1}}"
,1],texttt:["Macro","\\mathord{\\tt\\text{#1}}",1],pmb:["Macro","\\rlap{#1}\\kern1px{#1}"
,1],TeX:["Macro","T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],LaTeX:["Macro","L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"
]," ":["Macro","\\text{ }"],not:"Not",dots:"Dots",space:"Tilde"," ":"Tilde",begin
:"BeginEnd",end:"BeginEnd",newcommand:["Extension","newcommand"],renewcommand:["Extension"
,"newcommand"],newenvironment:["Extension","newcommand"],renewenvironment:["Extension"
,"newcommand"],def:["Extension","newcommand"],let:["Extension","newcommand"],verb
:["Extension","verb"],boldsymbol:["Extension","boldsymbol"],tag:["Extension","AMSmath"
],notag:["Extension","AMSmath"],label:["Extension","AMSmath"],ref:["Extension","AMSmath"
],eqref:["Extension","AMSmath"],nonumber:["Macro","\\notag"],unicode:["Extension"
,"unicode"],color:"Color",href:["Extension","HTML"],"class":["Extension","HTML"],
style:["Extension","HTML"],cssId:["Extension","HTML"],bbox:["Extension","bbox"],mmlToken
:"MmlToken",require:"Require"},environment:{array:["AlignedArray"],matrix:["Array"
,null,null,null,"c"],pmatrix:["Array",null,"(",")","c"],bmatrix:["Array",null,"["
,"]","c"],Bmatrix:["Array",null,"\\{","\\}","c"],vmatrix:["Array",null,"\\vert","\\vert"
,"c"],Vmatrix:["Array",null,"\\Vert","\\Vert","c"],cases:["Array",null,"\\{",".","ll"
,null,".2em","T"],equation:[null,"Equation"],"equation*":[null,"Equation"],eqnarray
:["ExtensionEnv",null,"AMSmath"],"eqnarray*":["ExtensionEnv",null,"AMSmath"],align
:["ExtensionEnv",null,"AMSmath"],"align*":["ExtensionEnv",null,"AMSmath"],aligned
:["ExtensionEnv",null,"AMSmath"],multline:["ExtensionEnv",null,"AMSmath"],"multline*"
:["ExtensionEnv",null,"AMSmath"],split:["ExtensionEnv",null,"AMSmath"],gather:["ExtensionEnv"
,null,"AMSmath"],"gather*":["ExtensionEnv",null,"AMSmath"],gathered:["ExtensionEnv"
,null,"AMSmath"],alignat:["ExtensionEnv",null,"AMSmath"],"alignat*":["ExtensionEnv"
,null,"AMSmath"],alignedat:["ExtensionEnv",null,"AMSmath"]},p_height:1.2/.85});if(
this.config.Macros){var e=this.config.Macros;for(var n in e)e.hasOwnProperty(n)&&
(typeof e[n]=="string"?a.macros[n]=["Macro",e[n]]:a.macros[n]=["Macro"].concat(e[
n]),a.macros[n].isUser=!0)}},l=MathJax.Object.Subclass({Init:function(t,n){this.string=
t,this.i=0,this.macroCount=0;var r;if(n){r={};for(var i in n)n.hasOwnProperty(i)&&
(r[i]=n[i])}this.stack=e.Stack(r,!!n),this.Parse(),this.Push(u.stop())},Parse:function(
){var e,t;while(this.i<this.string.length)e=this.string.charAt(this.i++),t=e.charCodeAt
(0),t>=55296&&t<56320&&(e+=this.string.charAt(this.i++)),a.special[e]?this[a.special
[e]](e):a.letter.test(e)?this.Variable(e):a.digit.test(e)?this.Number(e):this.Other
(e)},Push:function(){this.stack.Push.apply(this.stack,arguments)},mml:function(){
return this.stack.Top().type!=="mml"?null:this.stack.Top().data[0]},mmlToken:function(
e){return e},ControlSequence:function(e){var t=this.GetCS(),n=this.csFindMacro(t)
;if(n){n instanceof Array||(n=[n]);var r=n[0];r instanceof Function||(r=this[r]),
r.apply(this,[e+t].concat(n.slice(1)))}else a.mathchar0mi[t]?this.csMathchar0mi(t
,a.mathchar0mi[t]):a.mathchar0mo[t]?this.csMathchar0mo(t,a.mathchar0mo[t]):a.mathchar7
[t]?this.csMathchar7(t,a.mathchar7[t]):a.delimiter["\\"+t]!=null?this.csDelimiter
(t,a.delimiter["\\"+t]):this.csUndefined(e+t)},csFindMacro:function(e){return a.macros
[e]},csMathchar0mi:function(e,t){var n={mathvariant:r.VARIANT.ITALIC};t instanceof 
Array&&(n=t[1],t=t[0]),this.Push(this.mmlToken(r.mi(r.entity("#x"+t)).With(n)))},
csMathchar0mo:function(e,t){var n={stretchy:!1};t instanceof Array&&(n=t[1],n.stretchy=!1
,t=t[0]),this.Push(this.mmlToken(r.mo(r.entity("#x"+t)).With(n)))},csMathchar7:function(
e,t){var n={mathvariant:r.VARIANT.NORMAL};t instanceof Array&&(n=t[1],t=t[0]),this
.stack.env.font&&(n.mathvariant=this.stack.env.font),this.Push(this.mmlToken(r.mi
(r.entity("#x"+t)).With(n)))},csDelimiter:function(e,t){var n={};t instanceof Array&&
(n=t[1],t=t[0]),t.length===4?t=r.entity("#x"+t):t=r.chars(t),this.Push(this.mmlToken
(r.mo(t).With({fence:!1,stretchy:!1}).With(n)))},csUndefined:function(t){e.Error(
["UndefinedControlSequence","Undefined control sequence %1",t])},Variable:function(
e){var t={};this.stack.env.font&&(t.mathvariant=this.stack.env.font),this.Push(this
.mmlToken(r.mi(r.chars(e)).With(t)))},Number:function(e){var t,n=this.string.slice
(this.i-1).match(a.number);n?(t=r.mn(n[0].replace(/[{}]/g,"")),this.i+=n[0].length-1
):t=r.mo(r.chars(e)),this.stack.env.font&&(t.mathvariant=this.stack.env.font),this
.Push(this.mmlToken(t))},Open:function(e){this.Push(u.open())},Close:function(e){
this.Push(u.close())},Tilde:function(e){this.Push(r.mtext(r.chars(i)))},Space:function(
e){},Superscript:function(t){this.GetNext().match(/\d/)&&(this.string=this.string
.substr(0,this.i+1)+" "+this.string.substr(this.i+1));var n,i,s=this.stack.Top();
s.type==="prime"?(i=s.data[0],n=s.data[1],this.stack.Pop()):(i=this.stack.Prev(),
i||(i=r.mi(""))),i.isEmbellishedWrapper&&(i=i.data[0].data[0]);var o=i.movesupsub
,a=i.sup;(i.type==="msubsup"&&i.data[i.sup]||i.type==="munderover"&&i.data[i.over
]&&!i.subsupOK)&&e.Error(["DoubleExponent","Double exponent: use braces to clarify"
]);if(i.type!=="msubsup")if(o){if(i.type!=="munderover"||i.data[i.over])i.movablelimits&&
i.isa(r.mi)&&(i=this.mi2mo(i)),i=r.munderover(i,null,null).With({movesupsub:!0});
a=i.over}else i=r.msubsup(i,null,null),a=i.sup;this.Push(u.subsup(i).With({position
:a,primes:n,movesupsub:o}))},Subscript:function(t){this.GetNext().match(/\d/)&&(this
.string=this.string.substr(0,this.i+1)+" "+this.string.substr(this.i+1));var n,i,
s=this.stack.Top();s.type==="prime"?(i=s.data[0],n=s.data[1],this.stack.Pop()):(i=
this.stack.Prev(),i||(i=r.mi(""))),i.isEmbellishedWrapper&&(i=i.data[0].data[0]);
var o=i.movesupsub,a=i.sub;(i.type==="msubsup"&&i.data[i.sub]||i.type==="munderover"&&
i.data[i.under]&&!i.subsupOK)&&e.Error(["DoubleSubscripts","Double subscripts: use braces to clarify"
]);if(i.type!=="msubsup")if(o){if(i.type!=="munderover"||i.data[i.under])i.movablelimits&&
i.isa(r.mi)&&(i=this.mi2mo(i)),i=r.munderover(i,null,null).With({movesupsub:!0});
a=i.under}else i=r.msubsup(i,null,null),a=i.sub;this.Push(u.subsup(i).With({position
:a,primes:n,movesupsub:o}))},PRIME:"′",SMARTQUOTE:"’",Prime:function(t){var n=this
.stack.Prev();n||(n=r.mi()),n.type==="msubsup"&&n.data[n.sup]&&e.Error(["DoubleExponentPrime"
,"Prime causes double exponent: use braces to clarify"]);var i="";this.i--;do i+=
this.PRIME,this.i++,t=this.GetNext();while(t==="'"||t===this.SMARTQUOTE);i=["","′"
,"″","‴","⁗"][i.length]||i,this.Push(u.prime(n,this.mmlToken(r.mo(i))))},mi2mo:function(
e){var t=r.mo();t.Append.apply(t,e.data);var n;for(n in t.defaults)t.defaults.hasOwnProperty
(n)&&e[n]!=null&&(t[n]=e[n]);for(n in r.copyAttributes)r.copyAttributes.hasOwnProperty
(n)&&e[n]!=null&&(t[n]=e[n]);return t},Comment:function(e){while(this.i<this.string
.length&&this.string.charAt(this.i)!="\n")this.i++},Hash:function(t){e.Error(["CantUseHash1"
,"You can't use 'macro parameter character #' in math mode"])},Other:function(e){
var t,n;this.stack.env.font&&(t={mathvariant:this.stack.env.font}),a.remap[e]?(e=
a.remap[e],e instanceof Array&&(t=e[1],e=e[0]),n=r.mo(r.entity("#x"+e)).With(t)):
n=r.mo(e).With(t),n.autoDefault("stretchy",!0)&&(n.stretchy=!1),n.autoDefault("texClass"
,true)==""&&(n=r.TeXAtom(n)),this.Push(this.mmlToken(n))},SetFont:function(e,t){this
.stack.env.font=t},SetStyle:function(e,t,n,r){this.stack.env.style=t,this.stack.env
.level=r,this.Push(u.style().With({styles:{displaystyle:n,scriptlevel:r}}))},SetSize
:function(e,t){this.stack.env.size=t,this.Push(u.style().With({styles:{mathsize:t+"em"
}}))},Color:function(e){var t=this.GetArgument(e),n=this.stack.env.color;this.stack
.env.color=t;var i=this.ParseArg(e);n?this.stack.env.color:delete this.stack.env.
color,this.Push(r.mstyle(i).With({mathcolor:t}))},Spacer:function(e,t){this.Push(
r.mspace().With({width:t,mathsize:r.SIZE.NORMAL,scriptlevel:0}))},LeftRight:function(
e){this.Push(u[e.substr(1)]().With({delim:this.GetDelimiter(e)}))},Middle:function(
t){var n=this.GetDelimiter(t);this.stack.Top().type!=="left"&&e.Error(["MisplacedMiddle"
,"%1 must be within \\left and \\right",t]),this.Push(r.mo(n).With({stretchy:!0})
)},NamedFn:function(e,t){t||(t=e.substr(1));var n=r.mi(t).With({texClass:r.TEXCLASS
.OP});this.Push(u.fn(this.mmlToken(n)))},NamedOp:function(e,t){t||(t=e.substr(1))
,t=t.replace(/&thinsp;/," ");var n=r.mo(t).With({movablelimits:!0,movesupsub:!0,form
:r.FORM.PREFIX,texClass:r.TEXCLASS.OP});n.useMMLspacing&=~n.SPACE_ATTR.form,this.
Push(this.mmlToken(n))},Limits:function(t,n){var i=this.stack.Prev("nopop");(!i||
i.Get("texClass")!==r.TEXCLASS.OP&&i.movesupsub==null)&&e.Error(["MisplacedLimits"
,"%1 is allowed only on operators",t]);var s=this.stack.Top();i.type==="munderover"&&!
n?i=s.data[s.data.length-1]=r.msubsup.apply(r.subsup,i.data):i.type==="msubsup"&&
n&&(i=s.data[s.data.length-1]=r.munderover.apply(r.underover,i.data)),i.movesupsub=
n?!0:!1,i.Core().movablelimits=!1},Over:function(e,t,n){var r=u.over().With({name
:e});t||n?(r.open=t,r.close=n):e.match(/withdelims$/)&&(r.open=this.GetDelimiter(
e),r.close=this.GetDelimiter(e));if(e.match(/^\\above/))r.thickness=this.GetDimen
(e);else if(e.match(/^\\atop/)||t||n)r.thickness=0;this.Push(r)},Frac:function(e)
{var t=this.ParseArg(e),n=this.ParseArg(e);this.Push(r.mfrac(t,n))},Sqrt:function(
t){var n=this.GetBrackets(t),i=this.GetArgument(t);i==="\\frac"&&(i+="{"+this.GetArgument
(i)+"}{"+this.GetArgument(i)+"}");var s=e.Parse(i,this.stack.env).mml();n?s=r.mroot
(s,this.parseRoot(n)):s=r.msqrt.apply(r,s.array()),this.Push(s)},Root:function(e)
{var t=this.GetUpTo(e,"\\of"),n=this.ParseArg(e);this.Push(r.mroot(n,this.parseRoot
(t)))},parseRoot:function(t){var n=this.stack.env,i=n.inRoot;n.inRoot=!0;var s=e.
Parse(t,n);t=s.mml();var o=s.stack.global;if(o.leftRoot||o.upRoot)t=r.mpadded(t),
o.leftRoot&&(t.width=o.leftRoot),o.upRoot&&(t.voffset=o.upRoot,t.height=o.upRoot)
;return n.inRoot=i,t},MoveRoot:function(t,n){this.stack.env.inRoot||e.Error(["MisplacedMoveRoot"
,"%1 can appear only within a root",t]),this.stack.global[n]&&e.Error(["MultipleMoveRoot"
,"Multiple use of %1",t]);var r=this.GetArgument(t);r.match(/-?[0-9]+/)||e.Error(
["IntegerArg","The argument to %1 must be an integer",t]),r=r/15+"em",r.substr(0,1
)!=="-"&&(r="+"+r),this.stack.global[n]=r},Accent:function(e,t,n){var i=this.ParseArg
(e),s={accent:!0};this.stack.env.font&&(s.mathvariant=this.stack.env.font);var o=
this.mmlToken(r.mo(r.entity("#x"+t)).With(s));o.stretchy=n?!0:!1,this.Push(r.TeXAtom
(r.munderover(i,null,o).With({accent:!0})))},UnderOver:function(e,t,n){var i={o:"over"
,u:"under"}[e.charAt(1)],s=this.ParseArg(e);s.Get("movablelimits")&&(s.movablelimits=!1
),s.isa(r.munderover)&&s.isEmbellished()&&(s.Core().With({lspace:0,rspace:0}),s=r
.mrow(r.mo().With({rspace:0}),s));var o=r.munderover(s,null,null);o.SetData(o[i],
this.mmlToken(r.mo(r.entity("#x"+t)).With({stretchy:!0,accent:i==="under"}))),n&&
(o=r.TeXAtom(o).With({texClass:r.TEXCLASS.OP,movesupsub:!0})),this.Push(o.With({subsupOK
:!0}))},Overset:function(e){var t=this.ParseArg(e),n=this.ParseArg(e);this.Push(r
.mover(n,t))},Underset:function(e){var t=this.ParseArg(e),n=this.ParseArg(e);this
.Push(r.munder(n,t))},TeXAtom:function(t,n){var i={texClass:n},s;if(n==r.TEXCLASS
.OP){i.movesupsub=i.movablelimits=!0;var o=this.GetArgument(t),a=o.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/
);a?(i.mathvariant=r.VARIANT.NORMAL,s=u.fn(this.mmlToken(r.mi(a[1]).With(i)))):s=
u.fn(r.TeXAtom(e.Parse(o,this.stack.env).mml()).With(i))}else s=r.TeXAtom(this.ParseArg
(t)).With(i);this.Push(s)},MmlToken:function(t){var n=this.GetArgument(t),i=this.
GetBrackets(t,"").replace(/^\s+/,""),s=this.GetArgument(t),o={attrNames:[]},u;(!r
[n]||!r[n].prototype.isToken)&&e.Error(["NotMathMLToken","%1 is not a token element"
,n]);while(i!==""){u=i.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i)
,u||e.Error(["InvalidMathMLAttr","Invalid MathML attribute: %1",i]),r[n].prototype
.defaults[u[1]]==null&&!this.MmlTokenAllow[u[1]]&&e.Error(["UnknownAttrForElement"
,"%1 is not a recognized attribute for %2",u[1],n]);var a=this.MmlFilterAttribute
(u[1],u[2].replace(/^(['"])(.*)\1$/,"$2"));a&&(a.toLowerCase()==="true"?a=!0:a.toLowerCase
()==="false"&&(a=!1),o[u[1]]=a,o.attrNames.push(u[1])),i=i.substr(u[0].length)}this
.Push(this.mmlToken(r[n](s).With(o)))},MmlFilterAttribute:function(e,t){return t}
,MmlTokenAllow:{fontfamily:1,fontsize:1,fontweight:1,fontstyle:1,color:1,background
:1,id:1,"class":1,href:1,style:1},Strut:function(e){this.Push(r.mpadded(r.mrow())
.With({height:"8.6pt",depth:"3pt",width:0}))},Phantom:function(e,t,n){var i=r.mphantom
(this.ParseArg(e));if(t||n)i=r.mpadded(i),n&&(i.height=i.depth=0),t&&(i.width=0);
this.Push(r.TeXAtom(i))},Smash:function(e){var t=this.trimSpaces(this.GetBrackets
(e,"")),n=r.mpadded(this.ParseArg(e));switch(t){case"b":n.depth=0;break;case"t":n
.height=0;break;default:n.height=n.depth=0}this.Push(r.TeXAtom(n))},Lap:function(
e){var t=r.mpadded(this.ParseArg(e)).With({width:0});e==="\\llap"&&(t.lspace="-1width"
),this.Push(r.TeXAtom(t))},RaiseLower:function(e){var t=this.GetDimen(e),n=u.position
().With({name:e,move:"vertical"});t.charAt(0)==="-"&&(t=t.slice(1),e={raise:"\\lower"
,lower:"\\raise"}[e.substr(1)]),e==="\\lower"?(n.dh="-"+t,n.dd="+"+t):(n.dh="+"+t
,n.dd="-"+t),this.Push(n)},MoveLeftRight:function(e){var t=this.GetDimen(e),n=t.charAt
(0)==="-"?t.slice(1):"-"+t;if(e==="\\moveleft"){var i=t;t=n,n=i}this.Push(u.position
().With({name:e,move:"horizontal",left:r.mspace().With({width:t,mathsize:r.SIZE.NORMAL
}),right:r.mspace().With({width:n,mathsize:r.SIZE.NORMAL})}))},Hskip:function(e){
this.Push(r.mspace().With({width:this.GetDimen(e),mathsize:r.SIZE.NORMAL}))},Rule
:function(e,t){var n=this.GetDimen(e),i=this.GetDimen(e),s=this.GetDimen(e),o,u={
width:n,height:i,depth:s};t!=="blank"?(parseFloat(n)&&parseFloat(i)+parseFloat(s)&&
(u.mathbackground=this.stack.env.color||"black"),o=r.mpadded(r.mrow()).With(u)):o=
r.mspace().With(u),this.Push(o)},MakeBig:function(e,t,n){n*=a.p_height,n=String(n
).replace(/(\.\d\d\d).+/,"$1")+"em";var i=this.GetDelimiter(e,!0);this.Push(r.TeXAtom
(r.mo(i).With({minsize:n,maxsize:n,fence:!0,stretchy:!0,symmetric:!0})).With({texClass
:t}))},BuildRel:function(e){var t=this.ParseUpTo(e,"\\over"),n=this.ParseArg(e);this
.Push(r.TeXAtom(r.munderover(n,null,t)).With({texClass:r.TEXCLASS.REL}))},HBox:function(
e,t){this.Push.apply(this,this.InternalMath(this.GetArgument(e),t))},FBox:function(
e){this.Push(r.menclose.apply(r,this.InternalMath(this.GetArgument(e))).With({notation
:"box"}))},Not:function(e){this.Push(u.not())},Dots:function(e){this.Push(u.dots(
).With({ldots:this.mmlToken(r.mo(r.entity("#x2026")).With({stretchy:!1})),cdots:this
.mmlToken(r.mo(r.entity("#x22EF")).With({stretchy:!1}))}))},Require:function(e){var t=
this.GetArgument(e).replace(/.*\//,"").replace(/[^a-z0-9_.-]/ig,"");this.Extension
(null,t)},Extension:function(r,i,s){r&&!typeof r==="string"&&(r=r.name),i=e.extensionDir+"/"+
i,i.match(/\.js$/)||(i+=".js"),n.loaded[n.fileURL(i)]||(r!=null&&delete a[s||"macros"
][r.replace(/^\\/,"")],t.RestartAfter(n.Require(i)))},Macro:function(t,n,r,i){if(
r){var s=[];if(i!=null){var o=this.GetBrackets(t);s.push(o==null?i:o)}for(var u=s
.length;u<r;u++)s.push(this.GetArgument(t));n=this.SubstituteArgs(s,n)}this.string=
this.AddArgs(n,this.string.slice(this.i)),this.i=0,++this.macroCount>e.config.MAXMACROS&&
e.Error(["MaxMacroSub1","MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
])},Matrix:function(t,n,r,i,s,o,a,f,l){var c=this.GetNext();c===""&&e.Error(["MissingArgFor"
,"Missing argument for %1",t]),c==="{"?this.i++:(this.string=c+"}"+this.string.slice
(this.i+1),this.i=0);var h=u.array().With({requireClose:!0,arraydef:{rowspacing:o||"4pt"
,columnspacing:s||"1em"}});f&&(h.isCases=!0),l&&(h.isNumbered=!0,h.arraydef.side=
l);if(n||r)h.open=n,h.close=r;a==="D"&&(h.arraydef.displaystyle=!0),i!=null&&(h.arraydef
.columnalign=i),this.Push(h)},Entry:function(t){this.Push(u.cell().With({isEntry:!0
,name:t}));if(this.stack.Top().isCases){var n=this.string,r=0,i=this.i,s=n.length
;while(i<s){var o=n.charAt(i);o==="{"?(r++,i++):o==="}"?r===0?s=0:(r--,i++):o==="&"&&
r===0?e.Error(["ExtraAlignTab","Extra alignment tab in \\cases text"]):o==="\\"?n
.substr(i).match(/^((\\cr)[^a-zA-Z]|\\\\)/)?s=0:i+=2:i++}var a=n.substr(this.i,i-
this.i);a.match(/^\s*\\text[^a-zA-Z]/)||(this.Push.apply(this,this.InternalMath(a
)),this.i=i)}},Cr:function(e){this.Push(u.cell().With({isCR:!0,name:e}))},CrLaTeX
:function(t){var n;this.string.charAt(this.i)==="["&&(n=this.GetBrackets(t,"").replace
(/ /g,"").replace(/,/,"."),n&&!this.matchDimen(n)&&e.Error(["BracketMustBeDimension"
,"Bracket argument to %1 must be a dimension",t])),this.Push(u.cell().With({isCR:!0
,name:t,linebreak:!0}));var i=this.stack.Top();if(i.isa(u.array)){if(n&&i.arraydef
.rowspacing){var s=i.arraydef.rowspacing.split(/ /);i.rowspacing||(i.rowspacing=this
.dimen2em(s[0]));while(s.length<i.table.length)s.push(this.Em(i.rowspacing));s[i.
table.length-1]=this.Em(Math.max(0,i.rowspacing+this.dimen2em(n))),i.arraydef.rowspacing=
s.join(" ")}}else n&&this.Push(r.mspace().With({depth:n})),this.Push(r.mspace().With
({linebreak:r.LINEBREAK.NEWLINE}))},emPerInch:7.2,pxPerInch:72,matchDimen:function(
e){return e.match(/^(-?(?:\.\d+|\d+(?:\.\d*)?))(px|pt|em|ex|mu|pc|in|mm|cm)$/)},dimen2em
:function(e){var t=this.matchDimen(e),n=parseFloat(t[1]||"1"),r=t[2];return r==="em"?
n:r==="ex"?n*.43:r==="pt"?n/10:r==="pc"?n*1.2:r==="px"?n*this.emPerInch/this.pxPerInch
:r==="in"?n*this.emPerInch:r==="cm"?n*this.emPerInch/2.54:r==="mm"?n*this.emPerInch/25.4
:r==="mu"?n/18:0},Em:function(e){return Math.abs(e)<6e-4?"0em":e.toFixed(3).replace
(/\.?0+$/,"")+"em"},HLine:function(t,n){n==null&&(n="solid");var r=this.stack.Top
();(!r.isa(u.array)||r.data.length)&&e.Error(["Misplaced","Misplaced %1",t]);if(r
.table.length==0)r.frame.push("top");else{var i=r.arraydef.rowlines?r.arraydef.rowlines
.split(/ /):[];while(i.length<r.table.length)i.push("none");i[r.table.length-1]=n
,r.arraydef.rowlines=i.join(" ")}},HFill:function(t){var n=this.stack.Top();n.isa
(u.array)?n.hfill.push(n.data.length):e.Error(["UnsupportedHFill","Unsupported use of %1"
,t])},BeginEnd:function(t){var n=this.GetArgument(t),r=!1;n.match(/^\\end\\/)&&(r=!0
,n=n.substr(5)),n.match(/\\/i)&&e.Error(["InvalidEnv","Invalid environment name '%1'"
,n]);var i=this.envFindName(n);i||e.Error(["UnknownEnv","Unknown environment '%1'"
,n]),i instanceof Array||(i=[i]);var s=i[1]instanceof Array?i[1][0]:i[1],o=u.begin
().With({name:n,end:s,parse:this});t==="\\end"?!r&&i[1]instanceof Array&&this[i[1
][1]]?o=this[i[1][1]].apply(this,[o].concat(i.slice(2))):o=u.end().With({name:n})
:(++this.macroCount>e.config.MAXMACROS&&e.Error(["MaxMacroSub2","MathJax maximum substitution count exceeded; is there a recursive latex environment?"
]),i[0]&&this[i[0]]&&(o=this[i[0]].apply(this,[o].concat(i.slice(2))))),this.Push
(o)},envFindName:function(e){return a.environment[e]},Equation:function(e,t){return t
},ExtensionEnv:function(e,t){this.Extension(e.name,t,"environment")},Array:function(
e,t,n,r,i,s,o,a){r||(r=this.GetArgument("\\begin{"+e.name+"}"));var f=("c"+r).replace
(/[^clr|:]/g,"").replace(/[^|:]([|:])+/g,"$1");r=r.replace(/[^clr]/g,"").split(""
).join(" "),r=r.replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center")
;var l=u.array().With({arraydef:{columnalign:r,columnspacing:i||"1em",rowspacing:
s||"4pt"}});return f.match(/[|:]/)&&(f.charAt(0).match(/[|:]/)&&(l.frame.push("left"
),l.frame.dashed=f.charAt(0)===":"),f.charAt(f.length-1).match(/[|:]/)&&l.frame.push
("right"),f=f.substr(1,f.length-2),l.arraydef.columnlines=f.split("").join(" ").replace
(/[^|: ]/g,"none").replace(/\|/g,"solid").replace(/:/g,"dashed")),t&&(l.open=this
.convertDelimiter(t)),n&&(l.close=this.convertDelimiter(n)),o==="D"?l.arraydef.displaystyle=!0
:o&&(l.arraydef.displaystyle=!1),o==="S"&&(l.arraydef.scriptlevel=1),a&&(l.arraydef
.useHeight=!1),this.Push(e),l},AlignedArray:function(e){var t=this.GetBrackets("\\begin{"+
e.name+"}");return this.setArrayAlign(this.Array.apply(this,arguments),t)},setArrayAlign
:function(e,t){return t=this.trimSpaces(t||""),t==="t"?e.arraydef.align="baseline 1"
:t==="b"?e.arraydef.align="baseline -1":t==="c"?e.arraydef.align="center":t&&(e.arraydef
.align=t),e},convertDelimiter:function(e){return e&&(e=a.delimiter[e]),e==null?null
:(e instanceof Array&&(e=e[0]),e.length===4&&(e=String.fromCharCode(parseInt(e,16
))),e)},trimSpaces:function(e){return typeof e!="string"?e:e.replace(/^\s+|\s+$/g
,"")},nextIsSpace:function(){return this.string.charAt(this.i).match(/\s/)},GetNext
:function(){while(this.nextIsSpace())this.i++;return this.string.charAt(this.i)},
GetCS:function(){var e=this.string.slice(this.i).match(/^([a-z]+|.) ?/i);return e?
(this.i+=e[1].length,e[1]):(this.i++," ")},GetArgument:function(t,n){switch(this.
GetNext()){case"":return n||e.Error(["MissingArgFor","Missing argument for %1",t]
),null;case"}":return n||e.Error(["ExtraCloseMissingOpen","Extra close brace or missing open brace"
]),null;case"\\":return this.i++,"\\"+this.GetCS();case"{":var r=++this.i,i=1;while(
this.i<this.string.length)switch(this.string.charAt(this.i++)){case"\\":this.i++;
break;case"{":i++;break;case"}":if(--i==0)return this.string.slice(r,this.i-1)}e.
Error(["MissingCloseBrace","Missing close brace"])}return this.string.charAt(this
.i++)},GetBrackets:function(t,n){if(this.GetNext()!="[")return n;var r=++this.i,i=0
;while(this.i<this.string.length)switch(this.string.charAt(this.i++)){case"{":i++
;break;case"\\":this.i++;break;case"}":i--<=0&&e.Error(["ExtraCloseLooking","Extra close brace while looking for %1"
,"']'"]);break;case"]":if(i==0)return this.string.slice(r,this.i-1)}e.Error(["MissingCloseBracket"
,"Couldn't find closing ']' for argument to %1",t])},GetDelimiter:function(t,n){while(
this.nextIsSpace())this.i++;var r=this.string.charAt(this.i);this.i++;if(this.i<=
this.string.length){r=="\\"?r+=this.GetCS(t):r==="{"&&n&&(this.i--,r=this.GetArgument
(t));if(a.delimiter[r]!=null)return this.convertDelimiter(r)}e.Error(["MissingOrUnrecognizedDelim"
,"Missing or unrecognized delimiter for %1",t])},GetDimen:function(t){var n;this.
nextIsSpace()&&this.i++;if(this.string.charAt(this.i)=="{"){n=this.GetArgument(t)
;if(n.match(/^\s*([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/
))return n.replace(/ /g,"").replace(/,/,".")}else{n=this.string.slice(this.i);var r=
n.match(/^\s*(([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/);
if(r)return this.i+=r[0].length,r[1].replace(/ /g,"").replace(/,/,".")}e.Error(["MissingDimOrUnits"
,"Missing dimension or its units for %1",t])},GetUpTo:function(t,n){while(this.nextIsSpace
())this.i++;var r=this.i,i,s,o=0;while(this.i<this.string.length){i=this.i,s=this
.string.charAt(this.i++);switch(s){case"\\":s+=this.GetCS();break;case"{":o++;break;
case"}":o==0&&e.Error(["ExtraCloseLooking","Extra close brace while looking for %1"
,n]),o--}if(o==0&&s==n)return this.string.slice(r,i)}e.Error(["TokenNotFoundForCommand"
,"Couldn't find %1 for %2",n,t])},ParseArg:function(t){return e.Parse(this.GetArgument
(t),this.stack.env).mml()},ParseUpTo:function(t,n){return e.Parse(this.GetUpTo(t,
n),this.stack.env).mml()},InternalMath:function(t,n){var i={displaystyle:!1};n!=null&&
(i.scriptlevel=n),this.stack.env.font&&(i.mathvariant=this.stack.env.font);if(!t.
match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/))return[this.InternalText(t,i)];var s=0,o=0
,u,a="",f=[];while(s<t.length)u=t.charAt(s++),u==="$"?a==="$"?(f.push(r.TeXAtom(e
.Parse(t.slice(o,s-1),{}).mml().With(i))),a="",o=s):a===""&&(o<s-1&&f.push(this.InternalText
(t.slice(o,s-1),i)),a="$",o=s):u==="}"&&a==="}"?(f.push(r.TeXAtom(e.Parse(t.slice
(o,s),{}).mml().With(i))),a="",o=s):u==="\\"&&(a===""&&t.substr(s).match(/^(eq)?ref\s*\{/
)?(o<s-1&&f.push(this.InternalText(t.slice(o,s-1),i)),a="}",o=s-1):(u=t.charAt(s++
),u==="("&&a===""?(o<s-2&&f.push(this.InternalText(t.slice(o,s-2),i)),a=")",o=s):
u===")"&&a===")"?(f.push(r.TeXAtom(e.Parse(t.slice(o,s-2),{}).mml().With(i))),a=""
,o=s):u.match(/[${}\\]/)&&a===""&&(s--,t=t.substr(0,s-1)+t.substr(s))));return a!==""&&
e.Error(["MathNotTerminated","Math not terminated in text box"]),o<t.length&&f.push
(this.InternalText(t.slice(o),i)),f},InternalText:function(e,t){return e=e.replace
(/^\s+/,i).replace(/\s+$/,i),r.mtext(r.chars(e)).With(t)},SubstituteArgs:function(
t,n){var r="",i="",s,o=0;while(o<n.length)s=n.charAt(o++),s==="\\"?r+=s+n.charAt(
o++):s==="#"?(s=n.charAt(o++),s==="#"?r+=s:((!s.match(/[1-9]/)||s>t.length)&&e.Error
(["IllegalMacroParam","Illegal macro parameter reference"]),i=this.AddArgs(this.AddArgs
(i,r),t[s-1]),r="")):r+=s;return this.AddArgs(i,r)},AddArgs:function(t,n){return n
.match(/^[a-z]/i)&&t.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)&&(t+=" "),t.length+n.length>
e.config.MAXBUFFER&&e.Error(["MaxBufferSize","MathJax internal buffer size exceeded; is there a recursive macro call?"
]),t+n}});e.Augment({Stack:o,Parse:l,Definitions:a,Startup:f,config:{MAXMACROS:1e4
,MAXBUFFER:5120},sourceMenuTitle:["TeXCommands","TeX Commands"],annotationEncoding
:"application/x-tex",prefilterHooks:MathJax.Callback.Hooks(!0),postfilterHooks:MathJax
.Callback.Hooks(!0),Config:function(){this.SUPER(arguments).Config.apply(this,arguments
),this.config.equationNumbers.autoNumber!=="none"&&(this.config.extensions||(this
.config.extensions=[]),this.config.extensions.push("AMSmath.js"))},Translate:function(
t){var n,i=!1,s=MathJax.HTML.getScript(t),o=t.type.replace(/\n/g," ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/
)!=null,u={math:s,display:o,script:t},a=this.prefilterHooks.Execute(u);if(a)return a
;s=u.math;try{n=e.Parse(s).mml()}catch(f){if(!f.texError)throw f;n=this.formatError
(f,s,o,t),i=!0}return n.isa(r.mtable)&&n.displaystyle==="inherit"&&(n.displaystyle=
o),n.inferred?n=r.apply(MathJax.ElementJax,n.data):n=r(n),o&&(n.root.display="block"
),i&&(n.texError=!0),u.math=n,this.postfilterHooks.Execute(u)||u.math},prefilterMath
:function(e,t,n){return e},postfilterMath:function(e,t,n){return this.combineRelations
(e.root),e},formatError:function(e,n,i,s){var o=e.message.replace(/\n.*/,"");return t
.signal.Post(["TeX Jax - parse error",o,n,i,s]),r.Error(o)},Error:function(e){throw e instanceof 
Array&&(e=s.apply(s,e)),t.Insert(Error(e),{texError:!0})},Macro:function(e,t,n){a
.macros[e]=["Macro"].concat([].slice.call(arguments,1)),a.macros[e].isUser=!0},fenced
:function(e,t,n){var i=r.mrow().With({open:e,close:n,texClass:r.TEXCLASS.INNER});
return i.Append(r.mo(e).With({fence:!0,stretchy:!0,texClass:r.TEXCLASS.OPEN})),t.
type==="mrow"?i.Append.apply(i,t.data):i.Append(t),i.Append(r.mo(n).With({fence:!0
,stretchy:!0,texClass:r.TEXCLASS.CLOSE})),i},fixedFence:function(e,t,n){var i=r.mrow
().With({open:e,close:n,texClass:r.TEXCLASS.ORD});return e&&i.Append(this.mathPalette
(e,"l")),t.type==="mrow"?i.Append.apply(i,t.data):i.Append(t),n&&i.Append(this.mathPalette
(n,"r")),i},mathPalette:function(t,n){if(t==="{"||t==="}")t="\\"+t;var r="{\\bigg"+
n+" "+t+"}",i="{\\big"+n+" "+t+"}";return e.Parse("\\mathchoice"+r+i+i+i).mml()},
combineRelations:function(e){var t,n,i,s;for(t=0,n=e.data.length;t<n;t++)if(e.data
[t]){if(e.isa(r.mrow))while(t+1<n&&(i=e.data[t])&&(s=e.data[t+1])&&i.isa(r.mo)&&s
.isa(r.mo)&&i.Get("texClass")===r.TEXCLASS.REL&&s.Get("texClass")===r.TEXCLASS.REL
)i.variantForm==s.variantForm&&i.Get("mathvariant")==s.Get("mathvariant")&&i.style==
s.style&&i["class"]==s["class"]&&!i.id&&!s.id?(i.Append.apply(i,s.data),e.data.splice
(t+1,1),n--):(i.rspace=s.lspace="0pt",t++);e.data[t].isToken||this.combineRelations
(e.data[t])}}}),e.prefilterHooks.Add(function(t){t.math=e.prefilterMath(t.math,t.
display,t.script)}),e.postfilterHooks.Add(function(t){t.math=e.postfilterMath(t.math
,t.display,t.script)}),e.loadComplete("jax.js")}(MathJax.InputJax.TeX,MathJax.Hub
,MathJax.Ajax),MathJax.Extension["TeX/AMSmath"]={version:"2.5.1",number:0,startNumber
:0,IDs:{},eqIDs:{},labels:{},eqlabels:{},refs:[]},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,n=
MathJax.Extension["TeX/AMSmath"],r=t.Definitions,i=t.Stack.Item,s=t.config.equationNumbers
,o=function(e){var n=[];for(var r=0,i=e.length;r<i;r++)n[r]=t.Parse.prototype.Em(
e[r]);return n.join(" ")};r.Add({mathchar0mo:{iiiint:["2A0C",{texClass:e.TEXCLASS
.OP}]},macros:{mathring:["Accent","2DA"],nobreakspace:"Tilde",negmedspace:["Spacer"
,e.LENGTH.NEGATIVEMEDIUMMATHSPACE],negthickspace:["Spacer",e.LENGTH.NEGATIVETHICKMATHSPACE
],idotsint:["MultiIntegral","\\int\\cdots\\int"],dddot:["Accent","20DB"],ddddot:["Accent"
,"20DC"],sideset:["Macro","\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}"
,3],boxed:["Macro","\\fbox{$\\displaystyle{#1}$}",1],tag:"HandleTag",notag:"HandleNoTag"
,label:"HandleLabel",ref:"HandleRef",eqref:["HandleRef",!0],substack:["Macro","\\begin{subarray}{c}#1\\end{subarray}"
,1],injlim:["NamedOp","inj&thinsp;lim"],projlim:["NamedOp","proj&thinsp;lim"],varliminf
:["Macro","\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],varlimsup:["Macro","\\mathop{\\overline{\\mmlToken{mi}{lim}}}"
],varinjlim:["Macro","\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"
],varprojlim:["Macro","\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"
],DeclareMathOperator:"HandleDeclareOp",operatorname:"HandleOperatorName",genfrac
:"Genfrac",frac:["Genfrac","","","",""],tfrac:["Genfrac","","","",1],dfrac:["Genfrac"
,"","","",0],binom:["Genfrac","(",")","0",""],tbinom:["Genfrac","(",")","0",1],dbinom
:["Genfrac","(",")","0",0],cfrac:"CFrac",shoveleft:["HandleShove",e.ALIGN.LEFT],shoveright
:["HandleShove",e.ALIGN.RIGHT],xrightarrow:["xArrow",8594,5,6],xleftarrow:["xArrow"
,8592,7,3]},environment:{align:["AMSarray",null,!0,!0,"rlrlrlrlrlrl",o([0,2,0,2,0
,2,0,2,0,2,0])],"align*":["AMSarray",null,!1,!0,"rlrlrlrlrlrl",o([0,2,0,2,0,2,0,2
,0,2,0])],multline:["Multline",null,!0],"multline*":["Multline",null,!1],split:["AMSarray"
,null,!1,!1,"rl",o([0])],gather:["AMSarray",null,!0,!0,"c"],"gather*":["AMSarray"
,null,!1,!0,"c"],alignat:["AlignAt",null,!0,!0],"alignat*":["AlignAt",null,!1,!0]
,alignedat:["AlignAt",null,!1,!1],aligned:["AlignedAMSArray",null,null,null,"rlrlrlrlrlrl"
,o([0,2,0,2,0,2,0,2,0,2,0]),".5em","D"],gathered:["AlignedAMSArray",null,null,null
,"c",null,".5em","D"],subarray:["Array",null,null,null,null,o([0,0,0,0]),"0.1em","S"
,1],smallmatrix:["Array",null,null,null,"c",o([1/3]),".2em","S",1],equation:["EquationBegin"
,"Equation",!0],"equation*":["EquationBegin","EquationStar",!1],eqnarray:["AMSarray"
,null,!0,!0,"rcl",e.LENGTH.THICKMATHSPACE,".5em"],"eqnarray*":["AMSarray",null,!1
,!0,"rcl",e.LENGTH.THICKMATHSPACE,".5em"]},delimiter:{"\\lvert":["2223",{texClass
:e.TEXCLASS.OPEN}],"\\rvert":["2223",{texClass:e.TEXCLASS.CLOSE}],"\\lVert":["2225"
,{texClass:e.TEXCLASS.OPEN}],"\\rVert":["2225",{texClass:e.TEXCLASS.CLOSE}]}},null
,!0),t.Parse.Augment({HandleTag:function(n){var r=this.GetStar(),i=this.trimSpaces
(this.GetArgument(n)),o=i;r||(i=s.formatTag(i));var u=this.stack.global;u.tagID=o
,u.notags&&t.Error(["CommandNotAllowedInEnv","%1 not allowed in %2 environment",n
,u.notags]),u.tag&&t.Error(["MultipleCommand","Multiple %1",n]),u.tag=e.mtd.apply
(e,this.InternalMath(i)).With({id:s.formatID(o)})},HandleNoTag:function(e){this.stack
.global.tag&&delete this.stack.global.tag,this.stack.global.notag=!0},HandleLabel
:function(e){var r=this.stack.global,i=this.GetArgument(e);if(i==="")return;n.refUpdate||
(r.label&&t.Error(["MultipleCommand","Multiple %1",e]),r.label=i,(n.labels[i]||n.
eqlabels[i])&&t.Error(["MultipleLabel","Label '%1' multiply defined",i]),n.eqlabels
[i]={tag:"???",id:""})},HandleRef:function(t,r){var i=this.GetArgument(t),o=n.labels
[i]||n.eqlabels[i];o||(o={tag:"???",id:""},n.badref=!n.refUpdate);var u=o.tag;r&&
(u=s.formatTag(u)),this.Push(e.mrow.apply(e,this.InternalMath(u)).With({href:s.formatURL
(o.id),"class":"MathJax_ref"}))},HandleDeclareOp:function(e){var n=this.GetStar()?""
:"\\nolimits",r=this.trimSpaces(this.GetArgument(e));r.charAt(0)=="\\"&&(r=r.substr
(1));var i=this.GetArgument(e);i=i.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}"
),t.Definitions.macros[r]=["Macro","\\mathop{\\rm "+i+"}"+n]},HandleOperatorName:
function(e){var t=this.GetStar()?"":"\\nolimits",n=this.trimSpaces(this.GetArgument
(e));n=n.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}"),this.string="\\mathop{\\rm "+
n+"}"+t+" "+this.string.slice(this.i),this.i=0},HandleShove:function(e,n){var r=this
.stack.Top();(r.type!=="multline"||r.data.length)&&t.Error(["CommandAtTheBeginingOfLine"
,"%1 must come at the beginning of the line",e]),r.data.shove=n},CFrac:function(n
){var r=this.trimSpaces(this.GetBrackets(n,"")),i=this.GetArgument(n),s=this.GetArgument
(n),o=e.mfrac(t.Parse("\\strut\\textstyle{"+i+"}",this.stack.env).mml(),t.Parse("\\strut\\textstyle{"+
s+"}",this.stack.env).mml());r={l:e.ALIGN.LEFT,r:e.ALIGN.RIGHT,"":""}[r],r==null&&
t.Error(["IllegalAlign","Illegal alignment specified in %1",n]),r&&(o.numalign=o.
denomalign=r),this.Push(o)},Genfrac:function(n,r,i,s,o){r==null&&(r=this.GetDelimiterArg
(n)),i==null&&(i=this.GetDelimiterArg(n)),s==null&&(s=this.GetArgument(n)),o==null&&
(o=this.trimSpaces(this.GetArgument(n)));var u=this.ParseArg(n),a=this.ParseArg(n
),f=e.mfrac(u,a);s!==""&&(f.linethickness=s);if(r||i)f=t.fixedFence(r,f.With({texWithDelims
:!0}),i);if(o!==""){var l=["D","T","S","SS"][o];l==null&&t.Error(["BadMathStyleFor"
,"Bad math style for %1",n]),f=e.mstyle(f),l==="D"?(f.displaystyle=!0,f.scriptlevel=0
):(f.displaystyle=!1,f.scriptlevel=o-1)}this.Push(f)},Multline:function(e,n){return this
.Push(e),this.checkEqnEnv(),i.multline(n,this.stack).With({arraydef:{displaystyle
:!0,rowspacing:".5em",width:t.config.MultLineWidth,columnwidth:"100%",side:t.config
.TagSide,minlabelspacing:t.config.TagIndent}})},AMSarray:function(e,n,r,s,o){return this
.Push(e),r&&this.checkEqnEnv(),s=s.replace(/[^clr]/g,"").split("").join(" "),s=s.
replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center"),i.AMSarray(e.name
,n,r,this.stack).With({arraydef:{displaystyle:!0,rowspacing:".5em",columnalign:s,
columnspacing:o||"1em",rowspacing:"3pt",side:t.config.TagSide,minlabelspacing:t.config
.TagIndent}})},AlignedAMSArray:function(e){var t=this.GetBrackets("\\begin{"+e.name+"}"
);return this.setArrayAlign(this.AMSarray.apply(this,arguments),t)},AlignAt:function(
e,n,r){var i,s,o="",u=[];r||(s=this.GetBrackets("\\begin{"+e.name+"}")),i=this.GetArgument
("\\begin{"+e.name+"}"),i.match(/[^0-9]/)&&t.Error(["PositiveIntegerArg","Argument to %1 must me a positive integer"
,"\\begin{"+e.name+"}"]);while(i>0)o+="rl",u.push("0em 0em"),i--;u=u.join(" ");if(
r)return this.AMSarray(e,n,r,o,u);var a=this.Array.call(this,e,null,null,o,u,".5em"
,"D");return this.setArrayAlign(a,s)},EquationBegin:function(e,t){return this.checkEqnEnv
(),this.stack.global.forcetag=t&&s.autoNumber!=="none",e},EquationStar:function(e
,t){return this.stack.global.tagged=!0,t},checkEqnEnv:function(){this.stack.global
.eqnenv&&t.Error(["ErroneousNestingEq","Erroneous nesting of equation structures"
]),this.stack.global.eqnenv=!0},MultiIntegral:function(e,t){var n=this.GetNext();
if(n==="\\"){var r=this.i;n=this.GetArgument(e),this.i=r,n==="\\limits"&&(e==="\\idotsint"?
t="\\!\\!\\mathop{\\,\\,"+t+"}":t="\\!\\!\\!\\mathop{\\,\\,\\,"+t+"}")}this.string=
t+" "+this.string.slice(this.i),this.i=0},xArrow:function(n,r,i,s){var o={width:"+"+
(i+s)+"mu",lspace:i+"mu"},u=this.GetBrackets(n),a=this.ParseArg(n),f=e.mo(e.chars
(String.fromCharCode(r))).With({stretchy:!0,texClass:e.TEXCLASS.REL}),l=e.munderover
(f);l.SetData(l.over,e.mpadded(a).With(o).With({voffset:".15em"})),u&&(u=t.Parse(
u,this.stack.env).mml(),l.SetData(l.under,e.mpadded(u).With(o).With({voffset:"-.24em"
}))),this.Push(l.With({subsupOK:!0}))},GetDelimiterArg:function(e){var n=this.trimSpaces
(this.GetArgument(e));if(n=="")return null;if(r.delimiter[n])return n;t.Error(["MissingOrUnrecognizedDelim"
,"Missing or unrecognized delimiter for %1",e])},GetStar:function(){var e=this.GetNext
()==="*";return e&&this.i++,e}}),i.Augment({autoTag:function(){var r=this.global;
if(!r.notag){n.number++,r.tagID=s.formatNumber(n.number.toString());var i=t.Parse
("\\text{"+s.formatTag(r.tagID)+"}",{}).mml();r.tag=e.mtd(i).With({id:s.formatID(
r.tagID)})}},getTag:function(){var e=this.global,t=e.tag;e.tagged=!0,e.label&&(s.
useLabelIds&&(t.id=s.formatID(e.label)),n.eqlabels[e.label]={tag:e.tagID,id:t.id}
);if(document.getElementById(t.id)||n.IDs[t.id]||n.eqIDs[t.id]){var r=0,i;do r++,
i=t.id+"_"+r;while(document.getElementById(i)||n.IDs[i]||n.eqIDs[i]);t.id=i,e.label&&
(n.eqlabels[e.label].id=i)}return n.eqIDs[t.id]=1,this.clearTag(),t},clearTag:function(
){var e=this.global;delete e.tag,delete e.tagID,delete e.label},fixInitialMO:function(
t){for(var n=0,r=t.length;n<r;n++)if(t[n]&&t[n].type!=="mspace"&&(t[n].type!=="texatom"||
t[n].data[0]&&t[n].data[0].data.length)){t[n].isEmbellished()&&t.unshift(e.mi());
break}}}),i.multline=i.array.Subclass({type:"multline",Init:function(e,t){this.SUPER
(arguments).Init.apply(this),this.numbered=e&&s.autoNumber!=="none",this.save={notag
:t.global.notag},t.global.tagged=!e&&!t.global.forcetag},EndEntry:function(){this
.table.length&&this.fixInitialMO(this.data);var t=e.mtd.apply(e,this.data);this.data
.shove&&(t.columnalign=this.data.shove),this.row.push(t),this.data=[]},EndRow:function(
){this.row.length!=1&&t.Error(["MultlineRowsOneCol","The rows within the %1 environment must have exactly one column"
,"multline"]),this.table.push(this.row),this.row=[]},EndTable:function(){this.SUPER
(arguments).EndTable.call(this);if(this.table.length){var t=this.table.length-1,n
,r=-1;this.table[0][0].columnalign||(this.table[0][0].columnalign=e.ALIGN.LEFT),this
.table[t][0].columnalign||(this.table[t][0].columnalign=e.ALIGN.RIGHT),!this.global
.tag&&this.numbered&&this.autoTag(),this.global.tag&&!this.global.notags&&(r=this
.arraydef.side==="left"?0:this.table.length-1,this.table[r]=[this.getTag()].concat
(this.table[r]));for(n=0,t=this.table.length;n<t;n++){var i=n===r?e.mlabeledtr:e.
mtr;this.table[n]=i.apply(e,this.table[n])}}this.global.notag=this.save.notag}}),
i.AMSarray=i.array.Subclass({type:"AMSarray",Init:function(e,t,n,r){this.SUPER(arguments
).Init.apply(this),this.numbered=t&&s.autoNumber!=="none",this.save={notags:r.global
.notags,notag:r.global.notag},r.global.notags=n?null:e,r.global.tagged=!t&&!r.global
.forcetag},EndEntry:function(){this.row.length&&this.fixInitialMO(this.data),this
.row.push(e.mtd.apply(e,this.data)),this.data=[]},EndRow:function(){var t=e.mtr;!
this.global.tag&&this.numbered&&this.autoTag(),this.global.tag&&!this.global.notags?
(this.row=[this.getTag()].concat(this.row),t=e.mlabeledtr):this.clearTag(),this.numbered&&delete 
this.global.notag,this.table.push(t.apply(e,this.row)),this.row=[]},EndTable:function(
){this.SUPER(arguments).EndTable.call(this),this.global.notags=this.save.notags,this
.global.notag=this.save.notag}}),i.start.Augment({oldCheckItem:i.start.prototype.
checkItem,checkItem:function(r){if(r.type==="stop"){var o=this.mmlData(),u=this.global
;n.display&&!u.tag&&!u.tagged&&!u.isInner&&(s.autoNumber==="all"||u.forcetag)&&this
.autoTag();if(u.tag){var l=[this.getTag(),e.mtd(o)],c={side:t.config.TagSide,minlabelspacing
:t.config.TagIndent,columnalign:o.displayAlign,displaystyle:"inherit"};o.displayAlign===
e.INDENTALIGN.LEFT?(c.width="100%",o.displayIndent!=="0"&&(c.columnwidth=o.displayIndent+" fit"
,c.columnspacing="0",l=[l[0],e.mtd(),l[1]])):o.displayAlign===e.INDENTALIGN.RIGHT&&
(c.width="100%",o.displayIndent!=="0"&&(c.columnwidth="fit "+o.displayIndent,c.columnspacing="0"
,l[2]=e.mtd())),o=e.mtable(e.mlabeledtr.apply(e,l)).With(c)}return i.mml(o)}return this
.oldCheckItem.call(this,r)}}),t.prefilterHooks.Add(function(e){n.display=e.display
,n.number=n.startNumber,n.eqlabels=n.eqIDs={},n.badref=!1,n.refUpdate&&(n.number=
e.script.MathJax.startNumber)}),t.postfilterHooks.Add(function(e){e.script.MathJax
.startNumber=n.startNumber,n.startNumber=n.number,MathJax.Hub.Insert(n.IDs,n.eqIDs
),MathJax.Hub.Insert(n.labels,n.eqlabels),n.badref&&!e.math.texError&&n.refs.push
(e.script)},100),MathJax.Hub.Register.MessageHook("Begin Math Input",function(){n
.refs=[],n.refUpdate=!1}),MathJax.Hub.Register.MessageHook("End Math Input",function(
e){if(n.refs.length){n.refUpdate=!0;for(var t=0,r=n.refs.length;t<r;t++)n.refs[t]
.MathJax.state=MathJax.ElementJax.STATE.UPDATE;return MathJax.Hub.processInput({scripts
:n.refs,start:(new Date).getTime(),i:0,j:0,jax:{},jaxIDs:[]})}return null}),t.resetEquationNumbers=
function(e,t){n.startNumber=e||0,t||(n.labels=n.IDs={})},MathJax.Hub.Startup.signal
.Post("TeX AMSmath Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js"
),MathJax.Extension["TeX/AMSsymbols"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX.Definitions
;t.Add({mathchar0mi:{digamma:"03DD",varkappa:"03F0",varGamma:["0393",{mathvariant
:e.VARIANT.ITALIC}],varDelta:["0394",{mathvariant:e.VARIANT.ITALIC}],varTheta:["0398"
,{mathvariant:e.VARIANT.ITALIC}],varLambda:["039B",{mathvariant:e.VARIANT.ITALIC}
],varXi:["039E",{mathvariant:e.VARIANT.ITALIC}],varPi:["03A0",{mathvariant:e.VARIANT
.ITALIC}],varSigma:["03A3",{mathvariant:e.VARIANT.ITALIC}],varUpsilon:["03A5",{mathvariant
:e.VARIANT.ITALIC}],varPhi:["03A6",{mathvariant:e.VARIANT.ITALIC}],varPsi:["03A8"
,{mathvariant:e.VARIANT.ITALIC}],varOmega:["03A9",{mathvariant:e.VARIANT.ITALIC}]
,beth:"2136",gimel:"2137",daleth:"2138",backprime:["2035",{variantForm:!0}],hslash
:"210F",varnothing:["2205",{variantForm:!0}],blacktriangle:"25B4",triangledown:["25BD"
,{variantForm:!0}],blacktriangledown:"25BE",square:"25FB",Box:"25FB",blacksquare:"25FC"
,lozenge:"25CA",Diamond:"25CA",blacklozenge:"29EB",circledS:["24C8",{mathvariant:
e.VARIANT.NORMAL}],bigstar:"2605",sphericalangle:"2222",measuredangle:"2221",nexists
:"2204",complement:"2201",mho:"2127",eth:["00F0",{mathvariant:e.VARIANT.NORMAL}],
Finv:"2132",diagup:"2571",Game:"2141",diagdown:"2572",Bbbk:["006B",{mathvariant:e
.VARIANT.DOUBLESTRUCK}],yen:"00A5",circledR:"00AE",checkmark:"2713",maltese:"2720"
},mathchar0mo:{dotplus:"2214",ltimes:"22C9",smallsetminus:"2216",rtimes:"22CA",Cap
:"22D2",doublecap:"22D2",leftthreetimes:"22CB",Cup:"22D3",doublecup:"22D3",rightthreetimes
:"22CC",barwedge:"22BC",curlywedge:"22CF",veebar:"22BB",curlyvee:"22CE",doublebarwedge
:"2A5E",boxminus:"229F",circleddash:"229D",boxtimes:"22A0",circledast:"229B",boxdot
:"22A1",circledcirc:"229A",boxplus:"229E",centerdot:"22C5",divideontimes:"22C7",intercal
:"22BA",leqq:"2266",geqq:"2267",leqslant:"2A7D",geqslant:"2A7E",eqslantless:"2A95"
,eqslantgtr:"2A96",lesssim:"2272",gtrsim:"2273",lessapprox:"2A85",gtrapprox:"2A86"
,approxeq:"224A",lessdot:"22D6",gtrdot:"22D7",lll:"22D8",llless:"22D8",ggg:"22D9"
,gggtr:"22D9",lessgtr:"2276",gtrless:"2277",lesseqgtr:"22DA",gtreqless:"22DB",lesseqqgtr
:"2A8B",gtreqqless:"2A8C",doteqdot:"2251",Doteq:"2251",eqcirc:"2256",risingdotseq
:"2253",circeq:"2257",fallingdotseq:"2252",triangleq:"225C",backsim:"223D",thicksim
:["223C",{variantForm:!0}],backsimeq:"22CD",thickapprox:["2248",{variantForm:!0}]
,subseteqq:"2AC5",supseteqq:"2AC6",Subset:"22D0",Supset:"22D1",sqsubset:"228F",sqsupset
:"2290",preccurlyeq:"227C",succcurlyeq:"227D",curlyeqprec:"22DE",curlyeqsucc:"22DF"
,precsim:"227E",succsim:"227F",precapprox:"2AB7",succapprox:"2AB8",vartriangleleft
:"22B2",lhd:"22B2",vartriangleright:"22B3",rhd:"22B3",trianglelefteq:"22B4",unlhd
:"22B4",trianglerighteq:"22B5",unrhd:"22B5",vDash:"22A8",Vdash:"22A9",Vvdash:"22AA"
,smallsmile:["2323",{variantForm:!0}],shortmid:["2223",{variantForm:!0}],smallfrown
:["2322",{variantForm:!0}],shortparallel:["2225",{variantForm:!0}],bumpeq:"224F",
between:"226C",Bumpeq:"224E",pitchfork:"22D4",varpropto:"221D",backepsilon:"220D"
,blacktriangleleft:"25C2",blacktriangleright:"25B8",therefore:"2234",because:"2235"
,eqsim:"2242",vartriangle:["25B3",{variantForm:!0}],Join:"22C8",nless:"226E",ngtr
:"226F",nleq:"2270",ngeq:"2271",nleqslant:["2A87",{variantForm:!0}],ngeqslant:["2A88"
,{variantForm:!0}],nleqq:["2270",{variantForm:!0}],ngeqq:["2271",{variantForm:!0}
],lneq:"2A87",gneq:"2A88",lneqq:"2268",gneqq:"2269",lvertneqq:["2268",{variantForm
:!0}],gvertneqq:["2269",{variantForm:!0}],lnsim:"22E6",gnsim:"22E7",lnapprox:"2A89"
,gnapprox:"2A8A",nprec:"2280",nsucc:"2281",npreceq:["22E0",{variantForm:!0}],nsucceq
:["22E1",{variantForm:!0}],precneqq:"2AB5",succneqq:"2AB6",precnsim:"22E8",succnsim
:"22E9",precnapprox:"2AB9",succnapprox:"2ABA",nsim:"2241",ncong:"2246",nshortmid:
["2224",{variantForm:!0}],nshortparallel:["2226",{variantForm:!0}],nmid:"2224",nparallel
:"2226",nvdash:"22AC",nvDash:"22AD",nVdash:"22AE",nVDash:"22AF",ntriangleleft:"22EA"
,ntriangleright:"22EB",ntrianglelefteq:"22EC",ntrianglerighteq:"22ED",nsubseteq:"2288"
,nsupseteq:"2289",nsubseteqq:["2288",{variantForm:!0}],nsupseteqq:["2289",{variantForm
:!0}],subsetneq:"228A",supsetneq:"228B",varsubsetneq:["228A",{variantForm:!0}],varsupsetneq
:["228B",{variantForm:!0}],subsetneqq:"2ACB",supsetneqq:"2ACC",varsubsetneqq:["2ACB"
,{variantForm:!0}],varsupsetneqq:["2ACC",{variantForm:!0}],leftleftarrows:"21C7",
rightrightarrows:"21C9",leftrightarrows:"21C6",rightleftarrows:"21C4",Lleftarrow:"21DA"
,Rrightarrow:"21DB",twoheadleftarrow:"219E",twoheadrightarrow:"21A0",leftarrowtail
:"21A2",rightarrowtail:"21A3",looparrowleft:"21AB",looparrowright:"21AC",leftrightharpoons
:"21CB",rightleftharpoons:["21CC",{variantForm:!0}],curvearrowleft:"21B6",curvearrowright
:"21B7",circlearrowleft:"21BA",circlearrowright:"21BB",Lsh:"21B0",Rsh:"21B1",upuparrows
:"21C8",downdownarrows:"21CA",upharpoonleft:"21BF",upharpoonright:"21BE",downharpoonleft
:"21C3",restriction:"21BE",multimap:"22B8",downharpoonright:"21C2",leftrightsquigarrow
:"21AD",rightsquigarrow:"21DD",leadsto:"21DD",dashrightarrow:"21E2",dashleftarrow
:"21E0",nleftarrow:"219A",nrightarrow:"219B",nLeftarrow:"21CD",nRightarrow:"21CF"
,nleftrightarrow:"21AE",nLeftrightarrow:"21CE"},delimiter:{"\\ulcorner":"231C","\\urcorner"
:"231D","\\llcorner":"231E","\\lrcorner":"231F"},macros:{implies:["Macro","\\;\\Longrightarrow\\;"
],impliedby:["Macro","\\;\\Longleftarrow\\;"]}},null,!0);var n=e.mo.OPTYPES.REL;MathJax
.Hub.Insert(e.mo.prototype,{OPTABLE:{infix:{"⌢":n,"⌣":n,"△":n,"":n,"":n,"":n,""
:n,"":n,"":n,"":n,"":n,"":n,"":n,"":n,"":n,"":n,"":n,"":n,"":n}}}),MathJax
.Hub.Startup.signal.Post("TeX AMSsymbols Ready")}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js"
),function(e,t,n){var r,i=t.Browser.isMobile,s=function(){var e=[].slice.call(arguments
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
e.Require("[MathJax]/extensions/MathZoom.js")})}(MathJax.Ajax,MathJax.Hub,MathJax
.OutputJax["HTML-CSS"]),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(
){var e="2.5.0",t=MathJax.ElementJax.mml,n=MathJax.OutputJax["HTML-CSS"];t.mtable
.Augment({toHTML:function(e){e=this.HTMLcreateSpan(e);if(this.data.length===0)return e
;var r=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth"
,"equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align"
,"useHeight","width","side","minlabelspacing"),i=r.width.match(/%$/),s=n.createStack
(e),o=this.HTMLgetScale(),u=this.HTMLgetMu(e),f=-1,l=[],c=[],h=[],p=[],d=[],v,m,g=-1
,y,w,E,S,x,T,N=[],C,k=n.FONTDATA.lineH*o*r.useHeight,L=n.FONTDATA.lineD*o*r.useHeight
;for(v=0,y=this.data.length;v<y;v++){S=this.data[v],E=S.type==="mlabeledtr"?f:0,p
[v]=[],l[v]=k,c[v]=L;for(m=E,w=S.data.length+E;m<w;m++)h[m]==null&&(m>g&&(g=m),d[
m]=n.createStack(n.createBox(s)),h[m]=-n.BIGDIMEN),p[v][m]=n.createBox(d[m]),N.push
(S.data[m-E].toHTML(p[v][m]))}n.MeasureSpans(N);for(v=0,y=this.data.length;v<y;v++
){S=this.data[v],E=S.type==="mlabeledtr"?f:0;for(m=E,w=S.data.length+E;m<w;m++){x=
S.data[m-E],x.isMultiline&&(p[v][m].style.width="100%");if(x.isEmbellished()){T=x
.CoreMO();var A=T.Get("minsize",!0);if(A){var O=T.HTMLspanElement().bbox;T.HTMLcanStretch
("Vertical")?(C=O.h+O.d,C&&(A=n.length2em(A,u,C),A*O.h/C>l[v]&&(l[v]=A*O.h/C),A*O
.d/C>c[v]&&(c[v]=A*O.d/C))):T.HTMLcanStretch("Horizontal")&&(A=n.length2em(A,u,O.
w),A>h[m]&&(h[m]=A))}}p[v][m].bbox.h>l[v]&&(l[v]=p[v][m].bbox.h),p[v][m].bbox.d>c
[v]&&(c[v]=p[v][m].bbox.d),p[v][m].bbox.w>h[m]&&(h[m]=p[v][m].bbox.w)}}var M=MathJax
.Hub.SplitList,_=M(r.columnspacing),D=M(r.rowspacing),P=M(r.columnalign),H=M(r.rowalign
),B=M(r.columnlines),j=M(r.rowlines),F=M(r.columnwidth),I=[];for(v=0,y=_.length;v<
y;v++)_[v]=n.length2em(_[v],u);for(v=0,y=D.length;v<y;v++)D[v]=n.length2em(D[v],u
);while(_.length<g)_.push(_[_.length-1]);while(P.length<=g)P.push(P[P.length-1]);
while(B.length<g)B.push(B[B.length-1]);while(F.length<=g)F.push(F[F.length-1]);while(
D.length<p.length)D.push(D[D.length-1]);while(H.length<=p.length)H.push(H[H.length-1
]);while(j.length<p.length)j.push(j[j.length-1]);d[f]&&(P[f]=r.side.substr(0,1)==="l"?"left"
:"right",_[f]=-h[f]);for(v=0,y=p.length;v<y;v++){S=this.data[v],I[v]=[],S.rowalign&&
(H[v]=S.rowalign);if(S.columnalign){I[v]=M(S.columnalign);while(I[v].length<=g)I[
v].push(I[v][I[v].length-1])}}if(r.equalrows){var q=Math.max.apply(Math,l),R=Math
.max.apply(Math,c);for(v=0,y=p.length;v<y;v++)E=(q+R-(l[v]+c[v]))/2,l[v]+=E,c[v]+=
E}C=l[0]+c[p.length-1];for(v=0,y=p.length-1;v<y;v++)C+=Math.max(0,c[v]+l[v+1]+D[v
]);var U=0,z=0,W,X=C;if(r.frame!=="none"||(r.columnlines+r.rowlines).match(/solid|dashed/
)){var V=M(r.framespacing);V.length!=2&&(V=M(this.defaults.framespacing)),U=n.length2em
(V[0],u),z=n.length2em(V[1],u),X=C+2*z}var $,J,K="";typeof r.align!="string"&&(r.
align=String(r.align)),r.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/
)?(K=RegExp.$3||"",r.align=RegExp.$1):r.align=this.defaults.align;if(K!==""){K=parseInt
(K),K<0&&(K=p.length+1+K),K<1?K=1:K>p.length&&(K=p.length),$=0,J=-(C+z)+l[0];for(
v=0,y=K-1;v<y;v++){var Q=Math.max(0,c[v]+l[v+1]+D[v]);$+=Q,J+=Q}}else $={top:-(l[0
]+z),bottom:C+z-l[0],center:C/2-l[0],baseline:C/2-l[0],axis:C/2+n.TeX.axis_height*
o-l[0]}[r.align],J={top:-(C+2*z),bottom:0,center:-(C/2+z),baseline:-(C/2+z),axis:
n.TeX.axis_height*o-C/2-z}[r.align];var G,Y=0,Z=0,et=0,tt=0,nt=0,rt=[],it=[],st=1
;if(r.equalcolumns&&r.width!=="auto")if(i){G=(100/(g+1)).toFixed(2).replace(/\.?0+$/
,"")+"%";for(v=0,y=Math.min(g+1,F.length);v<y;v++)F[v]=G;G=0,Y=1,nt=g+1;for(v=0,y=
Math.min(g+1,_.length);v<y;v++)G+=_[v]}else{G=n.length2em(r.width,u);for(v=0,y=Math
.min(g+1,_.length);v<y;v++)G-=_[v];G/=g+1;for(v=0,y=Math.min(g+1,F.length);v<y;v++
)h[v]=G}else{for(v=0,y=Math.min(g+1,F.length);v<y;v++)F[v]==="auto"?Z+=h[v]:F[v]==="fit"?
(it[nt]=v,nt++,Z+=h[v]):F[v].match(/%$/)?(rt[tt]=v,tt++,et+=h[v],Y+=n.length2em(F
[v],u,1)):(h[v]=n.length2em(F[v],u),Z+=h[v]);if(i){G=0;for(v=0,y=Math.min(g,_.length
);v<y;v++)G+=_[v];Y>.98&&(st=.98/Y,Y=.98)}else{if(r.width==="auto")Y>.98?(st=et/(
Z+et),G=Z+et):G=Z/(1-Y);else{G=n.length2em(r.width,u);for(v=0,y=Math.min(g+1,_.length
);v<y;v++)G-=_[v]}for(v=0,y=rt.length;v<y;v++)h[rt[v]]=n.length2em(F[rt[v]],u,G*st
),Z+=h[rt[v]];if(Math.abs(G-Z)>.01)if(nt&&G>Z){G=(G-Z)/nt;for(v=0,y=it.length;v<y
;v++)h[it[v]]+=G}else{G/=Z;for(m=0;m<=g;m++)h[m]*=G}if(r.equalcolumns){var ot=Math
.max.apply(Math,h);for(m=0;m<=g;m++)h[m]=ot}}}var ut=$,at,ft,lt;E=d[f]?f:0;for(m=
E;m<=g;m++){for(v=0,y=p.length;v<y;v++){if(p[v][m]){E=this.data[v].type==="mlabeledtr"?
f:0,x=this.data[v].data[m-E];if(x.HTMLcanStretch("Horizontal"))p[v][m].bbox=x.HTMLstretchH
(d[m],h[m]).bbox;else if(x.HTMLcanStretch("Vertical")){T=x.CoreMO();var ct=T.symmetric
;T.symmetric=!1,p[v][m].bbox=x.HTMLstretchV(d[m],l[v],c[v]).bbox,p[v][m].HH=null,
p[v][m].bbox.h>l[v]&&(p[v][m].bbox.H=p[v][m].bbox.h,p[v][m].bbox.h=l[v]),p[v][m].
bbox.d>c[v]&&(p[v][m].bbox.D=p[v][m].bbox.d,p[v][m].bbox.d=c[v]),T.symmetric=ct}lt=
x.rowalign||this.data[v].rowalign||H[v],at={top:l[v]-p[v][m].bbox.h,bottom:p[v][m
].bbox.d-c[v],center:(l[v]-c[v]-(p[v][m].bbox.h-p[v][m].bbox.d))/2,baseline:0,axis
:0}[lt]||0,lt=x.columnalign||I[v][m]||P[m],n.alignBox(p[v][m],lt,ut+at)}v<p.length-1&&
(ut-=Math.max(0,c[v]+l[v+1]+D[v]))}ut=$}if(i){var ht=n.createBox(s);ht.style.left=
ht.style.top=0,ht.style.right=n.Em(G+2*U),ht.style.display="inline-block",ht.style
.height="0px",n.msieRelativeWidthBug&&(ht=n.createBox(ht),ht.style.position="relative"
,ht.style.height="1em",ht.style.width="100%",ht.bbox=s.bbox);var pt=0,dt=U,vt,mt;
nt?(vt=100*(1-Y)/nt,mt=Z/nt):(vt=100*(1-Y)/(g+1),mt=Z/(g+1));for(m=0;m<=g;m++){n.
placeBox(d[m].parentNode,0,0),d[m].style.position="relative",d[m].style.left=n.Em
(dt),d[m].style.width="100%",d[m].parentNode.parentNode.removeChild(d[m].parentNode
);var gt=n.createBox(ht);n.addBox(gt,d[m]),d[m]=gt;var yt=gt.style;yt.display="inline-block"
,yt.left=pt+"%";if(F[m].match(/%$/)){var bt=parseFloat(F[m])*st;nt===0?(yt.width=
vt+bt+"%",pt+=vt+bt,gt=n.createBox(gt),n.addBox(gt,d[m].firstChild),gt.style.left=0
,gt.style.right=n.Em(mt),dt-=mt):(yt.width=bt+"%",pt+=bt)}else F[m]==="fit"||nt===0?
(yt.width=vt+"%",gt=n.createBox(gt),n.addBox(gt,d[m].firstChild),gt.style.left=0,
gt.style.right=n.Em(mt-h[m]),dt+=h[m]-mt,pt+=vt):(yt.width=n.Em(h[m]),dt+=h[m]);n
.msieRelativeWidthBug&&(n.addText(gt.firstChild,n.NBSP),gt.firstChild.style.position="relative"
),dt+=_[m],B[m]!=="none"&&m<g&&m!==f&&(ft=n.createBox(ht),ft.style.left=pt+"%",ft=
n.createRule(ft,X,0,1.25/n.em),ft.style.position="absolute",ft.bbox={h:X,d:0,w:0,
rw:1.25/n.em,lw:0},ft.parentNode.bbox=s.bbox,n.placeBox(ft,dt-_[m]/2,J,!0),ft.style
.borderStyle=B[m])}}else{var wt=U;for(m=0;m<=g;m++)d[m].bbox.width||n.setStackWidth
(d[m],h[m]),F[m]!=="auto"&&F[m]!=="fit"&&(d[m].bbox.width=h[m],d[m].bbox.isFixed=!0
),n.placeBox(d[m].parentNode,wt,0),wt+=h[m]+_[m],B[m]!=="none"&&m<g&&m!==f&&(ft=n
.createRule(s,X,0,1.25/n.em),n.addBox(s,ft),ft.bbox={h:X,d:0,w:0,rw:1.25/n.em,lw:0
},n.placeBox(ft,wt-_[m]/2,J,!0),ft.style.borderStyle=B[m])}s.bbox.d=-J,s.bbox.h=X+
J,n.setStackWidth(s,s.bbox.w+U),W=s.bbox.w;var Et;r.frame!=="none"&&(Et=n.createFrame
(s,X,0,W,1.25/n.em,r.frame),n.addBox(s,Et),n.placeBox(Et,0,J,!0),i&&(Et.style.width="100%"
)),ut=$;for(v=0,y=p.length-1;v<y;v++){at=Math.max(0,c[v]+l[v+1]+D[v]);if(j[v]!=="none"
){ft=n.createRule(s,1.25/n.em,0,W),n.addBox(s,ft),ft.bbox={h:1.25/n.em,d:0,w:W,rw
:W,lw:0},n.placeBox(ft,0,ut-c[v]-(at-c[v]-l[v+1])/2,!0);if(j[v]==="dashed"||i)ft.
style.borderTop=ft.style.height+" "+j[v],ft.style.height=0,ft.style.width=ft.style
.borderLeftWidth,ft.style.borderLeft="",i&&(ft.style.width="100%")}ut-=at}i&&(e.bbox
.width=r.width,s.style.width="100%");if(d[f]){var St=s.bbox.w,xt=this.getValues("indentalignfirst"
,"indentshiftfirst","indentalign","indentshift");xt.indentalignfirst!==t.INDENTALIGN
.INDENTALIGN&&(xt.indentalign=xt.indentalignfirst),xt.indentalign===t.INDENTALIGN
.AUTO&&(xt.indentalign=this.displayAlign),xt.indentshiftfirst!==t.INDENTSHIFT.INDENTSHIFT&&
(xt.indentshift=xt.indentshiftfirst),xt.indentshift==="auto"&&(xt.indentshift="0"
);var Tt=n.length2em(xt.indentshift,u,n.cwidth),Nt=n.length2em(r.minlabelspacing,
u,n.cwidth);if(this.displayIndent!=="0"){var Ct=n.length2em(this.displayIndent,u,
n.cwidth);Tt+=xt.indentAlign===t.INDENTALIGN.RIGHT?-Ct:Ct}var kt=n.createStack(e,!1
,"100%");n.addBox(kt,s),n.alignBox(s,xt.indentalign,0,Tt),d[f].parentNode.parentNode
.removeChild(d[f].parentNode),n.addBox(kt,d[f]),n.alignBox(d[f],P[f],0),n.msieRelativeWidthBug&&
(s.style.top=d[f].style.top=""),i&&(s.style.width=r.width,e.bbox.width="100%"),d[
f].style.marginRight=d[f].style.marginLeft=n.Em(Nt),xt.indentalign===t.INDENTALIGN
.CENTER?St+=4*Nt+2*d[f].bbox.w:xt.indentalign!==P[f]&&(St+=2*Nt+d[f].bbox.w),St=Math
.max(0,St+Tt),e.bbox.tw=St+2*Nt,e.style.minWidth=e.bbox.minWidth=n.Em(St),kt.style
.minWidth=kt.bbox.minWidth=n.Em(St/n.scale)}i||this.HTMLhandleSpace(e);var Lt=this
.HTMLhandleColor(e);return Lt&&i&&(Et||(Et=n.createFrame(s,X,0,W,0,"none"),n.addBox
(s,Et),n.placeBox(Et,0,J,!0),Et.style.width="100%"),Et.style.backgroundColor=Lt.style
.backgroundColor,Et.parentNode.insertBefore(Et,Et.parentNode.firstChild),Lt.parentNode
.removeChild(Lt)),e},HTMLhandleSpace:function(e){e.bbox.keepPadding=!0,e.bbox.exact=!0
,!this.hasFrame&&e.bbox.width==null&&(e.style.paddingLeft=e.style.paddingRight=n.
Em(1/6)),this.SUPER(arguments).HTMLhandleSpace.call(this,e)}}),t.mtd.Augment({toHTML
:function(e,t,n){e=this.HTMLcreateSpan(e);if(this.data[0]){var r=this.data[0].toHTML
(e);n!=null?r=this.data[0].HTMLstretchV(e,t,n):t!=null&&(r=this.data[0].HTMLstretchH
(e,t)),e.bbox=r.bbox}return this.HTMLhandleSpace(e),this.HTMLhandleColor(e),e},HTMLstretchH
:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV}),MathJax.Hub.Startup.signal
.Post("HTML-CSS mtable Ready"),MathJax.Ajax.loadComplete(n.autoloadDir+"/mtable.js"
)}),function(e,t,n,r){var i,s,o,u,a="'Times New Roman',Times,STIXGeneral,serif",f=
{".MJXc-script":{"font-size":".8em"},".MJXc-right":{"-webkit-transform-origin":"right"
,"-moz-transform-origin":"right","-ms-transform-origin":"right","-o-transform-origin"
:"right","transform-origin":"right"},".MJXc-bold":{"font-weight":"bold"},".MJXc-italic"
:{"font-style":"italic"},".MJXc-scr":{"font-family":"MathJax_Script,"+a},".MJXc-frak"
:{"font-family":"MathJax_Fraktur,"+a},".MJXc-sf":{"font-family":"MathJax_SansSerif,"+
a},".MJXc-cal":{"font-family":"MathJax_Caligraphic,"+a},".MJXc-mono":{"font-family"
:"MathJax_Typewriter,"+a},".MJXc-largeop":{"font-size":"150%"},".MJXc-largeop.MJXc-int"
:{"vertical-align":"-.2em"},".MJXc-math":{display:"inline-block","line-height":"1.2"
,"text-indent":"0","font-family":a,"white-space":"nowrap","border-collapse":"collapse"
},".MJXc-display":{display:"block","text-align":"center",margin:"1em 0"},".MJXc-math span"
:{display:"inline-block"},".MJXc-box":{display:"block!important","text-align":"center"
},".MJXc-box:after":{content:'" "'},".MJXc-rule":{display:"block!important","margin-top"
:".1em"},".MJXc-char":{display:"block!important"},".MJXc-mo":{margin:"0 .15em"},".MJXc-mfrac"
:{margin:"0 .125em","vertical-align":".25em"},".MJXc-denom":{display:"inline-table!important"
,width:"100%"},".MJXc-denom > *":{display:"table-row!important"},".MJXc-surd":{"vertical-align"
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
)})}(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.OutputJax.CommonHTML),function(
e,t){var n=e.config.menuSettings,r=MathJax.Extension["CHTML-preview"]={version:"2.5.0"
,config:e.CombineConfig("CHTML-preview",{Chunks:{EqnChunk:1e4,EqnChunkFactor:1,EqnChunkDelay
:0},color:"inherit!important",updateTime:30,updateDelay:6,messageStyle:"none",disabled
:!1}),Config:function(){e.Config({"HTML-CSS":this.config.Chunks,SVG:this.config.Chunks
}),MathJax.Ajax.Styles({".MathJax_Preview .MJXc-math":{color:this.config.color}})
;var t,r,i,s,o,u=this.config;!u.disabled&&n.CHTMLpreview==null&&e.Config({menuSettings
:{CHTMLpreview:!0}}),e.Register.MessageHook("Begin Math Output",function(){!s&&n.
CHTMLpreview&&n.renderer!=="CommonHTML"&&(t=e.processUpdateTime,r=e.processUpdateDelay
,i=e.config.messageStyle,e.processUpdateTime=u.updateTime,e.processUpdateDelay=u.
updateDelay,e.Config({messageStyle:u.messageStyle}),MathJax.Message.Clear(0,0),o=!0
)}),e.Register.MessageHook("End Math Output",function(){!s&&o&&(e.processUpdateTime=
t,e.processUpdateDelay=r,e.Config({messageStyle:i}),s=!0)})},Preview:function(e){
if(!n.CHTMLpreview||n.renderer==="CommonHTML")return;var r=e.script.MathJax.preview||
e.script.previousSibling;if(!r||r.className!==MathJax.Hub.config.preRemoveClass)r=
t.Element("span",{className:MathJax.Hub.config.preRemoveClass}),e.script.parentNode
.insertBefore(r,e.script),e.script.MathJax.preview=r;return r.innerHTML="",r.style
.color="inherit",this.postFilter(r,e)},postFilter:function(t,n){if(!n.math.root.toCommonHTML
){var r=MathJax.Callback.Queue();r.Push(["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/config.js"
],["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/jax.js"]),e.RestartAfter
(r.Push({}))}n.math.root.toCommonHTML(t)},Register:function(t){e.Register.StartupHook
(t+" Jax Require",function(){var e=MathJax.InputJax[t];e.postfilterHooks.Add(["Preview"
,MathJax.Extension["CHTML-preview"]],50)})}};r.Register("TeX"),r.Register("MathML"
),r.Register("AsciiMath"),e.Register.StartupHook("End Config",["Config",r]),e.Startup
.signal.Post("CHTML-preview Ready")}(MathJax.Hub,MathJax.HTML),MathJax.Ajax.loadComplete
("[MathJax]/extensions/CHTML-preview.js"),MathJax.Ajax.loadComplete("[MathJax]/config/TeX-AMS_HTML-full.js"
);