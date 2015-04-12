/*
 *  /MathJax/localization/de/MathML.js
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

MathJax.Localization.addTranslation("de","MathML",{version:"2.5.0",isLoaded:!0,strings
:{BadMglyph:"Schlechter mglyph: %1",BadMglyphFont:"Ungültige Schriftart: %1",MathPlayer
:"MathJax konnte MathPlayer nicht einrichten.\n\nFalls MathPlayer nicht installiert ist, musst du ihn zuerst installieren.\nAnderenfalls verhindern deine Sicherheitseinstellungen, dass\nActiveX-Steuerelemente ausgeführt werden können. Verwende die\nInternetoptionen unter dem Werkzeugmenü und wähle die Registerkarte\n„Sicherheit“. Klicke dann auf „Stufe anpassen“. Überprüfe, ob die\nEinstellungen für „ActiveX-Steuerelemente ausführen“ und „Binär- und\nSkriptverhalten“ aktiviert sind.\n\nDerzeit wirst du Fehlermeldungen sehen anstatt gesetzte Inhalte."
,CantCreateXMLParser:"MathJax konnte keinen XML-Parser für MathML erstellen.\nÜberprüfe, ob die Sicherheitseinstellung\n„ActiveX-Steuerelemente ausführen, die für Skripting\nsicher sind“ aktiviert ist (verwende zur Überprüfung\ndie Internetoptionen im Werkzeugmenü, wähle die\nRegisterkarte „Sicherheit“ und klicke auf „Stufe\nanpassen“).\n\nMathML-Gleichungen können von MathJax nicht\nverarbeitet werden."
,UnknownNodeType:"Unbekannter Knotentyp: %1",UnexpectedTextNode:"Unerwarteter Textknoten: %1"
,ErrorParsingMathML:"Fehler beim Parsen von MathML",ParsingError:"Fehler beim Parsen von MathML: %1"
,MathMLSingleElement:"MathML muss von einem einzelnen Element gebildet werden",MathMLRootElement
:"MathML muss von einem <math>-Element gebildet werden, nicht %1"}}),MathJax.Ajax
.loadComplete("[MathJax]/localization/de/MathML.js");