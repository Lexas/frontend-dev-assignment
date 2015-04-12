/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/config.js
 *  
 *  Initializes the HTML-CCS OutputJax  (the main definition is in
 *  MathJax/jax/input/HTML-CSS/jax.js, which is loaded when needed).
 *
 *  ---------------------------------------------------------------------
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

MathJax.OutputJax["HTML-CSS"]=MathJax.OutputJax({id:"HTML-CSS",version:"2.5.1",directory
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
.replace(/\s+$/,"")+s[1]]));for(var u=0,a=i.length;u<a;u++)o.appendChild(document
.createTextNode(i[u])),u<a-1&&o.appendChild(document.createElement("br"));t.parentNode
.insertBefore(o,t)}},e.config["HTML-CSS"]||{});e.Browser.version!=="0.0"&&!e.Browser
.versionAtLeast(n.minBrowserVersion[e.Browser]||0)&&(t.Translate=n.minBrowserTranslate
,e.Config({showProcessingMessages:!1}),MathJax.Message.Set(["MathJaxNotSupported"
,"Your browser does not support MathJax"],null,4e3),e.Startup.signal.Post("MathJax not supported"
))},MathJax.Hub,MathJax.OutputJax["HTML-CSS"]]),MathJax.OutputJax["HTML-CSS"].loadComplete
("config.js");