/*
 *  /MathJax/localization/ja/TeX.js
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

MathJax.Localization.addTranslation("ja","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"開き中括弧が余分、または閉じ中括弧が不足しています",ExtraCloseMissingOpen:"閉じ中括弧が余分、または開き中括弧が不足しています"
,MissingLeftExtraRight:"\\left が不足、または \\right が余分です",MissingScript:"上付きまたは下付きの引数がありません"
,ExtraLeftMissingRight:"\\left が余分、または \\right が不足しています",Misplaced:"%1 の位置が正しくありません"
,MissingOpenForSub:"下付きの開き中括弧がありません",MissingOpenForSup:"上付きの開き中括弧がありません",AmbiguousUseOf
:"%1 の記述が曖昧です",EnvBadEnd:"\\begin{%1} が \\end{%2} で終了しています",EnvMissingEnd:"\\end{%1} が不足しています"
,MissingBoxFor:"%1 のボックスが不足しています",MissingCloseBrace:"閉じ中括弧が不足しています",UndefinedControlSequence
:"未定義のコントロール シーケンス %1",DoubleExponent:"二重の上付き: 中括弧を使用して明確にしてください",DoubleSubscripts
:"二重の下付き: 中括弧を使用して明確にしてください",DoubleExponentPrime:"プライム記号による二重の上付き: 中括弧を使用して明確にしてください"
,CantUseHash1:"数式モードでは「マクロ パラメーター文字 #」は使用できません",MisplacedMiddle:"%1 は \\left と \\right の間に配置してください"
,MisplacedLimits:"%1 は演算子のみに使用できます",MisplacedMoveRoot:"%1 はルート内でのみ使用できます",MultipleCommand
:"%1 が複数あります",IntegerArg:"%1 の引数は整数にしてください",NotMathMLToken:"%1 はトークン要素ではありません",InvalidMathMLAttr
:"無効な MathML 属性: %1",UnknownAttrForElement:"%1 を %2 の属性として認識できません",MaxMacroSub1:"MathJax のマクロ展開回数の上限に達しました。マクロを再帰呼び出ししてしまっていませんか?"
,MaxMacroSub2:"MathJax の展開回数の上限に達しました。LaTeX 環境を再帰呼び出ししてしまっていませんか?",MissingArgFor:"%1 の引数が不足しています"
,ExtraAlignTab:"\\case のテキスト内で、配置用タブが余分です",BracketMustBeDimension:"%1 の中括弧引数は寸法にしてください"
,InvalidEnv:"環境名「%1」は無効です",UnknownEnv:"環境「%1」は不明です",ExtraCloseLooking:"%1 を探索する際に余分な閉じ中括弧が見つかりました"
,MissingCloseBracket:"%1 の引数の閉じ括弧「]」が見つかりませんでした",MissingOrUnrecognizedDelim:"%1 の区切りが不足または未分類です"
,MissingDimOrUnits:"%1 で、寸法またはその単位がありません",TokenNotFoundForCommand:"%2 に対応する %1 が見つかりませんでした"
,MathNotTerminated:"数式がテキスト ボックス内で終了していません",IllegalMacroParam:"マクロ パラメーター参照に誤りがあります"
,MaxBufferSize:"MathJax の内部バッファー サイズの上限に達しました。マクロを再帰呼び出ししてしまっていませんか?",CommandNotAllowedInEnv
:"%1 は %2 環境では使用できません",MultipleLabel:"ラベル「%1」が複数回定義されています",CommandAtTheBeginingOfLine
:"%1 は行頭に配置してください",IllegalAlign:"%1 に指定した引数に誤りがあります",BadMathStyleFor:"%1 の数式のスタイルに誤りがあります"
,PositiveIntegerArg:"%1 の引数は正の整数にしてください",ErroneousNestingEq:"数式の入れ子構造に誤りがあります",MultlineRowsOneCol
:"%1 環境内の各行は 1 列にしてください",MultipleBBoxProperty:"%1 が %2 内で 2 回指定されています",InvalidBBoxProperty
:"「%1」は、色、パディング、スタイルのいずれでもないようです",ExtraEndMissingBegin:"%1 が余分、または \\begingroup が不足しています"
,GlobalNotFollowedBy:"%1 の後に \\let、\\def、\\newcommand のいずれもありません",UndefinedColorModel
:"色モデル「%1」は未定義です",ModelArg1:"色モデル %1 には値が 3 つ必要です",InvalidDecimalNumber:"無効な 10 進数です"
,ModelArg2:"色モデル %1 の値は %2 と %3 の間にしてください",InvalidNumber:"無効な数値です",NewextarrowArg1
:"%1 の第 1 引数はコントロール シーケンス名にしてください",NewextarrowArg2:"%1 の第 2 引数は、カンマで区切った 2 つの整数にしてください"
,NewextarrowArg3:"%1 の第 3 引数は Unicode の文字番号にしてください",NoClosingChar:"閉じ括弧 %1 が見つかりません"
,IllegalControlSequenceName:"%1 に指定できない誤ったコントロール シーケンス名です",IllegalParamNumber:"%1 に指定したパラメーターの個数が誤っています"
,MissingCS:"%1 の後はコントロール シーケンスにしてください",CantUseHash2:"%1 のテンプレート内で # の使用法に誤りがあります"
,SequentialParam:"%1 のパラメーターは連番にしてください",MissingReplacementString:"%1 の定義で置換文字列がありません"
,MismatchUseDef:"%1 の定義と一致していない使用法です",RunawayArgument:"%1 の引数が不足しているようです",NoClosingDelim
:"%1 の終了区切り文字が見つかりません"}}),MathJax.Ajax.loadComplete("[MathJax]/localization/ja/TeX.js"
);