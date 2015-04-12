/*
 *  /MathJax/extensions/MathEvents.js
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

(function(e,t,n,r,i,s,o){var u="2.5.0",a=MathJax.Extension,f=a.MathEvents={version
:u},l=e.config.menuSettings,c={hover:500,frame:{x:3.5,y:5,bwidth:1,bcolor:"#A6D",
hwidth:"15px",hcolor:"#83A"},button:{x:-4,y:-3,wx:-2,src:n.urlRev(s.imageDir+"/MenuArrow-15.png"
)},fadeinInc:.2,fadeoutInc:.05,fadeDelay:50,fadeoutStart:400,fadeoutDelay:15e3,styles
:{".MathJax_Hover_Frame":{"border-radius":".25em","-webkit-border-radius":".25em"
,"-moz-border-radius":".25em","-khtml-border-radius":".25em","box-shadow":"0px 0px 15px #83A"
,"-webkit-box-shadow":"0px 0px 15px #83A","-moz-box-shadow":"0px 0px 15px #83A","-khtml-box-shadow"
:"0px 0px 15px #83A",border:"1px solid #A6D ! important",display:"inline-block",position
:"absolute"},".MathJax_Hover_Arrow":{position:"absolute",width:"15px",height:"11px"
,cursor:"pointer"}}},h=f.Event={LEFTBUTTON:0,RIGHTBUTTON:2,MENUKEY:"altKey",Mousedown
:function(e){return h.Handler(e,"Mousedown",this)},Mouseup:function(e){return h.Handler
(e,"Mouseup",this)},Mousemove:function(e){return h.Handler(e,"Mousemove",this)},Mouseover
:function(e){return h.Handler(e,"Mouseover",this)},Mouseout:function(e){return h.
Handler(e,"Mouseout",this)},Click:function(e){return h.Handler(e,"Click",this)},DblClick
:function(e){return h.Handler(e,"DblClick",this)},Menu:function(e){return h.Handler
(e,"ContextMenu",this)},Handler:function(e,t,r){if(n.loadingMathMenu)return h.False
(e);var i=s[r.jaxID];e||(e=window.event),e.isContextMenu=t==="ContextMenu";if(i[t
])return i[t](e,r);if(a.MathZoom)return a.MathZoom.HandleEvent(e,t,r)},False:function(
e){return e||(e=window.event),e&&(e.preventDefault?e.preventDefault():e.returnValue=!1
,e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0),!1},ContextMenu:function(
t,u,a){var c=s[u.jaxID],d=c.getJaxFromMath(u),v=(c.config.showMathMenu!=null?c:e)
.config.showMathMenu;if(!v||l.context!=="MathJax"&&!a)return;f.msieEventBug&&(t=window
.event||t),h.ClearSelection(),p.ClearHoverTimer(),d.hover&&(d.hover.remove&&(clearTimeout
(d.hover.remove),delete d.hover.remove),d.hover.nofade=!0);var m=MathJax.Menu,y,w
;if(m){if(m.loadingDomain)return h.False(t);y=i.loadDomain("MathMenu");if(!y){m.jax=
d;var E=m.menu.Find("Show Math As").menu;E.items[0].name=d.sourceMenuTitle,E.items
[0].format=d.sourceMenuFormat||"MathML",E.items[1].name=o[d.inputJax].sourceMenuTitle
,E.items[5].disabled=!o[d.inputJax].annotationEncoding;var S=E.items[2];S.disabled=!0
;var x=S.menu.items;annotationList=MathJax.Hub.Config.semanticsAnnotations;for(var T=0
,N=x.length;T<N;T++){var C=x[T].name[1];d.root&&d.root.getAnnotation(C)!==null?(S
.disabled=!1,x[T].hidden=!1):x[T].hidden=!0}var L=m.menu.Find("Math Settings","MathPlayer"
);return L.hidden=d.outputJax!=="NativeMML"||!e.Browser.hasMathPlayer,m.menu.Post
(t)}m.loadingDomain=!0,w=function(){delete m.loadingDomain}}else{if(n.loadingMathMenu
)return h.False(t);n.loadingMathMenu=!0,y=n.Require("[MathJax]/extensions/MathMenu.js"
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
])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.Callback,MathJax.Localization,
MathJax.OutputJax,MathJax.InputJax);