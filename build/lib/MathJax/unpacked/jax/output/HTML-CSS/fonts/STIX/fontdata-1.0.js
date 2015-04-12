/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/font/STIX/fontdata-1.0.js
 *  
 *  Patches the STIX font data to work with version 1.0 of
 *  the STIX fonts (this is a delta from the v1.1 fonts).
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(e,t){var n=function(n,r,i){var s="STIX"+n.replace(/\/[^\/]*$/,"").replace
(/\//,"-").replace(/-Regular/,"");s=s.replace(/-B/,"-b").replace(/-I/,"-i").replace
(/-boldItalic/,"-bold-italic"),t.Register.LoadHook(e.fontDir+"/"+n+".js",function(
){var t=e.FONTDATA.FONTS[s];for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n]);if(i)
for(var o=0,u=i.length;o<u;o++)delete t[i[o]]})};e.FONTDATA.STIXversion="1.0",delete 
e.FONTDATA.FONTS["STIXGeneral-bold"].Ranges.LatinExtendedD,delete e.FONTDATA.FONTS
["STIXGeneral-bold"].Ranges.BBBold,e.FONTDATA.DELIMITERS[9182].HW[0]=[.556,"STIXGeneral"
],e.FONTDATA.DELIMITERS[9182].HW[1]=[.926,"STIXSizeOneSym"],e.FONTDATA.DELIMITERS
[9183].HW[0]=[.556,"STIXGeneral"],e.FONTDATA.DELIMITERS[9183].HW[1]=[.926,"STIXSizeOneSym"
],t.Register.LoadHook(e.fontDir+"/fontdata-extra.js",function(){e.FONTDATA.DELIMITERS
[9180].HW[0]=[.556,"STIXGeneral"],e.FONTDATA.DELIMITERS[9180].HW[1]=[.926,"STIXSizeOneSym"
],e.FONTDATA.DELIMITERS[9181].HW[0]=[.556,"STIXGeneral"],e.FONTDATA.DELIMITERS[9181
].HW[1]=[.926,"STIXSizeOneSym"],e.FONTDATA.DELIMITERS[9184].HW[0][0]=.926,e.FONTDATA
.DELIMITERS[9185].HW[0][0]=.926}),n("General/Bold/CombDiacritMarks",{},[839]),n("General/Bold/LetterlikeSymbols"
,{8517:[676,0,748,75,703],8518:[676,14,643,50,583],8519:[473,14,573,50,523],8520:
[691,0,330,65,265],8521:[691,205,371,-20,311]}),n("General/Bold/MathOperators",{8729
:[473,-59,584,85,499]},[8896,8897,8898,8899]),n("General/Bold/SpacingModLetters",
{},[759]),n("General/BoldItalic/GeneralPunctuation",{8254:[637,-565,500,0,500]}),
n("General/BoldItalic/GreekBoldItalic",{120624:[685,0,589,31,721]}),n("General/BoldItalic/SpacingModLetters"
,{690:[1017,-331,350,24,384]},[759]),n("General/Italic/CombDiactForSymbols",{8428
:[681,-548,0,-453,-17],8429:[681,-548,0,-453,-17]}),n("General/Italic/GeneralPunctuation"
,{8254:[582,-532,500,0,500]}),n("General/Italic/GreekItalic",{120566:[668,0,567,28
,687]}),n("General/Italic/SpacingModLetters",{},[759]),n("General/Regular/CombDiacritMarks"
,{},[839]),n("General/Regular/GreekBoldItalic",{120624:[685,0,589,31,721]}),n("General/Regular/GreekItalic"
,{120566:[668,0,567,28,687]}),n("General/Regular/LatinExtendedD",{},[42898]),n("General/Regular/LetterlikeSymbols"
,{8517:[662,0,722,70,677],8518:[683,10,574,45,519],8519:[460,10,523,45,478],8520:
[683,0,258,55,203],8521:[683,217,305,-15,250]}),n("General/Regular/MathOperators"
,{8959:[662,0,560,73,487]}),n("General/Regular/MiscMathSymbolsA",{},[10187,10189]
),n("General/Regular/MiscSymbols",{},[9954]),n("General/Regular/MiscTechnical",{9180
:[55,152,556,-10,566],9181:[771,-564,556,-10,566],9182:[117,88,556,-10,566],9183:
[769,-564,556,-10,566],9184:[66,212,926,-3,929],9185:[842,-564,926,-3,929]}),n("General/Regular/PhoneticExtensions"
,{},[7576,7587]),n("General/Regular/SpacingModLetters",{},[759]),n("General/Regular/SuppMathOperators"
,{},[11004,11007]),n("NonUnicode/Bold/PrivateUse",{57440:[-137,322,0,0,330],57505
:[691,19,769,27,734],58250:[676,0,787,50,737],58251:[676,0,729,75,669],58253:[676
,0,650,75,595],58254:[676,0,474,75,595],58255:[691,19,751,45,686],58256:[676,0,380
,80,300],58257:[676,19,618,50,548],58258:[676,0,792,75,767],58259:[676,0,662,70,607
],58260:[676,0,914,75,839],58261:[691,19,787,45,742],58262:[692,19,702,45,657],58263
:[676,0,556,25,645],58264:[676,19,738,70,668],58265:[676,0,627,17,704],58266:[676
,0,996,17,1015],58267:[676,0,794,20,769],58268:[676,0,652,23,739],58269:[473,14,623
,50,563],58270:[676,14,643,60,593],58271:[473,14,574,50,524],58274:[676,0,474,25,536
],58275:[473,205,643,50,583],58276:[676,0,624,60,564],58279:[676,0,646,60,621],58280
:[676,0,325,60,265],58281:[473,0,908,60,848],58282:[473,0,624,60,564],58283:[473,14
,598,45,553],58284:[473,205,643,60,593],58285:[473,205,643,50,583],58286:[473,0,339
,60,445],58287:[473,14,549,52,497],58288:[676,14,446,25,411],58289:[461,16,619,55
,559],58290:[461,0,494,6,544],58291:[461,0,786,22,789],58292:[461,0,660,25,635],58293
:[461,205,471,-9,537],58294:[461,0,513,40,473]}),n("NonUnicode/BoldItalic/PrivateUse"
,{58248:[707,14,598,18,563]}),n("NonUnicode/Italic/PrivateUse",{58247:[683,10,557
,52,526]}),n("NonUnicode/Regular/PrivateUse",{57409:[911,-433,480,64,398],57410:[755
,-425,441,57,387],57440:[-140,292,1,11,323],57503:[662,156,902,0,863],57504:[662,156
,902,0,863],57505:[676,14,734,18,700],57572:[773,80,700,94,606]}),n("SizeTwoSym/Regular/All"
,{},[11007]),MathJax.Ajax.loadComplete(e.fontDir+"/fontdata-1.0.js")})(MathJax.OutputJax
["HTML-CSS"],MathJax.Hub);