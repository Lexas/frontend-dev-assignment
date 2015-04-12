/*
 *  /MathJax/extensions/FontWarnings.js
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

(function(e,t){var n="2.5.0",r="http://www.stixfonts.org/",i="https://github.com/mathjax/MathJax/tree/master/fonts/HTML-CSS/TeX/otf"
,s=e.CombineConfig("FontWarnings",{messageStyle:{position:"fixed",bottom:"4em",left
:"3em",width:"40em",border:"3px solid #880000","background-color":"#E0E0E0",color
:"black",padding:"1em","font-size":"small","white-space":"normal","border-radius"
:".75em","-webkit-border-radius":".75em","-moz-border-radius":".75em","-khtml-border-radius"
:".75em","box-shadow":"4px 4px 10px #AAAAAA","-webkit-box-shadow":"4px 4px 10px #AAAAAA"
,"-moz-box-shadow":"4px 4px 10px #AAAAAA","-khtml-box-shadow":"4px 4px 10px #AAAAAA"
,filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3, OffY=3, Color='gray', Positive='true')"
},Message:{webFont:[["closeBox"],["webFont","MathJax is using web-based fonts to display the mathematics on this page.  These take time to download, so the page would render faster if you installed math fonts directly in your system's font folder."
],["fonts"]],imageFonts:[["closeBox"],["imageFonts","MathJax is using its image fonts rather than local or web-based fonts. This will render slower than usual, and the mathematics may not print at the full resolution of your printer."
],["fonts"],["webFonts"]],noFonts:[["closeBox"],["noFonts","MathJax is unable to locate a font to use to display its mathematics, and image fonts are not available, so it is falling back on generic unicode characters in hopes that your browser will be able to display them.  Some characters may not show up properly, or possibly not at all."
],["fonts"],["webFonts"]]},HTML:{closeBox:[["div",{style:{position:"absolute",overflow
:"hidden",top:".1em",right:".1em",border:"1px outset",width:"1em",height:"1em","text-align"
:"center",cursor:"pointer","background-color":"#EEEEEE",color:"#606060","border-radius"
:".5em","-webkit-border-radius":".5em","-moz-border-radius":".5em","-khtml-border-radius"
:".5em"},onclick:function(){o.div&&o.fade===0&&(o.timer&&clearTimeout(o.timer),o.
div.style.display="none")}},[["span",{style:{position:"relative",bottom:".2em"}},
["x"]]]]],webFonts:[["p"],["webFonts","Most modern browsers allow for fonts to be downloaded over the web. Updating to a more recent version of your browser (or changing browsers) could improve the quality of the mathematics on this page."
]],fonts:[["p"],["fonts","MathJax can use either the [STIX fonts](%1) or the [MathJax TeX fonts](%2).  Download and install one of those fonts to improve your MathJax experience."
,r,i]],STIXfonts:[["p"],["STIXPage","This page is designed to use the [STIX fonts](%1).  Download and install those fonts to improve your MathJax experience."
,r]],TeXfonts:[["p"],["TeXPage","This page is designed to use the [MathJax TeX fonts](%1).  Download and install those fonts to improve your MathJax experience."
,i]]},removeAfter:12e3,fadeoutSteps:10,fadeoutTime:1500});MathJax.Hub.Browser.isIE9&&
document.documentMode>=9&&delete s.messageStyle.filter;var o={div:null,fade:0},u=
function(n){if(o.div)return;var r=MathJax.OutputJax["HTML-CSS"],i=document.body;e
.Browser.isMSIE?s.messageStyle.position==="fixed"&&(MathJax.Message.Init(),i=document
.getElementById("MathJax_MSIE_Frame")||i,i!==document.body&&(s.messageStyle.position="absolute"
)):delete s.messageStyle.filter,s.messageStyle.maxWidth=document.body.clientWidth-75+"px"
;var u=0;while(u<n.length)if(n[u]instanceof Array)if(n[u].length===1&&s.HTML[n[u]
[0]])n.splice.apply(n,[u,1].concat(s.HTML[n[u][0]]));else if(typeof n[u][1]=="string"
){var f=MathJax.Localization.lookupPhrase(["FontWarnings",n[u][0]],n[u][1]);f=MathJax
.Localization.processMarkdown(f,n[u].slice(2),"FontWarnings"),n.splice.apply(n,[u
,1].concat(f)),u+=f.length}else u++;else u++;o.div=r.addElement(i,"div",{id:"MathJax_FontWarning"
,style:s.messageStyle},n),MathJax.Localization.setCSS(o.div),s.removeAfter&&e.Register
.StartupHook("End",function(){o.timer=setTimeout(a,s.removeAfter)}),t.Cookie.Set("fontWarn"
,{warned:!0})},a=function(){o.fade++,o.timer&&delete o.timer;if(o.fade<s.fadeoutSteps
){var e=1-o.fade/s.fadeoutSteps;o.div.style.opacity=e,o.div.style.filter="alpha(opacity="+
Math.floor(100*e)+")",setTimeout(a,s.fadeoutTime/s.fadeoutSteps)}else o.div.style
.display="none"};t.Cookie.Get("fontWarn").warned||e.Startup.signal.Interest(function(
e){if(e.match(/HTML-CSS Jax - /)&&!o.div){var t=MathJax.OutputJax["HTML-CSS"],n=t
.config.availableFonts,r,i=n&&n.length;i?n.length===1&&(s.HTML.fonts=s.HTML[n[0]+"fonts"
]):s.HTML.fonts=[""],t.allowWebFonts&&(s.HTML.webfonts=[""]),e.match(/- Web-Font/
)?i&&(r="webFont"):e.match(/- using image fonts/)?r="imageFonts":e.match(/- no valid font/
)&&(r="noFonts"),r&&s.Message[r]&&MathJax.Localization.loadDomain("FontWarnings",
[u,s.Message[r]])}})})(MathJax.Hub,MathJax.HTML),MathJax.Ajax.loadComplete("[MathJax]/extensions/FontWarnings.js"
);