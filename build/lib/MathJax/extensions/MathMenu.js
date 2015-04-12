/*
 *  /MathJax/extensions/MathMenu.js
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

(function(e,t,n,r,i){var s="2.5.0",o=MathJax.Callback.Signal("menu");MathJax.Extension
.MathMenu={version:s,signal:o};var u=function(e){return MathJax.Localization._.apply
(MathJax.Localization,[["MathMenu",e]].concat([].slice.call(arguments,1)))},a=e.Browser
.isPC,f=e.Browser.isMSIE,l=(document.documentMode||0)>8,c=a?null:"5px",h=e.CombineConfig
("MathMenu",{delay:150,closeImg:n.urlRev(i.imageDir+"/CloseX-31.png"),showRenderer
:!0,showMathPlayer:!0,showFontMenu:!1,showContext:!1,showDiscoverable:!1,showLocale
:!0,showLocaleURL:!1,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"
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
,n,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax
.CallBack,MathJax.OutputJax);