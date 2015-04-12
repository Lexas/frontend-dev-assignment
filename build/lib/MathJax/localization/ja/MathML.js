/*
 *  /MathJax/localization/ja/MathML.js
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

MathJax.Localization.addTranslation("ja","MathML",{version:"2.5.0",isLoaded:!0,strings
:{BadMglyph:"誤った mglyph: %1",BadMglyphFont:"誤ったフォント: %1",MathPlayer:"MathJax は MathPlayer を設定できませんでした。\n\nMathPlayer をインストールしていない場合は、\nまずインストールする必要があります。\nインストールしている場合は、セキュリティの設定で ActiveX\nコントロールの実行を拒否している場合があります。\n[ツール] メニューの [インターネット オプション] で、\n[セキュリティ] タブの [レベルのカスタマイズ] を押してください。\n[Active コントロールの実行] と [バイナリ ビヘイビアーとスクリプト\nビヘイビアー] が有効になっていることを確認してください。\n\n現時点では、数式が組版されず、エラー メッセージが表示されます。"
,CantCreateXMLParser:"MathJax は MathML 用の XML パーサーを作成できませんでした。\n「スクリプトを実行しても安全だとマークされている ActiveX\nコントロールのスクリプトの実行」を有効にしているか確認してください\n([ツール] メニューの [インターネット オプション] を選択し、\n[セキュリティ] タブの [レベルのカスタマイズ] で確認できます)。\n\nMathML の数式を MathML が処理できなくなります。"
,UnknownNodeType:"不明な種類のノード: %1",UnexpectedTextNode:"予期しないテキスト ノード: %1",ErrorParsingMathML
:"MathML の構文解析エラー",ParsingError:"MathML の構文解析エラー: %1",MathMLSingleElement:"MathML は単一の要素で構成してください"
,MathMLRootElement:"MathML は %1 ではなく <math> 要素で構成してください"}}),MathJax.Ajax.loadComplete
("[MathJax]/localization/ja/MathML.js");