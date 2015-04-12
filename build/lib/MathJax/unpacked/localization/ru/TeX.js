/*************************************************************
 *
 *  MathJax/localization/ru/TeX.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
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
 *
 */

MathJax.Localization.addTranslation("ru","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"Лишняя открывающая скобка или отсутствующая закрывающая скобка"
,ExtraCloseMissingOpen:"Лишняя закрывающая скобка или отсутствующая открывающая скобка"
,MissingLeftExtraRight:"Отсутствует \\left или лишний \\right",MissingScript:"Отсутствует надстрочный или подстрочный аргумент"
,ExtraLeftMissingRight:"Лишний \\left или отсутствует \\right",Misplaced:"%1 не на месте"
,MissingOpenForSub:"Нет открывающей скобки в нижнем индексе",MissingOpenForSup:"Нет открывающей скобки в нижнем индексе"
,AmbiguousUseOf:"Неоднозначное использование %1",EnvBadEnd:"\\begin{%1} закрыто с помощью \\end{%2}"
,EnvMissingEnd:"Пропущен \\end{%1}",MissingBoxFor:"У %1 нет содержимого",MissingCloseBrace
:"Отсутствует закрывающая скобка",UndefinedControlSequence:"Неопределённая управляющая последовательность %1"
,DoubleExponent:"Двойная экспонента: используйте скобки для уточнения",DoubleSubscripts
:"Два нижних индекса подряд: поставьте фигурные скобки",DoubleExponentPrime:"Штрих после верхнего индекса: уточните, к чему он относится, фигурными скобками"
,CantUseHash1:"В режиме «math» нельзя использовать символ параметра макроса #",MisplacedMiddle
:"%1 используется только внутри \\left и \\right",MisplacedLimits:"%1 используется только с операторами"
,MisplacedMoveRoot:"%1 используется только в корнях",MultipleCommand:"Несколько %1"
,IntegerArg:"Аргумент для %1 должен быть целым числом",NotMathMLToken:"%1 — не символ MML"
,InvalidMathMLAttr:"Недопустимый атрибут MathML: %1",UnknownAttrForElement:"%1 — не атрибут тега MML %2"
,MaxMacroSub1:"Превышено допустимое число подстановок макроса: не рекурсия ли это?"
,MaxMacroSub2:"Превышено предельное число подстановок MathJax. Нет ли рекурсии в окружении LaTeX?"
,MissingArgFor:"Отсутствует аргумент для %1",ExtraAlignTab:"Слишком много столбцов в \\cases"
,BracketMustBeDimension:"Разделитель (?) %1 недопустим",InvalidEnv:"Неправильное название окружения «%1»"
,UnknownEnv:"Неизвестное окружение «%1»",ExtraCloseLooking:"Лишняя закрывающая скобка, когда ожидалась %1"
,MissingCloseBracket:"Не удалось найти закрывающую ']' для аргумента к %1",MissingOrUnrecognizedDelim
:"Отсутствует или не распознан разделитель для %1",MissingDimOrUnits:"Нет единицы измерения в %1"
,TokenNotFoundForCommand:"Не удаётся найти %1 для %2",MathNotTerminated:"Незакрытая формула в \\text{}"
,IllegalMacroParam:"Ссылка на несуществующий параметр макроса",MaxBufferSize:"Исчерпан внутренний буфер MathJax: нет ли рекурсивного макроса?"
,CommandNotAllowedInEnv:"%1 не позволен в окружении %2",MultipleLabel:"Метка «%1» определена несколько раз"
,CommandAtTheBeginingOfLine:"%1 должно быть в начале строки",IllegalAlign:"Недопустимое выравнивание в %1"
,BadMathStyleFor:"Недопустимый стиль для %1",PositiveIntegerArg:"Аргумент %1 должен быть натуральным числом"
,ErroneousNestingEq:"Недопустимое вложение структур",MultlineRowsOneCol:"В строках окружения %1 должно быть по одному столбцу"
,MultipleBBoxProperty:"%1 указано дважды в %2",InvalidBBoxProperty:"'%1' — не цвет, внутренний отступ или стиль"
,ExtraEndMissingBegin:"Лишнее %1 или пропущено \\begingroup",GlobalNotFollowedBy:"После %1 нет \\let, \\def или \\newcommand"
,UndefinedColorModel:"Цветовая модель «%1» не определена",ModelArg1:"Цветовая модель %1 требует трёх компонентов"
,InvalidDecimalNumber:"Недопустимое десятичное число",ModelArg2:"Значения компонентов цвета в модели %1 должны быть между %2 и %3"
,InvalidNumber:"Недопустимое число",NewextarrowArg1:"Первым аргументом %1 должен быть набор команд"
,NewextarrowArg2:"Вторым аргументом %1 должна быть пара целых чисел, разделённая запятой"
,NewextarrowArg3:"Третьим параметром %1 должен быть код символа Юникод",NoClosingChar
:"Не удаётся найти закрывающий символ %1",IllegalControlSequenceName:"Недопустимое название команды %1"
,IllegalParamNumber:"Недопустимое число параметров %1",MissingCS:"После %1 должны идти команды"
,CantUseHash2:"Недопустимое использование # в определении %1",SequentialParam:"Номера параметров %1 должны быть последовательны"
,MissingReplacementString:"Нет определения %1",MismatchUseDef:"Неправильный вызов %1"
,RunawayArgument:"В вызове %1 пропущен параметр?",NoClosingDelim:"%1 не закрыто"}
}),MathJax.Ajax.loadComplete("[MathJax]/localization/ru/TeX.js");