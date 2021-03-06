/*
 *  /MathJax/extensions/TeX/mediawiki-texvc.js
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

MathJax.Extension["TeX/mediawiki-texvc"]={version:"2.5.0"},MathJax.Hub.Register.StartupHook
("TeX Jax Ready",function(){MathJax.InputJax.TeX.Definitions.Add({macros:{alef:["Macro"
,"\\aleph"],alefsym:["Macro","\\aleph"],Alpha:["Macro","\\mathrm{A}"],and:["Macro"
,"\\land"],ang:["Macro","\\angle"],Bbb:["Macro","\\mathbb"],Beta:["Macro","\\mathrm{B}"
],bold:["Macro","\\mathbf"],bull:["Macro","\\bullet"],C:["Macro","\\mathbb{C}"],Chi
:["Macro","\\mathrm{X}"],clubs:["Macro","\\clubsuit"],cnums:["Macro","\\mathbb{C}"
],Complex:["Macro","\\mathbb{C}"],Dagger:["Macro","\\ddagger"],darr:["Macro","\\downarrow"
],dArr:["Macro","\\Downarrow"],Darr:["Macro","\\Downarrow"],diamonds:["Macro","\\diamondsuit"
],empty:["Macro","\\emptyset"],Epsilon:["Macro","\\mathrm{E}"],Eta:["Macro","\\mathrm{H}"
],exist:["Macro","\\exists"],H:["Macro","\\mathbb{H}"],hAar:["Macro","\\Leftrightarrow"
],harr:["Macro","\\leftrightarrow"],Harr:["Macro","\\Leftrightarrow"],hearts:["Macro"
,"\\heartsuit"],image:["Macro","\\Im"],infin:["Macro","\\infty"],Iota:["Macro","\\mathrm{I}"
],isin:["Macro","\\in"],Kappa:["Macro","\\mathrm{K}"],lang:["Macro","\\langle"],larr
:["Macro","\\leftarrow"],Larr:["Macro","\\Leftarrow"],lArr:["Macro","\\Leftarrow"
],lrarr:["Macro","\\leftrightarrow"],Lrarr:["Macro","\\Leftrightarrow"],lrArr:["Macro"
,"\\Leftrightarrow"],Mu:["Macro","\\mathrm{M}"],N:["Macro","\\mathbb{N}"],natnums
:["Macro","\\mathbb{N}"],Nu:["Macro","\\mathrm{N}"],O:["Macro","\\emptyset"],Omicron
:["Macro","\\mathrm{O}"],or:["Macro","\\lor"],part:["Macro","\\partial"],plusmn:["Macro"
,"\\pm"],Q:["Macro","\\mathbb{Q}"],R:["Macro","\\mathbb{R}"],rang:["Macro","\\rangle"
],rarr:["Macro","\\rightarrow"],Rarr:["Macro","\\Rightarrow"],rArr:["Macro","\\Rightarrow"
],real:["Macro","\\Re"],reals:["Macro","\\mathbb{R}"],Reals:["Macro","\\mathbb{R}"
],Rho:["Macro","\\mathrm{P}"],sdot:["Macro","\\cdot"],sect:["Macro","\\S"],spades
:["Macro","\\spadesuit"],sub:["Macro","\\subset"],sube:["Macro","\\subseteq"],supe
:["Macro","\\supseteq"],Tau:["Macro","\\mathrm{T}"],thetasym:["Macro","\\vartheta"
],uarr:["Macro","\\uparrow"],uArr:["Macro","\\Uparrow"],Uarr:["Macro","\\Uparrow"
],varcoppa:["Macro","\\mbox{ϙ}"],weierp:["Macro","\\wp"],Z:["Macro","\\mathbb{Z}"
],Zeta:["Macro","\\mathrm{Z}"]}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mediawiki-texvc.js"
);