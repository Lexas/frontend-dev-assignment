/*
 *  /MathJax/jax/element/mml/optable/BasicLatin.js
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

(function(e){var t=e.mo.OPTYPES,n=e.TEXCLASS;MathJax.Hub.Insert(e.mo.prototype,{OPTABLE
:{prefix:{"||":[0,0,n.BIN,{fence:!0,stretchy:!0,symmetric:!0}],"|||":[0,0,n.ORD,{
fence:!0,stretchy:!0,symmetric:!0}]},postfix:{"!!":[1,0,n.BIN],"'":t.ACCENT,"++":
[0,0,n.BIN],"--":[0,0,n.BIN],"..":[0,0,n.BIN],"...":t.ORD,"||":[0,0,n.BIN,{fence:!0
,stretchy:!0,symmetric:!0}],"|||":[0,0,n.ORD,{fence:!0,stretchy:!0,symmetric:!0}]
},infix:{"!=":t.BIN4,"&&":t.BIN4,"**":[1,1,n.BIN],"*=":t.BIN4,"+=":t.BIN4,"-=":t.
BIN4,"->":t.BIN5,"//":[1,1,n.BIN],"/=":t.BIN4,":=":t.BIN4,"<=":t.BIN5,"<>":[1,1,n
.BIN],"==":t.BIN4,">=":t.BIN5,"@":t.ORD11,"||":[2,2,n.BIN,{fence:!0,stretchy:!0,symmetric
:!0}],"|||":[2,2,n.ORD,{fence:!0,stretchy:!0,symmetric:!0}]}}}),MathJax.Ajax.loadComplete
(e.optableDir+"/BasicLatin.js")})(MathJax.ElementJax.mml);