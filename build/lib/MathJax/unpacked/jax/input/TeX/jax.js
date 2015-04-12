/*************************************************************
 *
 *  MathJax/jax/input/TeX/jax.js
 *  
 *  Implements the TeX InputJax that reads mathematics in
 *  TeX and LaTeX format and converts it to the MML ElementJax
 *  internal format.
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

(function(e,t,n){var r,i=" ",s=function(e){return MathJax.Localization._.apply(MathJax
.Localization,[["TeX",e]].concat([].slice.call(arguments,1)))},o=MathJax.Object.Subclass
({Init:function(e,t){this.global={isInner:t},this.data=[u.start(this.global)],e&&
(this.data[0].env=e),this.env=this.data[0].env},Push:function(){var e,t,n,i;for(e=0
,t=arguments.length;e<t;e++){n=arguments[e];if(!n)continue;n instanceof r.mbase&&
(n=u.mml(n)),n.global=this.global,i=this.data.length?this.Top().checkItem(n):!0;if(
i instanceof Array)this.Pop(),this.Push.apply(this,i);else if(i instanceof u)this
.Pop(),this.Push(i);else if(i){this.data.push(n);if(n.env){for(var s in this.env)
this.env.hasOwnProperty(s)&&(n.env[s]=this.env[s]);this.env=n.env}else n.env=this
.env}}},Pop:function(){var e=this.data.pop();return e.isOpen||delete e.env,this.env=
this.data.length?this.Top().env:{},e},Top:function(e){return e==null&&(e=1),this.
data.length<e?null:this.data[this.data.length-e]},Prev:function(e){var t=this.Top
();return e?t.data[t.data.length-1]:t.Pop()},toString:function(){return"stack[\n  "+
this.data.join("\n  ")+"\n]"}}),u=o.Item=MathJax.Object.Subclass({type:"base",endError
:["ExtraOpenMissingClose","Extra open brace or missing close brace"],closeError:["ExtraCloseMissingOpen"
,"Extra close brace or missing open brace"],rightError:["MissingLeftExtraRight","Missing \\left or extra \\right"
],Init:function(){this.isOpen&&(this.env={}),this.data=[],this.Push.apply(this,arguments
)},Push:function(){this.data.push.apply(this.data,arguments)},Pop:function(){return this
.data.pop()},mmlData:function(e,t){return e==null&&(e=!0),this.data.length===1&&!
t?this.data[0]:r.mrow.apply(r,this.data).With(e?{inferred:!0}:{})},checkItem:function(
t){t.type==="over"&&this.isOpen&&(t.num=this.mmlData(!1),this.data=[]);if(t.type==="cell"&&
this.isOpen){if(t.linebreak)return!1;e.Error(["Misplaced","Misplaced %1",t.name])
}return t.isClose&&this[t.type+"Error"]&&e.Error(this[t.type+"Error"]),t.isNotStack?
(this.Push(t.data[0]),!1):!0},With:function(e){for(var t in e)e.hasOwnProperty(t)&&
(this[t]=e[t]);return this},toString:function(){return this.type+"["+this.data.join
("; ")+"]"}});u.start=u.Subclass({type:"start",isOpen:!0,Init:function(e){this.SUPER
(arguments).Init.call(this),this.global=e},checkItem:function(e){return e.type==="stop"?
u.mml(this.mmlData()):this.SUPER(arguments).checkItem.call(this,e)}}),u.stop=u.Subclass
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
,t.display,t.script)}),e.loadComplete("jax.js")})(MathJax.InputJax.TeX,MathJax.Hub
,MathJax.Ajax);