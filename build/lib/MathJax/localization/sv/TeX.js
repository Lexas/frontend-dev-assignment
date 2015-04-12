/*
 *  /MathJax/localization/sv/TeX.js
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

MathJax.Localization.addTranslation("sv","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"Extra vänsterklammerparentes eller högerklammerparentes saknas"
,ExtraCloseMissingOpen:"Extra högerklammerparentes eller vänsterklammerparentes saknas"
,MissingLeftExtraRight:"Saknad \\left eller en extra \\right",ExtraLeftMissingRight
:"Extra \\left eller en saknad \\right",Misplaced:"Felplacerad %1",MissingOpenForSub
:"Saknad vänsterklammerparentes för index",MissingOpenForSup:"Saknad vänsterklammerparentes för exponent"
,AmbiguousUseOf:"Tvetydig användning av %1",EnvBadEnd:"\\begin{%1} slutade med \\end{%2}"
,EnvMissingEnd:"Saknad \\end{%1}",MissingBoxFor:"Saknad låda för %1",MissingCloseBrace
:"Saknad högerklammerparentes",UndefinedControlSequence:"Odefinierad kontrollsekvens %1"
,DoubleExponent:"Dubbel exponent: använd klammerparenteser för att klargöra",DoubleSubscripts
:"Dubbla index: använd klammerparenteser för att klargöra",MisplacedMiddle:"%1 måste vara inom \\left och \\right"
,MisplacedLimits:"%1 tillåts endast på operatörer",MisplacedMoveRoot:"%1 kan endast visas inom en rot"
,MultipleCommand:"Flera %1",IntegerArg:"Argumentet till %1 måste vara ett heltal"
,NotMathMLToken:"%1 är inte ett token-element",InvalidMathMLAttr:"Ogiltigt MathML-attribut: %1"
,UnknownAttrForElement:"%1 är inte ett igenkändt attribut för %2",MissingArgFor:"Saknat argument för %1"
,InvalidEnv:"Ogiltigt miljönamn '%1'",UnknownEnv:"Okänd miljö '%1'",ExtraCloseLooking
:"Extra högerklammerparentes när %1 söktes",MissingCloseBracket:"Kunde inte hitta avslutande ']' för argumentet till %1"
,TokenNotFoundForCommand:"Kunde inte hitta %1 för %2",CommandNotAllowedInEnv:"%1 tillåts inte i %2-miljön"
,MultipleLabel:"Etiketten '%1' definierades flera gånger",CommandAtTheBeginingOfLine
:"%1 måste vara i början på raden",IllegalAlign:"Ogiltig justering anges i %1",MultipleBBoxProperty
:"%1 anges två gånger i %2",ExtraEndMissingBegin:"Extra %1 eller en saknad \\begingroup"
,GlobalNotFollowedBy:"%1 följs inte av \\let, \\def eller \\newcommand",UndefinedColorModel
:"Färgmodellen '%1' är inte definierad",InvalidDecimalNumber:"Ogiltig decimaltal"
,InvalidNumber:"Ogiltigt nummer",NoClosingChar:"Kan inte hitta avslutande %1",IllegalControlSequenceName
:"Ogiltigt kontrollsekvensnamn för %1",IllegalParamNumber:"Ogiltigt antal parametrar anges i %1"
,MissingScript:"Saknat argument för exponent- eller indexläge",DoubleExponentPrime
:"Primtecken orsakar dubbla exponenter: Använd klammerparenteser för att klargöra"
,CantUseHash1:"Du kan inte använda 'makroparameter-tecknet #' i matematikläge",MaxMacroSub1
:"MathJax maximala antal makro-substitutioner har överskridits; finns det ett rekursivt makroanrop?"
,MaxMacroSub2:"MathJax maximala antal substitutioner har överskridits; finns det en rekursiv LaTeX-miljö?"
,ExtraAlignTab:"Extra &-tecken i \\cases-text",BracketMustBeDimension:"Argumentet innanför klammerparenteser till %1 måste vara en dimension"
,MissingOrUnrecognizedDelim:"Saknad eller är okänd avgränsare för %1",MissingDimOrUnits
:"Saknar dimension eller dess enheter för %1",MathNotTerminated:"Matematiskt uttryckt ej avslutat i textrutan"
,IllegalMacroParam:"Ogiltig referens till makroparameter",MaxBufferSize:"MathJax intern buffertstorlek har överskridits; finns där ett rekursivt makroanrop?"
,BadMathStyleFor:"Dålig matematikstil för %1",PositiveIntegerArg:"Argumentet till %1 måste vara ett positivt heltal"
,ErroneousNestingEq:"Felaktigt nästling av ekvationsstrukturer",MultlineRowsOneCol
:"Raderna inom %1-miljön måste ha exakt en kolumn",InvalidBBoxProperty:"'%1' verkar inte vara en färg, en utfyllnadsdimension eller en stil"
,ModelArg1:"Färgvärden för färgmodell %1 kräver 3 nummer",ModelArg2:"Färgvärden för färgmodell %1 måste vara mellan %2 och %3"
,NewextarrowArg1:"Första argumentet till %1 måste vara namnet på en kontrollsekvens"
,NewextarrowArg2:"Andra argumentet till %1 måste vara två heltal separerade av ett komma"
,NewextarrowArg3:"Tredje argumentet till %1 måste vara nummeret på ett Unicode-tecken"
,MissingCS:"%1 måste följas av en kontrollsekvens",CantUseHash2:"Ogiltig användning av # i mallen för %1"
,SequentialParam:"Parametrar för %1 måste numreras sekventiellt",MissingReplacementString
:"Saknar ersättningssträngen för definition av %1",MismatchUseDef:"Användning av %1 matchar inte dess definition"
,RunawayArgument:"Skenande argument för %1?",NoClosingDelim:"Kunde inte hitta avslutande avgränsare för %1"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/sv/TeX.js");