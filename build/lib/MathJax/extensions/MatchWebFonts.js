/*
 *  /MathJax/extensions/MatchWebFonts.js
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

(function(e,t){var n="2.5.0",r=MathJax.Hub.CombineConfig("MatchWebFonts",{matchFor
:{"HTML-CSS":!0,NativeMML:!0,SVG:!0},fontCheckDelay:500,fontCheckTimeout:15e3});MathJax
.Extension.MatchWebFonts={version:n,config:r},e.Register.StartupHook("HTML-CSS Jax Ready"
,function(){var n=MathJax.OutputJax["HTML-CSS"],i=n.postTranslate;n.Augment({postTranslate
:function(e,n){return!n&&r.matchFor["HTML-CSS"]&&this.config.matchFontHeight&&t.timer
.start(t,["checkFonts",this,e.jax[this.id]],r.fontCheckDelay,r.fontCheckTimeout),
i.apply(this,arguments)},checkFonts:function(t,n){if(t.time(function(){}))return;
var r=[],i,s,o=!1;for(i=0,s=n.length;i<s;i++)script=n[i],script.parentNode&&script
.MathJax.elementJax&&script.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),script
);for(i=0,s=n.length;i<s;i++){script=n[i];if(!script.parentNode)continue;o=!0;var u=
script.MathJax.elementJax;if(!u)continue;var a=script.previousSibling,f=a.firstChild
.offsetHeight/60,l=a.lastChild.lastChild.offsetHeight/60;if(f===0||f==="NaN")f=this
.defaultEx,l=this.defaultEm;if(f!==u.HTMLCSS.ex||l!==u.HTMLCSS.em){var h=f/this.TeX
.x_height/l;h=Math.floor(Math.max(this.config.minScaleAdjust/100,h)*this.config.scale
),h/100!==u.scale&&(r.push(script),n[i]={})}}n=n.concat(r);for(i=0,s=n.length;i<s
;i++)script=n[i],script&&script.parentNode&&script.MathJax.elementJax&&script.parentNode
.removeChild(script.previousSibling);r.length&&e.Queue(["Rerender",e,[r],{}]),o&&
setTimeout(t,t.delay)}})}),e.Register.StartupHook("SVG Jax Ready",function(){var n=
MathJax.OutputJax.SVG,i=n.postTranslate;n.Augment({postTranslate:function(e,n){return!
n&&r.matchFor.SVG&&t.timer.start(t,["checkFonts",this,e.jax[this.id]],r.fontCheckDelay
,r.fontCheckTimeout),i.apply(this,arguments)},checkFonts:function(t,n){if(t.time(
function(){}))return;var r=[],i,s,o=!1;for(i=0,s=n.length;i<s;i++)script=n[i],script
.parentNode&&script.MathJax.elementJax&&script.parentNode.insertBefore(this.ExSpan
.cloneNode(!0),script);for(i=0,s=n.length;i<s;i++){script=n[i];if(!script.parentNode
)continue;o=!0;var u=script.MathJax.elementJax;if(!u)continue;var a=script.previousSibling
,f=a.firstChild.offsetHeight/60;if(f===0||f==="NaN")f=this.defaultEx;f!==u.SVG.ex&&
(r.push(script),n[i]={})}n=n.concat(r);for(i=0,s=n.length;i<s;i++)script=n[i],script
.parentNode&&script.MathJax.elementJax&&script.parentNode.removeChild(script.previousSibling
);r.length&&e.Queue(["Rerender",e,[r],{}]),o&&setTimeout(t,t.delay)}})}),e.Register
.StartupHook("NativeMML Jax Ready",function(){var n=MathJax.OutputJax.NativeMML,i=
n.postTranslate;n.Augment({postTranslate:function(n){!e.Browser.isMSIE&&r.matchFor
.NativeMML&&t.timer.start(t,["checkFonts",this,n.jax[this.id]],r.fontCheckDelay,r
.fontCheckTimeout),i.apply(this,arguments)},checkFonts:function(e,t){if(e.time(function(
){}))return;var n=[],r=[],i=[],s,o,u;for(s=0,o=t.length;s<o;s++)u=t[s],u.parentNode&&
u.MathJax.elementJax&&u.parentNode.insertBefore(this.EmExSpan.cloneNode(!0),u);for(
s=0,o=t.length;s<o;s++){u=t[s];if(!u.parentNode)continue;var a=u.MathJax.elementJax
;if(!a)continue;var f=document.getElementById(a.inputID+"-Frame"),l=f.getElementsByTagName
("math")[0];if(!l)continue;a=a.NativeMML;var c=u.previousSibling,h=c.firstChild.offsetWidth/60
,p=c.lastChild.offsetWidth/60;if(h===0||h==="NaN")h=this.defaultEx,p=this.defaultMEx
;var d=h!==a.ex;if(d||p!=a.mex){var v=this.config.matchFontHeight&&p>1?h/p:1;v=Math
.floor(Math.max(this.config.minScaleAdjust/100,v)*this.config.scale),v/100!==a.scale&&
i.push([f.style,v]),a.scale=v/100,a.fontScale=v+"%",a.ex=h,a.mex=p}"scrollWidth"in 
a&&(d||a.scrollWidth!==l.firstChild.scrollWidth)&&(a.scrollWidth=l.firstChild.scrollWidth
,n.push([l.parentNode.style,a.scrollWidth/a.ex/a.scale]));if(l.MathJaxMtds)for(var m=0
,g=l.MathJaxMtds.length;m<g;m++){if(!l.MathJaxMtds[m].parentNode)continue;if(d||l
.MathJaxMtds[m].firstChild.scrollWidth!==a.mtds[m])a.mtds[m]=l.MathJaxMtds[m].firstChild
.scrollWidth,r.push([l.MathJaxMtds[m],a.mtds[m]/a.ex])}}for(s=0,o=t.length;s<o;s++
)u=t[s],u.parentNode&&u.MathJax.elementJax&&u.parentNode.removeChild(u.previousSibling
);for(s=0,o=i.length;s<o;s++)i[s][0].fontSize=i[s][1]+"%";for(s=0,o=n.length;s<o;
s++)n[s][0].width=n[s][1].toFixed(3)+"ex";for(s=0,o=r.length;s<o;s++){var y=r[s][0
].getAttribute("style");y=y.replace(/(($|;)\s*min-width:).*?ex/,"$1 "+r[s][1].toFixed
(3)+"ex"),r[s][0].setAttribute("style",y)}setTimeout(e,e.delay)}})}),e.Startup.signal
.Post("MatchWebFonts Extension Ready"),t.loadComplete("[MathJax]/extensions/MatchWebFonts.js"
)})(MathJax.Hub,MathJax.Ajax);