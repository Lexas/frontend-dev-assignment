/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/Asana-Math/fontdata.js
 *  
 *  Initializes the SVG OutputJax to use the Asana-Math fonts

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

(function(e,t,n,r){var i="2.5.0",s="AsanaMathJax_Alphabets",o="AsanaMathJax_Arrows"
,u="AsanaMathJax_DoubleStruck",a="AsanaMathJax_Fraktur",f="AsanaMathJax_Latin",l="AsanaMathJax_Main"
,c="AsanaMathJax_Marks",h="AsanaMathJax_Misc",p="AsanaMathJax_Monospace",d="AsanaMathJax_NonUnicode"
,v="AsanaMathJax_Normal",m="AsanaMathJax_Operators",g="AsanaMathJax_SansSerif",y="AsanaMathJax_Script"
,b="AsanaMathJax_Shapes",w="AsanaMathJax_Size1",E="AsanaMathJax_Size2",S="AsanaMathJax_Size3"
,x="AsanaMathJax_Size4",T="AsanaMathJax_Size5",N="AsanaMathJax_Size6",C="AsanaMathJax_Symbols"
,k="AsanaMathJax_Variants",L="H",A="V",O={load:"extra",dir:L},M={load:"extra",dir
:A};e.Augment({FONTDATA:{version:i,baselineskip:1200,lineH:800,lineD:200,FONTS:{AsanaMathJax_Alphabets
:"Alphabets/Regular/Main.js",AsanaMathJax_Arrows:"Arrows/Regular/Main.js",AsanaMathJax_DoubleStruck
:"DoubleStruck/Regular/Main.js",AsanaMathJax_Fraktur:"Fraktur/Regular/Main.js",AsanaMathJax_Latin
:"Latin/Regular/Main.js",AsanaMathJax_Main:"Main/Regular/Main.js",AsanaMathJax_Marks
:"Marks/Regular/Main.js",AsanaMathJax_Misc:"Misc/Regular/Main.js",AsanaMathJax_Monospace
:"Monospace/Regular/Main.js",AsanaMathJax_NonUnicode:"NonUnicode/Regular/Main.js"
,AsanaMathJax_Normal:"Normal/Regular/Main.js",AsanaMathJax_Operators:"Operators/Regular/Main.js"
,AsanaMathJax_SansSerif:"SansSerif/Regular/Main.js",AsanaMathJax_Script:"Script/Regular/Main.js"
,AsanaMathJax_Shapes:"Shapes/Regular/Main.js",AsanaMathJax_Size1:"Size1/Regular/Main.js"
,AsanaMathJax_Size2:"Size2/Regular/Main.js",AsanaMathJax_Size3:"Size3/Regular/Main.js"
,AsanaMathJax_Size4:"Size4/Regular/Main.js",AsanaMathJax_Size5:"Size5/Regular/Main.js"
,AsanaMathJax_Size6:"Size6/Regular/Main.js",AsanaMathJax_Symbols:"Symbols/Regular/Main.js"
,AsanaMathJax_Variants:"Variants/Regular/Main.js"},VARIANT:{normal:{fonts:[l,v,p,
f,s,c,o,m,C,b,h,k,d,w]},bold:{fonts:[l,v,p,f,s,c,o,m,C,b,h,k,d,w],bold:!0,offsetA
:119808,offsetG:120488,offsetN:120782},italic:{fonts:[l,v,p,f,s,c,o,m,C,b,h,k,d,w
],italic:!0,offsetA:119860,offsetG:120546,remap:{119893:8462}},"bold-italic":{fonts
:[l,v,p,f,s,c,o,m,C,b,h,k,d,w],bold:!0,italic:!0,offsetA:119912,offsetG:120604},"double-struck"
:{fonts:[u],offsetA:120120,offsetN:120792,remap:{120122:8450,120127:8461,120133:8469
,120135:8473,120136:8474,120137:8477,120145:8484}},fraktur:{fonts:[a],offsetA:120068
,remap:{120070:8493,120075:8460,120076:8465,120085:8476,120093:8488}},"bold-fraktur"
:{fonts:[a],bold:!0,offsetA:120172},script:{fonts:[y],italic:!0,offsetA:119964,remap
:{119965:8492,119968:8496,119969:8497,119971:8459,119972:8464,119975:8466,119976:8499
,119981:8475,119994:8495,119996:8458,120004:8500}},"bold-script":{fonts:[y],bold:!0
,italic:!0,offsetA:120016},"sans-serif":{fonts:[g],offsetA:120224,offsetN:120802}
,"bold-sans-serif":{fonts:[g],bold:!0,offsetA:120276,offsetN:120812,offsetG:120662
},"sans-serif-italic":{fonts:[g],italic:!0,offsetA:120328},"sans-serif-bold-italic"
:{fonts:[g],bold:!0,italic:!0,offsetA:120380,offsetG:120720},monospace:{fonts:[p]
,offsetA:120432,offsetN:120822},"-Asana-Math-variant":{fonts:[l,v,p,f,s,c,o,m,C,b
,h,k,d,w]},"-tex-caligraphic":{offsetA:57866,noLowerCase:1,fonts:[k,l,v,p,f,s,c,o
,m,C,b,h,d,w],italic:!0},"-tex-oldstyle":{offsetN:57856,fonts:[k,l,v,p,f,s,c,o,m,
C,b,h,d,w]},"-tex-caligraphic-bold":{offsetA:57892,noLowerCase:1,fonts:[k,l,v,p,f
,s,c,o,m,C,b,h,d,w],italic:!0,bold:!0},"-tex-oldstyle-bold":{fonts:[l,v,p,f,s,c,o
,m,C,b,h,k,d,w],bold:!0},"-tex-mathit":{fonts:[l,v,p,f,s,c,o,m,C,b,h,k,d,w],italic
:!0,noIC:!0},"-largeOp":{fonts:[w,l]},"-smallOp":{}},RANGES:[{name:"alpha",low:97
,high:122,offset:"A",add:26},{name:"Alpha",low:65,high:90,offset:"A"},{name:"number"
,low:48,high:57,offset:"N"},{name:"greek",low:945,high:969,offset:"G",add:26},{name
:"Greek",low:913,high:1014,offset:"G",remap:{1013:52,977:53,1008:54,981:55,1009:56
,982:57,1012:17}}],RULECHAR:773,REMAP:{9666:9664,9667:9665,65080:9183,12296:10216
,12297:10217,9642:9632,175:772,8432:42,10072:8739,978:933,9652:9650,9653:9651,65079
:9182,9656:9654,697:8242,9662:9660,9663:9661},REMAPACCENT:{"~":"̃","→":"⃗","`":"̀"
,"^":"̂","´":"́","′":"́","‵":"̀"},REMAPACCENTUNDER:{},DELIMITERS:{40:{dir:A,HW:[[941
,l],[1471,w],[2041,E],[2552,S],[2615,S,1.025]],stretch:{bot:[9117,C],ext:[9116,C]
,top:[9115,C]}},41:{dir:A,HW:[[941,l],[1471,w],[2041,E],[2552,S],[2615,S,1.025]],
stretch:{bot:[9120,C],ext:[9119,C],top:[9118,C]}},45:{alias:773,dir:L},47:{alias:8260
,dir:L},61:{dir:L,HW:[[539,l]],stretch:{rep:[61,l]}},91:{dir:A,HW:[[910,l],[1476,
w],[2045,E],[2556,S],[2615,S,1.023]],stretch:{bot:[9123,C],ext:[9122,C],top:[9121
,C]}},92:{dir:A,HW:[[883,l],[1270,l,1.439],[1719,l,1.946],[2167,l,2.454],[2615,l,2.961
]]},93:{dir:A,HW:[[910,l],[1476,w],[2045,E],[2556,S],[2615,S,1.023]],stretch:{bot
:[9126,C],ext:[9125,C],top:[9124,C]}},94:{alias:770,dir:L},95:{alias:818,dir:L},123
:{dir:A,HW:[[901,l],[1471,w],[2041,E],[2552,S],[2615,S,1.025]],stretch:{bot:[9129
,C],ext:[9130,C],mid:[9128,C],top:[9127,C]}},124:{dir:A,HW:[[885,l],[1275,w],[1555
,E],[1897,S],[2315,x],[2712,T],[3177,N]],stretch:{ext:[57344,N],top:[57344,N]}},125
:{dir:A,HW:[[901,l],[1471,w],[2041,E],[2552,S],[2615,S,1.025]],stretch:{bot:[9133
,C],ext:[9130,C],mid:[9132,C],top:[9131,C]}},126:{alias:771,dir:L},175:{alias:773
,dir:L},710:{alias:770,dir:L},713:{alias:773,dir:L},732:{alias:771,dir:L},770:{dir
:L,HW:[[312,l],[453,w],[633,E],[1055,S],[2017,x],[3026,T]]},771:{dir:L,HW:[[330,l
],[701,w],[1053,E],[1403,S],[1865,x],[2797,T]]},773:{dir:L,HW:[[433,c],[511,w],[675
,E],[1127,S]],stretch:{rep:[57345,N],right:[57345,N]}},774:O,780:{dir:L,HW:[[312,
l],[737,w],[1105,E],[1474,S],[1960,x],[2940,T]]},818:{dir:L,HW:[[433,c],[511,w],[675
,E],[1127,S]],stretch:{rep:[57346,N],right:[57346,N]}},819:O,831:O,8213:{alias:773
,dir:L},8214:{dir:A,HW:[[885,l],[1275,w],[1555,E],[1897,S],[2315,x]],stretch:{ext
:[57349,N],top:[57349,N]}},8215:{alias:773,dir:L},8254:{alias:773,dir:L},8260:{dir
:A,HW:[[837,l],[1205,w],[1471,E],[1795,S],[2189,x],[2615,x,1.195]]},8261:M,8262:M
,8400:O,8401:O,8406:O,8407:O,8417:O,8425:O,8430:O,8431:O,8592:{dir:L,HW:[[884,l]]
,stretch:{left:[57363,N],rep:[9135,C],right:[57364,N]}},8593:{dir:A,HW:[[885,l]],
stretch:{ext:[57365,N],top:[8593,l]}},8594:{dir:L,HW:[[884,l]],stretch:{left:[57366
,N],rep:[9135,C],right:[57367,N]}},8595:{dir:A,HW:[[885,l]],stretch:{bot:[8595,l]
,ext:[57365,N]}},8596:{dir:L,HW:[[884,l]],stretch:{left:[57363,N],rep:[9135,C],right
:[57367,N]}},8597:{dir:A,HW:[[884,l]],stretch:{top:[8593,l],ext:[57365,N],bot:[8595
,l]}},8612:{dir:L,HW:[[942,o]],stretch:{left:[57363,N],rep:[9135,C],right:[57368,
N]}},8614:{dir:L,HW:[[942,l]],stretch:{left:[57369,N],rep:[9135,C],right:[57367,N
]}},8617:O,8618:O,8656:{dir:L,HW:[[884,l]],stretch:{left:[57372,N],rep:[57373,N],
right:[57374,N]}},8657:{dir:A,HW:[[885,l]],stretch:{ext:[57375,N],top:[8657,l]}},8658
:{dir:L,HW:[[884,l]],stretch:{left:[57376,N],rep:[57373,N],right:[57377,N]}},8659
:{dir:A,HW:[[885,l]],stretch:{bot:[8659,l],ext:[57375,N]}},8660:{dir:L,HW:[[895,l
]],stretch:{left:[57372,N],rep:[57373,N],right:[57377,N]}},8661:{dir:A,HW:[[884,l
,null,8597]],stretch:{top:[8657,l],ext:[57375,N],bot:[8659,l]}},8719:{dir:A,HW:[[937
,m],[1349,w],[1942,E],[2797,S]]},8720:M,8721:M,8722:{alias:773,dir:L},8725:{alias
:8260,dir:A},8730:{dir:A,HW:[[1138,l],[1280,w],[1912,E],[2543,S],[3175,x]],stretch
:{bot:[9143,C],ext:[8403,c],top:[57378,N]}},8739:{dir:A,HW:[[885,l]],stretch:{ext
:[8739,l],top:[8739,l]}},8741:{dir:A,HW:[[885,l]],stretch:{ext:[8741,l],top:[8741
,l]}},8745:M,8747:M,8748:M,8749:M,8750:M,8751:M,8752:M,8753:M,8754:M,8755:M,8896:
M,8897:M,8898:M,8899:M,8968:{dir:A,HW:[[885,l],[1470,w],[2041,E],[2552,S],[2615,S
,1.025]],stretch:{ext:[9122,C],top:[9121,C]}},8969:{dir:A,HW:[[885,l],[1470,w],[2041
,E],[2552,S],[2615,S,1.025]],stretch:{ext:[9125,C],top:[9124,C]}},8970:{dir:A,HW:
[[885,l],[1470,w],[2041,E],[2552,S],[2615,S,1.025]],stretch:{bot:[9123,C],ext:[9122
,C]}},8971:{dir:A,HW:[[885,l],[1470,w],[2041,E],[2552,S],[2615,S,1.025]],stretch:
{bot:[9126,C],ext:[9125,C]}},9001:{alias:10216,dir:A},9002:{alias:10217,dir:A},9130
:{dir:A,HW:[[688,C]],stretch:{ext:[9130,C]}},9135:{dir:L,HW:[[638,C]],stretch:{rep
:[9135,C]}},9136:{alias:10182,dir:A},9137:{alias:10181,dir:A},9140:O,9141:O,9168:
{dir:A,HW:[[885,l,null,124],[1270,l,1.435,124],[1719,l,1.942,124],[2167,l,2.448,124
],[2615,l,2.955,124]],stretch:{ext:[124,l]}},9180:O,9181:O,9182:{dir:L,HW:[[902,l
],[1471,w],[2041,E],[2552,S]],stretch:{left:[57382,N],rep:[57383,N],mid:[57388,N]
,right:[57384,N]}},9183:{dir:L,HW:[[902,l],[1471,w],[2041,E],[2552,S]],stretch:{left
:[57385,N],rep:[57386,N],mid:[57389,N],right:[57387,N]}},9184:O,9185:O,9472:{alias
:773,dir:L},10072:{alias:8739,dir:A},10181:{dir:A,HW:[[910,C],[1020,w],[1531,E],[2041
,S],[2552,x],[3063,T]]},10182:{dir:A,HW:[[910,C],[1020,w],[1531,E],[2041,S],[2552
,x],[3063,T]]},10214:M,10215:M,10216:{dir:A,HW:[[885,l],[1020,w],[1270,w,1.244],[2041
,E],[2552,S],[2615,S,1.025]]},10217:{dir:A,HW:[[885,l],[1020,w],[1270,w,1.244],[2041
,E],[2552,S],[2615,S,1.025]]},10218:M,10219:M,10222:{alias:40,dir:A},10223:{alias
:41,dir:A},10229:{alias:8592,dir:L},10230:{alias:8594,dir:L},10231:{alias:8596,dir
:L},10232:{alias:8656,dir:L},10233:{alias:8658,dir:L},10234:{alias:8660,dir:L},10235
:{alias:8612,dir:L},10236:{alias:8614,dir:L},10237:{alias:10502,dir:L},10238:{alias
:10503,dir:L},10502:{dir:L,HW:[[884,o]],stretch:{left:[57372,N],rep:[57373,N],right
:[57390,N]}},10503:{dir:L,HW:[[884,o]],stretch:{left:[57391,N],rep:[57373,N],right
:[57377,N]}},10748:M,10749:M,10752:M,10753:M,10754:M,10755:M,10756:M,10757:M,10758
:M,10759:M,10760:M,10761:M,10764:M,10765:M,10766:M,10767:M,10768:M,10769:M,10770:
M,10771:M,10772:M,10773:M,10774:M,10775:M,10776:M,10777:M,10778:M,10779:M,10780:M
,12296:{alias:10216,dir:A},12297:{alias:10217,dir:A},65079:{alias:9182,dir:L},65080
:{alias:9183,dir:L}}}}),MathJax.Hub.Register.LoadHook(e.fontDir+"/Size6/Regular/Main.js"
,function(){var t;t=e.FONTDATA.DELIMITERS[9182].stretch.rep[0],e.FONTDATA.FONTS[N
][t][0]+=100,e.FONTDATA.FONTS[N][t][1]+=100,t=e.FONTDATA.DELIMITERS[9183].stretch
.rep[0],e.FONTDATA.FONTS[N][t][0]+=100,e.FONTDATA.FONTS[N][t][1]+=100}),MathJax.Hub
.Register.LoadHook(e.fontDir+"/Size1/Regular/Main.js",function(){var t;e.FONTDATA
.FONTS[w][8747][2]-=300;for(t=8748;t<=8755;t++)e.FONTDATA.FONTS[w][t][2]-=420;for(
t=10764;t<=10780;t++)e.FONTDATA.FONTS[w][t][2]-=420}),n.loadComplete(e.fontDir+"/fontdata.js"
)})(MathJax.OutputJax.SVG,MathJax.ElementJax.mml,MathJax.Ajax,MathJax.Hub);