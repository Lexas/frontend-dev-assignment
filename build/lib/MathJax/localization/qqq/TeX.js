/*
 *  /MathJax/localization/qqq/TeX.js
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

MathJax.Localization.addTranslation("qqq","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"This appears in TeX expressions when open and close braces do not match e.g. <code>\\( { \\)</code>\n\nSee also:\n* {{msg-mathjax|Tex-ExtraCloseMissingOpen}}"
,ExtraCloseMissingOpen:"This appears in TeX expressions when open and close braces do not match e.g. <code>\\( } \\)</code>\n\nSee also:\n* {{msg-mathjax|Tex-ExtraOpenMissingClose}}"
,MissingLeftExtraRight:"{{doc-important|Do not translate <code>\\left</code> and <code>\\right</code>; they are TeX commands.}}\nThis appears in TeX expressions when <code>left</code>/<code>right</code> commands do no match e.g. <code>\\( \\right) \\)</code>"
,MissingScript:"This appears in TeX expressions when a superscript or subscript is missing e.g. <code>a^2</code> or <code>a_2</code>."
,ExtraLeftMissingRight:"{{doc-important|Do not translate <code>\\left</code> and <code>\\right</code>; they are TeX commands.}}\nThis appears in TeX expressions when <code>left</code>/<code>right</code> commands do no match e.g. <code>\\( \\left( \\)</code>"
,Misplaced:"This appears in TeX expressions when an item is misplaced e.g. <code>\\( & \\)</code> since the ampersand is supposed to be used in tabular expressions.\n\nParameters:\n* %1 - the misplaced item"
,MissingOpenForSub:"This appears in TeX expressions when a subscript is missing an open brace e.g. <code>\\( x__ \\)</code>\n\nSee also:\n* {{msg-mathjax|Tex-MissingOpenForSup}}"
,MissingOpenForSup:"This appears in TeX expressions when a superscript is missing an open brace e.g. <code>\\( x^^ \\)</code>\n\nSee also:\n* {{msg-mathjax|Tex-MissingOpenForSub}}"
,AmbiguousUseOf:"This appears in TeX expressions when a command is used in an ambiguous way e.g. <code>\\( x \\over y \\over z \\)</code>.\n\nParameters:\n* %1 - the name of the TeX command"
,EnvBadEnd:"{{doc-important|Do not translate <code>\\begin</code> and <code>\\end</code>; they are TeX commands.}}\nThis appears in TeX expressions when environment names do not match e.g. <code>\\( \\begin{aligned} \\end{eqarray} \\)</code>.\n\nParameters:\n* %1 - the environment name used for <code>\\begin</code>\n* %2 - the environment name used for <code>\\end</code>"
,EnvMissingEnd:"{{doc-important|Do not translate <code>\\end</code>, it is a TeX command.}}\nThis appears in TeX expressions when an environment is not closed e.g. <code>\\( \\begin{aligned} \\)</code>.\n\nParameters:\n* %1 - the environment name e.g. <code>aligned</code>"
,MissingBoxFor:"This appears in TeX expressions when a command is missing a TeX box e.g. <code>\\( \\raise 1pt \\)</code>.\n\nParameters:\n* %1 - the command name"
,MissingCloseBrace:"This appears in TeX expressions when a close brace is missing e.g. <code>\\( \\array{ \\)</code>"
,UndefinedControlSequence:"This appears in TeX expressions when an undefined control sequence is used. Parameters:\n* %1 - the name of the TeX command"
,DoubleExponent:"This appears in TeX expressions when an ambiguous double exponent is used e.g. <code>x^3^2</code> should be <code>x^{3^2}</code> or <code>{x^3}^2</code>.\n\nSee also:\n* {{msg-mathjax|Tex-DoubleSubscripts}}"
,DoubleSubscripts:"This appears in TeX expressions when an ambiguous double subscripts is used e.g. <code>x_3_2</code> should be <code>x_{3_2}</code> or <code>{x_3}_2<code>.\n\nSee also:\n* {{msg-mathjax|Tex-DoubleExponent}}"
,DoubleExponentPrime:"This appears in TeX expressions when an ambiguous double exponent is caused by a prime e.g. <code>x^a'</code> should be <code>{x^a}'</code> or <code>x^{a'}</code>"
,CantUseHash1:"This appears in TeX expressions when the macro parameter character '#' is used in math mode e.g. <code>\\( # \\)</code>"
,MisplacedMiddle:"{{doc-important|Do not translate <code>\\left</code> and <code>\\right</code>; they are TeX commands.}}\nThis appears in TeX expressions when the <code>middle</code> command is used outside <code>\\left ... \\right</code> e.g. <code>\\( \\middle| \\)</code>"
,MisplacedLimits:"This appears in TeX expressions when the <code>limits</code> command is not used on an operator e.g. <code>\\( \\limits \\)</code>.\n\nParameters:\n* %1 - <code>\\limits</code>"
,MisplacedMoveRoot:"This appears in TeX expressions when a move root command is used outside a root e.g. <code>\\( \\uproot \\)</code>.\n\nParameters:\n* %1 - either <code>\\uproot</code> or <code>\\leftroot</code>"
,MultipleCommand:"This happens when a command or token can only be present once, e.g. <code>\\tag{}</code>. Parameters:\n* %1 - the name of the duplicated command"
,IntegerArg:"This happens when an unexpected non-integer argument is passed to a command e.g. <code>\\uproot</code>.\n\nParameters:\n* %1 - the name of the command"
,NotMathMLToken:"MathJax has a non-standard <code>\\mmlToken</code> command to insert MathML token elements.\n\nThis error happens when the tag name is unknown e.g. <code>\\mmlToken{INVALID}{x}</code>"
,InvalidMathMLAttr:"MathJax has non standard MathML and HTML related commands which can contain attributes.\n\nThis error happens when the parameter is not a valid attribute e.g. <code>\\( \\mmlToken{mi}[_INVALID_]{x} \\)</code> where underscores are forbidden."
,UnknownAttrForElement:"MathJax has non standard MathML and HTML related commands which can contain attributes.\n\nThis error happens when the attribute is invalid for the given element e.g. <code>\\( \\mmlToken{mi}[INVALIDATTR=<nowiki>''</nowiki>]{x} \\)</code>\n\nParameters:\n* %1 - attribute\n* %2 - ..."
,MaxMacroSub1:"MathJax limits the number of macro substitutions to prevent infinite loops.\n\nFor example, this error may happen with <code>\\newcommand{\\a}{\\a} \\a</code>"
,MaxMacroSub2:"MathJax limits the number of nested environments to prevent infinite loops.\n\nFor example, this error may happen with <code>\\newenvironment{a}{\\begin{a}}{\\end{a}} \\begin{a}\\end{a}</code>"
,MissingArgFor:"This happens when an argument is missing e.g. <code>\\frac{a}</code>. Parameters:\n* %1 - the command name e.g. <code>\\frac</code>"
,ExtraAlignTab:"{{doc-important|Do not translate <code>\\cases</code>; it is a TeX command.}}\nThis happens when <code>\\cases</code> has two many columns e.g. <code>\\cases{a & b & c}</code>"
,BracketMustBeDimension:"This happens when a bracket argument of an item is not a dimension e.g. <code>\\begin{array} x \\\\[INVALID] y \\end{array}</code>.\n\nParameters:\n* %1 - e.g. <code>\\</code>"
,InvalidEnv:"This happens with invalid environment name e.g. <code>\\begin{_INVALID_} \\end{_INVALID_}</code> where underscores are forbidden.\n\nParameters:\n* %1 - the environment name e.g. <code>_INVALID_</code>"
,UnknownEnv:"This happens when an unknown environment is used e.g. <code>\\begin{UNKNOWN} \\end{UNKNOWN}</code>.\n\nParameters:\n* %1 - the environment name e.g. <code>UNKNOWN</code>"
,ExtraCloseLooking:"This happens in some situations when an extra close brace is found while looking for another character, for example <code>\\( \\sqrt['''{{red|<nowiki>}</nowiki>}}''']x \\)</code>.\n\nParameters:\n* %1 - the character searched e.g. <code>]</code>"
,MissingCloseBracket:"This error happens when a closing '<code>]</code>' is missing e.g. <code>\\( \\sqrt[ \\)</code>. Parameters:\n* %1 - the command name e.g. <code>\\sqrt</code>"
,MissingOrUnrecognizedDelim:"This error happens when a delimiter is missing or unrecognized in a TeX expression e.g. <code>\\( \\left \\)</code>.\n\nParameters:\n* %1 - the command name e.g. <code>\\left</code>"
,MissingDimOrUnits:"This error happens with some TeX commands that are expecting a unit e.g. <code>\\above</code>. Parameters:\n* %1 - the command name"
,TokenNotFoundForCommand:"This happens while processing a TeX command that is expected to contain a token e.g. <code>\\( \\root{x} \\)</code> where '<code>\\of</code>' should be used.\n\nParameters:\n* %1 - the token not found e.g. <code>\\of</code>\n* %2 - the command being processed e.g. <code>\\root</code>"
,MathNotTerminated:"This happens when a math is not terminated in a text box e.g. <code>\\( \\text{$x} \\)</code> where the closing dollar is missing."
,IllegalMacroParam:"This error happens when an invalid macro parameter reference is used e.g. <code>\\( \\def\\mymacro#1{#2} \\mymacro{x} \\)</code> where '#2' is invalid since <code>\\mymacro</code> has only one parameter."
,MaxBufferSize:"The buffer size refers to the memory used by the TeX input processor.\n\nThis error may happen with recursive calls e.g. <code>\\( \\newcommand{\\a}{\\a\\a} \\a \\)</code>.\n\nNote that the number of a's is exponential with respect to the number of recursive calls.\n\nHence 'MaxBufferSize' is likely to happen before 'MaxMacroSub1'"
,CommandNotAllowedInEnv:"This appears when the <code>\\tag</code> command is used inside an environment that does not allow labelling e.g. <code>\\begin{split} x \\tag{x} \\end{split}</code>.\n\nParameters:\n* %1 - <code>\\tag</code>\n* %2 - the name of the environment"
,MultipleLabel:"This happens when TeX labels are duplicated e.g. <code>\\( \\label{x} \\) \\( \\label{x} \\)</code>.\n\nParameters:\n* %1 - TeX label name"
,CommandAtTheBeginingOfLine:"This happens when showleft/showright are misplaced. Parameters:\n* %1 - the macro name"
,IllegalAlign:"This happens when an invalid alignment is specified in <code>\\cfrac</code> e.g. <code>\\cfrac[INVALID]{a}{b}</code>.\n\nParameters:\n* %1 - <code>\\cfrac</code>"
,BadMathStyleFor:"This happens when an invalid style is specified in <code>\\genfrac</code> e.g. <code>\\genfrac{\\{}{\\}}{0pt}{INVALID}{a}{b}</code>.\n\nParameters:\n* %1 - <code>\\genfrac</code>"
,PositiveIntegerArg:"This happens when an invalid alignment is specified in the <code>alignedat</code> environment e.g. <code>\\begin{alignedat}{INVALID}\\end{alignedat}</code>."
,ErroneousNestingEq:"This happens when some equation structures are nested in a way forbidden by LaTeX e.g. two nested <code>multline</code> environment."
,MultlineRowsOneCol:"This happens when a row of the <code>multline</code> environment has more than one column e.g. <code>\\begin{multline} x & y \\end{multline}</code>.\n\nParameters:\n* %1 - the environment name <code>multline</code>"
,MultipleBBoxProperty:"This appears with the TeX command <code>\\bbox</code> when a property e.g. the background color is specified twice.\n\nParameters:\n* %1 - the name of the duplicate property\n* %2 - the command name <code>\\bbox</code>"
,InvalidBBoxProperty:"This appears with the TeX command <code>\\bbox</code> when a property is not a color, a padding dimension, or a style.\n\n'padding' is a CSS property name for the 'inner margin' of a box. You may verify on MDN how it is translated in your language.\n\nParameters:\n* %1 - the name of the invalid property specified"
,ExtraEndMissingBegin:"{{doc-important|Do not translate <code>\\begingroup</code>.}}\nThis appears in TeX expressions when begingroup/endgroup do not match. Parameters:\n* %1 - the command name <code>\\endgroup</code>"
,GlobalNotFollowedBy:"{{doc-important|Do not translate <code>\\let</code>, <code>\\def</code>, or <code>\\newcommand</code>; they are TeX expressions.}}\nThis appears in TeX expressions when <code>\\global</code> is not followed by <code>\\let</code>, <code>\\def</code>, or <code>\\newcommand</code>"
,UndefinedColorModel:"An invalid color model is used for the <code>\\color</code> command. Parameters:\n* %1 - the color model specified"
,ModelArg1:"An invalid color value is used for the <code>\\color</code> command e.g. <code>\\( \\color[RGB]{}{} \\)</code>\n\nParameters:\n* %1 - color model name"
,InvalidDecimalNumber:"An invalid decimal number is used for the <code>\\color</code> command e.g. <code>\\( \\color[rgb]{,,}{} \\)</code>.\n\nA valid decimal number is such as: 12, 12., 12.34, .34"
,ModelArg2:"An out-of-range number is used for the <code>\\color</code> command e.g. <code>\\( \\color[RGB]{256,,}{} \\)</code>.\n\nParameters:\n* %1 - the color model e.g. <code>RGB</code>\n* %2 - the lower bound of the valid interval e.g. 0 for the RGB color model\n* %3 - the upper bound of the valid interval e.g. 255 for the RGB color model"
,InvalidNumber:"An invalid number is used for the <code>\\color</code> command e.g. <code>\\( \\color[RGB]{,,}{} \\)</code>.\n\nA valid number is such as: 123"
,NewextarrowArg1:"Used when the first argument of <code>\\Newextarrow</code> is invalid. Parameters:\n* %1 - the command name <code>\\Newextarrow</code>"
,NewextarrowArg2:"Used when the second argument of <code>\\Newextarrow</code> is invalid. Parameters:\n* %1 - the command name <code>\\Newextarrow</code>"
,NewextarrowArg3:"Used when the third argument of <code>\\Newextarrow</code> is invalid. Parameters:\n* %1 - the command name <code>\\Newextarrow</code>"
,NoClosingChar:"This is used in TeX mhchem expressions when a closing delimiters is missing e.g. <code>\\( \\ce{ ->[ } \\)</code>.\n\nParameters:\n* %1 - <code>)</code>, <code>}</code>, or <code>]</code>"
,IllegalControlSequenceName:"This appears when the <code>\\newcommand</code> TeX command is given an illegal control sequence name.\n\nParameters:\n* %1 - <code>\\newcommand</code>"
,IllegalParamNumber:"This appears when the <code>\\newcommand</code> TeX command is given an illegal number of parameters.\n\nParameters:\n* %1 - <code>\\newcommand</code>"
,MissingCS:"This appears when a TeX definitions is not followed by a control sequence e.g. <code>\\let INVALID</code>.\n\nParameters:\n* %1 - may be commands like  <code>\\let</code>, <code>\\def</code>, <code>\\newcommand</code>, <code>\\global</code>, etc."
,CantUseHash2:"This appears when the character '#' is incorrectly used in TeX definitions, e.g. <code>\\def\\mycommand{{red|#}}A</code>.\n\nParameters:\n* %1 - the command used e.g. <code>mycommand</code>"
,SequentialParam:"This appears in TeX definitions when parameters are not numbered sequentially e.g. <code>\\def\\mycommand#2#1</code>.\n\nParameters:\n* %1 - the command name e.g. <code>\\def</code>"
,MissingReplacementString:"This appears in TeX definitions when you don't specify a replacement string e.g. <code>\\def\\mycommand</code>.\n\nParameters:\n* %1 - the command name e.g. <code>\\def</code>"
,MismatchUseDef:"This appears in TeX definitions when a TeX command does not match its definition e.g. <code>\\( \\def\\mycommand[#1]#2[#3]{#1+#2+#3} \\mycommand{a}{b}[c] \\)</code>.\n\nParameters:\n* %1 - the command name e.g. <code>\\mycommand</code>"
,RunawayArgument:"This appears in TeX definitions when a TeX command does not match its definition e.g. <code>\\( \\def\\mycommand[#1][#2]#3{#1+#2+#3} \\mycommand[a]{b} \\)</code>.\n\nParameters:\n* %1 - the command name e.g. <code>\\mycommand</code>"
,NoClosingDelim:"This appears in TeX expressions when a <code>\\verb</code> command is not closed e.g. <code>\\( \\verb?... \\)</code> is missing a closing question mark.\n\nParameters:\n* %1 - the command name"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/qqq/TeX.js");