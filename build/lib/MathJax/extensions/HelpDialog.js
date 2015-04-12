/*
 *  /MathJax/extensions/HelpDialog.js
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

(function(e,t,n,r,i){var s=MathJax.Extension.Help={version:"2.5.0"},o="http://www.stixfonts.org/"
,u=MathJax.Menu,a=e.CombineConfig("HelpDialog",{closeImg:n.urlRev(r.imageDir+"/CloseX-31.png"
),styles:{"#MathJax_Help":{position:"fixed",left:"50%",width:"auto","max-width":"90%"
,"text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD"
,color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style"
:"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing"
:"normal","word-spacing":"normal","word-wrap":"normal","white-space":"wrap","float"
:"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius"
:"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow"
:"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow"
:"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"
},"#MathJax_HelpContent":{overflow:"auto","text-align":"left","font-size":"80%",padding
:".4em .6em",border:"1px inset",margin:"1em 0px","max-height":"20em","max-width":"30em"
,"background-color":"#EEEEEE"}}});s.Dialog=function(){i.loadDomain("HelpDialog",["Post"
,s])},s.Post=function(){this.div=u.Background(this);var e=t.addElement(this.div,"div"
,{id:"MathJax_Help"},i._("HelpDialog",[["b",{style:{fontSize:"120%"}},[["Help","MathJax Help"
]]],["div",{id:"MathJax_HelpContent"},[["p",{},[["MathJax","*MathJax* is a JavaScript library that allows page authors to include mathematics within their web pages.  As a reader, you don't need to do anything to make that happen."
]]],["p",{},[["Browsers","*Browsers*: MathJax works with all modern browsers including IE6+, Firefox 3+, Chrome 0.2+, Safari 2+, Opera 9.6+ and most mobile browsers."
]]],["p",{},[["Menu","*Math Menu*: MathJax adds a contextual menu to equations.  Right-click or CTRL-click on any mathematics to access the menu."
]]],["div",{style:{"margin-left":"1em"}},[["p",{},[["ShowMath","*Show Math As* allows you to view the formula's source markup for copy & paste (as MathML or in its original format)."
]]],["p",{},[["Settings","*Settings* gives you control over features of MathJax, such as the size of the mathematics, and the mechanism used to display equations."
]]],["p",{},[["Language","*Language* lets you select the language used by MathJax for its menus and warning messages."
]]]]],["p",{},[["Zoom","*Math Zoom*: If you are having difficulty reading an equation, MathJax can enlarge it to help you see it better."
]]],["p",{},[["Accessibilty","*Accessibility*: MathJax will automatically work with screen readers to make mathematics accessible to the visually impaired."
]]],["p",{},[["Fonts","*Fonts*: MathJax will use certain math fonts if they are installed on your computer; otherwise, it will use web-based fonts.  Although not required, locally installed fonts will speed up typesetting.  We suggest installing the [STIX fonts](%1)."
,o]]]]],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["img",{src:a.
closeImg,style:{width:"21px",height:"21px",position:"absolute",top:".2em",right:".2em"
},onclick:s.Remove}]]));i.setCSS(e);var n=document.documentElement||{},r=window.innerHeight||
n.clientHeight||n.scrollHeight||0;u.prototype.msieAboutBug?(e.style.width="20em",
e.style.position="absolute",e.style.left=Math.floor((document.documentElement.scrollWidth-
e.offsetWidth)/2)+"px",e.style.top=Math.floor((r-e.offsetHeight)/3)+document.body
.scrollTop+"px"):(e.style.marginLeft=Math.floor(-e.offsetWidth/2)+"px",e.style.top=
Math.floor((r-e.offsetHeight)/3)+"px")},s.Remove=function(e){s.div&&(document.body
.removeChild(s.div),delete s.div)},MathJax.Callback.Queue(e.Register.StartupHook("End Config"
,{}),["Styles",n,a.styles],["Post",e.Startup.signal,"HelpDialig Ready"],["loadComplete"
,n,"[MathJax]/extensions/HelpDialog.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax
,MathJax.OutputJax,MathJax.Localization);