/*
 *  /MathJax/jax/element/mml/optable/SuppMathOperators.js
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
:{prefix:{"⨃":t.OP,"⨅":t.OP,"⨇":t.OP,"⨈":t.OP,"⨉":t.OP,"⨊":t.OP,"⨋":t.INTEGRAL2,"⨌"
:t.INTEGRAL,"⨍":t.INTEGRAL2,"⨎":t.INTEGRAL2,"⨏":t.INTEGRAL2,"⨐":t.OP,"⨑":t.OP,"⨒"
:t.OP,"⨓":t.OP,"⨔":t.OP,"⨕":t.INTEGRAL2,"⨖":t.INTEGRAL2,"⨗":t.INTEGRAL2,"⨘":t.INTEGRAL2
,"⨙":t.INTEGRAL2,"⨚":t.INTEGRAL2,"⨛":t.INTEGRAL2,"⨜":t.INTEGRAL2,"⫼":t.OP,"⫿":t.OP
},infix:{"⨝":t.BIN3,"⨞":t.BIN3,"⨟":t.BIN3,"⨠":t.BIN3,"⨡":t.BIN3,"⨢":t.BIN4,"⨣":t.
BIN4,"⨤":t.BIN4,"⨥":t.BIN4,"⨦":t.BIN4,"⨧":t.BIN4,"⨨":t.BIN4,"⨩":t.BIN4,"⨪":t.BIN4
,"⨫":t.BIN4,"⨬":t.BIN4,"⨭":t.BIN4,"⨮":t.BIN4,"⨰":t.BIN4,"⨱":t.BIN4,"⨲":t.BIN4,"⨳"
:t.BIN4,"⨴":t.BIN4,"⨵":t.BIN4,"⨶":t.BIN4,"⨷":t.BIN4,"⨸":t.BIN4,"⨹":t.BIN4,"⨺":t.BIN4
,"⨻":t.BIN4,"⨼":t.BIN4,"⨽":t.BIN4,"⨾":t.BIN4,"⩀":t.BIN4,"⩁":t.BIN4,"⩂":t.BIN4,"⩃"
:t.BIN4,"⩄":t.BIN4,"⩅":t.BIN4,"⩆":t.BIN4,"⩇":t.BIN4,"⩈":t.BIN4,"⩉":t.BIN4,"⩊":t.BIN4
,"⩋":t.BIN4,"⩌":t.BIN4,"⩍":t.BIN4,"⩎":t.BIN4,"⩏":t.BIN4,"⩐":t.BIN4,"⩑":t.BIN4,"⩒"
:t.BIN4,"⩓":t.BIN4,"⩔":t.BIN4,"⩕":t.BIN4,"⩖":t.BIN4,"⩗":t.BIN4,"⩘":t.BIN4,"⩙":t.REL
,"⩚":t.BIN4,"⩛":t.BIN4,"⩜":t.BIN4,"⩝":t.BIN4,"⩞":t.BIN4,"⩟":t.BIN4,"⩠":t.BIN4,"⩡"
:t.BIN4,"⩢":t.BIN4,"⩣":t.BIN4,"⩤":t.BIN4,"⩥":t.BIN4,"⩦":t.REL,"⩧":t.REL,"⩨":t.REL
,"⩩":t.REL,"⩪":t.REL,"⩫":t.REL,"⩬":t.REL,"⩭":t.REL,"⩮":t.REL,"⩯":t.REL,"⩰":t.REL,"⩱"
:t.BIN4,"⩲":t.BIN4,"⩳":t.REL,"⩴":t.REL,"⩵":t.REL,"⩶":t.REL,"⩷":t.REL,"⩸":t.REL,"⩹"
:t.REL,"⩺":t.REL,"⩻":t.REL,"⩼":t.REL,"⩽":t.REL,"⩽̸":t.REL,"⩾":t.REL,"⩾̸":t.REL,"⩿"
:t.REL,"⪀":t.REL,"⪁":t.REL,"⪂":t.REL,"⪃":t.REL,"⪄":t.REL,"⪅":t.REL,"⪆":t.REL,"⪇":
t.REL,"⪈":t.REL,"⪉":t.REL,"⪊":t.REL,"⪋":t.REL,"⪌":t.REL,"⪍":t.REL,"⪎":t.REL,"⪏":t
.REL,"⪐":t.REL,"⪑":t.REL,"⪒":t.REL,"⪓":t.REL,"⪔":t.REL,"⪕":t.REL,"⪖":t.REL,"⪗":t.
REL,"⪘":t.REL,"⪙":t.REL,"⪚":t.REL,"⪛":t.REL,"⪜":t.REL,"⪝":t.REL,"⪞":t.REL,"⪟":t.REL
,"⪠":t.REL,"⪡":t.REL,"⪡̸":t.REL,"⪢":t.REL,"⪢̸":t.REL,"⪣":t.REL,"⪤":t.REL,"⪥":t.REL
,"⪦":t.REL,"⪧":t.REL,"⪨":t.REL,"⪩":t.REL,"⪪":t.REL,"⪫":t.REL,"⪬":t.REL,"⪭":t.REL,"⪮"
:t.REL,"⪯̸":t.REL,"⪰̸":t.REL,"⪱":t.REL,"⪲":t.REL,"⪳":t.REL,"⪴":t.REL,"⪵":t.REL,"⪶"
:t.REL,"⪷":t.REL,"⪸":t.REL,"⪹":t.REL,"⪺":t.REL,"⪻":t.REL,"⪼":t.REL,"⪽":t.REL,"⪾":
t.REL,"⪿":t.REL,"⫀":t.REL,"⫁":t.REL,"⫂":t.REL,"⫃":t.REL,"⫄":t.REL,"⫅":t.REL,"⫆":t
.REL,"⫇":t.REL,"⫈":t.REL,"⫉":t.REL,"⫊":t.REL,"⫋":t.REL,"⫌":t.REL,"⫍":t.REL,"⫎":t.
REL,"⫏":t.REL,"⫐":t.REL,"⫑":t.REL,"⫒":t.REL,"⫓":t.REL,"⫔":t.REL,"⫕":t.REL,"⫖":t.REL
,"⫗":t.REL,"⫘":t.REL,"⫙":t.REL,"⫚":t.REL,"⫛":t.REL,"⫝̸":t.REL,"⫝":t.REL,"⫞":t.REL,"⫟"
:t.REL,"⫠":t.REL,"⫡":t.REL,"⫢":t.REL,"⫣":t.REL,"⫤":t.REL,"⫥":t.REL,"⫦":t.REL,"⫧":
t.REL,"⫨":t.REL,"⫩":t.REL,"⫪":t.REL,"⫫":t.REL,"⫬":t.REL,"⫭":t.REL,"⫮":t.REL,"⫯":t
.REL,"⫰":t.REL,"⫱":t.REL,"⫲":t.REL,"⫳":t.REL,"⫴":t.BIN4,"⫵":t.BIN4,"⫶":t.BIN4,"⫷"
:t.REL,"⫸":t.REL,"⫹":t.REL,"⫺":t.REL,"⫻":t.BIN4,"⫽":t.BIN4,"⫾":t.BIN3}}}),MathJax
.Ajax.loadComplete(e.optableDir+"/SuppMathOperators.js")})(MathJax.ElementJax.mml
);