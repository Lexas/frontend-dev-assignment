/*************************************************************
 *
 *  MathJax/localization/pl/pl.js
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

MathJax.Localization.addTranslation("pl",null,{menuTitle:"polski",version:"2.5.0"
,isLoaded:!0,domains:{_:{version:"2.5.0",isLoaded:!0,strings:{CookieConfig:"MathJax znalazł konfigurację zapisaną w ciasteczku, która zawiera kod do uruchomienia. Czy chcesz go uruchomić?\n\n(Powinieneś nacisnąć Anuluj, jeśli to nie Ty stworzyłeś tę konfigurację.)"
,MathProcessingError:"Błąd podczas przetwarzania wzorów matematycznych",MathError
:"Błąd we wzorze matematycznym",LoadFile:"Ładuję %1",Loading:"Ładuję",LoadFailed:"Nie udało się załadować pliku: %1"
,ProcessMath:"Przetwarzam wzory matematyczne: %1%%",Processing:"Przetwarzam",TypesetMath
:"Przetwarzam wzory matematyczne: %1%%",Typesetting:"Przetwarzam",MathJaxNotSupported
:"Twoja przeglądarka nie obsługuje MathJax"}},FontWarnings:{},"HTML-CSS":{},HelpDialog
:{},MathML:{},MathMenu:{},TeX:{}},plural:function(e){return e==1?1:e%10>=2&&e%10<=4&&
(e%100<10||e%100>=20)?2:3},number:function(e){return String(e).replace(".",",")}}
),MathJax.Ajax.loadComplete("[MathJax]/localization/pl/pl.js");