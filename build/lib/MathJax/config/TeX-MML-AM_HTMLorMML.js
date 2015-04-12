/*
 *  /MathJax/config/TeX-MML-AM_HTMLorMML.js
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

MathJax.Hub.Config({delayJaxRegistration:!0}),MathJax.Ajax.Preloading("[MathJax]/jax/input/TeX/config.js"
,"[MathJax]/jax/input/MathML/config.js","[MathJax]/jax/input/AsciiMath/config.js"
,"[MathJax]/jax/output/HTML-CSS/config.js","[MathJax]/jax/output/NativeMML/config.js"
,"[MathJax]/jax/output/CommonHTML/config.js","[MathJax]/config/MMLorHTML.js","[MathJax]/extensions/tex2jax.js"
,"[MathJax]/extensions/mml2jax.js","[MathJax]/extensions/asciimath2jax.js","[MathJax]/extensions/MathEvents.js"
,"[MathJax]/extensions/MathZoom.js","[MathJax]/extensions/MathMenu.js","[MathJax]/jax/element/mml/jax.js"
,"[MathJax]/extensions/toMathML.js","[MathJax]/extensions/TeX/noErrors.js","[MathJax]/extensions/TeX/noUndefined.js"
,"[MathJax]/jax/input/TeX/jax.js","[MathJax]/extensions/TeX/AMSmath.js","[MathJax]/extensions/TeX/AMSsymbols.js"
,"[MathJax]/jax/input/MathML/jax.js","[MathJax]/jax/input/AsciiMath/jax.js","[MathJax]/jax/output/CommonHTML/jax.js"
,"[MathJax]/extensions/CHTML-preview.js"),MathJax.Hub.Config({"v1.0-compatible":!1
}),MathJax.InputJax.TeX=MathJax.InputJax({id:"TeX",version:"2.5.0",directory:MathJax
.InputJax.directory+"/TeX",extensionDir:MathJax.InputJax.extensionDir+"/TeX",config
:{TagSide:"right",TagIndent:"0.8em",MultLineWidth:"85%",equationNumbers:{autoNumber
:"none",formatNumber:function(e){return e},formatTag:function(e){return"("+e+")"}
,formatID:function(e){return"mjx-eqn-"+String(e).replace(/[:"'<>&]/g,"")},formatURL
:function(e){return"#"+escape(e)},useLabelIds:!0}}}),MathJax.InputJax.TeX.Register
("math/tex"),MathJax.InputJax.TeX.loadComplete("config.js"),MathJax.InputJax.MathML=
MathJax.InputJax({id:"MathML",version:"2.5.0",directory:MathJax.InputJax.directory+"/MathML"
,extensionDir:MathJax.InputJax.extensionDir+"/MathML",entityDir:MathJax.InputJax.
directory+"/MathML/entities",config:{useMathMLspacing:!1}}),MathJax.InputJax.MathML
.Register("math/mml"),MathJax.InputJax.MathML.loadComplete("config.js"),MathJax.InputJax
.AsciiMath=MathJax.InputJax({id:"AsciiMath",version:"2.5.0",directory:MathJax.InputJax
.directory+"/AsciiMath",extensionDir:MathJax.InputJax.extensionDir+"/AsciiMath",config
:{fixphi:!0,useMathMLspacing:!0,displaystyle:!0,decimalsign:"."}}),MathJax.InputJax
.AsciiMath.Register("math/asciimath"),MathJax.InputJax.AsciiMath.loadComplete("config.js"
),MathJax.OutputJax["HTML-CSS"]=MathJax.OutputJax({id:"HTML-CSS",version:"2.5.1",
directory:MathJax.OutputJax.directory+"/HTML-CSS",extensionDir:MathJax.OutputJax.
extensionDir+"/HTML-CSS",autoloadDir:MathJax.OutputJax.directory+"/HTML-CSS/autoload"
,fontDir:MathJax.OutputJax.directory+"/HTML-CSS/fonts",webfontDir:MathJax.OutputJax
.fontDir+"/HTML-CSS",config:{noReflows:!0,matchFontHeight:!0,scale:100,minScaleAdjust
:50,availableFonts:["STIX","TeX"],preferredFont:"TeX",webFont:"TeX",imageFont:"TeX"
,undefinedFamily:"STIXGeneral,'Arial Unicode MS',serif",mtextFontInherit:!1,EqnChunk
:MathJax.Hub.Browser.isMobile?10:50,EqnChunkFactor:1.5,EqnChunkDelay:100,linebreaks
:{automatic:!1,width:"container"},styles:{".MathJax_Display":{"text-align":"center"
,margin:"1em 0em"},".MathJax .merror":{"background-color":"#FFFF88",color:"#CC0000"
,border:"1px solid #CC0000",padding:"1px 3px","font-style":"normal","font-size":"90%"
},".MathJax .MJX-monospace":{"font-family":"monospace"},".MathJax .MJX-sans-serif"
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
("config.js"),MathJax.OutputJax.NativeMML=MathJax.OutputJax({id:"NativeMML",version
:"2.5.1",directory:MathJax.OutputJax.directory+"/NativeMML",extensionDir:MathJax.
OutputJax.extensionDir+"/NativeMML",config:{matchFontHeight:!0,scale:100,minScaleAdjust
:50,styles:{"div.MathJax_MathML":{"text-align":"center",margin:".75em 0px"}}}}),MathJax
.Hub.config.delayJaxRegistration||MathJax.OutputJax.NativeMML.Register("jax/mml")
,MathJax.OutputJax.NativeMML.loadComplete("config.js"),MathJax.OutputJax.CommonHTML=
MathJax.OutputJax({id:"CommonHTML",version:"2.5.0",directory:MathJax.OutputJax.directory+"/CommonHTML"
,extensionDir:MathJax.OutputJax.extensionDir+"/CommonHTML",config:{scale:100,minScaleAdjust
:50,mtextFontInherit:!1,linebreaks:{automatic:!1,width:"container"}}}),MathJax.Hub
.config.delayJaxRegistration||MathJax.OutputJax.CommonHTML.Register("jax/mml"),MathJax
.OutputJax.CommonHTML.loadComplete("config.js"),function(e,t){var n="2.5.0",r=MathJax
.Hub.CombineConfig("MMLorHTML",{prefer:{MSIE:"MML",Firefox:"HTML",Opera:"HTML",Chrome
:"HTML",Safari:"HTML",other:"HTML"}}),i={Firefox:3,Opera:9.52,MSIE:6,Chrome:.3,Safari
:2,Konqueror:4},s=t.version==="0.0"||t.versionAtLeast(i[t]||0),o=t.isFirefox&&t.versionAtLeast
("1.5")||t.isMSIE&&t.hasMathPlayer||t.isSafari&&t.versionAtLeast("5.0")||t.isOpera&&
t.versionAtLeast("9.52");e.Register.StartupHook("End Config",function(){var t=r.prefer&&typeof 
r.prefer=="object"?r.prefer[MathJax.Hub.Browser]||r.prefer.other||"HTML":r.prefer
;s||o?o&&(t==="MML"||!s)?(MathJax.OutputJax.NativeMML?MathJax.OutputJax.NativeMML
.Register("jax/mml"):e.config.jax.unshift("output/NativeMML"),e.Startup.signal.Post
("NativeMML output selected")):(MathJax.OutputJax["HTML-CSS"]?MathJax.OutputJax["HTML-CSS"
].Register("jax/mml"):e.config.jax.unshift("output/HTML-CSS"),e.Startup.signal.Post
("HTML-CSS output selected")):(e.PreProcess.disabled=!0,e.prepareScripts.disabled=!0
,MathJax.Message.Set(["MathJaxNotSupported","Your browser does not support MathJax"
],null,4e3),e.Startup.signal.Post("MathJax not supported"))})}(MathJax.Hub,MathJax
.Hub.Browser),MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js"),MathJax.
Extension.tex2jax={version:"2.5.0",config:{inlineMath:[["\\(","\\)"]],displayMath
:[["$$","$$"],["\\[","\\]"]],balanceBraces:!0,skipTags:["script","noscript","style"
,"textarea","pre","code","annotation","annotation-xml"],ignoreClass:"tex2jax_ignore"
,processClass:"tex2jax_process",processEscapes:!1,processEnvironments:!0,processRefs
:!0,preview:"TeX"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub
.CombineConfig("tex2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this
,this.config.Augment),typeof this.config.previewTeX!="undefined"&&!this.config.previewTeX&&
(this.config.preview="none"),this.configured=!0),typeof e=="string"&&(e=document.
getElementById(e)),e||(e=document.body),this.createPatterns()&&this.scanElement(e
,e.nextSibling)},createPatterns:function(){var e=[],t=[],n,r,i=this.config;this.match=
{};for(n=0,r=i.inlineMath.length;n<r;n++)e.push(this.patternQuote(i.inlineMath[n]
[0])),this.match[i.inlineMath[n][0]]={mode:"",end:i.inlineMath[n][1],pattern:this
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
.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js"),MathJax.Extension.mml2jax={
version:"2.5.0",config:{preview:"mathml"},MMLnamespace:"http://www.w3.org/1998/Math/MathML"
,PreProcess:function(e){this.configured||(this.config=MathJax.Hub.CombineConfig("mml2jax"
,this.config),this.config.Augment&&MathJax.Hub.Insert(this,this.config.Augment),this
.InitBrowser(),this.configured=!0),typeof e=="string"&&(e=document.getElementById
(e)),e||(e=document.body);var t=[];this.PushMathElements(t,e,"math"),this.PushMathElements
(t,e,"math",this.MMLnamespace);var n,r;if(typeof document.namespaces!="undefined"
)try{for(n=0,r=document.namespaces.length;n<r;n++){var i=document.namespaces[n];i
.urn===this.MMLnamespace&&this.PushMathElements(t,e,i.name+":math")}}catch(s){}else{
var o=document.getElementsByTagName("html")[0];if(o)for(n=0,r=o.attributes.length
;n<r;n++){var u=o.attributes[n];u.nodeName.substr(0,6)==="xmlns:"&&u.nodeValue===
this.MMLnamespace&&this.PushMathElements(t,e,u.nodeName.substr(6)+":math")}}this.
ProcessMathArray(t)},PushMathElements:function(e,t,n,r){var i,s=MathJax.Hub.config
.preRemoveClass;if(r){if(!t.getElementsByTagNameNS)return;i=t.getElementsByTagNameNS
(r,n)}else i=t.getElementsByTagName(n);for(var o=0,u=i.length;o<u;o++){var a=i[o]
.parentNode;a&&a.className!==s&&!i[o].prefix==!r&&e.push(i[o])}},ProcessMathArray
:function(e){var t,n=e.length;if(n)if(this.MathTagBug)for(t=0;t<n;t++)e[t].nodeName==="MATH"?
this.ProcessMathFlattened(e[t]):this.ProcessMath(e[t]);else for(t=0;t<n;t++)this.
ProcessMath(e[t])},ProcessMath:function(e){var t=e.parentNode;if(!t||t.className===
MathJax.Hub.config.preRemoveClass)return;var n=document.createElement("script");n
.type="math/mml",t.insertBefore(n,e);if(this.AttributeBug){var r=this.OuterHTML(e
);this.CleanupHTML&&(r=r.replace(/<\?import .*?>/i,"").replace(/<\?xml:namespace .*?\/>/i
,""),r=r.replace(/&nbsp;/g,"&#xA0;")),MathJax.HTML.setScript(n,r),t.removeChild(e
)}else{var i=MathJax.HTML.Element("span");i.appendChild(e),MathJax.HTML.setScript
(n,i.innerHTML)}this.config.preview!=="none"&&this.createPreview(e,n)},ProcessMathFlattened
:function(e){var t=e.parentNode;if(!t||t.className===MathJax.Hub.config.preRemoveClass
)return;var n=document.createElement("script");n.type="math/mml",t.insertBefore(n
,e);var r="",i,s=e;while(e&&e.nodeName!=="/MATH")i=e,e=e.nextSibling,r+=this.NodeHTML
(i),i.parentNode.removeChild(i);e&&e.nodeName==="/MATH"&&e.parentNode.removeChild
(e),n.text=r+"</math>",this.config.preview!=="none"&&this.createPreview(s,n)},NodeHTML
:function(e){var t,n,r;if(e.nodeName==="#text")t=this.quoteHTML(e.nodeValue);else if(
e.nodeName==="#comment")t="<!--"+e.nodeValue+"-->";else{t="<"+e.nodeName.toLowerCase
();for(n=0,r=e.attributes.length;n<r;n++){var i=e.attributes[n];if(i.specified&&i
.nodeName.substr(0,10)!=="_moz-math-"){t+=" "+i.nodeName.toLowerCase().replace(/xmlns:xmlns/
,"xmlns")+"=";var s=i.nodeValue;s==null&&i.nodeName==="style"&&e.style&&(s=e.style
.cssText),t+='"'+this.quoteHTML(s)+'"'}}t+=">";if(e.outerHTML!=null&&e.outerHTML.
match(/(.<\/[A-Z]+>|\/>)$/)){for(n=0,r=e.childNodes.length;n<r;n++)t+=this.OuterHTML
(e.childNodes[n]);t+="</"+e.nodeName.toLowerCase()+">"}}return t},OuterHTML:function(
e){if(e.nodeName.charAt(0)==="#")return this.NodeHTML(e);if(!this.AttributeBug)return e
.outerHTML;var t=this.NodeHTML(e);for(var n=0,r=e.childNodes.length;n<r;n++)t+=this
.OuterHTML(e.childNodes[n]);return t+="</"+e.nodeName.toLowerCase()+">",t},quoteHTML
:function(e){return e==null&&(e=""),e.replace(/&/g,"&#x26;").replace(/</g,"&lt;")
.replace(/>/g,"&gt;").replace(/\"/g,"&quot;")},createPreview:function(e,t){var n=
this.config.preview;if(n==="none")return;var r=!1;n==="mathml"&&(r=!0,this.MathTagBug?
n="alttext":n=e.cloneNode(!0));if(n==="alttext"||n==="altimg"){r=!0;var i=this.filterPreview
(e.getAttribute("alttext"));if(n==="alttext")i!=null?n=MathJax.HTML.TextNode(i):n=
null;else{var s=e.getAttribute("altimg");if(s!=null){var o={width:e.getAttribute("altimg-width"
),height:e.getAttribute("altimg-height")};n=MathJax.HTML.Element("img",{src:s,alt
:i,style:o})}else n=null}}if(n){var u;r?(u=MathJax.HTML.Element("span",{className
:MathJax.Hub.config.preRemoveClass}),u.appendChild(n)):u=MathJax.HTML.Element("span"
,{className:MathJax.Hub.config.preRemoveClass},n),t.parentNode.insertBefore(u,t)}
},filterPreview:function(e){return e},InitBrowser:function(){var e=MathJax.HTML.Element
("span",{id:"<",className:"mathjax",innerHTML:"<math><mi>x</mi><mspace /></math>"
}),t=e.outerHTML||"";this.AttributeBug=t!==""&&!(t.match(/id="&lt;"/)&&t.match(/class="mathjax"/
)&&t.match(/<\/math>/)),this.MathTagBug=e.childNodes.length>1,this.CleanupHTML=MathJax
.Hub.Browser.isMSIE}},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension
.mml2jax],5),MathJax.Ajax.loadComplete("[MathJax]/extensions/mml2jax.js"),MathJax
.Extension.asciimath2jax={version:"2.5.0",config:{delimiters:[["`","`"]],skipTags
:["script","noscript","style","textarea","pre","code","annotation","annotation-xml"
],ignoreClass:"asciimath2jax_ignore",processClass:"asciimath2jax_process",preview
:"AsciiMath"},PreProcess:function(e){this.configured||(this.config=MathJax.Hub.CombineConfig
("asciimath2jax",this.config),this.config.Augment&&MathJax.Hub.Insert(this,this.config
.Augment),this.configured=!0),typeof e=="string"&&(e=document.getElementById(e)),
e||(e=document.body),this.createPatterns()&&this.scanElement(e,e.nextSibling)},createPatterns
:function(){var e=[],t,n,r=this.config;this.match={};if(r.delimiters.length===0)return!1
;for(t=0,n=r.delimiters.length;t<n;t++)e.push(this.patternQuote(r.delimiters[t][0
])),this.match[r.delimiters[t][0]]={mode:"",end:r.delimiters[t][1],pattern:this.endPattern
(r.delimiters[t][1])};this.start=new RegExp(e.sort(this.sortLength).join("|"),"g"
),this.skipTags=new RegExp("^("+r.skipTags.join("|")+")$","i");var i=[];return MathJax
.Hub.config.preRemoveClass&&i.push(MathJax.Hub.config.preRemoveClass),r.ignoreClass&&
i.push(r.ignoreClass),this.ignoreClass=i.length?new RegExp("(^| )("+i.join("|")+")( |$)"
):/^$/,this.processClass=new RegExp("(^| )("+r.processClass+")( |$)"),!0},patternQuote
:function(e){return e.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,"\\$1")},endPattern:function(
e){return new RegExp(this.patternQuote(e)+"|\\\\.","g")},sortLength:function(e,t)
{return e.length!==t.length?t.length-e.length:e==t?0:e<t?-1:1},scanElement:function(
e,t,n){var r,i,s,o;while(e&&e!=t)e.nodeName.toLowerCase()==="#text"?n||(e=this.scanText
(e)):(r=typeof e.className=="undefined"?"":e.className,i=typeof e.tagName=="undefined"?""
:e.tagName,typeof r!="string"&&(r=String(r)),o=this.processClass.exec(r),e.firstChild&&!
r.match(/(^| )MathJax/)&&(o||!this.skipTags.exec(i))&&(s=(n||this.ignoreClass.exec
(r))&&!o,this.scanElement(e.firstChild,t,s))),e&&(e=e.nextSibling)},scanText:function(
e){if(e.nodeValue.replace(/\s+/,"")=="")return e;var t,n;this.search={start:!0},this
.pattern=this.start;while(e){this.pattern.lastIndex=0;while(e&&e.nodeName.toLowerCase
()==="#text"&&(t=this.pattern.exec(e.nodeValue)))this.search.start?e=this.startMatch
(t,e):e=this.endMatch(t,e);this.search.matched&&(e=this.encloseMath(e));if(e){do n=
e,e=e.nextSibling;while(e&&(e.nodeName.toLowerCase()==="br"||e.nodeName.toLowerCase
()==="#comment"));if(!e||e.nodeName!=="#text")return n}}return e},startMatch:function(
e,t){var n=this.match[e[0]];return n!=null&&(this.search={end:n.end,mode:n.mode,open
:t,olen:e[0].length,opos:this.pattern.lastIndex-e[0].length},this.switchPattern(n
.pattern)),t},endMatch:function(e,t){return e[0]==this.search.end&&(this.search.close=
t,this.search.cpos=this.pattern.lastIndex,this.search.clen=this.search.isBeginEnd?0
:e[0].length,this.search.matched=!0,t=this.encloseMath(t),this.switchPattern(this
.start)),t},switchPattern:function(e){e.lastIndex=this.pattern.lastIndex,this.pattern=
e,this.search.start=e===this.start},encloseMath:function(e){var t=this.search,n=t
.close,r,i;t.cpos===n.length?n=n.nextSibling:n=n.splitText(t.cpos),n||(r=n=MathJax
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
.preview;if(n==="none")return;n==="AsciiMath"&&(n=[this.filterPreview(t)]),n&&(n=
MathJax.HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass},n),this
.insertNode(n))},createMathTag:function(e,t){var n=document.createElement("script"
);return n.type="math/asciimath"+e,MathJax.HTML.setScript(n,t),this.insertNode(n)
,n},filterPreview:function(e){return e},msieNewlineBug:MathJax.Hub.Browser.isMSIE&&
(document.documentMode||0)<9},MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax
.Extension.asciimath2jax]),MathJax.Ajax.loadComplete("[MathJax]/extensions/asciimath2jax.js"
),function(e,t,n,r,i,s,o){var u="2.5.0",a=MathJax.Extension,f=a.MathEvents={version
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
),function(e,t){var n,r=function(e){return MathJax.Localization._.apply(MathJax.Localization
,[["MathML",e]].concat([].slice.call(arguments,1)))};e.Parse=MathJax.Object.Subclass
({Init:function(e,t){this.Parse(e,t)},Parse:function(t,n){var r;typeof t!="string"?
r=t.parentNode:(r=e.ParseXML(this.preProcessMath.call(this,t)),r==null&&e.Error(["ErrorParsingMathML"
,"Error parsing MathML"]));var i=r.getElementsByTagName("parsererror")[0];i&&e.Error
(["ParsingError","Error parsing MathML: %1",i.textContent.replace(/This page.*?errors:|XML Parsing Error: |Below is a rendering of the page.*/g
,"")]),r.childNodes.length!==1&&e.Error(["MathMLSingleElement","MathML must be formed by a single element"
]);if(r.firstChild.nodeName.toLowerCase()==="html"){var s=r.getElementsByTagName("h1"
)[0];s&&s.textContent==="XML parsing error"&&s.nextSibling&&e.Error(["ParsingError"
,"Error parsing MathML: %1",String(s.nextSibling.nodeValue).replace(/fatal parsing error: /
,"")])}r.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/,"")!=="math"&&e.Error
(["MathMLRootElement","MathML must be formed by a <math> element, not %1","<"+r.firstChild
.nodeName+">"]);var o={math:r.firstChild,script:n};e.DOMfilterHooks.Execute(o),this
.mml=this.MakeMML(o.math)},MakeMML:function(t){var i=String(t.getAttribute("class"
)||""),s,o=t.nodeName.toLowerCase().replace(/^[a-z]+:/,""),u=i.match(/(^| )MJX-TeXAtom-([^ ]*)/
);if(u)s=this.TeXAtom(u[2]);else{if(!(n[o]&&n[o].isa&&n[o].isa(n.mbase)))return MathJax
.Hub.signal.Post(["MathML Jax - unknown node type",o]),n.Error(r("UnknownNodeType"
,"Unknown node type: %1",o));s=n[o]()}return this.AddAttributes(s,t),this.CheckClass
(s,s["class"]),this.AddChildren(s,t),e.config.useMathMLspacing&&(s.useMMLspacing=8
),s},TeXAtom:function(e){var t=n.TeXAtom().With({texClass:n.TEXCLASS[e]});return t
.texClass===n.TEXCLASS.OP&&(t.movesupsub=t.movablelimits=!0),t},CheckClass:function(
e,t){t=(t||"").split(/ /);var r=[];for(var i=0,s=t.length;i<s;i++)if(t[i].substr(0
,4)==="MJX-"){if(t[i]==="MJX-arrow")e.notation.match("/"+n.NOTATION.UPDIAGONALARROW+"/"
)||(e.notation+=" "+n.NOTATION.UPDIAGONALARROW);else if(t[i]==="MJX-variant")e.variantForm=!0
,MathJax.Extension["TeX/AMSsymbols"]||MathJax.Hub.RestartAfter(MathJax.Ajax.Require
("[MathJax]/extensions/TeX/AMSsymbols.js"));else if(t[i].substr(0,11)!=="MJX-TeXAtom"
){e.mathvariant=t[i].substr(3);if(e.mathvariant==="-tex-caligraphic-bold"||e.mathvariant==="-tex-oldstyle-bold"
)MathJax.Extension["TeX/boldsymbol"]||MathJax.Hub.RestartAfter(MathJax.Ajax.Require
("[MathJax]/extensions/TeX/boldsymbol.js"))}}else r.push(t[i]);r.length?e["class"
]=r.join(" "):delete e["class"]},AddAttributes:function(e,t){e.attr={},e.attrNames=
[];for(var r=0,i=t.attributes.length;r<i;r++){var s=t.attributes[r].name;s=="xlink:href"&&
(s="href");if(s.match(/:/))continue;if(s.match(/^_moz-math-((column|row)(align|line)|font-style)$/
))continue;var o=t.attributes[r].value;o=this.filterAttribute(s,o);var u=e.type==="mstyle"?
n.math.prototype.defaults:e.defaults;o!=null&&(o.toLowerCase()==="true"?o=!0:o.toLowerCase
()==="false"&&(o=!1),u[s]!=null||n.copyAttributes[s]?e[s]=o:e.attr[s]=o,e.attrNames
.push(s))}},filterAttribute:function(e,t){return t},AddChildren:function(t,r){for(
var i=0,s=r.childNodes.length;i<s;i++){var o=r.childNodes[i];if(o.nodeName==="#comment"
)continue;if(o.nodeName==="#text")if((t.isToken||t.isChars)&&!t.mmlSelfClosing){var u=
o.nodeValue;t.isToken&&(u=u.replace(/&([a-z][a-z0-9]*);/ig,this.replaceEntity),u=
this.trimSpace(u)),t.Append(n.chars(u))}else o.nodeValue.match(/\S/)&&e.Error(["UnexpectedTextNode"
,"Unexpected text node: %1","'"+o.nodeValue+"'"]);else if(t.type==="annotation-xml"
)t.Append(n.xml(o));else{var f=this.MakeMML(o);t.Append(f),f.mmlSelfClosing&&f.data
.length&&(t.Append.apply(t,f.data),f.data=[])}}if(t.type==="mrow"&&t.data.length>=2
){var l=t.data[0],h=t.data[t.data.length-1];l.type==="mo"&&l.Get("fence")&&h.type==="mo"&&
h.Get("fence")&&(l.data[0]&&(t.open=l.data.join("")),h.data[0]&&(t.close=h.data.join
("")))}},preProcessMath:function(e){e.match(/^<[a-z]+:/i)&&!e.match(/^<[^<>]* xmlns:/
)&&(e=e.replace(/^<([a-z]+)(:math)/i,'<$1$2 xmlns:$1="http://www.w3.org/1998/Math/MathML"'
));var t=e.match(/^(<math( ('.*?'|".*?"|[^>])+)>)/i);return t&&t[2].match(/ (?!xmlns=)[a-z]+=\"http:/i
)&&(e=t[1].replace(/ (?!xmlns=)([a-z]+=(['"])http:.*?\2)/ig," xmlns:$1 $1")+e.substr
(t[0].length)),e.match(/^<math/i)&&!e.match(/^<[^<>]* xmlns=/)&&(e=e.replace(/^<(math)/i
,'<math xmlns="http://www.w3.org/1998/Math/MathML"')),e=e.replace(/^\s*(?:\/\/)?<!(--)?\[CDATA\[((.|\n)*)(\/\/)?\]\]\1>\s*$/
,"$2"),e.replace(/&([a-z][a-z0-9]*);/ig,this.replaceEntity)},trimSpace:function(e
){return e.replace(/[\t\n\r]/g," ").replace(/^ +/,"").replace(/ +$/,"").replace(/  +/g
," ")},replaceEntity:function(t,n){if(n.match(/^(lt|amp|quot)$/))return t;if(e.Parse
.Entity[n])return e.Parse.Entity[n];var r=n.charAt(0).toLowerCase(),i=n.match(/^[a-zA-Z](fr|scr|opf)$/
);return i&&(r=i[1]),e.Parse.loaded[r]||(e.Parse.loaded[r]=!0,MathJax.Hub.RestartAfter
(MathJax.Ajax.Require(e.entityDir+"/"+r+".js"))),t}},{loaded:[]}),e.Augment({sourceMenuTitle
:["OriginalMathML","Original MathML"],prefilterHooks:MathJax.Callback.Hooks(!0),DOMfilterHooks
:MathJax.Callback.Hooks(!0),postfilterHooks:MathJax.Callback.Hooks(!0),Translate:
function(r){this.ParseXML||(this.ParseXML=this.createParser());var i,s,o={script:
r};r.firstChild&&r.firstChild.nodeName.toLowerCase().replace(/^[a-z]+:/,"")==="math"?
o.math=r.firstChild:(s=MathJax.HTML.getScript(r),t.isMSIE&&(s=s.replace(/(&nbsp;)+$/
,"")),o.math=s);var u=this.prefilterHooks.Execute(o);if(u)return u;s=o.math;try{i=
e.Parse(s,r).mml}catch(f){if(!f.mathmlError)throw f;i=this.formatError(f,s,r)}return o
.math=n(i),this.postfilterHooks.Execute(o)||o.math},prefilterMath:function(e,t){return e
},prefilterMathML:function(e,t){return e},formatError:function(e,t,r){var i=e.message
.replace(/\n.*/,"");return MathJax.Hub.signal.Post(["MathML Jax - parse error",i,
t,r]),n.Error(i)},Error:function(e){throw e instanceof Array&&(e=r.apply(r,e)),MathJax
.Hub.Insert(Error(e),{mathmlError:!0})},parseDOM:function(e){return this.parser.parseFromString
(e,"text/xml")},parseMS:function(e){return this.parser.loadXML(e)?this.parser:null
},parseDIV:function(e){this.div.innerHTML="<div>"+e.replace(/<([a-z]+)([^>]*)\/>/g
,"<$1$2></$1>")+"</div>";var t=this.div.firstChild;return this.div.innerHTML="",t
},parseError:function(e){return null},createMSParser:function(){var e=null,t=["MSXML2.DOMDocument.6.0"
,"MSXML2.DOMDocument.5.0","MSXML2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument.2.0"
,"Microsoft.XMLDOM"];for(var n=0,r=t.length;n<r&&!e;n++)try{e=new ActiveXObject(t
[n])}catch(i){}return e},createParser:function(){return window.DOMParser?(this.parser=new 
DOMParser,this.parseDOM):window.ActiveXObject?(this.parser=this.createMSParser(),
this.parser?(this.parser.async=!1,this.parseMS):(MathJax.Localization.Try(this.parserCreationError
),this.parseError)):(this.div=MathJax.Hub.Insert(document.createElement("div"),{style
:{visibility:"hidden",overflow:"hidden",height:"1px",position:"absolute",top:0}})
,document.body.firstChild?document.body.insertBefore(this.div,document.body.firstChild
):document.body.appendChild(this.div),this.parseDIV)},parserCreationError:function(
){alert(r("CantCreateXMLParser","MathJax can't create an XML parser for MathML.  Check that\nthe 'Script ActiveX controls marked safe for scripting' security\nsetting is enabled (use the Internet Options item in the Tools\nmenu, and select the Security panel, then press the Custom Level\nbutton to check this).\n\nMathML equations will not be able to be processed by MathJax."
))},Startup:function(){n=MathJax.ElementJax.mml,n.mspace.Augment({mmlSelfClosing:!0
}),n.none.Augment({mmlSelfClosing:!0}),n.mprescripts.Augment({mmlSelfClosing:!0})
}}),e.prefilterHooks.Add(function(t){t.math=typeof t.math=="string"?e.prefilterMath
(t.math,t.script):e.prefilterMathML(t.math,t.script)}),e.Parse.Entity={ApplyFunction
:"⁡",Backslash:"∖",Because:"∵",Breve:"˘",Cap:"⋒",CenterDot:"·",CircleDot:"⊙",CircleMinus
:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",Congruent:"≡",ContourIntegral:"∮",Coproduct:"∐"
,Cross:"⨯",Cup:"⋓",CupCap:"≍",Dagger:"‡",Del:"∇",Delta:"Δ",Diamond:"⋄",DifferentialD
:"ⅆ",DotEqual:"≐",DoubleDot:"¨",DoubleRightTee:"⊨",DoubleVerticalBar:"∥",DownArrow
:"↓",DownLeftVector:"↽",DownRightVector:"⇁",DownTee:"⊤",Downarrow:"⇓",Element:"∈"
,EqualTilde:"≂",Equilibrium:"⇌",Exists:"∃",ExponentialE:"ⅇ",FilledVerySmallSquare
:"▪",ForAll:"∀",Gamma:"Γ",Gg:"⋙",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual
:"≧",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Hacek:"ˇ",Hat:"^",HumpDownHump
:"≎",HumpEqual:"≏",Im:"ℑ",ImaginaryI:"ⅈ",Integral:"∫",Intersection:"⋂",InvisibleComma
:"⁣",InvisibleTimes:"⁢",Lambda:"Λ",Larr:"↞",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowRightArrow
:"⇆",LeftCeiling:"⌈",LeftDownVector:"⇃",LeftFloor:"⌊",LeftRightArrow:"↔",LeftTee:"⊣"
,LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpVector:"↿",LeftVector:"↼",Leftarrow
:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessSlantEqual
:"⩽",LessTilde:"≲",Ll:"⋘",Lleftarrow:"⇚",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷"
,LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lsh
:"↰",MinusPlus:"∓",NestedGreaterGreater:"≫",NestedLessLess:"≪",NotDoubleVerticalBar
:"∦",NotElement:"∉",NotEqual:"≠",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱"
,NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotPrecedes
:"⊀",NotPrecedesSlantEqual:"⋠",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSubsetEqual
:"⊈",NotSucceeds:"⊁",NotSucceedsSlantEqual:"⋡",NotSupersetEqual:"⊉",NotTilde:"≁",
NotVerticalBar:"∤",Omega:"Ω",OverBar:"‾",OverBrace:"⏞",PartialD:"∂",Phi:"Φ",Pi:"Π"
,PlusMinus:"±",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde
:"≾",Product:"∏",Proportional:"∝",Psi:"Ψ",Rarr:"↠",Re:"ℜ",ReverseEquilibrium:"⇋",
RightAngleBracket:"⟩",RightArrow:"→",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDownVector
:"⇂",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTriangle:"⊳",RightTriangleEqual
:"⊵",RightUpVector:"↾",RightVector:"⇀",Rightarrow:"⇒",Rrightarrow:"⇛",Rsh:"↱",Sigma
:"Σ",SmallCircle:"∘",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",
SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",
Star:"⋆",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual
:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Superset:"⊃",SupersetEqual:"⊇",Supset
:"⋑",Therefore:"∴",Theta:"Θ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde
:"≈",UnderBar:"_",UnderBrace:"⏟",Union:"⋃",UnionPlus:"⊎",UpArrow:"↑",UpDownArrow:"↕"
,UpTee:"⊥",Uparrow:"⇑",Updownarrow:"⇕",Upsilon:"Υ",Vdash:"⊩",Vee:"⋁",VerticalBar:"∣"
,VerticalTilde:"≀",Vvdash:"⊪",Wedge:"⋀",Xi:"Ξ",acute:"´",aleph:"ℵ",alpha:"α",amalg
:"⨿",and:"∧",ang:"∠",angmsd:"∡",angsph:"∢",ape:"≊",backprime:"‵",backsim:"∽",backsimeq
:"⋍",beta:"β",beth:"ℶ",between:"≬",bigcirc:"◯",bigodot:"⨀",bigoplus:"⨁",bigotimes
:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",
blacklozenge:"⧫",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",bowtie
:"⋈",boxdl:"┐",boxdr:"┌",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxur:"└"
,bsol:"\\",bull:"•",cap:"∩",check:"✓",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft
:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚"
,circleddash:"⊝",clubs:"♣",colon:":",comp:"∁",ctdot:"⋯",cuepr:"⋞",cuesc:"⋟",cularr
:"↶",cup:"∪",curarr:"↷",curlyvee:"⋎",curlywedge:"⋏",dagger:"†",daleth:"ℸ",ddarr:"⇊"
,deg:"°",delta:"δ",digamma:"ϝ",div:"÷",divideontimes:"⋇",dot:"˙",doteqdot:"≑",dotplus
:"∔",dotsquare:"⊡",dtdot:"⋱",ecir:"≖",efDot:"≒",egs:"⪖",ell:"ℓ",els:"⪕",empty:"∅"
,epsi:"ε",epsiv:"ϵ",erDot:"≓",eta:"η",eth:"ð",flat:"♭",fork:"⋔",frown:"⌢",gEl:"⪌"
,gamma:"γ",gap:"⪆",gimel:"ℷ",gnE:"≩",gnap:"⪊",gne:"⪈",gnsim:"⋧",gt:">",gtdot:"⋗",
harrw:"↭",hbar:"ℏ",hellip:"…",hookleftarrow:"↩",hookrightarrow:"↪",imath:"ı",infin
:"∞",intcal:"⊺",iota:"ι",jmath:"ȷ",kappa:"κ",kappav:"ϰ",lEg:"⪋",lambda:"λ",lap:"⪅"
,larrlp:"↫",larrtl:"↢",lbrace:"{",lbrack:"[",le:"≤",leftleftarrows:"⇇",leftthreetimes
:"⋋",lessdot:"⋖",lmoust:"⎰",lnE:"≨",lnap:"⪉",lne:"⪇",lnsim:"⋦",longmapsto:"⟼",looparrowright
:"↬",lowast:"∗",loz:"◊",lt:"<",ltimes:"⋉",ltri:"◃",macr:"¯",malt:"✠",mho:"℧",mu:"μ"
,multimap:"⊸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nRightarrow:"⇏",nVDash:"⊯",nVdash
:"⊮",natur:"♮",nearr:"↗",nharr:"↮",nlarr:"↚",not:"¬",nrarr:"↛",nu:"ν",nvDash:"⊭",
nvdash:"⊬",nwarr:"↖",omega:"ω",omicron:"ο",or:"∨",osol:"⊘",period:".",phi:"φ",phiv
:"ϕ",pi:"π",piv:"ϖ",prap:"⪷",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",prime:"′",
psi:"ψ",rarrtl:"↣",rbrace:"}",rbrack:"]",rho:"ρ",rhov:"ϱ",rightrightarrows:"⇉",rightthreetimes
:"⋌",ring:"˚",rmoust:"⎱",rtimes:"⋊",rtri:"▹",scap:"⪸",scnE:"⪶",scnap:"⪺",scnsim:"⋩"
,sdot:"⋅",searr:"↘",sect:"§",sharp:"♯",sigma:"σ",sigmav:"ς",simne:"≆",smile:"⌣",spades
:"♠",sub:"⊂",subE:"⫅",subnE:"⫋",subne:"⊊",supE:"⫆",supnE:"⫌",supne:"⊋",swarr:"↙",
tau:"τ",theta:"θ",thetav:"ϑ",tilde:"˜",times:"×",triangle:"▵",triangleq:"≜",upsi:"υ"
,upuparrows:"⇈",veebar:"⊻",vellip:"⋮",weierp:"℘",xi:"ξ",yen:"¥",zeta:"ζ",zigrarr:"⇝"
},e.loadComplete("jax.js")}(MathJax.InputJax.MathML,MathJax.Hub.Browser),function(
e){function v(e){return d?s.createElement(e):s.createElementNS("http://www.w3.org/1999/xhtml"
,e)}function g(e){return d?s.createElement("m:"+e):s.createElementNS(m,e)}function y
(e,t){var n;return d?n=s.createElement("m:"+e):n=s.createElementNS(m,e),t&&n.appendChild
(t),n}function b(e,t){B=B.concat([{input:e,tag:"mo",output:t,tex:null,ttype:M}]),
B.sort(j);for(u=0;u<B.length;u++)F[u]=B[u].input}function j(e,t){return e.input>t
.input?1:-1}function I(){var e=[],t;for(t=0;t<B.length;t++)B[t].tex&&(e[e.length]=
{input:B[t].tex,tag:B[t].tag,output:B[t].output,ttype:B[t].ttype,acc:B[t].acc||!1
});B=B.concat(e),q()}function q(){var e;B.sort(j);for(e=0;e<B.length;e++)F[e]=B[e
].input}function R(e,t){B=B.concat([{input:e,tag:"mo",output:t,tex:null,ttype:M}]
),q()}function U(e,t){var n;e.charAt(t)=="\\"&&e.charAt(t+1)!="\\"&&e.charAt(t+1)!=" "?
n=e.slice(t+1):n=e.slice(t);for(var r=0;r<n.length&&n.charCodeAt(r)<=32;r+=1);return n
.slice(r)}function z(e,t,n){if(n==0){var r,i;n=-1,r=e.length;while(n+1<r)i=n+r>>1
,e[i]<t?n=i:r=i;return r}for(var s=n;s<e.length&&e[s]<t;s++);return s}function W(
e){var t=0,n=0,r,i,s,o="",u=!0;for(var a=1;a<=e.length&&u;a++)i=e.slice(0,a),n=t,
t=z(F,i,n),t<F.length&&e.slice(0,F[t].length)==F[t]&&(o=F[t],r=t,a=o.length),u=t<
F.length&&e.slice(0,F[t].length)>=F[t];$=J;if(o!="")return J=B[r].ttype,B[r];J=x,
t=1,i=e.slice(0,1);var f=!0;while("0"<=i&&i<="9"&&t<=e.length)i=e.slice(t,t+1),t++
;if(i==h){i=e.slice(t,t+1);if("0"<=i&&i<="9"){f=!1,t++;while("0"<=i&&i<="9"&&t<=e
.length)i=e.slice(t,t+1),t++}}return f&&t>1||t>2?(i=e.slice(0,t-1),s="mn"):(t=2,i=
e.slice(0,1),s=("A">i||i>"Z")&&("a">i||i>"z")?"mo":"mi"),i=="-"&&$==C?(J=C,{input
:i,tag:s,output:i,ttype:T,func:!0}):{input:i,tag:s,output:i,ttype:x}}function X(e
){var t;if(!e.hasChildNodes())return;e.firstChild.hasChildNodes()&&(e.nodeName=="mrow"||
e.nodeName=="M:MROW")&&(t=e.firstChild.firstChild.nodeValue,(t=="("||t=="["||t=="{"
)&&e.removeChild(e.firstChild)),e.lastChild.hasChildNodes()&&(e.nodeName=="mrow"||
e.nodeName=="M:MROW")&&(t=e.lastChild.firstChild.nodeValue,(t==")"||t=="]"||t=="}"
)&&e.removeChild(e.lastChild))}function K(e){var t,n,r,i,o,u=s.createDocumentFragment
();e=U(e,0),t=W(e);if(t==null||t.ttype==L&&V>0)return[null,e];t.ttype==M&&(e=t.output+
U(e,t.input.length),t=W(e));switch(t.ttype){case O:case x:return e=U(e,t.input.length
),[y(t.tag,s.createTextNode(t.output)),e];case k:return V++,e=U(e,t.input.length)
,r=G(e,!0),V--,typeof t.invisible=="boolean"&&t.invisible?n=y("mrow",r[0]):(n=y("mo"
,s.createTextNode(t.output)),n=y("mrow",n),n.appendChild(r[0])),[n,r[1]];case D:return t!=
H&&(e=U(e,t.input.length)),e.charAt(0)=="{"?i=e.indexOf("}"):e.charAt(0)=="("?i=e
.indexOf(")"):e.charAt(0)=="["?i=e.indexOf("]"):t==H?i=e.slice(1).indexOf('"')+1:
i=0,i==-1&&(i=e.length),o=e.slice(1,i),o.charAt(0)==" "&&(n=y("mspace"),n.setAttribute
("width","1ex"),u.appendChild(n)),u.appendChild(y(t.tag,s.createTextNode(o))),o.charAt
(o.length-1)==" "&&(n=y("mspace"),n.setAttribute("width","1ex"),u.appendChild(n))
,e=U(e,i+1),[y("mrow",u),e];case P:case T:e=U(e,t.input.length),r=K(e);if(r[0]==null
)return[y(t.tag,s.createTextNode(t.output)),e];if(typeof t.func=="boolean"&&t.func
)return o=e.charAt(0),o=="^"||o=="_"||o=="/"||o=="|"||o==","||t.input.length==1&&
t.input.match(/\w/)&&o!="("?[y(t.tag,s.createTextNode(t.output)),e]:(n=y("mrow",y
(t.tag,s.createTextNode(t.output))),n.appendChild(r[0]),[n,r[1]]);X(r[0]);if(t.input=="sqrt"
)return[y(t.tag,r[0]),r[1]];if(typeof t.rewriteleftright!="undefined")return n=y("mrow"
,y("mo",s.createTextNode(t.rewriteleftright[0]))),n.appendChild(r[0]),n.appendChild
(y("mo",s.createTextNode(t.rewriteleftright[1]))),[n,r[1]];if(t.input=="cancel")return n=
y(t.tag,r[0]),n.setAttribute("notation","updiagonalstrike"),[n,r[1]];if(typeof t.
acc=="boolean"&&t.acc)return n=y(t.tag,r[0]),n.appendChild(y("mo",s.createTextNode
(t.output))),[n,r[1]];if(!d&&typeof t.codes!="undefined")for(i=0;i<r[0].childNodes
.length;i++)if(r[0].childNodes[i].nodeName=="mi"||r[0].nodeName=="mi"){o=r[0].nodeName=="mi"?
r[0].firstChild.nodeValue:r[0].childNodes[i].firstChild.nodeValue;var a=[];for(var f=0
;f<o.length;f++)o.charCodeAt(f)>64&&o.charCodeAt(f)<91?a+=t.codes[o.charCodeAt(f)-65
]:o.charCodeAt(f)>96&&o.charCodeAt(f)<123?a+=t.codes[o.charCodeAt(f)-71]:a+=o.charAt
(f);r[0].nodeName=="mi"?r[0]=y("mo").appendChild(s.createTextNode(a)):r[0].replaceChild
(y("mo").appendChild(s.createTextNode(a)),r[0].childNodes[i])}return n=y(t.tag,r[0
]),n.setAttribute(t.atname,t.atval),[n,r[1]];case N:e=U(e,t.input.length),r=K(e);
if(r[0]==null)return[y("mo",s.createTextNode(t.input)),e];X(r[0]);var l=K(r[1]);if(
l[0]==null)return[y("mo",s.createTextNode(t.input)),e];X(l[0]);if(t.input=="color"
)return e.charAt(0)=="{"?i=e.indexOf("}"):e.charAt(0)=="("?i=e.indexOf(")"):e.charAt
(0)=="["&&(i=e.indexOf("]")),o=e.slice(1,i),n=y(t.tag,l[0]),n.setAttribute("mathcolor"
,o),[n,l[1]];return(t.input=="root"||t.input=="stackrel")&&u.appendChild(l[0]),u.
appendChild(r[0]),t.input=="frac"&&u.appendChild(l[0]),[y(t.tag,u),l[1]];case C:return e=
U(e,t.input.length),[y("mo",s.createTextNode(t.output)),e];case A:return e=U(e,t.
input.length),n=y("mspace"),n.setAttribute("width","1ex"),u.appendChild(n),u.appendChild
(y(t.tag,s.createTextNode(t.output))),n=y("mspace"),n.setAttribute("width","1ex")
,u.appendChild(n),[y("mrow",u),e];case _:return V++,e=U(e,t.input.length),r=G(e,!1
),V--,o="",r[0].lastChild!=null&&(o=r[0].lastChild.firstChild.nodeValue),o=="|"?(
n=y("mo",s.createTextNode(t.output)),n=y("mrow",n),n.appendChild(r[0]),[n,r[1]]):
(n=y("mo",s.createTextNode("∣")),n=y("mrow",n),[n,e]);default:return e=U(e,t.input
.length),[y(t.tag,s.createTextNode(t.output)),e]}}function Q(e){var t,n,r,i,o,u;e=
U(e,0),n=W(e),o=K(e),i=o[0],e=o[1],t=W(e);if(t.ttype==C&&t.input!="/"){e=U(e,t.input
.length),o=K(e),o[0]==null?o[0]=y("mo",s.createTextNode("□")):X(o[0]),e=o[1],u=n.
ttype==O||n.ttype==P;if(t.input=="_"){r=W(e);if(r.input=="^"){e=U(e,r.input.length
);var a=K(e);X(a[0]),e=a[1],i=y(u?"munderover":"msubsup",i),i.appendChild(o[0]),i
.appendChild(a[0]),i=y("mrow",i)}else i=y(u?"munder":"msub",i),i.appendChild(o[0]
)}else t.input=="^"&&u?(i=y("mover",i),i.appendChild(o[0])):(i=y(t.tag,i),i.appendChild
(o[0]));typeof n.func!="undefined"&&n.func&&(r=W(e),r.ttype!=C&&r.ttype!=L&&(o=Q(
e),i=y("mrow",i),i.appendChild(o[0]),e=o[1]))}return[i,e]}function G(e,t){var n,r
,i,o,u=s.createDocumentFragment();do e=U(e,0),i=Q(e),r=i[0],e=i[1],n=W(e),n.ttype==
C&&n.input=="/"?(e=U(e,n.input.length),i=Q(e),i[0]==null?i[0]=y("mo",s.createTextNode
("□")):X(i[0]),e=i[1],X(r),r=y(n.tag,r),r.appendChild(i[0]),u.appendChild(r),n=W(
e)):r!=undefined&&u.appendChild(r);while((n.ttype!=L&&(n.ttype!=_||t)||V==0)&&n!=
null&&n.output!="");if(n.ttype==L||n.ttype==_){var a=u.childNodes.length;if(a>0&&
u.childNodes[a-1].nodeName=="mrow"){var f=u.childNodes[a-1].lastChild.firstChild.
nodeValue;if(f==")"||f=="]"){var l=u.childNodes[a-1].firstChild.firstChild.nodeValue
;if(l=="("&&f==")"&&n.output!="}"||l=="["&&f=="]"){var c=[],h=!0,p=u.childNodes.length
;for(o=0;h&&o<p;o+=2){c[o]=[],r=u.childNodes[o],h&&(h=r.nodeName=="mrow"&&(o==p-1||
r.nextSibling.nodeName=="mo"&&r.nextSibling.firstChild.nodeValue==",")&&r.firstChild
.firstChild.nodeValue==l&&r.lastChild.firstChild.nodeValue==f);if(h)for(var d=0;d<
r.childNodes.length;d++)r.childNodes[d].firstChild.nodeValue==","&&(c[o][c[o].length
]=d);h&&o>1&&(h=c[o].length==c[o-2].length)}h=h&&(c.length>1||c[0].length>0);if(h
){var v,m,g,b,w=s.createDocumentFragment();for(o=0;o<p;o+=2){v=s.createDocumentFragment
(),m=s.createDocumentFragment(),r=u.firstChild,g=r.childNodes.length,b=0,r.removeChild
(r.firstChild);for(d=1;d<g-1;d++)typeof c[o][b]!="undefined"&&d==c[o][b]?(r.removeChild
(r.firstChild),v.appendChild(y("mtd",m)),b++):m.appendChild(r.firstChild);v.appendChild
(y("mtd",m)),u.childNodes.length>2&&(u.removeChild(u.firstChild),u.removeChild(u.
firstChild)),w.appendChild(y("mtr",v))}r=y("mtable",w),typeof n.invisible=="boolean"&&
n.invisible&&r.setAttribute("columnalign","left"),u.replaceChild(r,u.firstChild)}
}}}e=U(e,n.input.length);if(typeof n.invisible!="boolean"||!n.invisible)r=y("mo",
s.createTextNode(n.output)),u.appendChild(r)}return[u,e]}function Y(e,t){var n,r;
return V=0,e=e.replace(/&nbsp;/g,""),e=e.replace(/&gt;/g,">"),e=e.replace(/&lt;/g
,"<"),e=e.replace(/(Sin|Cos|Tan|Arcsin|Arccos|Arctan|Sinh|Cosh|Tanh|Cot|Sec|Csc|Log|Ln|Abs)/g
,function(e){return e.toLowerCase()}),n=G(e.replace(/^\s+/g,""),!1)[0],r=y("mstyle"
,n),a!=""&&r.setAttribute("mathcolor",a),f!=""&&r.setAttribute("fontfamily",f),l&&
r.setAttribute("displaystyle","true"),r=y("math",r),c&&r.setAttribute("title",e.replace
(/\s+/g," ")),r}var t,n=MathJax.Object.Subclass({firstChild:null,lastChild:null,Init
:function(){this.childNodes=[]},appendChild:function(e){return e.parent&&e.parent
.removeChild(e),this.lastChild&&(this.lastChild.nextSibling=e),this.firstChild||(
this.firstChild=e),this.childNodes.push(e),e.parent=this,this.lastChild=e,e},removeChild
:function(e){for(var t=0,n=this.childNodes.length;t<n;t++)if(this.childNodes[t]===
e)break;if(t===n)return;return this.childNodes.splice(t,1),e===this.firstChild&&(
this.firstChild=e.nextSibling),e===this.lastChild&&(this.childNodes.length?this.lastChild=
this.childNodes[this.childNodes.length-1]:this.lastChild=null),t&&(this.childNodes
[t-1].nextSibling=e.nextSibling),e.nextSibling=e.parent=null,e},replaceChild:function(
e,t){for(var n=0,r=this.childNodes.length;n<r;n++)if(this.childNodes[n]===t)break;
return n?this.childNodes[n-1].nextSibling=e:this.firstChild=e,n>=r-1&&(this.lastChild=
e),this.childNodes[n]=e,e.nextSibling=t.nextSibling,t.nextSibling=t.parent=null,t
},hasChildNodes:function(e){return this.childNodes.length>0},toString:function(){
return"{"+this.childNodes.join("")+"}"}}),r=function(){t=MathJax.ElementJax.mml;var e=
t.mbase.prototype.Init;t.mbase.Augment({firstChild:null,lastChild:null,nodeValue:
null,nextSibling:null,Init:function(){var t=e.apply(this,arguments)||this;return t
.childNodes=t.data,t.nodeName=t.type,t},appendChild:function(e){e.parent&&e.parent
.removeChild(e);var t=arguments;e.isa(n)&&(t=e.childNodes,e.data=e.childNodes=[],
e.firstChild=e.lastChild=null);for(var r=0,i=t.length;r<i;r++)e=t[r],this.lastChild&&
(this.lastChild.nextSibling=e),this.firstChild||(this.firstChild=e),this.Append(e
),this.lastChild=e;return e},removeChild:function(e){for(var t=0,n=this.childNodes
.length;t<n;t++)if(this.childNodes[t]===e)break;if(t===n)return;return this.childNodes
.splice(t,1),e===this.firstChild&&(this.firstChild=e.nextSibling),e===this.lastChild&&
(this.childNodes.length?this.lastChild=this.childNodes[this.childNodes.length-1]:
this.lastChild=null),t&&(this.childNodes[t-1].nextSibling=e.nextSibling),e.nextSibling=
e.parent=null,e},replaceChild:function(e,t){for(var n=0,r=this.childNodes.length;
n<r;n++)if(this.childNodes[n]===t)break;return n?this.childNodes[n-1].nextSibling=
e:this.firstChild=e,n>=r-1&&(this.lastChild=e),this.SetData(n,e),e.nextSibling=t.
nextSibling,t.nextSibling=t.parent=null,t},hasChildNodes:function(e){return this.
childNodes.length>0},setAttribute:function(e,t){this[e]=t}})},i={},s={getElementById
:!0,createElementNS:function(n,r){var i=t[r]();return r==="mo"&&e.config.useMathMLspacing&&
(i.useMMLspacing=128),i},createTextNode:function(e){return t.chars(e).With({nodeValue
:e})},createDocumentFragment:function(){return n()}},o={appName:"MathJax"},u,a="blue"
,f="serif",l=!0,c=!0,h=".",p=!0,d=o.appName.slice(0,9)=="Microsoft",m="http://www.w3.org/1998/Math/MathML"
,w=["𝒜","ℬ","𝒞","𝒟","ℰ","ℱ","𝒢","ℋ","ℐ","𝒥","𝒦","ℒ","ℳ","𝒩","𝒪","𝒫","𝒬"
,"ℛ","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵","𝒶","𝒷","𝒸","𝒹","ℯ","𝒻","ℊ","𝒽"
,"𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","ℴ","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎"
,"𝓏"],E=["𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒"
,"𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ","𝔞","𝔟","𝔠","𝔡","𝔢","𝔣"
,"𝔤","𝔥","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔳","𝔴"
,"𝔵","𝔶","𝔷"],S=["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄"
,"ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝕒","𝕓","𝕔","𝕕","𝕖"
,"𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧"
,"𝕨","𝕩","𝕪","𝕫"],x=0,T=1,N=2,C=3,k=4,L=5,A=6,O=7,M=8,_=9,D=10,P=15,H={input:'"'
,tag:"mtext",output:"mbox",tex:null,ttype:D},B=[{input:"alpha",tag:"mi",output:"α"
,tex:null,ttype:x},{input:"beta",tag:"mi",output:"β",tex:null,ttype:x},{input:"chi"
,tag:"mi",output:"χ",tex:null,ttype:x},{input:"delta",tag:"mi",output:"δ",tex:null
,ttype:x},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:x},{input:"epsi",tag:"mi"
,output:"ε",tex:"epsilon",ttype:x},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null
,ttype:x},{input:"eta",tag:"mi",output:"η",tex:null,ttype:x},{input:"gamma",tag:"mi"
,output:"γ",tex:null,ttype:x},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:x
},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:x},{input:"kappa",tag:"mi",output
:"κ",tex:null,ttype:x},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:x},{input
:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:x},{input:"lamda",tag:"mi",output:"λ"
,tex:null,ttype:x},{input:"Lamda",tag:"mo",output:"Λ",tex:null,ttype:x},{input:"mu"
,tag:"mi",output:"μ",tex:null,ttype:x},{input:"nu",tag:"mi",output:"ν",tex:null,ttype
:x},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:x},{input:"Omega",tag:"mo",
output:"Ω",tex:null,ttype:x},{input:"phi",tag:"mi",output:p?"ϕ":"φ",tex:null,ttype
:x},{input:"varphi",tag:"mi",output:p?"φ":"ϕ",tex:null,ttype:x},{input:"Phi",tag:"mo"
,output:"Φ",tex:null,ttype:x},{input:"pi",tag:"mi",output:"π",tex:null,ttype:x},{
input:"Pi",tag:"mo",output:"Π",tex:null,ttype:x},{input:"psi",tag:"mi",output:"ψ"
,tex:null,ttype:x},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:x},{input:"rho"
,tag:"mi",output:"ρ",tex:null,ttype:x},{input:"sigma",tag:"mi",output:"σ",tex:null
,ttype:x},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:x},{input:"tau",tag:"mi"
,output:"τ",tex:null,ttype:x},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:x
},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:x},{input:"Theta",tag:"mo"
,output:"Θ",tex:null,ttype:x},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype
:x},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:x},{input:"Xi",tag:"mo",output
:"Ξ",tex:null,ttype:x},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:x},{input
:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:x},{input:"**",tag:"mo",output:"∗",tex:"ast"
,ttype:x},{input:"***",tag:"mo",output:"⋆",tex:"star",ttype:x},{input:"//",tag:"mo"
,output:"/",tex:null,ttype:x},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",
ttype:x},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:x},{input:"xx",tag
:"mo",output:"×",tex:"times",ttype:x},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype
:x},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:M},{input:"@",tag:"mo",output
:"∘",tex:"circ",ttype:x},{input:"o+",tag:"mo",output:"⊕",tex:"oplus",ttype:x},{input
:"ox",tag:"mo",output:"⊗",tex:"otimes",ttype:x},{input:"o.",tag:"mo",output:"⊙",tex
:"odot",ttype:x},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:O},{input:"prod"
,tag:"mo",output:"∏",tex:null,ttype:O},{input:"^^",tag:"mo",output:"∧",tex:"wedge"
,ttype:x},{input:"^^^",tag:"mo",output:"⋀",tex:"bigwedge",ttype:O},{input:"vv",tag
:"mo",output:"∨",tex:"vee",ttype:x},{input:"vvv",tag:"mo",output:"⋁",tex:"bigvee"
,ttype:O},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:x},{input:"nnn",tag:"mo"
,output:"⋂",tex:"bigcap",ttype:O},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype
:x},{input:"uuu",tag:"mo",output:"⋃",tex:"bigcup",ttype:O},{input:"!=",tag:"mo",output
:"≠",tex:"ne",ttype:x},{input:":=",tag:"mo",output:":=",tex:null,ttype:x},{input:"lt"
,tag:"mo",output:"<",tex:null,ttype:x},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype
:x},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:x},{input:"gt",tag:"mo",output
:">",tex:null,ttype:x},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:x},{input:"gt="
,tag:"mo",output:"≥",tex:"geq",ttype:x},{input:"-<",tag:"mo",output:"≺",tex:"prec"
,ttype:x},{input:"-lt",tag:"mo",output:"≺",tex:null,ttype:x},{input:">-",tag:"mo"
,output:"≻",tex:"succ",ttype:x},{input:"-<=",tag:"mo",output:"⪯",tex:"preceq",ttype
:x},{input:">-=",tag:"mo",output:"⪰",tex:"succeq",ttype:x},{input:"in",tag:"mo",output
:"∈",tex:null,ttype:x},{input:"!in",tag:"mo",output:"∉",tex:"notin",ttype:x},{input
:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:x},{input:"sup",tag:"mo",output:"⊃"
,tex:"supset",ttype:x},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:x},
{input:"supe",tag:"mo",output:"⊇",tex:"supseteq",ttype:x},{input:"-=",tag:"mo",output
:"≡",tex:"equiv",ttype:x},{input:"~=",tag:"mo",output:"≅",tex:"cong",ttype:x},{input
:"~~",tag:"mo",output:"≈",tex:"approx",ttype:x},{input:"prop",tag:"mo",output:"∝"
,tex:"propto",ttype:x},{input:"and",tag:"mtext",output:"and",tex:null,ttype:A},{input
:"or",tag:"mtext",output:"or",tex:null,ttype:A},{input:"not",tag:"mo",output:"¬",
tex:"neg",ttype:x},{input:"=>",tag:"mo",output:"⇒",tex:"implies",ttype:x},{input:"if"
,tag:"mo",output:"if",tex:null,ttype:A},{input:"<=>",tag:"mo",output:"⇔",tex:"iff"
,ttype:x},{input:"AA",tag:"mo",output:"∀",tex:"forall",ttype:x},{input:"EE",tag:"mo"
,output:"∃",tex:"exists",ttype:x},{input:"_|_",tag:"mo",output:"⊥",tex:"bot",ttype
:x},{input:"TT",tag:"mo",output:"⊤",tex:"top",ttype:x},{input:"|--",tag:"mo",output
:"⊢",tex:"vdash",ttype:x},{input:"|==",tag:"mo",output:"⊨",tex:"models",ttype:x},
{input:"(",tag:"mo",output:"(",tex:null,ttype:k},{input:")",tag:"mo",output:")",tex
:null,ttype:L},{input:"[",tag:"mo",output:"[",tex:null,ttype:k},{input:"]",tag:"mo"
,output:"]",tex:null,ttype:L},{input:"{",tag:"mo",output:"{",tex:null,ttype:k},{input
:"}",tag:"mo",output:"}",tex:null,ttype:L},{input:"|",tag:"mo",output:"|",tex:null
,ttype:_},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:k},{input:":)",tag:"mo"
,output:"〉",tex:"rangle",ttype:L},{input:"<<",tag:"mo",output:"〈",tex:null,ttype:
k},{input:">>",tag:"mo",output:"〉",tex:null,ttype:L},{input:"{:",tag:"mo",output:"{:"
,tex:null,ttype:k,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:L
,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:x},{input:"dx",tag
:"mi",output:"{:d x:}",tex:null,ttype:M},{input:"dy",tag:"mi",output:"{:d y:}",tex
:null,ttype:M},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:M},{input:"dt"
,tag:"mi",output:"{:d t:}",tex:null,ttype:M},{input:"oint",tag:"mo",output:"∮",tex
:null,ttype:x},{input:"del",tag:"mo",output:"∂",tex:"partial",ttype:x},{input:"grad"
,tag:"mo",output:"∇",tex:"nabla",ttype:x},{input:"+-",tag:"mo",output:"±",tex:"pm"
,ttype:x},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:x},{input:"oo",tag
:"mo",output:"∞",tex:"infty",ttype:x},{input:"aleph",tag:"mo",output:"ℵ",tex:null
,ttype:x},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:x},{input:":.",tag
:"mo",output:"∴",tex:"therefore",ttype:x},{input:"/_",tag:"mo",output:"∠",tex:"angle"
,ttype:x},{input:"/_\\",tag:"mo",output:"△",tex:"triangle",ttype:x},{input:"'",tag
:"mo",output:"′",tex:"prime",ttype:x},{input:"tilde",tag:"mover",output:"~",tex:null
,ttype:T,acc:!0},{input:"\\ ",tag:"mo",output:" ",tex:null,ttype:x},{input:"quad"
,tag:"mo",output:"  ",tex:null,ttype:x},{input:"qquad",tag:"mo",output:"    ",tex
:null,ttype:x},{input:"cdots",tag:"mo",output:"⋯",tex:null,ttype:x},{input:"vdots"
,tag:"mo",output:"⋮",tex:null,ttype:x},{input:"ddots",tag:"mo",output:"⋱",tex:null
,ttype:x},{input:"diamond",tag:"mo",output:"⋄",tex:null,ttype:x},{input:"square",
tag:"mo",output:"□",tex:null,ttype:x},{input:"|__",tag:"mo",output:"⌊",tex:"lfloor"
,ttype:x},{input:"__|",tag:"mo",output:"⌋",tex:"rfloor",ttype:x},{input:"|~",tag:"mo"
,output:"⌈",tex:"lceiling",ttype:x},{input:"~|",tag:"mo",output:"⌉",tex:"rceiling"
,ttype:x},{input:"CC",tag:"mo",output:"ℂ",tex:null,ttype:x},{input:"NN",tag:"mo",
output:"ℕ",tex:null,ttype:x},{input:"QQ",tag:"mo",output:"ℚ",tex:null,ttype:x},{input
:"RR",tag:"mo",output:"ℝ",tex:null,ttype:x},{input:"ZZ",tag:"mo",output:"ℤ",tex:null
,ttype:x},{input:"f",tag:"mi",output:"f",tex:null,ttype:T,func:!0},{input:"g",tag
:"mi",output:"g",tex:null,ttype:T,func:!0},{input:"lim",tag:"mo",output:"lim",tex
:null,ttype:O},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:O},{input:"sin",
tag:"mo",output:"sin",tex:null,ttype:T,func:!0},{input:"cos",tag:"mo",output:"cos"
,tex:null,ttype:T,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:T,func
:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:T,func:!0},{input:"cosh"
,tag:"mo",output:"cosh",tex:null,ttype:T,func:!0},{input:"tanh",tag:"mo",output:"tanh"
,tex:null,ttype:T,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:T,func
:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:T,func:!0},{input:"csc",tag
:"mo",output:"csc",tex:null,ttype:T,func:!0},{input:"arcsin",tag:"mo",output:"arcsin"
,tex:null,ttype:T,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype
:T,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:T,func:!0},{input
:"coth",tag:"mo",output:"coth",tex:null,ttype:T,func:!0},{input:"sech",tag:"mo",output
:"sech",tex:null,ttype:T,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype
:T,func:!0},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:T,func:!0},{input:"abs"
,tag:"mo",output:"abs",tex:null,ttype:T,rewriteleftright:["|","|"]},{input:"norm"
,tag:"mo",output:"norm",tex:null,ttype:T,rewriteleftright:["∥","∥"]},{input:"floor"
,tag:"mo",output:"floor",tex:null,ttype:T,rewriteleftright:["⌊","⌋"]},{input:"ceil"
,tag:"mo",output:"ceil",tex:null,ttype:T,rewriteleftright:["⌈","⌉"]},{input:"log"
,tag:"mo",output:"log",tex:null,ttype:T,func:!0},{input:"ln",tag:"mo",output:"ln"
,tex:null,ttype:T,func:!0},{input:"det",tag:"mo",output:"det",tex:null,ttype:T,func
:!0},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:x},{input:"mod",tag:"mo",output
:"mod",tex:null,ttype:x},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:T,func
:!0},{input:"lcm",tag:"mo",output:"lcm",tex:null,ttype:T,func:!0},{input:"lub",tag
:"mo",output:"lub",tex:null,ttype:x},{input:"glb",tag:"mo",output:"glb",tex:null,
ttype:x},{input:"min",tag:"mo",output:"min",tex:null,ttype:O},{input:"max",tag:"mo"
,output:"max",tex:null,ttype:O},{input:"uarr",tag:"mo",output:"↑",tex:"uparrow",ttype
:x},{input:"darr",tag:"mo",output:"↓",tex:"downarrow",ttype:x},{input:"rarr",tag:"mo"
,output:"→",tex:"rightarrow",ttype:x},{input:"->",tag:"mo",output:"→",tex:"to",ttype
:x},{input:">->",tag:"mo",output:"↣",tex:"rightarrowtail",ttype:x},{input:"->>",tag
:"mo",output:"↠",tex:"twoheadrightarrow",ttype:x},{input:">->>",tag:"mo",output:"⤖"
,tex:"twoheadrightarrowtail",ttype:x},{input:"|->",tag:"mo",output:"↦",tex:"mapsto"
,ttype:x},{input:"larr",tag:"mo",output:"←",tex:"leftarrow",ttype:x},{input:"harr"
,tag:"mo",output:"↔",tex:"leftrightarrow",ttype:x},{input:"rArr",tag:"mo",output:"⇒"
,tex:"Rightarrow",ttype:x},{input:"lArr",tag:"mo",output:"⇐",tex:"Leftarrow",ttype
:x},{input:"hArr",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:x},{input:"sqrt"
,tag:"msqrt",output:"sqrt",tex:null,ttype:T},{input:"root",tag:"mroot",output:"root"
,tex:null,ttype:N},{input:"frac",tag:"mfrac",output:"/",tex:null,ttype:N},{input:"/"
,tag:"mfrac",output:"/",tex:null,ttype:C},{input:"stackrel",tag:"mover",output:"stackrel"
,tex:null,ttype:N},{input:"_",tag:"msub",output:"_",tex:null,ttype:C},{input:"^",
tag:"msup",output:"^",tex:null,ttype:C},{input:"hat",tag:"mover",output:"^",tex:null
,ttype:T,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:T,acc:!0
},{input:"vec",tag:"mover",output:"→",tex:null,ttype:T,acc:!0},{input:"dot",tag:"mover"
,output:".",tex:null,ttype:T,acc:!0},{input:"ddot",tag:"mover",output:"..",tex:null
,ttype:T,acc:!0},{input:"ul",tag:"munder",output:"̲",tex:"underline",ttype:T,acc:!0
},{input:"ubrace",tag:"munder",output:"⏟",tex:"underbrace",ttype:P,acc:!0},{input
:"obrace",tag:"mover",output:"⏞",tex:"overbrace",ttype:P,acc:!0},{input:"text",tag
:"mtext",output:"text",tex:null,ttype:D},{input:"mbox",tag:"mtext",output:"mbox",
tex:null,ttype:D},{input:"color",tag:"mstyle",ttype:N},{input:"cancel",tag:"menclose"
,output:"cancel",tex:null,ttype:T},H,{input:"bb",tag:"mstyle",atname:"mathvariant"
,atval:"bold",output:"bb",tex:null,ttype:T},{input:"mathbf",tag:"mstyle",atname:"mathvariant"
,atval:"bold",output:"mathbf",tex:null,ttype:T},{input:"sf",tag:"mstyle",atname:"mathvariant"
,atval:"sans-serif",output:"sf",tex:null,ttype:T},{input:"mathsf",tag:"mstyle",atname
:"mathvariant",atval:"sans-serif",output:"mathsf",tex:null,ttype:T},{input:"bbb",
tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:null,ttype
:T,codes:S},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck"
,output:"mathbb",tex:null,ttype:T,codes:S},{input:"cc",tag:"mstyle",atname:"mathvariant"
,atval:"script",output:"cc",tex:null,ttype:T,codes:w},{input:"mathcal",tag:"mstyle"
,atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:T,codes:w},{
input:"tt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"tt",tex:null
,ttype:T},{input:"mathtt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output
:"mathtt",tex:null,ttype:T},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur"
,output:"fr",tex:null,ttype:T,codes:E},{input:"mathfrak",tag:"mstyle",atname:"mathvariant"
,atval:"fraktur",output:"mathfrak",tex:null,ttype:T,codes:E}],F=[],V,$,J;c=!1,f=""
,a="",function(){for(var e=0,t=B.length;e<t;e++)B[e].codes&&delete B[e].codes,B[e
].func&&(B[e].tag="mi")}(),e.Augment({AM:{Init:function(){l=e.config.displaystyle
,h=e.config.decimal||e.config.decimalsign;if(!e.config.fixphi)for(var t=0,n=B.length
;t<n;t++)B[t].input==="phi"&&(B[t].output="φ"),B[t].input==="varphi"&&(B[t].output="ϕ"
,t=n);r(),I()},Augment:function(e){for(var t in e)if(e.hasOwnProperty(t)){switch(
t){case"displaystyle":l=e[t];break;case"decimal":decimal=e[t];break;case"parseMath"
:Y=e[t];break;case"parseExpr":G=e[t];break;case"parseIexpr":Q=e[t];break;case"parseSexpr"
:K=e[t];break;case"removeBrackets":X=e[t];break;case"getSymbol":W=e[t];break;case"position"
:z=e[t];break;case"removeCharsAndBlanks":U=e[t];break;case"createMmlNode":y=e[t];
break;case"createElementMathML":g=e[t];break;case"createElementXHTML":v=e[t];break;
case"initSymbols":I=e[t];break;case"refreshSymbols":q=e[t];break;case"compareNames"
:j=e[t]}this[t]=e[t]}},parseMath:Y,parseExpr:G,parseIexpr:Q,parseSexr:K,removeBrackets
:X,getSymbol:W,position:z,removeCharsAndBlanks:U,createMmlNode:y,createElementMathML
:g,createElementXHTML:v,initSymbols:I,refreshSymbols:q,compareNames:j,createDocumentFragment
:n,document:s,define:R,newcommand:b,symbols:B,names:F,TOKEN:{CONST:x,UNARY:T,BINARY
:N,INFIX:C,LEFTBRACKET:k,RIGHTBRACKET:L,SPACE:A,UNDEROVER:O,DEFINITION:M,LEFTRIGHT
:_,TEXT:D,UNARYUNDEROVER:P}}});var Z=[i,o];Z=null}(MathJax.InputJax.AsciiMath),function(
e){var t;e.Augment({sourceMenuTitle:["AsciiMathInput","AsciiMath Input"],annotationEncoding
:"text/x-asciimath",prefilterHooks:MathJax.Callback.Hooks(!0),postfilterHooks:MathJax
.Callback.Hooks(!0),Translate:function(e){var n,r=MathJax.HTML.getScript(e),i={math
:r,script:e},s=this.prefilterHooks.Execute(i);if(s)return s;r=i.math;try{n=this.AM
.parseMath(r)}catch(o){if(!o.asciimathError)throw o;n=this.formatError(o,r)}return i
.math=t(n),this.postfilterHooks.Execute(i),this.postfilterHooks.Execute(i)||i.math
},formatError:function(e,n,r){var i=e.message.replace(/\n.*/,"");return MathJax.Hub
.signal.Post(["AsciiMath Jax - parse error",i,n,r]),t.Error(i)},Error:function(e)
{throw MathJax.Hub.Insert(Error(e),{asciimathError:!0})},Startup:function(){t=MathJax
.ElementJax.mml,this.AM.Init()}}),e.loadComplete("jax.js")}(MathJax.InputJax.AsciiMath
),function(e,t,n,r){var i,s,o,u,a="'Times New Roman',Times,STIXGeneral,serif",f={".MJXc-script"
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
("[MathJax]/extensions/CHTML-preview.js"),MathJax.Ajax.loadComplete("[MathJax]/config/TeX-MML-AM_HTMLorMML.js"
);