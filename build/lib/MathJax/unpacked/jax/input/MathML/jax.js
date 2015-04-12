/*************************************************************
 *
 *  MathJax/jax/input/MathML/jax.js
 *  
 *  Implements the MathML InputJax that reads mathematics in
 *  MathML format and converts it to the MML ElementJax
 *  internal format.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2015 The MathJax Consortium
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

(function(e,t){var n,r=function(e){return MathJax.Localization._.apply(MathJax.Localization
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
)t.Append(n.xml(o));else{var a=this.MakeMML(o);t.Append(a),a.mmlSelfClosing&&a.data
.length&&(t.Append.apply(t,a.data),a.data=[])}}if(t.type==="mrow"&&t.data.length>=2
){var f=t.data[0],l=t.data[t.data.length-1];f.type==="mo"&&f.Get("fence")&&l.type==="mo"&&
l.Get("fence")&&(f.data[0]&&(t.open=f.data.join("")),l.data[0]&&(t.close=l.data.join
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
e.Parse(s,r).mml}catch(a){if(!a.mathmlError)throw a;i=this.formatError(a,s,r)}return o
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
},e.loadComplete("jax.js")})(MathJax.InputJax.MathML,MathJax.Hub.Browser);