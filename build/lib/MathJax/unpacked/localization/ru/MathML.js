/*************************************************************
 *
 *  MathJax/localization/ru/MathML.js
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

MathJax.Localization.addTranslation("ru","MathML",{version:"2.5.0",isLoaded:!0,strings
:{BadMglyph:"Неверный mglyphː %1",BadMglyphFont:"Плохой шрифт: %1",MathPlayer:"MathJax не смог настроить MathPlayer.\n\nЕсли MathPlayer не установлен, установите. Если установлен, вероятно, Ваши настройки безопасности не позволяют запуск ActiveX. В меню Инструменты|Свойства обозревателя выберите вкладку «Безопасность», нажмите кнопку «Другой…» и убедитесь, что инструменты ActiveX и поведение двоичного кода и сценариев включены.\n\nСейчас Вы должны видеть сообщения об ошибках, а не формулы."
,CantCreateXMLParser:"MathJax не смог создать парсер XML для MathML. Убедитесь, что элементы ActiveX, отмеченные как безопасные для скриптов, включены (В меню Инструменты|Свойства обозревателя выберите вкладку «Безопасность», нажмите кнопку «Другой…»).\n\nMathJax не сможет вывести формулы MathML."
,UnknownNodeType:"Неизместный тэг %1",UnexpectedTextNode:"Текстовый узел %1 в этом месте не ожидается"
,ErrorParsingMathML:"Ошибка разбора MathML",ParsingError:"Ошибка разбора MathML: %1"
,MathMLSingleElement:"MathML должен содержать только один тэг <math>",MathMLRootElement
:"Корневым узлом MathML должен быть <math>, не %1"}}),MathJax.Ajax.loadComplete("[MathJax]/localization/ru/MathML.js"
);