/*
 *  /MathJax/extensions/toMathML.js
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

MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",function(){var e="2.5.0"
,t=MathJax.ElementJax.mml;SETTINGS=MathJax.Hub.config.menuSettings,t.mbase.Augment
({toMathML:function(e){var t=this.inferred&&this.parent.inferRow;e==null&&(e="");
var n=this.type,r=this.toMathMLattributes();if(n==="mspace")return e+"<"+n+r+" />"
;var i=[],s=this.isToken?"":e+(t?"":"  ");for(var o=0,u=this.data.length;o<u;o++)
this.data[o]?i.push(this.data[o].toMathML(s)):!this.isToken&&!this.isChars&&i.push
(s+"<mrow />");return this.isToken||this.isChars?e+"<"+n+r+">"+i.join("")+"</"+n+">"
:t?i.join("\n"):i.length===0||i.length===1&&i[0]===""?e+"<"+n+r+" />":e+"<"+n+r+">\n"+
i.join("\n")+"\n"+e+"</"+n+">"},toMathMLattributes:function(){var e=this.type==="mstyle"?
t.math.prototype.defaults:this.defaults,n=this.attrNames||t.copyAttributeNames,r=
t.skipAttributes,i=t.copyAttributes,s=[];this.type==="math"&&(!this.attr||!this.attr
.xmlns)&&s.push('xmlns="http://www.w3.org/1998/Math/MathML"');if(!this.attrNames)
for(var o in e)!r[o]&&!i[o]&&e.hasOwnProperty(o)&&this[o]!=null&&this[o]!==e[o]&&
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
("[MathJax]/extensions/toMathML.js");