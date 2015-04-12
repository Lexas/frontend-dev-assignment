/*************************************************************
 *
 *  MathJax/jax/input/AsciiMath/jax.js
 *  
 *  An Input Jax for AsciiMath notation 
 *  (see http://www1.chapman.edu/~jipsen/mathml/asciimath.html).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  The current development repository for AsciiMathML is
 *      https://github.com/mathjax/asciimathml
 *  
 *  A portion of this file is taken from
 *  ASCIIMathML.js Version 2.2 Mar 3, 2014, (c) Peter Jipsen http://www.chapman.edu/~jipsen
 *  and is used by permission of Peter Jipsen, who has agreed to allow us to
 *  release it under the Apache2 license (see below).  That portion is indicated
 *  via comments.
 *  
 *  The remainder falls under the copyright that follows.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2015 The MathJax Consortium
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

/******************************************************************
 *
 *   The following section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *   
 *   Some sections are commented out to save space in the
 *   minified version (but that is not strictly necessary).
 *   
 ******************************************************************/

/*
ASCIIMathML.js
==============
This file contains JavaScript functions to convert ASCII math notation
and (some) LaTeX to Presentation MathML. The conversion is done while the 
HTML page loads, and should work with Firefox and other browsers that can
render MathML.

Just add the next line to your HTML page with this file in the same folder:

<script type="text/javascript" src="ASCIIMathML.js"></script>

Version 2.2 Mar 3, 2014.
Latest version at https://github.com/mathjax/asciimathml
If you use it on a webpage, please send the URL to jipsen@chapman.edu

Copyright (c) 2014 Peter Jipsen and other ASCIIMathML.js contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/******************************************************************
 *
 *   The previous section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *
 ******************************************************************/

(function(e){function v(e){return d?s.createElement(e):s.createElementNS("http://www.w3.org/1999/xhtml"
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
:_,TEXT:D,UNARYUNDEROVER:P}}});var Z=[i,o];Z=null})(MathJax.InputJax.AsciiMath),function(
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
);