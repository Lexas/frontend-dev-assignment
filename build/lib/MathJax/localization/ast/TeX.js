/*
 *  /MathJax/localization/ast/TeX.js
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

MathJax.Localization.addTranslation("ast","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"Hai una llave d'apertura de más o falta una llave de zarramientu"
,ExtraCloseMissingOpen:"Hai una llave de zarramientu de más o falta una llave d'apertura"
,MissingLeftExtraRight:"Falta un \\left o sobra un \\right",MissingScript:"Falta un argumentu de superíndiz o subíndiz"
,ExtraLeftMissingRight:"Sobra un \\left o falta un \\right",Misplaced:"%1 ta mal colocáu"
,MissingOpenForSub:"Falta una llave d'apertura pal subíndiz",MissingOpenForSup:"Falta una llave d'apertura pal superíndiz"
,AmbiguousUseOf:"Usu ambiguu de %1",EnvBadEnd:"\\begin{%1} acabáu con \\end{%2}",
EnvMissingEnd:"Falta \\end{%1}",MissingBoxFor:"Falta un cuadru pa %1",MissingCloseBrace
:"Falta la llave de zarramientu",UndefinedControlSequence:"Secuencia de control indefinida %1"
,DoubleExponent:"Doble esponente: use llaves p'aclarar",DoubleSubscripts:"Doble subíndiz: usu llaves p'aclarar"
,DoubleExponentPrime:"La prima causa un doble esponente: use llaves p'aclarar",CantUseHash1
:"Nun pue usar el «caráuter # de parámetru de macro» en mou matemáticu",MisplacedMiddle
:"%1 tien de tar ente \\left y \\right",MisplacedLimits:"%1 sólo ta permitíu pa operadores"
,MisplacedMoveRoot:"%1 sólo pue apaecer dientro d'una raíz",MultipleCommand:"Múltiples %1"
,IntegerArg:"L'argumentu de %1 tien de ser un enteru",NotMathMLToken:"%1 nun ye un elementu de «token»"
,InvalidMathMLAttr:"Atributu de MathML inválidu: %1",UnknownAttrForElement:"%1 nun ye un atributu reconocíu pa %2"
,MaxMacroSub1:"Se sobrepasó'l númberu máximu de sustituciones de macro de MathJax; ¿hai ha una llamada de macro recursiva?"
,MaxMacroSub2:"Pasóse'l númberu máximu de sustituciones de MathJax; ¿hai un entornu de LaTeX recursivu?"
,MissingArgFor:"Falta l'argumentu pa %1",ExtraAlignTab:"Tabulador d'alliniamientu estra en testu \\cases"
,BracketMustBeDimension:"L'argumentu de corchete pa %1 tien de ser una dimensión"
,InvalidEnv:"Nome d'entornu «%1» inválidu",UnknownEnv:"Entornu desconocíu «%1»",ExtraCloseLooking
:"Llave de zarramientu estra cuando se buscaba %1",MissingCloseBracket:"Nun pudo alcontrase'l «]» de zarramientu pal argumentu de %1"
,MissingOrUnrecognizedDelim:"El delimitador pa %1 falta o nun ta reconocíu",MissingDimOrUnits
:"Falta la dimensión o les unidaes pa %1",TokenNotFoundForCommand:"Nun pudo alcontrase %1 pa %2"
,MathNotTerminated:"Espresión matemática inacabada nel cuadru de testu",IllegalMacroParam
:"Referencia illegal a parámetru de macro",MaxBufferSize:"Se sobrepasó el tamañu del almacenamientu intermediu internu de MathJax; ¿hai ha una llamada a una macro recursiva?"
,CommandNotAllowedInEnv:"%1 nun se permite nel entornu %2",MultipleLabel:"La etiqueta '%1' tien definiciones múltiples"
,CommandAtTheBeginingOfLine:"%1 tien d'apaecer al principiu de la llinia",IllegalAlign
:"Alliniación illegal especificada en %1",BadMathStyleFor:"Estilu de matemátiques incorreutu pa %1"
,PositiveIntegerArg:"L'argumentu de %1 tien de ser un enteru positivu",ErroneousNestingEq
:"Añeramientu incorreutu d'estructures d'ecuación",MultlineRowsOneCol:"Les fileres dientro del entornu %1 han de tener exactamente una columna"
,MultipleBBoxProperty:"Propiedá %1 especificada dos veces en %2",InvalidBBoxProperty
:"'%1' nun paez un color, una distancia de separación o un estilu",ExtraEndMissingBegin
:"Sobra un %1 o falta un \\begingroup",GlobalNotFollowedBy:"%1 nun ta siguíu por \\let, \\def o \\newcommand"
,UndefinedColorModel:"El modelu de color '%1' nun ta definíu",ModelArg1:"Los valores de color pal modelu %1 requieren 3 númberos"
,InvalidDecimalNumber:"Númberu decimal inválidu",ModelArg2:"Los valores de color pal modelu %1 tienen de tar ente %2 y %3"
,InvalidNumber:"Númberu inválidu",NewextarrowArg1:"El primer argumentu pa %1 tien de ser un nome de secuencia de control"
,NewextarrowArg2:"El segundu argumentu pa %1 tienen de ser dos enteros separaos por una coma"
,NewextarrowArg3:"El tercer argumentu pa %1 tien de ser un númberu de caráuter Unicode"
,NoClosingChar:"Nun pue alcontrase'l %1 de zarru",IllegalControlSequenceName:"Nome incorreutu de secuencia de control pa %1"
,IllegalParamNumber:"Númberu parámetros illegal especificáu en %1",MissingCS:"%1 tien de tar siguíu por una secuencia de control"
,CantUseHash2:"Usu illegal de # nuna plantía pa %1",SequentialParam:"Los parámetros pa %1 tienen de numberase de mou secuencial"
,MissingReplacementString:"Falta la cadena de sustitución pa la definición de %1"
,MismatchUseDef:"L'usu de %1 nun casa cola so definición",RunawayArgument:"¿Argumentu descontroláu pa %1?"
,NoClosingDelim:"Nun s'alcontró el delimitador de zarru pa %1"}}),MathJax.Ajax.loadComplete
("[MathJax]/localization/ast/TeX.js");