/*************************************************************
 *
 *  MathJax/localization/es/MathML.js
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

MathJax.Localization.addTranslation("es","MathML",{version:"2.5.0",isLoaded:!0,strings
:{BadMglyph:"«mglyph» dañado: %1",BadMglyphFont:"Tipo de letra dañado: %1",MathPlayer
:'MathJax no fue capaz de configurar MathPlayer.\n\nSi no está instalado MathPlayer, tienes que instalarlo primero.\nDe lo contrario, la configuración de seguridad puede impedir que los controles de ActiveX\nfuncionen. Utiliza el elemento en opciones de internet en el menú Herramientas y selecciona la ficha Seguridad, luego presiona el\nbotón de nivel personalizado. Comprueba que la configuración de\n"Ejecutar controles ActiveX" y "comportamientos binarios y script"\nestán activados.\n\nActualmente verás los mensajes de error en lugar de la\ntipografía matemática'
,CantCreateXMLParser:'MathJax no puede crear un analizador de XML para MathML. Comprueba que la configuración de seguridad "controles de secuencia de comandos ActiveX marcados como seguros para scripts" está habilitada (utiliza el elemento en opciones de Internet en el menú Herramientas y selecciona el panel de seguridad, luego presiona el botón de nivel personalizado para comprobarlo).\n\nLas ecuaciones MathML no podrán ser procesadas por MathJax'
,UnknownNodeType:"Tipo de nodo desconocido: %1",UnexpectedTextNode:"Nodo de texto inesperado: %1"
,ErrorParsingMathML:"Error al analizar MathML",ParsingError:"Error al analizar MathML: %1"
,MathMLSingleElement:"MathML debe estar formado por un solo elemento",MathMLRootElement
:"MathML debe estar formado por un elemento <math>, no %1"}}),MathJax.Ajax.loadComplete
("[MathJax]/localization/es/MathML.js");