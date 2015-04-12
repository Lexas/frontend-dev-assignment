/*************************************************************
 *
 *  MathJax/extensions/TeX/unicode.js
 *  
 *  Implements the \unicode extension to TeX to allow arbitrary unicode
 *  code points to be entered into the TeX file.  You can specify
 *  the height and depth of the character (the width is determined by
 *  the browser), and the default font from which to take the character.
 *  
 *  Examples:
 *      \unicode{65}                        % the character 'A'
 *      \unicode{x41}                       % the character 'A'
 *      \unicode[.55,0.05]{x22D6}           % less-than with dot, with height .55 and depth 0.05
 *      \unicode[.55,0.05][Geramond]{x22D6} % same taken from Geramond font
 *      \unicode[Garamond]{x22D6}           % same, but with default height, depth of .8,.2
 *
 *  Once a size and font are provided for a given code point, they need
 *  not be specified again in subsequent \unicode calls for that character.
 *  Note that a font list can be given, but Internet Explorer has a buggy
 *  implementation of font-family where it only looks in the first
 *  available font and if the glyph is not in that, it does not look at
 *  later fonts, but goes directly to the default font as set in the
 *  Internet-Options/Font panel.  For this reason, the default font list is
 *  "STIXGeneral,'Arial Unicode MS'", so if the user has STIX fonts, the
 *  symbol will be taken from that (almost all the symbols are in
 *  STIXGeneral), otherwise Arial Unicode MS is tried.
 *  
 *  To configure the default font list, use
 *  
 *      MathJax.Hub.Config({
 *        TeX: {
 *          unicode: {
 *            fonts: "STIXGeneral,'Arial Unicode MS'"
 *          }
 *        }
 *      });
 *
 *  The result of \unicode will have TeX class ORD (i.e., it will act like a
 *  variable).  Use \mathbin, \mathrel, etc, to specify a different class.
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

MathJax.Extension["TeX/unicode"]={version:"2.5.1",unicode:{},config:MathJax.Hub.CombineConfig
("TeX.unicode",{fonts:"STIXGeneral,'Arial Unicode MS'"})},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){var e=MathJax.InputJax.TeX,t=MathJax.ElementJax.mml,n=
MathJax.Extension["TeX/unicode"].unicode;e.Definitions.Add({macros:{unicode:"Unicode"
}},null,!0),e.Parse.Augment({Unicode:function(e){var r=this.GetBrackets(e),i;r&&(
r.replace(/ /g,"").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)?(r=r.replace
(/ /g,"").split(/,/),i=this.GetBrackets(e)):(i=r,r=null));var s=this.trimSpaces(this
.GetArgument(e)),o=parseInt(s.match(/^x/)?"0"+s:s);n[o]?i||(i=n[o][2]):n[o]=[800,200
,i,o],r&&(n[o][0]=Math.floor(r[0]*1e3),n[o][1]=Math.floor(r[1]*1e3));var u=this.stack
.env.font,a={};i?(n[o][2]=a.fontfamily=i.replace(/"/g,"'"),u&&(u.match(/bold/)&&(
a.fontweight="bold"),u.match(/italic|-mathit/)&&(a.fontstyle="italic"))):u&&(a.mathvariant=
u),a.unicode=[].concat(n[o]),this.Push(t.mtext(t.entity("#"+s)).With(a))}}),MathJax
.Hub.Startup.signal.Post("TeX unicode Ready")}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.Extension["TeX/unicode"].config
.fonts,n=e.mbase.prototype.HTMLgetVariant;e.mbase.Augment({HTMLgetVariant:function(
){var e=n.apply(this,arguments);e.unicode&&(delete e.unicode,delete e.FONTS);if(!
this.unicode)return e;e.unicode=!0,e.defaultFont||(e=MathJax.Hub.Insert({},e),e.defaultFont=
{family:t});var r=this.unicode[2];return r?r+=","+t:r=t,e.defaultFont[this.unicode
[3]]=[this.unicode[0],this.unicode[1],500,0,500,{isUnknown:!0,isUnicode:!0,font:r
}],e}})}),MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var e=MathJax
.ElementJax.mml,t=MathJax.Extension["TeX/unicode"].config.fonts,n=e.mbase.prototype
.SVGgetVariant;e.mbase.Augment({SVGgetVariant:function(){var e=n.call(this);return e
.unicode&&(delete e.unicode,delete e.FONTS),this.unicode?(e.unicode=!0,e.forceFamily||
(e=MathJax.Hub.Insert({},e)),e.defaultFamily=t,e.noRemap=!0,e.h=this.unicode[0],e
.d=this.unicode[1],e):e}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/unicode.js"
);