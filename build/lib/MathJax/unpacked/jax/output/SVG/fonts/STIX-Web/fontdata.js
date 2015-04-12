/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/STIX-Web/fontdata.js
 *  
 *  Initializes the SVG OutputJax to use the STIX-Web fonts

 *  Copyright (c) 2013-2015 The MathJax Consortium
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

(function(e,t,n,r){var i="2.5.0",s="STIXMathJax_Alphabets-bold-italic",o="STIXMathJax_Alphabets-bold"
,u="STIXMathJax_Alphabets-italic",a="STIXMathJax_Alphabets",f="STIXMathJax_Arrows-bold"
,l="STIXMathJax_Arrows",c="STIXMathJax_DoubleStruck-bold-italic",h="STIXMathJax_DoubleStruck-bold"
,p="STIXMathJax_DoubleStruck-italic",d="STIXMathJax_DoubleStruck",v="STIXMathJax_Fraktur-bold"
,m="STIXMathJax_Fraktur",g="STIXMathJax_Latin-bold-italic",y="STIXMathJax_Latin-bold"
,b="STIXMathJax_Latin-italic",w="STIXMathJax_Latin",E="STIXMathJax_Main-bold-italic"
,S="STIXMathJax_Main-bold",x="STIXMathJax_Main-italic",T="STIXMathJax_Main",N="STIXMathJax_Marks-bold-italic"
,C="STIXMathJax_Marks-bold",k="STIXMathJax_Marks-italic",L="STIXMathJax_Marks",A="STIXMathJax_Misc-bold-italic"
,O="STIXMathJax_Misc-bold",M="STIXMathJax_Misc-italic",_="STIXMathJax_Misc",D="STIXMathJax_Monospace"
,P="STIXMathJax_Normal-bold-italic",H="STIXMathJax_Normal-bold",B="STIXMathJax_Normal-italic"
,j="STIXMathJax_Operators-bold",F="STIXMathJax_Operators",I="STIXMathJax_SansSerif-bold-italic"
,q="STIXMathJax_SansSerif-bold",R="STIXMathJax_SansSerif-italic",U="STIXMathJax_SansSerif"
,z="STIXMathJax_Script-bold-italic",W="STIXMathJax_Script-italic",X="STIXMathJax_Script"
,V="STIXMathJax_Shapes-bold-italic",$="STIXMathJax_Shapes-bold",J="STIXMathJax_Shapes"
,K="STIXMathJax_Size1",Q="STIXMathJax_Size2",G="STIXMathJax_Size3",Y="STIXMathJax_Size4"
,Z="STIXMathJax_Size5",et="STIXMathJax_Symbols-bold",tt="STIXMathJax_Symbols",nt="STIXMathJax_Variants-bold-italic"
,rt="STIXMathJax_Variants-bold",it="STIXMathJax_Variants-italic",st="STIXMathJax_Variants"
,ot="H",ut="V",at={load:"extra",dir:ot},ft={load:"extra",dir:ut};e.Augment({FONTDATA
:{version:i,baselineskip:1200,lineH:800,lineD:200,FONTS:{"STIXMathJax_Alphabets-bold-italic"
:"Alphabets/BoldItalic/Main.js","STIXMathJax_Alphabets-bold":"Alphabets/Bold/Main.js"
,"STIXMathJax_Alphabets-italic":"Alphabets/Italic/Main.js",STIXMathJax_Alphabets:"Alphabets/Regular/Main.js"
,"STIXMathJax_Arrows-bold":"Arrows/Bold/Main.js",STIXMathJax_Arrows:"Arrows/Regular/Main.js"
,"STIXMathJax_DoubleStruck-bold-italic":"DoubleStruck/BoldItalic/Main.js","STIXMathJax_DoubleStruck-bold"
:"DoubleStruck/Bold/Main.js","STIXMathJax_DoubleStruck-italic":"DoubleStruck/Italic/Main.js"
,STIXMathJax_DoubleStruck:"DoubleStruck/Regular/Main.js","STIXMathJax_Fraktur-bold"
:"Fraktur/Bold/Main.js",STIXMathJax_Fraktur:"Fraktur/Regular/Main.js","STIXMathJax_Latin-bold-italic"
:"Latin/BoldItalic/Main.js","STIXMathJax_Latin-bold":"Latin/Bold/Main.js","STIXMathJax_Latin-italic"
:"Latin/Italic/Main.js",STIXMathJax_Latin:"Latin/Regular/Main.js","STIXMathJax_Main-bold-italic"
:"Main/BoldItalic/Main.js","STIXMathJax_Main-bold":"Main/Bold/Main.js","STIXMathJax_Main-italic"
:"Main/Italic/Main.js",STIXMathJax_Main:"Main/Regular/Main.js","STIXMathJax_Marks-bold-italic"
:"Marks/BoldItalic/Main.js","STIXMathJax_Marks-bold":"Marks/Bold/Main.js","STIXMathJax_Marks-italic"
:"Marks/Italic/Main.js",STIXMathJax_Marks:"Marks/Regular/Main.js","STIXMathJax_Misc-bold-italic"
:"Misc/BoldItalic/Main.js","STIXMathJax_Misc-bold":"Misc/Bold/Main.js","STIXMathJax_Misc-italic"
:"Misc/Italic/Main.js",STIXMathJax_Misc:"Misc/Regular/Main.js",STIXMathJax_Monospace
:"Monospace/Regular/Main.js","STIXMathJax_Normal-bold-italic":"Normal/BoldItalic/Main.js"
,"STIXMathJax_Normal-bold":"Normal/Bold/Main.js","STIXMathJax_Normal-italic":"Normal/Italic/Main.js"
,"STIXMathJax_Operators-bold":"Operators/Bold/Main.js",STIXMathJax_Operators:"Operators/Regular/Main.js"
,"STIXMathJax_SansSerif-bold-italic":"SansSerif/BoldItalic/Main.js","STIXMathJax_SansSerif-bold"
:"SansSerif/Bold/Main.js","STIXMathJax_SansSerif-italic":"SansSerif/Italic/Main.js"
,STIXMathJax_SansSerif:"SansSerif/Regular/Main.js","STIXMathJax_Script-bold-italic"
:"Script/BoldItalic/Main.js","STIXMathJax_Script-italic":"Script/Italic/Main.js",
STIXMathJax_Script:"Script/Regular/Main.js","STIXMathJax_Shapes-bold-italic":"Shapes/BoldItalic/Main.js"
,"STIXMathJax_Shapes-bold":"Shapes/Bold/Main.js",STIXMathJax_Shapes:"Shapes/Regular/Main.js"
,STIXMathJax_Size1:"Size1/Regular/Main.js",STIXMathJax_Size2:"Size2/Regular/Main.js"
,STIXMathJax_Size3:"Size3/Regular/Main.js",STIXMathJax_Size4:"Size4/Regular/Main.js"
,STIXMathJax_Size5:"Size5/Regular/Main.js","STIXMathJax_Symbols-bold":"Symbols/Bold/Main.js"
,STIXMathJax_Symbols:"Symbols/Regular/Main.js","STIXMathJax_Variants-bold-italic"
:"Variants/BoldItalic/Main.js","STIXMathJax_Variants-bold":"Variants/Bold/Main.js"
,"STIXMathJax_Variants-italic":"Variants/Italic/Main.js",STIXMathJax_Variants:"Variants/Regular/Main.js"
},VARIANT:{normal:{fonts:[T,D,w,a,L,l,F,tt,J,_,st,K]},bold:{fonts:[S,H,v,h,q,y,o,
C,f,j,et,$,O,rt,K],bold:!0},italic:{fonts:[x,B,W,p,R,b,u,k,M,it,K],italic:!0},"bold-italic"
:{fonts:[E,P,z,c,I,g,s,N,V,A,nt,K],bold:!0,italic:!0},"double-struck":{fonts:[d],
offsetA:120120,offsetN:120792,remap:{120122:8450,120127:8461,120133:8469,120135:8473
,120136:8474,120137:8477,120145:8484}},fraktur:{fonts:[m],offsetA:120068,remap:{120070
:8493,120075:8460,120076:8465,120085:8476,120093:8488}},"bold-fraktur":{fonts:[v]
,bold:!0,offsetA:120172},script:{fonts:[W],italic:!0,offsetA:119964,remap:{119965
:8492,119968:8496,119969:8497,119971:8459,119972:8464,119975:8466,119976:8499,119981
:8475,119994:8495,119996:8458,120004:8500}},"bold-script":{fonts:[z],bold:!0,italic
:!0,offsetA:120016},"sans-serif":{fonts:[U],offsetA:120224,offsetN:120802,offsetG
:57725,offsetE:57725},"bold-sans-serif":{fonts:[q],bold:!0,offsetA:120276,offsetN
:120812,offsetG:120662},"sans-serif-italic":{fonts:[R],italic:!0,offsetA:120328,offsetN
:57780,offsetG:57791,offsetE:57791},"sans-serif-bold-italic":{fonts:[I],bold:!0,italic
:!0,offsetA:120380,offsetN:57846,offsetG:120720},monospace:{fonts:[D],offsetA:120432
,offsetN:120822},"-STIX-Web-variant":{remap:{10887:57360,10888:57359,9651:9653,9661
:9663},fonts:[st,J,F,T,D,w,a,L,l,tt,_,K]},"-tex-caligraphic":{offsetA:57901,noLowerCase
:1,fonts:[it,x,B,W,p,R,b,u,k,M,K],italic:!0},"-tex-oldstyle":{offsetN:57953,remap
:{57954:57957,57955:57961,57956:57965,57957:57969,57958:57973,57959:57977,57960:57981
,57961:57985,57962:57989},fonts:[st,T,D,w,a,L,l,F,tt,J,_,K]},"-tex-caligraphic-bold"
:{offsetA:57927,noLowerCase:1,fonts:[nt,E,P,z,c,I,g,s,N,V,A,K],italic:!0,bold:!0}
,"-tex-oldstyle-bold":{offsetN:57953,remap:{57956:57959,57957:57963,57958:57967,57959
:57971,57960:57975,57961:57979,57962:57983,57963:57987,57964:57991},fonts:[rt,S,H
,v,h,q,y,o,C,f,j,et,$,O,K],bold:!0},"-tex-mathit":{fonts:[x,B,W,p,R,b,u,k,M,it,K]
,italic:!0,noIC:!0},"-largeOp":{fonts:[K,T]},"-smallOp":{}},RANGES:[{name:"alpha"
,low:97,high:122,offset:"A",add:26},{name:"Alpha",low:65,high:90,offset:"A"},{name
:"number",low:48,high:57,offset:"N"},{name:"greek-non-unicode",low:945,high:969,offset
:"E",add:25},{name:"greek",low:945,high:969,offset:"G",add:26},{name:"Greek",low:913
,high:1014,offset:"G",remap:{1013:52,977:53,1008:54,981:55,1009:56,982:57,1012:17
}}],RULECHAR:9135,REMAP:{12296:10216,12297:10217,10072:8739,755:730,756:714,65079
:9182,65080:9183},REMAPACCENT:{"~":"̃","→":"⃗","`":"̀","^":"̂","´":"́","′":"́","‵"
:"̀"},REMAPACCENTUNDER:{},DELIMITERS:{40:{dir:ut,HW:[[853,T],[1230,K],[1350,K,1.098
],[1845,Q],[2460,G],[3075,Y]],stretch:{bot:[57344,Z],ext:[57345,Z],top:[57346,Z]}
},41:{dir:ut,HW:[[853,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch
:{bot:[57347,Z],ext:[57348,Z],top:[57349,Z]}},45:{alias:9135,dir:ot},47:{dir:ut,HW
:[[690,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]]},61:at,91:{dir:ut,HW
:[[818,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch:{bot:[57350
,Z],ext:[57351,Z],top:[57352,Z]}},92:{dir:ut,HW:[[690,T],[1230,K],[1350,K,1.098],
[1845,Q],[2460,G],[3075,Y]]},93:{dir:ut,HW:[[818,T],[1230,K],[1350,K,1.098],[1845
,Q],[2460,G],[3075,Y]],stretch:{bot:[57353,Z],ext:[57354,Z],top:[57355,Z]}},94:{alias
:710,dir:ot},95:{alias:9135,dir:ot},123:{dir:ut,HW:[[861,T],[1230,K],[1350,K,1.098
],[1845,Q],[2460,G],[3075,Y]],stretch:{bot:[57356,Z],ext:[57357,Z],mid:[57358,Z],
top:[57359,Z]}},124:{dir:ut,HW:[[690,T]],stretch:{bot:[124,T],ext:[124,T]}},125:{
dir:ut,HW:[[861,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch:{bot
:[57360,Z],ext:[57357,Z],mid:[57361,Z],top:[57362,Z]}},126:{alias:732,dir:ot},175
:{alias:9135,dir:ot},710:{dir:ot,HW:[[311,T],[560,K],[979,Q],[1460,G],[1886,Y],[2328
,Z]]},711:at,713:{alias:9135,dir:ot},717:at,732:{dir:ot,HW:[[330,T],[560,K],[979,
Q],[1460,G],[1886,Y],[2328,Z]]},759:at,770:{dir:ot,HW:[[311,T],[560,K],[979,Q],[1460
,G],[1886,Y],[2328,Z]]},771:{dir:ot,HW:[[330,T],[560,K],[979,Q],[1460,G],[1886,Y]
,[2328,Z]]},773:{dir:ot,HW:[[500,L],[1e3,K],[1500,Q],[2e3,G],[2500,Y],[3e3,Z]],stretch
:{left:[57363,Z],rep:[57363,Z]}},780:{dir:ot,HW:[[311,T],[560,K],[979,Q],[1460,G]
,[1886,Y],[2328,Z]]},816:{dir:ot,HW:[[330,L],[560,K],[979,Q],[1460,G],[1886,Y],[2328
,Z]]},818:{dir:ot,HW:[[500,L],[1e3,K],[1500,Q],[2e3,G],[2500,Y],[3e3,Z]],stretch:
{left:[57364,Z],rep:[57364,Z]}},824:{dir:ut,HW:[[818,T],[553,K],[662,Q],[818,G],[959
,Y],[1414,Z]]},8213:{alias:9135,dir:ot},8214:{dir:ut,HW:[[879,T]],stretch:{bot:[8214
,T],ext:[8214,T]}},8215:{alias:9135,dir:ot},8254:{dir:ot,HW:[[500,T],[1e3,K],[1500
,Q],[2e3,G],[2500,Y],[3e3,Z]],stretch:{left:[8254,T],rep:[8254,T]}},8400:at,8401:
at,8406:at,8407:{dir:ot,HW:[[436,T],[872,K],[1308,Q],[1744,G],[2180,Y],[3e3,Z]],stretch
:{rep:[57366,Z],right:[57369,Z]}},8417:at,8428:at,8429:at,8430:at,8431:at,8512:ft
,8592:{dir:ot,HW:[[786,T]],stretch:{left:[8592,T],rep:[9135,tt]}},8593:{dir:ut,HW
:[[818,T]],stretch:{ext:[9168,T],top:[8593,T]}},8594:{dir:ot,HW:[[786,T]],stretch
:{rep:[9135,tt],right:[8594,T]}},8595:{dir:ut,HW:[[818,T]],stretch:{bot:[8595,T],
ext:[9168,T]}},8596:{dir:ot,HW:[[850,T]],stretch:{left:[8592,T],rep:[9135,tt],right
:[8594,T]}},8597:{dir:ut,HW:[[954,T]],stretch:{bot:[8595,T],ext:[9168,T],top:[8593
,T]}},8606:at,8607:ft,8608:at,8609:ft,8612:at,8613:ft,8614:at,8615:ft,8616:ft,8617
:at,8618:at,8624:ft,8625:ft,8626:ft,8627:ft,8628:at,8629:ft,8636:at,8637:at,8638:
ft,8639:ft,8640:at,8641:at,8642:ft,8643:ft,8651:at,8652:at,8656:{dir:ot,HW:[[806,
T]],stretch:{left:[8656,T],rep:[57375,Z]}},8657:{dir:ut,HW:[[818,T]],stretch:{ext
:[57376,Z],top:[8657,T]}},8658:{dir:ot,HW:[[806,T]],stretch:{rep:[57375,Z],right:
[8658,T]}},8659:{dir:ut,HW:[[818,T]],stretch:{bot:[8659,T],ext:[57376,Z]}},8660:{
dir:ot,HW:[[886,T]],stretch:{left:[8656,T],rep:[57375,Z],right:[8658,T]}},8661:{dir
:ut,HW:[[954,T]],stretch:{bot:[8659,T],ext:[57376,Z],top:[8657,T]}},8666:at,8667:
at,8672:at,8673:ft,8674:at,8675:ft,8676:at,8677:at,8701:at,8702:at,8703:at,8719:ft
,8720:ft,8721:ft,8722:{alias:9135,dir:ot},8725:{alias:47,dir:ut},8730:{dir:ut,HW:
[[1232,T],[1847,K],[2460,Q],[3075,G]],stretch:{bot:[57378,Z],ext:[57379,Z],top:[57380
,Z]}},8731:ft,8732:ft,8739:{dir:ut,HW:[[879,T]],stretch:{ext:[8739,T]}},8741:{dir
:ut,HW:[[879,T]],stretch:{ext:[8741,T]}},8747:at,8748:ft,8749:ft,8750:ft,8751:ft,8752
:ft,8753:ft,8754:ft,8755:ft,8896:ft,8897:ft,8898:ft,8899:ft,8968:{dir:ut,HW:[[926
,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch:{ext:[57351,Z],top
:[57352,Z]}},8969:{dir:ut,HW:[[926,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075
,Y]],stretch:{ext:[57354,Z],top:[57355,Z]}},8970:{dir:ut,HW:[[926,T],[1230,K],[1350
,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch:{bot:[57350,Z],ext:[57351,Z]}},8971
:{dir:ut,HW:[[926,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y]],stretch:
{bot:[57353,Z],ext:[57354,Z]}},9001:{alias:10216,dir:ut},9002:{alias:10217,dir:ut
},9130:ft,9135:{dir:ot,HW:[[315,tt]],stretch:{rep:[9135,tt]}},9136:{dir:ut,HW:[[1e3
,Z,null,57402]],stretch:{top:[57359,Z],ext:[57357,Z],bot:[57360,Z]}},9137:{dir:ut
,HW:[[1e3,Z,null,57403]],stretch:{top:[57362,Z],ext:[57357,Z],bot:[57356,Z]}},9140
:at,9141:at,9168:ft,9180:at,9181:at,9182:{dir:ot,HW:[[1e3,T],[925,K],[1460,Q],[1886
,G],[2328,Y],[3238,Z]],stretch:{left:[57393,Z],rep:[57384,Z],mid:[57394,Z],right:
[57395,Z]}},9183:{dir:ot,HW:[[1e3,T],[925,K],[1460,Q],[1886,G],[2328,Y],[3238,Z]]
,stretch:{left:[57396,Z],rep:[57387,Z],mid:[57397,Z],right:[57398,Z]}},9184:at,9185
:at,9472:{alias:8722,dir:ot},10072:{alias:8739,dir:ut},10098:ft,10099:ft,10214:ft
,10215:ft,10216:{dir:ut,HW:[[926,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075
,Y]]},10217:{dir:ut,HW:[[926,T],[1230,K],[1350,K,1.098],[1845,Q],[2460,G],[3075,Y
]]},10218:ft,10219:ft,10222:{dir:ut,HW:[[853,T]],stretch:{bot:[57344,Z],ext:[57345
,Z],top:[57346,Z]}},10223:{dir:ut,HW:[[853,T]],stretch:{bot:[57347,Z],ext:[57348,
Z],top:[57349,Z]}},10224:ft,10225:ft,10229:{alias:8592,dir:ot},10230:{alias:8594,
dir:ot},10231:{alias:8596,dir:ot},10232:{alias:8656,dir:ot},10233:{alias:8658,dir
:ot},10234:{alias:8660,dir:ot},10235:{alias:8612,dir:ot},10236:{alias:8614,dir:ot
},10237:{alias:10502,dir:ot},10238:{alias:10503,dir:ot},10502:at,10503:at,10506:ft
,10507:ft,10514:ft,10515:ft,10574:at,10575:ft,10576:at,10577:ft,10578:at,10579:at
,10580:ft,10581:ft,10582:at,10583:at,10584:ft,10585:ft,10586:at,10587:at,10588:ft
,10589:ft,10590:at,10591:at,10592:ft,10593:ft,10624:ft,10627:ft,10628:ft,10629:ft
,10630:ft,10647:ft,10648:ft,10744:{dir:ut,HW:[[1020,T],[1845,K]]},10745:{dir:ut,HW
:[[1020,T],[1845,K]]},10752:ft,10753:ft,10754:ft,10755:ft,10756:ft,10757:ft,10758
:ft,10759:ft,10760:ft,10761:ft,10762:ft,10763:ft,10764:ft,10765:ft,10766:ft,10767
:ft,10768:ft,10769:ft,10770:ft,10771:ft,10772:ft,10773:ft,10774:ft,10775:ft,10776
:ft,10777:ft,10778:ft,10779:ft,10780:ft,11004:ft,11007:ft,11077:at,11078:{dir:ot,
HW:[[818,J]],stretch:{rep:[57401,Z],right:[11078,J]}},12296:{alias:10216,dir:ut},12297
:{alias:10217,dir:ut},65079:{alias:9182,dir:ot},65080:{alias:9183,dir:ot}}}}),MathJax
.Hub.Register.LoadHook(e.fontDir+"/Main/Regular/Main.js",function(){e.FONTDATA.FONTS
[T][8942][0]+=400,e.FONTDATA.FONTS[T][8945][0]+=500,e.FONTDATA.FONTS[T][8722][1]+=100
,e.FONTDATA.FONTS[T][61][1]+=100}),MathJax.Hub.Register.LoadHook(e.fontDir+"/Size5/Regular/Main.js"
,function(){var t;t=e.FONTDATA.DELIMITERS[9182].stretch.rep[0],e.FONTDATA.FONTS[Z
][t][0]+=200,e.FONTDATA.FONTS[Z][t][1]+=200,t=e.FONTDATA.DELIMITERS[9183].stretch
.rep[0],e.FONTDATA.FONTS[Z][t][0]+=200,e.FONTDATA.FONTS[Z][t][1]+=200}),n.loadComplete
(e.fontDir+"/fontdata.js")})(MathJax.OutputJax.SVG,MathJax.ElementJax.mml,MathJax
.Ajax,MathJax.Hub);