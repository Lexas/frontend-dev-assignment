/*
 *  /MathJax/localization/sv/MathML.js
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

MathJax.Localization.addTranslation("sv","MathML",{version:"2.5.0",isLoaded:!0,strings
:{BadMglyph:"Dålig mglyph: %1",BadMglyphFont:"Dåligt typsnitt: %1",MathPlayer:"MathJax kunde inte ställa in MathPlayer.\n\nOm MathPlayer inte är installerat, måste du installera \nden först. Annars kan det hända att dina \nsäkerhetsinställningar förhindrar ActiveX-kontroller \nfrån att köras. Använd internetinställningar i \nverktygsmenyn, välj säkerhetspanelen, klicka sedan \nanvändardefinierad nivå-knappen. Kontrollera att \ninställningarna för 'Kör ActiveX-kontroller' samt \n'Binär och skript-beteenden' är aktiverade.\n\nFör närvarande kommer du att se flemeddelande snarare \nän typsatt matematik"
,CantCreateXMLParser:"MathJax kunde inte skapa en XML-tolk för MathML. Kontrollera att \nsäkerhetsinställningen 'Script ActiveX X-kontroller som markerats \nsom säkra för skript' är aktiverad (använd internetinställningar \ni verktygsmenyn, välj säkerhetspanelen, klicka sedan \nanvändardefinierad nivå-knappen för att kontrollera detta).\n\nMathML-ekvationer kommer inte kunna hanteras av MathJax"
,UnknownNodeType:"Okänd nodtyp: %1",UnexpectedTextNode:"Oväntad textnod: %1",ErrorParsingMathML
:"Fel vid tolkning av MathML",ParsingError:"Fel vid tolkning av MathML: %1",MathMLSingleElement
:"MathML måste bildas av ett enskilt element",MathMLRootElement:"MathML måste bildas av ett <math>-element, inte %1"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/sv/MathML.js");