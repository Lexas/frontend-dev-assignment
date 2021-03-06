/*************************************************************
 *
 *  MathJax/localization/fr/TeX.js
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

MathJax.Localization.addTranslation("fr","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"Accolade ouvrante non attendue ou accolade fermante manquante"
,ExtraCloseMissingOpen:"Accolade fermante non attendue ou accolade ouvrante manquante"
,MissingLeftExtraRight:"Commande \\left manquante ou commande \\right superflue",
MissingScript:"Argument en exposant ou en indice manquant",ExtraLeftMissingRight:"Commande \\left inattendue ou commande \\right manquante"
,Misplaced:"Mauvaise position pour la commande %1",MissingOpenForSub:"Accolade ouvrante manquante pour le script en indice"
,MissingOpenForSup:"Accolade ouvrante manquante pour le script en exposant",AmbiguousUseOf
:"Usage ambigu de la commande %1",EnvBadEnd:"\\begin{%1} s'est terminé par un \\end{%2}"
,EnvMissingEnd:"\\end{%1} manquant",MissingBoxFor:"Boite manquante pour la commande %1"
,MissingCloseBrace:"Accolade fermante manquante",UndefinedControlSequence:"Commande %1 non définie"
,DoubleExponent:"Double exposant : utilisez des accolades pour clarifier",DoubleSubscripts
:"Double indice : utilisez des accolades pour clarifier",DoubleExponentPrime:"Un prime entraîne un double exposant : utilisez des accolades pour clarifier"
,CantUseHash1:"Vous ne pouvez pas utilisez le caractère #, indiquant un paramètre de macro, dans le mode mathématique"
,MisplacedMiddle:"La commande %1 doit être placée à l’intérieur d’une section \\left ... \\right"
,MisplacedLimits:"La commande %1 n'est autorisée que sur les opérateurs",MisplacedMoveRoot
:"La commande %1 n'est autorisée qu'à l'intérieur d'une racine",MultipleCommand:"Usage multiple de la commande %1"
,IntegerArg:"L’argument de la commande %1 doit être un entier",NotMathMLToken:"L'élément %1 n'est pas un élément MathML élémentaire"
,InvalidMathMLAttr:"Attribut MathML non valide: %1",UnknownAttrForElement:"Attribut %1 inconnu pour l'élément %2"
,MaxMacroSub1:"Le nombre maximal de substitutions de macro autorisé par MathJax a été dépassé. Y a-t-il un appel de macro récursif?"
,MaxMacroSub2:"Le nombre maximal de substitutions de macros autorisé par MathJax a été dépassé. Y a-t-il un environnement LaTeX récursif ?"
,MissingArgFor:"Argument manquant pour la commande %1",ExtraAlignTab:"Caractère d'alignement '&' inattendu pour le texte de la commande \\cases"
,BracketMustBeDimension:"L'argument entre crochets de la commande %1 doit être une dimension"
,InvalidEnv:"Nom d'environnement '%1' non valide",UnknownEnv:"Environnement '%1' inconnu"
,ExtraCloseLooking:"Accolade fermante inattendue lors de la recherche de %1",MissingCloseBracket
:"Impossible de trouver ']' pour l'argument de la commande %1",MissingOrUnrecognizedDelim
:"Délimiteur manquant ou non reconnu pour la commande %1",MissingDimOrUnits:"Dimension ou unité manquante pour la commande %1"
,TokenNotFoundForCommand:"Impossible de trouver %1 pour la commande %2",MathNotTerminated
:"Expression mathématique non terminée à l'intérieur de cette boite de texte",IllegalMacroParam
:"Paramètre de référence de macro non autorisé",MaxBufferSize:"Taille maximale du tampon interne de MathJax dépassée; y a-t-il un appel de macro récursif ?"
,CommandNotAllowedInEnv:"La commande %1 n'est pas autorisée à l'intérieur de l'environnement %2"
,MultipleLabel:"Étiquette '%1' déjà définie",CommandAtTheBeginingOfLine:"La commande %1 doit être placée en début de ligne"
,IllegalAlign:"Alignement non autorisé pour la commande %1",BadMathStyleFor:"Style mathématique non valide pour la commande %1"
,PositiveIntegerArg:"L'argument de la commande %1 doit être un entier strictement positif"
,ErroneousNestingEq:"Emboitement incorrect des structures d'équation",MultlineRowsOneCol
:"Les rangées au sein de l’environnement %1 doivent avoir exactement une colonne"
,MultipleBBoxProperty:"La propriété %1 est spécifiée deux fois dans la commande %2"
,InvalidBBoxProperty:"La valeur '%1' ne semble pas être une couleur, une dimension de marge intérieure ou un style."
,ExtraEndMissingBegin:"Commande %1 non attendue ou commande \\begingroup manquante"
,GlobalNotFollowedBy:"Commande %1 non suivie d’une commande \\let, \\def ou \\newcommand"
,UndefinedColorModel:"Le modèle de couleur '%1' n'est pas défini",ModelArg1:"Les valeurs de couleurs pour le modèle %1 nécessitent 3 nombres"
,InvalidDecimalNumber:"Nombre décimal non valide",ModelArg2:"Les valeurs de couleurs pour le modèle %1 doivent être comprises entre %2 et %3"
,InvalidNumber:"Nombre non valide",NewextarrowArg1:"Le premier argument de la commande %1 doit être le nom d'une séquence de contrôle"
,NewextarrowArg2:"Le second argument de la commande %1 doit être deux entiers séparés par une virgule"
,NewextarrowArg3:"Le troisième argument de la commande %1 doit être la valeur d’un caractère unicode"
,NoClosingChar:"Impossible de trouver le délimiteur '%1' fermant",IllegalControlSequenceName
:"Nom de contrôle de séquence non autorisé pour la commande %1",IllegalParamNumber
:"Nombre de paramètres incorrect pour la commande %1",MissingCS:"%1 doit être suivi d'une séquence de contrôle"
,CantUseHash2:"Usage du caractère # non autorisé dans le modèle pour la séquence de contrôle %1"
,SequentialParam:"Les paramètres de la séquence de contrôle %1 doivent être énumérés de façon séquentielle"
,MissingReplacementString:"Chaine de caractère de remplacement manquante pour la définition %1"
,MismatchUseDef:"L’utilisation de la commande %1 ne correspond pas à sa définition"
,RunawayArgument:"Argument non terminé pour la commande %1?",NoClosingDelim:"Impossible de trouver le délimiteur fermant pour la commande %1"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/fr/TeX.js");