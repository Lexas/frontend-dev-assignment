/*
 *  /MathJax/localization/pt/TeX.js
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

MathJax.Localization.addTranslation("pt","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"Chaveta de abertura a mais ou chaveta de fecho a menos",
ExtraCloseMissingOpen:"Chaveta de fecho a mais ou chaveta de abertura a menos",MissingLeftExtraRight
:"Falta um \\left ou há um \\right a mais",MissingScript:"Falta o valor de um sobrescrito ou de um subscrito"
,ExtraLeftMissingRight:"Falta um \\right ou há um \\left a mais",Misplaced:"%1 fora do lugar"
,MissingOpenForSub:"Falta a chaveta de abertura para o subscrito",MissingOpenForSup
:"Falta a chaveta de abertura para o sobrescrito",AmbiguousUseOf:"Uso ambíguo de %1"
,EnvBadEnd:"\\begin{%1} foi terminado com \\end{%2}",EnvMissingEnd:"\\end{%1} em falta"
,MissingBoxFor:"Falta uma caixa para %1",MissingCloseBrace:"Falta chaveta de fecho"
,UndefinedControlSequence:"Sequência de controlo indefinida %1",DoubleExponent:"Expoente duplo: use chavetas para clarificar"
,DoubleSubscripts:"Subscrito duplo: use chavetas para clarificar",DoubleExponentPrime
:"É ambíguo a que diz respeito a plica (′): use chavetas para clarificar",CantUseHash1
:"Você não pode usar o caractere # que indica um parâmetro de macro no modo matemático"
,MisplacedMiddle:"%1 deve estar entre \\left e \\right",MisplacedLimits:"%1 só é permitido em operadores"
,MisplacedMoveRoot:"%1 só pode ser usado dentro de uma raiz",MultipleCommand:"Repetição de %1"
,IntegerArg:"O argumento de %1 deve ser um inteiro",NotMathMLToken:"%1 não é um elemento de token válido"
,InvalidMathMLAttr:"Atributo MathML inválido: %1",UnknownAttrForElement:"%1 não é um atributo reconhecido para %2"
,MaxMacroSub1:"Foi excedido o máximo de substituições de macros do MathJax; há alguma chamada a uma macro recursiva?"
,MaxMacroSub2:"Foi excedido o máximo de substituições do MathJax; há algum ambiente LaTeX recursivo?"
,MissingArgFor:"Falta um argumento para %1",ExtraAlignTab:"Há um tab de alinhamento a mais no texto de \\cases"
,BracketMustBeDimension:"O argumento nos parênteses retos de %1 deve ser uma dimensão"
,InvalidEnv:"Nome de ambiente inválido: '%1'",UnknownEnv:"Ambiente desconhecido: '%1'"
,ExtraCloseLooking:"Encontrada uma chaveta de fecho ao procurar por %1",MissingCloseBracket
:"Não foi encontrado um ']' de fecho para o argumento de %1",MissingOrUnrecognizedDelim
:"O delimitador para %1 está em falta ou não foi reconhecido",MissingDimOrUnits:"Falta a dimensão ou a unidade de %1"
,TokenNotFoundForCommand:"Não foi encontrado %1 para %2",MathNotTerminated:"A fórmula não foi terminada na caixa de texto"
,IllegalMacroParam:"Referência inválida a um parâmetro de macro",MaxBufferSize:"O tamanho do buffer interno do MathJax foi excedido; há alguma chamada a uma macro recursiva?"
,CommandNotAllowedInEnv:"%1 não é permitido no ambiente %2",MultipleLabel:"O rótulo '%1' foi definido mais que uma vez"
,CommandAtTheBeginingOfLine:"%1 deve vir no início da linha",IllegalAlign:"Foi especificado um alinhamento ilegal em %1"
,BadMathStyleFor:"Estilo de fórmula inválido para %1",PositiveIntegerArg:"O argumento para %1 deve ser um inteiro positivo"
,ErroneousNestingEq:"Aninhamento incorreto de estruturas de equações",MultlineRowsOneCol
:"As linhas do ambiente %1 devem ter apenas uma coluna",MultipleBBoxProperty:"%1 foi especificado duas vezes em %2"
,InvalidBBoxProperty:"'%1' não parece ser uma cor, uma dimensão de espaçamento, nem um estilo"
,ExtraEndMissingBegin:"Há um %1 a mais ou um \\begingroup a menos",GlobalNotFollowedBy
:"%1 não foi seguido por um \\let, \\def, ou \\newcommand",UndefinedColorModel:"O modelo de cores '%1' não foi definido"
,ModelArg1:"O modelo %1 requer 3 números para valores de cor",InvalidDecimalNumber
:"Número decimal inválido",ModelArg2:"Os valores de cor para o modelo %1 devem estar entre %2 e %3"
,InvalidNumber:"Número inválido",NewextarrowArg1:"O primeiro argumento de %1 deve ser o nome de uma sequência de controlo"
,NewextarrowArg2:"O segundo argumento de %1 deve ser composto por dois inteiros separados por uma vírgula"
,NewextarrowArg3:"O terceiro argumento de %1 deve ser o código Unicode de um caractere"
,NoClosingChar:"Não foi possível encontrar um %1 de fecho",IllegalControlSequenceName
:"O nome da sequência de controlo para %1 é inválido",IllegalParamNumber:"Número inválido de parâmetros especificado em %1"
,MissingCS:"%1 deve ser seguido por uma sequência de controlo",CantUseHash2:"Uso ilegal de # em modelo para %1"
,SequentialParam:"Os parâmetros para %1 devem ser numerados sequencialmente",MissingReplacementString
:"Falta a string de substituição para a definição de %1",MismatchUseDef:"O uso de %1 não condiz com sua definição"
,RunawayArgument:"Argumento em excesso para %1?",NoClosingDelim:"Não foi encontrado um delimitador de fecho para %1"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/pt/TeX.js");