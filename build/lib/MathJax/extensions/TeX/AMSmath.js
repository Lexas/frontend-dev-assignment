/*
 *  /MathJax/extensions/TeX/AMSmath.js
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

MathJax.Extension["TeX/AMSmath"]={version:"2.5.1",number:0,startNumber:0,IDs:{},eqIDs
:{},labels:{},eqlabels:{},refs:[]},MathJax.Hub.Register.StartupHook("TeX Jax Ready"
,function(){var e=MathJax.ElementJax.mml,t=MathJax.InputJax.TeX,n=MathJax.Extension
["TeX/AMSmath"],r=t.Definitions,i=t.Stack.Item,s=t.config.equationNumbers,o=function(
e){var n=[];for(var r=0,i=e.length;r<i;r++)n[r]=t.Parse.prototype.Em(e[r]);return n
.join(" ")};r.Add({mathchar0mo:{iiiint:["2A0C",{texClass:e.TEXCLASS.OP}]},macros:
{mathring:["Accent","2DA"],nobreakspace:"Tilde",negmedspace:["Spacer",e.LENGTH.NEGATIVEMEDIUMMATHSPACE
],negthickspace:["Spacer",e.LENGTH.NEGATIVETHICKMATHSPACE],idotsint:["MultiIntegral"
,"\\int\\cdots\\int"],dddot:["Accent","20DB"],ddddot:["Accent","20DC"],sideset:["Macro"
,"\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}"
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
);