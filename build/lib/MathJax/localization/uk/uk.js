/*
 *  /MathJax/localization/uk/uk.js
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

MathJax.Localization.addTranslation("uk",null,{menuTitle:"українська",version:"2.5.0"
,isLoaded:!0,domains:{_:{version:"2.5.0",isLoaded:!0,strings:{CookieConfig:'MathJax знайшла куки конфігурації користувача, що містить код для запуску. Ви хочете запустити його?\n\n\n(Ви повинні натиснути "Скасувати", аби скасувати налаштування кук у налаштув настроювання cookie себе.)'
,MathProcessingError:"Помилка обробки математики",MathError:"Математична помилка"
,LoadFile:"Завантаження %1",Loading:"Завантаження",LoadFailed:"Не вдалося завантажити файл: %1"
,ProcessMath:"Обробка математики: %1%%",Processing:"Обробка...",TypesetMath:"Верстка математики: %1%%"
,Typesetting:"Верстка",MathJaxNotSupported:"Ваш браузер не підтримує MathJax"}},FontWarnings
:{},"HTML-CSS":{},HelpDialog:{},MathML:{},MathMenu:{},TeX:{}},plural:function(e){
return e%10===1&&e%100!=11?1:2<=e%10&&e%10<=4&&!(12<=e%100&&e%100<=14)?2:e%10===0||5<=
e%10&&e%10<=9||11<=e%100&&e%100<=14?3:4},number:function(e){return e}}),MathJax.Ajax
.loadComplete("[MathJax]/localization/uk/uk.js");