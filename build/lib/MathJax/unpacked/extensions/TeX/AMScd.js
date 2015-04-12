/*************************************************************
 *
 *  MathJax/extensions/TeX/AMScd.js
 *  
 *  Implements the CD environment for commutative diagrams.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013-2015 The MathJax Consortium
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

MathJax.Extension["TeX/AMScd"]={version:"2.5.0",config:MathJax.Hub.CombineConfig("TeX.CD"
,{colspace:"5pt",rowspace:"5pt",harrowsize:"2.75em",varrowsize:"1.75em",hideHorizontalLabels
:!1})},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var e=MathJax.
ElementJax.mml,t=MathJax.InputJax.TeX,n=t.Stack.Item,r=t.Definitions,i=MathJax.Extension
["TeX/AMScd"].config;r.environment.CD="CD_env",r.special["@"]="CD_arrow",r.macros
.minCDarrowwidth="CD_minwidth",r.macros.minCDarrowheight="CD_minheight",t.Parse.Augment
({CD_env:function(e){return this.Push(e),n.array().With({arraydef:{columnalign:"center"
,columnspacing:i.colspace,rowspacing:i.rowspace,displaystyle:!0},minw:this.stack.
env.CD_minw||i.harrowsize,minh:this.stack.env.CD_minh||i.varrowsize})},CD_arrow:function(
r){var s=this.string.charAt(this.i);if(!s.match(/[><VA.|=]/))return this.Other(r)
;this.i++;var o=this.stack.Top();if(!o.isa(n.array)||o.data.length)this.CD_cell(r
),o=this.stack.Top();var u=o.table.length%2===1,a=(o.row.length+(u?0:1))%2;while(
a)this.CD_cell(r),a--;var f,l={minsize:o.minw,stretchy:!0},c={minsize:o.minh,stretchy
:!0,symmetric:!0,lspace:0,rspace:0};if(s!==".")if(s==="|")f=this.mmlToken(e.mo("∥"
).With(c));else if(s==="=")f=this.mmlToken(e.mo("=").With(l));else{var h={">":"→"
,"<":"←",V:"↓",A:"↑"}[s],p=this.GetUpTo(r+s,s),d=this.GetUpTo(r+s,s);if(s===">"||
s==="<"){f=e.mo(h).With(l),p||(p="\\kern "+o.minw);if(p||d){var v={width:"+11mu",
lspace:"6mu"};f=e.munderover(this.mmlToken(f)),p&&(p=t.Parse(p,this.stack.env).mml
(),f.SetData(f.over,e.mpadded(p).With(v).With({voffset:".1em"}))),d&&(d=t.Parse(d
,this.stack.env).mml(),f.SetData(f.under,e.mpadded(d).With(v))),i.hideHorizontalLabels&&
(f=e.mpadded(f).With({depth:0,height:".67em"}))}}else{f=h=this.mmlToken(e.mo(h).With
(c));if(p||d)f=e.mrow(),p&&f.Append(t.Parse("\\scriptstyle\\llap{"+p+"}",this.stack
.env).mml()),f.Append(h.With({texClass:e.TEXCLASS.ORD})),d&&f.Append(t.Parse("\\scriptstyle\\rlap{"+
d+"}",this.stack.env).mml())}}f&&this.Push(f),this.CD_cell(r)},CD_cell:function(t
){var r=this.stack.Top();(r.table||[]).length%2===0&&(r.row||[]).length===0&&this
.Push(e.mpadded().With({height:"8.5pt",depth:"2pt"})),this.Push(n.cell().With({isEntry
:!0,name:t}))},CD_minwidth:function(e){this.stack.env.CD_minw=this.GetDimen(e)},CD_minheight
:function(e){this.stack.env.CD_minh=this.GetDimen(e)}})}),MathJax.Ajax.loadComplete
("[MathJax]/extensions/TeX/AMScd.js");